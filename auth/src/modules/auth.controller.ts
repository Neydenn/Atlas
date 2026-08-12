import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register-dto';
import { AuthService } from './services/auth.service';
import type { Response, Request } from 'express';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
// @UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserData: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Record<string, string>> {
    const { accessToken, refreshToken } =
      await this.authService.createUser(createUserData);

    response.cookie('token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return {
      token: accessToken,
    };
  }

  @Post('login')
  async login(
    @Body() loginData: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Record<string, string>> {
    const { accessToken, refreshToken } =
      await this.authService.login(loginData);

    response.cookie('token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return {
      token: accessToken,
    };
  }

  @Post('refresh')
  public refresh(@Req() req: Request) {
    const refreshToken = req.cookies?.token;
  }
}
