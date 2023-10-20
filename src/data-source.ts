import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3432,
    username: "admin",
    password: "admin",
    database: "notas",
    synchronize: false,
    logging: true,
    entities: ["src/entity/*.ts"],
    migrations: ['src/migration/*.{js,ts}'],
    subscribers: [],
})
