import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVerEditarComponent } from './formulario-ver-editar.component';

describe('FormularioVerEditarComponent', () => {
  let component: FormularioVerEditarComponent;
  let fixture: ComponentFixture<FormularioVerEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVerEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVerEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
