import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  posts:Array<any> 

  constructor(private router:Router, private postService: PostService){
    this.posts=postService.postList;
    this.add();
    
  }
  add():void{
    let newPost:Post={
      id:7,
      postTitle:'Dhoni'
    }
    this.postService.addElement(newPost);
  }

  onSubmit(){
    this.router.navigate(['/register'])
    }
  ngOnInit(): void {
    
  }
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
