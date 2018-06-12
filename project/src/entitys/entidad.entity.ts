
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {FotoEntity} from "./foto.entity";

@Entity('web_gr2_gutierrez')
export class EntidadEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;


    @Column('int')
    edad: number;

    @OneToMany(
        type => FotoEntity,
        foto=>foto.usuarioId
    )
    fotos:FotoEntity[];
}