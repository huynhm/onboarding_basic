import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OnboardModal } from '../../modal/modal';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  showOnboard() {
    // Load policy help modal
    let onboardModal = this.modalCtrl.create(OnboardModal);
    onboardModal.present();
  }

}
