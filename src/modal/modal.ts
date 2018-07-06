import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides, NavController } from 'ionic-angular';
import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'modal.html'
})
export class OnboardModal {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = "x";

 constructor(public viewCtrl: ViewController,
  public navCtrl: NavController) { }

 dismiss( ) {
   this.viewCtrl.dismiss();
 }

 skip() {
  this.navCtrl.push(MainPage);

}

slideChanged() {
  if (this.slides.isEnd) {
    this.skipMsg = "Skip."
  }
}

slideMoved() {
  if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) {
    this.state = "rightSwipe";
  }else {
    this.state = "leftSwipe";
  }
}

animationDone() {
  this.state = "x";
}

nextSlide() {
  this.slides.slideNext();
}
}
