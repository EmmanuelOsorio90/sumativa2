import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPerritoPage } from './detail-perrito.page';

describe('DetailPerritoPage', () => {
  let component: DetailPerritoPage;
  let fixture: ComponentFixture<DetailPerritoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailPerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
