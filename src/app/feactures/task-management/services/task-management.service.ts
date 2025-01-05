import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  urlApi: string = environment.taskConfigurationApiUrl

  constructor( private httpClient: HttpClient) { }

  public getAllTasks():Observable<HttpResponse<ITask[]>>{
    return this.httpClient.get<ITask[]>( `${this.urlApi}/tasks`, { observe: 'response'});
  }


  public deleteTaskByID(taskId: string):Observable<ITask>{
    return this.httpClient.delete<ITask>( `${this.urlApi}/tasks/${taskId}`);
  }

  public completedTask(task: ITask):Observable<ITask>{
    return this.httpClient.delete<ITask>( `${this.urlApi}/tasks/${task}`);
  }  

}
