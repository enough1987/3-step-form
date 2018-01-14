import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {CvModel} from '../../store/app-store.dictionary';
import {cvCollectionActions} from '../../store/reducers/cvCollectionReducer';
import {AppState} from '../../store/app-store.module';

@Component({
  selector: 'app-create-cv',
  templateUrl: './cv-collection.component.html',
  styleUrls: ['./cv-collection.component.css']
})
export class CvCollectionComponent {

  public cvCollections: Array<CvModel>;

  constructor(private store: Store<AppState>, private router: Router) {
    store.select('cvCollection').subscribe((cvCollections: Array<CvModel>) => {
      this.cvCollections = cvCollections;
    });
  }

  logCV(cv) {
    this.store.dispatch({ type: cvCollectionActions.TEST, payload: cv });
  }

  navTocreateNew() {
    this.router.navigate(['./cv/create', 1]);
  }

}
