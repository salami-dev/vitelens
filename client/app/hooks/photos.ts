import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PhotoApi } from "@/services/api/photos";
import { PhotoUploadForm } from '@/bl/photos';

export const usePhotos = () => {

    async function uploader(payload: PhotoUploadForm) {

        await PhotoApi.createPhoto(payload)

    }

    async function getImages() {
        await PhotoApi.getPhotos();
    }

    return { uploader, data: "hello my negromongas!!!", getImages }
}