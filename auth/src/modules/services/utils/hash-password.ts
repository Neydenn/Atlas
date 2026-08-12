import * as argon2 from 'argon2';

export async function getHashPassword(password: string): Promise<string> {
  return argon2.hash(password);
}

export async function verifyHashPassword(
  password: string,
  userPasswordHash: string,
): Promise<boolean> {
  return argon2.verify(userPasswordHash, password);
}