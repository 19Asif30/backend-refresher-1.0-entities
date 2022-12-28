import { CannotCreateEntityIdMapError, Column, Entity, ManyToOne } from "typeorm";
import { EntityBase } from "./entityBase";
import { ContentType } from "../../../backendrefresher-1.0-dtos/src/enum/contentType.enum";
import { User } from "./user.entity";
import { UserDto } from "../../../backendrefresher-1.0-dtos/src/dtos/user.dto";


@Entity()

export class Content extends EntityBase {

    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false,
        default: ContentType.POST
    })
    type: string;

    @Column({
        nullable: false
    })
    body: string;

    @Column({
        nullable: false
    })
    imageUrls: string;

    @Column({
        nullable: false
    })
    videoUrl: string;

    @ManyToOne(() => User, user => user.contents)
    user: UserDto;

}