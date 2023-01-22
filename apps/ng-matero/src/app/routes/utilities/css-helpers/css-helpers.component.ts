import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities-css-helpers',
  templateUrl: './css-helpers.component.html',
  styleUrls: ['./css-helpers.component.scss'],
})
export class UtilitiesCssHelpersComponent {
  colorNames =
    'red|pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|ligh-green|lime|yellow|amber|orange|deep-orange|brown|gray|grey|blue-gray|blue-grey'.split(
      '|'
    );
}
