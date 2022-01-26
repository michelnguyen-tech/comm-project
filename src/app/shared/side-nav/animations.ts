import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('bubbleGrow', [
    transition(':enter', [
      animate('250ms ease-in-out',  keyframes([
        style({transform: 'scale(0)'}),
        style({transform: 'scale(1.1)'}),
        style({transform: 'scale(1)'}),
      ]))
    ]),
    transition(':leave', [
      animate('250ms ease-in-out',  keyframes([
        style({transform: 'scale(1)'}),
        style({transform: 'scale(1.1)'}),
        style({transform: 'scale(0)'})
      ]))
    ]),
  ])
