

import { Agent, AgentDocument } from 'src/entity/agent';
import { AgentDto } from 'src/dto/agent-dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { validate } from 'class-validator';
import { Model } from 'mongoose';
import { Subject, Observable } from 'rxjs';
import { EtablissementDocument } from 'src/entity/etablissement';
import { ConfigService } from './config.service';

@Injectable()
export class AgentManagementService implements AgentManagement {


    constructor(
        @InjectModel('Agent') private readonly agentModel: Model<AgentDocument>,
        @InjectModel('Etablissement') private readonly etablissementModel: Model<EtablissementDocument>,
        private readonly configServ : ConfigService

    ) {

    }

    addAgent(data: AgentDto): Subject<Agent> {
        let s = new Subject<Agent>();
        validate(data).then(e => {
            if (e && e.length > 0) {
                s.error(new HttpException('bad data', HttpStatus.BAD_REQUEST));
            } else {


                this.configServ.getEtablissement(data.idEtabilissement).subscribe( et=>{
                    let agentToSave  =  data.toEntity();
                    agentToSave.etablissement = et;
                    new this.agentModel(agentToSave).save().then(a => {
                        if (a) {
                            s.next(a);
                            s.complete();
                        } else {
                            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
                        }
                    }).catch(er => {
                        console.log(er);
                        s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
                    })
                }, err =>{
                    console.debug(err);
                    s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
                } )

               
            }

        }).catch(er => {
            console.log(er);
            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
        })
        return s;
    }
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent> {
        throw new Error("Method not implemented.");
    }
    getAgent(id: string): Subject<Agent> {
        let s = new Subject<Agent>();
        this.agentModel.findOne({
            $or: [
                {
                    "_id": id
                },
                {
                    id: id
                }
            ]
        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (!a) {
                s.error(new HttpException('agent not found', HttpStatus.NOT_FOUND))
            } else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
        })
        return s;
    }
    getAgents(): Subject<Agent[]> {
        let s = new Subject<Agent[]>();

        this.agentModel.find().exec().then(a => {
            s.next(a);
            s.complete();
        }).catch(e => {
            console.log(e);
            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
        })
        return s;
    }

    getAgentByUsername(username: string): Subject<Agent> {
        let s = new Subject<Agent>();
        this.agentModel.findOne({
            user : {
                username :username
            }

        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (!a) {
                s.error(new HttpException('agent not found', HttpStatus.NOT_FOUND))
            } else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
        })
        return s;
    }
    getAgentByCode(code: string): Subject<Agent> {
        let s = new Subject<Agent>();
        this.agentModel.findOne({
            code: code
        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (a!) {
                s.error(new HttpException('agent not found', HttpStatus.NOT_FOUND))
            } else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
        })
        return s;
    }


}

export interface AgentManagement {

    addAgent(data: AgentDto): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;

}