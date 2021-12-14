import { animate, style, transition, trigger } from '@angular/animations';

export const routeformTransition = trigger('routeFormState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }),
        animate('500ms ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
])

