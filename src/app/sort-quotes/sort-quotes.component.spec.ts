import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortQuotesComponent } from './sort-quotes.component';

describe('SortQuotesComponent', () => {
  let component: SortQuotesComponent;
  let fixture: ComponentFixture<SortQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
