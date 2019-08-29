import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprogressComponent } from './mprogress.component';

describe('MprogressComponent', () => {
  let component: MprogressComponent;
  let fixture: ComponentFixture<MprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
