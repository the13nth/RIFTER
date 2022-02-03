import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private swUpdate: SwUpdate,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.checkSwUpdate();
  }

  async checkSwUpdate() {
    this.swUpdate.available.subscribe(async evt => {
      const toast = await this.toastController.create({
        header: 'New Version available',
        message: 'Click to update',
        position: 'bottom',
        buttons: [
          {
            side: 'end',
            icon: 'star',
            text: 'Update',
            handler: () => {
              window.location.reload();
            }
          }
        ]
      });
      toast.present();
    });
  }
}
