import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/components/header/header.component';
import { SidebarComponent } from '@components/components/sidebar/sidebar.component';
import { TaskManagementService } from '../feactures/task-management/services/task-management.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private taskManagementService: TaskManagementService){

  }
  ngOnInit(): void {
    this.taskManagementService.getAllPeople().subscribe({ next: (value)=>{
      console.log("next", value)
    }, 
    error: (error: HttpErrorResponse)=>{
      console.log("error", error)
    }
  })
  }

}
