import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../shared/service/installation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instalacoes',
  templateUrl: './instalacoes.component.html',
  styleUrls: ['./instalacoes.component.css']
})
export class InstalacoesComponent implements OnInit {
  
  constructor(private service: InstallationService, router: Router) {
    this.showEmpresas();
   }
 
  

  public empresas?: any[];
  public erro:any;
  
  displayedColumns = [ 'Id' , 'nome' , 'tipo'];
  dataSource = this.empresas;
  
  ngOnInit(): void {}

 
  showEmpresas(){
    this.service.carregaLista().subscribe( (data:any) => {
      this.empresas = data.installations;
      console.log(this.empresas);
      console.log(data);
    });
  }
}



