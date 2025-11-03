import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../../../directives/animate.directive';

@Component({
  selector: 'app-package-data',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  templateUrl: './package-data.component.html',
  styleUrl: './package-data.component.scss',
})
export class PackageDataComponent {}
