import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpUtilService } from './http-util.service';
import { PostService } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpUtilService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
