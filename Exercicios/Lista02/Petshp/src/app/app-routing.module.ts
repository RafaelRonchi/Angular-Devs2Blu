import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetShopComponent } from './components/pet-shop/pet-shop.component';

const routes: Routes = [
  {path: "pet", component: PetShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
