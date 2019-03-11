import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { FirstParagraphPipe } from './pipes/first-paragraph.pipe';
import { PostsService } from './../posts/posts.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FirstParagraphPipe,
    ConfirmationModalComponent
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FirstParagraphPipe,
    ConfirmationModalComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PostsService
      ]
    };
  }
}
