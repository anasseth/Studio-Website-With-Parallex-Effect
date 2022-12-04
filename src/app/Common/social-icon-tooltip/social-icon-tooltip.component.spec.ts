import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconTooltipComponent } from './social-icon-tooltip.component';

describe('SocialIconTooltipComponent', () => {
  let component: SocialIconTooltipComponent;
  let fixture: ComponentFixture<SocialIconTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialIconTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
