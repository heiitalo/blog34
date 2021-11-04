import { AuthService } from './../service/auth.service';
import { UsuarioLoginDTO } from './../model/UsuarioLoginDTO';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: CredenciaisDTO = new CredenciaisDTO();

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0, 0);
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: CredenciaisDTO) => {
      this.usuarioLogin = resp;
      environment.token = this.usuarioLogin.token;
      environment.id = this.usuarioLogin.idUsuario;
      environment.nome = this.usuarioLogin.nome;
      environment.email = this.usuarioLogin.email;
      environment.tipo = this.usuarioLogin.tipo;
      environment.foto = this.usuarioLogin.foto;

      console.log(environment)
      this.router.navigate(['/inicio']);
    }, erro => {
      if (erro.status == 400) {
        alert("Usuário ou senha inválidos!");
      }
    })
  }

}
