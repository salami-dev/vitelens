import { type Request, type Response } from 'express';
import { AppDataSource } from "./../../connectDB";
import { Tag } from './../../models';
import { User } from './../../models';
import { createPhoto, getAllPhotos, getPhotoById } from '../../models/photo/photo.model';
import catchAsync from "../../utils/catchAsync";



type photoReqBody = {
  name: string;
  description: string;
  isPrivate: boolean;
  filename: string;
  uri: string;
  tags: string[];
}

export const httpCreatePhoto = catchAsync(
  async (req: Request, res: Response) => {
    const { name, description, isPrivate, filename, uri, tags: tagIds } = req.body as photoReqBody;
    const userId: string = req.user as string;

    if (!name || !description || !filename || !uri) {
      res.status(400).json({ message: "name, description, filename, uri are required" });
      return;
    }

    // get needed DB repositories (TypeORM specific)
    const userRepository = AppDataSource.getRepository(User);
    const tagRepository = AppDataSource.getRepository(Tag);

    // user needed in photo
    const user = await userRepository.findOne({ where: { id: userId } });


    // find each tag, if it does not exist. create one.
    const tags = await Promise.all(tagIds.map(async (tagName) => {
      let tag = await tagRepository.findOne({ where: { name: tagName } });
      if (!tag) {
        tag = tagRepository.create({ name: tagName });
        tag = await tagRepository.save(tag);
      }
      return tag;
    }));
    const photo = { name, description, isPrivate, filename, uri, user, tags }

    res.status(201).json(await createPhoto(photo));
  }
);

export const httpGetAllPhotos = catchAsync(
  async (req: Request, res: Response) => {
    res.status(200).json(await getAllPhotos());
  }
);

export const httpGetPhotoById = catchAsync(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    res.status(200).json(await getPhotoById(id));
  }
);