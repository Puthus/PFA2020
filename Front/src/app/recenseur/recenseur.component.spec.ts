import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenseurComponent } from './recenseur.component';

describe('UserComponent', () => {
  let component: RecenseurComponent;
  let fixture: ComponentFixture<RecenseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
