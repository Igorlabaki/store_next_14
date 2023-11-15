import { useQuery } from "@tanstack/react-query";
import { UserIncudeCartProductCart } from "@/types";

export default function useUserQuery() {
    const {
        data: userData,
        refetch: refetchUser,
        isError: isUserError,
        isLoading: iseUserLoading
    } = useQuery<UserIncudeCartProductCart>({
        queryKey: ["user"],
    })

  return {
    userData,
    refetchUser,
    isUserError,
    iseUserLoading
  }
}
