import {CanActivate, ExecutionContext} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "./servicios/jwt.service";

export class JwtvalidaGuard {

    constructor( private  _reflector:Reflector,
                 private _jwtService:JwtService){}

    canActivate(context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const necesitaValidarse = this._reflector.get('metodoAsegurado',context.getHandler());
        if (necesitaValidarse){
         const request = context
             .switchToHttp()
             .getRequest();
         console.log('request.headers',request.header);
         const jwt=request.header.auth;
         if(jwt){
             return this._jwtService.verificarToken(jwt);
         }else{
            return false
         }
        }else{
            return true
        }
    }
}