import { Component } from '@angular/core';
import { FomService } from './fom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swarg_residency';

  constructor(private form: FomService){ }

  onJourneySelected(endPoint: string){
    this.form.onJourney(endPoint);
  }
}
