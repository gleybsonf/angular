import { Injectable } from '@angular/core';
import { TaskManagementService } from '../services/task-management.service';
import { Observable } from 'rxjs';
import { ITask } from '../interfaces/task.interface';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementFacadeService {

  constructor(private taskManagementService: TaskManagementService) { }

  public getAllTasks(): Observable<HttpResponse<ITask[]>>{
    return  this.taskManagementService.getAllTasks()
  }

  public onDeleteTaskByID(taskId: string): Observable<ITask>{
    return  this.taskManagementService.deleteTaskByID(taskId)
  }

  public onCompletedTask(task: ITask): Observable<ITask>{
    return  this.taskManagementService.completedTask(task)
  }
}
