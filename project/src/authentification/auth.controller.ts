import {BadRequestException, Body, Controller, InternalServerErrorException, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";


@Controller('Auth')
export class AuthController {

    constructor(private _jwtService:JwtService){}

    @Post('emitirToken')
    emitirToken(@Body('usuario') usuario,@Body('password') password,) {
        const enviaParametros = usuario && password;
        if (enviaParametros){
            const credencialesValidas= usuario === 'adrianeguez' && password == '1234';
            if (credencialesValidas){
                return {jwt: this._jwtService.emitirToken({usuario:usuario})}
            }else{
                throw  new BadRequestException({mensaje:'credenciales invalidas'});
            }
        }else{
            throw new BadRequestException({mensaje:'No envia parametros'});
        }
    }

    @Post('verificarToken')
    verificarToken(@Body('jwt') jwt){
        const enviaParametros= jwt;
        if(enviaParametros){
            const tokenValido=this._jwtService.verificarToken(jwt);
            return tokenValido;
        }else{
            throw new BadRequestException({mensaje: 'faltanPArametros'})
        }
    }

    @Post('verificarTokenAsync')
    verificarTokenAsync(@Body('jwt') jwt){
        const enviaParametros= jwt;
        if(enviaParametros){
            const tokenValido=this._jwtService.verificarTokenAsync(jwt,(error,resultado)=>{
                if (error){
                    throw new InternalServerErrorException({mensaje:'errorValidando'});
                }else{return resultado;}

            });
            return tokenValido;
        }else{
            throw new BadRequestException({mensaje: 'faltanPArametros'})
        }

    }

}