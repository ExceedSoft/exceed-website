import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PackageBenefitsComponent } from '../package-benefits/package-benefits.component';
import { AnimateOnScrollDirective } from '../../../../directives/animate.directive';
import { PackageDataComponent } from '../package-data/package-data.component';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-packages-home',
  standalone: true,
  imports: [
    TranslatePipe,
    PackageBenefitsComponent,
    PackageDataComponent,
    AnimateOnScrollDirective,
    NgClass,
  ],
  templateUrl: './packages-home.component.html',
  styleUrl: './packages-home.component.scss',
})
export class PackagesHomeComponent implements OnInit {
  selectedPackage: string = 'annual';
  expanded: boolean[] = [true, true, true];
  isMobile = signal(false);
  toggleBenifits = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth < 768);
    this.expanded = this.isMobile()
      ? [false, false, false]
      : [true, true, true];
  }

  selectPackage(type: string): void {
    this.selectedPackage = type;
  }

  toggleContent(index: number) {
    this.expanded[index] = !this.expanded[index];
  }
}
