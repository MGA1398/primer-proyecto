import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { BuscadorComponent } from './buscador/buscador.component';


const routes: Routes = [
  {path : 'informacion/:id', component: InformacionComponent},
  {path : 'buscador', component: BuscadorComponent},
  {path : '', component: BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
