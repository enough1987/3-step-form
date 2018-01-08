import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../store/app.store';
import {CvModel} from '../../store/models';


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
    console.log( cv );
  }

  navTocreateNew() {
    this.router.navigate(['./cv/create', 1]);
  }

}
