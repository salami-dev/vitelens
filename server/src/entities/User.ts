import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import {
    IsEmail,
} from "class-validator"
// import { AppDataSource } from "../connectDB"
import { Photo } from "./Photo"


@Entity()
export class User extends BaseEntity {

    @PrimaryColumn({
        unique: true
    })
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column({
        unique: true
    })
    @IsEmail()
    email: string

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

// export const userRepository = AppDataSource.getRepository(User);
