import { Injectable } from '@angular/core';
import {CvModel} from '../store/app-store.dictionary';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../store/app-store.module';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';
import {cvCollectionActions} from '../store/reducers/cv-collection-reducer';
import {BaseResolver} from './base.resolver';

@Injectable()
export class CvCollectionResolver extends BaseResolver<Array<CvModel>> {

  constructor(protected http: HttpClient, private store: Store<AppState>) {
    super(http);
  }

  initData(): void {
    this.store.take(1).subscribe(store => {
      if (!store.cvCollection) {
        this.http.get('../../assets/cv-collection.json').toPromise().then((data: Array<CvModel>) => {
          this.store.dispatch({type: cvCollectionActions.RESOLVE, payload: data });
        });
      }
    });
  }

  waitForDataToLoad(): Observable<Array<CvModel>> {
    return this.store.select('cvCollection')
      .filter(data => !!data)
      .take(1);
  }

}
