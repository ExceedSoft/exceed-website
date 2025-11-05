// services/seo.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from './language.service';

export interface SEORouteData {
  seoTitle?: string | { en: string; ar: string };
  seoDescription?: string | { en: string; ar: string };
  seoKeywords?: string | { en: string; ar: string };
  seoImage?: string;
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private baseUrl = 'https://atheebsoft.com';
  currentLang: string = 'ar';
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang.code;
    });
  }

  /**
   * Update meta tags for current route and language
   */
  updateMetaTags(routeData: SEORouteData, lang: string = 'ar'): void {
    try {
      const currentLang = this.currentLang || 'ar';

      // Get localized content
      const title = this.getLocalizedContent(
        routeData.seoTitle || routeData.title,
        currentLang,
        'Exceed ERP'
      );
      const description = this.getLocalizedContent(
        routeData.seoDescription,
        currentLang,
        'Comprehensive ERP solutions by Atheebsoft'
      );
      const keywords = this.getLocalizedContent(
        routeData.seoKeywords,
        currentLang,
        'ERP, business management, software'
      );

      // Set title
      this.title.setTitle(title);

      // Update or create meta tags
      this.updateMetaTag('description', description);
      this.updateMetaTag('keywords', keywords);

      // HTML lang and direction attributes
      this.updateHtmlLang(currentLang);

      // Open Graph tags
      this.updateOpenGraphTags(
        title,
        description,
        currentLang,
        routeData.seoImage
      );

      // Canonical URL
      this.updateCanonicalUrl(currentLang);

      // Alternate language links
      this.updateAlternateLinks(currentLang);
    } catch (error) {
      console.error('Error updating SEO meta tags:', error);
    }
  }

  /**
   * Get localized content from route data
   */
  private getLocalizedContent(
    content: string | { en: string; ar: string } | undefined,
    lang: string,
    fallback: string = ''
  ): string {
    if (!content) return fallback;

    if (typeof content === 'string') {
      return content;
    }

    return content[lang as keyof typeof content] || content.en || fallback;
  }

  /**
   * Update HTML lang and dir attributes
   */
  private updateHtmlLang(lang: string): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      } catch (error) {
        console.error('Error updating HTML attributes:', error);
      }
    }
  }

  /**
   * Update or create a meta tag
   */
  private updateMetaTag(name: string, content: string): void {
    if (!content) return;

    const existingTag = this.meta.getTag(`name="${name}"`);
    if (existingTag) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(
    title: string,
    description: string,
    lang: string,
    image?: string
  ): void {
    const tags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: lang === 'ar' ? 'ar_SA' : 'en_US' },
      { property: 'og:url', content: this.getCurrentUrl(lang) },
      { property: 'og:site_name', content: 'Exceed ERP' },
    ];

    if (image) {
      tags.push({ property: 'og:image', content: this.getAbsoluteUrl(image) });
    }

    tags.forEach((tag) => {
      const existingTag = this.meta.getTag(`property="${tag.property}"`);
      if (existingTag) {
        this.meta.updateTag(tag);
      } else {
        this.meta.addTag(tag);
      }
    });
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(lang: string): void {
    const canonicalUrl = this.getCurrentUrl(lang);

    // Remove existing canonical link
    const existingCanonical = this.meta.getTag('rel="canonical"');
    if (existingCanonical) {
      this.meta.removeTagElement(existingCanonical);
    }

    // Add new canonical link
    this.meta.addTag({ rel: 'canonical', href: canonicalUrl });
  }

  /**
   * Update alternate language links
   */
  private updateAlternateLinks(currentLang: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      // Remove existing alternate links
      const existingLinks = document.querySelectorAll(
        'link[rel="alternate"][hreflang]'
      );
      existingLinks.forEach((link) => link.remove());

      const languages = ['en', 'ar'];

      languages.forEach((lang) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = this.getCurrentUrl(lang);
        document.head.appendChild(link);
      });

      // Add x-default hreflang
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      defaultLink.href = this.getCurrentUrl('en');
      document.head.appendChild(defaultLink);
    } catch (error) {
      console.error('Error updating alternate links:', error);
    }
  }

  /**
   * Get current URL for specific language
   */
  private getCurrentUrl(lang: string): string {
    const currentPath = this.router.url;

    // If current path already has language prefix, replace it
    if (currentPath.startsWith('/en') || currentPath.startsWith('/ar')) {
      return `${this.baseUrl}/${lang}${currentPath.substring(3)}`;
    }

    // If no language prefix, add it
    return `${this.baseUrl}/${lang}${currentPath}`;
  }

  /**
   * Convert relative URL to absolute
   */
  private getAbsoluteUrl(url: string): string {
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${this.baseUrl}${url}`;
    return `${this.baseUrl}/${url}`;
  }

  /**
   * Reset to default meta tags (useful for error pages)
   */
  resetToDefault(lang: string = 'ar'): void {
    const defaultData: SEORouteData = {
      seoTitle: lang === 'ar' ? 'اكسيد ERP' : 'Exceed ERP',
      seoDescription:
        lang === 'ar'
          ? 'حلول إدارة الأعمال المتكاملة من عذيب سوفت'
          : 'Comprehensive business management solutions by Atheebsoft',
    };

    this.updateMetaTags(defaultData, lang);
  }
}
