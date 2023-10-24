import {Component, OnInit} from '@angular/core';
import {Post, posts} from "../models/Post";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  thePostName:string = ""
  isSuccess!:boolean;
  posts!:Post[];
  ngOnInit(): void {
    this.posts = posts;
    this.isSuccess = false;
  }

  submit(){

    this.posts.push({
      id:this.posts.length+1,
      name:this.thePostName,
      activeLike:false,
      likes:0,
      comments: []
    })
    this.isSuccess = true;
  }

}
