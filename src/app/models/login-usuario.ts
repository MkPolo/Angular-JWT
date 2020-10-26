import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class LoginUsuario {

    nombreUsuario: string;
    password: string;
    constructor(nombreUsuario: string, password: string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
