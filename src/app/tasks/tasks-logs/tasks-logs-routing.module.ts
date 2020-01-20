import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksLogsPage } from './tasks-logs.page';

const routes: Routes = [
  {
    path: '',
    component: TasksLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksLogsPageRoutingModule {}
