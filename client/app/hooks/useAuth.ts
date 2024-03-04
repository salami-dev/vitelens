import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "../services/api/auth";

export const useAuth = () => {
    const info = useQuery({ queryKey: ['isLoggedIn'], queryFn: AuthApi.isLoggedIn })
  const {data, isLoading, error, isError} = info;
  return { data, isLoading, error, isError };
};