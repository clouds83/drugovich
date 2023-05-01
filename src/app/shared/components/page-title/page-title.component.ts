import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input('page-icon') pageIcon!: string;
  @Input('page-title') pageTitle!: string;
  @Input('button-text') buttonText!: string;
  @Input('button-link') buttonLink!: string;
  @Input('button-icon') buttonIcon!: string;
}
