/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { ConfigService } from 'src/services/config.service';

@Controller('config')
export class ConfigController {  

    constructor(private readonly configService : ConfigService){

    }

    @Post('etablissements')
    addEtablissement(@Body()data : EtablissementDto){
        console.log(data);
        return this.configService.addEtablissement(data)   ;
    }

    @Post('etablissements')
    getEtablissements(){
        return this.configService.getEtablissements();
    }
}
