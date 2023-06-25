import { Request, Response } from "express";
import { httpResponses } from "../enums/http_responses";
import User from "../models/user.model";


const getUsers = async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json({
    users,
  });
};

const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const tel = await User.findOne({ tel: body?.tel });
    if (tel) {
      return res.status(409).json({ message: httpResponses.status409 });
    }
    const user = new User(body)
    await user.save();

    res.status(200).json({
      message: "user saved!",
      user: body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: httpResponses.status500 });
  }  
};

const deleteUser = async (req: Request, res: Response) => {
 const { tel } = req.params;

 try {

   const user = await User.findOne({ tel: tel });

   if(!user) {
    return res.status(400).json({ message: httpResponses.status400 });
   }
   
   await User.findByIdAndDelete({_id: user._id });
   
   res.json({
    message: 'User deleted!'
   });
  
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: httpResponses.status500 });
 }
};

export { getUsers, postUser, deleteUser };