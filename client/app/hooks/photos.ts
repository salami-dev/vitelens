import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PhotoApi } from "@/services/api/photos";
import { PhotoUploadForm } from '@/bl/photos';

export const usePhotos = () => {
    const query = useQuery({
        queryKey: ["photos"],
        queryFn: PhotoApi.getPhotos
    });

    async function getImages() {
        await PhotoApi.getPhotos();
    }

    return { data: "hello my negromongas!!!", getImages }
}


export function useCreatePhoto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: PhotoUploadForm) => PhotoApi.createPhoto(data),
        onMutate: () => {
            console.log("mutate");
        },

        onError: () => {
            console.log("error while uploading to DB");
        },

        onSuccess: () => {
            console.log("success created image photo");
        },

        onSettled: async (_, error) => {
            console.log("upload successful. now lets invalidate the query so that we can get the new data from the server");
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["photos"] });
            }
        },
    });
}