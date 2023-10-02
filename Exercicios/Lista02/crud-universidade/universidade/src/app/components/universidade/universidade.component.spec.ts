import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadeComponent } from './universidade.component';

describe('UniversidadeComponent', () => {
  let component: UniversidadeComponent;
  let fixture: ComponentFixture<UniversidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversidadeComponent]
    });
    fixture = TestBed.createComponent(UniversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
