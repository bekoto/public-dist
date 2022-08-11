import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { validate } from 'class-validator';
import mongoose, { Model } from 'mongoose';
import { Subject, Observable } from 'rxjs';
import { CentreDto } from 'src/dto/centre.dto';
import { Centre } from 'src/entity/centre';
import { Etablissement, EtablissementDocument } from 'src/entity/etablissement';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { IConfigService } from './config-protocol';

@Injectable()
export class ConfigService implements IConfigService{

    constructor(@InjectModel('Etablissement') private readonly etablissementModel : Model<EtablissementDocument>){

    }
    addCenter(data: CentreDto): Subject<Centre> {
        throw new Error('Method not implemented.');
    }
    editCenter(idcentre: string, data: CentreDto, doneBy: string): Subject<Centre> {
        throw new Error('Method not implemented.');
    }

    getEtablissementByCode(code: string): Subject<Etablissement> {
        
        let s = new Subject<Etablissement>();

        this.etablissementModel.findOne({
            $or : [
                {
                    "_id" : code
                },
                {
                    id : code
                }
            ]
        }).then( et=>{
            if(!et){
                s.error(new HttpException('etablissement not found', HttpStatus.NOT_FOUND));
            }
            s.next(et);
            s.complete()
        } ).catch(e =>{
            console.log(e);
            s.error(new HttpException('error happened', HttpStatus.INTERNAL_SERVER_ERROR))
        })
        return s;
    }
    
    addEtablissement(data: EtablissementDto): Subject<Etablissement> {
        let s  = new Subject<Etablissement>();
        validate(data).then(e =>{
            if(!e && e.length > 0){
                console.debug(e)
                s.error(new HttpException('Bad data', HttpStatus.BAD_REQUEST))
            }else{

                new this.etablissementModel(data.toEntity()).save().then( et =>{
                    s.next(et);
                    s.complete();
                } ).catch(er =>{
                    console.log(er);
                    s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR))
                });
            }
        }).catch(e =>{
            console.debug("eee",e);
            s.error(new HttpException('Bad data', HttpStatus.BAD_REQUEST))
        })
        return s;
    }
    getEtablissements(): Observable<Etablissement[]> {
       

        return Observable<Etablissement[]>.create( s =>{

            this.etablissementModel.find().populate(['province', 'ville']).exec().then(d =>{
                s.next(d);
                s.complete();
            }).catch(e =>{
                s.error(new HttpException('Error happened', HttpStatus.INTERNAL_SERVER_ERROR));
            })
        } )
       
       

    }
    getEtablissement(code: string): Subject<Etablissement> {
        let s = new Subject<Etablissement>();
        console.log("ccccc", code)
        this.etablissementModel.findOne({
            $or : [
                {
                    "_id" : (code)
                },
                {
                    id : (code)
                }
            ]
        }).then( et=>{
            console.debug("oooo",et);
            if(!et){
                s.error(new HttpException('etablissement not found', HttpStatus.NOT_FOUND));
            }
            s.next(et);
            s.complete()
        } ).catch(e =>{
            console.log(e);
            s.error(new HttpException('error happened', HttpStatus.INTERNAL_SERVER_ERROR))
        })
        return s;
    }
    addFaculte() {
        throw new Error('Method not implemented.');
    }

    
    
 }
