import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { defineCustomElements as alanBtnDefineCustomElements } from "@alan-ai/alan-button/dist/loader";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
alanBtnDefineCustomElements(window);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
