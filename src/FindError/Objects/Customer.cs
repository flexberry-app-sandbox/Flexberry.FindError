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
    /// Customer.
    /// </summary>
    // *** Start programmer edit section *** (Customer CustomAttributes)

    // *** End programmer edit section *** (Customer CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("CustomerE", new string[] {
            "Name as \'Name\'",
            "Account as \'Account\'",
            "Account.AccountType as \'Account type\'"}, Hidden=new string[] {
            "Account.AccountType"})]
    [MasterViewDefineAttribute("CustomerE", "Account", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "AccountType")]
    [View("CustomerL", new string[] {
            "Name as \'Name\'",
            "Account.AccountType as \'Account type\'"})]
    public class Customer : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.FindError.Account fAccount;
        
        private IIS.FindError.Bank fBank;
        
        // *** Start programmer edit section *** (Customer CustomMembers)

        // *** End programmer edit section *** (Customer CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Customer.Name CustomAttributes)

        // *** End programmer edit section *** (Customer.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Customer.Name Get start)

                // *** End programmer edit section *** (Customer.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Customer.Name Get end)

                // *** End programmer edit section *** (Customer.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Customer.Name Set start)

                // *** End programmer edit section *** (Customer.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Customer.Name Set end)

                // *** End programmer edit section *** (Customer.Name Set end)
            }
        }
        
        /// <summary>
        /// Customer.
        /// </summary>
        // *** Start programmer edit section *** (Customer.Account CustomAttributes)

        // *** End programmer edit section *** (Customer.Account CustomAttributes)
        [NotNull()]
        public virtual IIS.FindError.Account Account
        {
            get
            {
                // *** Start programmer edit section *** (Customer.Account Get start)

                // *** End programmer edit section *** (Customer.Account Get start)
                IIS.FindError.Account result = this.fAccount;
                // *** Start programmer edit section *** (Customer.Account Get end)

                // *** End programmer edit section *** (Customer.Account Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Customer.Account Set start)

                // *** End programmer edit section *** (Customer.Account Set start)
                this.fAccount = value;
                // *** Start programmer edit section *** (Customer.Account Set end)

                // *** End programmer edit section *** (Customer.Account Set end)
            }
        }
        
        /// <summary>
        /// Customer.
        /// </summary>
        // *** Start programmer edit section *** (Customer.Bank CustomAttributes)

        // *** End programmer edit section *** (Customer.Bank CustomAttributes)
        [NotNull()]
        public virtual IIS.FindError.Bank Bank
        {
            get
            {
                // *** Start programmer edit section *** (Customer.Bank Get start)

                // *** End programmer edit section *** (Customer.Bank Get start)
                IIS.FindError.Bank result = this.fBank;
                // *** Start programmer edit section *** (Customer.Bank Get end)

                // *** End programmer edit section *** (Customer.Bank Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Customer.Bank Set start)

                // *** End programmer edit section *** (Customer.Bank Set start)
                this.fBank = value;
                // *** Start programmer edit section *** (Customer.Bank Set end)

                // *** End programmer edit section *** (Customer.Bank Set end)
            }
        }
        
        // *** Start programmer edit section *** (Customer.own CustomAttributes)

        // *** End programmer edit section *** (Customer.own CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void own()
        {
            // *** Start programmer edit section *** (Customer.own method implementation)

            return;
            // *** End programmer edit section *** (Customer.own method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "CustomerE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CustomerE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CustomerE", typeof(IIS.FindError.Customer));
                }
            }
            
            /// <summary>
            /// "CustomerL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CustomerL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CustomerL", typeof(IIS.FindError.Customer));
                }
            }
        }
    }
}