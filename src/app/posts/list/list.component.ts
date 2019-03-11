import { IPost } from './../models/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: IPost[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
