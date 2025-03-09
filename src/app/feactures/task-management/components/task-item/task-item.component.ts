import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';
 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
 

  @Input() task!: ITask
  @Output() onDeleteTaskEmit = new EventEmitter<ITask>()
  @Output() onToggleTaskEmit = new EventEmitter<ITask>()

  constructor(){

  }
  ngOnInit(): void {}

  public onDeleteTask(task: ITask):void{
    this.onDeleteTaskEmit.emit(task)
  }

  public onToggle(task: ITask):void{
    this.onToggleTaskEmit.emit(task)
  }

}
