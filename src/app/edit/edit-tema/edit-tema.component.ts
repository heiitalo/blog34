import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-edit-tema',
  templateUrl: './edit-tema.component.html',
  styleUrls: ['./edit-tema.component.css']
})
export class EditTemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getTemaById(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  editarTema(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Ai sim, tema alterado')
      this.router.navigate(['/temas'])
    })
  }

}
