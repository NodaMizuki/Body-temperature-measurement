import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyColorComponent } from './body-color.component';

describe('BodyColorComponent', () => {
  let component: BodyColorComponent;
  let fixture: ComponentFixture<BodyColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
