import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectsComponent } from './recent-projects.component';

describe('ProjectsComponent', () => {
  let component: RecentProjectsComponent;
  let fixture: ComponentFixture<RecentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
