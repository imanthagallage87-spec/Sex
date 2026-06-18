export default function handler(req, res) {
    // 🔒 සෙකියුරිටි චෙක්: GET රික්වෙස්ට් (කෙලින්ම URL එක ටයිප් කරලා එන ඒවා) සම්පූර්ණයෙන් බ්ලොක් කිරීම
    if (req.method !== 'POST') {
        return res.status(403).json({ error: "Access Denied. Direct access not allowed." });
    }

    // ෆ්‍රන්ට්එන්ඩ් එකෙන් එවන රහස් ටෝකන් එක චෙක් කිරීම
    const { secureToken } = req.body;
    if (secureToken !== 'Vercel_Secure_X_9921') {
        return res.status(403).json({ error: "Invalid Token. Integrity check failed." });
    }

    // සැබෑ ලින්ක් එක
    const realVideoLink = "https://gofile.io/d/enlGFa";

    // කැචින්ග් බ්ලොක් කිරීම
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    
    // JSON එකක් විදිහට ලින්ක් එක යැවීම (302 රිඩිරෙක්ට් එක වෙනුවට)
    return res.status(200).json({ url: realVideoLink });
}