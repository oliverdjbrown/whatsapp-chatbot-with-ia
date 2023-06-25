import { Request, Response } from "express";
import { httpResponses } from "../enums/http_responses";
import Group from "../models/group.model";


const getGroups = async (req: Request, res: Response) => {
  const groups = await Group.find({});

  res.status(200).json({
    group: groups,
  });
};

const postGroup = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const groupName = await Group.findOne({ name: body?.name });
    if (groupName) {
      return res.status(409).json({ message: httpResponses.status409 });
    }
    const group = new Group(body)
    await group.save();

    res.status(200).json({
      message: "Group saved!",
      group: body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: httpResponses.status500 });
  }  
};

const deleteGroup = async (req: Request, res: Response) => {
 const { name } = req.params;

 try {

   const group = await Group.findOne({ name: name });

   if(!group) {
    return res.status(400).json({ message: httpResponses.status400 });
   }
   
   await Group.findByIdAndDelete({_id: group._id });
   
   res.json({
    message: 'Group deleted!'
   });
  
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: httpResponses.status500 });
 }
};

export { getGroups, postGroup, deleteGroup };