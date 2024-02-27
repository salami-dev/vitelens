import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Photo } from "./Photo"


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    // @Column()
    // age: number
    
    @Column({
        unique: true

    })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(
        () => Photo,
        Photo => Photo.user
    )
    photos: Photo[]



}
