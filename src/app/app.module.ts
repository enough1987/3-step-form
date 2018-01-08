import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRootComponent} from './components/app-root/app-root.component';
import {StoreModule} from '@ngrx/store';
import {RoutingModule} from './routing.module';
import {CvCreateComponent} from './components/cv-create/cv-create.component';
import {cvCollectionReducer} from './store/reducers/cvCollectionReducer';
import {newCvReducer} from './store/reducers/newCvReducer';
import {CvCollectionComponent} from './components/cv-collection/cv-collection.component';
import {CvCreateStep1Component} from './components/cv-create/step1/cv-create-step1.component';
import {CvCreateStep2Component} from './components/cv-create/step2/cv-create-step2.component';
import {CvCreateStep3Component} from './components/cv-create/step3/cv-create-step3.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppRootComponent,
    CvCreateComponent,
    CvCreateStep1Component,
    CvCreateStep2Component,
    CvCreateStep3Component,
    CvCollectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    RoutingModule,
    StoreModule.forRoot({
      cvCollection: cvCollectionReducer,
      newCv: newCvReducer
    })
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
