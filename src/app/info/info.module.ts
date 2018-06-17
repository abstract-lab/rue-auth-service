import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';

@Module({
    providers: [],
    controllers: [ InfoController ],
})
export class InfoModule {}