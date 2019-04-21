import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArZlxiXTwvKIDiI8cay9kHVMG4YXGSrIs'
    }),
  ],
  declarations: [HomePage],
  providers: [Geolocation, Vibration,
    NativeAudio,
    // BackgroundGeolocation,
    // LocalNotifications
    ]
})
export class HomePageModule {}
