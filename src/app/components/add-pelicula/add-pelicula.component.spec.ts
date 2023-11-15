import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeliculaComponent } from './add-pelicula.component';

describe('AddPeliculaComponent', () => {
  let component: AddPeliculaComponent;
  let fixture: ComponentFixture<AddPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPeliculaComponent]
    });
    fixture = TestBed.createComponent(AddPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
