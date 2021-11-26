import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalhesInstalacoesComponent } from './detalhes-instalacoes/detalhes-instalacoes.component';
import { InstalacoesComponent } from './instalacoes/instalacoes.component';

const routes: Routes = [
   {path:'', component:InstalacoesComponent},
   {path:'instalacoes', component:InstalacoesComponent},
   {path:'detalhes-instalacoes/:id', component: DetalhesInstalacoesComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
