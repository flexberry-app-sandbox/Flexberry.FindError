import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'A t m_ MACHINE',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A t m_ MACHINE',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A t m_ MACHINE',
          title: 'A t m_ MACHINE'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'a-t-m-m-a-c-h-i-n-e': {
          caption: 'ATM_MACHINE',
          title: 'ATM_MACHINE',
          'i-i-s-find-error-a-t-m-l': {
            caption: 'ATM',
            title: ''
          },
          'i-i-s-find-error-debit-card-l': {
            caption: 'DebitCard',
            title: 'Debit  card'
          },
          'i-i-s-find-error-customer-l': {
            caption: 'Customer',
            title: ''
          },
          'i-i-s-find-error-bank-l': {
            caption: 'Bank',
            title: ''
          },
          'i-i-s-find-error-account-l': {
            caption: 'Account',
            title: ''
          },
          'i-i-s-find-error-a-t-m-transaction-l': {
            caption: 'ATMTransaction',
            title: 'A t m  transaction'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
