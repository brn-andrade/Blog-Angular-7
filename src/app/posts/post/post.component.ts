import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: IPost;

  constructor(private service: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.service.getById(this.route.snapshot.params['id'])
      .subscribe(response => {
        this.post = response;
      });
  }
}
