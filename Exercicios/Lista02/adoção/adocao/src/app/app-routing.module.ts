import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { AnimalComponent } from './components/animal/animal.component';

const routes: Routes = [
  {path: "adocao", component: AdocaoComponent},
  {path: "animal/:id", component: AnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
