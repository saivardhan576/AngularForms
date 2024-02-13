import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  List=[
    {
      'id':1,
      'name':'Sai Vardhan'
    },
    {
      'id':2,
      'name':'Lokesh'
    }
  ]
  
  // objArray: Array<Object>=[
  //   {eid:1,fname:'Sai'},
  //   {eid:2,fname:'Lokesh'},
  //   {eid:3,fname:'Kishore'}
    // students:string[]=['Sai','Lokesh','Kishore'];

}
