import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './app/registro-user/registro-user.component';

import { LoginComponent } from './app/login-auth/login-auth.component'; 
import { TransaccionesComponent } from './app/transacciones/transacciones.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent},
  { path: 'transacciones', component: TransaccionesComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
});