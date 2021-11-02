import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFindErrorATMLForm from './forms/i-i-s-find-error-a-t-m-l';
import IISFindErrorATMTransactionLForm from './forms/i-i-s-find-error-a-t-m-transaction-l';
import IISFindErrorAccountLForm from './forms/i-i-s-find-error-account-l';
import IISFindErrorBankLForm from './forms/i-i-s-find-error-bank-l';
import IISFindErrorCustomerLForm from './forms/i-i-s-find-error-customer-l';
import IISFindErrorDebitCardLForm from './forms/i-i-s-find-error-debit-card-l';
import IISFindErrorATMEForm from './forms/i-i-s-find-error-a-t-m-e';
import IISFindErrorATMTransactionEForm from './forms/i-i-s-find-error-a-t-m-transaction-e';
import IISFindErrorAccountEForm from './forms/i-i-s-find-error-account-e';
import IISFindErrorBankEForm from './forms/i-i-s-find-error-bank-e';
import IISFindErrorCustomerEForm from './forms/i-i-s-find-error-customer-e';
import IISFindErrorDebitCardEForm from './forms/i-i-s-find-error-debit-card-e';
import IISFindErrorATMTransactionModel from './models/i-i-s-find-error-a-t-m-transaction';
import IISFindErrorATMModel from './models/i-i-s-find-error-a-t-m';
import IISFindErrorAccountModel from './models/i-i-s-find-error-account';
import IISFindErrorBankModel from './models/i-i-s-find-error-bank';
import IISFindErrorCustomerModel from './models/i-i-s-find-error-customer';
import IISFindErrorDebitCardModel from './models/i-i-s-find-error-debit-card';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-find-error-a-t-m-transaction': IISFindErrorATMTransactionModel,
    'i-i-s-find-error-a-t-m': IISFindErrorATMModel,
    'i-i-s-find-error-account': IISFindErrorAccountModel,
    'i-i-s-find-error-bank': IISFindErrorBankModel,
    'i-i-s-find-error-customer': IISFindErrorCustomerModel,
    'i-i-s-find-error-debit-card': IISFindErrorDebitCardModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'a-t-m-m-a-c-h-i-n-e': {
          caption: 'a-t-m-m-a-c-h-i-n-e',
          title: 'a-t-m-m-a-c-h-i-n-e',
          'i-i-s-find-error-a-t-m-l': {
            caption: 'i-i-s-find-error-a-t-m-l',
            title: 'i-i-s-find-error-a-t-m-l'
          },
          'i-i-s-find-error-debit-card-l': {
            caption: 'i-i-s-find-error-debit-card-l',
            title: 'i-i-s-find-error-debit-card-l'
          },
          'i-i-s-find-error-customer-l': {
            caption: 'i-i-s-find-error-customer-l',
            title: 'i-i-s-find-error-customer-l'
          },
          'i-i-s-find-error-bank-l': {
            caption: 'i-i-s-find-error-bank-l',
            title: 'i-i-s-find-error-bank-l'
          },
          'i-i-s-find-error-account-l': {
            caption: 'i-i-s-find-error-account-l',
            title: 'i-i-s-find-error-account-l'
          },
          'i-i-s-find-error-a-t-m-transaction-l': {
            caption: 'i-i-s-find-error-a-t-m-transaction-l',
            title: 'i-i-s-find-error-a-t-m-transaction-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-find-error-a-t-m-l': IISFindErrorATMLForm,
    'i-i-s-find-error-a-t-m-transaction-l': IISFindErrorATMTransactionLForm,
    'i-i-s-find-error-account-l': IISFindErrorAccountLForm,
    'i-i-s-find-error-bank-l': IISFindErrorBankLForm,
    'i-i-s-find-error-customer-l': IISFindErrorCustomerLForm,
    'i-i-s-find-error-debit-card-l': IISFindErrorDebitCardLForm,
    'i-i-s-find-error-a-t-m-e': IISFindErrorATMEForm,
    'i-i-s-find-error-a-t-m-transaction-e': IISFindErrorATMTransactionEForm,
    'i-i-s-find-error-account-e': IISFindErrorAccountEForm,
    'i-i-s-find-error-bank-e': IISFindErrorBankEForm,
    'i-i-s-find-error-customer-e': IISFindErrorCustomerEForm,
    'i-i-s-find-error-debit-card-e': IISFindErrorDebitCardEForm
  },

});

export default translations;
