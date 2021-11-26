import { Component, OnInit } from '@angular/core';
import { InstallationsIdService } from '../shared/service/installations-id.service';
import { Detalhes } from './detalhes.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-instalacoes',
  templateUrl: './detalhes-instalacoes.component.html',
  styleUrls: ['./detalhes-instalacoes.component.css']
})
export class DetalhesInstalacoesComponent implements OnInit {
  
  randomId: any;

  detalhes: Detalhes = {
    id:1,
    fantasy_name: "teste",
    place: "string",
    location:"string",
    machine:"gstrin",
    image:"string",
  }

  constructor(private serviceId:InstallationsIdService, route: ActivatedRoute) { }


  ngOnInit(): void {
    this.showDetalhes()
  }

showDetalhes(){
  this.serviceId.carregaDetalhes().subscribe((infos:Detalhes) => {
    this.detalhes = infos;
    console.log(infos)
    });

  }
}
