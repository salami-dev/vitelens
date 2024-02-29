import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, Index } from "typeorm"
import { User } from "../user/User"
import { Tag } from "../tag/Tag"

@Entity()
export class Photo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    @Index({ fulltext: true })  // is fulltext indexing wise ?
    description: string

    @Column()
    isPrivate: boolean

    @Column()
    filename: string

    @Column()
    url: string

    @Column("int", { default: 0 })
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
