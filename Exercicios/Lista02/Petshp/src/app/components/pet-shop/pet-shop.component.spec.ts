import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopComponent } from './pet-shop.component';

describe('PetShopComponent', () => {
  let component: PetShopComponent;
  let fixture: ComponentFixture<PetShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetShopComponent]
    });
    fixture = TestBed.createComponent(PetShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
