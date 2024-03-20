import { PhotoUploadFormKeys } from "./enums";
import { AppUser } from "../user";

export type PhotoUploadForm = {
    [PhotoUploadFormKeys.name]: string;
    [PhotoUploadFormKeys.description]: string;
    [PhotoUploadFormKeys.filename]: string;
    [PhotoUploadFormKeys.isPrivate]: boolean;
    [PhotoUploadFormKeys.uri]: string;
    [PhotoUploadFormKeys.tags]: string[];
}


export type PhotoType = {
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    filename: string;
    uri: string;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

export type PhotoResposeType = PhotoType & {
    tags: string[];
    user: AppUser;
}

export type PhotoAPIResponse = PhotoType;

