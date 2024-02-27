import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm"
import { Photo } from "./Photo"


@Entity()
export class Tag extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Photo, (photo) => photo.tags)
    photos: Photo[];

}
