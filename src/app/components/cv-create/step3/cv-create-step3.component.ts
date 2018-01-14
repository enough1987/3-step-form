import {Component} from '@angular/core';
import {BaseCvCreateStep} from '../base-cv-create-step';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormBuilder, Validators} from '@angular/forms';
import {cvCollectionActions} from '../../../store/reducers/cv-collection-reducer';
import {AppState} from '../../../store/app-store.module';


@Component({
  selector: 'app-create-cv-step3',
  templateUrl: './cv-create-step3.component.html',
  styleUrls: ['./cv-create-step3.component.css']
})
export class CvCreateStep3Component extends BaseCvCreateStep {

  constructor(protected router: Router, protected fb: FormBuilder,
              protected store: Store<AppState>, private storeCollection: Store<AppState> ) {
    super(store, router, fb);
  }

  protected createForm() {
    this.form = this.fb.group({
      wantedPosition: this.fb.group({
        position: [this.newCv.wantedPosition.position, Validators.required ],
        section: [this.newCv.wantedPosition.section, Validators.required ]
      }),
      sex: [this.newCv.sex, Validators.required ]
    });
  }

  finish() {
    if ( !this.isValid() ) { return; }
    this.prepareNewCv();
    this.storeCollection.dispatch({ type: cvCollectionActions.ADD, payload: this.newCv });
    this.router.navigate(['./']);
  }

}
