## **Description**

The Jlogger is a custom class for Studio logging with timestamp and other formatting that can be used at the View level or Globally across multiple views.

## Usage

*   Add jlogger.js as a Resource
*   Load as Resource Script
*   Create New Logger
*   Set Visibility / Output (true / false)

## Constructor

\<_**Local Logger Class Variable**_\> = new Jlogger (“\<_**Output Display Name**_\>”, “\<_**Display Level**_\>”);

### Ex1

```plaintext
logger = new Jlogger("AR_COE_Logger", "Home.js");
```

\##### 2024/11/26 22:24:55:65 # - AR\_COE\_Logger \[Home.js\] : ($timeout()) Inside of initialization code

### Ex2

```plaintext
$rootScope.logger = new Jlogger("AR_COE_Logger", "GLOBAL");
```

\##### 2024/11/26 15:58:29:73 # - AR\_COE\_Logger \[GLOBAL\] : (selectChanged()) Select Widget Value Changed

## Usage

### Ex1

Pattern = logger.output(_**\<message>**_, \<_**location**_ -OPTIONAl>, \<_**depth**_ -OPTIONAL>)

```plaintext
logger.output("Inside of initialization code", "$timeout()");
```

\##### 2024/11/26 22:24:55:65 # - AR\_COE\_Logger \[Home.js\] : ($timeout()) Inside of initialization code
