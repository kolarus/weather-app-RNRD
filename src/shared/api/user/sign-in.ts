import timeout from '../../utils/timeout';

const signIn = async (login: string, password: string): Promise<boolean> => {
  await timeout(3000);
  const isValidCredentials = login === 'admin' && password === 'admin';

  if (isValidCredentials) {
    return isValidCredentials;
  } else {
    throw new Error('Wrong credentials');
  }
};

export default signIn;
