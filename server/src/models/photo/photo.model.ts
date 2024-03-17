import { AppDataSource } from "./../../connectDB";
import { Photo } from "./Photo";
import { Tag } from "../tag/Tag"
import { User } from "../user/User"

export type PhotoProps = {
    id?: number;
    name: string;
    description: string;
    isPrivate: boolean;
    filename: string;
    uri: string;
    views?: number;
    tags?: Tag[];
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
}
export async function createPhoto(photo: PhotoProps) {
    return AppDataSource.getRepository(Photo).save(photo);
}

export async function getAllPhotos() {
    const photoRepository = AppDataSource.getRepository(Photo);
    return await photoRepository.find();
}

export async function getPhotoById(id: number) {
    const photoRepository = AppDataSource.getRepository(Photo);
    return await photoRepository.findOne({
        where: { id }
    });
}