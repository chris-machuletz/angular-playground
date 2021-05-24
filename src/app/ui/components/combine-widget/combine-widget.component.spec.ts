import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineWidgetComponent } from './combine-widget.component';

describe('CombineWidgetComponent', () => {
  let component: CombineWidgetComponent;
  let fixture: ComponentFixture<CombineWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
