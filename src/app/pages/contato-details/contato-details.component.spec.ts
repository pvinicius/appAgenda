import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetailsComponent } from './contato-details.component';

describe('ContatoDetailsComponent', () => {
  let component: ContatoDetailsComponent;
  let fixture: ComponentFixture<ContatoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
