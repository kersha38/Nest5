import {Get, Controller, Post, Body, UseGuards, ReflectMetadata} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioPipe} from "./entitys/usuario.pipe";
import {USUARIO_SCHEMA} from "./entitys/usuario.esquema";
import {JwtvalidaGuard} from "./jwtvalida.guard";

@Controller()
@UseGuards(JwtvalidaGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post('Crear')
  @ReflectMetadata('metodoAsegurado',true)
  //@ReflectMetadata('metodoAsegurado',false)
  crear(@Body(new UsuarioPipe(USUARIO_SCHEMA))
            usuario){
    console.log('Usuario correcto');
    return usuario;

  }
}
