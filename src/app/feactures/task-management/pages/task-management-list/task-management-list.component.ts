import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { CardComponent  } from "../../../../shared/components/card/card.component";
import { TaskManagementFacadeService } from '../../facades/task-management-facade.service';
import { ITask } from '../../interfaces/task.interface';
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-task-management-list',
  imports: [HeaderComponent, TaskItemComponent],
  templateUrl: './task-management-list.component.html',
  styleUrl: './task-management-list.component.scss'
})
export class TaskManagementListComponent implements OnInit, OnDestroy {

  constructor(private taskManagementFacadeService :TaskManagementFacadeService){} 

  taskList: ITask[] = []
 
  private getAllTasks():void{
    this.taskManagementFacadeService.getAllTasks().subscribe({
      next:( httpResponse: HttpResponse<ITask[]>) =>{
        this.getAllTasksSuccess(httpResponse)
      }, error:(error)=>{
        console.log("error", error)
      }
    })
  }

  private getAllTasksSuccess(httpResponse: HttpResponse<ITask[]>):void{
    if( httpResponse.status === 200 /*Criar um enum GLOBAL para colocar os status de sucesso*/){
      this.taskList = httpResponse.body as ITask[];
      console.log("httpResponse" , httpResponse)
      console.log("dataTasks", this.taskList)
    }
    this.taskList = [];
   
  }

  public onDeleteTask(task: ITask):void{    
    this.taskManagementFacadeService.onDeleteTaskByID(task.id).subscribe({
      next:( dataTasks: ITask) =>{         
        console.log("task deletada com sucesso", dataTasks)
      }, error:(error)=>{
        console.log("error", error)
      }
    })
  }

  public onToggleTask(task: ITask):void{
    task.done = !task.done;
    this.taskManagementFacadeService.onCompletedTask(task).subscribe({
      next:( dataTasks: ITask) =>{         
        console.log("task atualizada como concluido com sucesso", dataTasks)
      }, error:(error)=>{
        console.log("error", error)
      }
    })
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }
  
  ngOnInit(): void {
    this. getAllTasks()
  }

}
