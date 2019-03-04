import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ top: '20em', opacity: '0' })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ top: '20em', opacity: '0'}))
        ], { optional: true }),
        query(':enter', [
          animate('500ms ease-out', style({ top: '0', opacity: '1'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);
