import {Component, OnInit} from '@angular/core';
import {Post, posts} from "../models/Post";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../comment.service";
import {Comment} from "@angular/compiler";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  posts!: Post[];
  thePost!: Post;
  commentFromUser: string = ""
  postId!:number;
  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private postService: PostService) {
  }
  ngOnInit(){
    this.postService.getAllPosts().subscribe(data=>{
      this.posts = data;
    })
    const routeParams = this.route.snapshot.paramMap;
    this.postId = Number(routeParams.get('id'))

    this.posts.forEach(post => {
      if(post.id == this.postId){
        this.thePost = post;
        return;
      }
    })
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

  postComment(){
    this.commentService.postComment(this.postId, {user:"smbd", comment:this.commentFromUser}).subscribe()

  }
}
