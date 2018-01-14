import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {TestEffects} from './effects/test';
import {newCvReducer} from './reducers/new-cv-reducer';
import {cvCollectionReducer} from './reducers/cv-collection-reducer';
import {CvModel} from './app-store.dictionary';

export class AppState {
  cvCollection: Array<CvModel>;
  newCv: CvModel;
}

@NgModule({
  imports: [
    StoreModule.forRoot({
      cvCollection: cvCollectionReducer,
      newCv: newCvReducer
    }),
    EffectsModule.forRoot([
      TestEffects
    ])
  ]
})
export class AppStoreModule {}
