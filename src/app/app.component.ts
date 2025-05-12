import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FanClubTutorialComponent } from './fan-club-tutorial/fan-club-tutorial.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FanClubTutorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent { }
