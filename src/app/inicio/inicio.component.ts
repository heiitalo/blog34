import { AuthService } from './../service/auth.service';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  idUser = environment.id
  usuario: Usuario = new Usuario() 

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
    ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.getAllTemas();
    this.getAllPostagens();
    this.auth.refreshToken();
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  getTemaById(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.auth.usuarioById(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar(){
    this.tema.idTema = this.idTema
    this.postagem.temaRelacionado = this.tema

    this.usuario.idUsuario = this.idUser
    this.postagem.criador = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem feita malandragem.')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }

}
