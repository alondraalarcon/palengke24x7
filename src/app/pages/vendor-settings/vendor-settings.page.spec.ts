import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorSettingsPage } from './vendor-settings.page';

describe('VendorSettingsPage', () => {
  let component: VendorSettingsPage;
  let fixture: ComponentFixture<VendorSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
