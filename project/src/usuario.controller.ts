import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "./guards/usuario.guard";

@Controller('Usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {
    @Get('mostrar')
    @ReflectMetadata('nombreDato','ValorM')
    @ReflectMetadata('necesitaValidacion','true')
    mostrar() {

        return 'Ok mostrar';

    }
    @Get('crear')
    @ReflectMetadata('nombreDato','ValorC')// Reflector
    @ReflectMetadata('reflectorPermiso','publico')
    crear(){

        return 'Ok crear';

    }

}