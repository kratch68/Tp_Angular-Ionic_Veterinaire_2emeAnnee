import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientAnimauxPage } from './client-animaux.page';

describe('ClientAnimauxPage', () => {
  let component: ClientAnimauxPage;
  let fixture: ComponentFixture<ClientAnimauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAnimauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientAnimauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
