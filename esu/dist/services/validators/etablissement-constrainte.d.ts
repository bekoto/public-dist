import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { ConfigService } from "../config.service";
export declare class EtablissementValidatorService implements ValidatorConstraintInterface {
    configServ: ConfigService;
    constructor(configServ: ConfigService);
    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
    defaultMessage?(validationArguments?: ValidationArguments): string;
}
export declare function EtablissementMustExist(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
