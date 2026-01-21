import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        httpOnly: true, // prevennt XSS attacks, known as cross-site scripting attacks
        sameSites: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: 15 * 24 * 60 * 60 * 1000
    })
}

export default generateTokenAndSetCookie