import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterDto } from './dto/register-dto';
import { AuthService } from './services/auth.service';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserData: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const { accessToken, refreshToken } =
      await this.authService.createUser(createUserData);

    response.cookie('token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return accessToken;
  }
}
