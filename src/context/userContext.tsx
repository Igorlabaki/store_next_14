'use client';
import { useSession } from 'next-auth/react';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '@/services/axios';
import { User } from '@prisma/client';

interface UserContextProvider {
  children: ReactNode;
}

interface UserContext {
  user?: User;
  error?: string;
  getUser?: (id: string) => void;
  login?: (email: string) => void;
  updateSession?: (data: { key: string; value: any }) => void;
}

const initialState: UserContext = {};

export const UserContext = createContext<UserContext>(initialState);

export function UserContextProvider({ children }: UserContextProvider) {
  const { data: session, update } = useSession();
  const [user, setUser] = useState<any>(null);

  async function getUser(email: string) {
    try {
      const response = await api.get(`/api/user/getUser?email=${email}`).then((resp) => resp.data);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateSession(data: { key: string; value: any }) {
    await update({
      ...session,
      user: {
        ...session?.user,
        [data.key]: data.value,
      },
    });
  }

  /*   async function updateUser(id: string, data: IUserParams) {
    try {
      const response = await api
        .post(`/api/user/updateUser`, {
          id,
          ...data,
        })
        .then((resp) => resp.data);

      setUser(response);
    } catch (error) {
      console.log(error);
    }
  } */

  useEffect(() => {
    if (session?.user?.email) {
      getUser(session?.user.email);
    }
  }, [session]);

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        updateSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
