import {createContext} from 'react';

interface ContextProps {
  isAuthorized: boolean;
  signIn(login: string, password: string): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<ContextProps>({
  isAuthorized: false,
  signIn: () => Promise.resolve(false),
  signOut: () => {},
});

export default AuthContext;
