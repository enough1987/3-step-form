import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';

@Injectable()
export class TestEffects {
  constructor(
    private actions$: Actions
  ) { }

  @Effect() test$ = this.actions$
    .ofType('TEST')
    .map(action => {
      console.log(action, ' in effects');
      return { type: 'none'};
    });

}
