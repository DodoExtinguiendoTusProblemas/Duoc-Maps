import { Component } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'iframemenos1',
    templateUrl: './iframemenos1.component.html',
    styleUrls: ['./iframemenos1.component.css']
})
export class Iframemenos1Component {

    constructor(private inAppBrowser: InAppBrowser) {}

redirect() {
 this.inAppBrowser.create("https://tour-br.metareal.com/apps/player?asset=4b885b33-87cd-4a0f-8dc3-c1ca84f18653","_self", "location=no");
}
    
}