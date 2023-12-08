import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBecaComponent } from './tipo-beca.component';

describe('TipoBecaComponent', () => {
  let component: TipoBecaComponent;
  let fixture: ComponentFixture<TipoBecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
