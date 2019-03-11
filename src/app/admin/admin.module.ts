import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'novo', component: FormComponent },
      { path: 'editar/:id', component: FormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    ListComponent,
    FormComponent
  ],
  providers: []
})
export class AdminModule { }
