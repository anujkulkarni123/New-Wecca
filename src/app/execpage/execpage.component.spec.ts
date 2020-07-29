import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecpageComponent } from './execpage.component';

describe('ExecpageComponent', () => {
  let component: ExecpageComponent;
  let fixture: ComponentFixture<ExecpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
