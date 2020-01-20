import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksLogsPageRoutingModule } from './tasks-logs-routing.module';

import { TasksLogsPage } from './tasks-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksLogsPageRoutingModule
  ],
  declarations: [TasksLogsPage]
})
export class TasksLogsPageModule {}
