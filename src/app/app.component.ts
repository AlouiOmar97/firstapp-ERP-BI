import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BI9';
  nb = 7
  msg=""
  getNb(){return 8}
  afficherMsg(){
    this.msg="This is a new text"
  }
}
