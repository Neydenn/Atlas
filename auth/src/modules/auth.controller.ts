import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register-dto';
import { AuthService } from './services/auth.service';
import express from 'express';
import { LoginDto } from './dto/login-dto';
import { refreshCookieSettings } from './shared/refresh-cookie-settings';

@Controller('auth')
// @UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserData: RegisterDto,
    @Res({ passthrough: true }) response: express.Response,
  ): Promise<Record<string, string>> {
    const { accessToken, refreshToken } =
      await this.authService.createUser(createUserData);

    response.cookie('token', refreshToken, refreshCookieSettings);

    return {
      token: accessToken,
    };
  }

  @Post('login')
  async login(
    @Body() loginData: LoginDto,
    @Res({ passthrough: true }) response: express.Response,
  ): Promise<Record<string, string>> {
    const { accessToken, refreshToken } =
      await this.authService.login(loginData);

    response.cookie('token', refreshToken, refreshCookieSettings);

    return {
      token: accessToken,
    };
  }

  @Post('refresh')
  public async refresh(
    @Req() req: express.Request,
    @Res({ passthrough: true }) response: express.Response,
  ): Promise<Record<string, string>> {
    const { accessToken, refreshToken } =
      await this.authService.validateToken(req);

    response.cookie('token', refreshToken, refreshCookieSettings);
    return {
      token: accessToken,
    };
  }

  @Post('logout')
  public logout(@Res({ passthrough: true }) response: express.Response) {
    response.clearCookie('refreshToken', { path: '/' });

    return response.status(204).send();
  }
}
