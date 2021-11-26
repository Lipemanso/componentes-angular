import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { InstalacoesComponent } from './instalacoes/instalacoes.component';
import { DetalhesInstalacoesComponent } from './detalhes-instalacoes/detalhes-instalacoes.component';
import {MatButtonModule} from '@angular/material/button';
import { InstallationService } from './shared/service/installation.service';
import { InstallationsIdService } from './shared/service/installations-id.service';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    InstalacoesComponent,
    DetalhesInstalacoesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
 
  ],
  providers: [HttpClientModule, InstallationService,InstallationsIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
