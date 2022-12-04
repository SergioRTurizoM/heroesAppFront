import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCollectionComponent } from './heroes-collection.component';

describe('HeroesCollectionComponent', () => {
  let component: HeroesCollectionComponent;
  let fixture: ComponentFixture<HeroesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
