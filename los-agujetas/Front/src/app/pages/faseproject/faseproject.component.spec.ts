import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseprojectComponent } from './faseproject.component';

describe('FaseprojectComponent', () => {
  let component: FaseprojectComponent;
  let fixture: ComponentFixture<FaseprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaseprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
