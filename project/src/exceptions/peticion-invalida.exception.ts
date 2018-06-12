import {HttpException, HttpStatus} from "@nestjs/common";

export class  PeticionInvalidaException extends  HttpException{
    constructor(private _mensaje,
                private  _detalle,
                private _nivelError){
        super({

            //objeto a devolver
            mensaje: _mensaje,
            detalle: _detalle,
            nivelError: _nivelError,
            status: HttpStatus.BAD_REQUEST
        },
            HttpStatus.BAD_REQUEST // status code
        );
    }
}