import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

export interface ToDo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  addTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.url, todo, {
      headers: new HttpHeaders({
        MyCustomHeader: 'Enver',
      }),
    });
  }

  fetchTodos(): Observable<ToDo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    params = params.append('custom', 'Enver');
    return this.http
      .get<ToDo[]>(`${this.url}`, {
        // params: new HttpParams().set('_limit', '7'),
        params,
      })
      .pipe(
        delay(1000),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error('CUSTOM URL ERROR'));
        })
      );
  }
  removeTodo(todo: ToDo): Observable<void> {
    return this.http.delete<void>(`${this.url}/${todo.id}`);
  }

  updateTodo(todo: ToDo) {
    return this.http.put(`${this.url}/${todo.id}`, todo);
  }
}
