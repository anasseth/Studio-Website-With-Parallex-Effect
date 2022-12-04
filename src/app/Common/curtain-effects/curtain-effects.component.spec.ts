import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainEffectsComponent } from './curtain-effects.component';

describe('CurtainEffectsComponent', () => {
  let component: CurtainEffectsComponent;
  let fixture: ComponentFixture<CurtainEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtainEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
