import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksLogsPageRoutingModule } from './tasks-logs-routing.module';

import { TasksLogsPage } from './tasks-logs.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksLogsPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [TasksLogsPage]
})
export class TasksLogsPageModule {}
