



CREATE TABLE "Bank"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Account"
(

	"primaryKey" RAW(16) NOT NULL,

	"AccountType" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "DebitCard"
(

	"primaryKey" RAW(16) NOT NULL,

	"AccountNumber" NUMBER(10) NULL,

	"OwnedBy" NVARCHAR2(255) NULL,

	"Account_m0" RAW(16) NOT NULL,

	"Customer_m0" RAW(16) NOT NULL,

	"Bank_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ATM"
(

	"primaryKey" RAW(16) NOT NULL,

	"Adress" NVARCHAR2(255) NULL,

	"MangedBy" NVARCHAR2(255) NULL,

	"Bank_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ATMTransaction"
(

	"primaryKey" RAW(16) NOT NULL,

	"TransactionId" NUMBER(10) NULL,

	"TransactionDate" NVARCHAR2(255) NULL,

	"Amount" NUMBER(10) NULL,

	"ATM_m0" RAW(16) NOT NULL,

	"Account_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Customer"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Bank_m0" RAW(16) NOT NULL,

	"Account_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "DebitCard"
	ADD CONSTRAINT "DebitCard_FAccount_0" FOREIGN KEY ("Account_m0") REFERENCES "Account" ("primaryKey");

CREATE INDEX "DebitCard_IAccount_m0" on "DebitCard" ("Account_m0");

ALTER TABLE "DebitCard"
	ADD CONSTRAINT "DebitCard_FCustomer_0" FOREIGN KEY ("Customer_m0") REFERENCES "Customer" ("primaryKey");

CREATE INDEX "DebitCard_ICustomer_m0" on "DebitCard" ("Customer_m0");

ALTER TABLE "DebitCard"
	ADD CONSTRAINT "DebitCard_FBank_0" FOREIGN KEY ("Bank_m0") REFERENCES "Bank" ("primaryKey");

CREATE INDEX "DebitCard_IBank_m0" on "DebitCard" ("Bank_m0");

ALTER TABLE "ATM"
	ADD CONSTRAINT "ATM_FBank_0" FOREIGN KEY ("Bank_m0") REFERENCES "Bank" ("primaryKey");

CREATE INDEX "ATM_IBank_m0" on "ATM" ("Bank_m0");

ALTER TABLE "ATMTransaction"
	ADD CONSTRAINT "ATMTransaction_FATM_0" FOREIGN KEY ("ATM_m0") REFERENCES "ATM" ("primaryKey");

CREATE INDEX "ATMTransaction_IATM_m0" on "ATMTransaction" ("ATM_m0");

ALTER TABLE "ATMTransaction"
	ADD CONSTRAINT "ATMTransaction_FAccount_0" FOREIGN KEY ("Account_m0") REFERENCES "Account" ("primaryKey");

CREATE INDEX "ATMTransaction_IAccount_m0" on "ATMTransaction" ("Account_m0");

ALTER TABLE "Customer"
	ADD CONSTRAINT "Customer_FBank_0" FOREIGN KEY ("Bank_m0") REFERENCES "Bank" ("primaryKey");

CREATE INDEX "Customer_IBank_m0" on "Customer" ("Bank_m0");

ALTER TABLE "Customer"
	ADD CONSTRAINT "Customer_FAccount_0" FOREIGN KEY ("Account_m0") REFERENCES "Account" ("primaryKey");

CREATE INDEX "Customer_IAccount_m0" on "Customer" ("Account_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


