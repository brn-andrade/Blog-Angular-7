import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { IPost } from './models/post.model';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.api}/posts`);
  }

  getById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${environment.api}/posts/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/posts/${id}`);
  }

  save(data: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${environment.api}/posts`, data);
  }

  update(id: number, data: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${environment.api}/posts/${id}`, data);
  }
}
