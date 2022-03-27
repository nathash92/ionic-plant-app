import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async show(msg: string, type: string, options?: ToastOptions) {
    const defaultOptions: ToastOptions = {
      message: msg,
      position: 'top',      
    };
    const t = await this.toastCtrl.create(Object.assign({}, defaultOptions, options || {}));
    await t.present();
  }

}
