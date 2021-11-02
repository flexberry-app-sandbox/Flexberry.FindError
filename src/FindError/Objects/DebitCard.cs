﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.FindError
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Debit  card.
    /// </summary>
    // *** Start programmer edit section *** (DebitCard CustomAttributes)

    // *** End programmer edit section *** (DebitCard CustomAttributes)
    [AutoAltered()]
    [Caption("Debit  card")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("DebitCardE", new string[] {
            "AccountNumber as \'Account number\'",
            "OwnedBy as \'Owned by\'",
            "Bank as \'Bank\'",
            "Bank.Name as \'Name\'",
            "Customer as \'Customer\'",
            "Customer.Name as \'Name\'",
            "Account as \'Account\'",
            "Account.AccountType as \'Account type\'"}, Hidden=new string[] {
            "Bank.Name",
            "Customer.Name",
            "Account.AccountType"})]
    [MasterViewDefineAttribute("DebitCardE", "Bank", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [MasterViewDefineAttribute("DebitCardE", "Customer", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [MasterViewDefineAttribute("DebitCardE", "Account", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "AccountType")]
    [View("DebitCardL", new string[] {
            "AccountNumber as \'Account number\'",
            "OwnedBy as \'Owned by\'",
            "Bank.Name as \'Name\'",
            "Customer.Name as \'Name\'",
            "Account.AccountType as \'Account type\'"})]
    public class DebitCard : ICSSoft.STORMNET.DataObject
    {
        
        private int fAccountNumber;
        
        private string fOwnedBy;
        
        private IIS.FindError.Account fAccount;
        
        private IIS.FindError.Bank fBank;
        
        private IIS.FindError.Customer fCustomer;
        
        // *** Start programmer edit section *** (DebitCard CustomMembers)

        // *** End programmer edit section *** (DebitCard CustomMembers)

        
        /// <summary>
        /// AccountNumber.
        /// </summary>
        // *** Start programmer edit section *** (DebitCard.AccountNumber CustomAttributes)

        // *** End programmer edit section *** (DebitCard.AccountNumber CustomAttributes)
        public virtual int AccountNumber
        {
            get
            {
                // *** Start programmer edit section *** (DebitCard.AccountNumber Get start)

                // *** End programmer edit section *** (DebitCard.AccountNumber Get start)
                int result = this.fAccountNumber;
                // *** Start programmer edit section *** (DebitCard.AccountNumber Get end)

                // *** End programmer edit section *** (DebitCard.AccountNumber Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DebitCard.AccountNumber Set start)

                // *** End programmer edit section *** (DebitCard.AccountNumber Set start)
                this.fAccountNumber = value;
                // *** Start programmer edit section *** (DebitCard.AccountNumber Set end)

                // *** End programmer edit section *** (DebitCard.AccountNumber Set end)
            }
        }
        
        /// <summary>
        /// OwnedBy.
        /// </summary>
        // *** Start programmer edit section *** (DebitCard.OwnedBy CustomAttributes)

        // *** End programmer edit section *** (DebitCard.OwnedBy CustomAttributes)
        [StrLen(255)]
        public virtual string OwnedBy
        {
            get
            {
                // *** Start programmer edit section *** (DebitCard.OwnedBy Get start)

                // *** End programmer edit section *** (DebitCard.OwnedBy Get start)
                string result = this.fOwnedBy;
                // *** Start programmer edit section *** (DebitCard.OwnedBy Get end)

                // *** End programmer edit section *** (DebitCard.OwnedBy Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DebitCard.OwnedBy Set start)

                // *** End programmer edit section *** (DebitCard.OwnedBy Set start)
                this.fOwnedBy = value;
                // *** Start programmer edit section *** (DebitCard.OwnedBy Set end)

                // *** End programmer edit section *** (DebitCard.OwnedBy Set end)
            }
        }
        
        /// <summary>
        /// Debit  card.
        /// </summary>
        // *** Start programmer edit section *** (DebitCard.Account CustomAttributes)

        // *** End programmer edit section *** (DebitCard.Account CustomAttributes)
        [NotNull()]
        public virtual IIS.FindError.Account Account
        {
            get
            {
                // *** Start programmer edit section *** (DebitCard.Account Get start)

                // *** End programmer edit section *** (DebitCard.Account Get start)
                IIS.FindError.Account result = this.fAccount;
                // *** Start programmer edit section *** (DebitCard.Account Get end)

                // *** End programmer edit section *** (DebitCard.Account Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DebitCard.Account Set start)

                // *** End programmer edit section *** (DebitCard.Account Set start)
                this.fAccount = value;
                // *** Start programmer edit section *** (DebitCard.Account Set end)

                // *** End programmer edit section *** (DebitCard.Account Set end)
            }
        }
        
        /// <summary>
        /// Debit  card.
        /// </summary>
        // *** Start programmer edit section *** (DebitCard.Bank CustomAttributes)

        // *** End programmer edit section *** (DebitCard.Bank CustomAttributes)
        [NotNull()]
        public virtual IIS.FindError.Bank Bank
        {
            get
            {
                // *** Start programmer edit section *** (DebitCard.Bank Get start)

                // *** End programmer edit section *** (DebitCard.Bank Get start)
                IIS.FindError.Bank result = this.fBank;
                // *** Start programmer edit section *** (DebitCard.Bank Get end)

                // *** End programmer edit section *** (DebitCard.Bank Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DebitCard.Bank Set start)

                // *** End programmer edit section *** (DebitCard.Bank Set start)
                this.fBank = value;
                // *** Start programmer edit section *** (DebitCard.Bank Set end)

                // *** End programmer edit section *** (DebitCard.Bank Set end)
            }
        }
        
        /// <summary>
        /// Debit  card.
        /// </summary>
        // *** Start programmer edit section *** (DebitCard.Customer CustomAttributes)

        // *** End programmer edit section *** (DebitCard.Customer CustomAttributes)
        [NotNull()]
        public virtual IIS.FindError.Customer Customer
        {
            get
            {
                // *** Start programmer edit section *** (DebitCard.Customer Get start)

                // *** End programmer edit section *** (DebitCard.Customer Get start)
                IIS.FindError.Customer result = this.fCustomer;
                // *** Start programmer edit section *** (DebitCard.Customer Get end)

                // *** End programmer edit section *** (DebitCard.Customer Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DebitCard.Customer Set start)

                // *** End programmer edit section *** (DebitCard.Customer Set start)
                this.fCustomer = value;
                // *** Start programmer edit section *** (DebitCard.Customer Set end)

                // *** End programmer edit section *** (DebitCard.Customer Set end)
            }
        }
        
        // *** Start programmer edit section *** (DebitCard.acess CustomAttributes)

        // *** End programmer edit section *** (DebitCard.acess CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void acess()
        {
            // *** Start programmer edit section *** (DebitCard.acess method implementation)

            return;
            // *** End programmer edit section *** (DebitCard.acess method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "DebitCardE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DebitCardE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DebitCardE", typeof(IIS.FindError.DebitCard));
                }
            }
            
            /// <summary>
            /// "DebitCardL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DebitCardL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DebitCardL", typeof(IIS.FindError.DebitCard));
                }
            }
        }
    }
}