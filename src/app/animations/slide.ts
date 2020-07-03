import { trigger, transition, animate, style } from '@angular/animations';

export function slide(duration = '0.3s') {
    return trigger('slide', [
        transition(':enter', [
            style({
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0,
                overflow: 'hidden'
            }),
            animate(
                duration,
                style({
                    height: '*',
                    opacity: '*',
                    paddingTop: '*',
                    paddingBottom: '*'
                })
            )
        ]),
        transition(':leave', [
            style({
                overflow: 'hidden'
            }),
            animate(
                duration,
                style({
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    opacity: 0
                })
            )
        ])
    ]);
}
