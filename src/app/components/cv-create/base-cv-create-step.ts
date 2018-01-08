
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {CvModel} from '../../store/models';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Error} from 'tslint/lib/error';
import {newCvActions} from '../../store/reducers/newCvReducer';


export abstract class BaseCvCreateStep {

  newCv: CvModel;
  form: FormGroup;

  constructor(protected store: Store<AppState>, protected router: Router, protected fb: FormBuilder) {

    store.select('newCv').subscribe((newCv: CvModel) => {
      this.newCv = newCv;
      this.createForm();
    });

  }

  next(url: string ) {
    if ( !this.isValid() ) { return; }
    this.prepareNewCv();
    this.store.dispatch({ type: newCvActions.UPDATE, payload: this.newCv });
    this.router.navigate([url]);
  }

  back(url: string) {
    this.router.navigate([url]);
  }

  // it is needed to be overrided in chield method
  protected createForm() {
    throw new Error();
  }

  protected prepareNewCv() {
    Object.keys(this.form.controls).forEach(key => {
      this.newCv[key] = this.form.get(key).value;
    });
  }

  protected isValid(): boolean {
    return this.form.valid;
  }

}
