import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'process';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'dinethima',
        signOption: {
          expiresIn: '3d'
        },
      }),
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
