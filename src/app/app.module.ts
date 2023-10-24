import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from './test/test.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostDetailComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home', component:TestComponent},
      {path:'post/:id', component: PostDetailComponent},
      {path:'addPost', component:AddPostComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
