import { Component, Inject, LOCALE_ID } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
   <span i18n>Locale id: {{locale}}</span>
  `,
  styles: []
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {

  }
}
