import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
    name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {

    transform(todos: Todo[], searchTerme: string): Todo[] {
        if (!searchTerme) {
            return todos;
        }
        const text = searchTerme.toLowerCase();
        return todos.filter(todo => {
            return todo.title.toLowerCase().includes(text);
        })
    }

}
