import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApi, AuthApiTypes } from "../services/api/auth";

export const useAuth = () => {  
  const queryClient = useQueryClient();
  const qr= useQuery<AuthApiTypes.isLoggedInResponse>({ 
      queryKey: ['auth'], 
      queryFn: AuthApi.isLoggedIn,
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
  const {mutate} = useMutation({
    mutationFn: AuthApi.isLoggedIn
  })
  
  const invaidate = ()=>queryClient.invalidateQueries({queryKey: ['auth']});

  return {...qr, mutate, invaidate}
};

