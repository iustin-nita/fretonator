import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooterComponent {
  date: Date = new Date();

  constructor(private globalService: GlobalService) {
  }

  onLinkClick() {
    this.globalService.getScrollTarget().scrollIntoView();
  }
}
