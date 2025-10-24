

const errHandler = (err,req,res,next)=>{
    // log errs..
    res.status(500).json({error : "internal err"});
}

export default errHandler;