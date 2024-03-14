import { PhotoUploadFormKeys } from "./enums";


export type PhotoUploadForm = {
    [PhotoUploadFormKeys.name]: string;
    [PhotoUploadFormKeys.description]: string;
    [PhotoUploadFormKeys.filename]: string;
    [PhotoUploadFormKeys.isPrivate]: boolean;
    [PhotoUploadFormKeys.uri]: string;
}


export type PhotoType = {
    id: number;
    name: string;
    description: string;
    isPrivate: boolean;
    filename: string;
    uri: string;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}