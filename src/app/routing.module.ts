import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvCreateComponent} from './components/cv-create/cv-create.component';
import {CvCollectionComponent} from './components/cv-collection/cv-collection.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CvCollectionComponent
  },
  {
    path: 'cv/create/:step',
    component: CvCreateComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class RoutingModule { }
