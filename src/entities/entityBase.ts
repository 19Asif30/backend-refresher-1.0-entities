/* eslint-disable prettier/prettier */
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class EntityBase{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creation: Date = new Date();

    @Column()
    modified: Date = new Date();
}