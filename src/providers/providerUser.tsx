import { ReactNode } from 'react';
import { queryClient } from '@/services/reactQueryClient';
import { AuthOptions, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserServerAction from '@/serverActions/actions/user/getUserAction';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';


interface UserProviderProps{
    children: ReactNode;
}
  
export default async  function UserProvider({children}:UserProviderProps) {
    const session: any = await getServerSession(authOptions as AuthOptions);

    await queryClient.prefetchQuery({
        queryKey: ["user"],
        queryFn: async ()  => await  getUserServerAction(session.user.id)
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
