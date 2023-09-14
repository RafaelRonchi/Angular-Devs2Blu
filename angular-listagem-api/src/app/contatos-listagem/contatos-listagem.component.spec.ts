import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosListagemComponent } from './contatos-listagem.component';

describe('ContatosListagemComponent', () => {
  let component: ContatosListagemComponent;
  let fixture: ComponentFixture<ContatosListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatosListagemComponent]
    });
    fixture = TestBed.createComponent(ContatosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
