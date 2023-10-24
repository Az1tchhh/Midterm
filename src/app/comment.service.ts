import { Injectable } from '@angular/core';
import {Post, posts} from "./models/Post";
import {Observable, of} from "rxjs";
import {Comment} from "./models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private posts: Post[] = posts;
  constructor() { }

  postComment(postId: number, body: Comment): Observable<Comment>{
    this.posts.forEach(post=>{
      if(post.id == postId){
        post.comments.push(body)
      }
    })
    return of<Comment>(body)
  }
}
