import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-package-benefits',
  standalone: true,
  imports: [],
  templateUrl: './package-benefits.component.html',
  styleUrl: './package-benefits.component.scss',
})
export class PackageBenefitsComponent {
  currentLanguage = 'ar';
  private languageService = inject(LanguageService);
  packages: any = [
    {
      title: { en: 'نظام المبيعات', ar: 'نظام المبيعات' },
      data: [
        {
          name: { en: 'Cloud Point of Sale (POS)', ar: 'نقاط البيع السحابية' },
          basic: true,
          expanded: true,
          advanced: true,
        },

        {
          name: {
            en: 'Create Quotations for Customers',
            ar: 'إنشاء عروض أسعار للعملاء',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },

        {
          name: {
            en: 'Sales Order Management',
            ar: 'إدارة أوامر البيع',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },
        {
          name: {
            en: 'Issue Sales Invoices',
            ar: 'إصدار فواتير المبيعات',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Handle Sales Returns and Credit Notes',
            ar: 'معالجة مرتجعات المبيعات و  الإشعارات الدائنة',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Compliant with Phase 2 of Electronic Invoicing',
            ar: 'توافق مع المرحلة الثانية من الفوترة الإلكترونية',
          },
          basic: { en: 'Phase 1', ar: 'المرحلة الاولي' },
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Multi-Currency',
            ar: 'متعدد العملات',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Delivery Notes Management',
            ar: 'ادارة إشعارات تسليم البضائع',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },
        {
          name: {
            en: 'Customer Management',
            ar: 'إدارة العملاء',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Record Customer Payments',
            ar: 'تسجيل مدفوعات العملاء',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
      ],
    },

    {
      title: {
        en: 'User and Permissions Management',
        ar: ' ادارة الصلاحيات و المستخدمين',
      },
      data: [
        {
          name: { en: 'User Management', ar: 'ادارة المستخدمين' },
          basic: true,
          expanded: true,
          advanced: true,
        },

        {
          name: {
            en: 'User Roles and Permissions Management',
            ar: 'إدارة الأذونات والأدوار للمستخدمين',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
      ],
    },
    {
      title: {
        en: 'Value Added Tax (VAT)',
        ar: 'ضريبة القيمة المضافة',
      },
      data: [
        {
          name: {
            en: 'Track Invoice Status for Phase 2',
            ar: 'تتبع حالة الفواتير للمرحلة الثانية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },

        {
          name: {
            en: 'Apply Tax on Inventory Transactions',
            ar: 'تطبيق الضريبة علي الحركات المخزنية',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Apply Tax on Accounting Transactions',
            ar: 'تطبيق الضريبة علي الحركات المحاسبية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Automated Tax Declarations',
            ar: 'اقرارات ضريبية الية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
      ],
    },
    {
      title: {
        en: 'Purchasing and Inventory',
        ar: 'المشتريات و المخزون',
      },
      data: [
        {
          name: {
            en: 'Track the Purchasing Cycle (Requests – Quotations – Orders – Quotation Requests)',
            ar: 'تتبع دورة المشتريات (طلبات - عروض اسعار - اوامر - طلبات عروض اسعار)',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },

        {
          name: {
            en: 'Purchase Management (Issuing Purchase Invoices and Returns Only)',
            ar: 'ادارة المشتريات (اصدار فواتير و مرتجعات المشتريات فقط)',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Allocate Purchase Expenses',
            ar: 'توزيع مصروفات المشتريات',
          },
          basic: null,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Supplier Management',
            ar: 'إدارة الموردين',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Record Supplier Payments',
            ar: 'تسجيل مدفوعات الموردين',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Inventory Product Management',
            ar: 'إدارة المنتجات المخزنية',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Service Product Management',
            ar: 'إدارة المنتجات الخدمية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Record Stock Inbound and Outbound Vouchers',
            ar: 'تسجيل سندات الإدخال والإخراج المخزني',
          },
          basic: null,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Perform Inventory Stocktaking',
            ar: 'إجراء جرد المخزون',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Perform Inventory Reconciliation',
            ar: 'تنفيذ التسوية المخزنية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Manage Stock Transfers',
            ar: 'إدارة التحويلات المخزنية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Warehouses',
            ar: 'المستودعات',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
      ],
    },

    {
      title: {
        en: 'Accounting',
        ar: 'المحاسبة',
      },
      data: [
        {
          name: {
            en: 'Cost Centers',
            ar: 'مراكز التكلفة',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },

        {
          name: {
            en: 'Chart of Accounts',
            ar: 'شجرة الحسابات',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Multiple Journals',
            ar: 'دفاتر يومية متعددة',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },
        {
          name: {
            en: 'Record Journal Entries',
            ar: 'تسجيل القيود اليومية',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Cash and Bank Account Management',
            ar: 'إدارة الخزائن والحسابات البنكية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Inventory Product Management',
            ar: 'إدارة المنتجات المخزنية',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Cash Receipts and Payments Vouchers',
            ar: 'سندات الصرف و القبض',
          },
          basic: true,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'Financial Statements Reports',
            ar: 'تقارير الحسابات الختامية',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
      ],
    },

    {
      title: {
        en: 'Integrations',
        ar: 'التكاملات',
      },
      data: [
        {
          name: {
            en: 'Cart',
            ar: 'سلة',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },

        {
          name: {
            en: 'Amazon',
            ar: 'امازون',
          },
          basic: false,
          expanded: false,
          advanced: true,
        },
        {
          name: {
            en: 'SMS',
            ar: 'SMS',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
        {
          name: {
            en: 'WhatsApp',
            ar: 'WhatsApp',
          },
          basic: false,
          expanded: true,
          advanced: true,
        },
      ],
    },
  ];

  constructor() {
    this.languageService.currentLanguage$.subscribe((language) => {
      if (language) {
        this.currentLanguage = language.code;
      }
    });
  }
}
