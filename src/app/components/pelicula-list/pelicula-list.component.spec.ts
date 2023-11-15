import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListComponent } from './pelicula-list.component';

describe('PeliculaListComponent', () => {
  let component: PeliculaListComponent;
  let fixture: ComponentFixture<PeliculaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaListComponent]
    });
    fixture = TestBed.createComponent(PeliculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
