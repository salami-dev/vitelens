import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo, Tag, User } from "./models"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    applicationName: process.env.APPLICATION_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Tag, Photo],
    migrations: [],
    subscribers: [],
})
