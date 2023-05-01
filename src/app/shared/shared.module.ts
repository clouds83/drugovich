import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [PageTitleComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageTitleComponent, SpinnerComponent],
})
export class SharedModule {}
