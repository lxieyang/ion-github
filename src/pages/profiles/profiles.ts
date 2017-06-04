import { RepoDetailsPage } from './../repo-details/repo-details';
import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  profiles: any;
  repos: any;
  followers: any;
  github_user = "";

  is_searching = false;
  is_result_came_back = false;
  is_further_results_came_back = false;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private githubService: GithubServiceProvider,
  private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    if (this.github_user) {
      this.profiles = "";   // reset profiles
      this.repos = "";  // reset repos
      this.followers = "";  // reset followers
      this.getProfile(this.github_user);
      this.github_user = "";  // init the form
    }
  }

  reset() {
    this.profiles = "";   // reset profiles
    this.repos = "";  // reset repos
    this.followers = "";  // reset followers
    this.github_user = "";

    this.is_searching = false;
    this.is_result_came_back = false;
    this.is_further_results_came_back = false;
  }

  showRepos(github_user) {
    this.followers = "";
    this.getRepos(github_user);
  }

  showFollowers(github_user) {
    this.repos = "";
    this.getFollowers(github_user);
  }

  showProfile(github_user) {
    const browser = this.iab.create(github_user.html_url);
    browser.show();
  }

  repoTapped(event, repo) {
    this.navCtrl.push(RepoDetailsPage, {
      repo: repo
    });
  }

  getProfile(username) {
    this.is_searching = true;
    this.is_result_came_back = false;
    this.githubService.getProfile(username).subscribe(response => {
      this.profiles = response;
      console.log(this.profiles);
      this.is_result_came_back = true;
    }, (err: any) => {
      console.log(err.status);
      console.log(err);
      this.is_result_came_back = true;
    })
    
  }

  getRepos(username) {
    this.is_further_results_came_back = false;
    this.githubService.getRepos(username).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
      setTimeout(()=>{this.is_further_results_came_back = true;},200);
      // this.is_further_results_came_back = true;
    }, (err: any) => {
      console.log(err.status);
      console.log(err);
      setTimeout(()=>{this.is_further_results_came_back = true;},200);
      // this.is_further_results_came_back = true;
    })
  }

  getFollowers(username) {
    this.is_further_results_came_back = false;
    this.githubService.getFollowers(username).subscribe(response => {
      this.followers = response;
      console.log(this.followers);
      setTimeout(()=>{this.is_further_results_came_back = true;},200);
      // this.is_further_results_came_back = true;
    }, (err: any) => {
      console.log(err.status);
      console.log(err);
      setTimeout(()=>{this.is_further_results_came_back = true;},200);
      // this.is_further_results_came_back = true;
    })
  }

}
