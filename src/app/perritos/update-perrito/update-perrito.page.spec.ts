import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePerritoPage } from './update-perrito.page';

describe('UpdatePerritoPage', () => {
  let component: UpdatePerritoPage;
  let fixture: ComponentFixture<UpdatePerritoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatePerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
