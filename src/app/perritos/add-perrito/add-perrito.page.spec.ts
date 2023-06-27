import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPerritoPage } from './add-perrito.page';

describe('AddPerritoPage', () => {
  let component: AddPerritoPage;
  let fixture: ComponentFixture<AddPerritoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
