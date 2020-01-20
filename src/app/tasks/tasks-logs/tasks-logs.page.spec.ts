import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksLogsPage } from './tasks-logs.page';

describe('TasksLogsPage', () => {
  let component: TasksLogsPage;
  let fixture: ComponentFixture<TasksLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksLogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
