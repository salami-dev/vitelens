export enum PhotoUploadFormKeys {
    name = 'name',
    description = 'description',
    isPrivate = 'isPrivate',
    filename = 'filename',
    uri = 'uri',
    tags = 'tags'

}

export type PhotoResponse = {
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