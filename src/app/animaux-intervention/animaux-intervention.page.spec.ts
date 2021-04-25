import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimauxInterventionPage } from './animaux-intervention.page';

describe('AnimauxInterventionPage', () => {
  let component: AnimauxInterventionPage;
  let fixture: ComponentFixture<AnimauxInterventionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimauxInterventionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimauxInterventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
