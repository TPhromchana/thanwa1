import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the TdeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tdee',
  templateUrl: 'tdee.html',
})
export class TdeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  LuanchHomePage(){
    this.navCtrl.push(HomePage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdeePage');
  }

}
