import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePerritoPage } from './delete-perrito.page';

describe('DeletePerritoPage', () => {
  let component: DeletePerritoPage;
  let fixture: ComponentFixture<DeletePerritoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeletePerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
