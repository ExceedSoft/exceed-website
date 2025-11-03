import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PackageBenefitsComponent } from '../package-benefits/package-benefits.component';
import { AnimateOnScrollDirective } from '../../../../directives/animate.directive';
import { PackageDataComponent } from '../package-data/package-data.component';

@Component({
  selector: 'app-packages-home',
  standalone: true,
  imports: [
    TranslatePipe,
    PackageBenefitsComponent,
    PackageDataComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './packages-home.component.html',
  styleUrl: './packages-home.component.scss',
})
export class PackagesHomeComponent {
  selectedPackage: string = 'annual';

  selectPackage(type: string): void {
    this.selectedPackage = type;
  }
}
