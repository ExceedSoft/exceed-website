// resolvers/seo.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SeoService, SEORouteData } from '../services/seo.service';

@Injectable({ providedIn: 'root' })
export class SeoResolver implements Resolve<void> {
  constructor(private seoService: SeoService) {}

  resolve(route: ActivatedRouteSnapshot): void {
    // Get language from route params or default to 'en'
    const lang = route.params['lang'] || 'en';

    // Get SEO data from route configuration
    const routeData: SEORouteData = {
      seoTitle: route.data['seoTitle'],
      seoDescription: route.data['seoDescription'],
      seoKeywords: route.data['seoKeywords'],
      seoImage: route.data['seoImage'],
      title: route.data['title'],
    };

    this.seoService.updateMetaTags(routeData, lang);
  }
}
