import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedComunicacionComponent } from './med-comunicacion.component';

describe('MedComunicacionComponent', () => {
  let component: MedComunicacionComponent;
  let fixture: ComponentFixture<MedComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedComunicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
