import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api';

interface AuthState {
  user: object;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface SignInCredentials {
  username: string;
}

interface AuthContextData {
  user: object;
  signIn(username: string): Promise<any>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    return {} as AuthState;
  });

  const signIn = useCallback(async (username: string) => {
    const response = await api.get(username);

    setData(response.data);
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider!');
  }

  return context;
}
