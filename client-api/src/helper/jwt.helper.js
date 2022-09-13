const jwt = require('jsonwebtoken');

const createaccessjwt=(payload)=>{

    const accessJWT = jwt.sign({ payload}, process.env.JWT_ACCESS_SECRET,{expiresIn:"15m"});

    return Promise.resolve(accessJWT)
    
}

const createRefreshjwt=(payload)=>{

    const RefereshJwt = jwt.sign({ payload}, process.env.JWT_ACCESS_SECRET,{expiresIn:"30d"});

    return Promise.resolve(RefereshJwt)
    
}



module.exports={

    createaccessjwt,
    createRefreshjwt
}

