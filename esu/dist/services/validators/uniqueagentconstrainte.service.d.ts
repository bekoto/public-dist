import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { AgentManagementService } from '../agent-manager-service';
import { ConfigService } from '../config.service';
export declare class UniqueAgentConstrainteService implements ValidatorConstraintInterface {
    private configServ;
    private agentServ;
    constructor(configServ: ConfigService, agentServ: AgentManagementService);
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
    defaultMessage?(validationArguments?: ValidationArguments): string;
}
export declare function UniqueAgent(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
