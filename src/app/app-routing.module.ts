import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentInfoComponent } from './student-info/student-info.component';

const routes: Routes = [
  {
    path:"post",
    component:ReactiveFormComponent
  },
  {
    path:"register",
    component:FormComponent
  },{
    path:'students',
    component:DisplayComponent
  },
  {
    path:'info/:id/:name',
    component:StudentInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
