import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorEditAccountPage } from './vendor-edit-account.page';

describe('VendorEditAccountPage', () => {
  let component: VendorEditAccountPage;
  let fixture: ComponentFixture<VendorEditAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorEditAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorEditAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
