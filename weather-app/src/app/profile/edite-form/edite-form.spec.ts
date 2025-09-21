import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeForm } from './edite-form';

describe('EditeForm', () => {
  let component: EditeForm;
  let fixture: ComponentFixture<EditeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
