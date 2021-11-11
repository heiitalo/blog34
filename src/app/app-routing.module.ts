import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaComponent } from './tema/tema.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'temas', component: TemaComponent},
  {path: 'temadelete/:id', component: TemaDeleteComponent},
  {path: 'temaedit/:id', component: EditTemaComponent},
  {path: 'postagemdelete/:id', component: PostagemDeleteComponent},
  {path: 'postagemedit/:id', component: PostagemEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
