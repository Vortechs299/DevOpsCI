import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialbodyselectComponent } from './celestialbodyselect.component';

describe('CelestialbodyselectComponent', () => {
  let component: CelestialbodyselectComponent;
  let fixture: ComponentFixture<CelestialbodyselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelestialbodyselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelestialbodyselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
