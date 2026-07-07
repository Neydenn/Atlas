import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  login(@Body loginDto: LoginDto) {
  }
}