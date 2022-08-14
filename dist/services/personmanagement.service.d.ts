import { Observable, Subject } from 'rxjs';
import { EtudiantDto } from 'src/dto/etudiant-dto';
import { Etudiant } from 'src/entity/etudiant';
export interface PersonManagement {
    addStudent(data: EtudiantDto): Subject<Etudiant>;
    edit(id: string, data: EtudiantDto, doneBy: string): Subject<Etudiant>;
    getStudents(): Observable<Etudiant[]>;
    getStudent(id: string): Subject<Etudiant>;
}
export declare class PersonManagementService implements PersonManagement {
    addStudent(data: EtudiantDto): Subject<Etudiant>;
    edit(id: string, data: EtudiantDto, doneBy: string): Subject<Etudiant>;
    getStudents(): Observable<Etudiant[]>;
    getStudent(id: string): Subject<Etudiant>;
}
