import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
    providers: [],
    controllers: [ InfoController ],
    imports: [ SharedModule ]
})
export class InfoModule {}