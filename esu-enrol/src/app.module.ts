import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService as EsuConfig } from './services/config.service';
import { ConfigController } from './controller/config.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvPath } from './util/util';
import {EtablissementSchema} from 'src/entity/etablissement';
import {FileSchema} from 'src/entity/file';
import { AgentSchema } from './entity/agent';
import {AgentManagementController} from 'src/controller/agent-management-controller';
import {AgentManagementService} from 'src/services/agent-manager-service';
import {EtablissementValidatorService} from 'src/services/validators/etablissement-constrainte'
const envFilePath: string = getEnvPath(`${__dirname}/`);
@Module({
  imports: [

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => {

        if (conf.get('DATABASE_MUST_AUTH') == 'NO') {
          return ({
            uri: `mongodb://${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`,
            useNewUrlParser: true
          })
        } else {
          console.log(`mongodb://${conf.get('DATABASE_USER')}:${conf.get('DATABASE_PASSWORD')}@${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`)
          return ({
            uri: `mongodb://${conf.get('DATABASE_USER')}:${conf.get('DATABASE_PASSWORD')}@${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`,
            useNewUrlParser: true
          })
        }
      },
      inject: [ConfigService]
    }),
    MongooseModule.forFeature([
     
      { name: "Agent", schema: AgentSchema},
      { name: "Etablissement", schema: EtablissementSchema },
     
      { name: "File", schema: FileSchema }]),
    //MongooseModule.forRoot('mongodb://localhost:27017/m_arch'),
    ConfigModule.forRoot(
      {
        envFilePath: envFilePath, isGlobal: true
      }
    )
  ],
  controllers: [AppController, ConfigController, AgentManagementController],
  providers: [AppService, EsuConfig, AgentManagementService, EtablissementValidatorService],
})
export class AppModule {}
