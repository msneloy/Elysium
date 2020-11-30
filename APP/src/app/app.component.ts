import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import "@alan-ai/alan-button";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  @ViewChild("alanBtnEl", { static: false })
  alanBtnComponent: ElementRef<HTMLAlanButtonElement>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.alanBtnComponent.nativeElement.addEventListener("command", (data) => {
      const commandData = (<CustomEvent>data).detail;

      if (commandData.command === "navigation") {
        this.navCtrl.navigateForward([`/tabs/tab${commandData.tabNumber}`]);
      }
    });
  }
}
