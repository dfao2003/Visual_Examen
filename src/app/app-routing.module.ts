import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path:"paginas/inicio", component: InicioComponent},
  {path:"paginas/recarga", component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
