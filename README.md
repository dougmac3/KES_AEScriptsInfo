# aescripts-JSX-licensing-framework
Licensing framework for jsx scripts. This framework is compatible with After Effects CS4 and up.


<a name="usage"></a>
## Usage Instructions

1. **First and foremost, read the [*Javascript Best Practices*](https://github.com/aescripts/aescripts-JSX-licensing-framework/blob/master/Javascript-Best-Practices.md) to make sure you are playing nicely**
1. Clone the framework from GitHub. Check out [*How to link to this framework*](https://github.com/aescripts/aescripts-JSX-licensing-framework/blob/master/How-to-Link-to-the-Framework.md) if you are not familiar with GitHub

1. **Set the variables for your script in the settings object:**

```javascript
var af_settings = {
    // THESE SETTINGS ARE MANDATORY
    scriptName: "Test Product", //This is the name of your product,  best thing to do is to use your global script name variable so they are always in sync
    scriptVersion: "1.0", //just the version number, do not add a v.  best thing to do is to use your global script version variable so they are always in sync
    scriptAuthor: "Joe Author", // your author name, this will be used in the copyright on the help UI
    scriptURL: "http://aescripts.com/test-product/", //enter the script URL here
    privateNumber: 112233, // **THIS IS YOUR SCRIPT'S UNIQUE PRIVATE NUMBER** please get this number from the aescripts admin, every product and major version will need a new number
    productSKU: "AESLT-SUL", // this is the products SKU on the site, ie AESLT-SUL
  
    // HELP UI VARIABLES ////////
    helpText: "This is the help docs. Use \n for new lines", //You must include some brief instructions on how the tool works, THIS IS MANDATORY. If you don't use the helpUI function, please include the intructions in your UI somewhere.
    
    // THESE SETTINGS ARE ALL OPTIONAL
    helpButtons: [  //optional, You can include up to 3 buttons at the bottom of the help UI. They are defined in an array, if you are not using the helpUI function you do not need to include this variable
        //   {name: "Video Tutorial", url: "https://youtu.be/j7Q2bhWSmJk"}, // this object defines the 1st button
        //   {name: "Other Products", url: "http://aescripts.com/authors/joe-author"}, // this would be the second button
        //only define the buttons you want, up to 3 
    ],

    ////// TRIAL ///////
    offerTrial: true, //optional, set to false if you don't want to offer a trial mode, true if you do, defaults to true

    // BETA MODE SETTINGS  
    offerBeta: false, //optional, set to true if you are distributing the script as a beta test, set the expiration date below, defaults to false
    betaStartDate: new Date("Nov 1, 2017"), //optional, Date the beta will start
    betaExpirationDate: new Date("Dec 1, 2017"), //optional, Date the beta should expire in this format: "Dec 1, 2017"
    betaSupportEmail: "http://aescripts.com/contact", //optional, IF YOU ARE RUNNING A BETA PLEASE PUT YOUR EMAIL HERE SO BETA TESTERS CAN CONTACT YOU IF THERE ARE ISSUES, replace with "http://aescripts.com/contact" for shipping version
};
```

<a name="include"></a>
2. **Include the framework:**
  * By using the `//@include` statement
  * Or by copy and pasting the contents of `trial_serializaton_generic_v3_mx.jsx`
  
> **Using the `//@include` is recommended** because you can [link directly to the framework](https://github.com/aescripts/aescripts-JSX-licensing-framework/blob/master/How-to-Link-to-the-Framework.md) file on github and this way your licensing will always be the latest version.  When you export your script to a `.jsxbin` file, ESTK will import the include into the resulting file. 
> In case you are curious, `//@include` and `#include` are the same thing but `//@include` passes a [lint test](http://jshint.com/) while `#include` does not.
  

```javascript
//@include "trial_serializaton_generic_v3_mx.jsx"
```
> **IMPORTANT:** You should never distribute the `trial_serializaton_generic_v3_mx.jsx` separately!
<a name="constructor"></a>
3. **Create a new constructor for the framework:**
  * You must pass the settings object for your script defined above
  * Use a random variable name
  * You only need to do this once, once it is created you simply call if by its variable name


```javascript
var af = new a(af_settings);  // instead of "af" use a random variable name like g7
```

<a name="gatekeeper"></a>
4. **Use the framework object as a gatekeeper to start your script:**

```javascript
  if (af.c()) {
  // Run your script
  }
```
<a name="unique_function"></a>
5. **Make sure your entire script is wrapped in a uniquely name function and create the framework object inside this main function.**

Here is an example of how your script should be structred:
```javascript
//always use a unique name for the main function as it will live in the global scope
function ja_MyAwesomeTool(thisObj) 
   {  //ja_would be your initials
   
        var af_settings = {
            ....
        }
        
        //@include "trial_serializaton_generic_v3_mx.jsx"
        
        var g7 = new a(af_settings); //remember to use a random variable name
  
        if (g7.c()) {
            myAwesomeToolMainFunction(thisObj) { //
                ...
            }
        }
	
   }

        ja_MyAwesomeTool(this); //pass 'this' so you can use it to build a dockable UI
```
<a name="encode"></a>
6. **Encode the Settings Object**

Use `Encode text in ESTK.jsx` in the `Tools` folder to encode the settings object and any other part of your script that you would like to make harder for hackers to get to.  It super easy to use:

1. Run `Encode text in ESTK.jsx` in ExtendScript Toolkit (ESTK) by double-clicking on the file. If you get an `You are about to run a script in estoolkit-4.0#dbg` alert, just click `Yes`
1. Select the code you would like to encode
1. Click on the `Encode Selection` button
1. The code will be encoded and the source code will be commented out should you ever need to go back to it.  

*When you export to .jsxbin all comments will be removed so you don't need to remove it before exporting*

![How to encode a selection](http://share.aescripts.com/0u281O1e3E3j/Screen%20Recording%202017-12-06%20at%2003.03%20PM.gif)


<a name="minify"></a>
7. **If you minify or uglify your code do it independently of the included framework and join it later**

Since the framework is already uglified it's possible that uglyfying again will cause issues in the code so instead process your code first and then add the include before the final export to .jsxbin


<a name="functions"></a>
## Framework functions

<a name="mandatory"></a>
### MANDATORY
The Check function is mandatory
(#check) ### Check
This is the main check that you should use as the gateway to your script
> *Returns true or false*
```javascript
af.c()
```
<a name="recommended"></a>
### RECOMMENDED

  1. [Help UI](#helpUI)
  1. [Is Trial](#isTrial)
  1. [Silent License Check](#silentCheck)
  
These are the recommended and easiest functions to implement, unless you have a good reason not to use these you should use them and skip the whole "not recommended" section below

 <a name="helpUI"></a>
 ### Help UI
  This will create a separate UI window where that has the necessary license tools as well as give you the option of adding some help text and buttons as defined in the settings object
  > *Returns the help UI*
  ```javascript
 af.helpUI()
 ```
 
 [⬆ back to index](#recommended)
 
 <a name="isTrial"></a>
 ### Is Trial
  This will return whether the script is running in trial mode or not.  Use this to add some trial limitations to your script besides time
    > *Returns true or false*
    
  ```javascript
 af.t()
 ```
  #### PLEASE ADD SOME TRIAL LIMITATIONS BESIDES TIME, NO SERIOUSLY PLEASE DO IT!
  Here's an example, but obviously, this will depend on the functions in your tool

  ```javascript
 var isTrial = af.t();
 var trialLayerLimit = 5;
 var numLayers = app.project.activeItem.selectedLayers.length;

 if (isTrial && numLayers > trialLayerLimit) {
	alert("The trial version is limited to "+trialLayerLimit+" layers\nOnly the first five layers will be processed");
	numLayers = trialLayerLimit;
	}
	
	for (var i = 0; i <= numLayers; i++) {
		...
		
 ```
 
[⬆ back to index](#recommended)
 
<a name="silentCheck"></a>
### Silent License Check
  This will check license silently (will not open UI if it is invalid) and will return true on valid license or valid trial. This is mainly intended to catch cases where the normal check has been removed or bypassed. There are various nefarious scripts floating around the dark web that do this. By adding these checks in random places you will protect your script against them.
> *Returns true or false*

  ```javascript
af.s()
```

 #### PLEASE ADD SOME SILENT CHECKS IN RANDOM PLACES
  If the check fails then fall back to trial mode:

  ```javascript
isTrial = (!af.s());
```
 [⬆ back to index](#recommended)
 
  <a name="not-recommended"></a>
### NOT RECOMMENDED BUT REQUIRED IF NOT USING `af.helpUI();`
*Not as easy to implement and not necessary if following RECOMMENDED section above as they are all already included in `af.helpUI()`*

> *IF YOU ARE NOT USING `af.helpUI();` YOU WILL NEED TO MAKE YOUR OWN HELP UI*
> Use the following functions to add the required license functionality to your UI
> *YOU MUST INCLUDE ALL OF THESE*

  1. [Get Registration](#getRegistration)
  1. [Get Update Status Check](#getUpdateCheckStatus)
  1. [Do Update Check](#doUpdateCheck)
  1. [Remove / Deactivate License](#removeLicense)
  1. [Open Support Ticket](#openSupportTicket)

<a name="getRegistration"></a>
### Get Registration
  This will return the registration (this also works in trial mode).
  > *Returns parsed registration info*
  
  ```javascript
af.getRegistration()
```

 [⬆ back to index](#not-recommended)
 
<a name="getUpdateCheckStatus"></a>
### Get Update Status Check
  Gets the Update Check status from the prefs
  > *Returns true or false*

  ```javascript
af.getUpdateCheckStatus()
```
  Use this to set the state of the checkbox:  
  ```javascript
doUpdateCheckbox.value = af.getUpdateCheckStatus();
```

 [⬆ back to index](#not-recommended)
 
<a name="doUpdateCheck"></a>
### Do Update Check
  Turns automatic online update check on or off.
  > *No return*

  ```javascript
af.doUpdateCheck(false)
```

  Link this to a checkbox that allows the user to disable or enable the checks:

  ```javascript
  doUpdateCheckbox.onClick = function () { 
		af.doUpdateCheck (this.value); 
		}
```

[⬆ back to index](#not-recommended)
 
<a name="removeLicense"></a>
### Remove / Deactivate License
  This will remove the local license or deactivate a server license
Link this to a `Deactivate License` button in the UI but preferably in a separate help or info UI
> *Returns true if license removal was successful*

  ```javascript
af.r()
```

   *Example:*
   ```javascript
   deactivateButton.visible = !af.t(); //only show button when licensed, ie. not in trial mode
   deactivateButton.onClick = function () {
                   if (af.r()) {
                   registration.text = af.getRegistration(); //update the registration since it has changed
                   this.visible = false; //we can hide the button since we have removed the license
                   }  
   ```
 
 [⬆ back to index](#not-recommended)
 
<a name="openSupportTicket"></a>
### Open Support Ticket
This will a support ticket for your product on aescripts.com. 
> *Opens a the default browser on the users computer and pre-populates the support ticket*

  ```javascript
af.openSupportTicket()
```
  You can optionally pass a settings object to define the subject or pass some diagnostic info.
The script version, OS and AE versions are already being passed so you do not need to pass these. Only pass diagnostics that are specific to your script (besides the version).

  ```javascript
af.openSupportTicket({subject:"This is the ticket subject",diagnostic:"Diagnostic info specific to your script. Use \nfor new line"});
```

 [⬆ back to index](#not-recommended)


<a name="helper-functions"></a>
## OPTIONAL HELPER FUNCTIONS
These functions are here for you to use if you need them but *they are completely optional*

  1. [Framework Version](#frameworkVersion)
  2. [Open URL](#openURL)
  3. [External Settings](#externalSettings):
   * [Have Settings](#haveSetting)
   * [Get Settings](#getSetting)
   * [Save Settings](#saveSetting)
  4. [JSON](#json):
   * [readJSON](#readJSON)
   * [writeJSON](#writeJSON)
    

<a name="frameworkVersion"></a>
### Framework Version
  This will return the version of the framework
> *Use this internally to verify the version you are using, this is not inteded for external use*

  ```javascript
af.frameworkVersion()
```
 [⬆ back to index](#helper-functions)
 
<a name="openURL"></a>
### Open URL
  This will open the specified url in the default browser
> *Opens a the default browser on the users computer and directls to the url*

  ```javascript
af.openURL(url)
```
 [⬆ back to index](#helper-functions)
 
<a name="externalSettings"></a>
## External Settings
  These functions can save and retrieve from an external JSON file in the `Folder.userData` folder. These can be useful if you would like to have your settings be independent of the AE preferences or if you are running into size limitations with the AE settings. It's also handy and easier as you can save arrays and objects directly.

  **WARNING** You cannot save huge objects like an After Effects layer or comp (actually any native AE object will probably crash it). If you use these functions, you must test it thoroughly to make sure it can handle your data properly.

  *Having said that, you should always try to use the built in AE settings functions `app.settings.getSetting()`, etc first and only use these if you have a good reason to*

<a name="haveSetting"></a>
### Have Setting
   Checks to see if the setting exists
> *Returns true or false*

   ```javascript
af.haveSetting(Header, Name)
```

 [⬆ back to index](#helper-functions)

<a name="getSetting"></a>
### Get Setting
   Gets the setting
> *Returns the setting*

   ```javascript
af.getSetting(Header, Name)
```

 [⬆ back to index](#helper-functions)
 
<a name="saveSetting"></a>
### Save Setting
   Saves the setting
> *No return*

   ```javascript
af.saveSetting(Header, Name, Value)
```

   *Example:*
   ```javascript
	af.saveSetting("Color Settings", "My favorite color", "Orange");
   
	var setting = ( af.haveSetting ("Color Settings", "My favorite color") ) //first check to make sure it exists
			? af.getSetting ("Color Settings", "My favorite color")  //get it if it exists
			: "My favorite color setting not found";  //fallback in case it doesn't exist
``` 

 [⬆ back to index](#helper-functions)
 
 ## JSON
  These functions can read and write to and from an external JSON file. These can be useful if your script needs to read/write external JSON files. Please note that you should use the [External Settings](#externalSettings) functions if you are just interested in saving settings.

  **WARNING** You cannot save huge objects like an After Effects layer or comp (actually any native AE object will probably crash it). But should work great for most use cases.

<a name="readJSON"></a>
### Read JSON
   Reads and parses an external JSON file
> *Returns parsed object*

   ```javascript
af.readJSON(file)
```

 [⬆ back to index](#helper-functions)

<a name="writeJSON"></a>
### Write JSON
   Stringifies object and writes it to an external JSON file
> *Returns true if write is successful*

   ```javascript
af.writeJSON(object,file)
```

 [⬆ back to index](#helper-functions)
 
 *Example:*
```javascript
var json = af.readJSON( File.openDialog("Choose JSON file") );
         
af.writeJSON(json, File.saveDialog("Save JSON file","Javascript files:*.json") );
         
```

 [⬆ back to index](#helper-functions)
 
 <a name="advanced"></a>
## ADVANCED OPTIONS
These are some advanced options - *they are completely optional*

<a name="getSetting"></a>
### Help UI button options
   The buttons can be `Button` or `Checkbox`  

The `helpButtons` array in the settings object defaults to a normal button that when clicked will send the user to the address defined in the `url` variable.  

There are 3 other options that can be optionally defined:

1. `type` Can be either `Button` or `Checkbox` 

1. `btnValue` Used to define the boolean value of the checkbox. (Has no effect when type is `Button`)

1. `onClickFunction` The function that will be executed when the button is clicked or the checkbox is checked



   *Example:*
```javascript
 helpButtons: [  
         { 
	 name: "Cutoff DropDown Menu Fix",  
	 type: "Checkbox", 
         onClickFunction: function () {
                                     dropdownFix = this.value;
                                     app.settings.saveSetting("aescripts", "dropdownFix", this.value);
                                     alert("Please restart script to have the change take effect");
                                      },
         btnValue: dropdownFix }
    ],
```
    


 [⬆ back to index](#advanced)
