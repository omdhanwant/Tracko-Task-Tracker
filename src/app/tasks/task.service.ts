import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private storage: Storage) { }

   async createTask(task: Task) {
    this.storage.set(task.id , task);
    await this.getTasks().then((tasks: Task[]) => {
      if (tasks) {
        const allTasks = [...tasks , task];
        this.storage.set('tasks' , allTasks);
      } else {
        this.storage.set('tasks' , [task]);
      }
    });

    return this.getTaskById(task.id);
  }

  async updateTask(id: string, updatedTask: Task) {
    await this.storage.set(id , updatedTask);
    await this.getTasks().then((tasks: Task[]) => {
      const index = tasks.findIndex(t => t.id === id);
      tasks[index] = updatedTask;
      this.storage.set('tasks' , tasks);
  });
  }

  getTasks() {
   return this.storage.get('tasks');
  }

  getTaskById(id: string) {
   return  this.storage.get(id) as Promise<Task>;
  }

  async deleteTask(id: string) {
    this.storage.remove(id);
    await this.getTasks().then(tasks => {
        const allTasks = tasks.filter(task => task.id !== id);
        this.storage.set('tasks' , allTasks);
    });
  }
}
