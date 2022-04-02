import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBottomTabComponent } from './components/app-bottom-tab/app-bottom-tab.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppBottomTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AppBottomTabComponent
  ]
})
export class SharedModule { }
