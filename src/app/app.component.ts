import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
