import {trigger, style, transition, animate, query, stagger} from '@angular/animations';

export const FanClubTutorialAnimation = trigger('FanClubTutorial', [
  transition('* => *', [
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    animate('0.1s'),
    query(
      '.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(700, [
          animate('0.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ],
      { optional: true }
    ),
  ]),
]);
