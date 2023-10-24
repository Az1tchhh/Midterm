import { Injectable } from '@angular/core';
import {Post, posts} from "./models/Post";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = posts
  constructor() {

  }
  getAllPosts(): Observable<Post[]>{
    return of<Post[]>(this.posts);
  }
}
