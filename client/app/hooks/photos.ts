import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PhotoApi } from "@/services/api/photos";
import { PhotoUploadForm } from '@/bl/photos';

export const usePhotos = () => {
    const query = useQuery({
        queryKey: ["photos"],
        queryFn: PhotoApi.getPhotos
    });

    return query;
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

        onSettled: async (data, error) => {
            console.log("upload successful. now lets invalidate the query so that we can get the new data from the server");
            console.log("IS THIS RESPONSE DATA?   lET'S FIND OUT!! ", data);
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["photos"] });
            }
        },
    });
}



export function useGetPhoto(id: string) {
    const query = useQuery({
        queryKey: ['photo', id],
        queryFn: () => PhotoApi.getPhotoByID(id)
    });

    return query;


}