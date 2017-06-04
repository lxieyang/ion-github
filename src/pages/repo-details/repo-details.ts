import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})
export class RepoDetailsPage {
  selectedRepo: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private iab: InAppBrowser) {
    this.selectedRepo = navParams.get('repo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

  showInAppBrowser() {
    const browser = this.iab.create(this.selectedRepo.html_url);
    browser.show();
  }

}
