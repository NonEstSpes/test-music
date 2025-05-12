import {Component, effect, signal} from '@angular/core';
import {PageData} from './const';
import {FanClubTutorialAnimation} from './fan-club-tutorial.animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fan-club-tutorial',
  templateUrl: './fan-club-tutorial.component.html',
  styleUrls: ['./fan-club-tutorial.component.scss'],
  animations: [
    FanClubTutorialAnimation
  ]
})
export class FanClubTutorialComponent {
  protected readonly pageData = PageData;
  protected currentPage$$ = signal(0);
  private effectChangePage = effect(() => {
    if (this.currentPage$$() == 3) {
      alert('Вы создали фан-клуб!');
    }
  })

  goToNextPage() {
    this.currentPage$$.update(val => val + 1);
  }
}
