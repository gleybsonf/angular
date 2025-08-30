import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/components/header/header.component';
import { SidebarComponent } from '@components/components/sidebar/sidebar.component';
 
import { HttpErrorResponse } from '@angular/common/http';
import { SidebarOptions } from '@components/components/sidebar/sidebar-options';
import { TaskManagementService } from '../task-management/services/task-management.service';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private taskManagementService: TaskManagementService){
    console.log
  }


  protected itemMenuSelected(itemMenu: SidebarOptions):void{
    
  }


  ngOnInit(): void {
    this.taskManagementService.getAllPeople().subscribe({ next: (value)=>{
      console.log("next", value)
    }, 
    error: (error: HttpErrorResponse)=>{
      //console.log("error", error)
    }
  })
  }

}
