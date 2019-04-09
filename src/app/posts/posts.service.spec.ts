import { TestBed, async, inject } from '@angular/core/testing';
import { PostsService } from './posts.service';

describe('Service: Posts', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService]
    });

    service = TestBed.get(PostsService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
