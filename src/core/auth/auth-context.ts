import {createContext} from 'react';

interface AuthContext {
  isAuthorized: boolean;
  signIn(login: string, password: string): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContext>({
  isAuthorized: false,
  signIn: () => Promise.resolve(false),
  signOut: () => {},
});

export default AuthContext;
