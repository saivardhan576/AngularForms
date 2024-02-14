import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit{
  // objArray: Array<Object>=[
  //     {eid:1,fname:'Sai',age:21},
  //     {eid:2,fname:'Lokesh',age:25},
  //     {eid:3,fname:'Kishore',age:80}
  // ]

  constructor(private route: ActivatedRoute){ 

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      // console.log(value)
      let id=value.get('id');
      const name=value.get('name');
      // const page=value.get('page');
      console.log(id);
      console.log(name);
      // console.log(page);

    });
    // this.route.queryParamMap.subscribe(value => {
    //   let page1 = value.get('page');
    //   let order = value.get('orderBy');
    //   console.log(page1 + " " + order);
    // })

  }

}
