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
    query(':leave', animate('0s', style({display: 'none'})), {optional: true}),

    query('.tutorial__header', style({opacity: 0}), {optional: true}),
    query('.before-text, .head-list, .list-item, .tutorial__next-page',
      style({opacity: 0, transform: 'translateX(-20px)'}), {optional: true}
    ),
    query('.img', style({opacity: 0, transform: 'translateY(20px)'}), {optional: true}),

    query('.tutorial__header',
      animate('1s ease-out',
        style({opacity: 1}))
    ),
    animate('1s'),
    query('.before-text', animate('1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))),
    animate('3s'),
    query('.img', animate('1s ease-out', style({opacity: 1, transform: 'translateY(0)'}))),
    animate('1s'),
    query('.tutorial__list', animate('0.1s')),

    query('.head-list', [
      animate('0.5s ease-out',
        style({opacity: 1, transform: 'translateX(0)'})
      )
    ]),
    animate('1s'),
    query('.list-item', [
      stagger(1000,
        animate('1s ease-out',
          style({opacity: 1, transform: 'translateX(0)'})
        )
      )
    ]),
    animate('2s'),
    query('.tutorial__next-page', animate('0.8s ease-out', style({opacity: 1, transform: 'translateX(0)'})))
  ]),

  transition('1 => 2', [
    query(':enter, :leave', style({opacity: 0, transform: 'translateY(20px)'}), {optional: true}),
    query(':leave', animate('0s', style({display: 'none'})), {optional: true}),

    query('.tutorial__header', style({opacity: 0}), {optional: true}),
    query('.tutorial__next-page',
      style({opacity: 0, transform: 'translateX(-20px)'}), {optional: true}
    ),
    query('.before-text, .head-list, .list-item',
      style({opacity: 0, transform: 'translateX(20px)'}), {optional: true}
    ),
    query('.img', style({opacity: 0, transform: 'translateY(40px)'}), {optional: true}),

    query('.tutorial__header',
      animate('1s ease-out',
        style({opacity: 1}))
    ),
    animate('1s'),
    query('.before-text', animate('1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))),
    animate('3s'),
    query('.img', animate('1s ease-out', style({opacity: 1, transform: 'translateY(0)'}))),
    animate('1s'),
    query('.tutorial__list', animate('0.1s')),
    query('.head-list', [
      animate('0.5s ease-out',
        style({opacity: 1, transform: 'translateX(0)'})
      )
    ]),
    animate('1s'),
    query('.list-item', [
      stagger(1000,
        animate('1s ease-out',
          style({opacity: 1, transform: 'translateX(0)'})
        )
      )
    ]),
    animate('1.5s'),
    query('.tutorial__next-page', animate('0.8s ease-out', style({opacity: 1, transform: 'translateX(0)'})))
  ]),

]);
