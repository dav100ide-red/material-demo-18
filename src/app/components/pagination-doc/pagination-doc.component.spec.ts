import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDocComponent } from './pagination-doc.component';

describe('PaginationDocComponent', () => {
  let component: PaginationDocComponent;
  let fixture: ComponentFixture<PaginationDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
