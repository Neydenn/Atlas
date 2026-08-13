import { CookieOptions } from 'express';

export const refreshCookieSettings: CookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000,
};
