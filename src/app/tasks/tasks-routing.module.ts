import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: TasksPage
      },
      {
        path: 'task-details',
        loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
      },
      {
        path: 'task-details/:id',
        loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
      }]
  },
  {
    path: 'tasks-logs',
    loadChildren: () => import('./tasks-logs/tasks-logs.module').then( m => m.TasksLogsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
