import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireComponent } from './gestionnaire.component';

describe('PmComponent', () => {
  let component: GestionnaireComponent;
  let fixture: ComponentFixture<GestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});