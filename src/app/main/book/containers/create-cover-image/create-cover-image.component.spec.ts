import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoverImageComponent } from './create-cover-image.component';

describe('CreateCoverImageComponent', () => {
  let component: CreateCoverImageComponent;
  let fixture: ComponentFixture<CreateCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoverImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
