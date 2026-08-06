import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'Arseniy',
    description: 'Имя пользователя',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'test@mail.ru',
    description: 'уникальный email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'уникальный пароль',
  })
  @IsNotEmpty()
  password: string;
}
