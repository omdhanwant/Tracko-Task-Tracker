import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Task[];

  constructor(private service: TaskService) {
    this.reload();
   }

  ngOnInit() {
    this.tasks = [];
    this.service.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

  reload() {
    this.ngOnInit();
  }

}
