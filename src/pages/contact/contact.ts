import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private iab: InAppBrowser) {
  }

  showFacebook() {
    const browser = this.iab.create("https://www.facebook.com/profile.php?id=100000519299083");
    browser.show();
  }

  showInstagram() {
    const browser = this.iab.create("https://www.instagram.com/xieyangl/");
    browser.show();
  }

  showGithub() {
    const browser = this.iab.create("https://github.com/lxieyang");
    browser.show();
  }

  showPersonalWebsite() {
    const browser = this.iab.create("https://lxieyang.github.io");
    browser.show();
  }

}
