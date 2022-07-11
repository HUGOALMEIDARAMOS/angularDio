import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SuporteComponent } from './components/suporte/suporte.component';

const routes: Routes = [
  {path: 'sobre', component:SobreComponent},
  {path: '', component:BookstoreAppComponent},
  {path: 'suporte', component:SuporteComponent},
  {path: '**', component:BookstoreAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
