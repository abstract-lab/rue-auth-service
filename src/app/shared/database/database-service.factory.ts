import { ConfigurationService } from "../configuration/configuration.service";
import { DbConfig, ServerConfig } from "orientjs";
import { DatabaseService } from "./database.service";

export const databaseServiceFactory = async(configManager: ConfigurationService) => {
    const config = configManager.getSettings();

    const db_options: DbConfig = {
        name: process.env.DB_DATABASE || config.db.database,
        username: process.env.DB_USERNAME || config.db.username,
        password: process.env.DB_PASSWORD || config.db.password,
    };

    const server_options: ServerConfig = {
        host: process.env.DB_HOST || config.db.host,
        port: process.env.DB_PORT || config.db.port,
    };

    const databaseService = new DatabaseService(db_options, server_options);
    await databaseService.connect();
    return databaseService;
}