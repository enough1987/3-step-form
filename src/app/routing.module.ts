import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CvCreateComponent} from './components/cv-create/cv-create.component';
import {CvCollectionComponent} from './components/cv-collection/cv-collection.component';
import {CvCollectionResolver} from './services/cvCollection.service';


const appRoutes: Routes = [
  {
    path: '',
    component: CvCollectionComponent,
    resolve: {
      data: CvCollectionResolver
    }
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
