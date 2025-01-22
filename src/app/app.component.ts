import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagementListComponent } from "./feactures/task-management/pages/task-management-list/task-management-list.component";
import { HomeComponent } from './feactures/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currentAngularVersion';
}
