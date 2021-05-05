import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAddComponent } from './formulario-add/formulario-add.component';
import { LoginComponent } from './login/login.component';
import { FormularioVerEditarComponent } from './formulario-ver-editar/formulario-ver-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAddComponent,
    LoginComponent,
    FormularioVerEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
