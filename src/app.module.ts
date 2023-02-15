import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { RolesGuard } from './cats/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UsersModule, AuthModule, CatsModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}
