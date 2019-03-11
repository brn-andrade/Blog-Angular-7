import { IPost } from './../../posts/models/post.model';
import { PostsService } from './../../posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: IPost[];
  openModalDelete = false;
  id_post: number;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      });
  }

  openModal(id: number) {
    this.openModalDelete = true;
    this.id_post = id;
  }

  delete() {
    this.postService.delete(this.id_post)
      .subscribe(() => {
        // Apos excluir o post fecha o modal e recarrega a listagem
        this.getAllPosts();
        this.openModalDelete = false;
      });
  }
}
