import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTachesComponent } from './all-taches.component';

describe('AllTachesComponent', () => {
  let component: AllTachesComponent;
  let fixture: ComponentFixture<AllTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
