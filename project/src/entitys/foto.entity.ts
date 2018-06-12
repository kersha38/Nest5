
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {EntidadEntity} from "./entidad.entity";

@Entity('web_gr2_gutierrez_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    usuarioId: number;

    @Column('text')
    description: string;

    @ManyToOne(
        type =>EntidadEntity,
        entidad=>entidad.fotos)
    entidad: EntidadEntity;

}