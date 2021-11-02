



CREATE TABLE [Bank] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Account] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [AccountType] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [DebitCard] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [AccountNumber] INT  NULL,

	 [OwnedBy] VARCHAR(255)  NULL,

	 [Account_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Customer_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Bank_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ATM] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Adress] VARCHAR(255)  NULL,

	 [MangedBy] VARCHAR(255)  NULL,

	 [Bank_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ATMTransaction] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [TransactionId] INT  NULL,

	 [TransactionDate] VARCHAR(255)  NULL,

	 [Amount] INT  NULL,

	 [ATM_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Account_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Customer] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Bank_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Account_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [DebitCard] ADD CONSTRAINT [DebitCard_FAccount_0] FOREIGN KEY ([Account_m0]) REFERENCES [Account]
CREATE INDEX DebitCard_IAccount_m0 on [DebitCard] ([Account_m0])

 ALTER TABLE [DebitCard] ADD CONSTRAINT [DebitCard_FCustomer_0] FOREIGN KEY ([Customer_m0]) REFERENCES [Customer]
CREATE INDEX DebitCard_ICustomer_m0 on [DebitCard] ([Customer_m0])

 ALTER TABLE [DebitCard] ADD CONSTRAINT [DebitCard_FBank_0] FOREIGN KEY ([Bank_m0]) REFERENCES [Bank]
CREATE INDEX DebitCard_IBank_m0 on [DebitCard] ([Bank_m0])

 ALTER TABLE [ATM] ADD CONSTRAINT [ATM_FBank_0] FOREIGN KEY ([Bank_m0]) REFERENCES [Bank]
CREATE INDEX ATM_IBank_m0 on [ATM] ([Bank_m0])

 ALTER TABLE [ATMTransaction] ADD CONSTRAINT [ATMTransaction_FATM_0] FOREIGN KEY ([ATM_m0]) REFERENCES [ATM]
CREATE INDEX ATMTransaction_IATM_m0 on [ATMTransaction] ([ATM_m0])

 ALTER TABLE [ATMTransaction] ADD CONSTRAINT [ATMTransaction_FAccount_0] FOREIGN KEY ([Account_m0]) REFERENCES [Account]
CREATE INDEX ATMTransaction_IAccount_m0 on [ATMTransaction] ([Account_m0])

 ALTER TABLE [Customer] ADD CONSTRAINT [Customer_FBank_0] FOREIGN KEY ([Bank_m0]) REFERENCES [Bank]
CREATE INDEX Customer_IBank_m0 on [Customer] ([Bank_m0])

 ALTER TABLE [Customer] ADD CONSTRAINT [Customer_FAccount_0] FOREIGN KEY ([Account_m0]) REFERENCES [Account]
CREATE INDEX Customer_IAccount_m0 on [Customer] ([Account_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

