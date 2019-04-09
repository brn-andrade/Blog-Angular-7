import { PostsService } from './../../posts/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './../../shared/components/confirmation-modal/confirmation-modal.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let mockService: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        FormComponent,
        ConfirmationModalComponent,
      ],
      providers: [{ provide: PostsService, useValue: mockService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    mockService = jasmine.createSpyObj(['getAll', 'getById', 'delete', 'save',  'update']);
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
