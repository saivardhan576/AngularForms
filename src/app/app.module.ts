import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    DisplayComponent,
    StudentInfoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      // {
      //   path:"post",
      //   component:ReactiveFormComponent
      // },
      // {
      //   path:"register",
      //   component:FormComponent
      // },{
      //   path:'students',
      //   component:DisplayComponent
      // },
      // {
      //   path:'info/:id/:name',
      //   component:StudentInfoComponent
      // }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
