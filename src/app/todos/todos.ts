import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../models/todo.type';
import { catchError } from 'rxjs/operators';
import { TodoItem } from '../components/todo-item/todo-item';


@Component({
    selector: 'app-todos',
    imports: [TodoItem],
    templateUrl: './todos.html',
    styleUrl: './todos.css'
})
export class Todos implements OnInit {
    todoService = inject(TodosService);

    todoItems = signal<Array<Todo>>([]);

    ngOnInit(): void {
        this.todoService.getTodosFromApi()
            .pipe(
                catchError((err) => {
                    console.log(err);
                    throw err;
                }))
            .subscribe((todos) => {
                this.todoItems.set(todos);
            }
            );
    }

    updateTodo(todoItem: Todo) {
        this.todoItems.update((todos) => {
            return todos.map(todo => {
                if (todo.id === todoItem.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
    }
}
