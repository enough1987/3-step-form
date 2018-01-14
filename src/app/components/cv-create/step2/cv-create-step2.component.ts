import {Component} from '@angular/core';
import {BaseCvCreateStep} from '../base-cv-create-step';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormBuilder, Validators} from '@angular/forms';
import {AppState} from '../../../store/app-store.module';

@Component({
  selector: 'app-create-cv-step2',
  templateUrl: './cv-create-step2.component.html',
  styleUrls: ['./cv-create-step2.component.css']
})
export class CvCreateStep2Component extends BaseCvCreateStep {

  constructor(protected store: Store<AppState>, protected router: Router, protected fb: FormBuilder) {
    super(store, router, fb);
  }

  protected createForm() {
    this.form = this.fb.group({
      zeroJobExperience: [this.newCv.zeroJobExperience, Validators.required ],
      lastJob: this.fb.group({
        companyName: [this.newCv.lastJob.companyName, Validators.required ],
        companyIndustry: [this.newCv.lastJob.companyIndustry, Validators.required ],
        position: [this.newCv.lastJob.position, Validators.required ],
        period: this.fb.group({
          from: this.fb.group({
            month: [this.newCv.lastJob.period.from.month, Validators.required ],
            year: [this.newCv.lastJob.period.from.year, Validators.required ]
          }),
          to: this.fb.group({
            month: [this.newCv.lastJob.period.to.month ],
            year: [this.newCv.lastJob.period.to.month ]
          }),
          forNow: [this.newCv.lastJob.period.forNow ]
        }),
      }),
      sex: [this.newCv.sex, Validators.required ]
    });
  }

  protected isValid(): boolean {
    return this.form.get('zeroJobExperience').value || this.form.valid;
  }

}
