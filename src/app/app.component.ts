import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
   <span>Locale id: {{locale}}</span>
  `,
  styles: []
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {

  }
}
