/* eslint-disable prettier/prettier */
import { Column } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { EntityBase } from "./entityBase";

// eslint-disable-next-line prettier/prettier
@Entity()
export class User extends EntityBase{

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;



}

