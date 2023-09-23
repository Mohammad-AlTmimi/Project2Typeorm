import express,{Request,Response, NextFunction} from 'express'

let register = (req: Request, res: Response, next: NextFunction) => {
    let err: string[] = [];
    if(!req.body.password){
        err.push("Make sure you full your password")
    }
    if(!req.body.email){
        err.push("You should full your email")
    }
    if(err.length){
        res.status(401).send(err);
        return ;
    }
    next()
}


export default register