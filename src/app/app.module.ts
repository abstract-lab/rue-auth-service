import { Module } from '@nestjs/common';
import bonjour from 'bonjour';

import { InfoModule } from './info/info.module';

@Module({
    imports: [ InfoModule ],
})
export class AppModule {
    async onModuleInit() {
        const client = bonjour();

        client.publish({
            name: 'rue-auth-service',
            type: 'rue-service',
            port: 5001,
        });
    }
}