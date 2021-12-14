import { animate, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }),
        animate('400ms ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        animate('400ms ease-in', style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }))
    ])
])
