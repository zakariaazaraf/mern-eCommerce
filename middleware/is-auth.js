const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    const authorisationHeader = req.header('Authorization')
    console.log(authorisationHeader)
    if(!authorisationHeader){
        return res.status(401).json({ message: 'Unauthorized, Access Denied', authorisationHeader} );
    }

    try{
        const decodedToken = jwt.verify(authorisationHeader, process.env.JWT_SECRET);
        req.userId = authorisationHeader.user.id;
        next();
    }catch(error){
        res.status(401).json({ message: `Error : ${error}`} );
    }
}