import * as argon2 from 'argon2';

export async function getHashPassword(password: string): Promise<string> {
  return argon2.hash(password);
}
