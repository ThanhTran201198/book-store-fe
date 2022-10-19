import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookAuthorComponent } from './create-book-author.component';

describe('CreateBookAuthorComponent', () => {
  let component: CreateBookAuthorComponent;
  let fixture: ComponentFixture<CreateBookAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
