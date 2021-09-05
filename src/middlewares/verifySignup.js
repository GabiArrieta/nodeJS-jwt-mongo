import {ROLES} from '../models/Role';
import User from '../models/User';

export const checkDuplicateUsernameorEmail = async(req, res, next) => {
    try{
    const user = await User.findOne({username: req.body.username});

    if(user) return res.status(400).json({msg: 'the user already exists'});
    // console.log(req.body.email);

    const email = await User.findOne({email: req.body.email});
    if(email) return res.status(400).json({msg: 'the email already exists'});
    next();
    } catch(err){
        res.status(500).json({message: error});
    }
}

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).json({msg: `Role ${req.body.roles[i]} does not exist`});
            }
        }
    }

    next();
}