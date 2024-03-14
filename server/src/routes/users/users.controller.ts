import { type Request, type Response } from 'express';
import { User } from "./../../models";
import { AppDataSource } from "./../../connectDB";



export const httpCreateUser = async (req: Request, res: Response) => {
  const { email, firstName, lastName, id } = req.body;
  const user = { ... new User(), id, email, firstName, lastName, }
  const userRepository = AppDataSource.getRepository(User);

  try {
    await userRepository.save(user);
    res.status(201).json({ user });
  } catch (error) {
    console.log('error: ', error);
  }
}


export const httpGetAllUsers = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.status(200).json({ users });
}


export const httpGetUserById = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const id = req.params.id.toString();
  const user = await userRepository.findOne({
    where: { id }
  });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.status(200).json({ user });
  }
}

export const httpGetuserByEmail = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const email = req.params.email;
  const user = await userRepository.findOne({
    where: { email }
  });
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.status(200).json({ user });
  }
}

// export const httpGetAllUsers = async (req:Request, res:Response) => {
//   const users = await AppDataSource.manager.find(User);
//   res.status(200).json({ users });
// }

// export const httpGetUserById = async (req:Request, res:Response) => {
//   const { id } = req.params;
//   const user = await AppDataSource.manager.findOne(User, id);
//   if (!user) {
//     res.status(404).json({ message: 'User not found' });
//   } else {
//     res.status(200).json({ user });
//   }
// }