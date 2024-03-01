import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo, Tag, User } from "./models"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "vitelens-dev-db",
    applicationName: "vitelens",
    synchronize: true,
    logging: false,
    entities: [User, Tag, Photo],
    migrations: [],
    subscribers: [],
})
