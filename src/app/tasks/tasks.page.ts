import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {
  tasks: Task[];

  constructor(private service: TaskService) {
    this.reload();
   }

  ionViewWillEnter() {
    this.service.getTasks().then(tasks => {
      this.tasks = [];
      this.tasks = tasks;
    });
  }

  reload() {
    this.ionViewWillEnter();
  }

}
