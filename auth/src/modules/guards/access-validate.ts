import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomJwtService } from '../services/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: CustomJwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token: string | undefined = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return false;
    }

    try {
      await this.jwtService.verifyToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}