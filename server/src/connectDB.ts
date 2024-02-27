import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo, Tag, User } from "./entities"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "vitelens-dev-db",
    synchronize: true,
    logging: false,
    entities: [User, Tag, Photo],
    migrations: [],
    subscribers: [],
})
