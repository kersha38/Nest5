import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.esquema";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";

@Injectable()
export  class UsuarioPipe implements PipeTransform{

    constructor(private schema){}

    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoreselNestjs:
            ArgumentMetadata){

        // read only
        this.schema=USUARIO_SCHEMA;
        const {
            error
        }= Joi.validate(
            valorEnBrutoDelRequest,
            this.schema
        );

        if(error){
            // devuelve bad request statuscode:400
            throw  new PeticionInvalidaException(
                'Peticion Invalida',
                error,
                4);
            //throw new BadRequestException(error);
        }
        return valorEnBrutoDelRequest;
    }

}