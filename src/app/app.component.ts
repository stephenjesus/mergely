import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'Diff File Viewer and Editor Online';
  image = './assets/img/angular.png';

  ngOnInit() {
    jQuery(document).ready(() => {
      jQuery('#mergely').mergely({
        lhs: (setValue) => {
          setValue('');
        },
        rhs: (setValue) => {
          setValue('');
        }
      });
    });
  }
}
