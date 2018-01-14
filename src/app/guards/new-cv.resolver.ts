import {Injectable} from '@angular/core';
import {CvModel} from '../store/app-store.dictionary';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../store/app-store.module';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';
import {newCvActions} from '../store/reducers/new-cv-reducer';
import {BaseResolver} from './base.resolver';


@Injectable()
export class NewCvResolver extends BaseResolver<CvModel> {

  constructor(protected http: HttpClient, private store: Store<AppState>) {
    super(http);
  }

  initData(): void {
    this.store.take(1).subscribe(store => {
      if (!store.newCv) {
        this.http.get('../../assets/new-cv.json').toPromise().then((data: CvModel) => {
          this.store.dispatch({type: newCvActions.SET, payload: data });
        });
      }
    });
  }

  waitForDataToLoad(): Observable<CvModel> {
    return this.store.select('newCv')
      .filter(data => !!data)
      .take(1);
  }

}
