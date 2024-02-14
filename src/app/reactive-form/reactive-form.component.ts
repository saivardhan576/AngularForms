import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form', 
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  form: any
  constructor(){
    this.form=new FormGroup({
      fullName:new FormControl('',
      [
        Validators.required,
        // Validators.minLength(5),
        // Validators.maxLength(10),
        // Validators.pattern("^[a-zA-Z].{5,10}$")   (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
          Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]),
      email:new FormControl('',
      [
        Validators.email
      ]),
      address:new FormControl('',[
        Validators.required
      ])
  });
  }
  ngOnInit(): void {
    // const obsTest$=new Observable(observer=>{
    //   console.log('Printed from observable');
    // }).subscribe();
    const obsTest$=new Observable(observer=>{
      observer.next('Return from observable');
      observer.next('This is second return from observable');
      setTimeout(()=>{
        observer.next('This is Timeout Function');
      },2000);
      observer.next('This is 3rd return');
    }).subscribe(value=>{
      console.log(value);
    });

    const obsTest=function(){
      console.log("Printed from function");
    }
    obsTest();

    // obsTest$.unsubscribe();
  }

  get fullName(){
    return this.form.get("fullName");
  }
  get email(){
    return this.form.get("email");
  }
  get address(){
    return this.form.get("address");
  }

}
