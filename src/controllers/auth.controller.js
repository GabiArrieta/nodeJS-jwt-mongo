import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const signUp = async(req,res) => {

const {username, email, password, roles} = req.body;

const newUser =  new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
if(roles){
    const foundRoles = await Role.find({name: {$in: roles}});
    newUser.roles = foundRoles.map(role => role._id);
} else {
    const role = await Role.findOne({name: "user"});
    newUser.roles = [role._id];
}
const saveUser = await newUser.save();
//console.log(saveUser);
const token = jwt.sign({id: saveUser._id}, config.SECRET, {
    expiresIn: 86400 //24 hs
});
res.status(200).json({token});
}

export const signIn = async(req,res) => {
    const user = await User.findOne({email: req.body.email}).populate("roles");
    if(!user) return res.status(400).json({msg: "user not found"});

    const matchPassword = await User.comparePassword(req.body.password, user.password);
    //console.log(user);
    if(!matchPassword) return res.status(401).json({token: null, message: 'invalid password'})

    const token = jwt.sign({id: user._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token});
}