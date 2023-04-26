import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningobjectComponent } from './spinningobject.component';

describe('SpinningobjectComponent', () => {
  let component: SpinningobjectComponent;
  let fixture: ComponentFixture<SpinningobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinningobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinningobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
