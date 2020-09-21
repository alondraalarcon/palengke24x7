import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorStorePage } from './vendor-store.page';

describe('VendorStorePage', () => {
  let component: VendorStorePage;
  let fixture: ComponentFixture<VendorStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
