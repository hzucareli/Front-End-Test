import { Component, OnInit } from '@angular/core';

// import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  private ListaPosts: any;

  constructor(private _postService: PostService) {
    this._postService.getAll()
    .subscribe(posts => this.ListaPosts = posts);
  }

  ngOnInit() {
  }

}
