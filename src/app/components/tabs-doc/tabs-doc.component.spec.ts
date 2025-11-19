import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDocComponent } from './tabs-doc.component';

describe('TabsDocComponent', () => {
  let component: TabsDocComponent;
  let fixture: ComponentFixture<TabsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
