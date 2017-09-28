# aescripts-JSX-licensing-framework
Licensing framework for jsx scripts

## Usage Instructions

1. **Set the variables for your script in the settings object:**

```javascript
var af_settings = {
	scriptName: "Test Product",  //This is the name of your product,  best thing to do is to use your global script name variable so they are always in sync
	scriptVersion: "1.0",   //just the version number, do not add a v.  best thing to do is to use your global script version variable so they are always in sync
	privateNum: 112233,   // **THIS IS YOUR SCRIPT'S UNIQUE PRIVATE NUMBER** please get this number from the aescripts admin, every product and major version will need a new number
	SKU: "AESLT-SUL", // this is the products SKU on the site, ie AESLT-SUL
	trialUrl: "http://aescripts.com/test-product/",  //enter the script URL here
	authorName: "Joe Author", // your author name, this will be used in the copyright on the help UI
	
	// HELP UI VARIABLES ////////
	helpText: "This is the help docs. Use \n for new lines", //You must include some brief instructions on how the tool works, THIS IS MANDATORY
        
		helpButtons: [   // THIS IS OPTIONAL //  You can include up to 3 buttons at the bottom of the help UI. They are defined in an array, if you are not using the helpUI function you do not need to include this variable
                         //   {name: "Video Tutorial", url: "https://youtu.be/j7Q2bhWSmJk"}, // this object defines the 1st button
                         //   {name: "Other Products", url: "http://aescripts.com/author/joe-author"}, // this would be the second button
                            //only define the buttons you want, up to 3 
                            ],

	////// TRIAL EXPIRATION  VARIABLES///////
	betaSupportEmail: "http://aescripts.com/contact", //IF YOU ARE RUNNING A BETA PLEASE PUT YOUR EMAIL HERE SO BETA TESTERS CAN CONTACT YOU IF THERE ARE ISSUES, replace with "http://aescripts.com/contact" for shipping version
	offerTrial: true, //set to false if you don't want to offer a trial mode, true if you do 
	trialLengthDays: 7,  // length of trial	

	// BETA MODE SETTINGS
	betaMode: false,  // set to true if you are distributing the script as a beta test, set the expiration date below
	betaStartDate: new Date("Nov 1, 2017"), //Date the beta will start
	betaExpirationDate: new Date("Dec 1, 2017"),  // Date the beta should expire in this format: "Dec 1, 2017"
	}
```

2. **Include the framework:**
  * By using the #include statement
  * Or by copy and pasting the contents of `trial_serializaton_generic_v3_mx.jsx`

```javascript
#include "trial_serializaton_generic_v3_mx.jsx";
```

3. **Create a new constructor for the framework:**
  * You must pass the settings object for your script defined above
  * Use a random variable name
  * You only need to do this once, once it is created you simply call if by its variable name


```javascript
var af = new a(af_settings);  // instead of "af" use a random variable name like g7
```


4. **Use the framework object as a gatekeeper to start your script:**

```javascript
  if (af.c()) {
  // Run your script
  }
```

5. **Make sure your entire script is wrapped in a uniquely name function and create the framework object inside this main function:**
```javascript
//always use a unique name for the main function as it will live in the global scope
	ja_MyAwesomeTool (thisObj) {  
	var af_settings = {
		....
	}
	#include "trial_serializaton_generic_v3.jsx";
	var g7 = new a(af_settings);   //remember to use a random variable name
	if (g7.c()) {
		myAwesomeToolMainFunction (thisObj) { //
		...
		}
	}
 
	ja_MyAwesomeTool (this);  //pass 'this' so you can use it to build a dockable UI
```




## Framework functions

### MANDATORY
The Check function is mandatory
### Check
This is the main check that you should use as the gateway to your script
```javascript
af.c()
```

### RECOMMENDED
These are the recommended and easiest functions to implement, unless you have a good reason not to use these you should use them and skip the whole "not recommended" section below
### Help UI
This will create a separate UI window where that has the necessary license tools as well as give you the option of adding some help text and buttons as defined in the settings object
```javascript
af.helpUI()
```
### Is Trial
This will return whether the script is running in trial mode or not.  Use this to add some trial limitations to your script besides time
```javascript
af.t()
```
#### PLEASE ADD SOME TRIAL LIMITATIONS BESIDES TIME, NO SERIOUSLY PLEASE DO IT!
Here's an example, but obviously, this will depend on the functions in your tool

```javascript
var isTrial = af.t()
var numLayers = app.project.activeItem.selectedLayers;

if (isTrial && numLayers > 5) {
	alert("The trial version is limited to 5 layers\nOnly the first five layers will be processed");
	numLayers = 5;
	}
	
	for (var i = 0; i <= numLayers; i++) {
		...
		
```

### Silent License Check
This will check the license silently (won't prompt the user for a code if it's invalid)

```javascript
af.s()
```

#### PLEASE ADD SOME SILENT CHECKS IN RANDOM PLACES
If the check fails then fall back to trial mode:

```javascript
isTrial = (!af.s());
```

### NOT RECOMMENDED
*Not as easy to implement and not necessary if following RECOMMENDED section above as they are all already included in `af.helpUI()`*

*IF YOU ARE NOT USING `af.helpUI();` YOU WILL NEED TO MAKE YOUR OWN HELP UI*
Use the following functions to add the required license functionality to your UI
*YOU MUST INCLUDE ALL OF THESE*

### Get Registration
This will return the registration (this also works in trial mode).
```javascript
af.getRegistration()
```

### Get Update Status Check
Gets the Update Check status from the prefs

```javascript
af.getUpdateCheckStatus()
```
Use this to set the state of the checkbox:  
```javascript
doUpdateCheckbox.value = af.getUpdateCheckStatus();
```

### Do Update Check
Turns automatic online update check on or off.

```javascript
af.doUpdateCheck(false)
```

Link this to a checkbox that allows the user to disable or enable the checks:

```javascript
doUpdateCheckbox.onClick = function () { 
		af.doUpdateCheck (this.value); 
		}
```

### Remove License
This will remove the local license or deactivate a server license
Link this to a button in the UI but preferably in a separate help or info UI

```javascript
af.r()
```

### Open Support Ticket
This will a support ticket for your product on aescripts.com. 

```javascript
af.openSupportTicket()
```






## OPTIONAL HELPER FUNCTIONS
This functions are here for you to use if you need them but you absolutely do not need to use them

### Open URL
This will open the specified url in the default browser

```javascript
af.openURL(url)
```

## External Settings
These functions can save and retrieve from an external file. These can be useful if you would like to have your settings be independent of the AE settings or if you are running into size limitations with the AE settings.

*You should always try to use the built in AE settings functions `app.settings.getSetting()`, etc first and only use these in case they don't work for whatever reason*

### Have Setting
Checks to see if the setting exists

```javascript
af.haveSetting(Header, Name)
```
### Get Setting
Gets the setting

```javascript
af.getSetting(Header, Name)
```
### Save Setting
Saves the setting

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
