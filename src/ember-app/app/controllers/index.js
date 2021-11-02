import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.caption'),
          title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.title'),
          children: [{
            link: 'i-i-s-find-error-a-t-m-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-a-t-m-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-a-t-m-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-find-error-debit-card-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-debit-card-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-debit-card-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-find-error-customer-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-customer-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-customer-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-find-error-bank-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-bank-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-bank-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-find-error-account-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-account-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-account-l.title'),
            children: null
          }, {
            link: 'i-i-s-find-error-a-t-m-transaction-l',
            caption: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-a-t-m-transaction-l.caption'),
            title: i18n.t('forms.application.sitemap.a-t-m-m-a-c-h-i-n-e.i-i-s-find-error-a-t-m-transaction-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})