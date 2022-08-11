import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ConfigService } from "../config.service";



@Injectable()
@ValidatorConstraint({ name: 'EtablissementExist', async: true })
export class EtablissementValidatorService implements ValidatorConstraintInterface { 
    

    constructor(public configServ : ConfigService){
       
    }
    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
       
        if(value == null){
            return false;
        }
        
        if(value == null ||value.length == 0){
            
            return false;
        }
        let v = validationArguments.object as any;
        
       return this.configServ.getEtablissement(value).toPromise().then(d =>{
            if(d){
                return true;
            }
            false;
        }).catch(  e=>{
           
            return false;
        });
        

        
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
       return "Etablissement not found";
    }
 }

 
export function EtablissementMustExist(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
      registerDecorator({
        name: 'EtablissementExist',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        validator: EtablissementValidatorService,
      });
    };
  }