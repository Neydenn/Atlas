import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dto/register-dto';

@Injectable()
export class JwtStrategy {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(userData: RegisterDto) {
    // const payload = {
    //   sub:
    // }
  }
}