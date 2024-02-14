import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList:Array<any>=[
    {id:1, postTitle:'post1'},
    {id:2, postTitle:'post2'},
    {id:3, postTitle:'post3'},
    {id:4, postTitle:'post4'}
  ];
  addElement(data:any){
    this.postList.push(data);
  }

  constructor() { }
}
