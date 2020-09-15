import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorStarterPage } from './vendor-starter.page';

describe('VendorStarterPage', () => {
  let component: VendorStarterPage;
  let fixture: ComponentFixture<VendorStarterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorStarterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorStarterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
