import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Todos } from "./todos/todos";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Todos],
    template: `
    <app-header/>
    <main>
        <router-outlet/>
    </main>
    <app-todos/>
  `,
    styles: [`
    main{
        padding: 16px;
    }
    `],
})
export class App {
    protected title = 'first-app';
}
