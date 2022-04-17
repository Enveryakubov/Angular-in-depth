import { Component, OnInit } from '@angular/core';
import { ToDo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: ToDo[] = [];
  loading: boolean = false;
  todoTitle = '';
  error = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe((res) => (this.todos = res));
  }
  addTodo() {
    if (!this.todoTitle.trim()) return;

    let newTodo: ToDo = {
      title: this.todoTitle,
      completed: false,
    };
    this.todosService.addTodo(newTodo).subscribe((res) => {
      this.todos.unshift(res);
      this.todoTitle = '';
    });
  }
  removeTodo(todo: ToDo) {
    if (todo.id) {
      this.todosService
        .removeTodo(todo)
        .subscribe(
          (res) => (this.todos = this.todos.filter((t) => t.id !== todo.id))
        );
    }
  }
  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos().subscribe(
      (res) => {
        this.todos = res;
        this.loading = false;
      },
      (err) => (this.error = err.message)
    );
  }

  completeTodo(todo: ToDo) {
    const updatedTodo = { ...todo, completed: true };
    this.todosService.updateTodo(updatedTodo).subscribe((res) => {
      this.todos.find((t) => t.id === todo.id)!.completed = true;
    });
  }
}
