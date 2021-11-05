import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>('https://backend34.herokuapp.com/api/v1/usuario/credenciais', credenciais)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    // return this.http.post<Usuario>('https://backend34.herokuapp.com/api/v1/usuario/salvar', usuario)
    return this.http.post<Usuario>('https://projetinhoblogpessoal.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado(){
    let ok: boolean = false;

    if (environment.token != ''){
      ok = true
    }
    return ok
  }
}
