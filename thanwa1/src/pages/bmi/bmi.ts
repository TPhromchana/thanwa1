import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  constructor(public navCtrl: NavController) {
  }

  

  LuanchHomePage(){
    this.navCtrl.push(HomePage);
     
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiPage');
  }

}
