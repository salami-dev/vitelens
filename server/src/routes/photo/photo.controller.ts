import { type Request, type Response } from 'express';
import { Photo } from "./../../models";
import { createPhoto,getAllPhotos, getPhotoById } from '../../models/photo/photo.model';
import catchAsync from "../../utils/catchAsync";




export const httpCreatePhoto = catchAsync(
  async (req:Request, res:Response) => {
    const { name, description, isPrivate, filename, url} = req.body as Photo;
    const photo = {name, description, isPrivate, filename, url}

    res.status(201).json(await createPhoto(photo));
  }  
);

export const httpGetAllPhotos = catchAsync(
  async (req:Request, res:Response) => {
    res.status(200).json( await getAllPhotos());
  }
);

export const httpGetPhotoById = catchAsync(
  async (req:Request, res:Response) => {
    const id  = Number(req.params.id);
    res.status(200).json( await getPhotoById(id));
  }
);