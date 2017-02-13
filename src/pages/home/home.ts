import { Component } from '@angular/core';
import {EpicAlertPopoverPage} from '../epic-alert-popover/epic-alert-popover'
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  public popCtrl: PopoverController
  ) {

  }
  showAlerts(popEvent) {
    console.log(`popEvent`, popEvent)
    let popover = this.popCtrl.create(EpicAlertPopoverPage);
    popover.onDidDismiss((data) => {
      console.log(`Data from popover`, data)
      if (data) {
      }
    })
    popover.present({
      ev: popEvent
    });
  }
}
