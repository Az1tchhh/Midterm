import {Component, OnInit} from '@angular/core';
import {Post, posts} from "../models/Post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  posts!: Post[];
  constructor(private postService: PostService) {
  }
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data=>{
      this.posts = data;
    })
    console.log(this.posts)
  }

  putLike(postId: number){
    this.posts.forEach(post=>{
      if (post.id == postId){
        if (post.activeLike){
          post.likes-=1;
        }
        else{
          post.likes+=1;
        }
        post.activeLike = !post.activeLike
        return;
      }
    })
  }
}
