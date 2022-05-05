import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebajasComponent } from './rebajas.component';

describe('RebajasComponent', () => {
  let component: RebajasComponent;
  let fixture: ComponentFixture<RebajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
