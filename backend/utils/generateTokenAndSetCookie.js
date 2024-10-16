import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: "7d",
    })

    res.co0kie("token", token, {
        httpOnly: true, 
        secure:  process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return token;
}