import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './service-modules/bookmark-manager/component/category/category-create/category-create.component';

const routes: Routes = [

  {
    path: "add-bookmark",
    component: CategoryCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
