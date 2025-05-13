import { trigger, style, transition, animate, query, stagger, group } from '@angular/animations';

export const FanClubTutorialAnimation = trigger('FanClubTutorial', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('0.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition('0 => 1', [
    query(':enter, :leave', style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }
    ),
    query(':leave', animate('0s', style({ display: 'none' })), { optional: true }),

    query(':enter', [
      stagger(100, [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ]),

  transition('1 => 2', [
    query(':enter, :leave', style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }
    ),
    query(':leave', animate('0s', style({ display: 'none' })), { optional: true }),

    query('.tutorial__header', animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
    query('.img', animate('0.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
    query('.tutorial__list', animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
  ]),

  transition('2 => 1', [
    query(':enter, :leave', style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }
    ),
    query(':leave', animate('0s', style({ display: 'none' })), { optional: true }),

    group([
      query('.tutorial__header', animate('0.5s 0.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
      query('.img', animate('0.6s 0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
      query('.before-text, .after-text', animate('0.7s 0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
      query('.tutorial__next-page', animate('0.8s 0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
    ])
  ]),
]);
