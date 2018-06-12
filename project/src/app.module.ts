import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioController} from "./usuario.controller";
import {AuthController} from "./authentification/auth.controller";
import {JwtService} from "./servicios/jwt.service";

@Module({
  // imports: [TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'web2018agr2.mysql.database.azure.com',
  //     port: 3306,
  //     username: 'profesor@web2018agr2',
  //     password: 'Javascript1',
  //     database: 'web',
  //     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //     synchronize: true,
  // })],
     imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'web',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    }),],
  controllers: [AppController,UsuarioController,AuthController],
  providers: [AppService,JwtService],
})
export class AppModule {}
