import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({success: false,message: 'Unauthorized! Login to continue'});
    }
    try{
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();
    } catch (error){
        console.log(error);
        return res.status(401).json({success: false,message: 'Unauthorized! Login to continue'});
    }
}

export default authMiddleware;