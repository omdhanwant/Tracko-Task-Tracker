import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task, Status } from '../model/task';
import { v4 as uuid } from 'uuid';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss']
})
export class TaskDetailsPage implements OnInit {
  heading: string;
  name: string;
  description: string;
  startTime: number;
  endTime: number;
  createdAt: string;
  paramId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TaskService,
    public alertController: AlertController,
    private route: Router
  ) {
    this.paramId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getTaskIfEdit();
  }

  async getTaskIfEdit() {
    if (this.paramId) {
      await this.service.getTaskById(this.paramId).then((task: Task) => {
        this.heading = task.name;
        this.name = task.name;
        this.description = task.description;
        this.startTime = task.startTime;
        this.endTime = task.endTime;
        this.createdAt = task.createdAt;
      });
    }
  }

  start() {
    this.startTime = new Date().getTime();
    this.updateTask('Task Started!');
  }

  end() {
    this.endTime = new Date().getTime();
    this.updateTask('Task Ended!');
  }

  save() {
    if (!this.name || !this.description) {
      this.presentFailAlert('Please enter task details');
    } else {
      if (!this.paramId) {
        this.createTask();
      } else {
        this.updateTask('Task updated');
      }
    }
  }

  updateTask(alertMessage) {
    // Edit mode
    const updateTask: Task = {
      id: this.paramId,
      name: this.name,
      description: this.description,
      startTime: this.startTime,
      endTime: this.endTime,
      status: this.endTime ? Status.COMPLETED : this.startTime ? Status.IN_PROGRESS : Status.TO_DO,
      createdAt: this.createdAt,
      deletedAt: null
    };
    this.service.updateTask(this.paramId, updateTask).then(() => {
      this.presentSuccessAlert(alertMessage);
    });
  }

  createTask() {
    const newtask: Task = {
      id: uuid(),
      name: this.name,
      description: this.description,
      startTime: null,
      endTime: null,
      status: Status.TO_DO,
      createdAt: new Date().toString(),
      deletedAt: null
    };
    this.service.createTask(newtask).then(task => {
      this.presentSuccessAlert(task.name + ' task successfully created');
    });
  }

  delete() {
    this.presentDeleteAlert('Are you sure you want to delete this task?');
  }

  async presentDeleteAlert(showMessage) {
    const alert = await this.alertController.create({
      header: 'Delete Alert',
      message: showMessage,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.service.deleteTask(this.paramId).then(() => {
              this.route.navigate(['/tasks']);
            });
          }
        },
        {
          text: 'No'
        }
      ]
    });

    await alert.present();
  }

  async presentSuccessAlert(showMessage) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: showMessage,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.route.navigate(['/tasks']);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentFailAlert(showMessage) {
    const alert = await this.alertController.create({
      header: 'Failure',
      message: showMessage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
