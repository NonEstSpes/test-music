import {Component, effect, signal} from '@angular/core';
import {animate, query, sequence, stagger, style, transition, trigger} from '@angular/animations';
import {NgForOf} from '@angular/common';
import {pageData} from './const';

@Component({
  selector: 'app-fan-club-tutorial',
  templateUrl: './fan-club-tutorial.component.html',
  styleUrls: ['./fan-club-tutorial.component.scss'],
  animations: [

  ]
})
export class FanClubTutorialComponent {
  protected readonly pageData1 = pageData;
  protected currentPage$$ = signal(0);
  private effectChangePage = effect(() => {
    if (this.currentPage$$() == 3) {
      alert('Вы создали фан-клуб!');
    }
  })

  goToNextPage() {
    this.currentPage$$.update(value => value + 1);
  }
}
