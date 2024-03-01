import { AppDataSource } from "./../../connectDB";
import { Photo } from "./Photo";

export type PhotoProps = {
    id?: number;
    name: string;
    description: string;
    isPrivate: boolean;
    filename: string;
    url: string;
    views?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export async function createPhoto(photo:PhotoProps) {
    const photoRepository = AppDataSource.getRepository(Photo);
    return await photoRepository.save(photo);  
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