export default {
  projections: {
    ATMTransactionE: {
      transactionId: {
        __caption__: 'Transaction id'
      },
      transactionDate: {
        __caption__: 'Transaction date'
      },
      amount: {
        __caption__: 'Amount'
      },
      account: {
        __caption__: 'Account',
        accountType: {
          __caption__: 'Account type'
        }
      },
      aTM: {
        __caption__: 'ATM',
        adress: {
          __caption__: 'Adress'
        }
      }
    },
    ATMTransactionL: {
      transactionId: {
        __caption__: 'Transaction id'
      },
      transactionDate: {
        __caption__: 'Transaction date'
      },
      amount: {
        __caption__: 'Amount'
      },
      account: {
        __caption__: 'Account type',
        accountType: {
          __caption__: 'Account type'
        }
      },
      aTM: {
        __caption__: 'Adress',
        adress: {
          __caption__: 'Adress'
        }
      }
    }
  },
  validations: {
    transactionId: {
      __caption__: 'Transaction id'
    },
    transactionDate: {
      __caption__: 'Transaction date'
    },
    amount: {
      __caption__: 'Amount'
    },
    aTM: {
      __caption__: 'ATM'
    },
    account: {
      __caption__: 'Account'
    }
  }
};
