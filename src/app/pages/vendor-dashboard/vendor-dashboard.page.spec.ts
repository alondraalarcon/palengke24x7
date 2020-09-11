import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorDashboardPage } from './vendor-dashboard.page';

describe('VendorDashboardPage', () => {
  let component: VendorDashboardPage;
  let fixture: ComponentFixture<VendorDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
