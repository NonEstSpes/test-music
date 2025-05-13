import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const FanClubTutorialAnimation = trigger('FanClubTutorial', [
  transition(':enter', [
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page', [
      style({opacity: 0})
    ], {optional: true}),

    query('.tutorial__header', [
      style({transform: 'translateY(200px)', opacity: 0}),
      animate('1.7s ease-out', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    animate('1s'),
    query('.before-text', [
      style({opacity: 0}),
      animate('1.5s linear', style({opacity: 1}))
    ]),
    animate('2s'),
    query('.img', [
      style({opacity: 0}),
      animate('0.5s ease-out', style({opacity: 1}))
    ]),
    animate('1.5s'),
    query('.after-text', [
      style({transform: 'translateY(20px)', opacity: 0}),
      animate('0.9s ease-out', style({transform: 'translateY(0)', opacity: 1}))
    ]),
    animate('3s'),
    query('.tutorial__next-page', [
      style({transform: 'translateX(20px)', opacity: 0}),
      animate('0.8s ease-out', style({transform: 'translateX(0)', opacity: 1, display: 'block'}))
    ]),
  ]),

  transition('0 => 1', [
    query(':enter, :leave', style({opacity: 0, transform: 'translateY(20px)'}), {optional: true}),
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [style({opacity: 0, transform: 'translateY(20px)'})], {optional: true}
    ),
    query(':leave', animate('0s', style({display: 'none'})), {optional: true}),

    query(':enter', [
      stagger(100, [
        animate('0.5s ease-out', style({opacity: 1, transform: 'translateY(0)'}))
      ])
    ], {optional: true})
  ]),

  transition('1 => 2', [
    query(':enter, :leave', style({opacity: 0, transform: 'translateY(20px)'}), {optional: true}),
    query('.tutorial__header, .before-text, .img, .after-text, .tutorial__list, .tutorial__next-page',
      [style({opacity: 0, transform: 'translateY(20px)'})], {optional: true}
    ),
    query(':leave', animate('0s', style({display: 'none'})), {optional: true}),

    query('.tutorial__header', animate('0.6s ease-out', style({opacity: 1, transform: 'translateY(0)'}))),
    query('.img', animate('0.7s ease-out', style({opacity: 1, transform: 'translateY(0)'}))),
    query('.tutorial__list', animate('0.8s ease-out', style({opacity: 1, transform: 'translateY(0)'})))
  ]),
]);
