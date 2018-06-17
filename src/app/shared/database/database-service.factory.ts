import { ConfigurationService } from "../configuration/configuration.service";
import { DatabaseService } from "./database.service";

export const databaseServiceFactory = async(configManager: ConfigurationService) => {
    const config = configManager.getSettings();

    const options: any = {
        name: process.env.DB_DATABASE || config.db.database,
        username: process.env.DB_USERNAME || config.db.username,
        password: process.env.DB_PASSWORD || config.db.password,
        host: process.env.DB_HOST || config.db.host,
        port: process.env.DB_PORT || config.db.port,
    };

    const databaseService = new DatabaseService(options);
    await databaseService.connect();
    await databaseService.init();
    return databaseService;
}