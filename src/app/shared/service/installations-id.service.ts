import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Detalhes } from 'src/app/detalhes-instalacoes/detalhes.model';


@Injectable({
  providedIn: 'root'
})
export class InstallationsIdService {

  constructor(private http:HttpClient){ }

  private url = `http://localhost:3001/api/installation/0`
  carregaDetalhes(){
    return this.http.get<Detalhes>(this.url);
    
  }
   
  }