import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleUrl: string;

  constructor(private http: HttpClient) {
    this.articleUrl = 'http://localhost:8080/users';
   }

  public findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }
}
