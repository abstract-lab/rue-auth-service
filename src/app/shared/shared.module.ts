import { Module } from '@nestjs/common';

import { ConfigurationService } from './configuration/configuration.service';
import { configurationServiceFactory } from './configuration/configuration-service.factory';
import { DatabaseService } from './database/database.service';
import { databaseServiceFactory } from './database/database-service.factory';

@Module({
    providers: [
        {
            provide: ConfigurationService,
            useFactory: configurationServiceFactory,
        }, {
            provide: DatabaseService,
            useFactory: databaseServiceFactory,
            inject: [ConfigurationService]
        }
    ],
    exports: [
        ConfigurationService,
        DatabaseService,
    ],
})
export class SharedModule {}