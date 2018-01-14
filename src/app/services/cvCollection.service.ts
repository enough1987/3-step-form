import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {CvModel} from '../store/app-store.dictionary';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../store/app-store.module';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';
import {cvCollectionActions} from '../store/reducers/cvCollectionReducer';

@Injectable()
export class CvCollectionResolver implements Resolve<Array<CvModel>> {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  resolve(): Observable<any> {
    this.initData();
    return this.waitForDataToLoad();
  }

  initData(): void {
    this.store.take(1).subscribe(store => {
      console.log( 'lol', store);
      if (!store.cvCollection) {
        this.http.get('../../assets/data.json').toPromise().then((data: Array<CvModel>) => {
          console.log(' - ', data);
          this.store.dispatch({type: cvCollectionActions.RESOLVE, payload: data });
        });
      }
    });
  }

  waitForDataToLoad(): Observable<Array<CvModel>> {
    return this.store.select('cvCollection')
      .filter(data => !!data)
      .map(store => store)
      .take(1);
  }

}
