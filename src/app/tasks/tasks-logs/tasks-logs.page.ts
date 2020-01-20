import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-logs',
  templateUrl: './tasks-logs.page.html',
  styleUrls: ['./tasks-logs.page.scss'],
})
export class TasksLogsPage implements OnInit {
  tasks: Task[];
  constructor(private service: TaskService) { }

  ngOnInit() {
    this.tasks = [];
    this.service.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

}
