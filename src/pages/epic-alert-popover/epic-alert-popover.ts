import { Component, trigger, state, transition, animate, style, keyframes } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-epic-alert-popover',
  templateUrl: 'epic-alert-popover.html',
  animations: [
    trigger('entryTrigger', [
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('void => *', [
        animate('500ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
          style({ opacity: .3, transform: 'translateY(30px)', offset: .4 }),
          style({ opacity: .5, transform: 'translateY(-10px)', offset: .7 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })

        ]))
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: .5, transform: 'translateX(-30%)', offset: .4 }),
          style({ opacity: .3, transform: 'translateX(-60%)', offset: .7 }),
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 1 })

        ]))
      ])
    ])
  ]
})
export class EpicAlertPopoverPage {
  alertList: any[] = []
  state: string
  constructor(public viewCtrl: ViewController, public params: NavParams) {
    this.alertList = [0, 1, 2, 3]
    console.log(`Alert list in popover pagae`, this.alertList)
    this.state = "fadeIn"
  }

  close() {
    this.viewCtrl.dismiss();
  }
  selectPatientAlert = (altType, name) => {
    this.viewCtrl.dismiss({ "AlertType": altType, "PatientName": name });
  }
}
