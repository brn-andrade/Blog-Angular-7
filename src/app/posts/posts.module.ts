import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: '', component: ListComponent },
      { path: ':id', component: PostComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ],
  declarations: [
    PostsComponent,
    ListComponent,
    PostComponent
  ]
})
export class PostsModule {}
