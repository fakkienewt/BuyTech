import { Component } from '@angular/core';
import { Popular } from '../popular/popular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [Popular, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
