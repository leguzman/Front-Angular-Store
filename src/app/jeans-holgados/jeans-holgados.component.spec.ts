import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansHolgadosComponent } from './jeans-holgados.component';

describe('JeansHolgadosComponent', () => {
  let component: JeansHolgadosComponent;
  let fixture: ComponentFixture<JeansHolgadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansHolgadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansHolgadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
