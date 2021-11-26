import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable , EventEmitter} from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class InstallationService {

    

  constructor(private http:HttpClient){ }

  private url = 'http://localhost:3001/api/installations'
  carregaLista(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
    
  }
   
  }


