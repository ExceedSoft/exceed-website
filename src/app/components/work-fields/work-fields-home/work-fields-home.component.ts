import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../../directives/animate.directive';

@Component({
  selector: 'app-work-fields-home',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  templateUrl: './work-fields-home.component.html',
  styleUrl: './work-fields-home.component.scss',
})
export class WorkFieldsHomeComponent {}
