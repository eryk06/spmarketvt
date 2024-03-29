import { TokenExpires } from '@/core/constants';
import { Response } from 'express';

export function SetCookieRFToken(response: Response, encryptId: string) {
  response.cookie('sub', encryptId, {
    maxAge: TokenExpires.redisRefreshToken,
    httpOnly: true,
  });
}
