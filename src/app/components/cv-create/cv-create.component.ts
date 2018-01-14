import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Store} from '@ngrx/store';
import {newCvActions} from '../../store/reducers/new-cv-reducer';
import {AppState} from '../../store/app-store.module';

@Component({
  selector: 'app-create-cv',
  templateUrl: './cv-create.component.html',
  styleUrls: ['./cv-create.component.css']
})
export class CvCreateComponent implements OnDestroy {

  public step: number;

  constructor( protected store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute) {

      router.events
        .filter((event) => event instanceof NavigationEnd)
        .forEach(() => {
          this.step = +this.activatedRoute.snapshot.params.step;
      });

  }

  ngOnDestroy() {
    this.store.dispatch({ type: newCvActions.RESET });
  }

}
