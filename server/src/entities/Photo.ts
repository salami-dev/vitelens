import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { User } from "./User"
import { Tag } from "./Tag"

@Entity()
export class Photo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column()
    imgURL: string

    @Column("double")
    views: number

    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(
        () => User,
        User => User.photos
    )
    user: User

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];


}
