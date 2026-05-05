const authMiddleware=(req,res,next) => {
    const auth=req.headers["authorization"];

    if(auth==="admin123"){
        next();
    }else{
        res.status(403).send("403 Access Denied");
    }
};

module.exports = authMiddleware;