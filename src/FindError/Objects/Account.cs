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
    /// Account.
    /// </summary>
    // *** Start programmer edit section *** (Account CustomAttributes)

    // *** End programmer edit section *** (Account CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AccountE", new string[] {
            "AccountType as \'Account type\'"})]
    [View("AccountL", new string[] {
            "AccountType as \'Account type\'"})]
    public class Account : ICSSoft.STORMNET.DataObject
    {
        
        private string fAccountType;
        
        // *** Start programmer edit section *** (Account CustomMembers)

        // *** End programmer edit section *** (Account CustomMembers)

        
        /// <summary>
        /// AccountType.
        /// </summary>
        // *** Start programmer edit section *** (Account.AccountType CustomAttributes)

        // *** End programmer edit section *** (Account.AccountType CustomAttributes)
        [StrLen(255)]
        public virtual string AccountType
        {
            get
            {
                // *** Start programmer edit section *** (Account.AccountType Get start)

                // *** End programmer edit section *** (Account.AccountType Get start)
                string result = this.fAccountType;
                // *** Start programmer edit section *** (Account.AccountType Get end)

                // *** End programmer edit section *** (Account.AccountType Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Account.AccountType Set start)

                // *** End programmer edit section *** (Account.AccountType Set start)
                this.fAccountType = value;
                // *** Start programmer edit section *** (Account.AccountType Set end)

                // *** End programmer edit section *** (Account.AccountType Set end)
            }
        }
        
        // *** Start programmer edit section *** (Account.checkBalance CustomAttributes)

        // *** End programmer edit section *** (Account.checkBalance CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void checkBalance()
        {
            // *** Start programmer edit section *** (Account.checkBalance method implementation)

            return;
            // *** End programmer edit section *** (Account.checkBalance method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "AccountE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AccountE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AccountE", typeof(IIS.FindError.Account));
                }
            }
            
            /// <summary>
            /// "AccountL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AccountL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AccountL", typeof(IIS.FindError.Account));
                }
            }
        }
    }
}
