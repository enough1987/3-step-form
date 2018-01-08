import {Component} from '@angular/core';
import {BaseCvCreateStep} from '../base-cv-create-step';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.store';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-cv-step1',
  templateUrl: './cv-create-step1.component.html',
  styleUrls: ['./cv-create-step1.component.css']
})
export class CvCreateStep1Component extends BaseCvCreateStep {

  constructor(protected store: Store<AppState>, protected router: Router, protected fb: FormBuilder) {
    super(store, router, fb);
  }

  protected createForm() {
    this.form = this.fb.group({
      city: [this.newCv.city, Validators.required ],
      phone: [this.newCv.phone, Validators.required ],
      birthday: this.fb.group({
        day: [this.newCv.birthday.day, Validators.required ],
        month: [this.newCv.birthday.month, Validators.required ],
        year: [this.newCv.birthday.year, Validators.required ]
      }),
      sex: [this.newCv.sex, Validators.required ]
    });
  }

}
