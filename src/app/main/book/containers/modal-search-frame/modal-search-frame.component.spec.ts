import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSearchFrameComponent } from './modal-search-frame.component';

describe('ModalSearchFrameComponent', () => {
  let component: ModalSearchFrameComponent;
  let fixture: ComponentFixture<ModalSearchFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSearchFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSearchFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
