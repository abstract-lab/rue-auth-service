import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

@Controller()
export class InfoController {
    @MessagePattern({cmd: 'info'})
    async subscribeInfo(data: any): Promise<string> {
        return `Info from rue-auth-service`;
    }
}