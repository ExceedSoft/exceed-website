// app.routes.ts
import { Routes } from '@angular/router';
import { SeoResolver } from './guards/seo.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
    data: {
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت',
      },
      title: 'Home',
      navbarBackground: false,
    },
    resolve: { seo: SeoResolver },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
    data: {
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft. Comprehensive enterprise resource planning system.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت. نظام تخطيط موارد enterprises متكامل.',
      },
      seoKeywords: {
        en: 'ERP system, business management, Atheebsoft, Exceed ERP',
        ar: 'نظام ERP, إدارة الأعمال, أثير سوفت, اكسيد ERP',
      },
      title: 'About',
      navbarBackground: true,
    },
    resolve: { seo: SeoResolver },
  },
  {
    path: 'work-fields',
    loadComponent: () =>
      import('./components/work-fields/work-fields.component').then(
        (c) => c.WorkFieldsComponent
      ),
    data: {
      title: 'Work Fields',
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft. Comprehensive enterprise resource planning system.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت. نظام تخطيط موارد enterprises متكامل.',
      },
      seoKeywords: {
        en: 'ERP system, business management, Atheebsoft, Exceed ERP',
        ar: 'نظام ERP, إدارة الأعمال, أثير سوفت, اكسيد ERP',
      },
      navbarBackground: true,
    },
    resolve: { seo: SeoResolver },
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
    data: {
      title: 'Contact Us',
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft. Comprehensive enterprise resource planning system.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت. نظام تخطيط موارد enterprises متكامل.',
      },
      seoKeywords: {
        en: 'ERP system, business management, Atheebsoft, Exceed ERP',
        ar: 'نظام ERP, إدارة الأعمال, أثير سوفت, اكسيد ERP',
      },
      navbarBackground: true,
    },
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./components/programs/programs.component').then(
        (c) => c.ProgramsComponent
      ),
    data: {
      title: 'Programs',
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft. Comprehensive enterprise resource planning system.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت. نظام تخطيط موارد enterprises متكامل.',
      },
      seoKeywords: {
        en: 'ERP system, business management, Atheebsoft, Exceed ERP',
        ar: 'نظام ERP, إدارة الأعمال, أثير سوفت, اكسيد ERP',
      },
      navbarBackground: true,
    },
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./components/packages/packages.component').then(
        (c) => c.PackagesComponent
      ),
    data: {
      title: 'Packages',
      seoTitle: {
        en: 'Exceed ERP - Complete Business Management Solution',
        ar: 'اكسيد ERP - حلول إدارة الأعمال المتكاملة',
      },
      seoDescription: {
        en: 'Streamline your business operations with Exceed ERP by Atheebsoft. Comprehensive enterprise resource planning system.',
        ar: 'قم بتبسيط عملياتك التجارية مع نظام اكسيد ERP من أثير سوفت. نظام تخطيط موارد enterprises متكامل.',
      },
      seoKeywords: {
        en: 'ERP system, business management, Atheebsoft, Exceed ERP',
        ar: 'نظام ERP, إدارة الأعمال, أثير سوفت, اكسيد ERP',
      },
      navbarBackground: true,
    },
  },
];
