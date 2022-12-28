/* eslint-disable prettier/prettier */
import { Column, OneToMany } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Content } from "./content.entity";
import { EntityBase } from "./entityBase";
import { ContentDto } from "../../../backendrefresher-1.0-dtos/src/dtos/content.dto"


@Entity()
export class User extends EntityBase {

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

    @OneToMany(() => Content, content => content.user)
    contents: ContentDto[];



}

