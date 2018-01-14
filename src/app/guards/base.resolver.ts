import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export abstract class BaseResolver<T> implements Resolve<T> {

  constructor(protected http: HttpClient) {}

  resolve(): Observable<T> {
    this.initData();
    return this.waitForDataToLoad();
  }

  abstract initData(): void;

  abstract waitForDataToLoad(): Observable<T>;

}
