import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './basic/header/header';
import { Main } from './basic/main/main';
import { Footer } from './basic/footer/footer';
import { Popular } from './basic/popular/popular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main, Footer, Popular
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
