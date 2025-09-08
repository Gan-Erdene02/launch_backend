import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { MenuModule } from './menu/menu.module';
import { ActionModule } from './action/action.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RefSystemLevelModule } from './ref-system-level/ref-system-level.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    RoleModule,
    MenuModule,
    ActionModule,
    AuthModule,
    RefSystemLevelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
