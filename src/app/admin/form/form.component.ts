import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostsService } from '../../posts/posts.service';
import { IPost } from '../../posts/models/post.model';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  id_post: number;
  openModalDelete = false;


  constructor(private postService: PostsService,
    private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();

    if (this.route.snapshot.params['id']) {
      this.id_post = this.route.snapshot.params['id'];
      this.getPost();
    }
  }
  upperCase(event) {
    this.form.controls.title
      .setValue(event.target.value.toUpperCase());
  }

  initForm() {
    this.form = this.fb.group({
      id: '',
      title: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(4)]],
      subtitle: ['', [Validators.maxLength(60)]],
      publication_date: '',
      comment: ''
    });
  }

  save(data: IPost) {

    data.publication_date = moment().format('YYYY-MM-DD');
    data.comment = this.formatComment(data.comment);

    this.postService.save(data)
      .subscribe(response => {
        this.router.navigate(['admin']);
      });
  }

  getPost() {
    this.postService.getById(this.id_post)
      .subscribe(response => {
        this.form.patchValue(response);
        const comment = response.comment.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '\n');
        this.form.controls.comment.setValue(comment);

      });
  }

  // Formatação paragrafo
  formatComment(text: string): string {

    let new_comments = '';

    if (text.includes('\n')) {
      const comments = text.split('\n');

      comments.forEach(comment => {
        if (comment) {
          new_comments += `<p>${comment}</p>`;
        }
      });

    } else {
      return `<p>${text}</p>`;
    }
    return new_comments;
  }

  update(data: IPost) {

    data.comment = this.formatComment(data.comment);

    this.postService.update(this.id_post, data)
      .subscribe(response => {
        this.router.navigate(['admin']);
      });
  }
  delete() {
    this.postService.delete(this.id_post)
      .subscribe(() => {
        this.router.navigate(['admin']);
        this.openModalDelete = false;
      });
  }

}

