import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
import { Agent } from "src/entity/agent";
import { Centre } from "src/entity/centre";
import { Etablissement } from "src/entity/etablissement";
import { EtablissementMustExist } from "src/services/validators/etablissement-constrainte";
import { EntityTransformer } from "src/util/entity_transformer";

import { User } from 'src/model/user';

export class AgentDto implements EntityTransformer<Agent>{

    id: string;
    @IsNotEmpty()
    nom: string;
    @IsNotEmpty()
    prenom: string;
    @IsNotEmpty()
    dateNaissance: number;

    code:string;
    //@IsNotEmpty()

    idCentre: string;
    //@EtablissementMustExist()
    idEtabilissement: string;
    username: string;

    toEntity(): Agent {
        let a = new Agent();
        a.nom = this.nom;
        a.penom = this.prenom;
        a.code = this.code;
        if (this.idCentre) {
            let c = new Centre();
            c.id = new mongoose.Types.ObjectId(this.idCentre);
            a.centre = c;
        }
        let et = new Etablissement();
        et.id = new mongoose.Schema.Types.ObjectId(this.idEtabilissement);
        a.etablissement = et;
        a.dateNaissance = new Date(this.dateNaissance);
        let u = new User();
        u.username = this.username;
        a.user = u;
        return a;
    }
}