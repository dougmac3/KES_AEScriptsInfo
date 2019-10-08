 function KEYboard_allScript (thisObj){
//     var af_settings = {
//         
//    // THESE SETTINGS ARE MANDATORY
//    scriptName: "KEYboard", //This is the name of your product,  best thing to do is to use your global script name variable so they are always in sync
//    scriptVersion: "1.2.1", //just the version number, do not add a v.  best thing to do is to use your global script version variable so they are always in sync
//    scriptAuthor: "Olaola Yuan", // your author name, this will be used in the copyright on the help UI
//    scriptURL: "https://aescripts.com/keyboard/", //enter the script URL here
//    privateNumber: 6842456466681391, // **THIS IS YOUR SCRIPT'S UNIQUE PRIVATE NUMBER** please get this number from the aescripts admin, every product and major version will need a new number
//    productSKU: "OYK-SUL", // this is the products SKU on the site, ie AESLT-SUL
//  
//    // HELP UI VARIABLES ////////
//    helpText: "Controlling keyframes is animator’s daily routine. \n\nKEYboard provides a series of function for keyframes in After Effects. Those functions are small but can be used frequently, such as setting keyframe Ease, cloning keys, mirroring keys, shifting keys or randomizing keys. The most important is you can do those through keyboard shortcuts.", //You must include some brief instructions on how the tool works, THIS IS MANDATORY. If you don't use the helpUI function, please include the intructions in your UI somewhere.
//    
//    // THESE SETTINGS ARE ALL OPTIONAL
//    helpButtons: [  
//         {name: "Tutorial", url: "https://youtu.be/j7Q2bhWSmJk"}
//        //optional, You can include up to 3 buttons at the bottom of the help UI. They are defined in an array, if you are not using the helpUI function you do not need to include this variable
//        //   {name: "Video Tutorial", url: "https://youtu.be/j7Q2bhWSmJk"}, // this object defines the 1st button
//        //   {name: "Other Products", url: "http://aescripts.com/authors/joe-author"}, // this would be the second button
//        //only define the buttons you want, up to 3 
//    ],
//
//    ////// TRIAL ///////
//    offerTrial: true, //optional, set to false if you don't want to offer a trial mode, true if you do, defaults to true
//
//    // BETA MODE SETTINGS // optional, you only need to include these if you are using the beta mode
//    offerBeta: false, //optional, set to true if you are distributing the script as a beta test, set the expiration date below, defaults to false
//    betaStartDate: new Date("Nov 1, 2017"), //optional, Date the beta will start
//    betaExpirationDate: new Date("Dec 1, 2017"), //optional, Date the beta should expire in this format: "Dec 1, 2017"
//    betaSupportEmail: "http://aescripts.com/contact", //optional, IF YOU ARE RUNNING A BETA PLEASE PUT YOUR EMAIL HERE SO BETA TESTERS CAN CONTACT YOU IF THERE ARE ISSUES, replace with "http://aescripts.com/contact" for shipping version
//};

eval("@JSXBIN@ES@2.1@MyBbyBn0ABJAnASzLjBjGifjTjFjUjUjJjOjHjTByBWzGiPjCjKjFjDjUCNzKjTjDjSjJjQjUiOjBjNjFDFeIiLiFiZjCjPjBjSjEzNjTjDjSjJjQjUiWjFjSjTjJjPjOEFeFhRhOhShOhRzMjTjDjSjJjQjUiBjVjUjIjPjSFFeLiPjMjBjPjMjBhAiZjVjBjOzJjTjDjSjJjQjUiViSiMGFegfjIjUjUjQjThahPhPjBjFjTjDjSjJjQjUjThOjDjPjNhPjLjFjZjCjPjBjSjEhPzNjQjSjJjWjBjUjFiOjVjNjCjFjSHFd8hPjOWkLhNiPhYiDzKjQjSjPjEjVjDjUiTiLiVIFeHiPiZiLhNiTiViMzIjIjFjMjQiUjFjYjUJFe2iUBiDjPjOjUjSjPjMjMjJjOjHhAjLjFjZjGjSjBjNjFjThAjJjThAjBjOjJjNjBjUjPjS2ZhAjThAjEjBjJjMjZhAjSjPjVjUjJjOjFhOhAKKiLiFiZjCjPjBjSjEhAjQjSjPjWjJjEjFjThAjBhAjTjFjSjJjFjThAjPjGhAjGjVjOjDjUjJjPjOhAjGjPjShAjLjFjZjGjSjBjNjFjThAjJjOhAiBjGjUjFjShAiFjGjGjFjDjUjThOhAiUjIjPjTjFhAjGjVjOjDjUjJjPjOjThAjBjSjFhAjTjNjBjMjMhAjCjVjUhAjDjBjOhAjCjFhAjVjTjFjEhAjGjSjFjRjVjFjOjUjMjZhMhAjTjVjDjIhAjBjThAjTjFjUjUjJjOjHhAjLjFjZjGjSjBjNjFhAiFjBjTjFhMhAjDjMjPjOjJjOjHhAjLjFjZjThMhAjNjJjSjSjPjSjJjOjHhAjLjFjZjThMhAjTjIjJjGjUjJjOjHhAjLjFjZjThAjPjShAjSjBjOjEjPjNjJjajJjOjHhAjLjFjZjThOhAiUjIjFhAjNjPjTjUhAjJjNjQjPjSjUjBjOjUhAjJjThAjZjPjVhAjDjBjOhAjEjPhAjUjIjPjTjFhAjUjIjSjPjVjHjIhAjLjFjZjCjPjBjSjEhAjTjIjPjSjUjDjVjUjThOzLjIjFjMjQiCjVjUjUjPjOjTKARBWCCzEjOjBjNjFLFeIiUjVjUjPjSjJjBjMzDjVjSjMMFegcjIjUjUjQjThahPhPjZjPjVjUjVhOjCjFhPjKhXiRhSjCjIiXiTjNiKjLfzKjPjGjGjFjSiUjSjJjBjMNFctzJjPjGjGjFjSiCjFjUjBOFcfzNjCjFjUjBiTjUjBjSjUiEjBjUjFPEjzEiEjBjUjFQfRBFeLiOjPjWhAhRhMhAhShQhRhXftzSjCjFjUjBiFjYjQjJjSjBjUjJjPjOiEjBjUjFREjQfRBFeLiEjFjDhAhRhMhAhShQhRhXftzQjCjFjUjBiTjVjQjQjPjSjUiFjNjBjJjMSFegcjIjUjUjQhahPhPjBjFjTjDjSjJjQjUjThOjDjPjNhPjDjPjOjUjBjDjUnftABB40BiAABAzATByB");


     //@include "trial_serializaton_generic_v3_mx.jsx"
     
     
	 // xxx_ should be your initials or some other unique identifier
     
     var wow = new a(af_settings);
     
     wow.scriptVersion="1.2.1";
	 //var scriptVersionStr = "KEYboard v1.2.1";
     //var testVesrsion = "v1.2.5" ;
     //start 2018.11.27
	 //var isTrial = (sx2K ("v").match(/^t/)) ? true : false;
	 //var isExpire = (sx2K ("p").match(/0/)) ? true : false; 
     
     var isTrial = wow.t();
	 //var isExpire = dosomething
     
     //alert(wow.isExpire() );
     if(isTrial){
         if(false){
             //alert("Sorry, this trial version of the script has expired");
			 wow.c();
		 }else{
			 runKeyboard (thisObj);
		 }
	 }else{
		 if ( wow.c()) {
			 runKeyboard (thisObj);
		 }
	 }
     
     
     
     /*
	 if(isTrial){
		 
		 if(isExpire){
			 //
			 sx2K ();
			 //alert("Sorry, this trial version of the script has expired");
		 }else{
			 //runKeyboard (thisObj);
		 }
		// runKeyboard (thisObj);
	 }else{
		 if (sx2K ()) {
			// run your script
			 //runKeyboard (thisObj);
		 }
	 }
     
     */
	 
	function runKeyboard (thisObj) {
        
	 	//this is your full script
		
        //global varible//////////////////
			var AEversion = app.version.substring(0,4);
        
            /////////////////// json2 //
			// define JSON
			//if(AEversion <=13.5){
			if(typeof JSON !== "object"){
				
				if (typeof JSON !== "object") {
					JSON = {};
				}

				(function () {
					"use strict";

					var rx_one = /^[\],:{}\s]*$/;
					var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
					var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
					var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
					var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
					var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

					function f(n) {
						// Format integers to have at least two digits.
						return n < 10
							? "0" + n : n;
					}

					function this_value() {
						return this.valueOf();
					}

					if (typeof Date.prototype.toJSON !== "function") {

						Date.prototype.toJSON = function () {

							return isFinite(this.valueOf())
								? this.getUTCFullYear() + "-" +
										f(this.getUTCMonth() + 1) + "-" +
										f(this.getUTCDate()) + "T" +
										f(this.getUTCHours()) + ":" +
										f(this.getUTCMinutes()) + ":" +
										f(this.getUTCSeconds()) + "Z"
								: null;
						};

						Boolean.prototype.toJSON = this_value;
						Number.prototype.toJSON = this_value;
						String.prototype.toJSON = this_value;
					}

					var gap;
					var indent;
					var meta;
					var rep;


					function quote(string) {

				// If the string contains no control characters, no quote characters, and no
				// backslash characters, then we can safely slap some quotes around it.
				// Otherwise we must also replace the offending characters with safe escape
				// sequences.

						rx_escapable.lastIndex = 0;
						return rx_escapable.test(string)
							? "\"" + string.replace(rx_escapable, function (a) {
								var c = meta[a];
								return typeof c === "string"
									? c
									: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
							}) + "\""
							: "\"" + string + "\"";
					}


					function str(key, holder) {

				// Produce a string from holder[key].

						var i;          // The loop counter.
						var k;          // The member key.
						var v;          // The member value.
						var length;
						var mind = gap;
						var partial;
						var value = holder[key];

				// If the value has a toJSON method, call it to obtain a replacement value.

						if (value && typeof value === "object" &&
								typeof value.toJSON === "function") {
							value = value.toJSON(key);
						}

				// If we were called with a replacer function, then call the replacer to
				// obtain a replacement value.

						if (typeof rep === "function") {
							value = rep.call(holder, key, value);
						}

				// What happens next depends on the value's type.

						switch (typeof value) {
						case "string":
							return quote(value);

						case "number":

				// JSON numbers must be finite. Encode non-finite numbers as null.

							return isFinite(value)
								? String(value)
								: "null";

						case "boolean":
						case "null":

				// If the value is a boolean or null, convert it to a string. Note:
				// typeof null does not produce "null". The case is included here in
				// the remote chance that this gets fixed someday.

							return String(value);

				// If the type is "object", we might be dealing with an object or an array or
				// null.

						case "object":

				// Due to a specification blunder in ECMAScript, typeof null is "object",
				// so watch out for that case.

							if (!value) {
								return "null";
							}

				// Make an array to hold the partial results of stringifying this object value.

							gap += indent;
							partial = [];

				// Is the value an array?

							if (Object.prototype.toString.apply(value) === "[object Array]") {

				// The value is an array. Stringify every element. Use null as a placeholder
				// for non-JSON values.

								length = value.length;
								for (i = 0; i < length; i += 1) {
									partial[i] = str(i, value) || "null";
								}

				// Join all of the elements together, separated with commas, and wrap them in
				// brackets.

								v = partial.length === 0
									? "[]"
									: gap
										? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
										: "[" + partial.join(",") + "]";
								gap = mind;
								return v;
							}

				// If the replacer is an array, use it to select the members to be stringified.

							if (rep && typeof rep === "object") {
								length = rep.length;
								for (i = 0; i < length; i += 1) {
									if (typeof rep[i] === "string") {
										k = rep[i];
										v = str(k, value);
										if (v) {
											partial.push(quote(k) + (
												gap
													? ": "
													: ":"
											) + v);
										}
									}
								}
							} else {

				// Otherwise, iterate through all of the keys in the object.

								for (k in value) {
									if (Object.prototype.hasOwnProperty.call(value, k)) {
										v = str(k, value);
										if (v) {
											partial.push(quote(k) + (
												gap
													? ": "
													: ":"
											) + v);
										}
									}
								}
							}

				// Join all of the member texts together, separated with commas,
				// and wrap them in braces.

							v = partial.length === 0
								? "{}"
								: gap
									? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
									: "{" + partial.join(",") + "}";
							gap = mind;
							return v;
						}
					}

				// If the JSON object does not yet have a stringify method, give it one.

					if (typeof JSON.stringify !== "function") {
						meta = {    // table of character substitutions
							"\b": "\\b",
							"\t": "\\t",
							"\n": "\\n",
							"\f": "\\f",
							"\r": "\\r",
							"\"": "\\\"",
							"\\": "\\\\"
						};
						JSON.stringify = function (value, replacer, space) {

				// The stringify method takes a value and an optional replacer, and an optional
				// space parameter, and returns a JSON text. The replacer can be a function
				// that can replace values, or an array of strings that will select the keys.
				// A default replacer method can be provided. Use of the space parameter can
				// produce text that is more easily readable.

							var i;
							gap = "";
							indent = "";

				// If the space parameter is a number, make an indent string containing that
				// many spaces.

							if (typeof space === "number") {
								for (i = 0; i < space; i += 1) {
									indent += " ";
								}

				// If the space parameter is a string, it will be used as the indent string.

							} else if (typeof space === "string") {
								indent = space;
							}

				// If there is a replacer, it must be a function or an array.
				// Otherwise, throw an error.

							rep = replacer;
							if (replacer && typeof replacer !== "function" &&
									(typeof replacer !== "object" ||
									typeof replacer.length !== "number")) {
								throw new Error("JSON.stringify");
							}

				// Make a fake root object containing our value under the key of "".
				// Return the result of stringifying the value.

							return str("", {"": value});
						};
					}


				// If the JSON object does not yet have a parse method, give it one.

					if (typeof JSON.parse !== "function") {
						JSON.parse = function (text, reviver) {

				// The parse method takes a text and an optional reviver function, and returns
				// a JavaScript value if the text is a valid JSON text.

							var j;

							function walk(holder, key) {

				// The walk method is used to recursively walk the resulting structure so
				// that modifications can be made.

								var k;
								var v;
								var value = holder[key];
								if (value && typeof value === "object") {
									for (k in value) {
										if (Object.prototype.hasOwnProperty.call(value, k)) {
											v = walk(value, k);
											if (v !== undefined) {
												value[k] = v;
											} else {
												delete value[k];
											}
										}
									}
								}
								return reviver.call(holder, key, value);
							}


				// Parsing happens in four stages. In the first stage, we replace certain
				// Unicode characters with escape sequences. JavaScript handles many characters
				// incorrectly, either silently deleting them, or treating them as line endings.

							text = String(text);
							rx_dangerous.lastIndex = 0;
							if (rx_dangerous.test(text)) {
								text = text.replace(rx_dangerous, function (a) {
									return "\\u" +
											("0000" + a.charCodeAt(0).toString(16)).slice(-4);
								});
							}

				// In the second stage, we run the text against regular expressions that look
				// for non-JSON patterns. We are especially concerned with "()" and "new"
				// because they can cause invocation, and "=" because it can cause mutation.
				// But just to be safe, we want to reject all unexpected forms.

				// We split the second stage into 4 regexp operations in order to work around
				// crippling inefficiencies in IE's and Safari's regexp engines. First we
				// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
				// replace all simple value tokens with "]" characters. Third, we delete all
				// open brackets that follow a colon or comma or that begin the text. Finally,
				// we look to see that the remaining characters are only whitespace or "]" or
				// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

							if (
								rx_one.test(
									text
										.replace(rx_two, "@")
										.replace(rx_three, "]")
										.replace(rx_four, "")
								)
							) {

				// In the third stage we use the eval function to compile the text into a
				// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
				// in JavaScript: it can begin a block or an object literal. We wrap the text
				// in parens to eliminate the ambiguity.

								j = eval("(" + text + ")");

				// In the optional fourth stage, we recursively walk the new structure, passing
				// each name/value pair to a reviver function for possible transformation.

								return (typeof reviver === "function")
									? walk({"": j}, "")
									: j;
							}

				// If the text is not JSON parseable, then a SyntaxError is thrown.

							throw new SyntaxError("JSON.parse");
						};
					}
				}());
			}// define JSON
			//
			
			//////////////////////
			//var registration = sx2K ("p"); // display this registration somewhere in your UI
			var registration ="";// display this registration somewhere in your UI
			var isTrial = isTrial = wow.t();

			runScript(thisObj);

	
			//--------------------
			function createUIMenu(menuData,settingJson2Obj){
				
				var AEversion = app.version.substring(0,4);
				var w;
			
				if(AEversion <13 || settingJson2Obj.prefs_AutoClose ===false){
					 w = new Window('palette','KEYboard',undefined ,{borderless:false});
				}else{
					 w = new Window('palette','KEYboard',undefined ,{borderless:true});
				}
				
				w.margins=0;
				w.spacing=0;
				w.alignChildren=['fill',''];
				//pen
				var winGraphics = w.graphics;
				var gray = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR,menuData.gray, 1);
				var blue = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, menuData.blue, 1);
				var balck = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, menuData.black, 1);
				var chk=1;
				if(chk){
					
					if(AEversion <12){
						w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,menuData.darkGray );
					}else{
						w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,menuData.white );
					}
					

					//----------------
					//size
					//****************
					

					var btnSize=[50,50];
					var btnSizeWide= (AEversion >=14) ? [65,50] : [50,50];
					var grpSpacing = (AEversion >=14) ? 1 : 3;
					//----------------
					var leftGrp = w.add('group');
					var rightGrp = w.add('group');


					w.orientation = "row";
					leftGrp.orientation = "column";
					leftGrp.spacing=0;
					leftGrp.alignChildren = ['fill','fill'];

					rightGrp.orientation = "column";
					rightGrp.spacing=0;
					rightGrp.alignChildren = ['fill','fill'];
					rightGrp.margins = 0;


					//----------------
				


					//-----------------
					//---------
					var rowFnParent = leftGrp.add('group');
					rowFnParent.spacing = 2;
					//---------
					var row2parent =  leftGrp.add('group');
					row2parent.spacing = 0;
					row2parent.alignChildren = ['fill','fill'];



					//---------
					var row3 =  leftGrp.add('group');
					//---------

					var rowFn = rowFnParent.add('group');
					//rowFn.graphics.backgroundColor = rowFn.graphics.newBrush (rowFn.graphics.BrushType.SOLID_COLOR,menuData.gray );
					rowFnParent.alignChildren = ['center','fill'];
					rowFn.margins = 5;
					rowFn.spacing = 2;
					rowFn.orientation = "row";

					//------
					var row1 = rowFnParent.add('group');
					//row1.graphics.backgroundColor = row1.graphics.newBrush (row1.graphics.BrushType.SOLID_COLOR,menuData.purple );
					//row1.alignChildren = ['fill','fill'];
					row1.margins = 5;
					row1.spacing = grpSpacing;
					row1.orientation = "row";

	
					//----------
					var rowInOut = rowFnParent.add('group');
					//row1.graphics.backgroundColor = row1.graphics.newBrush (row1.graphics.BrushType.SOLID_COLOR,menuData.purple );
					//row1.alignChildren = ['fill','fill'];
					rowInOut.margins = 5;
					rowInOut.spacing = grpSpacing;
					rowInOut.orientation = "row";
	
					//---------
					var rowExpBtn = rowFnParent.add('group');
					//rowExpBtn.graphics.backgroundColor = rowExpBtn.graphics.newBrush (rowExpBtn.graphics.BrushType.SOLID_COLOR,menuData.purple );
					rowExpBtn.alignChildren = ['left',''];
					rowExpBtn.margins = 5;
					rowExpBtn.spacing = grpSpacing;
					rowExpBtn.orientation = "row";

					//////////////////////////////////////////
					var createButton =function (btnObj,btnGrp,menuData){
						var newBtn;
						var amountStr;
						switch(btnObj.mode){
							case "easeIn":
								if(btnObj.expStr <=33){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.in1);
								}else if(btnObj.expStr <=66){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.in2);
								}else{
									newBtn = btnGrp.add('iconbutton',undefined,menuData.in3);
								}
								newBtn.helpTip = "easeIn : " + btnObj.expStr +"%";
								amountStr = btnGrp.add ("statictext", undefined,btnObj.expStr);
								amountStr.alignment=['','bottom'];
								break;
							case "easeOut":
								if(btnObj.expStr <=33){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.out1);
								}else if(btnObj.expStr <=66){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.out2);
								}else{
									newBtn = btnGrp.add('iconbutton',undefined,menuData.out3);
								}
								newBtn.helpTip = "easeOut : " + btnObj.expStr +"%";
								amountStr = btnGrp.add ("statictext", undefined,btnObj.expStr);
								amountStr.alignment=['','bottom'];
								break;
							case "easeInOut":
								if(btnObj.expStr <=33){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.inOut1);
								}else if(btnObj.expStr <=66){
									newBtn = btnGrp.add('iconbutton',undefined,menuData.inOut2);
								}else{
									newBtn = btnGrp.add('iconbutton',undefined,menuData.inOut3);
								}
								newBtn.helpTip = "easeInOut : " + btnObj.expStr +"%";
								amountStr = btnGrp.add ("statictext", undefined,btnObj.expStr);
								amountStr.alignment=['','bottom'];
								break;
							case "expression":
								newBtn = btnGrp.add ("button", undefined, btnObj.title);
								newBtn.helpTip =btnObj.title;
								break;
							case "JavaScript":
								newBtn = btnGrp.add ("button", undefined, btnObj.title);
								newBtn.helpTip =btnObj.title;
								break;
						}
						newBtn.preferredSize = btnSize;
						return newBtn;
					};
					//////////////////////////////////////////


					var btn_01Grp = rowExpBtn.add("group");
					btn_01Grp.orientation = 'stack';
					var btn_01 = createButton(settingJson2Obj.btn01,btn_01Grp,menuData);
					var btn_01_num = btn_01Grp.add ("image", undefined,menuData.num01);
					btn_01_num.alignment = ['','top'];

					var btn_02Grp = rowExpBtn.add("group");
					btn_02Grp.orientation = 'stack';
					var btn_02 = createButton(settingJson2Obj.btn02,btn_02Grp,menuData);
					var btn_02_num = btn_02Grp.add ("image", undefined,menuData.num02);
					btn_02_num.alignment = ['','top'];

					var btn_03Grp = rowExpBtn.add("group");
					btn_03Grp.orientation = 'stack';
					var btn_03 = createButton(settingJson2Obj.btn03,btn_03Grp,menuData);
					var btn_03_num = btn_03Grp.add ("image", undefined,menuData.num03);
					btn_03_num.alignment = ['','top'];

					var btn_04Grp = rowExpBtn.add("group");
					btn_04Grp.orientation = 'stack';
					var btn_04 = createButton(settingJson2Obj.btn04,btn_04Grp,menuData);
					var btn_04_num = btn_04Grp.add ("image", undefined,menuData.num04);
					btn_04_num.alignment = ['','top'];

					var btn_05Grp = rowExpBtn.add("group");
					btn_05Grp.orientation = 'stack';
					var btn_05 = createButton(settingJson2Obj.btn05,btn_05Grp,menuData);
					var btn_05_num = btn_05Grp.add ("image", undefined,menuData.num05);
					btn_05_num.alignment = ['','top'];

					var btn_06Grp = rowExpBtn.add("group");
					btn_06Grp.orientation = 'stack';
					var btn_06 = createButton(settingJson2Obj.btn06,btn_06Grp,menuData);
					var btn_06_num = btn_06Grp.add ("image", undefined,menuData.num06);
					btn_06_num.alignment = ['','top'];

					var btn_07Grp = rowExpBtn.add("group");
					btn_07Grp.orientation = 'stack';
					var btn_07 = createButton(settingJson2Obj.btn07,btn_07Grp,menuData);
					var btn_07_num = btn_07Grp.add ("image", undefined,menuData.num07);
					btn_07_num.alignment = ['','top'];

					var btn_08Grp = rowExpBtn.add("group");
					btn_08Grp.orientation = 'stack';
					var btn_08 = createButton(settingJson2Obj.btn08,btn_08Grp,menuData);
					var btn_08_num = btn_08Grp.add ("image", undefined,menuData.num08);
					btn_08_num.alignment = ['','top'];

					var btn_09Grp = rowExpBtn.add("group");
					btn_09Grp.orientation = 'stack';
					var btn_09 = createButton(settingJson2Obj.btn09,btn_09Grp,menuData);
					var btn_09_num = btn_09Grp.add ("image", undefined,menuData.num09);
					btn_09_num.alignment = ['','top'];

					/*
					btn_02.preferredSize = btnSize;
					btn_03.preferredSize = btnSize;
					btn_04.preferredSize = btnSize;
					btn_05.preferredSize = btnSize;
					btn_06.preferredSize = btnSize;
					btn_07.preferredSize = btnSize;
					btn_08.preferredSize = btnSize;
					btn_09.preferredSize = btnSize;
					*/
					btn_01.onClick = function () {applyExpression(settingJson2Obj.btn01);w.hide();};
					btn_02.onClick = function () {applyExpression(settingJson2Obj.btn02);w.hide();};
					btn_03.onClick = function () {applyExpression(settingJson2Obj.btn03);w.hide();};
					btn_04.onClick = function () {applyExpression(settingJson2Obj.btn04);w.hide();};
					btn_05.onClick = function () {applyExpression(settingJson2Obj.btn05);w.hide();};
					btn_06.onClick = function () {applyExpression(settingJson2Obj.btn06);w.hide();};
					btn_07.onClick = function () {applyExpression(settingJson2Obj.btn07);w.hide();};
					btn_08.onClick = function () {applyExpression(settingJson2Obj.btn08);w.hide();};
					btn_09.onClick = function () {applyExpression(settingJson2Obj.btn09);w.hide();};
					//---------


					var row2 =  row2parent.add('group');
					row2.graphics.backgroundColor = row2.graphics.newBrush (row2.graphics.BrushType.SOLID_COLOR,menuData.green );
					row2.alignChildren = ['fill','fill'];
					row2.margins = 5;
					row2.spacing = grpSpacing;
					row2.orientation = "row";
					var row2button = row2.add('iconbutton',undefined,menuData.Qrow1);
					var row2button2 = row2.add('iconbutton',undefined,menuData.Qrow2);
					var row2button4 = row2.add('iconbutton',undefined,menuData.Qrow4);
					var row2button3 = row2.add('iconbutton',undefined,menuData.Qrow3);
					var row2button5 = row2.add('iconbutton',undefined,menuData.Qrow5);
					var row2button6 = row2.add('iconbutton',undefined,menuData.Qrow6);
					var row2button7 = row2.add('iconbutton',undefined,menuData.Qrow7);
					var row2button8 = row2.add('iconbutton',undefined,menuData.Qrow8);
					var row2button9 = row2.add('iconbutton',undefined,menuData.Qrow9);
					//var row2button9 = row2.add('iconbutton',undefined,menuData.Qrow9);
					var row2button10 = row2.add('iconbutton',undefined,menuData.Qrow10);

					row2button.helpTip = "Copy selected keyframes and\rpaste to current comp’s time.";
					row2button2.helpTip = "Copy selected keyframes and\rmirror to current comp’s time.";
					row2button3.helpTip = "Time-Reverse keyframes.";
					row2button4.helpTip = "Move selected keyframes to\rcurrent comp’s time.";
					row2button5.helpTip = "Move selected keyframes which of \rtime are not integer frames.";
					row2button6.helpTip = "Set spatial interpolation of \rselected keyframes to  Linaer.";
					row2button7.helpTip = "Shift selected keyframes \rby frames or seconds.";
					row2button8.helpTip = "Shift selected keyframes \rby frames or seconds.";
					row2button9.helpTip = "Random selected keyframes \rby frames or seconds.";

					row2button.preferredSize = btnSizeWide;
					row2button2.preferredSize =btnSizeWide;
					row2button3.preferredSize =btnSizeWide;
					row2button4.preferredSize =btnSizeWide;
					row2button5.preferredSize =btnSizeWide;
					row2button6.preferredSize =btnSizeWide;
					row2button7.preferredSize =btnSizeWide;
					row2button8.preferredSize =btnSizeWide;
					row2button9.preferredSize =btnSizeWide;
					row2button10.preferredSize =btnSizeWide;




				


					row2button.onClick=function(){
                        w.hide();
						cloneKey();
						
					};
					row2button2.onClick=function(){
                        w.hide();
						mirrorKey();
						
					};
					row2button3.onClick=function(){
						//app.executeCommand(app.findMenuCommandId("Time-Reverse Keyframes"));
						app.executeCommand(3693);
						w.hide();
					};
					row2button4.onClick=function(){
                        w.hide();
						alignKey(settingJson2Obj);
						
					};
					row2button5.onClick=function(){
                        w.hide();
						organizeKey();
					};
					row2button6.onClick=function(){
						setLinearInter();
						w.hide();
					};
					row2button7.onClick=function(){
                        w.hide();
						shiftUpKey(settingJson2Obj);
						
					};
					row2button8.onClick=function(){
                        w.hide();
						shiftDownKey(settingJson2Obj);
						
					};
					row2button9.onClick=function(){
                        w.hide();
						randomKey(settingJson2Obj);
						
					};
                    row2button10.onClick=function(){
                        w.hide();
						alignLayers();
						
					};


					//----------
					/*
					var rowSetting =  rowFnParent.add('group');
					//rowSetting.graphics.backgroundColor = rowSetting.graphics.newBrush (rowSetting.graphics.BrushType.SOLID_COLOR,menuData.orange );
					rowSetting.alignChildren = ['fill','fill'];
					rowSetting.margins = 5;
					rowSetting.spacing = grpSpacing;
					rowSetting.orientation = "row";
					*/

					/*
					rowSettingbutton2.onClick=function(){
						app.executeCommand(10200);
					}
					*/


					//----------

					row3.graphics.backgroundColor = row3.graphics.newBrush (row3.graphics.BrushType.SOLID_COLOR,menuData.yellow );
					row3.alignChildren = ['fill','fill'];
					row3.margins = 5;
					row3.spacing = grpSpacing;
					row3.orientation = "row";
					var row3button = row3.add('button',undefined,'A: FoolParent');
					var row3button2 = row3.add('button',undefined,'S: QuickVal');
					var row3button3 = row3.add('button',undefined,'D: Reverse Layer Order');
					var row3button4 = row3.add('button',undefined,'F: Purge All');
					var rowSettingbutton = row3.add('button',undefined,'L: Options');
					//var rowSettingbutton = row3.add('iconbutton',undefined,menuData.Setting1);
					//rowSettingbutton.preferredSize = btnSize;
					//rowSettingbutton2.preferredSize = btnSizeWide;



					row3button.helpTip = "Set Parent thorugh comp viewer.";
					row3button2.helpTip = "Modify keyframes’ value with keyboard\rIt’s useful after shifting keys.";
					row3button3.helpTip = "Reverse Layer Order.";
					row3button4.helpTip = "Purge all memory and disk cache.";

					row3button.onClick=function(){
						runFoolParent();
						w.hide();
					};
					row3button2.onClick=function(){
						runQuickVal(settingJson2Obj,0,settingJson2Obj.quickVal_preVal);
						w.hide();
					};
					row3button3.onClick=function(){
						reverseLayerOrder();
						w.hide();
					};
					row3button4.onClick=function(){
						app.executeCommand(10200);
						w.hide();
					};
					rowSettingbutton.onClick=function(){
						modifyShortcut(menuData,settingJson2Obj);
						w.hide();
					};

					//-------------
					var row4 =  leftGrp.add('group');
					row4.graphics.backgroundColor = row4.graphics.newBrush (row4.graphics.BrushType.SOLID_COLOR,menuData.red );
					//row4.alignChildren = ['fill','fill'];
					row4.margins = 5;
					row4.spacing = grpSpacing;
					row4.orientation = "row";
					//var infoAddKey = row4.add('image',undefined,menuData.binAddKey);
					var row4button = row4.add('button',undefined,'Z: Path');
					var row4button2 = row4.add('button',undefined,'X: 0»100');
					var row4button3 = row4.add('button',undefined,'C: 100»0');
					var row4button4 = row4.add('button',undefined,'V: Fool Paste');
					//var row4button5 = row4.add('button',undefined,'B: Shift Layers');
					//var row4button6 = row4.add('button',undefined,'N: Nth Keys');
                    
                    row4button.preferredSize[0] =40;
                    row4button2.preferredSize[0] =40;
                    row4button3.preferredSize[0] =40;
                    row4button4.preferredSize[0] =60;
                    //row4button5.preferredSize[0] =60;
                    //row4button6.preferredSize[0] =40;
					//var row4button4 = row4.add('button',undefined,'V: stroke width');

					row4button.helpTip = "Add keys for selected layers’ Path property.";
					row4button2.helpTip = "Add 2 keys which of value are [0 & 100] \rfor selected properties.";
					row4button3.helpTip = "Add 2 keys which of value are [100 & 0] \rfor selected properties.";

					row4button.alignment = ['fill','fill'];
					row4button2.alignment = ['fill','fill'];
					row4button3.alignment = ['fill','fill'];

					row4button.onClick=function(){
						addPathKey(settingJson2Obj);
						 w.hide();
					};
					row4button2.onClick=function(){
						add2Keys(0,100);
						 w.hide();
					};
					row4button3.onClick=function(){
						add2Keys(100,0);
						 w.hide();
					};
                    
                    
                    row4button4.onClick=function(){
						runFoolPaste();
						 w.hide();
					};
					
					
					
					if (isTrial) {
						
						var row5 =  leftGrp.add('group');
						row5.graphics.backgroundColor = row4.graphics.newBrush (row5.graphics.BrushType.SOLID_COLOR,menuData.black );
						row5.alignChildren = ["center",""]
						//var registration = sx2K ("p")+ "  ||  Click 'Options' to activate the license.";  
						var registration = wow.getRegistration() +"  ||  Click 'Options' to activate the license.";  
						var registrationText = row5.add('statictext',undefined, registration, {multiline: false});
						
						row2button6.enabled = false;
						row2button7.enabled = false;
						row2button8.enabled = false;
						row2button9.enabled = false;
						row2button10.enabled = false;
						row3button.enabled = false;
						row3button2.enabled = false;
						row3button3.enabled = false;
						row3button4.enabled = false;
						row4button4.enabled = false;
	
				   //limit some functions
					 //alert("QQ");
					}



					//var AEversion = app.version.substring(0,4);
					if(AEversion <13){
						var rowInput = leftGrp.add('group');
						rowInput.graphics.backgroundColor = rowInput.graphics.newBrush (rowInput.graphics.BrushType.SOLID_COLOR,menuData.darkGray );
						rowInput.alignment=["fill",""];
						rowInput.margins=3;
						var inputText = rowInput.add ("edittext", undefined, "press down shortcut...");
						inputText.alignment=["fill",""];
						inputText.active = true;
					}
				}else{ //start listUI

					w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,menuData.gray );
					//w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,[0.2,0.3,0.4,1] );

					//title grp
					var titleGrp =w.add('group');
					titleGrp.alignChildren=['center',''];
					titleGrp.margins=3;
					//titleGrp.graphics.backgroundColor = titleGrp.graphics.newBrush (titleGrp.graphics.BrushType.SOLID_COLOR, [0.3,0.7,0.85,1] );
					titleGrp.graphics.backgroundColor = titleGrp.graphics.newBrush (titleGrp.graphics.BrushType.SOLID_COLOR,menuData.blue );
					//titleGrp.graphics.backgroundColor = titleGrp.graphics.newBrush (titleGrp.graphics.BrushType.SOLID_COLOR, [0.9,0.3,0.5,1] );
					var titleStr=[];
					titleStr[0]="σ`∀´)σ~~~~";
					titleStr[1]="~~~ヽ(●´∀`●)ﾉ~~~";
					titleStr[2]='(,,・ω・,,)';
					titleStr[3]='(((ﾟдﾟ)))';
					titleStr[4]="~~~ლ(・´ｪ`・ლ)";
					titleStr[5]="ε≡ﾍ( ´∀`)ﾉ";
					titleStr[6]="(´･д･｀)ﾊ(･д･｀*)";
					var index = Math.floor((Math.random() * 7) );
					var title=titleGrp.add ('statictext',[0,0,180,15],titleStr[index], {multiline: true});
					title.graphics.foregroundColor = gray;

					//command grp
					var commandAllGrp = w.add('group');
					commandAllGrp.alignChildren=['top','fill'];
					commandAllGrp.spacing=0;
					var commandGrp1 = commandAllGrp.add('group');
					var commandGrp2 = commandAllGrp.add('group');
					var commandGrp3 = commandAllGrp.add('group');
					//var commandGrp4 = commandAllGrp.add('group');
					var commandGrp5 = commandAllGrp.add('group');

					commandGrp1.alignChildren=['top','fill'];
					commandGrp2.alignChildren=['top','fill'];
					commandGrp3.alignChildren=['top','fill'];
					//commandGrp4.alignChildren=['top','fill'];
					commandGrp5.alignChildren=['top','fill'];

					commandGrp1.margins.left=5;
					commandGrp2.margins.left=5;
					commandGrp3.margins.left=5;
					//commandGrp4.margins.left=5;
					commandGrp5.margins.left=5;
					
					
					
					
					var infoStrAll=menuData.infoStrGrp1+menuData.infoStrGrp2+menuData.infoStrGrp3+menuData.infoStrGrp4;
					var command1 =commandGrp1.add ('statictext', [0,0,100,100],menuData.infoStrGrp1, {multiline: true});
					var command2 =commandGrp2.add ('statictext', [0,0,150,120],menuData.infoStrGrp2, {multiline: true});
					var command3 =commandGrp3.add ('statictext', [0,0,130,100],menuData.infoStrGrp3, {multiline: true});
					//var command4 =commandGrp4.add ('statictext', [0,0,140,100],menuData.infoStrGrp4, {multiline: true});
					var command5 =commandGrp5.add ('statictext', [0,0,80,100],menuData.infoStrGrp5, {multiline: true});
					commandAllGrp.graphics.foregroundColor = gray;
					commandGrp1.graphics.backgroundColor = commandGrp1.graphics.newBrush (commandGrp1.graphics.BrushType.SOLID_COLOR,menuData.lightGray );

					commandGrp2.graphics.backgroundColor = commandGrp2.graphics.newBrush (commandGrp2.graphics.BrushType.SOLID_COLOR,menuData.darkGray );

					commandGrp3.graphics.backgroundColor = commandGrp3.graphics.newBrush (commandGrp3.graphics.BrushType.SOLID_COLOR,menuData.lightGray );

					//commandGrp4.graphics.backgroundColor = commandGrp4.graphics.newBrush (commandGrp4.graphics.BrushType.SOLID_COLOR,menuData.darkGray );

					commandGrp5.graphics.backgroundColor = commandGrp5.graphics.newBrush (commandGrp5.graphics.BrushType.SOLID_COLOR,menuData.darkGray );
					//w.add ("button", undefined, "OK");
					//w.add ("button", undefined, "Cancel");
				}//end list UI
				
				if(AEversion <12 || settingJson2Obj.prefs_AutoClose ===false){
					
				}else{
					
						w.addEventListener("blur", function() { w.hide(); });
						w.onDeactivate = function(){  w.hide();};
					
				
				}
				
				w.addEventListener("keydown", function(event) {
                    w.hide();
					handle_key (event,menuData,settingJson2Obj);
					var myComp = app.project.activeItem;
					
				},false);

				

				w.show ();
				
			

			}//end function
			//----------------------------------------//

			//---------------------------------------
			function handle_key (key,menuData,settingJson2Obj){		
				//alert(key.keyName)
				switch (key.keyName)
				{
					//---------------------------------------
					case "A": //fool parent
							//alert("Q");
							if (!isTrial) { runFoolParent();}
							
							break;
					case "S": //fool parent
							if (!isTrial) { runQuickVal(settingJson2Obj,0,settingJson2Obj.quickVal_preVal);}
							
							break;
					case "D":
							if (!isTrial) { reverseLayerOrder();}
							
							break;
					case "F":
							if (!isTrial) { app.executeCommand(10200);}
							
							break;
					case "G":
							break;
					case "Q": //clone key
							cloneKey();
							break;
					case "W": //mirror key
							mirrorKey();
							break;
					case "R":
							app.executeCommand(3693);
							break;
					case "E":
							alignKey(settingJson2Obj);
							break;
					case "T":
							organizeKey();
							break;
					case "Y":
							if (!isTrial) {setLinearInter();}
							break;
					case "U":
							if (!isTrial) {shiftUpKey(settingJson2Obj);}
							
							break;
					case "I":
							if (!isTrial) {shiftDownKey(settingJson2Obj);}
							
							break;
					case "O":
							if (!isTrial) {randomKey(settingJson2Obj);}
							
							break;
                    case "P":
							if (!isTrial) { alignLayers();}
                           
                            break;
					case "Z": //add path key
							addPathKey(settingJson2Obj);
							break;
					case "X": //add path key
							add2Keys(0,100);
							break;
					case "C": //add path key
							add2Keys(100,0);
							break;
                    case "V": //select keys
							if (!isTrial) { runFoolPaste();}
                           
							//runNthKeys();
							break;
					case "1":
							applyExpression(settingJson2Obj.btn01);
							break;
					case "2":
							applyExpression(settingJson2Obj.btn02);
							//createShape("square");
							break;
					case "3":
							applyExpression(settingJson2Obj.btn03);
							//createShape("ellipse");
							break;
					case "4":
							applyExpression(settingJson2Obj.btn04);
							//createShape("vrLine");
							break;
					case "5":
							applyExpression(settingJson2Obj.btn05);
							//setInfluence("inOut",50);
							break;
					case "6":
							applyExpression(settingJson2Obj.btn06);
							break;
					case "7":
							applyExpression(settingJson2Obj.btn07);
							break;
					case "8":
							applyExpression(settingJson2Obj.btn08);
							break;
					case "9":
							applyExpression(settingJson2Obj.btn09);
							break;
					case "F1":
							break;
					case "F2":
							break;
					case "F3":
							break;
					case "L":
							modifyShortcut(menuData,settingJson2Obj);
							break;
                    

					//---------------------------------------
				}
			}// end handle_key
			//---------------------------------------
			function handle_shortcut (key,input){
				
				//alert(key.keyName);
				//input.text = input.text.substring(0,1);

					var osName=$.os.substring(0,3);
					input.text ="";

					if(key.ctrlKey){
						input.text += (osName == "Mac") ? "macControl+" : "Ctrl+";
					}
					if(key.metaKey){
						input.text +="Cmd+";
					}
					if(key.altKey){
						input.text += (osName == "Mac") ? "Option+" : "Alt+";
					}
					if(key.shiftKey){
						input.text += "Shift+";
					}

					input.text += key.keyName;

				//input.text =input.text.toUpperCase();
				//key.shiftKey ?  input.text ="Shift+"+key.keyName :input.text +="";
				//key.ctrlKey ?  input.text ="Ctrl+"+key.keyName :input.text +="";
				//key.altKey ?  input.text ="Alt+"+key.keyName :input.text +="";
			}
			//---------------------------------------
			function createResourceFile (filename, binaryString) {
				
				try {
					
					var userFolder = Folder ( Folder.userData.absoluteURI + "/Ola script UI" );
					if ( !userFolder.exists )
					userFolder.create ();
					
					var myFile = new File(Folder.userData.absoluteURI+'/Ola script UI/' +filename);
					if (1)
					//if (!File(myFile).exists)
					{
						myFile.encoding = "BINARY";
						myFile.open( "w" );
						myFile.write( binaryString );
						myFile.close();
					}
					return myFile;
				} catch(err){
					alert("Error in createResourceFile function\n" + err.toString());
				}
			}//end createResource
			//---------------------------------------
			function createJsonFile (filename, inputObj) {			
				try {
					var userFolder = Folder ( Folder.userData.absoluteURI + "/Ola script UI" );
					
					if ( !userFolder.exists )
					userFolder.create ();
					var myFile = new File(Folder.userData.absoluteURI+'/Ola script UI/' +filename);
					

					if(myFile.open("w")){
						myFile.encoding = "UTF-8";
						myFile.write(JSON.stringify(inputObj,undefined,"\r\n"));
						myFile.close();
					}
					return myFile;
				} catch(err){
					alert("Error in createResourceFile function\n" + err.toString());
				}
			}//end createResource
			//---------------------------------------
			function testIO(prefFile,shortcut){
				
				//var myComp = app.project.activeItem;
				//alert(prefFile.fsName)
				var osName=$.os.substring(0,3);
				var AEversion = Number(app.version.substring(0,4));
				var textFile =prefFile;
				var matchStr="";
				var pathname = $.fileName;
				var leafname= pathname.split('\\').pop().split('/').pop();
				var itemIndex = Number(leafname.substring(1,2));
				
				if(osName =="Mac"){
					if(AEversion >=14 && AEversion <=14.1){
						//for CC 2017.1
						matchStr='	"ExecuteScriptMenuItem0'+(itemIndex)+'" = ';
					}else{
						matchStr='	"ExecuteScriptMenuItem0'+(itemIndex+1)+'" = ';
					}
					
				}else{
					matchStr='	"ExecuteScriptMenuItem0'+itemIndex+'" = ';
				}
				//alert(textFile.fsName)
				textFile.copy(textFile.fsName + ".bak");//backup prefs

				//var textFile = File.openDialog("Select a text file to open.", "text:*.txt");
				if (textFile !== null) {

					var textLines = [];
					textFile.open('r', "TEXT", undefined);
					//textFile.open("r", "TEXT", "????");
					var frontStr=[];	//current sub idx
					var backStr=[];	//total subs num
					var chk=0;
					while (!textFile.eof) {
						var txt =textFile.readln();
						if(chk===0){
							frontStr.push(txt);
						}else{
							backStr.push(txt);
						}
						if(txt.match(matchStr) !== null){
							chk=1;
						}


						}
					textFile.close();

					//textFile.open("w", "TEXT", "????");
					textFile.open('w', undefined, undefined);
					textFile.encoding = "UTF-8";
					//textFile.encoding = "ASCII";
					
					if(osName =="Mac"){
						textFile.lineFeed = "Macintosh";
					}else{
						textFile.lineFeed = "Windows";
					}
					//
					for(var i=0 ; i<frontStr.length-1 ; i++){
						textFile.writeln(frontStr[i]);
					}
					//alert("01")
					textFile.writeln(matchStr +'"('+shortcut+')"');

					//alert("02")
					for(var j=0 ; j<backStr.length ; j++){
						textFile.writeln(backStr[j]);
					}
					//alert(frontStr[frontStr.length-1])
					//alert(backStr[0])
					textFile.close();


				}
			}
			//---------------------------------------
			function runScript(thisObj){
				
				//app.executeCommand(app.findMenuCommandId("Effect Controls"));
				//var activeViewer = app.activeViewer;
				/*
				var keys = [];
				for(var key in activeViewer){
				  keys.push(key);
				}
				*/
				
				//////////////////////////////////////////////
				//////create menuData objects/////////////////
				//////////////////////////////////////////////
				var menuData ={};
					menuData.gray= [0.9,0.9,0.9,1];
					menuData.blue= [0.2,0.3,0.4,1];
					menuData.lightGray= HexToRGB("#d0d0d0");
					menuData.brown= HexToRGB("#E1D9C6");
					menuData.darkGray= HexToRGB("#727171");
					menuData.darkGray2= HexToRGB("#4b4b4b");
					menuData.black= HexToRGB("#222222");
					menuData.red= HexToRGB("#D66EA7");
					//menuData.purple =HexToRGB("#d76ea7");
					menuData.purple =HexToRGB("#79519a");
					menuData.white=HexToRGB("#fefdee");
					menuData.green= HexToRGB("#6fc2a0");
					menuData.darkGreen= HexToRGB("#39868E");
					menuData.yellow= HexToRGB("#EBAE6D");
					menuData.orange= HexToRGB("#D08965");
					menuData.infoStrGrp1='<<Add>>\r'+
							'1...Null\r'+
							'2...Square\r'+
							'3...Ellipse\r'+
							'4...Vertical Line\r'+
							'5...Horizonal Line';
					menuData.infoStrGrp2='<<Key>>\r'+
							'Q...Clone\r'+
							'W...Mirror\r'+
							'E...Time Reverse\r'+
							'R...Align...\r'+
							'T...Organize\r'+
							'Y...Add Path Key\r'+
							'U...Set Linear Interpolation';
					menuData.infoStrGrp3='<<Layer>>\r'+
							'A...Fool Parent\r'+
							'S...Reverse Layer Order\r'+
							'D...Select Last Layer\r'+
							'F...Mode: Difference';

					menuData.infoStrGrp4='<<Expression>>\r'+
							'Z...wiggle\r'+
							'X...toComp';
					menuData.infoStrGrp5='<<Other>>\r'+
							'P...Purge\r'+
							'O...Options';

					menuData.btn01 = {};
					menuData.btn02 = {};
					menuData.btn03 = {};
					menuData.btn04 = {};
					menuData.btn05 = {};
					menuData.btn06 = {};
					menuData.btn07 = {};
					menuData.btn08 = {};
					menuData.btn09 = {};
					
					////////////////		
				    function createDefaultJson(){
                            var defaultSettingObj ={};
                            defaultSettingObj.btn01 = {};
                            defaultSettingObj.btn02 = {};
                            defaultSettingObj.btn03 = {};
                            defaultSettingObj.btn04 = {};
                            defaultSettingObj.btn05 = {};
                            defaultSettingObj.btn06 = {};
                            defaultSettingObj.btn07 = {};
                            defaultSettingObj.btn08 = {};
                            defaultSettingObj.btn09 = {};

                            defaultSettingObj.btn01.title="easeOut";
                            defaultSettingObj.btn01.mode="easeOut";
                            defaultSettingObj.btn01.expStr="50";
                            defaultSettingObj.btn01.index="1";

                            defaultSettingObj.btn02.title="easeOut";
                            defaultSettingObj.btn02.mode="easeOut";
                            defaultSettingObj.btn02.expStr="90";
                            defaultSettingObj.btn02.index="2";

                            defaultSettingObj.btn03.title="easeIn";
                            defaultSettingObj.btn03.mode="easeIn";
                            defaultSettingObj.btn03.expStr="50";
                            defaultSettingObj.btn03.index="3";

                            defaultSettingObj.btn04.title="easeIn";
                            defaultSettingObj.btn04.mode="easeIn";
                            defaultSettingObj.btn04.expStr="90";
                            defaultSettingObj.btn04.index="4";

                            defaultSettingObj.btn05.title="easeInOut";
                            defaultSettingObj.btn05.mode="easeInOut";
                            defaultSettingObj.btn05.expStr="90";
                            defaultSettingObj.btn05.index="5";

                            defaultSettingObj.btn06.title="wiggle";
                            defaultSettingObj.btn06.mode="expression";
                            defaultSettingObj.btn06.expStr="wiggle(3,50);";
                            defaultSettingObj.btn06.index="6";

                            defaultSettingObj.btn07.title="time";
                            defaultSettingObj.btn07.mode="expression";
                            defaultSettingObj.btn07.expStr="time*5;";
                            defaultSettingObj.btn07.index="7";

                            defaultSettingObj.btn08.title="loop";
                            defaultSettingObj.btn08.mode="expression";
                            defaultSettingObj.btn08.expStr="loopOut('cycle');";
                            defaultSettingObj.btn08.index="8";

                            defaultSettingObj.btn09.title="separate D";
                            defaultSettingObj.btn09.mode="JavaScript";
                            defaultSettingObj.btn09.expStr="try {\n for (var i=0;i<app.project.activeItem.selectedLayers.length;i++) \n  app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated = (app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated)?false:true;\n    }\n catch (e) {\n     alert (e);\n     }";
                            defaultSettingObj.btn09.index="9";

                            defaultSettingObj.randomKeys_preVal = [0,5];
                            defaultSettingObj.randomKeys_preUnit = "Frames";

                            defaultSettingObj.shiftUpKeys_preVal = 5;
                            defaultSettingObj.shiftUpKeys_preUnit = "Frames";

                            defaultSettingObj.shiftDownKeys_preVal = 5;
                            defaultSettingObj.shiftDownKeys_preUnit = "Frames";

                            defaultSettingObj.quickVal_preVal = 10;
                            defaultSettingObj.quickVal_constrain = 0;

                            defaultSettingObj.prefs_AutoClose = true;
                            defaultSettingObj.prefs_AlignLeft = false;
                            defaultSettingObj.prefs_AddMaskPathKey = false;

                            return defaultSettingObj;
                            
                        }
                        
					var settingJson2Obj ={};
					var settingJson;
					//var userFolder = Folder ( Folder.userData.absoluteURI + "/Ola script UI" );
					//if ( !userFolder.exists )userFolder.create ();
					
					var myFile = new File(Folder.userData.absoluteURI+'/Ola script UI/' +"KEYboard_setting.json");
					if(File(myFile).exists ){
					//if(rewriteJsonFlag ==1){
						//alert("read JSON");
						var modifiedFlag = 0;
						if(myFile.open("r")){
							myFile.encoding = "UTF-8";
							var myJson = myFile.read();
							try{ settingJson2Obj = JSON.parse(myJson);}
                            catch(e){
                                alert("Preference file is missing, KEYboard will back to default setting");
                                settingJson2Obj =createDefaultJson();
                                settingJson = createJsonFile ("KEYboard_setting.json", settingJson2Obj);
                                    }
                           
							myFile.close();
							modifiedFlag = 0;
							
						}
                        
                        //check for new JSON parameter
                        if(settingJson2Obj.btn01 ===undefined){

                            settingJson2Obj.btn01 = {};
                            settingJson2Obj.btn02 = {};
                            settingJson2Obj.btn03 = {};
                            settingJson2Obj.btn04 = {};

                            settingJson2Obj.btn01.title="easeOut";
                            settingJson2Obj.btn01.mode="easeOut";
                            settingJson2Obj.btn01.expStr="50";
                            settingJson2Obj.btn01.index="1";

                            settingJson2Obj.btn02.title="easeOut";
                            settingJson2Obj.btn02.mode="easeOut";
                            settingJson2Obj.btn02.expStr="90";
                            settingJson2Obj.btn02.index="2";

                            settingJson2Obj.btn03.title="easeIn";
                            settingJson2Obj.btn03.mode="easeIn";
                            settingJson2Obj.btn03.expStr="50";
                            settingJson2Obj.btn03.index="3";

                            settingJson2Obj.btn04.title="easeIn";
                            settingJson2Obj.btn04.mode="easeIn";
                            settingJson2Obj.btn04.expStr="90";
                            settingJson2Obj.btn04.index="4";

                            settingJson2Obj.btn05.title="easeInOut";
                            settingJson2Obj.btn05.mode="easeInOut";
                            settingJson2Obj.btn05.expStr="90";
                            settingJson2Obj.btn05.index="5";

                            settingJson2Obj.btn06.title="wiggle";
                            settingJson2Obj.btn06.mode="expression";
                            settingJson2Obj.btn06.expStr="wiggle(3,50);";
                            settingJson2Obj.btn06.index="6";

                            settingJson2Obj.btn07.title="time";
                            settingJson2Obj.btn07.mode="expression";
                            settingJson2Obj.btn07.expStr="time*5;";
                            settingJson2Obj.btn07.index="7";

                            settingJson2Obj.btn08.title="loop";
                            settingJson2Obj.btn08.mode="expression";
                            settingJson2Obj.btn08.expStr="loopOut('cycle');";
                            settingJson2Obj.btn08.index="8";

                            settingJson2Obj.btn09.title="separate D";
                            settingJson2Obj.btn09.mode="JavaScript";
                            settingJson2Obj.btn09.expStr="try {\n for (var i=0;i<app.project.activeItem.selectedLayers.length;i++) \n  app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated = (app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated)?false:true;\n    }\n catch (e) {\n     alert (e);\n     }";
                            settingJson2Obj.btn09.index="9";

                            modifiedFlag = 1;
                        }
                        if(settingJson2Obj.shiftUpKeys_preUnit ===undefined){

                            settingJson2Obj.randomKeys_preVal = [0,5];
                            settingJson2Obj.randomKeys_preUnit = "Frames";

                            settingJson2Obj.shiftUpKeys_preVal = 5;
                            settingJson2Obj.shiftUpKeys_preUnit = "Frames";

                            settingJson2Obj.shiftDownKeys_preVal = 5;
                            settingJson2Obj.shiftDownKeys_preUnit = "Frames";

                            settingJson2Obj.quickVal_preVal = 10;
                            modifiedFlag = 1;
                        }
                        if(settingJson2Obj.prefs_AutoClose ===undefined){
                            settingJson2Obj.prefs_AutoClose = true;
                            modifiedFlag = 1;
                        }
                        if(settingJson2Obj.prefs_AlignLeft ===undefined){
                            settingJson2Obj.prefs_AlignLeft = false;
                            modifiedFlag = 1;
                        }
                        if(settingJson2Obj.quickVal_constrain ===undefined){
                            settingJson2Obj.quickVal_constrain = 0;
                            modifiedFlag = 1;
                        }
                        if(settingJson2Obj.prefs_AddMaskPathKey ===undefined){
                            settingJson2Obj.prefs_AddMaskPathKey = false;
                            modifiedFlag = 1;
                        }
                        
                       
                        //save to JSON and pares it again
                        if(modifiedFlag == 1){
                            myFile.remove();
                            settingJson = createJsonFile ("KEYboard_setting.json", settingJson2Obj);
                        }
					}else{
						//alert("create JSON");
                       
						settingJson2Obj =createDefaultJson();
						settingJson = createJsonFile ("KEYboard_setting.json", settingJson2Obj);
				
					}


					//binary
                
                
					
						
					var binout1 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x002\b\x06\x00\x00\x00\u00A4\u009C\x00\u00D1\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01JIDATx\u00DA\u00EC\u0096\u00CF\t\u00C20\x14\u00C6\u00ABxW\u00C1\u00A3\u0087\u00A2\x03\u00E8\x00\u0082\u0085.\u00E0\b\u009E\u00BC\u009A\x11\x04\x17\u00F0\u00DCSFp\x01\u00A1\u00DD@\x07Pt\x02\u00E3\x04\u00F5\u008B<!hQ\x1B\u00D3\u00F4\u00F2\x1E|\u0084B\u00E9\u008F\u00EF\u00FDk\x1Ay\u009E\x07uE3\u00A81\x18\u00CEp\u00863\u009C\u00E1\fw\x1A-\x17\x1F9\u009EN!\u008E\b\n\r\u00E9\u00D8Cj8\x18\u00AC\u009C\u00C2\x01\u00EC\u00E0\u0098\u0093FP\x06\u00A5\x04\u0094\u00D0\x18\u00EA|\u00FAF\u00C3\u00E62\x01\u00B0v\"\b\u00B4\u0081\u00B3m\u00E5i\u00A7\u00F4>A3@S/5\x07xLi\u0095\u0080\no\rg\u0080\x05\u00C0\u00D2U\u00B7\x7F\u00AD9\u00A5z\u00EF\x1A\u00FC\u00EB\u009CKJ\u00B5\u00F4:\u00E7p\u00AD\u00C7(\x048\u00AAc\u00C3\u00ADh\u008E\u00FD\u00AEWr\u00AD\u00FE\x1D'[\u00E73\u00BD@\u00AA\u00DC\u00ED\u0085\u00DDN\u00AB\u00F3\nu\u00E1\\\u00F9v\u00AE\u00E7\u00FAP%\u00F8\u00DD\u00F9n\u00A1\u00EB;}y'\x0B\u00E2\u00C4\u00AE\u00DBw\u008B\u0090\x1AV=F6N\u0094\u00F3_\u00EA\x07\u00B0^Nm\u00A3\u0087\u00A2\u00B2\u00F0\x11e\u00A4l\u00F4\rpP\u0090\u00D1\u009F\u00E0\x17\u009A\u00F7\u00B21\u0081\u00D6\u00C6\u00F3\u00CD\x06\u00AEP+\x1B\u00E7)2\u00D6\u00C3\u00B9$\u00B0\u00F8\x06\u0097\u00F4\u00F72\u00E3l]\u00F78\x11E\u00D0\u00BFn2|uf8\u00C3\x19\u00CEp\u00863\u00FC5\u00EE\x02\f\x00\u00CBPh\u00CB\u00D5\u00C2|W\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binout2 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x002\b\x06\x00\x00\x00\u00A4\u009C\x00\u00D1\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01IIDATx\u00DA\u00EC\u0097\u00C1i\u00C30\x14\u0086\u00E3\u00A2c\u00A1\x1D\u00C1q\x07H\u00BAA\u00C0\x0Bd\u0084\u00E6\u00E2\u00B37h6Hz\u00F5I#\x14r6h\x04\r\x10\u00BB\x1E\u00C1\x1B\u00B8\u00FF+\n\u0098&$\u00D6\u00B3\u00EAPx\u0082\x1F9A\u00D2\u00A7\u00FF\u00E9I\u00B2\u00A3\u00AE\u00EBf\u00F7*\x0F\u00B3;\x16\u0081\x0B\\\u00E0\x02\x17\u00B8\u00C0\u00FF\x17\u00BC\u00AA\u00EB%\u00F4<)\x1C\u00C0\x18\u00D2x4\u00D0r\x128\u00B9\u0084\u00B6x\u00FC\u0082Z(~I\x12s\u00A9\u00AD\n\f^\u00A3\u00DAC\r4\x07\u00B4\u00B9\u00D6^\u0085r\u00EB\u00A0\x04\u00CF\x01\u00D5C\u00FA\u00A9\x10\t\u0085\u00EA\x13\u00B2.\u00C4\u00ED\u00E0\u00CE\u00F4\x02\u00C9\u00D5\u00B1\u00AAr\u00A8\u00A3\u009A\u00D3_\u008Dp\u00AC]\u0098_\u00E1\u00D6r\u00C6P\u00CC\u00F5=e\u00AF_\u0098\u00C7l\u00B5\x1E\u0098\u009C\u00AE\u00C6\u0080\u00BD\u009C\u00D3\u00A1qJ,@\u00DF&;^\u009Dc\x1B\x12L%\u00BA\u00F5\u00B9\u00D4\x0FuH\u00F0M\u00E7\x7F\t>w^ft&\u00BF\u009F\u00B5J\u008B\u00885z\u0099\u00D1\u00E4i\u00D2Tk\u008C\u00D3Ly\u00A5R\u00D4v\u00CE\u0090u\u0093\u00F1\u00CC\u00F623\f\u00F0#\u00B4\u00E8\u00FD~rW\u00AB\u00F1\u00DDj[&\u00FC\u00F0\u00EB\u00BF\u00D6\u00DFyZ\x18\u00E6\u009Ao\u00DCmG\u00AE?0\u008E\u00BD\x067AW<-\u00F4O\u00A2q\u00F7\u00B9\u00BC\u00BD\n\\\u00E0\x02\x17\u00B8\u00C0\x05>\u00A4|\x0B0\x00\x18\u009B\u00CC\np{\u00AB\u00D1\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binout3 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x002\b\x06\x00\x00\x00K^k\u00EF\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\\IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3@\x00&\u0086\x01\x02\u00A3\x16\u008FZ<j\u00F1\u00A8\u00C5\u00A3\x16\u008FZ<\u00C2,\u00BE{\u00EF\u009E\x01\x10\x7F\x18\b\x1F;\x00\u00F1\u0081\u0081\u00B2x\x03]-\x06\x06\u00B1\x02\u0090\u00F2\u00A7\u00BB\u00C5@\u0090\x00\u00C4\x0B\u0095\u0095\u0094\u00B0\u00C61\x0B\r}[\x00\u00C4\x06\u00F4N\u00D5\x13@A\f\u00F4\u00ED\x03\\\nXh\u00E0\u00DB\x00h\u00A2R\u00A0[>\x06\u00E5[ \u00B5\x00\x14\u00BF\u00B8\u00E2\u0096\u00EA\x16C-\x05\u00E5\u00D9\x06\u00A0\u00A5\x1B\b\u00A9g\u00A4FO\x02\u00C9RP\u00BC&\u00D0\u00A5\u00C8\x04Z\u009A\u0080\u00E4\u00D3\x04b\u00F5\u00B1P\u0098e&@\x13R\x00\u00D0\u00D2\x03\u00A4\u00E8GX\u00BC7\rd\u00C0~,j\x1C\x19\u009Cg\x1D@\u00B3\u00B0\x01\u0088\u00E3A\x05\x04(\u00F5\u00E2LH{\u00D3\x12\u00A0\u00A9\u00FB\x02\u00D0\u008C\r$\u00FB\x18h\u0099\x03\u00B40\u0080\x19\x042D\x11_>\x05Z\nr\\=\x12?\x11h\u00F9\x02\u00A2-\u00FE\u00C5&\u00B6_\u00FA\u00D9\u00E2\x1FL\u00FF\x7F}d\u00FA\u00F7\u00E3\x03\u00F3\u00DF\u00AFW\x18\u00FF\u00FFS\x00g\u009B\u00FBx\u00B5\u00EAc)B\u0089\u00B7\u0098\u00ED\u00D7\u00ABBpP\u0091\x0EZ\u0080\u00D8\x1A\u0089\u00FF\u0080\u00D4\u00A0\u00BE\u0080\x1C\u00C7D\u0083\u00BDi9\u00D0(\u0091\x07\u00E2\u0083\u00D0\u00B2\x1B\u00AB\u00C5 \x175b1\u00E2\x01Y\u00C9\u00DEy\u00D6\x05|\u00C5&\u00E3\u00E8P\u00C4\u00A8\u00C5\u00A3\x16\u008FZ<j\u00F1\u00A8\u00C5\u00A3\x16\u00C3\x00@\u0080\x01\x00J\u00F8sHc\u00B1\u0083s\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binin1 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x003\b\x06\x00\x00\x00o\u00C0\u00D3t\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01^IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3@\x01&\u0086\x01\x04\u00A3\u0096\u008FZ>j\u00F9\u00A8\u00E5\u00A3\u0096\u008FZNU\u00C0\u0082O\u00F2\u00EE\u00BD{\x06@J\x00\u00C4VVR:@m\u00CB\x19\u00B1\u00D5\u00E7@K7\x00)\x7F(\u00F7\"\u00D4\x01\u00F2@\u00FC\x11\u0088\x0F@\u00F1\x06\u00A0\u0083\x1EP\u00DDr<!\u00A1\x00\u00A4\x1C\u00808\x00\u00EA\u00B8\u0085@\u00DC@\u00AE#\x18\u00C9m\u00C9@\x1D\u0092\x00\u00C4\u00F5@<\x11\u00E8\u0080\x02\u00BAY\u008E\u00E6\u0088\rP\u00AE\x03\u00D0\x11\x1F\u00E8f9\u0092#\x16@\u00A3\x03\u00E4\u0080\x0Bt\u00B5\x1C\u00C9\x01\u00A04a@L\bP5\u009F\x03-L\u0080\u00E5\u0084\u0081*d@\tO\x00\x18\n\x05t\rv\u00A4\u00E0w\u0080\u00FA^\x01_\u00F0\u00D3\u00A4x\u0085\u0096\u0086\x1B\u00A0\u00A10 e\u00FB\x02h9@\x7F\u00CBau\x014\n\x06\u00A4V\u00DB\x00\u00CDz\u00A4\u00D7jd\u0083\u00BDi\u00E0\u00A2W\u009ACV\u00E2'\u009BX\x00\u00C3\u00FD\u00B3\x10q\u00E7Y\r\u00B8S;D\u00D3\x01h\r\u00F6\x10\u00ECj\u00E7Y\x0F\u00C8\u00B0\x1C\u00E4\u00DB\u00FD\x18\u00E2\u00CE\u00B3\x18\u00F1\u00F9|\x02\u00D4b\x06(\u00BD\x04hP\r\x19~7 \u00A71!\u0080\u00C6\u00D7\x06U\u0099dX.@\u008E\u00E5\u00A0\x04b\u008F\u00C4o\x04\x06\u00D5\x04\u00AA\x05;^\u00CBA\x16\u00EDM{\x00\r\u00B6\x03@\u00FE\x01Zf\x05\u00C6\u00D1a\u0091Q\u00CBG-\x1F\u00B5|\u00D4\u00F2Q\u00CBG-\x1F\u00F2\u0096\x03\x04\x18\x00\u008F\u009Du\u00B3\u0090\u00AF\u00BC\u008C\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binin2 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x003\b\x06\x00\x00\x00o\u00C0\u00D3t\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01RIDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3@\x01&\u0086\x01\x04\u00A3\u0096\u008FZ>j\u00F9\u00A8\u00E5\u00A3\u0096\u008FZ>\u00CC-\u00BF{\u00EF^\x00\x10/\x00b\u0085\u0081\u00F0\u00F9\x05(}\x1F\u00E8\u0080\x06 \x16\u00A0\u0085\u00E5\u008C\u00F8Z2P\u009F/\x00b\x10]\u00A0\u00AC\u00A4\u00B4\u0081n\u0096#G\x03\u00D4\x11\x07\u00808\x01\u00E8\u0088\x0FtKpP\x1F\u00C3\u00E2\u00FF\x01\u00D41\u00F4\u00F19\u008EPX\x00tT\x01]-GJ\x0B\u00B0\u00F8w 7\x1A\x18)i:\u0083\u00B2#\u0090\n\u0080:\u00E0\x02]\x0B\x19\u00A0\u0085\t@\u00AA\x01\u0094\x10\u0081\x0Eq\u00A0{\t\x07t\u00C0\x04P6\x04\u00E2\u00FD@\x07$\u00D0-\u00D8\u00D1\u00A2\u00C0\x01\u009A\x0E@\u00E5\u00C1\x02\u00BAZ\x0Eu\u0080\x01\u00B4, \u00CA\x01\u008C\u00D4\u00EE\u00ABAC`?\x10;\x02\x1Dp\u0080\u00AE\u0096C\x1D\u0090 \u00F4\u00FE\u00D0\f\u009E\u00AF7\x17\u00B0\u00FE~\u00FB\x02Ij\x01\u0083\u00F3\u00AC\x07\u00B8-\u00DF\u009B\x06r\u00AD=\x10\x7F\x04\x15\u00A5@\u00C5\u00E4\u0095\u00E7{\u00D3\u00B0\u00F9\u00CA\x11h\x1E<4X\u00D04\x14@-\x06\x01~ ^\x02\x14\u00F3\u00A1U\u0095\u00CA\u0082\u00C6G\u00AF:\u00B9\u00A1\u00F9\u0098.\u0096\u0083\u0082\u00B8\x1E\u0089\u00BF\x11\x18L\x01T\fv<\u0085\u008C\u00F3,P\x11i\b\u00C4\u008D@\u009CH\u00B6\u00C5\u00F4.dF[\u00AF\u00A3\u0096\u008FZ>j\u00F9\u00A8\u00E5\u00A3\u0096\u008FZ>`\x00 \u00C0\x00\x11w\u009036\u00BE\x04\u00E3\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binin3 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x003\b\x06\x00\x00\x00\u0080\x02\u00B8J\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01vIDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3@\x00&\u0086\x01\x02\u00A3\x16\u008FZ<j\u00F1\u00A8\u00C5\u00A3\x16\u008FZ<\x04,\u00BE{\u00EF\u009E\x01\x10'\f\u0084\u008F\x05\u0080\u00B8\u0081\u00D6\x163bk\u0081\x00}\u00FC\x01H\x19(+)=\u00A0w\x1Co\x00\u00E2\u0080\u0081H\\ \u008B\x0B\u00E8n10\u00887@\u0083<a \u00B2\x13(\u00815\x00-\x17\u00A0\u00AB\u00C5@_/\x00R\x0Fh\u0095\u00C2\t\x15 \u00A0\u00A0N\x00\u00FA:\u0080\u00AE\x16C\u00B3\x13(\u0091-\x00\x15,t-2\u00A1A\x0E\u00B2\u00FC\x005-'\u00AA\u00ACF\u00B3\u009C*\u00C1\u00CEHJ\u00DF\tj\u00E9\x02(n\x00:\u00E8\x03],\u0086Z\u00AE\x00\u00B5X\x01j\u00F9\x02\fE{\u00D3\x12\u00A0\u00F2\u00C8\u00E0\x01\u0083\u00F3\u00AC\x05\u00D8-\u0086h\u0098\x00\u00C4\u00FC@<\x11\u00A8\u00B0\x00\u008F\x03\x12\u0090\u00B2\x1AH\u00CF\x06x\u00D9\u00BE7\u00ED\x00\u0090\u00B4G\u00D3r\x10h\u009E\x03\u00A6\u00C5{\u00D3@\x05\u00C5{4\u00C5\u0085@|\x01_\b\u00BC\x17\u00B0\u00B2\u00F9\u00C5*b\u00F3\u0097\u0099\u00CB\u0086\u00F1\u00FF\u00DF\x17L\u00FF~\u00DE\x11~\u00BF\u00CF\u0080\u00E5\u00CF\x17q|\x16\u00B3 I(`17\x07\u0088\u009F\u00E0\u00B3X\u00F0\u00C31\x18\u00F3\u00CC_fN\u0081\u00FF\u008Cl*\u00CC\x7F\x7F\x10,\u00ED\x10\x16;\u00CF\u00BA\x00\u00F4\u00F5E K\x1F*\u00F2\x11\u0088]\u0080\u00E2DW\u008D\u00CC\u0088(\u00C3\x16\u00D48,\u0086\x00\x07hi%\x00N@$XJ\u00F3T=\u00DA\u00CA\x1C\u00B5x\u00D4\u00E2Q\u008BG-\x1E\u00B5x\u00D4b\u00AA\x03\u0080\x00\x03\x00-\u0095\u0084\x0E\u0086\u00F4<\x13\x00\x00\x00\x00IEND\u00AEB`\u0082";



					var bininOut1 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x003\b\x06\x00\x00\x00o\u00C0\u00D3t\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00ACIDATx\u00DA\u00EC\u0096=V\u0083@\x10\u00C7\u00C1g\u00AF\u009De06v\u00C9\r\u00E4=.\u00C0\x11\u00A8\u00B6\u00B2\u00E0\x06r\x03\u00A9\u00A9r\x04<\u00C0>\u00F1\x04\u00C6\u00C2\u00D2\u0088'\u0090\x1B\u00E0\f\u0099\u00F8\u00D6\x05\u0092\u00E5#\u00C4b\u00E6\u00BDy\x0B\u00CB\u00EE\u00FC\u00F8\u00EF\u00EE\f\u00D8eYZ\u00A7\u00B23\u00EB\u0084\u00C6p\u00863\u009C\u00E1\fg\u00F8\u00A8v\u00DE\u00D4\u00F9\u00B1\u00D98\u00D0\x04t\u009B\u00DE\u00CC\u00E7\u00EB.Ai\u00BE\x0B\u008Em\x06\u00F3\u00B3>\u00CAqr\n\u00C1rp\u00D7\x00z\t\u00BE\u0082\u00CBOp\u00FF\u00D0x\u00DB\u00E4g\x02\x02\u0086\u00D0D\u00E0!\u00A8X\u00B5\u008CY\u00A2J\u00F2\x00\u00C6\x15\u00A3\u00C0\u00B5\u00E0\x188\u00D5\x15C\u0093\u00E3\x0B\u00C2\u00B3\u00D8t{\u00EC.\u00BFQ\x00\u00C1\u00A5D\u00E5\u008E\u00AA\f\u00FA\u00F1\u00A5\n\u00E8\u00F3\u008Fv\u00DAI1\x1E\u00BEP\x01\u00E3YX*\x07\u00F4\u00A8\u00A9V\u00ED=-\u00B5E\u00D0\u00D8d\u008F\x07-\u00BB\u00A2\x16\u00D5\u00E3\u00DE\u00E2J|\u0083_\x03<\x1F%\u00CF\r,\u00A5<F\u00B5o}\u00C0C*\\F\u00F0]\x06LW^\u00A9b\u00CD\u00E8\x05\u00A6\u0085\u0093}\u0081\u00DFR~O\x0EG\u00E8U\u00D7\u00BA?&|\u0090\u00D5SM\n\u00F7w/\u00BD\u00A4\u00BE\u009F\u00DB\u00E7\u00CF\u00B5~/\u00B1[\u00C6\u00BAUvx\u00C9z\u00BFr)|\n\u00FCP\u00B5\u00DB\u00FB~&E\u00A4\u00C4zm\u008A\u00F5W\u00B9\x14\u00A8\u00F4Ny^\u00E5\u00B16\x07+\u00DB\u00A2\x01\u00F7\u00A2\u00DD/h\u00EC\u00CE\u009E@\u00BD\u00BF\u00AF\u00C8\u00E8%\u00F2\u009D\u00CA\u00A9j\u0098\u00DB\u008F-eW\u00B5X\u0083\x17\u0087*\\D\u00C1g\u0094J\u00F7\u00B5\u00BD\u0092\u00A2y\u0099\u00F5\u00F3!E@5\u00E0\u0082bE\u00C3k\u00BB\x14N\u00E3\x17\u00CCK\u00A2I>,\u00FC\u00EB\u00CCp\u00863\u009C\u00E1\fg\u00F8\u00BF\u0082\u00FF\b0\x00)\x13\u00A0\u0099\u00DF\u009B\u0095\t\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var bininOut2 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1F\x00\x00\x003\b\x06\x00\x00\x00o\u00C0\u00D3t\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00B4IDATx\u00DA\u00ECV\u00CBm\u00C2@\x105(\x05\u00D0A,R\x00\u00EE\x00\x10\u00D7\x1C\\@$\u009C\u008B\u00CFt\x10\u0097\u00C0\u0099K\u00DCA\u00A0\x00+\u00A6\u0082l\u00EE\u0081P\u0082s\u00C8\u0099\u00BC\t\u0093\u00C8,\u00EB?\x0E\u008A4+\u008DVk\u00CF\u00BE\u00B7ovf\u00B4\u009D\u00FD~o]jt\u00AD\x0B\x0E!\x17r!\x17r!\x17\u00F2\u00BF!\u00DFl\u00B7^Sp`\u00F4\u00F2p\u00BAY\u009B0\u00CD0+\u0098]\u0093\u00D8\u00C1\u00A4`n%\u00F2\u009B~?\u0081\u00D1\u00E6\u0098\x00\x18\u00A8\n\u00B1\u00C7{\u00E7\u00C0\u00C9$\u00B7\u00E8%\u0093go\u009B\u008D\x07K`N\u0091\u00AF\u00E6\u00EF\x16\u00F9v\u00CA<\u00A3X\u00C9\x1C\u00E6@\u00C9\u00AE \u00D4/\u00B01\u00FC\u00E2\u00B3d;\u0080BLd\u00CB\u00BC\u00E4\u00E2P\u00DF\u0097!\u00AETj\x00\u009C1I\u0090\u00E1B\u0087\u008B\u00F9\u00A0\u00AD\u00D4\u00B9\u00C7U`k\u00AAG\u0098F\u00FC\u00BF\u009D&\x03U\u008AC\u00AF\u00AB\x0F8\u00B3\u0093\u00B6;\x1C\x11M\u00F9\u008E\x7F\u0092\u00CC\u00E1\u0084l\u00B7\u00BDr\u00B6\u00AFR!\u00A6\\\b\u00AB\u00AAn\u00D2\u00DB\u0097)r\u00B7\u008E\u00EA\u00A6\u00E4\x03\u0084\u00FC\x16s\u0092W\u00FBg'\u00E7\x10\u00AFaw\\\u00DB\u00B5\u00C6i\u0087\u008B|\u009BC\u00BA\u00B3&\x0Bs\u00CDF\u00BE\u00A9-\u008E\u00E1\x1Fg`)\u00FC[\u00E6+?8S9=\u00C0\x1E\u00B1\u009E\u00D7U\u0085\u00BDT\u00F7\u00EF\u008C\u00F5d\u00C2:V\x1E\u00F9\x01;\u00A7\u00C7\u00DA\x00=4|{\u00A5\u00FBO\u00ADI\u00C8uj\u00FD\x01\u00F5\u00BD\u00F4\u0086+\r@/\u0097OCC\u00A1\u00F1\u009C\u00D1^\u0095\u00D6\r\u00A79\u00D8'\u00E4!\u0097\u00CE\u00F0\u00FB\u00A4T\u00C3\u00FA=\x1E\"d\n\u00B4:\u00F2\u008D|\u00C5\u00CDg\u00F0\u008BU\u0098p\u00E5\u00EE30*\u009F,v\u00CD\u00B2]\u009E\u00CEB.\u00E4B.\u00E4B.\u00E4\u00FF\u008D\u00FCK\u0080\x01\x00kU\u00FD\u00C8\u00BD\x18l\u0090\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var bininOut3 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x003\b\x06\x00\x00\x00\u0080\x02\u00B8J\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00D2IDATx\u00DA\u00EC\u0098\u00BFJ\u00C3`\x10\u00C0\u009B\x18\x14\x07!\u00A3\u009B\u00B5\u00D5M\u00B0o`\u00C5\x17\u00C8\x1B\x18\u0097\u00ACvt\u00AC\u00E0\u00E0\u00D6\u00BA\u00EA`\x05\x1F\u00A0>@ \u0082\u00BB\x11'\u0091\u00D6v\u00EB\x18\u00E8T\u0089\u00A9w\u00F5\x12\u00D3&-\u00F9\u0092@\u0096;8B\u00FE|\u00F7\u00BB\x7F\u00F9.\u00AD4\u009DNKE\u0088\\*H\x18\u00CC`\x063\u0098\u00C1\fN\x0E\u00EE\u00F5\u00FBe\u00D4<\u008C\u00AF\u00B2\x15\x17q\r\u00B4\u0093S`:i\"\u00B0\x03\u00AA\u00E6\x04V\x13\u00A7\u00BAZ\u00A9Xp8\u00CC\t\u008C\u00D9\u00B3D\u009Ak\b\u00B5\u00A9\u00E7\x00.\u008Bv\u00B5M\u00DEf\u0095\x1D\u00CA`b0>\\\u00CF\u00D8\u00D1\u00B8~(\x1Aqf0\u00AD\u00B7\u0085\u00C0\u0090\x1E\\\u00E0\u0080\u00D7ZF\u00B0\u0095f\u00E7\u00EA\u0082j)\u00D3\u008C\u00AF\u00D1\x11\u00D9\x10\x06\u00B7AOS\u00EEb\u00E8\u00F0\x1Bdn \f\u00A6EO\u00A0\u00CD\x14\u00E0&9\u009EzH4(\u00EA\u009A@\u009Aur\u00BC\u0093\x1ALQ_\u00E2\u00DEMuKR\u00DB69\u00BCR\u00A4\u00B9\x1Fm\u00A6\u00A1R}\u00D4\u00D9\u00A08\u00B9u\u00C8 v':\u00D1\u00A8~]w\u00A9q\u00C2\u00F2\u00DC\u00DB\u00BD\u00D0\u00A8\u008BmpX'[\u00FE\u0080\bl-\u008B\x18\u008D\u00DE\u0083\u00B6f\u00A0\u00BF\u00C5~\u00B3`\u0093Y?k\u009B\u0091\u00C8\u00E9\u009A\x1D@\u00FF\u00F7\u0082\x16\u00A9\x15\u00B2\u00B5\x10\u00B1i`\x1D_\x17l~\u0080\u008E\u00FC\x13W\u00D9\u00DA\u0096\u00BD\u00C9\u00BE\u00EC}\u00CF9\u00EC\u00C9\u00EB\u009E'o|*\u00EEx\x14\u009AJ\u008B\u0083\u00E6\x18\u00A2\x0E\u00DEk%t#\u00AE\u00F5\x1FA_\u0082\u0087\u00DD\u00B1\u00FF\u009A\u00CD\x19\x05G\u00DEA\u00C3u\u00DD\x03\u00BD\u008B\x19\u00B7\u00A5(\x18k`\x1Ag\u0094j\u0094\x07\u00B8v\x15q\u00C54\u009C\u00D8\x19\x1E\u008A\u0086R{\x00\u00C7s:\u00BF\u0081\u00FB\u00F6\u00F2\u00E6J\"\u00A6\u00A1\u00C7\u008C\u00BB\x01\x18\x16\u00FAj\u0091\u00F8\u00AF\b\x063\u0098\u00C1\ff0\u0083\x0B\x07\u00FF\n0\x00]\u009F\u00A3V^Q\u00A8\u00C2\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//Q...clone
					var binQrow1 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00(\x00\x00\x003\b\x06\x00\x00\x00\u00E5\u00EFJ5\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\u00C1IDATx\u00DA\u00ECX=l\u00D3@\x14\u00BED\u0095\u00CAF\u00CC\u00C0\\\u00B9\x0B[\u0087 \u00E6\fagiV\u008A\u0084\u009A\u00B5[\x183\u00B6['\u00D4t)]\u00C9\u0092\u00ADC:tC \"\x15\x16X\u00B0`\u00E9\u00D0\u0081\u0096\u008D.5\u00EFS\u00BF\x13\u008F\u0093\x15_\u00EA\u00B8=\x15?\u00E9\u00E9\u009C\u00FB\u00F3\u00E7\u00EF\u00DE{v\u00BEZ\u009A\u00A6&d\u00AB\u009B\u00C0\u00AD\x02x\u00E7\x01.\u00CCc\u0093oI\x12K3\x10o\u00B3kw9\u008E\u00BB!1\u00F8\u0096\u00EDc\u00F1\u00A7\x00*\u00A0{A\x00\x14 \u00914M\u00F1-am\"~\b\x06\u00C5\u00D7Ca\x10\u00E0\f\u0081YK\u00C4\u00E3P\x00f\x01\u0089B\u00CA\u00E2$\u00A3\u00EF,$\u0080\x13\u00C6b\u009B\u00ED\u00A64\u00AB\u00B6\u00FF\u00D6\x01J\u00EC\u0081-\u00C4_\u008F \u00DBA\x01\u00A4\u00D9\u009A7f\u00D2 \u008BWY\x1F\x0BY\u00ED\u00BF\u00FE\u009A\x11\x06\u0097\u00E0!\u00BF\u008B\u00D7\u00E8\u00D5\u00D7\u00CCU\u00C0\x0E>4f\u0099\x7F\u00F2\u00FB\u00F2\x1E\u00FCF\u0092D\u00C0\u00E1\u00A8\u00B6\u00C5[i\u00F7\u00C9\u00B1\u00CF\u00C3<\\\u00AC\x7F\u00C5\u00F5\u00E9\u00C5\u00E5#Ys^\x1A@\u0082\u00DB\u00E3\u00CF_y \u00C9\u00F4\u0091\u00F8\n\u00BB>q\u00CD\u00F9\u00DC\u008FXn\u00F6L\u0081\u0083\u00DD\u00C7\u00CD\u00A5\x7FZvjp\u0086\u00D7\u00A3\u00B2b\u00F0\u0088\fh\x1B\t\x1B\u00DF\u00A7\u00AC\u00D9v~\u0083\u00F5\u008DR\x00\u00F2XZ\n\u00E4\u00BE\u00F4\u00AD\u00E5\u00ACy#\u00CD\x0B\\/\u00D6k\x17\u00BEq\u009B\u00BD\u0099\u00C4\u00A0\u008F\u009B\u009D\u00F7\r\u00F1\u00BE\u00EF|\u00F8\u00CB\u0083\u00CF\u00A3\u00D7\u00EF\u00BE\u00EC\u00CC\u00B2\u00C6\u00F5B\u00AF:&\u008Fe,\u00EBM\u00D2\u00E7\x07E_%\x0F\u008E\x7F\u00C37a\u00EA\x05\u00C1!y\u00F6,P\u008F\x1A\u008Ax~\u00CE$k\u0094\x06\u00D0);&\x0FdF\u00D9Y\u00F1\x05y]\x06[\u009E}\u00D6\x00\u00C4-KK\x19}\u00F3\x01\u00C8,\u00DEW]S3\u009B%\u00A9\u00C5r\u00E3U\u00EC\x0B\u00C7\u00A0\x02\u0099[v8\u00FF\u0098 \x7F\u00CCRvJ\u00FD`u\u00B3\u00B8\u00FA\u00DC\u00AA\x00V\x7F\u009A*\u0080\u00FE\u00E5\x03\u00FA_\x1A2\u0083\u00F1M1\u00B8\u00E0\u00C1\x16t\x16\u00C8\u00BB\u0090\u00D4\u00BARtw]69\x1ES\u00A3\u00C1\u009C\u0084\fO(\u0085\f\u00A5\u00AF\u00A3\u00E6\u008F\u00A9\u0080u\x1C]\u00F1Z\f\u00E2\u00E6\u00AF\u00CC\u0095\u00B4;\u00A0\u00A2\u00AA\r\u00F2\u00EFP\u00FC\u0081\u009Ao\r7_\u00A6N\u00D3V\u00F3;\u00D4o6\x0B\x1D17\u008D\u00C8\u00C0\u00A1\x12\u0089\u00DC\u00F1-\u00AA\\C\u00F3WH\u0087%`\u00D3\u0086\u0085\u00CC\x07\u009B\u0091\u00F4\r\x15\u00BB\u0085\u008E8V\x12\u009B\u00B1\u00C7+7\u00CA\x1C\u00F7\u00B0&\u00D7\u00A7\u00F3J\u0092\u0084\x1BFl?:\u0092\u00DA?\u00E3&_YM\u00F8@5\u0086D\u00B7(@+B\u00DA\x18j\u00AA#\u00B3\u00C29@\u00F5\br\u009Dq7u?\u00EE\u0085\u00B9\u00BDB\x00yt\x1D\x06\u00F3X=\u00B1\u00D6\u00A51\u008EL\u00FFi3\u00DDeL\u00C5\u00E3\x19\u00C7\u00C7\x04\u0097\u00CB`\u00F5.\u00AE\x00\u00DE\u00B6\u00FD\x11`\x00t\r\u00A4T\u00BC\u00FDtF\x00\x00\x00\x00IEND\u00AEB`\u0082";


					//W...mirror
					var binQrow2 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02~IDATx\u00DA\u00EC\u0098\u00BDN\u00C30\x10\u00C7\u00D3\u00A8;\u0084'\u00A8\u00DC\x07 \x12\x15s\u0087>\x00\x0B\u00AC\u0094\x05F\u00D8\u00E8\u00CAF\u00B7\u008E\u00B4K\u00DB\u00B9\x0B;\x19XA\u008A\x04;\u008Dx\x02\x02O\x10\u00EE\u00E8\x19N\u0096[R\u00DBm\u0083\u00C8I\x7F\u00C5v\u00FD\u00F1\u00D3\u00C5g\u00A7W\u00C9\u00B2\u00CC+\u00BA\u00F9\u00DE\x1F\u00B0\x12\u00B2\u0084\u00CCk\u00D3$y\x03\u00F5Y}\u008Ab\u00F5>\u00AFo\u00CA\u0093\x11H\x10P@eAe\u00B4=P\u00BCi\u00C8\u0098@\u00D0Z\u00A0\u0084\u00C1\u00C9gd\x0BYu\x00\x19\u0080\u00E7\x04\u00F3Z\u008Aeh\u00E3\u00DE\u00DE\u009C'\u00EBBD\u00CCc\x122f\u00F5\x14\u00FA$E\u0088n\t\u00D5\u00D2@FE9\u0082\x10\u00EA\u0090y6\u00A1\x00r\x124.!\u0085\f\x1A\u00B6\x05D\u0091<\x19i\x02D\x02;\u00F1d\u00E5\u00DF}\x05\u00C1\u00B1\u00B3\r\n\u008B~w#`\u00AF\u00FC\u00C0X\u00B8y\u00FB\u008F\u00DB\u00AE\x16]v.?\u00E7\u00A4mx\u00BC\u00C23t\x04x\x0F\u00CF\u00913H\x02\x1C\u0082\u00B6h\u00F2\u00D0\x16\x10\u00B4\x0B:\u00CE\x0B\u00EA\u00FF2\u00E9\x01\x01J\u0093\u00A05CN\t(\rA{\u00B6\u009E\u00C4I\u009F\u0095\u00B6\u00DB\u00ECl\u00FF\u00D5\x10R\x05\u00FA\x00\u008D\u00AC \x01\u00E6\x1D\x1EM\x06:\u0086\u00B6\u00B6\u00E9\u00EB\u0086\u00B1\bt\u00C2\x00\u009B\u00D0\u00F6d\u00BD'\x19\u00E8\u0095\r\u00A0\x064\x17\u00E0l\x10\\\u008B&\u00F2n\x1E\u00DA(\u00DE\u00F62\u009D6A\u00F7J\u00BF\x10\u00D43]\x07\u00E5\x1BF\u00A9\u008C\u00F8!\u0095\u00E7\u00F5\x0Bi_\u009F/s\u00E4X\u00DF8\fP\u009A\x16\u0094\x01n\u00B1H\x1E\u00AD\x05\u0092\u00F6\u00A7\u00EE\u00CEV\u00AD\u00C6\x00\u00BF\u00FB\u0099\u00DC\\\u00BE\u00C1\u00C6G\u00AF\u008DY\x13F\u00FC\u0085\u00A6\u00DF-\u008Bd\u008FN\u0088&\x05\u00E2\u00EA?0\x18\u00E8\u00C2#\u0089E\u00B21\u00A0Ut\u00EB\u00A4\u008Bn\x17*\x13V\u00FF\n\u00B2R\u00A6\u00A3K\u00C8\u00FC\x7Fa3P\u00AB\u00E8\u009E\u00ECz?9\u00C9\u0095Yu\u0091\u0097X\u0086l\u00E0\u00CD\u00F2\u008E\u0097\u00F4s\u00A7.D\u0097\u00EA_I*\u00EA\x1FQv\u00AD\u008ES(u\u009CG\u00A6\u00AE\u00CF`\u00FC\u0084\u00DE\u00C2\x1D\u00F5\u00DB\u0083\u00B6\x1D\x13O\u00C6\u00B4\u00C0)%\u00A0p\u0092\x0E\u00E8\u009A\u00F5\x11\u00CA\u0098\u0086\u0092\u0093\u0094\u00F5>\u008D\u00ED0X\u00C1\u00D6i\u0098\u00BE\u00EE\u0098-\x18A9%\u008F\u00CE\u00B3\u0081\u0092\u00A4\u00FA\u00AA\u0093\u00C70\u008F>!\x05|/C\u009F\u00CE\u00A2dk\u00D5\u00F1\u00F6\t\u00E6\u00D4\x05\u00C1\u00A4\u00B4\u0095to\u00C0[\x17\u00E4<K\b.P\u00DA\u00C4:\u00A2;\u0097\u00B1\u00C4\u00EA!)em\u00D6\u009EL4\u00E5$G\x1F]\u00FD\u0088\x02&\u00A0\u00B2\u0097\u00F7\u00F8*\u00EF\u00EE\x12\u00B2h\u00F6)\u00C0\x00P\x17\u00F6\u009AL\u00FF\u0097T\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//R...reverse
					var binQrow3 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\u00E6IDATx\u00DA\u00ECX=o\x13A\x10=G\u00F4\u00C4\u00E9\u00E8\u00E0\u00FC\x07\"9J\u008B\u008Bt4\u00D7\u00C4\u00A2\u00CBEHvI\u00A8\u009C2\u00A5]\u0091\x12\u00D3\u00D8.\u00C95\u00F4\u0089\u0084\x1B\n\x10\u0096\u0092\x1F\u0090\u008B\x7F\x01\u00F6\x0F@\u00BA\u00BC\u0081whX\u00AD\u00EF\u00E2\u0093}\u00BE\u0088[\u00E9i?nv\u00E7\u00ED\u00EC\u00EC\u00C7M%\u008A\"\u00A7\u00E8i\u00CBy\x04\u00A9$\u00F9_\u0091|\u00B2\u00AA\u0081n\u00C3P\u00EF\u00C0\x19pZs\u00DD\u008FE\u00B4d\x0F\u00D8\x03\u0084\\\x1F\u00C4\u00DD\"\u0092\fa\u00BD\tp\u00CA\u00BA[X\u009F\u0084\x05[\\\u00F2\u00C9*\u00C6\u00AB\u00AC\u00EA07|\u00F2\u00F7\u00D2+\u008B\x16\u00D2'\u0085\\\u00A7\u00E8>\u00D9c\u00FD\u00A0<\u00CC\u00B3ZR\u0095'\u00AB\u00B2d\u00A5|\x05\u0095$W{\u00B0\u009F\x00\u00DE\u00C6\x1F\x18 \u00E1#k\x00\u00CFU\u00F3\x14\u00F8\x05\u00BC\x01F\u00C0\u00E7\u008D\u0090\x04\u00B9]*\u009F\x03C\"N\u00AF\u0080w,{\x1B\u00D9\u00DD$8\x06\u00CEpx\u009F\x1B\u00DF\u00B6i\u00C9\u00A7\u00AA\u00F9\x18r\u00C3\u00BC-)D|(^\u00B4\u008C\x1E]`\u0097\u00F0\fK\u0097\u00E7\u00E4\u009F\u00D9\u00F5\u00BF\u00FBK\u00CA7r%\t\u0085\u00B2l\x03\u00E6\x0F\u0095\u00FF\u00B2\u00EC\u00C42\u0093\u00A4\u00C2#V\u008F\u00D2\u0088\x1A\u00F2\u0083,D\u0097\u00F2I*\x18X>\x1DG\u00ED\u00FD\u00A1E\u00FE\x04\u00D9{\u008B\u00FC\x0B\u00C8O\u00D7bI\x12\x19\x19\u00CD#\x1BA&i\u00BF\u00B1Lh\u00BA\u00D6\u00E5\u0086\x02_\x11\x1D\u00B1\u00BEHv\u00CEc\u00E8&\u00C9\u00E2\u00E9J\u00B1\u00DCY\u00E0|\u00F8\u00E6/!\u00BB\rxYu=\u008As2\u00F3\u008D\u00C3\u00AB\u00EF\u009A\u00D7\u009F\u00C3\u00F2\x1C7\u00D0\u0099\u00ED%$w<\u00BEMs;'%A\u00E1\u009Cw\u00F7K\u00E2-\u00AFJM\u00AE\x01\by\u009F\u008F\u0090\u00FC\x7F\x1F@@\u009Efw\u00AA\u00E9+\u00F0\u0083\u00E5\u00F8\u00E9vn\u00B3n\u00AEw7\u0088\u00C6\u0087\u00F5k\u00E0\u0099\u00B2\u00E6\x18\u00E4\u00C6\x1B\u00F5I\u00E3,\u00BC\x06\u00A1O\u00EB\u00DA8\u00E5\u00DFbI\u00B2\u00D0\u00879v\u00AA\u0084E.\u0081+\u00A0\u008E\u00CD\u00B0\u00A3\u00DA$\u00DE\u00D8d.\u00C7L\r\u00DFC\u00C6\"\u00FBR\u00A7\u009CD\u00D2$\x14\u00DD[0^\x17\u00E5\u008E\u00A3B\u00D6\u008C\u00BE\u00FD\u00D37\u00C9\u0092\u00AE\u008A\u00E3\u00EC\u00B1|Ar\x12b\u00EEJ\u00D4\u008C\n\u00E28\u008F\u00E4\u0081|#\x19\u0091\u00EDBq\u00D5\x1C\x0Fmu\x12\u0094\u00B1{\u009C\u009C\u00B3\u00A0o\u00F2rK\u00F0\u0093V\u0092A\u00AB(\x07TT\u00A7H`!)\u00F9\x15e\x1D%\u00FBw<\u00A5\u00A2\u00CEI\u00D7\u00D4\x18\u00D6\u00BE\x0F\u00F1\u00C9:\u00DD \u00A2E\u00E3$\u00B3>\u00E02UY\u0097\u00FC\u00C2\x12\u00F1\u00D5\u0093\u009F(\x0B\u00DE*2\u0089}\u00D3H\u0086\x1C\u00BC\u0082l\x07h\u00B3\x1Ep\u00E0\x16-0\u00A3|\u009B\u00B2m\u00C7\x12/\u00A7\u00FF\u00F68V`L|a\u00DF4\u0092\x13\u00B5\u00A1Z\u00F4'm\u00CD\x0E\u00F3X\u00D6\u00A5u\u00FB\u009C\u0084\u0099\u00A4\u00FD\u0090\u00E5\x19\u0091\u00DAw\u00CBf9\u00B5<3\u00CE\u00EC\u0092\u0084\u00DA\x06\u00C9\u00D8?\x1D~;\u00E42\u00C6>\x18\x1A\u00E37\u00B9I~R\u00B6\u0099\u00D0\u00B7\u00BC\x16K\u0092\u0085M\u00F7\x02\f\x00R\u00CE\u00C3\u00F3\u00CF\u008Br\x07\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//E...align
					var binQrow4 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\u00A5IDATx\u00DA\u00ECX\u00BFo\u00D3@\x14>7\u009E\nR\x13\u00FE\x02p\u00D8\x18\x1A\u00A9\u0088\u0089!C\u00D9\x18\u0090P\u00B20\x10\u0096fa`kF\u00C6v\u00F3\u0082 ]hW\"$f\b\u00C8\x03\x0B\u00A8EELH\u008DAbD\u00C2\x14\t\x06$d\u00BE'\u009E\u00A5\u0093\x15\u0093;\u00E7\u00EC^\u00C0O\u00FAt\u00F6\u00D5\u00EF\u00DE\u00D7\u00F7\u00CB\u00CEs\u00E28\x16\u00B6\u00CB\u0092X\x00\u00A9H\u00FEW$]S\x07M\u00C20]\u0081\x07M\u00CF\u00BBh\x15I\u0096m`\u00C4\u00D7\u0091u\u009Ed\t\u00E1\u00BD\x03k\u00C3\u00CD\u00E2!\u00ECk\x12\u00E1\u00C8\u00C6\u00C2\u00D9\x04\u00F6\x19\u009B\u00B6z\u00B2\x0F\u00EF\u00EDT-\u00C8pNF\u00F0jh{N>2u\u00A8\u00F3O~\x05!\u009C>\u00D0\u00B2\u00FD\u00DDM\x04\u00EB\u00D5\x07\u00C6<$\u009D\u00E1\u00EB\u00FA\u008D\u00FD\u00E3\x0B\u00F7?\u00FC8\u009F\u00AB\x00\u00A0\x0F<\x01Z\u0085\x14\x0E\x19\u00C0\x12\x00\u00AB5G|\u00FF\x15\u008B\u00CBq\u00FF\u00D2\u00A1\x0E\u00C1D\x1F8\x06\u00DA\u00AA\u00FAK9\f\b\x10<E\u00F7\u00AA\x1EI\u00EBCVt\u00F4U\u00C3\u00DD\u0093\f\b\u00C9\u00D0\u00DD2\u00F4\u0095H\",>\u0096\u00BD\u00D4\u00F6[6^\u00B8\u00BEr\u00E1\u00C0P/1t\u00DAu&\u009CS_\u00F3\u00E83Au}*\x1C\x1D\u00DC~\u00FA\u00EE\u00E8\u00F1\u009B\u00F7Wu\u00F5\x12\u0088\x07\u00AF\u00EE\x00u-\x1D]#G\u0093I\x00\u00B4\u00F3\u0092\u00CC\x03\u00EDf\u00FE\u00FC\u00F3\u00CF\u00FA\u008CJnq5\u009FX3\u00EF\u00F5\x0F\u00BF\u00AD\u00B6_F\u0083,\u0082\u00DCj\x02\u0093Du\u009A9%\u00FECik\u008F\u008B!Mp%Wq\x18h\u00E6\u00D7R\x04Inb\u00DF\u00CF (\u00B8/\x06e\u0086;`\u00CF\u00A4%y\u00AD}d\u00A4\u00C5/\u008D$\u0087\u00AC\u009D\"z\x0B\u00FB\u00BB*\x7F/\u00F5\u00CB\u009C\u008A\u00E1\u00ECr\u00ED\u00D3\u00B9\u00E5\u00DA\u00BD\x17\u00D7[\u0083\u00BF\u00BC\u00A3}S\x04s5\u00F3\u0085\u00E8\u0093\u008B2\u00FA\u00DB\u00CD(\u0092\u00C2\u00C4\u00A9f\u00E66\u0090\u00C4O\u00DB\u00F5dxJ+\u00DD\u00DB\u00E8IO\u00BA\u00A6\x01jX\x04IW\u00C3k[\u00D28o\u00D0\u00F4\u00BC\u00ED)#\u00961\x11\u00C5\u00B3\x1D\x1E\u00B3\u00D0@\u0095fCW\u00F8\u0099g\u00FC\fy|\u00843\u00BA\u00C6<\t\u00A3\x1E\u0093h\x12A`k\u0086g\u00874\x06\x04v\u00A4}O\u00F28\u009D\u00D3QM\x0F%\u0092<\x1D\u00A3\u0083#\u0095<\u00C5\u00D2\x10\x7Ff\u00E7\u00A3)g\u008D\u00A5i\u009Bg:'7\u0088\x03\u0087jf\u009E\u00D2(\u00DA\u00D48\u00DAU\f\u00F7\u009A\x14\u00EE\u00F5\x19DC\u00D6i\u0094]\u00DD\u008D\u008C\u008A\u009E\u0096\x1Ac\u00BE\u00EC0\u00CA!\u00C9\u0086G\x1Cn\"\x1C\u00C1S\u00C3)-'\u00B9\u00EFs\u00F1lH\u00FBa\u0096\u00D7O\u00E4\u00B5\u0088\x7F\u00E0\x0B\u0096\u00AE\u00D4v\u00CE\u00CC\u0093\u009F\u00AE(F\x06L\u008E\u00A4;o\x01U\x1F\x18\u00A6\u00E4\u00B7\x00\x03\x00]iu\u00AE\u0087\u00CA\x19N\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//T...organize
					var binQrow5 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\u00BDIDATx\u00DA\u00ECX1o\u00D3P\x10~n3\u0080@j\u00DC\u0091\u0081\u00C1eO%*&$:\u0084\r\t$\u0094\fL\u00ED\x12\u00FF\u0084Fb\u0081-\u00DE\u00BA\u00813\u00C1\u00DA\b\u0089\u00BDH 1\u00B5\"\u0088Je`\u0088\u00E1\x07 \u00DCJm7d\u00EE\u00CA\u00F7\u00A2\u00CB\u00C3\tvp\u008B\u00DB\u00BE'\u009D\u00CE~\u00FE|\u00F7\u00BD\u00BB{\u00CF\u00C99I\u0092\u00A8\u00B2\u008F\x19u\x06\u0086%y\u00A1HV\u00FE\u00D5\u00C0 \u008A\u00EA\u00A46S\x1E\x05\x0B\u009E\u00D7.E$\u0089\u00C8\x1BRK\u0090cr\u00B8\x0E\u008A\u008A\u00A4S\u00E4\x11DQec>\x11\u00EF\u00DA\u008DcIZ\u0092\u00E7\u0090dT\u00B4A\u00E7\\\u00FF\n\u00A23\u00F1]\x0E\u00EC:\u00C9\u00E2\u00FFH\u00F7\u009D\x1CX&X\u00B5\x1B\u00C7\u0092\u00B4$\u00CBN\u00D2\t\u00B7\u00AB\u008F>\u00EC\u00B3^\u00CC\u0082\u00BD\u00BF\u00B5W{\u00F6\u00F5\u00E8\u00C6\u00A9\x1D\u00E6\u00EC\u0094\x14\u009F\u00915\u0092}\u0092\u00E5\u00C4\u00BF\u00F5\u00E9o\u00D8YG\x1D\u00FEL\u00D4\u00EDq\u00D8\u00C2\"i\x10\u00E41\u00C7\u00F7i\x115\u00B1D\u00F0\u00CA8l\u00D1\u00E9^\x11\x04\u0095 \u00FA$\x05\u00BB<\x06\u00BB~\u00A2$)U\u00EC\u00E0\u00A51\u00BD\x03\u00F2&\u00F65\u00A9\u00D5\x14\u00EC\u0083\x13\u00DF8\u00E4|E\x10\u00DDAM\u00EE\u008D\u00C1\u00BE\u00D0D\u00AFV\u009C\u00C1$\u00ECd\u00A7\u00B4q\u00A6\u0091\u00C7ow\x13\u00F5|\u00AB\u009A\x05\x1B\u00BC\u00FF\u00BC\u00FB\u00EA\u00E3\u0097{\u00D3\u00FA\u009A\u00FA\u009C\\\u00BD~Ye\u008D\u00CA\u00C3k\u0097\u00BE\u00D7\u00E6*\x07\u00F60\u00B7$-\u00C93B\u00F2i\x0E,\u009F\u0097\u00DF\u00EC\u00BF\u00C5\x0BG\u0092\u00DB\u0083h\u00BC\u0096:\u0092A\u00DE.\u00C7\u00B0&iu\rR!\u00E6\u00B9\x11\u00DA\x13\u00ADf\u00EE\u00E6\u00DET\u00BF;\u00B8\x1B\u00B8\u00EE\u00B3&\u009CC\u00B85\u00BA\u00EE\u00E0\u00DD6\u00CD\x05h\u00A8\u00F2{\u00F5\u0094\u00F9\u00BB\u00EA\u00CF\x16\u00B6\x0F\u00F2<\x1F\u00934\u00D1E\x1E\u0089$\x13lC4Y\x0F\u00BA\x0F\u0082!\f\u00CCC\u00EB\u00D1\u0081c_\u0090\u00D5}\u00A1y\u00D8\u0094\u00F3\x1E/\u008E\u0085\u00C9`\u00AE\u0087\x00\u00F0}W\u00E2g\x10E^\u00AD\x0B \u008B+\u00EB\u0086\x1B\u00F4$\x11\u00A2\u00D2\u00A5\u00EB\x18\u0086\u0086\x10\u00AC\u00DA5\u00A2\u00D3\x076\u009E\u0090\u00CD\x0E\x16\u00C1\x01q9\u0083:KfMz \x13\u00C3\u00A8\u008C\u00A29\\C\u00F3h\u00D1\u00A2\x06\"\u00B5Y7\u00D1\x1A\u00FC\x06\u009A\x14\u00CAaC\u00E2*\"-\fp\u008DT\u00A5\x11\u008D\u00A5\u00A6w\u00D88;[\x00\u00C9zF\u0082\u00AE(\u0093!\x07\u00D48?k\u008CDR\x17(\x1E\u00B0\u00C4bN\x0E\u009Ek\u00C0H+%\u00A2^\u008E@r}\u00F7\u0084\u009F\u00BE(\u00BD\x16\x16>\x12I\u0085\u0082\r\u00E1\u00B4)W'F\x1B\u00A9\u00F8\x01\u00C2\u00C7\x0B$\u00C3\\G\x03\u00D4sD\u00F7\u009B\u00C6\u00FB\u00A6\u009DHG\n\u00E9\u00D5\u00BB\u00DB\u0097\u00BB{\u00AA\u00CF\"\x19d\u0082\x11o$\u00BA\x0Eq\x04-\u0095\u00ED\u008B\x13 \u00DD\t\n\u00BDy\x1A\u00A7\u00BF\u00FD\u0081Q\u00D4\u00F8%\u00C0\x00=r\u008C\x14\u00D4\u00C9\u0084\u00F7\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//Y...Linear
					var binQrow6 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02bIDATx\u00DA\u00EC\u0099\u00BDJ\x03A\x10\u00C7\u00EF\u0082\u0088\"\u00A8g#\u00A2\u0082\\\u00C4\u00D6@\u0082\u0095\u00A0B\u00C4'P\u00B0\u00F1\u00A31/ \u0098N\u00B1J\u00AA\u00D4\x11\u0084 \u00D8\u0098G\u0088\u0090\u00A4\u00D5\x04,E\u00F0P\u00EC\u008D\u00A0b#\u009C\u00FF1s\u00B0\u009E\u00DFa\u00CF\u00DB\u00E0\x0E\f\u0093\u009B\u00DB$\u00BF\u00CC\u00CE\u00EC\u00EEML\u00D7u\r\u00D5%b\u00B4\u0081hH\r\u00F9\x1B\u00B9t\u009C\f\u00F4\u00D6\u00E7\u00CBC/U\u008Ad\x16j\x01j\u0083\x01m\x18z\u009DR\x062j\u00DB\r\x06\u00DDb\x17\u00D9:\u00FC\u00C7\u00AA\u00E5$A\u00DA\x1CM\u00D2\u00B4\u00CC\u009C4e-\u00E6\u0094\u009BB\x14\x13\u00AAVw\u0096\u00ED\u009E\u00B2K\x10\u00E7\u00A6^'e\u008A#\u00FB\x03M}\n\u00FAO\u0090\x1DA}\u00B0\u0099?\u00A9\u00C0\u00CC|pk\u00CEMMU\u00F4t\u00B7 \x149\x13\u00B6J\x17\u0087\u0089\u00BE2v'\u00D7\u00A7\u00B3m\x1F\u00C9\u00C0\u0096\u00A0\u00DE\u00FD\u00D3\u00DA\u00FD\u00B3\x1BW6'1}\u0085\u00A1\u00AE\u00C8\u0088\u00B2\u0091$@\u0098U\u00BE\\\u00C7\u009E^P\u00AAp\u0082\x00\u0094\n\x19\x14\u00A04\u00C8 \x01\x7F\u00BD\u00E3`\x17\x19\u0083Y\x13}\u00E9\u0089\u009E\u00D8\u00F2p\u00D7tO\u0087\x19\b`+\u00DB\"An\u008B\u008E\u00CC\u00C5\u00A3\u00D1\x191\u00AEWF\u00BB7\u0083\x00\u00FC\u00B6\u00BA\u00FD;\u00C1\u00EE\u00F9c\u00EC\u00E0\u00E6)\u0087\u0097\u00D7\u00D0\x02C\u00D34W\u00B1\u00F6\u00CD\u0086\u00B5-\u0096E]\x18\u00EC\u00CC\u00B1\u00FF\nP;\f\x1A\u00FA)\u00A8*^<<\u00BB\u00FD0\u0093\u00D0~\u00E4'E.\x16:$r\u00EC\u00CD\x14\u008E\u0097^\u00C1\u00CA\fZV\u00F5<y\u00E7\u008F.\u00CBY[\x1E0\u00F43\u008E\u0086\u0094\r\u0089\u0085<IG\u00FB\u009F\u00FA\u00C3\u008A\u00A4\u00FDE\u0087\"\u00AB\u00FA#-\u00C1S\u008B/\u00CD\x11\u00ADC\u00E91\u00A1\u0088uu\u00C9\u008B6L\tJM\u00AC%j\u00A8R\u008B\u00DAh\u00F6.\u008Fq=\u00CF\u00E3\u00E8\u00FD\u00D4l\u00A5\u00F1Q\u00F8\x1DY9\u00E9\u008F0}I\x14\u00BA\u00C8p$G\x04g4\u00DB\u0080\x19\u00A1EM\u00E3\u0092\u00C28O\x12\u009F\x01\u00CA*\x1CG\u00F8\x02\u00EA\u00F6RT-\u00F8\u008A^\u0094\u00F9~\u0094\u00C74|?t\x0F\u00F7\u00EB\x7F\u00DD\u00C1\u0088\x0BS\u00E9\x15[\u009CS\u0084\x00-\u00DFx+\u008C%\u00C8\u00E1}\u009FN\u00C1\x03F\u00F3_\u0088\x12\u00E7b*\u0090\u00C2\u00E1(\u00BC\x01\u00F8F\u00EAB\u00F1\u00C49\x17-\u00C1'\x15\u00D2\x03\u00AA\t\u00BE\u00A2\u00F1\u00BE'\u00EE\u00F8\u00F2\u00B3\x01\u0098\u0094X\u00DD\f\u009B\u00E71Y.&\u00E7\u00A7?\\\x1F04\u00A4j\u00F2\"\u00C0\x00\x7F\u00FE\f\u00B86\u00C7\t`\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//U...shift
					var binQrow7 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00ECIDATx\u00DA\u00EC\u0099=N\u00C3@\x10\u00857\x11=\u0084#8\x07\x00)\u0088:\x05\x07HCZL\x13\u00B7\u00E9\u00B8B\u00E8(1M\u009C\u00D6)\u00A0\x07\tZP\u0090\u00B8\x00\x16'H\u00C4\t\u00967bBV+\x07\u00EC\u00B0\u00B6\x06\u00B4#=\u00ED\u00EE\u00AC\u00E4|\u0099\u00F1\u00FEd\u00D2\u00D0Z+\u00E9\u00D6T\x7F\u00C0<\u00A4\u0087,k\u00AFYv\x04i\u00CB\u00A7\u00C9/)\u0092AI\u00BFO\u00B7\u0087\u00F4\u0090U\u00DB\u0096\u00A3\u00E7\u00DC\u00F1\u00B63B3\u0085\u008EM\u00FFo\u00AD\u00E1\u00EA\u0082\x01@\x02\u008B\u00A1\x16\u00B4\u0080\u00A2v\x10LEA\u00FA\u0085S:\u00F4\u00F1SW4$\x00\x134\u00F7hC\u0091\u0090\fx\u00C2\u00C3q\u009D\u00A0\u00CD\u0082\u0080\x17\x06\u00A0\u00AA\x1B\u00B4h$)\u008A\u00EF\u0096\u008F\u00C6/b utH0]\x03\u0094\u00DA.\u00FB+\u00B7R\u00FB$\u00D2\u00BB\u008F\u00E6\x06\u00EA\u00E5\x01b~\u0087\u00E7\u0087.\u00BF\u0080\u00B3\u00CD\u009C\x01\x1F\u00A0=\u00D7\u0091nV\x00H\u00B6Mc\u008E\u00BC\u0098\x13gh\x00*\x034\u0094\u0096\u00EE\u00C4\u00DA\u00A6&Hw()\u0092\u008A\u0081&?\x01n\u00F4\nP$]J]>\u0086\u00DF\u00CDA\x1AJ\u00CA<\u00B3\u00B6\u00AB\x1A\u009FN\u00E3M^\u0087Z \x01\u00D8Cs\u009D3U\b\u00B4\u00AE\u00FB\u00E4[\u00CE\u00B1\u00AAx\u00DB\u0092q\u00E9\u00CD9V\u00C9N\u00E1OD\u00DD\u00CC-\u00D0\u00C2\u0080\u00FE7\u008E\u0087\u00FC\u0097\u0090y\x05T\u00F6\x7F\x15Q\u00D1\u00A6\u00CB14\u0083:uGr]\u00A1\u00F4\x1C\u00CA\u00B8O\u00D5\u008D~;\b\u00A8\u00EC\u00D2aU\x03I\u00A5\x14h\u00CEQ\u0089\u00AD\u00B9\x19\u00FB\u00CF\u00D8Em`D95\u00FA1\u00FA\u0083\u00AA\"\u0099r\u0084\u00DA\u00D0\u00C0J\x1B\u00F9#hdF\x19\u00D1kp?\u00B2\u00FAWU\u00A6\u00BB\u00C3)>\u00C0\x07=/\u009D\u00AE\u008AS. \u00FB\x10-\u0086[\x12W\u00D2\u00C4\u00AD\u00EE\x16\u00A7zW}\u00D6!S\u0089\u0090\u00B1Z\x15H\x17,q\u0090}^\x18\u00F3\u00E5\u00B6bl3\u00CA\u00EA\u00AB5s\x19\u00AF\u00EE\u00C2\x7FD\u00F9\x0B\u0086\u0087\u0094f\x1F\x02\f\x000ee\u0082,E\u008A\x1C\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//I...shift
					var binQrow8 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00CFIDATx\u00DA\u00EC\u0098ON\u00C2@\x14\u00C6\u00A7\\\u00C0?G(\x07\u00D0\u00A4\u00C65\x0B\x0E\u00E0\x06\u00B6m7\u00B0e\u00E7\x15t\u00C7\u00D2\u00B2\x01\u00B6e\u00E3\x1E\x13\u00DDj4\u00C1\x038\u00F1\x04\u00A8'\u00A8\u00DF\u00C4G2\u0099\u00B4\u00D8\u009A\u00FEy53\u00C9\u0097\x19^I\u00F9\u00F1}\u00CCk\u00A9\u0093$\u0089\u00E0>:\u00A2\x05\u00C3BZ\u00C8\u00BF\u008E7)\u00FBP\u00C2\u00DDI\u00D7\u00C6m!-\u00A4\u0085l\x0ERV\x01\u00E9\u00D8\u00BB\u00A0\u00B6B:\u00D1S\u008F5$\x00\x03L\u00F7\u0098\x17,!\tpN/\u00FD\"\u00A0\u009D\u009A\x00/4@\u00A1\u0081N99\u00F9\x00\u00BD\u00A6\u00D47l \u0093\u00F1\u00F9'\u00A6\u009E\x01\x1A\u00A2\u009E+\u00F2R\u00FB$\u00E2;\u00C4t\x0BM\x00\u00B0\u00C98\u00AE\\\u009D\u00E6\x05,\x15R\x038\u0081\u00BE\u0094si\u00A0\u008D\u00F5I\x03P\u008D\x03\u00F5\x1A\u00F5SN\u00CD|\u00A2\x01\n\r4`u\u00ED\u00A6\u00BE\u00E7k\u00A5%\u00E2\x0E\x1Aq2+B\x02Z\u0096\r\u00F8sr8\u0099W\u00E2\u00E6q\x01%P\u00B0\u00E7=A\u0091s\u00E6Q\u00EE\u00B8S\u00E2\f\u008B\u00B4\u0091\u00CA\u00E3\u00A6\u00CB\u0097o\u0094\u00E7t\u00B9cs\u00AB\u0096\u00D6\u00EFT/|g\x03I\u00B1\u0086\x06`i\u00CD\u00BA\u00B4\u00DD\u00AD\u0081\u00D6\nh\u00FF\u00E3X\u00C8\x7F\t\u0099\u00F5\u00E0T\u00AFc\u008E\u00D5\u009Aj\u00CF\u0090W\u00B7\u0093\u00EE\u009E\u00A7\x19\u00D7\u00B4\x1E@\u00C3\u00AE\u00EB\u00DEa\u00F6H\u00D5@\u00C2\u0081\x01\u00B4%W\"\u00E3\u00D8\u009A\u00EA\u00B1\x06\x7F\u00A9\u00B9\x1Ck\u00EB\b\u00EBQUN\u00C6\u00E4N\x17\x1A\x19\u00B1\u00CD\u00A8\u00AE\u00BEH\x7F\u00E70\u00DCs\u00E8\u00F8\u00D8X\u00CF\u00AA\u008C\u00DB#\u00803|\u00D0\u00CB\u00AE\u0088\u00F5\n\u0092\u00BF\u00FC\x04j\u00D98CH\u00B9\u00B4VR\u00F1s\u00DC\u00DDG\x14\u00E91\u00B4\u00A2\u00F8\u00D9AF\u00B4S\u00D5\u00F8 \u00B1\u0083Tq_A\u00DB][\x11\u00E9\x0FNeJ]jsD\u009B\u00CB\u00DE`X\u00C8VB~\x0B0\x00\u009C\u0098O\u00EB2\u00EBA\u009D\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//O...random
					var binQrow9="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02sIDATx\u00DA\u00EC\u00981n\u00DB@\x10E)\u00C1}\u00CC\x1B\x04\u00AB\x03\u00C4\u0080\u0083\u00D4.\u0094>\u008D\u00DC\u00C6i\u00A4#DG\u00B0\u00BB\u00B4b\u0093\u00A4\u008D\u008A\x1C *\\\x07! \x1F\u00C0\x0B\u009D \u0092O\u00C0\u00FC\t\u00FE\x1A\u0083\t\x15P\u00C4ZZ\u00C1\\`@jv5|;\u00B33\u00A2\u00A6WUU\u0096\u00FA\u00E8gG0:\u00C8g\x05y\x12\u00CB\u00D0\u00BD\u00F73\\\u00C6\u00FC\u00B8\u0080L\x06\u00CE\u00F9d<\t\u00C0k\\F\u0090\u00B7\u0094\x1C\u00F2-\u00B5p\x0B`\x01\u00CF-Dp?\u0085\u009C\x03>O\t\u00D2A\x1ECKP\x19\u00E7\u00C7\u00908\u00EE\x18 }J\u0090\u009E\u00C9\x12\x12i\u00C8\u00DB2\u00A5\x12TH\u00F9\x01\u009C@\u00AD!\x1F\u00A5\f\u00E1l\u00AE\u0093\u00F1$`nX\x1B\x7F@~Q=\u0089ufz\u00DD[\u00D0!!{\u00B3\u009F\u00EF \u00A7\u00C9B\x02\u00EE\n\u0097\u00EF\u0090\u00DB}\u0081\u00F6[\x00~\u00E6\u00C7W\u00FB\x02\u00ED\u00EF\x12b\x05\u0098i\u00D0\u0094<)0w5\u00FAO\u00C9@V\u00937\x1B\\.\f\u00E8\x07\u00E8\u00BF$u&\rhc@9\u00CB\u0090\u00D6\u009By\u00F2bn\u0092\u00ED+6v\u0095T17\u00802\u00DE\u00B7\u00F1\u00E8\u0093y\u0092\u00A5i\x05ya\u00A6\x1E g\u00F0\u00E8\u00EA\u00E0\u009ET\u00E7\u00F7\u00C1\x00^\u00EC\x02\x18\u00DD\u0093\u00F0\u00DEK\\6\x04\f\u00BA3UK\x05py\u00B0p+\u0098\x15a,h\u00D6\x060\x1A\u00A4\x02\f\u00E7\u00EF\u00CE\u0082\x1E\u00F4U\u008D!\u00BE5\t\x12\u00F5\u00E72F\u00E2l\x18b;\u0096\u00C9@n\u00F9\u00B9lU\u00B4\u00F7\u00918\u00A7\f\u00F12&`\u00F7\x1F\u00A7\u0083|6\u0090\u00F7\u00DEW\u00AA\u00D5\u0092\u00B4'],C'j\u00F7C\u00B6I\u00A4]\"}Ei\u009D\\sz>p\u00EE\u00D2\u00AC\x19\x06=\u00BF/\u008DT\u00E9\u00EE\u0096\u00C6\u00AB\u00A2\u009F\u0085\u00D6\x0B\u00D6\u00CFk\u00EC\x14\u009C\x1Fk\u009Bu\u009E\f;\u0097\u0087\u00BC&\u00A0\u00B4\u0096\x07\u0090\x11\r\u008757F\u009F\x11p\u00A2\x1E\x18\u0086\x00N)3\u00F3\u00AC\u0082vB\u00AF\u00DD\u00DA\u00AC\x0F7v1eC~\u00C0\u008E\u00AD|a\u00AD\u00C3\u00C7\u00B6s\u00E8=:eT\u00BCP\u0098\u00E8HKpN\u00C95\u0080xU\u00D9)\u00B5\u00CD\u00A6gr\b\u0083\u00BF\x19\u00FA\u00BC\u00C9\u00F9\u00ABi\u00F5=\u00EA\u00D5\u009C\u008B\u00998\x7F\u00C3\x04\u00E3MZx\u00FE\x7Fzi\u00F0\u00AB&\u00BF\u008F\u009E\u00DD\rKI\u00C9\u00B5\u00D2H\x1D\u00EBc\u00C1\u00DB\x11e\u00ADt\u00BBgw\u00CD\x0E\u00C3A_pnL\u00DD?\u00DE\u0092P\x02.\u00AC/\u008D\u00BDK\u00EAs\u00DEo\u00F3\u00A6\u00DF\u00C6\u00D2\u00BD`t\u0090\u00A9\u008D?\x02\f\x00\u00E6R$d\u00A3\x0B\u00F6\u00BE\x00\x00\x00\x00IEND\u00AEB`\u0082";
                    
                    //P.....move
                    var binQrow10="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00AFIDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3`\x07L\fC\x00\f\tG\u00B2P\u00C3\u0090\u00BB\u00F7\u00EE\u00B9\x00\u00A9\u00DDHBg\u00818]YI\u00E9\u00EC`\nI%(m\x02\u00C5\u00EF\u0081x\u00D5\u00A0\u008CnP\u00C8ACo5\u0092\u00C3\x07_\u009A\x04F\u00BD \u00902\x06\u00E2{\u0083*M\"9\x10V\u009E\u0081\u00A2;lP:\x12\u0096\x1E\u0081Q~o\u00D0\u00E5n\u00E449Z\u0098S\b\u00EE\u00D1\u00D2\u0091\u008C\u00A3u\u00F7\u00A8#\u0089+\x13\x0F\f\u0085\u0090\u00B4\x1F\u008D\u00EE\x11\u00D5\u009Ed\u009Cy\u008A\u00E8\u00F2\u00EB\x7F\u00BA\x19\u00E3ht\u008F:\u0092\x0E\u00AD\u00A0\u0083 \u00C2\u008F\u00FB\u00A1\x00A\u0095{\u00E78@Y\x17\x18\u009Cg}\u00A0\u009B#\u0081\u0099\u00C1\x01\u00EA\x00b2\u00D0~(\u00ED\b\u00C4\x07F\u00D3\u00E4\u00A8#i\u00DC}h\x04\x11\u0097\x0F\u00FF1xv\u00F7\u009F\x01>\u0085\u00DF\u00BF\u00FC\u00EF\u00F8;!\u00FE\x07(\x03\x05o^X@?G:\u00CFj\x00Q\u00B7&\u00C4\u0083h\x7F\x02\u00AA\u00E5G\u00D3\u00E4\u00A8#i\u00D1\x11\x03\u008DV\x00\u00FB\u00D9\u008C\u00A3!I\x05G6\x0E\u00FA\u00E8\x1E\u00CD84\u00AAq\u00F0f0 \u00E5\n\u00E5\u00EE&'\u00B3\u00B1\u00D0)0\u0094\u00E8\x1A\u0092H\u0083\u00F8\u00A0A*\u00D0\u00A8.h\x00\x7F5L\x1C\x14R\u00C8\u00EC\u0081\u008AnX\u00A8tB\x1D\u00B9\n\u00E8(!\u00B4\u00D0R\x1A\x14\x19\x07\x18J\u00B3\u0080\u00D4,(\u00D7x\u00D0\u00E6n\u00A0C\u00DF\u00D3\"\u00E4\u00A8\u00EAH\u00E8L\x03\b\u009C\x1D\u0094\u008E\x04:0\rH\u00852@\x06\u00F2\u00CFB3\x12\u00F2\x14\u00C9\u00A0('\u00CB\u00A1\u00D1\x1C\x06\u008D\u00FA=@\x07\u00EE\x012\u00DFa\t\u00D9{\x03\u00E2H\u00A0\u00A3\u0094\u00B1\u0088\u00B9b\x11C.\u0086\x18\u00E9\u009E&\x07m\u00DD\r-z\u0094\u0087D\u00A3\u0097\u009E\x00 \u00C0\x00\u00A9p\u0085\u00D71\u00D5\u00C4\u00D9\x00\x00\x00\x00IEND\u00AEB`\u0082";


					//O...option
					var binSetting1 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00(\x00\x00\x003\b\x06\x00\x00\x00\u00E5\u00EFJ5\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02aIDATx\u00DA\u00ECX\u00B1N\u00C30\x10M+v\u0092/ \u0084\x1F\u00A8\x04;\f\u00EC\u00B0\u00B4+L\u00B0\u00C2D\u00C72v\u00A2k;\u00C1J\x17\u0098a\u00A0;\b~\x00\u00AB|A\u00E1\x0B\u00CA;xA\u0096\u0095\u00B4u\u009A\x04\x0Br\u00D2S\x1C'\u00BE<=\u00DF\u009D\x1D\u00D7\u00A6\u00D3\u00A9\u00E7\u00B2\u00D5=\u00C7\u00AD\"\u00F8\u00E7\t\u00AE\u00E4\u00E1\u00E4U)=\u00D3&\u00C0\u00F1F\x14\r]S\u00B0\x0Bl\x01\x03\u00E0\x1A\u00A4\x03\u00D7\b*\u00A8\u00F6\x04\u00B4y\u00DFt2\x06\u00A1\u00DC\x11\u009B\u00F7y\u00F8\u00AB\u00E5Q\u00A8\u008D\x18\x14kC\u00C9\u00AE3I\u00A2\u00C5\u00E0P\u00A6\u00D9\u00D52\u00A3\u00F2&\u00F7\u00EF\n\u00B5*\u0082`\u00AD\u00DA\u00CDTk\u00F1\u00E2\u00B5\u00B0\u0081K\u008F\u00B7\x1Dd\u00F4\u0083S1\b\u0082c\\\u00D6x\u00FB\x064@\u00F2\u00FD\u00D7\b\u0082\u00D0%.\x07\u00C0\u0088]\u00DB\u00C6+\u00B7\u0080/D\u0081\x1B\u0090=,\u008D \u00C8\u009D\u00E0ra9\u00EC\x14${e%\u00C98\u00C3\u0098\u00F72\u00B3\u00F8\u00A5\u00A41\u00F6\x041\u00BD!.\u0097\t\u008F\u00CE\u0081\x00\u00D3Xc\u00DB\u00B4\x0E\u00C6\u00FA\u0085\u00C6 K\u0089\u0094\u008FU\u00E3\u00D1\b\u00C4vR\u0092H\u00B7\x0Ff\u00F7\u00B8(\x05\u00FD\x04r\x1EI/\x12\u00A726,r\u008A\u00C7T\u00C1\u00B4p\u00C1\u00BE\x0F\u00DBd\u00B1\"\u00C8\u00A9\tY\u00E3t;`\u00E9\u00D1\u00CB\u00909\u00BD#N\u00EFKa1h\u00C4\u00E2\u00B3\u00E5\u00B0u\u009B\u00D8[\u00B6\u00CC4J\x1A\u0093\u0099\u00A0\u009FaL\u0098\u00E5C\u00CB\u00AE\u00C5\u00FB,\u00C0\x12\u00F8{\t1\x17\u00AF\u00D1W\u00A5\u00AE\u00C5\td}\x12\u00FD\u00D9\u00CD\u0080P\u00E8\u00E5`\u00B9lX\u00B9\u00AD:\u00A4j#*[\u00FD\u0093T\x04+\u0082F&?\x02\u009BlO\u0081]\u00D7\x14\u00DC$\u00C4\u00BAy\u009D4\u00AC\u00CCPD\x0E \u00FB\u00BC\u00FD:\u00D2\u00A5*w\u00FCx\u00A0\u00F5\u00C7\u00A5\u00A0\u008F\u00B6\\\u00CF\u00BC\u00EF\u00F3A5\u00C7\u008F\u00BC#m9\x15k\u00D9*(N\u00DBD\u00FC\u0081HSH\u00F0u\u00D4\u00CB]tL``\u00BC;\u00CF\u00CF\x06\u00D0L\x0B\u0089z\u008Az\u00BBThH\x04\u00BA\x03\u0092\x18hS\u00EBe\u00F4s\x0F(\u0083\u00F4B\nFt0\x11$9H\u00EB\u00B7\u00F5\u00935\x06\x15\x15\b\u008C\u00BEHS'~6\u00EB\u00D0r\u00AE\u009FLY,\u00D2\u00B3\u00D9$&Z_|P\x1E\u00F7?\u00CDX\u00A3g\u00FAY\u00F6\u00F0\u00A8\u00C5\u00A0\x0E\u00D8\u00D6\u00ED\u008C*\u00B4\fe$\u008B\u0095\u00AE^\u008A\x1F\u0095\u00A6\u00F6\u00B2\u00BF\u009D\u00A2\\_\u00CB\u00DAj\u00A9\u00B3\u00FD\u00AB\x1B\u00B0n\u0095f\u00CE\u00EF\x07?\x05\x18\x00d\u008E\x17\u00EB\u0081\u00E2,\u00EB\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//F...purge
					var binSetting2 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00(\x00\x00\x003\b\x06\x00\x00\x00\u00E5\u00EFJ5\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02aIDATx\u00DA\u00ECX\u00B1N\u00C30\x10M+v\u0092/ \u0084\x1F\u00A8\x04;\f\u00EC\u00B0\u00B4+L\u00B0\u00C2D\u00C72v\u00A2k;\u00C1J\x17\u0098a\u00A0;\b~\x00\u00AB|A\u00E1\x0B\u00CA;xA\u0096\u0095\u00B4u\u009A\x04\x0Br\u00D2S\x1C'\u00BE<=\u00DF\u009D\x1D\u00D7\u00A6\u00D3\u00A9\u00E7\u00B2\u00D5=\u00C7\u00AD\"\u00F8\u00E7\t\u00AE\u00E4\u00E1\u00E4U)=\u00D3&\u00C0\u00F1F\x14\r]S\u00B0\x0Bl\x01\x03\u00E0\x1A\u00A4\x03\u00D7\b*\u00A8\u00F6\x04\u00B4y\u00DFt2\x06\u00A1\u00DC\x11\u009B\u00F7y\u00F8\u00AB\u00E5Q\u00A8\u008D\x18\x14kC\u00C9\u00AE3I\u00A2\u00C5\u00E0P\u00A6\u00D9\u00D52\u00A3\u00F2&\u00F7\u00EF\n\u00B5*\u0082`\u00AD\u00DA\u00CDTk\u00F1\u00E2\u00B5\u00B0\u0081K\u008F\u00B7\x1Dd\u00F4\u0083S1\b\u0082c\\\u00D6x\u00FB\x064@\u00F2\u00FD\u00D7\b\u0082\u00D0%.\x07\u00C0\u0088]\u00DB\u00C6+\u00B7\u0080/D\u0081\x1B\u0090=,\u008D \u00C8\u009D\u00E0ra9\u00EC\x14${e%\u00C98\u00C3\u0098\u00F72\u00B3\u00F8\u00A5\u00A41\u00F6\x041\u00BD!.\u0097\t\u008F\u00CE\u0081\x00\u00D3Xc\u00DB\u00B4\x0E\u00C6\u00FA\u0085\u00C6 K\u0089\u0094\u008FU\u00E3\u00D1\b\u00C4vR\u0092H\u00B7\x0Ff\u00F7\u00B8(\x05\u00FD\x04r\x1EI/\x12\u00A726,r\u008A\u00C7T\u00C1\u00B4p\u00C1\u00BE\x0F\u00DBd\u00B1\"\u00C8\u00A9\tY\u00E3t;`\u00E9\u00D1\u00CB\u00909\u00BD#N\u00EFKa1h\u00C4\u00E2\u00B3\u00E5\u00B0u\u009B\u00D8[\u00B6\u00CC4J\x1A\u0093\u0099\u00A0\u009FaL\u0098\u00E5C\u00CB\u00AE\u00C5\u00FB,\u00C0\x12\u00F8{\t1\x17\u00AF\u00D1W\u00A5\u00AE\u00C5\td}\x12\u00FD\u00D9\u00CD\u0080P\u00E8\u00E5`\u00B9lX\u00B9\u00AD:\u00A4j#*[\u00FD\u0093T\x04+\u0082F&?\x02\u009BlO\u0081]\u00D7\x14\u00DC$\u00C4\u00BAy\u009D4\u00AC\u00CCPD\x0E \u00FB\u00BC\u00FD:\u00D2\u00A5*w\u00FCx\u00A0\u00F5\u00C7\u00A5\u00A0\u008F\u00B6\\\u00CF\u00BC\u00EF\u00F3A5\u00C7\u008F\u00BC#m9\x15k\u00D9*(N\u00DBD\u00FC\u0081HSH\u00F0u\u00D4\u00CB]tL``\u00BC;\u00CF\u00CF\x06\u00D0L\x0B\u0089z\u008Az\u00BBThH\x04\u00BA\x03\u0092\x18hS\u00EBe\u00F4s\x0F(\u0083\u00F4B\nFt0\x11$9H\u00EB\u00B7\u00F5\u00935\x06\x15\x15\b\u008C\u00BEHS'~6\u00EB\u00D0r\u00AE\u009FLY,\u00D2\u00B3\u00D9$&Z_|P\x1E\u00F7?\u00CDX\u00A3g\u00FAY\u00F6\u00F0\u00A8\u00C5\u00A0\x0E\u00D8\u00D6\u00ED\u008C*\u00B4\fe$\u008B\u0095\u00AE^\u008A\x1F\u0095\u00A6\u00F6\u00B2\u00BF\u009D\u00A2\\_\u00CB\u00DAj\u00A9\u00B3\u00FD\u00AB\x1B\u00B0n\u0095f\u00CE\u00EF\x07?\x05\x18\x00d\u008E\x17\u00EB\u0081\u00E2,\u00EB\x00\x00\x00\x00IEND\u00AEB`\u0082";


					//A...foolParent
					var binArow1="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02$IDATx\u00DA\u00ECX\u0081m\u0083@\f\u0084\u00AA\x0B\u0090\x11`\x042\x02\x19!\x19\x01F\b#$#\u0090\x11\u0092\x11\u00C2\be\u00842B\x18\u0081\u00DA\u00D5\u00BD\u00E4~A\u0084\x14^_\u00C9\u0096\u00AC\x10\u0087|.g\u00F3g\x7F\u00D8\u00F7}\u00E0\u00BB\u00BD\x05\u00FF\u00C0\x14\u00A4\u0082|\u00D5>\u00DB\u00B6\"\u00EF\u00C93\u009F\u0099\u00DC\u0093w\u00E4~\u0082$\u00F6Rz\u0089\u00C8\u00CF\x00\u00EB%\u0093\u00CC^M~#\u008F\tt\u00EC#Hf\u00AFN\u00E2\u00B8\u00A5\u00D7v\u00C9\u0094\u0087K(\x0E\u00B1\u00C6i~Xa\x06\u00BC[\x02\u00E4\u00FB\u0082\u00A9\u00E6\x07f'\u00DE\u009F|K7\u00A7\u00BA!\u00E6\u00BE\u009D\u00AE/`8\u00F3\rdm\u00DE\x10\u00D0\x0Eu\u00B9\u00F7\u00A6&U\x16\x15\u00A4\u0082T\u0090\nRA\u00BE\u00DE`\u00F0\x18`\u0085\u00CE$w\u00E5\u00CC\u00EE\u0088\u00B5\u00FBN\u00DF\x0B\u00D7\u00EC\u0082\u00CEhb\x03h\u00F1\\\u008BWe\u00D2\x00CWc\u0098\u00E1\x1F\u00AD\u00D0\u008A1\u00E8\u0082>\u00AF\u00C7\u00E2\u00AEj\u0092\u00C7\u0080\x14\u00F3K\x00 l\x1B0|\u009D\u0088;\x01y$\u00FF`G}\u00B1\u00DF\u00D0\u008Aq)D\x13q' 9m!\u00FCG\u00FA\x00\u00E8W\u00DD\u008D\u00C5]oA\u009D\u0098k\u00E4\x035\x16w\x0E\u0092\u00EB-\x07\x10.\u0085\x0E\f\u008F\u00C5\u009D\u0080\u00B4\u00D9(q\x00\u00F0\u00C0hp\u0098\u0088/\u00C2\u00A6\u008E\x0F\nRA\u00AE\u00D8\x05u\u00D8\u00D8ok\u0080\u0080\u00ECV\u00B4\u00FE\u00F6\x15&Y\u00E2\u00B686\u00B9\u008A\u008DziK\u00E1\x7F\u00EA\u0082\x1A\x02x\u00C4\x1Ex\u00E1cg\u00DE\u00BC\x03qr\x06\u00E6k\u00E8x\x02Y\u00BC#\x0B\x07tK\x19b\r@\u0095\x10\u0082J\u00AC\u0091\u00E0\u00F8p^M\u00D2\u0097s\\\u009A\u00B6,\x07\u0090l\u00A0\u0091\u00D8\u00E2G\u00AE\u00D8\u00D49\x0B'K\u00CF\x19\\\u00C1q\u00DC[@\u00F7C\x1B\u00E03 +\u00FC;\u00FE\u00A7%/\u0080E\x12Q\u00AB\u00B2\u0091\u00B80\u00F3\u00E6h\x1A5\u00DC\u00D8\u00A9\u009C+\u0099Ou\u00E6V\u00E3\u009B\x1A}\u0086\x14J\u008BD\u008D\r\u008D \u00EBh\u00B7\x04\b\u00BB\u00A3\x16\u008B)\u00CD\u00C7l\u00B31\u00E9t\u00B9OFb\u00C8\x1A\u00B3F\u00DC\u0093\u0083\u00F9\u00F5f\u009C\u0081X)\u00C6\x05.\u0087\x13\u0081i-\x06;\u008A\x15\u00F2\u00E9\x1EXO^\u00D7\u00A6<\u0086&K\u00ED\u0082\x14\u00A4o\u00F6%\u00C0\x00\u00F25\nT\u0082\u00C3\u00FE\u00ED\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//S...quickVal
					var binArow2="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x027IDATx\u00DA\u00ECX\u008B\u0091\u00820\x10\u00D5\u009Bk\u0080+\x01K\u00F0J\u00C0\x12\u00B0\x04)\u0081\x16\u00B0\x04(AJ0%\u009C%\u0098\x12\u00A4\x04n\u00D7y{\u00B3\u0093\u00F1\u00F8(bn.;\u00B3\x03\x06\u0088/o\u00B3\u00C9\u00DB,\u00DB\u00B6]\u00F8no\u008B?`\x01\u00E4\u00BF\x02\u00F9>E'gkc\u00BA\x1C\u00C8\u00D7\u00E4\ry\u00B6\u008A\u00E3\u00DA7&\x19\u00A0%\u00FF$\u00DF\u00F3o\x00\u00F7\n$3h\u0088\u00BD\x139\u0083<\u0091GS\u0081\\N\u00B1N\x12k\x17\u0084\u0099\u008D\u00C3\\\x11X\u00EB\x1B\u0093[0\u00C7!\u00CE\x197\x01\u00DFy\u00958\u00B0\x15y\x02\u00B0|-\u0099Q\u009F@\x1E\u0099M\u00C9hb\u0091C\u009F\u00FA\u00C6$'\u00CA\x0E\u00E0\u00D88\u00D4\u00C6\u00D79y\u0084\u00B3e^ew\u00D8\x16\x03\u00C8\x002\u0080\f \x03\u00C8\u00C7A\u00D2~\\\u0092\u00B7\u00F0\u00E3\x10\u00C5\u008Dw\u0093{\u009F\u008F\x02I\x1D\x15\u0090]\x1B\u00F8\x02\x12\u00AC\u00CF\u00F6('\u00BAlpy\u00D1\u00A7\u0082R\u00A8l\x03\u00D0WYF\u00D7\u0088\u00DA\x1Af\u0084\u00C1\u00F3s}\x0F\u00E1k\u00F0~\u0089\u0081Z\x14hF\u0091\u00C0\u00A2\u00E4\u0082\u00F6\u00EA\u00DEp\u00C7\u00AA,X\u00A8?X\u00FF\u00C2\u0088{/\u00AC\x7F@\x00\x1Fn\u00E8\u00D0\u00BA\x0B\u00E0#zrh\u00A8\x12\u0088af\u00BD\u00D2\x03\u0086\u00E6\u00E4\u0088l'\x15\u00BD\b\u008F\u0088\u00DC\u00A1\x16!\n\u008DSN\u00AC\u00A5O<\u00BB;\u00BB\u00AD\u00B0\u0086\u00C2*W\u00EDC\u00AD\u0091\x03\x04\u00F2/\u00D5\u009E\u00A1\u009F\u00FC\u00D1%\u00A8BY\u0090`\u00E4\u00DC\u00A1uF\u00DEtT\u0086\x06\u00DFG\x12\u00DE\x1B\u00AB@\u00AE\"4\x1E$\n\u00FD\x1A\x13\\\u00EA\x16\rj\u008FdHo0l\u00C1\u0096dp\u00EA\u0094\x14\x16\t\u00C3\u00EF\x15\u00A1|\b \x03\u00C8\u00B9@B\u00A9\x14N\x1B\x1FD\u0095\x1D\u00DF$\u00D8\u00C3gc\u00B2\u00C6\u00B6\u00A6w\u009B\u00B8\u00E7\u00F8$\u009E;\u00DC\u00B5#$R\u00AC\u009Dr(\u0095+\u009D\u0099\u00BFjN\u008A<K\u00D4^\u00ABY,\u00A01\u00B3\u00BE\u00C5\u00F8i \u00B1\u00F5\x19\x15\u00F2\u00D4\x01\u00B9\u0082t\u008B^\u009D\u00DDW\u0090(\x19\"L\u0081\x1F\u00A9\u00C5\u0089\u00A4\u00E7\u00ED\u00AB@\u00CA\u00BCd\x16Or\x0EN\u00E0Dll\x1C\u00E0\u00F3\u0083\x04(\x11\x00\u00C6\u00D5\u0088\u00CF\u00CC\u00E8\u00B1\u008By\u00AD\x13I\u0095\x11\u00DC~\x06H\u00CB\u0095\u00E4H\u009D9\u00D8\u0082\n\n }\u00B3o\x01\x06\x00C\u008A\x16\u00C9\u00B7u \u00DA\x00\x00\x00\x00IEND\u00AEB`\u0082";

					//D...reverse layer order
					var binArow3="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02ZIDATx\u00DA\u00ECY=N\u00C30\x18M\x11\x07\x00.@\x14FFz\u0080\"\u0095\x19\x16:w\u00A1YajG\u00D8\u00CA\x04+a\u00E9L\u008F\x00\x12\u00B0\u0093\r\u00C6Fp\x01\u00CA\r\u00CA{\u00E2Y\nV\x02T\u00A9ZW\u00D8\u00D2\u00A78\u00EE\u0097\u00CF/\u00DF\u008F\u00ED\u00BC\u00D6&\u0093I\u00E0z[\t\u0096\u00A0y\u0090\u00FF\n\u00E4\u00EA,\u008C\u008C\u00B2\u00CC\u00AE\u00BE!$\u00DE\u008A\u00A2\u00B1k\u009E<\u0087\u00D4!{\u0090\br\u00E3b\u00B83x.\u0085\u00DC\u00A1\u00DF\u00834\u00E1\u00E1\u00C8\u00E5\u009CLuu\x17d.\x17\u00A3e\u00A8\u00EE\u00D4Y\u0090\u00C8\u00C5\u00A6<:\x13\u0090\u00AB3\u00C4\x16\x01\u00DC\x0E\u00AE\u00EB\u0090\u00BE\u0096!\u00E7\u00AA\u00BB\x0By\u0082\u00DC\u00B2\u00D2\u00B9N\u00CE\u00CAp\u00CD\u009F\u0082\x16\u00B5-\"\u00EF\x1A\x15\u0097\u00A7\u0087y\x14\u00CE}\u00D5\x14\u00F3G\u00B5e:\u00AA\u00ED\u00CE\x1D%\u0097\u00A0*\u0092<\x1F7\u00CA\u00C6!aU\u00FB\u0094J\u00E1\u00BE~9\tYH\u00B8\x1E\x14\u00FC\u00CCU t!'/\u00AD\u00AB[\u0085\x03\u00EF\u00D1S\u00FB\u00BA\u00DD\u00C4\u00FD\u00A9\u008B\u00DF8k\u00903H\x1B2\u0080|\u00E4R\u00A0m\u00C2\u00AD\u0097\x19\x1Cm_\u00BC.l\u00EF\x06\u0088\x07\x00hXc\x04\u00B4\u00A9\u00DB7\u00FC\x1E.2'\u00CBZ\u00BB\u00A4\u00EF\x0EHx\u008E\u00FB\u00F3#E\u00FD\u0085\x1Fz\x07\x7F\u00F0\u00E6|\u00CF\u0093\u00FE\x14\u00E4OA\u00FE\x14\u00E4?\u00C4<H\x0F\u00B2zu\u008Bh\"MB\"\u0094\u00BCN]\u00F7\u00A4\u00F0z\u00D8-\u00CEE=\u0093jND\u0092\u008E\u00A47.\u00D0\u00B5\u00ED\u0091z\u00B9\n\u00BE\u00F8\u00A2\x04:\u00B15/m\u00B4D\u00C4\u0096z\u00D2\u00F0\u0089\u00A9&\u00EEk\u0082\x16\u00FB0F\u00E3$\u00A2\u009A\u00D2\u00E3u,\u00F6\u00ACH\u00D7\u00B6G\u008A\u009A\u00B4\u00F5\x16\u00A4#\u0082+\u00D08\u009FKd\u00E7\u00F7pcRz\"\x13\u0088;\u00F4\rC\u00B6S\x00r\u0098\u00EB\u00DB\u00BA\u00B6=3N\u00F0u\u00BE\u009Ca\u00E2\u00F4\\\u009A\x7F\u00EE\u00AF\u008B9\u00BDq\x03C\u00F91zk]\u00A1&\u00B0\u00DE\x0F\u00BAvk)\u00DC\u0087\u008C\x00tc=W\u00F4\x0F\u00C6T\u0085\u00C3\u00FC\u00AB)\u009FRQ\u00CD|\u00E3\u008E<\u0090\u0094\u00E9\u0096\u00BC4C\u00BD\u00A1\b0\u00CC\u0099\u00BC]\u00D3x<-HN\x14\u00C9k&\u00E1\x03M\u00D0\u0095W\x7F\u00D3\u00CD7\u00E3\u00C5@Eb^\u00D8\x14OGv\x7F\x04i\u00C7*\u0096\u00D1\u0091*6\u00CB\u0085<\b\u00BE\u00B3\u00B9E\u00BAYA\u00B8Y\x18\u00EF\u00D2m)2\u00B1\u00AA\u00BB[\u00E4I\u00BFw{\u0090\u00AE\u00B5O\x01\x06\x00\u00B9\u00F4^E\u0089\x1C\u00FE\u00F7\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binZrow1="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00FBIDATx\u00DA\u00EC\u0099QN\u00C2@\x10\u0086\x17\u00E3\u00BBiO`\u00DA\x0B\u0090@<\x01\x1C\u00A1<\u00E3\x0B=\x02\x1C\x01n \u00BC\u00A0\u00AF\u00F6\b\u00FA\u00E0\u00AB\x06\u008E@\u008F`\u00BDA\u00FD'\u00CE\u009Aum-M\u00A6\u00BA\u0086\u00DDd2\u00A1i\u00A7_f;\u00BB\u00FF\x0E\u00BD\u00B2,\u0095\u00EB\u00E3L\u00FD\u0083\u00E1!O\n\u00F2\\\"\u00C8!\u00CF\u0097ps\u00EBr\x11GQ\u00E8\f$\u00C6\n\u0096\x19\u00BF\u00D7\u00B0\\*\u0093=\u00E9%\bYM\u00E0\u00EEa!2Y\u00B8\u00FAM\u00D2\u00D4/\u00A4\x00\u00C5!\u00F9\u00DBT\x00\\9W8\f\x18q\u00F1\u008C]^\u0082\u00A8X2d\u00F1Q\x1AR\u00A4p\u008Cb\u00A1,\x16\u00C6\x12\u0094\u00BB4\u00DD\t\u00FB\x07;\tN.A~\u00EF\u00F6\u0090\x1E\u00D2CzH\u00C7!\u00B1\u00FD\x05Z\u00E9T\u00EE\f\u00EB\u0097>\u00EC\r6mRK\x14\u00AB\u00ABLF\x15\u00C7\u0084O@\u00B8'\u00D8\x05l\u00DB\x00:\u00E7X\u00BF7\u00DD\x16\u00A0\x1EM\u00A0\u00B2\x02\x03S3c)\u00A6\x7F\u00EB\r\x7F\u00CC\u00D2\u00EC\u00D2\x02\u00D4\u00A3o<3\u00B2\x04\u00C8\x0E\u00D7\u00C8\u00A7\u0088\u00B1\x11\x13\x18\b:\u00A0\u00E0\b\u00DA\u00AB\u00C8&emk\\\u00BA+\u00D3\u00ABiM\x1Cz\u00E9\x10q\u00F6]Lw\u00ED\u00B9\x05@\u00B7p\u00D7M\u0080\u00C7\u00C4\u00FA\x1E\x1C\u0099\u00944u\u00F3\u00DC\u0097\u008E\u00E9\u00F5\u00A4\u0087\u00F4\u0090\x1E\u00D2Cz\u00C8\u009F\u00F7y\u00D8N\u008B\x0BC\u00948\u0095\u00C9\x01\u009Bj\u00A3\x1D%T\x10\u00DD\u00BC\u00E7\u0097\u0093\u009FPS\u00CA\u00EA\u0099/\u00D4Gk\u00FA`<\u009A\u00B2\u00D4#YG\u0092\u008D\u00BAo\u0093.3I\"0d\x15\u00B36\u00FA\u00921\x03.\u00B9\u009BF`\u00CA\u0092u\x1B\u00BE/a}\u00D9\x19d\u00C6\u00ADfz\u00E1\u0088\u0081\u00E2c\u00A4\x17\u00EE\u00CD\u008Cv`\u00A7\u00C7\u0087\u00C0\u00F24f<\u00BD#W\u00AA\u00DB\u00CCX\u00C1j\u009D\u00A6{\u00A8\u00BE\u00FEM\u00F2\u00A7\u0090\t\x1FG\x13.\u0084\u00C0:M:\x01I \u00AF\f\u00B7\u00E0\u0083\u0098\u00AE\u00E6\u0080\u00B3\u00AB+Y\u00AF\byM\x01v\u00B6\x045\u009E\u00EENr[l\u00DB\u00D8\u008F\u00A5\u00FEQh3\u00DE\x05\x18\x00\u00F7\u00D8GuVQ9%\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binZrow2="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\x1CIDATx\u00DA\u00EC\u0099Kn\u00C20\x10\u0086\x03\u00E2\x00\u00E4\x06\u00959@+\u0081\u00BAfA\u008F\x00\u00DB\u00EE\u00C8\x11\u00E0\bp\x04\u00B3\u00EA\x1A\u008E@\x16\u00AC\u00ABT\u00A2\x07h\u00D4\x13\u00F4q\u0082\u00F4\x1Fu,Ymll\x14\u0090i=\u00D2h\u00A4\u0080\u00FF|\u008C_c\u00D3\u00AA\u00AA*\t\u00DD\u00DA\u00C9\x05X\u0084\u008C\u0090>\u00F6R\u0096#xEQ{\u00B6\u0085\x17\u00C1@\u00F6\u0084\u00C8\x116\u00F0\u0085\u0082F \u00CF\u009A\u0082l5\u00B1\x04\x01LP\u0080O\x186\x07|\x16\u00D4\u0098\x04P\u0089\u00B0\u0084\u00AF\u00E1)|\x1E\u00EA\u00C4Yq\u00A4,\u00BE\u0087\nI\u00DDLpc\u00EE\u00FE\u00B0 \x01\u00D5'8\x1E\u00934\u0091d\u0088\u0099\u0094\u00DC\u00CD9\u008FMZ\u0096\u00C6!\u00AD\u0093S\u0084\u00BE\u009A,\f\u009A\u00AB%)\u0098%(n\u008B\x112BF\u00C8\byA\u0090\u00D8]\x16\u00F0\u00D4\u00B83\u00C8\u00C7\x07\u00F8\x1E\u00DE\u00B5h\u00A4\u00A4s\u00CAL\u00CE\u00E0\u00C2\x04\u0088p\x0F\u00BF\u0086\u00EF,\u00A0\u0082u\u00CE\u00DB\u00DD\x1A\u00A0\u00B2C\u00A0^\u00D6q9h!l\u00B5G\x05\u009EQ\u00CCPL\u00A8B\u00F7\u00A6\u00A6\u00E9\x15\u009C ?\u00B4BDj\u00BA\u00AAh\u00B8\u00E3\u00A2\u00A4\u0099\x02\u0083\u0085\x07\x10}\u00FA\u0091I\u0082\u00D9q\x06\u00C9>\u00E1\u00C3*\u00BB\u00DD\x1Bj\u00CF\x02\x1A\u00ADSv\u00F7\u00AF\u00A3\x01`([C\u00F8\u00B3\r\u00D0\u00D4\u00FE\u00AC\u00A5\x1Ag\u00B4\x0B\u00C0\u00D7&\u0097\u00A0XOF\u00C8\b\x19!#\u00E4\x1F\u0080\u00ECX\u00F6i\u00DAc\u00D7\\ZQ\x010q\u00B9-C\u00BB7\u00FEnn\u00D3\u00F1\u00D1\u00B7eRr\u00E3A\u00F2}\u00E7(\x1D\x00\u00A7\u00FC]\u00E1\u00A0\u00E3\u00AC\u00DF6\u00BC\u008C^B\u00BFt\u00C9\x15\x0F\u0095d#\u0087\nI\u00BA\u00E8\u00F8\u00EA\u00B7-\u00D5\u00B3\u00BA\u00C1U\u0096\u00F2\u008B\u00D7zTF\u00A5WM\u00F9e\u00D21\u00EA{C\x1A\u008C\u00CE(R\u008B6\x13G\u00E8;O\u009C\u00D2\u00D2\u0086.\u00EC\u00E9\x12\u00BF\u00C7\u00D1v\u0081_\x1E\u00A1\u00EF\u009C\u00C9R\u009D\u00ECj\u008A\u00D5\u0082\u00C1\u008A\u00E4\u00F0\u00DF &\x1D\u009B\u00BE\x1B$\u008F\x15\x1A\u00D03^*h\u00D6n\u00F8\u00E39\u009Fm\u00E6\u00DA\x19'\u00F1\u00D19\u00A0\u00EF\u00B5\x04Q\u0096\u00C6\u009C1\u00FA\u0095\u00EA&w\u00A5G\u0087\u00EE\u00AC\u00D5\u00B1<\u008F\u0095\u00F9\u00FF\u0086\u00FC\x12`\x00'\u00FA\x16\x14\x16\x15A\u0083\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binZrow3="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00F5IDATx\u00DA\u00EC\u0099\u00C1M\u00C30\x14\u0086\u009B\u00AA\x03\x10FH\x07\x00\t\u00C4\u00B9\u00872\x02\u00BDr##\u00A4#\u00C0\b\u00E9\u0089s\x19\u0081\x1EzF\u00AD\x04\x034#\x106\b\u00FF\u0093~#+\u00C4q\x1A\f2\u008A\u009F\u00F4d\u00F9\u00C5}\u00FA\u00F4l\u00D7\u00BF\u0093\u00A8\u00AA\u00AA\u0091\u00EF6\x1E\u00FD\x03\x0B\u0090\u0083\u0082\u009C\u00B8Jt(\u008A\x1C\u00CD\x1D\u00BB\x1Bx:M\u0092\u00C2\u009BJ\x020Cs\x03\u00BF\u00A6\u008B\u00E5\u00BEUR*\u00B8B\u00E56\u0084\u008E\u00D1\u00AC}\u0083L\u00E0_S\x0B\u00D8'4Q\u00D8\u00DD\x0E\u00D6h\x02\u00BF\u00F7\rR\u00A6:\u00D6\u00FAsm\u00A7{\u00B3&e\rf\u00A8\u00DE\u009E\u00FD\u008C\x7FC\u00FET\x12\x1BeI\u00D0g\u00BAT6u\x05\x19\x05\x15\x14 \x03d\u0080\f\u0090\x03\u0083\x14\u00D1@\u00AD\u00D8|2\u00E4/\u008F\u00F0W\u00F8I\u00DF\x1C.*\u0099Q;6\x02\u00A2\u00B9\u0085\u009F\u00C1\u00B7-\u00A0\u00C6\x1C\u00BF:\u00DD\x1A\u00A02\x1B\u00A8[\x15\u0084\u00A9\u0099S4(\u00DB!6\u00E2EkE\u0090\u00F3\u009F\u00E4p*0\u0090X\x06_\"\u00F1\u00BEVI\x01\u00DD\u00B2\u0082bo\u00F0Y\u0095^}t\u00CD\u00E1z\u00BA\u00CBz\u008003\u00C2\x19\x01\u00DBr\u00FC\u0099TSk\u00D0\x02\x18\u00F4d\u0080\f\u0090\x012@\x0E\x11rb9\u00ABER\x1Dp\u00CEF5\u00B1\u00A0\u00DE=\u00A6|\u00CDg\u008C[DG\u00A7\u00F1\u00E3\u0096$1\u00B5_\u00DD$\u00F1\x03\\\u00D4K\u00DE!n\u00B2\u00CE\u00E3\x1B\u008FEUA\u00D5W\u0095\u00D4\u00E2\u00A7|\u00F4.\u008A\u0086\u0082\u00E1[\u00DC\u00A4tLyL\u00E3\x1B+)/\u00E4\tV\x7F\u00E9\u0094\u00F0y)\u00CE\u00D8EK\\\u0080\u00D6zk\u00C9\u00E3d\u00E3$G\u00C6\u00C5b~\u0099P\u00ADm\u00FC\u00F1\u00CA\u00BCfE\u00C7\u0098\x1EO9\u00B5S\u00B6\u00E9\u0091y\u00FACj7\u00BE\u00A2a\u00C3\u00E9\u00F1\x1D\u00C1v\u00DA\u00F2\u00B1\u00E6\u00E9\r)k\x15IK~\u00B7\u0091\u00E4\u00A5\u00FA\u00A0d\u008A\u00C3\u0096r\u008F\u0091;\u008D\u00BA\u00CF\u00B4\u00E5\u00E9\x03\u00D9\u00F4\u00C3\u0085\u00F6\u00FF\u00B6\u00B0\u00C55\u00B0U\u00C7<A\u0099\x0F\x1B\u00F2S\u0080\x01\x00Y\u00DD\f(\u00AD\u0099\u00D8\u0091\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binAddKey="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x00\x1A\b\x06\x00\x00\x00*\u008Eu\u00F5\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00D7IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3`\x07L\fC\x00\u008C:r\u00D4\u0091\u00A3\u008E\x1Cu\u00E4\u00A8#\u00A9\u00E4H\u00C6\u0099\u00A7&\x00\u00B1\x01>5w\u00EF\u00DD\u00EB\x00bA<\u00F2\u0082 54q$\u00D0q\x0B\u0080T>\x10\x1F \u00E0\u00D0r V\u00C2#\u00AF\x04UC]GB\x1D\x18\x0F\u00E5\u00F2\x13\u00E1P\u00AA\x03F|\r\f\u00A0c\x12\u0080\u00D4|,R\x07\u00FF\u00A7\u009B9@\u00A3\u00D0\x05H\u00ED\u00C6\u00A2&]YIi\x16TM\x1A\u0090\u009A\u0089E\u008D+P\u00CD\x1E\u008A\x1C\u0089%$A\u00E0\"\x10;\x00\x1D\u00F9\x01K\u009A\x03\x19f\x02\u00B4\u00F8,\u008E4i\f\u00A4\u00CE\x00\u00E5\x19\u00A9\x1A\u00DD@\u00C7\u0080Bs!!\x07\"\u0081\u00F7d\u00CA\u0091\x1F\u0092H!\u00DA\x00\u00A4&\x10p \u00FD\u00D3\u00E4ha>\u00EA\u00C8QG\u008E:r\u00D4\u0091C\u00C3\u0091\x00\x01\x06\x00\u00B8<T\x16\x04\u00DA5#\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum01 = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00LIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\u00A8\u00A1\u00C4\u0081\u00C7\u00B7N\u00BC\x03b\x17\u00AA\x19\n4,\rH\t\x02\u00B1\x121\u00EAY\u00880\u00F0?\u00D5\u00BD/\u00ABf\u00C1\b\u00C2\u00A3Ijh\x19z\u008F\x18E\u008C\u00A3\u00A5\u00D4\u00A8\u00A1\u00D4\x05\x00\x01\x06\x00\u0088\u00F2\x14\u00D9='\u00EA\u00AF\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum02 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00A9IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\u0084\x02\u00A9\u0099@,\b\u00C4\u00F7\u00808LV\u00CD\u00E2,\u00D9.\x05\x1A\b2h\x15\x10\u00CF\x02b\x13 >\x0B\u00E5S\u00E4}\u0090+\x19\u0080.\u00AB\u0080\u00BAn\x0F\x10+Q\u00EA\u00FD\u00D5P/\u00C3\x00\u00C8\u00C0\u00F7\x04\x03\x15\u0094\u00F8\u0089\u00C1\u008Fn\x1EO\x03\u00E2\u00FF@\x1CJH-\u00B1\x06\u00CE\u0084\x1A\u0098F\u008Czbb\x1F\x141\u00C6\u00A0\u0088\"\x14\u00EB0\u00C0\u0088/\u00EF\x03\r\x04\x19v\x06\u0094\u008C\u0090\u00C3\u0096\u00A2$\x05M\u009B\f\u00D0dt\x06\u0086\u0081\u0096)\u0091\u00ED\u00D2\u00D1\x02e\u00D4P\u00D2\x01@\u0080\x01\x00q\x15\u00A9\u00AA\u0081v\u00BD\u0083\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum03 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00A5IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\u0084\x02\u00A9\u0099@,\b\u00C4g\u0081\u00D8UV\u00CD\u00E2=\u00D9.\x05\x1A\b2h\x15\x10W\x00q:\x10\x1BC-\u00A0\u00C8\u00FB C\u00DE\x03]6\x0B\u0084\u00A1bJ\x14y\x1Fh\u00D0\x1E %\x04uq(Tx\x0F\u00B5\"\u00AA\x1C\u00C9\u00DB\u00AB\u00A9b(\u00D0\u00C5\u00A00\x15\x02bP\x10\u00EC\u00A6\u00C8P\u00A0\u00B7]\u0080\u00F8\x1D\u00D4\u00E0\u00F7\u00D0\u00D8\x17\u00A44I\u0081\r\x01\x1A\\\x0E\rK\x17\u00A8\x18\u00F9.\u0085\u00BA.\f\x1A\u00A6g\u00A01\x1FF\u00C8P\u00C6\u00D1Rj\u00D4P\u00EA\x02\u0080\x00\x03\x00\u00AA{/-\x1E\u00F6\u0098\x0F\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum04 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u0082IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085X\u0085\u008Fo\u009DP\x02Rw\u0081\u00D8UV\u00CDb\x0F\u00B5\\:\x13J+Q\u00C5\u00FB@W\u00BA\x10c\x18\u00A9.\x05\u00B9\u00B2\u0082j\u0086\x02]Y\x0E\u00A4\u00EE\x01\u00C3q5U\"\nh\u00A0 \u0090\u00EA\x00\u00E20 \u00DB\u0098Za\n3h\x15\x10\u009F\u0081\u00B2\u00CB\t:\x15\u0094\u00F7\u0089\u00C5\u008Fn\x1E\u00FF\x0F\u00C4i\u0084\u00D4\u0091\u0093\u00F8\u00EF\x11R\u00C08ZJ\u008D\x1AJ]\x00\x10`\x00\u00BA\u00F1]X\u00B5/\x03\x03\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum05 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00A0IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\u00AC\x02R\u00A1HB\u00ABe\u00D5,\u00C2(2\x14\b\u0094\u0080\u00B8\x13d\x18\u0094\x7F\u008Fb\u0097B\r\u00DD\x03t\u00DDYb\u00BD\u00CFH(\u009D\x02\u00BD\u00FF\x1F\u00EA:\u0090\u00E1 \u0083\u00D3\tY\u00C0D\u00C0@A \u00F5\x1E\u00EA}\x13({&A\u00A7\u0082\\J,~t\u00F3x(\x10\u00FF'\u00A4\u008E\u0090K\u008D\u00A1\u00B1O\u00D5$\x05\u00F2n(\u00D0\u00E0rPd\x01q\x1A\u0094&?\u00F1\x03#\x04\x14A\u00E9@\f2\u00F4\fT8\u009D\u00E2\u00D8\x1F-PF\r%\r\x00\x04\x18\x00\u008DOm\u00D7\u00A9\x07\u00917\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum06 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u009EIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\b\x02\u00A9U@\u00EC\x02\u00C4\u00EF\u00818LV\u00CDb\x0F\u00A5.]\x05\u00A5M\u0080x5\x12\u009F<C\u00A1\u00AE\x04\u00B9\u00B0\x13\u00E8\u00BA\u00B3@\u00BA\x02\u008A)\nSc(]\x0E\u00B4\x00\u0094\u00A0\u00CF\x00\u00F1YJ\rU\u0082\u00D2{\u00A0\u00DE\u00BF\x07\u00C43)\u008E(\x10\x00z\u00BD\x13\x1A\x1C\u00B3(\x0ES\u0098W\u00A1aK4`$\u0094\u00F7\u0081\x06\u00DE\u0085z\x1F\u00E4\u00CA\x0EP\u00B2\x02\u00BA<\u008C\u00D2$\x15\x06M\x01g\u00A0\u00FCt\u008A]:Z\u00A0\u008C\x1AJ\x1A\x00\b0\x00K\u00E70>P\u0088\u009F\u0082\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum07 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00}IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\x05\u009F\u00E4\u00E3['\\\u0080\u00D4ntqY5\x0BF\u00B2\r\x05j\u00DE\x034\u00D8\x04I\u00A8\u009C\x18\u00972\x12\u009B\u00A4\u0080\u0086\x1BC]\u00AD\f\u00B4\u00EC=\u00B5\u00C2\u00B4\x03\u0088;\t\x19H\u00D0\u00FBh\u00AE\x04\u0085o\x185c?\r\u0088\u00F7\x10\u00E3JR\f\r\x05\x19J\u00B5t\n\u00F5\u00BA \x10\u009F\u00A5f\u00E2W\u0082\u00D2D\x1B\u00CA8ZJ\u008D\x1AJ]\x00\x10`\x00aU${K\u0080)S\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum08 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u009FIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\u00B8\x00\u00A9U@,\b\u00C4\u009D\u00B2j\x16\x15\u00D4p\u00E9L ^\r\u00C4a@\\\x0E\u00B4D\u0089\x1A\u0086\u0082\f9\x0Bt\u00E1j$>\u00C5\u0086\u009E\x05bc\u00A0\x0B\u00CB\u0091\u00F8\u0094\u0085)\x10\u00CC\u0082\x06\x01\b\u00DC\u0083\u00B9\u009Cl\u0097\x02]'\b50\f\u00E8}F \u00BD\x07\x1Ai\x14y?\x14D \u0085\u00E7Yj\u0084\u00E9j\u00A8\u008B;\u0080\u00D8\x18j\u00C9Y\u008A\f\x05\u00BA\u00F0=4)\u00A5\x01\u00F1\x19hZM'd(\u00E3h)5j(u\x01@\u0080\x01\x00\u0098\x14,\u00AC4/P\u00BB\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binNum09 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u009FIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\u00C0\b7\u0094\u0085\u0090\u0082\u00C7\u00B7N\x18\x03\u00A9U@\u00AC\x04\u00C4{\u00808LV\u00CD\u00E2=\u00A5.\u00DD\r\u00C4\u00AB\u0081\u00D8\x04j\u00F0L\u008A\u00BC\x0Ft\u00A5\x0B\u0090\x12\x04\u00E2N\u00A0\u00EB\u00CE\x02\u00E9Y@\u00ECB\u00950E\u00F3\u00AE \u00A5az\x16\u00EA\u00E2\x0Eh\x10\u0084R\x1C\u00FBP\x17\u0086\x01q\x1A\x10\u009F\u00A1J\u00EC\x03]\b\u00F2\u00AA \u00D0p!(\u00BF\u009C\x1AI\nd\u00E8L\u00A0a \u00F6=\u00A8\u008Bg\x112\u0094\u0091P\u0081\x02u]\x07\u0094\x0BJ\x05\x15\x14\x1B:Z\u00A0\u008C\x1AJ\x1A\x00\b0\x00\u00E9{0\u0089\u00C7\u00E1\u00A9,\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binLogo="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F4\x00\x00\x00\u0096\b\x02\x00\x00\x00\u00A7\u00FF\u00ED8\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1C\u00A4IDATx\u00DA\u00EC\u009D\x0Fp\x13\u00D7\u009D\u00C7\r\u00C5\x7F$\u0097\x00&\u00B1\t\u00C8%v\u0082h\x07\u0082}\u00934\u00D8i\u00C8\x1DrH:`\u00E0\u00E6\x06\u00DBmR0s\u00A5\u00D8L\u00DB\x04+\u009D\u00E9\u0081Mn\u00E6\u00CA\u009Fv\u00E6jH&36\u00BD\u00B4\x13\u0099\u00F4\u00AE\u00B63sc\x07h\u0088\u00CF\u00F6$d\"\u00C3\u00C0\u009DE\u00E3\u0080e\f6\x16\u00C6\u00FF$\u00CB\u00D8H2\u00C8p\u00BF\u00DD\x07\u00CB\u00B2\u00FAkieI\u00F6\u00F7\u0083\u00C6H\u00AB\u00DD\u00F7\u00DE\u00BE]}\u00DF\u00EF\u00FD\u00F6\u00F7\u00DE\u009Be\u00B1\f\u00C7\x00\x00\x00\u0098^\u00CCF\x15\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088\u00FB\u00CC\u00C6j\u00B5\u00B6_\u00BA\u0084z\x00\x00\u00F8\u00CF\x1CTA\u0084C\u00B2^WW7>>\u00FE\u00F2\u00DFs\u00A0B\x00\x00\u00FE0\u00CBb\x19F-D,\u009F\x7F\u00FE\u00F9\x17\u009F\x7F.|\\\u00BAti~AABB\x02j\x06\x00\x00q\u008FJ\x1C\x0EGMuuww\u00B7d\u00FB\u00BCy\u00F3H\u00DF\x17-Z\u0084*\x02\x00@\u00DC\u00A3\u008C\u00BE\u00BE>R\u00F6\u0091\u0091\x11O;l\u00DA\u00BC9##\x03\x15\x05\x00\u0080\u00B8G\r\x06\u0083\u00A1\u00BE\u00AE\u00CE\u00E7n$\u00EE$\u00F1\u00A8.\x00\x00\u00C4=\u00D2q8\x1C\u009F\u009D:E\u00E2\u00EE\u00E7\u00FE)))\u00F9\x05\x05\u00F3\u00E7\u00CFG\u00D5\x01\x00 \u00EE\x11\u008A\u00D5j\u00AD\u00A9\u00AE\u00EE\u00EF\u00EF\u009F\u00D4Q\u00F1\u00F1\u00F1\x05\x05\x05K\u009Fz\n\x15\b\x00\u0080\u00B8G\x1C\u00DD]]\u00D5\u00D5\u00D5\u00E3\u00E3\u00E3\u0081\x1D\u008E(I\x00\x00\u00C4=\u00E2\u0090\u00C4;\x06\u00C6\u00F2\u00E5\u00CB7m\u00DE\u008C(I\x00\x00\u00C4=\u00FC8\x1C\u008E\u00FA\u00BA\u00BA\u00F6\u00F6vYRC\u0094$\x00\x00\u00E2\x1E~|\u00C6;\x06@||\u00FCk?\u00FC!\u00A2$\x01\x00\x10\u00F7\u00F0`0\x18N}\u00FAi\u00C0Nv\u00EF J\x12\x00\x00q\x0F\x03\u00F5uu\u00FE\u00C7;\x06\x06\u00A2$\x01\u0080\u00B8C\u00DC\u00A7\u008E\u00C0\u00E2\x1D\x03\x03Q\u0092\x00@\u00DC\u00C1T\x10d\u00BCc`\u00BC\u00FA\u00DAk\u00ABW\u00AFF\u00E5\x03\x00q\x07!A\u0096x\u00C7\u00C0@\u0094$\x00\x10w ?\u00F2\u00C6;\x06FJJ\n\u00E9;\u00A2$\x01\u0080\u00B8\x03y\u00E8\u00EB\u00EB#e\u009F\x1A'\u00BBw\x10%\t\x00\u00C4\x1D\u00C8CH\u00E3\x1D\x03\u00E3\u0085\u00D5\u00AB_{\u00ED5\\\x1A\x00 \u00EE @N\u009D:u\u00F6\u00CC\u0099\b,XJJ\u00CA\u00B6\u00C2B\u00B8\u00E0\x01\u0080\u00B8\u0083\u00C9\u00E1p8\u00AAt:\x19]1\n\x05Iq\u00FC\u00F0\u00B0lcY\x11%\t\x00\u00C4\x1DL\u008EP\u00C4;\x16\x17oMO\u00FF\u00CE\u0097_\u009E\u00AD\u00AFo\u00901YDI\x020\u008D\u0099\u008D*\u0090\u00913g\u00CETUU\u0085\u00C8\u00C9\u00FE\u00D2K/\u0090\u00CA\u0093\x15/W\u0082\u009F\u009D:US]M\u00FD\f\\8\x00 \u00EE\u00C0=l=k\u0092\u00CB\u0090\u00E6B\u00F6\u00FB\u009E=\u00BFX\u00BC8E\u00AE\x04\u00DB\u00DB\u00DB\u00ABt\u00BA\u00BE\u00BE>\\A\x00 \u00EE@\n\u0089#Id\u00A8#\u00D9?\u00F9\u00A4\u00E1\u00C6\u008D\u00FE\u0084\u0084\u00F8\u00DD\u00BBw\u00ACY\u00F3\u0082\\\u00C9\u00F6\u00F7\u00F7s\u0085\u00BFt\t\u00D7\x11\x00\u0088;\x10\x19\u00BF\u0097.\u00C9\u00FB\u00F8\u00D4\x13\u00BD\u00BD\u00FD\u0095\u0095\x1F\u00B5\u00B5\x19\u00E9\u00FD\u00C6\u008D\u00EB\n\n6\u00CA\u00E5\u00A2\x19\x1F\x1F\u00AF\u00A9\u00A99\x15\u00E2n\x07\x00\x00\u00E2\x1E5\u0090 \u0092,NY$\u00BB\u00DD\u00EE\u00D0\u00E9j\u00C9\u0084\u00A7\u00F7\u00CF=\u00B7\u00AA\u00B8\u00F8'2\u00BAh\u00CE\u009E9C\u00AD\x14\\\u00F0\x00@\u00DCg4,\u00DE1,\u0091\u00EC\u00A7O\u009F=z\u00F4#\u0087c\u00FC\u00C9'S\u008A\u008B\u00B7\u00AEX\u00B1\\\u00AE\u0094\u00BB\u00BB\u00BB\u00DF{\u00F7]\u00B8\u00E0\x01\u0080\u00B8\u00CFPH\u00FEH\x04I\n\u00C3U\u0080\u00CE\u00CE\u00EEC\u0087\u00DEg.\u00F8\u00C2\u00C2-\u009B6\u00AD\u0093+e\u00EA\u0085\u00FC\u00C7\x1F\u00FEp&\"\u0087_\x01\x00 \u00EE!\u0084\u0084\u008F\u00E4/\u00EC\u0093\n\u00D8\u00ED\u008E\u00C3\u0087?\u00F8\u00F2\u00CB\u00B31\u00A1\u0089\u0092\u00AC\u00AF\u00AB\u0083\u008B\x06\u0080\u00E8\x05\u0083\u0098&\x01\u0089\x1D\u00A9\u009E\u00BC\u008B(\u00AD[\u00F7\u00F2\u00BAukdI\u008A\fy\u0092{\x19\u00CB\u0086\u00B9$\x01\u0080\u00E5>#\u00D0}\u00F8\u00E1\u00D9\u00B3g#\u00B6xv\u00BB\u00CC\u009D\u0089\u00CB\x1D\x1D\u00FF\u00BA\u00AF\x14\u00D7\x1D\u0080hd\x0E\u00AA\u00C0O\u00CCf\u00B3\u00C1\u00D0Jo\x16,H\u008A\u008B\u008B\u009B=[\u009Ev\u00B1\u00A1\u00E1\x0B\u0085\"\u00FE\u00A5\u0097^`\u00A6we\u00E5Gv\u00BB\u00D4\x19\u00C2\u00A6\x1F8z\u00F4\u00A3\u00CE\u00CE\u00A9\u00F3\u00F2\u009B\u0087\x06\u00AF^\u00E9\u00A47\u008D\u00FF\u00D3\u0090\u00F3\u00CA\u00BA(\u00BAR\x15\u00E7\u00BE\u0090l\u00D9\u00BC<c\u00F1\u00DCy\u009E\u00F6\u00AFo\u00BFp}\u00D4*\u00D9\u00F8\u00F4\u0082'^}\u00FA{\u00C2Gg\u00DF\u00CD\u00D1O\x03\x1C\n\u00B0`\u00FB\u00C3A\tw/\u00FF5f\u00EC\u0086\u00D4\u00C2\u00FA\u00EE?\u00C5$x[\u00ED\u00F6\u00DE\u00D0\u00C5{&\u00BD\u00B4\u00D3\u00AD\u00CA\u009E\u00F5\u00F8\u00F7\u00F0\u00C3\x04\x10\u00F7`9q\u00FC8{3<l\u00997o^ll\\ll\u00AC,)\u00D7\u00D77tv^+(\u00D8\u00F8\u00E4\u0093){\u00F6\u00FCB\u00A7\u00AB\u009DJ\x11web\u00C2\u00D9\x7F\u00E3Fo\u00EFu\u00F6\u00F1/\u00FF\u00F9\u00E7\u00E8\x12\u00F7+\u00C3C\u00D2>\u008D\u00F3\u00B6\u00A7\u009D\u00CF\u00F5v\u009F\u00BEvY\u00B2\u0091Z\u00825K\u009F\x11o\u00B9\u00EBp\u00DE\u00EE\u00B2\x04_\u00B6Y\u00DF^t\u00D7E\u00A6\u00EFv5q\u00FA\u00EEE\u00DC\u00BB\u009A\u00EF\u008D=\x1A\u00C24'a\u00F6\u00FC4\u00F6\u00B6E\u00AF\u00A7\x17{\u00BF[\u00AB\u009D\u00E1\u00BF\u00D3\u008FkkL=&\u00D4F\f\u00DC2\u00FE\u009B\u00ED--\x0F\x7F\u0093###\u00A3\u00A37\u00EF\u00DC\u00B9#W\u00FAmm\u00ED\u0095\u0095\u00C7X\u00F4KQ\u00D1Od\x1C\u0080:Yl\u00B6[=\u00DD]\u0082\u00B2\x13\x03\x03\x03d\u00BCO\u00CB\u00CB\u00DA;:R\u00DDv^\u00B21aNl\u00C1\u008A\u00E7\x15sbC\u0091\u00E3\u00ACE\x7F\u00E7j\u00A4\u00DF\x1B\u00BA\x14\u00E3\u00F4\u00F8\u00EC\u00FA\u009E\u00F5\u00AAT\u00D9y\u00B3\u009D\u00F4]\u00B89;:\u008C\u00EC\u0085\u009F*);j\x03\u00E2\x1E\u0088\u00D9.0>>>44\u00E8t\u00CA\u00A6\u00EFl\x00\u00EA\u00F9\u00F3\x17b\u00F8\x01\u00A8\u0085\u0085y2F\u00BF\u00F8\u00C9\u0088u\u00F8\u00CA\u00E5\u008E\u00A1!\u00A9\u00E5K\u00C6\u00FB\u00F4\u00BB\u00A6v\u00E7\u009D\x0F[\u00F5\u00AE\u00DB\x0BV<\u00E7\u00C5\u0087#\u00C3O\u00EE\u00A9\u00B5\u00D2MN\u00C7\u00BD\u00BE\u00FF\u00F3(\u00EE\u00AE_\u0091\u00D9N\u00E2\x0E\x00\u00C4]^\u00B3]\u00CC\u00E0\u00E0\u00E0\u00D8\u00D8\u00E8\u00DD\u00BBw\u00E5\u0091\x1B\u00BB\u00A3\u00BA\u00FA\x136\x00u\u00C5\n\u00B5\u00BC\x03P}\u009F\u00E6\u00D0@\u0087\u00B1\u00DDm\u00F8\u00E3\u00B44\u00DEI\u00D9\u0087\x1D6\u00C9\u00C6u\u00E9\u00DF[\u0099\u00BC8\u00A4\u00F9\u00BA5\u00DE]}5\u00F7qX\u00EF\u00F5\u00B5z1\u00DB\x01\u00F0\x04|\u00EE\u0081\u0098\u00EDbFGG\u00C9\u008A\u009F;wn\\\\\u00BC,\u00D9\u009D>}\u00B6\u00B3\u00B3\u00BB\u00B8x+\x1B\u0080Z_\u00FFY\u00A8Opb\u00C2\u00D9\u00DDu\u00D5b6{\u00D9'\u00EA<\u00EF\u00DE\u00A9o\u00BF\u00E0\u00EA\u009A\x7F~\u00F1R\u00F1CT\u009F(2\u0097\u00CC\u009E\u00AF\b\u00CCx\u00BF{\u00E9\u00BF\u00A5\">t\u00D1\u00F5\x01\u00E9]\u0098\u00ED\x00\u00E2>\u00F5f\u00BB\u00C0\u00ED\u00DB\u00B7i\u00B7\u00A4\u00A4\u0085\u00F1\u00F1\u00F2\u00E8{oo\u00FF\u00A1C\u00EF\x17\x16\u00E6\u00A5\u00A7\x7F'?\x7F\u00A3\u00C3\x11\u00C2\x01S\u00A37ov]\u00ED\u00F49&\u008B\x19\u00EF\u00D3C\u00DF==D\u00DD\u00B4|\u00D5\u00A4\u00D2I\u00C8\\\x12\u00F7TR\u0080\u00C6{W3\t\u00BAx\u00E3=\u0093\u00DEU\u00DC\u00DD\x06\u00C9\u00C0l\x07~\u00D9\x10\u00A8\u0082`\u00CCv1\x16\u008By|\u00DC!\u00A3\u008B\u00A6\u00B2\u00F2XC\u00C3iND\x12\u00E2Ctv\u00E6\u00A1\u00C1\u00F6K\u00DF\u00F89\u00DAvzx\u00DE{GG\u00EA\u00DA/HezN\u00EC\u00F6\u008C\u00EC\x10=D\u00F5d\u00BCKu\u00DC\u00DA%\u0095{2\u00DB%\x0FZa\u00B6\x03\u0088\u00FB\u0094\u0099\u00ED\u008F\u00EA\u00BB\u00C5\u00E1\u00B0\u00CB\x18E\u00D3\u00D0\u00F0\u0085N\u00F71Y\u00EE\u00F4\u00B2X\u00AC2\u009E\u00DA\u00C4\u0084\u00B3\u00D7\u00D4\u00C3\"\u00D9\u00FDd\x1Ax\u00DE\u00D9CT\u0087\u00CBc\u00F0\u00ED\u0099Y\x0B\x14\u00CA\u00A9,\u0089?\u009Ew\u0098\u00ED\x00\u00E2\x1E~\u00B3]`dd\u00E4\u00E6\u00CD\u0091\u0089\u0089\t\u00B9\u00CA\u00D0\u00D6\u00D6\u00FE\u00CE;\u00FFNV\u00BC\u008C\x0Bd\u00BB\u00C6;\u00FAI\u00B4\x1B\u00EFn\x1F\u00A2\x16\u00ACx\u00EE\u00E9\x05O\u0084\u00E1\u00B7\u00E7j\u00BC\u008B<\u00EC\u00F7\u00C6\u00FA\u00DC\u00C4\u00B6\u00C3l\x07~\x03\u009F\u00BBg+\u00CFncCR'\u00CB\u00ED\u00DB\u00B7\x07\x06\u00FA\u009Fx\u00E2\u00899\u00F2u\u00F3{{e[\fdll\u00B4\u00EBJg`\u0093\u0082E\u00B5\u00E7\u00DD\u00D3CTz\u0085\u00A5<n<\u00EF|L$\u00B7\u009D3\u00DB\u00BF\n\u00D8l\u00E7z\u009Cz=\u00DD\u00BD\u00D7M\u00F7\u0087\u00F3,Q\u00A922259\x1A\u0085\x1F\x1D\x14vl\u0087\u00D1h\u00B7\u00DB\u00D9\u0096e\u00CB\u00D4\u00CB\u00D4\u00EA\u00AC\u00EC\u00EC\u0085\x0B\x17\u00FA\u00CC\u00FA\u0082\u00A1\u00D5h4\u008A\x0FOJJR\u00AB\u0097\u00AF\u00CF\u00CDu=\u009C\x15\u0095\u00DE\u00D0W\u0094\u00BE`T\u00B5\u00E8\u00BF\u00A2~0\u00CBzK~\u009EJ\u0095*)!\u00BD\u0084Hv\u0085BAgG\u0087S!)\u009D\u008E\x0E\u00A8\x17\u00C4\u00DD+M\u008DM\u00C2\u00DD\x19\x00\u0083\u0083\u0083\u00F3\u00E7\u00CF\u008F\u008FO\u0090k\u00A2\x02Y0\x0F\r\\\u00BDr%\u0098\x14\u00A24l\u00C6\u00D3CT2\u00DB\u00C3\u00D9qv\t\u009B\u00B9/\u00EE\u009C\u00CA\u00B7\x06f\u00B6\u00932\u009E<!\u00EDq\u0092\u00CA\u00D3\u00AB\u00B9\u00A9qK^\u00BE\u00A0\u00A1\u00AE\u0090\"W\u00E9>d\u00AA\u00FA\u00C8v~L\x10%\u00BB~C\u00EE\u0086\u00DC\\\u00B7\u00C7\u009AL=\u00CD\u008DMn\u00DD\u0098\u0094 m\u00A7\u00D7\u00D6m\u0085\u0092\u00DC-f\u00B3PZ\u00FA\u008A,\u00AA\u00C3\u00E5\u00E5B\u009B\u00C4\u00B2\x167\t\u0094\u00CB\u00D1\u008A\nI\t\u00E9w\u00CA\u00D2_\u00AB\u00D1(\u0094\nh\x17\u00C4\u00DD\u0087\u00D9\u00DE\u00D4\u00D4\x18d\"V\u00AB5..\u00EE\u00B1\u00C7\u00E6\u00C95QA0LL8\u00AF\u009Bz\x06\u0082^\x0E0\x1A\u008D\u00F7\u00DE\u00D1\u0091\u00CF:/\u00BAn\x0F\u00D2f\x1F\u00FD\u00F4\u00E2\u00EC\x04oWv\u00EE\x0F\u00BF;g\u00D1c\u00932\u00DE\u00EFY\u00BB8\u0087\u00CC\u00D0\u00C5\u00C0\u00CC\u00F6\u0083\x07\u00F6\u008B\u0095\u00D1\u00E5\u00AE\u00B6\x1F\u00AB\u00D21\x19uk\u00B0\u00B3o\u00BD@BL\r@\u00D1\u00AEbI\x0F\u00C0m\u008B\u00E2\n\u00A5OJM\u00F6\u00B5\u00A7\x1F\u009DD\u00D9\u0099\u00D5/\u00E4\u00E5\u00B3\u0084\u00CDMM\u00D0.\u0088{h\u00CDv\u00B1\u008BfhhP\u00C6(\u00C9\u00C0\u00B0\u00D9nuv\x18\u00E5\u009A\u0083>\u00EA\u008C\u00F7z\u0097\u00F0\x18\x06)>\u00E9{\u00C0A2\u00CE\u00BEQ\u00EF;\u00DCu8\x031\u00DEM_q\u00913\x01\u0099\u00EDL\x19I\x10599\u00AB22II9\u00EFb\u00AB\u00E1\u00C4\u00F1O\x04k\u00F7\u00E3\u00DA\x1A\u00E6\u00BE\x10\x1Fh0\u00B4\u008Aus\u00D92\u00F5\u00DA\x1CMFF\u00A6\u00E09\x11\u00B4\u009BL\u00E9*\u009D\u00AE\u00A8x\u0097\u00F8pU\u00AAJx\u00BF*\u0083\u00C8\x14\u00B2\u00A0\u00C6\u00A0\u00B6\u00B6F\u0090l\u00EA\x19\u00FC\u00E6\u00C0A\u00B7\u0085\u00A7d\u00D9nKT*\u008D&\u0087\x0E';]PvzO%\x17vV(\x14\u00D4\x0Ba\u00B9p\x130\x18\u008D\u00E2s\x04\u00C4\u00B7~\u00FD\u00EB\x7FA-\u00B8Z\x10\x7F\u00FC\u00E3\x07N\u00A7S\u00BE\x04\u00EDqq\u00B1\u00B3g\u00CF\u009E5kV8\\1\u0083\x1D\u00ED\u0097d|\u00C6{\u00EB\u00D6\u00AD\u00E4\u00E4\u00E4\u00F4\u00F4\u00A7#\u00F3\u00F25\\\u00B9\u00E8\u00AF:\u00DF\u00BD;pk4sQ\u00AA\u00EF~\u008F\u00D5\u00EEh\u009D\u00F4\u00F3gE\u00E6\u0092o\u00F9\x1A\u00E54\u00EB\u00DBOJC\x1E\u00C7\u00FA$\x11\u0090\u00B3\u00BE\u00B3fV\u00D22/\u00BE\x14\u00F1<*k5\u009A\u009F\u00EE\u00D8\u00B1L\u00BD\\\u00A9\u00E4d\u0091z\u008D\u00AA\u00D4\u00D4\u00EC\x17\u00B3\u00DB\u00DA\u00DAFo\u00DE\u00E4\u00CE\u00DA\u00E9\u00B4\u00DB\u00EC\x19\u0099\u0099\u00E2\x1B\u00FEHy\u00B9p\u00C3S\n\u00FF\u00BCc\u00870\u008F?\u00A5\u00A3V\u00AB323\u00CE\u009F;\u00C7\u00F6\u00E9\u00EF\u00EF'I\u00A5d\u0085\x14hg*\x06I\u00FC\u00CF\x7F\u00F9\u00E6\u009A\u0097_\u00A6\u00AFX\u00EE1\u00BC3\u00FD\u00F9\u00EF?/\u00E4N\u00BF\x05J\u008A\u00BA\u00B3\u0082[F\u00F0\u00E4\u00B0U\u00E6\u00B3\u00B2\u00B2\x7F\u00F1\u00CB7)\x05:0--]\u00C8\u00E5O\x1F\u00FCQX\u0086\u009E\u00D4\x7FoY\x19}\u00CBr\u00A1\u00BF\u00B4\x1B\u00B5gJ\u00A5\u00E2\u009Bo\u00BE\x11J\u00E5\u00C9\u00834C@\u00B4L\b\u00CDv1\u00B2GI\u00FA\u00E9\u008A\u00E9\u00BBq}R\u00F1\u008E\u00FE\x1B\u00EF\u00D3\u00E3Z\u00B7\r\u00DE\u00E8\x1C\x1E\f\u00F3\u008F\u00D0u\u00B6\u0099\u0080\u00CCvb\u00EB\u00B6B\u00B2g]\u009F\u009A\u00D2\x16\u00B1\u00ADMzJ\u0082\u00EE\u00F6\u0086'\u00BB\u009BRpMY\u00A5J\u00DDZX(\u00F2\u00C3|\"\u00D9a\u00B7VKY\u00B8}\u00E2J\u00B9\u0093%\u00FE\u00B0\u0097\u00D0\u00EAq\u00B9\x1B\u00CA]\u009C\u008B\u00DB\x06\u008Cl\u00F6\x12\u00AD\u00D6\u00ED\u0093\u00E1\u00B5\u009A\x1C\u00EAs@\u00C1 \u00EE\x1E\u00CD\u00F6\u00E0\u00BD\u00EDn\u0091=J\u00D2\u00A7+\u00A6\u00A7\u00BB\u00CB\u00D4\u00D3\x13\u008A\u00C4\x07\x06\x06\u00BE\u00FE\u00DB\u0085\u00E9q\u00C5\u00AB\u00BF>\x1F\u00DE\x02\u00B8\u008Dy\x7F\u00F8\u00EDdb\u00DB\u00BD<,%\u00D9%\u00E9\x14>\n\u00F3\u00E2rZ\u00AF\x7F\x18\u0099\u00E3V\u00D9\x19\u009C\u00B3\u00E5\u0081t\u0092\u00B12\u00A9X2\u00B2\u00D6\x1F\x1A:\x1E&\u00BA \u00D5\u00DE\u00E6N\u00D9\u00F9\x12\u00EA\u00C5\n\u00AE\u0098\u00DAA\t\x10w\u0098\u00ED\u00BEaQ\u0092w\u00EE\u00DC\x0E\u00F5Y\u008C\u008D\u008D\u00BA\u009D\u00DFQF\u00FE\u00EB\u00CF\u00D1g\u00BC'\u00CC\u0089u}\u0088:\u00EC\u00B0\u00B9}\u00DC\u00EA\u008F\u00D7%\u00F1\x1F\u009E\u00F1\u00F2\u00FA\u0096\u00DF3\u00CFx4\u00DEe\u008Dm\x17\x07\x14\x1A\u008D\u00F7\ra\u0093\u00A9GpU/Q\u00A9\u00BC\x07;\u008A\x1B\u008F\x0E\u00A3\u00BFs\u00EA\u009A\u00CDfq[b\u00F6 \u00EE\u0094\u00B8'\u00D5\x167$\u009A\x1C\rd\u00CA\x1F\u00F0@u\u008A\u00CCv1\u00A4\u00B9!\u008D\u0092\f>\u00DE\u00D1\x1F\u00BE\u00FE\u00FAod\u00BC\u00AF|vU\x14]\u00DF\u00ED\u0099Y\u008B\u00E7\u00CE\u00EF\u00B4\fJ\u008625\\\u00B9\u00F8\u00FD\u00C5K';H5\u00E0\u00B9e\u00DC\x1B\u00EF.\u00B3\u00CD\u00C4\u00C8=$U\u00ADV\u009F<\u00F1\u00F0Vw5\u00E1\u00D9\x13T/\u0088\x03]\u00C4\x07\u00BA\u00AA\u00F9\x05C+\u00ED@\u00FF\u00BCD\u00EF\u00B8zo<\u00FD*\u00C5\x11\u00F70\u00DB!\u00EE\x11g\u00B6\u008B\u00B1Z\u00AD\u0089\u0089\u0089t\u009B\u00CA\x1B%)W\u00BC\u00A3\u00FF\u00C6\u00FB\u0081\u00DFF\u008D\u00B8\x0B#Q7-_\u00A53\u00B4H\u00BE\u00FDK\u00DB\u00B9]\u00CF\u00BF\x1C^\u00E7\u00CC=\u00D2w\u0089E\x1F\u00B2!\u00A9\u00824\u009B\u00BD\u00CE\x06\u00EA\u00EA\u00DB\u00F1n\x1B\u00B5\u00E89\u00FC\x17\u00F4I\x15\u0095k\x00\x10\u00C6\x0Eq\u008FX\u00B3]\u00E0\x16\u00CF\u00E3\u008F?!\u0097\u00BE\u00DBl\u00B7L\u00D7\u00BAo\u00F21\tSC\x14\x19\u00EF\u00E2\u0091\u00A8+\u0093\x17\u00A7/x\\2Z\u0095>\u009E\u00EB\u00ED\x0E\u00D7hU\u00CF?\u00D0)\u009DIF\u00AD\x0E\u00FCi\u00A4\u00C1\u00D0\u00FAqM\u008D8\x18Q\u00A1P\u00A8T\u00A9d\u00EC\u00ABRUJ\u0085\u00F2\u00C8\u00E1\u00F2\u00E0K(\x19\u00AA\n \u00EE\u0091e\u00B6\u008B\u00E1\u00A3\u00E0\u0093bc\u0083]q{\u00C4:\u00DCal\u009F\u00FAJ\u008B\n\u00E3\u00DDu$\u00EA\u008FV<\x7F\u00F0\u00CBO%\u00BB\u00D5\u00B5_X\u0091\u00BCx*\u00E7\u0086\f#\u00E2\u00C8t\x01\u00A3\u00D1\u00B8, }\u0097\f/\x12\u0087\u00C9\u00CB\u00DC\u00E10\u00F5\u00C4\x00\u00FF\u00C0\x03\u00D5\u00F0\u0098\u00EDb\u00C8\u00D8!\u00A3;\u00E0(\x1A\x16\u00EF\x18\x16e\x17\u008C\u00F7\b\u00BF\u00B8\u00AE\x13\u00B5/P(\u00D7\u00A5K'Ow8\u00EF4\x04\u00F4d5Z\x10+\u00A3\u00E0\u00B9\x16\u00AB\u00BC8>\u00D2\x7Fm\u00A5\u00A3\u0084\u00E1Ed\u00AD\u00EF.\u00D1\u00EE\u00D6jeT\u00F6$\u0091/\u00C8n\u00B3\u00C7\x00\u0088{\u00E4\u009B\u00ED\x02\u00A3\u00A3\u00A3V\u00EBp\x00\u00FA>>>\u00DE\u00DDu5D\u00F1\u008E\u00FE\x1B\u00EF\u00D1x\u00C5\u00D7,}fA\u0082\u00F4\u00D1\u00DC\u00E9k\u0097\u00C3\x1E\u00F6\x1E:\u008C\u00A2\u00F8\x16\u00C1\x03#v\u00A3\x1B}\x05\u00C0\u0088#d\x04\x1B\u009F\u00CCv\u00E1\u00B7\u00C3F\u008D\u00CA[lq\t\u00B1\u00EC5\u00C4=j\u00CCv\u0081\x00\u00A2$\u00C7\u00C6F;\u00DA/Z&\u00F3@l\u00C6\x1A\u00EF\u00AE(\u00E6\u00C4\u00BA]z\u00C9\u00D3\\\x05\u00D1\x0E\x1F\u00C1bp\u0095f\u0095*5)\u00E9~\u00CC\u00CFu\u0093\u00C9{\u0080cS\u00E3\u00C3\u009F\u0089\x10\u00BA.~$\u00EB%\u00D0>\x18\u00C4C\u0093\x02\u009B\u00ABu\x06\x02\u009F{\u00F8\u00CDv1\u00FEGI\u009A\u0087\x06C1\u00F44`\u00E3=\u008A\u00C2f\x04\u00DC>Ye\u00B3\u008C\u00F9\u00B3\u0098\u00AA\u00CF\u0089\u00C3\x18\t\u0099K\x14\u0099K\u00A6\u00CCL\u00F1\x14)(\u009E\u0098%+\u00EB\x11\t\u00CE\u00CA~Q\u0098:\u00E6\u00C4\u00F1\u00E3\u00BB\u00B5Z\u00B7)475\n\u00CFK\u00A9=\x10\u009Em\u008A\u00C5\u00DDS\x01\u0082\u00F4\u0095SC\"\u00D8\u00ECTBO>\x1F\u00CA\x05NyX\u00EE\u0091e\u00B6\u008B\u00B1Z\u00ADd\u0092{\u0099\u00A8`b\u00C2y\u00AD\u00FBj\u00E4({\u00F4\x1A\u00EF1\u00FC\u0093U\u00D7\u008D\u00A7\u00AF]\x1E\u00F6\u00E5}\u008E\u00E1'\x0E\u00BB\u00DDe\u00F1\u00F9\u009A\u00B0N\u009D\u00DDp\u00B8\u00BC\u00DC\u00AD\u00E9}L\u00A7\x13\u009B\u00ED\u00EB\x1F\u009DtE\u0093\u00A3\x11\u008Cw\u00D2P\u00DA\u00D9\u00D5\u00F9\u00DE\u00A2\u00D7\x7F\\[+|\u00DCV\u00B8]x/\u008E`\x11\x0F%\x15 9>t\u00E0@0\u00E7\u00C5\u008FoR\b\u00DD\x0B*\u00A1\u00EB>t\u00E2G\u00CA\u00CB#\u00C4J\u0083\u00E5\x0E\u00B3\u00DD=\u00B7n\u00DDr:\u009Ds\u00E7>\u00E6\x1A%9\u00F5\u00F1\u008E\u00D3\u00DBxgOV%s\u008D9\u009Cw\u00EA\u00DA\r\u00DB3\u00A3o\u00D9#\x12\u00BE#\u0087\u00CB\u0097-{\u00B8\u00B0\x06\u009B\u00D3Q\u00EC\u00AA\u00DE\u0092\u0097'\tW\u00E7f\u009E\u00D9\u00B5K\u00D0\u00DF\u0096\x16\u00BD\u00D1\u00D8\u00AE\u00C9\u00C9a\u00AAm\u00E3\u00A3\u00D7\u00C5m\u00C3Z\u008DF\u00ECX\x17\u008F\u008D\u00A2\x06\u00C0f\u00B3\u00B3\u00DCe\u009C\u00AC\u0091J\u00B8!7Wh]X\t7\u00E4nd'B%lnl\u0082;\x1E\u00E2\x1E\u00D1f\u00BB\u00C08\x07\x17%\x19\x1F\u00FF0\u00D2y\u00C4:\u00DCs\u00AD;\u00B0E\u0094\u00A6\u00C6x\u008F\u00AE\x01\u00AB\u008C5K\u009F9\u00D7\u00DB-\x19\u00B3\u00DA6x\u00E3\u00EB\u0081\u00DE\u0095\u00C9\u008B\u00A3\u00E8D\u00E8n\u00B1\u00F3\u00B0\u00B55\u00DC\u009B\u00C0Y\u00D9kEsx\u0089\u00AD\u00EF\u009D\u00C5\u00C5\u00BC\u00CD\u00CE\x19:$\u00C7b;]\u0092\u0082d\u00FE\x19\x12zjN\u0084\x1CO\u009Ep3\u00B7;7\u00B2T\u00A9\x10\u00B7\x10\u0093\u0085\u008Am\u00EA1\tSHR\t]\u00E7vgK2Mj\u00DDc\u00B8e`\u00B6\u0087\x07\u00BA\u0083\u00C7\u00C6FY\x14\r\u008Bw\u008CLe\x17\u008C\u00F7h\u00BC\x07\u00BC<Y\u00B5;\u00EFD\u00D1\u0089de\u00BF\u00B8\u00A7\u00B4\u00CC\u00D3\u00B4\u0088$|$\u00DF[=\u00CC\u00CC\x15\u00C3\u00CF=\u00E0\u00E5p\u00D6xxJ\u00A1hW\u00B1\u00A7\x03\u00E9\u00A8\u00AD\u00DB\nwk\u00B5\u00C1\u008F?\u00A2\u00AC\u00D7o\u00C8\x15\u00FC3\u00AE\u00ED\x07\u00E5\x12\u00A2'\u00BA\u00D1\u00C8,\u008Bex&\u009F\u00FF\u00DB\u00DA\u0092\u00C8w\u00D2\u00C5\u00C5\u00C5\u008D\f\x0F[,\u00E6\u00C8\u00AF\u00CF#\u00EF\u00BD\u009F\u0096\u009E\x1E\u00DE2\u00B8\u00CE\x02\u00E6\u00CF\u00BC1\u00A7\u00AF]\u00B6\u00BB<\u00E7\x10\x0E\u009C\u00B0\u00DA\u00ED\u0093\u009F\u00CF\u00FD\u00FE\u00E5{*\u00C9\u009F)h\u00EEY\u00AFJ\u00D7\u00E8\u00F09\x1B0O\u0087\u00D1\u00C8B\x18\u00D5j5\u00F3\u0096\u0098L=-z\u00BD0j\u009FLf\x12n\u00FA\u00E7\u00E7\u00AC,t\u00B8\u00A1\u00D5 \u00F6\u00DD\u00B3\u00E5\u0093|\u00EA&\x1DB\u00F9\n\u00CFW%G\t\u00E5\x14/\u0097*\u00AC\u00A1*.\u00BF\u00CF\u00DE6\u00B7\u00CA\u00ABh\u00DE`\u0096\u00A0p\u00AC\u00B0\u00AE\u00FD\f\u009F\u00CF}\u00A6\u008B;\u00DD\u00C7\u0095.K2F \u00D7{\u00AEE~e\u00BE\u00B9\u00BB$J\u00D7\u00CE\x06\x00\u00E2>\r!C\u00A0\u00B2\u00A22\u00C2\u009F\u00C6D\u00B8\u00B8'''\u00EF-{'\u00EC6;\x00\x00\u00E2.\u0085\u00BAr'\u00FCX\u00E1\x17\u00E2\u00EE\u00CA\u00CA\u0095\u00CF\u00EE\u00DD\u00F7Nbb\"\u00EE\"\x00 \u00EE\u0091\u0088\u00C1\u00D0Z\u00F5 Z\x00\u00E2\u00EE'?z\u00FD\u008D\x1F\u00BF\u00FE\x06n\x1E\x00 \u00EE\x11\u008D\u00D9l>ZYa\u0092u6\u00EA\u00E9*\u00EE\u00CA\u00C4\u00C4\u00B7J\u00B4\u0092\u00B1\u008E\x00\x00\u0088{\u0084b\u00B7\u00DBjkj#-T6\u00D2\u00C4=--}o\u00D9\u00BE\u00E4\u0094\x14\u00DC0\x00@\u00DC\u00A3\u0089\u00A6\u00A6FO\u00838 \u00EE\u009A\u009CWv\u00EC,\u0082\u0093\x1D\x00\u0088{Tb2\u00F5\x1C\u008E\u0098\u00A9*\"G\u00DC\x11\u00EF\b\x00\u00C4=\u00EA\u0089\u009C(\u00C9H\x10web\u00E2\u00C1C\u00BFC\u00BC#\x00Q\x01f\u0085\u00F4\u0086B\u00A1,\u00D1j\u00D7j4\u00A8\u008A\u0095+\u009F\u00FD\u00E0O\x1FB\u00D9\x01\u0080\u00B8O\x1F\u00F2\u00F2\u00F2\u008B\u008A\u008B=\u00CDh1\x13\u00D8\u00B8i\u00F3\u0081\u00DF\u00FE\x0ENv\u00B3\u00D9,\fm\x0F2\x11\u00B7S\u00E3N\u00CD)H\u00B6\x04\x7FF\u00F2\u00D2a4v\x18\u008D\u0091p\u00A5 \u00EE3\u0082\u008C\u008C\u00CC\x12n\u00E6#\u00D5L;qeb\u00E2\u009E\u00B2};v\x16EW\u00B1I:\u00F7\u0095\u00EE\u00FD\u0095\u00B6\u00E4\u0098Ng\u00F6o\u00A5*\u00F1\u00A4(\u009E\u00B0\u0098\u00CD\u00AE\u00F3\x1D\x1E)/g\x0BD\u0090\u009A\u0088\x17\u00C4\u00F0\x04\u00ED\u00D3\u00A2\u00FF*\u00A4\u00A7/\x14\u00A9\u00B9\u00A9\u0091i\x1C}\u00A4\u008Dt\u0082\u0087\x0E\u00EC\u00B7\u00DBm\u00E2\x19]Nz\x18\u00BB'\x1C\x1B\u00C3O\x07\x1F\u00F0\u00FAG\u00FC\u00F9\u00EA\u00852\u00F8\\\u00A6\u00D5\u00F8`\n\u009A`p{\u00A5 \u00EE\u00C0=*U*\u00E9\u00FB\u008C\n\u00EBNKK?x\u00E8wQw\u00CAd\u00F7\u0091\u00A0l+\u00DC\u00FE\u009B\x03\x07T\u00A9*\u00A6&\u00F4\u0097\u00B6\x0B\u00CB\u00F4\u00D0\x1B\u00A6ql\x0B\u00BDijj\u00BC`h\u00A5\u008Ff\x11lO:\u00D0\u008B$ut\x18\u00ED6;\u00E9\x17\u00A9\u00A1x\u0092,f~\n\u00E9\u00B0\u00A4,\x16\u00EEcV\u00F6\u008B\u00CB\u00D4j\u00965+\t;\u0084\u00EDI\x1F\u0085\u00AF\u0084\u00D4\u0084\x02\u00B0\x13\x11\u00A7\u00E9\u00D6\u00CEe\x1B\u009B\x1A\x1B\u009B\u00F9\x19\u00AD\u00D9$bJ\u00A5\u00A2\u00A8x\u0097B\u00A1\u00A43\u00A5\u00F3\x15\x1F\u00C8N\\\u009C\u00C2\u00AA\u008CL\u00D2G6';)\u00BBZ\u00ADv\u00ADCv\u0088P\u008D\u00923\u00BA\u00BF[\u008F\u0089\u00ED@\u00CA\u00CE\u00AF\u00B9\u00A1\x14\u00D7*KS0\u00B7\u0085\u00C4Y\u00BE\u00E2\u00E2I\u00AE\u0082x\u00D1%\u00B6'\u00FB+Np\u0086\u0083\u00C5:&\x01\u00DD\u0097\u00DB\n\x0BI/\"*J2DDo\u00BC#\u00E9\u00AC0G \u009B\u00BB\u009C)\x0B5\u00CF\u00F4\u0086\u00BE\u00DA\u0092\u0097\u00FFqM\u00ED\x03\x19\u00B2o\u00DDV\u00C8l==o\u00BC\u00D3U\u00E6\u00D5shC\u00EE\u00C6\u0093\u009C\x11\u00D9\u00AEP*\u00E9\u00DB=\u00A5e^\u008CM\u00D2\u00C1=\u00A5\u00A5lV\u00DB\u0083\x07\u00F6\u00D3\u00FE\u00942[4\u00E3\u00C4\u00F1O~s\u00E0 3\u00A85\u00AF\u00BCB_\u0091V.\\\u00B8\u0090\u00CAi\u00E3\u00D5\u00EA\u0085\x17V\x7F\u00FA\u00D7\u0093\n\u0085\u00C2b\u00B1\u00FC\u00DB\u00FE\x03\u00B4C\u0095\u00EEC^\u00A7\u00EC\u00D4e\u00EC\u00A1&\u0081+\u0095\u0082\x12a'\u00C2\u00BE\u00DAY\\Lo\u00FEPYI\u00B9PiY\x16\f\u00AE\u00E5\u00E0%\u0095\u00BFi\x15L\x07\u00E9\u00BE\u00A5\u00FF\u008F\x1C.\u00A7r\u0092\u00E8S\n\u00C2\u008Az\u00CC\u00D2\u00A7-\u0094\u00BB\u00B0\u008E\x077\u00D5bV\u00F6\u00C9\u00E3\u009C\u00BES5\u00DAl\u00F6#\u00E5\u00BF\u00A7\u00AA\u00B0\u00DBlj\u00F5\u00F2\u00AD\u0085\u0085T\u0087\u0094\u00D1\u0086\u00DC\\n1\x10\u00A3\u0091\u0092b\u00B5J'U\u00F2\u00E8B}$\u00B8G+*(\x11\u00D6\u00F85\u00F3q\u00C6\u00CC\u00CFY\u00F2\u00F6\u00DBT$\u0096/\u00E5\u0095\u00C4\u00E7N=\x1B\u00D6\u00B9\u00C9\u00C8\u00CC\u00E4.\x16o\u00FB\u00B3\u00CB'\x14\u0098\u00F6\u00BCn2Q%P\x15\u00B1\u00F5I(_\u00FAy\u00B2\x0B\u008D\u0085;`\u00B9\x07\u00A4z\u009A\u009C\u00BD\u00A5\u00A5\u00D3\u00DB\x05\u00FF\u00D3\u009F\u00ED|\u00ABD\x1B\u00A5Nv&\u00D0\u00E2-\u00A4b$+\u00A4\x0B\u00F4jnjb\x06 \u00A9\t\u0099\u00F6KT*\u00DE\u0094\u00CE&E\u00C8\u00CB\u00CBg\u00CBP\u0090\u0088\x14\u00ED\u00DAEj\u00D8\u00D2\u00A2\u00DF\u00AD}{oi\x19\u00A9\u00D8I\u00CF>\\RvNCy\u00EB\u0098\u0084\u009BD\u0087\u00D2\u00A16\u0083$&#3\u0083[=\u00837~i\u009F\u00F5\u00EB7\u00B0\u008C\u0098\u00CC\u00A5\u00AAR)\u00F1\x1F\u00BC\u00F4\x03*\u00C9\u0096\u00FC|\u00DA\u0081y0H\u00E5)_N7[\u00F4$X\u00A4\u00A4\x16\u00DE\u00E6?\u00C1\u00CB\x1F+vsc\x13\u00D3\u00EE-\u00F9ybe\u00E7z\u0099\u00A9\u00AA\x1E\u00DE\u00D4%\x15\u00A6\x17gn\u00F7\u0098\u00C4+bS\u00D7\u0081\u00FE\nk\u00A5RF\u00F4\u009Ek]\x1E5\u00DE\u00D7\u00F3\x05\u00A0\u00DA\u00D0\u00E4hH\u0091\x17.|\u009CJ\u00BB\u00B7\u00AC\u008Cmt[\x15T\u00AB\u00B4\u008F\u00A4\u00FE\u00F9:\u00B7\x0B\u0087\u0090\u00B2S\u00B3\u00C1r7\u00B6\u00B7\u00D3{\u00D6\u00BD\u00A0*b\u00D5Be\u00A63\u00A2K\u00C0.\x16\u00FDe\u00D7\u008Eo)\u008FS\u00C9\u00A9\x06\u00A8Z\u0092\u0092\u0092\x04\u00E7\x12\u00CB\u0097-\u00AF\u00CA\u00ED\\\u00A2\u0085RA\u00DC\x03t\u00D1\u00EC\u00A7.\u00FFtt\u00C1+\x13\x13\u008F\u00BC\u00F7\u00FE\u00A6\u00CD\u00FF\x18\u00C5\x1D,\u00A5B\u00E2E\u00A1\u00DE?\u00936fY3\x15&\u0095$\rr\u00BB\u00D42\u00EDF/:\u008A\u00F4\u008EY\u00B2\u00F4\u00D1\u008BG~K^\x1Eg\u00C9\u00D6\u00D6p\x1E\u0095\x1E\x13\u00D3hzq\u00E6$\u00BF\u00E6\x1C\u00B7L]\u00ABA\u0093#]\x02\u0089i\u0099\u00A1\u00D5pp\u00FF~\u00DAAl1P\u00BE\u00AC\u00DBAY\u00B3Br\u00BD\x01\x1B7\u00EA\u00E2hE\u00A5R\u00A1\u00A42\u00D2vjE\u00C8V\u0095<\u009EU\u00AB\u00D5\u00D4\u00C0\u0090\u00A6/\u00E3gH\u00A7\u008E\x0553^\u00D6\u00CA\u00A0}\u00D8)\u00BB*5\u00EB|PE\t\u00CD\x03\u00BD\u00A7\u008D\u00AC$\u00AE\u00B8\u009D\u00F3\u009D\u009A\"\u0092c\u00D6\u00C2\t\u00DE*2\u00F3)GJ\u008D\x0E1\u00B4\u00B6\u00D2WtEXm'=\u00A8s\u00E1b\u00B1\u00F7T\x00\u00CA\u0097\x1A\t\u00AA.\u00D2qjl\u0084b\u00B0|\u00E9#\u009D\x07\x04\n\u00E2\x1E\u00AC\u008B\u0086,\u0085i\x16%9=\u00E2\x1D\u00B9\u0085\u00D6\u00F4z\u00E6\u00F9%\u0093\u0090\u00DE0\x1FH\f\u00EF\u0096%\x01\u00F5\u00B4\"\u0084\u00E49\x1EI\u008C`o\u00D2\u0081^T\u0083\u00E9/\u00FD\u00E5\x04\u008B\u00DF\u00ADhW1\u00D9\u008F\u00A4\u00F8L\u00A3I\u00B9\u00E8\u00B5\u00CA]C\u00F2\u00C0b}\u0091\fp\u0085R\u00E9\u00B3\u00DD\u00A2\x04)eJ\u009F\u00CCm\u0092H:\x17\u00CA\u00E5X\u0095NlJ\u00D3\u00CD\u00C9Y\u00B5-z&\u00EETx\u00FA(^7U\u00A9T\u0098\u00CDCv?\x16\x01g\u00A9\u00F1\x1E\u0092\f*'{\x1E@M\x05+I\u008B\u00FE+ON\x7F\u00C9\x15\u00B9\u00BF\bjM\r\u00D5\x0F]\x02\u00D6\u0091\u00A2\u00923\x07\x1A\u009D8}\u00A5y\u00B0\u00FE\x1F\u00EB@\u00D0\u00B5\u00A3=\u00D9\u00FE,\x0B\u00BA\u0088\u0094)\u00D5%\u00C9\u00FA6\u00BEn][#v\x11\u008Dp\u00BB\u00C3\u00E7\x1E$\u00D4\u00BF\u00A6\u009Eu-g\u00B2E\u00FD\u009A\u00EB\x1B7m\u008E\u00BA\u00A8\x18O\u00C6#\x1F\x16\u00C2-\u00F7L]~\u0092\u00D4\u00F5\u00B9\u00B9G++~\u00A5-\u00E1\u00AD\u00EC|\u00F7\x02\u009D\u00AA:y\u00E28\u00B3v\x05\u00A5\u00D8\u00BA\u00AD\u0090\u00D2\u00E1\u0095\u00F1q\u00D2&R(2B\u0099O\u00DF\u008D\u00FD\u009E\u009FG;\u00AF\u00CD\u00D1\u00D0\u00B7\u00FBJK\u0099\u00A81}g&\u00A7\u00AB\x181H\u00A7\x0Es\u00D6\u00F7W\u0094\u008B\u00F7S\u00E3\u00ED\u00F4\u00DF\u00EF+\u00DD\u00CB\u00FBR6r+\x0076Z,\x16*\u0095\u00C4\u00EEV\u00AB\u0097\x1B\u008D\u00ED,G^\"\x1F\u00F9\u0096\u00EA\u0084,\u00DF_i\u00B5{\u00F8r\u00FAY\u00AB\u00A4\u00AAt^t\u00AB\u00AF\u00DF\u0090K\u00D9\u00AD\u00CA\u00CC\u00A0\u00F6\u00E3hEEFf\u00A6\u00B0\u00EA\u0093\x17\u00A8\u0091\u00D3\u00EB\u00F5M\u008DM\u00CC\u008DN/\u00AA\u00D6\u00A2\u00E2]TH\u0092uj\u009F\u00A8\u00FD`{\u00F6\u0098z\u0084\u008BEuN\x7F\u00E9\u00F2\u00D1YP\x1B\u00B0\u00A58\u009F\u00F6?\u00A6\u00D3QI\\\x1Bi\u00AA|\u00EA\u00C7\u00FC|W\u00F1\u00AA\u008C\f\u00A8\x13F\u00A8\u00CA\x00\x19/U:]H\u00E7\u0092\f\u00E9\bUeb\u00E2\u008E\u009F\u00ED\u00C4\u00A4\x02\u00A1\u00BB=Hq\u00B6<\u00F0\u00B3\x03\t\u00D4D\u00D1\u00CF\u0087\u00EB\u00EE\x14\u00EFBm\u00C0-\x13Y\u00B0(\u00C9(5\x16X\u00BC#\u0094=DPW\u00E0\x10\u00F7x&\x15\u00CA\u00EE\t\u00B2\u00C1\u00A9\u0096f\u00F8z\u00A7\u00B0\u00DC#\u009D\u00D0\u00CD%\x19\"\u00CB}uV\u00D6[%oc\u00E8)\x00\x10w\u00E0\x03\u00A3\u00D1x\u00B4\u00B2Bv\x17|(\u00C4\u00FD\u00A7?\u00DB\x19\u00D5Q1\x00\x00\u0088\u00FB\u0094b\u00B7\u00DB\x0Es\u00A3B\u00E4t\u00C1\u00CB+\u00EE\u00CA\u00C4\u00C4\u00D2\u00B2}+\u009F]\u0085\u008B\x05\x00\u00C4\x1DL\u008E\u00DA\u00DA\u009A\u00E6\u00A6\u00A6\b\x14\u00F7\u00B4\u00B4t\u00CC\x02\x06\x00\u00C4\x1D\x04N\u008B^/W\u0094\u00A4\\\u00E2>m\u00E2\x1D\x01\x00\x10\u00F7p\"W\u0094d\u00F0\u00E2\u008ExG\x00 \u00EE@N\u00ECv\u009BN\u00A7\u00BB`0\u0084Q\u00DC\u00D3\u00D2\u00D2\u00DF*\u00D1b\u00A9\r\x00 \u00EE@fN\x1C?~\"\u0088\t\u00A6\u0083\x11w\u00C4;\x02\x00q\x07!$\u0098(\u00C9\u0080\u00C5\u00FDG\u00AF\u00BF\u00F1\u00E3\u00D7\u00DF@\u00E5\x03\x00q\x07!\u00C4l6\u0093\u00BE\x07\u00E0\u0082\x0F@\u00DC\x11\u00EF\b\x00\u00C4\x1DL)U:]K\u00CB\u00E4\u0096\u00D0\u009C\u00AC\u00B8\u00A7\u00A5\u00A5\u00EF-\u00DB\u0097\u009C\u0092\u0082\u00DA\x06\x00\u00E2\x0E\u00A6\u008E\u00C9FINJ\u00DC59\u00AF\u00BC\u0085\u00C5\n\x00\u0080\u00B8\u00A3\x16\u00C2\u0082\u00C9\u00D4SYQa\u00B1Xd\x14w\u00C4;\x02\x00 \u00EE\u00E1\u00C7\u00FF(I\x7F\u00C4=99yo\u00D9;\u0088w\x04\x00@\u00DC#\x02\x7F\u00A2$}\u008A;\u00E2\x1D\x01\x00\x10\u00F7\u0088\u00C3g\u0094\u00A4wqG\u00BC#\x00\x00\u00E2\x1E\u00A1x\u008F\u0092\u00F4$\u00EE\u0088w\x04\x00\u00B8\x05+1E\n\x0B\x17.,\u00D1j\u00B3\u00B2&\u00B1^OZZ\u00FA\u00BB\u00EF\u00BD\x0Fe\x07\x00\u00C0r\u008F\x02Z\u00F4\u00FA\u00AA*\u009DO\u00CB]\u0093\u00F3\u00CA\u008E\u009DEp\u00B2\x03\x00 \u00EEQ\u0083k\u0094\u00A4D\u00DC\u00DF\u00DC]\u0082xG\x00\x00\u00C4=\u00FA\u00B0\u00DBm\u0095\x15\u0095\x1D\x1DF\u0089\u00B8#\u00DE\x11\x00\x00q\u008Fz\u0084(I&\u00EE+W>\u00BBw\u00DF;p\u00C5\x00\x00|2\x07U\x10\u00C9l\u00C8\u00CDU\u00A5\u00AA\u00AAt\u009C\x0B\x1E\u00F1\u008E\x00\x00X\u00EE\u00D3\n\u00B3\u00D9\u00FC\u00BF\u00E7\u00CF\u00AF{\u00F5UT\x05\x00\x00\u00E2\x0E\x00\x003\x17\u00C4\u00B9\x03\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00qG\x15\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00B\u00C9\u00FF\x0B0\x00\u009C\u00EE\u008CG\u0084\u00BE\u00F3\u00C5\x00\x00\x00\x00IEND\u00AEB`\u0082";

					var binLogo2 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F4\x00\x00\x00\u0096\b\x02\x00\x00\x00\u00A7\u00FF\u00ED8\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1C$IDATx\u00DA\u00EC\u009D}p\x13\u00E7\u009D\u00C7e\u00E3\u00B75\x06\u008CL\u008Cc\u008B1iA\u0090\u0083\"\u00DD\u0084#8m\u00C3a7/\x07\x0Em2\u00E0\u00B4\u00B9\u00C1f.\u00D7\x02s\u00ED\x1Dq\u00D2\u0099KH\u00A73\u00D7\u0090\u00DE?u\u00F8\u00AB\u0084\u00FE\u00D1\u00C3d\u00E6\u009A\x18\u00A6\u00BD4\u0086r\u00A1\u00B6C\u0093A\u00EE\x1D$\x16\x075\u0096y1X\x18\x05,!\u00DB\u00B2$K\u00B2t\u00BF\u00DD\x07\u00D6\u00EB\u00D5\u00AB\u00A5\u00D5\u009B\u00FD\u00FD\u00A01\u00D2jw\u009Fg\u009F\u00B5\u00BF\u00CFw\x7F\u00FB\u00DB\u00E7\u00C9\u00B1\u00D9\u00EE\u00A9\x00\x00\x00\u00CC.r\u00D1\x04\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2>\u00C7q\u00DB\x03\u00C3\u00BDh\x06\x00@\u00EC\u00E4\u00A1\t2\x1C\u0092u\u00FF\u00E5\u00DF\u00A9|\u00EE\u009C\u00E5\u009Bs\u0097oF\u0083\x00\x00b!\u00C7f\u00BB\u0087V\u00C8X\u00FC\x03]\u0081\u0081\u00AE\u00A9\u00B3U\u00BA<w\u00EDK\u00AA\u00BC\"\u00B4\f\x00\x00\u00E2\u009E\u009D\u00F8\u00DC\u00FE\u008B\u00FF\x19\u00B0\x0F\u00C8\u0097\x17\u0095\u0092\u00BE\u00E7\u0094T\u00A0\u0085\x00\x00\x10\u00F7,#\u00E0\u00B0\u0090\u00B2\u00AB\u00DC\u00F6p+\u00E4\u00AE~>\u00A7\u00E2\u00AF\u00D1P\x00\x00\u0088{\u00F6(\u00BB\u00E5\x0B>\u00C8\x1E\u00F5\u00CCU\u00E8sW\u00BF\u0080\u00E6\x02\x00@\u00DC3\x1E\u009F\u00DB\x7F\u00E5d\u00C0\u00D2\x13\u00EB\u00C9+\u00A9\u00E0C\u00F0E\u00A5h9\x00\x00\u00C4=Sq\u00DB\u00F9 \u00BB\u00C32\u00B3\u00AD\u00F2\u008Ar\u00D7~/\u00A7\u00F4\x11\u00B4\x1F\x00\x00\u00E2\u009Eq\x04\u00EC\u00D7\u00FD\x17\x7FC\u00CE=\u00CE\u00B3\u0088,I\x00\x00\u00C4=\u00D3\u0090\u00E5;\u00C6y\"\u0097\u00AC\u00E6C\u00F0\u00C8\u0092\x04\x00@\u00DC\u00D3\u008F\u00CF\u00ED\u00BF\u00FC\u00DB\u00C0\u00F0ee\u00F6\u0086,I\x00\x00\u00C4=\u00EDD\u00CDw\u008C\u0087\u00BC\u00A2\u00DC\x15\x7F\u0087,I\x00\x00\u00C4=M\u00CAn\u00F9\u00C2\x7F\u00E5\x0Fq\x07\u00D9\u00A3\u009CTdI\x02\x00q\u0087\u00B8\u00A7\x1E>\x14\x13s\u00BEc\u009C\u00E7\x15Y\u0092\x00@\u00DC\u00D1\n\u00A9#\u00BE|\u00C7\u00F8@\u0096$\x00\x10w\u0090\x02\x12\u00CCw\u008C\x0F>\x04\u00AF\u00A9A\u00E3\x03\x00q\x07IA\u0091|\u00C78\u00CF1\u00B2$\x01\u0080\u00B8\x03\u00E5Q6\u00DF1\u00BE\u00D3\\R\u0091\u00B3\u00FA\x05dI\x02\x00q\x07\u00CA\x10pX\x02\u00A4\u00EC\u00A9\t\u00B2G\x06Y\u0092\x00@\u00DC\u00812\u00CA\u009E\u00CC|\u00C78\u00CF\u00B7\u00A6\u0086$\x1E\u00A7\x06\x00\u0088;\u0088\x13\u0092\u00F5\u0080\u00D9\u0090\u0089\u00A7\u00BC\u00A4\"W\u00FF\x0F\b\u00C1\x03\x00q\x073\u00C4\u00E7\u00F6\u00F7\u00FCZ\u00C1PLN~\x11\u00BD\u00FCN\u00E5\u009EeE\u0096$\x00\x10w0#\u0092\u0091\u00EFXR\u00B3+\u00AF\u00ACz\u00E2\u00FA\u009F]\u0097N)\u00B8[dI\x020\u008B\u00C9E\x13(\u00A9\u00ECf\u0083\u00BF\u00E7?\u0092\x14d/|\u00E4qRy\u00B2\u00F0J\u00ED\u00D0\x7F\u00E5\x0F\u00FC\u00E06\u0099tK\x00\x00\x00q\u00CF0\u0084\u00F9\u00AC\u00F9\u00DB\u00A7\u00C9\u0084\u00FC\u00FB\u00C2\u00BA}\u00F3\x16*\u0096\u00D1\x18\x18\u00BE\u00ACl\x04\t\x00\x00q\u009FE\u0086\u00DDa\u00E1%2\u00C9\u0099\u00EC\u00AEK\u00FF=9\u00FAeN^\u00E1\u0082'w\x17>\u00B2Q\u00E9\u00CA\u00F7\u00E2<\x02\x00q\x07R\u00F3\u00DB\u009B\x1A\u00F3;9jq\x18\u008Ex-}\u00F4\u009E[\u00F3L\u00B1\u00FE;\u008A\u0085h\u00F8\u00CB\u008E\u00DF$\u00FB\u00B2\x03\x00\x00q\u00CF\x1A\u0084\u00B0u\u00EA\u0086\u008B\tx\u00DD\u00E3\u00E7\u00DE'\x0BO\u00EF\x0B4\u00BA\u0092\u009A]J\u0086h\u00F8\x1B\x06\u00BFF\b\x1E\x00\u0088\u00FB\u00DC\u0086\u00E5;\u00A6#\u0093}\u00E2z\u00B7\u00C3\u00D0\x1A\u00F0M\u00CC[\u00B8\u00B4\u00E4\u0089]\u00F9\x15\u00AB\x15\u00D3w\u00FB\u00C0dw\x0BB\u00F0\x00@\u00DC\u00E7($\x7F\u00BC\b\u00DA\x07\u00D2\u00D6\u00B3X\x07F;\x0E\u00B2\x10\u00FC\u00FC\u00F5/rk\u009EU\u00B2\u00D3:\u00F7\u00CB\u00CC|\u00FC\n\x00\x00qO\u00A6\u00B2\u009B\r$\x7Fi\x0F_\x04\u00BC\u00EE\u00B1?\u00BD;q\u00FD\u00CF\u00AA$eI^\u00FE-B4\x00d/x\u0088i\u0086\u00AE\u00F6\u00CAIe'Q*\u00D2\u00FEm\u0091v\u0093\"\u00BB\"#Or\u00AF\u00E4/\x07\u00C6\u0092\x04\x00\u00CE}.`\u00FD\u00E4\x03\u0087\u00C9\u0098\u00B9\u0097\x14^\u0085\u008D\u00B6\u00EB\u0096\u00D9|\u00F4W8\u00EF\x00d#yh\u0082X]\u00FB\u00D8=\u00E7\u00F5\u00BF\u00D0\u009B\u0089\u0089\u0092\u00D22o\u00AEB\u00DD\u00A2\u00DB\u00F4IN~Q\u00E1#\u008F3\u00EB\u00ED0\x1C\t\u00D6h6\u00FC\u0080\u00C3\u00D0\u00EA\u00B3\x0E\u00A4\u00ECxGo\u00FBmW\u009C*\u0095s\u00CC\u00F8?\x0Bt\x1B\u00B2\u00E8L\x1D:\u00F7'\u00D9\u0092o\u00AF\u00D2U.X\x14n\u00FD\u00DF\u00F7]\u00B85&\x1F\u00B7\u00E7\u00AB\u008B\x1Fz\u00FA\u00AB\u008FN\u009D}\u00CB\u00E8\u00D8\u00A98\u009FcX\u00BCk\u00AA\u00F5\u00F8|S\u00C7m\u00B9\u00C3Z\u00FDB\u00E4\u00D9n\x03\u00C3\u00BD\u00C1wAr459K\x1E\u00C5\x1F&\u0080\u00B8',v\u009F\u009F\u00BE/\u00C7v\u0087\u00D5WR\u00AA\u00F6\u00E4\x17\u00E6(c\u0090/\u009D\"\u00D5.\u00D6\x7Fg\u00DE\u00C2\u00A5\x0B\u00EB\u00F6\u008D\u00FF\u00EF\u00FB\u00A9\x14\u00F1`\u00FC\u00BE\u00C0\u00F0\u00F5\x1C\u00A7\u00C5\u00C1>\u00DA\u00CE\u009C\u00CA.q\u00BFvoX\u00DE\u00C2>O\u00B8\u0095\u00CF\r\u00DD\u00F8\u00F4\u00E6\x15\u00D9B\u00EA\t\u00BEY\u00BDbZ\u009B\u00B8}\u009E\x01[\u00E2u\u00CB)\u00A9\u00F0\x07\u00C9\u00B4\x7F\u00A0\u0093\u00D7\u00F7\b\u00E2>\u00D0%Oa\u00CA+\u00CA}0\u00EE[\u00B7\u00C1@/\u00F6~_s\u00F3\x1C\u00FF;=~\u00AC\u00CD<hFk\u00A8\x10\u0096\u0089\u00DD\u00B6\u008F\u009B\u00CE\u008B\x1F\u00BD\x0E\u0087\u00F5\u00B6\u00CA9\u00AEX\u00EBy-\u0097\x1Dg\u008F\u00B0\u00EC\u0097\u0092\u009A&\x05\x1F@\u009D)\u009E\u00F1IK\u00AF\u00CAi\x19\u009D:\u00F6\x11\x1B\u0099\u00F7YyZ\u0087\u00C6F>\u00B8t^\u00B6\u00B0(/\u00FF\u00C55\u00EB\u00B9\u00BC\u00FCd\u0094\u00C8O\u0096\x12d\u00D2\u00F9g\u009B\u00C3\u00DF\u00BB\x0E\u00D8\u00AF\x07'\u00A7\u00F2#\u00BE=\x18\u00B4\u00D9j\u00B5\u00F6\u00F7\u009B\u00D8\x0B\x7F\u00AA\u00A4\u00ECh\r\u0088{<\u00B6}\u00CAmy=\u00F6!\u00D7\u00A8\u00BD@\u00A9\"\u00D8\x03\u00A8\x1E3\x1F\u00D3\u00E7\u00D6<3\x7F\u00FDw\x15\u00CC~\u0089\x11\u00C7\u00B0\u00CAr\u0091\x0ElL\u00B6\u009C\u00CC\u00FB\u00EC;\u00A7.\u009F\u00F7HO\u0088\u008C\u00CF\x17\u00D7<\x16!\u0086\u00A3\u00C0\u009F\u00DC\u00F2\u00CDA\u00DE\u00C1\x1D\u00B0|\x11V\u00DC\u0083\u00BF\"\u00DB\u008E\u00E1<\x01\u00C4]q\u00DB>M\r\u00EF\u008E\u00DD\x1D\u009A\u00E7\u00F7+SP\u00C0\u00EBv\u00F6\u00FC\x17{\x005\u00BFb\u0095\u00B2\x0F\u00A0F\u00C568o\u00B8w\u00D4\u00EF\t\x11\u00C1\u0098\u0095\u00E6\u009D\u0094\u00FD\u009E\u00DB)[\u00F8\u00D4W\x1E][^\u0099\u00D4rC\u009Aw\x7F\u00B8\x07\x0B\u00DC\u00F6\u00E0\u00EC,\u00A9m\x07 \x1C\u0088\u00B9\u00C7c\u00DB\u00A5x\u00C7\u009Dwn\u00E4/\u00AEP\x15r\u00CA\u00F4\u0094\x13\u00D7\u00BB}\u00D6\u0081\u0092'v\u00B1\x07P\u0095\x1D\u00C3=$~_\u00C0\u00D2\u00EB\u00F7\u00D8G#I\x7F\u00B6E\u00DE#\u00F3\u00FB\u00BE\x0B\u00C1\u00A1\u00F9\u00F5\u0095\u00D5\u00D2\u009B\u00A8Q\u00E1\u00F4U\u00B9\u00A5\\|\u00E6\u00DD\x7F\u00F9wr\x11\x1F\u00EE\r\u00BEA\u00EA\u0087m\x07\x10\u00F7\u00D4\u00DBv\u00898z\u00ADf\u00D5\u00A2\u00A5E\u00F3\x17\x06\x14)tr\u00D42\u00DAqp\u00FE\u00FA\u00EF\u00E6\u0095U\x17\u00EB\u00BE\x1D\u00F0M$\u00EF\x00\u00DD#\u00BE;\u0097\u00BD~\u008F7J;\b\u00E6}v\u00E8{\u00B8\u009B\u00A8\u00DBV\u00AD\u009B\u00D1~\u008A\u00F4U\x05\u00CB\u00D5q\u009A\u00F7\u0081.\x12\u00F4i\u00D7mfC\u00B0\u00B8\u0087L\u0092\u0081m\x071y\b4A\"\u00B6]\u00CA\u00C8\u0097n\u00BB5_\u00C1\x10\u008D\u00C3p\u00C4m:\u00C3\u00FF=\u00E7\x15&\u00EB\u00E8n\u00FB-\x17\u009CQ\u0095]4\u00EF\u00B3\u00E0\u0084\x0E\u008D\u008D|\u00D8wA.\u00D3y\u00F9\u00BBt5I\u00BA\u0089\x1A\u00CE\u00BC\u00CB\u00CF\u00B8}@.\u00F7d\u00DBe7Za\u00DB\x01\u00C4=e\u00B6]\u008A\u00D3\u00E6\u00B0~\u0099\u00EF\u009D\b(U\x01\u00B7\u00E9\u0093\u00F1s\x1F\u0090s\u00A7\u0097\u00DFeW\u00F0\u00D0\u00FC\u00BE\u00C0\u009D~\u0095\u00ED\u008Ac\x06\u00AD\u0091\u00FD\u0091wv\x13\u00D5\u00ED\u0093wf\u00BB\u00F4\x1B\x17s\u00C5\u00A9\u00ACI,\u0091w\u00D8v\x00qO\u00BFm\x17\x11\u00B2$\x03n\u00D7<\u00A5\u00EA\u00E0\u00B5\\\x1E9\u00F5\u00EF\u008E\u00B3G\x14\u009C ;8\u00DF1F\u00B2\u00DD\u00BC\u0087\u00BC\u0089\u00FA\u00E2\u009A\u00C7\u00BE\u00BA\u00F8\u00A14\u00FC\u00ED\x05\u009BwI\u0084=\u00E0\u00B0\u0084\u00C8m\u0087m\x071\u0083\u0098{xo\u00EBq\u00B9\x06.\u00C5\u00B3\u00A1\u00D7k3{K\x1EZ\u00B0\u00B0\u00D4\u00A3Te&G\x15\x1B\u0086\u00D7i\u00CF\x19\u00EE\u00F3\u0086\u00CC\u008A\u0089\u00D1\u00BCgi\u00E4=\u00DCMTz\u00A5\u00A5>!\"\u00EFBN$\u00BF\u009C\u00B7\u00EDg\u00E3\u00B6\u00EDV\u00AB\u00B5\u00DB`0\x1A{n\u0099\u00EF?\u00CES\u00A5\u00D1\u00E8t\u00FA\u00DA\u00BAZ.\u0086\x0B\x14\u00B6m\u00BF\u00C9\u00E4r\u00B9\u00D8\u0092\u0095+\u00B5+\u00B5\u00DA\u008D55eeeQ\u008B\u00BE`\u00EC1\u0099L\u00D2\u00CD\u00D5j\u00B5V\u00BBjK}}\u00F0\u00E6\u00AC\u00AA\u00F4\u0086\u00BE\u00A2\u00FD\u00B3\u0085'\u00DA\u00DB\u00BB\rgm6\x1B+z{\u00C3\x0E\u008Df\u0099\u00AC\u0086\u00F4\x123\u00D99\u008E\u00A3\u00A3\u00A3\u00CD\u00A9\u0092\u00B4\u009F\u00FE~\u00A8\x17\u00C4=\"c\u00FF\u00F7\u0099\u00DF\x13\u00FFh-\u008E\u00BBc\u00DE\u0089\u0092\u00C5\x0F)6P\u0081\"\u00D8\x06\u00E7\u008D\x0E$4T\\\u0096\u00A6\u00CD\u0084\u00BB\u0089J\u00B6=\u009D\x17\u00CEAi3\u00F7\u00C5\u009DW\u00F9\u009E\u00F8l;)\u00E3\u00C9\x13\u00ED\u00B2\u0085\u00A4\u00F2\u00F4\u00EA\u00EA\u00EC\u00D8\u00BE\u00A3A\u00D4\u00D0`H\u0091\u008F\u00B6\x1Ea\u00AA:m\u00B9\u00F0L\x10\u00EDv\u00CB\u00D6\u00FA\u00AD\u00F5\u00F5!\u00B75\u009B\x07\u00BB::\u00BB\u00BBC\u00E4t\u00D2\x0Ei9\u00BDv66\u00C9J\u00B7Y\u00ADbm\u00E9+\u0097\u00CB\u00F9NK\u008B\u00D8'\u00B1\u00A2\u00A5]\x02\u0095r\u00F8\u00D0!Y\r\u00A9\x17a\u00FB\u00DF\\[\u00CB\x15s\u00D0.\u0088{\x14\u00DB\u00EE\u00B8\u00F8Y\u0082;\u0099\x18u\u00DCq\u00E6\u0097U\u00E6(5PABG$\x04\u00D9\u00DD\u00C3\u0089\x0E\x02\u009A\u008D\u00E6}hl\u00E4\u00E3\u00AB!&\u0089M\u00D0\u00B3\u008F\u009D\u00EA\u00CD-\u008At\x0Fv\u00C1\u00B3\u00AB\u00F3*\x16\u00CE\u00C8\u00BC\x07\u00EC\x03|@&hJ\u00DB\x18m\u00FB\u00DB\x07\u00DE\u0092*\u00A3\f\x12\u00C1\u00F7\u008E\u00B62\x19\ri\u00D8\u00D9\u00B7\x11 !\u00A6\x0E`\u00F7\u00DE=\u00B2+\u0080\u0090=J0\u00B4\x7FRj\u00F2\u00D7a\u00AA'Wv\u00E6\u00FA\u00C5\u00B2\u00A2\u00D6\u00B0\u00AB\u00B3\x13\u00DA\x05qO\u00AEm\u0097H\u00AA\u00F7\u00EEM%\u00B3$\u00E3\u0083\x0F\u00B2_\u00F4\u00C4\u0098\x153\u00FB\u00CC\u00FB\u00EF\u0083\u00D2c\x18\u00A4\u00F8\u00A4\u00EFq'\u00C9\u00F8,cQ\u00CE\u00BE\u00DB\x17\u008Fy7\u009F\u0095\u00CF\x03\x13\u00B3mg\u00CAH\u0082X[W\u00B7N\u00A7'%%\u00C54\u00F6\x18O\u00B4\x7F$\u00BA\u00DD\u00E3\u00C7\u00DAX\u00F8B\u00BA\u00A1\u00D1\u00D8#\u00D5\u00CD\u0095+\u00B5\u009B\u00EBju:\u00BD\x189\x11\u00B5\u009B\u00AC\u00F4\u00D1\u00D6\u00D6\u00DD{\u00F6J7\u00D7,\u00D3\u0088\u00EF\u00D7\u00E9\b\u00BDX\x04u\x06\u00C7\u008E\u00B5\u0089\u0092MW\x06?;\u00F0v\u00C8\u00CA\u00D3n\u00D9jU\x1AMmm\x1DmN>]TvzO5\x17W\u00E68\u008E\u00AEBX)\u00FC\x00\f&\u0093\u00F4\x18\x01\u00C4=\u0089\u00B6]\u00CA\u00C8\u0097n\u00AF\u00B7d\u00E1\u00E2\u00F4\u0084h\u0084\u00F1\x1D\u00C7\x15\u00DC\u00E1\u00AC\u00C9yw\u00FB\u00BC\x1F\\<\u00B7K\u009F\u00CE\u00BB\u0094!\u00CC{b\u008F\u00A4n\u00AE\u00AD\u00DDZ_/j\"\u00BD!\u009F\u00AE\u00D3\u00EBDSL\u00FE\u00FDd{\u00FB\u00CE\u00A6&\u00A9e~\u00AF\u00B5U\u00BA\x07\u00D2M\u00F1#\u00A9'\u00ED\u0090\u00F6p\u00B0\u00A5\u0085\u0085\u00D1/\x18\u008D$\u00F7R\u00FB\u00CF\u00AB\u00F9J-W\u00CC\x0B\u00AE\u00AC\u00DB \u00FD}\u00A5\u00B9Y,\u009D\u00F4\u0097dZ\x16Cg\u00D0n\u00F9\u00AB\u008A\u008D5b\u00DD\u00A4\x1E\u00FFx\u00DB11\u0088O\u00EAO\u00FB\x14\u008F\u0091J,\u00AB\u00A9\u00A1\u00FAtuv\x1C?v\f\nv\u00DF7\u00A0\t\u0092g\u00DB\u00A5(\u009E%\x19c(f\u00F8\u00DA\u00CC\u00F2\x1Dc7\u00EF\u00B3\u00E3\\_\u00BA{\u00FB\u00EA\u00BD\u00BBi\u00FE#\f\x1Em&.\u00DBN\u00ECll\"y\r\u00BEkJK\u00A4^\u00BB\u00BB\u00DB@\u0082.~\u00EC\u00EC\u00E8\x14u\u0093|\u00B7T\u00D9\u00A7\u00BC\u00B9f\u0099\u00B4? \u009B,[a_s3\x15\x11\u00F2\u008E+\u0095NN|\u00EA*\u00A1'\u00EC\u00A4\bT\u00BA\u00B4\x14\x112\u00E6\u00D2\u00DB\u00A7Re\u009F\u00DE\u00B1\u00D5Q\x1F\x03\x05\u0083\u00B8\u00A7\u00C8\u00B6\u008B(\u009E%\x19=\x14\u00D3\u00ABr\u00DC\x1AM\u00C6\u00CE\u00C9\u00BC\u00BBn\\\u0099\x1Dg\u00FC\u0083\u008B\u00E7\u00D3[\u0081\u00909\u00EF\u00F1\u00D9\u00F6\b7KIvI:\u00C5\u008F\u00E2\u00B8\u00B8\u00BC\u00D6\x1B\u00A62sB*\u00BB\u00D4\u009E\u00DF\u00EF\u00DDm6\u00A3q\x06S\u0092\u0091\u00F1\u009Fr\x06Vk\u00C8uH\u00B5\x1BC)\u00BBPC\u0083T\u00C1\u00B9\u00D4>\u0094\u0080\u00B0\fl{\f=\u0087\u0090%\u00B9\u00A0|\u00FE\u0082E\u00BE\u00A4\x1EE\"\u00F9\u008E1r\u00EF\u00CC)\u00AE\u00F1\u0087\u00D9ur\u008B\u00F2\u00F2\u00D7\u0096W\u009E\x1B\u00BA1\u00ED@\u00DC\u00CE\u008F\u00AF\u00F6\u00CEhT\u0099\u00FBb\x14ml\u0099y1\u008F<\x13b\u00B4\u0099\u0099\u00DB\u00F6\u00A8\u0090\u00FBf\u00A1\x0F\u00C2d2\u00B1\u00A0\u0087\u00D9<(\u0086\u00AA\u00AB4\u009A\u00C8\u00C9\u008E\u00D4y\u0088\x0E\u009A\u00DC4\x0B\u00CAG\u00C5j\u00B5J\x05\u00DD\x1AF\u00DCi\u00E7\u00E1T[\u00DA\u0091\u00D4\u00D6\u00D5B\u00A6 \u00EE\x19d\u00DB\u00A7\u00F5\x1Fw\u00C6=\u00EE$fI&\u009E\u00EF\x18\x0B\u00E4\u00DC\u00E9\u00C5M\u009F\u00D4\"\u00C3\u00D9\u00A5\u00DFX\u00B9\u00A0\u00F4\u00AA\u00ED\u00AE\u00ECQ\u00A6\u00D3\u00D7z\u00FF\u00A6\u00B2z\u00A6\x0F\u00A9\u00C6=\u00B6Lh\u00F3\x1E4\u00DA\u008CJ\u00E9GR\u00B5Z\u00ED\u00C9\x13\x0FN\u00DF\u0083\u00B0\u008C\u00D4\u00C2G\x15ki\x10\\\u00BAa\u00B0\u009A_0\u00F6\u00D0\n\u00F4/B\u00F6Np\u00F4&\u00F4o\u009A\u00CB)\u00CD\u00B8\u0087m\u0087\u00B8g\u009Cm\u009721\u00EA\u00B8\u00EB\u00E1\u00D4\u00E5\u0093\u00CAfI*\u0095\u00EF8+\u00CD\u00BB\u00F8$\u00EA\u00B6U\u00EBZ\u008D\u00DD\u00B2o\u00DF\u00BFtn\u00EF\u00FA'\u00D3\x1B\u009C\t\u0090\u00BE\u00CB\x1C}\u00D2\x1EI\x15\u00A59\u009C\u008F\x0E\x17\u00DB\u0089\u00D4\u00DF\u00BB\u009C\u00DD\x06\u009E\u00D8\x05}FU\u00E5;\x00\u00A4\u00B1C\u00DC3\u00D6\u00B6\u008BL\u00BA]wo\u00AAJ+\u00B9\u00E2\u00F9\u00CA\f6\u00E6\x19\u009F\u00BC\u00D3\x17\u00F0\u008D;Sv\bYd\u00DE\u00A5O\u00A2\u00AE-\u00AF\u00FC\u00CA\u00E2%\u00B2\u00A7U\u00E9\u00E3\u00B9\u00A1\x1B\u00E9zZ5\u00FC\x1FhJG\u0092\u00D1j\u00E3\u00BF\x1Bi4\u00F6\x1Cok\u0093&#r\x1C\u00A7\u00D1,#\u00B3\u00AFY\u00A6)\u00E6\u008A\x0F\u00BE\u00D3\u0092x\rC\u00A6\u00D9\x00\u0088{\u00A6\u00D8v)\u00F6!\u0097G\u00AD@\u0096\u00A4cX5\u00DC;\u009E\u00FAF\u00CB\n\u00F3\x1E\u00FC$\u00EAw\u00D7\u00AC\x7F\u00FB3y\u00C2\u00CF\u0087}\x17\u00D6\u0094W\u00A6rl\u00C84\"\u00CDL\x17\x11\x03\u00F13E\u00F6x\u00914M^\u00E1\x0B\x0E\u00F3 \u0094\n\u00E2\u009E\u00D1\u00B6]\u008A\u00D3\u00E6\u00F0N\x14\u00AB\x1F\u00F2\u00CD\u00CB\u008F'D\u00E3\u00F7\x05l7s\u0092\u0094\x153;\u00CC{\u00F0@\u00ED\u008B\u00B9\u00E2\u00A7\u00BE\u00F2\u00E8\u00E9k\u00D3\x1E\x04u\u00FB\u00BC\u00A7\u00AF\u00F6\u00CEtT\u00F7,B\u00AA\u008Cb\u00E4Z\u00AA\u00F2\u00D2\u00FC\u00C8\u00D8\u00B5\u0095\u00B6\x12\x1F/\"\u00B7\u00BE{\u00CF\u00DE\u0095Z%\u00F3\x11\u00D5\u0092X\u0090\u00CB\u00E9\u0082X\u00C5\bR!\u00D3i\u00DBE\u00BC\u00E3\u00CE\u00BB\u00B7\u00E2\u00C9\u0092\u00F4\u00B9\u00FD\u0096^\x7F\u00BA\u0094]4\u00EF\u00D9x\u00C6\u00BFY\u00BDbq\u0091\u00FC\u00D6\u00DC\u00A77\u00AF\u00A4=\u00ED=y\u00901\x17\u00DF\u008B\x11\x18i\x18]\u00BABH\u00FA%+\u0088\nN\u00B6]\u00BC\u00E1\u00C9\u009E\x1AU\u00B6\u00DA\u00D2\x1Ab\u00DAk\u0088{\u00D6\u00D8\u00F6\u00A9:\u00F0Y\u0092\u00CE\u00B1\u0091\x19\\K9\u00ED9CF\u008F\u00C7>\u009E\u00DE\u009A3\u00F3\u009Eu'\u009D\u00CB\u00CB\x0Fi\u00D2\u00C3\u008DU\u0090\u00ED\b\x19,\u00C6`i\u00D6h\u0096\u00A9\u00D5\u00F7s~n\u0099\u00CD\u00FD\x11\u00F5\u00BD\u00B3\u00A3C|/\u00A6\u00AEKo\u00C9FH\u00B4O\x04\u00E9\u00A3I3\u00CA\u00AF\u009F\u00CB ,\u0093~\u00DB>\u00AD&1gI\u00DAo\u00E5\u00D8\u00AF\u008DdH\x03fc\u00CE\u00BB*\u00CC\u009DU6\u00CAX,i\u00EFQ\x07\x0Ec\x14\u00E9\u00AB8}U\u008A:Z\u00973\\\u00A6\u00A0t`\u0096\u008D\x1B\u00A7I\u00F0\u00C6\u009A'\u00C4\u00A1cN\u00B4\u00B7\u00EFkn\x0E\u00B9\u0087\u00AE\u00CE\x0E\u00F1~)\u00F5\x07\u00E2\u00BDM\u00A9\u00B8\u0087\u00AB@\u0082\u00B1r\u00EAHD\u00CFN5\f\x17\u00CD\u00A7R\x10\u0094\u0087s\u00CF,\u00DB.\u0085\u00CF\u0092\u00BC\u0095\x1Ba\u00A0\x02a>\u00EB@\u00E6({\u00F6\u009Aw\u0095pg5x\u00E1\u00A77\u00AF\u00DCsEO:\u00F2Y\u00C6<\x03\u00B6\u00A8\u00AFI{\u00EA\u00C2\u00C4\u00EF\u00B4\u00B4\u0084\u00B4\u00DE\u00EF\u00B5\u00B6Jm\u00FB\u0096\u00E9\u00C3\u00F6\u00D6\u00D6\u00D5\u008A\u00E6\u009D4\u0094V\x0E\x0E\u00BEw\x1B\f\u00D2a[\x1A\u009Bv\u0089\u00EF\u00A5\x19,\u00D2GIEH\u008E\x7F~\u00E0@\"\u00C7%<\u00DF\u00C4\u0089\u0097\x17\u00D2\u0091p\u00A6\"6&\u00938\u00FA\r\u0080s\u00CF,\u00DB.2\u00E9vYo\x17,|(78K2\u00F5\u00F9\u008E\u00B3\u00DB\u00BC\u0087\u00BB\u00B3\u00FAa\u009F1\u00BD\x03\u008A\u00C5\x07\t\u00DF\u00C1wZV\u00AE\u009C\u009AX\u0083\u008D\u00E9(\rUo\u00DF\u00B1C\u0096\u00AE\u00CE\u008F<\u00B3w\u00AF\u00A8\u00BF\u00DD\u00DD\x06\u0093\u00A9\u00AF\u00B6\u00AE\u008E\u00A9\u00B6S\u00C8^\u0097\u00F6\r\u009Bkk\u00A5\u0081u\u00E9\u00B3Q\u00D4\x018\u009D.V\u00BA\u0082\u00835R\r\u00B7\u00D6\u00D7\u008B\u00BD\x0B\u00AB\u00E1\u00D6\u00FA\u00E7\u00D8\u0081P\r\u00BB::\x11\u008E\u0087\u00B8g\u00B4m\u009F\u00AA\u0098\u00D7c\x1FRy\u00D4%\u00A5eS\u00E3\u00F4:\u0086U\u00B6\u00AB\u00C9\x1DT A\u00F3\u009E]\x0F\u00AC2\u00BEY\u00BD\u00E2\u00DC\u00D0\r\u00D93\u00AB\u0097\u00EE\u00DE\u00BExghmye\x16\x1D\b\u00B9o\u0097\x00\u009B[#\u00B4\x05\u00DEX\u00B3Y2\u0086\u0097\u00D4}\u00FF`\u00CF\x1E\u00C1\u00B3\u00F3\u00CE\u0097\u00E48\u00DC\u00F0\u008A\u00B4\x07\u00D9\u00F83$\u00F4\u00D4\u009D\u0088%\u009E<\x11blw6f\u00A4\u00B4\u0087\u0098)Tm\u00F3\u00A0Y\u009C\f\u0084j\x18<\u00B6;\u009B\u0092)\u00E4\u0084!\b\u00CB\u00C0\u00B6g\x16N\u009B\u00E3\u00EE\u00D0\u00BCI/\x1F\u00A2\x19\u00BE\u00A6\x1A\u00EE\x1D\u00CDLe\x17\u00CD{6\u00FE\x0ED\u00B8\u00B3\u00EA\u00F2y\u00B3\u00E8@6\u00D6<\u00F1\u00FA\u00FE7\u00C3\r\u008BH\u00C2G\u00F2\u00BD3\u00CC\u00C8\\*a\u00EC\u0081\b\u009B\u00B3\u00CE#\u00DC\x1Ev\u00EF\u00DD\x13nC\u00DAjgc\u00D3\u00BE\u00E6\u00E6\u00C4\u009F?\u00A2\u00A2\u00B7l\u00AD\x17\u00E33\u00C1\u00FD\x07\u0095\u0092\u00A4;\u00BA\u00D9H\u008E\u00CDvo.\x1F\u00FF\u00AD\u00D6\u009Ff\u00B2\u00B8\u00DF\u00EF\u0081\u00F3\u00F3\u00FD\u00A3*\u00CF\u0088#\u00F3\u00DBS\u00F3\u00FD\x1F\x17VT\u00A5\u00B7\x0E\u00C1\u0093.\u00C52n\u00CC\u00A77\u00AF\u00B8\u00BC\u00DEp\x1BN\u00DA]\u00AE\u009E[\u00F1\u00D5\u00A7`\u00B9:\u0096!h\x02\u00F6\u00EB\u00F29:\u00A2\u008E\x06,\u00D0o2\u00B1\x14F\u00ADV+\u008E\x05\u00D6m0\u0088O\u00ED\u0093e&\u00E1\u00A6\x7F1\u008E\u00CAB\u009B\x1B{\u008C\u00D2\u00D8=\u009B>)\u00AAn\u00D2&T\u00AEx\x7FU\u00B6\u0095XO\u00E9t\u00A9\u00E2\x1C\u00AA\u00D2\u00FAG\u00B9F\x14\u00C2D\u00D2q\u0083\u00D9\x0E\u00C5mO\u00B4\u00DF\u00BFn\b7# \u00C4}N\u00E0\u00B5\x0E\r\x7F|\u00D4\u00E7\u00C8\u00F4F\u00F0X&2\u00BF1\u00CB\u00B7\u00BD4\x0Bf\u00F0\x00\x00\u00E2>K\u00F0{\\\u00A4\u00EF\x13\u00B7\u00AFA\u00DC\u00E3&o\u0091\u00BA\u00A2\u00E1\u00E5\u00B4{v\x00\x00\u00C4]\u00CE\u00C8\u00F9\u00D3\u00A3\u009F\u00FF\x11\u00E2\x1E\x07\\\u00F5\nR\u00F6\u00DC\"\f\u00D7\x07\x00\u00C4=#q\r\\\u00B2\u009Di\u00CB\u00CC\x10|\u00C6\u008A\u00FB\u00E2'\u009FUoz\x16\u00BF<\x00@\u00DC3\x1A\u00DF\u00D8\u00BD\u00E1\u00D3\u00AD^\u00EBm\u0088{Tr\x0B\u008B\u00CA\u00BF\u00FD\u00F7\u00F3W}\r\u00BF6\x00@\u00DC\u00B3\x00\u00BF\u00C7e7|4n:\u009FQ\u00B5\u00CA4q/XZ\u00F5p\u00C3\u00CBy\u00A5j\u00FC\u00C2\x00\x00q\u00CF&\u00C6.~F\x12\x0Fq\x0F\u00C9\x02\u00DD\u0086%O?\u008F ;\x00\x10\u00F7\u00AC\u00C4k\x1D\u00BA\u00D3~8CB\u00F0\u0099#\u00EE\u00C8w\x04\x00\u00E2\u009E\u00F5dN\u0096d&\u0088{naQe\u00E3\u008F\u0090\u00EF\b\x00\u00C4}\u0096`7|4\u0096\u00EE\u00F1g\u00D2.\u00EE\u00C8w\x04 \u00BB\u00C0\u0090\u00BF\u00D1)\u00ADyn\u00C9S\u008D\u00B9\x05Es\u00B6\x05\x16m\u00D8T\u00D9\u00F8C(\u00BB\u00D5j\x15\x1FmOp'!\u0087\u00C6M\u00CD!\u00C8\u0096$~D\u00CA\u00D2o2\u00F5\u009BL\u0099p\u00A6 \u00EEs\x02n\u00F9\u009A\u00F2\u00FA\u00DD\u00F9e\x0F\u00CF\u00B9\u00DF\u008F\u00C2\"2\u00ECK\u009Ey>\u00BB\u00AAM\u00D2\u00F9\u0093\u00FDo\u00BC\u00D6\u00FC\u00CA{\u00AD\u00AD\u00C1r\x16n\u0093\u00A8k\u00DA\u00AC\u00D6\u00E0\u00F1\x0E\x0F\u00B6\u00B4\u00B0\t\"HM\u00A4\x13b\u0084\u0083\u00D6\u00E96\u009CM\u00EA\u00E1\u008BU\u00EA\u00EA\u00EC`\x1AG\x1Fi!\x1D\u00E0\u00CF\x0F\u00BC\u00E5r9\u00A5#\u00BA\x04\x1F\x11C\u00DCV%\f\x07\x1F\u00F7\u00FCG\u00C2\u00F1\x1A\u00C4:D\u009D\u00A6\u00D5\u00F4`\b\u009AD\by\u00A6 \u00EE 4\u00F9e\u0095\u00A4\u00EF\u00F3\u00B5\u008F\u00CD\u009DC.XZU\u00D9\u00F8\u00A3\u00AC\u00CBd'\u00DFG\u0082\u00D2\u00D8\u00B4\u00EBg\x07\x0Eh\u0096i\u0098\u009A\u00D0OZ.N\u00D3Co\u0098\u00C6\u00B1%\u00F4\u00A6\u00B3\u00B3\u00E3\u0082\u00B1\u0087>Z%\u00B05i\u00C3\b\u0092\u00D4\u00DFor9]\u00A4_\u00A4\u0086\u00D2A\u00B2\u0098\u00FD\x14\u00F7\u00C3ve\u00B3\u00F1\x1F7\u00D6<\u00B1R\u00ABeE\u00B3\u009A\u00B0M\u00D8\u009A\u00F4Q\u00FCJ\u00DC\u009BX\x01v \u00D2}\u0086\u00F4\u00B9lagG\x07\u00D5\u008A_M\x18D\u00AC\u00B8\u0098\u009F\u00BD\u009A\u00E3\u008A\u00E9H\u00E9x\u00A5\x1B\u00B2\x03\u0097\u00EEa\u009DNO\u00FA\u00C8\u00C6d'e\u00D7j\u00B5\u00C1m\u00C86\x11\u009BQvD\u00F7W\x1B4\u00B3\x15H\u00D9\u008597\u008A\u00A5\u00AD\u00CA\u00F6)\u00DAmq\u00E7\u00AC\\i\u00F5dgA:\u00E9\x12[\u0093\u00FD\u0094\u00EEp\u008E\u0083\u00C9:f\u00D2\x13\x16p\u00EAM\r\u00A4\u00F2\x19\u0095%\u0099$\u00B27\u00DF\u0091tV\x1C#\u0090\u008D]\u00CE\u0094E\u00A3YFo\u00E8\u00AB\u00ED;\x1A\u008E\u00B7\x1D{ C\u00AE\u009D\u008DM\u00CC\u00EB\x19\x04\u00F3N\u00EA#\u00A8\u00E7\u00F0\u00D6\u00FA\u00E7N\u00F2&\u00B2\u008F+.\u00A6o_\u00DF\u00FFf\x04\u00B3I:\u00F8\u00FA\u00FE\u00FDlT\u00DB\u00B7\x0F\u00BCE\u00EB\u00D3\u009E\u00D9\u00A4\x19'\u00DA?\u00FA\u00D9\u0081\u00B7\u0099\u00A1\u00AE\u00FD\u00D6\u00B7\u00E8+\u00D2\u00CA\u00B2\u00B22\u00AA\u00A7SP\u00AB\r\x1B\x1E?\u00F5\u0087\u0093\x1C\u00C7\u00D9l\u00B6\x7F{\u00EB\x00\u00ADp\u00B4\u00F5\u0088\u00A0S.\u009DN?H]\x02_+\u008Ev\u00C2\x0E\u0084}\u00F5\u0083={\u00E8\u00CD\u00AF\u00DE}\u0097J\u00A1\u00DA\u00B2\"\x18|\u00CF!H\u00AAJ\x18\u00E9\u0097\u00E9 \u00F5s\u00F4\u00FF\u00C1wZ\u00A8\u009E$\u00FA\u00B4\x07qF=\u00E6\u00F4i\t\u0095.\u00CE\u00E3\u00C1\x0F\u00B5\u00B8\u00B1\u00E6d;\u00AF\u00EF\u00D4\u008CN\u00A7\u00EB`\u00CB/\u00A8)\\N\u00A7V\u00BBjgS\x13\u00B5!\x15\u00B4\u00B5\u00BE\u009E\u009F\f\u00C4d\u00A2]\u00B1V\u00A5\u0083ze\u00FAD}$\u00B8\u0087\x0F\x1D\u00A2\u009D\u00B0\u00CE\u008F\u00FA\u009B\u00E3\u00C7\u008E\u00B1\u0091{_y\u00F5U\u00AA\x12+\u0097\u00CAR\x0B\u00A5\u00D3\u0095\r\u00BB\u00B8\u00D1\u00E9\u00F5\u00FC\u00C9\x12\u00BC?;}b\u0085i\u00CD[f35\x025\x11\u009B\u009F\u0084\u00CAmljb'\x1A\x13w\u00C0\u00B9\u00C7\u00A5zk\u00BFQ\u00F1\u00C2\u00BF\u00CC\u00EE\x10<\u00C9z\u00F9\u00B6\u0097\u00B24\u00C8\u00CE\x04Z\u00BA\u0084T\u008Cd\u0085t\u0081^]\u009D\u009D\u00CC\x00\u0092\u009A\u0090\u00B5\u00AF\u00D2h\x04+]C\u008A\u00B0cG\x03\u009B\u0086\u0082Dd\u00F7\u00DE\u00BD\u00A4\u0086\u00DD\u00DD\u0086}\u00CD\u00AF\u00BE\u00B1\u00FFMR\u00B1\u0093\u00E1c\u00B8\u00A4\u00EC\u00BC\u0086\n\u00EE\u0098\u0084\u009BD\u0087\u00F6C}\x06I\u008CN\u00AF\u00E3g\u00CF\x10\u00CC/\u00AD\u00B3e\u00CBVV\x10\u0093\u00B9e\u009Ae\u00B4\u00F3\u00AF\x7F\u00E3\u00EBT\u0093\u00ED\r\r\u00B4\x02\u008B`\u0090\u00CAS\u00B9\u00BCnv\x1BH\u00B0HIm\u0082\u00E7?!\u00C8\x1F\u00ABvWG'\u00D3\u00EE\u00ED\r;\u00A4\u00CANP\u00CD\x07\x05\u00ABK*L/\u00DEn\x0F\u009A\u00A53b\u00D3\u00A5\x03\u00FD\x14\u00E7J\u00A5\u0082\u00E8=\u00DF\u00BBL7\u00EF[\u0084\nPk\u00D4\u00D6\u00D5\u0092\"\u0097\u0095-\u00A1\u00DA\u00BE\u00F1\u00E6\u009Bla\u00C8\u00A6\u00A0V\u00A5ud\u00ED/\u00B4\u00B9K\u00DC\u0084\u0094\u009D\u00BA\rV\u00BA\u00A9\u00AF\u008F\u00DE\u00B3\u00CB\x0Bj\"\u00D6,Tg:\":\x05\u00ECd\u00D1Ov\u00EE\u0084\u009E\u00B2\u009DjN-@\u00CD\u00A2V\u00AB\u00C5\u00E0\x12+\u0097M\u00AF\u00CA\u00AF\u00FCJ3\u0094\n\u00E2\x1Eg\u0088\u00E6\u00E1\u00EF\u00FD\u00EB\u00AC\f\u00C1\u00E7\x16\x16i\u00BE\u00FF\u00E3E\u008Fo\u00CA\u00DEC\u00E0\u008A9Y\x14\u0085\u00AE\u00FE\u0099\u00B41g\u00CDT\u0098T\u00924(\u00E4T\u00CB\u00B4\x1A\u00BDh+\u00D2;\u00E6d\u00E9c\u0084\u0088\u00FC\u00F6\x1D;x'{\u00AC\u008D\u008F\u00A8\f\u009A\u0099F\u00D3\u008B\u00B7\u0093\u00C2\u009Cs\u00FC4u=\u00C6\u00DA:\u00F9\x14HL\u00CB\u008C=\u00C6\u00B7\u00DFz\u008BV\u0090NCA\u00E5\u00B2\u00CB\x0E*\u009AU\u0092\u00BF\x1Ap\u00F2\u00D3$\x1D>\u00F4n1WLu\u00A4\u00E5\u00D4\u008B\u0090W\u0095\u00DD\u009E\u00D5j\u00B5\u00D4\u00C1\u0090\u00A6\u00AF\x14FH\u00A7\x0B\x0B\u00EAf\"\u00CC\u0095A\u00EB\u00B0C\x0EVjv\u00F1A\r%v\x0F\u00F4\u009E\x16\u00B2\u009A\x04\x13r\u00CCw\u00EA\u008AH\u008EY\x0F'F\u00AB\u00C8\u00E6S\u0089\u00B47\u00DA\u00C4\u00D8\u00D3C_\u00D1\x19a\u00AD\u00AD~\u00D0\u00E6\u00E2\u00C9b\u00EF\u00A9\x02T.u\x12\u00D4\\\u00A4\u00E3\u00D4\u00D9\u0088\u00D5`\u00E5\u00D2G:\x0E\b\x14\u00C4=\u00D1\x10M\u00C5\x0B\u00FB\u00C8\u00C5\u00CF\u00A6\u0083\u00E2\u00AAWT\u00FF\u00F3O\u00B3=\u0093\u009D\u009Fh\u00CD``\u0091_\u00B2\u0084\u00F4\u0086\u00C5@TBX\u0096\x044\u00DC\u008C\x10\u00B2\u00FBx$1\u00A2\u00DF\u00A4\r#\u00A8\x06\u00D3_\u00FA\u00C9\x0B\u0096\u00B0\u00DA\u00EE\u00BD{\u00C8?\u0092\u00E23\u008D&\u00E5\u00A2\u00D7\u00BAP\x1D\u00C9\x03\u00C7\u00FA\x04\x19p\u00AE\u00B88j\u00BFE;\u00A4=\u00D3\u00FE\u00C9n\u0093D\u00D2\u00B1P)\u00EF\x1Dm\u0095ZiRL\u00DE\u00D5v\x1B\u0098\u00B8S\u00E5\u00E9\u00A3t\u00DE\u00D4\u00E2b\u00CEj\x1Dv\u00B9b\u009A\u0089\u0097\u00D9p\u00BA\x04\u00A1z\u00B2\u00FB\x01\u00D4U\u00B0\u009At\x1B\u00CE\u0086\x0B\u00FA\u00CB\u00CE\u00C8\u00FDIP\u00DB\u00DA\u00A8}\u00E8\x14\u00B0\x0B)\u00AA9\x0B\u00A0\u00D1\u0081\u00D3W\u00B5\x0F\u00E6\u00FFc\x17\x10t\u00EEhM\u00B6>+\u0082N\"\x15JmI\u00B2\u00DE(\u00B4mpo\u00C4N\u00A2\taw\u00C4\u00DC\x13\u00A4\u00B4\u00E69\u00F2\u00EFv\u00C3G\u0099?\u009DST\x16m\u00D8\u0094uY1\u00E1\u00CC\u00A3\u0090\x16\u00C2O\u00F7L\u0097\u00FC$\u00A9[\u00EA\u00EB\x0F\u00BF{\u00E8\u00B5\u00E6W\x04\u0097\u00DD\x10Z\u00A0\u0097iN\u009EhgnWT\u008A\u009D\u008DM\u00B4\x1FA\x19\u0097\u00906\u0091B\u0091\te1\u00FD\x10\u00FE\u00BDa\x07\u00AD\u00BC\u00B9\u00AE\u0096\u00BE\u00FD\u00C9\u00FE\u00FDL\u00D4\u0098\u00BE3\u00CB\x19,F\f\u00D2\u00A9wx\u00F7}\u0096J\u0089|h\u0082O\u00FF\u00C5O\u00F6\u00BF!\u00C4R\u009E#\u00A9\u00ED\u00EC\u00E8\u00B0\u00D9lT+\u0099\u00EF\u00D6jW\u0099L}\u00ACDA\"\u00A7}KmB\u00CE\u00F7\u00B5\u00E6\u00E6\u00D7\u0085z\u00C6\u00D8\u00AA\u00A4\u00AAt\\\u00D4\u00E1m\u00D9ZO\u00C5\u00AD\u00D3\u00EB\u00A8\u00FF8|\u00E8\u0090N\u00AF\x17g}\u008A\x00ur\x06\u0083\u00A1\u00B3\u00A3\u0093\u0085\u00D1\u00E9E\u00CD\u00BA{\u00CF^\u00AA$\u00C9:\u00F5O\u00D4\x7F\u00B05\x07\u00CD\u0083\u00E2\u00C9\u00A26\u00A7\u009Ft\u00FA\u00E8(\u00A8\x0F\u00D8\u00BE\u00A7\u0081\u00D6\x7F\u00AF\u00B5\u0095j\x12\u00DCIS\u00E3\u00D3u\u00CC?\u00ED\u00DD\u00B3N\u00A7\u0083:\u00E1!&\x05\u00F0Z\u0087\u00ACg\u00DA\u0092:\u0096dR\x1Fb\u00CA-,Z\u00F2\u00CC\x0B\x18T I\u00B0\u00BB\u00A0\u00DB\x1F\u00C4\u00D9\u0081\f\u00EA\u00A2\u008E\u00B6\u00F2S]\u0093\u00D0\u00A35\x10\u0096\u00C9,X\u0096$W\u00FDW\u00D9Xy\u0096\u00EF\beO\x12t)@v^\u00B8\u0087\te\x0F\rypj\u00A59>\u00DF)\u009C{\u00A6\u0093\u00BC\u00B1$\u0093\u00E4\u00DC\u00E7\u00AF\u00FAZ\u00F6f\u00C5\x00\x00 \u00EE\u00A9c\u00E2\u00F6\u00B5\u00E1\u008F[\x15\x0F\u00C1'C\u00DC\u0097<\u00FD|Vg\u00C5\x00\x00 \u00EE)\u00C5\u00EFq\u00DDi?\u00ACl\b^Yq\u00E7\x07\x15x\u00F1\x1F\u00B9\u00EA\x158Y\x00@\u00DC\u00C1\u00CCPv,I\x05\u00C5\u00BD`iU\x15F\x01\x03\x00\u00E2\x0E\u00E2f\u00DCtN\u00A9,I\u00A5\u00C4}\u00D6\u00E4;\x02\x00 \u00EE\u00E9D\u00A9,\u00C9\u00C4\u00C5\x1D\u00F9\u008E\x00@\u00DC\u0081\u0092\u00F8=.\u00DB'm\u00AE\x1B\x7FI\u00A3\u00B8\x17,\u00AD*\u00DF\u00F6\x12&Q\x02\x00\u00E2\x0E\x14f\u00E4\u00FC\u00E9\u00D1\u00CF\u00FF\u0098\x16qG\u00BE#\x00\x10w\u0090D\x12\u00C9\u0092\u008C[\u00DC\x17?\u00F9\u00ACz\u00D3\u00B3h|\x00 \u00EE \u0089\u00F8\u00C6\u00EE\r\u009Fn\u008D#\x04\x1F\u0087\u00B8#\u00DF\x11\x00\u0088;H)\u00B63m\u00E3\u00A6\u00F3I\x15\u00F7\u0082\u00A5U\x0F7\u00BC\u009CW\u00AAFk\x03\x00q\x07\u00A9c\u00A6Y\u00923\x12\u00F7\x05\u00BA\r\u00E5\u00DB^B#\x03\x00q\x07i\u00C0k\x1D\x1A\u00FE\u00F8\u00A8\u00CF\x11S\u00FB\u00C7(\u00EE\u00C8w\x04\x00@\u00DC\u00D3O\u00ECY\u0092\u00B1\u0088{\u00DE\"uE\u00C3\u00CB\u00C8w\x04\x00@\u00DC3\u0082X\u00B2$\u00A3\u008A;\u00F2\x1D\x01\x00\x10\u00F7\u008C#j\u0096ddqG\u00BE#\x00\x00\u00E2\u009E\u00A1D\u00CE\u0092\f'\u00EE\u00C8w\x04\x00@\u00DC3\x1D\u00BF\u00C7e7|\x142K2\u00A4\u00B8#\u00DF\x11\x00\x00q\u00CF\x1A\u00C6M\u00E7lg\u008EE\x15\u00F7\x05\u00BA\rK\u009E~\x1EAv\x00\x00\u00C4=k\b\u00CE\u0092\u0094\u0089{\u00F9\u00B6\u0097\u0090\u00EF\b\x00\u0080\u00B8g\x1F~\u008F\u008B\u00F4}\u00E2\u00F65\u0099\u00B8#\u00DF\x11\x00\x00q\u00CFz\u00C4,I&\u00EE\\\u00F5\nRv\u0084b\x00\x00Q\u00C9C\x13d2\u008B\x1E{\u00AA\u00A0\u00AC\u00D2v\u00A6M\u00A5\u009A@\u00BE#\x00\x00\u00CE}V\u00E1\x1B\u00BB\u00E7\u00BCzy\u00A1\u00BE\x06M\x01\x00\u0080\u00B8\x03\x00\u00C0\u00DC%\x17M\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00\x00\u00C4\x1D\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00\u0092\u00C8\u00FF\x0B0\x00\u00AF\u00EEz\u00D5u\u00CE\u00FE}\x00\x00\x00\x00IEND\u00AEB`\u0082";
						
					var binLogo3 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F4\x00\x00\x00\u0096\b\x02\x00\x00\x00\u00A7\u00FF\u00ED8\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1C^IDATx\u00DA\u00EC\u009D[TTW\u009A\u00C7A\u00C0P(*`\fbyE\u00CA\x18T\u00CA\x0Ec\u00C04\u0099\b\u00B9\u00B5\u00D2\u00B1\u00D7,4Y\u009D\u00A58/\x11z^\"\u00E9\u0097D}\u0099\u008E\u00E9\u009E\u0087&\u00AE\u00D5\u00BD\u009A\u00A4_Z\u00925ky[kb\x1Am'\x19\u00B0\u00A7\u009D\u00B6H\u009AD\u00CAH\u0090B\u0091K\t\u00C4PU\\\u00AB\n\u00AA\n\u00E6;g\u00EB\u00F6p\u00EAJq\u00EA\x06\u00FF_\u00D7\u00B2\u00EBr\u00CE\u00DE\u00FB\u00EC\x13\u00FE\u00FB\x7F\u00BE\u00F3\u009D\u00BD\u00E3\u00CDfK\x1C\x00\x00\u0080\u00B9\u00C5\x02t\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\x03\x00\x00\u0080\u00B8\u00CFo\x06'\u00AC\u00B7\u0086\u00FB\u00D0\x0F\x00\u0080\u00C0ID\x17D9$\u00EB\u009F\u00DE\u00BB>\u00EEr\u00FC\u00F3\u008AM\u00CF\u00AFx\x12\x1D\x02\x00\b\u0084x\u00B3\u00D9\u0082^\u0088Z\u00FEz\u00FF\u00D6\u00FF\u00DEo\u00E3\x1F\u00D7.Z\u00FE\u00FA\u009A\x1D\u00C9\tI\u00E8\x19\x00\x00\u00C4=&\u00B1\u00BB\x1C\u00A7\u00BB\u00BF\u00EA\x1A\x1B\u0090}\u00BF4)\u00E5\u00F5\u00B5;2\u0093\u0097\u00A2\u008B\x00\x00\x10\u00F7\x18\u00A3\u00DF>t\u00BA\u00EB\u00AB!\u0087\u00D5\u00DB\x06{Wm\u00D7\u00A6\u00ADAG\x01\x00 \u00EE1C\u00B3\u00A5\u00FB\u00C2\u00BD\u00EB~7\u00CB[\u00B6\u00FAg\u00EA\x1F\u00A1\u00BB\x00\x00\x10\u00F7h\u00C7\u00EEr\\\u00EE\u00FBV?\u00D8\x13\u00E0\u00F6O$/}}\u00CD\u008Ee\x0BS\u00D0u\x00\x00\u0088{\u009428a=\u00DD\u00FD\u00D5\u00F7\u00F6\u00A1\x19\u00ED\u00F5XB\x12\u00E9\u00FB\u00BAE\u00CB\u00D1\u0081\x00\x00\u0088{\u00D4\u00D196@\u00CA>\u00EEr\x04\u00B7;\u00B2$\x01\x00\x10\u00F7\u00A8C\u0096\u00EF\x18\x1C\u009B\u0096d\u00FEl\u00D5\u008F\u0090%\t\x00\u0080\u00B8G\x1E\u00BB\u00CB\u00F1\u00E9\u00BDo\u00DA\u0086\u00FB\x15)\rY\u0092\x00\x00\u0088{\u00E4\u00F1\u009B\u00EF\x18\x04\u008F%$\u00BD\u0092\u00B9\x05Y\u0092\x00\x00\u0088{dh\u00B6t_\u00EE\u00BF\x19t\u0090\u00DD7\u00C8\u0092\x04\x00@\u00DC#\u00C0\u00A7\u00C6o\x02\u00CFw\f\x0EdI\x02\x00q\u0087\u00B8\u0087\u008F\u00E0\u00F2\x1D\u0083\x03Y\u0092\x00@\u00DCA8\u0098e\u00BEcp\u00BC\u00BCrKAF6:\x1F\x00\u0088;\b\t\u008A\u00E4;\x06\x07\u00B2$\x01\u0080\u00B8\x03\u00E5Q6\u00DF18\u009EH^\u00FA3\u00F5vdI\x02\x00q\x07\u00CA\u00D0o\x1F\u00FA\u00D4x=<Av\u00DF K\x12\x00\u0088;P\u0086\u0090\u00E6;\x06\u00C73\x19\x1B^Y\u00B9\x15\u00A7\x06\x00\u0088;\b\u0092\u00CB}\u00DF~i\u00EA\u0088\u00C2\u0086=\u0091\u00BC\u00F4\u00D0\u00FAg\x11\u0082\x07\x00\u00E2\x0Ef\u0086\u00DD\u00E58u\u00F7\u00EF\n\u0086bT\u0089I\u00AA\u0084$\u00F3\u00B8b\u00CF\u00B2\"K\x12\x00\u0088;\u0098\x19\u00A1\u00C8w\u00AC|\u00AA0{I\u00C6\u00D5\u00FE\u00BB\x17:[\x14,\x16Y\u0092\x00\u00CCa\x16\u00A0\x0B\x14\u00A4\u00D1t\u00A7\u00F6\u00EE\u00DFC\x14d/\u00CA\\O*O.^\u00A9\x02\u00FF\u00BB\u00EF\u00E6\u00E9\u00EE/\u00ED\u00D1tK\x00\x00\x00q\u008F.\u00C4\u00F5\u00AC\u00BF$\u00B9\fi-\u00E4\u00DF\u008Fn/\u00C9Z\u00B4D\u00A9\x02\u00DB\u0086\u00FBO\u00DD\u00FD{\x7F\x14$\u00F3\x00\x00 \u00EEQ\x07\u0089#Id\u00A83\u00D9/t\u00B5\u00F4Z\u0087\u0093\x13\x12\u00AB\u00B6>W\u00B4r\u00BDR\u00C5~/6\u00FE\u00D6p\x1F\u00CE#\x00\x10w\u00F0\b\u0092Eeo\u009Fz\u00A3wl\u00B8\u00E6;]\u008BE\x18B\u00F6\u00AE\u00CD}=[\u00ABT\u0088f\u00DC\u00E58\u00D3\u00FD\u00D5\u00E5\u00BEoq6\x01\u0080\u00B8\x03\x01\x12\u00C43a\u009C.\u00C6\u00E6t\u00FC\u00A9\u00AD\u0089,<\u00BD\u00CF\x7F\\]\u00F9T\u00A1\u0082!\u009A/M\x1D4J!\x04\x0F\x00\u00C4}^\u00C3\u00F2\x1D#\u0092\u00C9~\u00B5\u00EF.Yx\u00BB\u00CB\u0099\u0095\u00B2\u00E4\x17O\u00ED\u00DC\u0092\u009E\u00A9T\u00C9]c\x03'\r_ \x04\x0F\x00\u00C4}\u009EB\u00F2G\"HR\x18\u00A9\x06\u00DC\x196\u009D\u00B8^\u00CFB\u00F0\u00874\u00F9{\u00D7\u00E5*U2]\u0085|t\u00FB\u00AF\u008D\u00A6;8\u00CB\x00@\u00DC\u00E7\x17$|$\x7F\x11\u009FT\u00C0\u00E6tT\u00DF\u00F8\u00DB\u00D5\u00FE\u00BBq\u00A1\u00C9\u0092\u00FC\u00D4\u00F8\rB4\x00\u00C4.x\u0088i\x06\u0090\u00D8]\u00EE\u00FBV\u00D9E\u0094^Rk\u00E8\u00A5HQd\u00E4I\u00EE\x15l\x1B\u00E6\u0092\x04\x00\u00CE}^p\u00BA\u00A5\u00A9\u00B9\u00CF\x18\u00B5\u00CD#/\u00AFl\u0081\u00ED\u00DF\x0F\x1C\u00BB\u00F09\u00CE;\x00\u00B1H\"\u00BA @,6k\u00CB\u00F7B2x\u00AA\u00E3\u00B1\u00C9\u00C5\u00CEx\u0085\u0086\u00C5\u00CF\u008D\x06UbRQ\u00E6zf\u00BDk\u00BE\u00D3\u00B9k4\u009B~\u0080~\u00BA3l\n\u00DB\u00F1\x0E\u00F4;:\u00EE\u008C\u00D0\u009B\u00FFik\x7FaSN\f\u009D\u00A9\u009A&\u00F9\u00E5\u00CB\u00DEMyY\u00A9^\u00AF?>k\u00BBqodP\u00F6ev\u00DA\u00E3/eo\u00E6\x1F\u009D\u00FD\u00C3#\u0097o\x05\u00D7\u009E\u00B4C;\u00F8\u00FB\u00C9\u00DB\x7F\u0089\x1B\u0095?R\u00B0\u00E0\u00C9\x7F\u0089K^\u00E6\u00A3\u0084\u00A9\u0081\u00D6)\u00A3N~\u00D1\u00AD.\u008C_\u00BE\x19\x7F\u0098\x00\u00E2>k\x15\u00EEheoF\u00C6\u00C6\x17\u00BBH\u00DF\x1D\x0B\u0092\u00E2\x15)\u00F9Bg\x0B\u00A9\u00F6\u00EB\u00D9\u00DA\u00AC\u0094%G\u00B7\u0097\u00FC\u00A9\u00ED\x1F\u00E1\x14qw\\\u00CE\u00A9\u00BE\u00BB\u008E\u00DE\u00FB\u00A3\u00EC\u00E3\x7F~\u00DD\x1C[\u00E2\u00DEa\x19p\u00BB\u00A6\u0099\u00F0\u00B6qSo\u00D7\u00D5\u00EE\u00DB\u00B2/i$(Z\u00BBQ\u00FA\u00CD\u00A4\u00DD9\u00D1i\u009E}\u00DB\u00E2\x17gN\u00BA\u00C9\u00F4dg\u0083\u00A0\u00EF>\u00C4\u00BD\u00F3\u00CA\u00D4\u00E8\u00F4G\u00E4\x12\u0093\x17,{\u00F0 [\u00A3NG/\u00F6\u00FE\u00AD\u00AA\u00AAy\u00FEwz\u00FE\u00DCYc\u008F\x11\u00BD\x11\u0087\u00B0L\u00E0\u00B6\u009DT\u0080\x7F\x1C\u00B5\u008F;-\u00F1qv\u00C5z\u00EF\u00A6\u00B9\u00FF\x0F\u00DF]c\u00D9/\u00E4\u00D3\x15|\x00u\u00A6X\u00C7\\]\u00AD\u00E3\\\u00D9\u0089\u00FB#\u00A3d\u00DE\u00E7\u00E4i\u00ED\x1D\x19:\u00D3\u00F2\u00B5\u00EC\u00CB\u00E4\u00C4\u00A4\u00D7r\u00F3\x15\u00BC;=M\u00DC3\u00B7\u00BB\u009B\u00F4\u00A9\u0081[qN\u00BBWe\x1F\u00BC+Wv\u00D1\u00B6\u0093\u00BE\u00B3\u00F7&\u0093\u00A9\u00BD\u00DD\u00C0^\u00F8S%eGo@\u00DC\u0083\u00B1\u00ED\u009C\t\u0097k\u00D4\u00E2H\x18SL\x02\u00D8\x03\u00A8M?\b\u00A6c\u00EF\u00DA\u00DC\x7F\u00DD\x14*}\u00F1\u00C1\u00E0\u0080\u00F3v\u00CB\u00D8\u00C0\u00B0|na2\u00EFs\u00EF\u009C\u00DA\u009C\u008ES\u00CD:\u00F7\u00EF_\u00CB}\u00DAG\fG\u0081?\u00B9u\u00BB\u00E4_9\u00EDS\u00FD\u00D7\u00BD\u008A\u00BB\u00FBOd\u00DBI\u00DC\x01\u0080\u00B8+k\u00DB\u00A5\f\r\u00DB\u00A7,\tS\u0093\u008A\u00C9\u00CD\u00E9;\u00CD\u00EC\x01\u00D4\u00DC\u00B4Le\x1F@\u00F5\u00CB@\u00B7\u00D3\u00D06lw8\u00DD\x7F\u009A\u0093\u00E6\u009D\u0094\u00DDb\u0097\x0Fc/n\u00D8\u00BCeEVH\u00EB\u00F5h\u00DE\u00DDc5\x0F\u00B0\x0FN\u00F57\u00FB\u00B0\u00ED\x00x\x031\u00F7`l\u00BB\u00941\u00FBD\u0092#!q\u00D9T\u00C2BeB\u00F0W\u00FB\u00EE\u00DE\x196\u00FD\u00E2\u00A9\u009D\u00EC\x01Te\u00E7p\u00F7\u0088\u00CB9\u00D5\u00D9j7\r\u00DB|l\x13s\u0091w\u00DF|\u00D6v\u00C3=4\u009F\u009F\u00B5Vz\x13\u00D5/*\u00ED\u00AA\x05\u00CBT\u00C1\u0099\u00F7\u00C9[\u00FF%\x17\u00F1\u0081V\u00F7\x1B\u00A4\u0093\u00B0\u00ED\x00\u00E2\x1E~\u00DB\u00CEq\u00B8\\\x0ES\u00DC\u00A2e\u0089\u00F1\u00AA)E*\u00ED\x1D\x1B>q\u00BD\u00FE\u0090&?{I\u00C6k\u00D9yv\u00973t\x078<\u00E4\u00B8\u00DBf\x1Bw\u00F8\u00A9\u0082\u0099\u00F7\u00B9\u00A1\u00EF\u00DEn\u00A2\u00BE\u00BAi\u00DB\u008C\u00CAI\u00D6\u00AEZ\u00B8.=H\u00F3\u00DEy\u0085\x04]\u00FA\u00E5\u0094Q\u00E7.\u00EE\x1E\u0093d`\u00DBA@\x1E\x02]0\x1B\u00DB>\u00CD\u00C2\x0F:\u00E3G\x12\x15\f\u00D1\u00D4|\u00A7\u00FB\u00DC(\u00DC\x14JN\b\u00D5\x18<\u00D0\u00EF\u00B8us\u00C4\u00AF\u00B2s\u00F3>\x07Nh\u00EF\u00C8\u00D0\u0085\u00B6\x1Br\u0099NL:\u0094W\x18\u00CE\u009B\x1C\u00EE\u0091\u00F7\u00A9\u00C1N\u00B9\u00DC\u0093m\u0097\u00DDh\u0085m\x07\x10\u00F7\u00B0\u00D9v)#\u00A3\u00E3\u00F1C\u0089\u0093\u008E)\u00A5\x1A@\u00E2~\u00CA\u00D0D\u00CE\u009D^\u0096q\u009B\u0082\u0087\u00E6rN\x19\u00DB'X&{\u0080\u00CC\u0081\u00C8;\u00BB\u0089jw{\u0092\u00E0\u0090\u00B6 M\u0095\x12\u00CE\u0096\x04\x12y\u0087m\x07\x10\u00F7\u00C8\u00DBv\u00CE\u00A8}\u00DCa\u0089\u008F\u009FP2K\u00F2\u00D8?.\u00FF\u00E1\u00BBk\n.\u0090\u00ED\u009E\u00EF\x18 \u00B1n\u00DE=\u00DED}-\u00F7\u00E9\u00EC\u00B4\u00C7#\u00F0\u00B7\u00E7n\u00DE%\x11\u00F6\u00A9\u00D1~\x0F\u00B9\u00ED\u00B0\u00ED `\x10s\u00F7\u00E5\u00F2n\u00DE\u00EF\rbG1\x04\u00EFZ\u00BA$\u00D9\u00B5H\u00B1\u00F9\x00z\u00C7\u0086\u0095*jtp\u00B2\u00C30fw\x04\x13\u00C7\u008F\u00E9\u00C8\u00BB\u00B7\u009B\u00A8\u00F4\u008AH{<D\u00DE\u00C5\u009CH\u00E1{\u00C1\u00B6_\x0B\u00DA\u00B6\u009BL\u00A6F\u009DN\u00AFo\u00BEg|\u00F08\u00CF*\u00B5:/O[\\R\u00AC\n\u00E0\x02\u0085\u00ED\u00DBn0\u00D8l\x0F.\x16sr49\x1AMAaaFF\u0086\u00DF\u00AAo\u00E8\u009B\r\x06\u0083t\u00F7\u00F4\u00F4t\u008Df\u00D3\u00EE\u00D2R\u00F7\u00DDYS\u00E9\r\u00FDD\u00E5\u00B3//\u00D6\u00D55\u00EA\u00AE\u0099\u00CDfVu\u00D9\u00FE}j\u00F5jY\x0B\u00E9\u00C53\u00D9U*\x15\x1D\x1D\u00EDN\u008D\u00A4r\u00DA\u00DB\u00A1^\x10w\u009F\\\u00ED\u00BAm\u009F\u00C5l-C\u00C3\u00F6T\u00E7c\u0093\u00A9\u008AMT\u00A0\b\x03\u00DD\u00CE\u008E\u009EY\u008D\x131\u009A6\u00E3\u00ED&*\u00D9\u00F6H^8\u00BB\u00A5\u00CD<\x10wA\u00E5\u009B\u0083\u00B3\u00ED\u00A4\u008C\u0097.\u00D6\u00C9\u00BE$\u0095\u00A7\u00D7\u0095\u0086\u00FA\u00B2}\u00FB\u00B9\u0086\u00BAC\u008A\u00FCq\u00ED)\u00A6\u00AA\u00D3\u00BE\x17\u009F\t\u00A2bw\u00EF)\u00DDSZ\u00EAq_\u00A3\u00B1\u00E7J}Cc\u00A3\u0087\u009CN*\u0090\u00BE\u00A7\u00D7\u0081\u0083\u00E5\u00B2\u00DA\u00CD&\x13o-\u00FDd\u00B3Y?\u00A8\u00AE\u00E6c\x12\u00ABZ:$P-\x1F\u00D5\u00D4\u00C8ZH\u00A3\b+\x7FWq\u00B1*E\x05\u00ED\u0082\u00B8\u00FB\u00B1\u00ED\u00EEZ0SF\u00AC\u00E3I\u00E3\tIiSJMT0\x1B\u00C4 \u00FB\u00F8\u00F7\u00E6\u00D9\u00C6vb\u00D1\u00BC\u00F7\u008E\f}~\u00C7C\u0084m\u0096\u009E}\u00E4r\u00EB\u0082d_\u00F7`S_y21s\u00C9\u008C\u00CC\u00FB\u00D4`\u00A7\x10\u0090\x19h\r\u00CE\u00B6\u00BF\x7F\u00E2=\u00A92\u00CA\u00FF\u00AB\u00B6\u00D9>\u00F9\u00B8\u0096\u00C9\u00A8G\u00C3\u00CE~\u00F5\x01\t1\r\x00\u0087++dW\x00\x1EG\x14w\u00A8|Rj\u00F2\u00D7^\u009A'Wv\u00E6\u00FAy]~[x\u00A5\u00A1\x01\u00DA\x05q\x0F\u00ADm\u009F\x16\u00A2\x19P2K28\u00ACc\u00AE\u00F6\u0096\u00B1q\u00872)\u00951g\u00DE?sK\u008Fa\u0090\u00E2\u0093\u00BE\x07\u009D$\u00E3\u00EC\u00F7s;z\u00D2\u00EE\u00BF\u00C3=\u0098w\u00E35!s&(\u00DB\u00CE\u0094\u0091\x04\u00B1\u00B8\u00A4d[\u009E\u0096\u0094\u0094\x14S\u00DF\u00AC\u00BFX\u00F7g\u00EEv\u00CF\u009F;\u00CB\u00C2\x17\u00D2\x1D\u00F5\u00FAf\u00A9n\u00E6\u00E4hv\u0095\x14\u00E7\u00E5iy\u00E4\u0084k7Y\u00E9\u008Fkk\x0FWTJwW\u00AFV\u00F3\u00F7\u00DB\u00F2\b-\u00AF\u0082\x06\u0083s\u00E7\u00CEr\u00C9\u00A6+\u0083_\u009Dx\u00DFc\u00E3\u00A9X\u00B6\u00D9*\u00B5\u00BA\u00B8\u00B8\u0084v'\u009F\u00CE\u0095\u009D\u00DES\u00CB\u00F9\u00C6*\u0095\u008A\u00AEBX-\u00C2\x04\f\x06\u0083\u00F4\x18\x01\u00C4=\u0084\u00B6]\u00CA\u00D8\u00A0S\b\u00D1,\u008AL\u0088\u0086\u00CF\u00EF\u00A8\x14s&\u00E7\u009D\u00C6\u00EF37\u009B\x0Ei#y\u0097\u00D2\u0083y\u009F\u00DD#\u00A9\u00BB\u008A\u008B\u00F7\u0094\u0096rM\u00A47\u00E4\u00D3\u00F3\u00B4y\u00DC\x14\u0093\x7F\u00BFTWw\u00A0\u00BC\\j\u0099?\u00A9\u00AD\u0095\u0096@\u00BA\u00C9?\u0092zR\u0081T\u00C2\u00C9\u00EAj\x16F\u00BF\u00A1\u00D7\u0093\u00DCK\u00ED\u00BF\u00A0\u00E69\x1AU\u008A \u00B8\u00B2a\u0083\u00F4\u00F7HU\x15\u00AF\u009D\u00F4\u0097dZ\x16CgP\u00B1\u00C2UEA!o\u009B\u00D4\u00E3\u009F?{\u008E\x07\u00F1I\u00FD\u00A9L~\u008CTcFa!\u00B5\u00E7JC\u00FD\u00F9s\u00E7\u00A0`\x0F|\x03\u00BA t\u00B6}\u00DA%\u00BC\u00D2Y\u0092\x01\u0086b\u00FA:&\u0094Uvn\u00DE\u00E7\u00C6\u00B9n\u00F9\u00A1\u00EF\u008E\u00E5\u0087\b\u00FF\x11\u00BA\u00CF6\x13\u0094m'\x0E\x1C,'yu\u00BFkJ\u00DFH\u00BDvc\u00A3\u008E\x04\u009D\x7Fl\u00A8o\u00E0\u00BAI\u00BE[\u00AA\u00EC\u008F\u00BC\u00B9z\u00B5t< \u009B,\u00DB\u00E0\u00AD\u00AA*\u00AA\u00C2\u00E3\x1DW\u00AA\u009D\u009C\u00F8\u00A3\u00AB\u0084f\u00BD\u00B7\u00F6S\u00ED\u00D2Z8d\u00CC\u00A5\u00B7O\u00A5\u00CA>}`+\u00A11\x06\n\x06q\x0F\u0093m\u00E7(\u009E%\u00E97\x14\u00D3\u00D5:\u00DE\u00D37\x1A\u008A\u00C2\u00C9\u00BC\x7F\u00DB\u00DB?7\u00CE\u00F8\u0099\u009B_G\u00B6\x01\x1Es\u00DE\u0083\u00B3\u00ED>n\u0096\u0092\u00EC\u0092t\u00F2\u008F|^\\A\u00EBu\u008F2s<*\u00BB\u00D4\u009E\u00B3\u00F7d\u00C0\u00F5\u00FA\x19\f\u00F0d\u00FC\u00F9{\u00B3\u00C9\u00F3\u008C\u00D6\u00A4\u00DA\x07=)\u00BB\u00D8B\u009DT\u00C1U\u00E1}(\x01\u00E2\x0E\u00DB\u00EE\x1F\u0087\u00CB5br\u00C4[\x13B}\x14\u00A3\u0083\u0093\x1E\u00E7wT\u00D2\u00BC7]\u008F\u00B9\u0093\u009B\u009C\u0098\u00E4~\x13\u00D5b\u00B7z\u00BC\u00DD\u00EA\x17\u0095v\u00D5\u00A2\u00E77\u00FAx%\x04<\u00F3\u008CW\u00F3\u00AEhn\u00BB4\x18b0<0\u00C2Fc\x0F\x0FU\u00AFR\u00AB}';J\x07\u008FvC\u00A0s\u00EA\u009AL&\u00E9Xb\u00F2\"\u00EET\u00B87\u00D5\u0096\x0E$\u00C5%\u00C5\u0090\u00A9@@\u00CC=L\u00B6}Z\u0088fhBX\u00CE)dY\u0092\u00B3\u00CFw\f\u0084o\u00FB\u00FA\u00C9\u00BCo\u00CD\u00CA\u008C\u00A1\u00F3{H[\u0090\u0095\u00BA\u00EC\u008E\u00F9\x07\u00D9\u00A3L_t\u00B4\u00FES\u00D6\u00DA\u0099>\u00A4\x1A\u00F4\u00DC2\u009E\u00CD\u00BB\u00DBl3qJ?\u0092\u00AA\u00D1h.]|\u00F8\u009F\u00FA\u00C3\u00B0\u008CTv\u00D9\x1DT\x1FH\u0083\u00E0\u00D2\x1D\u00DD\u00D5\u00FC\u0086\u00BE\u00996\u00A0\u00FF\u00F9\u00C8\u00DEq\u008F\u00DEx\u00FE\u00AB\u00B4Y\u00A5\x19\u00F7\u00B0\u00ED\x10\u00F7\u00A8\u00B3\u00ED\u00D3\u00F4\u00DD:\u00AEr&\u00C5/q)\u009B%\u00A9T\u00BEc\u00E0\u00E6\u00FD7\u00AF\u00FE$VN.\x7F\x12\u00F5\u00D5M\u00DBj\u00F5\u008D\u00B2_O\u00B74U\u00E6?\x17\u00D9\u00E0\u00CC\x14\u00E9\u00BB\u00CC\u00D1\u0087\u00EC\u0091T.\u00CD\u00DE|\u00B4\u00B7\u00D8\u008E/od\u00B36\u00EA\x04\x02\x17\u00F4\x195U\x18\x00\u0090\u00C6\x0Eq\u008FZ\u00DB\u00FE\u00A8\u00BA\tG\u00DC@\u00DC\u00E2\u00B4\u00A4\u00B8de&\x1B\u00B3\u008E\u00B9\u00BA\r\u00F6a\u00EBx\u00D8\x0E!\u0086\u00CC\u00BB\u00F4I\u00D4-+\u00B26\u00A4-\u0097=\u00ADJ\x1F\u009Bz\u00BB\"\u00F5\u00B4\u00AA\u00F7?\u00D0\u00B0\u00CE$\u00A3\u00D1\x04\x7F7R\u00AFo>\x7F\u00F6\u00AC4\x19Q\u00A5R\u00A9\u00D5\u00AB\u00C9\u00EC\u00ABW\u00ABST)'?\u00A8\u009E}\x0B=\u00A6\u00D9\x00\u0088{\u00B4\u00D8v)\u00A3\x16G\u00EAb\x05\u00B2$\x07\x07\u0084\u00A56\u00C2\u00DFi1a\u00DE\u00DD\u009FD}=7\u00FF\u00FD\u00FF\u00BB,\u00DB\u00ECB\u00DB\u008D\u00DC\x15Y\u00E1_\x00+\"H3\u00D39\x06\u0083!'(}\u0097=^$M\u0093W\u00F8\u0082\u00C3\u00D8\x03\u00A5\u0082\u00B8G\u00B5m\u009722:\u00BE\u00C8\u00B9pr\u0089kAP\u00F7Y]\u00CE\u00A9\u00FB\u00DD\u008E\x10e\u00C5\u00CC\r\u00F3\u00EE>Q{\u009A*\u00E5\u00C5\r\u009B\u00BF\u0098>1\x1C\r\u00ED_\u00DCi\u009D\u00E9\u00AC\u00EE1\u0084T\x19y\u00E4Z\u00AA\u00F2\u00D2\u00FC\u00C8\u00C0\u00B5\u0095\u00F6\u00E2\u008F\x17\u0091[?\\Q\u0099\u00A3Q2\x1F1]\x12\x0B\u00B2Ymq 0\u0090-\x13I\u00DB\u00CE\x19\u00B3O8LqAdI\u008E\u008FOv\u00B6\u00DA#\u00A5\u00EC\u00DC\u00BC\u00C7\u00E2\x19/Z\u00BB1-Y~k\u008E\x06\u00F8\u0088\u00A7\u00BD\u0087\x0E\u0083$\u00BF\u0085G`\u00A4at\u0083\u00BF\x04\x18i\u0086\fWp\u00B2\u00ED\u00FC\u0086'{jT\u00D9fK[\u0088e\u00AF!\u00EE1c\u00DB9AdI\u008E\x0EN\u00B6\u00E9G}/\u008F\x176\u00F3\x1Es']\u0095\u0098\u00E4\u00D1\u00A4{\u009B\u00AB \u00D6\x113X\u00F4\u00EE\u00D2\u00ACV\u00AFNO\x7F\u0090\u00F3s\u00CFh\u00F4\u009D\u00E0\u00D8P_\u00CF\u00DF\u00F3\u00D4u\u00E9-Y\x1F\u0089\u00F6\u00B3A\u00FAh\u00D2\u008C\u00F2\u00EB\u00E73\b\u00CBD\u00DE\u00B6K\t<Kr\u00E0\u009E\u00B3\u00A3s8J:0\u00B6\u00D2f8\x1E\u00EF\u00AC\u00B2Y\u00C6\x02YL\u00D5\u00EF\u00C4a\u008Cd\u00ED*\u0095vU\u0098l\u008A\u00CD\u00EA-SP:1KA\u00C14\t.(\u00DC\u00C9\u00A7\u008E\u00B9XW\u00F7VU\u0095\u00C7\x12\u00AE4\u00D4\u00F3\u00FB\u00A54\x1E\u00F0{\u009BRq\u00F7\u00D6\u0080Y\u00C6\u00CAi \u00E1\u009E\u009DZ\u00E8-\u009AO\u00B5 (\x0F\u00E7\x1E]\u00B6}\u009AdX\u00C7'-\x0B|LT\u00E0rNu\u00B5\u00DA\u00A3G\u00D9c\u00D7\u00BC\u00C7\u0089wV=\f\u00F6\u00DD\u00B7-6\u00FF\u00E9\u00A4\u00CE\u00FE\u0091\u0089N\u00B3\u00DF\u0097k0|\u0097V\x1FTW{\u00B4\u00DE\u009F\u00D4\u00D6Jm\u00FB\u00EE\u00E9\u00D3\u00F6\x16\u0097\x14s\u00F3N\x1AJ\x1B\u00BB\x07\u00DF\x1Bu:\u00E9\u00B4-\x07\u00CB\x0F\u00F1\u00F7\u00D2\f\x16\u00E9\u00A3\u00A4\x1C\u0092\u00E3_\u009F81\u009B\u00E3\x12\u009FoR\u00F1\u00CB\x0B\u00E9L8\u008F\"6\x06\x03\u009F\u00FD\x06\u00C0\u00B9G\u0097m\x7F4\u00DEL8\x16Z\x12\x16.Y\u00E0\u009E%\x19\u00FE|\u00C7\u00B9m\u00DE\u00BD\u00DDY\u00BD\u00D0\u00A6\u008F\u00EC\u0084b\u00C1A\u00C2w\u00F2\u0083\u00EA\u009C\u009CG\x0Bk\u00B09\x1D\u00A5\u00A1\u00EA\u00B2}\u00FBd\u00E9\u00EA\u00C2\u00CC3\u0095\u0095\\\x7F\x1B\x1Bu\x06C[qI\tSm\u00AB\u0098\u00BD.\x1D\x1Bv\x15\x17K\x03\u00EB\u00D2g\u00A3h\x00\u00B0Zm\u00ACv\x05'k\u00A4\x16\u00EE)-\u00E5\u00A3\x0Bk\u00E1\u009E\u00D2\u009F\u00B2\x03\u00A1\x16^\u00A9o@8\x1E\u00E2\x1E\u00D5\u00B6\u009D3\u00E1rMX\\\u00A9\u008B\x1F\u009BJ}4m\u00EC\u00E0\u0080\u00B3\u00BB\u00C3jWh\u00E6\u00DEP\u0098\u00F7\u00D8z`\u0095Q\u00B4vcSo\u0097\u00EC\u0099\u00D5\u0096\x1F\u00FAn\u00DE\u00EF\u00DD\u00B2\"+\u0086\x0E\u0084\u00DC\u00B7M\u0084\u00AD\u00AD\u00E1\u00D9\x02\x17\x14\u00EE\u0092\u00CC\u00E1%u\u00DFoVT\u0088\u009E]p\u00BE$\u00C7\u00DE\u00A6W\u00A4\x12d\u00F3\u00CF\u0090\u00D0\u00D3p\u00C2k\u00BCt\u00D1\u00C3\u00DC\u00EEl\u00CEH\u00E9\b1S\u00A8\u00D9\u00C6\x1E#_\f\u0084Z\u00E8>\u00B7;[\u0092\u00C9\u00E3\u0082!\b\u00CB\u00C0\u00B6G\x17#\u00A3\u00E3S\u0096\u0084I\u0097\u00F0\u00BE\u00AFc\u00C2\u00D06\x1C\u009D\u00CA\u00CE\u00CD{,\u00FE7\u00E0\u00E3\u00CE\u00AA-\u008A\u00FF\u00DB\u00F0\x14\u00BB\u00D8\u00F9\u00CE\u00D1c\u00DE\u00A6E$\u00E1#\u00F9>\u00E0ef\u00AE8q\u00EE\x01\x1F\u00BB\u00B3\u00C1\u00C3[\t\u0087++\u00BC\u00EDH{\x1D8X\u00FEVU\u00D5\u00EC\u009F?\u00A2\u00AAw\u00EF)\u00E5\u00F1\x19\u00F7\u00F1\u0083j\t\u00D1\x1D\u00DDX$\u00DEl\u00B6\u00CC\u00E7\u00E3?~\u00E5\u00CF\u00F6\u00A8\u00FF\x03NJH0\u00F6\u00DBL#1\x10L\u00FC]\u00D9\u00DE\r\x19\u00E9\u0091m\u0083\u00FB,`\u0081\u00CC\x1BC\x17p6\u0087\u00C3\u00DB\u008E\u00AEA\u009B\u00AD\u00F9^p\u00EDY\u00B8.=\u0090)h\u00A6\x06\u00EF\u00CA\u00D7\u00E8\u00F0;\x1B\u00B0H\u00BB\u00C1\u00C0R\x185\x1A\r\u008B\u0096\x18\u008D=\u008D:\x1D\x7Fj\u009F,3\t7\u00FD/\u00C0YYhw}\u00B3^\x1A\u00BBg\u00CB'\u00F9\u00D5M\u00DA\u0085\u00EA\u00E5\u00F7We{\u00F1vJ\u0097K\u00E5k\u00A8J\u00DB\u00EF\u00E7j[\f\x13I\u00E7\rf\x05\u00F2}/\u00D6=\u00B8n\u00F0\u00B6\" \u00C4}^\u00D0;2t\u00AAY'\u00BB$\u008FB\u00BE\u00EB\x18\u008A\u00FE\u00CE<\u00F2\u00FC\u008F\u00E7\u00C0\n\x1E\x00@\u00DC\u00E7\bt\u00E9M\u00FA.\u00CB\u0087\u0083\u00B8\u00CF\u0088\x15\u00A9\u008B\u008F\u00BF\\\x12q\u00CF\x0E\x00xt\u00D9\u0087.P%&U\u00E6?\u00F7\u00E2\u0086\u00CD\u00E8\u008A\u00E0\u00D8\u00BA2\u00F3\u00F7Q\x10\u008D\x01\x00HA*\u00E4\x03^\u00CA\u00DE\u009C\u0095\u00BA\u00F4L\u00CB\u00D7\u00F6\u0098\u00BA\u0087\x16q~\u00FE\u00B4\u00F6\u008D\u00FC\u00ED\u00E8\x07\x00 \u00EE\u00D1\u00CB\u0096\x15Y\u00ABR\u0097\u009D\u00D2\u00EBzG\u0086\u00D0\x1B~Y\u00B4p\u00E1\u0091]E\u0085\u00EB\u00D6\u00A0+\x00\u0088B\x10s\u0097cs:>k\u00BB\u00D1\u00D4\u00DB\x15U\u00AD\u008A\u00B6\u0098\u00FB\u00FA\u008C\u00F4\u00E3/\u0097<\u0091\u00BA\x18\u00FF\u00C1\x00\x00\u00E7\x1E\x1B\u00A8\x12\u0093^\u00CB}:+u\u00E9\\\u009D@j\u00F6\u0094h6\x1E~\u00F6\x19r\u00EE\u00E8\n\x00 \u00EE1F\u00D1\u009A\u008D\u00D9i\u008F\u00D74\u00FD\r!x\x19\u00C8w\x04 &@X\u00C6\x17\u00D1\u0093%\x19\ra\x19\u00B2\u00EA\u00BFy\u00F5'\u00C8\u008A\x01 &@*\u00A4/X\u0096$\u00B9xt\u00C5\u00D6\u0095\u0099\x7Fzc\x1F\u0094\x1D\x00\u0088\u00FB\u00DC\u00E1\u00D5M\u00DB\u00CA\u00F3\n\u0092\u00E7\u00C7\u00D2\u009A\x1E\u00D9\u00BB\u00F5)\u00F2\u00EC\b\u00B2\u009BL&\u00FEh\u00FB,\x0B\u00F185nx\x0EA\u00F6\u00CD\u00EC\u008FHY\u00DA\r\u0086v\u0083!\x1A\u00CE\x14\u00C4}^\u00B0eE\x16Y\u00F8\u00AC\u00D4\u00A5\u00F3\u00ED\u00C0I\u00D0\u008F\u00BD\\\u00F2\u00E6\u00CEgb\u00AB\u00D9$\u009D\u00C7\u008F\u00BE\u00FB\u00CB\u00AA#\u009F\u00D4\u00D6\u00BA\u00CB\u0099\u00B7]\u00FCni6\u0099\u00DC\u00E7;<Y]\u00CD\x16\u0088 5\u0091.\u0088\u00E1\r\u00DA\u00A6Qw-\u00A4\u0087\u00CF\u009Bt\u00A5\u00A1\u009Ei\x1C}\u00A4/\u00E9\x00\x7F}\u00E2=\u009B\u00CD*\u009D\u00D1\u00C5\u00FD\u0088\x18|\u00DF8q:\u00F8\u00A0\u00D7?\x12\u008FW\u00C7\u00DB\u00E0w\u0099V\u00C3\u00C3)hf\u0083\u00C73\x05q\x07\u009E!e\u00AF\u00C8\x7F.?k\u00ED\u00FC9\u00E4\u00F5\x19\u00E9d\u00D8c.\u0093\u009D|\x1F\t\u00CA\u00C1\u00F2C\u00BF:qB\u00BDZ\u00CD\u00D4\u0084\u00FE\u00A5\u00EF\u00F92=\u00F4\u0086i\x1C\u00FB\u0086\u00DE44\u00D4\u00DF\u00D07\u00D3G\u0093\x04\u00B6%\u00ED\u00E8C\u0092\u00DA\u00DB\r6\u00AB\u008D\u00F4\u008B\u00D4P:I\x16\u00B3\u009F\u00BC\x1CV\u0094\u00D9,|,(\u00DC\u0099\u00A3\u00D1\u00B0\u00AAYK\u00D8.lK\u00FA\u00C8\x7F\u00E2\u00A5\u00F1\x06\u00B0\x03\u0091\u0096\u00E9\u00D1\u00E7\u00B2/\x1B\u00EA\u00EB\u00A9U\u00C2f\u00E2$b))\u00C2\u00EA\u00D5*U\n\x1D)\x1D\u00AFtGv\u00E0\u00D2\x12\u00B6\u00E5iI\x1F\u00D9\u009C\u00EC\u00A4\u00EC\x1A\u008D\u00C6\u00BD\x0F\u00D9.\u00BC\x1BeG\u00F4`\u00B3\x1E#\u00DB\u0080\u0094]\\s#E\u00DA\u00AB\u00ACLn\u00B7y\u00E1\u00AC^i\u00F3dgA\u00BA\u00E8\x12\u00DB\u0092\u00FD+-p\u009E\u0083l\u0099\x190\u00AF\u00B2$c7\u00DF\u0091t\u0096\u00CF\x11\u00C8\u00E6.g\u00CA\u00A2V\u00AF\u00A67\u00F4S\u00D9\u00BE\u00FD\u00E7\u00CF\u009E{(C\u00B6\x03\x07\u00CB\u0099\u00D7\u00D3\u0089\u00E6\u009D\u00D4GT\u00CF\u0081=\u00A5?\u00BD$\u0098\u00C86UJ\n\u00FD\u00FA\u00CE\u00D1c>\u00CC&\u00E9\u00E0;G\u008F\u00B2Ym\u00DF?\u00F1\x1EmO%\u00B3E3.\u00D6\u00FD\u00F9W'\u00DEg\u0086\u00BA\u00F8\u0085\x17\u00E8'\u00D2\u00CA\u008C\u008C\fj\u00A7UT\u00AB\x1D;\u009E\u00B9\u00FC\u0097K*\u0095\u00CAl6\u00FF\u00FB{'h\u0083\u008FkO\u0089:e\u00CB\u00CB\u00D3\u00F6\u00D0\u0090 \u00B4JE\u0085\u00B0\x03a?\u00BDYQAo\u00FE\u00F8\u00E1\u0087T\x0B\u00B5\u0096U\u00C1\x10F\x0EQR\u00E3\u00C4\u0099~\u0099\x0E\u00D28G\u00FF\x7F\u00F2\u0083jj'\u0089>\u0095\u00C0W\u00D4cN\u009F\u00BE\u00A1\u00DA\u00F9:\x1E\u00C2T\u008B\x05\u0085\u0097\u00EA\x04}\u00A7n\u00B4Zm'\u00AB\x7FK]a\u00B3Z5\u009AM\x07\u00CA\u00CB\u00A9\x0F\u00A9\u00A2=\u00A5\u00A5\u00C2b \x06\x03\x15\u00C5z\u0095\x0E\u00EA\u00C8\u00F4\u0085\u00FAHp?\u00AA\u00A9\u00A1B\u00D8\u00E0G\u00E3\u00CD\u00F9s\u00E7\u00D8\u00CC\u00BDG\u00DE~\u009B\u009A\u00C4\u00EA\u00A5\u00BA\u00D2\u00C5\u00DA\u00E9\u00CA\u0086]\u00DC\u00E4i\u00B5\u00C2\u00C9\x12\u00BD?;}\u00BC\u00C1\u00B4\u00E5=\u00A3\u0091:\u0081\u00BA\u0088\u00ADOB\u00F5\x1E,/g'\x1A\x0Bw\u00C0\u00B9\x07C\u00D1\u009A\u008DG\nJ\u00E6v\b\u00FE\u00CD\u009D;\u00AAv\x15\u00C5h\u0090\u009D\t\u00B4\u00F4\x1BR1\u0092\x15\u00D2\x05z]ih`\x06\u0090\u00D4\u0084\u00AC\u00FD*\u00B5Z\u00B4\u00D2\u0085\u00A4\b\u00FB\u00F6\u00EDg\u00CBP\u0090\u0088\x1C\u00AE\u00AC$5ll\u00D4\u00BDU\u00F5\u00F6\u00BBG\u008F\u0091\u008A]\u00F2\x1E\u00C3%e\x174Tt\u00C7$\u00DC$:T\x0E\u008D\x19$1y\u00DA<a\u00F5\f\u00D1\u00FC\u00D26\u00BBw\u00EFa\x151\u0099[\u00AD^M\u0085?\u00FB\u00E3g\u00A9%e\u00FB\u00F7\u00D3\x06,\u0082A*O\u00F5\n\u00BA\u00D9\u00A8#\u00C1\"%5\u008B\u009E\u00FF\u00A2(\x7F\u00AC\u00D9W\u00EA\x1B\u0098v\u0097\u00ED\u00DF'Uv\u0082Z\u00DE#Z]Raz\tv\u00BB\u00C7(]\x11\u009B.\x1D\u00E8_\u00BEV*UD\u00EF\u0085\u00D1e\u00BAy\u00DF-6\u0080z\u00A3\u00B8\u00A4\u0098\x149#c9\u00B5\u00F6\u00DDc\u00C7\u00D8\u0097\x1E\u00BB\u0082z\u0095\u00B6\u0091\u00F5\u00BF\u00D8\u00E76\u00BE\x0B);\r\x1B\u00ACvC[\x1B\u00BDg\u0097\x17\u00D4E\u00AC[\u00A8\u00CDtDt\n\u00D8\u00C9\u00A2\x7F\u00D9\u00B9\x13G\u00CA:j9\u00F5\x00uKzz:\x0F.\u00B1z\u00D9\u00F2\u00AA\u00C2\u00C6G\u00AA\u00A0T\x10\u00F7 C4\u00EF\x16\u00BD2'C\u00F0$\u00E8\u00BF+\u00DB\u00BBwkn\f_`\u00A5\u00A8dQ\x14\u00BA\u00FAg\u00D2\u00C6\u009C5SaRI\u00D2 \u008FK-\u00D3f\u00F4\u00A2\u00BDH\u00EF\u0098\u0093\u00A5\u008F>\"\u00F2e\u00FB\u00F6\tN\u00F6\u00DCY!\u00A2\u00D2cd\x1AM/\u00C1N\u008Ak\u00CE\t\u00CB\u00D45\u00EB\u008BK\u00E4K 1-\u00D37\u00EB\u00DF\x7F\u00EF=\u00DA@\u00BA\f\x05\u00D5\u00CB.;\u00A8j\u00D6H\u00E1j\u00C0*\u00CC\u00E9\u00FFQ\u00CD\u0087)\u00AA\x14j#}O\u00A3\byU\u00D9\u00EDY\u008DFC\x03\fiz\u008E8C:]X\u00D00\u00E3c\u00AD\f\u00DA\u0086\x1D\u00B2\u00BBR\u00B3\u008B\x0F\u00EA(><\u00D0{\u00FA\u0092\u00B5\u00C4\x1D\u008Fs\u00BE\u00D3PDr\u00CCF8\x1E\u00AD\"\u009BO5Ri\u00B4\u008B\u00BE\u00B9\u0099~\u00A23\u00C2z;\u00FDa\u009F\u00F3\u0093\u00C5\u00DES\x03\u00A8^\x1A$\u00A8\u00BBH\u00C7i\u00B0\u00E1\u00CD`\u00F5\u00D2G:\x0E\b\x14\u00C4}\u00B6!\x1A\u00F2\u00EFs,Krn\u00E4;\n\x0B\u00AD\u00E9t,\u00F2K\u0096\u0090\u00DE\u00B0\x18H\u009C\x18\u0096%\x01\u00F5\u00B6\"\u0084\u00EC>\x1EI\f\u00F7\u009B\u00B4\u00A3\x0F\u00D5`\u00FAK\u00FF\n\u0082%nv\u00B8\u00B2\u0082\u00FC#)>\u00D3hR.zm\u00F34\u0090<t\u00AC;\u00C9\u0080\u00ABRR\u00FC\u008E[T \u0095L\u00E5\u0093\u00DD&\u0089\u00A4c\u00A1Z>\u00F9\u00B8Vj\u00A5I1\x05W\u00DB\u00A8c\u00E2N\u008D\u00A7\u008F\u00D2uSSRT&\u00D3\u0080\u00CD\x16\u00D02\x06\u00CC\u0086\u00D3%\b\u00B5\u0093\u00DD\x0F\u00A0\u00A1\u0082\u00B5\u00A4Qw\u00CD[\u00D0_vF\x1E,\u0082z\u00F6,\u00F5\x0F\u009D\x02v!E-g\x014:p\u00FA\u00A9\u00F8\u00E1\u00FA\x7F\u00EC\x02\u0082\u00CE\x1Dm\u00C9\u00B6gU\u00D0I\u00A4J\u00A9/I\u00D6\x0F\u008A}\u00EB>\x1A\u00B1\u0093h@\u00D8\x1D1\u00F7Y\u00F2\u00EA\u00A6m\u00E4\u00DF/\u00B4\u00DD\u0098\x03\x0F\u00B2\u00EE\u00DD\u00FAT\u00CCe\u00C5x3\u008FbZ\u0088\u00B0\u00DC3]\u00F2\u0093\u00A4\u00EE.-\u00FD\u00E8\u00C3\u009A_V\x1D\x11]\u00F6~\u00CF\x02\u00BDZ}\u00E9b\x1Ds\u00BB\\)\x0E\x1C,\u00A7rDe\\N\u00DAD\nE&\u0094\u00C5\u00F4=\u00F8\u00F7\u00FD\u00FBh\u00E3]%\u00C5\u00F4\u00EB\u00F1\u00A3G\u0099\u00A81}g\u0096\u00D3]\u008C\x18\u00A4S\x1F\b\u00EE\u00FB\x1A\u00D5\u00E2\u00FB\u00D0D\u009F\u00FE\u00DB\u00E3G\u00DF\x15c)?%\u00A9m\u00A8\u00AF7\u009B\u00CD\u00D4*\u0099\u00EF\u00D6h6\x19\fm\u00ACFQ\"\u00A7\u00FDJ}B\u00CE\u00F7\u0097UU\u00EF\u0088\u00ED\f\u00B0WIU\u00E9\u00B8h\u00C0\u00DB\u00BD\u00A7\u0094\u00AA\u00DB\u00A6\u00CD\u00A3\u00F1\u00E3\u00A3\u009A\u009A<\u00AD\u0096\u00AF\u00FA\u00E4\x03\x1A\u00E4t:]C}\x03\x0B\u00A3\u00D3\u008B\u00BA\u00F5pE%5\u0092d\u009D\u00C6'\x1A?\u00D8\u0096=\u00C6\x1E~\u00B2\u00A8\u00CF\u00E9_:}t\x144\x06\u0094U\u00EC\u00A7\u00ED?\u00A9\u00AD\u00A5\u0096\u00B8\x0F\u00D2\u00D4\u00F9t\x1D\u00F3o\u0095\x15\u00DB\u00F2\u00F2\u00A0NxBU\x01zG\u0086\u00CE\u00B44\u0085t.\u00C9\u0090>\u00A1\u00BAh\u00E1\u00C27w\u00EE\u00C0\u00A4\x02!\u0082\u00DD\x05-{\x18g\x072h\u0088\u00FA\u00B8VX\u00EA\u009A\u0084\x1E\u00BD\u0081\u00B0Lt\u00C1\u00B2$s\x1F_\x19\u008B\u008Dg\u00F9\u008EP\u00F6\x10A\u0097\x02d\u00E7\u00C5{\u0098Pv\u00CF\u0090\x07\u00A7^\u009A\u00E7\u00EB\u009D\u00C2\u00B9G;W\u00BBo\u0087(K2D\u00CE\u00BD`\u00DD\u009A\u00D8\u00CD\u008A\x01\x00\u00F8\x001w%)Z\u00B3\u0091\\\u00FC\u00A9\u00E6\u00C6\u0098\b\u00C1\u00BF\u00B9sGLg\u00C5\x00\x00\u00E0\u00DC\u00C3\u008A\u00CD\u00E9\u00F8\u00B0\u00E9o\u00CA\u0086\u00E0\u0095u\u00EEd\u00D5\u008F\u00BF\\\u00B25+\x13'\x0B\x00\u0088;\u0098\x19\u009F\u00B5\u00DD\u00B8\u00DA};\n\u00C5}}F\u00FA\x7F`\x160\x00\u00E6:\b\u00CB\u0084\u008A\u00E8\u00CC\u0092\u009C3\u00F9\u008E\x00\x00\u0088{\u00C4\u00C8\u00CFZ\u009B\u0095\u00BA,\u00D4Y\u0092\x01\u0082|G\x00\u00E6\x15\b\u00CB\u0084\x1C\u009B\u00D3q\u00E6fS\u00CB\x0F}\u00B3)d\u0096a\u0099\u00F5\x19\u00E9U\u00BB\u008A\u00B0\u00D4\x06\x00\x10w\u00A00\u009F\u00DFi\u00FD\u00A2\u00A35\"\u00E2\u008E|G\x00\u00E6!\b\u00CB\u0084\u0089\u0097\u00B27g\u00A7/\x0F\x7F\u0096\u00E4\u00CF\u009F\u00D6\u00BE\u0091\u00BF\x1D\u00FD\x0F\x00\u009C;\b!\x16\u009B\u00F5\u0094^\x17D\b>\b\u00E7\u008E|G\x00\u00E63\u0098~ \u00AC\u00A4\u00A9R\u008E\x14\u0094\u0084a9\u00A7\u00F5\x19\u00E9\u00BF+\u00DB\x0Be\x07`\u00DE\u0082\u00B0L\x04x-\u00F7\u00E9\u00EC\u00B4\u00E5\u00A1\u00CB\u0092,\u00D1l\u00AC\u00DAU\u0084~\x06\x00\u00E2\x0E\u00C2\r\u00CB\u0092<\u00D5\u00AC\u00B3\u00D8\u00AD\n\x16\u008B|G\x00\x00\x031\u00F7H\x12x\u0096d 1\u00F7\x15\u00A9\u008B\u008F\u00BF\\\u0082|G\x00\x00\u00C4=*\b$K\u00D2\u00AF\u00B8#\u00DF\x11\x00 \x05a\u0099\u00C83\u00FB,I\u00E4;\x02\x00\u00E0\u00DC\u00A3\x14\u00DFY\u0092\u00DE\u009C;\u00F2\x1D\x01\x00\x1EA*d\u00B4\u0090\u00A6J\u00A9\u00C8\x7FnFY\u0092\u00C8w\x04\x00\u00C0\u00B9\u00C7\fM\u00BD]gZ\u00BE\u00F6\u00EB\u00DCK4\x1B\x0F?\u00FB\f\u0082\u00EC\x00\x00\u008F \u00E6\x1Eu\x04\u0092%y\u00E4\u00F9\x1F#\u00DF\x11\x00\x00\u00E7\x1E{\u00D8\u009C\x0E\u00D2\u00F7\x0E\u00CB\u0080\u00CC\u00B9#\u00DF\x11\x00\x10\b\u0088\u00B9G)\u00AA\u00C4\u00A4\u00CA\u00FC\u00E7^\u00DC\u00B0Y\u00FA\u00E5\u00D6\u0095\u0099\u00BF/\u00DB\x0Be\x07\x00\u00F8\x05a\u0099\u00A8\u00E6\u00A5\u00EC\u00CDY\u00A9KY\b\x1E\u00F9\u008E\x00\u0080\u00C0AX&\x06\u00B0\u00D8\u00AC_\u00F7\u00DC{A\u0083 ;\x00\x00\u00E2\x0E\x00\x00\u00F3\x18\u00C4\u00DC\x01\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\u0080\u00B8\u00A3\x0B\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x00\u00E2\x0E\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\x10w\x00\x00\x00\u00A1\u00E4\u00FF\x05\x18\x00Q4\x07\u00838\u0099\u00D1\u00E1\x00\x00\x00\x00IEND\u00AEB`\u0082";
						
					var binLogo4 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F4\x00\x00\x00\u0096\b\x02\x00\x00\x00\u00A7\u00FF\u00ED8\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1CDIDATx\u00DA\u00EC\u009DoPT\u00E7\u00BD\u00C7\x01A8(\u008A\u00A0\u0086\u00C2\u00D2\u0090(KZ\u00ACln4\x17\u00F0\u00EA\u00C4%i\x1B\u00A5\u0089\u00BD\u00A3\u00C6\u00BEPl:S%7w&!\u009D\u00CE$\u00DA\u00E9\u00CCmLg\u00EEL\u00D5W1\u00B9/\u00AE!\u00BE\u00A8Ug\u00AE\u00B6h\u00AD\x0E\u00D8\u00C6\u00C6e*iv\r\u008E\u00B0\u008A\u00A2,\u0088\u00CA.+\u00E0\u009Ee\u00FF\u00DE\u00DF\u009EG\x0F\u0087\u00B3\x7FY\u00CE\u00FE\u0083\u00EF';f\u00D9=\u00E7y\u009E\u00F3\x1C\u00F8>\u00DF\u00F3;\u00BF\u00F3<\u00E9\x16\u00CBp\x1A\x00\x00\u0080\u0099E\x06\u00BA\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DCg7n+?\u00DEu\x0F\u00FD\x00\x00\u0088\u009CLtA\u0092C\u00B2\u00FE\u00F0\u00E47^\u00BBk\u00DEK\u00CB\u00E7\u00BF\u00B4\x1C\x1D\x02\x00\u0088\u0084t\u008Be\x18\u00BD\u0090\u00B4\u008C\u00FD\u00F5\u00C6\u00A3\u00BF\u00DE\x10\x7F\u009C[V\u0090\u00BF\u00ED\u00F9\u00F4\u009C,\u00F4\f\x00\x00\u00E2\u009E\u0092x\u00EDN\u00EB\u00D1\u00AF\x1D\u00BD\x16\u00D9\u00E7s\u00F29\u00D2\u00F7\u00CC\u00A2\x05\u00E8\"\x00\x00\u00C4=\u00C5p\r\u008E\u0090\u00B2\u00BB\u00AD|\u00B0\r\x16l\u00FA\x1E\u00A7)AG\x01\x00 \u00EE)\x03\u00AF\u00EF\x1F9\u00F9M\u00D8\u00CDH\u00DCI\u00E2\u00D1]\x00\x00\u0088{\u00B2\u00E3\u00B5;G\u00CFv\u0091\u00B8G\u00B8}fQ^\u00FE\u00B6\x7F\u0099\u0093\u00CF\u00A1\u00EB\x00\x00\x10\u00F7$\u00C5m\u00E5\u00ADG\u00FF\u00E9\x1A\x1C\u009D\u00DA\u00F9\u00CB\u00C9$}\u009F[V\u0080\x0E\x04\x00@\u00DC\u0093\x0EG\u00AF\u0085\u0094\u00DDkwE\u00B7;\u00B2$\x01\x00\x10\u00F7\u00A4C\u0096\u00EF\x18\x1D\u00D9\u00CF-]\u00B8\u00E9{\u00C8\u0092\x04\x00@\u00DC\x13\u008F\u00D7\u00EE|x\u00F2\u009B\u00F1\u00AE\u00FB\u008A\u0094\u0086,I\x00\x00\u00C4=\u00F1\u0084\u00CDw\u008C\u00E6t\u00E6d\u00E6\u00FD\u00F0;\u00C8\u0092\x04\x00@\u00DC\x13\x03\u00AF\u00EF\x1F={-\u00EA {h\u0090%\t\x00\u0080\u00B8'\u0080\u0091\u0093\u00DFD\u009E\u00EF\x18\x1D\u00C8\u0092\x04\x00\u00E2\x0Eq\u008F\x1F\u00D1\u00E5;Fyj\u0091%\t\x00\u00C4\x1D\u00C4\u0081i\u00E6;FG\u00DE\x0F\u009F\u00CB\u00AD.C\u00E7\x03\x00q\x071A\u0091|\u00C7\u00E8@\u0096$\x00\x10w\u00A0<\u00CA\u00E6;FGfQ\x1E\u00E9;\u00B2$\x01\u0080\u00B8\x03ep\r\u008E\u0090\u00B2\u00C7'\u00C8\x1E\u00E6L#K\x12\x00\u0088;P\u0084\u0098\u00E6;FGn\u00F5\u00D3$\u00F185\x00@\u00DCA\u0094\u0090\u00AC\u00DB\u00DAo'a\u00C32\u008B\u00F2\nv\u00BE\u0088\x10<\x00\x10w05\u00BCv\u00A7\u00E5\u00B3\x7F(\x18\u008A\u00C9\u00E02\u00E7pYN\u008Bb\u00CF\u00B2\"K\x12\x00\u0088;\u0098\x1A\u00B1\u00C8w,i\\\u00C5-[d\u00BDxg\u00E8T\u00B7\u0082\u00C5\"K\x12\u0080\x19L\x06\u00BA@Al\u00ED\u00BD\u00C3\u009F\u00FD#FA\u00F6\u00FC\u00B5\u00DF&\u0095'\x17\u00AFT\u0081\u00A3g\u00BB\u0084q\u00C8\u0089\x13\x07\x00\u00C4\x1D\x04FX\u00CF\u00FA\u009F$\u00971\u00AD\u0085\u00FC{\u00D9\u009E\u00B5\u00D9\u00C5yJ\x158\u00DEu_\u0088 \u008D\u00E0\f\x02\x00q\x07rH\x1CI\"c\u009D\u00C9>t\u00AA{|`4#'\u00B3\u00B4\u00A9\u009A\\\u00BCr\u008D\x1F\x15\x1A\x7F\x0F\u00E7\x11\x00\u0088;\u0090\u009A\u00DF{\u00CA\u00DE>\rZ\u00D1\u00C0h\u00FF\u00A1\u008EGW\x1F\u00D0\u00FB\u00C5\u00AFW<\u00B5\u00ADR\u00A9\x10\u008D\u00D7\u00EE\u00B2\x1E\u00FDz\u00F4\u00EC5\u009CM\x00 \u00EE\u00C0\x07\t\"\u00C9b\u00DC2\u00D9=\u00BC\u00EB\u00EEa=\u00BB\u00AD\u009A\u00B7\u00AA\u00B8\u00A4q\u0095\u0082!\x1A[\u00FBm\u00E1\u0086\x01B\u00F0\x00@\u00DCg1$\u0082$\u0085\t\u00C9d\u00B7^\u00BCC\x16\u00DEcw\u0091\u00B2\u0097\u00BC\u00B5j\u00DE\u008A\u00A5J\u0095\u00EC\u00E8\u00B5<8\u00F87\u0084\u00E0\x01\u0080\u00B8\u00CFRH\u00FEH\x04I\n\x13\u00D5\x00\u00BEg\u00B8w\u00DFE\x16\u0082\u00FF\u00D6\u00CE\u00AA\u00C5\u00AFW(7h\u00B9\u00CC\u009F\\\u00B2\u00B5\u00F7\u00E2,\x03\x00q\u009F]\u0090\u00F0\u0091\u00FC%|R\x01\x0F\u00EF\u00EA\u00DB\u00DFN.>-6Y\u0092#'\u00BFA\u0088\x06\u0080\u00D4\x05\x0F1M\u00C9\u00D5:I\u00F5\u0094]D\u00A9\u00E0\u00FB\u00CB\n\u00BE\u00FF\u00AC\"E\u0091\u0091'\u00B9W\u00B0m\u0098K\x12\x008\u00F7Y\u00C1\u00B5\u00DF\u00EB\x07\u00BE\u00EEO\u00DA\u00E6\u0091\u0097W\u00B6@\u00D3m\u00EB\u0091\x03\x7F\u00C7y\x07 \x15\u00C9D\x17D\u0088\u00DDb\u00BB\u00DF\u00E9K\x06\u00E7\x17d?\u00E5q\u00CFIW\u00A6X\u00CB\u00B9\u009E\f.\u0093\u00E5\u00AD\u00B3dG\x7F\u008Df\u00D3\x0F\u00D0W|O\u00FC.\u00B3\u00AE\u00D9\u00DD\u0097\x1F\u00D8\u00E8M\u00E7\u0097\u00BD+\u00D6\u0094\u00A5\u00D0\u0099:\u00D4\u00F1\u0085\u00EC\u0093\u00D7+\u00AA\u008A\u00F3\x16\x06\u00DB\u00FE\u008F\u00DDW\u00FAG\u00AD\u00B2\x0F\u0097-Z\u00F2\u00FDe\x13\u00D3g\u00BA\x06G\u00A2~Bm\u00D1\u00CE\x17'\x06\u00E0\x1B\x7FN\x1B\u00BB+wX\u00CF\u00FD{ZN~\u00A8K\u00C6\u00A1k^\u0093N~\u00D1\u00AD\u00AAI_\u008C\t>\x01\u00C4}\u00DA\u00F4\u009E3\u00B27\x0FG\u00C6\x1Dys\u008B<\u00EE\u009C\fe\x04~\u00E8T7\u00A9\u00F6S\u00DB*\u00B3\u008B\u00F3\u00CA\u00F6\u00AC\u00BD{X\x1FO\x11\u00F7\u00C7\u00E1\u00F1\u00EA\u00EC\u009E\u00DBf\x1B\u00FB\u00F1\u00CBSWSK\u00DCo\x0E\x0F\u00C9>\u00E1]\u008E`\x1Bw\f\u00DC\u00BExG\u00BEB\x16\u008D\x04k\u009F^>\u00E9\u00AA\u00C8\u00EER\u00E4\u00FEy\u00FA\u00FC\"\u008F\u009FL{z\u00DB|\u00FA\x1EB\u00DC{/x\u00C7\x06'\u00FF\u00E1\u00E6d\u00E4?\u00C3\u00DE\u00B6\u00EBt\u00F4b\u00EF\u00DFij\u009A\u00E5\x7F\u00A7'\u008E\x1F3\u00F5\u0099\u00D0\x1Bi\b\u00CBDn\u00DB\x07/\u009B&\u00C4b\u00D4q\u00C7\u0099\u00F60-]\u00A9\u00F2\x1Fu\u00DE\u00EF\u00FF\u00B8\u0083e\u00BF\u0090OW\u00F0\x01\u00D4)_I8=\u00E7\x1F\u00B9De'F\u00CC62\u00EF3\u00F2\u00B4\x0E\u008C>\u00FC\u00C3\u00D5\u00AFd\x1F\u00E6df\u00BDQ\u00B9\u008A\u00CB\u008C\u00C9\u0094\u00C8\u00E9E\u00CF\u00FB\u009Bt\u00EFPW\u009A\u00CB\x1ET\u00D9\u00AD\u00B7\u00E4\u00CA.\u00D8v\u00D2w\u00F6\u00DEl6_\u00BFnd/\u00FC\u00A9\u0092\u00B2\u00A37 \u00EE\u00D1\u00D8v\x11\u00B7\u00C3=0\u00EA|0g\u008ERU\u00B0\u0098\u00CCh\u00C7@\u009A\u00F0\x00\u00EA\u00B7~\u00AAQ0\u00FB%Bz\x1C\u009Es\u00C3\u00E3f\u00AB\\h\u00C8\u00BC\u00CF\u00BCs\u00CA\u00BB\u009C\u009F\u00E9u\u00FE\u009F\u00BFQ\u00F9B\u0088\x18\u008E\x02\x7Fre\u00EB\u00E5\x1F\u00B9\u00EC\u00DE\u00C1\u00AF\u0083\u008A\u00BB\u00FFWd\u00DBI\u00DC\x01\u0080\u00B8+k\u00DB'ET\u00AC\u00E3\u00BD\u009E\f\u00B7W\u0099\u008A<\u00BC\u00EB\u00DE\u00D1\u00AB\u00EC\x01\u00D4y\u0095K\u0094}\x005,_9<_\u00DE{\u00E4\x18\x0FpWvF\u009AwR\u00F6a\u00BBM\u00F6\u00E1+\u00CF~g\u00C5\u00D2\u00E2\u0098\u00D6\x1B\u00D0\u00BC\u00FB\u00C7j\u009E\u00FC\u00F2Y\u00BD\u0083\u00FA\x10\u00B6\x1D\u0080` \u00E6\x1E\u008Dm\u009Fd\x00\x1F9z\u00B2\u00E6\u00A8\u00B2\u00D2r\x15\u00BA\u00C7j\u00BDx\u0087\u00EF\x19.yk\x15{\x00U\u00D99\u00DC\x03\u00E2\u00F0x\u00CF\u008F:\u00CD#\u00E3!\u00B6I\u00B9\u00C8{h\u00FE\u00D8}\u00C5?4\u00BF\u00AA\u00F8i\u00E9M\u00D4\u00B0p\u009A\u0092\u008C|.:\u00F3\u00EE\u00E9\u00FA?\u00B9\u0088\x0F]\u00F3\u00BFA\u00EA\u0081m\x07\x10\u00F7\u00F8\u00DBv\x11\u00B7\u00D3}\u00DB\u0099V4?s\u0091BA\u00F8\u00F1\u0081\u00D1\u00DE}\x17\u00BF\u00B5S\u00C3-[\u00B4\u00F4\u008DJO,\x1F\u0098\x1A\x1Cw\u00FF\u00D5:\u00EEp\u00B8Co\u00C6\u00CC\u00FB\u00CC\u00D0\u00F7`7Q_\u00ABX9\u00A5rr4%\u00D1\u00ADf\u00E53\u00EF\u00BD\x17H\u00D0\u00A5\x1FzM:\x7Fq\x0F\u0098$\x03\u00DB\x0E\"\u00F2\x10\u00E8\u0082\u00E9\u00D8\u00F6I*9\u00E6\x1ALW2D\u00D3\x7F\u00A8\u00C3r\u00EE\u00A6\u00EF$\u00E5\u00C4j\f\u00BEfw\u009F\u00BBo\x0B\u00AB\u00EC\u00A2y\u009F\x01't`\u00F4\u00E1\u00A9\u00EE+r\u0099\u00CE\u00CC\u00DAYU\x13\u00A3\u009B\u00A8\u00C1\u00CC\u00BB\\\u00C7\u00AD\u00BDr\u00B9'\u00DB.\u00BB\u00D1\n\u00DB\x0E \u00EEq\u00B3\u00EDR\u0086G\x1C}\u00E9\x19v\u008FW\u00A9\x06X\u00CE\u00F5\u00DC\u00FD\u00CC@\u00CE\u009D^\u00AEa\u00BB\u0082\u0087\u00E6\u00F0x\u00FFf{\u009C\u00C9\x1E!3 \u00F2\u00CEn\u00A2\u00DA]\u00F2i\x15vj\u00AA\x17q\u00B9\u00F1lI$\u0091w\u00D8v\x00qO\u00BCm\u009F\u0090\u008FQ\u00C7\x1DG\u00DAX\u00BA\u0092Y\u00927\u00F7^\u00E8\u00FF\u00B8C\u00C1\x05\u00B2\u00FD\u00F3\x1D#$\u00D5\u00CD{\u00C0\u009B\u00A8oT\u00BE\u00B0l\u00D1\u0092\x04\u00FC\u00ED\u00F9\u009BwI\u0084\u00DD;6\x18 \u00B7\x1D\u00B6\x1DD\fb\u00EEAq\u00F1\u00CE\u00A1o\x06\u00A3\u00D8\u00D1\u00EDt\u00F79\u00DD\u008B\u00F3\u00B3\u0097\u00B8\u00DDJ5f|@\u00B1\u00C5@\u00FA\\\u00DE/-\u00F6\bC1\x01\u00CD{\u008AF\u00DE\u0083\u00DDD\u00A5WB\u00DA\x13 \u00F2.\u00E4D\u00FA>\u00F7\u00D9\u00F6KQ\u00DBv\u00B3\u00D9\u00DC\u00AE\u00D3\x19\f\u00FA~\u00D3\u00E3\u00EB\u00CE\x12\u0095\u00AA\u00AAJ\u00A3\u00AD\u00D3r\x11\\\u00A0\u00B0}\u00AF\x1B\u008D<\u00FF\u00D8O\u0094\u0097\u00AB\u00CB\u00D5\u00EA\u00EA\u009A\u009A\u00C2\u00C2\u00C2\u00B0U_1\u00E8\u008DF\u00A3t\u00F7\u0082\u0082\x02\u00B5\u00BAbC}\u00BD\u00FF\u00EE\u00AC\u00A9\u00F4\u0086\u00BE\u00A2\u00F2\u00D9\u0087\u00A7[Z\u00DAu\u0097,\x16\x0B\u00ABz\u00F3\u00D6-*U\u00A9\u00AC\u0085\u00F4\x123\u00D99\u008E\u00A3\u00A3\u00A3\u00DD\u00A9\u0091T\u00CE\u00F5\u00EBP/\u0088{HL_\u00DCrM\u00E3N\u00E6\u0090u\u00DC\u009E7\u00B7\u00D8\u00EB\u0099\u0093\u009ED\x07\u00F5\u0095\u00C3s\u00F5\u00DE\u00A3\u00E9\u0094\u0090\u00A2i3\u00C1n\u00A2\u0092mO\u00E4\u0085\u00B3_\u00DA\u00CCcq\u00F7\u00A9\u00BC>:\u00DBN\u00CAx\u00E6t\u008B\u00ECCRyz]hk\u00DD\u00BCe\u00AB\u00A8\u00A1\u00FE\u0090\"\x7F\u00DE\u00FC\x19S\u00D5I\u009F\x0B\u00CF\x04Q\u00B1\x1B6\u00D6o\u00AC\u00AF\x0F\u00FC\u00F7b\u00EA\u00BB\u00D0\u00DA\u00D6\u00DE\x1E \u00A7\u0093\n\u00A4\u00CF\u00E9\u00B5}G\u0083\u00ACv\u008B\u00D9,\u00B6\u0096\u00BE\u00E2y\u00DB\u0081\u00FD\u00FB\u00C51\u0089U-\x1D\x12\u00A8\u0096O\x0F\x1D\u0092\u00B5\u0090F\x11V\u00FEz\u00AD\u0096\u00CB\u00E5\u00A0]\x10\u00F70\u00B6\u00DD\u00F4\u00C5\u00CDi\x1626\u00EA\u00CB\u0092\u00FC\u00F6\u00DC4\u00A5&*\u0098\x0E,\u00C8~wx\u00BA\u00B1\u009DT4\u00EF\x03\u00A3\x0F\u00CF\u00F5\x04XDp\u009A\u009E}\u00F4\u00EC\u00B5\u008C\u009CP\u00F7`\u00F3~\u00F8\\\u00E895\u00FD\u00CD\u00BB\u00D7\u00DA\u00EB\x0B\u00C8\f]\u008B\u00CE\u00B6\x7F\u00B4\u00EFC\u00A92\u00CA \x11<\u00F2y3\u0093\u00D1\u0080\u0086\u009D}\x1B\x02\x12b\x1A\x00v5\u00EE\u0096]\x01\x04\x1CQ\u00FC\u00A1\u00F2I\u00A9\u00C9_\x07i\u009E\\\u00D9\u0099\u00EB\x17\u00EB\n\u00DB\u00C2\x0Bmm\u00D0.\u0088{lm\u00BB4DsK\u00D1,\u00C9\u00E8\u00B08=\u00E7\u00A2\r\u00C5\u00CC\x00\u00F3\u00FEG\u00BF\u00F4\x18\x06)>\u00E9{\u00D4I2a\x17\u00CE\u008D$\u00875\u0080y7]\u00F2e\u00CEDe\u00DB\u00992\u0092 j\u00EB\u00EAVViHII1\rz\u00C3\u00E9\u0096?\u0089n\u00F7\u00C4\u00F1c,|!\u00DD\u00D1`\u00D0Ku\u00B3\u00BC\\\u00BD\u00BEN[U\u00A5\x11#'\u00A2v\u0093\u0095\u00FE\u00BC\u00B9y\u00D7\u00EEF\u00E9\u00EE\u00AAR\u0095\u00F8~e\x15\u00A1\x11\u00AB\u00A0\u00C1\u00E0\u00F8\u00F1c\u00A2d\u00D3\u0095\u00C1o\u00F6}\x14\u00B0\u00F1T,\u00DB\u00ACD\u00A5\u00D2j\u00EBhw\u00F2\u00E9\u00A2\u00B2\u00D3{j\u00B9\u00B81\u00C7qt\x15\u00C2j\u00F1M\u00C0`4J\u008F\x11@\u00DCch\u00DB\u00A5\f\u008E\u00B9\u00C6\x17\u00CC]\u00E2IL\u0088F\u009C\u00DFQ)fL\u00CE\u00BB\u00DD\u00E5\u00FCCg\u00C7NM\"\u00EFR\x060\u00EF\u00D3{$u\u00BDV\u00BB\u00B1\u00BE^\u00D4DzC>\u00BDJS%\u009Ab\u00F2\u00EFgZZ\u00B674H-\u00F3\u0091\u00E6fi\t\u00A4\u009B\u00E2\u008F\u00A4\u009ET \u0095pp\u00FF~\x16F\u00BFb0\u0090\u00DCK\u00ED\u00BFO\u00CD\u00CB\u00D5\\\u00AEOpe\u00C3\x06\u00E9\u00EF\u00BBMMb\u00ED\u00A4\u00BF$\u00D3\u00B2\x18:\u0083\u008A\u00F5]UT\u00D7\u0088m\u0093z\u00FC\x13\u00C7\u008E\u008BA|R\x7F*S<F\u00AA\u00B1\u00B0\u00A6\u0086\u00DAs\u00A1\u00AD\u00F5\u00C4\u00F1\u00E3P\u00B0\u00C7\u00BE\x01]\x10;\u00DB.E\u00F1,\u00C9\bC1:^ae\x17\u00CD\u00FB\u00CC8\u00D7W\x1F\u00DC\u00ED\x19~\u0090\u00E0?B\u00FF\u00D9f\u00A2\u00B2\u00ED\u00C4\u00F6\x1D\r$\u00AF\u00FEwM\u00E9\x13\u00A9\u00D7no\u00D7\u0091\u00A0\u008B?\u00B6\u00B5\u00B6\u0089\u00BAI\u00BE[\u00AA\u00EC\x13\u00DE\\U*\x1D\x0F\u00C8&\u00CB6x\u00A7\u00A9\u0089\u00AA\bx\u00C7\u0095j''>q\u0095\u00A07\x04k?\u00D5.\u00ADE\u0084\u008C\u00B9\u00F4\u00F6\u00A9T\u00D9'\x0Flu4\u00C6@\u00C1 \u00EEq\u00B2\u00ED\x13\u00FEH\u00E9,\u00C9\u00B0\u00A1\u0098\u00F3\u008F\\\u00D7\u0087l\u00B1(\u009C\u00CC{_\u00F7\u0083\u0099q\u00C6\u00FF\u00D0\u00F9Ub\x1B\x100\u00E7=:\u00DB\x1E\u00E2f)\u00C9.I\u00E7\u0084\u0083\u00E9\u009B\bm\u00B7\u00EB&2s\x02*\u00BB\u00D4\u009E?\u00FE\u00ED\u00B2X\f\x06}\u00E4\u00C7H\u00C6\x7F\u00E27\u00D3l\x0E\u00B8\r\u00A9\u00F6\u008E@\u00CA.\u00B4P'Up.\u00BE\x0F%@\u00DCa\u00DB\u00C3\u00E3\u00CB\u0092\x1Cq\u009A\u00D3c\u00DE\u00ED}.\u00EF9\u008B\u00DD\x7F~\u00C7Yn\u00DEs2\u00B3\u00FCo\u00A2\x0E\u00DBm\x01o\u00B7\u0086\u0085\u00D3\u0094\u00CC{iy\u0088\u00D7\u009C\u0088g\u009E\tj\u00DE\x15\u00CDm\u0097\x06C\u008C\u00C6\u00C7F\u00D8d\u00EA\x13C\u00D5%*U\u00E8dG\u00E9\u00E0q\u00DD\x18\u00E9S f\u00B3Y:\u0096\u0098\u0083\u0088;\x15\x1EL\u00B5\u00A5\x03\u0089\u00B6N\x0B\u0099\u008A\x04\u00C4\u00DC\u00E3d\u00DB\u00A5\u00DC\x1Fq\u00D8b\u0099%9\u00FD|\u00C7\u0088\u00C6\u008F\u00EE\x07\u00F4*\u00ADX\u0092B\u00E7w\u00A7\u00A6\u00BA8/\u00BF\u00C7\u00F2@\u00F6(\u00D3\u00F9\u009B\u00D7V\x17?=\u00D5\u0087T\u00A3\u009E[&\u00B0y\u00F7\u009Bm&M\u00E9GR\u00D5j\u00F5\u0099\u00D3O\u00AE#\u009F\u0084e\u00A4\u00B2\u00CB\u00EE\u00A0\u0086@\x1A\x04\u0097\u00EE\u00E8\u00AF\u00E6W\fz\u00DA\u0080\u00FE\x0B\u0091\u00BD\u00E3\x1F\u00BD\t|\u00C9\u00CB\u00DB\u00A4\x19\u00F7\u00B0\u00ED\x10\u00F7\u00A4\u00B3\u00EDR\u00C6F\x1D\u00BD\\VI\u0086G\u00D9,I\u00A5\u00F2\x1D#7\u00EF\u00DB~\u00F9R\u00AA\u009C\\\u00F1I\u00D4\u00D7*V6\x1B\u00E4+\u0089\x1F\u00BD\u00DA\u00D1\u00B8j]b\u00833^\u00D2w\u0099\u00A3\u008F\u00D9#\u00A9\u00A24\x07\u00F3\u00D1\u00C1b;!\u00BE%\x15n\u00D7\u00F9\u0088\\\u00D0\u00A7\u00D4T\u00DF\x00\u00804v\u0088{\u00D2\u00DA\u00F6\t!\u00E6\u009D\u00B7|\u00CF\u00D1d-LS\u00E6.\u00AB\u00C5\u00E9\u00F9\u00DB\u00A8s\u00F4\u0091#n\u0087\u0090B\u00E6]\u00FA$\u00EA\u008A\u00A5\u00C5\u00CF.Z,{Z\u0095~\u00EC\x18\u00B8\u009D\u00A8\u00A7U\u0083\u00FF\u0081\u00C6u&\x19\u00B5:\u00FA\u00BB\u0091\x06\u0083\u00FE\u00C4\u00B1c\u00D2dD\u008E\u00E3T\u00AAR2\u00FB\u00AARU.\u0097{\u00F0\u00C0\u00FE\u00E9\u00B70`\u009A\r\u0080\u00B8'\u008Bm\u009720\u00EA\u00E4\u0095\u00C8\u0092\u00EC\x11\u0096\u00DA\u0088\x7F\u00A7\u00A5\u0084y\u00F7\x7F\x12u[\u00E5\u00AA\u008F\u00FE~V\u00B6\u00D9\u00A9\u00EE+\u0095K\u008B\u00E397d\x02\u0091f\u00A6\u008B\x18\u008D\u00C6\u00F2\u00A8\u00F4]\u00F6x\u00914M^\u00E1?RS\x1F\u0094\n\u00E2\u009E\u00D4\u00B6]\u00CA\u00F0\u0088\u00C3>on\u0089\u00D7\u009D\x15U\u0088\u00C6\u00E1\u00F1~5\u00EE\u0089QV\u00CC\u00CC0\u00EF\u00FE\x13\u00B5/\u00E2r_y\u00F6;\u00E7oN\u00BA\u008Fjw9\u00CF\u00F7\\\u009B\u00EA\u00AC\u00EE\u00A9d_$\u00CA(F\u00AE\u00A5*/\u00CD\u008F\u008C\\[i/\u00F1\u00F1\"r\u00EB\u00BBv7\u0096\u00AB\u0095\u00CCG,\u0090\u00C4\u0082x\x1B\u009F\x06\"\x03\u00D92\u0089\u00B4\u00ED\x13\u00BF\u00B2\u008F\x1C\u00B7\u00A2\u00CA\u0092\x1Csy\u00CE\u008F:\x13\u00A5\u00EC\u00A2yO\u00C53\u00BE\u00F6\u00E9\u00E5\u008Br\u00E4\u00B7\u00E6.\u00DE\u00B9\u0091\u00F0\u00B4\u00F7\u00D8a\u0094\u00E4\u00B7\u0088\x11\x18i\x18\u00DD\x18.\x01F\u009A!#*8\u00D9v\u00F1\u0086'{jT\u00D9fK[\u0088e\u00AF!\u00EE)c\u00DBE\u00A2\u00C8\u0092\u00ECsy[\u00CC\u00F6\u00D0\u00CB\u00E3\u00C5\u00CD\u00BC\u00A7\u00DCI\u00E72\u00B3\x02\u009A\u00F4`s\x15\u00A4:B\x06\u008B\u00C1_\u009AU\u00AA\u00D2\u0082\u0082\u00C79?\u00FD&S\u00E8\x04\u00C7\u00B6\u00D6V\u00F1\u00BD\u0098\u00BA.\u00BD%\x1B\"\u00D1~:H\x1FM\u009AR~\u00FDl\x06a\u0099\u00C4\u00DBv)\u0091gI^\x19\u00F7\u00E8\u00EF?J\u0092\x0EL\u00AD\u00B4\x19\u0091\u0080wV\u00D9,c\u0091,\u00A6\x1Av\u00E20F\u008E\u00A6\u0084\u00D3\u0094\u00C4\u00E9\x12\u0090\u00B7\x05\u00CB\x14\u0094N\u00CCR]=I\u0082\u00ABkj\u00C5\u00A9cN\u00B7\u00B4\u00BC\u00D3\u00D4\x14\u00B0\u0084\x0Bm\u00AD\u00E2\u00FDR\x1A\x0F\u00C4{\u009BRq\x0F\u00D6\u0080i\u00C6\u00CAi \x11=;\u00B50X4\u009FjAP\x1E\u00CE=\u00B9l\u00FB\u00A4H\u00CB\u00A8\u00A3\u00D7\u009D\x1Eb\u00A2\x02\u00DFz\u00D6c\u00AE\u00E4Q\u00F6\u00D45\u00EFi\u00C2\u009DU\u00FF\x0F/\u00DE\u00B91\u00CC\u0087\u008Ft\u00B9\x06\u00E9TY\u00C2\u00BE\u00DC\u00D6\u00F8\u0085\u0089\x0F\u00EC\u00DF\x1F\u00D0z\x1Fin\u0096\u00DA\u00F6\r\u0093\u00A7\u00ED\u00D5\u00D6iE\u00F3N\x1AJ\x1B\u00FB\x07\u00DF\u00DBu:\u00E9\u00B4-;\x1Av\u008A\u00EF\u00A5\x19,\u00D2GIEH\u008E\x7F\u00BBo\u00DFt\u008EKx\u00BE\u0089\x13//\u00A43\u00E1LDl\u008CFq\u00F6\x1B\x00\u00E7\u009E\\\u00B6}B\u00BEy\u00E7\u009D\u00B9s\u009E\u00CAN\u00F7\u00CF\u0092\u008C\x7F\u00BE\u00E3\u00CC6\u00EF\u00C1\u00EE\u00AC\u009E\u00EA6$vB\u00B1\u00E8 \u00E1;x`\x7Fy\u00F9\u00C4\u00C2\x1AlNGi\u00A8z\u00F3\u0096-\u00B2tu\u00DF\u00CC3\u008D\u008D\u00A2\u00FE\u00B6\u00B7\u00EB\u008C\u00C6nm]\x1DSm\u009B\u0090\u00BD.\x1D\x1B\u00D6k\u00B5\u00D2\u00C0\u00BA\u00F4\u00D9(\x1A\x00l6\u009E\u00D5\u00AE\u00E0d\u008D\u00D4\u00C2\u008D\u00F5\u00F5\u00E2\u00E8\u00C2Z\u00B8\u00B1\u00FEG\u00EC@\u00A8\u0085\x17Z\u00DB\x10\u008E\u0087\u00B8'\u00B5m\x17q;\u00DC\x03\x0E7\u00BF`n\u0091\u00D7#~\u00D8\u00E3\u00F0\\\u00B6\u008E;\u00C6]I\u00D8\u00E0T|`\u0095\u00B1\u00F6\u00E9\u00E5\x1D\x03\u00B7e\u00CF\u00AC^}p\u00B7\u00F3\u00FE\u00C0\u008A\u00A5\u00C5)t \u00E4\u00BEy\x01\u00B6\u00B6F`\x0B\\]\u00B3^2\u0087\u0097\u00D4}\u00FF|\u00F7n\u00C1\u00B3\u00FB\u009C/\u00C9q\u00B0\u00E9\x15\u00A9\x04\u00D9\u00FC3$\u00F44\u009C\u00885\u009E9\x1D`nw6g\u00A4t\u0084\u0098*\u00D4lS\u009FI\\\f\u0084Z\u00E8?\u00B7;[\u0092)\u00E0\u0082!\b\u00CB\u00C0\u00B6'\x17\u00C3#\u008E^O\u0086S\b\u00D1\u00E8x\u00F7\u0097\u00F7\x1E%\u00A7\u00B2\u008B\u00E6=\x15\x7F\x07B\u00DCY\u00E5\u00FD\u0096\u00D2Nf\u00AAkj\u00DF\u00DF\u00B37\u00D8\u00B4\u0088$|$\u00DF\u00DB\u0083\u00CC\u00CC\u0095&\u00CC=\x10bw6x\x04+aW\u00E3\u00EE`;\u00D2^\u00DBw4\u00BC\u00D3\u00D44\u00FD\u00E7\u008F\u00A8\u00EA\r\x1B\u00EB\u00C5\u00F8\u008C\u00FF\u00F8A\u00B5\u00C4\u00E8\u008En*\u0092n\u00B1\f\u00CF\u00E6\u00E3\u00FF\u00FB\u009E\u00B3\u00C9,\u00EE\u008C9Ys\u008C\u00E3NK\u00A2\u00B3b\"\u00A1\u00E1\u00D7\u00AF,\u00FDv~b\u00DB\u00E0?\x0BX$\u00F3\u00C6\\\u00BCs\u0083w:\u0083\u00ED\u00E8\u00B6\u00F2\u00BC\u00BE?\u00BA\u00F6\u00CC-+\u0088d\n\x1A\u00AF\u00F5\u0096|\u008D\u008E\u00B0\u00B3\x01\x0B\\7\x1AY\n\u00A3Z\u00ADf\u00D1\x12\u0093\u00A9\u00AF]\u00A7\x13\u009F\u00DA'\u00CBL\u00C2M\u00FFE8+\x0B\u00EDn\u00D0\x1B\u00A4\u00B1{\u00B6|RX\u00DD\u00A4]\u00A8^\u00F1\u00FE\u00AAl/\u00B1\u009D\u00D2\u00E5R\u00C55T\u00A5\u00ED\x0F\r\u009B\u00E4@:o0+P\u00DC\u00F7t\u00CB\u00E3\u00EB\u0086`+\x02B\u00DCg\x05c\u00FD#\u009D\u0087/\u00DB\u0087\u0093\u00FD&\u00CCek\n\u00DC&z\u00F5\u00CD\u00D53`\x05\x0F\x00 \u00EE3\x04\x17\u00EF\u00EC<\u00DCa\u00ED1's#\u0093\\\u00DC\x17\x14\u00E6\u00FE\u00F8\u00ED5\t\u00F7\u00EC\x00\x00\u0088\u00BB\u009C\u00DE\u00BF\x18{\u00CF%\u00EF\u00DD\u00F6d\x16\u00F7\u00D2\u008A%\u00A4\u00EC\u00D9\u00B9Y\u00F8-\x02 y@*\u00E4c\u00CA~\u00A0\u009E_\u00B2\u00A0\u00EB\u00F7\u00FA\u00E4\x0F\u00C1'\x15\u00B5\u00AF}w\u00CD\u00EB\u0095\u00E8\x07\x00\u00E0\u00DC\u0093\x1A\u00BB\u00C5\u00D6y\u00B8cl`\x04\u00CE=,\u00D9\\\u00D6\u00AB?[]\u00FE|\t~m\x00\u0080\u00B8\u00A7\x00.\u00DEy\u00E3\u00D4\u00D5\u00C1\u00CB\u00A6\u00A4jU\u00B2\u0089\u00FB\u00D2\u00D2\u00FCMo\u00D7.\\<\x0F\u00BF0\x00$'\b\u00CB\u00F8\u00F5\b\u0097\u00F5\u00DC6\u00CD\u00FC\u00E2\u00857R3k;\x0E\u00AC\u00A8-\u00D3\u00FED\u0083 ;\x00\x10\u00F7\u00D4C\u00B5\u00EE\u0099\u00FCe\u0085\u00FA\u008F/!\x04/\x03\u00F9\u008E\x00\u00A4\x04\b\u00CB\u0084\"y\u00B2$\u0093!,\u0093\u00CDem\u00FB\u00E5K\u00C8w\x04\x00\u00E2>C\u00B8q\u00F2\u00AA\u00E9\u00E2\u00ADY.\u00EE\u00C8w\x04 \u00B5\u00C0\u0094\u00BF\u00E1Y\u00BE\u00A9r\u00C5OWe\u00E6\u00CC\u00DE\x10\u00D6\x0B/\u0097\u0093g\u0087\u00B2\u009B\u00CDf\u00F1\u00D1\u00F6i\x16\x12pj\u00DC\u00F8\x1C\u0082\u00EC\u0093\u00E9\x1F\u0091\u00B2\\7\x1A\u00AF\x1B\u008D\u00C9p\u00A6 \u00EE\u00B3\u0082\u00C5+\u008A4o\u00D5\u00CE/^0\u00DB\x0E<\u009B\u00CB\u00DA\u00F4v\u00AD\u00F6'\u009A\u00D4j6I\u00E7\u00AF\u00F6|\u00F0\u008B\u00A6w\u008F47\u00FB\u00CBY\u00B0]\u00C2ni1\u009B\u00FD\u00E7;<\u00B8\x7F?[ \u0082\u00D4D\u00BA F0h\u009Bv\u00DD\u00A5\u0098\x1E\u00BE\u00D8\u00A4\x0Bm\u00ADL\u00E3\u00E8G\u00FA\u0090\x0E\u00F0\u00B7\u00FB>\u00E4y\u009BtF\x17\u00FF#b\u0088\u00FB\u00A6\t\u00D3\u00C1G\u00BD\u00FE\u0091p\u00BC:\u00B1\ra\u0097i5>\u0099\u0082f:\x04<S\x10w\x10\u0098\u00F9%\x0B4o\u00D5\x14\u00ADV\u00CD\u009EC^Z\u009AO\u0086=\u00E52\u00D9\u00C9\u00F7\u0091\u00A0\u00ECh\u00D8\u00F9\u009B}\u00FBT\u00A5*\u00A6&\u00F4/}..\u00D3Co\u0098\u00C6\u00B1O\u00E8M[[\u00EB\x15\u0083\u009E~4K`[\u00D2\u008E!$\u00E9\u00FAu#o\u00E3I\u00BFH\r\u00A5\u0093d1\u00FB)\u0096\u00C3\u008A\u00B2X|?V\u00D7\u00D4\u0096\u00AB\u00D5\u00ACj\u00D6\x12\u00B6\x0B\u00DB\u0092~\x14\u00BF\x12K\x13\x1B\u00C0\x0EDZf@\u009F\u00CB>lkm\u00A5V\u00F96\x13&\x11\u00CB\u00CD\u00F5\u00AD^\u00CDq\u00B9t\u00A4t\u00BC\u00D2\x1D\u00D9\u0081KKXY\u00A5!}ds\u00B2\u0093\u00B2\u00AB\u00D5j\u00FF>d\u00BB\u0088\u00DD(;\u00A2\u00C7\u009B\u00F5\u0099\u00D8\x06\u00A4\u00EC\u00C2\u009A\x1B\u00B9\u00D2^ee\u008Av[,\u009C\u00D5+m\u009E\u00EC,H\x17]b[\u00B2\x7F\u00A5\x05\u00CEr\u0090-3\u0095\u00CE\u009AMY\u0092\u00A9\u009B\u00EFH:+\u00CE\x11\u00C8\u00E6.g\u00CA\u00A2R\u0095\u00D2\x1B\u00FAj\u00F3\u0096\u00AD'\u008E\x1D\x7F\"C\u00FC\u00F6\x1D\r\u00CC\u00EB\u00E9\x04\u00F3N\u00EA#\u00A8\u00E7\u00D0\u00C6\u00FA\x1F\u009D\u00F1\u0099\u00C8n.7\u0097\u00BE}\x7F\u00CF\u00DE\x10f\u0093t\u00F0\u00FD={\u00D8\u00AC\u00B6\x1F\u00ED\u00FB\u0090\u00B6\u00A7\u0092\u00D9\u00A2\x19\u00A7[\u00FE\u00F4\u009B}\x1F1C\u00AD}\u00F9e\u00FA\u008A\u00B4\u00B2\u00B0\u00B0\u0090\u00DAi\x13\u00D4\u00EA\u00C5\x17\u00FF\u00F5\u00EC\u009F\u00CFp\x1Cg\u00B1X\u00FE\u00EB\u00C3}\u00B4\u00C1\u00E7\u00CD\u009F\t:\u00C5WUi\u00FAhH\u00F0\u00B5\u008A\u00A3B\u00D8\u0081\u00B0\u00AF~\u00BE{7\u00BD\u00F9\u009FO>\u00A1Z\u00A8\u00B5\u00AC\n\u0086o\u00E4\x10$5M\u0098\u00E9\u0097\u00E9 \u008Ds\u00F4\u00FF\u0083\x07\u00F6S;I\u00F4\u00A9\x04qE=\u00E6\u00F4\u00E9\x13\u00AA]\\\u00C7\u00C37\u00D5bu\u00CD\u0099\x16\u009F\u00BES7\u00DAl\u00FC\u00C1\u00FD\u00BF\u00A3\u00AE\u00E0m6\u00B5\u00BAb{C\x03\u00F5!U\u00B4\u00B1\u00BE\u00DE\u00B7\x18\u0088\u00D1HE\u00B1^\u00A5\u0083zw\u00F2B}$\u00B8\u009F\x1E:D\u0085\u00B0\u00C1\u008F\u00C6\u009B\x13\u00C7\u008F\u00B3\u0099{\u00DF}\u00EF=j\x12\u00AB\u0097\u00EA*\x10j\u00A7+\x1BvqS\u00A5\u00D1\u00F8N\u0096\u00E0\u00FD\u00D9\u00E9\x13\x1BL[\u00F6\u009BL\u00D4\t\u00D4El}\x12\u00AAwGC\x03;\u00D1X\u00B8\x03\u00CE=\x1AT\u00EB\u009EY\u00D5\u00B4nf\u0087\u00E0\u00B5\u00DB4\u00AF\u00FElu\u008A\x06\u00D9\u0099@K?!\x15#Y!]\u00A0\u00D7\u0085\u00B66f\x00IM\u00C8\u00DA\u0097\u00A8T\u0082\u0095\u00AE!E\u00D8\u00B2e+[\u0086\u0082DdWc#\u00A9a{\u00BB\u00EE\u009D\u00A6\u00F7>\u00D8\u00B3\u0097T\u00ECL\u00F0\x18.)\u00BBOC\x05wL\u00C2M\u00A2C\u00E5\u00D0\u0098A\x12S\u00A5\u00A9\u00F2\u00AD\u009E!\u0098_\u00DAf\u00C3\u0086\u008D\u00AC\"&s\u00A5\u00AAR*|\u00CD\u00BF\u00AD\u00A1\u0096l\u00DE\u00BA\u00956`\x11\fRy\u00AA\u00D7\u00A7\u009B\u00ED:\x12,RR\u008B\u00E0\u00F9O\x0B\u00F2\u00C7\u009A}\u00A1\u00B5\u008Di\u00F7\u00E6\u00AD[\u00A4\u00CA\u00EE\u00FB\x15-U\u00F5\tV\u0097T\u0098^>\u00BB\u00DDg\u0092\u00AE\u0088M\u0097\x0E\u00F4\u00AF\u00B8V*UD\u00EF}\u00A3\u00CBd\u00F3\u00BEAh\x00\u00F5\u0086\u00B6NK\u008A\\X\u00B8\u0098Z\u00FB\u00C1\u00DE\u00BD\u00EC\u00C3\u0080]A\u00BDJ\u00DB\u00C8\u00FA_\u00E8s^\u00DC\u0085\u0094\u009D\u0086\rV\u00BB\u00B1\u00BB\u009B\u00DE\u00B3\u00CB\x0B\u00EA\"\u00D6-\u00D4f:\":\x05\u00ECd\u00D1\u00BF\u00EC\u00DC\t#e\x0B\u00B5\u009Cz\u0080\u00BA\u00A5\u00A0\u00A0@\f.\u00B1z\u00D9\u00F2\u00AA\u00BE\u008D\u00DFm\u0082RA\u00DC\u00A3\f\u00D1T\u00EF\u00AD\u009B\u0091!\u00F8l.\u00AB\u00E1\u00D7\u00AF\u00BC\u00F0Jy\u00EA\x1E\x02\u0097\u00CB\u00C9\u00A2(t\u00F5\u00CF\u00A4\u008D9k\u00A6\u00C2\u00A4\u0092\u00A4A\x01\u0097Z\u00A6\u00CD\u00E8E{\u0091\u00DE1'K?\u0086\u0088\u00C8o\u00DE\u00B2\u00C5\u00E7d\u008F\x1F\u00F3ET\u00FALL\u00A3\u00E9\u00E5\u00B3\u0093\u00C2\u009As\u00BEe\u00EA\u00F4\x06m\u009D|\t$\u00A6e\x06\u00BD\u00E1\u00A3\x0F?\u00A4\r\u00A4\u00CBPP\u00BD\u00EC\u00B2\u0083\u00AAf\u008D\u00F4]\r\u00D8|IS\u009F\x1E\u00FA$\u0097\u00CB\u00A56\u00D2\u00E74\u008A\u0090W\u0095\u00DD\u009EU\u00AB\u00D54\u00C0\u0090\u00A6\u0097\x0B3\u00A4\u00D3\u0085\x05\r3!\u00D6\u00CA\u00A0m\u00D8!\u00FB+5\u00BB\u00F8\u00A0\u008E\x12\u0087\x07zO\x1F\u00B2\u0096\u00F8\x13p\u00CEw\x1A\u008AH\u008E\u00D9\b'F\u00AB\u00C8\u00E6S\u008DT\x1A\u00EDb\u00D0\u00EB\u00E9+:#\u00AC\u00B7\x0B\u009E\u00F4\u00B9x\u00B2\u00D8{j\x00\u00D5K\u0083\x04u\x17\u00E98\r6b3X\u00BD\u00F4#\x1D\x07\x04\n\u00E2>\u00DD\x10\u00CD\u00AA\u00F7\u00D6\u00A9\u00D6>3\u0093\x0E\u00AA\u00B4b\u00C9\u00AE\u00FF\u00DE\u0098\u00EA\u0099\u00EC\u00BE\u0085\u00D6t:\x16\u00F9%KHoX\f$M\b\u00CB\u0092\u0080\x06[\x11Bv\x1F\u008F$F\u00F4\u009B\u00B4c\b\u00D5`\u00FAK\u00FF\u00FA\x04K\u00D8lW\u00E3n\u00F2\u008F\u00A4\u00F8L\u00A3I\u00B9\u00E8\u00B5\u00B2*\u00F0}i\u00C1\u00B1\u00D6\u0092\x01\u00E7rs\u00C3\u008E[T \u0095L\u00E5\u0093\u00DD&\u0089\u00A4c\u00A1Z\u008E|\u00DE,\u00B5\u00D2\u00A4\u0098>W\u00DB\u00AEc\u00E2N\u008D\u00A7\x1F\u00A5\u00EB\u00A6\u00E6\u00E6rf\u00F3\x10\x1F\u00C1\"\u00E0\u00AC4!BRE\u00EDd\u00F7\x03h\u00A8`-i\u00D7]\n\x16\u00F4\u0097\u009D\u0091\u00C7\u008B\u00A0\x1E;F\u00FDC\u00A7\u0080]HQ\u00CBY\x00\u008D\x0E\u009C\u00BE\u00D2>Y\u00FF\u008F]@\u00D0\u00B9\u00A3-\u00D9\u00F6\u00AC\n:\u0089T)\u00F5%\u00C9\u00FA\x0E\u00A1o\u00FDG#v\x12\u008D\b\u00BB#\u00E6>M\u0096o\u00AA$\x17\x7F\u00E3\u00E4\u00D5\x19\u00F0 \u00EB\x0B/\u0097\u00A7\\VL0\u00F3(\u00A4\u0085\u00F8\u0096{\u00A6K~\u0092\u00D4\r\u00F5\u00F5\u009F~r\u00E8\x17M\u00EF\n.{k`\u0081.U\u009D9\u00DD\u00C2\u00DC\u00AE\u00A8\x14\u00DBw4P9\u00822.&m\"\u0085\"\x13\u00CAb\u00FA\x01\u00FC\u00FB\u00D6-\u00B4\u00F1\u00FA:-}\u00FB\u00AB={\u0098\u00A81}g\u0096\u00D3_\u008C\x18\u00A4S\x07|\u00EE\u00FB\x12\u00D5\x12\u00FA\u00D0\x04\u009F\u00FE\u00BB_\u00ED\u00F9@\u0088\u00A5\u00FC\u0088\u00A4\u00B6\u00AD\u00B5\u00D5b\u00B1P\u00ABd\u00BE[\u00AD\u00AE0\x1A\u00BBY\u008D\u0082DN\u00FA\u0096\u00FA\u0084\u009C\u00EF/\u009A\u009A\u00DE\x17\u00DA\x19a\u00AF\u0092\u00AA\u00D2q\u00D1\u0080\u00B7ac=U\u00B7RSE\u00E3\u00C7\u00A7\u0087\x0EUi4\u00E2\u00AAO!\u00A0AN\u00A7\u00D3\u00B5\u00B5\u00B6\u00B10:\u00BD\u00A8[w\u00EDn\u00A4F\u0092\u00AC\u00D3\u00F8D\u00E3\x07\u00DB\u00B2\u00CF\u00D4'\u009E,\u00EAs\u00FA\u0097N\x1F\x1D\x05\u008D\x01\u009Bwo\u00A5\u00ED\u008F47SK\u00FC\x07i\u00EA|\u00BA\u008E\u00F9\u008F\u00C6\u00DD+\u00AB\u00AA\u00A0Nx\u0088I\x01\u00C6\u00FAG\u00BA\u008E\u00EAc:\u0097dL\x1Fb\u00CA\u00E6\u00B2H\u00D61\u00A9@\u008C`wA7?\u0089\u00B3\x03\x194D}\u00DE\u00EC[\u00EA\u009A\u0084\x1E\u00BD\u0081\u00B0Lr\u00C1\u00B2$\x17\u00AF(J\u00C5\u00C6\u00B3|G({\u008C\u00A0K\x01\u00B2\u00F3\u00C2=L({`\u00C8\u0083S/\u00CD\u00F2\u00F5N\u00E1\u00DC\u0093\u00DE\u00A3}q+FY\u00921r\u00EE\u00CB\u009F/\u00DE\u00F0\u00E6\u008Bx\u00F4\x14\u0080\u0099\x07b\u00EEJ\u00A2Z\u00F7\f\u00B9\u00F8\u00CE\u00FF\u00BD\u009C\x12!x\u00ED6MJg\u00C5\x00\x00\u00E0\u00DC\u00E3\u008A\u008Bw\u00EA?\u00D6)\x1B\u0082W\u00D6\u00B9gsY?\u00FE\u00CF5\u00A5\x15Kp\u00B2\x00\u0080\u00B8\u0083\u00A9\u00A1\u00EC\\\u0092\n\u008A;\x0B\u00B2#\x14\x03\u00C0\u00CC\x06a\u0099X\u0091\u009CY\u00923&\u00DF\x11\x00\x00qO\x18E\u00ABK\u00E7\x17/\u008Cu\u0096d\u0084 \u00DF\x11\u0080Y\x05\u00C221\u00C7\u00C5;\u00BB\u008E\x1A\u0086:\x07\u00A7S\u00C84\u00C32KK\u00F3_}s5\x16Q\x02\x00\u00E2\x0E\x14\u00A6\u00F7/\u00C6\u00DEs\u00D1?\x12=\x1DqG\u00BE#\x00\u00B3\x10\u0084e\u00E2D\u00D9\x0F\u00D4\u00F9\u00CB\x0B\u00E3\u009F%Y\u00FB\u00DAw\u00D7\u00BC^\u0089\u00FE\x07\x00\u00CE\x1D\u00C4\x10\u00BB\u00C5\u00D6y\u00B8#\u008A\x10|\x14\u00CE\x1D\u00F9\u008E\x00@\u00DCA\\\u00E9:\u00AA\x1F\u00BCl\u009A\u00D2.S\x15\u00F7\u00A5\u00A5\u00F9\u009B\u00DE\u00AE]\u00B8x\x1Ez\x1B\u0080\u00D9\t\u00C22\t\u00E0\u00B9m\u009A\u00FCe\u0085\u00B1\u00CB\u0092\\Q[\u00F6\u00EA\u00CFV\u00A3\u009F\x01\u0080\u00B8\u0083x\u00C3\u00B2$;\x0F_\u00B6\x0F+\u00FC\u00E8)\u00F2\x1D\x01\x00i\b\u00CB$\u0096\u00C8\u00B3$#\t\u00CB,(\u00CC\u00FD\u00F1\u00DBk\u0090\u00EF\b\x00\u0080\u00B8'\x05\u0091dI\u0086\x15w\u00E4;\x02\x00\u00A4 ,\u0093x\u00A6\u009F%\u0089|G\x00\x00\u009C{\u0092\x12:K2\u0098sG\u00BE#\x00\x00\u00E2\u009E\u00EC\u00B8x\u00E7\u008DSW\x03fI\x06\x14w\u00E4;\x02\x00 \u00EE)\u00C3\u00E0\u00E5\u00BE\u00AE\u00A3\u0086\u00B0\u00E2\u00BE\u00A2\u00B6L\u00FB\x13\r\u0082\u00EC\x00\u0080\u0080 \u00E6\u009EtD\u0092%\u00F9\u00EA\u009B\u00AB\u0091\u00EF\b\x00\u0080sO=\\\u00BC\u00B3\u00F3p\u0087\u00B5\u00C7,s\u00EE\u00C8w\x04\x00@\u00DCS\x1E1K\u0092\u0089{i\u00C5\x12Rv\u0084b\x00\x00aAX&\u00A9)\u00FB\u0081z~\u00C9\u0082\u00AE\u00DF\u00EB\u00D3\u0090\u00EF\b\x00\u0080s\u009Fa\u00D8-\u00B6\u009B\u009D\u0083\u00DF]\u00F7,\u00BA\x02\x00\x00q\x07\x00\u0080\u00D9K\x06\u00BA\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00 \u00EE\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\x00q\x07\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00\x00\u0088;\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00@\u00DC\x01\x00\x00\u00C4\u0090\u00FF\x17`\x00\x1A>;\x07\u00B3\u00EBB.\x00\x00\x00\x00IEND\u00AEB`\u0082";
						
					var binLogo5 ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F4\x00\x00\x00\u0096\b\x02\x00\x00\x00\u00A7\u00FF\u00ED8\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1C_IDATx\u00DA\u00EC\u009D]P\x14g\u00BE\u00C6Q\x11\x18T\"\u00A0 0\u00E3G\fc\x12<\x0E[\u00D1\x1C\u0088\u00EBV\tYsJ\u00C8\u009E\u00AA-u\u00CFI\u0095\x1F\u00D9\u008BU\u00EB\u00DC$\u00EC\u00DE$fo\u00CE\u00C6\u00EC\u00D5\u009A\u00DC\u0099\u009C\u00AB%9\x17g\u00D5\u00AA\u00AD\u00EC\u00A2\u009B\u00DA-\u00A0\u00CEI\u00D6a\u008D\u00D90\u00ACF\x19\u00E4C\x19@\u0094\x19\u0090\u008F\u0099\u0081\x19\u0086\u00F3t\u00BF\u00DA6\u00F3\u00C50\u00D3\u00C3|\u00F0\u00FC2e\u009A\u009E\u00EE~\u00DF~\x1B\u009E\u00F7\u00E9\x7F\u00FF\u00FB}W8\x1C\u00A3\x19\u0084\x10B\u00D2\u008B\u0095l\x02B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B(\u00EE\u0084\x10B(\u00EE\u0084\x10B(\u00EE\u0084\x10B(\u00EE\u0084\x10B(\u00EE\u0084\x10B(\u00EE\u0084\x10Bq'\u0084\x10Bq'\u0084\x10Bq'\u0084\x10Bq_\u00DE\u00F8f=\u00DE\u00E9\t\u00B6\x03!$r2\u00D9\x04I\x0Ed}zbhn\u00CE\u0097\u0095\u00BB!k\u00CD\x066\b!\u0084\u00E2\u009E\u00F2\u00CCL\u008D\u00CC8G\x1E/;Gf=\u00CE\u009Cg\u00CAV\u00ACX\u00C5\u0096!\u0084\u0084\u0087a\u0099$enn\u00D65vOQv\x01\u00C4\u00DD9\u00DA\u00E7\u00F3\u00BA\u00D9>\u0084\x10\u008A{\u00EA\x01\u00F9\u0086\u0088C\u00CA\u0083\u0088>\u00D6\u008E\u00F6y\u00DC\u008F\u00D8J\u0084\u009000,\u0093t@\u00B8\u00A7'\u0086\u00C2o\u0083\r\u00A4\x10\u00CD\u00BA\x126\x17!\u0084\u00E2\u009E\u00EC\u00CC\u00CD\u00CDNO>\u00F0F\u00E6\u00CA\u00B1\u0099\u00D3\u00EB\u00CE\u00C9\u00D3\u00AF\\\u00B5\u009AMG\b\u00F1\u0083a\u0099d\u00C17\u00EBq\u008D\u00DD\u00F3.&\u00DE\u00E2\u00F3N\u00BBF{\u0083Fo\b!\x14w\u0092x \u00D0\u0090i\u0088\u00F5\u00E2\u00CD\u00BEOz\u00EE:5\u00C26$\u0084\u00A8aX&\u00F1\u00A8\u00F3\x1D\u00A3<\u0082s\u00C47\u00EB\u00CE^W\u00C2,IB\b\u009D{\u00E2\u0099\u009B\u009Bu\u008F\u00DBbTv\u0081wz\u0092Y\u0092\u0084\x10\u008A{\u00E2\x11\u00F9\u008E\x10e\u00CD\u00BA\n9j\u00CF,IBH\x06\u00C32\u0089\x02\x12<39<7\u00E7\u00D3\u00FAV\u00C0\u00C7,IB\b\u00C5=1\u00B8'\u0086\u00BC\u00F1\u00F4\u00D7\u00CC\u0092$\u00840,\u00B3\u00A4\u00F8\u00A4\u00F7K{\u00BD\u00F1\u008F\u009C0K\u0092\x10\u008A;Y\"\u00A2\u00CEw\u008C\x0E\u0091%\u00E9q9\u00D8\u00F2\u0084,C\x18\u0096Y\"b\u00CFw\u008C\u008E\u00E9\u00C9\x07\u00E8T\u0098%I\b\u009D;\u00D1\u00DCAk\u0096\u00EF\x18\x1D\u00DE\u00E9IXxfI\x12Bq'\u009A\x01I\u0095\x06\x15\u00D0.\u00DF1\u00DAjL3K\u0092\u0090e\x05\u00C32q$N\u00F9\u008E\u00D1\u00DE@HY\u0092\u00E8l\u00B2\u00D7\x16\u00F3\u00D2\x10Bq'Q2=9\u00ECq\u008D&]\x7F\u00E3\x1A\u009D\u00F58u\u00EB73\x04OHz\u00C3\u00B0L<<\u00F2\u00ACs\u00B4WCe_\u00B9r\u00E5\u00AAL\u00CD2\u00D6}\u00DEi\u00A7\u00BD\u009BY\u0092\u0084P\u00DC\u00C9\"\u0090f\u00C2\u00B3wk\u009B\u00EF\u0098_\\Zd\u00D8\u009AW\u00B8Q\u00BB\u00EE\u0087Y\u0092\u0084P\u00DCI\u00C4@.!\u009Aq\n\u00B2\u00AF\u00C9[_X\u00A2\u0087\u008B\u00D7\u00EA\u0080\u00D3\u0093\x0F\u00DC\u00E36\u00DCg\u00F0\u00C2\x11Bq'\u00A1\u00BC\u00B0\u0094\u00EF\b\u00B9\u008Ck)Y9\u00BA\"\u00C3\u00B6\u00D5Y\u00D9Z\x1D\u0090Y\u0092\u0084P\u00DCIH\u0096&\u00DFq\u00DC\u00FE\u00D033\u00BDb\u00E5\u00CA\re\u009B\u00E1\u00E2\u00B5\u00AB\u00FC\u00B4\\\u00F9\t^GB(\u00EEDm~'d\u00F3\x1B\u00F7A\x05\u00A0\u00EC\u008E!\u009B\u00DB9\u0085\u00E5\u00BC\u00C2\u008D\u00EB7\x16k\x15\u00A2\u0099\u009B\u00F3\u00B9\u00C7\x07\u00A6'\u0087y5\t\u00A1\u00B8\x13\t\b\"dq\u00C92\u00D9}>\u00DF\u00E8\u00F0 ,<\u0096uk\u00F3\nJ\u00F4\x1A\u0086h<\u00AEQ\u00F9\u0081\x01C\u00F0\u0084P\u00DC\u00971\x10A9\u00E1$\x01\u0099\u00ECS\u00E3c\u00F6!\u00DB\u009C\u00CF\x07e/,\u00D1\u00E7\u00E4\u00AE\u00D5\u00EA\u00C8OR}\x18\u0082'\u0084\u00E2\u00BE,\u0091&QJh\u00AA\u00F8\u008C\u00DB\u00F5\u00A0\u00BFW\u0084\u00E0\u00F3\u008BK\u00B4\u00CD\u0092t\u008E\u00F61K\u0092\x10\u008A\u00FB\u00B2\x03\u00C2\x07\u00F9K\u00F8\u00A0\x02>\u009Fod\u00E0\x1E\\|F\u009C\u00B2$'\u0086\x18\u00A2!$uY\u00E1p\u008C\u00B2\x15\"v\u00B5\u00B3P=m\u00A7\u00DAX\u0097_\u00B8v}\u00816\u00BD\u00CE\u00CC4\u00E4^\u00CB\u009E?3;g]\u00C9\u00CA\u00CC\x1C^zB\u00E8\u00DC\u00D3\u0099;7\u00AE\u00DD\u00EF\u00EFI\u00DE\u00BE\u00C7\u00A7\u00F1\u00CD\u0084\u00E3\u00C1\u00C0WW\u00FE\u009B\u00D7\u009D\u0090T\u0084\x03\u0087E\u00CA\u00B4k\u00EA\u00E1\u00FD~,LM9\u00F5\u0086\u00D2U\u00AB\u00B4\x19xkb\u00D4\u00BEb\u00E5J\u0091\u00B7.\u0092\x1D}\x01\x1A]X\u00A2\u00CF\u00CA\u00D1\u00D9\u0087l3n\u00D7\u0092\u009D\u00EF@_\u00CF\u009D[\u00FF\u00C0\u0082\u00AD\u00FB\x1F\u00FA\u00ED\u00FF\u0094BW\u00EA\u00FC\u00F5\u00FF\u00F3[\u00F3\u00AF;L\u00A5\u00EB\u009E\t\u00B5\u00FD\x1F:;\x06&\u00C6\u00FCVn\u00CF\u00DFx`\u00FB\x0B\u00CA\u008F\u00DE\u00FB\u00E3\x13_\u00DC\u008E\u00AE>\u00F9'^V\u0096}w\u00FE\u009419\u00E4\u00EF\u00B0\u009E\u00FFqFN\u00B8\x17\x17\u00E6Fn\u00CD\u00D9\u00CC\u00FE7\u00DD\u00FA\u00EA\x15\x1B^\u00E0\x1F&\u00A1\u00B8\u00C7J\x7F\u00CFM\u00B1\u00F0hlt\u00C6\u00E3\u00D1\u00EBKt:\u009D&G\x1E\u00B7?\u009Cq\u00B9\u00D6o,^\u009D\u0095]d\u00D8\u00E6\x18\x1E\\J\x11\x0F\u00C4\u00EB\u00F1t\u00DE\u00E8\x18\u00B9o\x13?Z\u00DB\u00BFJ-q\u00EF\x19\u00F5\u009F\x17\u00C5\u00E5\u009D\t\u00B5\u00F1\u00F5\u00C1\u00BB_\u00DE\u00BB\u00E3\u00B7\x12=\u00C1\u00BE-\u00CF\u00A9\u00D7\u00F8\u00DC\u00DE\u0099>\r\x1E2\u00AFX\u00BB\u00C9\x17 \u00D3\u00BE\u00BE\x16I\u00DF\u00C3\u0088{_\u00EB\u00DC\u00E4\u00FD\u00F9\x7F\u00B89+\u00D7o\x13\u008Bmf3>b\u00F9\u00AD\u0086\u0086e\u00FEwz\u00E9\u00E2\x05[\u00BF\u008D\u00ADAq_\u0084m\x7F0\u00D8\u00F7T,\u00A6&{\u00BA{K\u00CBJ\u00F3\u00F3\u00B5yS\u00D4\u00ED\u009C\u00B4\x0Fy\u009E\u0091\u00F5\x1D>\x1Dr/\u009E\u0094.=\u0093\u00E3\u008F\u00AC7:&\x1E9T';\u009Er\u00E6=B\x06'\x1E\u00FD\u00EE\u00E67~+s2W\u00FF\u00A4b\u00B7N\u00BBa8\u00E7\u0089\u00FB\u00A6\u00EFe\u00F4\u00B5f\u00B8\u00C7\u00E6\x1B\u00F3\u00DB\x19^wF\u0088g\x1Bsc\u00BD\u00FE\u00CA.\u00DBve{\u00BB\u00DD\u00DE\u00D5e\u00E5\x1F\u00A9\x00\u00CA\u00CE\u00D6x|G\u00C8&X\u0094mW\u0098\u00F5z\u00FB\u00EF\u00DE\x1B\x1A\u00D2\u00EC\u00ADN\x11\u0093qM\u008Eg\u00C8/\u00A0\u00E6\x17\u0097j\u0098\u00FD\x12!\u00C3\x036\u00CB\u00B5\u00ABjeW\u00CC{\u00FA]S\u0097\u00D7\u00F3\u00DBvs\u00E0\u00FA\u009FT\u00BC\x14&\u0086\u00A3\u00C1\u009F\u00DC\u00D6\u00FD\x01\u00F7J\u00EE\u00B9\u00FB\u00DF\u0086\u00B4\u00ED\u0081_\u00C1\u00B6C\u00DC\t\u00A1\u00B8kk\u00DB\u00D5<\x1C\x1E\u00EE\u00B2v\u00CF\u00CEj\u00932\u00E8\u00F3\u00F9\u00C6\x1E\x0E\u008B\x17Psr\u00D7h\u00FB\x02\u00EA\u0082tw~w\u00BB\u00E3\x1B\u00AF'H\x04C\u0098\u00F74\u00BB\u00ACP\u00F6Q\u00B7\u00FF\u009B\n?|\u00F6\u0085\u009DE\u00A5q-W2\u00EF\x01\x11\u00F6\u00C0X\u00CD\u0093{\u00BA\u00B1\u00B9\u00FB\u00EDal;!\u00A1`X&\x1A\u00DB>O\u00F8\u009CS\u00B7oun\u00D9\u00BAy\u00EDZm\u00DE\x14\u009D\x1A\x1F\u009Bq\u00BB\nee\u00C7\u00BF\u008Fd\u00AD\u008F+^\u008F\u00C7\u00F2\u00B5y\u00F2Q\u00B8\u00A4\u00D8\u0094\u008B\u00BC\u0087\u00E7\x0F\u009D\x1D\u0081\u00A1\u00F9\u00DD\u00A5[\u00D4\x0FQ\x17DWY\u00B6r}4\u00CF]`\u00DE}\u00B7\x7F\u00EF/\u00E2#\u00B7\x02\x1F\u0090\u00FAh\u00DB\t\u00C5}\u00E9m\u00BB\u00C2\u00AC\u00D7\u00DBs\u00A7\u00A7\u00B4\u00ACl\u00C3\u00C6BM\n\u00F5\u00CCL?\u00E8\u00EF\u00CD/.\u00CD\u00CA\u00D1\u00AD\u00DFX\u00ACy\u008E\u00A3\u009A1\u00C7\u00C8\u00CD\u00BF\x7F\x1D\u00D4\u00B0\x07\u009A\u00F7\u00F4\u00D0\u00F7P\x0FQ\x7F\u00B4c\u00D7\u00A2\u008E\u0093SY\u0096\u00B55\u009Aw\x14\u0082G\u00DEm\u00E6@q\x0F\u009A$C\u00DBN\"\u00F2\x10l\u0082Xl\u00BB\u009A\u00C1\u0081\x01[\u00FF\u00A0\u0086!\x1A\u00FB\u0090mrL\n\x7F\u00AF\u0088[\u00F0}\u00A0\u00AF\u00C7\u00F2\u00B7\u00BF.\u00A8\u00EC\u008AyO\u0083\x0B:8\u00F1\u00E8\u00F3\u00CE\x0E\x7F\u0099\u00CE\\}\u00C2T\x1D\u00A7\u0087\u00A8\u00A1\u00CC\u00BB\u00BF\u008E\u008F\u00F5\u00F9\u00CB=l\u00BB\u00DF8?\u00B4\u00ED\u0084\u00E2\u00BEd\u00B6]\u008D\u00C3>\u00D2\u00D3s\u00D7\u00E5\u00D2,\u0091qb\u00D4>:<\x04\u00E7\u008E\x0F\u00EE\x0F4<5\u00AF\u00C7s\u00F3\u00DBoD&{\u0084\u00A4A\u00E4]<Du{=~\u00EBOTV\u00E5\u00EBr\u0097\u00B2&\u0091D\u00DEi\u00DB\t\u00C5=\u00F1\u00B6]\u00A5\u0080R\u0096\u00E4\u00F8\u00B8fs_\u00B8\u009D\u0093\u00F7\u00EFv\u00C3\u00C5\u00CF\x06HR\u00D4L\u008E?\u00EA\u00F8\u00BAM\u00C9d\u008F\u009CT7\u00EFA\x1F\u00A2\u00FE\u00A4\u00E2\u00A5\u00ED\u00F9\x1B\x13\u00F0\u00B7\x17h\u00DEU\x11\u00F6\u00B9\u00C9\u00FBAr\u00DBi\u00DBI\u00C40\u00E6\x1E\u00DA\u00DBz=\u00F6\x07\x03Q\u00EC\b\u008B\u00DD\u00D7\u00D3\u00BB\u00B1\u00B8\u00B8\u00A4\u00A4X\u00AB\u00CAxf4\u009B\f\u00C4\u00FE`\u00F8v\u00C7\u00DF#\f\u00C5\x045\u00EF)\x1Ay\x0F\u00F5\x10\x15\u009F\u0084\u00D4'H\u00E4]\u00CE\u0089\u0094\u00D6K\u00B6\u00FDj\u00D4\u00B6\u00DDn\u00B7\u00B7\u0099\u00CD\x16K\u00FB\u0080\u00EDq\u00FF]\u00A6\u00D7\u009BL\u00955\u00B55\u00BA\bnP\u00C4\u00BE]V\u00ABr\x0FZ^n,7\x1A\u00AB\u00AA\u00AB\x0B\x0B\x0B\x17,\u00BA\u00C3\u00D2n\u00B5Z\u00D5\u00BB\x17\x14\x14\x18\u008D;\x0E\u00D6\u00D7\x07\u00EE.\u00AA\u008A\x05|\u0085\u00E3\u008B\u0095\u0097\u009B\u009A\u00DA\u00CCW\x1D\x0E\u0087(\u00FA\u00D0\u0091\u00C3z\u00BD\u00C1\u00AF\u0086\u00F8(\u00F9\u00EC:\u009D\x0Eg\u0087\u00DDQI\x1C\u00A7\u00AB\u008B\u00EAEq\x0F\u00CB\u00D0]k,f\u00F9\u00E1\u00F00~\u00B9\u00B7l1h5P\u0081&tw~g\u00EB\u0089\u00E9w?E\u00D3fB=D\u0085mO\u00E4\u008Ds@\u00DA\u00CCcq\u0097T\u00BE=:\u00DB\x0Ee\u00BCr\u00B9\u00C9o%T\x1E\u009F\u00D6\u0096\u00E6C\u0087\u008F(\x1A\x1A\b\x14\u00F9\u00D3\u00C6\u00DF\nU\u009D\u00B7\u00BE\u00CB\u008A\x0F\x0E{\u00B0\u00AE\u00BE\u00AE\u00BE>\u00E8\u00BE6[\x7FksK[[\u0090\u009CN\x1C\x10\u00EB\u00F19z\u00EC\u00B8_\u00E9\x0E\u00BB]\u00A9-\u00BEr\u00B9\u009C\x1F\u009E;\u00A7\u00F4I\u00A2hu\u0097\u0080R>9\x7F\u00DE\u00AF\u0086\u00F8C\x13\u00C7\u00DF_S\u00A3\u00CB\u00D5Q\u00BB(\u00EE\x0B\u00D8\u00F6\u00C1{\u00B1\u00BE\u00E769>~\u00FBV\u00E7\u00B3\u00DB\u00B7i5PALg\u00E4\u00F1|\u00D7~}t$\u00D6)\u00BCS\u00D1\u00BC\x0FN<\u00FAs\u00F7\u00AD\u00C0\u00F51z\u00F6\u0089/n\u00AD\u00CC\t\u00F7\fv\u00DD\u00BF<\u009F\u00B9)oQ\u00E6}n\u00ACO\n\u00C8\u008C\u00DC\u008A\u00CE\u00B6\x7Fp\u00F6}\u00B52\u00FA_;\u0097\u00EB\u00B3O\x1B\u0085\u008C\x065\u00EC\u00E2\u00DB0@\u0088\u00D1\x01\u009C<}\u00CA\u00EF\x0E h\u008F\x12\b\u008E\x0F\u00A5\u0086\u00BF\x0EQ=\x7Fe\x17\u00AE_)k\u00C1\x1A\u00B6\u00B6\u00B4P\u00BB(\u00EE\u00F1\u00B5\u00ED\u00EA\x10MWg\u0097\u0086Y\u0092\u00D1v3\u008F,\u00D7\u00AEF\x17\u008AI\x03\u00F3\u00FE\u0087\u0080\u00F4\x18\x01\x14\x1F\u00FA\x1Eu\u0092\u008C\u00F7\u00FE\x02OV|\u00EE\u0085\u009F\u0081\x071\u00EF\u00B6\u00ABR\u00E6LT\u00B6](#\x04\u00B1\u00A6\u00B6v\u0097\u00A9\x12J\n\u00C5\u00B4\u00B4[.7\u00FDQq\u00BB\u0097.^\x10\u00E1\x0B\u00F5\u008E\x16K\u00BBZ7\u00CB\u00CB\u008D\u00FBkkL\u00A6J%r\u00A2h7\u00AC\u00F4\u00A7\u008D\u008D'O\u009DV\u00EF\u00AE7\u00E8\u0095\u00E5]&P\u00A9\x14\u0081\u00CE\u00E0\u00E2\u00C5\x0B\u008Ad\u00E3\u00CE\u00E0Wg?\bZy\x1CVlV\u00A6\u00D7\u00D7\u00D4\u00D4bw\u00F8tE\u00D9\u00B1\u008C\u009A+\x1B\u00C30\u00E1.D\u0094\"\r\u00C0`\u00B5\u00AA\u00CF\u0091P\u00DC\u00E3h\u00DB\u00E79\u00C7\u0081\x01\u00B7{\u00BA\u00A4\u00B48!!\x1Ae|G\u00ADH\u009B\u009Cw\u00B7\u00D7\u00F3\u00BB\x1B\u00D7OT&\u00F2)e\x10\u00F3\x1E\u00DB+\u00A9\u00FBkj\u00EA\u00EA\u00EB\x15M\u00C4\x02|\u00BA\u00A9\u00D2\u00A4\u0098b\u00F8\u00F7+MMG\u008F\x1FW[\u00E6\u00CF\x1A\x1B\u00D5G\u0080n*?B=q@\x1C\u00E1\u00A3s\u00E7D\x18\u00BD\u00C3b\u0081\u00DC\u00AB\u00ED\u00BF\u00A4\u00E6\u00E5F]\u00AE$\u00B8~\u00DD\x06\u00F4\u00F7\u00ED\u0086\x06\u00A5t\u00E8/d\u00DA/\u0086.\u00C0a\u00A5\u00BB\u008A\u00AAj\u00A5nj\u008F\x7F\u00E9\u00C2E%\u0088\x0F\u00F5\u00C71\u0095sD\u0089\u0085\u00D5\u00D5\u00A8OkK\u00F3\u00A5\u008B\x17\u00A9`\u008F}\x03\u009B ~\u00B6]\u008D\u00E6Y\u0092\x11\u0086b:oX\u00B4Uv\u00C5\u00BC\u00A7\u00C7\u00B5\u00BE\u00F9p\u00A8{\u00F4a\u0082\u00FF\b\x03G\u009B\u0089\u00CA\u00B6\u0083\u00A3\u00C7\u008EC^\x03\u009F\u009Ab\u008D\u00DAk\u00B7\u00B5\u0099!\u00E8\u00CA\u008F-\u00CD-\u00CAo&|\u00B7Z\u00D9\u009Fzs\u00BDA\u00DD\x1F\u00C0&\u00FBm\u00F0VC\x03\u008A\b\u00FA\u00C4\x15\u00A5\u00C3\u0089?\u00BDKh\u00B7\u0084\u00AA?JW\u0097\u00A2\x00c\u00AE~|\u00AAV\u00F6\u00F9\x1D[-\u00FA\x18*\x18\u00C5}\u0089l\u00BB\u00CA\u00F0j\u009C%\u00B9`(\u00A6\u00E3\u00EB\u00B6\u00FB\u00FD}\u00F19\u0097q\u00FB\u00FD{\u00E9q\u00C5\x7Fw\u00E3\u009B\u00C4V h\u00CE{t\u00B6=\u00CC\u00C3R\u00C8.\u00A4S\u00F9Q\x19\x17W\u00D2z\u00F3\u00D3\u00CC\u009C\u00A0\u00CA\u00AE\u00B6\u00E7\u008F\u00CD\u008A\u00C3a\u00B1\u00B4G~\u008E0\u00FE*\u00A3c\x0F\u00BA\rT\u00FBX0e\u0097khV+\u00B8ni_J`X\u0086\u00B6}aD\u0096\u00A4\u0094#Y\x1C\u00DF\u00C4\u00EAX\u00F2\x1D#\u00A4\u00CB\u00F2U\u00E1\u00A67R\u00EB\u00E2\u00E6d\u00AE\u00DEYTz}\u00F0\u00AEz\u00E5\u00A8\u00DB\u00F9\u00E7\u00EE[\u008B\x1AU\u00E6\u00B1\x18-4\u00B6\u00CC\u00AA\u0088G\u009E\t2\u00DA\u00CC\u00E2m\u00FB\u0082\u00C0}\u008B\u00D0\u0087t\u00EFe\u00B5\u008A\u00A0\u0087\u00CD\u00D6\u00AF\u0084\u00AA\u00CB\u00F4\u00FA\u00F0\u00C9\u008E\u00E8<\x14\x07\r7-\u0082\u00F2\x0B\u00FF6\u00DA\u00EDjA\u00B7\u0087\x10w\x1C<\u0094j\u00AB;\u0092\u009A\u00DA\x1A\u00CA\x14\u00C5=\u0089l\u00BB\u009A\u00E1\u00A1\u00A1\u00A9\u00A9\u00A9\u00F8eI\u00C6\u009E\u00EF\x18\u00D1_\u00ECp?\u00CC{\u00E1\u00A6\u00CD)t}OTV\u0095\u00AE[\u00DF\u00EDx\u00E8\u00F7*\u00D3_zn\u00ED)\u00DD\u00B2\u00D8\u0097T\u00A3\x1E[&\u00B8y\x0F\x18m&C\u00EBWR\u008DF\u00E3\u0095\u00CBO\u00EE\u00BD\u009E\u0084e\u00D4\x16~A\u00B1V\x07\u00C1\u00D5;\x06\u00AAy\u0087\u00A5\x1D\x1B\u00E0\u00BF0\u00D9;\u0081\u00D1\u009B\u00E0\u00B7\u0089.\u00A7:\u00E3\u009E\u00B6\u009D\u00E2\u009Et\u00B6}~\u00CCd\u00BC\u00CB\u00DA\u00BDe\u00ABA\u00DB,I\u00AD\u00F2\x1D\u00D3\u00D2\u00BC+o\u00A2\u00FEh\u00C7\u00AEFK\u009B\u00DF\u00B7\u00FFs\u00F3\u00FA\u00E9\u00DD?Hlpf\x0E\u00FA\u00EE\u00E7\u00E8\u00E3\u00F6J\u00AA\"\u00CD\u00A1|t\u00A8\u00D8N\u0098o\u00A1\u00C2mf\u0089\u00C8\x05}QU\u0095:\x00\u00A6\u00B1S\u00DC\u0093\u00D6\u00B6+\u00CCL\u00BB\u00BB:\u00BB\f[6k5\u009D\u00D3\u00E4\u00F8\u00A3\u009B\u00DF^w;'\u0097\u00EC\x14R\u00C8\u00BC\u00AB\u00DFD\u00DDYT\u00FAl\u00FE\x06\u00BF\u00B7U\u00F1\u00E3\u00F5\u00C1\u00BB\u0089z[5\u00F4\x1F\u00E8\u0092\u008E$c4F\u00FF4\u00D2bi\u00BFt\u00E1\u0082:\x19\x11\u00C6E\u00AF7\u00C0\u00EC\u00EB\r\u00FA\\]\u00EEG\x1F\u009E\u008B\u00BD\u0086A\u00D3l\b\u00C5=Yl\u00BB\u009A\u00FE\u00BB\u00F7\u00A6&\u009D\u00B1gI\x0E\x0F\u00D8nw$\u00E0\u00C1`J\u0098\u00F7\u00C07Q\u00FF\u00ADb\u00F7\x07_}\u00E1\u00B7\u00D9\u00E7\u009D\x1D\x15E\u00A5K96d\x02Qg\u00A6+(\u0081\u00F8\u00C5\u00E2\u00F7z\u0091:M^\u00E3\x1B\x0E[?\u0095\u008A\u00E2\u009E\u00D4\u00B6]\u008D\u00C3>\"\rT\u00B0\u00D5\u0090\u0095\u0095\x15M\u00CD=\u009E\u00EE\u00CE\u00EF\u00E2\u0094\x15\u0093\x1E\u00E6=p\u00A0\u00F6|]\u00EE\x0F\u009F}\u00E1/=\u00F3^\x04u{=\x7F\u00E9\u00BE\u00B5\u00D8Q\u00DDS\b\u00B52*\u0091k\u00B5\u00CA\u00AB\u00F3##\u00D7V\u00EC\u00A5\u00BC^\x04\u00B7~\u00F2\u00D4\u00E9r\u00A3\u0096\u00F9\u0088\x05\u00AAX\u0090\u00CB\u00E9\u00CA \u0091\u00C1T\u00C8D\u00DAv\u00D5\u00AF\u00ECT\u0097\u00F5N\x14Y\u0092n\u0097\u00D3\u00F2\u00B59Q\u00CA\u00AE\u0098\u00F7T\u00BC\u00E2\u00FB\u00B6<\u0097\u009F\u00E3\u00FFh\u00EE\u00CB{w\x12\u009E\u00F6\x1E?`\u00CC\u0095e%\x02\u00A3\x0E\u00A3\u00AB7\b~\u00ADU\x1B(\n\x0E\u00DB\u00AE<\u00F0\x14o\u008Dj[mu\r9\u00F95\u00C5=el\u00BB\u0082\u00C8\u0092\x1C\x1E^\u0084\u00B2\u00D8\x1F\f\x7F\u00F3\u00D7\u00FF\r?=\u00DE\u0092\u0099\u00F7\u0094\u00BB\u00E8\u00BA\u00CC\u00D5AMz\u00A8\u00B1\nR\x1D9\u0083\u00C5\x12(\u00CDz\u00BD\u00A1\u00A0\u00E0q\u00CE\u00CF\u0080\u00CD\u00D6\x15V\u00DF[\u009A\u009B\u0095e%u]\u00FDH6L\u00A2},\u00A8_MZT~\u00FDr\u0086a\u0099\u00C4\u00DBv5\u0091gI\u00DE\u00ED\u00EE\u00EA\u00B3~\u0097$\r\u0098\u008A9\u00EF\x19!\u009E\u00AC\u008AQ\u00C6\"I{_p\u00E00ANe\u0099\u00AE\u00B2l\u0089n\x01]\u00CEP\u0099\u0082\u00EA\u0081Y\u00AA\u00AA\u00E6IpU\u00F5+\u00CA\u00D01\u0097\u009B\u009A\u00DEjh\bz\u0084\u00D6\u0096f\u00E5y)\u00FA\x03\u00E5\u00D9\u00A6Z\u00DCCU \u00C6X9:\x12\u00C5\u00B3\u00A3\u0086\u00A1\u00A2\u00F9(\u0085Ay:\u00F7\u00E4\u00B2\u00EDjD\u0096d\u0098\u0081\n\u00BC\x1EO\u00C7\u00D7\u00E6\u00E4Q\u00F6\u00D45\u00EF\x19\u00F2\u0093\u00D5\u00C0\u0095_\u00DE\u00BB3\u00BAP\u00F49C\x1E8l\u00A6\u00CF\u00B1\u00E0gvl\u00E9\u00C2\u00C4\x1F\u009E;\x17\u00D4z\x7F\u00D6\u00D8\u00A8\u00B6\u00ED\x07\u00E7\x0F\u00DB[S[\u00A3\u0098wh(6\x0E\f\u00BE\u00B7\u0099\u00CD\u00EAa[\u008E\x1D?\u00A1,\u00AB3X\u00D4\u00AF\u0092*@\u008E\x7F}\u00F6l,\u00E7%\u00BF\u00DF\u00A4Sn/\u00D4#\u00E1<u\x18V\u00AB2\u00FA\r\u00A1sO.\u00DB\u00AE03\u00ED\u00EE\u00E9\u00EE--+\r\u00CC\u0092\\\u00FA|\u00C7\u00F46\u00EF\u00A1\u009E\u00AC~\u00DEiI\u00EC\u0080b\u00D1\x01\u00E1\u00FB\u00E8\u00C3s\u00E5\u00E5O'\u00D6\x10c:\u00AAC\u00D5\u0087\x0E\x1F\u00F6KW\u0097F\u009E9}Z\u00D1\u00DF\u00B66\u00B3\u00D5\u00DAYS[+T\u00DB)g\u00AF\u00AB\u00FB\u0086\u00FD55\u00EA\u00C0\u00BA\u00FA\u00DD(t\x00N\u00A7K\u0094\u00AE\u00E1`\u008D\u00A8a]}\u00BD\u00D2\u00BB\u0088\x1A\u00D6\u00D5\u00BF.N\x045lmna8\u009E\u00E2\u009E\u00D4\u00B6]a\u00D6\u00EB\x15Y\u0092zC\u00E9\u00D3\u00A0\u00CD\u0080\u00ED\u00CE\u00AD\x7F\u00C4uP\u0081\x18\u00CD{j\u00BD\u00B0*\u00D8\u00B7\u00E5\u00B9\u00EB\u0083w\u00FD\u00DEY\u00BD\u00F9p\u00E8\u00C6\u0083\u00C1\u009DE\u00A5)t\"p\u00DF.\x191\u00B7Fp\x0B\\U\u00BD_5\u0086\u0097\u00DA}\u00FF\u00EC\u00D4)\u00D9\u00B3K\u00CE\x17r\x1CjxE\x1C\u00C1o\u00FC\x19\b=\u00BA\x13\u00A5\u00C4+\u0097\u0083\u008C\u00ED.\u00C6\u008CT\u00F7\x10\u008B\x05\u00D5\u00B6\u00F5\u00DB\u0094\u00C9@P\u00C3\u00C0\u00B1\u00DD\u00C5\u0094LA'\faX\u0086\u00B6=\u00B9p\u00D8G\u00BA\u00AC\u00DD33\u0092\u009Aw\u00DE\u00B0\u00DC\u00EE\u00F8&9\u0095]1\u00EF\u00A9\u00F8;\x10\u00E6\u00C9\u00AA+\u0089\x7F7\u0082\u00C5.^y\u00E7\u00CC{\u00A1\u0086E\u0084\u00F0A\u00BE\u008F\u0086\x18\u0099+C\x1E{ \u00CC\u00EE\u00A2\u00F3\bu\u0084\u0093\u00A7O\u0085\u00DA\x11{\x1D=v\u00FC\u00AD\u0086\u0086\u00D8\u00DF?B\u00D1\x07\u00EB\u00EAC\u00BD\u00D4\u008D\n\u00A0\u00948=\u00D1MEV8\x1C\u00A3\u00CB\u00F9\u00FC\u00FF\u00D6\u00FA\u00FB\u00D9\u00A4\u00FF\x03^\u0095\u0099\u00E9z\u00F4pj|,\x05\\p\u00FD\u009By\x05E\u0089\u00ADC\u00E0\u00A4K\u0091\u008C\x1B\u00F3\u00E5\u00BD;.\u008F'\u00D4\u008E\u00B3c.W\u00FB@t\u00F5\u00C9\u00DAZ\x10\u00C9\x104sc\u00BD\u00FEst,8\x1A\u00B0\u00E8S\u00ADV\u0091\u00C2h4\x1A\u0095\u00B1\u00C0\u00DA\u00CCf\u00E5\u00AD}Xf\b7\u00FE\u008BpT\x16\u00ECni\u00B7\u00A8c\u00F7b\u00FA\u00A4\x05u\x13\u00BB\u00A0\\\u00E5\u00F9\u00AA\u00DF^J=\u00D5\u00D3\u00A5*s\u00A8\u00AA\u00EB\x1F\x1E1\u00C8\u0081z\u00DC`q@e\u00DF\u00CBM\u008F\u00EF\x1BB\u00CD\bHq_\x16LM\u008C\u00DDn\u00FFj\u00DA\u00EDL\u00F2z\u008E\x0E\u00F5&\x7Fc\u009A\u00F6\x1EL\u0083\x19<\baX&\x1DX\u00B3n\u00BD\u00A9\u00FA\u00B5\u00BC\u00FC\u008D\u00FCU\u0088)\u00B2\u00B1&\x0F\u009E\u009D\u00CAN\b\u00C5=\u0089\u00C8\u00CC\\\u00BDs\u00F7~\u00C3\u00B3\x15l\u008A\u00E8(,6\u00EC{\u00FD\u00A7\t\u008F\u00C6\x10B\u00E6)\x1B\u009B@`\u00D8^\x01\x17\u00DFu\u00F3\u00DAlJ=CK8\u00E5\u00A6\u00BDF\u00D3\u00F7\u00D9\x0E\u0084\u00D0\u00B9'/\x05Ee\u0095U\x07 \u00F1l\u008A\u0088|AV\u00F6K\u00FB\x7FLe'\u0084\u00E2\u009E\x02d\u00EB\u00D6T\u00EC\u00DE_T\u00BA\u0095M\x11\u009E\u00BC\u00FC\u00A2\x1F\u00D4\u00BF\u00B9\u00C9P\u00CE\u00A6 $I\u00ED\x17\u009B\u00C0\u00BFE2W?W\u00F12\u00FC{o'\u00C7'\n\u008E~\u00FB\u00CE\x17\u00F7\u00BC\u00BA:+\u009BMA\b\u00C5=\u00C5(\u00D9l\u00849\u00BDq\u00BD\u0095!x?\u0098\u00EFHHJ\u00C0\u00B0LH`\u00DE_\u00DAW\u00CF,\u00C9\u00A7F +\u009B\u00F9\u008E\u0084P\u00DC\u00D3B\u00CE\u00E4,\u00C9\u0092\u00CD\u008C,K\u00F9\u008E5?>\u00CD|GB(\u00EE\u00E9\u00C3\u00B6\x1D\u00DF{\u00DE\u00B4w\u00D5\u00F2\u0098Z3x\x0B\u00BC\u00B0\u00BB\u00EA\u00B57\x18d\u00B7\u00DB\u00ED\u00CA\u00AB\u00ED1\x1E$\u00E8\u00D0\u00B8Ks\n~kb?#m\u00E9\u00B2Z\u00BB\u00AC\u00D6d\u00B8R\x14\u00F7eAAQ\x19,\u00FC2\u00CC\u0092\x14\u00F9\u008E/\u00EE\u00A9M\u00ADjC:\x7Fy\u00E6\u00DD_4\u00BC\u00FDYcc\u00A0\u009C\u0085\u00DAe\u00C1-\x1Dv{\u00E0x\u0087\x1F\u009D;'&\u0088\u0080\u009A\u00A8'\u00C4\b\x05\u00B6i3_\u008D\u00EB\u00E9+Ujmi\x16\x1A\u0087\x1F\u00B1\x12'\u00F8\u00EB\u00B3\u00EF\u00BB\\N\u00F5\u0088.\u0081g$P\u00F6\u00CD\u0090\u0087\u0083\u008Fz\u00FE#\u00F9|\u00CDJ\x1D\x16\u009C\u00A6\u00D5\u00FAd\b\u009AX\bz\u00A5(\u00EE$8P\u00F6\u00E5\u0096%\u0099\u0097_T}\u00E0\u008D\u0094\u00CBw\u0084\u00EF\u0083\u00A0\x1C;~\u00E2Wg\u00CF\u00EA\rz\u00A1&\u00F8\x17\u00EB\u0095iz\u00B0 4N\u00AC\u00C1BKKs\u0087\u00A5\x1D?\u00DAU\u0088-\u00B1c\x18I\u00EA\u00EA\u00B2\u00BA\u009C.\u00E8\x17\u00D4P=H\u0096\u00B0\u009F\u00CAq\u00C4\u00A1\x1C\x0E\u00E9\u00C7\u00AA\u00EAW\u00CA\u008DFQ\u00B4\u00A8\u0089\u00D8El\u0089\x1F\u0095\u00AF\u0094\u00A3)\x15\x10'\u00A2>fP\u009F+V\u00B647\u00A3V\u00D2f\u00F2 b\u00B9\u00B9\u00D2\u00EC\u00D5:].\u00CE\x14\u00E7\u00AB\u00DEQ\u009C\u00B8\u00FA\b\u00BBL\u0095\u00D0G1&;\u0094\u00DDh4\x06\u00B6\u00A1\u00D8EiF\u00BF3z\u00BCY\u00BFMl\x00e\u0097\u00E7\u00DC\u00C8U\u00B7\u00AA8\u00A6b\u00B7\u0095\u0083\u008Br\u00D5\u00D5\u00F3\u00BB\n\u00EAI\u0097\u00C4\u0096\u00E2_\u00F5\x01\u00979\u00CC\u0096YLc-\u00A7,\u00C9\u00D4\u00CDw\u0084\u00CE*c\x04\u008A\u00B1\u00CB\u0085\u00B2\u00E8\u00F5\x06,\u00E0\u00ABC\u0087\u008F\\\u00BAp\u00F1\u0089\f\u00B9\u008E\x1E;.\u00BC\u009EY6\u00EFP\x1FY=G\u00EA\u00EA_\u00BF\"\u0099\u00C8N]n.\u00BE}\u00E7\u00CC{a\u00CC&t\u00F0\u009D3g\u00C4\u00A8\u00B6\x1F\u009C}\x1F\u00DB\u00E3\u00C8b\u00D2\u008C\u00CBM\x7F\u00FC\u00D5\u00D9\x0F\u0084\u00A1\u00AEy\u00F5U|\x05\u00AD,,,D=\u009D\u00B2Z\u00BD\u00FC\u00F2?\x7F\u00F1\u00A7+:\u009D\u00CE\u00E1p\u00FC\u00E7\u00FBg\u00B1\u00C1\u00A7\u008D\u00BF\u0095u\u00CAe2U\u00F6\u00A3K\u0090j\u00A5\u00C3A\u00C4\u0089\u0088\u00AF~v\u00EA\x14\x16\u00FE\u00EB\u00E3\u008FQ\nj+\u008A\x10H=\u0087,\u00A9\x19\u00F2H\u00BFB\x07\u00D1\u00CF\u00E1\u00FF\x1F}x\x0E\u00F5\u0084\u00E8\u00E3\b\u00CA\u008Cz\u00C2\u00E9c\rJW\u00E6\u00F1\u0090\u0086Z\u00AC\u00AA\u00BE\u00D2$\u00E9;\u009A\u00D1\u00E9t}t\u00EE7h\n\u0097\u00D3i4\u00EE8z\u00FC8\u00DA\x10\x05\u00D5\u00D5\u00D7K\u0093\u0081X\u00AD8\u0094hU\u009C\u00D4\u00DB\u00F3'\u00EA\u0083\u00E0~r\u00FE<\x0E\":?\u00F47\u0097.^\x14#\u00F7\u00BE\u00FD\u00F3\u009F\u00A3J\u00A2\\\u0094U \u0097\u008E;\x1Bqsc\u00AA\u00AC\u0094.\u0096\u00EC\u00FD\u00C5\u00E5S*\u008C-\x07l64\x02\u009AH\u00CCO\u0082r\u008F\x1D?..4'\u00EE\u00A0s\u008F\u0086\u0092\u00CDFS\u00D5\u0081\u00F4\x0E\u00C1\u00BF\u00B8\u00A7\u00D6\u00B4\u00B7.E\u0083\u00ECB\u00A0\u00D5k\u00A0b\u0090\x15\u00E8\x02>\u00AD--\u00C2\x00BM`\u00ED\u00CB\u00F4z\u00D9JWC\x11\x0E\x1F>\"\u00A6\u00A1\u0080\u0088\u009C<}\x1Aj\u00D8\u00D6f~\u00AB\u00E1\u00E7\u00EF\u009Ey\x0F*v%t\f\x17\u00CA.i\u00A8\u00EC\u008E!\u00DC\x10\x1D\x1C\x07}\x06$\u00C6Ti\u0092f\u00CF\u0090\u00CD/\u00B69x\u00B0N\x14$d\u00CE\u00A07\u00E0\u00E0{\u00BF\u00BF\x1759t\u00E4\b6\x10\x11\f\u00A8<\u00CA\u0095t\u00B3\u00CD\f\u00C1\u0082\u0092:d\u00CF\x7FY\u0096?Q\u00ED\u00D6\u00E6\x16\u00A1\u00DD\u0087\u008E\x1CV+\u00BB\u00D41\x1B\u00F4\u00FD\u00B2\u00D5\u0085\n\u00E3#\u00D9\u00ED~\u009BzFl\u00DC:\u00E0_e\u00AET\x14\u0084e\u00A9w\u0099o\u00DE\x0F\u00CA\x15@k\u00D4\u00D4\u00D6@\u0091\x0B\x0B7\u00A0\u00B6\u00EF\u00BE\u00F7\u009EX\x19\u00B4)\u00D0\u00AA\u00D8\u00C6\u00AF\u00FD\u00E56w)\u00BB@\u00D9\u00D1m\u0088\u00D2\u00AD\u009D\u009DX\x16\u00B7\x17h\"\u00D1,\u00A83\u00CE\b\u0097@\\,\u00FC+\u00AE\u009D\u00DCS6\u00A1\u00E6h\x014KAA\u0081\x12\\\x12\u00E5\u008A\u00E9U\u00A5\u008D\u00DFn\u00A0RQ\u00DC\u00A3\f\u00D1\u00BC\u00B4\u00AF>-C\u00F0\"\u00DFq\u00DB\x0B\u00BBS\u00F7\x14t\u00B9:\u00BF(\n\u00EE\u00FE\u0085\u00B4\tg-T\x18*\t\r\n:\u00D526\u00C3\x07{A\u00EF\u0084\u0093\u00C5\u008Fa\"\u00F2\u0087\x0E\x1F\u0096\u009C\u00EC\u00C5\x0BRD\u00A5\u00DF&4\x1A\x1F\u00C9N\u00CAs\u00CEI\u00D3\u00D4\u00B5[jj\u00FD\x1F]\b-\u00B3\u00B4[>x\u00FF}l\u00A0\u009E\u0086\x02\u00E5\u008A\u00DB\x0E\x14-*)\u00DD\r8\u00A5i\u0092>9\u00FFq\u00AE.\x17u\u00C4z\u00F4\"\u00F0\u00AA~\u008Fg\u008DF#:\x18hz\u00B9<B:n,\u00D0\u00CD\u0084\u0099+\x03\u00DB\u0088S\x0ETjq\u00F3\u0081\u0086R\u00BA\x07,c\u00A5\u00A8I A\u00C7|GW\x049\x16=\u009C\x12\u00AD\u0082\u00CDG\u00898\x1Av\u00B1\u00B4\u00B7\u00E3+\\\x11\u00D1\u00DA\x05O\u00DA\\\u00B9Xb\x19\x15@\u00B9\u00E8$\u00D0\\\u00D0qt6J5D\u00B9\u00F8\x11\u00E7A\u0081\u00A2\u00B8\u00C7\x1A\u00A2\u0081\x7FO\u00B3,\u00C9\u00F4\u00C8w\u0094&Z3\u009BE\u00E4\x17\u0096\x10\x0B\"\x06\u0092!\u0087e!\u00A0\u00A1f\u0084\u00F0{\u008E\x07\u0089Q\u00FC&v\f\u00A3\x1AB\x7F\u00F1\u00AF$X\u00F2f'O\u009F\u0082\x7F\u0084\u00E2\x0B\u008D\u0086r\u00E1\u00B3+XG\u00F2\u00C4\u00B1\u00BE\x02\x03\u00AE\u00CB\u00CD]\u00B0\u00DF\u00C2\x01qd\x1C\x1Fv\x1B\x12\u0089sA)\u009F}\u00DA\u00A8\u00B6\u00D2PL\u00C9\u00D5\u00B6\u0099\u0085\u00B8\u00A3\u00F2\u00F8Q=ojn\u00AE\u00CEn\x1Fq\u00B9\"\u009A\u00C6@\u00D8p\u00DC\u0082\u00A0\u009E\u00E2y\x00\u00BA\nQ\u00936\u00F3\u00D5PA\x7F\u00BF+\u00F2x\x12\u00D4\x0B\x17\u00D0>\u00B8\x04\u00E2F\n5\x17\x014\u009C8\u00BE\u00AAy2\u00FF\u009F\u00B8\u0081\u00C0\u00B5\u00C3\u0096b{Q\x04.\"\nE[B\u00D6\u008F\u00C9m\x1B\u00D8\x1B\u0089\u008Bhe\u00D8\u009D1\u00F7\x18\u00D9\u00B6\u00E3{k\u00D6\u00E5\u00F7v~\u009B\x06/\u00B2\u00C2\u00AD\u00A7\\VL(\u00F3(\u00A7\u0085H\u00D3=\u00E3\u0096\x1F\u0092z\u00B0\u00BE\u00FE\u0093\u008F\u00CF\u00FF\u00A2\u00E1m\u00D9e\x1F\t.\u00D0\x06\u00FD\u0095\u00CBM\u00C2\u00ED*Jq\u00F4\u00D8q\x1CGV\u00C6\r\u00D0&(\x14L\u00A8\u0088\u00E9\x07\u00F1\u00EFG\x0Ec\u00E3\u00FD\u00B55\u00F8\u00F6\u0097g\u00CE\bQ\x13\u00FA.,g\u00A0\x18\t\u00A0S\x1FJ\u00EE\u00FB*J\t\x7Fj\u00B2O\u00FF\u00CD/\u00CF\u00BC+\u00C7R^\u0087\u00D4\u00B647;\x1C\x0E\u00D4\u00CA\u00CFw\x1B\u008D;\u00AC\u00D6NQ\u00A2,\u0091\u00F3\u00BEE\u009B\u00C0\u00F9\u00FE\u00A2\u00A1\u00E1\x1D\u00B9\u009E\x11\u00B6*T\x15\u00E7\u0085\x0E\u00EF`]=\u008A\u00DBUiB\u00FF\u00F1\u00C9\u00F9\u00F3\u00A6\u00CAJe\u00D6\u00A70\u00A0\u00933\u009B\u00CD-\u00CD-\"\u008C\u008E\x0F\u009A\u00F5\u00E4\u00A9\u00D3\u00A8$d\x1D\u00FD\x13\u00FA\x0F\u00B1e\u00BF\u00AD_\u00B9Xhs\u00FC\u008B\u00CB\u0087\u00B3@\x1Fp\u00E8\u00D4\x11l\u00FFYc#j\x12\u00D8I\u00A3\u00F1q\x1F\u00F3\x1F\u00A7O\u00ED2\u0099\u00A8N\u00CB}&&M\u0098\u009A\x18\u00BBs\u00F3\x1A\u00FE\u008D_\x11q\u009D\u0089)3+\u00BBbO-_=\u008D\x13\u00E2)\u00E8\u00A1'qv\u00E2\x07\u00BA\u00A8O\x1B\u00A5\u00A9\u00AE!\u00F4l\r\u0086e\u0092\x0B\u0091%Y\u00B0\u00B1,\x15+/\u00F2\x1D\u00A9\u00ECq\x02\u00B7\x02\u00B0\u00F3\u00F23L*{p\u00E0\u00C1\u00D1J\u00CB|\u00BES:\u00F7dg\u00E8\u009E5NY\u0092qr\u00EE\u00C5\u0086\u00F2\u00D4\u00CD\u008A!\u0084\u0084\u00BB#g\x13hH\u00C9fc\u00EE\u00BA\u00F5\u00B7\u00DB\u00FF\u009A\x12!\u00F8\x17\u00F7\u00D4\u00A6tV\f!$\f\f\u00CBh\u00CC3\u00F9E\u00C9\u009F%\u0099\u0099\u0095]u\u00E0\u00DF\u00A9\u00EC\u0084\u00A41\f\u00CB\u00C4\u008B\u00DE\u00CEo\u0087\u00EEuiu4\r\u00C32y\u00F9E\x1C\x05\u008C\u0090\u00B4\u0087a\u0099x\u0091\u009CY\u0092i\u0093\u00EFH\b\u00A1\u00B8'\u008C\u00A2\u00D2\u00ADk\u00A4\x10\u00FCW\u00D3ng\u00E2\u00AF4\u00F3\x1D\tYN0,\x13w\u00BC^\u00CF\u009D\x1B\u00D7\x1C\x0F\x07b9H\u008Ca\u0099\u00BC\u00FC\"\u00D3\u00DE:N\u00B5A\u00C8\u00F2\u0081\x0FT\u00E3o\u00993W?_\u00B9\u00D7\u00F0lE\u00A2*Pl(\u00AFz\u00ED\r*;!\u00CBKy\u00D8\x04K\u0083a{E^\u00C1\u00C6\u00A5\u00CF\u0092,7\u00ED5\u009A\u00BE\u00CF\u00F6'\u0084\u00CE\u009D\u00C4\u008Bg\u00F2\u008B*\u00AB\x0E,Y\u0096\u00A4\u00C8w\u00A4\u00B2\x13Bq'q'[\u00B7\u00C6Tu`\t\u00A6s\u00CA\u00CB/\u00FAA\u00FD\u009B\u0085\u009B6\u00B3\u00CD\tY\u009E0,\u0093\x00\u009E\u00ABx\x19\u00E2\x1B\u00BF,I\u00FD\u00F6\u009D\u00A6\u00BDulgB(\u00EEd\u00A9\u0089S\u0096$\u00F3\x1D\t!\x02\u0086e\x12\x06\u00C4\u00DDT\u00FD\u009A\u0086cI\u00EA\u00D6\u00E4q|GB\b\u00C5=\t\u00EE\u009B\u00B4\u00CB\u0092,6\u0094\u00EF{\u00FD\u00A7\u00CCw$\u0084<\u0096\x176A\u00C2\u0089=K\u0092\u00F9\u008E\u0084\x10:\u00F7d$\u00EA,I\u00E6;\x12B(\u00EEIM\u00B6nM\u00C5\u00EE\u00FD\u008B\u00CA\u0092d\u00BE#!$\u00A4\u00F3c\x13$\u00D1\u00C5\u00C8\\-\u00B2$\u00EF\u00DC\u00BC\u00B6\u00E0\u00C6\u00FA\u00ED;_\u00DC\u00F3*G\u00EE%\u0084P\u00DCS\u0083H\u00B2$M{\x0F2+\u0086\x10\x12\x06\u0086e\u0092\x11\u0091%\u0099\u0097\u00BF1\u00F0+\u00DD\u009A\u00BC}\u00F5oR\u00D9\t!\x14\u00F7\u00D4\u00BC\u00A5\u00CA\\\u00BDs\u00F7~\u00BF,\u00C9\u00C2b\x03\u00F3\x1D\t!\x11i\b\u009B \u00991l\u00AF\u0080\u008B\u00EF\u0092C\u00F0\u00CCw$\u0084D\x0E'\u00EBH\x01\u00A6]S\x0F\x07z\u00F4\u00CF1\x14C\b\u00A1\u00B8\x13B\u00C82\u00861wB\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B(\u00EEl\x02B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00A1\u00B8\x13B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10B\b\u00C5\u009D\x10BH<\u00F9\x7F\x01\x06\x00\u00FD\x18\u00F9w\u00B9=\x15\x1B\x00\x00\x00\x00IEND\u00AEB`\u0082";
						
					var binFolder ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00 \x00\x00\x00 \b\x06\x00\x00\x00szz\u00F4\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u009CIDATx\u00DA\u00EC\u0097\u00B1n\u0083@\f@/Q7\u0086\u00B43C24s\u008F/\bc\u00BAehv\u0092\x0F@\u00FD\u0083\u00F6\x13R\u00F2\x03dN\u0087L\u00E9J\u00FF \u0099\u00A9T:\u00B0\x13\tf\u00EA\u00AB\u009C\u0088\"(>.\b\u00A9\u008A%\x0B\u00C1\u0091\u00F8\u00D9\u00BE\u00B3M'MS\u00D6\u00A6tY\u00CBr\x01h\x1D\u00E0\u008A\u00FA\u00A2\u00AE\u00EB\u00D7p\u0099\u00A0r\u00D0>.}\u0081\x06\u00A0\x1B\u00A1a\x18\x062\x00\u009D\u00AAS\u0080\u0086\x1FQ{\u0084\u00FF\\\u0089w\x01$R\x06\x00\u00E3\u00C2S\x17\u00F4N2\u00B2\x07\x11)\u0080\u00F0j\x03\u00A0q\u008F\u00E8u\u0099\u00CC\x00\u00C2\u0095\x06\u00C0\u00B0\x07\u008A\u00C6\u008F\u00910\x01b'\u00BB\t\x17Y\u00E3\u0086a\u009C\x16|\u00DFgq\x1CS\x01z\u0098BN\u008E\x00x?\u0080\u00CB\u00E7\u00F1\u00DE\u00B6m\u00F60\u009D\u009E\u00D6\u0093$a\u00F7\u00E3\u00F1\u00D9RQT\x07\u009E\u00B37\u00B7\u00C3\u00E1\u00AFEM\u00D3\u00D8l>\u0097\x05\u00B0d\"\x10d\u00CE8s\u0096K\u00C69\u0097\u00B2\u00F6\u00BA^3\u00C7q\u00F2\u008Fo\u008A\u008Ef\u00B7`\u00F3\u00F5U\u00AB[>j(\u009C\u0092\x02\u00CE\u009A\u0093A\u00DB\u00BD\u00A0u\u0080]%\x00\u00A5t*HD\u008D\u00C0\u00BE\x01\u00E3\u00872\u00E7\u008A\x00\u00DC\x06\x0062\x03\u0089\u008B5\u00FCG\u00DE\u00B6[ik\x1FP\u00AE\u00A9N\u00955#Q\r\u009F\u00CE\u00E4\u00FD\n\u00C2oI\x01 \u0084\u00C8\u00D9H\u00D1\u00F8\x1E\u00BBaTg&\u009C(nH1\u00AAYU\u0093Q)\x00\u00FE\u00D0\x04}\u00A9a\u00FC]T\u00D5\u00BF\u00E6\x00\u00F2L\u0088\u00E90\u00B1K\u008E\b!_TMA\u00D2\x00\u00B9Y\u00C1\u00C4\u00B2jf*\u009C\u00E8\u00A0\x1E\u00C5c%\u0080\u00CB\u0097\u00D1\u00BF\x04\u00F8\x16`\x00x#\u009E,\u008D\u00E0\u00CB\n\x00\x00\x00\x00IEND\u00AEB`\u0082";
                    
                    var bin2018info="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\u00F5\x00\x00\x01\u0091\b\x06\x00\x00\x00|-*]\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\u00EF\u00C0IDATx\u00DA\u00EC}\x07|\x14\u00D5\u00F6\u00FFw\u00B6\u0097d\u00D3{\x0F\u0084N\u00E8\u00BD\n<@\u00C5B\x11\x05\x1F\u0096g{v}\nv}\u00BE\u00C7\u00B3\u00F7\u00DE\x0B\u008A(M\u00A5*J/\u00A1$\u00F4@\x02\u00E9\u00A4\u00F7M\u00D9\u00BE;\u00FF;3\u00DB\u00FBn\u0082\u00E2\u00EF\u009F\u00CBg\u00C8\u00EE\u00EC\u00CC\u009D;\u00F7\u009E{\u00BE\u00E7\u009C{\u00EE9\u00D4\u00E1S\u00A5{@\nM\u0083\"\u00FF\u00B8B\u00FE\u00D2p-\u00DC\x05\u00EE\x7F\u00A1\u00AD73u\u0091o\x14\u00EC\u00CE\u0098\u00CF\u00DB=\x02\u00B4\u00F9!<x)4\u00B9\u00CC\u00F1\u0099\u0094\u00C7k)o?\u00BA\u00B4\u00D6Ge\u00B6k\u009C[Dyn0\u00FB\u00CE4\u00EDW\x1Bh\u00E7j\u00EC\u00EF\u00A3(\u00A7>w\u00E9\x16\u00C7\u00C2\u0083\u0087q\t\u00A0\u00D0\u0094K_\u00BA\u00D4\u00C8\x0B\u00BE\u00FA\u0087\u0096\x1FBW\x0B\x15\u00E4}o=5\u00C6\u00F3\u008Fn\u00DE\u0089\u00A6\u00D1-\u0085\u00A2\u00BA\u00A9\u00A2\u00EE\u00E893M\u00D1]\u00EAI\u00BB\u00FB}L!\u00DA\u00F9\u00B3\u009BNeh\u00DB\u00D2E\u00B4\x13\u00B5\u0099\x1C\u00FA\u0091g\u00AB\u0090\u00E6\u00EA\u00A2yN\u00D7\u0093\u00AF\u00FC@\u00DE\u0083\u00F6o\u00C0\u00E9\u00AE\x10\u00A7\u00B9\u00AD\x14Ey\u00AF\u0088\u00A2\u0083y\u00A2\u00B9\u0093\u00E8\u008B2\u00A1X>F\x07\u00DD\x1B~\u00F4$\u00ED\u00DA\x10\u00DA\x13\x05t\x03\x7F\u00F3\u0086!\u00A6\u0080:\u00BC\u00EBm\u00A0\u0083\u009D\x7F\u009E\u00FB\u008423\x1B\u009D^\u00F7\u008D\u0080\u00E2\u00F1&\u00B9\u00BC(!B\u0093\u009BNd\u0088\u00D3=\u009F\u00A2\u00CC\u00E0\x0B|\u00FD\u00F9g\u0088\u008C\u008D\u00C5UW]\u00E52\x10\x14\u00E1\u00A0\x16\u00D0\u00A3\x19nj!x//A;\u00FD\u00EE\u00F5rwTJy\u00EE\x1C*\x18\u0082\u00A7\u00BC\u008A\x15\u00FE\u00B3K\nnD\x1E\u00DA,\x1Cy\x07u\u00CA-\x1Ew\x1F\u00A83cB\u00FB\t\u0080\u00FE3Q\n].AVA\u00F1\u00BD\x0Bb\u00E8f\u00F6\u00E1\x1F\u00AD\u00FEq\u0085v\u00A1L\u00AA\u00EB\x03a\u009E\u00C7\x1E\u00E7\u00AF3P\u00D2p\u00CFOL\u00EE/\u00B0\u00AF\u0095G\u00F1l\u00F5\u0099\u00FF\u0098\u009C\x18\x11\u00CF\x19\x1B}\u00BD\x01m\u00A78\x04\u0082E~\x01\u00B3\u00FD\u009Cb8\x1D\u00E5\u00B5\":h\u00EA\u00A3\u00BB<\u008C\u009E\u0094\x17N \u00E9N!\u0095\u00F6\x02P\u00DC\u00FC\u00A4M\u00F0\u00C2\u00F7.\"\u00A8S\x17\u0099\x01\u00B9\u0080zw1@w\x18\u00CD\u00DB\u00C7\u00F3\u009FA\u00F9~\u00A13\u00F9\u00A7\u00F1\u00FB\u00F6m\u0098<i\u00B2\u009F\u0080\u00FBgq=\u00EA\x12\u00E4\u00C6Tp\u0084\u00D3\u009Dm\u00A5,J\x18}Qx\u00C8\u00A5W\u00A8\u00BF`\u00CD=\u00E5\u00AFDF\u00D4\u00C5\u00A4\x14\u00AA\u0087\u00CA\u00FE\u009A\u00F4Bu#\u00E19\x1E\u00B4\u0089\u00E6\u00F1\u00DC\x11\x17\u00ED,M\u00FB\u00D9\b\u008DF\u0083\u00FF\u00BD\u00F82\u00C2\u00C2\u00C3}\x12\u00AF\u00A3\u00C1\u00DE\u00B3\u0096n\u00D4\u00ABPZ\\\u0082\x0B\u00D55\x0E\u00BFj\u00DB*\u00F1\u00DE\u00AB\u00CF\u00E1\u00C1\u00C7\u00DF@QKG\u0097g\u00A1\u00D1\u00A0Fei)\u00CAJ\u00CB\u00C8QB\u008ERT5\u00B6\u00B1\u00BFU\u009F;\u0086\x17\x1E\x7F\x1Co\x7F\u00BA\u008A\u00B54\u00E8\u00C8\u00B3\u00DF\x7F\u00E5Y<\u00F4\u00D8\u00EBhV\u00EB\x03\u009A\u009E\u00EC\u00AA\u0083'\u00E5\u00C6\u0083*l\u00D0*q`\u00DB&\u00AC\u00FE\u00E1G\u00EC9x\u00D4I!\u00A2QWQ\u0080\u009F\x7F\u00FA\u0091\x1C\x1BQRQ\x13\u00A4\u00A2N\u00B3`\u00DEx\u00A1\u008C}w\u00A6\x0F\u00CA\u00CBKP[\u00DF\u0080\u00CE\u00FA\\<\u00FF\u00F0c\u00AC\u00B6tb\u00E3\u0087\u00D8\u00B67\u009F\x13\u00B4\u00FD=|\b\x03<!\x1FB\u00A9\u00C8\u00E1\u00A0\u00F8N\u00F4\u00C2\u00A3p\u00FD\u00B5C\u00D9\u00CF\x19#3q\u00CB\u00E5\x03\u00BAu\u009E\u009D8\u00B8\x1B?m\u00DA\u0084\u00F3\x15\u00B5~\u0093\r\u00E5\u00E5\u00E8j\u00E9\u00A8\u00CB\u00C3\u009D\u00E3\u00C7c\u00C7\u00B1\n\u0097\u00F3\u00CF?\u00F8\u00C4\x1F\u00C6\x7Fj\u00AB\u00AA}X`h\u00B7\u0087?r {\u00AD\u00F9\u009F\u00F7g8\x19\t\b_\u00D0\u00A9\u0094(gh\u00D4r\u0094\u0094\u00A0U\u00C9\u00F1\u0081\u00BA\u00B2<|\u00FC\u00EE\u00C7(W\u00AA\u00D0\u00D1R\u0089\u0095\x1F\u00BC\u0089\u00D7\u00DE\\\x01\u00A5F\x7F\u0091D.\u00DA\x03\u00BB\u00E5\u00CE\u00B74\u00D4\u00A0\u00AAA\u00E5\u00A2\x04\u00D3Nv\u0082c\x1B?\u00C2\u0095w\u00BC\u008E\x06\u00BD\u00AE[$\u00C7\u00E3\u009B>\u00C6\u009C;\u0099\u00FA\u00B4\x1En\u00A7\u00FD\x06\x1E_Z\u00BA\u00AE\u00BD\x1155\r\u008E|\u00CB\u00D0\u0089\u00EA\u009AZ\u009C\u00D9\u00FA\x0E&\u008D_\u0088\u00E2\u0086\x0E\x17\u00ED\u00DCq\u008E[\u00DAe\u00EA\u00F2\u0088\u00D4WWCe4rHB\u00EBPQ\\\u00846\u0095\u00D6\u00DA\u00FF\u00B55\u00D5\u00E8\u00D0\u00B5\u00E3\u00BBg\x17\u00E3\u0083\x15\u00DB\u00FC\u00AAS\u00D7^\u0083\u00E5\x0F=\u0081\u00F3u\u00CA\u00AE\u00D3\x0B\u00E5?\u00B8\u00D7\u00D59\u00F6\u00ABN\u00A3DmC\u0093\u00DBk\u008D&\x13O\u00E0\u00960i\u008E\u0089\u00FA|I\u00AD\x16\x1F~\u00FC\x11\u008E\x1F?\u0086!C\u0086!++\x0B\u009B\bc\u00CC\u00C9\u00C9\u00C1\u00DFfL\u00C7\u00BF\x1E}\u00D4\u00C7D\u00A0=\u00B0A\u00DAjv\u00AF\u00CF\u00DF\u0086\u00DB\x1E|\x15\u0091\u00C9C\u00B1\u00EA\u009B\u00B7!\u00E2\x0B\u00C8$7b\u00CD\u0093\x7F\u00C7\u00FA\x13z\u00E8\x11\u0089V\u00EDmX\u00FD\u00E9;8P\u00D4\u0089g\u009E_\u008A(\u0089\u00D0\u008E0=\x11#\u00CF\u00C1\x04T\u0099\u00FB-nY\u00FA\u00B5\u00C3\x15\u00C2\u0099Ob\u00DB\u00B3W\u00E0\u00AB\u00CF>\u00C4o\x07\u00CE \u009B\x12\u00C3d\u00D4c\u00CD\x13\x7F\u00C7\u009A\u00E3:\u0098\u00A8(h\u008D\u00F7\x05d\u00956\x12B\x7F\u00EF\u00F9\u00FF\u00A2\u00CF\u0082{q\u00F9\u0090\x14\u00BF\u00EEy\u00ED\u0099'\u00B0%\u00E7\u00B8\u00D5\u00C2\u00970\u00F5.|\u00F5\u00FC\x12H\u00F9<t\u00D6\u00E4a\u00E9\x1D\x0F\u00A1\u00BC\u0093#`\u00918\x16\u00FF\u00F9\u00F4s\u008C\u00CB\u008C\f\u009C\u00D4L\x1A|v\u00DB\u008D\u00D8\u00A2\u00A2\u00AD#4x\u00C2t,\u00BFs\x12JT\\\u00FD-E\u00BBQJ\u00C5\x01\x13\x06\u00F8\u00CF\x1C}\u0080\u00FA\u00AC\u00D1\u00A9x\u00FA\u00F6a\x0E\u00E7\u009EY\u00BE\x0B;\u008A\u009B\x1D\u00F8\u00D7\u00A2q\u0091\u00F8\u00E1'\u00A0\u00DF\u00A0$\f\x14r\u008Co\u00F6\u0095\u00D9\u00F8e\u00F3\u00C9 \x05c\u009A0\x1E\x15\u00B6~\u00F0\x18^\u00FE\u00E1(\u00DBL\x11?\nO}\u00F41\u00A6\x0FH\u00F0jH\u00F1\u00B5\u00E2\u00C1\u00D0/\u00D5\x05\u00D3\u0086\u00AE\u00BD\x19e\x04\u00CD\u00DA[58\u00B7w%J\u00E9\u00A1\u00985y {\u00BEXe\u00F8\u00C3@\u00FD\u009B\u00E7\u00FF\u0087\u00DB\u00DF\x7F\x13\x11BQ\u00F0o\x13\u00E0\u008D&\u00B7U8\u00F6\u00E7\u0085\u00C3?\u00E2\u00F6\u00A7>u\u00B8f\u00D1u\x0Fc\u00C9\u00AD\x03\u00F1\u00D8\u00A2{\u00A1L\x1B\u0088Y\u00B7.\u00C1\u00DA\u00F7\u00DE\u00C7W[\u00F7 |\u00F8\\\u00DC\u00CE\u00B3\u00ACm\u00D3~\u00CC\x05=~\\\u00FD3\u00E6^\u00BF 8E\u00CB\u00EE\x11\u009F\u00BE\u00F1\x1F\u00EC\u00E8\x18\u0085\ro\u00DF\f\u00A1\u009D\x1EE;\u0091Vg}#\u00C4\u00C5\u00D5\u00AC\u00F0\x11C\u00FA;\u0098\u00A2n=\u0087\u00DFv\u0096\u00E0\u00EA\u00B9\u00B3I}\r\x10\x16\u0091\u00FAtFR\u00DF\u00C5\x1D\u00B4\u00B6\u00CA\u00FDx\u00EA\u0093\u00C3\u00F8\u00E2\u00CD\u00FFY\u00CF\x15\u00EF\u00FA\x18\x1F\u00EFl\u00C3\u0082\u008CF\u0088x\u0095\x04Tunx\u00B0\u00E3\u0088S<\u00A0\x1B0\x1D\u009F\u00BE\u00F9,\x06\u00DF\u00BA\x1CW\x0F\u0088\u0087\u00AE\u00A5\x02\u00FF\u00B8\u00E5f\u00DCt\u00CF+\u00B8i\u00D1\x04\u00F6\u00F7w\u0097-\u00C3\u0092w\u00DF@SI\x15T!u~9\u0087\u00A8\u009B/`g\u00DE^\\\u00AEz\u00F4\u00A2\t\u0083\u00CEEoh\u00C3\u00E7\u00CF\u00BC\u008A'?y\u00C5&h\u00E7\u00AD\u00C6\u00EB[k\u00F1\u00F6\u00F2g\\\u00E7\u008E\u00C9\u00C8\u0080:\u00CF\x19N\u00FD^l~\u00EF\u00ED7\u00B0i\u00E3\x06\u00F6s\u00F9\u00F9B\u0087\u00AB\u00F2\x0E\u00E7\u00A0\u00A9\u00B1\x11Q\u00D11\u008E\u00CC\u009F\u00A2\u009C\u00BDT\u00E0f\u00F1\u00C6\u00FAq\u00F7\u00CE\\\x16\u00CCZ*\x0B\u00F0\u00D3\u00B1\x1A,\x1C\u0099\u0082\u00FC}\u00BF\u00E2P9\x10\u009D\u0096\u0089\u0085s\u00EFD\u00AA\u00B1\x04_\u00EC\u00DEC\u00B4,\x15~^\u00D7\x1F\u00FF\u00B8\u00F1Z\u00E8;\x1B\u00B0\u00F6\u009BoQ\u00DD\u00AC\x02\u008F\x17\u0082\u00EB\u00FEq+\x12\u00A3\u00C5X\u00FB\u00F1\u0087\u0088\x1E2\x1C\rG\u00F6C\u009C1\x04s\u00AF\u00B9\u00DC\u00FCHN\u00BE\u00C9\u00E8?\f\x7F\x1B7\u0094t\u00A6\x11\u00BD\u00C6\r\u00C6\u00F1\u00CD_\u00E3\\q\x15Di\x13\tS\u009D\u0080M\u009F\u00BC\u008D\u0083\u00E4\u00D9\u00B1i\u00BDp\u00FD\u0082;\x11-\u00D4b\u00F7\u00EA/q\u00B4\u00A8\u0091H\u0084\"L\u00BAv\x11F\x0FL!\u00E0\u00AFA\u00C1\u00C1m\u00F8e\u00F7I\u0096!M\u009Au\x1D\u0086\r\b\u00C7\u00D6U+p\u00F0\u00E0\x01\x14#\x14\tX\u008C\u00D4\u00B06l\u00FDq3\u00EA\u00D4&\bEQ\u0098\x7F\u00F3b$\u00C6\u0084Y\u00FBf\u00FF\u0097O\u00E0\u00D7C\u00E70u\u00C6\x02L\u009E<\x02\x05{\u00D7c\u00CDo\x1F\u00E3\u008B\u00AF\u00C21o,\u00F0\u00E4\u00DD\u00AF@\u0093\u0094\u0086{\u00EF\\\u0082hQ\x0BV\x11m\u00FE?w\u00DC\u008DwV}\u0086\u00AC\u00D8\u00D0\u0080l\x17L;\u00C5\u00A1<\u00DC\u00FD\u00C0\u009B\u009839\u008B;\u00C9\x13B\"T\u00E1\u00DE\u00C5r\u00CE\x11\u0090t\u0093\u0080\u009Cc>\x17\x1E\u00D9\u0089\u00AD\u00BF\x1F\x00_\x18\u0089yK\x16!).<h\u00F2n\u00AF\u00AC\u00C7\u00DC\x17\x0F\u00B3\u009F\u00F9\u0084\u00F9v\u00AAu\u00EC3\x06\u00F6M@\u00AFp1\u008E\x157\u00A2\u00D3\u008Ce;~>\u008A\x12\u00A9\x00\u00E9}\u00E2q\u00F3\u00ACt\u00D0\u00B5\u00ADhnQ\u00E1HIc@\u00CF4\u009A\u00D4\u00F8\u00FA\u00E1\u00DB\u00F0s\u0099\x04/\u00BD\u00B3\x02\u00E3\u0087\u00A6a\u00EB\u00CA\x0F\u00F1\u00C6\u0083\u008F@\u00FA\u00F9;\x18\u0097\x12N\u00C6p;\u00B6\u00EF=\u0081\u00C4\u00AC1\u0098<k\x02\"\u00C4Zl\u00FBf=\u00C2S#q\u00E8\u00E0YddO\u00C4\u00B0>\"Bw[\u00911t\x12\u00AE\u00BA\u0082[z:}\u00EC\b\u00C2\u00C4\x1Al\u00DA\u009A\u0087\u00AC1\u00D31y\u00FC@\u0088\u00C9{i\u0095\u00B5X\u00BFz-\u00EA[\u0081\u00E1Sfb\u00FC\u00A8>`\u008C\x12\u00B5\u00E7\u008Fa\u00C3\u00A6\u00DF!\u0089\u00EC\u008D\u00AB\u00E6]\u008E\u00D0\u00D4\x11x\u00E4\u00CE{\u0090\x16\u00D5\u0082\u00AF\u00DE\u00FD\x01zi!\u00E4\u008A;0f\u00C0\b\u00DC{c\b\x07\x02-\u00B5\u00D8\u00F4\u00FD*T\u00B7\u00AA\u00D1\x7F\u00E4t\u00CC\u00FE\u00DB\x18(k\u008Ap\u00BC\u008A\u0080\u0082\u00A1\x04\u00DBw\u009F\u00C3\u00C8\u00CB\u00E7b\u00CC\u00E0\f\u00EB\u0094r\u0099~>\u008A0$\u0084\u00B4\u00CF\u0091!\x18\u00D4J\u00EC\u00FFe\x13N\u009D)Et\u00C6 \\{\u00FDU8\u00B1c;\u00A2\x06\u008FC\u00EF\u00B8\x10\u00D0\u0084\u00F6\x7F\u00FF\u00FEK\u00F4\u009D\u00B6\x18RU\x19~\u00FDe;\u00D4t(f]\u00BF\b)\u00D1!h\u00AB9\u0087\u00C3%\x1A\u00B4\u0097\x1CF\u00C6\u0084y\x18\u0096\x11\u00E9'\x0B\u00A4\u00ACr:\u008F\u00CFGB\u00F4\f\u00BC\u00F6\u00C5CP\b\u00F8DX6@@k\u00B0\u00EA\u00AB\x15h\"\u00C09}\u00D2T\u0084\u00B6\u0095\u00E0tY5\u0086N\u009A\u0089i\x13&A.\u00A0q6\u00E7\x17\u00FC\u00BE\u00EB8z\u008D\u009A\u008E\u0089S\u0086C!\u00E4C\u00A7\u00AC&\x00\u00BE\x16\rm\x02\f\u009Bz\x19F\x13a{\x17i\u00FF\u00F6\u008D\u0087\u00A0\u00EE\u00A40s\u00F1U\u0088\u0091:\u0082,e\u00D6G\u00DC:\x1E\u00DAu\u00B0^S\u008B\u00FA\u00BAf\u0084\x15\u00AE\u00C6\u00F7\u0087\u00A6`\u00C9\u00B8L3}\x1C\x04\u00A5i\u00C0\u00CE\u00DD\u00A7\x10\u00DF{8\u00E6\u00CE\u009F\u0089!W,\u00C4\u00AD\u00A9jd\u0086\u00C8\u0090\u00BB{/\u0084\u00E1B\u00E4\u00EE8\u0084\x01\u00D3\u00E7!;\x15\u00F8\u00E9\u00BBu\u00A0B\u00B2p\u00ED\r\u00B3!\x13\u00F1\u00D1Xr\u0082\u00D0\u00CCv\x18yQ\u00B8f\u00D1\\\u0084h/\u00E0\u00FB\u00B5\x1B\u00B0\u00E7\u00E0iP\u00C2\bL\u00BE\u00E2:\u00FC#U\u0083^r)T\u00AD5\u00D8\u00F4\u00C3\u00F7h\u00D1I1\u00E5\u009A\u00F9\u00E8\u009F\x16\r]G\x03\u00A1\u00C5\u00BD\u0088\u008E\u00D2!\u00FFL%\u00D2\x07\u008D\u00C7\u00AC+\u00C6A\u00C2w\u0094\\\u00FD\x11b\"\u00FA\u00CEB\u0086z#N\u00D6+\u0091\x1D\x1B\x06\u0083\u00B6\x05_\x7F\u00BC\x11\u00C3\x16<\u0087\u00EC\u00CB\u00E2p\x07\u00EF\f\u00FA%\u0085\u00C1h$B\u00F4\u00EA\x1FPT\u00DE\u008C\u00AC\x11\u00931\u00FD\u00B2\u00C18\u00F6\u00E3wH\u009A4\x0F\u00A9\u00F1\n\x14\x1D\u00D8\u0088\x0E\u00F9\x10\f\x1D\u0092\u008A\x03\u00BF\u00EDF\u00EFq\u00E3\x10\x1B\"\u00B2r(\u008F\u00B8\u00E8\u00F4SF\\\x02\u00D6o;\u00819\u00FD\u00E3p\u00E1\u00D4\x11\u00F6\\Qq.\u00F9\x7F\x02:\u009BNA\x17\u0096\u0084~\u00E1\u00B1\b]\u00F6\x14\u0094\u0092\u00C1D\x00*\u00C4\u00C1cU\u00A8-8\u008C\x06\u008D\u0088\u00F4\u00DD<\f\x1F\u009C\x0E\u00BD\u00BA\x15\u00DB~\u00FC\x1E\u00C5\u00D5Jd\u00F5N\u00B5\u00F1\x0E\u00A3\x1A\u00E7\x0F\u00EF\u00C1\u00F6\u009C\u00D3HH\x1F\u0089\u00D9s&\u00A1\u00A5`\x07\x0E\x16+p\u00CD\u00B5\u00A3\u00A0\u00AE+D^A'\u00A6N\x1DA\u0094\u00DFf\u00E4\x1D8\u0085q\u0097M\u00F6\u00C4x\u00BD\x16\u0089\u00C2\u00D1\x05\u0094\"\x02\u009F\x05\u00B5\u00EB\u00CB\u00CF`\u00CD\u009AM0\u00D0B\\v\u00F5uH\u008B\x0Fu\u00F4 \u00A2\u00BD\u00BA\u00B4\u00F2\\L&'\u00F3\u00F3\u00E1\u00C9{j\u00F4\u00A81\x04\u00D0c]*\u00F3\u00C5Oh''\u00AD\u0082\u0092RD\u00CDz\x10\u00E3\u00B3\u00E3\u00886\u00BE\x11*\x02\u00B6\x07v\u00EDA~\u00AB\x1E\u008D\x15\u00A5X\u00B3v\x0F\u00EA\u00CA\u00F3PP^\x03#\u00AD\u00C4\u00CE}\x07\u00A0\u00D5V\u00E2\u00C5\u00B9s\u00F1\u00C9wk\u00B1u\u00F7\x16l\u00D8\u00B2\x06/\u00BD\u00F1\x1A\u0091b4\u00D8\u00BD\u00F5'\u00FC\u00F7\u00F1'\u00F1\u00D1\u00BA\u00CD\u00D8s\u00F8\u00B0\u00CB\u00F3c\x13za\u00D65s0\u00FB\u009Ak\u00D07]\u0086\u00BD+\u00BF@y\u009D\x12\u00BA\u00F2}\u00D8\u00B2c\x1B\u00BE#\f=\u00BF\u0085<\u00BB\u00BC\x04?\u00FC\u00B0\x07\u00DB>x\x15\u00CF\u00BE\u00BD\x02?m\u00DE\u0082\u00CD\u00BF\u00FF\u0084\u00A5w^\u008F\u009Csu\u00F8\u00F5\u00D5\x7F\u00E0\u00EEe/\u00E1\u00E7\u00DF~\u00C7\u0086\u00CD\u009B\u00F1\u00C2\u00CBoB\u00D9R\u008E\u0095\u009F\u00AFC5\u00D1\u00B4N\u00EC\u00D8\u008C\u009C\x1D;\u00B1x\u00F1]\u00F8d\u00ED&\x14\x14\u009D\u00C1\u00BA\x1F\u00BF\u00C1\u00C7\x1F~n\u0093\u00BA\u008C\u00ED\u00F8\u00E5\u00FB\u00BDH\x1F2\x12\u00CF\u00FF\u00FBaL\u009F6\x19w=\u00FA4\x1E\u00FC\u00E7\u00DD\u00C8\x1E\u00DA\x0B\u00E7voD1a \u0097M\u0098\u008F\u0085\x04\b\u00A6\u00CDY\u008Cg\u009E|\f7\u00DE:\x172!\u00DF\x7F[\u00B1\u00DD\u00C1\u00F4\u00BD<,\f!\nr\u0084\u0092C.\u0083\u00AE\u00B5\x1C?\u00FD\u00B2\u00D5\u00A1\u00BA\u00CE\u00BA<<\u00F3\u00E0KD\u00B2\u008A\u0081\u00B2b'\u00FE\u00FD\u00E2\u00CB]\u0092Y\r:\x1D\u00D4*\u00EE\u00E8\u00E8\u00D0\x12`\u00A0\u00F1\u00D0\u00B3s\u00F0\u00F1c\u00E30{F/\u00ACze&\u00A2\u00C4|\u0096_\u00A6\u008F\u00EA\u0085\u00D9D\u00B8\u008B\u00EF\u0097\u0084X)\x1F\u00D3.\u00EB\u0085\u0081\u0083\x13\x03~\u00A6^\u00D5\u008C\u009F\u00F3\u00CA0\u00E6\u00EE\x7Fa\u00C2\u0088^\u00A0\u00F8\x02\\\u00BE\u00E4^\u00AC^\u00F3\x19F%G w\u00F5\u00EB\u00B8\u00E3\u00D1\u00FF@%\x12\u00E1\u00C3W\x1F\u00C7\u0092\u0099w\u00A3V\u00D9\u0084\u00AF?\u00F9\x10o~\u00B5\x1E\"\u00AA\n\u00AF\u00BD\u00F4\bn\u00BF\u00E7\u00BF\u0090%Ea\u00E5k\u00AF\u00E3T3gb\u00FC\u00FE\u00C3\u0097q\u00D3\u00ED\u00FF\u0086\u00D6\u00D4\u0088\u00E7\u0097\u00DD\u0085\x1B\u0097o\u0084\u00B6\u00A3\n7\u00CD\u009A\u0087\u009DG\u008BA\u00B7\x1F\u00C5\x13\x0F\u00DF\u008A\u00D5\x1B\u0088\u0080\u00B2\u00F7\x13,\u00B8\u00E5>4\u00F3\x148\u00F0\u00EDkx\u00FD\u008D\x0F\u00A1m)\u00C5\x07\u009F~\u0080\u00E2\u00DA\x0E\u00B44\u00B6\u00A0U\u00ADBS\u0087\u0086=\u00FF\u00E3\u00D6-\u00EC3\u00DE\u00F8\u00EF\u00D3\u00F8`[9b2S\u00B0\u00E2\u00B5G\u00F1\u00C9\u00AE\x024\x15\x1F\u00C1S\x0F\u00DE\u008E\u00FB\x1E]M\u00C0\u00F7\x02\u0096\u00DE}#\x0E\x13z\fDwp8hW\u00B1\u00FB\u00DB\u00D7_\u00C23\u00AF~\x07\x13\x11&\u00F7\u00FE\u00BA\x12\u00F7~\u00B4\x1D\x059;\u00B0\u00EC\u00CB\u00DD\u00DC\x12\u00C1\u0085SX\u00FE\u00FE7\u00A8(\u00CC\u00C1\u00FC%\u00FF\u00C4\u00E7GkQ{\u00E6\x10n\u00BC\u00F6z\u00EC-kF3a\u00AE\u00CB\u0097\u00FD\x13\x1B\u00B7\x1DE\u00AB\u00DE\x18\u0098ncm\u0088\u0091u\u00BC\u0095\u0086\u0086 T\u00A1\u0080\"2\x12<Z\x07Ug\x1B\x18#k\u00A7\u0081|\u00EEh\u0081\u00D6\u00A0\u0087\u009E\u00CC\u0085\u00C6\u008E6\u00E4\u00AD{\x1Dw/\u00FD\x0F\u00DAyF\u00BC\u00F2\u00EF\x07q\u00E7\u00ED\u00EF\u00A0\u00BD\u00ED\x02\u00EE\u009A=\x17\u00DB\u008F\u0097@_\x7F\x18O?x\x1B\u00A1\u00F5\x13\u00A8o#\u00FD\u00DD\u00D0\u008E&\u0093\nj\u009D\u00C1\t\u00D0\u00CD\u008B\x06l\u00E7\u00B89\u00ECJ\u00E9\u00CE\u0095\u0090\u00A6\x0F\u00C1\u00B5\u00E3\u00B4\u00D8\u00FA\u00CE\x1AhL\u009C\x1A\u00BA\u00FA\u00A3\u00D7\u00F0\u00E8ck KK\u00C2\u00A6\u00AF_\u00C5\u00FB\u00DB\u0099\u00B1\u00CB\u00C1\u00F7o\u00AF\u0087\u0092\u00F4\u00C9\u008E_\u00BE\u00C7C\u00F7=\u008A\u00C6\u00C6\x12<y\u00EF\"\u00CC\u00B9j\x11\u00CE\x11\u00DA\u00FA\u00EC\u0093\u00FFa\u00DD\x0F{Q\u00B1\u00EFc,\u00BC\u00E9n\x14(M(\u00C9\u00F9\x14o\x12\x05\u008By\u00DFN\u00F2\u00FEF\x01\x0FM\u00AAv\u00D4\x17\x1D\u00C0*R_+\u00E9\u0083\u00B7^x\x06_\u00FDV\nU\u00FD\t\"\x14^\u008D\u008Fw\u009D\u0085\u009A\u00F0\u00A3O\u00BEx\r?\u00FC\u00B2\x07BM)\u00DE~\u00F9Q\u00AC\u00FD\u00F1\u0088\u00A3\u00E4B\u00B9\u00A1\t7\x07\u008F/Alr4\u00DE\u00FC\u0099[\x1El.\u00CECN\r\x1F\x13f\u008C\"\u00DA\u00F0\x1E|\u00F8\u00C5\u0097hV\u00A9\u00F0\u00CD\u00B29\u00F8\u0081(\x02bA#\u00DEx\u00FEA|\u00F3\u00F5N\u009C\u00DA\u00F65v\u00FD~\u008A\u00CC\u00FDR|\u00F4\u00C8\x0BX\u00FB\u00F3:\u00B6\u008E\u009D?\u00AE\u0083\u009Ao\u00F4\u00CE\u00C4<H\x1C\u00A3\b\u008Fh\u00DD\u00F4\x0B.h\u00D58t\u00E8\f&\u00DC\u00B7\f\u008AFni\u00B2\u00EA\u00C4v\u0088b\u00A3Y!\u00F1\u00DC>\u00F2\u00ECmG\u00D0X\u0096\u0083\x17\u0088\u00E6[\"\u008C\u0081H]\u0082\u00E5\u00AF\u00BD\r\u00BD\u00C9\u0080O\u00DE|\to|\u00B8\x05Zy\x04\u00D6\u00AE\u00FD\u00CE\u00EC\u00C0g\u00C27\x0F]\u0089\u00FB\u0096-\u0087\u008A/\u00C4\u00C7\u00AF?\u00897\u00DFX\u0081\u00D6\u00F2\\|\u00F0\u00C6\u00FFP\u00DF\u00A9\u00C3\u00FE\u00AF\u0097\u00E3\u00FB\u00CD\u009C\u00C2\u00AB,\u00DA\u0087\u00F5\u00BB\u00F7\x04\u00CD\x1B\u008D\u00B4\u00E3\f4\x18tV\u00C1\u00E2\u0085'\x1FF\u00B1^\x02\x11\u008F\u00F0\u0099\u00A7\u00FF\u0087v\u009D\u008Eh\u00EAn\u009Db\u00FDs\u00DARu\u00AA<K\x17\x12i\u00E0\u00AD\u00E79n\u00FDh\u00AF;\u0081\u00C2\u00B3\x15\u0098\u00B9`0\u0094\u00DBs\u00D0\u00B2k=\u00D6\x1D\u0099\u008D\u00DB\u009F|\x0E\u00EA\u0082\u00D9(M\u009D\u008A\u00B7^|\u009A\u00BDv\u00E6\u00C4<\u00A2\x157\u00E1\u00A5\u0097\u00FF\u0083\u00E2moa\u00A7\u0086Ff\u009Fldg\u00F5BCY.\u00CE\x14V\x12\x06b`=Q\u00D3&\u00DE\u008C\x17\u0096\u00DD\u0080\u00840\u00B9K\x13\u00F2\x0En\u00C5\u00BDg\u00F6\u0092\x01\u00A5\u00B0\u00E0\u00C97q\u00FF\u00CA\u009D\u00A8\u00BB\u00F3\x06T\r\u00BE\x03\u00EF>0\x13\x06}\x13>\u00B8e.JS\u00A6\u0092I\u00F04\u0096\x13\u00C6,\x10Da\u00F2\u00E5\u0093 h\u00AE\u00C6\u00B6\u00FD\u0087q\u009C\x00\u00F9\u00FE\r\u00A5\u00A0xr\u00BC\u00F6\u00C9J\u00F4\t\u00A9\u00C3\u0097_m\u0087!b\b\u00BE\u00DD\u00BD\t\x0F\u00CE\u009B\u008F\u00EC\u00A5\u009F\u00E2\u00E6\u00FE&l\\\u00FB)\u0084\u00FC(\u00F4\u00EA=\u0094h\u00E2W`\u00F8\u0084\u00C9V3\u00BBQ\u00DD\u008Es\u00ED&\u00C4\u0087\u0088\u00AD\u00ED\x13\u00C8\u00A31\u00F7\u00EF\x7Fg\u0089k\u00CB\x0Enp\u00A3\u00D33\u00AC\x0En)D\u0093\u00BB\u0091\x1C\u00EE\u00CC{\u00BE\x19:\r\u00BE\u0094\u00C2\u00AAO^\u00C4\u00CE\u00F5\u009C\u0096?h\u00E4,,\u00BA<\u00D6\u0085\u00B3\u00E6\u00FC\u00F0\x01\u00E2G\x0FC\u00BF\u00E88\u00F0\u00E7\u00DC\u008C\u00F2\u00F7W\u00A0\u00B8\u00AD\x13\u00BD\x14\u00F2\u00A0\b7<%\x0E/=\u00C4I\u00B2\"!\u00F0\u00FA\u00EA|\u00CCO\x17\u00E1\u00FD\u008Fr\u00F1\u00DD\u00A1\n\u0084\u00C4*\u00B0j\u00E9hN\u00D8!L\u00D6$\u00A6\u0090\u00B3!\x0F\u00A7\u00C6\u00C5\u00E0\u00A9\u00D7w\u0091\u00F1\u00A2=\u009AG=\t\u0092\u00BA\u00D6\x064SD\u00E3\x0B\x0F\u00B5\u00BB\u0097\x07y\u00B8\u008C\u00FD\u00BC\u00FDx5n\x7Fi\x05n\u009E\u00D4\x1Bw/\u009A\u0082Gn\u00B8\x1Fy'8\u00C6p\u00C7}\u00CF`\u00E6\u0098t\u00A4\u00F3\x16\u00A3Hx-n\u00BFy!:\u008B\u0089\x06z\u00B6\x1E\u0083'\u0084@&\u0088\u00C3g\u009B\u00BEA\u00EF\b\t\u00A6\u00A4\t\u00F0\u00C8[\x1F\"'{\x1E:#\u0087\u00E1\u00FD\u00D7_E\u00B4L\u0080\u00BFMx\x13_\u00EE\u00DE\u008C\u00EC\tb\u00A2\rK\x11&\x15\u00E2\u00DE\u00B7>BXD\x1C\u0091\u00C6+\u00D9\u00E7\u00C4\u00F5\x1A\u0082\u00C5\u00B3\u0088\x00g\u009C\u0086k&f\u00A1\u00B3\u0099c\u009Aje\x11:ZB\u00F0\u00EB\u00DA7\u0088f\u00C5\u00C3\x00\u0081\x12\u00FFy\u00F3;Lx$\x0B1\x11\u0097\u00E1\u0083\u00B5\u00CF\"V\u00A0AS\u00CE\u0095\u00A8\u00ABn\x01\u00FA\u00C6\u00DB\u0096\u00D6(7k\u00D5\x01\u009497\u00DF\u0086>\u00D3j\u00A1io\u008183\x01;\u00B7\x1F\u00C1\u0094\u00A7\u00C7b\u00F5\u00A3_c\u00DF\rc\u00A0\u00D9\u00BE\x1D\u00C9#\u00FF\u008E\u008A\u009C=\x10\u00A7L\u00C1\u00A3\u00F3&\x12\u00CD\u00AD\r\u00A7\u008F\u00BF\u008B\u00F7\u00BF\u00CF\u00C1K\x13\u008D\u0088\u008D$\u00F3\u00E7\u008B\u00FF\u00B2ZvP.B<)\u009A\u0094\u008C\u00AF\u00CB2\b\x18\u00CA%\u00E3?\u00F7\u00E6\u00A5\u00B8\u00F5\u009E\x1B\u00B0{\u00E3N\\~\u00CD\\\u00A4\u00A4Gb@\u00AF-\x10^v#\u00FE1!\x03\u00AF<\u00B9\x01\u00C3\u00E7\u00DD\u0089\x11\u00FD\u00A2\u0091!k\u00C5\u00C7?\u00AC\u00C1\u00EE-|\u00B4F\x0F\u00C7\u00A7\u00AF\u00BEL\u00C6D\u00849{~@\u00B3(\f\u00A3.\u00BF\u008F\u0080Q\x13\x1E\u00B8cI\u00D0\u0086i\u00A3\u00A6\t\u009F~\u00B2\t\u00D9\u00D7=\u0087\u00D1\x19\u00A9\u00F8|\u00E9\u00FB8^p\x13\u00C6\x0EH@\u0098,\x15_\u00FC\u00F6\x02\u00E2\u00C5\x12\u00C4\u00D4\u0095\u00E0\u00BB\u00D3\x17p\u00D5H\u00F2^\"\u00B1\u00D92\"\u00C6S_\u00AC\u00C7e\u00E9b\u00B4\\9\x07eS\x1F\u00C7\u00F3O\u00CE\u00C1\u00CE\u00B03(moCt\u00FF9x\u00FD\u00E5lt\u00A8\u00DB\u00D0@\u00E8+\u00E7l\x13b\u00FAL\u00C0m\u00F7\u0084\u00A2\u00E1\u00A5\u00B5\u00B8\u00F5\u0086\x19DX\u00FC\n\u0094X\f]{1\u00DA\u009B\u00E5X\u00B7\u00E6\rHy\x06\u00C4\u00FE\u00EBz\u00FC\u00FC\u00F6w\u00B8\u00FA\u00CD9\u00E4\u00812,\u00FB\u00F7\u00CB\u00C8\u008A\x0BEo\u00C5\"T\u00D4\u00D7\x05\r>\u00B3\u00A6\x0F\u00C5\u00A6\u00FF|\u008E\u00BC+G\u00A0d\u00DBn\u00F4\u00BB\u00E2N\u00A4EIQU\u00C4\u00D9\u00FE5\r\u00E7\u00F0\u00CD!\r\u00E6\u00DF>\x03\x191r\u00DC&1 \u00B7\u00E4\x10\x1E\u00B8\u00F9F|\u00B5;\x0F\u00B5\x07\x0F\u00A1(e0\x06\u00EA:\u00A1\u00D1V\u00C1$\rA\u009AT\x1AT[\x12\x07\u008F\u0087I\u00F3\tv\u00E77\u00A2\u00BEE\u008D\u00EB\u00EF\u0098\u008E-y{q\u00A1C\u0089\u00FD\u00DF\u00FF\u0082~3l\u00A6k\x01\u009F\u00B3\u00D2\u008E\u009A~5\u009E\u00BE\u00E76N0}p)\u00DA\u00880\u00D4B\u00E6\u00CE\x07?}\u008F\u00BEQ2\u00D4N\u00CE\u00C0\u00DF\u00FF\u00F9o\u00A8\x1A\n\u00B1\u00E2\x04\u0085\u009B^\\\u0081[&\u00F6\u00C2?o\u0098\u0082\x17^\\\u008D\u008C\u00BBoA\u00DF\u00B7\u00B7 \u00FFL\x11\u00D6\u00FF\u00DA\bc\u009FD4\u00E848\u00BE\u00E9;\u00A4'\u00DE\x14\u00B4\u0089\u00BE\u00AE\u00FA<\u009E|\u00E21\u00F3\u0084\u00A5\u00D0\u00DEP\x02AB6\u00EAOmD\u00B3\u00A2/\x16\x0F\u00E9M\u00CE\u00F7FZ\u00D1*\u00EC\u00CC\u00AF\u00E1\x0Bh\u008A\x0E\u00DC\x03\u00C3\\\u00C2\u00C2\u00C3\u00D0X\u00E7\u009E\bJ\u00CBJ\u00BC\u00AF7\u00BA\u00E1(\u00CE\u00A7\u008E\u00FE\u00F8)\u00EAu&\u00ACz\u00E6v\u00EB\u00B9\u008D\x1F\u00AD\u00C5\u0082\u0091\u00F7\x11\u00A9\u009Cv\u00DC\u00CFm^\u00AB\u00E2\u0093\u00BF\u008DUU\u009C&f\u00D2\u00A3U\u00D7\x01E\u00E6\x18L\x1F\x1C\x05\u0089\u00F9\u00FA\u00A9\u00D7\u00FE\rI\x11\n\u00B7+x\x13\u00A7\\\u008D\u00E7\u009E\u00BA\u00D7Q\u00D6\u00E03[\u00F1(\u00B3s\x1F\x1F<\u00DAf\u009A\u00D2\u00A8;a\u00D4\u00AB\u00A1\u00A7\u00F5\x10F\u00C4c\u00E1\u0082\x05\u00C8\x1A\u0090\u008C]\u008CD\x05)\u00E2\u00E2\u00C2\u00A0P\u00C4\u00E1\u00C1'\u00B29)\u00CB(`\u00EF\u00A7\b\u0098Hb\u00B2\u00B0r\u00E5{\u00F8\u00E6\u00CBo\u00B1q\u00F3O`\u00DCxF\x17\x15\u00E3\u00D5\u00FF>\u00C7\x11\u009B4\x02#\x12\u00F88Zgs0\u00D1\u00B5\\\u00C0\x1B\u00AF|\u0080\u0094\u00E1\u00D3\x10O\u00D0\u008FiJ\u00E9\u00D9S\u00A0\u00AF\u00E2\u00D6\u00A4O\u00EC\u00D8\u0080\x1F~\u00CB\u00C3\u00AD\u00F7\u00FF\x0BY\u0089a\u0081K\u0085j\x13\x16=\u00FC8\u00AE\u009E\u0094e\u00A5\u0084\u00CE\u00A6<'23\u00A1\u00F2\\\x11\u0094j\x1A\x05\u00E7\n\u00D8v\x0F\u009A>-\u00E8\u00B50fX\u009AK\u00EA\u00F0\u00F8[6\u00CBILZ4\u00EB0s\u00A4\u00A0\u009E\x13 \x1B\u00DB\u00D1\u00A67\u00B90V^\x17|\u009E\u00C4\u0091\u00B1H\"\u009A\u00D3\u00B1\u00F3\u00D5\u00B8u|\u00BA\u0099\x06Mhnn!\x1A`\x04LF!\x06\u00F6\u008Aa\u00C7]\x1C\u0095\u008E~\u0091<\x18tF\u00A8\u00C9\x00FFs&p9\u0091\x07d\u00E0>\x0B\x04B\x18\u00CC\u009A\u0098\u0090/Cd(\x07X\u0089iY\u00A4\u008F\u00B6\u00A1\u00AE\u00AA\x16\u0092\u0090t\u0084J\u00B8\u00F3q\u00A9\u0099\u00D0\x1A\u00F30\u00F0\u00CAg\u00B0\u00BA\u00CFT\u00BC\u00F3\u00C6{\u00B8\u00FB\u00EB\u00CF1}\u00E6MXv\u00FF(;S\u009F\u00CE\u00A5k\u008D\x1A%\fr\t\x0B\u00E8\u00ACP\u0094\x18\u0085\u00B6\u00A6#P\x1B2 \u00E2\u0087@N\u00B45\u008A'B\u00A4\u009Cru\u00C0t\u009A;\u0081\u0096\u00AF>~\x0F\x1Bw\x1C\u00C2\u00B0I\u00D3\x10E\u00B4\x05\u00C2\x15\x117\u00F82\u008CV\u00BF\u0088\u00D7\u00D7\u009F\u00C0\u00D8\u00A6\x0B\u00B8\u00ED\u00A1\u00FF\u00A2\u00E8\u009B\u0097\u00A0\u00D2\u00B5\x10\u0081\u00BA\x10z2vSn\u00BC\x0E\u00D2\u00A4p\u00F2\u00F8\x06\b\x05!\u00A4\u009D\u00FE\u008B\u009B.\x16?\u0093\x1A\u00D1\x11\u00A3\u00F1\u009FW\x1E\u0083\u008C\u00CF\u00B7\u00F6OgS-t\x14\u00EB0\u00C4\u00F9i\u0092\u00F14\u009A\f\u00E6{\f\u00A0\u0094U8M\x04/\x13\u0095\u0080k\u00E6/\u0086\u00A0S\tiH\x1A\x19\x13\u008E\u00B1gM\u00BE\u00DE\u00AC\r)\u00C9\u00BD]\u00DB\u00EEQ{z\x0Fr\x1Bu\u00C8\u00FD\u00F0)|a&\u00F4C[w\x10P\u00BF\x11|\x02$2v\u00ECh(\x18z\u00D08\u00BD\x1F\u00CDG4\x11\u0090y\u00E4\u00BA\u00B8\x10\n\x17d\"\u009B\u00C3\x1A\x11<Onz\x03O~\u009A\u0083\u00E4>#\u0090\u00DD?\u0084\u00F0\x1A\u00AE\u00FD4c\u0099pj\u00B7Q\u00DB\u00CE\u00D2\n\u00F7<\x11\u0092\u00FBFAy\u00A4\x1C*2&FZ\u008A\u0090\x10\tG\u00B3\x12\u00FB]N\u0081\u00BF{\u00C2\u00C8\x19Hk{\x1B\u00EFm\u00CECFY+\u00EE|b6\u00E1\u0096\u0094\u009D?\x11\u00E7\u00A8\u00D8PS\u008A\u008Ez\u00C2O\u0085\t\x18=z\x10\x12F\r\u0080\u00E2\u00A7\u00B7\u00F0\u00DB\u00AA#H\u009B\u00FB\x1A\u00E2\u00CE\u00FC\u0086cy\u00BB`\b\u008F\r\u00BA\u00EF\u00A5\x11\x19\u00B8\"M\u0088u?n\u00C6X\u00BD\x00\x03\"B\u00B1\u009F\b\u00D8\u00AB7\u00FC\u0084\u00C3\u00A7\u00DB\u00B1\u00F4\tWG[\u00B1\u00D0\u00A6<\u00F1\bM\u00D3&-(2.\u00F1\u00E1\u009CP\"\rQ\u00D8\u00E8\u0088\x0Eey\x03\u00AB\u0084D\u00A6!F@C\x16\u0096\u0085\u0085\u00F3R\u0090\u00F7\u00FB6(\u0089`=\u00B3W'\u00B6\u00E5\x1D\u00C5\u00B1\r\x15\u00B8\u00E6\u00B3\u00E1\u00DE\x19 \u00ED~\x1D\u00819\u009D\u0094\u00D2\x17\x0F\u00BFh\u00F3U\u00A8;\u00B1\n/\u00AD)\"\u00BCH\rZ\u00DB\u0089\u00B3\u0085\u00F9\u00D0\u00E9i$\u00F5\x1D\u0083D\u0085\u0084\u00C7\u00EB\n\u00D1\u00C6\u00C7\u00C4x\u00F4j8\u009C\u009B\u0087\u00F5\u00EB\u00D6\x06\u00C6\u00DC\u00ED>k\u0089\u00A4\u00B6k\u00DDqD\x13\u0086x\u00F3\u00CD\u00B7\u00E2\u00BAkf\u00B3\u00E7\u009B\u008A\u00B6\u00A1J\u00A9u\u009D\u00F4ff\u00AA'\x7F3\u0087p\x1D\u0098=`2\u009E{\u00F69\u00DC\u00BBx\x06\u00D1\u0084\u00D3l\u00C0\u00A8\u00F3\u00ECh\u00A4\u00D7\x1B\u00A1\u00EBTA\u00D9\u00DA\n\u0095\u00D6\u00E8\u00D3\u00C5!$<\n\u00A1\u00E2\u00BE\u00B8\u00E5\u00FE\u0087\u00B0\u00F4\u009E\u009B\u00D1\u00BBO\x1FDG\u00CB\u00C0\u00C8\u0097|\u00BA\tE\u00C5uh8\u00BB\x05WO\u009E\u0083c\u00F5\u00ED6+DG'\u00D4-U\u00C8=\u00D7\u0088\u00EC\u00D9\u00B7a\u00F3\u00965\x18b4\u0091\u00C1\u00B1=\u0093\u00C7\u0093!{t*\u00AA\u00CF\u00E5\u00E0\u0093\u00ED\u00A78K\u00C2\u0096U\u00D8\u00BAw\x0F\u00EA\u00CB\u00EA\u00D1g\u00FC4\u00F6\\\u00EE\u00D9\\\"U\x1AX\u00E7\u009E\u009F6n\u00C4\u00FE\u00BD\u00BF\u00B3f>\x07\x17D\u00DAs\u00AF;\u00EF!7\x19L\x0E\u00EB\u0098\u00AE4\u00C8G\u00E6\u0080,d\u00F7\u0099\u0082\u0087\x1E{\fK\u00C9\u00B1\u00E4\u00FAk\u00D1+<8-\u009D!\\\u009E\u0093#\u008F^\u00ABg\u0097v\u00C6\u00F6\u008F\u00E3\u00845\u0089\x10\u0091bWre\u00848:H\u00E6\u00CB\x17G`X\"\x1F\u00E7?\u00FD\x125\x1D\x1C\u00C3\u00A9=\u00B1\x15\u00D7\\}5~:]Kx\u00A7\n9\u00F9\u009C\u00D0\u00AAi>\u008F\u00DDuz0B\u00BDe=\u00D5b{t'\x17\u00EB\u00F5DK\u00D6\x1AX\x01\u00B6\u00A2\u00F88\u00B9,\x12\u0099}2\u00D0Yy\x0E\u00EDz\u008E\u00FE\u009A\u00CB\u008B!aL\u00C3\u00D5eh\x17g\u00E0\x7F\x1F\u00AE\u00C0\x0Fo=\u0084\u00C6\u008E*\u00C7\u00BAt<V\u00D8ph\u00BB\"\x1A\u00E2\u00D6N\u00EB\u00F7\u00E6\u008AJD&\x0EB\u00A8\u00B0{\u009C\x17\x1D\u00D6\u00D5\u009D\x02.\u00A9\u00DA\u00B4\x04\u00BC\u00B7\u00E2\u00AD\u0097\u0096c\u00E6\u00D0,3\u00AD\u0086`\u00E6\x1D\u00A3\u00A0_\u00B7\x12M\u00AD\x02\u008CL\tE\u008CX\u0088\u0084\u00E1s\u00F0\u00D0\u00C3\u00FF\u00C2\u00D2e\u008Fb\u00F15\u00D7b\u00D6\u0098\u00C1A\u00E8*4+H\u00DA\x0B\u0095\u00C1n\u0099\u00EE3\u00FB&<\u00F2\u00C82<\u00FC\u00C0?1\u00F7\u00DA\u00AB\u0091\u00DE;\x1D-\u0095\u00F9D\u00F8\u00E7\u00C6\u00BFp\u00E7\u00B7\u00D8\u00B6\u00E7\u00A4YQ\u00E8\u009A\u0097|\u00FE\u00FE\x13\b\u00EB\u00B7\x10\u00AB\x7F\u00DA\u0080u\x1B~\u00C1\u00FB\u00FF\u00BE\x19\x15M\u00E7lk\u00F24/\u00E0\u009E`\u00E7'm@\u00CE\u00CF\u0087\u0091\x10=\x1B\u009F~\u00F6\x16\u00FEy\u00C7|\u00C2k\x1C\u00E7\u0084\u00C3\u00F8)\" 2\u00D3\nCGe\u00A7\u00CE#2y\x10\x14b\u00BE\u009F\u00DC\u00D8\u00BF\"\x12E\u00E3\u009A\u00EB\x06\u00A0\u00F8\u00EB7P\u00D1JaP\u008C{-{\u00CE\u00E2\x7Fb\u00D9\u00B2\u00C7\u00F0\u00F0\u00FDwa\u00EA\u00F8\u0091\x10\u008B\u0093\u00D1\u00D0T\u0089\x1F\u00CE\u00EA0}H:$\u00D26\u00BC\u00F6\u00DA\u00C7HM\x1C\x18\u00C8z\u008C\u0093\u00D1W\u0088\x11WOA\u00C7\u00EEo\u00D1(\u00E5,oC3\x15\u00D8\u00F2\u00E1\u00A7h\u00E2\u00F7AjB\u0088OEC \u0090AG\u00E6\u00D3\u0085N\x0Eo\u00D4\x1D\u00EDv\u00BD\u00D3\u0084\u0083g8\u0085C\u00DBR\u0084\"-\u00D7\u008E\u00BE\u00E3\u00E7\u00E0\u00B7-k!\u009F1\x0E\u00C3\u00D3\u00C2\u00F0\u00D1\u00BF\u00FF\u008Dc\u00BChd$\u0085\x05OH&\u00C7w\u00D4im\x0E\u00871\u00C9\u0099x\u00F8\u00E1\u00A5xl\u00D92\u00DCz\u00F3bd\u00C6\u0086\u00D8{\u00BF\x07^F\u008F\x19\u008B\u00FD\u00FB\u00F6z$\u0089\u00B0\u00D0\u00D0\u0080\u00EB\u00B4\u00F0\u00CA\u00F3\u00DBVb\x0F\u00E9\u00A8+FN\u00C1M\u00B7\u00DDJ\u00B4\u00E164\u009C8\u0084]e-8v\u00E0\u00AC\x05\u008E\u00AC\u0084\u00DE\u00AFo\x1F\u00FC\u00BEw\r\u009Ez\u00E29|\u00FE\u00FAR\u00DC9\u00F3,Vo[\u0081\u00A3y?\u00A1\u00A1\u00AA\x1Ec\u00AFX\u0082\x19\u00D3G\x10\u00E9\u0090\u00EF\u00E0\u00F8\u00E3\u00AC\x03\u00EC\u00FF}5f\u0091\u0083)\u00BD\u0096\u00FC\x0F\u009F\u00DD5\u0085\u00B5\x02\u00D0\u00CE[\u00AC\u00CC\x1B/fN\u0099\u00823\u00F9\u009F\u00E0\u00F6\u00D9\u00D7 L\u00C1GhB\x1F<\u00FC\u00AF'\u00F0\u00E8\u00D3K\u00F0\u00E5\u00BA\u009D\u00F8\u00EF\u00B2\u00DB@\u00A9T\x180\u00F6*\f\u0088!\u00927t\u0088\u008C\u008D\u00C1\u0086\u00E5wA\u00FE\u00F7\u00FBQ~b3\u008E\u009C*Abz\x1A.\x10\u00ED\u00E5\u00EF\u0083\u00878t\u00C6\u00B4\u00FB^\u00C1\u00A1\u00F2\u00C7\u00B1\u00F2\u00D9\x7F\u00E2\u00DB\u00E5B\u00F0\b\x1E\f\x1A=\ts\u00AE\u00BF\x1C\u00C9\u00C9\u00A1x\u00E3\u00E1\x0Bxk\u00E5^\\5u\x06\u0084\u00B4\x0E\u00F2\u00D8\x04,\\\u00F4\x18\x06$\u0085{e\u00E4\u00B4S\x0F\u00D0\u00AC%\u0082\x13\x03\u00B8`-\u0094-\u00DE\x07-\u0080E\u0086\x15\u0088\tp\x13\u00FE7j\u00C1\u00BF\u00B0\u00F6\u00F17\u00F0\u00CC3\u00E7\u00C0S\u00B7AeJ\u00C4K\u00AF?N\u00FA\u0096\x17\x04\u00D3f4\u00CDX,\u00BBe4;I\x05d\u008C\u00D6o8\u008DWV\x17\u00E2\u00EE[\u00B3\x11\u00D7+\x1A\x03\u00FAGCg0\u00BA\u00B0\u009C\u0093\u00A7\u009B\u00F0\u00C2}\x13\u0090\x7F\u00FC\x02\u00BE\u00DE[\u00E1V\x01\u00A5h\u00F7\u00C2\t\u009F\bMw\u00BD\u00F1&\f\x1F\u00AC\u00C03w\u00DC\u0085\u00F4^q(\u00AB\u00AC\u00C5\r\u008B\u009E\u00C2\u00BC!\u00F1(k\u009E\u0081W\u00DF{\x14\u008F\u00FD\u00D6\x07u'\u00CF\u00A3\u00CF\u00C4+0~X*\u00BE\u00A7\u00ED\u0097\u0089D\u00847s\u00DF\u0099\u00A5\x1D\u0081\u0099\u00A1jL-x\u00F9\u00C1G\x11\x13\u00C6\u00C7\u00B12%n\u00B8\u00FD\x11\f\x1E;\x10\x13&\x1C\u00C6\u00B3w?Hh\u00C5\u0084s\u00D5:<\u00F0\u00C0R\u00D4\x1D]\u0083\u00B7\u00BF\u00DE\u0085\u0088\u00CCl\u00E8\x1B+1x\u00CAUd\"\u00F3 3?\u00A1\u00D7\u00C8\u00E9\u00F8\u00EE\u00FD\x15\u00E0%'c\u00D1D\x1E\x19\x0B\u008A0\u00BE\f\u00F4\x1F\x11\u008E\u00C5\u00B7=\u0080>\u00F1!\u00A8\u00ABo\u00C4m\u008F=\r\u00A1z\x1FhF\u00CB\u00E0\u00BC\x1C\u0089\x10\u00C2\u00F3\x00N\u00B4_\u00CC\u00BCM\u00D3\u0080\u00A7\u0097\u00FE\x0BB\u0096\x1Eh\u00C4\u008F\u00BA\x11}\u00B3b\u00F1\u00EE3O\u00A3w\u009C\x1C\u008D5\x15\u00D0\u0089\u00B8\u00E5\u009EaW\u00DF\u008B\u00FE?\u00DD\x05(\u00AE\u0080B \u00C0\u0094\x1B\u00E6\u00E3\u00E0\u00F2\u0097q\u00F3\u009D\u00BF#5D\u008Fj\u00B5\x14\u00F3o{\x10\x03\u0088PH\u00F3y\x01\u00F0\x04\x0BW0Y\u00C7\u0093'$\u00CFn!}\u00B9\u00EC\x11VGe\u00CC\u00EF\u0097\u00CD^\u0082\t#\t\u0088\u00D1\u008E+\u00B0\u0096r\u00ED\u00DF\u00FE\u0086W\u0097\u00DF\u008E\u008A\u00C1\u00D9h>}\x16!\u0083\u0086\x12fx\x1F\u00A6L\u00C8\u00C1\u00F2{\x1EDD\x18\u008D\u00D3\x15j\u00FC\u00EB\u0091Q\u00846$hn\u00AC\u00C6\x13\u008F=\u0087;\u009Fz\x1C\x19\n\u00A9\x1D-\u00F9W\u00F2\u00CA\u00EBq\u00F3}w &*\u008A\u00FD\u00AE\u0098<\x0F\u00B2o\u009EA\u0093Fo\u00B5,Z\u00E7\x1B\u009F\u00CF\u00F9\u00F7\u00F3\u00B95[f\x19\u00C8\u00C4c\u00E8\u009Do\u00EF\u00ED\x04\u0091L\x01\u009EV\u0080\u00CBn\u0098\u0085\u00D3\u009F\u00E7\u00E0\u00BFO<\x06\u009E\u00BE\x1D\u008APN\u00AB\u00E5\x0B\x15PV\x15\u00E3\u00B5\u00E5+q\u00CDd>#m\x11\u00D0\u00CC\u00C0\u00C0\u00E1\u00E1Xr\u00FB\u00FDH\u0096\u00E9\u00D0@\u008D\u00C1\u00CD\u008F\\\x071\u00BF\u0085\u00D4+\u00B4\u00D6N1\u00B3\u00BC+\u0082\f\u00A9f\u00EC\r\u00F7b\u00C0\u00AF\x0F!\u0081\u00F0c\u00A1\x19^\u00F8\u008C%\u0085\u0080l\b\x11:\x1F\u00BDf\n\u00BEz\u00FEA\u00FC\u0092\u0094\u0080\u008Ac\u00F9\u0098|\u00EB\u009D\u00B8q\u00FEUHJ\u008DG\u0094x<.\u00EB\x1B\u008E\u00AAQ}\u00F1\u00C3\u0096\u00DD\x184qH\u0097$\u00D3\u00BES\u00AE@\u00D2\u00FB;\u0090\u0091\u00CCm\u0085\u00CD\x1A;\r\u0082w\x7FF\u00E2\u0095W#\u00DA\u00B2C\n\u009C\u00AF8\u00E3xI\u00DB\u00C5$d\x14\x17f<\u00C6L\x1D\u0082go\u00BA\x07\u0083\u0088\u00B0\u00A1\u00EEPBJ\x1E\x19F\u00DE\u00E3\x11\u00F2\x1E\u00EB?x\x04Om\u00EF\u0087\u00CA\u00E3\u0085\u0098u\u00FB\x1D\u00EC}Q\u00FD\u00A6!3z-\x16^1\x18\u00BD\u00F8\u00A1\u0090\u00BF\u00B3\x0E\u00E1\x13\x16!>T\x12\u0084jk\x1F\b\u008C\u00B2\u00B3\x1C\x0B\u00C8\u00B0\u00F2\u00908b\x01\u00E2\u00BE\u00BE\x1F\u008F>\u00F94\"D4\u00EA\u00AB\x1Aq\u00FBcOS\u00D4\u00E1\u00B3\x15\u00B4{\u00A78\u00B7\"\u0083\u0083\u0084\u00CC\u0098\u00B6\x1Ez\u00E8!\u009C>z\u00C4\u00A9\u00ABy\x18?a\x02\u0096\u00BF\u00FC\u009A\u00E7\u00A6\u00D3\u00DE\u00F7H\u00BAF(dc\u00B0\x06d5\u00D4\x110\u00EDP\u00AB\u00C0\u0093\u0087#\\*\u00F4\u00D2\u008D\u00A6 \u0084S\u00CAa\u00BFygc#\f\"1\"\x14\u008E\u0082LGk3t&\x01\"#\x15\x1E\u00F7\u00A7\u009B\u00B4\u009Dh\u00EB\u00D0 4\"\f\x02J\u00E0\u00EA\x17BJKm%TF\n2y\b\"\u00C2\u00C3\u009C49\x15\u00AA\u00AAjY\x02\u008D\u008BO\u0080T*\u00F4\x0BH\x03\u0095\u00CE]\u00FA\u009E6\u00A2M\u00D9\x0EJ$E\u00A8L\u00EC\u00F5\u00DE\u00FB\u00FFs0h^! \x13\u00D0\u00C00\u00C2 \u00F9\u00CD;\u00CF\u008E\u00F5\u00F9^m\u00ADMP\x11\u00CD:T\x11\x05\u0099\u00D4Q\u00D6\u00EDP*!\x0E\r!L\u008A\u00EF\u00B5\u0087\u00EC\u00B7\u00B1\u00BD\u00B9\u00F4)\u00FC\u00F3\u00A5\u00FF\u00C2\u00A4\u00EA\u0084\u00DC\"\u00DC\u009A;\u009D\u0089\u00E7\u00A0\u00D5\x1A\x11\u00E6d\u00D9P\x11\u00A6!\u0094q\u00CF\u00F1<n\u008Es\u00D3\u00C4\u00D08\x11\u00E6dRB;\x012d\u00DA\u008Fsn\u008D\u00B1\u00E4\u008B\u00B6S\t-\x01\x04\u0085\\n\u00FDU\u00A3.\u00C3\u00F2\x19\u008B\u00D0\u00EF\u00C1\u00B7\u00F1\u00F7\u00EBF\u00B3fbF\x10\u00D0v\u00B6\x129P\u008C\x10\u00B9\u00D4\x03/p\u00E62n\u00DA@{h\u008B\u00A7{\u009C\u00F8\x0BgV\u00E6\u00CC\u009C\u00ED-md\u00AE)\x1C,\x01\x1A\u00C2'\u00B4Z\x13\x19\x13\x1F\x1A\x1C\u00ED3\x06]\u00C0\u00FDO\x05c>1\x17\u008DJ\r\u0089Lj\u00A5;\u00DA\u00CB\x12\x18C\u008B*\u00F2\u00B0P\u0099\u00CC,\u00AC\u00FB\u00DA\u008B\x1EX\u00C8Z\u00C7\u00F9\u00E9\u00F9^\u009DZ\r\u00B5\u00C6\u0080\u00B0\u0088P/#\u00E8\u00A7\u0086Nw\u00C7\bx\u00E0\u0080\u00E6\u009F\rZ\x15tF\u009A\b\u00D2R.\u00BA\u00A1]iW\u00B6B\x12*\u00F7:g}?\u009B\u00EABlj\x1A\u009D\u0084?1\u00CB/aar\u00D4\u00D5\u00D6~*\u00E8J\x070/\u00F8\u00FAk\u00AFc\u00E7\u00EF\u00BF!.)\x11\u0089\t\u0089\u00A8\u00AD\u00ADEIQ1\u00A6L\u009B\u00D6\u0085\u00BE\u00A6\x1D%\x14:(k\x10\u0091je\u0088d\b\u0098\u00A2\u00E1)f\u00BD\u0085QR.\x1B\u008F\u00E9@\x04*\u00C8\u00A3\u00A3\u00DDj\u00FE!\u00E1\u00BE\u00B7\u00EB\u00F0\u0088\u00F6\x1B!\u0092{@Q\u00AE\x1D\x11\u00F1\u00C9\u0088\u00F0d\x1E\x15\u00C9\u0090\u009E\u0091\u0089\u008B],tg\u009D\u00BCD\u009AU\u0084\u0087_\u00D4g2\u00CF2j\u00F5\x175x\x16\u00C3\u00DC\x14\u00CC2\u008A\u0087\u00DFC\u00C2\u00C2|\x10\x02\u00E5\u00C2\u00E8\x13\u00D3\x12\u00D95Y\u00B9\u009D\u00B5\u00CA\x12{A\"\u0095\u00C0\u009D\x1F\u00A9,$p\x13\x1D\u008F\u00D0\u00B7\u00C2\u00AA\u00D3ws\u00DF;i\u00CB\u00EC;\u009A_S,\x0F3[o\u00B8\x13u\x05\x07\u00F1\u00FC+\u009F!b\u00CA\f\\>{(\u00A7]\u00D3\\\u00AF\u0088\u0089P-\u00F6\u00C7<\u00E7\x05H\x03j\u00B3[\x7F\x1D\u009BB`\x0F\u00E8\u0096\"\u0091\u00CA\u00E0\u00CD\u00B7\u0097\u00B2\u00DB\u00DFN\u00B9\x19o\u00DF\u00D2\u00B0\u00AB\u008A\u00DF\x1D$\u00CD\x00\u00BAe\u0099\u00CCW\\\x04\u009EL\u00CEz\x7F\u00D0\u00F4E\u00A0\u0093\x00^FD\u00C0Q$\r\u0090\b\u00DCa\u00D1\u00C5\x04t{\u00A5B,\u0083'\u00A0\f\rSt\u00A1\u00D7\u00BAg \u00E4v\u00FC\u0089\u00D0y \u009A\u00BA\u00CD\u00F4\u00E5Nd\u00A6)7\u00EA\u00A5W\u0089\u00D7\u00DB\x0B\u00B9\x06h\u00B0\u00CCl\u00FF\u0098\u00BBs\u00E8/\u0093W\u0086l\x7F\x0B\u00E5S\x07pd\u00D0>ju16\x04\u00C4\u00B8x\u00B8h%\x18M\u00DD\u00AB\u00D6\u00EE\u00A3\x04\u00AB\u00A9w\x07\u0098\u00FB\u00D2\u00D4\u00ED\u009FC\x07@Y\u0096\u00A8\u00DE\u00F6}JQ\u00A6\u00EE\x1D(\u00CA\u0099\u008F\u00F1.*\r\u00D0^4\x16\u00D6\u0082\u00E6\x07\"P\u00B0\u00C5j\u00F7\u00B77\x1C,\u0080N\u00E21\u008F\u00F6\u00DDv\u0093_|\u00C5&\u00A08\u00D6Ew\u0081W\u00B9\u00B1\u00E0\u00D9\u00D7g]\u00A9\u00A1\x1D\u00F3+\x040+\u00FD\u00D7\u0096\u00BB\x0E\x12T\x10\u00C9e(\u00BA;\u00DE\u0081\u00F6\u00FF^\u009A\u00EE\x06<\u00F4OK\u00F7i\u009E\u00E8\u00AE6tSd\u00A7\u00DA\u00EA\u00AA\u00CF\x05A3\u0099\u00EE\x156..\u0092\u0099M\u00F7A\x18E\u00E0\x1Cy.\u00B8N\u00A7@\u00F7\u0084i\u00EE)A\u00D2N\u0097\u00D5:\x17\r\u00D1\u00E4\u00E6\x12^7i\x14\u00D4\u00C5y\u00FFn\u00AD\u00D5\u00FF\u00F7\u00A1\u00BA\u00A2\u00D6\u00BAD\u00B4\u00BC8\u00EFsi\u00D1k\u00CFk\u00FC\u00D9E\u00F0\u00EE\x1B\u00EF\u00D9\u00ADOX\u00B6\u00BAp\u00A63.9\u0092\x07M\u00D6i[\u008C}ZU\u008BS\u0092\u00C5S\u009F\u00A2\u009C\x19\x04\u00E5j\u00CB5\u00EF\u00C1\u00A3\u009C\u00F6\u00CAs\u0089\u008El\x0F\u00A7\u00E0\u00C1T\u00E0V\u00E2p3\u0087\u00EC\u00B2KY\u00CC\u0089\u00B4\u00D9<O\u00D9\u00BD\x16E\u00E9\x1C29y\u00D6\u00B8\u00B94\u00A5\u0094\u009D6\u00C3\u00E5\u00B1u\u0094'\u00AC\u00F7\u00B8\u00A4a\u00A4l\u00FFS\u00B4\u009D\u00A9\u00CE\u00DFT\u00B2\u0094{\x1E\u00EC3* \r\u0087t\u00B5\u00F6ipi;\x13#e\u00D3lX-\u00CD\u00F2\u00DD\u00FE\x19vj.\u00F7\u00FA4\u00BB\x05\u00D0\u00BA]\u0092|\x1F\u00920\u00D0c\u00BB\u00A9\x00g\x15\x15\u00E0\\,/\u00C8\u00BF\bXDu\x0FG\u00F0e\u008A\u00A0\u00BA\u00DCP\u008F\u00F6V:(\u0081\u00DA\x1F[\u0086m~\u00D3\u00FEv\x1DmG?\u00CEz\u00B5;s\u00BA\u00BF\u00AD\u00EA\u00A2\u00E2\x11\u0098\u0097\u00BDkdL\x07\u0087T\u009Ak\u00D0\u00C6-;\u00C0\u00E3\u00F1\x1D\u00AD\",\u00B35\u00B9\u00E9#\u00CA\u008DF\u00E7!\u00D8\x00\r\u00C7ym\x1F\x12\u0097\u00B2\x17*\u00DCg\u00D0\u00B3\u00B1\x7F\u00CEY\u008Fv\u0097i\u00CF\r\x7F\u00A1h\u00CB\u00BD\u00B4\u00FBk\u00AD\u00B6\n\x1B\u008F\u00A7\u00ED\u00EF\u00A5\u00DC\u00A7yuY\u00EE\u00B36\x12\u00B6\u00C8H\u00D6.\u00A2\u00CC\u00F78e\u00FE\u00A48'J+\x16Y\u00DABY\u00B9\u009A\u00ABy\u008A\u00A6]lr\u00F66\x1E\u00DA.\u008C\u009D\u00DB\u00A5\x18\u00E7w\u00B7<\u009C\u00B6\u00FBL9MO\u00E7as\x18J\u00DA\u00E3\u0092\u00893\u00C6\u009A\f\x04\u00B7N\u009E:MGFE\u00B9l\u0099\u00A1\u00CD\u00A6\x1C\u00C7\u00E4\f\u00B4G&\u00E1\u00CE,G\u009B\u00DC]g\u00F2\u0093\x0F\u00FD\u009FK\t\u00F6\x7FW>\u00B7\u0098ZM6\u00C3)\u009B\u00AC\u00C3\u00C4\u00C4V7\u00A0\u00ADM\t\u00AD\u0097\u00F4\u00C8\x0E\u00E6P?0\u00CBc\u00AE\u00FB.hAT\x00\u0080\u00EC\u00E99\u0094'A\u0093\u00A2\x03|\u0093?\u00ABP\x7F\u00E8c\\\u00DE\u00DD\u00E4N\u00C6\u00F1G\u00D00yY'\u00EEZ\u008A\x1D\u008A\u00F2)\x1B\u00D9]\u00EB\u00EA\u00E2\u00E7.\u00E5\u00B0Q\u00D3\u008E\u0098\u0098\x18\u0088DB\u00D6\u00CB\u009Dg\u00DE\t\u00C0\u00EEW0{\u00C5S=\x19\u00D8zJ\x10\u00E5BU\u00F5\u00E7\u0082\u00B6\u00D6\x16\u00B4\u00B64[\x192\u00BF\u00A1\x01\u0092\u00F2\x02\u00F0[\u00AB`\bKBgj\x1F\x18\"#\u00ED\u00F6\u00C6\u00D3\u00D6\u00A0\f\u0096\u008CLbu1d\u009ARP\x06\x1Az\u00A1\fjYoh\x05\u00D1ng\u0083\u00C9\f\u00F4\x17\u008Ce\u00A8\u00D3\u00D7\u00C3H\u00BE*\u00F82\u00C4\u00F0\u00E3\x11\u00C5\u008F\u00F2\t\u00EA=`\x7FI\u00A2\u00BA\u00C3\u00F8\u0098X\u00BA \u008C\u00D6h\u0082\u00C1hDGG;z\u00F7\x1F\u00D4\u00D3O=\u00A5\u00A7\u0090Rp\u00F6\f\u00EA\u00EA\"!\x14p[\u0093\u0098\u00EDm\f\u0088\u00F3\u009C\u00C3\u0086\u00F4\x00{O\t\u00B0([\u0095\x10\x18\u00CC\u00E9\u00E9\x18\u00C6,\u00D9\x7F\x00\u00A1\u009B\x7FE\u00A2\u0088\x10W\u0088\x1C\u00E8(@\u0095\u00F6W\u00B4]1\x0B\x1Dc\u00C6p! L\u00B6\u00D4\u008A\u00CC\u00DF\u00D0\u00D6\u00DD\u00C8T\u00ADE\\\u0094\t<)\x0F\u00866=\n+\u00E4\u00A8M\u00B8\x17\x1Aq\u00AA\u0095\u00E7[\u00B4|\u00E6\u009E\x1Cm\x0E6\u00E3$\u00A2B\u0099\u00C0\x16@\u00A3\u0091\x07M\u00BD\x11\u00F7)\u00AED\x12?\u00D9\u00ABX\u00DC\x03\u00EA\u0097\u00AE\u00A6\u00CE\nmf0g\u0080\u009D\x11\x14\u008D\u0084\u00BE\x18m\u00DDkF\u00B3\x00u)GO\u00DF\u00EE\u00D1v\u009D\u00F7\u0082R~\u00EE\u00E3\u00F6\u00FD\x1E\u00B4\u008Fo\u0097\x12\u00E3\u00EE\u00EE\u00B9Ey\x7F\u008C\u0083\u0085\u00D3b>u\u00C62\u0093\x07\u00CD\u00DD\u00E4\u0097\u00F6\u00DC\u00D5>\u00F6\u009F\u00DD8\u00B6\u00DD\u00DB}z\u00A3\u0081\b\u00BB\x06\x0E\u00C8\u00C9\u0085<v\u00A9\u0093rZ\u00D1\u00A2\u00BA\u00DFM\u00FD\u00FF*\u00FF1\u00EAPQ\u00DD\u0082\u0094\u00948\u00B7v\u009D\u00E6\u00E6fDFFv\u00ED\x19\u00B4\x0E\r\u00F5m\u0088\u008D\u008B\u00EE\u00B6v7\x11\x05Z\x1A\x1E\t\x11\u00ADGu]\x0B\u00A2\u00E3c]sv\x04\u00DCN\x13\u00C5\u00A3\t\u00E3e\x0E\u0090\x07\u0084l\u00DA\u008ADf\u00BFq\u0088y{\x15\u00F9\u009B$\u0097B\u00B1\u00E5WP\u008D\r\u0084A\u009BXF\u00CD0n\u00E6\x10\u00E8\u00EA\x11\u00DE\u00B4\x01\u00F1\u00F1\u0084\u00C9\u008A(6\t\u0087 T\u0084\u00FE\u00C9\x1A(\u00DA\x0E\u00B2\u00A1\x1A\u008D\u0096\u00EBM\u00DCQ\u00A0-\u00C4\u00CF\u009D'\x10\u00AF\x00$\x14\x17Z!\u009EoBL<\x0F\u00C75\u00A7ai\u008F\u00A7<\u00CD=\u00C7\u00A5up\u00E3\u00CBi\u00E7F\u0093\u00D1\n\u00E8\u00B4\x19\u00D4M\u00E4\u009C\u00C5\n\u00E4\u0095!\u00C2\u0096$\u00C3\u00F9\u009F;NK\u009B\x03\u00CA\u00D0\u00FE\u00B1\u00DB \u00E0\u008D\u00F2p\u00F8w\u009F=\u00B01&X\u00F6\u00F0\u0086pt7\x1C.\u00F5\x06t\u00C3E\x12\x12\u00DC?\u0097\u00B6\u00C4\u0092\u00B1\x1C\x0E\u00D6\x1Eo9RL\u009C\x15\u0088\x0E\x04\u00F3LNGw\x17\u0093\u00C3{\u00D1\x0E\u008B\u00A2\u00AE\u00CF3\u00B1<\u008E\u00B6\u00F2DV(f\u0094%\"\x00\u00DB\u00E6R\x0F\x0Ft>\u00B4\u009DUx\u00FF\u0083\u00CF]y\u0090\u00A1\x13\u00CB\u009F\u00F9\x1Aj&\u00AA\u00A6\u009B\u00FB\u00CE\x1D\u00DB\x1D\u00F0\u00B3\u00BE\u00FC\u00F4\x1D\u009C\u00AC\u00EB\u00B0~\u00DF\u00F7\u00E5s\u00F8j\u00F5:26F\u0094\u009C?\x1FP]\u00CDe9\u00B8~\u00F1b\u00F6x\u00EC\u00A5\u00F7\u00D8s\u009A\u0096B<\u00FE\u00EC\u00EBh\u00D5\x19\u00B0v\u00D5\n<\u00F9\u00DA*\u00F6\u00B3\u00AF\u00BA\u0098\u00E7\x17\x1E\u00DC\u008DV\u0095\u00DE\u00E35\x02\u00A3\u0099\u00E1\u0086\u0096\x15 I, H+r\u009C\u00EF\u00E4{\u0092A\x0FeE!Z\u00C3\u00C7\u00DA\u00B2\x13\u0091\"U\u009DG\u00DF\u00B8N.\u00C6\u00A7\u0089\u00C7\u00D2/\u00EBo%\u00E1#\u0091\x7F\x06\u00D5\u00B4\u00EB\x1A\u00FCN\u00A2\u00A5G\u00C4\u00F1\u00C0\u00B7\x0B\u00FC\u00C8HWr\u008AF\u0091\u00A4\u00DA\u00CE\u00B4o\u00EA\u00A2\u00E4\u00DCS\u00FEp\u00D3\u00BB\u00C9\u00A6\u00A1\u00B3\u0093\u008D0)#\u00BB\u00AEn\n\x1C\x0B\u00EC<\u0087\u00AD~'D@\u00D0\u00A85\u00ECo\"\u00B1\u00D81\x1C&E\u00B9\u0080\x15\u00ED\x02\u00EC\x14\u00AA\u008AN\u00A1\u00B2\u00D5\u0084\u00B1#\u0087:\x12\x13\u00E5\x1C[\u00DC\u00C8:/Y\u00D66-\x13\u0086\u00E7gde\u009DN\x0Be\u0087\x1AQ\u0091\u00E16\u009F\u0081\u008B\u00BD\x05\"`\u00A5\u00F4\u008F\u00B7\x14XG\u00D4ys3\u00DD\x1D\x1A\u00B3\u00BF\u00CE\u008B&\u00B7\u00E3\u00EE\u00D0\x1BL\u0090\u009A\u00B6Vh\u00F44\"\u0098\u00A0P<>\u00A1k\x03\u009A\u009A\u009A!\x0F\r\u0087L\u00C2\u00C5bW\u00ABT.\u00F5\u00F3\u0085b\u0088\u0084\x027\u00C2\u008DYS\u00D7\x1B9M\u009Dg\u00DB\"h\"t\u00C5\u00A3(\x07M\u00D3\u00D8c~w\x18\u00B3\u009CU\u00DF\u00A0\u00B9\u0081\u008F\x0Bm\x1A$\u0086\u0088\u00A0\u00AC:\u0087-;\x0FA(\u0095 D\x11\u00C9\u00F2\u009D\u00AA\u0082<\u00EC\u00C8=\x0B\u00814\x1AW\u00CF\u009B\r\t\u00E9\u00E3\u00E6\u00D6v\u00AC\u00FCv\x05L\u0094\x02s\u00AF\u009B\x03\u00A9\u0080\u0087#\u00FBw\u00A1\u00B0\u00E4\x02\u00F8\x02\x11\u00B9n\x01\u00E4v!sM\u00FA6t*\u00DB\u00F0\u00DD\u00D7\u00EB\u00F0\u00DC\u00C3\u008BP\u00B0e\x15~\u00DAU\u008D\x11\x0B\u00A6\u00E3\u00C4\u0086o\u00B11\u00B7\x04\u00D3\x17\u00DC\u00891\u0083b\u00B1\u00F7\u00F7-(\u00AFiA\u00DF\x01c0rx&\u00F2\u00B7\u00AC\u00C6i%\u008D\u00F8\u00FES0u\x18gufr7\u00CC\u0099s\x07\u00AE\u009B7\u008E\u00A5\u00B7\u00CE\u00E6r\u00ACZ\u00BD\t)I\t\u00D0\u00B7\u0094\u00E2lq=f\u008E\u00EE\u00CB\u00A6\u00BC=\u00B8w\x07\u00DB\u00AE\u00CC\u00BE\x030~\u00F4\b6\u008D\u00F1o?\u00ADG\u0083\u009A\u00C6\u00C0!\x13\u00C1/\u00DF\u008B\u00AF\u00D7l\u00C7\u0098\u00EB\rX0s4~]\u00FF#\u009A\b\u008D\u0086\u00C6\x0E\u00C1U3\x06q<\u00CAd\u00E2L\u00EA\u0082\u00B6*\u009B\u0086\u00EE<\u008B\u00C8y\u00A1\u00B2\u009A\u00D3\u00BA\x18Fm>\x04\u00DAN\b\x14B\u008EY\x19\u00CCs\u00C5\u00C81w1O\u00E5\u00A0u[\u00A4\u00D2|\u0083\x16a<\u00DA\u0081\u00D4-r\u00AE\u008A6\u00985;N\u00E3sw0\u00CF\u00EF9.\u009D\u00C3hw\x18L6\u008B\u008C\u00910-F`4\u00E8\u00F5\u00EC\u00E7\u00A0\u0084\x05\u00BB\u00FC\u009F\f\r\u009D8\u009A\u008B}99\u00D8w\u00E0\x00\u00F6\u00EC;H\u00A4U\u008D\u008D\u008E\u00AC\u00DA\u00BB\u00E5;\u00C5\u00D1\u00A5\u00C3\x01$\u00F5\x1A\f\u0099\u0090c\u00A6&2\u00D9\u008A\u0088\u00D4\u00DDI\x00\u0098\u00F5<6\x1FFB\u00A3Gv\u00EE@yu\u00BD\u00F9\x1CM\u0098w\x03v\u00EC\u00DC\u0089N\u00BD\u00DE\u009D}\u00C1\u00C5\x1A\u00D0\u00D6T\u0087\u00E3G\u00CFY}H\u00FEP\u00D4\u00A4-\x02\x04\x15\u00C8\r\x7F\u0088\u00AE\u00EE\u00F1W\u00E7\x1D%.\u0087'\x10\u00F7|\r\u00ED\u00F6:{\u008B?\u00E5\u00D26\u008B\u00A6\u00DD\u00DEZ\u008B\u00BC\x13\u00A7\u0090\x7F<\x0F{\u00F7\x1Fgi\u00F8\u00F8\u0081=(8{\x16\x07\u00F6\u00EFE\r\x01\nFk:u\u00F0\x00\u00F6\x13\u009A\u00E4\u008E\x03\u00ECq\u00BE\u00AA\x0E\u00EE\u00E3\u00E2q\x07;_\f\u00E6\u00C3\u00BCDe\u0099/\u00F6\u00F3\u00A9\u0087\u00BF\u00D8\x0E\u00BD\u00AA\t_\u00E6\u00D4`\u00D1\u0095}\u00F0\u00C1\u00E6\x13\u00EC\u00B9\u008D\u00DB\u00F6`\u00F4\u00CCy\x18\u00DDK\x01\u00B5\u00D6\u00C4\n\u00E2\u00DB\u00B6\u009F\u00C2\x15\x0B\u00AFG\u0096\u00A8\x01\u00EFn=\u00CB^WQ\u00D2\u008E\u00E9\u00D7.\u00C4\u0080\x10%\u00DE\u00FD%\x1F:u5\u00CE\x16Ub1\u00D1\u009C\u00C7\u00F7\x11`\u00FD\u00FA\u00DD\x0E\u00CF\u00AA>\u00F9\x1B\u00E2\u00D2g \u00B6p\x0F*\x1A\u00D5\u00E87k.2\u0088\f7b\u00D4(\u00F6\u00F3\u0090\u00F44\u008C\u00EA\x1F\u0083\u00D6\u008A#(\u00AE\u00D3\u0092zn@\u00F1\u00B1=Dy\u00D1\"\u00F7\u00F7\x1D\x10F\x0E\u00C4\u00E4\u00EC\x04k}Lr\u009E\u00D3\u00F9\u00BF\u00E1\u008B/\u00BE\u00C0\u00CF\u009B~\u0083(4\x11W_6\fi\u00E9\x03\u0091\x10\u009B\u0089\u00F4\u00A4L\\=\u00FF*H\fu\u00D6v\x15\u00E4\u009D\u0086R\u00A7C\u00E1\u00F6\u00CF\u00D0`J\u00C3\u00C2\x05\u00B3Q|x'\u00FB\u00FC\u00DE\x12\n\u00C3G\u008EDsi\x0E\x1A\u008C\u00B1Xx\u00DD\u00E5\u00E05\x16\u00A3C\u00CFYE\x05\x16\u00D3\u00A86$\x01\u00E8(\u00B4\x01\u00BB\u00BD\u0094\u00D8\u00D1\tMH\u00BC\u00D9\u00F4n\u00D3\u00D4\u00B5\x02\t\u00BB\u0086\u00CE\x0F!\u00C0.\u00A08:\u00E6s\x19\u00D3\u00B4F)k\u008E\u00B5L\x14\u00CB\u00B6\u0094\x01|!\u0094D\u00E2U\u00F0lFJ\u009E\u0099\u00DC\u00A5\u00E4f\u0093\u00D1d^\u009B\u00EDYS\u00FF\u00ABi\u00EA&{\x01\u008E\u00D5\u00D4\r\u00AC\u00C5\u0085\u00F3\u00DB\u00A0\u00FD^\u009Bv}\u0086\t\u00E7\u008E\u00E7\u00C2(\u0090c\u00CA\u0094\x11\x10\x10\u0089\u00B6\u00AA\u00A2\x04yG\u00F20a\u00FCh\"\u0099\u00EA\u00D1\u00DC\u00D2\n\u009D\u00C1\u0084\u00E8\u00988H\u00C5Bt(\x1B\u00A1\u00A3\u00850\u00EAT\u00D0\u0090\t\x1F\x1B\x1F\x0B\u00B1P\u0088\u00C6\u009Ar$\u00A6p\u00C9}ZZ\u009APZQ\x01\u0093X\u0084\u0084\u00A8\x18\u0084\u00CAm\u0091\u00D9\u0098x\u00DC<6\u00F4\u00A3m\u008B!e6\u0093\u00B6\u00B76\x10\u00D9\u0095\x0F%\x13\"\u0097\\\x13\x1BG\u00EA\x16\ta\u00D0iP__O\u00DE\u0097fs{3\u00BB\u0094(\u00D6\x0FE\u0087\u00D6\u00E6&\u00B4\u00AB\u00F4\b\r\u008FDD\u0090\u00E9i\x03[\u00CD\u00A6\u00AC[\u00A8.\u00AD\x15z\u00CA\u00C7\x1D</5\u00F9N&\u00EC{\u00AB\u009B\x7F\u00D6\x01\u00AD\u00BA\x13\x11\u00E11HN\f\u00C1\u00B1\u00E3\u00E7\u00D0\u00D0\u00D2\u0088f-\u008DAC\x07\u00E0\u00FC\u0089\u0093\u00E8P\u00A9\u00D9\u0094\u00BD\u00A3\u00A7M\u00B7V\u00D6\u00D2P\u008D\u00F3\u00A5\u00D5\u00E8\u009D\x12\u00EBd\x11pl/\x0B\u00E0dN0V\x1FN\x18\x14X\u0083^\u00B2[\u00AD\x1C\u00B6d\u00F5h\u00EBL)<\u0094C\u00B4o\x05\x0E\u009C\u00AEA\u00DD\u00AE_qvJ\x1F\bh)R#D0\b\u00FAB\u00A3?G\u00E6\u009D\x1A\n\u00B1\tr\u00A2\u009D\u00A7g\x0FD\u00F9[\u0087\u00A0\u009E\u00D1\x0BI\u00BD\u00E3\x10N\x04yav6\u00CA^=\u0084\u00FA>Y\u00A8il\u00C4\u00B6_\x7F'\u00CA\u00A8\x0E\u00A9i2X,\u00D6Fu\x03\u00BE\u00FAz+\u00C2\u00B3'C\u0090&E\u00EE\u0081#H\u00B9|$\u00D1\u00F2)\u00CE_\u00C8D1z+{}\u00E5\u00E9\u00C3hj\u0092\u00E2\u00B7\u00ED;A\u0089\u00C3\u00A0#\u00E7\u00D4*\x13&\f\u00CB\u00B4\u00D6\u00C7\u00D6\u00A9\u00D7\u00A0W\u00E6\b\u00CC\u009A1\x12\x02\u00B1\u0084[\u00B2\u00A4hv\u0099\u008E]fa\u00EC\u00D6\x04+\u00DBk\u00CA\u00AC\u00ED\n\u008D\u00E4\u00A3C\u00D3\u0089\x03?\x1F\u00C5\u0088G\x171\x19\u009Cp\u00F5\u0092\u00C5l\u00E68K[\u00E4q\u0083\u00C0\u00D3\u00FD\u008A\u00F5k~\u0086\u00D6$f\u0093\u009A1J\u00B4\u00C0hv\u0094\u00EBH\u00EA\u0085J\u00CDoH\x16\u00E88\x13\u00BC\u00A5ht\u00A8P\u00E9\u00D0\u009Ehn\u00A8\x1D\u00A8\u00B7\u008B2PP\x1B\u0082\u0081\u0099:.j\u009B\x19\u00D0M\x1A\"\x1D\u00E9\u00FA\u00B1\u0092\u00A83\x18O\u00E6\u008F\u00C2\u00B7u\u00FB!O\u00A0\u00AC\u00E1\u00F3\u00D9\u00F4\u009E\u0084if\u00A9\x12\b\u00E36y\u00B5\u00B7\u0099hS\x0F\u0085_R\u00A0n\u00BFVh\u00E4,/\x16?\n\u00A3\u00F90\u0099\u00DC`\u00BA\u00FD\u00E2\x0B\u00A7\u00F5R\x1E\u0098\u00B5\u0081L\u008A\u00CA\u00E66d\u008F\u00E8\x07\u00A19\u00FFvrZo\u00C4'\u00A6\u0091\u00DF:\u00B1+'\x17B\u0089\x1C\u00E12!\n\x0B\u00CFa\u00DC\u0084\t\u00A8++BIc\x07\u00C2\u00C2\"`\u00D4\u00B4\u00A1Q\u00D9\u008Aa\u0083\x06\":\u00C1\u0096\u00AD\u00AF\u00B3\u00BD\u008D}.\x13\u00DB]%\r!\u00F2\u00AC\u00CCQ\u00F3\u00B7KuA[\u00C2\u00C1\u0092?L\u00DD\u00A5Mj$\u00A7&\u00A2\u00A5\u00B6\x1A\u008D\u00AD\\\u00DDg\u00F2O\u00A2\u00B1C\u008F\u00A4\u00D8pT^\u00A8&\x13]\x01=a\x1A\u00B9\u00FB\u00F6CEn\u008C\u008B\u008D@\u00E1\u00F9B\f\u00CA\x1E\u0081\u0084\u0098\u008B\x15^\u0097r\u00F1#\u00A0\u00FE\x04`\u00A7\u00DD\u0084q\u00F2\u00CB\u00CEn\u00D7\u00E7\u008E\u00BA\u00B6\u00F3b\u008A_\x01\x19\u00FC\x123\u00DC\u0095\u00A8\x04\u00C2\x0F\u00AB\x0F\u00E1\u00E8q.\u00AF\u00FD\u00A9\x13\\\u0096\u00C4S\u00C7O \u0091\u00D0^Vb4\u00B7\u00BEo~\u00BEV\u00DD\u0086\u00DC\u0093g1 {8D|\u0081]\u00CB\\m\x14\x16_\x13F\u0083cWy\x18\x11\u0091IzB\u00BEPvK>\u0081\u00CA\u00BE\u00FF\u0097\u00CB\u00B1\u00D2z<\u00F7\u00C2RD\u0091\u00F9\u00DFG\u00BA\x1C_|\u00B5\x0FCc\u0095\u00C8\u00AFn\x01\u00BFh?\x1Bz\x16\u00B4\b\r\u009Dj4t\u00A8Q\u0090s\n}\u00AF\x18\x03f$*\n\u008BP9\u00AE\x13\u00A5\x07\u008E\u00A1\u00EF\u00E5c\x10\u0095\x18\u0089\u00A8\u00D0\x12\\6}\n\u00EA\x0Bsp\u00AAA\u00CC\u00F6=S\u00CE\u00EF[\u0083\u00E6\u0090\u0099X\u00BA\u00E4j\x02\u0090\u00D7\u00E0\u00C7\u00AF\u00D7\u0090\u00DF\u0086\u00C3H\u00E6/gE\u00A6\u00D0\u00A9\u00E5,\u00CA\u00C9\x03\u00C7@\u00D1P\u0084\u00A9\u0093\u00C7c\u00EF\u00EE\u00FD\u00E03\u0096I\u00C2\u00CF,\u00D6f\u00DB\u00C2\x01\u00CD\u009A\u00F9\u00E5LH_\u009E\u0090\u00FB]gd\u00AD\u0089\x1C\x1D\x18Y\x1F\x0BYl\x1AiW!\u00DB\u00AE_\u00B7\u00EEB\u00A8P\u0082I\u00D7M\u00C4\u00BE}\x07\u00D0{\u00CEp\x02\u00DE\u00BF\u00E1\u00BA%\u00D7BC\x0B\u00A0\"Be\u00FD\u0085<D\u00A4\f\u00C6\u00D4\x11Qx\u00FC\u0081g1~\u00E6\x1CD\x12\u00FC\u00E4YX\u00976\"\x02\u00CD\u00B3f\u00A0\u00B2C\u00C5j\u00E6\x16\r\u00BD\u00A2\u00AD\x13\u00CD3\u00A7\u00B1\u00BF\u00C3iA^\u00C3\u008FD]\u00E8\u00DFPSK~\u00D2\x11\u00F2&\x1A\u0094\u00A1]\u0087\u00FC\n)\u009A\u00A4\u00C3\u00ED\x16\u00F7mG\x06\u00F9w\u00B9\u00A0?j\u00DB\u0088\u00BC@\u00B3\u00D6z\u00D4\x1Ayh\u00A85\u00A1?/\u00CB\u00DA!\x16g<\u00E7\u00A3[\x1C\u008Az\u008En;l\u00F4`\u00B2sl\u00B2\b~\u00E6\u00F5uw\u008Er4e\u00BE\u00D6d\u00F5\u009F\u00F0\u00E8\x1Cg\u0089\u0091\u00E3\u00A4\u00B5\b\u0088\u00E6-\x10\u0088\u00D1\u00A7\u00CF\x00L\x197\u0086\u0080\u00E5`2\u0089MPit\u00EC\r<H1t\u00D8\x10\u008C\x1C3\x1A\u009Av\u0095K\x13\x12\u0092S\u0088`\u00C9CJ\u00EF^\u0088\u008D\u0089\n\b7\x13\u0093R\u00D1\u00AFw_k\u00DDF\u00A3\x1E\u009D*\x03&\u008E\x1B\u00CD\u00B6\u00A7wj\x12h#a\x00\u00CAf\u00A8L|\f\x199\x16\u0083\x07\rC\u00BF\u00D4\x18477\u00BAY\x1A\u00E8\u00A6\u00C3\r\u0088\u00D0\x7F\u00C2\u00BF`\u00C0\u00D4\u00D1\x11\u0091v\u00F3\x1B\u00E5\u00C6\x11\u00D1\u00D7\u00D2A\u00F0\u00CB\x0BCF\u008C\u00C1\u00C4\u00F1\u00C3\u00D8\u00B0\u00B7\u00A3'\u008Cb\u00FFN\u00982\x19\x03z\u00A7\u00B9\u00B4\u00A3\u00BA\u00A2\n\x02I\x14\u00E2\u00A2#\u009C\u009E\u00EC&\u00F0\u00B4\u00D5\u00F7\u0084v\x10\x1Em\u00F3\u00C1\u00C6c{x\fw\u0090\u0099\u008E(\"\u00F80\u009F\u00B3\u00C6\u00CCG\u00DB\u00B9\u00CD\x185l ^}\u00FA\x11\u00AC\u00DCWH4`\x01\x0B\u009E\x13\u00B2\x13\u00B0\u00F4\u0081{\u00B11\u00BF\x0EK&\u00A5\u00B3\u00D7G\u00C6\u00C9\u00F1\u00C2\u00BF\x1E\u00C0\u00DA#\x15X<\u00A5\x17x\u0082(R_'\u00FEq\u00FB\x1Dx\u00FC\u0095/\u00D0\u00B7_\u008A\u0099\u0097\x19\u00B0\u00F3\u00E7\u00D3\u00988o\u00AC9f\u008C\x18:\u00C8\u00A0&\u00E3%\x17\u00D3l\u00B8b\u008A\u0092\u00A0\u00B5\u00B3\x16\u00AF\u00FC|\x02\u00D2\u00B8l\u00E8\u009BJ\u00F1\u008F;\u00EEFi\u009D\u0096\x1D/\u00E6:8\u008F\x1B\u00E12\u00DB~]\u0085{\x1F|\b\u00AF|\u00B8\u0082\u00CB\u00E8(fb\x14\b\u00B8\u00CF|\x11g\u00A3\u00B2kWy}5\u00C4\u0084\u00DF%\u008F\u009E\u008B\u0086\u00F3;p\u00E7\x03\u008FC\u00961\u0098}\u00FE\u008C\x05\x13\u00B0z\u00F5ZDg\x0E\u00C4\u00F6o\u00DF\u00C6\x1D\u00F7=\u0085\u00F8)\x7FGB\u0098\u0088\x0B\u00BE\u00B3q\u00E3F\x1Avk\u0092\u00C2\u00E6&\u0084T\x16A\u00D8Q\x0B\u009D<\x0EmDC\u00D7\x11@\u00A7i\x0B\u00E1\u0099\u00AC1\u0086Mf..\u00D3\u0097#DWE$\x15\"\x1C\b\u00A4h\x17\u00A6A\u00C3\u008B\u00B0\u008B\u008CC\u00BBh\u00DA5\u00A8B\u00A3\u00A9\u00855P\u00C9)\x11\u00A2\x10\u0083\b\u00BB\u0094%\u009E\x1C\u00E5L=\u00E6\u00F7KRSgi\u00C3\u00AC\u00A1s\u00EB\u00D5\u009C\u00FF\x03\u00B3\u009D\u00AD\u00B5\u00AD\r\u00E3'M\u00F5\u00A5\\:\u009E\u00B0\x1Bg\u0083^\u008D}{\x0E`\x10a\u00B21\u00E1\u00A16\u00A8\"\u00D7\u00E8\u00B5j\u0094\u0096\u0095\x13 \u00D7BD&J]u-\u00B2G\u008DEK\u00D9IT\u00EB#0\u0099h\u00F7\f\u00E0\u00E6\u00E6\u009E\u00C4\u00D8\u00B1#\u009D,\x00*\u00EC\u00D9s\x10\u0083\u00C6\u008CEl\u0088\u00CC\u00FA\"F\u0093\x1EG\u00F7\u00ECA\\\u00FF!H\u008D\u00E7\u00B6\u00B0t(kp(\u00F7,\u00C6N\u009E\u0084\u009A3G \u0088\u00EE\u008D\u00F4\u00A4X\x18\u008C:\u00B6\u00EE\u00A1\u00D9\u00998\u0095_\u008EQ#\u0087\u00B1\u00954\u00D7U\u00E2\u00D8\u0099\x1Ad\u00F7\u008B\u00C5\u00E9s\u008D\u00988q(\u0084D\u0083\u00EBP\u00D6\u00A1\u00A0\u00B4\x0E#\u0087f_l\u00FB\u00FB%J*\u0094\u00EF\x06\x07\u00B3RCwo_0~\x15\u00A5E\u00A5D+\u00EBDcc+\"\u00A3\"\u00D1\u00D4\u00D8\u0084\u0098\u00D88\u00C8\u00A4\n\u00A4e$\x11\u008D\u009C\u00B3\x1Au*\u009Bp\u00BA\u00B0\x18\u00D9\u00C3\u0086C*\u00F4\u009D!q\u00C7\u00B6\u00CD\u0088\u008E\u008E\u0082H(\"\x1A:\u008F\u00D5\u00D2)\u00D6Q\u00CE\u00BCg\u00FD\x12\x1F\u00C7K\u008A\u00A6L\\\u009AZ\x07\u00F21\u0099\u00A3\u00CAQnh\u0084\u00B2_\x061\u00B1)W\u00BB\u00BA)\u0096\u00A9\u0087\u00CF\u00EF\u00BE\u00F0\u00E6\\}|\x07\u00E6jb\u009Dt)\u00B7\u00CB\u009F&\u009A\u0089q`\u00B6>vt~!\u00B0z_Z\u00B4\u00EF\u00F0pr\u008C\u00B4jW\u00965R\x0B\x13\u00B5O\x1A`\u0091&\u00DB\x05\u00A9h\u00E3\u00A78\x028\u00FB0\u0093+\u00F37\u00FF\x1E\u008FD\u00F6`\u00EB\u00B5\b\t0\u00BA[\u00AA\u00ED)\x7F\r\u00EB\u00BBM\u00F02\u009A\u00AC\u00FA\u00A1\u00C9n\u00B7\u0084\u00FF\u00958y\x13\x0BD\b\x15Sh\u00ACoDtx\b;/Um\u008D\u00D8\x7F\u00E48\u00D2\u0092\u0093P\u00DD\u00A2\u00C3\u00D4qC\u00C9d\u00D0\u00A2\u00A1\u00BA\u0086\u00D3\u008F\x1C&\x01m\u00A3_\u0087\u00F9\u00C0\u00D0\u00B3\u00D9Tf\u00F7\x1B\u009F'\u0080L\u00C6\u0087\u00BA\u00AD\x03\u0088\u00E34\u00F8\u00B6\u00A6z\u00F3~\r\u00DA!\u00E6\u0082E\x1A\x17\b\u00E50\u00E8t\u00D6uT\u00C6A\u0090\u00CB\u00D2H\u00C1\u00A8\u00D7\u00B2N\u0084\u00CC\x16Tu{+\x11>D^\u00B7\u00D9u\u008B\u00B9\u009C\u00BETi\u0084v\x0FV\u00B4\u0097\u00F5r:\u0090gy\u00B9?\u0080\u00B4\u00F2\u008D5\u00A5\u00D0\x10\u00ED\u00B0OV:\x1A\u00EA\u008F!\u00A3w&\u009A\x1B[\u0090\u0099\u0095\u0081\u0093\u00FBs`\x10\u008B\u00D1?%\x0E\u00AA\u008E\x06\x1C\u00CE=\u0081\u00DE\x03\u0087A\"\x14\u00FA\x15=\u0081\u00B6\u00C4\u00FA0G]d\u00D6Wy\u0094\u0099\u00AE\x18^k\u00B7\u00C3\u0082\u00EA\u00E1\u0083\u00DEeWK*T\u0087\u008D,^\u00B23\u00D9\u009Dcw\u00CFt\x03\u00D0p\u00F5t\u00DF;\u00B9k\x17\u00CF5~\u00B2\u0095\u00D2xN\u0091\x7F\x05\u00DF\u00ACX\u00E1$\u00C6\u00D0N\x1A\x18\u00ED\x11h\u00DD1&\u00DAS\u00C6\x1Eo\u00D9\u00F2\u00FC\u0088\u00ED\u00DCS\u00FE\n\bo\u00D9kn\x17Y\u008E0)-\x01\u00BB\t.\u009A\u00BA\u00FF\u00EB\u0086\x14\u00C5\u00C7\u00C0\u00A1\u00C3p2\u00BF\u0090h\u00C3\u009DDC\u00E2\u00A1U\u00A9DJz_\u00C4GKPS}\x06'N\u009F\x06\u008F\u00E6\u00B6\t\u00B9\u00AF\u00C3\u00CD9\x02\u00DE!21\u00CE\u00E7\u009F\x012{!.\u00D6f\u0082\u00CF\x1C\u0090\u008D\x13\u00CC\u00F3\u00CEt\u0080\"\u009A~K\u00BB\x06\u00A9\u00BD\u00FAC&\x10\u00BAd\u00A5bb^\u00F3\u00F9\"D\u0085Kp\u00F0\u00C8Q\u0084\u0085\u00CA\u00A0j\u00EF`\x7F\r\u008B\u008A%m\u00AC\u00C7\u0091C\u00B9\u0088\f\x0FESs\x1B\u00FA\x0F\x1C\u00E0u\x0E\u00D0\u009E\u0080/\x00\x15\u009D\u00BA\x04T<:\u00A8\x1F\x03\u00C9\u0093\u00E7\x1A'\u00BEk\u0082\u008E\u00ED\x02&\r\u00AE\u00AA\u00E6\x02\u00CE\u009Dm\u0084$4\x122\u0089\x14Q\u00A1b\x14\u009F/\u0081Q AX\u0088\x14\x06\u0083\x0E\u00C7\u00F3N\u0081P\x1D\x1Aj+\u00D1\\_\u00CD:u\u008A\x14\u00D1\u00E8G4y\u00C7\x16\u00D9\u00EA\u00DE\x7F`?\u00D1\u00F6%\u00AC#&\x03@\f\u00CD\u00F2\u00D8X\u00E4\u0094gb\u00ED)=\u00C5\u00CF\u00D9O%\u00A7\u00A4\u00D0\\\u00F2\x16\u009E[\u0089\u00813\r\x05GdZ\u00AD\u00AE\u00A7\u0097\u00FF?4\u0087Y,?\u0096\u00EF\u008C\u00A5g\u00E5\u00F7k\u0082\x11\u00C3\u009DL\x004:\u00D5\u009D,#\x14\u008B\u00A4\u00846)\u00EB5\u008Cfl1c\u00FA_\u0098\u00B6\u00F2\u00BC\u00C8(&\u00A8T*\u00F0\u00F8\x02H%\x12\u00FFLg\u0084\u00D13\u00E60\u00A1\u0093\x19\u0096\u00DB\u00E6G\u00B4u\u00A1\u00C03\u00A0x\u0094\u00C6\u0083\u0084\u00D2\u00BF\b8p)l\u00E9\u00C05\u00F0 \x05\x1E\x7F\u0091^\u00A7\u00D5\u0080\u00F1\u00F5\u0095\u00C9lc\u00AFRuB\"\u0091y\u0089W\u00E0{\x00\x17/\u0098\x0B\u0081\u00C0F\u00AB\u0094E\u00BBt\u00F6|\u00EF)=%\u00C0\"\u00E2\u00F1\u00BE\x10p\x1A\x0B\u00CF\u00CA\u008C\u00ED\u0099\"C\u00B8L\u0088\u00BD`\u00D6\u00B1eR)\u00A4\u00E4\u00D0\x1B\f\u0097\u00E4\u00CB\u008B\u00C5\"s\bS\u00E3\u00FF\u00F9\u0081f\u00DE\u00F5\u00CF\x10\u00B0\u00BA\u00BC\u00FD\u0090vu\u0098\u0093\u00CB\u00E4Ny\u008F\u00B9k\u00988\u00DA6k\u0081\u00FF\u00FA\u00AC}\u0080\x1Bg\u0081\u00821\u00ED\u00C9\u00E5!\x015\u0099Y*p\x17\u00E8\u0091\u0099K\u00DE\x03\u00D7P\u00DDd\u009E\u00B2\u00B7\u00B6u\u00B3\u00BD\u00AB\u009B\x01\u00C7\u00CE\u00D3\u00C6\u00FC\u00D9=\u00B8\u00D3\u00DDfu\u00A0]\u00FB\u00C8\x1B\u0083\x14K r\u00E6k\u0084\u00FE,1\x0F\x1C\u00FB\u0086\x0E\u0098\u00AE\u00D9\u00F5`\x1E\x0F=\u00A5\u00A7tg\x11X\u0098oH\b\u00C7\u00BC:U6/a\u009DN\u00E7\x02\u00E81\u0089\u00FD\u00D0P]\u00E0\u00B3b\u00B5Z\x03\u0099\u00DC\u00F7~\u00DC\u00E4\u00A4$$&&\u00E0\u00F0\u0091\\\u00D62`4\u00F9\u00BFe\u008Da\u00E4r\u00F2\f\x01\u00F9kd\u00F7\b\u00AA\u00A0\u00D5i\u00BB\u008D\u00971\u009A\u009FD,&\u00A0(f'\u009F\u009Eh\u0083\u009D\u009D\u009D\u00B0l\x03\u00EC)\u00BE\u008BD*\u00E9\x16\u0081\u00C2_\u00B6\u00EE}o4\u00ED\u00D5M\u00CBa+\x15\u00ED\u0094\u009A\u00D6\u00B2\u00E7\u0098\u00A2\x1C#\u00C3\u00B9\x04+\u00A7\u00EDj\u00A2\u00BA\x19\u0094\x02\u00EC-*\x10\u0081\u0089\u00BA\b\u00A3\u00E1i\u008C\u00DC\u0085\u00FEuLj\u00E9\u0090\\\u00B9\u00DB\u00BB\u008F\x0E\u00AE?h\u00A7\u00FD\u00F2\u00CEQ\bio]\x7Fq\x16\x14\x19\u008D\u009F\u00E1S=V\u00D1\u009E\u00E2\x00\u00EA\u008C\u00C9G\x1E\"g\u009D6\u00ECA\u00DD\u00DD\u00E4\u008B\u0098\u00FC$Z\u00D7\u00DF\x03\u00BD\u00AE\u00C3\u00E7\u00C4\u00F5\u00C6'\u0086\x0F\x1B\u0086\u00B2\u00F22\u00A4\u00A7\u00A5a\u00D6\u00ECY,\u00A8\u00DF|\u00CB-\u00D8\u00B8a\x03\x1A\x1A\x1B\u00FD\"\u00E6\u00F8\u00F88466\u00A1\u00AD\u00AD\u008D\x05\u00F6\u00E8\u00E8hh4\x1A4\u00B7\u00B4\x04\u00DD!r\u0099\u008C5\u00952\x13%!!\u00C1\u00ED5\u00AD\u00AD\u00ADhlj\u00FCC\u009C\u00F9\u00B2z\u00F7f\u00DF\u00A7\u00A9\u00A9\u0089\u00FD\u00CC\u0094\u00F3EE\u0088\u008A\u008ABdD\u0084\u00F5\u00BB\u00FDo\u00FE\u0096\u00CC\u00CCL\u00C7P\u00AB^JSs3k\u00B5\t\u00C8Z#\u0093\".6\x0E\u00ED\u00ED\u00ED\b\"?J7\u00B2D\u00F7\x1B\u00A5(\u009FO\u00B2\u00CF\u00F3l\u00EF|C{\x07\x04\u00F3~v\u00DA\u00AA\u00C0\u00D1\x1E\u0095r\u00CA\u00EE\x7F\u00DA\u00EFh\u00F6\u00DE\u00E0\u00D6n\u00AB\x15\x1D\x000w%ox\u00B7\u00DC\u00E5%\u00F1\rM\x07D0\u00C1\tQ\u00EE\u00FA\u00C3\u00F9\u00B9~\u00F4\x19\u00ED\u008D\u00E2l\u0085I0\u00C2(\n*\u00A2$h\u00B5\u00DA\x1E$\u00EA)\u00DD\x07\u00EA\u00965\u009C\u00FA\u00FA\x06\u00BF\u00CCA!R\x11\x12\u00E6\u00BC\u0083\u009AM\x0F\u00F8\x04voe\u00E0\u0080\u0081,h*\t@ZJ4\x01*)\u00B3A\u00DF\u00D7\u00F4c\u00F6\t'&\u00A2\u00A1\u00A1\x11j\r\x17*TG\u00B4\u00E8\u00EA\u009A\x1A$\x10\u00A0\u00EF\x12Sd\u00F6\x06&'[-\x06\u008Cf\u00DE\u00D4\u00DC\u00C4J\u00C2\x12\u0089\u0098\x05\u00D3\u00F0\u00F0p\u00F2<\x1D\u0094\u00CA6\u00B7u\u0088\u0084B$&%B(p\u00DD\u00DE\u00A27\u0090vVU\u00B3\u00ED\u00B5\x17PBC\x15h\u00F1 \u008C0\u0080n\x0F\u00D8\u0091\x11\u00E1,3\u00B0\u009Cw\x06v\u00BF-\x11d\u00AC\u00CB\u00CB\u00CB\u00FD\u00BA6T\u00A1\b\u00B8/CC\u00B9\u00EDgb\u00D2o>y\u00F9\u009F\u00B0\u0094x1e2\u00CA\u00C7\u00D6igw/\u009Ar\x04$*h\u00E0\u00B4X\n.=\u00B3.\u00D5\r\u00E3\u00E0H.\u00CE\u00DF\u00DC\u00EF\u00D3\u00EF\u00AA\u009D\u00C7_q0\u00D0\u00B7\u00D1\x110\u00D7\u0090\u00C3]m\"\u0091\u0088\u00B5\u0094\u00F6\u0094\u009E\x12\u0094\u00A6\u00CE\u00A6P\r\ta\u00FF\u00DAk\u00EA\u009EJt\u0098\f\u00B2\u00F9\x1F\u00A2i\u00EFKh\u00A8\u00CC\x0F\u00EA\u00C1\u00D5\u00D5\u0095l\u00E4\u00AF\u00FD{\u00F7Y\u0081PF\u00B4\u00E4\u009A\u00EA\x1A\u00F4\u00EF\u00DB\x17\u008DD+lhhp\u00AFM\u00CB\u00E5\u00E8h\u00EF\u0080Z\u00ADv\u00D5\u00A2\t\u00D0\u00C6\u00C6\u00C6\u00B0BJ0\u00C5\x12\u00DA\u0096\x01<\u00A6\u00FE\x16\"tXL[\x1A\u008D\x16U\x04\u0090\u0099\t\u00C7\u00EC3\u00ED\u00E8po\u008A\x0F!`\u00E6\x0E\u00D0\u0099\u00C2\u009C\x0F'\x1Av{[\x1B\u00EBL\u00C5\u0080%c\u00DEW*\u0095n\u00AFw\u00B6:\u0084\u0087\u0085\x11\u00C1\"\u009A\x15\x0E*++\x1D|\x02\u00BAb\u00A1\u00E8\u00AE\u00C2X8\u0098e\x17\u00A6\u008F\u0098\u00A8G\u00CC_\u00DF\u00CC\u008E\u00F2\u009Fg\u00DAko\u0094/\bq\u0095\x18\u0094\u00CD\u00B5\u00E8\u00D0QHb\u0084?\u00D7<\u009F\x7F\x1E\u00E0\u00D1n$\u00D7n\x13Y\u00FC[C\u00F6K\u009A\u00BE\b\u0092\x10\u00E5\u0095B(\u00B7\u00BF\u00B9\u00DF\u00F3N\x07\b\u00C8\u00DC\u00D6\u00B2\u00C0\u009D\u00D3\u00BA\u00DE\t\foa\u00E6\u008A\u0082\u00F0\n\u0095Z\u00C5\x06\u00A2a\u00F8\u0080\u00C57D \x14t\t\u00D4G\u008E\x18\u0081\u00DEYY\u0084\u008FyN\u00E5Y_W\u0087\u00DF\u00B6\u00FF\u00FE\u0097\x07\u00B1Q\u00E4]\u00AF\u009D;\u0097\u00FD\u00BCu\u00CB\x1667\u0084\u00B7\u00D2{\u00FE'\u00D0\u009D\u00FD\x01\x15g\u00B6;\u009C\u008F\u0088MGhL/\u0088\u00FA]\u008F\u00A2uw\u00FEuA\u00DDB\u00D42\u00B9\u00CC\u00C5\u00FC\u00EE\u00AD\u00C8$B\u00D0\u0093\x1FG\u00CB\u00BA\u00BBa\u00D0\x06\u00AE\u00B1W\u00D7\u00D6A*\u0091\"%\u0095\u00CB\u00B9\x1E\u009F\x10O\b]\u00C5\u009A\u00BE\u00E7\u00CE\u009B\u0087\x15\u00DF\u00AC\u00F0x\u00AFD,\u00F1h\n\u00D6\x12\u00CD\u009DY\u00A7\x0F\x1A\u00D4\u00CD\u00B1\u00E7\u0099\u00A0)\u00DCds\x05mf\u00B2\u00B5\u00B5\u00B5\u00B3\u00E6owK\x05\u00BE\u0098D\x18\x01\u00F20?5_\u008B6nqvc\u00B6r\u00B5:\t\x00\fs`\u0084\x0B{\u00CD\u00FD\u00CF(\u008C\u00FFA||\u00BC5\u00FB\u0094H$$\u0082G\x15+d\u00F9\u00D6/=\x07\x1F\u00B1,\x031Ad\u0098\u00A5\x0F\u00E6\u009BB\x11\x01\u0089GOr\u00E7Jl\u009F\u0099\u00FD\u00E6\u00A5\r\x1A$\u00C5\u00C5\u00DA\u0084\x03gfO1\u0099\u00B4t\u00D6\u00BB\u00F8|\u0081\u009Be\nK$0W\u00CDZ\u00A7\u00EBDS\u008B\n\tq1n \u00CAO\r\u00BA[\u00C1\u00D3\u00EC\u0098\u00D5e9\u00C1\u00D1W\u00E0bk\u00F2\x17'\u00CD\fm7\u00D7u8\u009C\u0093\u008B\u00A1cFB*\x14\u00B9\u00F2\u00A8\u008AR(\u00D5&\u00A4g\u00A6\u00B2Ae\u0098`EEE\u00A5\u0088JLELX(\u00DB\x1F\u00AD\u00CD\u008D\u00B0\u00BA\x02\u009B\u00DD.\u00C4r\x05Beb\u009F\u00A0\u00CE\n\u00F9D\u00E8\r\u0091\u0087\u0080O\u00C0\\C\u00CEY\u00F8/\u00B3\f\u00D8\u0095\u00D2\u00B7o?\u009C<y\x1C\u00A7N{V\u00BAn\\|\u00A3\u00AB\u00C2\x16\x17\u0085\u00C6\u00BA\u00EE\u00E3#Q\u00B1q\u0090hjQ\u00D5v\u00F1\u0084\u00E7#yy\u00B8r\u00CE\x1C\u0097\x1D'\x1Ey<\x197g@gJK}\x19{d\u00F4]\u00F8\u00D7\u00D6\u00D4\x19\x00b\x18\u00B0\u00AAS\x15\u00B0\u00B7\u00B2\\,D/\u00A2\u00B173\x1A\u00FB\x05\u00DF\x1A;cn\u008F#\f\u00BE\u00A8\u00A8\u0098h\u00BCUf\u00E2\u00EB\u00CB\u00FE]t\u00C3\r,0\u00CD\u009F?\x1F\u00D5\u00E47\x06\f<\x156\x13\r\u0099\x04\u00F6&l{@5t\u00C1\u0091\u008D\u00D9\x1A\u00C5\u0098\u00A4\x19M\u00D8[w0Nyq\x04\x18\u00FCY\u00FFw.L\u00DDz\u00BD\u0081\u008DB$\x16y\u009F\u00FC\u008CI\u009DY\u00CF\u008E\u008A\u008C\u00F4\u00B8^\u009E\u0092\u0092\u008C:\"$1\u00CB\x06\u0081\u00AC\u00A9w\u00B7\u0086\u00CE,9p\u00F9\u00C3MfADL\u00C6<\u009E\x15\u00C0h\u00A7\u00ACU\u0094%\u0096:<\u00FA\u009F;\x14&A\u00CB\u00E9\u0082\"6\u0096;\x13\u00BC\u00A9\u0098\u00D0Phd\"\u00FAg\u00A5\u0080r\x033\u00B4\x07\u00D0\u0090\u0085\u0086#\u00DA\u00C8-\u00D9\x18\u008CZ\x1C;z\x12Y\u00D9\u0083\x10.\u00B6-\u00FB\x18\u00C8\u00F8\x1C\u00DB\u00BF\x17\b\t'\u00CCY\u00C2\u00FA\x04\u0088d\u0091\u00E8\u00DF?\x13b\u0081\u00C0!&\u00BC\u00EDy\u0094\x1D\ri\u00D0\u00D8\u00DCD@=\u00D6\u00AD\u00F8b\u00BB\u00C3[\x06\u00B2`\u00E1\u008C\u00F2m\r\u00E82\x7F\u00BD8)[\u00DD\u00F1\x1F\n6k\n\u00ED\u00EE\x1D\x03q\u00F8\u00B3\u00BB\u00B6\u00AA\u00AC\b\x15\x17\u00EA\x10\u009B\x18\u008Fc9G\u00D0{\u00C0\x00\u00C4FGX\u00AFi%\u00CC\u00BD\u00A6\u00A1\x1D\u00A1R\x1A\x07\u00F7\x1F\u00C6\u00D8q\u00C3q\u00EC@\x0E\u00A2\u0093SQ\u0090{\x18\u00ED\x03\u0087\"3.\x02\x1D-\u00AD\u00D0\u0098\u00CC\u00A3J\u00E8\u00BE\u00BA\u00AA\x06\u0099\u00D9C\t\u00DD\u0088\u00E0\u00B8\u00BB\u00C2\u00F5\u00DDB\x15\u00A1\u00AC\"\u00C58\u00F7\u00EA::\u0082\u00B4\x1AtO\u0089\u00CD\u009E\u0085\u00AB&\u00A4\u00A2\u00A6\u00B0\x04\u00F2\u00CB\"\u00B0\u00EF\u00A7u\u00A8\u00D1t]\u00A4\n\u008F <\u009F\u00CC\u0087\u00AA6\u00E5Ek{ZZ*\u00FE\u00FD\u00FC\u00F3\u00C8\u00CC\u00C8\u00F0\u00CBG\u00A8t\u00FD]\u00EC\u00DF^\u00F3?&\x1A\u00FBj\\ \x00\u009F2`:;Z\f\u00D8[~\u00FF\u00EBj\u00EA\u00E6\u00B5c\u00D6\u0099\t\bx\u008B\x05\x03\u00EC\u00D4D\u00A2\u00B1\u00AF\u00BF\u0097h\u00ECm\u00DE\t'&\x06\u00D7]\u00B7\u0090\u00D5~\u00D7\u00AE]\u00EB@\u00C4\nE\x18g\x02\u0089\u0088d\x7F\u00F3%\u00E52Nq\u00CC\x1A\u00BA\u008B\x05A.\u00F7\u00B86\u00EDOa\u00BC\u00FD\u00DD\t\x0B\u00EE\x18\x10\u008F\nn\u00DD\u00B2\u00BD\u00BD\u0083\u00D5\u00AA\x19 \f#\x13[\x11\x16\u00E6\u00F5zfk\u00A0\u00B7\u00C2\u0098\u00F4\u00A5R\u00C9\u009FJH\u00CC\u0092\b\u00D3\x1F\u00CE\u00BB%\x18\u00A1E*\u0095\u00B9`\u0094)\x00pa\u00C2\u00B6\u009E\u00C9;\u008E\u00E8\u008C\u00BE\u00E8\u009D\u00C1E.\u00ECl\u00AD\u00C7\u0081\u00DC\u0093D\u00A0\u0089\x03\u008F\u00D0]I\u00D9\x05\u00A8\u00B4F\u00F4\u00EE\u00D7\x1FQ\u008A\x10\u00D4\u0094\x17\u00A2\u0093\u0092C\u00DF\u00D6\u00886\u0095\x01\u00FD\b\u00D3\x0E\x0B\u0091A\x11\x15\u008F\u00888!\u00FB\u00FC\x0B\u00E5\u00A5hV*Q\u0098\x7F\u0096\bD\u00A9H\u0088\u008D\u00B6\u00D3\x10i\u00C4%\u00A5!5>\n\u00EA\u00F6f\u00EC;t\x14\u008A\u00B8h\u00A4\u00C7D\u00A0\u00AE\u00B2\x04%\x17j\x11\x19\u009F\u0082\u00AC\u00B4$v\u00AB\u009AN\u00D3\u0086\u00FC\u00FC\x02\u00F0$aHO\u008E\u00B0\u00C6\u00B6\u00EFhkF\u00C1\u00D9Bh\t\u00F3\u00CE\u00E8\u00D5\x07\u0089\u00E6g\u00F0\u00DC\x19\u009D)\u0080\u00EE\u00B2nJ\u00FB\u00B4\x06X\u00C6\u0088\u00D7%`\x0E\u00AC\u009D&\x1F\u00D7{\u00D5\u00FEiW\x11\u00CAY\u0090r\x01n\u00CA\x16j\u00D8v\x1D\u00F7\u00B7\u00AA\u00F4\x1C\n+\u0094\x187~\f\u00AB\u0081\u00A7\u00911<B\u00C67d\u00F4H\u00C8\u0084\"\u00CE]\u0091\u00D9\u00EDB\u00E8.T\x11\x0ESu\x03jkk\u00D0i0!A\u00C4\u0087\u0086\u00807\u008F\u00E2\x04\u009B\u00E4^6?\u0096\u008A\u00C2\u00E3\b\u0089\u008EAJT\u00B8\u008B\u00A3\u009D\u00BB\u00F7\x13\u0091\u00B9\u00C1\b\u00BC\u0096}\u00EAL.\u0083?kgM\u00EF\x01\u00BD!\u00D7\u0094a\u00E7\u00F6\u00DF\u00A1&mI\u00ED\u0097\u008D{&\u008F\u0084Q\x14\x02\u00A1\u00B6\x11k>Y\u0089\u00DA\u00F0\u00E1\u00B8\u00FB\u00A6\u0089\x10QZl]\u00BB\u009Ah\x1C\u00D30mp2\u00C4<\x1A\u00CDe\u00B9\u00D8t\u00A0\nW\u00CF\u009D\u0083p)\x1FF2'w~\u00FF5\u00F4\"9\u00E2\x14\x12(\u00C2'\u00E3\u00FAQ\u0089\u0090\u008AE\u00A8\u00C9\u00DF\u00875\u00DB\u008Fa\u00F8\u00DF\x16bB\u00FF8\u00D0\u00A4_\x1B\u00C8\u00B9\x1Fv\u009F\b\u00B8\u00DDO=\u00F9\x04\u00FE\u00F7\u00C2\u008B\u00EC\u00E7\u0092\u00D2\u00D2\u0080\u00EE-^g\x03\u00EF\x0Bn4\u00F7\u00BFj\u00E1\u00B1\u00B1\u0086\u00C9\x11\x17\x1F\u0087\u00D8\u00D8\u00D8\u00A0*aL\u00F1\u0089W\u00BE\x05\u0081\u00D8\u00BBI\u00F9\u00CC\u00993dr\u00D4\u00B2\u0091\u0094\x16.\u00BC\u00DE\u00A3Tz\u00A1\u00B2\u00D2;\u00A8k4\u00EC\u009A\u0093\u00BB\u0080 \u008CY\u009Bq\"\u00BB\u00D8\u0085i;\u00A3qw\u00A50\x13\u0098I\x19\u00CA\u00AC\u008D\u009B\u00BCl\u00E5k\u00F6aVW\x11!\u0087\u00A9\u00E7\u00CF,b\u00F3\u00DA9\u00E3\u00FCC9\t;z\u009D\u00CE}B\x0Es\u00A8L_Y\u00B3MF=\u00DA\u00C9\u00A5a\x11afq\u00C0\x04yX\f\u00A6M\u0099\x04\u00A1IE\u00C0\u00FD8\u009A:\u00B4\u0090\bi\x1C;r\b\x1D\x1A-\x01\u00FDf\u0094\u009E?\u008Bv&\u00A3\u0092V\u0089\u00E2\u00D2\x12\u00F6>\u00BE\u009D\u00AF\x03\u00CFL\x7F|\u0091\u00C0\u00FA\u00D9\u00DBx\u008B\t\u00CD11\u00DDO\x16\u0094\x10\u008D_\u008E\u008A\u00E2B\u00EC?z\u0096\rO{\u0084hs:\u00C2\u008F\r\u00EDu8|\u00E4\u00A4\u00F5\x1D\u00CF\u00E6\u009F\u0086I$EtD\b\n\u0088\u00F0\u00A0\u00D6\u00EB\u00ACB\u008D\u00C9\x19\x1A\u00D9\x14\u00C5\x14\u009B\u00BD\u00C9\u00B9\u00BF|\x1D\u008E\u00D5\u0098\u00AC\u0087=\u00A8Z\x0E\u00FBs\u00EE\u00AE\u00ED\u00CE\u00E2\u00FCL\u00CF\"\x02\x1D\u00B0@Cy\u00DB-@\u00BB\u00CF\u00F0f4\u00A8QV^\u008B\u00E1#\x06Y\u00E3\u00B4\x0B\x04\x12\u00C4F*p\u00F0\u00D0q\u00A8\u00C8\u00F80\u00D7GD\u00A7\x12\u00F0\u00D2\u00E34\x19k\u00A6\u00FDE\u00E7\u008BY\x02-:_\u0082\u00C4\u00B4,\u00A4\u00C7:&\x00\u00D2\u00AA\u0089pX\u00D9\u0088\u00F8\u00F8\u00C4\u00A0\u00FB\u008A\u00E1g\f\x1D2\u008A\x16\u008F\u00CF\u00FFC\u00E7o\u00FE\u0089B\u00E8C2q\u00FD\u00E2k\u0091Ds\u00F1\u00D4\x05b\u00E0\u00FC\u00EE\r(n\x10`\u00FC\u0088x\u00F2\u00FA\u00ED\u00D8\u00B5y#\u008EV\x11\u00ED8>\x011q\t\x10\u00B7\x17c\u00C7\u00EF9\u0088L\x1F\u0089a\u00FD3\x11.Q\u00E1\u00E0\u00C6\u00F58Q\u00DE\u0081\x19\x0B\u00AED\u0088\u0080\x0F\t\u0099s\x12\u009E\x10t{-\u00D6o\u00D8\u0087\u00B0\u00D4^\u00A0\u00C3\u00C6bL\u00BF8\u00EC\u00FDu\x07:\u00F8<\x14\u00D6\x04g\u00F2\u00B7\x00zO\u00B1\x03uK\u00FC\u00F6\u00CE\u008EN6zV\u00B0\u0085q\u009E\u00EB=\u00EF}\u00C4&\u00F5\u00F7bv6\u00E0\u00A3\u008F>b\u00B7\u00AD\u00E9\u00F4\u00EE\u009D@\n\n\x0B\u00D1\u00E8\u0087I\u009B\x01B\u00A9L\u0086\u00A8\u00A8H\u00D6k>\u009A\u00FC\u008D\u008D\u0089f'^rJ\n{\u009E\x17\u0084)\u008B\u00B9'\u00C4\u008F\u00FD\u00F5\f\u009B\u00A8\u00A8\u00A8\u00F0\u00DB\u008C\u00E8\u00EDw\u00C6\u00D9\u00CD\u0093u\u00811\u00A73B\u008CE\ne\u00DA\u00C6x\u00E03\x07\u00DF<\u00F1k\u00CC\x16\u008B?\u00CB\u00F4\u00CEt3\u00B3%\u0092\u00D9\u009A\u00D3\u00D0\u00D8\u00C0\u00FA5\u00D8\u00B4B\x13\u00BB\u0083\u00C0w\x7FXrZYS\u00BD9\x1C|6q\u0083}62.\u00D0\u008B\u0090h\x02\u00C3\u0087\f\u00C5\u00B0\u0081}\u0091\u0090\u0098\u00CC\u0098\u009EX\u0087F\u00E6R\u0081(\x1C\u00C3\u0087\x0E\u00C5\u00A8q\u00E3\u00A1\u00EFT\u00DB\u0099C\u00B9:\x13\u0092\u0093\u00D9@1\u00A9\x19\u00BD\x10g\u00CE\u00D2F\u00D9\u0081x]e9\x01\u00E5|\u009C>s\u009E\b\u00BD\u00A9\u0088\n\u0095\u00A2\u00A6\u00AE\x0EI\u00E9\u00BD\u0091\u009C\u0090\u0084\u00BE\u0099\u0089\u00D0*kp\u00E1\u00C2\x05h\u00F9R\f\x1B>\x1C#\u00C6N\u00C6\u00E0\u00DE\u0089V\x13.O\x1E\u0089\u00D1\u00C3\u0086\u00A2/\u00D1|\u00D2\x13\"\u0091\x7F\u00BE\u00D2\u0085\u008ELN\u0087\u009D\u00B9\u00C0\u00EF\u0085eO`\u00EF\x0BT\x1D\u00AF\u00F7\u00E3\u009F\u009F\u00C9\u00E2\u00FC\x05s\u008F\u00E0\u00EEN\u00D2\u00A3\u00EC\u0084\x18\u00CAv\u00D8}\u00F4)\x00\u00B4\x12\x019>%\x0Ey\u0087\x0E\u00A0\u00A1\u00A3\u0083=\u00D7\u00D9\u00D9\u0088\u0086v52\u0093\u00A2\u0089\x00m3\x13\x0F\x1EB\u00C6s\u00F8\x00\u00D6\u00A21d\u00F8\x10\u00F6/\u0093\u0095\u00AF\x7F\u00AFT\u0097\u00FA\u00CF\u009D-Dbj\x1F$\x06\u0099R\u0097Q\u00AC\x18!\u009F1\u00C93s[\u00AB\u00D5\u00FC\u00A1sXy\u00F6w|\u00F6\u00D5\u00F7\u00C8-h\u00C2\u00D5\u00F7\u00DF\u0085~12\u0098\u00EA\u00F3\u00B1\u00E3T\x19J\u00CA\u00CB \x11\x0B\u0091\u0092\u0094\u008CAC\u00B3\x11E\u0084g#\u00CD\t\u008F&m3\u0099\x1F\u00B98E\u00D8\u0097@*'B\u00A9\x1A\u00E5%\u0095\u00C8?s\x16\u0094,\x1A\x11V\x19\u009A\u008F\u00F3\x05\u00E7PYv\f\u00AD*\x13\u0084\u00C6&\u00B4\u00EB)\u00C4E\u0087\u00939\u00ABF[\u00B3\u00FF\u00A0\u00CE\b?S'O\u00C2Us\u00E6\u00F8\x1D\u00E9\u00D1]a\u00CC\u00EF\u008C\u00D9\u009D)\u00CC\u00DFT\u00F3\u00E7\u00BFz\u00B1\u00EES\u00EF`\b<@\u00D3{}\u00EE\u00B7\u00A8<\u00B5)\u00A0{\x18`?x\u00F80\x1B.s\u00F6\u00E5W\u00B8\u00FC~\u00EC\u00E8Q\u00FF4\x00\x13\u00ED\u00D6Y\u008EI\u00E2\u0091\u009A\u009A\u008A\u00C8\u0088H\u00F6{SS`{\u00AB\x19\u00D3d\x07\x01!\u00A6\x1E\u0093\u0089\u00F6JX\u009E\u009C\n;\u00DA\u00DB\u00A1P\u0084z\u00DC\u00D2\u00D6a^\u00EA\u00F0\u00A70k\u00EA\fX[\u00CCr\u00CC_\u00C6A\u008F\u00D1\u00CE-\u00E7,Z\u00BE\u00E5\u00DA?\u00BA(B\x15D\x032\u00B2\x16\u0096\x14\x02\u0094\u008C\x15\u00C5\u0092\u00EC\u0084\x11\u00D0\u00FC1)\u00D2\u00B4w\u00DFe&\u00BE\u00B6\u00C9\u00A9\x1E\u00E6\u00BDU\u00ED\u00AD8z\u00EC8\u00D1l\u0084\u0088\u00B1\u00AC\u00892\u00DC\u009DI\u00A0\"\x0F\u0085\u0080\u00C77'\u0098\u0081\u00C7\u00ED\u00E54\r;S-\u00D8d0\u00CCZgtl\"\u0092b$8\u009C{\x06\u00A3\x06pfV\x13\u00A1_\u008D\u00B2\t\u0095\x1D-\f'f\u0097\u0094X0\u00A1\u0084\x10\u00F09T\t\t\x0BG\u00BD\u00BA\rz\u009D\u0086h\u00F7B+T34\u00AFi\u00D7\u00DBC\u00B73\u00F5v\u0097\u00B5;\x10u7\u00B0G\u00FCA\u0099\u0096\\\u0092\u00EF\u0098\u009FmYZ\b\u00B6\x19\u00D1qI\b\u008BT\u00A1\u00BC\u00EC\u0082C\x1F\u00C8CC\u0091\u009E\u0091i=\u00A5\u00D1\u00B5\u00E1\u00F0\u00FE#\u00EC\u00B2\tSN\x1C\u00E5L\u00C3\u00B9\u0087\x0E\u0091a\x0F\u00C5\u00E8\tC\u00A0\x10q\u0080R[Q\x00\x15D\x18\u0093\u0095\u00EAUT\u00F1T\u0098\x00ML\u00A4:&\x04-\u00B3M\u0096\u00E1-\u00AC\u00CF\u0090N\u00FF\u0087\u00CD\u00E1\u00EC\x19W\"NY\u008A\u00F3\u00AD\u00ED\u00E0S\x12\u0088\u00C4\x14\u00CC\x19\u0089\u00AC$2h\u00EC`\u00D4\x1E\u00DE\u008C\u00D20)\x06\x11\u00AC\u00E8d\x048\u00A2\u0081gf\u008D\u00C1`2\u00F5\u008E\x12\u0081\u0080\u00A6B\u00A1\u0090J\u0091:$\x1B\u00FA\u0086bT\u00EBy\u0088\u00E3[\x14&\u009B\u0080e\u00E88\u008F\u00B3uS\u0090\x15\x17\u008E\u00A3\u00BFn\u00C5\u0085\x06\u0095_;>\u0098\u00BE\u00B9\u00EF\u00BE{\u00B1w\u00DF~\x14\x1F?\u00CE~~\u00EF\u00BD\u00F7\u00AD[\u009B\u00FD)\x19\u00F3>f\u00D7\u00CD=\u0099\u00DF-\u00BF\u00FF\u00A5A\u00DDSD9O\u00A5M\u00A5\u0085\u00F6\u00CC\x1AT\u009F\u00DE\x12\u00F4\u0083O\u009C:\u008D\u00B1D\u0083b\u00F6|[JSS#\n\u0089\u00A6\u00DE%s\x1F\u0099\u0084\u008C\x06\x1DA\u0080/,,<(`g\x190\u0093\u00B8\u0083u\u00BA3X\u00B7\u008D\u00B1Y\u00BFhn\u00FF\u00B5\u00B2\u00CD\u00B3\u00FF\x00\u00B3&_VV\x1E\x18o\u00A5<3*\u0099T\u00C6z\u00E23\x12\u00BC\u00C5J\u00C1l\x15\u00B3|g\u00D6\u00E7-\u009F\x03e\u009C\u00F6\u00FD\u00EFu\u00A9\u00C0dd\u00AD\x18\u00EEB\x063Af\u0098\u00AD\x7F\f\u00A0\u00F3\u00F8<\u00B4\u00B7\u00B5\u00B3\u00FBo\x19\r]o\u00DE\u0096C\u00B9qh\u00A2\u00FD\u00C4,\u00A1P\u008A\f\u00A2\u00E5\u0096\u0095\u0094\"dP?\u0088\u00C93\u00AA\u0089\x16}\u00BE\u00BC\x1EYi\u00B1D#\x0F\u00C3\u00C8Q\u0083aT+\u00D1h\u00D9\u00F5@\u00D9+\u00BA\u00B4\x03cu\u00DA\u00D4D\u0084C%\"$b\x02\u00CA\u008E&O>\x01a\u0091$\f\u00B1\x112\u00E4\u009E<\u0087\u00A1\u0083{CB\u0098\u008A\u00C1$!\x02T*\u00DA\x1A\u00EB\u00D0\u00D6\u00A1e\u00B7\u0083\x1A\u00F5\u0095h$\u00F50\u00FEQ\u00A5%\x15DK\t\u0087<<\x1A\x1D\u0095%h\u00EFTC\"\u00E4\u00A3\u0099\u00F4Qll\u009AK\x0B\u00EC\u008D\u00D56\u00A4\r,Ny\u00F0\u00E8\u00E9\x7Fb\u009D\u008B\x06\u00E0\u00B0\u00AD9S\u00EE\u0084/\u00CA~\u00DB\u009B\u00C9\u0087\u0083\u00A1\u009F\u00D2#\u00A9\u00D4`0\u00B1\u00F1(L\x06\u0093\u00CB\u00DCk\u00AF\u00AFAdB:\u0092\u00A2D\u00C8;QD@|$r\x0F\x1C\u00C6\u00E0\u0091\u00C3Q\u0090\u009B\u0087\u00AAz%\u00E4IB\\(:\u0083\u00A2\u008A:\u00F4\x190\u0098\u008C3\u00A7\u00F9S|\x11d\u0084\u009E(\x1F`n$\u00BC\u0085\u00B1\u00BC1;m,\u0096:\u0086\u00E70\x00%\u00F2\u00D3\u0093\u00BB\u00BBJ\x13\u00E1\u0099\u00A2\u0088P\u00A4D\u00D3\u00D8\u00BB}\x13\u00EA\x1A5\u00A8\u008A\u00E6\u0096\u00D4\u009A\u00EA\u00CAq\u0092\u00DF\u0089\x0Be\u009B\u00D1\u009F\u00CC\u00B7\fC)Jk\u00EA\x11\u009Ei\u0084@\u0091\u0080\u00D8\u00F0\"\u00FC\u00FA\u00E3*4\u00D01\x18A\u00C9\u00D1{D6\x1A.\u009C\u00C0\u008A\u00E3g!MLc\u00EF5\u00D2\u00A7Qf\u00E4,\u00B0\u00F9\u00A7\u00CFB\u00918\x1A\x03\u00E3(\u0094\x1D\u00AE&R\u00F0`\\\x7Fe\n\u00BE\u00DDr\u00D0'\u00A0_6u*\u00BE\u00FF\u00FE\x07\u00EB\x12-\u00F3\u00999\u00B7s\u00D7.\u00BF\u0081\u009D\u00CF\u00F8\f\x10\u00AD\u00DC\u00D3\u00966\u00FE_<\u00FE\u00BE5\u00F8\u008C\u00BB\u0088r\u009E\x00\u00BD\u008CH8\x06C\u00D7\u00CCCL\x14\u00B8\u00B7\u00DF~\x1B\u00D7^{-\u00EB5\u00DD\u00D2\u00D2\u008A_~\u00F9\u00A5[b\u00C53\u00C0\u00CE\x0093QC\u00C8{\x05\x03\u00EALf1fb1Z\x1E\u00B37\u009C\u00D9F\u00C6\u00EC\u00A3g\u00F6\u00A6{\x03\u00F4`\x0B\x13\u00D3\u00BC\u00C3\u008D\u0099\u00DA^\u00F3\u00B6\u00DF\u00B2\u00E6L\u00C0\u00CCo\u0081ni+*.\x0EhY\u0082\x11\x1C\u00DCy\u00FB\u00D7\u00D4\u00D6\u00B1^\u00EEm\u00ED\u00ED\u00EC~{.\u00AF\u00BAc\u00AAS\u00DA\u00D7\u009A\u00B5\x0F\u00F8\u00CA\x1C8\x14\u009A\u00E3Gq`\u00CF\x1E\u00F6\u00BBH\"\u00C7\u00A81\u00C3!\u00E5\u0099PE\u00B4\u00AE\u009C\u00FD\u00FB!\r\r\u0081D\u00C0s\u00B2X\u009B\u00BF\u00F1l\u00B5Z\u00B7\u00AA\tDH\u0088\fA\u00F9\u00B9\u00D30\u00A9\u00B2\u00D0\u00AFo\u00BAM\u00AF\u00A2ma\\\u0092RSPv\u00E8(\n\u00CA\u00E4\u00E8\u00DB;\x0BG\u0089\u00B6\u00B6o/\x01n\b\u00D1k\u00E0@DDFcpV+\u00D1\u00E6rYm;=+\r\x1A\u0095\x11Ry\x14\x12\u00A3\u00EBq\u00F0\u00C0~\u00B6\u00DE\u0098\u0098$\u00F4I\u008Esz9\u008B\u00FA\u00E2,\u00E2\u00B8\x11\u0082hGsr\u00F7A\u00AA\u00D9J\u00F0G\u00A5F\u00A4\u00DC,QY\u00A2\u00F3\u00FA\u00B0RPn\u00FB\u0087\n\u00E0m)\u00B3+\u00A1\x11\u00A7\u008F\x1C\u00C4i\u00F3\u00EDq\t\u00A9\x0E\x02\u00AB\"6\x19g\u008B\x0E\x12\u00E1\u00D1\u0084\u0088\u0084L\u0084HB\u0090\u009E\x18\u0089cL8k\u00B1\x02\u00C9\u00B1\u00E10\u00E84(.\u00AFa\u00C5\u008C\u0082\u00FC\u00936\u00F0\u0089L\u00C6\u0084a\u00FD\u00CC\u00F2\x12\u00E5q\u00ACZ\t\u00CF\u00B3\u00E4O\u00A7\u009C\u00D6\x0F\u00FCq\u00D6\u00F5V\x18\u0081:;{({xV>lK\u00A0U\u00E7N\u00C1y\u00BFQm=\u00F7\u00B7\u00A1\u00BA\x1C\u009C\u00A8\u00DC\u0082C5%\u00D6\u00DF\u00C7\u00F3\u0085\u00A0;+q\u00F0H\x1E\u00FB=*5\u0096\u008Ck'\u008E\u00EE;\u0084:\u00F3\u00BBt\u00D8\u00DDk\u00E1Ng\u00F2\x0B\u00A0\x18v-\u00C2E\x12\be\x12D\u00C5&B\u00D7T\u00E7\u00F3\u009D\u00C6\u008C\x1D\u008BS\u00A7O;\u00F8\\Y>\u008F\x1E3\x06\u00BBw\u00EF\u00F6\u008F\u00EFy\u00D8\u0083n\u00D9\u00D2\u0086\u00FC\u00BF\u00B6\u00D3\x1C\u0095\u009C\u009Cl\x0B\u0084\u00E9d~g\u00BC\u00D4\x19\x10\u00B3/I\x03\u00AE@\u00D5\x19\u00FF4\u00F4\u0098\u0098\u00E8K6&\u00F1\u00A5\u0094\u00D0\u0085\x01\u00CC\u0098\u0098\x18\u00D4\u00D5\u00D7_\u00B4w\u00ED\u00EA80\x1A\x05c\u00CD\u00A9\u00AD\u00F3>\u00F9\u00EC\u00B3\u00B4YrF3f\u00F2\x15+\u00BF\u00EF\x16\u0093\u00AC\u00DA\u009C\u00A5M$\u0096B\u00C0\u00B39\u0089\x19\rz6\u009B\x1A\u00974\u0085\u00EE\u0082\x17\u00B9\x7FKP\u00CC\u00F3\u00F8N\u00CB+\u008C\u00E6\u00C5\u00B4\u008D\u00E7\x14\u00F0\u0083\u00C9\u00DC\u00C6\n\x11|\u00A1[\u00E7Po\x11t\u00BD\u00C5>g\u00AB\u00EAvs\u00B8\u00F3\u00FB\u009B\x02\u00EA\x17\u00EF\u0080\u00EA_[\u00A9\u00EE\b\u00F3\u00EA\x01\u00D0\x03i\u008F\u008E\u0080\u00B6\u00DE\u00C0\b\u00DC\u00B6u[\u00B5\u00AA\x03b\u0089\u00D4e\u008C\x03i\u00DE\u0092\u00EB\u00E6\u00B3KT\x16\u009E\u00DB\u0095,m\u009Eb\u00BF'&$`\u00C2\u00C4\u0089D1\x11y\u00BC\u00B7\u00B0\u00B0\x00\u00B9yyA\u008F\u00E7\u0080is\u00D1\u00CFX\u0088\u00F5\u00BB\u00CFp\u0082P\\\x06.\x1F\u009F\u008A_\u00D6\u00EF\u0082\u00D2\u00C7{\u00D0\u00B4\x04C\u00A6\u00CE\u00C4\u00B8\x01)\u0080\u00AA\x1E[\u00B7\u00FC\u0082\u008A\u0086v\u00F4\u0094\u00AE\x15&K\x1B\u0095\u0092\u009AJ[\u0098\u00B6sD9\x06l\u00985\u009E`\x18$\x13\b <<\u00AC\x07\u00D4\u00FD\x00tf\u00CB\x1A3\u00B9\x19\u00BF\u0086K\x11\u00D4y\u00E6\u00E0D\fg\u00F2\u00D5\u00C6\u008B\t\u00EA\u00DD\u00A9)\x06w\x03\u00DD\u0085\u00CA\u00E9\u00EEi\u008C7\u0080\u00F7-\x15\u00B9\x13\x19\u00BAP!\u00E5U\x00\u00EB\u0096\u00A1\u00A2\x02]\u00F4w\x05p\u00FA\x12\u00E3=K\x16v\x1F\u00A8s\u00D9\u00FF\u00A8\u00FF/\u00B2M\u00F6\x14\u00FF@]`a\u00BC\u008C\u00E9\u00D79\u00F6;\u00B3>\x1A\x1D\x13\x15T\u00E5lP\u0085K8s\u00D0\u00A5\u00D26\x13\u00ED\x7F\x14\u00BF?\u00EB]Y\u00E7\u00C1\u008E\u008B\u00B9M\u00D0\u00D7Zr7\x17\u00BA\x1Bo\u00A0\u00E8.V\u00EE)L\u008E\u0087\u00F8j\u00BEwpy\u00D1\u00AC)'(v\x02>*\u00D0\u00D7\u00B8\u00F8p\u00E9> \r\u00E5\x02\u00E04.\u00E5B_\u00B4\u00BEb\x04f\u0093\t=\u00A5\u00A7\u00D8\u00AC7z/\u00F1\u0085u=\u00C9\u0083zJ0L\u0098\u00B6\x0B6b\u00D6\u00D4\u00DD\u00ED\u0083\u00F6n\u0088\u00A6\u00BC`\u008C/\x06\u00F9\x07:\u00BA\x04\x12{\u00D5\u00E7\u00A5t7\u0082\u0080\u00C9K/\u00DBG\u0084\u00F3\u00A2\t\u00FF\u00C1\u00FEB\u0094\u00BB\u00B6P\u00CE\u00ED\u00B6\u00B5\u00DF>h\u00AD'\u00B7B*\x10\u00BAuk\u00AC\u00A0\u0082\x10c\\\u009C\x00\u00D8\u00D8\x03\u0096\u00C2\u00F8\r\u00D1v\u00E9[\u00ADA\u0080\u00CC\u00DB\u00F3zJO\tz\x0E\t\u0085\x10hz\u00D2\u00FE\u00F5\u0094\u00EEGv\u0087\u008F\u009EL\u00B1\u00DE\u009D\u00A2h\x0F)4i\x07\u00ED\u00D8w\u00FAT\u00CA/\u00C6L\u00B9\u00DDfF\u00F9\u0091\u00C6\u00D3d\x06\x16?\u00B8\u00B1OD\u00B0O\u00C6\u00DD\u00DD\u008Ep\u00DE\x04\b\x0F\u00B0x)\u00A8\u00BF\u00B4/\u00C1\u00CE3t\u00FB\u00B5\"\u00E1m\x0F\u00BF]T8\u00CA\u00C5\u00CA\u00E1\u00A5.\n^\u00D3\u00DF2a\u0088Ml\u00DC\x05\u00B7RDO\u00E9)\u00C1\u0083:!ZAO7\u00F4\u0094KN\u00A3\u00F5\u00C5\u00E1\u00ED\u00EA\u00A2){\u00C6k\u00C7\u00CEiW\u00AD\u0097\u00B6\u0098\u00A4)W\u008D\u00D6]Xt\u00EFiLMNW\u00D2~l\u00B5r\u00AC\u00CF\u00A3blo\x0B\u00A7\u00FE\bd\u00F5\u00F6\u009E\u00BE\u00AC\x06~:\u00D0Q\u00DE\u00D7\u00D9-9(\\m4\u00F6\u00DB\x12\x03\x03fo\u0082\x16\u00ED\u00A6\u00F7\u00ED\u00F5\x7F\u00CF\u00D7\u00F3<^a\u00F5\u00BC\u00B8\x04\u00B6\t\u00F6\u0094\u00FF\x7F\u008B\u00A0\u00DF\u00A89=\u00BD\u00D0S\u00BAUI\u00B72o\u009A\u0083>\u0083\u00DE\u009FE?w\x1A\u0097\u00CD\u00DCz\u00E1\u00FC9\u0084\u00C6%!B\u00C1\u00C5S0\x19u(.*Erz\u00F2\u00FFc\u00EF<\u00E0\u00E3\u00A8\u00CE\u00B5\u00FF\u00CC\u00F6&\u00ED\u00AA[\u00BD\u00D9\u0092{\u0093q\u00C16\u00A6\u00D8t\f\u00C6\u0094\u00D0KB\u00B9\u00A1\u00DC\u00D0\u00B9\u0094\x04R\u00BE\u0084NBB\x02\t5\u0084\u00D0{\u00C7`\f\x18\u00F7.K\u0096\u008Bz\u00EFe{\u0099\u00F9ff\u00B5\u00AB\u0095\u00B4+\u00EDJ+i%\u00BD\x7F~\u008B\u00B5\u00B33g\u00CE\u009C\u00999\u00CFyN\u00C5\u00BE\u00ED\u00BB\u00A0J\u00CA\u00C2\u00FC\u00BC\u008C~\x12\u00C9q.\u00B4\u00B5\u00B6C\x1F\x1B\x03)\u00C3\u00F9qO\u008C\u00DF*^\x7Fn|0\u00FB\u00CAy[w\x03]\u0087\u00BF\u00F0\u0098\x00)\u00C0\r\u00EE\u0096\u00BDA\u00F8\x1B\u00DE\u00C5\f\u00A1g\u00FCP\x1AgY\f\u00D8\x17\u00C2[\u00FD\x1C\u00C2,\u008B\x03\u00AC\u00D7\x12\u00CA2\u00B2\\\u00C0\u00FE\n\b(\u00DF\u009C\u00DF\x1E\x07\u00FD\u00EFbee\x05RRR \u00F3\x19\x01\u00C1\x05Y\u00DB!\x1C#\u00F4Z\u00F7\u00B8s\u00AA~'\u00C2\u00850\f[V[\u00F2=\u00A5\x04\x11>Q\x0F\u00D0\u00FB\x1D\u00B8.\b1a\x02\x05\u008A\u0086\u00DA\x1A *\u00DE+\u00EA.\u00D6\u0089\u00CA\u00AAj\u00A4\u00E4dc\u00E9\u00CA\x13\x02\u0086,\u00CC\u00CB\u00BEg\u00CF\x1E,[\u00B5\n\x1A\u00B9d\u00C0\n\x00\u00BFq`\u00B8A\u00C5\u00DCo\u00C6/\u00CE\u0098\u00C2\r^\u00EB\u00D0\u00CB!\u00878\u00B1j\u00DF\u00A81\u00BEJ\u00D8S\u00AD>\u00A8N0\u00C3_D\u00A6\u00D7xw_Q\x1DB\u00D0\x03\x17\x00\u0086\u00BE\u00D4\x1C\x17\u00E21\x03\u00C5\u00A2\u00E4\u00C8\x11\u00D4\u00D4\u00D6b\u00FE\u00BCy\u00EE\x05\u008BB@X3=\\\u00BD\u00DF\t\u00A2\u00D7\u00B3\u00C5?OT\u00FDN\u008C\u0096\u00DC\x07\u00B1-\u0098\u00AEM\u009C\u00C7\u00D4\u00B8g\u00E1c](\u00DC\u00BE\x05\u00EA\u00F4\u00A9H\u0089\u0096\u00A3\u00A4\u00E40\u00AF\u00A72\b\u0095\x03\u00C2\u00A4\x162G\u00BB(.G\x0E\x1F\u00C5\u00EC\u00E9\u00D3`\u00B7v\u00A1\u00E4p\u00A90\x16H(+ '\x7F:\u00F4\x1A5\u008A\x0B\u00F7\u00C2js@\x15\u00C5;zk+:\\Q(X0]\x18d\u008E\x03\x07\u008A1g\u00EE\u00EC\u00FE\u00AB\u00F2\r\u00D6[\u009Cc\u00FC\u00E8\x0F\x17\u00C0yraJb\x7F\u0093\u00D80\x03\u00A7\u00B3_\u009Dd\x06q\u00CCC\u0091\u00C2p?OL\x10\u00D5\x18#\x17#a\u00C4\u00D0O[\u00B6\u0088\u0093Sedf !>\u0091^sb\u00CC!Q'F)\x0F\x1ElLt\u00EF\u00A9\\\u00FBUK\u00F3zz\u00B8h/\u008E\x16\u00FBN\x18\u00EAv9&\u00A3\x11R^|\u009Bj\u009B`b\u00A2\u00B1|A\x1E:[\u00EA\u00D1fe\u0091\u0092\u009E\u008E\u00A3\u00A55\u0098\u00967U\u00DC\u00F7\u00D0\u009E\u00BD\u0088N\u00CBCnV*\u00AA\u00CB\x0Ec\u00CF\u00BECX\u00B5d.L]f\u00E4-\\\u0080h\u00A5\x12\u00ED\u008DRT\u00EE?\n\u0093%\x0B.c=8)\u00E3\x7F\u0099].\u00C8\u0089Y\x06\u00AA\t\u00E8\u00BB}\x04\u00DA\u00D0\u00B9\u00A0\nT\u00E8\u00BFd\u009C\u00B7m\x7F\u0084\u00DC#3\u00C4\u0083\u00FC\u0094\u008B\u00FA?^\\\u0090\u00B5\x11\x12\u00FF\u00CF\u00E6`3 \u00B2=MCm\u00ADm\u00E2G\u0098@j\u00F6\u00ACY\u0090\u00CAd!\u0085E\x10$\u00EA\u00C4\x04\u00D3{?S\u0086\u00F6q\u009C,\u009F)\u00C7\u00C5'A\x1F\u00A5\u00EE\u00D6S\x17J\u00CB\u00AA{\u00ED\u00A5\u008B\u00D2\u00C1RQ\u0082}\x07]\u00BCh\u00E7 3N\t\u00A7\u00C3\u00E2\u00CD|\x1D.3LV'\u0092\u00A3\u00DC\u00AB\u00F0\u00A9y\u0087\u00EE\u00B2\u00B4\u00C2\u00C6\u00B9 \u00E1\u00C5\\\x10t1\u009C\u0098D\u00E8p\x04\u009DF3\u00AC\u00F5\r\u00D0\u00AA\u0093\u00FB\r\u00C9\u00EB\u009DM\u0087o\u00D6\u00B5\x1Ew\x1F)#\u00AF\x07\u00ABE\x18\u00CE<\u00ECCWz.\u00D4\u00CA\x01\x7F\u00E9\u00CA\r\u00D0>\u00EF]\u0097\u009D\x1BX\u00FC=\u00B1\u00960\u00E2T\u00DB~\u0097L\u00E58z\u00C9\t\x12ub\u0082\u00E1oz\u00D4@\u0099\x1D\u00E7\u00E7\x18'\x10\u00970\x05\u00E9S\u00DC\u00AB\u00EF9\u0085u\u00B1K+\u00DD\u008B\u00B2u;\u00CA\u0098\u0084\x14,Y\u00A4\x15\u00D7\u0096?t`\x07l\u00D0\u00A2\u0080w\u00ED\u00E2b2,\u00E7m]v\u008F\u009B\u00E7D\u00A7\u00ED\u009E\x07\u009C\x11'Z\u00F2\u00BE\x14r5r\u00F23\u00D0\u00D0X\u008F\u00D6\x06#\u00E6.\u008B\x1FPT\u0098~\u00E2>\u00D8L\u00F6\u00CC\u00E0\x026\u00D8h\x01?\x05\u009Fa\u00D8\u00DFa\u008A>\u0086w\u00EE^\u00DA\u00EA\u00E7:\u00980jc\u00A8\u00A30\u00B8\u0081;H\nm\u00E3\u00B1\u0086\x18dfeB/,\u008E\u00D4\u00B7U\u0080\u00F4\u009C\x18e$\u0094\x04\u0093\x0F}\u00D6\x1C$\u00C5\u00E9\u0086\u00AF\u00D32-\u00E6\x1E\u00B7\x10i\u00AA\u00C1s.\u00AE\u00BB\u00E3\u009C\u00EF'\u0088\u0083|V\u00D5\u00E2\x02j\u0089\u00A7)\u00B9\u00EC\u00C8a\u00EC.<\u0086\u00F8\u00C4$\u00BE\u00B4\u00EA\u0082\u00D5\u00E4\u00E8\u00AEE\u00E6\u00D0\u00D4\u00D8\u00C2g\u00C0\x1Ad\u00A4\u00C6\u00A2\u00B2\u00BC\fV\u008B\x19e\x155H\u00CCL\u0085\\\u0098\u00C7\u009B\u00E5\u00BAO\u00E5\u00EE\x15\x1D\u009B\u0092\u0083\u00CE\u00E6zp\u00D1\u00F10hT!z\u00D9\u00C1\x16C\u00F7\u00AC\x1A\u00CE\u00FA|\x06J\x0F\u00B6\u00FFG\u00A8\u00FA\u00F7]s\u00BEW\u00EF|\x1Fa\u00E4Fc\u0096>\u00CF9=\u00F1\x0BR\u00C9\x18\u00DF\u00C5s|\u00D6Q\u00F7\u0084\u00C9t\u00A7\x11\u00E7\u00FE\u00F4Yq~\x14\u008A+\u00FE\u00FF\u00F3\x10\x13k\u00C0\t+W`\u00EE\u00BCy\u00EE\x15!9?\u00B7\u00DFO8\x041fN]\u00ADM\u00C4\u00E2\u00C5\u00B3 \x17\x1EE\u00D6\u0085\u00DA#\u00BBQ\\\x1Bx\u00BAP\u0099$\x11\u00EB\u00CE\u00C8\u00C3\u00DB\u009F\u00FE8\u00E8\u0089\u00A7\u00E7\u00E7\u00E2P\u00C9\u00B1\u0088N\x1C\u0085&\x1D\u00B3f$B\u00DA\u00FD\"6\u00D4\u00B5 \x7F\u00E9*\u00E4\x188T\u00D56##=\x19\u00DFm\u00F8\f%e\u00F5\x01\u00C3Pj\f\u00C8\u00C9\u0088\u00C1\u00D1Ce\u00F0\u00AC\u00BB\u00A4\u00D6\x190uj\x0E\u00F4:\x1D\x18G'*\x0F\u00EEG\u0085q\u00E0\u00CCJ\u00AA\u0088CnN\x1C\u00EA\u008E\x1EA\u00973p\u00C6`H\u00CB\u00C7\u00C5\u00A7\u00CF\u00C0\x7F\u00FF\u00F5\x01\u00FC\u00AD%\u0097\u00B6\u00F0<\u009C\u00BB4\n\x1F\u00FE\u00B7|\u00F8\t\u00E4t\u00C0&\u00CF\u00C2\u00BA\u00ABg\u00E0\u00AD\u00FF\u00BC\u008B\u0086.\u00EB`\u00D6r\x10\x07\x1B\u00C8\u00E43H\u00C9\u00C8@\u0094\u00AEG\\\u0085\u00F5\u00D3333\u00A1\u0090\u00C9\u0090\u00CC\u00FF\u00AB\u008E\u00D6\u00C2\u0090\u00A4\u00E7\x1F\u00C2*TWUC\x17\u009F\u0085\u00DC\u00B9\u00C9P(\x15\u0098=3\x1F\u009Df\u008B\u00B8\u009AVZ\u00FE|H\u00AA*QYQ\u0089\u0084\u00E4td\u00A4%\u008B\u00E1%&%\u00F5\u00B2\u0083R\u0089\f\x1A\u00AD\x0E\u00899Y\u00E8\u00D5\u008E\x1Bt\u00FB(\x17\u00E2\u00D5\u00FA_\x1A6x\x05\u00E2\x02\x175\u00B8\u00E0jN\u00C2/\u00F2\x03\u00D4L\x04\x18\u00B7\u00DEk\x1B7P!gh\u0085\u0095\u00BE\u00A2\u00CA\x04\u009C\u00BEh\u00E0\u00A1\u008B\u00B3g\u00CF\x14\u009F\x19\t#\rX\u00EB@\x02ND\u009C\u00A8K\u0095\u00F1\u00B8\u00F8\u00D2\u008B\u00B1\u00F3\u00EF\u00BFEa\u00D2I\u00B8\u00E3\u00E15\u00F8\u00ED\r\u00BFA%\u00EB\u00FFau\u00B2\u008D\u00D8\u00F4\u0093#\u0088\u00FC'\x1A\x17\u009F\u00BD\x14\x0F\x0F\"\u00EA\x0F\u00FD\u00E67\u00E2\u00C20\u00BE8\x1C\x0E<\u00F4\u00F0\u00C3\u00A3\u009286y*\u0096\x1D_\u0080}\u00DFoD\x17'\u0083\u00D3)C^\u009A\x0E;\u00FE\u00F2,\u00D8\u0085k\u00D1\u00BE\u00E9E\u0094X\x06\x0EC\x1D\u009F\u00825k\u00E6\u00A0\u00BC\u00B8\x14\u008E\u00EE\u008C\u00B4`\u00C5\u0099X\u0098b\u00C3\x17\u00DF\u00EE\u0080:!\t\u008C\u00B8\x18\u00C3\u00C0\x19\u0094K:\r\u00A7\u009E\u00BA\b\x1FU\x1C\x1DP\u00D4\u00A5\u0090@\u00A9V\u00FA\u00F53\u00CA\u00E8\f\u009C\u00B3<\x1Du\u009B\u00FF\u008D\u00EA\u00B6\u00E1\u00AF\u0088\u00C4\u00C1\u008E\u0092\u009F\u00DEC\\\u00FA\u008D\u0098\u0096\u009B\u0089\u0086\u00BD%!\u0088N \u00BD\u00F7\u00BF_jNn\u00AF\u00DF\u0085U\u00B2r\u00A7\u00E5\u0088\x7F\u00A7\u00E7\u00E6z\u00F7\u00CB\u00F6\u00F9\u00DB\u00B3\x7FbJ*|\u00FB%\u00A7fd\u00F4;qrrr\u00CF}\x17z\u00C8\x1F,\u0082\u0091\u00BF\u00DF\u00F3c\u00A2\u0083\u00BE\x0E\u00AEOAD\x14(f(\u00E9\x1AZ\u00D1hh7/\x18\u00C1\u00F1\u00D7\u00DB\u009F\u00C3\u00D0\u00AF\u00A8gj\u00D4\u00E1W\u00A5\u00FB\x1FF\x17\u008A\u00A0{\u00B61!\u00AE\u00DE&\u00904%\u00D9}\u009C\u009F\x1A$\u00FF+\u00EB\u0091\u00C0\x13\x11 \u00EA\u00EEg\u00D3\x05sG-\u008A\u008E\u00EE\u0082\u00FD\u00FC\u00958g\u00DD9P&\u00CD\u00C6\u00F4\x05\u00D9\u00D8\u00F9\u00DD\x17Xt\u00E2\u00E9`\u00ACMx\u00F6\u0096\u00FB\u00B0\u009B\u00CB\u00C65\u0097\x1E\u0087G\u00FE\u00F6\x16\u00CE\u00BF\u00EE~\u009C\u00B58\x1BNS9\x1E\u00FD\u00F5\x1Fa8\u00F5&\u00FC\u00E2\u00F4\u00B9\u0090[\u008E\u00E1\u009B\u00CA$d\u00E4\u00E9\u00F0\u00FC\x13\u0089\u00F8\u00BF;\u009EDK\u0080\u00ACj\u00B4\u00C4{\u00E0\x04\u00E0Pq\u00A0\b\u00D5\u00BCJ\u00CE]\u00B6\u0096O0)\u0096\u00DEt\u0093`\u00E5\u00C0\u00AC\u00B8\x05\u00D8\u00FC\x03f/_\t\u00A1\u00FBV\u00E5\u00EEo\u00F0\u00C1\u008FEXs\u00FE\x15\u0098\u0091f\u00E0]x-Jj\u00B4|\x18z\u00AC=q>\u00DE\u00DC\u00B4\x0F\x1C\x1B\u008D\u00A9\u00A9\x12\u00BC\u00F2\u00AFw\u00DC\u00CB\x13\u0096W\u008A\u00A9\u00BC\u00F4\u00B4\u008B\u00B18?\x11\u00ADe\u00FB\u00F0\u00DA\u00C7\u00DFc\u00E1\u00DA\u00AB\u00B18U%N&\u00B0{\u00F3~\u00E4\x1F?W\u00CC\u00BA\u00D6\u009Cq\x02\u00F68\u00B30?I\nMW\t\u009E\u00F9\u00B0\x1EW_q*\u00F4*\x06me\u00BB\u00B1aO\u00BB\x18\u00ED\u00D8)Y\u00B8\u00F8\u0082s\u00A0\u00E5\x0F\u00AA\u00DD\u00BD\t\u00EF\u00FC\u00B8\x1F:\u00DE\u00CD\u00CA\u00D1\u0084m\u00BBZ\u00911c>\u00CE>a\x11\x18\u00A5\x0E\u00CE\u00D6\u00C3\u00F8\u00E0\u00B5\u00CF!\u00CF\u009B\u0085\u00F3\u00CF8\x05\u00AC\u00BD\x0B\u00DF\u00FE\u00F7e\x1C\u00B4\u00CD\u00C1\u00D5\u0097.\u0085\u009Ew\u00C8\u00A6\u0086R\u00BC\u00F0\u00E6\u00A7\u00E2\u0092\u0089\u00EB\u00AF\u00B8\x1Ci\u00B1jl\u00DF\u00F0\t\u00B6\x16\u0095a\u00D7\u00AEJ\u009C\x1E\u00A7\x18\u00BAT\u008DUsp\u00C0\u00F6`\x0E\x12\u0099\x12\u00D3s\u00B2\u0087\u00A1\u0099>.\u0099\x19\u0099\x18\u008F\u00A8\u00E8{\x1D\u00B1\u00EF\u00C9\u00BB\u00DD\u00F10\u00A6\u00B1\u00E5\u00FC\u00F5^\x0FK<%A\nz\u00FF{\u00EE\x15v\u008E\x0B.\x11\u00B9 \u009F\u00E9\u00B0N\u00F7K\x10a\x12u\u0096\u0091\"3o\x05N-\u00C8\u0083\u00A5l\x1B\u00AAMJ\u00ACR\u00EC\u00C5\u009F\u00FF\u00F8o\u00AC\u00B9\u00F8Z<\u00FB\u0087\u00FB`N\\\u008C{\u009E\u00B9\x03\x7F\u00B8\u00F9}h\u00D5\u00BC\x10\u00E5_\u008C\u00E3\u00D3\u00EDx\u00E9\u00C5\x17Pp\u00D658\u00EB\u0097\u00F7\u00F0\"\u00C4\u00E1w\x0F\u00DE\x0F\x1B\u00FF\u0090\u00B7\x18\u00D30\u00FB\u0096\x05x\u00E2\x1Fo\u00A1u\u00807\u00E8\u00F8\u00A5K\u00BB\u00D7\u00C7\u00F6\u0089\x0F\u00CB\u00E2\u00A7\u00AD[G-\u0081\\\u00BC\u0088\u00AF\u00BA\u00F0B8y\x11/\u00D9]\u00C4g\x1F\u00E9(\u00FE\u00FC-\u00D8\u00B2WAU\u00F1\x03\x149'\u00C1YS\u0082oK\u00CCX\u00BA|1\u00E6\u00A9\x17A\u00D9y\x14\u00AF\u00BDR\f\u0085J\x02]b\x1E\u00F2\u00D33\u00F1\u00FD\u00CE#\u00DD&E\tgKu\u00AF\u00F5\u0086\u00D5SW#W\u00D2\u0088\u00D7^\u00FC\n\u00F3\u0096\u009F\u008A3\u00F2\u00F5hS\u00AApt\u00DFf\u00EC\u00AD\u0094\u00E3\u00CCE1x\u00FF\u00F3\u0083\u00B8\u00F4\u00CC\x19\u00F8\u00E9\u00C7=\u00D0\u00AF\u009A\u008E\u0086\u00D2}\u00D8}\u00B0\x01\x17^~\x16\u00CA\u00B6\x7F\u0086#m2\u00ACX\u00BD\x063\u00A6\u00B9\u00DD\u00B2!F\x0F\u009D\u00B3\x15[6\u00EEBKG\u009D\u00B8M\u00A5\u0096\u0083\u00EBl\u00E1\u00CF-A\u00BC0I\u0081\u00A3\x01\u00EF\x7F\u00F2\x1D\u00D6\u00AC?\x1B',\u00DE\x0F{\u00F6\x02|\u00F1\u00DE\u009Bp\u00C5\u00E5\u00E1\u00ECK.\u0086\u00E9_\x1B\u00C1Y\u00EA\u00F0\u00C6;\u009B\u00B1p\u00F5\u00D9\u0098\u00A7c\u00E0\\\u00F93\u00E8\u00F9\u00E3\u00B6\u00ECe\u00B0p\u00E1LQ\u00D4\u00ADM\u00ADP\u00A6\u0086\u00A1\u00CFe/\x01dF9C\u00EC)Y(U\u00D1\u0098=o~\u00F8\n\x0B!W\u00DDG\u00AA\u00CB\u00F3\u00AC\x14\u00E7S\u009D\x1E\u00C4J\u00B3\x1C\u00B8\u00E0J\x1D\u00DC\x00% \x7Fi\u00D7\u00CB%\u00B3\x01\u008F\u00E3\x02\u00A6c\u00DF\u00BE\b\u00C1\u00F4\u00A3\u00E3\u00FA<\u00A3\u0081\u009E\u00DF0\u0097\u00E6\b\"lN\u009D\x7F6\x1D\u00D1\u00B1h*\u00DC\u0088;\u00DE*\u00C3\u00E2\x13/@gu9\x0E\u0096V\u00E1<\u00B9\t{\u00CB\u009Bx\u0081h\x02\u00A7:\x1EI\u00DD\x0Fq\u00CC\u008C\\4\u00D4TB\u00AA\u00D1\u00E0\u00E0w\u00FF\u00812&\t\u00F3T.\u0094\u00D55t\u00BF\u008BZ\u00B8\u00EC\x16\u00B4\u00B6\x0E\\\x05<\u009A\u00E2\x1D\b)/\u00EB\u009B\u00DE~[t\u00EAB\x1B\u00FB\u00F1\u00FC\u00CBj36\u00C1dv\x00\u009D\rPj\x14\u00A8,\u00AB\u0087T!\u00C3\u008E\x1F\x7F\u0084v\u00D6i\u00A8+\u00AACkG\x1B\u00D0\x01d\u00C6[\u00F9\u00EBu\u00A0\u00CBd\u00EE\u00BEv\x1Bd\u00F1)P\u00F3\x19\u0092\u00A5;\u00A3\u008A\u008A\u008FAgS1Z\u008Dmhll\u00C5\u00DC\u0084(\u00B4\u00F3\u00BF\u00B5\u00B6w\u00A2\u00B9\u00CA\f\u00D7q\x06\u00B44\u0099\u00C5\u00EET\u00A6\u00AE.\x18\u00F8\u00DF\u00EA\u00EAjQ\u00DB\x11\u00CB;t\u00A0\u00A8\u00B9\x19u\u00D5\x1D\u00A81\u00AD\u0086V\u0098\u00B6\u0092\u00E5PZ\u00BC\x0F\u009D\u00BA8\x1C\u00BF\u00E2\x14L-\u00FB\t\u00C7\u00EA\u00F7\u00C0nw\u0082\u00D1FC+V\x0B3`-\u00AD\u00A8\u00AAm@'\u00BF\u00BF\\&\u0081Dj\u00C5\u00E1\u00EAF\x18$\u00F1\u00E0\x143\u0091\x12\u00CB\x17j\u00ACf4v\u00B6\u00A1\u00A1\u00AE\x13Q\x1A\x0E\u00AE(5\u009AZ;\u00E12v\u00E1\u00C7m\u00CD#h\u009E\u00B9^y\u00F9\u00E8\u00C9\x1A7r\u00E1q\u00DC\u00F0\u00BCu\u0088k\u00C60#\u0096B>\u00AE\u0097\x0B1\u00B2\u0083\u00D6\u00BB\x07H\u00A3\x10\u00EA\u00EB9&\u0094\u00FB\u00E93\u00F9+3\u00D4t\bt\u00C9\u00E4\u00D2\u0089\u00D1g\u00D0\u00C6(\u00A1\u00FA\u00BD\u00F2\u0087\u008F\u00F0\u00C3\u00C1\u00B2~\u00BF5X\u00E3q\u00C9\u00C2h$'\u00A5\u0083\u00E9\u00ACAQ\u00F7C\u00DC\u00BC\u00AD\x10\tqQ\u00D8\u00F4\u00CD7\u00D8\u00B0\u00BD\x12\u00CD\u00D5\u00CD\u00E0RO\u00C6\u00FC\u00A9\u00A9H\u00E9n\u00BBd\u0094Q\u00E3\"\u00818N\u008A\u00B4Y\u00F9\u00985s&\u00E2\u00FA\u00B6\u00AF\u00F2t\u00B4\x18\u0091\u0091\x16\u008D\u00FA\u00A2\"tt\u0099\u00D1\u00D4\u00D6\u0089\u00B9\u00B3\u00E6 I\u009F\u0088\u00ACi\u00A9\u0090:\\`\u00A4*Dk\u00DD\u009D\u00BC\x18I'j\u009Ae\u00B8\u00F6\u00CA\u00F3\u0091\u009F\u0091\u0081\u0099s\u00E7BQU\u0085\u00D4\x19\u00F9H\u00E2\x1Db\u00FE\u00CC\f\u00D4\u0096W\u00F7\u008F\u0088R*\u00E6V\u00EA\x18\u009F^\u00EB\u00A6ch\u00B2\x00\u00B9Y\u00D9H\u009B\u00B3\x1As\x12%|a\u00C9\u00C4\u00DFU\x1D\u00E6\u00CC\u00C8\u0083\u00BC\u00F0\x1B\u00FC\u00FB\u009B\x12\u00A8\u00A3\u00DD\u00F1f]\u009C\x18\x17M\u0080\u0087\u00A0\u008B\u008B\u00C1\u00D9\x0B\u00B3\u0091\u009A\u0096\u00C9\u0087]\u0083}\r\u00FD\u00A3\u00D1\u00D1a\u0086A+Eq\u00F11\u00D8,\u00EE\u008Eq\u00AA\u00CCD\u0098\u008Da^\u009F\u009E\u00E9m\u00CE\u0098>fqX\u009F\u00C8z\u00C2\u0082\u008F\x18\x17\u00FA\u00EE\x03\x1D\x1Ej\u00B2\u0084\u0096|\u00DC\u00E8\u00A5\u0091\u00E0\u00C6\u00BB;\u00FAs\x11i\u008E\u00C9\u00B1\x13\u00A3hD\u00F5z\u00FDC\x01\x7F\u00940\u00E8hm@Em\r/\x1El\u00F7\u00E3\u00C9\u00A2\u00B9\u00AD\x03U\u00CD]\u00A8\u00A98\x06]\u00D6R$j\u00BA\u00F0\u00DE\u00BF\u00DFA\u00ADM\u008FU\u00CB\u00D3\u00B1\u00F1\u00AB\u00B7\u00D1h\u00D1\u00E0\u00E4\x15K0}\u008A\x1C\u00C5\u00FBw`\u00CF\u00B1fdd\bSyJ\u00D0ZQ\u0088\x0Ee\"\x16O\u008BA\u00F9\u00B1Z\x04\u00EAZ'T\u00BFg\u00F2\u00C2\u0097\u0091\u009E\u00EE\u00FD\u00A4\u00A5\u00A6\u00A2\u00AA\u00BAzT\x12G)e`\u00B7\u00B6\u00F2\t!\u0087\\.\u0083\u00C3bFkK#\u00EA\u00EB\x1Batr\u00E8\u00E2\x1DluK\x13\x1CR=\u00D2\u00B23!s\x1Aqp\u00EBO\u00B0I\u00D5H\u00CBJF\u00B4\u009C/\x10\u0095\u00D7\u00A3\u00CB.\u0085FbG}w\u00E7\u00B4\u0086\u00BA*\u0098\x1C\x12\u00C4$\u00C4C\u00E1r\u00A2\u00ABv7*\u008Dr\u00E4\u00E6e\u00A1\u00F1\u00D8~l)m\x13k\b:\u009A\u00EAa4\x0B\r\x16\x0E\u00B4U\u00D5\u00C1h\u00B7@\u00AF\u0096\u00A2\u00AE\u00A1\u00D1\u00FD\u009B\u00A5\x03eG\u00AA\u00A0\u008D\u008DG\u00B2\u00C6\u008A\u00A3E\u00FB\u00B0\u00AF\u00B0\x1CF1\x13q@\u00976\x03\u00F9z\x13\u00F6\u00ED?\u008C6\u0093\x19\x0E\u00AB\x1D\ty\u008B1w\u009A\x1C%\u00C5\u00D5h\u00E3\x0B!\u00F5M\x1D\u00E0\\v4\u00F2\u00D7Tr\u00B4\x12\u00B2\u00B84h\u00D1\u0089-\u00DF\u00FE\u0080V\u00878e\x0B\x1A\u009B\u00DB\u00C1\x1By\u00F1z\u008F\x16\x1F\x01\u00A3\u0089\u00C6\u00B4\u009Cd\u00D8;\u00DAaTL\u00C1\u00BA\u00D5\u008Bp\u00B4p;\x1A\u00DAM^G\u00D5k\x045\u00BF\u00ED\u00BC\u00F3\u00CF\u00EF\u00E9\u00B0\u00CC\f\u009E\x072\x01\u00B2F\u00CF\u00F4\u00B0\b\u00F4\t5\u00AF\u00F5km\u00991\u00CC\u0088\u0083[0\u00D4\u009F\u00B0\x05t\u00C6c>\u00A3\x1932av\u00DF\u00A6\u00F1\u00E6\u0087?x\u00E7\x1D\u00EF\u00BC\bB\u0087J\u009A\u00FB\u009D\b\u009B\u00A03\u00CC\x1E&=##,\u00EF\x04\u00C7e\u00E3\u0092\u00DBoDF\u00C5'x\u00F4\u00BD\x1F(u#\u00B5\u00E6\x01Sq\u00F9-g\u00E0\u00E0\u0097\u00EFc\u00EF\u00E1\u00E1\x15\u008E\u00A4\u00928\\x\u00E3%\u0088i\u00DE\u0089\u00BF\u00BF\u00E5n*\t\u00B4\u00A0\u00CB+\u00FF~-\u00A0\u00E6\x04\u00A3M\u00C3\u00F1x>\u009D\u00AE\x07=\x7FP\u00E2?Q\u00CC\u00D7\u0098\b\b\x13\u00B6\u00B8\x07\u009C\u00EB`\u00A0\u00EB\u00E2\u00B8\u00D0\u00AE}\u00B8\u0085\"?q\u00BC\u00EA\u0092\u009F\u00D1\u0082.\u00C4\u0088\u00A0\u0090H^\f\u00DB\u008Cr\u00BAX%\u00AAw\x7F\u008CM\x07\x0FP\u00CAFr>\u008E\u00A3\u00F8\u00CF3\u00CF\u0084%,\x17\u00DB\u00827\u009E\u00FDkP\u00FB\u00B6\u00B4\u00B4FP\u00C1&\u00A0\u00DF\r\"\u00FD\u0098\u00EE\x7F\u00B9AT\u00BF\u008F\u0080Er^\u00CD\u00842\x05\x1A3\u0082\u00CE\u0098\x19\u00C3g\u0082\u00F1{u\u00BD\u00AA\u00F3C\u00AC\u00DBg\u00A8M\u009D\x18\x03\u00C2&\u00EA\u00A6\u00B6C\u00F8q\x13%(\u00E1\u009F\u00B8\u00B8\u00D8a\u0099\u009Cp\x18\u0098pO\u00C1\u00CD\u00F4\u009D\u00BEt\u00B0\x0E\u00FB\u0083i\u00E7\u00B83i\u00CC0\x12\u008E\x0B\u00FD<\x1C\u00D3\u00D39m\u0094\u00D2*\u00E0hK\u0086\x19\u00B9\x07\u008B \"A\u00D4\tb\u00C8\u0082\x1A\u00C48\u00F5\u00E1\u00D4\u0082\u008ET\u009E\u00EB\u0089\x13\u00C3\u00F8,a\u00EEO\u008F\u0082\u00AD\x1A\x18w\u00A3\u00A0\u00868MN\u00C0U\u00D1\x02\u00AD\x1C\u00D7\u00B3\"Z\u008F\u00C0\u008FqZ\u00B1\u00A3[\u00B8 \u0088\u00B0\u0088\u00FASO>\x19\u0091\u0091\u00FE\u00F0\u00FD\u00F7\u00F1\u00DD\x0F\u00D4n?\u00CEe~\u0080\u00FC\u00DF\u00FF\u0082(\u00FE\u009BC\u009915L\u00C1\u008E\u00D0b\u0098\x00R\u00E8\u00A7\u00A3\x1E\u00D7\u00E7\u00FA\u0083\u00AD\u00C6\x1D\u00ED\u0091\u00FDa-\u00A1p\\\u0090O\u008B\u00EF\u00BC\u00F6a\u00A8@\x18\u00A4\u00AF\u00C4\u00A0\u00A3\u00E3\u00BC\u0093\u00DA\u00B9Kv\u00A31\u00A4\u0090 \u0086,\u00EA\u00B7\u00DD~;\u00A5\x101\n\u00AEn \u00EB\u00CE\x0E\u00D3yGF\u00D6\u00EA[ a\x02]\x037\u0088\u00883\u009E\u00B9\u00E1\u0099\u00A0\u00AE\u0096\u008B\u0098{\u00CE\x04\x1D\x1F&\u00E8\u00A7f\x00\u00F9\x1C\u00B4[\x00\x17\u00B8}|\b\u0089\u00C6\u00F5\u00BA\u00A1\fz\u008D}'\u0088H\x12u\u0082\x18Wn/\u00E4\\z\u00F4\x05\x7FX\u00B5\t\u00DDB4\x12c\u00B1\u0099a\u00A6d\u00B8\u00EE\u00E3\u00D0\u00EE\u00F8`C\x13\u00FCt\u00CE`\u00BA\u00CF4\u0094\t\u0081\u0098@E\u008B\u0088\u009C\b\u0081 Q'\b\u00AA=\u0088h\u00F7\x1F\u00C20\u00F5\u00FE\u0087r>W\u00C1\f\u00E9\u00AA\u00871\u00EB\u00FB\b\u00ED\x1D\u00E4}\u00ED\u00D7n\u00CF\x05h\u00B3\u00E0\x02\x17\x0E\u00FA\u0084AU\u00ECD\u00A4A\u00EB\u00A9\x13\u00E3\x06\u0097\u00CB\u0081\u00A6\u00A6&466\u00C1fw\u008CaL\"z\u008A\u00BA\u00805\x04\\\u009F\u00B9P\u0087\u00BA4\u00E8h\b\x19\u00D3\u00BD\u00B2\u00FDX\x0E\x0B\u00AB\u00AD*C\u00F1\u00E1c\u00B08\u00ECbj9\u009D\x16\x1C*.Bc\u00BBQ\u00FC\u00DDi\u00B7\u00A1\u00B6\u00B6\x1E\u009D>\u00B3):mV~[\x03,\u00E2\u00CA\u008B\x04A\u00A2N\x10~1v\u00B4`\u00C7\u00CE\u00DDhjnA{[+\u00F6\u00EC\u00DE\u008D\u0083\u0087+\x03Vg\u00BBX\x16\u0087\u00F6\u00ECD]s{\x04;\u00FE\u00F0\u008A\u00F6\u00C0b\u00EE[\x1E\u00E9\u0099\u0082/\u00D4\u0099u\u00C7\u00A2\x183\x16\x02\u00DF\u00DEX\u0081\u00BA\u00C6\x0E\u00C8\\Fl\u00D9\u00BC\x03\x16\u00BB\x15\u00DB~\u00DC*\u00CE.yh\u00E7v\u0094\u00D6\u00B7\u0082\u0091J\u00F9\u00FDj\u00B0}\u00FBv\u00B4w\u00B9\u00D7`.*<\u0080\u0096\x0E\x0B\u00E4\x12\u00F2\u00F0\u00C4\u00D8@\u00D5\u00EF\u00C4\u00B8p\u00E8\x07w\u00ECF\\\u00F6tL\u00CBM\x17\u00B7\u0099\u00DA\u009B\u00B0y\u00C7^$\u00C5kP_\u00DF\u0081\u00FC\u00BC,\u00C8eR4U\u0097\u00C2!\u00D5\u00A0\u00A3\u00A5\x1E5\u00BC\u00A0\u00B79\u008EB\u00A3\u009B\r\u00BDJ5\x06\u00C2>\u00BA\x19;\u00C7\r=\u00BA\u00C1V\u00DF\u0087\u00DC\u00B1<\u00CC3\u00F11\u00DENhaL\u00DB\x003\x06:9\x17t\u00D11p\u00D54\u00A1\u00A1\u00A1\x01f'\u008BT\u00A5\fV\u008E\x15g~\u0093Je\u00989\u00BF\x00\u008A\u00BD\u00DBPZV\u0086\u008CX9x9\u00C7\u0092\x19Y\u00F4\u00D2\x12\u00E4\u00D4\u0089\t\u00CE0j\u00ACY\u00D6\x01#\u00EF.\r\u00F11\u00DEmZC\x02V\u009F|2\u00D4|\u00B1\u00B4\u008E\u00CFt\u00D9\u00EE@\x051\x17\x16\u009D\u0089\u008DO\u0082\u009A\x7F\u00BA\u00A3\u00A2\fP\u00CAd\x11r\u00D1\u00C2\u0087E$\u00AE4\u00D3\u00CF\u00D1\u0087I+\u00FD%\t\u00E7\u00E3\u00BD\u0083O\u00C9\u00DE\u00C7\f\u00C9\u00B9s\\`\u00E7\u00DFg\r\x01Cb&2R\x12y\x07\u00EE\u00AEj7\x1A\u00DD\u00FFZ\u00ACv\u00CC_x\x1C\u00B2\u0093z\u009E\u00C5\u00AC\u00D9\x0B\u00E04w`\u00DF\u00A1\x1A\u00E4\u00E4\u00E6\u00D2\u00BBN\u0090\u00A8\x13\u0093A\u00D4\u00D9\u00DE\x1F64\u00B1\x113\u00E1>\x1A \u0091J\u00C1\u00F4\x13\x10\x06\x12\u0089\x14q\t\u00F1b\x15h\u00B4!\x06*Y$UH1\u0083\b\u00FE\x18\u00DF&\u00AE\u00F7g$\n\t\f\u00FF\u0083\u00E7\x13l\u00FD\x7F\u00A0c\u0098^r\u00CF\u00F5\x11l\u00E1\u0099\u00F1\u00D9&\x1C/L\x1A\u00C3\u00C2\u00FBq\x7F\u00EF\u00FF\x11\x1EQ\u00BD>\x0E\u0086\u00E8(\u00F1<\x06\u00BDA\u008C{L\\<b\u00F4\u00BA^\u00D7#\u0093)\u00F8\u008C\u0094\u0085\u008Bs\u008A\x0B?\u0085-\x11\tb\bP\u00F5;1F\b\u00C2.\x19\u00B0X\u00E9\u009B\x1F\u00B2\u00C2\"\u00C0\u00AE\u00DE\u00A2\u00E7b{\u00BE\u00B3\u009E\u00D5\u00E1\u0098\u00F1RN\r4U\f;\u008C\u00B2\u00F6p\u008E\r|\x0F\"z\u008D\x11q\u00C89\u00D3\u00CBu\u00F7^!\u00D0=l-\u00D4K\u00B0\u00D9:\u00B1s\u00DB\x0EX]\u00EE\u00D0\u008A\x0E\x16\u008B\u00FF\u00EE\u00DF\u00BD\u009B/4Fa\u00F1\u008A\x05\u0088R(\u00C4m\u00EDM\u00E5\u00B03\n\u00C4\u00A8\u00EC\u00A8\u00AD\u00AE\u0087!/\u00ABOe\r\t;1Z\u00D9\n\u00C3\u0091S'\u00C6V\u00D8\x07\u00C8\u00F0\x18\u00C6\u00ED\u00B6dr\x15\u00B2\u0093cQq\u00B4\x14&\u008B\x15N\u0087\x03UeG\u00F0\u00DD\u00A6-\u00B0\n\u00BD\u008C\x193j\u009BZa6\x19\u00D1\u00D6e\u00F1\u00AEt%\u00E1\u009D\u00BA\u00DDn\u00F3\n~?5\x18sg\x1Ch\u0089W\x16\u00C1\u00CD)\u00EB\u00EB\u00F0Y\u009Fc\u0087\u00FB\u00E1\x06t\u00EF\u00C1|F5\x15\u00BB\u00DD\u00BB\u00F7\u00DC}\x1D\u00FE\x10\u00C246\u00D7#69\x13\u00C7-\u0098\u00CE\x17\u0093\u00A4X\u00BAb\t\u00EF\u0080\x18\x14,^\x04%\u00D7\u0085\u00DAFw\x07\u00CC\u00A6\u009AR\u00EC\u00DBw\x14YY\u00B9\u0098SP .U-<\u00834d\u009D \u00A7NLN\u00BCS\u00ADq\x01\u00A5K\u00C8\u0094sg\u00CF\u0087u\u00EFnl\u00FE\u00F1{q\u00BBR\u00AD\u00C5q\u00CB\n\x10\u00A5T\"'\u00A5\x0EG\x0F\u00EEG\u00A9T\u008E(\u0095;\x0B\u0097\u00F1\x7F\u00A7g\u00A7a\x7FI\x11\u00A2\u00E3\u00F4H\u00D4i\u00FD\b\u00E2\u00C8\u00B8\u00DB\u00F0\u00B8\u00F6\u00BE\u00AA\x10\u00FC\\ka\u00B1\u00BF\u00BD\u00C6jG~O\u00EE \u0096\x0F\x18\u00F0\u00B8\u00BE\u00E8\u0093\u00D2P|d+\u00EA\u00AAY\u00C4\u00A6\u00E4 Z\u00A5CNZ\x1Cvo\u00DF\t\u00A9*\x1AiIz\u00D8\u00CC\u00ED\u00D8W\\\u008A\u00A4\u00CC|\u00A4$\u00B8\u00DB\u00D8S\x12\f\u00D8\u00B9u\x0F\u0096\u009CP\u0080h\u0085\u0092\u00DEob\u00F4s\u0093p\u00AD\u00A7N\x10b&\x19`=\u00F5\u0097_~%\u00C8'\u0092\td\u00C7\u00C4\x7F\x1C\x0E\u00F7\u00F8t\u00A9L\x0E\u00F7\u00A8!\u00B7 \u00B3.\x17\x7F\u00A8\u00C4=\u00A1\n\x13@7\x03\n&0\u00FE\u00BB\u0097D\u00DAk<\u00BA\u0085\u0081`E\u009D\x0B\u00A1X\u00E5\u00E4\u009F)\u00E1qV\u00C8\u00A5\u00DEmv\u00FE\u00F9\u0093\u00CBd\u00C3Z\u00F7\u00FC\u00AA\u00CB.\u00A5\u00F5\u00D4\u0089\x11A!\u0095\u00BE@N\u009D\x18\x15\u00D8>\u0099\u0095d\u00A0\u0081\u00D5\x03\u00E4\u00C6r\u00DE\u0081{\u00F5\u0097\u00EDq\u00DA\x12F:p\u00CE\u00ED]x\u0083\x1D \u00BB\x1F\u00CF\x19\u00EAP\u00E5,\u00D2\u00BC\u00F3H\x17g\x02\u00CB\u00BA[\u00D8{\u009E\x03\u0099\u0094\x7F\u00A6\u00A4}2M\u00B9\u009C^f\"\u00A2\u00A16ubl|\u00E5p\x1C\u0089o\x13r\u008F\u00BA\x07w\u00A0\u00D8d\u00CC\u008C\x03\u00A7;\u00BE\u009D\u00F3\u00F8N\u00D3\u00F15[ A\u00F8\u0098\"\u008E\u009C:1Q\u00EA\x02\x02\x0B\x17\u00D3\u009DQs>\u00B5\x01\u00A2!c\x02\u00BBu&\u00D8s\u008E\u00A5h\x0E\u00C7\u00D1sc\x7F_\u00C2\"\u00BF\\/\u00A7=\u00B4\x14a\u0086X0\u00A1\u00AAr\"\u00E2\u008A\u00A3\u009C\u008C\x7F,\u00EBz\u00BDuB\u00A3\x0E\u00C7\u00D1\u00D3J\f1\u0087d\u00FAew\u00C2#\u00D5\u00DC\u00D4<&Y\u00A2\u00F88\u00C3G\u00CC\x07\u008E6|w\u00EDul\x18dt|8\u00D4a^a\u0080J\x10n(3\u00D6\u0089Y\u00D1\x18\u00BA\u00E5\u00A1\u00F4M\f\u00E2:\x19IO\u00DB9\u00C30\u00BD\u00DB\u00D4)\x07!Bya\x19q\u00C8&\u00E7\u00F3\u0084\u00CAe\u00FC\u00FF\u0093\u00FB\u00E5f\x041\u00D4\u00A7\u00CC3^\u00DC\u00A7\u00A3\u009C\u00F0o|\\\u00EC(\x15(\u00B8\u00A1iS\u0080\f\u009C\t\u00C3\u00B8\u00F7qQD\u00E6\u00869\u00BC\u00AF;\u009D\u00FC\u00F5\u0095`\x19&\u00E8\x02\u0083\u00EF\u0094\u00E9\x1C7\u00C6\x15\u00E0#$\u00EA\x1C\u00CB\u00F5\u00E4\u00C3\u00DC\x10\u00E7\u00EB%\b\u00FFzm\u00A56ubb=\u00E0\u00A1\u00AA\x00\u00C3P-jX\u00A4s\u00F8aD\u00D4\x1A(\u0081FP\f$\u00BA$\u00C8\u00C4\u00D8\u00C3\u0092\u00A8\x13\u0093\u0097\u0081\x1C\u00E4\u00A4\u00CA\u009F\u00C3p\u00B1\x03\u00D4\u00F0I\u0082\u00A8\u00FDc\"\u00EE\u00B9\b\u00B1\u00F0\u00C2\u0084\u00ABpD\x10\u00C3\x13u\u00EA(G\x10\x03j\x15\x1Br\x15|/\r\x1B7\u00B3\u00D6J\u00E0\u009D\u0096m\u00C8\u0089\u00C5\u00FA\u0097g\u00C9\u00E0z7\u00AEL.\u00E3[\f!!'\"(\u00BF\"Q'\b\u00FF^\u008C\u00F1(\u008DwE\x19\u00FF\u00AA\u00D3=\u00B5\u00F8\x00\u00E3\u00EB\u0099q$Z\u00C1\u00B7}\x07N;\u00CE'4f\x1C?\x01\u00E1\u00D8\u0087 F\u00DB\u0084p.\u00AA~'&\u00B9|\u00FB\u00DF\u00C2\x05\x10*_X_-\x1FD\u00B5'c\u00FFSn\b\u009D\u00E3\"\u00C3\u0085\x13\u00C4\u00B8\u00CD\u00D1\\\u00E4\u00D4\u0089\u0088\u00A7\u00FD\u00D8N\u00BC\u00F1\u00D5\u00F6~\u00DB\u00E7\u009Fv\t\u0096\u00E6\u00C4\u0084]\u00E2\u008Du{\u00F1\u009F\u00F7\x7F\u00F2:v\u0095&\x11\u00E7_\u00B6\x0Eza\t\u00D7n\u00F1\u00E6\u00FCM@\u00D7\u00ED\u00EC\x0F|\u00FA8>+\u00D7\u00E3\u009E\u009B\u00AF\x0F\u00ED:k\u00CBp\u00AC]\u008D\u0082\u0099S\u00C6P\u00D4\u0098!\u0097@\u00FCuQ\u00E0\u00C4eO\u0099\u0080u\x00\u0091\u00D9\u0096>\u00F8\u00F5\u00BF\u00F6\u00EA\u00ABX\u00BBn\x1D\u00A2\u00A3\u00A2\u00E8\x05%\"\t\u00EA(GD>Q\u00E9sp\u00CE\u00DAs\u00B1z\u00F9L|\u00F5\u00D5\u00B7\u0098~\u00D2Y8\x7F\u00DDz\u00CC\u009822\x19jW\u00E31|\u00FE\u00D5W\u0098\u00B6\u00F8T\\p\u00E1Z\u00D4\u0097\u00EF\u00C0uO}\u00D6\u00CBy\x06t\u00A1\u00BC0\u00CC9\u00EBN\u00DCs\u00D3u!\u009Fw\u00EF\u00D7_\u00E3\u00B1\u00EF\u008E\u008C[\u00AB:\u00D0\u00E0\u0083@\u0082\x1EQ\u009D\u00C9\u00BD\u00CB\u00CCy\"\x1C8\x02o\u00BF\u00F3.\u00EE\u00BE\u00F3.\u00D4\u00D7\u00D7\u00D3\x0BJD\u0092S\u00A76u\"\u00F2\u0091*\u0094HMM\u0085I\u00EA^\u00EE21)\x01\u00891\x1A\u00B4\u0097\u00EE\u00C0\u0083\u00FF|\x0F\x12\u00A5\x04\rU&\u009Cw\u00E5E8m\u00D52\u00BC\u00F5\u00DC\u00A3\u00D8z\u00B4\x13z\r\x0B\u0097,\x11w\u00DDw+\u00BEy\u00F5_(l\u00E2\u008Fo\u00EB@\u00BB\u00CD\u0081\u00BC\x19\u00B9\u00A8\u00AF(G\u00D9\u00B1ZL[\u00BA\x12\u00B7\u00DF\u00F2s\u00A8\u00A4\u00BD\u00CB\u00B8I)I\u0088\u008F\u008F\u00C2\u00B9\u00C7\u00CF\u00C2\u00DE\x17\n\u00D1\u00E1:\x03\u00EF\u00FE\u00ED1T\u00D7\u00B7 >o1.:!\x13o|\u00F8\r\u00CA\u00ABZai3\u00E1\u00A4\u008B/\u00C2\u00FA3NA\u00E3\u00A1\u008F\u00F1\u00FE\x16+\u00AE\u00BFf\x1D\u00DE\u00F8\u00C7c\u00D8|\u00B4\x1Dz\u00A9\x05\u00BA)\u00F3q\u00E7m\u00D7\u00E0\u00E0\u00E6\r\u00F8\u00CF\u00EB\u00AFA\u009A\u0090\r\u00A9\u00CD\u008A\x05\u00A7^\u0085s\u0097E\u00E3\u00EB\u009D\u00BB\u00C0\u00D4o\u00C6\u009B\u00A9\x0E\\|\u00EE\u00C9c\u00A8\u00EB\u00C3\u00EC4\u00E7;\u00D6\\X\u00E9\u009C\x0B]\u00D0##\u0087\u00E4\x06t\u00F1uuu\u00B8\u00E1\u00FA\x1B0g\u00CE\x1C\u009C\u00BAf5N8\u00F1DzY\u0089\u00B1~hI\u00D4\u0089\u00F1T\n\u00E5z\u008A\u00A3\u00AC\x15O=\u00F8$\u00E6\u00FF\u00ECN\u00AC?\u00A7\x00VK\x19\u00FE\u00F8\u00C8\x078\u00F5\u0084%\u0098\u00BD\u00F4l\\|\u00C3,q\u00D7\u00E7\u009E\u00FA=*:l0\u00B9\u00EC(f\u00E6\u00E2\u00F5?\u009E\u0081\u00A2\u00AF^\u00C5o_\u00FE\x11\u00CF\u00BE\u00FA,\u00B8\u00C3\u009F\u00E0\u00DA\u00FB_F\u00D9\u00C5\u0097`F\u00B2\u00AE\u00F7\u00F9\\\x1CX\u00CE\u0085M\x07\u00EB\u00A0KO\u0081\u0092\u0091\u00A2\u00BD\u00B1\x1D\u0097\u00DF\u00FB\x07dE\x01\x0F]~5\u00AAcO\u00C0\u00B3\u00CF\u00DC\x07\u0089\u00AB\r\u00BF\u00BF\u00F1\x11\u009Cy\u00DA*8\u00EDv8\u009C]\u00E88\u00F2\x1D\u008A\u008DQ\u00F8\u00EB\x13\u00F7\u0089\u00E1\u00FD\u00FD\u00F1\u00DF\u00E0\u00B3\u00A2z\u0094~\u00F5)\u00D6\u00FD\u00DF3X\u009E\u00A1G\u00D9\u00E6\x0Fq\u00FF\x0B\u009F\u00E0\u00E4\u0095\u00BF\u00C2\u0099K\n\u00F0\u00AAm\x16/\u00E8\u00CB# \u00B5\u0099\u00EE\u00AA\u00F8\u00D0'\u00A5\u00E1\u00B8\u0081\u008D\u00FF\u00B8\x10\u00F4@\x17\u00E5\u00A7\u008D\u00E1\u00C0\u0081\x03\u00E2\u00E7\u00B3/\u00BF\u00C0\u0083\x0F<\b\u00ADVK/+1V\u0099$\u0089:1>am](\u00B5\u00D8\u00D0\u00B9\u00F1\r\x1C\u00DE\u00FD\x158y'\x1A:5\u00E2jm\x06-\u0087\u00E7\u009F}\x1A\u00CDM\x1D8|\u00E40V^\u00E5>\u00E6\u00D4U\u00B3\u00C5\x7Fuz\x1D\u00A4L>t2)\u009C\u00A9\u00F9\u0088\u00E6\u009D\u00A9\u008B\u00ED/^\x0F\u00DEr\u00A5\u00F8\u00AFJ\u00A2\u00C6\u00FD\u00CF\u00FE\x13j\u00A9\x14\nI4\u0092tr\u00B8lm8f\u00B6\"\u00F5\u00CC\u00E3x\u00B1\u00E7\u009D\u00AD,\x0E\u00FA$\x0EM6\x17</\u0095\u00D9\u00D2\u0081c%\u0085x\u00E4\u0091?\u008A\u00DFKK\x0EA\u00BD\u00D2\n\u00CE\u00A8\u00C3\u00FC\x14w\u00C6\u009F\u00BD\u00FC\\\u00BC\u00DE\u00AD\u00E1B\x01\u00C2nwDVB\x0B\u00D76\u00DC\u00D9\u00E6\u00FA\x069A;\u00A3\u00E5\u00E6\u00E4B\u00A5R\u00FA/ \u00D1L\u009D\u00C4(\u00C9:\u0089:1.adrDI\u00A4\u00C8\u0099\u00BE\bs\u00A7%BX#\u00F3D\u008D\x166S\x05\u009E\u00FD\u00C7\u00AB\u0098\u00B9h\x05\u00A6\u00CFI\u0084\u00D3\u00DC.f\u00AAN>OU\u00C8<\u00F3\u00D2;{\u0085ee\u00FD\u008B\u00D6\u00F5w<\u008C\u0099\u00A9\u00D1\u0088\u008EM@\u009C^\u00D7-\u00BC\u00EE\u00CC\u0099\u0091\u00CA\u00A0\u00E7?\u00E6\u00AE\u008En#\u00E7\u0082\u00CB\u00CEA\u00DE\u00C7\u00C7\u00A5\u00A7\u00A5a\u00C5\u00F2\u00A5p\u00F1Z\u00BDx\u00F1RdO\u008D\u00C7\u00BB\x12\x1B\u00DA\u00ED.he2X:\x1A\u00B1\u00AB\u00B0\x19\u00C7-\u009B.\u00EE/\u0095J#0\u00B1%^\x1B\x10\u00928\u00F5Q\u00EFq\u00E9\u00D0\x07A\u00C2_\u00D0\u00F1\u00CB\u008F\u00C7\u00EA\u00D5\u00A7`\u00C1\u00C2\u0082\x00bN\u0082N\u008C\u0096Q\x07G\x1D\u00E5\u0088q\u0089Tn\u00C0\u0095\u00E7M\u00C5\u00B1\u008A\x12\u00A4\u00E7\u00A4\u00A2\u00AD|\x03\u00DE\u00D9\u00F0=8\u0097\x1D5mN\u00E4\u00CF\u009D\x06\u0089\u00E9(\x0E\x1C\u00A9\r^\u0083\u00FA|\u00CF\u00C8\u00C9Fvv\u00B6W\u00D0}\u0091)bp\u00C5\u00BAi\u00A8\u00FA\u00F2\x19\u00BC\u00F6\u00D1\u00B7\u00F8\u00CF\u0093w\u00A3\u00D1\u0090\u0082du\u008FSK\u0098u\x12\u008CE\x07\u00D0\u00C0FaJR\x14\u00DE{\u00EE\x194\u00DA\x19\u00E8\u00B3\u00E3q\u00EB\u00F5\x0Fa\u00EB\u00C1\x12\u00FC\u00F5\u0099\u00BF\u00E0\u00E5W\u00F9xw\x17,,\x1B\u00DE\u00C6\u00A1\u00AA\u0086H-J\r7\u00C3\u00E1\x0BE\u00E3\u00DC\u00B4\u00FAD~\u00D6\u00ACYx\u00F3\u00ED7q\u00D7\u00DDw\u00F7\x17\u00F4\u0081\u00E6. \u0088\x11|B\u00A5z\u00BD\u00FE!J\x07\"\u00DC\u0099^\u00AFq\u00DE\u00FC\u00B6s\u00CF;o\u00F8\u0092\u00C2k\u008A\u00C3%\u00C7\u00FC\u00F9s\u00A1\u0095K\u0091:g\x15\u00E4\u00C6\x06\u00EC=p\x04\x16&\x06\x17\u00AD\u00BB\x10II\u0099\u0088\u00D79pp\x7F\x11\u00DAM\f\u0096,[\u0080\u00E9\u00D3gB\x07\x17\u00A6\u00A4d )Z)t\u00DD\x02+\u00D3c\u00EE\u00BClq\u008C4\u00E7\u0092b\u00EE\u00C2\x05\u00D0*\u00A4\u00DD\u00B2\u00C5\u0082\u0095\u00E8P\u00B0h!4ri\u00F7\u00B9\u00DD\u00E5_\u00BB\u00D9\u008C\u00CC\u00FC<\u00C8\u00F8\u00C8\u00A4\u00CE>\x01\x0B3\r(++\u0087S\u009D\u0080\x0B.\u00B8\x04\u00B1\u00D1\x1At\u00D4\u00EC\u00C5\u00A1:'\u0096\x1D\u00B7\x1CS\u00B3\x12p\u00F8\u00E0\x01TT\u00D5c\u00D9i\u00E7b\u00E5\u00DC\u00A9\u0098=\u0083w\u00E5\u00D6&\u00D4\u0096\u0097\"*&\x137\u00DDq\x19\u00A2\u0095r$\u00A4%\u00C3\u00E2\u00EC\u0082J!Gfz\u00FA\u00F8\u00D7\u00F5\x01l97\u00C0\u00CF\x11\u00AD\u0085\u00DD\u0091\u00D6\u00A8T\u00F8\u00C5\u00F5\u00D7A\u00A9P\u0086\u009CN\x1F\u00BC\u00F7>$\u00DD\u009D2\u00FB\u00AD\u00D2F\u00F3\u00C7\x13\u00C3c\x13\u0093\u009E\u0091A\u00C5I\"|\u009A\u00DE\u00ED8Y\u009FU\u00DAX~\u00DB\u008B/\u00BD<Jy\u00AEd\u0080\u00F2F\x10m\u00C3\u008C\u00CF\u008Cr\u009E\u00BEQ\u009ENc~`\u00FB\u00F4\u0090\u00DE\u00FA\u00DA\u00BD\u00F8\u00D3;E8\u00EB\u00DC\x1Bp\u00DD5g\u0085\u00AAu\u00E3\u00E5&\x0F[\u00D4=\u00BA\u00D7w\x176\u00D2s#&\u0094Y\u00F7\u00FC\u00B7\u00A5_}\u00F9\x15\u0090\u00C9\u00DD-\u009F\u008CDB\u00A2N\u0084\u0093\u0087\u00A9M\u009D \u00FAXH&\x04q\u00920L\u00F7\u00D0fw\u00DB\u00E9\u00D4e\x17\u00E2\u00DA8#N>y\u00F9\u00C4M#fd:~\u00B1d/\bb\u00D8\u0090\u00A8\x13\x13Gk\x06\u00A9\x1B\x16\\<\x17BO\u00EE\u0081\x1Cz\x7F\u00F3\u00C6\u00B8\u00D7\u008D\u00CF-\u00C0\u00DA\u00DC\u0089\u009F\u00D2\u00E1^\u00A1\u0085\u009A\u009F\t\u0082D\u009D \u0086`2\u0083\x13\u00F6PWf\u00F3\n{\u0090\x02\u00E6\u00D1<&\u0088\x038\u00AA\u0091\u008D \u00B8\x11\u00DA\u0097 H\u00D4\tb\u00C8\u00C2.(\u00AB\u00DF\x15\u00C5\u0086\u00D1\u00A6\u00E9in\rV\u0084\u0083\x11\u00F4\u0088]`\u0084\tb=U\u0082 H\u00D4\tb\u0094\u0094\u00DD-\u00AAa\u00EE\u0098$\u00F6w\u0082{\x05\u00B7\u0089\u00EF\u00C0\u0099a9T\x0E\u00E3qQ\u00B4\x10;\u00CAQ\u00C1\u0087\x18eh\u009C:1\u00A1\u0084zD\u00F7\x0F\u00E3\u008B5q\u00DB\u0090\u00B9Q<\u008A \br\u00EA\u00C4\u0098\u00D0\u00D2\u00DA:\x04O\u00C4\u00F8d\u00FA\\H\u00FBGRA\u0083\x0B\u00D1\u00E7\u008EkI\x1F\u00C2E\u008D\u0094\u009F\r~!\u00D5!\x06\u00EC\u00A7d\u00C2Pa\u0085 Q'&\x03q\u00B1\u00B1\u00A1\x0B\u00BA\u00C7I\u00F7i\u00FF\u00F6\u00AF\u009D\u0091[\u00E9\u00C4\rc\x04X\u00A4\x0F[\u00EE-\u00C8#+a\u0092\u00EE\u00B4\bf\u00E8\u009Bg\f\u00FC@\u00CB\u00C1\u008ET\u00FC\u00FA\u00C2R5<A\u00A2NLf\u00FA\r%\u00EBn\u00FF\x0E$\u00EC\u00CC8\u00F0\u00BC>\u00E5\u0093\t\u0083\u00C43\x0F\u00BEXpaFD\u00B6$\u00CC\u00F0\u00D3}4\u00D2\u009C\u00F1so\u00BD#\x1CH\u00D2\t\x12u\u0082\u00C4\u00BC\x7F\u00EE\u00ECO\u00D8\u0083\x1DK\x1Ei\u00E2\u00EE\u00F5\u00B6\u00E38\u00B7g\u00F9\u008B\u0091\u00F8\u0099\x168\u00AC\u00E7\u00E0\u00C2'\u00F0#\t\u00D7\u00A7\u0086\u00C0soG6u\b\u0082D\u009D\u0088X\u00B1\u0093\x04\u00B3S`;\x14\u00A9\u0099=\x13\u009A\u00C8\u008FGa\x0F$\u00BA\u00E1\u009E!n(\u00E1\u008Dv\u00A1\u0089\u00D6q!H\u00D4\u0089\u00C9\u00EB\u00CA\u0087\u00A0j\u00BEc\u00CC#\u00B9\u00DA\u009D\u00F3\u00D8\u00B6Is?\u00BBK0>\u0083\u00EF}E\u00DE\u009F\u00D0\u00F9\u00DE\u00FAq5E\u00EC\u00B8\\\u0089\u0086 Q'\u0088\u00B1\u00C8\x18\u0083<6\u0092\x05\u009D\u00F5Q\u00F6I\u00B5>\x07\u00C7\x05,\u00C8\f\u0096\x0E#\u00D5\u00EE<22\u00CB\rP\u00B2\x01\u00D5\u00B6\x13$\u00EA\u00C4$u\u00E9A\u00D2vt\x07\u00DE\u00F8j[\u00BF\u00ED\u00F3N\u00BB\x14\u00C7\u00E7\u00C6\u0086-^\u00CD\u00C5_\u00E2\u00E3\u009D]\u00B8\u00E6\u008A\x0B\x02h\x16\u008B\u0092\x03E\u0098>wv@M\x1B\u00EA\u00842\u0081f\u0097\x1Bw\x13\u00D4\u00B0\u00DD\n\u00CE\u008C\u009E\u00B2I\u00FC\u00F4S\x18\u00B1j\u00F0\u00EEi\x03_{\u00F5U\u00AC]\u00B7\x0E\u00D1QQ\u00A3WB!\u0088`\u00DE\x07J\x02bt\u008C\u00B9\u00C4\u00FB\t\u00D5\u00BEFg\u00CC\u00C19k\u00CF\u00C3\u00EA\u00E53\u00F1\u00F5W\x1B1\u00FD\u00A4\u00B3\u00B1n\u00DD\x05\u00989%*\u00ACq\u00B4\u00DB\u00BA`\u00B4t\x04\u00FC\u00DD\u00C5Z\u00F1\u00E9\u009B_\x0E\u00E0\u00DFB\u00CF\u00C9\x05\u00ED\u00F3\u00A7\x7F\u00E20\u00B8q!\u00E8\\\x7F\x05\x1B\u00E3j\u00E8\u00D1\u00A8\x1Dy\u00FB\u009Dwq\u00F7\u009Dw\u00A1\u00BE\u00BE\u009E^n\u0082D\u009D BA\u00AAP!--\r)\u0089\t\u00E2\u00F7\u00A4)\t\u0098\u0092<\x05\x06\u00AD\x1C/=\u00FD\x07\u00AC=o-.\u00BB\u00E9\u00F7\u00A8m3\u008B\u00BF\x7F\u00F8\u00F6\x7F\u00F1\u00D9\u00CB\u00FFO\u00DC\u00FE\u00C4\u00F3o\u00A2d\u00D3\u009B\u00B8\u00E8\u00DC\u00B5\u00F8\u00C3\u00F3_\u00C0\u00E8r\u00A2\u00B6p\x13\u009E|g\x0B\u00FE\u00FC\u00A7\x07q\u00E1\u00FA\u008B\u00F1\u0087\u0097\u00BE\u0084\u00BD\u008F\x10\u00B5U\x1F\u00C4\u009D\u00BF\u00BC\x16\x17\u009C\x7F\x11\u00BE\u00DEz\bVK%\u009E\u00B8\u00F5z\u00FCP\u00F8\x03\u00AE\u00BC\u00E6\x014[\x1D\u00E8\u00AA?\u0088\u00C7\u00EF\u00F8\x05\u00CE_\u00B7\x1E\u00FF\u00DE\u00B0O\\\u0086\u00D5ao\u00C5\x07\u00FF\u00FC\x7FX\u00CF\u009F\u00FB\u00BE'^C\u00BB\u00D59A\u00C5\u009C\u00A8\u00AB\u00AB\u00C3\r\u00D7\u00DF\u0080Wy\u00D7\u00CE\u0086\u00B0\u00FA\x1FA\u0090\u00A8\x13\x04z\u00DA\u00AA\u0085\u00FC\u0093\u00E5\x1Cx\u00FB\u00F1\x07Qe\u008B\u00C1\u00C3\x0F\u00DE\u0087\u00B3\x17\u00C6\u00E0\u00E5\x7F\u00BD(\u00FE~d\u00EF6T\u00B0\u00B9\u00F8\u00F5\u0083\u00F7\u00A0\u00A1x\x13\u00FE\u00BB\u00AB\t7\u00DF\u00F2\x0B\u0094}\u00F1\x1C~\u00FF\u00D6.8M\u00CD\u00F8\u00E1\u00B5G\u00912s\tn\u00BD\u00F6l0\u0087\u00DE\u00C1\u009B\u00EF|\u00DD\u00E3\u00D8\u00AD\u00F5x\u00E3\u00F5O\u00B1\u00FC\u008C\x0Bq\u00F7\u00CD\u0097a\u00D3\u00BB\u00FF\u0085\u008B\u0089\u00C6i\u0097\u00FD\x1C33\u00F3q\u00E3\u008D\u00EB\u00C1\u00D6\u00EF\u00C7M\u00B7\u00FC\x1E\u00CA\u00E9\u00CBq\u00DB\u00CD\u00D7\u00A2\u00EC\u00A3G\u00F0\u00CE\u00E7?\u00E1\u00F5{o\u00C2g\u00FB-\u00B8\u00F7\u00FE\x07\u0090\u00ADl\u00C0\u00EE\u00AD\u00C5A\u00899\u00D5\u00E4\u0084\u00F19\u00F1I_\u0086\u00CF\u00E2\u0098>\u00FF\u0085\u009Bwy\u00D7~\u00D7\x1Dw\u00E1\u00E3\x0F?\u0084\u00C3\u00E1\u00C0\u00A4\u00EA!ID\u00DE\u00BB\u0094\u009E\u0091AY\f1,\n\u00E2\u00E2\u00B1D\u00A9\u00EB\u00EF:}\u00FE\u0098\u009D\u009B1\u00EC\u00F3\u00B8\u00ECV\x1C(o\u00C0\u00F4\u009C\f(%.\x14\x1E\u00AB\u0086L\u00A6\u0080B\"\x05#w\u00C1b\u0091aVn\"*\u008E\u00D5#=g\u008A\u00D8\u00D6ZUW\u008F\u00F8\u00C4$\u00A8\u00F9\u00E2kUQ)\u009C1\u00A9H\u0089\u00B6\u00A2\u00B8\u00CC\u0089y\u00B3\u00E3E1\u00B1\u009B\u00DAQ\u00D3\u00C5\"5J\u0082\x063\u0087\u00F4\u0084\x18\u00B0N\x07\x1AZ;a\u00B2Ya1J0kz2/\x0F,*J\u009B\u0091\u00C9\u009F\u00C3\u00DC\u00D1\u008A\u0092\u00C6\x0Eh5\x1A\u00C8\u00F9\u00B8\u00B5\u009B\u00CD\u00887\x18\u00A0\u00B1\u00B6\u00A3\u00D2\nh\x14\x1A\u00A4%\u00C5A\u00AB\u00A2n+\x13\u0091=G\u00CA\u00FAmK\u00D4G#5!v\u00D0\x12J\u00E1\u00B1\n\u00EF>\u00FE\u00F6\u00FC\u00A0\u00A3\t\u00B5&\x13%21\x14\x1E&Q'\u0086\u00CD\u00EA\u00C4d\u009C\u00CB\u00E9)!\b\"\f<e\u00ABEig'%\x041$Q'\x1BA\u0084\u0095b\u00B9u\u00E4\u009C\u00BA\u0083w\u00EAen\u00A7\u00AE\u00921\u00E8h\u00ACF\u00ADE\u008E\u009C)1\u00E8\u00EClF\u00ABM\u0081\u00FC\u00B4\u00F8~N=!!\t*)PQ\\\n\u00D6 8u;\u008A\u00EAZ\x10\u00AB\u008DE\u0094\u00CA\u008E\u008A\x16#R\rB\x1B\u00BD\r\r&\x0EI\x1A\u00E0`m;\u00EF\u00D8\u0093\u00E005\u00A1\u00D1\u00A8\u00C0\u00EC\u00BCdHy\u00A7^R\\\u0085\u00E4\u00ACdh\x15\u00C0\u00FE\u00B2\x1AH\x1C:\u00E4fiq\u00AC\u00BA\x11I\u00FA\x04\u00B4v4\u00C2\u00EER\"/+\x0Eu\u00D55P\x19\x12x\u00F76\u00CC\x0E}}\u008B\u00DDT\u00BB\x1B\x11N]\u00ABRbZZ2o\u00BAC\u00BB!\u00FE\u009C\u00BA\u009A\u0093 \u00CB\u00A9\u00A0\u0084%\u0086\r\u0089:\x11V\u00FEV]*\u00FE\u00CB\n\x13\u00C4\u0088c\u008B8\u00B0,\u008B\u0097\x1E\u00BA?t-\u00EB\u0093WZ\u00EB\x0E\u00E0\u00B1\u009B\u00FF\u0088_\u00FF\u00EA6\u00CC\u008A\u00D3B\u00EF4\u00E2\u00EF\x0F\u00DC\u0083\u00ED\u009F|/\u00FE~\u00CB=\u008F`\u00D6\u00B2\x19\u00F8\u00EC\u00C1?\u00E0\u009A\u00CB.\u0081N*\u00C3\u00D7\u00CF<\u0082\u00E5k\u00D7cF\u008C\x1C\x1F\\q1\n3N\u00C4\u00C3\x0B[\u00F0\u00F8c\u009B\x11\x1D\u00EDBC\u00AB\x05\u00D2\u00D4ex\u00F1\u0081k\u00D1^\u00FC\x11>\u00D9\u00DE\u0089\u00FF\u00F9\u00F9\x05\u00A8x\u00F2\x1E\u00FC\u00EE\u009B\u009D\u0090\u00C4\u00CD\u00C6\u00AC\x18\x0B\u00F2/\u00BB\x1DJ>\u00BC\r\x7F\u00BC\x1F\u00DF|\u00FE!\u009E\u00FF\u00EF;\u0088)\u00FC\x18\u00F7\u00FE\u00FE\x15\u00D8\u008B\x01y\u00EA\u00F1x\u00EE\u00BE\u009F#\u00A6d#~\u00FB\u00BB\x7F\u00A0\u00A1\u00C8\t\u00952\x19\u008F\u00FD\u00FDN\u00C8\u00E2t\u00C1\u00F5\b\u00F7#\x0E\u00AC\u009F\u00E3\x18f\u00A0\u0096an\u0094GS\u00F5L\u0090*\u00F1\u008Dk\u0098z\u00EB\x043)\u008D\u00C4g6\u00C2P:\u00DEs\x18z\u00E7\u00B67\u00EE\u00BA\x13\u00BF\u00BE\u00FB\u00D7\u0090EE{\u00C5\u00D9\u00DF\x14\u00C0\u009Cw\u00FE\u00F7\u009E\x1F\u009F\u00BA\u00ECr\u00C8\u00E4\u00EE\u00AC\u0097\u0091H\u00C4_rcbp\u00BB2\u00852\x10b\u00D8P\u00F5;1l|\u00AB\u00DFon(\u00F2/\u00EA/\u00BF:lQ\u00F7>\u00B4>O,\u00C7\u00BA\u00E0t\u00B9\x00^p\u00E5\u0092\u00E0\u0094\u00A4b\u00CB\x1B\u00B8\u00FF\u00D9\n\u00BC\u00F0\u00F2\x1D`x\u00D5\u0090+\u00E4\x01j\x06\x1C\u0090\u00C9\u00E4\u00FD\\2\u00D7+\u00E3f\u00E1t\u00B2\u0090\u00CB{\u0097\u008F\u009Dv\u00FEX>\u00DC~\u00F2\u00CB\x05\u00B2\u00DF\x18\u00B4-\u0096\x0B\u00C9\u00AC\u008F\u00C6\u00AC\u00E3\\\x1Fq\u00ED\u00BEiL\u00F8\u00CE<\u0090\u00A8\u00BB\u00D3\u0096\u00E9\u0095l\u00A1\u008E\u00A6\x1B\u008E\u00B0\u00F7\u00AD<a\x02M\u0093\u00CB\u00F4\x16\u00F5\u00AB\x06\x11u\u00AA~'\u0086\x01U\u00BF\x13\u00E3\u00AC\x14\u00DAw\u00EAw\u0089\u0094\x17siHa\u00C4\u00E5\u00AD\u00C4\u00F5\u00FF;\x1F2\u00FE8\u0089\u008C\tx\u008E~\u0082\u00EEG\u00AA\u0084q\u00F7ry\u00FF\u00C2\u0084,@A\u00A1'o\x0F}\u00D9\u00B6\x10'\u00D4\x1D\u00F4\u0098\u00E1yz.\u00B8\x1B4\u00A2.=\u0082g\x15$\u00ABD\u008C\x11$\u00EA\u00C4\u00A4C\x17\u0097\u008A\u0095\u00F1\u00A1\u00EB\u0091\u00BF\u009A\u0083\u0081f\x06\rj\u00F8\u00D4\x18\u00CE#\u00EB\x1B\u00BF\u00E1V\u00DA\u0087\u00F3*\x06[\x03\u00DD\u00E3\u00D0\u00C3\u0095\x06\u00E1h\u00B0\u00E0|\u009F\x05n\u00FC\x14>\b\x12u\u0082\x18\x12\x0F\u00BC\u00D2:\u00F4\u008CWX\u00AB{\x04f)\u00F3tp\n5l\u0086\u00A1Lz\u00EC\n\"\x14Y\u0082 Q'\u00C6>\x7F\u00EB#\u0084\u00A1\b\u00E9H\n\u00FAh\x1DGLB\u00A8\n\u009E\x18\x03hF9\"\u00E2\x0B\x03\u00C2G\u00AE\u0094C.\u00EDy\\\u00E52)T>\u009D\u00D3<\u00FBy>\u00FD\u00C2Q\u00C8q\u00E2\u00FCt$)G\u00AE\x1C\u009B3E\u008FD\u0085\u00D4\u00AFaK\u008C\u008F\u00C2\u00B4d=<\u00BFJt*\u00AC\u009A\u0097\x06\u00AD\u0094^\u00C1\u00D1B\u00C3\u00A7y~z,\u00F23b\u0091\u00A8r\u00F7y\u0088\u008EVcz\u00AA\x01\u00D3R\f\u00981%\u00BAWk\u00C8\u00F4\u00ECx\u009C:7\x05\u00FA\u00EE{$\u00E1\u009F\u00B9\u0093\x16f`Nb\u00CFDK\u00D2>\u00CF%A\u0090S'&\u009F\u0081\t\u00D1y\x0Bs\u00AA\u00BF\u00FA\u00E7s\u00F0\u00D5\u008B[\u00F1\u00D2\u00F6ZH\u00F8L\u00F4\u00F5g\u00D7c\u00E7\u00CB[\u00F1\u00E8\u0096\u00AA\u00A0\u00C2H\u00E43\u00F3'\u00EE9\x1E\u00BF\u00BD\u00FDS|Xg\x1CV\u00DC\x03\u00B9\u00F5\u0093\u0097d\u00A2q\u00DB1|T\u00DF3\x1B\u0098&V\u0087\x0F\u009E8\x03\u00B1JO\u00C6\u00EF\u00C4\u00CD\u00B7\x7F\u0085\u00AE\u0082\u00A9x\u00E2\u00B2i\u00B8\u00EA\x17\u00EF\u00E3\u00A09\u00F4\x1E\u00D8B\f\u00AE\u00BD`!^xgw\u00C8\u00C7\u00E6\u00AD\u009A\u0081\u008C\u0086Vl8\u00D40\u00A9\u009E\u00BBS\x16\u00A6\u00E1\u00D77\x16\u0088\x7F\u00DBkj\u00B1\u00FC\u00AE\x1F\u00B0\u00EE\u0084\\\u00DC|\u00E9,\u00F7\x0E\u00AC\t\u00A7_\u00F9)Z\u00F8{\u00ACK\u0089\u00C1\u008B\x0F\u009C\x00+/\u00E4:\u0097\x11'\\\u00F7%\u009E|r-f\u00E8$\u00D0\u00A9$x\u00F4\u00DE/\u00F1nu\x17\u00FE\u00FD\u00F4\u00990m<\u008A\u00EB\u00DE:H/6A\u00A2N\u0090\u0090\u00F7u\u00E5\u0081p\u00B0\u00EE9\u00DF\u00E7.\u00C8\u00C2m\u00D7.\u00C2\u0096\u00B7\u00F6\u00E2)^\u00D0ej\x05\u00EF\u00A6R\u00A1WHp\u00A4\u00B4\x05;k\u00DA\u00B1lN\n\u00F6\x14\u00D6\u00C2\u00CA\u009FR\u00C2\u00FF~:\u00FF\u00FDP\u008B\u00B0\u00D8\x0B\x07\u0096wVg\x1F\u009F\x0B\u00B9\u00D5\u008E\u00AF\u00F6\u00D5\u00C0\u00DC\u00DDMy9\u00EF\u00E23t\n\x14\x1En\u00C4\u0081\u00C6.q[\x16\u00EF\u00BC\x17MM\u0080\u00B5\u00CB\u0082O\u00F8}\x05\u00E6\u00E4&@\u00E1t!=A\u0087\x0FwU\u0081\u00E1\u00C3;ka:d6;\u00FCt\u0082\u00E7\x7FK\u0083\u00AC\u00AE\t\u0097<\u00B6\x1D\x15f;.\u00FF\u00D9\"L\u00CFO\u00C0v\u00ABC\u008COfN<f\u00EA\u00D5\u00B0\u009Al\u00F8jo\rl\u00FC\u00D6L\u00FE\u00BCKr\u00E3y\u0091a\u00B1\u00B3\u00A8\x1E\u00A5\x1D\x16LM\u008B\u0081\u0081\u00DF_\u0093\u00A4\x07\u00D7f\u00844.\nW\u00ACNECE3\u00F6\u00EC\u00ABE\x03_\u00D09\u0085O\u0087(>\t\u00F7\x15\u00D5\u00E1H\u00A7\x15\u00D3x\x07\u00AAw8\u00B1\u00B3\u0091\u00DF_.\u00C3I\x0B\u00D2p\u00B8\u00BC\x15\u00B7\u00AC\u009B\ts1_\x18\u00E2\x7F\u00DBp\u00AC\x05\u00D9\u00BCK]\u00CC\u009F\u00AF\u00B5\u00C5\u0088\u00AF\u008B&\u00EE\u00AAc\x1F\x7F\x7FT\u00FC$\u00F1\u00E9\u00FB\u00D6\u00A3\u00A7\u00E2\u00C9\x0B\u00A6\u00E3\u00F6w\n\u00F1\u00CA'\u0085\u00FD\x0B\u0081\u00B9I\u00F8\u00F6\u0087\n\u00BC\u00B3\u00AB\x01\u00CF\u00DD{<N\u009E5\x05\x0B\u00E3\u00E4\u00F8\u00C3\u00A3\u009B\u00F1\u00CB\u00FF]\u0086\u0082\x19\u0089\u00A2\u00A8\u00B3\u0090\u00C0\u00E1p\u00D1\x0BND\fR\u00BD^\u00FF\x10%\x031\x1Cr\u00B4Q\u0098\x0E\u0095\u00F8\u00F7g\u00A6&\u00B7\u0088\u00F7\x11\u00F4\u00E8\u00EC\u00D3\u00FD\u008A\u00F8@U\u00E6\u00BE\u00FB\u009Dw\u00E6t\u00B1\u00FB\u00F9\u00DDW\u00CCA\u00E5\u00A6#x\u00E0\x03\u00F7x\u00F8_]\u00BD\x04\u00B7\u00AC\u00CDF\u00BBS\u008A\u009B\u00AE\u009D\u0083\u00FD_\x1E\u00C1I\u00E7/@\u00BE\u00C9\u008C]\u008D&,\u0098\u009F\u0081'\x7F5\x17\u00EF\x7F[\u0085\u00F5'\u00E7\u00E0\u00C4\u00D5S1%V\u0083ug\u00E7A\u00D2n\u00C6\u00B6\u00D2V\u00DC\u00F4\u00E09\u00F8\u00DF\u0093SaW*q;\x1F\u00C6g\x1F\u0095\u00C0\"\u0095\u00E2\u00EDg\u00CE\u00E2\u00AF\u008A\u00C1\u00EA3\u00F2qf\u00B2\x06\u00EF\u00EF\u00AE\u00C3/\u00AE^\u0086{\u00AE\u009A\u008BX\u00B5\x1C_\u00EC\u00AD\u00C3{\x7F=\x07\x0B\u00B3\r\u00C8[\u009C\u00855\u008B\x12\u00B1\u0089?\x7F\u0089\u00D1\u00E1\u008D\u00FB\u00D44\x03N]\u0095\u0081\u0086\u00F2N\u00EC-o\u00C3\u00EE}\u00D5\u00D8[\u00D1\u0086\u0084\u009CD\u00AC[\u0098\u0084\u0082Y\u0089P&D\u00E3\u00CA\u00F3\u00F2a\u00A9\u00E9\u00C0\u00C1F3\u00DE\u00FE\u00F3Y\u00D0K\x18\u00E4,\u00C9\u00C65'\u00A4\u00E2\u0095\u00AF\u008Fa\u00ED\u0089\u00D3\u00F0\u00DB\u00DB\u0096\u00E1\u00D4\x05\t\u00A8k\u00B0b\u00FE\u00AAi\u00C8KV#Z\u00A7F\u00F1\u009Ej\u00FC\u00EC\u0092E\u00F8\u00D5\x05S\u00A1\u00E3\u00C3\u00BA\u00F9\u00AAy\u00B0\x1F\u00A8G\u00CE\u00BCt\u009C\u0095\u00AE\u00C1\u00A7%-P\u00C5h\u00F0\u00DA\u00C3'\u00E2@q\x0B\u00D6\u00ADJGL\u0094\x12\x12\u009B\x0B\u009B\u008F\u00B4\u00E0\u00CD\u00A7\u00CE\u0080\u00C3\u00E4\u00C4\u00DA\u00F3gc\u0081\u00CB\u0089\u00AF\u008F\u00B6F\u00EC\u00B3\x16\u008E\x1E\r&\u00A3\rm\t\u0089\u00B8\u00E2\u008C\x1C\u00EC\u00D9X\u008AZK\u00FF\u0095\u00F4\u00DA*\u009Bq\u00FA\u00DAy\u00B8u\u00DD4\u00F1\u00F9;iE\u00A6Xc\u00B4jE:\x0E\u00FEP\u008E\u00DB\u00DE*\x14\u00B7\u00AF8e\x06:\u008A\u00EB\u00B0\u00F1X\u00F0i\u00D6Q\u00FA\u00B9X\u00DB\u00E4}\x07\u00F8\x7Fc\u00D5j,\u0093\u00B9g\x1E\u00DC\u00EA\u00EAB\u009B\u00CDF\x19\x0B1\x146\u0091S'\u00C6&s\x0E\u00B1\u00C3\x19\u00CB\x0B\u00FA\u00D9'f\u00F2\x7FX\u00F0\u00FB\u00D7\u00F7\u00B9\u00C3\u00E0\u0085o\u00E5\\\x03\u008E\u00BB\u00EE#\u00F1{\u00D1\u00E1<<\u00FC\u00CBExqW\r\u00AE==\x07\u00CF\x156\"K'C\u00E3\u009EF\u00B49\u00DDU\u00DCG\x7F*\u00C5\u00E5\u00CFl\u0087&?\x15\u00EF^6\x1D/\x1Cj\u00C3\u00D53\u00B4\u00F8\u00D3\u00C3\u00DF\u00E0\u00BD\u00C3\u00CD(\u00BF\u00B8\x00\x0F_>\x0F7\u00BEy\x10\x7F\u00FE\u00EB\x0E|\u00B4\u00A3\x02\u00CB\u0096M\u00C53W\u00E5@\u00F6\x02\x03\u00CE\u00C5\u00E2\u00C3\u0097v\u00E1w_\x1F\u00C5y\u00D7\u009F\u0088\x14\u008D\x04W\u00DF\u00F6\r\n\u00BBlx\u00F6\u00B1sa\u00EBS!\u00B1\u00B5\u00AC\rfF\u008E\u009BnY\u008A\u00AB\u00AFZ\u0080\u00F7?>\u008Cg>-\u00F2^\u00FF\u00D3O\u00FE\u0088\u008F\u00F8\u0082\u0085\x10\u00D6\u00B4X\x1D\u00CE\u00BAz\x05\u00B6}q\x04\u00F7\u00BD\u00E1\u00BE\u00C6\u00A7\x7Fw&\u008E\u00D3\u00C8\u00C4\u0081\u00CF\u0096\u00F2Z\u00AC\u00BC\u00EF\x07\u00F7\u00B5\x7FQ\u008C9\u008F\u00AE\u00C1\u008D\x7F\u00FAVL\u0087\u00DF,\u0088\u00C3)\u00D7|\x00#/\x11\u00AF?\u00BB\x0E\u00E7\u009D3\x15\x1F\u0095\u0098`\u0095zz\u00F8\x03.\u008EE\r/@\u00AF\x14\u00F3\u00CE}[1^\u00DCX\x06m\u00A2\x1E\u009D\u00FCu?\u00F0\u00E26\u00E4\u00F1bU\x10\u00A3\u009A\u00D0\u0082\u00EE\u00E1\u00D3\u0097\x7F\u00C4\rK\u00D6b\u00E6\u00B4X\u00EC\u00DCV\u00E3w\u009F\u00BB\x7F\u00FB\x05\u0094Q*l\u00FC\u00FB\u00D9\u00B8\u00F6\u00FA\x0F\u00F1\u00E2\u00F3\u00E7\u00E2\u00AAk\u00DE\u00C7\u0091ng\u00CE\u00F2\u00F7\u00E4\u00B6\u00DB\u00DE\u00A3\u0097\u0099\u0088(H\u00D4\u0089q\u00810\u0096\u00F8\u00DBo\u00CB\u00C0e%\u00E1\u009Dg\u00CE\u00C4/\x1E\u00D8\u0088\u00A3N\x0E1*\x05\u009E\u00BE\u00EB$q\x1FC\u00B4\x12-\u00CD\u00AD\u00D8R\u00DE\u008E{\x7F1\x1B\u00CBy\u0081\u009A]\u0090\u0086\u00DF\u00BE\u00B8\x15L\u0094V\f\u00E5\u00F5\u00F7\x0E\u0089\u00FB\u00DA\u008F\u00D6\u0083\u008D\u009A\u008D\u009C9\u0082\x03cQ\\\u00D5!n\u00AF\u00AB\u00EB\u00C0\u00AC\u00D3\u0093\u00C0\u00CA\u00A5\u00C8\u009A\u009A\u0080\u00E7\u00D6L\u0083\u00D6\u00A0\x06\u00A3\u00E1D\u00F7,\u0084\u00B1uo\u00AD\u00B8oZr4\u00E00\u00E3\u00A8\u00D1\u00ED\u00AA\u008A\x0E\u00D4A\u00C9\u00F445\b\u00C2\u00DDX\u00D5\u0082\x13\u00AFy\x17\u00E9)\x06\u00CC\u00E3]\u00FB9\u00BC\x1B\u00BE\u00D5\u00EE\u00C0W\u00E2.,J\u00EA\u00DDU\u00FD\u00C5\u00A5-X`\u0090\u008Ba\u0096\x1E\u00AE\u00F0^w\u00D1\u00FEz\u00AC[\u0099\u0085\u00A3\u00FC\u00DF;\u00B75y\u00B7K\u0084\u0099\u00C8$n\u0099S\u00E8T`\u00EB\u008D\u00E8\x10\u009B\x128\\|\u00E3\u00BB\u00E2\u00F6k\u00CE\u009E\u00ED\u00B3?#:Ma\x0F\u00B5\\\x02\u008F7\u00B5\u00B6ta{\u00B3\x03\x1F=u\x0E\u00B6n\u00AF\u00C1\u00E6\u00EF\u008FNxA\x17p\u00DA\u009D\u00B8\u00F3\u00AF\u00BB\u00F0\x7F\u00A7\u00E6\u00E0U?\u00A2.\u00E1\u00EF\u00FF5g\u00CDFn\u0096A\u009C\u00A4\u00E8\u0097\u00FF\u00B3\\\u00FC\u00F7\u0086\u00EB\u0097\u00E2`Q\x1D>\u00E1\x0B@MNZC\u009D\u0088<\u00A8\u00DB&1.\x10\fg\u00E1\u00FE\x1A\u00DC\u00FB\u009BO\u00B1\u00C1\u00A4\u00C2\u008D\u00EBf\u00C1\u00C9\u008B\u00A9\u00B1\u00C3\u0084_=\u00B6Q\u00FC\\\u00F3\u009B\u00AFp\u00D3\u00F3{PW\u00DE\u008C\u00FDm\x1C\u00EE\u00BF\u00E18\u00CCP\u00F1\"\u00DCj\u00F1J\u00C3\u008A\u00B9I\u00EE\u00D2,/l*^\x04M\u00ADF\u00F15H\u00EEv\u00A8:~\u00BB\u00D9\u00E8\u00C4\u008C\x13f \u0099u\u00E0\u00C6?~\u0083\x7F|P,\u008A\u00A5\u00CBG \x05l\u00BCk\u0087L\x06e\u00F7vCR\u00B4\u00E8\u00D4}\u009B\x13n\u00BAr1\u00AE\u009B\x11\u008F\u008A\u00AAV|\u00B4\u00A5\x14\u008F\x7FW\u008D8\u0083\u00CAo\u00E9Z(\x0B\ba\u00FA\u00F6\u00A66\u00F0\"\u00BFu_]\u0080\u0092\u008E\u00BB\u00F0 \u00A4\u0083&\u00AEg1\u00903\u00D7/\u00C2\rk\u00F2\u00C5)H\u00D1\u00ED*\u0093\u00E7g\u0089i\u00E8\u00E4\u008F\x11F\x0Exf<s\u00F1\u00FB<\u00F3\u00EF\x1DX{\u00DB\u00C78\u00D6d\u00C2\u009Fn\u00993\u00E1\x05\u00DD[`\u00DAS\u0081zM\x14\u00AE\u00CA\u008B\u00EB\u00F7\u00DB\u008C\x13gBo\u00B3\u00E0\u00E1\x17\u00B6\u00C1\u00C1\u00B2x\u00E1\u00D5\u009D\u00E2\u0094\u00C0\u00FF\u00E2\u00FF=\u00EF\u00B2\u00F9x\u00F8\u009C<z)\tr\u00EA\x041L\u00BB.:\u00CD\u0087\u00EE\u00FB\x00\x7F\u00BE\u00F7$\u00DC\u00B4<\r\u00EF\u00EEn\u00C7\u00DB\x0F\u009E\u008C\r\u00BB\x1Ap\u00FC\u00B2t|\u00F2\u00DAN\u00BC]\u00D2\u008C?\u00BEr\x00/\u00DFZ\u0080\u00CF^\u00DA\u00D9+\u0080\u00F4\u00E5\u00D9xhJ,\x16.\u00CF\u00C0\x1B/\u00EED\u00E5\u008Er\u00FC\u00FEU\x05\u00AE\u00BEa)f\u00ECk\u00C4\u0092\u00F9I\u00B8\u00F5O\x1BQ\u009Bh@\u00D6\u008D\u00C7\u00E1F\u00A3\x0B+N\u00CE\x11\u00E7\u0098\x17\u0086\u00A3\tU\u00AE\u0092nE|\u00E5\x1F\u009B\u0090q\u00ED\x12<~\u00C7\t\u00A8s2(HSaO\x1F\x05\u00DA\u00B6\u00A3\x12\u008F\u00DD\u00B3\x123\u00F9\u00F8\u00955Y\u00B0\u00F6\u00D4,<\u00F5\u00F8\x0F@J\u0092\u00DFK|\u00F9o\x1B\u00F1\u00EC\u00AD\u00CBqwl\x14\x14\u0089\u00D1H\u0081\x15O\u00D7\u009Bpi?=gQ\u00E7\u0090\u00E1\u00FEK\x0B\u00F0\u00C9G\x07\u00F0\u00DF\u009FZ\u00F0\u00F1\u00EF\u00D7`{\u00A5\t\u00CB\u00F3\u00F4\u00F8\u00E7\u00F3\u00E5\u00A8P(q\u00E3\u00DDKp_B\ff\u00E5\x1A\u00E0\u00E4\u00C5Ip\u00EB\x1F~z\x10O\u00AD\u009F\x01\x05\x1F\u00C6k\u0087\u00DA\u00F1\u00CF\u00DB\u0096c\u00E3\u00C62,,H\u00C1\u00CB\u00EF\x16O\u00AAG\u00EA\u00A3O\u008B\u00F1\u00F8\u009D\u00CB\u0091\u00B8\u00A9\u0096\u00BF\u00BFN\u00FC\u00F5\u00BF\u00FB`\u00E4\u00EFo\u00C3\u00B1\x06d\u00AD\u009B\u008E{gg\u00C0\u00DA\u00D0\u0089\u00CA\x0E\x0B~,\u00B7\u00E0\u00AA\u008B\u00E6\u00C3 e\u00F1\u009F\x03\u008D\u00F4>\x12\u0091Y\u00ABE\x0B\u00BA\x10\u00C3%\u0098\x05]ROz\u00BA\u00F7\u0083\x17\u00C6I\\8\u00B5\x02\u00D1\u00BC\u00BB\u00B5\u009Am\u00BC\u00ABr?\u00CE\u00EA\u00D4\x18lz\u00F4T\u00FC\u00FA\u00FF\u00BE\u00C4\x17\u0095\u00ED\u00BD\u00F6W)dp\u00D8\u009D\u00A2k\u00F5\u00C4E\u00CEo\x13\u00B6\x1B\u008DVo'?\u00A1\nV\u00A3\u0092\u00C3\u00D8e\x1D\u00F0\u00FCJ\u00A5\f.\u009B\x13\u00CE\x01\u00F6\u0089\u0089\u00D5A/\u0097\u00A0\u00BCa\u00F0\u0085:\u0084\u0094\u00D1\tU\u00EA\x10:uY\u0083O\b\u00B9\fZ\u00DE\u008E\u009B\u00AC=\x1D\u00F5\u0084jz\u00B5B\u00DAk[\u00BF\u00F3\u00F1'\u00D4iU\u00B0\u00F0\u00FB8\u009D\u0091\u00D3\u0093{\u00AC\u00A7\u00F9\u00D1\u00EB\u00D5\u0088\u0095IQ\u00D6\u00D23\x042=Y\u008F\u00DA\u00FA\x0E\u00B8\u0086\u0091kV|}\x0B-\u00E8B\u008C\x14\u00B4\u00A0\x0B1\x01J\u00A6\x16;\u00BA|\u00BE\x1F7?\x03O\u00DC\u00BE\x04\x12g\x17~\u00ACj\u00EF\u00B7\u00BF\u0095\x17\u00F4\u00BEC\u00EC\x04\u0091\x17>\u00BE\u00B0\x0E\x17\u008CA\fW\u00B2\u00D9\u009C\u0083\u00EE\u00D3\u00D6jD[\u00F0\x15\x12\u00E8\nE\u00CC\u00BD\x17\u00E1\u0084\u00A9\u008Fv\x0B\x05*\u0093u\u00E0\u00B6_!)\u0086t\u00BE\tN\x07\u00EF\u00CE;\u00FAl\u00AB\u00AA\u00EB\u00A0\u0084!\"\x1A\x12ub\u00F4Ex\u0084\u00A7Zm\u00A8k\u00C7cO\u00FE\u0084mE\u00F50rc\x1B\x17b|\u00B9s\u0082 Q'\u0088\b\x10r_*\u00856\u00D0A\u00AA\u00B9Gj\u0091\x18\u0082 \b\x12ub\u00C2\u00F3\u00BB+cz\u00FB\u00B1\u00E1j<7\u0088\u00B5\u00E3\u00DC\u008Ba\x0E&\u00DB\u00DE=\u00C2V\u00E8`\u00FCDr\x1C\u00B8\u00E3`\u00A3\x1Aa\u00E3e|\u00CBe\u00E1.7\u008ET\u0099\u00EF\u00AA\u00AF)? H\u00D4\u0089\te\u00DBG'\u008C`\u00F2dNXQ\u009B\t\u00E3\u0085\u00F9S\u0082\b\u00AFS\u00E6\u0082\u008D\"\u00D3_\u00F4\u00C6\u00BA\u00F5\u0082aFN|\tb<B\u00E3\u00D4\u0089QT\u00F2\u00EE\u00CF\x102a\u00A7\u00C3\x01G\u00F7\u00C7nw\x04%\u00D6aw\u00A9C\u00B5v\u00FC\u00E6\u00C6\u009Ar4\u00B5\u008Em'+\u008B\u00B1\ru\r\u00FE\u0087bqL\x109E\u00B7\u0080z>\x11\u00F3d1\u00A3_\u00B8\b\u00E5\u009C\u009E}\u00C7\"\u009E\x049u\u0082\u00880{(\f\u008Fc\u00B1\u00FB\u00C7\u00EF\u0081\u00A8\x18\u00E8\u00D4J8\u00ECV\u00D8\u009CR,X8\x07r\u00A9tP\u008B\u00CE\u00F0\u00DF;\u00DB\x1AQ\"\u00CC\u00DA\u00B6 \x1FR\u00EF\u00E4.\fz\u00D7\u00E3s\u0083;po\u00AE\x1C\u009A\u00AAu6\u00D7\u00C1\u00A9b\u0090\x10\u00A3\x1F\u00BA\u008A\u0084\\\x0F\u00D1\x1BcG\x13\u009A\u00DA]HNJ\u00F4\x7FK$\x03\x04\u00CB\x05.\u00C7L&\u00A1\u00EA{\u00AD$\u00D2D\u00C4=\u00A34N\u009D\x18.\u00BE\u00E3\u00D4\u008B\u00E5\u00D6\u00FE:\u00C0\u00FF1;7cX\x05\u0080\u00AEN\x13\u0094\x1A5\x14\u00DDK\u00A1\u0099MV(TJ^\u00B09X\u00AC6qL\u00B7J\u00A9\u00E0\x7F\u0097\u008AJc\u00B1\u00D8\u00E1p\u00B9\u00F8\u00EF\n\u00A8T2q\x7F\u00BB\u0083\u0085\u009C\u00FF]\u00A5\u0094C\"e`6\u00DBDG\u00AFT\u00C8\u00F9\u00ED\u00BD+\u00AD\x1C6;\x1F&\u00C3\x1F\u00E3\u0084B\u00A1\u0080\u008C/\x19Xl\x0E\u00FE8\x194jy\u00B7\u00A0\u00B1\u00B0Y\x1D\u00B0\u00BBX\u00A8\u00F8}\x14\u00DDk\u00A9\x0B\x1D\u00F0\u0084\u00B0\u0085\u00F9\u00EA5j\x05_\u0088``1[\u00F8sI\u00C1\u00F2q\u0092\u00C8z\u00C2p9\u00D9\u00FE\u00F1\u00F7\u008D\u00870\u00CC\u008EW\x0E\u00A1vB8\u00B7Z\u00C9_\u008B\u00C5&\u00CE\b'\u0084-\u00CCn'\u009C\u00CFb\u00B6\u00C3\u00C9o\u00D4j\u0094\u00E2\u00F9\u00844\u00B3Xl\u00E2lh\x1A>\u009Dd2\t\x1F\u0096]\u009C`N8N\x1C\u00A7\u00CF\u00EF\u00AF\u00E6\u00D3\u0082\u00BA\u009C\u008F.\u0085\u00C7*\u00BC\u00A5\x01O\u00D2\u00AB\u00F9\x12U\u0096\u00D3=+ \u008DS'\u0086\u00C1\u00C3$\u00EADXE\u009D \u0088\u00E1\u00F1\u0083\u00CC\u0084V\u0097\u0093\x12b\x14)\u00B5\u009A&JA\u008A&\u009F!\u0086O\u009B\u00CB\u0081b\u00A5\u00D5\u009F\u00C1\x0E\u009BS7v\u0099\u00E0\u00EC\u009EW\u009D\x15\u00E7/\u0097A\u00A7U\u008A\u00D3\u00B6:\x1CN\u00B1\x1AXp\u00D5Z\u00ADJt\u00D9\x16\u00DE\u0089*\u00E4r\u00D1\u0095\x0B\u00CEUh\u00937\u009A]\u00D0G\u00AB\u00E0\u00E2\u00F7\u00EB\u00E2]\u00ACZ\u00E9vF\u00C2oR\u0099\x1C\u00EAn\u00F7,`1\u0099!\u0091\u00ABx\x17/\x11]\u00BER\u00CD;`\u00DE\x15\u00DB\u00ADv\u00D8X\t\u00D42\x0EF\u008B;<\u00C1t\u00B9\u009CN\u00FE\u009C,\u00A4\u009C\x136\u00A7\x04\x06~\u00BB\u00AF\x03\x16\u009C:#\u0091\u008B\u00B5\x06N\u00DEu[\x1C@\u0094V\u00EE7\u00FERI\u00CF\u0081\u0082\u00DBf\u00A4\u00FCq|<\u00840l\x0EF\f\u009B\u00E5\\\u00B0\u00DA\\\u00A2\u00EB\x16\x0E\u00B6\u00F1\u00D7+\u0084e\u00E7\u00ADxt\u0094\nV\u00B3\x15|t\u00C4\u00EBW\u00C8eb\x1C\x05\u00A7n\x12N\u00CCG,:Z\x03\u00C9\x189t\u00AE\u00D5\b\u00AE\u00C9L/N\x00V:\u00B5\u0094\b\u00A3\u00CC\u0087\u00FC\u00EB:QjGH\u00D4\u0089a\u00B3\u00AB\u00A5\x19\u00BB\u00D0\u00EC\u00CE\u00B0Y\u00F7\u00ECe}\u00A7\u0089}\u00E9\u00A1\x07\u0086\x1C\u00BE\u00D0\u00A6~x\u00D3wP\u00C4'#\u00D6\u00A0\u00E1%I\u008A\u00A8\u00A4d\u00F0\n\u008A\u009D\u009B\x7F\u0080S\u00A6\u00E6\x05R\u008B\u00AE\u00B6V\u00CCZ\u00B4\x18\x06^8\x1BK\u008F\u00A2\u00B6\u00B1\tf^\u00C4\u00F2\u00E6,D\x14g\u00C4\u00DE\u00A2:\u009C\u00B0\u00AA\x00\u00A6\u00A6:\u00EC),ABB\u00BC\u00BB\u00F3\u0092T\n}L<\u00B2R\u00A6x\u00CF\u00D9\u00B0\x7F\x0B\u00E4\ty\u00C8L\u008EC\u00F9\u00DE\u009DH\u00996\x13\u00F1Z\rj\u008F\x1EF\u00B5I\u0082\u00FC$%\u00F6\x1Dj\u00C0\u00CA\u0095\x0B\u00C4v}\u00BB\u00A9\x05G\u008E\u00D4 FjFE\u008B\x14'\u00AEZ\x04\u00A9O\u0083k\u00C3\u0081\u00ADp\u00A9R\u0091?-\x1D\x1D\u00F5\u0095(\u00AE\u00B3b\u00E9\u00BC\x1C>\u00FE?\u00F2\u00F1W\u0089\u00F1\u00EF\x14\u00E3\x7F\u009Cx\x1E\x0F5\u00C5\x07\u00C0D%!?-Q\f\u00A3\u00BCI\u0082\u0093N:\x0E\x0EK+\u00CA\u00CB\u009B05=\x01;\u00B6\u00ED\u00E1\u00D5[\rC\u008C\x01\x1D-\x1DX\u00BA|\t4\u00FC\u00B9\u00EB\x0E\x17\u00A3\u00BC\u00BA\x0Ej\u009D\x01+\u0097.B[\u00ED\x11\u00EC-\u00AE\x12\u009B\r\u00E6\x17,FbL\u00B4\u00FB$\u008C\u00BB?\x013\u0084\x11\x05C)\x17\u00B86}\r\u00E7\u0097\u00FB\u00E8\u00C5!\u0088\x11\u0080z\u00BF\x13#F(\x13\u00CE0A\bDl|\x122\u00D2\u00B3\u0090\u009E\u009E\u00C6;W)\u00EF<\u00BB\u00C0(\u00A3\u00B0dQ\x01\u00F2s\u00B3\u00A0\u0094\u00BB\u009DvCc\x03\u00D4\u0086d,=~\x05\u00B2\u0092\x13Q\u00D7\u00D8\u00C2;q\u00C1\u00AD:\u00D0e6C\u00A6T\u00F2\x0F\u00BE\x1C\u00E9\u0099\u00D9\u0098\u009E7\x15\u00D1r\x05tjMH\u00D7\u00A6\u00E0E\u0094u\u009APU\u00DB\x00\u008B\u00D5\u0082\u00B2#\u00A5\u00D0i\u00A2\u00A0\u008B2\u00F0\u00DB\u00CDhn\u00EB\u00E0\u009D\u00B5\x11\u0085\u0085\u00C5\u00E2B*\u00FEp\u00D8\u008C~\u00E3\x1F\n\u00E6\u00CEV\u00F0^\x1E\u00B3\u00E7\u00CFC\u00E6\u0094\x04w\u00AD\x01\u00EB@\u00C5\u00E1\u00C30$\u00A4\u00E2\u00E4U'@\u00C19`r\u00BAG\f$\u00A5\u00A4b\u00C1\u00AC<\u0094\x1D>\x04\u00B3\u00C3\u00BDM\u00E8\u0097\u00C0p\u00A1\u00DD\u00A7`\u00EE\x17A\x10\u00E4\u00D4\u0089\u00C9(\u00FE}\u00FE\x1EP_\u00BC\u00BD\u00D0\x01\u00B5*\x06Z\x05\u00B0i\u00D3&\u00FE\u00AB\x04qq1b\u008735/\u00E0;\u00F6\u00B9WgS\u00AA\u00B5X\u00BCd:d\u00AC\x13j\u00C6\u008E]\u00DB\u00B6!\x7F\u00D6\x02\u00CC\u009B\u0095\u008E};\u00B7\u008B\u00CB\u00A9\u00AA\u00B4\u00B1X\u009C\x13\u00B8\u00CAS\\\u00C2\u00B4\x0FQ\u0086x^\x1C3\u00B1\u00FF`\x11\u008E\u0095\u00F0\u00E7\u00D1\u00C5a\u00E9\u009C\f(y\u00D7.\u00E7\x0B\b{w\u00EF\x14\u00C3\u00CE\u00C8\u00C9\u0087L\\\u00FB\u00BC\x7F\x18j\u00B5\u0081\u008F?\u00E7\u008D\x7F\u00AC\x18\u00FF\u00DER\u00D9[l{\u00D6P\u00F7`H\u00CEFFK;vm\u00DD\n\u0099J\x07\u00B5B\x06\u00A9D\x0E}\u008C\x06\u00FB\u00F6\u00EE\x12\x17\u00ADI\u0098\u0092\t\u00ADL\x0E\u00B1\u00C2\u009BO\u00A0\u0084\u00E4\ftuva\u00EB\u00D6\u00BDX\u00B6l>429=\u0084\x041Q\u00F2S\u00EA(G\u0084\x13\u00DF\u00EAw\u00CFw\u00A1\u00FA\u00FD\u00C5\u0097_\u00F3\u00BB\u00BF\u00C4\u008F\u0084s\u00E8?\u00CE|\u00A0\u00B9\u00E1\\\u00C2r\u00A8\u00FC\u00EE\u0092\u00EE\u009A\x01\u00F1x\u00A1\u00DA\u009F\x13\u00B6K\x02V+\u008BM\x04@\u00AFj\u00F2\u0090\u00AFW<\x0Fz\u00B5\u0083\u0087\x1A\u00B6'\u00FE\u00C3\u0099JWHcI\u009F\u0082C\u00A0\u00B8\x05,T\u008DR\u00BD\x1DU\u00BF\x13\u0091\u00C6\u0087L\x0764\u00D6M\u0084K\u00A1\u008ErD\u0084\x15\n\u00FC\u008A\u00CE\u00C0\u00E5N\x7F\u00A2%\b\u00E4`\u0082*\t\u00C3 c\u00F7y\u0086\x17\u00B64\f=\u00D6$~j\x02\x02\u00C5-P-\tA\x10\u00E3\x1F\x12ubt\u00DC\u0099\u00CB\t\u0099L\u00E6G\u00C4\x19\u00B1M7T!\x1FL\u00A8F\u00AB\u00FA)\u0094\x1A\u0085H\u0083\x04\u009D &\x1E\u00D4Q\u008E\x18\u0099\x07\u00CB\u00C7\u00A9\u00F2\u00B2\u008D\u00DA\u00EA\u00EA\u00C0\u00C2(\u00AC\u0098\u00C6\u008C'9\u00F4/\u00E8\u009Em\u00BE\u009F\u00B1\x16\u00ED\u0081>\u0091\u009A\x13$]p<\n\u00DE\u00FC\x1B\u0096|\u00FAoz\u0091\b\u0082D\u009D\u0088<K\u00C8\u00E0\u00DD\u00F7\u00DE\x19X 9\u008C\u00B9\b\x0EW\u00D0\u0087\u00B3\x1F\u00E1f\u00EE\u00F3\u00BFC\u00D65\u00FFC\tA\x10$\u00EAD\u00A4\bx/\u00A7(qwT\u00DB\u00BFo/\x1E\x7F\u00EC\x11\x14\u00EE\u00DB\x07\u00AB\u00C52\u00A9\u00D62\x1F\x0B\u00E7>^\u008B\x12m{w\u00E1\u00C0\u009Dw\u00C0XRH\u00EF\x12A\f\x01jS'FE\u00E8\x19F\u0082\u00A2\u0083\x07Qx`?8\u00B6\u00BBg\u00BCO\u0085\u00FBD\u00D4x\u0096u\u0085\u00B4\x7FJ\u00FEj\u0094\x1D\u00F8\u00CC\u00FB]\u00ADRO\u00C8\u00C7\u00E1\u00AC\u00CC,\u009C\u00CF\u00C4\u00FA\u00FD\u00AD\u00EA\u00D9\x0F\u00E8}!\br\u00EA\u00C4x1\u00F0\u00C2\x103\u0089\u00B4\u00FB#\u00E9\u00F9H\u00FB|\u009F\x18\x1FiH\x1FaZ[\u00A1/\u0082\u00F7#\u0091L\u00C8\u00CFdB\u00E8\x17\u00A0\u0099\u0091\x18\u00F6p\u00850\u0083\u00E9s0R\u00E7\x1F\u008Bk!\u00C8\u00A9\x13c\"\u00DE\u008C\u00B7j]\x1Cw\u00DD\u00BD6\u00A7{\u00A5\u00D5\u00EEu:9\u00CF\nU>N=\u00C8iJ\u00C7\x15\\h\x17$\x14t|\x13A\"a&\u00EC3\x12N\u00D2\x7Fy\x1ER\u00CEZ/\u00FE]\u00FB\u00E9\u00BBaw\u00FB\u0082\u00E0\bM\x02\u00B6\u009Av\u00CCx\u00F8W\u00E88r8\u00A4sH4\u00AA\u00F0\u00BB1?a\x1AV\u00E5#\u00F7\u0097\u00B7B\u00A6\u008B\u0086\u00E9\u00F0\x01\x14\u00DE\u00F6\u00E8\u00B0\u00CE\u00AF+\u00C8\u0080\u00E5H=\\\u009D\u00F6a\x1D#\u0088\u00F6\u009C\u00C7\u009F\u00F0~o\u00DF\u00F5\x13J~\u00FDw\u00BF\u00D7\"t\u0090,y\u00F4\x11\x18wU\u008Aa\t\u00FF\x12$\u00EA\u00C4Xg\u00DA\u00BC\x1B\u00F3LB\u00E3\x11y1#\x17\u00FE\u00E6\u00B7{\u00F2t\u00DF6ffBv(cC\u00AE\u00CD\x10j2z\u00BESEZ0\u0082\u00AE\u0099\u0092\u008Cmg]\x01i\u00B4B\x14]\u00F6\u00AA5\u00A8y\u00E5\u00EB\u00B0\u008Bh\u00E6\u008D\x17\u00C1\u00D1\u00D5\x15\u00B1M\x04\u00F9w?\u0080\u0083\u00BF\u00BE_\x14BeZ\u00F4\u00B0\u00C3\u009B\u00F5\u00DB?x\u00C3\x1B\u00CE1\x1E\u00D1\x16\u00EE\u00D1`\b\u0082.\x14\n\x04A\x17\u00C2\n\u00E6\x18\u0082D\u009D\x18\x1D;\u00E6m(\u0097t\x0B;\u00E7\x11|\u008F\u0093\x077\u00F1\u00D3 \u00A4\u00C2\x103\u009C\u00C3'%\u0082C\x17\\\u00B4\u0080\u00E0\x0E\u00AB?\u00F8Pt\u00ABm\u00DB\u00F7\u0089\u00EEPp\u0085\u0086\u0082\u00E3a\u00A9)\u00C7\u00D1\u00A7\u009E\u0081\u00AB\u00CB\u008Aiw\u00DC\bm\u00DE\x1Cq[\u00E9s\u00FF\x04k\u00B6\u008A\u00FB\n\u00EEV\u00D8~\u00ECoO\u00A2\u00F9\u00B3=\u00BD\u00CE\u0093x\u00CA\t\u00D0$\u00A7\u00A0\u00F87O\u008B\u00DF\x05\u00D1\u00EC\x1BN\u00FE\u00DD\u00F7\u00A0\u00E2\u0095\x7F\u0089\u00C7\u00E6\u00DC}\u00B9\u00F7\u00D8\u00AC\u00CB\x7F\x06\u00EDo\u00E7\u00C0i\u00EC\u00C4\u00B1g\u00FF\u0082\u00F6M%\u00A2{\u009Dz\u00DB-P\u00A7f\u0089\u00E7-}\u00FEeD\u00CD\u009A\u00EA\u00ED\u00F9_\u00FE\u00D2\u00DF\u00D1\u00F0\u00CEOb-\u0081p\r\x0Ec\x17\u00EA?\u00FE\u00CA{\u008Cp\u00CE\u00BE\b\u00E1\u00C7,Y(\u008A\u00A2\u00AD\u00BA\u00B3\u00D7\u00F9\u0095wg\u008A\x0E\u00DEsm\u0082h\n\u00F1\u00F5\b\u00A9 \u00C2\u00BE\u00E7\u0092\u00EB\u00A2\u00BC\"]\u00F2\u00E8\u00EFaol\u00EB\x17_!\u00CD\x04\u00D1\u00F58q\u00E1X\u00DFc\u0084\u00EB\f\u0084\u00EF\u00F5\u00FB^\u008Bp\u00ACp?sn\u00B8\u00CE[K\"\u00C4y\u00CA\u009A5\u00BD\u00D2\u00BAo|K\x1F}\u008D^\x06O!\u008A\u0092\u0080\x18\x19=cz\u00F7\u0084\u00EFn'\u00F6\u00FC-~\u00BA\u00E7D\x1F\u00E83\u00DE5}8\x1Fb`\x04a\x120\x177\u00FA\b\u009BE\x14/\u008F;l\u00F8\u00E6[Qx\x1A\u00BE\u00FA\\\x14\x11A\u0088\u009B6\u00FF(n\u00AB\u00FC\u00CFk\u00A2xx\u00F6\x15\u0084J\x10\u00A3\u00DC\u009Bn\u00EFw\u00AE\u0084U\u00A7\u0089.\u00DDS\u00AD\u00EC/\u009C\u00FA\u00CF>@\u00DC\u00D2\u00A5\u00E2\u00EF1\x05\u00CB\u00D0\u00F8\u00CD\u00F7\u00E2\u00DF\u009E\u00FD\x04\u00C1\x17\u00DC\u00B4\u00C0\u008C\u0087~\u0083\u00DA\x0F\u00DE\x13\u00B7\x0B\u00BF\x0Bqk\u00DFZ(~\u00DF{\u00C3M\u00A2\u00B8\x0B5\x0F\x02\u00C6cGQ\u00F3\u00FAG\u00E2>\u00C2u\b\u00FB\b\u00C7\u00F6\u00A5\u00F8\u00A1\u0087\u00A1\u009F\u0096\u0087E\u00FF}\x01\u00F1g.\u00F0n\x17\u00C2\u00DFu\u00F1M\u00BD\u00AE\u00CD-\u00BC\u008F\u0088\x1F\u00E1o\x0F\u009Esy\u00AA\u00C7\x05\u00D7-\u0088\u00B3o|\u0085j}\u00DF*s\u00CF\u00DF}\u008F\u00E9\u008B \u00C2\u00C2G\u00A8]\x19\u00E8Z\u0084\u00F0\x04\u00E1\u00F6\u00B8{A\u00D0=i(\u00EC\u00EB)\u008C\u00F8\u00C6\u0097 \u00A7N\u008C\u0092\u00B0\u00F7\x1D\u00BA\u00E6\x11v6\u00C8\u00EE\u00EE\u00E3Z\u00D8]\u00AE\u0090\u00D3k\u00C2\\\u00FB`\u00D79\u008CJ\x1AA\u00B0\u00CCe5\u00A2#\u00F5\u00B8>\u008F\u00B0\u00CBtj\u00D1\u00B1z\u00F0\u0088\u008B\u00A9\u00ACZt\u0085\x02\u0082\u00E3\u00F38b\u00DF}\u00850\x02\u00B5?\x0BB%\b\u00B701\u008E\u00E0\u00A0\u00850\u00FA\u0086\u00D3\u00FC\u00CD6\u00A4]t%\x1F\u00BF\u00ADn\u00C1\u00E9\u00AE\u0082\x16\u00CE- 8\u00E4\u00DC\u009B\u00DC\u0085\x11\u00A1\u00E0\u00E1\u00A9\r\u00F0\u00C4M\u009D\u009B\u008C\u00FC_\u00DF\u00E5\u008D\u00A7z\u009A{)\u00E0\u008E\u00C2\x12\u00D1y\u008B.\u00B9;,kCK\u00BF8\n\u00F1\x17\x04\u00D7Su\u00DD\u00F6\u00E3\u00CF{\u009D_(\u00F0\u00F8\x16\u0086|\u00AB\u00C8=\u00DB<\u00E7\u00EA[x\u00F2\u008D\u00EFP\u00F1\u00ADJO\u00F9t\u00FD\u0080\u00D7\u00E2\u008B\u0090\u00CE\u00E5\u00AF\u00BD\u00E1\u0093\u0086\u00D1\x03\u00C6\u0097D\u009D F2\x03\u00F7T\u00B7\x07\x10w\u0081\u0089:f=\u00D4\x0Ea\u00FDD}\u00A2>\x13\u00C38V\u00EC\f\u00C6\u00BBMAD\x05\u00F7\u00D9\u00B4\u00E9K\u00A4_\u00B2^t\u0089\u0082\u00B3M;\u00EF\\\u00D11\u00FB\n\u0092 ^\u00DA\u00EC4o5\u00AF\u00E0\x10\x05a\x16\x10\u008E\u00F1\u0088\u00E7`\b\u00EEQ\x10K\u00C1Q\x0Ba\u00F5\rGp\u00F1Bu\u00B0\x10\u00BF\u00EA\u00B7^\u00F5\x1E\u00A7J\u008A\u0083\x11\u0095^\u00F7,\u00C4G\u0088\u00BF\u00F0]\x10)!nB\u0095\u00B6\u00A7M\u00DC\u00D1\u00D0\u008E\u00F9\u00CF\u00FD\u00AD\u00DF\u00F9\u0085s\n\u00FB\n\u00C7\x0Ba\u00F6\u00C5S\u00B8\x11\u008E\x173\u00F7h\u00FF\x05\x14\u008F\u0098{\u0084\u00B1\u00AF\u00C0\u00FB\"4M\ba\u00FA\u00C6W\u00C0s\x0E\u00A1\x19B(H\u00F5=f0\x06\u00BB\x16\x0FB\u00BA\u00FA\u00EE+\u00C4A\u0088\x0Bu\u00A0#Q'\u00C6Z\u00DC<+\u00A8\u00F9Y[\u009C\u00A1\u00BA\u00E6\u00B0\x14\n&\x03\u0096cub&o<\u00EAv\u00E0\x15\u00FFxK\u00EC\u00C0&T\u00EB\n\u0099\u00BD \u00E8B'9\u008F`y\u00DA\u00B3\x05\u00D1\x14\u00DA\u00D4\x05r\u00AE\u00BF\u00DA\u00EB\u00B0\u0085\u00DE\u00F2-\x1B\x7F\x1AT\u0090<\u00E2&\u0088\u00B5\u00E0\u00A6\u0085\u00B0\u00FA\u0086#t\u00A0\x13\u00AA\u00FB\u00856|\u00C1\u00B5{\x10\u00AA\u00E4=\x05\x11A\u00B4\x05\u0084jo\u00C1\u00F9\x0B\u00DB\u0085\u00B8\x1Dy\u00E2\x1FH\\{\u00B2Xh\x10\u00BE\u00FB\u00C6\u00C5\u00F3\u00AFpN\u00A1\x1A\\8\u00A7\u00A7\u00FD\u00DAW\u00FC<m\u00D4\u00C2y\u0084\u00AAv\u008F\u0083\u00ED\x1B\u008E\u00A7\u00E6\u00C1S\u008D\u00ED\u0089S\u00DF}\u0084\x02\u0093\u00D0V.\u0084\u00D57\u00BEB\u008D\u0080p\u00CDB\u00E1\u00C37.\u00BE\u00C7xjI<az\u0086\u00ADy\u00FA7\x04\u00BA\x16OZ\x0B\u00E7\x11\u009A\x12\u00C46\u00F6\u00EE\u00B4\x16\u008E\x15\u009A\x19B)@L\u00BA|\u0083\u0096^%\u00C6\u0082\u00C90\u00A3\u009C\u00D3\u00EE\bi\u00FF\u00EC\u00F9\u00A7\u00A1h\u00DB\u0087\u00DE\u00EFQQQ\x132]\u00D6$\u00A5\u00E0\\N?\u00A2\u00E7\x18\u00AB\u00DE\u00D3B{\u00B1\\\u00A7\u00A3\u008E[\u00E3\fZz\u0095 \u00C8\u0085\x06s\u0091\u0094Fc\u00C4X88A\u00D0c\u00E6\x17\u00E0\u00E0\u009D\u00BF\u00A3\x1B@\u008C\x19$\u00EA\x04AL8\u0084\u00EA\u00DB\u00D1v\u00E9\u008D\x1F}\u008B\u00DA\u00D7>\x0Bi\u00B2\x16\u0082 Q'\u0088\u0089j\u00EC)\t\u00C65\u00D4\x0B\u009B\u0088\x04h\u009C:A\x10\x04A\u0090S'\b\u0082\b\u009D\u00DD\x1D\u00AD(U\u009A(!\u0088\u0088\u00A1\u00DDf#Q'\b\u0082\x18\n\u00AD|\x06\u00DA:\u00812Q\u0082\u0088$\u00A8\u00FA\u009D \b\u0082 H\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\u0082D\u009D \b\u0082 \b\x12u\u0082 \b\u0082 Q'\b\u0082 \b\u0082D\u009D \b\u0082 \b\x12u\u0082 \b\u0082 H\u00D4\t\u0082 \b\u0082D\u009D \b\u0082 \b\x12u\u0082 \b\u0082 H\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\u0082D\u009D \b\u0082 &\x0E\x05\u00F3\u00E6\u009EH\u00A2N\x10\x04A\x10\u00E4\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\"\u00EC\u00C8(\t\b\"r\u00A9kh\u00A0D \b\"(:\u00BB\u00BAH\u00D4\t\"\u0092\u00C9HM\u00A5D \b\"(b\f\x060\u00AF\u00BE\u00F42GIA\x10\u00E1\u0087\u00E3\u00D8\u0090\u00F6\u008F\u008AMG{s\u0085\u00F7\u00BBL\x1A\x19en\u0086a\u00C6\u00F1=\bO\u00F6&\u0091\f\u00AD\u00A5\u0092eYz\x11\"\u0088\u00F1\u00FC,\x07\u0083B!\u00FF3SW\u00DF@\u00A2N\x10\x04A\x10\u00E3\u009F\u0087\u00A9\u00A3\x1CA\x10\x04AL\x10\u0098\u009B\u00FF\u00E7\x7F\u00C2\u00E2\u00D4\u00A7$%M\u00EA\u0084\u00AC\u00EF\u00D3\u00A1i<\u00A5\u0087o\u00DC\r\u00B13\u00A0\u00D2\u00CF\u009D\u00DC\u00F7\u00B2\u00ECM\u00EF\u00DFs\u00E6\u00CC\u00A1\\\u0082 \u0088qATt\u00F4+\u00B2\x0F?\u00FD4,\u0081\u00E5\u00E4\u00E4L\u00EA\u00C4,--\x1D\u00B7\u00E9\u00E1\x1B\u00F7\u00B8\u00D4N\x18c\u00A3'\u00F5\u00BD\u00B4\x1D\u00E8y':L&\u00CA)\b\u0082\x18\x17\u00E4\u00E5\u00E6fQ\u00F5;A\x10\x04AL\x10H\u00D4\t\u0082 \b\u0082D\u009D \b\u0082 \b\x12u\u0082 \b\u0082 H\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\x12u\u0082 \b\u0082 H\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\u0082D\u009D\b+.\u00FE\u00E3t\u00F5\u00CC&,\u00FC\u00E5bi\x1D \u0082 \u0088I'\u00EA\u00A6\u00E6:T\u00B6Y\x02\u00EF\u00C0\u00B9\u00E0r9\x07X\"\u00D1\u0085\u00D6\u00A6\u0096\u00F1\u009D\u00CA\u009C\r\u0087\u00B6m\u00C7\u00E6-[\u00B0\u00F7H\x13\u0084\u00C5\x18[j+\u00C5\u00EF[\x7F\u00DA\u008ENW\u00EFkgx\u00D9dY\u0097[=#\x00\u00A6\u00ECeTo\u00BC\x11\u0092\u00B6rt:94\u00EF\u00FB_4}w\x1B\x1Cf\u0087\u00DF\u00FD\u0085}BY\u00E0\u00D0\u00D9u\b\u00D2\u00AE\u00FA\u00F1S\u00C8q8\u00E0\u00B0;)\u00F7 \b\"\u00E2\x18\u00B1\x05\u009B\x198`ll@\u008B\u0089\u00E5\u00FF\u00AED\u00B5#\x11i\u00891>\u00BF\u00BB\u00D0PY\u0089\x0EV\x02\u008D\\\x06\u00B9Z\u008B\x04\u00B5\x1D-\x16-\u00E2c\u00B5\u00BE\u008A\b\u00A7\u00D56\u00AE\x13\u0099\u0091(\u0091w\\\x01\u00C0:p\u00F8\u00C0>\x1C\u00ADWaZr\x1A\u0096%\u00A5\n\x0B\u00FCB\"ez\x04\u00DC\u00D1\u0085\u00B2\u00AAF\u00C8\u0094*pN\x1B\u009C\u009C\x06\u0099YS\u00FA\u0095\u00BE\x04\u00E1o\u00AEoF\u00DC\u0094\u0084\x11\u008F\x7F\x17'G\u00DAq\u00FF\x07\u00AE\u00E5'p\u00D6=\u0090\u0098\x16!n\u00BA\n23_@\u00D1\u00A4\u00F4<L\u00ED[am+\u0084^\x1E\u00CF;{5\u00A4\x19\u00A7!\x18u7\u00DA\x1A!wI\u0081\u00A8)\x11\x7F/+\x0E\u00EEE\x1B\u009F\x1Er\u0086\u0085V\u009F\u0084\u00AC\u00B4D\u00CAE\b\u0082\u0098\u00F8\u00A2\u00DEp\u00F8 *\u00EC\u00F1(\u0098\u009D!\nRUY\t\u00EAL\u00D1H\u00D6J\u00C5\u00DFm\u00BC\u00EB\u00B3\u00CA\r\u00BC\u00B8\u00C5\u00B9\u00A5\u00DB\u00DE\u0085\u009Fv\x1D\u00E33K9T\x053\u00D0XX\n\u0087Z\nur\x0ET\u00E3\u00BC\u0091@\u00A8\u0084\u0090H\u00F8\u00EB\u00E6?\u00F9\u00F9\u00D9\u00F8i_!\u00D2\u00E2\u0097@#\u0093z\u00CA-^\u00A1\u00AE?z\x04\u00CA\u00E4\x19H6\u00A8\u00C5m\u008D5\u00E5|\u00BA9\u00A15\u00D6\u00E2`i\u008D\u00B8-'o6\u00A2l\u00D58T\u00D1\x0Ee\u0087\x13\x0B\u00F3\u0093G\u00B4\u00CAE\x1D\u00BB\x18\u00EDU?Aj\u00AA\u0086C^\x05\u0096\u008D\x01\u00EB<\rlJ\u008F\u00A0[Y\x0E\u00AA\u00AE\u00C3\u0090e\u00FFB\u00BC\x1C\u00E1\u00CAL\x0E+Z\x0F\u00FE\x1B\u00AE\u00E6\u009DH\u00CA8\x1B\u009D\x1D_\u00C0\u00C2\u00C77k\u00DE\u00ED@B>\u00AC\r\x1BP\x7F\u00E0m\u00F1\u00F8\u00D8\u0085\u00F7`<T\u00E8w\u00DAX\u00CCY0\x0B\u00D2\u00EE\u00C2\u008A\u00A5\u00F10\u00BE\u00F9q\x0F\u009C\u00AC\x16\u00D9\x0B\u0097a^\u00B6\x0E;>\u00F8\x02U\x0E\u00A0`\u00CD\u00E9\u00C8\u008CQ\u00C2\u00DCR\u0085\x0F7\u00FC\u0084\u0084\u00F4|\u00AC^<\x15\u00C7\u00F6l\u00C6\u009E2\x13\x16\u009Ct\x06r\x13\u00D4\u0094\x0B\x11\x04\x11\u00F9\u00A2\u009E\u0090;\x13\u00B1\x12\u0085Wl\u00D22\u00A6\u0082\u0093J\u00BD\u00BF\u00DB\u00CC&\u00C8\u00B5=\u00A2\u00C0(\u00B4\u00C8OR\u00C3\u00A4\u00CA\u00E0\u009D\u00BB\x12\x1A\u0095\x13fu\x02\u0092\u00A3dh3N\u009C\x04g4q\u0098\u0096P\u0087\u00B6\x0E\x0B4q\u00DA\u00BE\u00F2\x0F\u00A7\u00D5\u0085(\u008D\u00D2\u00BB%J\u00AE@\u00AD\u00DD\x05\t/&\u00F3\x0B\x16A\u00C1\u009AQQ\u00DA\u0080\u00C4\u00BCt\u00A4[\u00B5\u0098\u0092\x16?\u00E2m(\n\u00C34\x18\u00F4\u00D3\u00A0k\u00FE\x04\u00B5\u008AU0\u00D4\u00D8 \u00C9X\u00DEk\x1F\u00A1\">J\x11\x03\u00DF\nyV\u00AADz\u008C\x02\u0096\u0099\x7FEG\u00E1\u00FFCR\u00FE\x1F\u00E1\u0092u@\u00D6\u00B8\x1D\x1D\u00864([\u00CB\u0090\u00B4\u00F2YXZ\u00BF\x06\u00E7b\u00C7\u00C5\u00FD\u00D3)\u0080\u008F>\u00FE\x06\u00B3\x16\u00CC\u00C3\u00D4\u00F4x\u0098[K\u0091Q\u00B0\x1A\u0099\u00EAv|\u00B6q\x03\u00A6\u00C4\u00ADE\u00EEI\u00AB1\u00CBQ\u008Fo~8\u0084\u0094\u00B5\u00F3Pr\u00B0\x14\u00ABN;\x1B1\n\t*v}\u008D\u00ED\u00EC,\u009C\x7Ff\x14>\u00FB\u00F6'\u00A4\u009E}\u00CA\u00B8/\u00B4\x12\x041\tD\u009D\u0091*z\x05\u00CE\u00F0\u0082\u00EE[\x13+\u0093\u00C9\u00C19}\u00DB%%P)\u00A5\u00B0\u00F3\u00DB\u0085<\u00CEeu\">7\x11r\t;\u00C1\u0092\\\u008A\u00C4\u00CC\\\x1C\u00ABj\x06\u00E2\u00B5\u00BD\u00DB\u00CD\u0085\u00AAx\x19\x03\u0087\u00C3\u00C5+\u00A9;\u00A7wp,d\x12>\u00E5\x189\u00D4\n!m\u00F4\u00D0\u00E9\u00DA\u00E1\u0090\u00AA\u00F9\u00F4\u0092A\u00C1o\x1BqwZ\u00F5\x01\u00A29\x1BZ\u00DA*\u00C0\u00F2Q\u00E9\u00B2\u00C8\x11]V\x0EI\u00D2y\u00E04\u00D1\u00DDW\u00C5\u008B\u00B8\u00CB\u00DA\u00EFX\u00B9*\u0096\u00BF\x16>\u00DE\t'\u0081\u0089\u008E\u00E6\u009F\u0089h\x185\u00FB\u00E0\u00EA\u00DC\x03F\x7F\x1C\u00D4\u00FC=\u00B7)u\u00C08i\u00A2\u00CE\u009E5\x1F\u0089\u00A9\u008Dhh\u00A8CQQ\x17R\x18)4J\r\u00F4\u0089q8y\u00C6!t47\u00C3\u00D8\u00D6\x01\u009D\u00CA\x05\u00B3\u0092/\x01\u00B8\u00DA\u00A12$\"\u00C5\u00A0\u00E5\u009F\x7F;\x1A\u00EBX$\u00A5\u00D8P\u00D7\u00C4\"7'\u008Dw\u00FC\f\x00\u00EAtH\x10Dx\x183\u008F\u00A0N\u00C8@gy\x19Z\u008Df8]N^\u00C8\x1C\u00BC\u00A0)xapz\u00B38O!\u0080c'\u0098\u00B0\u00CBuPJ\u00ED\u00A8m3\u00C3a\u00B7\u00C1su\x1C\u00C7 >=\x11\u00B5U\u0095p\u00B0.\u00B8\u00EC]hh2!U/\x17\u00EB\u00F0\u009D\u00BC\u00C0;L-\u00E8\u00B4\x00*\u0086\u0083\u00C3\u00EApw\u00A8\x1Ba\x04m2\u00A5\u00F0N3>\x1F\u00DA\u009Cs\u00E1p&\u00C0\x19\u0097\n\u0089\u00B1\u00CD\u00BB\u008F\u0086/xX-\x1D\u00E0*\u00B6\u00C2l\u00E7\u00E3n\u00EE\x12\u009B\x1D\u00D0\u00DD\x01\u0092\u00F3\u00E9-\u00CF\u00B1R(tS!5\x1F\x10\u00EF\u00B1\u00D31~\u00D6,okn\u0081B\x1B\u0087\u00E4)\u00D1\u00FC\u00B3j\x13_ \u0096s\u00A0\u00B5b\x0F\u00BE-6B\u00C7\x18qH\x12\u0083\u00A99\u00C9\u00D0Z-pI\u00A2`lnBs\u0097\x15V\x1B\u008B\u0098\x18\u00A0\u00DD\u00C6aJZ62\u00D3\u00D3 gH\u00D0\t\u0082\b\u00A3m\u00D4\u00EB\u00F5\x0F\u0085#\u00A0\u0098\u0098\u0098\x10\u00AD\u00BC\x02\u00FA\x18\r:;:`4\u009A\u00E0\x12<\u00A8\u00C1\x00\u0093\u00D9\f\u00A5V\x07\u0095\u00D0y\u008E\u00FFWp\u00A9v^\u00F8\u00A4\x1A\u00AD\u00B7\x1D3\"3\u00FB\u00B6\u00B6\u0090\u00D2C\u00ABR\u00C2\u00D4\u00D5\t\u008B\u00D5\x0E\u0095\u00B6\u00E7\u00DA\u00A4*=\u00B4\u00BC\u0086\u00B7\u00B6\u00B5\u00C3h\u00B6#69\x05j>-:\u00DBy\x07h\u00B2\u00C2bs!)5\x19r\u00A9\u008C\u00D7K\x1B\u00DAL\x1CtZ%\u00980\u00C5]\x13\u009D\t\u00BB:\u00B7\u00D7\u00EF*\u0097\x11\u00F2\u00D6\u00BD@\u00DC*\u00B8\u00D4\u00A9\u0088\u00D5\u00D7@j\u00B4\u00C0\u0091\u00B0\x18\u008C\u00A4\u00E7\u00CC2}>\u0094\\1\u00A4\x1D\u0087\x00[+$QY\u00D0H\u00F9\u00C2\u0088<\x01R\t\x0BF\u00E9N\x13)/dru&\x14R\x07\\-;\x10\u00C59\u00C1\u00C4\u00CC\x01'SF\u00C4\u00BDt5n\u00F4\u00FE\u009D\u0095\u0095\u00D5\u00BB\u00D6\u00A2\u00AD\x01\u00D5u\u008Dh7\u00BA\u0090\u0091\u0095\x03\u00AE\u00B3\x06\u00E5-6pR\x03\u00E6/Z\u0082\u00C4\u00F8\x18\u00C4\u009A\x1AQ\u00D3jBB\u00FA\x14\u00C4\x18\u00A2\u0090\x10\u00A7BMM-\u00BA\u00AC\x1C\u00F2\u00E6\u00CCA\x1C\u00BAP\u00D3\u00D0\u0082.\u00A7\x12\t\u00FC;@\x10\x04\x11\x0E\u00E2bc+\u0098\u00F4\u008C\u008C\u00B0X\u0085\u009C\u009C\u009CI\u009D\u0098\u00A5\u00A5\u00A5#\u009A\x1Eu\u0095UH\u00CAH\x1F\u0091\u00AA\x15\u00DF\u00B8\u00C7\u00A5\u00AE\u00841v\u00CD\u00A4\u00BE\u0097\u00B6\x03\u00BF\u00F6\u00FE}\u00E2\u0089'\x0E\u00B8o\u00CB\u00C1\u00CF\u00D1\x14\u00BB\n\u00D3\u0093I\u009C\t\u0082\x18[\u00F2rs7\u0085M#\u009CN\u00C7\u00A4MH\u00CEO\x158\x17\u00E6jqmT\u00D4\u0088\u00C4\u00BD\u00EF}s\u00B9\u00D8I\u00FDR\u00D8l\u00F6>\u00DF\x07\x1EN\u00A9\u008A\u00CBCR\u0094\f\x04A\x10\u0091@\u00D8r\u00A3\u00BA\u00DA:\u00E8x\u00E1a\x18f\u00D2%\u00A2\u00CD\u00DA\u00BF\u0083Xcc\x13\u0094*U\u00F8N\u00C2'kg{{x\x0B#\x1C\x07cWW\u00AFm\u009D\u00CD{!t}\u0093J'_\u0097l\u00A1@co;\u00DC\u00AB\u00DB\u00DA\u00DE\u00BD{\x11\x1F\x1F\x0F\u0099\u00CF\u00C8\u008D\u00DE\u00F0\u00DB\u00AD\u00B5|\u00BAQfB\x10\u00C4\u00D8\u00A2\u00E55'l\u00D5\u00EF\x04A\x10\x04A\u008C\x1D\x05\u00F3\u00E6n\u00A2\x11\u00B2\x04A\x10\x041A Q'\b\u0082 \b\x12u\u0082 \b\u0082 H\u00D4\t\u0082 \b\u0082 Q'\b\u0082 \b\u0082D\u009D \b\u0082 &4\u00BD\u00C6\u00A9\u00AFNL\u00C6\u00B9\u009C\u009ER\u0085\u0088(>d:\u00B0\u00A1\u00B1\u008E\x12\u0082 \b\u0082\u009C:A\x10\x04ALB\u00A7\u00EE\u00A1Bf\u00C7{&\u009A\"\u008B\x18[\u00CE\u00D7\u00C6#\u00D3\u00A9\u00A0\u0084 \b\u0082\x18\u008E\u00A8\u009B\x19\x16\u00A5\u009D\u009D\u0090\u00CBd\u00E2\u00B4\u00AF\u00BE+q\x11\u00C4H\u00D1w\u00DEu\u00B3.\u0096\x12\u0085 \bb\u00B8\u00A2.\u00FE \u0093\u00C2b\u00B1\u00F0\x1F+8\u00D0L\u00B2\u00C4\u00C8\"\u0097\u00CB\u00A1\u008F\u008E\u0086\u00DD\u00E1\u00A0\u00C4 \b\u0082\b\u00B7\u00A8\u008BN\u0089\x17u\u0082\x18\r\x1C\u00BC\u0098S\u008D\x10A\x10\u00C4\b\u008A\u00FA@\u00C4M?\x13I\u00C7]\x06\u0097\u0093E\u00D9\u0096W`/\u00DF@\u00A9I\x10\x04A\x10c\u00C8\u0090z\u00BF\u00C7O?\x1B\u00EA\u00A8X\x1Cy\u00F3:T~|\x1B\u0092bc\u0090\u00BC\u00FAA\u00C8\u00A4\u00CAA\u008F\u008D\u00C9\u0098\u008BSV\u009F\u008C\u00C5\u00F9\u00A9\u00E2wyT\x12\x16,^\u0081\u00EC\u00F4)t7&0R\u0089\x04\u0099\u0099\x19\u00BD\u00B6\u00C5\u00C6\u00C6\u008A\u00FD6\b\u0082\u0098\u0098hcSq\u00FA\x19\u00A7\"=N\rmR\x0EV\u009Cx*\u0096\u00E4gP\u00C2D\u009A\u00A8OY|)\u00EAv\u00BF\x05\u0087\u00DD\f\u008B\u00B1\x19U\u00BB\u00DFF\x1B\u00ABGT\u00D2\u00B4\x01\u008F\u00D3\u00ABO\u00C2\u00DD\u00F7]\x0Bt9\u00F1\u00B3\u00BB\u00EE\u00C7qiSq\u00D3\u00FDw\u00E2\u00E2\x0B/\u00C5\u00B4\u00EC\x14\u00BA\x1B\x13\u0098\u00B4\u00F44\u00DCy\u00C7\u009DX\u00BF~\u00BDw\u00DB\u0095W\\\u0081\u0085\x0B\x17R\u00E2\x10\u00C4\x04E\u00A9\u0089B\u00DE\u00B4|\u00C4hSq\u00E1Eg\u00A1`N\x06jk\u00AA\u00C5\u00DF\f\x06-%\u00D0\b\x10\u00B2M\u00920\x128],d\n5\\\u0096\u009E\u00DE\u00CAj)\x0B\u008Eu\rxl\u00C1u\u00BC\u00C3?\u00FA9\u00BE\u00D9\u00F6=\u008C\u00F3N\u0087>S\u0083\u00A7\u00EF\u00BD\x0B\u0099\x17=\u008C|jN\u009D\u00D0TTT\u00E2\u00B9\u00E7\u009F\u00C7\u00EASN\u00C1\u0085\x17\u00ACGjj\x1A\u008E\x1D;\u0086m\u00DB\u00B7S\u00E2\x10\u00C4\x04g\u00E1\u00CA%\u0090\u00D5\x17\u00E3\u00B3\u00EF\u00B7\u00C0\x1A3\r?\u00BFb5\u00EC\u009D\x1DPKL\u00D8\u00B6\u00F9\x10\x16\u00ACY\u0081]o\u00BD\x00\u00E9\u00CCs\u00B0,\u00BD\r\x1Fosb\u00D9l9\u00DE\u00FEx\x13%^\bX,\u0096\u00F6\u0090\u009D\u00BAD*G\u0097\u00D1\u008A\u00C4\u00FC\u0093\u00BC\u00DB\u00E4\u00F3\u00AFE\u00B4.\x0E\x1D\u00F5\u0087\x06<6%I\x01S}\u0083\u00F8w\x07\u00EF\u00D6%\u00DDU\u00AFji\u008F\u00A2_|\u00DD-\u00B8\u00F3\u00AE\u00DB\u00F0\u00B3%\u0099t\u0087&\x18\u0085\u0085\u0085x\u00FA\u00CF\x7F\u00C6\u00FCy\u00F3\u00A1P*\u00F1\u00F1'\u009FP\u00A2\x10\u00C4$ :.\x16vS\x0B\u008E4\u0098\u0090\u0094\u009C\x0B\u00AD\\\x02\u0095F\x07UL\x1Af\u00A6t\u00E1h\u0095\x19\u008B\u008F\u009F\u0087iS\u0093Q\u00F8\u00E3\u00F7\u00A8\u00AA\u00AFEm]\x03%\\\u0088\x14\x1D>\u00B27$\u00A7.\u0091\u00C8\u00A0[\u00F3\x17$\u00C5\u00EA`\u00D4\u00AC\u0087R7\x17J\u00A5\x1C\x06C\x1A\u00AA>\u00BF{\u00D0\u00A1o\ru\x0E,\u009F6\u009D\u00FFk/\u009F\u00A9sp\u00F9\x19\u00BEd\u00EChC\x07d\u00E8\u00B0\x19\u00E9\x0EM@<\u00D5\u00EF\u00E9ii\u0098={\u00B6(\u00F4\x04ALlj+*\u00912u\x05\u00AE8\u00CD\u0089\u00FD\u009DJ0\u008E.\u0094\x1F\u00A9\u0080K\u00C2\u00A0\u00BD\u00AC\x05\u00A6\u00F8*,\\u<\u00B4\u00D66|R\u00C5\u0081a\u00CA\u00B1y'\u00A5\u00DBP\bZ\u00D4\x19F\u008A\u00DCU\u00B7\u0082\u00D1\u00AB\u00D1\u00BC\u00EBu\u00D4\x1F\u00FA\x06Q\u0089S\u00E1r9\u00F8R\u00D5!p\x1C;h\x18{?y\x1D\u00D3\u00AF8\x0F\x17\u00AF9\x0B\u00F3\u00F2\u008Cx\u00F5;3NZ\u00BD\x1Ai)j\x18\u00A2f\u00A2\u00AB\u00B1\x01\u009F\u00BE\u00F5\x1A\u00DD\u0095\t\u0088\u00D0)NhC\x17\u00F8\u00EB\u00B3\u00CF\"..N\u00AC\u008A\u00EF\u00EA\u00EA\x14\u00AB\u00E6\t\u0082\u0098\u00B8\x14\u00EF\u00DA\u0081\u00A2\x06\x16+\x16\u009D\u0084\u00D9u\u00E50K\u00A2\u0090\u0094\u0094\x00\u0089\u009AA\u00DBn\x0Bjm\u00D5p`\x1E\u009A\u008F\x1C\u0081\u0085a\u00A0\u009Dq\x1A\u00AE(P\u00E2\x1F\u00AF}D\u00897R\u00A2.\u008D\u00CB\x07\u00934\x1Fe\u00EF\u00FD\x12\x0E\u00BB\u00DBE\u00B7T\u00EF\x0B\u00E9dM\u00E5;\u00F1\u00CC\u00EFv\"cj&\u00DE\u00FC\u00FASq\u00DB\u00A1\u00F2c\u00C0\x06\x1A\x0E7\u00D1\u00E9\u00EA\u00EA\u00C2\u0096-[\u00BCm\u00E8uuu\u00A2\u00A0764Q\u00E2\x10\u00C4\x04\u00A5\u00B5\u00FA\x10\u00FE\u00F2\u0097\u00EEf\u00D9\u00EAZ\x14m\u00ED\u00F9-\u0086/\u00D8\u00B7\u00B5\u00B4\u00B8\x0B\u00FDir\u00C8\u00F9\x7F\x0FW\u00D7\u0088\u00DFM\u00C5_\u00E2\u00F5J\x15%\u00E0H\u008A\u00BA\u00B3\u00B9\b\u00E5\x1F\u00FD\u00CA+\u00E8\u00C3\u00A1\u00F2h\x05\u00A5\u00FC$C\u0098\\\u00A6o\u00A78r\u00E8\x041y\u00F1\b\u00BA(\u00F0\u00D11\u00A8//DYY\u00CFj\u008C\u009D&+%R8E\u009D\u00E3\u0084\u009E\u00EE\fX\u00AE\u00A7\u009D\u00DCnn\u00A5\x14#F\x04\x064\u00FC\u0081 &+\u00C7x\x0B\x7F\u00AC\u0088\u00D2!\x1C\x04\u00EE\u00FD\u00CE\u008B\u00B9^\u00AF\x17\u0085\u009D F\x1A\u00B5\u009A\u00AA\u00DA\b\u0082 F\u00CC\u00A9\u00BBXV\\\u00D4\u00C5\x10c\u00A0T\"F\x1C\u008E\u00E5\u00FA\u00AD\u00D2F\x10\x04A\u0084I\u00D4\x05\u009CN\x17\u00A5\x10A\x10\x04A\u008C\x13$\u0094\x04\x04A\x10\x04A\u00A2N\x10\x04A\x10D\x04\u00E1\u00B7\u00FA]\u00C3I\u0090\x13\x1DM\u00A9C\u008C)\u00C2sH\x10\x04A\fS\u00D43\u009D\n\u00DC\u00A6\u00A4U\u00D3\u00881\u00C6\u00E9\u00FE'V*\u00A3B&1,\u00EA\u00CCfX\u009CNJ\bbr\u008A:AD\x12+\u009DZ\u00ACT\u00D22\u008D\u00C4\u00D0y\n\u00B5(\u00ED\u00EC\u00A4\u0084 &\u0097\u00A8oh\u00AC\u00C3\x06\u00D4Q\u00AA\x10\u00C3\u00E2\u0097)Y\u0098\u00E1\u00A0q\u00E7\x04A\u00FC\x7F\u00F6\u00CE\x030\u008A\u00E2m\u00E3\u00CF\u00B5\u00F4^.\u00BDw \tI(!\u0084\x04\u00A4H\x07\x01A\u009A\u0080\"R\x14\x0B\u0088JG\u00C0?bE\x04\x14\u00F4\u00A3H\x11AQ\u0094\u00DE{\x02\u00E9!\u00BD\u00F7\u00DE/\u00B9\u00B4\u00BB\u00FBv\u00F6rG\x12\x12\u008A\n\ta~z\u00E4vwfv\u00E6\u00DD\u00B9}\u00E6\u009D\u009D\u009D\u00A1<m\u00E8CK\n\u0085B\u00A1P\u00A8\u00A8S(\x14\n\u0085B\u00A1\u00A2N\u00A1P(\x14\n\u0085\u008A:\u0085B\u00A1P(\u0094\u00B6\u00A1\u00A3\u00DF)O\x15-\x1Fk\b\x07\x07@\u00DF\u00A7\x1F\u00BB-J\u00B8\u008B\u009C?O@\x14J\u0097a\u00A5P(\x14\u00EA\u00A9S\u009E\x19x:*\u00E8\u00FE\u00C9Fh\u0098\u0099#\u00FF\u00E4\x1F(\u00BCr\x0EZ.=\u00D8}D\u00EC)\x14\n\u0085\u00F2\u00F84_L\u0095z\u00EA\u0094\u00A7\u0086\u00A4\u00B2\x1E1\u00ABW\u00B4\u00F0\u00CA\u00CB\u0082\u00C3XQ'\u00DE\u00BB(t?5\x12\u0085B\u00A1\u00FC\x0B\x1EK\u00D4\u008DLm`cc\x01mU>D\u00A5\u00B9\b\u00B9\u009B\u00FC\u00D43\u00AC\u00A2e\u008Ei3\u00C6\u00E2\u00D6\u00F1\u0083H\u00C8\u00A5\u0093I<k\u00B4\u00EEfWlk9\u00BAP\u00E3P(]\x1EMxz\u00BB\u00A0<1\x02\x19\")\u00F8*&\u00E8\u00E6n\u0081\u00CA\u009C,\u00A4\u00E7\x17\u00B5\x1B\u00AB\u00D7\u00F89\u00F0\u00E2\u00C4\u00E2bl\x03L\u00A4)H\u00AA5\u00C3\u00F8\u00D1\u0081\x10\u00E5f\u00A0\u00A8(\x1F\u00E7oFP\u00D36\u00F1\u00C8\u00DD\u00EF2\u00A9\r\u00C6M\x1A\x053\u00AE\bq\u00F1q\u00A8\u00A9\u00EF\u0098\u00B5\u00AF9\\>\u00D4\x05\x02\u00F0\u00B8<z\u00F5\u00BA\x00\u00AA\u0096\u00F2\u00E9_\u00EB\u00F2s\u009F\u00CB\u00F2k\u00B8\t\u00D1\u00F7\u00C4\u00CF\u00CFL\u00BAO#o\u00E4\x18\tC\u00E9\u0082\u00C84\u00E0\u00ED\u00E7\u008F\u00C0>\u00F6\u00EC\u00A6\u0081w\x00\x06\u00F6\u00EF\x0F;3\u00C3\x07F\x13\u00A8\u00A8AU\u0095\u008B\u00B2\u00B2ldf\u0095\u00C3\u00D0H\u0088\u009A\u0088_p\u00E8\u00CF\u00D3\u0088I\u00CE\u00A2v\u00FD'\u009E\u00BA\u00D7\u00D8\u00A1\u00C8\b\u00BE\u0088\u00F3w\u00E2\u00D9\u00ED\u0092r\x1D\u00F4\x1B>\x05\u0096*5\u00E0\u00EB\u009B\u0082_\u009E\u0088\u00E8\u00B4r\f\u00F0\u00F7AvV\x19L\f5P-\u0091@T%\u0083\u00B6,\x1DA\u0089b\u00BC8\u00A8\x17\u00F2\u00D32!\u00D07\x03\u008F\u00D7\u00A0<\u00F6\u00FB\u009F\u00C1\u00F0\x19\u00FC\"$\x12\x01\u00AC4\u00CBq\u00E8L.\u00A6\u00CC\x1D\x0EN^6d\x06\x16\u00C8\f>\u008D\\\u0099\t|\u00FB\u00B8\u00A1\u00B6\u00A8\x04<\x0ES78\u00F4\u00E2u\x05\u008C\x06\u00F7e\u00FF\x16\\\u00B8\u00D8\u00E6\u00CD\u00BD5\x11o.B]\u00F6\u00BF\u00EB\u00A1!\u00CF\u00EF-\u00C6\u008D\u0082@[\x1BI_~\x0F\u009E\u00B6\x1A\u00DC\u00D6\u00AEa\u008F%l\u00FE\u008C\u00ED= \u008D\r\u00DBy\u00D3\u00A1\u00E7\u00E3\u0087\u00E0Q3\u00DB\u00CC[\u00F4\u00D2%\u00A8\u00CB)\u0087\u00DB\u00BAwQ\u0091\u0094\u0088\u00AC\u00ED\x7F<~\u00ABZ\u00E3\u00C9\u00CC\u00BC\u00D7<]\u0093I~\u00D0\u00F3\u00F0d\u00CB\u00A2\u00B0\u009F\u00CF\u00E1m\u00CA\u00B2>uO\u00E2\x11\u00CA\u00FC\u00A4\u00ECB\u00E9X8ZF\x10\x15\u0096\u00C1\u00D4\u00B5\x1F\u00CC\u0082\u00CB0\u00C8K\u0088\u00EC\u0098\f\u00E8\u00AA\t`\u00D3s(\u00FA;\u00AA\u00A3B\u00AA\x0B\x0BM\x11.\\\r\u0085\u00A3\u00F7\x00h\u00D6\u0095AU\u0097\x0F)\u00F3\u00B376s\u0081\u0087\x1D\x1F\u00C5&V\u00D0\u00D11\u0084\x7F]\x16l]-p\u00EAf\x06\u0086xY!\u00ABR\x05\u00DDm\u00F8\u0088\u0089I\u0087W\u00CF\x1E(\u00CCftIl\u008AAN\u00AAHN\u00CCAA\u00D8%DUPO]\u00DE\u00BA\u00D6RE\u0099\u00B8N\u00B9\u00ADcj\u0081\u00DEN\u00EA\u00B8\u00FA\u00D7_8\u00B4\u00F7:x\u00D6\x1E\u00B017\u0084\u00AC(\n\u00C7O\\E\u00B5\u00B6\x01\u00EA\u00E2N\u00E1\u00D2\u009DH\u00E8Y\u00DBB\u0083\u00CBe\u008F\x1D9u\x1E\x11q\u00F9-\u008Ei\u00CAd(\x16q\u00E0\u00E6d\x06C!\u00D3Bo\u00A8\u0082\u008C\u00C7C\u00E4\u009D\u008B8p=\x15\x16\u00A6\u00DD1dHopSO\u00E2\u00D4\u00E5p4\u0090\u00CA!\u00A3?\u0090\u00AE\u00E0\u00A5ZN~\x15\u00E5\u00A17Q~%\u00E1\u00BE\u00E3DL\x15\u0082J\u009E\u00C5\u0093\u00EF\u00FFV\u00D0\tD\u00D0\x1BDUP5\u00B7a\u00D3\u00B3\u009F7\x1B\x19{\x7FD\u00CA\u00F6oa\u00FF\u00E6\x1Br\u00CF\u00C0D\x0F5\u00F9y\x0F\x15\x1E\u009B\u00F9\u0093\u0099\u00EAZ\u00F5\u008F\x04\u00FDiA\x04\u009D\u0094\u00A5:1Zi?\"\u00E8\u00E2\u00A4|Z\t)O\x15)_\x17\r\u00B9\u0099\u00C8\u00E3\u00E8\u00A1G_\x0F\x18#\u009D\x11\u00E4\\\u00F0\u00B4l1,\u00C0\x15\x11AWp\u00E2\u00F7\u009Fq\u00B7\u00C1\x1C>\u00FDz\u00C3E\u00A7\x00\u00BF\u009F<\u0089\u0094\u00CAFp9\u00A4\u00A7\u0096\x03>\u00A3%\u00B9YY(O\u00B9\u0089k!\u0089\u008C\x17\u00CF\u0087K\u009F>\u00D0\x13\u009A\u00C1\u00C5Z\x07\u00AA\u009A\u00CC}\u00C5\u00CE\x02\u009C\u008AX\x1C9q\r*\u00EA\u00DA\x10\u00A8\u00EA\u0083W\u0099\u00D1\u00E5\x05\u00FD\u00B1<\u00F5\u00BCB\u00A6u\u00AF\u00AB\u008D\u00D0\u00B6zTX\u0099%J\u00CB|x\x02H\u00A4\u00B5\x10K\u0099\x1B\u00A3@\u009B\u00F1\u00AA\u009B\u00B9\u00D4\u00CC1\u0082\x04u\u00CC\u00D7f\u00C74\u00BC\u00E1\u00D7\u00DD\x00\u00A1\u0097\u00AF\u00A3\x1B\u00E3\u008D+o\u009ALx^a\x05d\u00D6\u00C6\u00EC\x05\u0095\u00D2E\u0096\u00BA\f\u00C4\x13&\u00DE\u00B18'\x1D\u00C9_\u00FC\u00F4\u00C8\u00F1\u0088\u0087I\x04\u00B8\u00F8d8\u00EC\u0097\u00CD`\u00F7\x19\x07\u00BE\u0088\u00A2+g\u00D8\u00BF\u008D\u00A2J\u00A5\x07J<r\"\u00D2\x02]\x03e\x1C\x02\x11\u00F4\u00EA\u00D4T\u00F6CF\u00E4k:\u00BB\u00A3\u008A\u00F1\u00D8\x1B+k\u00A1\u00BE\u00CC\u0096\u00DD\u00A7\u00F0`\u00CDGMl7/dp\x1F\x19\u00C9\x1F\u00B7\u00E6\u009B\x16\u00BD\x00.\u00CB>T\n'\tCH\u00DD\u00BC\x1FF#\u00BD`3k.B\u00A7,\u00BA/\u00AD\x1E_/c\u00F3\u0091\u00B2\u00ED+6\u009F\u00A4\u00C1\u00E3\u00F8\u00DE\u00DBP\u00B7\u00B0e\u00C58u\u00E7\x1Ehww\u0084\u00ED\u009C\x05l\u00F8\u00F4\u00DD;Pp\u00F4&\x1B\u00CE\u00FD\u008B/Y;\u0092G\x18\u00AA\u00A6\u00E6l\x1C\u00B2\u00AD\u0080\b:\x19\u0090H>\n\u00C8\u00E0D\u00D2\u00D3\x00\x0B\u00B0\u00F1\u00C99\u009A\u009F_\u0081\u00D5\u00C2\u00F1\u00AC\r\u00C8\u00F1\u00BB\u00EFmn\u00D3\u00A6\x16\u00B3\u0086\u00B2\u008D3\u0082\">\u00E9\u00C9 \u008D5b\u00EB\u00FC\u00BF\u00CE\u00B6(K\u00FA\u00FE_\u00DA,sslg\u00BC\x02\u00CDO\u00DC\u00D9\u00EBI\x1A[\u00A4\u00D1\u00D7\u0096M\u00AC\u00A6Nd\u00CB\u0097\u00BB\u00FF$z\u00EE\u00FA\u00BA\u00C5u\u00A6tNT$\x15\u0088I\x17\u00C3\u00CF\u00C9\x11\u0095\t\u00E7!\u0086\tssg\u00FE\u0097\u00DD',\u00CC\u008FU\u00DC\u00B6\u00C7\u00AF\u00F8\u00CBQm\n\u00CACNj,rK\u00AA\u00D0\u00D8\u00D8\b\x15\rM\bm\u00E5a\u00A2N\u00FC\x1F*{\u00BF\u0080!\u00BDG \u00B0`\x1B\u00AEdSO\u009D%+\u00E8<*\f\u00DD0m\u00C2(\f\x0E\b\u0080\u00A7\u0095>\u00E2r\u00A4\x180|\x18&\u00CE\x18\bn^,\u00B2\x0B\u00CA\u00EF\x19\u00BD\u0099\u0096\x13\u00AFZ\u00D6\u00C6\x05Q\x1C\x13\u00A0\x18\u00D5\u00E2\x06pu\u00D4\u00C1\u0093J\u00E4\x17\u00A9y[@\u0092\u008F+!\u00E9\u00D0\u00EE9\x16C\u00FD\u00BA1\u00E1%L\u00C3AB\x7F\x1D\u00CF\u00B0\u00A0\u00F7\u00F8\u00F2\x7Fr\u00E1\u00FB\u00E4svT\u00FC\u00A3B^\u00853\u00F4\u00F5e\u00BF\u0093w\u00DD\x0B/\\e\u00BF\x13\u0081&\u009E<\u00B9\u00A9\x13\u00C1\"\x10qM\u00FDa\x17\u00EE.\u00F9\x18\x0E\u008B\u00DEW\u00A6A\x04\u0096\b\"\u00F9\u00A8;\u0099\u00B2\u00FB\u0088\x07\u00AB\u00C8\u0087b\u00DF\u00C3 \u008D\b\u00E2\u00A57\u00CF?9'\x11s\u0085\u00D7O\u00F2G\u00C2\u0091\u0086\x02\u00C97\u00C9\x7F[\x10\u00A1#\u00BD\x11\u008A|\u0092\x06O\u00EE\x1F\u00BF\u00B3e*\u00BAq\u009D\x15\u00B3\u00F2\u00A0\u00BB\u00EC6\u00E9B'\u00E2N\u00D2TtS\x17\u009C=\u00C5\n:\u00F9K\u00C2\u0090\u00B8\u00CA\u00DF\u00EE\u00F6?\u00D8FJ\u00EB\u00AEv\x12W\x11\u009F\bd\u00C2\u00E6\r-\u00ECD\u00AE\x13\x11tr>E\u00C3\u00A5-\u009B\x16_\bf\u00CF\u00D9:\u00BE(%\x199\x07\u008F\u00B7(\x0Bi\x18(\u00AFC\x1B\u00E7T@\u00CA\u00AC\u00B8\u009E.\u00CBV\u00B6k\x13\u00D2 \x14\x06\x0E\u0085\u00E3\u00D2\u00D7Q\x16z\u008B\nz'G\u00CF^\u0088\x1A\u00C6;\u008B\u00BFq\x1B\\n#.\u00DEL\u0087L\u0085\x11zn\t\u00AE\u0085\u00A6\u00A3g\u00DF\x00\f\x19\u00F9\nzh\x16#:$\n\x05*\u00EE\x18=\u00F8\x058\u00E8\u00F0Q_\u00DF\u00B6W'\u0093\u00C9\u0090\x1A\x1A\x0E=#!T\x04j0\u00B72\u0087J}m\u0093\u00D6\u00A8a\u00C8\u0084\u0097\u00D1\u009DW\u008E\u00D2\u00E2\n4H\u00B5\u00A9\u00A7\u00AE\u00A0\u00B1&\x0F\u00E7\u008E\x1Ff\u00EEx\u00BA0\u00D1VAEE\x19j\u00EBnBKS\x0F<\u00D1\x19T4\u00A9xh\u00933p\u00E4\u00BB\u00AD\u00CA\u00B8[\u00BE\u008Bc\u00FFF\u00C6\u00C8\u00B7\u00E3\u00C3\u00AF\"\u00BE\u00D5\u00B1CG\u008B \u00D4\u00D7FdH(\u00DB\"P\u00C4\u00E7 \b\u00BF^\u0096\u0087M\u00BC\u00C9T\n==\u009C8\x7F\u0086\u00FE:\u00BA\u0080\u00A0\x13ah\u00AB;\u009Dx\u00B45i9\u00A8\u0089+\u00BC\u00EF\x18\x11\x10\u00E2\x15\x1A\u008D\f\u0092\x0BG\u0093PU\u00A7\u00C9\u009B\u00DF\u00E4\u00A6\u00EE\u00B0H\u00FE\x1C\u0099\u00AF\u00A5\u00A3\x14x\u00E2\u00F1\x11O\u00AFu\u009A\u008A.h\"\u0090\u00AD\u00F7\u00B5F\u00F1\u008C\u009Fx\u00A0\x04\"\u00C2D\u00B8\u00C9\u00B9\x14^s\u00EBs\u0092\u00FC\x11\u00AFY\u00DF\u00BF;\u00FBL;}\u00E7\u0081\x16\u00E9\u0090\u0089w\u009A\u0097C\u00E1\u00ED\u0093t\x14\x02E\u00CAF\u00BCSu\x073\u00B8\u00AC\u00FE\u0080\u00FD\u00DE\u00BA\u00F1A\u00CEO\u0084^a\u0087\u00DA\u0082\u0092\u00C7\u00BA.\u00C4.\u00AD\u009Fc\u0093kCz\x04z\u00FE\u00B0\r\u00B9'~C\u00C9\u00A5\u009Bm\u00DAT\u00C3\u00CE\u0082\u00C9\u00D7\x04e\u00BE\x14T\u00DCM`\x1Fc4/\u00CB\u00C3\u00CE\u00A9\u00A0\u00F5\u00F5l\u00CF&\u00A4AE\x1AJ\u00A4N\u0090\u00C6\x07\u00A5sS\x11~\x1C\x7F7}\u00FFaG\u0094\u00FC\x1E_\x1B\u0084C\u00E7\u009A\x1A\u00A0jZ\u00D0Vm\u00C4\u00F9\n\u00B9(\u00C7\u00A5$A\u008D\u00D1\x18\u00D5\x1B\x17PQ+\u00D7\x18\u00B9vd\u00CB\u00FF2\u00BB\u00F6\u00EC\u00957`\x0F\u00E7\u0084\u00C3@W\r\u0095A\u00E5\x103\x1Ar\u00B3I\u008B\u00CE\u00FF~\x04\x1A\u00BABp\u00C3\u00A3 \u00AA\u00EB\u00FA\u00DD\u00BD\u008F\u00FF\u009E\u00BA\u00B8\x02\x05\u00CDzDD\u00D5\u00E5-\u00DD\u00F2\x7F\u0088\u00AC\u00A1\x16\x05\u0085\u00B5\x0FM\u00AB\u00BC\u00BC\u009C\u00FE2\u009EqA'7g\u00D2]\u00AE\u00E7\u00DB\u00A3\u00A5`\u009F\r\u0081\u00B6\u0097\x1D\u00EB\u00B9\x11\u00C1h\u00AB\u009B\u009A\b\r\x11C\x12&\u00FB\u00D7}\u00CA\u00FDj&\u0086\x10!\u0093m\x104\x179\u00C5{\u00F1D\u00B4\u00DB\u00EA\x11 \u00FBHW.\x11\u00DD\u00C6\u00EA\x1AV\u0080\u00DB\u00EB9h>`\u00AE\u00EF\t?\u00B9\u00B7\u00C9x\u00ADD\u00E4\u0088\x17\u00ADh04?\u00A7\u00C2\u008B&\u00F9U<\u00D3n\u009E\u008Eb\u00D2\x1D\"\u008E\n\u0081#qI\u00F9IY\u0088\u0088i\u00DAY\u00B2q\u0089\u00C7J\u00D2n((g\u0085\u00F6\u00BE\u009F&\u0093w\x12\u0096\u00C4'\u00F6\u00F8/ \u00D7\u00A4\u00F8\u00EC\u00EB\u00E8u\u00E8'V\u00D4[\u0097\u008F\u00AF\u00A3\u00C6\u0096\u008D\b*\x11p\u0085\u00E0+\u00EF\x0F\u00AD\u00CA\u00F2\u00A8\u00B4\u00BE\u009E\u00ED\u00D9\u0084\u00D4)\"\u00E8\u00A4>\u0091\u0081\u008D\t\u00ABw\u00D0\x1F\u00DA3\u008C\u00B8V\u00C4|Z\u00EE\u00ABe4\u00A6\x16\x0F\u00D7\u0098\u0086\u00DA:\x140\u009F\u00B64\u00A4\u00A6\u00A2\u00F0\u00B9\u00B1!\u009D|\u0086\u00F2\u00F4\u00BA\u00DE\x18\x11'\u0082N ]\u00D2\u00C6\u0081\u00AD\x1AlA\u008B N\u00C9c\u00C5I\u0094\u00DCr\u00E0\u009C\u00B4\u00E6\u00DE/\u009D\u008C\u0094'^/\u00F1\u00DA\x15\u0098\u008F\u009F\u00A0l\f\x10\u00D1i\u00EEI\x13\u008F\u008E4\x04\u00DA\u00BB\u00E1\u0093n`\u00C5\u00E8\u00F7\u00B8\u00B5\u00EB\u00DA<g[\u0090\u00E3D\u00C8I\u00E3\u0082x\u00D0Q\u00F3V\u00B1\u00E7$]\u00D4\u00A4\u009C\u00C4\u00BB%]\u00DFD\x18m\u00E7\x00\u00F9\u00E7\u00CE\u00B5\u0099\x06\u0081t%\u0093\u00E7\u00D4\u008A\u00BC\u0093.|\u0092wEc\u0080\u008C\u00D2\x17\u008E}\u0081\x15M\u00B2\u00DDV\u00FE\u0092\u00BF\u00DE\u00CA\u0096\u00834f\x14\u00BD\t\x0F\u00CB\u00FF\u0083\u00B6IC\u0083\u00A4\u00A7(\x0B)k[6%\u0082J\x1A\x19\u00AD\u00CF\u00A9H\u00AFuY\u0088\u00BD\x1Ffc\u00F2\u00A8\u00A2\u00F5\u00F5l\u00CB&NK\u00E6\u00B3\u00F6\u00CF\u00D9{\u008E\x1Do\u00A1\u00E85\u00A1P\u009E'd\u00CD\u009Eos\u00AC\u00AC\u00AD\u00E98r\u00CA\x7F\u00CABs[\u00B85<\u00B9W\u0092\u00C8\u00E0-\u0081\u0096\x16\u00FBl\\\u00EE5\u00FF|\u00DFLu\u009D\u00AA1\x13\u00E8\x02\u0087\u0085\u008B\u00DB\u00ECy\u00A0<\x1D\u00BE\u00AE\u00CBEj%\u009D\u00AC\u008A\u00D2\u00E5Y\u00F7\x00O\u009D\x0BS\u00A7\x00\b\x04\u00BC\u00FF\u00A2w\u009D\u00F2\x1C\u00A1!.!}aOL\u00D0\u00F5{\u00FA f\u00E9\u00FA\x07z\u0099\u009D\x05\u00D2]L<K\u0085\u00B7I\u00E9\x18\u00CC\u00AC\u00BD\u00D0(\u00A3\x1D\u0093\u00FF5\u0095E\u00E9(/Ly\u0080\x07)\x03\u008F\u00CB\x05\u0087|\u00A8\u008E<\x15\u00DA\u00F5\u00D4\u00AD\u00BB\x0FF\u009A\u00F6\x0B\u00A8\u00BF\u00BC\x14\x1C\u00A9\u0094Z\u008A\u00F2\u00C8\u00BC\u00E7\u00E0\u008An\u008D\u00EAO$m\u00F2\f\u0095\u00BCz\u00F68#\u00E6;\x12\u00C5s\u00E7\u00FF\u00E2\u00FDz\u00CA?\u00E7\u00F3\u00EAL$\x16\u0097PC\u00FC\u0087\u00C8\x18\u00A1\u00D6\x1B\u00B6\x05uW\u0097\u00B5\x1B\u0086\u00CF\u00E7A*\u0091\u00A2\u00A6\u00BA\u0086\x1A\u00AC\u00E3=u\u00C6\u00D9\u00BA\u00B4\x04\x1C\x19\u00ED\u009D\u00A7t\x1E\u009E5q$\u008D\u008Fg\u00A5\x01B\u00A1<\u0096G\u00C88{F\u0085'\u0091\u00F3\u0090pT\u00D0\u009F.\x0F~O\u00BD\u0093\bzw\u00DF\x00lZ2\u009A\u00FD\u00EE\u00ED\u00E1\u00F0Xq=|z\u00D2\u00ABL\u00A1P(\x14*\u00EAO\u008A7\u0097\x7F\u008Bu\u00AF\u00B8=rx\u0081\u009A\x1A\u00AC\u00CD\r\u00A1\u00A31\x18s^\nxhx\u0099\u0091/\u00E6\u008E\u0095OP2y\u00C6\u00CB\u00F4*S(\x14J\x17A\u00DB~\x1A~\u00DC~\u00EF-\u0095~C\u00A7`n7\x015L\x13\u008F=rd\u00E2\u00C4\t\b\t\rEFz\x06\u00BB\u00ED\u00EB\u00DB\x17AA\u00C1\u008F\x1C_\u00CF\u00D4\x1Df\u00EA\r\u00B0\x1D2\x03f'\u00D6\u00A2\u00C1\u00B8;\u00DC\x1D\u008C\u00A1\u00CA\u00E3@RW\u0085\u00B0\u00A0p\u00D8\u00F5\u00EE\x07C\r\x0182)\nS\u00A3\u00D8\x0E\x03Ic#\u00AA\u00EB\u00A3q\u00E2Z5\u009BNo\u00FF\u00810\u00D4Ra\x0E\u00D4 -\u00AD\fv\u008E\x16L|\x11B\u00E3D\x18\x10\u00F8\x02<\u009CE\u00F0O\u00CB\u00C2\u00E5\u00D3\u00F2\u00D7\u0088\u008C\u009Cz\u00C2\u00DB\u00DE\x04\\Y\x03\u00A2\u00C3C\u00A0\u00EF\u00D2\x0B\u00E6\u00AARp\u00F8\u00AA\u0090\u00D6\u0096\u00E1\u00D6\u00B5;\x10I\u00E9\u00A3\u0086\u00FF\u0082\u009B\u00E2J\u00C4\u00F3\u00C5\u00D4\x10\u0094NCY]-5B\x17A\u00AC\u00C6\u0083\u0088g\u0086/\u00DE\x19\u008C\u00CD\u00DF]\x04\u0097#\u009F\x0F\u00C2\u00CC\u00DA\x0E\x1E\u00DD\u009C\u00D87\u00DA\u008B\u0092\u00E3Q\u00A0n\x05\x17S5\bx<@Z\u0087\u00F0\u00E0[\u00A8\u00E2X\u00C2\u00B7\u00B7#T\u00B8\x12\u0094\u00E7&#(:\u0083\u008A\u00FA\u00F5\x1B7\u00F0\u00D6[\u008Bp\u00E0\u00E0!899\u00A1\u00A1\u00AE\u00EE\u00B1\u00E2\u00BBN\u0098\u0087\u00E0K{Q1\u00F9]tw\u00B3C\u00A6\u00CBT\u00BC>\\\u0080\u00ED\x1B\u00F7b\u00D8;\u00CB\u00A0\u0089\u0083\u00E85w\x1A4o\u00EC\u00C5\u008F\u00B1\x06\u00F8x\u00ED'\u00B8p\u00F076n\u00A3\u00C4\x00\u0083\u00FC=\x10\u00AB?\x183<j\u00F0\u00D5\u00D6\u00DFa\u00EEl\x00\u009E@\x03\u00B1g\u00CF\u00C1o\u00C1\x1AL(\u00D8\u0088\u00EB\u00E5\x03\u00D1W\\\u008B\u00CC\u00BC<\u00CC\u009D\u00FE:n_\u00E3a\u00D5\u00BA\u00D7pz\u00CB7P\x1D8\x13\u00AF\u00EAH\u0090\u00EC1\x13\u00E3l\u008Bq\u00F0\u00C7s\u0098\u00FE\u00E6bT\u00E6\u00BC\u008D\u00E0\u00E42\u00FA\u008B\u00F9\x0F\b\u00CE\u00CD\u00A5F\u00A0P(O\x04\u00F5Z\t\n\u0083\u00C2\u00A03d\x0EV\u00BE\u00D5\u0088C\u00B1\u00F2\u00B5G\u00C6\u00CEx\x07*\u00A1\u00DFcK\u0082\t\u00B6.]\u0084\u00DD\u00D7\u00EB0\u00DA\u00B9\x10\u00EB\u00B7\u0087`\u00E1\u00C6\u00B7\u0080\u00DA\n\u00D8\u00BC\u00B4\x14E\x7F~\u008DX\u00B3QX\u00F9\u00EA\u00CB\u00A8\\\u00F8\x16b+\u00BA\u00D6,s\u008F\u00DD\u00FD^\u0090_\u0080\u00F5\u00EB7\u00C0\u00CE\u00D6\x16\u00A5\u00C5\u00C58w\u00FE\u00C2\u00A3_\f\u009B\x170\u00B9\u00AF\x1E\x06\r\x1A\x05\u00FD\x1A\x11z\u00DAY\u0082\u00DB(\x018b$'Da\u00FB\u00854\u00E8\u0093Y\u00B5$2\u00D4U\u00E5!5(\b\u0085\u00D0\u0082\u00A1m\u00CB\u00B9\u00B8\u00FD\u00FB8\u00E3\u00F4\u00A5\u00CB\u00C8(\u00CE\u00C0\u00AD\u009B\u00E1\x10:8\u00E3\u00B5\u008F\x16\u00C3\u00C1T\x1D\u00F6>=\u0090\u0093T\u008C\u0086\u00C2\x14d\x16\u00CBG\u00ED\x1B\u008D\x1E\x04CY6\"\u00C3\u00C2p\u00FC\u00F3\u00FF\u0083~w'\b\u0098\u00E6\u008C,7\fgn\u0086!]\u00C2\u0081\u009A\u0096.\u00FD\u00B5P(\x14\u00CA3\u0080@\u0092\u0084/6\u00ED\u0085\u00D8c\x16\x06\u00BB\u009A\u00B0\u00FB,tK\u00B0\u00F5L<\u00B8\u00E9W\x10\u009A\u00D2\b\x0B\x0E\x1Fa\u00B7\u00C3\x18\u009D\nBrQ\x03x\u00B0\u0080\u009D1\x07\u00DD\u00BD\u00FBa\u0090~9B\u00EE\u0084\u00A1\u0096\u00D9\u00DB\u00D5\u00F8G\u00CF\u00D4\u00EB\u00EB\u00EAq\u00EA\u00E4)\u00DC\u00B8q\u0093\u00ED\x16\x7FT\u0086\u00CD\u009A\x06\u00D3\u00CA\u009BX\u00B6j\x1DV\u00BF?\x1F\u00C6}\u00FA+\u008FYXu\u00C3G\u00E3l\u0091]V\x0E\u0092\u00A2L\u00C6\u0087k\u00EF\u00FE\x10\"\x0B\u00E9q\u00F9\u00905\u00EBT\u0088\u008B\u00CFC`\u00DF^\u00ECw\x1B[k\u00B8yy\u00E1\u00D4g[q\u00F1z\x14\x04\u00CC5\u00AAU\x13\u0080\u00A7zo\u00E2\u00FE\u00B2\u00EB\x11\x10s,\u00E0\u00E4\u00E9\u0088\u00BE\u00B3^BUR\u00D3{\u0095\x1C.k\x02.\u0093\u00BA\u008C\u008E\u00F2\u00A7P(\u0094gC\u00B8\u00B8\x1C\x14G\u009F\u00C3\u00CA/\u00AF\u00C0\u00B1\u009F\x17#\u00CER\x14\u00D6\x18a\u0096\u009F\x11d\x1CW\u00F4\u00B0\x13 \u009B\u0091\f\u009E2<\u00D0 +Ei\u00B5\f\x05\u0091A\u00D8\u00B1\u00FD\x00\u00AE\u00DC\u00BE\u0083\u00BC\u00CA\u00BA\u00AEg\u009B\u00A7u\"\x1E_\b/G5$\u00DD\u00B8\u00AC\u00DC\u0097V\u00AE\r\x17Y\x0382[,\u00DD\u00B8\x1C\u00FC\u0084+\u0088\f\u008E\u0086\u00A4\u0081\x03\u00EB\x11K\u00F1\u00FE\u00EB\u00FE8\u00BAq\x05\"*\u00EB\u00C1\u00B3\x1C\u0086\u008D3\u008C!a$?|\u00F7G\x10\u009B\u00F6\u00C1\u0081\x03\x07\u00B0q\u00CD\u009B\u00C8\n\u008E\u00C7\u00E2}?c\u00D1\u00AC!\u00C8\u00CC+\x05/!\x1E:\u00FE/c\u00C3\f/&\u00BC\fe\u00B9G\u00B1\u00FDx,\u00DEx\x7F5\x16\r\u00B1\u00C2\u00F9\u00E8T\u00E6\x02\u00DF\x13q\u00BA\u00A2+\u0085B\u00A1<;(\u00D6\u00E8l\u0088\u00DD\u008B\u00F8\\\u00F9\u00F8\u009D\u00AB\x17\u00CEa\u00D8\u00A2-8\u00B8\x7F\x15\u008A\u00AF\u00FF\tv\u00ED\u0096\u00A6\u00DB<\u00B9\u00DFs\u00B9bl\u00FA\u00E6(\u00BCg\u00BF\u00C7h\u00C7\u00B7X:{\x04\u00D4\u00BA\u00E0\u008C8\x0F\u009C|&\u00F1\u00CE\u00DFO<\x03.\u00D37a\u00D5H\x19V\u00CE[\u0083\u00F4\u00EAzV\u00FC\u00D7\u00EC\u00F9\x1A\x1A\u0097\u00B6c\u00F9\u00CF\u00B7P_/\u00EFB70\x15B\\P\b\u00B1L\u00D1\u00F2R\u0081\u009EPO\u00B9O\u00CBP\u00C8\\\u00B9j\u0088*\u00E5\x03\u00E9\u00B4\u00B4u!\x11U(\u00C3\u00CB\u00F7\u00E93\u00FB\u00CAZ\u00EC\u00A3P(\x14\u00CA?\u00C3\u00C1{\x04r\u00E2/\u00B7{\u009CL>#\u00AA\x14=\u00B5\u00FC\u00F0\u00B4\u00F4a\u00A8\u00C9AaAi\u00BBa4t\u00B4\u00A0\u00C9x\u00F1E\u00A5\u00A2\u00AExI\u00D6u\u00F8\u00BC\u0089\u00E2\u00A2td$HQ!\u0096\x0Fv\u00901\u009E{^b2\x1ARs\u0094\u0082N(\u00CDo\u00B9\u00CA\u008ETZ\u00DFb\u009F\u00A8\u00A4\u00E5qQU\u00C5}\u00E7\x12U\u00D1\u0081p\x14\n\u0085\u00D2e=x\u00C6i+|\u0088V\u00D70\u008D\u008C\u00AE<\x1DN\u0087\u008Bz\u00E6\u00D9\u00EF\u00B1\u00E2l3\u00B1\u0096\u0094a\u00C7'kh\u00ED\u00A4P(\x14\n\u00E5\u00BF\x14uuM\rj!\n\u0085B\u00A1\u00B4\t\u00F7\x11\u009EIS\x1D\u00E9D\u00A2.\u00A6s\u00F6R(\x14\n\u00A5\x1D\u00A4\u008F\u00F0\u00D6\x10\u00D5\u0091\u00A7\u00DC\u00D0\u00A2&\u00A0P(\x14\n\u0085\u008A:\u0085B\u00A1P(O\x1D\u00BE\u00B6\x10\u00FD\u00FC\u00BCZ\u00EC\u00EB\u00E9jE\r\u0083N0P\u00EEq\u00E9\u00DE\u00D3\x0FV\u00A6Z\u00ECwYM!\u00CA,\u00FBC\x12\x15\u0084a\u008B\u00DE\u00C0\u00D5\u00ED\u00EBq#:\u0087^U\n\u0085B\u00E9\u00C2,Z4\x0Fq\u00A1\u0089\u00D8\u00B1{:~|\x7F'\u00A6|\u00F1\x1E\u00B2\u00EE\u00C4`\u00DA\u00E0h,\u00DBv\u0085z\u00EAO\x1Bc\u00A1q\u008BmgW\u00E7G\u008E\u00EB\u00E2\x16\x00;Y1\u00B2s\u008B\u0091\u0091\u0099\u0085\u00DBg\u00FFFv^.45\u00B5\u00C0\u00E3\u00F2im\u00A7P(\u0094.\x0EG\u00DB\x14\u00FD\u00FB\u00B8\u0080\u00CB7\u00C6\u00F8wf\u00C2D\u009D\x03\x1BFG\x04T\x02:F\u00D4\u0087\x0F\x1F\u00AE\u00FC\u00EE\u00EB\u00D7\x0F\u00AF\u00BF>\u00F7\u00B1\u00E2\u0097\u0084E\u00E0nT\x18\u00E2\u00D3K0~\u00E12\u00B8;\u00BB*\u008FY\x0F\u009B\u008F\u00EF\u00F6\u00ED\u00C7\u00CF{\u00B6a\u0094\x1D\u008F^a\n\u0085B\u00E9b\u009C\u00FE\u00FDw\u00F0tt `\x14LCS\r<\u0099\n\u00C4\u00F9qX\u00BF\u00E5\u00CAso\u009B\x0E\x11\u00F5\u00DB\u00B7oc\u00CEks0x\u00C8`h\u00A8\u00A9b\u00C3\u00FA\u00F5\u008F\x1CW\u00C6dy\u00C0\u00BB\u00CB\u00B1j\u00ED*\u00BC6\u00D8\u0096\u0089\u00AF\x01\x1EO^\f#c\x0F\u00AC\u009D\u00DD\x1F\u00A2\u00A8\u00D38s=\x16\u00D3\u0096/\u0081\x0E\u008F\x0E\x1B\u00A0P(\u0094\u00AE\u0084\u00B8\u00A2\x04\u00D7.\u009EC\u00B5T\u0086\u0094\u00EB\u00E1h\u0094V#8$\x06Z\u00DA\u00D4U\u00EF\x10\x0B$\u00C4' 99\x05={z\"4$\u00F4\u00B1\u00E2r \u00C5\u00B5o6\u00E1\u00D7\"\u00F9ls\u00D3\x06\u00DF;\u00A6m\u00A2\x0B\u0081\u00AC\u0094\u00F1\u00E2\u00B3Q\u00ACZ\u008C\u009D\u00BB3P)\u0091\u00D2_\x00\u0085B\u00A1t!\u00A6\u00BD9\x0Bq\u00E7C\u00D1 \u0093\u00A2AG\u009DQ\u0085\x06\u00D8\u00B9\u00F9\u00E2%_C\u00BC\u00BE\u00E1\x18\u00F5\u00D4;\x02\u00B2\u00BA\u00DB\u00E3\n\u00BA\x02u\u00E3{\u00D9\u0096\u00B2\u00DE\u00BB\x04u\u00F5\u0080jU!n\u00C4K\u00E0\x1B\u00E0\x05\u008ET\x1D&\x1C1\u00AD\u00FD\x14\n\u0085\u00D2\u00D5<\u00F5\u0092r\u0088e\x02h\u00CA\u00CA\x11q\u00F2:J\u00EA\u00B5\u00A0\u00DAX\u0083\u00E2\u00B2\u00A2\u00E7\u00DE6\x1D\u00BE\u00A0\u00CB\x7F\u0087!\u0084&\u00B2\u00A6\u0089\u00FC\r\u00E1d\u00C3CRF!\u00AD\u00FD\x14\n\u0085\u00F2\u0084\u00E8\u00A8\x05]T\r-\u00D0\u00CFC\u0088\u00A8K\u00E1P,\u00DD\u00D2\u00DB\u00CB\x0Ew\u00C2\u00D3\u009E\u00F7K\u00B2\u00AE\x0B=\u0080(a\x04\u00FD\u00DE\u00F7\u00A4\f\u00FA\u0083\u00A3P(\u0094\u00AEH]I\x0E._j\u00F9\u00FA2\x15t9t\x14\x19\u0085B\u00A1P(T\u00D4)\x14\n\u0085B\u00A1t&\x1E\u00D8\u00FD\u00CEW\x11P\x0BQ(\x14\n\u00A5m\u00AF\u00F0\x11Vi\u00A3:\u00D2\u0089D\u00BD\u00B1\u00BE\u0081Z\u0088B\u00A1P(m\u00F2(\u00AB\u00B4Q\x1Dy\u00CA\r-j\x02\n\u0085B\u00A1P\u009E\x03O\u00BD\u00AB\u00A2\u00A6\u00A5\r\x1D\x15\x01\nKK\x1F\x18\u00CE\u00DC\u00CA\x02\u00B9Yt\u0081\x18\n\u0085B\u00E9,\u00E8\u009By\u00A2\u008F\u00A7)8\u0090\x01u\u00E5\b\u008E\u00C8F\u00EF\u00BE\u00EE\u008C\u0087\u00CAl\u00CB$\u00C8\u008D\u00BA\u008E\u00A8\u00BC:\u00EA\u00A9?/\u00C8l\u0087b\u00F3\u00B7\u00DB\u00F1\u00F5\u00D6\u00AD\u00D8\x7F`\x1B\u00DC\u008CT\u00DA\r\u00BB\u00F0\u00FD\u0085m\u00EE\u00D7\u00EB7\x1B\u00EBV/\u0080>\u0097C\x7Fa\x14\n\u0085\u00F2\x14)\u00CB\u008B\u00C4\u00DD\u00E8\u00DB\u0088\u00A9s\u00C5\u00CC\u00B9\u00EF\u00C0\u00D9P\u008C\u0084\u00F88\u00C4\u00C5\u00C7#6!\u00E2\u00B9\x16\u00F4g\u00D6S\u009F8q\x02.^\u00BA\u0084\u00B2\u00D22v\u00DB\u00D7\u00B7/\u0082\u0082\u0082\x1F)\u00EE\u00E8\x19\u0093\x11\u00F2\u00FBw\u00D8\x7F*\x11\x0E\u00AEf(\u00A9\x16\u00A0\u0097\x7F\x7F\x18i\t \x11\u00E5#\x1FF\x10\u00AA\u00C9 h(\u00C7\u00E5\u00D3\u00E7\u00C0\u00E1i\u00C2\u00A7\x7F\x1F\x18i\b\x00i#\u00B2r\u00F2\u00E07\u00A8\x0F\x1C]e\u00F0\u00F6\u00B0C\u00BE\u009A%\u00AC\u00F4\u00D4\u00D8\u00B8\u00E7\u00AEG\u00D1_\x1C\u0085B\u00A1<arr\u0098{\x7F\u00CE\u00B7\u00F8\u00C6j=z\u00F9\u00F8`\u00C7\u00E1\u00F3\u00D4(\u00CF\u00B2\u00A7~\u00FD\u00C6\r\u00BC\u00FC\u00F2\u00CB\u00EC\u00F71\u00E3\u00C6BOO\u00EF\u0091\u00E3\u009E\u00FA\u00FD2\x02\u00A7\u00BE\u0089\u00E5\u00F3\u0086\u00A1..\x0E6}\u00FA\u00E3\u00DDy#Q\u009D_\x00\u0091\u00B8\x02.\u00C3\u00A6bL`o\x14\x14f!`P\x00\u00A4R+\u008C\x7Fs.\x1A\u00ABD0\u00F4\x1A\u0087\u00B1\u00DD\u00EC\u0090[S\u0087\u00FA\u00C2x\u00E4U\u0098\u00E2\u00ED\u00B7\u00E7A\u0094\u0099\x0B\u00BA\u00E6\x1F\u0085B\u00A1<]\u00EE\u00EC[\x05\x1B\u00BF\u00A1\u00D4\x10\u00CF\u00BA\u00A8\x170\x02\x1C\x1F\x17\u008B\u0091\u00A3G\u00C1\u00CD\u00CD\u0095\u00F5\u00DA\x1F\x15i\u00EC\x01|\u00B9\u00F3\x14\u00EC\u00FD\u00C7\u00E0\u00D3\u009F6\u00A0\u00A7\u009E-R\u00FE\u00D8\u008Ak\x11\u0091\u00B8\x15\u009A\x01\x15>\x1F\u00A7\u00CE\u009FFx\\\u00F1\u00BDH\x12\x19\x1A\u00AA3\u00F1\u00DB\x17\x07\u00A1\u00EFb\u0082\u00A4\u0092zp\u00A4\u0095\u0088\u00CF\u008CCJ\x050\u00FE\u00E5A\b\u00BD\x14Fk\x13\u0085B\u00A1<e\u00C2c$x{\u00A0\x015\u00C4\u00B3,\u00EA\u0084k\u00D7o\"?/\x0F_|\u00FE\x05\u00EA\u00C9j.\u008F\u0088\u008B\u00B7\x0FJb\u00CEb\u00D9\u00DA\u00A3\u00A8P\u00B5\u0081\u00BD3\x07\x06v=`\u00A4\u00A3\rc\x03-6\f\u00A7\u0095Y\u00A4\u00CC\x1EH\u00B5\u00D1\u00C3\u00BF\x07\u00CA\u00B2\u00E5\u00F3\u00C9\u00F3Tu\u00A1\u00A7\x02\u00FC\u00F9\u00CD\u00FFp!\u00A9\x16[\x7F\\\t\x17\x1E}\u00C6N\u00A1P(O\u0093\u00D0\u00B03\u00F0\u009D\u00B1\x14vV\u00A6\x10\u009A\x18@\u00FD9\u00BF\r?\u00B3}\u00C62\u00A9\x14a\u00A1\u008F\u00EF\x1D;\f\u009D\u0085\u00E9\x1E\u0086\u00EC\u00F7\u00D2\u00E4\u00CB\u00F8q\u00E7%\u00CC\u00D9\u00BC\x1A[vLGC\u00C6I\u009Ch\u00F6\u00DE\u00A5\x04\u00F2\u00EF\r\r\u00C0\u00BC\x0FW\u00A2\u00B1:\x1D\u009BV\u00FF\u008C\"O\x17\u00C8\u00F4\u00FA`\u00E1l5X\u00FA{@\u009B\x11\u00FD\u00BC\u00B0\u00A3H\u0090\u00C8\u00E8/\u008CB\u00A1P\u009E\")\u00E1!\u00B8V5\x0B\x1B6}\u00C9l\u00D5\u00E0\u00EC\u00C6\x05\u00D8\x1B\u00DB\u00F8\u00DC\u00DA\u00A3\x0B\u00AD\u00D2\u00F6\u00E8h\u00E8\u00E9C\u00B5\u00B1\x12e\"\u0089r\u009F\u00B6\u0081\x01\u00AA\u00DAx\u00C5M\u00C6q\u00C5\u00FA\u009FW\u00E1\u00DA\u00D6U8\x17\u009C\u00AA\u00DC\u00CF\u00D3\u00D2\u0087\u00BA\u00AC\x06\u00A2\u00EA:\x18\x18h\u00A3\u00B4\u00B4\u008A\u00FE\u00BA(\x14\u00CAsEG\u00AD\u00D2Fi\u0097u\u00CF\u00E5\u00E8\u00AE\u009A\u00F22\u00A6=\u00D7\u0092\u00AAv\u00DEY\u00971!\u00F3\x12\u0093Q\\\u00DCR\u00B4%\u00A22(\u00AA*\x15t\n\u0085B\u00A1t\x06\u00E8\u0090\u00ED\u0087\u00C0\u0095eb\u00C7'k\u00A8!(\x14\n\u0085\u00F2l\u008B:\u009D\u0088\u009FB\u00A1P(\u00ED:=tA\u0097gK\u00D4\u00E9D\u00FC\x14\n\u0085Bi\x0F\u00BA\u00A0K'lhQ\x13P(\x14\n\u0085BE\u009DB\u00A1P(\u0094\x0Ee\u00CA\u00B4I\u00D4\bT\u00D4\u009F\x1Dl\u00EC\x1C\x1F\x1A\u00C6\u00D0;\x10\u00B6\x16\u0086\u00FF(}\u00F2\u00CA\u009E\u009D\u00B3\rF\u00BF\u00BB\x11\u009B\u0096\u008C\u00A6\x06\u00A7P(\u00CF\f\u00AESWc\u00EC\u00A8\u0097\u00B0r\u0086\x175F\x13\u00CF\u00E5\u00E8w-\x1D\u00AD\u00FB\u00DE\u009Dlk_[\u0090e\u00FF6\x7F\u00B1\x14\u0085A'\u0090\u00C5\u00B3\u0083-?\x1D_m?\u0082\u00C2\u009A\x7F7\u00D9\u0081\u00F9\u0088%\u00F0\u00AB\u00BF\u008E\u00A3\x17\u00E4\x0B\u00D3X\x0F[\u0080\x0F&9\u00E3\u00C6\u00DF\u0097\u00F0\u00D2\u00CB\u00A3\u00F0\u00F7\u00CEmH.o\u00FB\x1C\u00E6BSp\u00C4)@\u00ABUb\u00CD\u00DC\u00FA\u00E1\u00E3\u00F9\x01X\u00F3\u00DEf\u0094I\u00E5\u00CF\u00BE\u00C6O\u00FD\x18\u00BDM\n\u0091P\"\x03\u00AF\u00A1\x00\u00E7\u00E3Ep\x10\x14A\u00C7\u00C4\x02V|:\u00D5\"\u0085B\u00E9\u00FC\x18Y\u00DAb\u00E2\u00EC\u0085\x10f\u009F\u00C6\u00EA\u008F\u00F6\u00A2[\u00E0+x\u00EDe=\u00FC\u00DF\u0091K\u00CF\u00BDm\u009EKQ\u00EF\u00E5\u00ED\u0083\u00DA\u00FAz\x04\u00DD\u00BC\u00C5n\u00FB\u00FA\u00F5\u0083\u009A\u008A\n._\u00BE\u00F2\u0088Fk@\u00EC\u00DF\u00BF\u00E2D\u0099\x0B\u00BE\u00DA\u00F6\x11\u009C\u008D\u00C3\u00F0\u00FA\u0092\x0F\u00D1\u00C3P\x15\u00F9\u00B1\u00E7\u00B1d\u00E3n\f\u009A\u00FC>\u00E6\u008E\u00F3\x01\u0099\u00E1\u00E8\u00E0w\u00BB0b\u00C1b\u00E8J+\u00F0\u00CB\u00BA\u00C5\u00F8;\u00DD\t\u00EB\u00BE\\\b{\x13\x03\u0094%\u00DF\u00C2\u008ExC\u00AC\x1A\u00ED\x02\x19\u00BAA-/\x04\u00FBc%\u00E8\x1B\u00D8\x0F\x06u!\u00F8\u00F3\u00AF\u00E3\x10\x1F\x07\u00B8<}\u00CC]\u00BD\x1A\u0083\\\u0084h(\u0089\u00C3\u00EA+\\\u00BC5\u00C0\x10\u00E6\x06U8\u0097l\u0080\u00EC\u008A4\u00BC\u00F1\u00C9\x12\x04:\n\u0081\u00C6r\\?\u00F09d>\u0093ah$\u00C4;\u00AF\x06b\u00ED\u009E\u00CBM]32D\x1E\u00D8\u008D_\u008B\u00A4\u00F2\u00C6\u00C3\u00C4\x15\u00B0\u00A8\u00BC\u0080\x06\u0099\fR\u00A9\x04f\u00AE\u00BD\u00B0b\u00F9\u00BB\u00CA\u00BC\u009E\u00CAp\u00C7\u00E6\u00EF\u00DF\u0085\u0099\u00A6\x00\u00DB>]\u0086\u009B1t}y\n\u0085\u00D2\u00B1\u00CC\u009C\u00B7\x14\u00DD\u00F9\u00A9\u00F8#:\n)Y\u00C5(\r\r\u00C3\u0087o\u00BD\u008AM\u00C6||\u00B4\u00FD\u00DCsm\x1B\u009E\u00AE\u00AE\u00EE\u00DA\u00B6\x0E\u00E8\n\u00EDQ\u0092\u009B\u00D8%\x0B\u009D\u0097\u009F\x0F\x07;[\f\x1C4\b\u0086\u0086\u0086\x10\u00F0\u00B8\u00B8y+\b\u0092F\u00C9C\u00E3\u00AAk\u009Bb\u00E8\u008B\x03\u00A0m`\x02\u00F7\x00?\u00A4\u009D<\f\u00B1\u00A1\x03^p\u00E6\u00E1\u00D0\u0081\u00DF`\u00D8c\bl\u00C5\u00C6\u00F0q\x16c\u00F3\u00E6op\u00F2\u00CAM\u00B8\u00F9N\u0082~e\bn%Va\u00C2\u00D4@\u00DC\u00FE;\x01\u0081\u0081B\u00AC\u00FE`-\u008C=G\u00A2\u00F6\u00C8\x17\b\u00D6\u00F4A\u00CE\u00CD\u00C38\x13\u0094\u0081Z\u00C6\u00A9\u00CEMLEA\u00AD\x01\u00E6\u00CC\u009E\b\x13^\x03,\x1Czb\u0080a*\u00B6l\u00DF\u008D\u00E3\x17\u00C3\u00A0\u00E5\u00E8\x07\u0087\u00DAh|\u00F7\u00FDA\u0098\u00F9\u008E@]J\x02<\u0086\u00FA\u00E3\u00B7o>\u00C5\u00B90\x19\u00C6\u00CF\u009B\u0085\u00D4K\u00E7ac\\\u008C\u00FF\u00ED8\u008B\u00EA\u00A6\u00F9\u00F1]\u00DD\x030pl\x00\u00BC\u00FA\x07\u00A0\u008F\u0083\x0ER9\x0E\u00B0\u00AEM\u0082\u00C4\u00C6\x07N\u00DCT\u0088U{\u00C3Ht/\u00AFI\u008D\u00F6\u00E8.M\u00C0\u00BE\u00E3'\u0091\u0098\u0092\x06qm#\u00BD\u00A3P(\x14\x16\x033'T\x15\u00A7\u00B7{\u009C\u00CB\u00E5>\u00D6\u00DA\x1C\u008F\u0082\u008A\u008A\x05DeIP\u00EF5\x16\x1E\u00B28\u009C\u008B\u00C8\u0087\u00D5\u00A87\u00A1\u0095y\x0E\u0097\u00A2\x18\u00A7\u00A3\u00A8\x18U\u00D2\u00E7v\u00CA\u00EE+\u00CF\u00A5\u00A7^W[\u0087\u008B\x17/\u0083\u00C7\u00BF\u008E\u009E==\x11\x1A\x12\u00FAX\u00F1\u00B9\u00B2\x06D\u00EF\u00D9\u0089\u00DA1\u00AB\u00E0\u00A6W\u0082\u00D8\n7\x14\u00C4\u00C7@\u00A4\u00AA\u008B\u00DBW\u008E!\u00CFj 4\u0093\u00CF#\u00B3\u00A4\x14`>\x1A&:\u00B8\x1B\u0092\u008Db\u00D5b\u00EC\u00DC\u009D\u0081,\u00A6\u00BE5\u008A\u00ABPT]\u008D\u00C2\u00EC*\u00D8\u0098\u008AqK,\u0081\u0096\u00A8J\u00D9M^\u009E\x1D\u0089\x0B\u00CC'\u00F8\u009C\x1D>\u00D9\u00B5\x1E\u00D2\u00C4H\u0094F\x1FFtJ\x1E{\\\x0F\x1C\u00E4$'#%\u00A3\x00}\x15\x19c\u00E2J\u00EAEH\n\u008B\u0087H6\u0094\u00A9\u00FD\\\u0080\u00D9.\u00A8\u00BC7\u00E3\x1D\x07R\\\u00FBf\u0093\u00D2Sw\u009D\u00EA\u00D7\u00B21g\u00A1\u00DB\"\u00AFQ7\u00E3\u00A0\u00C6\u009F\u0087w\x16,\u00C2\u00CE\u00AFV\u00E3Jh\n\u00BD\u0093Q(\u0094\x0E\u00A3\u00BE>\x07\u0091\u00A19\u00E81\u00B9\x11V\u008A\u00FB\x1As;\u00CB\u00C9\u00CED\u00C8\u009D\u00C8\u00E7\u00DE>\u00CF\u00F5@9Ic\u00E3c\x0B\u00BA\u00B2\u008B\u00C3\u0098\u0083\u0098\u00D8kp\x19\u00F36\u00BA\u00A9\x17\u00C1\u00CC\u00D9\x16\x15\u00E7N \u00FC.#\u00DA\u00E7\u00C3\u00D0c\u00D8 Xs90\u00B0\u00B5AYj\t\\m\x048\x7F9\f\u0095\u00B9\u0085\u00ED\u00A6i\u00AE\u00A6\u00AE\u00FC>t\u00CE\x1B\u00982\u00C8\r\u00DA\x16\x06\u00D0\u00E60m\u0083\u00E2l8\x0E\u009F\u0085\u00A1\u00DD\u008C`\u00ACo\x04I\x1B\u00CD1\u00E2Cs\x1A\r1w\u00E3\u009B\x10\"\x0By)E\x10\u00988C\u00D8j\u00F58u\u00E3{\u0097]\u0099\x0E\u008Ft\u00CC\u00F3Q\u009CZ\u00DC\"\u00AF\u0086\u00DECQ\x18\u00B6\x0F\u00B7*dP\u00D7\u00D2\u00A6w\x14\n\u0085\u00D2\u00E9\u0090\u00F1\u00E9bZJmz\x1E\u00BB\u00DF\u00FF\rd\u0081\u0082\u008A\u00D2|\u00A4fd#.9\x1F\u00F9\u00E55H\u00C8\u00CCA|\u0081\x18v\u00FD|a\u00A9/@j\u00E4)\u00A41\"\u00D8\u00B3\u009F?\u009C\u00AC\u00F4\x10\x1Bv\t%\u00B0D?O\x1BTW\x14 \u00B7\u00A4\x1A\u00B5\u00F5U\u00C8\u00C8\u00CA\x07\u008F'AAI\x01JK\u00CAabe\x06AY\x1A\nD\x12\u00A8i\u00EAA\u00CD\u00C0\x1C\u00DD,\u00F4\x10|\u00F9\f\u00FE>\x15\u008E\u00CC*\tTM\u00DD\u00E0d\u00AD\u008D\u00EC\u00A4d\u0094\x17d\"\u00BF\u00B4\x02\u00DCF1\n\u00B2\x0B\u00E0\x1E8\x00\u00C6\u0082r\u00C4\u00DF\u00B9\u0082\u00BF\u00F6\u00EFGBe#JE\u00AA\x10\u00EAH\u0090\u009A#_\x1F\u009E\u009C\u00AF\u00A8\u00B4\x10\u00F9U\u00F2ntmn\x03*\n\u00B2\u0090\u0096\u0092\u0086\x1A\u00996\u00B2\u0098\u0086J~\u0083\u00892\u00AF5\x1C\x1D\u00F4\u00EE\u00D9\x17UQW\x11\x1A\x19\u008D\u00AA\x1A:\u0091\x04\u0085B\u0091\u00D3\x11\u00DD\u00EF\u00CA\u00B4\u00EBkPT\u00A7\x05\x07\x07\x07\x18\u0088\u00D2\u0090\u0092\u0092\u008E\u00D2\u00F2\u00E7~\x1D\u008E+\u00CF\u00E5*m]\u00B2u\u00C6\x17b\u00DD\u00DE\u00AFq\u00FE\u008B\x15\u00B8\x1C\u009EN\rB\u00A1P\u009E8t\u0095\u00B6N\u00C7:\u00BA\u00A0K\u0097A\u0084?w\u00EC@Nf\t5\x05\u0085B\u00A1<\u00A7PQ\u00EF\"H\x1Akp\u00E7\u00FAuj\b\n\u0085B\u00A1\u00A2\u00DE6\u00EA\u009A\x1A\u00D4B\x14\n\u0085Bi\u0093GY\u00A5\u008D\u00EAH'\x12uqu\r\u00B5\x10\u0085B\u00A1P\u00DA\u00E4QVi\u00A3:\u00F2\u0094\x1BZ\u00D4\x04\x14\n\u0085B\u00A1<\x07\u009E:\u00E5\u00C9\u00A1\u00AE#\u0084G7\x0BD\x05G@,\u00FB\u00EF\u00DE\u00B14\u00B6\u00B4\u0082\u00A5z\x1D\u00C2\u0093\n;E:mai\u00EF\ns\u00952\u00DC\u008E/x\u00E48\u00E6\u00DD\u00FA\u00C0\u00C5X\u0086\u00A0\u00AB!\u00F7\u00D9\u00CB\u00DE\u00C5\x1DeIw\u0095\x13\u00F7P(\u0094\u00AE\x0BY\x7F\u00A3\u008F\u00A7)8`~\u00EFu\u00E5\b\u008E\u00C8F\u00EF\u00BE\u00EE\u00EC\x14\u00D8\u0090I\u0090\x1Bu\x1DQyu\u00F7\u00DFC\u00EC\u00EC1h\u00D0\x10\u00D4\u00E7\u00C7\u00E2\u00C8\u00C9\u00EB\u00D0\u00B3\u00F1\u00C2P\x7F\x0FH\x0B\u0093q\u00E1\u00D2-\u00947J\u00A9\u00A7N\u00F9\x17\u00C2\u00D6\u00CD\x1D\u008B_\u00E9\u0085\u00E1\u00D3\u00DFCO\u00AE\u00FC\u00B9\u0094M\u00CF\x00\u00EC\u00DF\u00B7\u00E1\u00BE\u00C9b\x1E\x07{WoL\u00F2\u00F9\u00F7\x0B\u00B3(\u00D2!\u00AB \x1D8p\u0080\u00FD\u00FCo\u00E9\u00CC\u00FF\u00A4\u00ECVN>x\u00D9\u00D7\u00FC\u00B1\u00E2h\u00F9L\u00C4\u00EB\u00F3&@\u009F\x7F\x7F\u0095}i\u00CAx\u0094\u00CA\\\u00F0\u00BF\u0095\u00F3\u0094\u00FB\u00D6~\u00BB\x05\x03mg`\u00F7Ay\u00DE)\x14J\u00D7\u00A0,/\x12w\u00A3o#\u00A6\u00CE\x153\u00E7\u00BE\x03gC1\x12\u00E2\u00E3\x10\x17\x1F\u008F\u00D8\u0084\u00886\x05]\u00DE\u00F8\u00F7\u0087\u00C6\u00C5\u009F\u00C05\r\x00\u00B9C\u00FA\u00CDZ\u0088\u00F2\u00B4d\u00F8\u00CE^\x00w7\u00F3.c\x1F*\u00EA\x1D\u0084\u0081\x16\x0FY\u00A1W!k6\u00D0\u0084C\u00C4\u009D\u00CF\u00F9W\u00E9\u009A\u00EA\u00DB\u00E3\u00E6\u00F9\u0084\x7F\u009D?E:R\u00BE&\u00FE\u00F8q\x07\u00D6\x7F\u00B9\x13\x12\u00AB\x00\u00AC\u009D\u00ED\u00FB\u00AF\u00D3\u00E6\u0090ir\x1Fs\ny\x19$\u00EC\\\u0090\u008D\u00D2\u00FB[\u00D3\u00BA\u00F5\u00D9\u00EC_\x1EW>1\u00CE\u00B8\x15?\u00A0\u00E6\u00EAo\b\u00E5J\u0091u\u00E7\x02\u00D6o\u00F8\u0082V8\n\u00A5\x0B\u0091\u0093S\u0086\u00ACK\u00DF\u00E2b\u009E\f\x06\u00D6N\u00C8H\u00CFd?\u0099\u00E9\u00F7^\u00E9\u0095r\u00ACani\u00A2\u00DC\u00AEk\u00A8\u00C5\u00C0\x0F7\u00A2\x17\u00E3\u00E5\u00BF\u00F3\u00D12\f\u00B6W\u00C7\u00D0\u00D1\u00A3a\x0E1*\u008A\u008B\u00BA\u008Cmh\u00F7{\x07am\u00EE\u0081?O\\\u0084\u00C9\u00C8f]\u00C6R\u00B9\u00A0\u00F7{a\x12\x06\u00F7Q\u00C5\u00DF\u00B7e\x10\u0095'\u00C3\u00D6o\ft*\u00A3a\u00E6\u00E9\u008F\u00EAk;Q\u00EA\u00F0*\u009C\u00F5j\x11\u0097\u009A\u008B\u00FE},q\u00F4\u00F7+\u00A8+\u00CE\u00C1\u00A5\u0090\x1888\n\u00F0\u00D5\x11\x19\u00EC_\u00F9\x04\x03\u00CANa\u00EF\u0099[X\u00B5a9v\x1CN\u00C6Go\x0FD\u00E2\u0085\u00AB\u00A8/\u00BA\u0085\u00CB\u00A5v\u00989\u00C8\x19\u00D1\u00E9\x1A\u00B0P\u008FC\u00BE\u00F3x\u008C6\u00ABGl\u00E4u|\u00BE\u00FD\u00882\x1Dg&?\u0095\u00B2j\u00C4\u0087\u0085cW]#\u00D6\x7F\u00FC\n\x02\u008E\u00DF\u0081\u00E5\u0084\u00F7a\\\x1D\t\x1D\x07?\\9\u00B1\x07\u00A5\u00DD_C\u00DF\u00A2\u00D38Z\u00EB\u0089\u00CF\u00C6ic\u00FE\u00FB\u009B1n\u00F9wpW\u00CB\u0083\u00A3\u0085\x11\"B\u00D2\u00E1\u00E1i\u0086\u00A3\u009FmDySq\u0087O~\x1D\u0081\u00E6\r\u00B8\u0091\u00A3\to\u00A3*|\u00FE\u00FD~L\u00989\x0B\u00C5\u00F9\x1C\u008Cx\u00D9\x07\u0087?\u00FB\x16j>\u00A3\u00E0oR\u0085\n}=\u00A0\u00A1Di\u009B[\u00B1\u00D58t\u00EC\x18\f\u00DC\u00E7 />Y.\u00EAZ\x16xw\u00D3\x16\u00A8G\x1D\u00C2O\u00A7o\x01\u00C2\u0097\u00A1\u00CE\x13\u00C0\u00C4X\x0BLC\u009EB\u00A1t1\u008E\u00ED\u00D8\u0082\u00E53|q\u00EA\u00E2\u00ED\u00FB\u008E\u00E9\u00DB\x0F\u00C4\x10\u00A7T\u00EC\u00CB\u0096?\u00E6\u008B\n\u00BA\u0080-u\u00F9\u00F0\u00ED5\b\u00D1a\u00B7\u00E0e\u00E6\x06Q\u00F4e\x1C\u00D8\x13\u00D5\u00AEwO=u\u00CA#\u00E3h'\u00C3\u00AD\u0092F\u00D6k\x15\u00B7\u00F2>\u00A5\u00E0\u00C0\u00C0\u00A5\x1F<-*PT\u00C9\u00C5\u00C8>\u00D6p\u00EA\u00DE\x0B\u00DA*\x06\u00F0\u00980\r:\x02\t\u00BE[\u00B9\x1AA\u00B1\tP\u00D7\u00B4\u00C5\x10\x1F\x07$\u00A7&\u0082\u00CB\u00ED\t\u008D\u008A\u00BBl\x1A*\x1C>8M\u00BD\x00\x02>\x1Fy\u00DA\u00BA0\u00D0\u00D4\u0081\u00B1~\x1D\u00F6\\\u00CC@\u00AF\t\u00D3a\u00E1\u00EA\u008E\u00FE\u00FD\u00CD\u00E1\u00D9\u00C7\x13\u00AA*j\u00E0\u0097\u00DF`\x05\u00BDy:\u00CD\u00A9\u00AA\u00AC\u0085\u008C\u00AB\x06S\u00DD>p\u00D7O\u00C5\u0096Cgq\u00FC\u00DAM\u00CC\u009F\x11\u0088\u00B4#\u00E7\u00E0\u00E0b\u0083\u00F1c\u00BC\x19\u009FZ\x0F\x03\u008D\x02\u00F1Bwm\u0094%G\u0081Wp\x0B\u00DF\u00EE\u00DC\u0087L\rK\f\ntT\u00A6\u00E7\u00D7\u00CB\x12\x1F\x7F\u00B3\x0F\x7F\x1F\u00D9\u0081\f\rWxp\u00B9H.Q\u00C1\u00C8\u00D1^\u00D0\u00D1\u00D0G\u008F\u00A1c\u00F0\u00DAX;\x1C\u00F8~\x0F\u00CE&2M\x01\x01Wi\u009B\u00FC\u00B4X6\u008D\x01/\u00FB!\u00A9H\u00DE:\u00E7\x1B\u00DA\u00A3\u0097\u00956D%i(\x14\u00C9\u00BDvuK'\u00F4\u00F5\u00EBG+\x1C\u0085\u00D2\x05)M\u00B9\u0083;yfx{`\u00CBG\u008E\u008B\u0096\u00AF\u00C7G\x0B\u00FA\u00C2w\u00EC\x14|\u00FE\u00F5\u00E7X<\u00C6\x06\x06\u00E6\u00B6\u00982g6z\u00F7r\u00C2\u00EC\u00D7\u00E6\u00C0\u00C7H\x05\x03FN\u00C5\u00E4\x11\u00BE]\u00CA&T\u00D4;\x00U\u0093\x17 M\u0096\u008Bfc#\x17\u00A3\u0086v\u0087>\u0097\x03M\x1D\x03pjk\u0091t7\x1C\u009B\u00B6\x1E@\u00A5\u00D3x\f\x0E\u00F4gD\u00B2\x0E\u00E7\u008E\x1F\u00C1\u008E\u00EF\u00BF\u00C5\u00B6M;P\x03\x19\u00D4\u0099\u0086@^b$\u00BE\u00DD\u00F0\x19\u00CEEka\u00DE\u00A4\u00E1\u00B0\x19;\n\u0089\u0089\u00F29\u00DE\u008B\u008A\u008A`l\u00A8\u00CB.S\u00C8h:\u008C\u00B3.\u00E1\u008B\u00CF6 Cf\u0089\u00ED\x1F\u008EDuU=\u00D2\u00C3n\u00E0\u00C7\u009F\u00FE\x0F\u00DB~8\u00D4\u00943\x01\u00FBo\u00F3tX\x0F\x18*0\u00B2\u00B2\u00C7\u0090\x17\u00FDP\x1C\u00FA\x17\u00CE\u00E6\u0094\u0082\u00A7m\u00CE>\u00FB\u00D750EUi\t\u00AA\u00EB\u00AE\u00A1\u00C2\u00B87\u00FA\u00E9\x17\u00E1\u00EC\u00E5P\u008C\x7F\u00FF%h\x17\x06#&\u00B3\u0096I@\u00C040\x04l\u00B7P\u00F3n\u00F7\u00EAzUx\u00DA\u00EA\u00B1S\u00DC\x1Ai\u00F1!\u00D6\x1E\u0081W|5\u00B1\u00F5\u00AB-\u00B8\u0096\u00CB\u0094\u00BA\u00BA\x1A\x12\u00A6q\u00A2cb\u00CC4&\u00E4U5-&\u008C\u00B5\u00CD\u00D0\u00D9\u00F3\u00D0\u00CDd0\x06\u00D9IP\u0090\u0094\u00C9\x1E\u00ABM\u00B9\u0086u\u00DF\u00FC\f\u00B5A\x1Fc\u00E6\u00F0>\u00EC\u00BE\u00B2\u00C8k\u00F8q\u00CF\x1EZ\u00E9(\u0094.Jh\u00D8\x19\u00F8\u00CEX\n;+S\bM\f\u00A0\u00CE\u00F82\u00A7\u008F\x1D\u00C2\u00E1\u0093qH\b\u00BA\u0084\u00BD{\u00F7\u00E1\u00AF\u00DB\u00A5\u00B0\u00B3\u00EB\u0086\u00CA\x13_\u00E3jX\n~\u00DC\u00F8)\u00CEg\u008Aq\u00F2\u00F7\x13\u00D0\u00EB;\x11\u00BE\u00CEF]\u00C6\x1E\u00B4\u00FB\u00BD\x03\u00F0\u009A\u00F8\x12\u00A2\u00E2\u00F7\u00B2\u00DF#\u00A2\u00AFc\u00EC\u008A\u00E5\u00F8n6S\x13\x1B\u00CA\u00B1w\u00DDb8\x07.\u00C5\u00941\x1E\u00EC\u00F1]\x7F\u009DD\u00B0X\u0080%\u00F3\u00DFa\u00BD\u00FA\u00E4\u00BF6 \u00BF\u00C9\u00B1\u00B7\u00E9\u00E6\u008D\u00C5o\u00CEf\u00BF_\u00DC\x13\u008A\u00A9\u00AFt\u00C3\u00B5o\u00E4\u00E9\x16_8\x05\u00E3\x1F>\u00C6\u00EE\u00913\u00D0P\u0091\b-\u00FFW\u00B1b\u00B4\x03d\u009Cz\\\u00DEu\x10'.\u00DF\u0085\u00FFwk\u00B1:`\f\x12O\u00ECDl\u00D3\u0088r\x0EO\x13S\u00C7\u00DCK\u0087\u00D3X\u0087\u00E9o,\u00C6t\u00E6{\u00DC\u00D5_\u00B1\u00E4\u00CB\x13\u00EC\u00FES\u00D1#\u00F0\u00F5\u00BE\u00FDh(K\u00C3\u00FBo\u00ADd\u00F7\u00C53\r\x01\u00D3\u00E2\x1B\u0088\u00C8\u0094a\u00F2\x14c\x04\u00ED\u00FA\x04e\u00B2^\u00CAr7\u00B2\r\x04\u00A6\u0098\u008D\r\u00B0\x1E\u00B1\x10i\u00C7\u008Ec\u00D9\u00C6m\u00EC\u00B1\u00C8?\u00B7#\u00AA\u00FC\x06\u00F2U\x7F\u00C0\u00BA\u008D\u00BD\u00E5e\u00FF\u00ED\x1A\u00B6T\u00EB\u00E1\u00DD\u00CF\u00BE\u0084\u0080\u00C9^}I(\u00DC\x02'a\u00FChw\u0088\u00F2\u00A2\u00A13q<\u0084\u00E5\u0091\u0088.\x14\u00915e!\u00E5\x0B\u0090t\u00E7\x12>g>\x1Fl\u00DA\u0086\u00E9\u008D\u00C1\u00B0\x1C:\x19[\u0087L\u00C6\u00F4\u00E9\u00D3i\u00C5\u00A3P\u00BA )\u00E1!\u00B8V5\x0B\x1B6}\u00C9l\u00D5\u00E0\u00EC\u00C6\x05\u00D8\x1B\x1B\x0B\u00ED\u00BA\u009E\u00F0\x16\u00E4\u00E3nD4\x1BNG\u009C\x0B\u00E7Y\x1F\u00C127\x12\u00BB\u0092\u0092q\u00F1\u00AF`\x1Cxk<\u00F8\u00E2t\x14\u00A6\u0097u\x19{\u00D0\x05]:\u0080\u00C0\u0099\x0BPz\u00F3(\u00A2S\u00EE\r\u00CE\u00B0\u00B1sEME6\u008AJEM\u0082\u00ED\nYa\"2\u008B\u00E5\nn$\u00B4\u0086\u00864[\u00B9\u00AD\u00C0\u0080\u0089'T+b<k)\u00A6\u00BE9\t\u00D7~\u00DE\u008D\u00CC\u00A6\x15\u00D8\fL\u0085\u00D0j,\u00BE\x17\u00C7\u00C8\x066<12\n\u00E4\u00AF\u00A9i\x1A\u00EA\u00C3\u00CAD\x07\x19q\x19\x107\u00D5\x02.O\u00FF\u00BEt\u00DAC\u009E\u00E7d&\u00CF\u008F7\u00EA\u008D4\x1C\\\\\u008C\x10\x1F\u009B\u00C1\u00E6\u00C9U\b\u00F9w\u00E51+\x14\u00C6\u00C6\u00A3\u00B4)\u00BC\u0096\u00A1\x10\x06\u00DA\x12\u00E5 \x18b\u009B\u00CA\u00CC$x\u00BC4\x0F\u0096\u00D9\u00A7p\u00E0R:\u00ADT\x14J\x07\u00F0\u00AC-\u00E8b\u00ED\u00DD\u008F\u00BD\u00AFfe\u00CB\u00EF%\u00B6n^\u00A8\u008C\x0BW\u00DEk\u00BA\x00\u00EB\u00A8\u00A8S(\x14\n\u00E5\u00B9\x10\u00F5\u00E7\u0080u\u00F4\u0099:\u0085B\u00A1P(]\u0084\x07>S\u00E7\u00AB\b\u00A8\u0085(\x14\n\u0085\u00D2&\u008F\u00B2\u00A0\x0B\u00D5\u0091N$\u00EA\u008D\u00F5\r\u00D4B\x14\n\u0085Bi\u0093GY\u00D0\u00C5\u00D2\u00C2\u0082\x1A\u00EAi6\u00B4\u00A8\t(\x14\n\u0085B\u00A1\u00A2N\u00A1P(\x14J\u0087bmc\u00F5\u00C8a\u00D5u\r\u00A0\u00AE\u00CA\u00BB\u00B7\u00AD\u00A5\x03\x01\u00A7k\u00D9\u0083\u008Az\x07\u00A1%t\u00C1\u00FBKf\u00B3\u0093\u00CE\u00FC\x13F\u00BF\u00BB\x11\u0081\u00BE\u00DD`\u00E8\x1D\u0088@\x1F\u00DBG\u008E\u00A7ge\u00FFX\u00E1[\u00E3;\u00F3m\u00BC\u00F1\u00E2\u0083\u00E3w\u00F7\r\u00C0\u00A6%\u00A3\x1F\u0098\u00EF\x7F\u008A\u00A7\u00DFH\u00EC?\u00B0\r=\u008CUh%\u00A2P\u009EsL\x02\u00E6\u00E0\u00CD7\u00E6c\u00D6 \u00EB\u0087\u0086\u00B5\u00E9\u00EE\u008D\u0095\x1F,\u00C1\u0092yS\u009AZ\x03\u00C3\u00B0\u00EC\u00E3\x0F\u00B1f\u00C5\u00EB0\u00ECB\u00C2NE\u00BD\u0083pp\u00B5\u0082\x137\u009B].t\u00C4\u00FB\u00DF`\u00FF\u00FE\x03x\u00C1\u00D7\u00ED\u0091\u00E3\u00EB\u0098X@]M\x15\u00E6BS\u00D8\u00D9\u00E8>\u00F8\"sU\u00F0\u00CA\u00EA\u00CD\u00F8\u00F8e7h\u00AA\u00AB?4|{hj[a\u00E2\u0090\u009E\u00E0\u0095V\u00B3\u00DB$\u00DF?~\u00BE\u00F4\u00BEp*\u00AAj\u00B025x`\u00BE\x1F\u00ED|&X\u00B1c\x1F>]\u00F0\u00D2\u00BDF\u0085\u00BF?\u00B6}\u00B1\x1D\u00DES\x16\u00C3\u00FA\x11\x1BD.\u00D37\u00D0\nG\u00A1t!4\u00F4\u008D1v\u00F6[\x18\u00A1q\x17[>\u00FF\n\u00C9\u00FC@\u008C\t\u00F4h\x19\u0088\u00A3\x0EU\u00B5{\u008D\x7F-MCd\u009E;\u008C\u00C42\x1D\u00F8\u00B8\u00B9a\u00C2K\u00FD\x11y\u00F52j\u00D4\u00ADad\u00A4\u00D6elCg\u0094\u00EB \u00CC\u00F4\u009Cq\u00E9\u00E8\x0F\u00D03u\u00C7K\u00BD\u00D4pj\u00D7Y\u00F8;\u0098\u00E1bP\x1C\u00C6\u00BE\u00B6\x02S\x06\u00CB\u00BD\u00D9[\x07\u00BF\u00C5w'\u0092\u00B1~\u00EB\u00A7\u00B07\u00D0\u0082LR\u008E\u00AF\u00D6\u00AF\x03\u00C8\x00\x15\u00E6\u00E3\u00D0'\x00\u00FD\x18m\u00FB-\u00A8\x01\x1F\u00AE\\\n;=.Nmx\x1D\x05C?\u00C3\u00EC>f\u0090T%\u00E3\u00F4\u00B1k\x18\u00E5b\u00C1\u00A8\u00DBJ\u00CC\u00ED\u0093\rsQ\x18\u00F6\u00FC\x1E\u0089\u0097\u00E6\u00AF\u00C6\u00A4\x01.H\u00BB}\f+\u00B7\x1C\u00C5\u00F8\x15\u00DFb\u00A4\u009D:#\u00FC\x1A8\u00B5\u00F3+\x1C\u00BC&\u00C1\u0092/\x17\u00A1\u00A7P\x03\u00F1\u00BFo\u00C0\u009E\x14!\u00CC\u00EBb\u00F0\u00C1\u009D\"e\u00BES\u0083\u00D40\u00DD\u008E\u008B\x03iR\u00D8\u00F4\u00E8\u008D\x0F\u0096\u00BD\x03}\x1E\x07\u00E2\u008CSl\u00FE[\u009F\u00A3\u00BE\u00A1\x013\u00DFX\u008A\x19oH\u00F0\u00D3\u00D6/p)(\n/-\u00DD\u0084I^V(M9\u0087ek\u00F6('\u00C21u\u00ED\u0086n\u009C\x10D\u009A\u00F8\u00C0\x00\u00C7 \u009C\u00BA\x1A\x01\u009E\u00D6\u00F0\u00EB\u00F1!x\\\x1E\u0086\u00F5\u00FB\x0E\u00A77.F\u00E3\u0090u\x18\u00D3\u00D7\x0E\x11\x7Fl\u00C3a\u00E9\x10\u00AC~Q\x03\u0095\u00F5j\u00D8\u00B7\u00F8=D0\u008D&)\u0087\u008E\u00BE\u00A5P\u00BA\x12\u00A3'\u00CD\u0086\x0B7\x03\u00A7\u00E2bPXQ\x03QT$f\u00BF\u00FA\x12\x16\u00E8r\u00B0\u00E3x$\x1BFf2\bC\u00ECrp\u00E2\u0096|;.\"\x1C\u00CE\u00D3&\u00C2\u00D1T\x1F&\x1A\x03\u00A0\u00A2\u00CD\u0081\u00CC\u00D5\x11w\x0E\u00EF@BQ-\u00F5\u00D4)\u00FFR\u00D4\u00ED\u008C\x11\u0094!\u0085\u00B1\u00B5\x10Z%\u00918pi/4\u00DC\u00E4-Ms\x0B\x03\u00ECY\u00F1\x0E\u0096\x7Fy\x10\u00AE\u00A3'\u00C1\u0080c\f\rQ\x02\u00A6\u00BF\u00B3\x1E\u00A7b\x1A\u00F1\u00A2\u00E7=\u008F^CM\x03\x1A\x1A|\u00F4\u00F6\n\u0080Yy\x04\u00BE\u00DC\u00B0\tW\x0Be\u00A8J\u00BD\u0081\u00B5\u00EF\u00AFE\u0092\u00C0\x11\"\u0099&\n C\u00E1\u00ED\u0083\u00B8\x11\x1C\u00CA\u0086\u00D7\u00D1\x18\u008C\x17\u009C\u00A5x{\u00FA\u00DB\u00A8\u00B1\x1A\u0084\u00F1\u00C6\\\bT\u00B5\u0091\x11\u00F47\u00D6\u00EF\x0B\u0086\u00A7\u00A7\r\u009C\u00A7L\u0086\u0087\u00B0\x06\u00DF|\u00BC\x06A\u00E9\u00850\u00D2SAIL({^E\u00BE/\u00C6\u00DDA\u00FF\u00B1\x03\u00D8}C^\u009C\u0082\u00E2k\u0087\u00B0m\u00E7\u00AFP\u00E5\u00C9\u00DA<\x07\u0087\u00C7\u00C3_?\u00FE\u0080\u00ADGC\u00F0\u00D2\u00B0\u00BEp\u009D\u00FA)&x\u00A9\u00E3\u00BB\x0F7\u00A2\u00C1a\bz\u00F5\u00B0T\u0096\u00CDH\u00D7\x18\u00997\x0E!.\u00BC\x18c\u00BA\u00F1\x11\x7Fh\x1B\"\x13\u0092\u00F0\u00CD\u00EAU\u0088\u00CE\u00C8\u00C7/_m\u00C5\u0089\u00C2\u00E1\u00E8\u00A3\u0097\u00C1N\x03\u00AB\u00DBw\x04\u00D4U\u00F8P\u00D7\u00B4BZ\u00F0\x19V\u00D0\u00E5Hh\u0085\u00A3P\u00BA\f\u00D6(\u00CD\u008EE\u0081\u00D0\x03~.\u00F29\u00DBu<\u00FDQ_\x10\u0087l\x18B\u00D9\x11_!F\u008D\u00E4\u00DEo_Z_\u008Cc{~\u00C0\u00B5\u00CB\u00F1\u00D8\u00BAs'n\x14\u00D6\u00E3\u00E2\u00EF{p.*\u00BFKY\u0087\u008Az\x07@\x160\u00B1R\u00C9B&#:\u00B6\u00D6\u00AE\u00A8\u00A85\u00C3\u00EAU+\u00A1i\u00E8\u0088\u00E1\u00D6\u00EA\u008C\x06\u00D5#3\u00BD\b\x19a'\x10\u009E!a+\u00A9D\\\t\x14\u00C7\u00E3\u00B7/\x0EB\u00CF\u00F1\u00FE\u00E7G\x0E\u009Ev\u00F8\u00BFU\u00DB\x10F\u00A6W\u00AD\u00B1a\u0084\u00DB\x12\x13\u00A7\u008D\u0082\u00BAD\u008A\u00DA\x1A\x11D\x12\x0E\u00EAJ\u0093QR$_\u00F8\u00D4h\u00F4 D\u009F\u00BF\u008CR\u00E6\u00BF\u00AB\u00E7\u00EE\u00A0\u00D7\u00F0\u00EE\x10\u00F0\u0081\u00D0\u00A4t\u00C4\u009D9\x01\u00A9\u00BE\x11\n\u0082\x7F\u00C3\u00E1\u0093\u00C9\x18;s\x1C\u00EA\u00A1\x07\u00A1\u00913\u00CE\u00FC!_\u00E2P\u0091\u00EF\x11\u0083\x06C\u00C7{<\u009Bo[S\x11\u00D6\u00EE:\u0081j\u0088\u00DB?\x07\u0087\u0083ri%\u0082\u008F}\u008B*\x1DKxv7\x01\u00AFV\f\u008F\x11\u00FEH\u00BF}\x13\u00E55\u00F7^\u00A3t\u00F7\u00F0\x06\u00DFi>\u00FA\u00F9\u00DBb\u00C0\u00EC\u00D90\x17\u0094\u00A3\u00AA\u00BA\x16\u00E1\u00E9\x19(\u00AB\u00AEGRh\x1CT\u00FC\u00BD!Q1\u00C1\u00BC\x05\u00F3\u0091\u009F\u0096\n]\b \u00E3\u00A4\u00E3\u00E0\u00C13\u00CAtd\x1CZ\u00CD)\u0094\u00AEC&\u00CE\u009F:\u00D1\u00C2\u00BB\u00965\x02\u00D1Qw\u00F0\u00D7\u00F1\u008B \u00CB;\rxq,&\u008CwCw\u00EF\u00BE\u00984e\"\x02\u009Cu`\u00E9\u00DC\x0BK\u00DE\u009E\x03\x1F_\x07\u00CC\u009E8\x01}\u0084\x02\u00F8\r\u009F\u0081%\x0Bg\u00C0P\u00BD\u00EB\u00DC#\u00E8\u00DD\u00AE#\u008C\u00EE<\x02eqI\u00ECw\u00DF\u00DEfX\u00F0\u00C1j|\u00B2~\x03~\u00FE\u00ED/L\u0099;\u0096\u00DD\u00AF\u00CE\u00E5B\u00CFo2zY\u008A\x11\u00CE\u00FA\u009A\\F\u009C\\1w\u00E3\u009B\u00C8\u0088NeZ\x06\u00E4\u00D2\u00DD{\u00A6\u009C\u009FP\u0088)\x1FO\u0083\u00A5\u0081>4\u00B4za\u00EA\u00B8\u00BE\u00B8|\u00E2 \u00C2\u008BdL(\x0EdL\x03BU\u00DBT\x19\u00BE\u00ECz\x04\u00DC\u00FD\u00E5\x0B\u00A7x\u00FBz \u00EAzl\u00D3\x11&M\u00D2]\u00CD8\u00B9\\=\x03T\u00C5\u00FF\u0080\u00BF\u0082\u00EFb\u00EEd_\u00F4p\u00D5\u00C1\u0089\fq\u008B|\u00AFY\u00BE\fA\u00D5\u00C6l\u00BE\u008B\u00C5FX\u00F0\u00A2+x\u008Cp\u00CB\u00C0\x7F\u00E09\x06\u00CE\\\r\u00B5\u009Cxdd\u0096A\u00AA\u00A6\u008D[\u00E7~\u00C7\u009F\u00D7o!\u00BB@\u00BE:\x1CY\u00FE\u00D5U'\x01\x1F\u00AC^\u008F/6\u00FF\x04\u0099\u00E5@L\x1F\u00A4w\u00AFa\u00C4x\u00FCz\u00CCG\x14\x15\x0FUY5v\u00EE\u00F8\x1E\x7F\x1E\u00BB\u00882\u00BE\u00DC;\u00E7\u00E1\u00DE\u00FB\u00B3\x1C\x19\u0087V:\n\u00A5\u00AB\u00DDG\u009B\u00A9\x17\u0087\u008F\x16\u00F7\u00C3kg\u008E\u00E3\u00D8\u00E9d$D\u00DC\u00C6\u00D1\u00C3\u00BF\u00E1jb%\f\u00F5\r\u0091td\x0F\u00E2\u00D2\u00CB\u00F0\u00E7o\u00BF\u00E3FF-\"\u0082\u0083Qo\u00EE\x06sC\u00AD.c\x17:\u00F7{\x070`\u00EEjH\u00C3\x0E!(\u00AA\x02~},p\u00EDf\u00B8\u00DC\u00B3\u00B5\u00B4C\u00AF\u00EE\u00D6p\u00ED5\x0E\u00D2\u00D4\u00CB\u00C8)\x15#.!\x161\x19\u00DA\u00F8j\u00CBk\u00B8y\u00E9<\u00AA\u00AB\u00C4\b\u00BB\x1D\x04\x1Dg?\u00F4\u00D0\u00ABGZ\u00836\u00CCP\u0088;\u0089\u00A5\u00F0\u00F1t\u0083\u00A1\u009E\x0E\u00E2\u00AE\u00FE\u0085\x06\x1B_8\u009B\n\u00C1\u00AD)CX\\\x14\u00D4\u00AD\u00BA\u00C3\u00D3\u00DE\x1C%\u0085\u00D9\u00E0\u00D6\u0096\u00E3\u00F4\u0095\b\u00F8\u00F4\x1B\u0082\u00EE\u008E\u00A6\u00C8K\u00BE\u008Bs\u00B7\"\u00E0\x198\f\u00D5\u0099w\u0091\u0096\u00D5\b\x7F_K\u00A4\u008A\u00B4\u00D0\u00DD\u00C6\x14\u00FA\u00FC:\u00C4\u0085\u00DEE??'\u00EC8x\u009A\u00EDih\u009Eo[\u00EF@\u00B8\x1A\x03\u00D9Iy0wp\u0083\u00BE\x0E\x17\x059\t\u00B8\x1C\x14{\u00DF9\u00DC\u00FD\x07\u00A3\u00BB\u00B5\x10\u00E5%\u0085\u0088\u008D\u008E`D\\\no\x7F\x1F8Z\x1A\u00A2\u009E\u00D9w\u00EB\u00C6u\u00E4U5\u00C0\u00D4\u00AD?l\u00A4\u00B9\bNHc\u00CF\u00D1\u00FB\u0085\x17a\u00D0\u0090\u0087\u0092F-\u0084\u00DC\u00BA\u0089n}\u0087\u00A0\u00B7\u009D*\"\u00AF^\x00\u00DF\u00CE\x1F\u00DD\u00ECMQ\u0092q\x171\u0095zp5\u0091\u00E0\u00FA\u00B9\u00EB\x105u\u00BF\u00DBx\x06 #\u00F2\u00EA\x13\u00B9\u0096\x13l\u00EDa\u00C3\u00A3#\u00F1)\u00CF'\u009A\u00EA\u00FA\u00A8\u00A9-o_`\u0098\u00FFT\u00F8\u00BC\u00FF\u00F4\u009C\u00F9<\x19.\u00D5\u0088`\u00E3\u00D1\x0B\u00E6\u00EA<v\x02\x1C2\u00B3]fZ\x02r\n\u00EF\u00E5E\u00A0i\x0B+\u00DDj\u00A4\u00E6\u00CA\x17\u00CE\u00D2\x13\u009A\u00A2\u0097OoH\u00CA\u00D3q\u00E9V4T\f\x1D\x10\u00E0\u00E3\u0082\u0086\u00B2,\u0084\u0084D\u00A3Z\u00D6%.\t]\u00D0\u00A53\u00B2`\u00D5f\\\\\u00FF\x01\x12\u009AZ\u009E\u00C4C\u00FFbm\x00>X\u00B3\u0093\x1A\u00A7\u0093\u00F1\u009E\u0083+\u00BA5\u00AASCP(O\u0089T\u00F5F\x1C\u00AA\u00AB\u00A2\u0086hG\u00D4i\u00F7{'\u00A4(3\r\u00E2f}K2\u00D4 =%\u008F\x1A\u0086B\u00A1P(\x0F\u0084\u00BE\u00D2\u00D6\t9\u00BAwG\u008Bm\u00AE,\x13\u00DB\u00F6eR\u00C3P(\x14\n\u00E5\u009F\u008B\u00BA\u00BA\u00A6\x06\u00B5\x10\u0085\u00F2\x008\x1C:\b\u008FBy\u009A\u00D456\u00A2\u00A0\u00B0\u0090\x1A\u00E2\u009F\u0088\u00BA\u00B8\u00BA\u0086Z\u0088By\x002\u0099\u008C\x1A\u0081By\u00CA\u00BF9\u00AAM\u00EDC\u009F\u00A9S(\x14\n\u0085BE\u009DB\u00A1P(\u0094g\x0B\x0EO\x13\u00B3W.\u00C7x[^\u0097,\x1FOWWwm[\x07t\u0085\u00F6(\u00C9M\u00A45\u00E0\ta\u00EA\u00D2\x1Bk\x16\u008F@Y\u0085\x00(\u00C9G\u0095T\x06#\x0B[\x04\u00F8\u00B9#?-\x0B\u00F5\u00FF\u00B0W\u00D7\u00DD\u00EF\x05\u00BC\u00EA\u00CD\u00C3\u00CD\u0084\u00D2\x7F\u0095?E:\u00D9j\u00DD\u00D0\u00CF\u00CB\x15\u008E\u008E\x0E\u00B00\u00D4BFNA\u0087\u00D8\u00CB\u00C8\u00BE'\u00BC\u00BB[\u00A0(+\x1F\u008D\u00ED\u00D8\u00F2\u00C6\u00B5\x18\u00B8\u00F7\x0F\u0084\u00A7Wo\u00F4\u00E9\u00E1\x00#=Ud\u00E5K\u00F0\u00D1\u00B6\u00AFp\u00FD\u00C4\u0093y=\u00B3\u009F\u0081\x11\u008C\u00A5tny\n\u00E5iQ\u00C6Q\u0085\u00F9\u00E0\u00DE\u00E8;h\x16\u0096\u00CC\x1B\u008A\u00C4\u00A8\x14\f\x1C1\f\x1E=z0\x1F[pJ2Q j\x7Fj\u00E8\u00A9s\u00E7@\x1A\x1F\x03\u00ABq\u008B`T\u0091\u0088\u00C4\u00BC\u00F2\u00AEd\u009E+\u00D4S\u00EF l\u00AC\u00F4!I\u00BE\x0E\u00CB\x1E\x03 \u0094H\u00D9}Z&6\u00981k84\u00FE\u00C5\u00D8+{\x0BO\u00C4\u00DDH\u00F9\u00D7\u00F9S\u00A4\u00A3\u00E61\x06\u00DAu5H/\u00AC\u00C3\u00D0ioa\u00EDl\u00DF\x0E\u00B1\u0097Z\u00DF\u00A9\u0098\u00BFp\x02\u00D48\u00ED\u00DB\u00D2\u0089\x11\u00F4\u00F7\x17L\u0084ie4\u0082\u0093\u008B0\u00E7\u00ADe\b\u00F4r\u0083\u00A6\u00E6\u00D3\u009B-J\u00C3M\b\u00FBe3\u00E0sx\x1B\u00FA\u009E\u00F8\u0099\u00FDk1k(\u00AD\u00F0\x14\u00CA\x7FD#\u00A7\x1AG\u008F\x1E\u00C7\u00EEm\u00CBq\u00B9\u00C2\x12\u00D6\x0E\u00C68\u00F2\u00CB\u00AF\u00F8\u00E5\u0097\u00C38\u00F8\u00CB\tD\u00E5\u00D5\u00B1\u00E1\u00A4\x1Ck\u0098[\u009A\u00B4\u00F0\u00D0\u00E7\x7F\u00B6\x0BH\x0E\u00C3\u00C1\u00D3\u00E7\u00F0\u00D5\u00AA\u00F7`7fQ\u0097\u00F3\u00D8\u00E9+m\x1D\u0084\u00B5\u00B9\x07\u00FE<q\x11&#\u009B\u00B9\u00E4R\u00B9b\u00F5{a\x12\x06\u00F7Q\u00C5\u00DF\u00B7e\x10\u0095'\u00C3\u00D6o\ft\x18\u00A12\u00F3\u00F4G\u00F5\u00B5\u009D(ux\x15\u00CEz\u00B5\u0088K\u00CDE\u00FF>\u00968\u00FA\u00FB\x15\u00D4\x15\u00E7\u00E0RH\f\x1C\x1C\x05\u00F8\u00EA\u0088\f\u00F6\u00AF|\u0082\x01e\u00A7\u00B0\u00F7\u00CC-\u00AC\u00DA\u00B0\x1C;\x0E'\u00E3\u00A3\u00B7\x07\"\u00F1\u00C2U\u00D4\x17\u00DD\u00C2\u00E5R;\u00CC\x1C\u00E4\u008C\u00E8t\rX\u00A8\u00C7!\u00DFy<F\u009B\u00D5#6\u00F2:>\u00DF~D\u0099\u008E3\u0093\u009FJY5\u00E2\u00C3\u00C2\u00B1\u00AB\u00AE\x11\u00EB?~\x05\x01\u00C7\u00EF\u00C0r\u00C2\u00FB0\u00AE\u008E\u0084\u008E\u0083\x1F\u00AE\u009C\u00D8\u0083\u00D4F\x0B\u00BC6a0\x12#\u00E3\u00D1\u00A0#\u00C4\u00B8\x17\u008C\u00B1q\u00F6j\u00A8\x05\f\u00C5;\u00C3\u008D\u00F1\u00C3\x05\x19f\x0Fu\u00C0\u00CD\u00E0$\u00B8\u00F9\u00F9\u00A1\u00BE \x1AU*6\u00A8\u00BF\u00BD\x13{\u00C3\u00B40\u00EF\u00F51\u00B8\x1B\x1D\u0089\u00BE.B\u00AC\u00FD6\x04\u00AB\u00BF\u00FF\x00\r\u00D1A\x10\u00D8\u00F7E\u00E6\u008DSL\u00D9\r \u00AD.\u00C5\u00A8\u00B1S\u00D0sd\u0080\u00B2\x1C{.f(m\u00E92f\"\u008E\u00AF\u00FD\x18\u00BF&U\u00B2v\\\u00B1\u00DB\x17\x13\u00EC\u00CC\u009F\u00EAu\u00D5\u00EE\u00EE\b-G\x17\u00E4\u009F\u00FC\x03\u008D\u00D5\u00D50\u00EE\u00EF\x0F\u00CB\u00C9\u00AF\u0082\u00AB\u00A9\u0089\u00AC\u00ED\x7F\u00D0\u008AO\u00A1\u00FC\u0087\x1C\u00DB\u00B1\x05\u00CBg\u00F8\u00E2\u00D4\u00C5\u00DB\u00F7\x1D\u00D3\u00B7\x1F\u0088!N\u00A9\u00D8\u0097-\u00EF]\u00F4\x1D2\x0E\u00A6\u00E2\n\x145\u00DC\u00F3\u00E2%\u0092zx\u00CC^\u0089\u00F4\x03? \"\u00A9k,\u00ECB=\u00F5\x0E\u00C2\u00D1N\u0086[%\u008D\u00E00\u009A.\u0096J[\x1C\u0093\u0082\x03\x03\u0097~\u00F0\u00B4`*`%\x17#\u00FBX\u00C3\u00A9{/h\u00AB\x18\u00C0c\u00C24\u00E8\b$\u00F8n\u00E5j\x04\u00C5&@]\u00D3\x16C|\x1C\u0090\u009C\u009A\u00C8\u00CE\u0097\u00AEQq\u0097MC\u0085\u00C3W\u00BEn%\u00E0\u00F3\u0091\u00A7\u00AD\x0B\x03M\x1D\x18\u00EB\u00D7\u00B1B\u00D8k\u00C2tX\u00B8\u00BA\u00A3\x7F\x7Fsx\u00F6\u00F1\u0084\u00AA\u008A\x1A\u00F8\u00E57XAo\u009ENs\u00AA*k!\u00E3\u00AA\u00C1T\u00B7\x0F\u00DC\u00F5S\u00B1\u00E5\u00D0Y\x1C\u00BFv\x13\u00F3g\x04\"`\u00C6<\u00DC\u00BE\u00F2\x17~\u00F9\u00E3W\u0084F\u00DD\x05WE\u00DE^\u00E4r\u00B8\x10\u00F0\u00B8\u00EC\\\u00ED\u00A5\x11\u00BF\u00E1\u00E7c\u00BF\"\u00BD\u00B4\x1A\u00FF\u00F7\u00D5\u00FF\u00E1\u00EC\u00F5\u00EB\u00E87b0\u00B8}\u00C6\u00C1\u00C9\u00D1\x1E\u0083\u0087\f\u0081\u0085g\x7Fx1\u00F1T\u00D5Uq\u00E3\u00CA)l\u00FA\u00F1\x1Al\u00D5J\u00F0{L)\u00A4U\u00B18\x11\u0095\u00D4\u00A2\x1C\u00CDm\u00C9\u00D5TAu\u00D9\u00BD\u0099\u00A6\u00CAS\x0B\u00A0\u00AB\u00F9t\u00DB\u00AD\u00C5gC\x105o\x15r\u00F6\u009EC\u00C1\u00D1\u009B\u00B8\u00FB\u00DEf4\u008A*!\f\u00A4\u00DE:\u0085\u00F2_S\u009Ar\x07w\u00F2\u00CC\u00F0\u00F6@\u0083\x16\u00FB\x17-_\u008F\u008F\x16\u00F4\u0085/\u00E3\x04|\u00FE\u00F5\u00E7X<\u00C6\x06\u00B7\u00CE\x1C\u00C4\u009Au?BK\u00E3\u00DE\f\u0090:5\u0089\u00F8d\u00ED\u00BA.#\u00E8T\u00D4;\b2\u00ED\u00ABjIZS\u009F\u0090*\u00DC\u008C\u00E5\u00DD?\x12\u00B2\b\u0089\u008C\u008B\u0088\x0B\u00E7\u00F0\u00DB\u008D\x1C8\f}\x05/\u008E\x1E\u00CC\u00EC-\u00C3\u00F5\u008B\u00E7p\u00E1\u00D4\x1E\u00EC\u00DA\u00B6\x0F52\x19\u00D4\u0099\u0086@\u00DC\u00CD\u008B\u00F8\u00E2\u0097s\u00A85\u00F1\u00C5\u008C\u00E1\u00FDQ\u00EF\u00E5\u008B\u00FC\u00B4\nyZD\u00CB\u009A:\x01H\u00BA\u0082\u009B\u00BB\u00F0\u00EA\u0086\u00BD\u00D0v\x1B\u0081M\u00F3|\u00A1\u00C2\b}|H0._\u00BE\u008A\u00BD?\u00FD\u00DA\u00943\u00F9\u00B3\u00E1\u00E6\u00E94\u00C7\u00C2\u00D6\x00\u00FC\u00C6\x02\x04e\u00CB k\u00E3\u0091\x15G\u00F1z\x17\u0097\u00F9\u00DB(kj\u00A04\u00ABl|u\u00A5\u00D0\u0093\u00FC\u00F3\u00996\u0087\u00A4\u00B1\x11Z\u00FA\u009A\u00C8\u008E\x0B\u00C1\u00D9\u00CBWp\u00F4\u00E0\x1E\u0084+\u00D2\u00E3\u00F2\u00A0V\u00DB\x00\u00AE\u00A0I\u0098\x1B\x1AQ\u0096\x1A\u00DA\u00A2\x1C\u00CDmYS\"\u0086\u00B3\u00CB\u00BD\u00B9\x15L\u00FB\u00F7@EI\u00FDS\u00BD\u00B6\u0092\u00CAzZ\u00C1)\u0094\u00A7HJ\u00CA\x15\u00F4\u009B8\u00A5\u00C5\u00BE\u0098\u00C80\u00DC\u008E\u00C9AAz\x12B\u00C2B\x10\u0099\"b\u00F7\u00F38j-\u00EFY\u00BC\u00AE\u00D7YME\u00BD\x03\u00B0\x19>\x0EII\u00F2i_\u00B32\x12\u00F0\u00E2\u008AU\u00986|(F\x07\u00FA#\u00EC\u00D8Q\u00D8\x0F\x1A\x02qF\bb\u00D2k\u0091\x17\x17\u008E\x1B\u00F1\x12X\u0098\x0B!\u00E1\ba\u00C2\x11+\x17#r\u00EA\u00E9\u0083\u009E\r\u00D9\u0088\u00B8\x16\u00C3\u0088\u00A7\x0E\u00E6L\u00F0Aj\u0089|\u00F1\u0082\u00CC\u00B3\u00E7\u00E1\x1E0\b/\x0E\u009B\r\x13M.\u00CC\u0087\u00BE\u0086\u00F7\u00FB\u00F3\u0090\u0096\x16\u0083\u00FA\u00C6z\\;\u00FA\x07\f\u00CD\u00CC\x19Q\u00AD\u0087\u0081\u00BE\u00B6R|\u00B9\\\u0095\x16\u00E9@*\u0081g\x0F_L\x7Fm\x11^\x0Et\u00C7\u00D6\u00FFmG\u00964\x1Ai\u00B2\u00EE\u00983|\b\u0086\u00F6\u00F3\u00C5\u00FEC\u00D7\x10\u00F4\u00EBn\u00F8\x0F\x19\u0087\u00E1\u00C3\u0087\u00C1J\u00A0\u008E\u009CZ+\u00CC}o\x1A\u00FA\u00BA\u00FB\u0082\u00F4v\u00C9\u00D8\u00C6L\u00D3\x10\u00B7\u00A6\u00FC+\x1E<\u0088.\x1D\x01W\u00CF\x12\u00BC\u00C6\x06h2\u008D\x1CEo\x05\u00DB\u008D\u00D1\u00D40\u00A8\u00A9\u00AE\x06\u00CF\u00DC\x17/\u008Dx\u00A9E9\u009A\u00DB2\u00E4\u00F6i\x18O\u00DB\u008C\u00B5o\u00BF\u008A)3\u00E6\u00E2\u00BD\u009E5\u00F8;\"\x1Au\x1D\u00A4\u00B3<\x1D\x15X-\x1C\x0F\u00BE\u0096\x0E\u00B2\u008F\x1Cxj\u00E7%\u00CF\u00F2\u00C9\u00B3\u00FDG\u0085\u0084%q\u009EG\x1E\u00D7V]\u00C9v]\u00E5\u00BA\u00C7G'\"C\u00D5\x17o\u00CF{\x15\u00B3^\u009D\u0088\u00BE\u00A6*\u00B8|\u00E2\x18.\\\u00CDDFd\b\x0E\u00FF|\x18WbK\u009A\u00EE9\u008D0s\u00F5\u00C0\u008B/\x0Ec?Z\u00BC\u00AE7\u00CF\x04]\u00D0\u00A5\x03\b\u009C\u00B9\x00\u00A57\u008F\":\u00A5\u00E8\u009E\u00D0\u00DB\u00B9\u00A2\u00A6\"\x1BE\u00A5\u00F2\x16\u00A5M7W\u00C8\n\x13\u0091Y,\u0097[#\u00A154\u00A4\u00D9\u00CAm\x05\x06L<\u00A1Z\x11\x12\x13\u00A5\u0098\u00FA\u00E6$\\\u00FBy72\u00AB\u00E4\u00E2i`*\u0084Vc\u00F1\u00BD8F6\u00B0\u00E1\u0089\u0091Q \u009F\u008DI\u00D3P\x1FV&:\u00C8\u0088\u00CB\u0080X\u00E1d\u00F3\u00F4\u00EFK\u00A7\u00DD\u00C6\t\u009B\u00E7d&\u00CF\u008DM\u00AD^MX\u00BBX\u00A10.\u009EM\u008F\u0094\u00A123\te\x0F\x18\u0089z\u00AF\u00C5\u00AC\t\x17&n\u00C1\u0083\u00C23\u00F97\u0096\u0096\u00A0\u0088k\u00A8,G[\u00B6\u0094\x1A\x19\u00C0E\u0093\u008F\u00A4\f\u00C5\u00ACS\u0086\u00CC\u00A7\u00E4\u0089\\\u00CB\u00B6\x16t\u00D1\x0Bt\u0081\u00CB\u00B2\u0095\u00CA\u00ED\u00EA\u00C4h\u00B6\x1B\u00BE=QiM\u00C4\u009B\u008BP\u0097]\u00F9X\u00F9\u00D0\u00F2\u00B1\u00868)\u009F\u00ED) i\u00C6\u00AC^\x01Qh\u00E6#\u00C7\u00ED\u00FE\u00C9F\x04\u008F\u009A\u00F9\u009F\u00DA\u0086\u00A4\u00FB\u00A8yx\u009A\u00E7\u00FB7\u00B6\u00FA\u00AFm\u00F7Ol\u00D4<\u00FF\u00FF\u00D6^O\u00E2\u00BA?\f2p\u00D4t\u00A4\u00BC\u00B1[t\u00E5\f2\u00BE\u00FFUy-\u00A2\u0097.A]N9\u00DC\u00D6\u00BD\u008B\u008A\u00A4\u00C46\u00C7\u00A1\u00C4\u00F2\u00C5\u00F8:%\u009E\nI\u00DB\u00D0\x05]:\u0082+?\u00EFh!B\u0084\u008C\u00B4x\u00A5\u00A0\u00B3\u00DB\u00B1\u00F1-\x04\u00BC\u00B80\u00F3>A'\u00942\u00F1\u00E2\u00E3J\x18\u0087\u00BA\f\x07\u00B6\u00EFj!\u00C4\u00A5\u00F9\u0085-\u00E3\x14g(\x05\u009D\x15\u009B\u00922\u00C4\u00C7\u00DE\x13t\u00B9c~\x7F:\u00ED!\u00CF\u00F3\u00BDp2I5\u009BoEz\u00E4\u00FB\u00A3\b\u00BA\"n\u00FC\u00C3\u00C23\u00F9gm\u00D4\u00AC\x1Cm\u00D9\u0092[\\\u00DAL\u00D0\u00F1\u00C4\x04\u00BD=\u00EA\x0B\u00CB\u0090\u00BE{\x07\u00B2\x7F\u00DD\u0087\u00F2\u00D0\u009B\u00D0tvG\u008F\u00AF\u0097\u00B1\u009E{k\u00C8\rUqS%\u00E2B\u00BE?\u00AE\u00A0\x13\u00C8\u00CDY\u00DD\u00C9\u00B4\u00D3\u00D4q\u0085`t\u00C6\u00F3u\x16[\u00FDS\x1Bu\u00B6k\u00FD8\u0098L\u00F2\u0083~O/D\u00BC\u00F1\x1E[\u00D7\x05Z\u00DA\u00B0\u0099?\u00F9\u00DEoWC\u008D\u00DDn\u00A8\u00AA\u00A2\x03K\u00FF!\u00F4=u\n\u00E5_\u00D0\u00D6{\u00EA\r\u00C5\u00D5\u00A8\u008E\u00CDBUd*J.\u0085\u00A0\u00AE<\x1D&#\u00C6\x03\u00EA\u008D\u00A8\u00BC\u00D3\u00B6\u0087a9}\x02\u008A.]D}^\x05\u00EB\u00C9t\u00FBt\x1D\u00BB\u008F\u00C4\u00ADa\u00BC2\u00E2\u00C5\u00A8Zj\u00C2y\u00F9\x070\x1D7\x04\x151!\u00ECy\b.\u009F,\u0080\u009A\u00B9\x15\u0084\u0083\x06\u00A3:'\x16F\u00FD\x03\u00A0\u00ED\u00EC\x00\u00DB\u00F9\u00AF\x01\x02\x11\u009B\x0FUK\x1D\u00C6\u00FBy\x07v\u008B\u00E7\u00C3p\u00A07\u00AAsS\u00D8s\x11T\u00CCu\u00D9\u00B89\x07\u008F\u00B1ii\u00B8Y\u00A2./\u00F7\u00BE\u00F0\u00EE\u00DF|\u008A\u0086\u009A<6?\u00E4\u00B5=\u00FD\u00FE\x1E\u00D0\u00F2\u00B4\u0087\u00DB\u00DA\x15\u00D0\u00EF\u00ED\u0084\u00C237\u0094\u00E5q]\u00B7\x14\x02\x1D=e\x19\u00EC\x17\u00BE\u00DA\u00E6\u00B9\t\u00A4\x1B\u00D8\u00ED\u00D3\u008F\u00D8\u00FC\u0092tD\u0099I\u00F0\u00DE\u00FB=\x1B\u0096o\u00C0\u0087\u008C\u00DF\u00C8\u009E\u00DB\u00FC\u00E5Q\u00A8J\u00BB\u00CB\u00C6%\u008F5\u00C8y\x15\u00E5k~\u00BE\u008A\u0084P\u00B6L\u00AD\u00E3\u00B4g+M\x0B!\u00AC^\u009B\x06\u00EB9S\u0095\u00F6&\u0082\u00DBV|\x02);\u00B9\x0E\u00E4zT\u00A7e\u00B0ii\u00B9\u009A\u00C2q\u00E9;\x0F\u00B57\u00B9\u008E$\u00ACnoW\u0098\f\x1B\u00D6\"\u00CF|=\u00D5\x16v q\u00CB\u00C2o\u00B0\u00D7\u0099\u00D8\u0088\u00D8\u0084\u00C4m\u009E\u00FF\u00DA\u008C\x12\u00A5\u00F7\u00DBV\u009Di\u009D\u00AF\u00E6\u00B6&u\u0084\u009C\u009F\\\u00F7\u00E6=G\u00CD\u00EB\u0099\u00A2\u00EC\u00CD\u00F3\u00DDP[\u00CE\u00DA\u00DBr\u00C6$e}P\\\x0FE=h\u00BD\u00AD\u00AC\x17k>B\u00C6\u00CF\u00FB N\u00947\u00BA\u00C5\u00F9\u0099\u00B0\u009B\u00B7\x10\u00F9\x7F\u009F\u0080\u00F9\u00A4q\u00E0p\x1B\u00A1af\u008E\u00C4Ow@V\u00D7v\x03\u00BF\u0088\t\x13TVLo>\u00ED\u00F8\u008C\u00D4S\u00A7P\u009E0\u00C5'\u00E5C\u00FF\u00F4{\u00FA<Z\u00F8\x0B\u00C1\u00AC\x17\u0093\u00B0y\x03\x1C\x16\u00BD\u00AF\u00DC_y7\u0086\u00DDO\u009E\u00CF;\u00BE\u00F7\u00B6r\x7F\u00C2\u00EA\x1DJO\u00BF\u00FCJ\x02\u00FB=\u00F3\u00C0~\u00B6\x1B\u009F\u00BCNG\x04\u00C6i\u00C9|\x14\u00DD\u00B8\u00CE\u00C6'\u00C7\u00EC\u00DF|\u00E3\u00BE\u00F3\x12\u00B1j\x10\u00C9=\u00A4\u00B6\u00C2\u0093\u00D7\u00F4\f}\u00E5\u00F3\x14\u00E8\u00FB\u00F4c\u00F3c>j\"{\u009E\u00B85\u00DF\u00B4H+\u00F5\u0087]\u00CA\u009E\b\u00D3\u00A1C\u0095i\u00E5\u00FE\u00F1;\\\u0096}\u00D8\"\u00AC\u00DB\u00DA5\u00EC~r\u009C<\u00A6 \u00DE\x1A\u00A1\u00E0\u00EC)\u00E4\x1F\u00BB\u00C2\u0086O\u00D8\u00FC\x19R\u00B6\x7F\u00AB\u00CCw\u00E1\u00F1\u008B\u00CA\u00F2\u0091\x1E\u0090\u00E6\u00E7#\u00DD\u00D9m\u00C5i\u00CFV$o\u00A1S\x16\u00B5\u00B0w{\u00F1\u0089-\u008D\x03_d\u00BB\u0089I\u00B7\u00B1\u0082\u00ACC\u00BF\u00B5k\u00EF\u00D6e\x16\u00A5$3Bz\u00FC\u00BE<\u00B7\u00B6\u0083\u00C2sm\u00FE\u00B7\u00AD\u00FC?\u00A8\u00CE\x14\\\u00B8\u00C8\u00E6U\u0091/Ro\u0088]\x15\u00F9j\u008B\u00EA\u00D4T\u00F6x\u00C6\u00DE\x1F[\u00F4$(\u00F2M\u00CAB\u00F2~w\u00C9\u00C7\u00EC\u00B9H\u00BA\u00CD\u00EBA\u00EB\u00ED\u00E6\u0090.\u00F7F\u0091X\u00B9]\x13'\x17wE\u00CF\x03\u00B1-\u00F1\u00D2\u00E9\u0080\u00D3\x7F\u00CE\x03\u0087\u00FE\u00F1U\u00E8LY\x14\u00CA\x03y\u0084U\u00DA\u0088\u00D7\u00C7\u00DE\x14\u0093\x13\u0094\u009E\u00A9\u0086\u009D\u0085R\u00EC[\u00A3\u00ED\u00E1\x00\u0097\u00D5\x13\u00A0na\u00DBb\x7Fm\u0081\u00DC+\u00ABN\u00CB\u00BE\u00EFXk\u00C8\u008DS\u00D1\u008D/0\u00D1c\x1F\x01\u0090\u008F\u00ED\u009C\x05M\u00C7\u00EF\u00EF\u00E2'7T\u00F2\u00D8\u0080\u00D0Vx\"\x1CD\x1C\u008CF\x06)\x1B+<\u008D\x1D\u00E8\u00F9\u00C36\u00E4\u009E\u00F8\u00AD\u00DD\u00EER\u0092N\u00FA\u00FE_\u0094q\x1C\x16\u00E9(\u009F%\u0093\u00BF\u00E4F\u00DF\u0096-\u00C8+\u0081\u00C4V\u00E4\u00B8B\\\x14\u00F9\u00D6\u00F3\u00ED\x01\u00CB\u0097\u00A7\u00B7\x10\u0084\u00E6\u009E\x7F[q\u00DA\u0083\u00D8Sa\u00B3\u0087\u00C5'6%6r\u00FF\u00E2K\u00F6\u00AF\"\u00AEB\u009C\u009A\u00DB\u00BB\u00AD2\x13*\u00EE&\u00B0\u00E9\u0090p\u00CD\u00EBH{vx\x14\u00DA\u00AB3\u00A4L\u008A\u00BC\u0091\u00F3\u0091\u00E3\u008A<+\u00EAS{\u00F6\u0090\u00E7\x1B-\u00F2\u00CD\u00D3V\u00BB\u00CF6d\x1F\u00B1E\u00F3z\u00D0z\u00FB^~*\u0099\u00F8\u00EA-\u00AE\x15\u00FB\u00DBh\x1AW@\x1A+\u00A4\x11E\u00BA\u00E9\u00C9\u00F5o\u00EF7G\u00B5\u00E9\x1F\u008Azc}\x03\u00B5\x10\u0085\u00F2 Z\u00AD\u00D2f4\u00D2\x0B\u00E6\u00E3'\u00A0\u00E4\u00C6Uv\u00F2\x19\x15\u00A1\u0090}G\u009D\u00DC\u00CC\u00F2\u00FF:\u00AB\u00F4LY\u008F\u00A5zC\x0BoK\u00E1\t\x12\u00EF\u0087x9\u00E4&\u00DC\u00DCSR31\u0084\b\u0099\u00D0\u00B4\u00B3\u00848'\u00FD\u00BE\u00ACHkj\u00DB\u00CD&\tO<4\u00C5\u008D\u00B2\u00AD\u00E7\u00FB\u00C4\u00A3#bU\x15\u0093\u00DCfx\u00E2=\u00911\x02$\x7Fd\u00BC\x00{\u00E3?\x1B\u00C2|^G\u00AFC?\u00A1\u00E4\u00D2\u00CD\x16\u00E2\u00A6\u0088G\u00D2\"y&7nb\x1Fb\x0B\u00C5M\u009C\u00FC%\u00DBd\x7F[\u0082\u00A6HO1\u0098\u008D\u00A4GlD\x1A\x1B\u00C4FD8Z\u009F\u00AF\u00AD8\u008Fc\u00AB\u0087\u00C5'e\u00AEN[\u00C1^\x1B\x12\u00A6={\u00B7W\u00E6\u00D6\u0090\u00F4\u00DB\u00B3\u0083B\x00\u00C9\u00B5o/\u00FF\x0F\u00AA3\x0F\u00CAW\u00EB4[\u00D73\u0092\u0097\u00E6\u0082\u00DB\u009EmH\u00BD \u0083\u00DB\u009A\u00D7\u0083\u00F6\u00EA\x05\u00E9\u00ED\u00B1\x1C?\x0EU\u00E1\u00DF\u00B0\u00F1\u00AC\u00A6Nd\x07\u00CB\u00B5\u00EE\u00E5!e(\x0F\u00BA\u00DB\u00F6\u00F8\x12\u00E67G\u00B5\u00E9\x1F\u008A:\u0085By<j\u00D2rX\u008F\\1\u00BA\u0097\u00DC\u00A8\u00CBBo\u00B1\u00DD\u0096\u008A\x1B\x14\u00D9&\u00DD\u00D7\u00E2\u0094\u00BC\u00FBn\u00D4$\f\u00B9\u00C9\x11\u00B1\"\x02\u00DA\x1C\u00D2X 7orcN\u00FEzk\u008Bc$\x0E\x11d\u00D2\u00FD\u00DA\u00FA\u00A6O\u00BE\u0093\u00F0\u00F6\u00F3f+=\u00EF\u00E6\x1E\u0094\",\u00B9\u00F1*\u00BCP\"\u00F0m\u0085'\u00DD\u00B9z>~\u00AC\u00D7\u00CE>\u009Fmj\u00A0\u0090\u00E3\u00CD\x05\u009D\u00DC\u00F0\u00C9\u00A8\x7FrSo\u009E\x16\u00C9{\u00DC\u00DAu-\u00F2N\u00BA\u00B9\u0089wF\u00CAF\u00E2\u00A4\u00EE\u00DC\u00D3\u00E28\x11\x10\u00D2\u00E5\u00AB8\x0F\u00C9\x07\u00B1M\u008F/\u00FF\u00A7\u00CC?9w\u00F3\u00F3\u00B5\x15\u00E7a\u00B6jn\u00B3\u00F6\u00E27/3\u00B1U[\u008D\u0083\u00D6\u00F6n]fE\u009C\u00D66jm\u0087\u0094m_\u00C9\u00DF\u00A2X\u0086\x16\u00C2\u00D7<\u00FF\u00A4Q\u00F8\u00A0:\u00D3V= \u00F9'\u00F9j\x1D\u00B6u=#u\u00B7y\u00A3E\u0091\u0096\u00C2\u009B&^?I\u0083<zh^\x0F\b=w}\u00DDf\u00BD \u00932\u0091\u00D9\x15I\u0099[\u00D7\u00C3\u00E6\u00D7\u00924\x1A]V\x7F\u00C0N\u00E4\u00F4_C^\u00DB\u00F5\u00F4\u00EB\u0085\u00DA\u00F8\x10\u00C4\x15?\u00BC\u009B\u009F\u00BC\u0099cf\u00A8\u0082\u00DC\u00C22y\u00AF\u0088\u00A9\x05\u00F4\u00F8\u00B5\u00C8\u00CA.\u00E9\u0094\u00F7 \u00FAJ[\x07\u00A1%t\u00C1\u00BC\u0099\u00FD\u00B0\u00FB\u00EB\u00BD(\u0093\u00FEw\u00EFJ\u00DA{\u00F5\u00C6`a\x11v\u009DI\u00EF\x14\u00E9t\u0088-\u00D9W\u00F7*\u0091QP\u00C6\u00BE\u00A2\u00B7\u00E8\u00D3\x15\u00D8\u00FA\u00E1\u00D2'r\u00EE\u00B6^i{\x12\u00FC\u00DBW\u00AF\u00FE+\u00C8\x00(\u0081\u0096\x16R7\u00EF\u00A7?\u00E2.Hg\u00A9g\x0F\"\u008D\u00AF\x05\u00A7\u00F5\u00F3\u00A1B\u00E6\u00B8*\n\u00C6\u008A\u00CDW\u00B0\u00E6\u008B\x0F\u00A0!#\u008F\u00C2jpj\u00E3|\u00EC\u008Fm\u00FF-\u009A^\u0081C\u00F1\x1E\u00D3\u00E0\u0092J\n\u00B0\u00E1\u00EDeH\u00A8h\u00FFM\x1F5^_|\u00B4}1\x1C\u00B5\u00EBq\u00E5\u00BB\x0Fp]\u00DA\x03+\u00DF\u0096\u008F\u00B1\u00D8\u00BD\u00E3s\u009C\u00BF\x1E\u00D1\u00D9\u00CCC_i\u00EB(\u00CC\u00EC-\u00E1c%\u00C0\u00C0i\u00EF\u00A1'W\u00FE\\\u00D6\u00A6g\x00\u00F6\u00EF\u00DB\x00!\u00EF\u009F\u00AF\u00E8blh\x0E[}\u00B5\x7F\u009D?E:\u00AESW\u00E3\u00C0\u0081\x03\u00EC\u00E7\x7FKgv\u0098\u00BD\u00F4\u00FA\u00CD\u00C6\u00BA\u00D5\x0B\u00A0\u00CF\u00E5\u00B4k\u00CBr\u008E\x06f\u00AD\u00DE\u0082\x03[>\u00C5\u00A7_}\u0087/?\u009C\x02\x0EG\x00\x13K\u00B3.Qg\x1E\u00D4e\u00FC\u00B4\x04\u009D\f\u00F6k>@\u008C\u00D2\u00F5\u00E8\u00E8z\u00F60\u00C4(\u00C2\u00CA\x0F\u00DE\u00C2G?\x06\u0083o\u00DC\x17\x16\x1A\u0099\u00D8\u00B0|9\u0096\u00AF\u00F8\x18\x1F\u00AF\u00F8\u00E8\u0081\u0082N\u00980i8>\u009E9\x03?\x06\u00C90a\u0094\u00DF\x03\u00C3\n\u00C7\u00BF\bG\u00AD\\\u00EC\u00DAq\x00\u00FD\u0087\x0F\u0080\u0081\u00B6\x0EB\u00B6\u00CF\u00C3\u00A25\x17`\u00AB\u00A3\u00DD)\u00ED\u00D3\u00A5\u00BA\u00DF\u008D\u00B55\u00A1\u00AF\u00AA\u00F6L\u00E4\u00D5[G\x0B1GNAh:\x04\u00B5\u00DA\u00BA\u00A8\x11\u00F0`\u00C6\x03dYy\u00F0\u00B2w\u0084\u00B1\u009D5;\u00F1Zff\x1A\x1A\u00F8F\u00B03\u00D7\x06GR\u0087\u009C\u00C48hXu\u0083\u009A\u0080\u008F\u0086\u00DAZh\u00E8h@\u00C0\x04,\u00CA\u00C9DjA)|\u008D\u008Dq\u00FE\u00D25\f\u00F0\u00F2\u0087F]!\u00D2\nK\u00D0\u00DD\u00CD\x19\u00F11Ep\u00EDi\r->\x07\u00A2\u00FCT\u00C4\u00E4V\u00A2G\x0F\x0Fh\u00AAp\u0091\u009D\u0099\x0E5\u00A1\x15\u00F4\u00B8\r\u00EC\x1C\u0083\u00A1Q\u00F1\u00CAt\u00BA\u00F5\u00AF\u00C2\u00F9\u009D[\x10\u009BS\t/\u009F^\u00D8\u00B6h\x1C\u00F6\x1C\u00BA\nU\u00A1\x1D\u00EC\u00AC\u00F5!\u00A9\u00ABAH\u008C\u00FC\u00D5GW\u00B7\x1E\u00D0U\u00E7\u00A3RT\x07mu)\x12\u00C2\u00E3\u00C051\u0085\u0083\u0091*2\u008Be0\x17\u00EAAE\u0095\u008F\u00FA\u00DA:pTT\u0099|K\u0090\x13\x1F\u008D\x1C1\u00E0\u00E0\u00E8\x06#\x1DUT\x16f#>\u00B3\x1E\u00DD\u00BDl\u00A0\u00CAX\u0080\u00CF4p\u008AK*\u00E0\u00E9i\n{U)\u0086\u00F5\u00F4D\u00BD\u009EA\u008Br(l9\u00F9\u0085a\u00E8\u0095\u00F5\x17\u00F6\x1DIAq\u00BD\x00#FM\u00C4,\u00DFbh\u00A4%\u00C1\u00D9\u00C8\u00F0\u0089\\G\u00F5\u00A74)\u00E3\u00D3\u009E \u00A4-\u00C8\u0088\u00F3\u00DC\u00FD'\u00E9\u00C8\u00E4.Lg\u00A8g\u008FBNN\x19\u00F3\u00CF\u00B7\u00F8\u00C6j=z\u00F9\u00F8`\u00C7\u00E1\u00F3\u00F7\u00FF6M\x07\u00A2\u00B7y\x01\u00AE\u0086\u00C5\u00B1\u00DB\u0096\u00F6\u00DEX\u00F8\u00C1b\x04\u00FF\u00FC\x152\u00A52dn_\x02\u00FBe\x1B\u00F1\u00F14\x1E\u00F6\u009C\u00BE\u008D\u00BCR\u00F9+\u00A2\u0081\u0083\u00FDp\u00E5\u0082\u00FC\u00D1D\u00D5\u00CD?q\u00CEr\x1C\u0086\u008F\x19\x01\u009E\x11\x0F\u00E3Gs\u00A1\"\u00F2\u00C6\x07**8\u00B5\u00E7|\u00A7\u00B4M\u0097\u00EA~\x1Fam\u0083\t\x1C\x03\u00FA\u00CB\u00A4P(\u0094.J\u00EB\x19\u00E56m\u00F9\f\x1F\u00BD\u00F3\u00E1}\u00E1\f-\u00A6bH\u008F,\x1C>s\u009D\u00DD\x0E\x18;\x15\u00F6\u0086V\u00E0\u00E6\u00DE\u00C0\u00FF5\u00BD;\u00FF\u00C9\u0097\u009F#\u00F1.\u00E3\x1C\u00DC>\u0085\u00F0\u0098tv\u00DF\u00AB\u00B3^\u00C1\u00BE\u00BD\u00BF\u00B4H\u00CB\u00C4c >\u009B.\u00C4\u008F\x17Ka{\u00F6\x02\u00F6\u00CB:\u00ED\u00F4\u00B2\u00EB\u00E8@9\n\u00E5\x19\u00E2\u008D\u008Cpj\x04J\u00A7\u00C1\u00C1{\x04r\u00E2/\u00B7{\u009C\u00CF\u00E7AT)z\u00A2y\u00B8t#\x05\u009F\u00CD\u00F3\u00C5\u0087;\u0083\u0094\u00FB^\u009E3\x1F&\u00C6\u00B6\u00B0\u00D6s\u0086\u00A9\u00BB\x0Fro\x1D\u00C1\u0091\u00E3\u0087p\u008D\u00DB\x03\u00AF\x0E\u00D1Q\u0086\u00AB\u00CD\u008B\u00C3\u00FE\u00DD\u00FF\x07Umk\u00BC\u00F1\u00EE;Poh\u0080\u00B9\u00B5\x15\u00DE\\$Dy\u00FC\x15\u009CMQ\u00C1\u00BC7fBS*\x02\u00CFD\r\u00C3\x02dP\u00F3\u00F6\u00C0J=\x1B\u0084\u00FC\u00B6\x03\u00A7ow\u00BE\u00E9j\u00BB\u00AC\u00A8\x7F^\u00DDy\x07z\u00E8\x0B\x07\u00E1\x05\u008B\\\u00FC\x16\u009E\u0080\u00FE}\u00C7\u00A0\u0097U9\x0E\x1E\u00BE\n\u00D3\u00DE\u00C30\u00BE\u00B7*\x0E\u009FL@bV\x12|F\u00BC\x01\u00B3\u00AA\x1C\u00B8\u00F7\u00B6\u00C7\u00DF\u00C7\u008E\"&\u008F\x0B{\u00AD2x\x0E\u009E\u0080\u00DB\x07\u00F6Bla\x06\u00F5\u009C<T\u00EB\f\u00C0\u00D4\u00A1\\\u0084\u00CB\\\u00D1\u0090r\x1Ewb3\u00D8sL\u00E9[\u008F\u009DGr\u00B1pa/\x1C\u00BA\u0090\bK^8\x1At|\u00F0\u0092\u00BB\x06\u00CE\x168\u00A1\x1B'\x16{\u00CF\u00DC\u0086\u00A9\u0089.|\u0086\u00CE@ON\x046\u00FE|\x03~c^W\u00A6\u00D3#\u00F0U\u00E8\x16\u00DDFZ\r\x0F\u00E3\u0086\x0E@y\u00E8a\x1C\u00BC\u00DD\u0080\u00B7\u00E7\u008F\u00C7\u009F;\u00F6\u00C0n\u00F8d\u00F4\x10D\u00E2V\u00BD\x1F\u00FA\u00E8\u00E5\u00E2\u0087\u00DF/@(\u00EC\u008Ey\u00D3\x07!\u00F1\u00C2\x01\u00DC\u0095xa\\\u00CFz\u00FC\x1D\u00CDE?\u00BD\f\u00EC\u00BC\u009A\u0081\u0089\u0093\u00A7\u00B3\u00F9W\u00F3\u00EA\u0085\u00C9^\u009A\u00F8\u00EE\u00B8\f\u00B3G\u00E9c\u00CB\u00C1\x130\u00D26@Q\u0091\x1A\x16|4\x117\x7F\u00DB\u008F\u00ECJw\u008C\u00F3.\u00C5\x1D\u00A97^\u00F2\x10c\u00F7\u009E\u00CB04.P\u0096c\u00FB\x19\x15\u00A5-\u009D\u00BB\u00F5\u00C1\u0094\x17\u00BB\u00E1\u00CE\u0099\u00D3\b-\u00D1\u00C0k\u00D3F\u00E2\u00FC\x1F\u00E7\u00D1{\u00DCP|\u00FF\u00CD\u00D6g\u00B6.\u00F7\u00D1\u00D1G\u00A0D\x1B\x14\n\u00E5~B\"\"\u00F1\u00EA\u009A\u00C5\x18\x18Q\u0085|\u0091\b\u0085\u00CC}\u00EB\u00C8\u00EE\u00EF\u00A1\u00EB\u00F0*\u00C69%c\u00DF\u00E9{\u00A3\u00FC9\u00AD%\u008F#\x7F|VW\u0095\u0089]\u00DFla\u00BF\u00CF\u009E;\x03{~\u0094\x0F\x04\u00B5\u009E\u00B8\x1A\u00EE\u00B6\u008D8\u00F8\u00E3\x05X\x04\u00E8\u00E0\u00F4-\x01\x028g\u00F0}\u00CADLr6\u00EC\u0094\u00F6\u00E8\u00B2\u00A2\u009EX\\\u00D2i\u00F3\u00E6;9\x10\x11\u00F1{\u00D9<\u008A\u00D3\u00E3\u00E17\u00FD-,\x1C\u00F02\u00D0P\u008E\u00BD\u00EB\x16C\u00AD\u00EFR\u00ACY*\u009F1l\u00D7\u00D6\u00BFp)\u00DE\nK\u00DE_\u008E\t2 \u00F9\u00AF\r\u00C8\u00D75CvE9\u00D4<\u00FB`\u00D1\n\u00F9+\x1F\x17\u00F7\u00FC\x04\u00F3W<q-\u00E4 \u009B\u00AE\u00AC\u00E4.&\u00BE\u00FB1V\r\u00E1\u00A3\u00A1\"\x11Y\u00CE\u00E6xk\u00F4\u00EB\u0090q\u00EAqy\u00D7R\u00FC|9\x02\u00FF\u00FBn-\u00D6\u008C\u009C\u0081\u00C4\x13;\x11\u00CB\u00B4j\u00BD\u00F9)H*\u00AB\u00C5$\u00FF{\u00E9pT\u00F4\u00B1\u00FA\u00CD\u0085\u00EC9\u00E2\u00AE\u00FE\u008A\rg\u0093\u00D9\u00EF\u00C7R8\u0098\u00BB};\x1A\u00CA\u00D2\u00F0\u00FE[\u00BBP\u008A\u00DBp\u00FDz\x17\u00D6l\x19\u0087S\u00FB\u008E\"L\u00C3\x06\u00BD__\x07W\x0E\u00D3\x1AN?\u0085\u009C8\x19\u00EA4\u00AA\u00D94\u00CB\x15\u00F9\u0097\u00F1\u00C05\u00D5\u00C6\u009D\u0094\x03\u00E8\u00A5\u00FB5\x13\u00F7E\u0094\u00C6\u009E\u00C3[\u009F\x06\u00A1\u00D2\u00DA\x11\u0085\u00D2Z\u00C4\u00C8\u00D41LS\u0080Ky\x1C\u008Cw\u00F4G\u00E0,g8:\u0099(\u00CB\u00C1\x19\u00B8Vi\u00CB\u00E4\x1BA\u00B0\x1A>\x0E\u00FEoz\u00A3/\u0093\u00C7\u00C2\u00A8\u00E38\x1C\x16\x0B\u00CB9\x0B:u}x\u00A87\u00A4\u00A1\u00A5\\\u00D9\u008EB\u00A1\u00B4\u00A44\u00E5.\u00AE\x15\u00D6\u00E1\u008Dw\u0096\u0083\u008C~?\u00BBq\x01\u00F6\u00C66B*k\x04\u00BFU/\u00B9DV\x0B\u00EFiK\u00F1\u00C2\u008C\u00F9\u00ECvy\u00C2\u00C5\u00FB\u00D2\u00E3H\u00EE\r\u00B4+\u00FC\u00E3\fRF.\u00C6t\u00C6[\u00BF\u00FC\u00DDR\u0094I{\u00C0\u00FD\u00ED\u00ED \u00B3#\u00EC\u00D9\x11\u00D6)\u00ED\u00D1e\u009F\u00A9w\u00E6nJ'/\x1FTe%\"\u00BF\u00B8J\u00B9\u00CF\u00C0P\u0088\u00FA\u00DA\n\u0088\u00AA\u00EB\u00E4\u00DB\u00A6B\u00C8D%\u00CA\x05N\u00B4\u00B4\u00F5!\u0090U\u00DE\u00B7\u00E0\u0089\x16\x13O\u009D_\u0083\u00D2\x12)zx\u00B9\"#:\n\u00E5\u00B5\u00F2W44t\u00B4\u00A0*\x15+\u00E3\u00F0\u00B4\u00F4\u00A1\u00C3i@Y\u0095\u00BC;LUS\x03\u00BAZj(+,ECS-\u00E0\u00F15\u00EEK\u00A7=\u00E4y.e\u00F2,\x0FG\u00DE\u00FF\u00D4\x13\u00EA\u00A1\u00AA\u00A0\u0090M\u008F\u0094A\\V\fq\u009D\u00F4\u00A16!q\u008D\u0084\u00FA\u00A8*+j7<\u00C9\u00BF\u00BA\u00AC\x06b\u008E\u0086\u00B2\x1Cm\u00D9\u0092\u00AB\u00A5\t\x03\x15.\u008AK\u00E5\u00FB\u00C8{\u00A6d\u00C1\u0098g\u0095g\u00A5^S\u009E?:C\u00F7\u00FB\x13\x17I\u00E6\u00FEan\u00AC\u0086\u009C|\u00B9c`de\x03-\u00A9\b\u00E99\u009D\u00D2Q\u00A0\u00CF\u00D4;\u0082\u00A4\u00F0\u00D0\u00FB[\u009B%-g\u00E2\"+\u00AC5GTU\u00D6fZ\"&\u009E\u00E2'\x13y\u00A7e\u00CB\u00B1\u0086\u00F91\u00D54o\u00A5\u008A\u00CA\u00D0<\u0095\u00BA\u00EA\x1A\x14\u00FE?{w\x02\x14\u00E5u\u00C0\x01\u00FC\u00BF\u00F7\x01r\u0083\u0088\u0080P\u00EEKP\u008A\u0082\x07**\u00F1$\x12<R\u00C7Tc\u00ADF\u00E35X\u00A7\u00E9\u00D4$u\u00AA\u0093\x19'\u0092\u00A6\u00D3\u00A9\u00B1c\u00DA\u00D4hbf$\x1A#IPI\x105\u00E3\u0081\x10\u00B1I\x01\u00F1\u00E2\u0088+\u00D7\x02\"+\u00D7n\u00BF]\u008B\u00DC&\u00A8 \u00BB\u00FE\x7F3:\u00F0x\u00BB\u00FB\u00DE\u00DB\u00C7\u00FE\u00BF\u00B7\u00EC\u00F7\u00BE\u00BB\r\u009D\u008Fd[\x1A\u00BA\u00DDO\u00AFG\u00C8]\u00DA\u00AC\u00D77ujw\u00D7><\u008C\u00F1\u00B6\u00E5\u009A\u00DB\x0F\u00ADcl\u00FF\u00FD\u00BE6>\u00E8GOc\u00A9\u00AF\u00BF\u008B\u008E\u0097{0\u00E7@'\u00A2\u00A7\u00CB\u00F8\u00FAQ\u00A6i\x7F\r\u00A9,\u00B9\u0089\u00C1|9\x19\u009E\u00A7NDDd!\x1E\u00BARWY\u00A9\u00CD\u00AA3\x12\u0089DX\u00A6\u0099g\u00DB\u00898\u00AF\u00C9\u00DC\u0088\x7F\u00C6\x05\u008D8g\x07Q\u00A8\x0Fuq1\u00AB\u00CE\fQ\u00AB\u00D0\u00F6^\u00B4\u00B9\u00B5\u009D\u00FA\u009F\u00C2=\x16\u0092\x11\u00D3~\u00D6\x0B\u00D1\u00E3\x12\u0095f\u00E0\u00CE\u008DL\u00CEk\u00B2hVCl\x7F\u00B2\u008E\u00AE\u00CB\u009F\u00F8\u00E8)\u0086:\u0091%1\u00C8\u00EDqy\u00EF\x12\u00B4\u00EA[\u00FBwe-\u0096\u00C0?n#\x07\u009C\u0088\x06\x1C\u00FF\u00A6N\u00CF\u008C\u0096\u00EA\u00FC~\x0Ft#\u00E3c\x18j\x0B8\u00E0D\u00C4P7\x07*g\x1F\u008C\u008E\x1A\u008BQ\u00C1>\u00A6\u00EFE\x12\x05\u00BC\x03C\x119\u00D2\u00DF\u00B4\x0F{G\u00F6\u00DE\u00E1\u00A6=\u00CF\u008D|\x03#\x10\u00E0\u00D2\u0087\u00BD\u00E9ENX\u00FE\u00E2sO\u00A4\u00CD\u00E3~\u00FD;\u00BC\u00B6|b\u008F?\u00B3\u00B2uB\u00C4\u00A80\u00B8\u00AB:L\x07\u0091\x18.\u00EE\u00BE\u00A6r\u009B.\u009DR\u00DB\x0EC\u0090\u009Fg\u00A72\u009F\u0089\u0089\b\u00F0\u00E6[\u00C3D\u00D4\u00FF\u00A4r[DO_\u0086\u00BF\u00BC\u00F7\x1EV.\u009A\u00CE\x01a\u00A8?\u00C6d\u00B2\u00F2\u00C4\u00A6\r/c\u0092\u00BF\x1D\u00C2c\u0093\u00B0 X\u0085\u00B0\u00C8X\u00ACX\u00F2+$\u00CE\u009F\u0082\u00AE\x1F\t\u0091{\u008F\u0087\u0087\u009B\x03T\u00C1/ 1\u00C6\x03\x05\u00E5}\u00B8\x02\u0092A\x02\u0095R\u00F2D\u00DA-W\u00A9a\u00A5\u0094\u00F5\u00F8\u00B3E+\u00D7a~R\"\u0082l\u00DA\u00B7,\u00F0\x0E\u00FB%6\u00BC\u00F2\u00B2\u00A9\u00DCI\u00D1!\u00D4\u0087\u00C6!y\u00F3\u00ABH\u0098\x10\u00DE\u00E9>\u00AEfg\u00A2L\u00A3\u00E5\x04!\u00A2~\x173y\x01\u00D6%8 e\u00CDj\u00D4:N\u00C1\u00DBk\u00E29(m\x19\u00C5!\u00E8\x1Bg\x0F\x17\u00A8kr\u00B0m\x7F:\u00BC\u00C3k\u00B0|r\f\x0E\u00EF:\u008E\u009DR/$\u00CF\x12\u00A1\u00B5\u0087\u00AD|\x14\u00D6>\u00D8<c4\x0E\u00BF\u009Fr\x7F\u00F5>2\x01k\x17\u008C\u0085TW\u008C\u00EC\u00B3\u00B7\u00E1b\u00C8\u00C1\u00FB\u00DF\x14\u00C3\x7F\u00D48\u00CC\u00F1\u00BE\u008B\u0094O/\u00B5\u00DFV8(\u00D8\u00BEm<\u008As\u00D3\u00B1;5\u00CBT\u00B6x\u00D5f\u0084x\u00D8\u00E1\u00DC\u00A1}8rQ\u0083\x05\x1B\u00D7!\u00C2I\u0081\u00CA\u0082\f\u00EC\u00CB,\u00C7+/\u00C5\u00E2z\u00A5-j\u00F2>G\u009E\u00C8\x1FKgEB)\u00E4rcI\u00CF}\u00DA\u00FF\u00AF\x0F\u00F1\u00DA\u00C6\u00C5\u009D\u00CAJ\u008Br\u00F1\u00C7\x14%\u00DEL\u009E\u00DC\u00B9\u00F2\u00ED\u00AF\u00B1m\u00CB\u00F7X\u00BDlL\u00A7\u00E2\u00E8E+\u00A1\u00BF\u00F01\u00F4\x0131/\u00D2\x13\rW\u00D2\u0091\u00DE\x14\x05\u00BB\u00FC4d\u00E4\u00B4`\u00D5\u00B2P\u00EC\u00FE\u00E00'\x10\x11=\u00B6\u00D9s\x03\u00F1\u0087\r\u009BMW[k<\u00F1\x19\x12\u00DE\\\u008F\u00B1'.\u00E0\\!\x17\x16\\\u00A9\u00F7\u0091R!AkC\u008D\u00E9k\u00DD\u00BDf\x18\u00C4R\u00D3\u00EEi2y\u00FB\u008A\u00DA\u00CD7\x04\x11\u00E1#\u00E1;\u00D4J\u00F8\u00AE\x15\u00B1\u00D3\u00C6\u00A06'\x15y\u00D7\u00AB!s\u008F\u00C7\u00FAEQ\u00C8\u00FD&\r\x05\u00F5\u00C3\u00A1r\u00B1\u0083W\u00EC<\x04\u00AA\u00C5\u00F0\u00F3\x0B\u00C5\x17\x19W\x11\x1C6R\u00B8}0\\U\"!\u0088\u00B3\u00B1\u00E5\u00F5\u00B7pS\u00EF\u0083\x04\u009F!\bM\u00DA\x04]a\x06^\u00DF\u00FE\x0El\"'\u00C3U\u00D4\u0088\u00BCoO\u00E2\u00AB\u00F4\u0093\u00B0\r\u0098\u0082\u00D0aC\u00A0\u00B4\u00B2F\u00E9\u00D9T\u00E4\u00EB\u00AC\u00B1j\u00B2#\u00F6\u00A4\u00EC\u00C0\u0089\u00D2f\u00C8zY\u00F4\u00EBu\u00DDw\u008Eknh~\u00E81\u009F\u00B8\u00CB\u00BE\u00A5J\u0085\x02r\u00B93\u00A2B<p\u00F6\u00CBO\u00B17\u00ED\x12\u00BEK\u00FD\x18\u00EEa1X\u00B2a>N\u009F8m\u00B1sb\u00D6\u008C\x19\u00F0\u00F2\u00F2\u00C2\u00DC\u00D9\u00B3\x10\u00E0\u00EF\u00CF_\x12\u00A2~\u00B6u\u00F3\x1B\u00A6@7\u00AD3\n\u00CFa\u00E5\u00FA\u00B5\ft\u0086\u00FA\u00A3\u00D1\u00EB\u00DB\u0097\u00E2J\u00A5\x14\u0092\u00B6\x11\u00ECP\u00AEv\u00F3APp\x10\u00DCl\x14\u00C2w\x12\u009CL?\u0087!\u00A3\u00930&\u00C4\x13\u00D6\u00BF\x18\x01\u0099\u00A1\x06U\u00DA\u00BB(<s\x10_\x1F;\u0088\u009C\x06\x17<\u009F8\x13\u009E*\r\u00F2k[\u00E1\u00ED\x1F\u0084\u0090@_XC\u00B8\u00CF\u0096V\x18\f\u00F5\u00B8\u00FD\u00A3\x16\u00B6\u00D6R8\u00B9\u00D8@SY)\x04q%\u00CA\u00AB\rp\u008B\u009C\u008F\u0097\x12\u00A6B\u00D2\u00D2\u0080*\u00E1\u00E9T\u00A8\u00AD\u0084\u00FA5\u00F8o^\u00A1p8a\u0080\u00BE\u00F6*nik\u00D1\u00F2\u0084/\x15\u00A8G\u00F7\x03\u0081\u0096\u00D6*\u00EC\u00FA\u00F3NX\x07M\u00C4\u00EA\u00A5\u00CF\u00C1\u00A6\u00F1G\u0094\u00D5)\x11\u00E0p\x0F\u00DA\u00F2*\u008B\u009D\x13?\u00E4\u00E7cSr2\u00AA\u00AAkPPX\u00C8_\x12\u00A2~\u00A6\u00BB\u00D7\u00F94\u00B9\u00BBU\f\u00F46|\u00FB\u00BD\u008F47\u00AE\u00E1\u00CA\u0094\u00DFb\u00CD\x0B\u00AD\u00D0*\u00BC\u00F1Y\u00DAQ\u00F8\b+\u00F3Q\u00BEv\u00C2\u00DAU\u008C\u00B1#\u00FD\u0091\u0091u\x04E\u00FF\u00AF?\u00D4\x03h\u00D2]\u00C3\u008E\u009D\u00D7\u00B0p\u00EE4\u0088/\x7F\u008F\u00F3Ec\u00E0\u00EE>\x14eZ\x03\u00D4\u00A2\"\x1C;\u00F0\x15|W\u00CED\u00D1\u00A1\x7F\x1B\u00A7+\u00D2R?i\u00BB5f\u00DB\u00B9!f\u00CCt\u0084\u00F8\x1Bph\u009F\x16\u0086;G\u00914i\x02\u00A0\u00AA\u0080\u0087\u00B4\x04\u00E7*\u009BP\u00D58L8P\x10C%jB\u00B3^\b[\u00C3\u00FDUtyI1\u008A\u0095K1/^\x0Fg[)\x1A\u00CA\u009B\u00BB\u00F5G$\u00B2F\u00F4\u0084\ba\"H\u00E1\x1D\x1D\u0087\u0080\"-\u00C6E\u00F9 \u00E7L\x0E\\\u0083|L\u00E5\x11Q\u00E1\u00B8y\u00A6\n\u00CFO\x1A\u008A\u008C\x02=\"Fx\u00C0\u00CEy8b&\u008E\u0083T'\u0086\u00ED\u00BD\u00CB\u00A6\u00D3\u00A8\u00A5\u008A\u00E1X\u00F8b\b\u00B4\u009A[\u00A8W6\u00C1kT\x02\x1Cty\u00F8 \u00CD\x13\u00B1\u00F1\u00E3q\u00E0\u00A8e\u00AE\u00D6\u0083\x03\x03\u00B13%\x05a!\u00C1\u00A6\u0095:\u0083\u009D\u0088\u009E\u0096\u0087^\u00D0\u00A5\u00A9\u00F2?f\u00D5\u0099\x18a\u0095\x1AW/7}\u00BD]\u00DC\u00BFGn*{WH\u009AkQ_\u00AF{\u00A4\u00DB[[\u00DBC\u00AE\u00D7\u00A2Z8\u00E04\u00B8\u00C6\u00E3Ok\u00A3\u00B1\u00EF\u00ED\u00ED\u00B8Z\u00D3\u00F9\u0094+\u0095P\u00CFV~\x0F\u009A\u00EA\x0E\u008F#S\u00C1\u00D5Q\x05\u008D\u00A6\u00FAA\u0091\u00BD\u00B33\u00B4\x15\x15=\u00B7U\u00B8\x0F\u00D4k\u0085\u00C3\x05\x15\u00C6O\u008D\u0085\u00BA\u00C3\u00A1\\cU>\u00B2\u00B2ov\u00AA\u00EF\u00E0\u00A0Buu\u00F7~\u00A9U*4\u00E8:\u0097\u00CB\u00842\u00A9P6r\u00C5\x1B\u0090d\x7F\u0088o\u00BF\u00BB\x0EG{kTi\x07\u00DFE\x1C\u00C4v\x01\u00C8\x1F\u00A0\u008B\x14\x05F\u00CD\u0081\u00BE\u00A6\u00C0\u00EC\u00E65Q_\u00D8\u008D\u0088A\u00FE\u00F9\u00DE?+c\t\x17t13\u00BC\u00A0\u00CB#\u00BF\u00FD\u00A3\u00D5<\u00D6\u00ED\u00EB\u00EB\u00DB_\u009C\u00A7$\u008E\u0087\u00A2\u00E6R\u00B7@7=\u008E)\u008C\u00BBh\u00D6\t\u0081\u00DE\u00B9\u00B4\u00B7@o\u00BB\u008F\u00FB\u0094ppr\u0084\u00CD\u0083g]\u008C;\u00BAk\u00DD\u00EA\u00F7\x14\u00E8F]\x03\u00FD~St\u00F0\u008B]\u00888o9\u008E\u009F\u00BA\u00FF\u00C9\u00FE\u00C1\x18\u00E8DD\u00CF\x02\u0086\u00FAS\x7F\u00AFD\u0086\u00B2\u00D3\u00A9\u00D8\u00A3\x19\u0088\u00CDJ\u00B4\u00F8\u00FC\u0093\u008F\u009Ep\u00FB\u0085\x15\u00E4\u009Dk8\u00F6\u00D1E\u00E4\x15\u00DE\x1A\u00DCCm\x1B\x00\u0089\u00F8\u00CB\x01\u00D9QN\u00EA\x10\u0088\u00A6\x1An@CD\f\u00F5g\u008B\u00A1\x19W.\u00E7\u0099q\u00FB\u009B\u00F0Cn\u00B6Y4U-\u00AAC\u00F8\u00D2\u00FD\u00FD\u00FE8z\u0083\x01\u00AD7Opn\x13\u00D1\u00E0\n\u00F5\u00D2\u00B22\u00B3\u00EAL\u009D\u009B\u00BB\u00F0\u00BF\u00DC,\u00DBN\x03\u00A0\u00CC\x18\u00E8\u00FB\u00CD\u00AE\u00D9\u009C\u00D74X\u00C9\x1Cj\x7F:d\u00E42\x0E\u00D4`\t\u00F5\u0096\u00A6f\u00B3\u00EA\u008C^\u00AFG\u00DB\u00E9\u00D3\u00E6\u00D6v\"\u00CEk2\u00BB\u00B9\u00F93N\u0095\u00E5\u009C\x1DX<O\u009D\u0088\u0088\u00E8YX\u00A9\x13\x11\x11\rFr\u00F9pD\u00C5\x06\u00A3,?\x177J+{\u00AD\u00E7\x168\x06\u00A1\u00FE~pP\u00D4!\u00EB\u00F0\x17\u0090y\u0085bz\\4Z*\u00AE\"\u00E3\u00CCy\u0094\u00DC\u00AEc\u00A8\u009B\x03\x7F'G\u00CEz\u00B2\b\u008ER\u0099q\u00B7a\"\u00EA\x10\u00E8\u00BF\u00DF\u00B5\x03\u0081-U\u00A8\u00AD\b\u00C2\u009A-\x7F\u00ED\u00B5\u00EE\u00B4\x15\u00AFb|\u00C5?\u00B17\u00D7\x19\u00D3\u00DD\r\u00B83:\x0E\u00A7v\u00A7\u00C0~\u00D3.\u0084j\u00B5B\u00A8_|6B\u00BD\u00A5\u00C5\x00\u00D7\u00C0i\u00D0\x14d\x00Ox\u008B\u00D1\u0081\u00B0\u00D9\u00CA\u00933\u009F,\x03\x03\u009D\x06#\u0091\bb;?\u00E1\u008B\u00CC^\u00AB\x18\u00B7\u00D5\u0096)\u00E4hnlz\u00A2\x0F\u00BD\u00F87Kpu\u00FF\u00BB\u00F8[\u00E6\x05\u00F8M]\u008C\u00DDo%c[\u00CA?PRQo\n\u00FC\x19c]p\u00E4T\u00AE\u00A9n\u00D6\u0081\x03\x18\u009E8\x1B\u00F3\u00E7(!\u00BD\x1B\u0082\u00D6!.\x18\x1D\u00B2\rr\u00C9M\u00EC)*\u00B6\u00BC\u00A7\u00A5\u00B7\x1D\u00E5\fB\u00DE\u00FB%\u00FD\u00DD\u00AC:\x13\x7F;\x0BA\x05\u00D9\u00FCe#\u008B\u00F5nl2\x07\u0081\x06\x05\u00E3\u0087\u00E4j\u00F2\x0E\u00A2\u00BA\u00E8x\u00EFuZ\u00F5P\u00A9\u0095\x1C\u00AC\u0081\u00B3\u00B5\u00D7P7G\x0E\n\x05\u00EC\x14\n>\u00ADd\u00B1\u00AE\u00D5\u00D5q\x10\u0088\u00A8\u00D7P\u00B7\u00A8\u00BF\u00A9W76\u009A\u00FE\x11\x11\x11=\u008BxJ\x1B\x11\x11\x11C\u009D\u0088\u0088\u0088\x18\u00EADDD\u00C4P'\"\"\"\u0086:\x11\x11\x11C\u009D\u0088\u0088\u0088\x18\u00EADDD\u00C4P'\"\"\u00A2\u00BE0n>\u00B3\u0095\u00C3@DDd\u00F62\u00FF'\u00C0\x00\x06\u00A5zdK\u00F9\u00E35\x00\x00\x00\x00IEND\u00AEB`\u0082";
            
					
					
					menuData.out1 =createResourceFile ("KEYboard_out1.png", binout1);
					menuData.out2 =createResourceFile ("KEYboard_out2.png", binout2);
					menuData.out3 =createResourceFile ("KEYboard_out3.png", binout3);
					menuData.in1 =createResourceFile ("KEYboard_in1.png", binin1);
					menuData.in2 =createResourceFile ("KEYboard_in2.png", binin2);
					menuData.in3 =createResourceFile ("KEYboard_in3.png", binin3);
					menuData.inOut1 =createResourceFile ("KEYboard_inOut1.png", bininOut1);
					menuData.inOut2 =createResourceFile ("KEYboard_inOut2.png", bininOut2);
					menuData.inOut3 =createResourceFile ("KEYboard_inOut3.png", bininOut3);
					menuData.Qrow1 =createResourceFile ("KEYboard_Qrow1.png", binQrow1);
					menuData.Qrow2 =createResourceFile ("KEYboard_Qrow2.png", binQrow2);
					menuData.Qrow3 =createResourceFile ("KEYboard_Qrow3.png", binQrow3);
					menuData.Qrow4 =createResourceFile ("KEYboard_Qrow4.png", binQrow4);
					menuData.Qrow5 =createResourceFile ("KEYboard_Qrow5.png", binQrow5);
					menuData.Qrow6 =createResourceFile ("KEYboard_Qrow6.png", binQrow6);
					menuData.Qrow7 =createResourceFile ("KEYboard_Qrow7.png", binQrow7);
					menuData.Qrow8 =createResourceFile ("KEYboard_Qrow8.png", binQrow8);
					menuData.Qrow9 =createResourceFile ("KEYboard_Qrow9.png", binQrow9);
					menuData.Qrow10 =createResourceFile ("KEYboard_Qrow10.png", binQrow10);
					menuData.Setting1 =createResourceFile ("KEYboard_Setting1.png", binSetting1);
					menuData.Setting2 =createResourceFile ("KEYboard_Setting2.png", binSetting2);
					menuData.Arow1 =createResourceFile ("KEYboard_Arow1.png", binArow1);
					menuData.Arow2 =createResourceFile ("KEYboard_Arow2.png", binArow2);
					menuData.Zrow1 =createResourceFile ("KEYboard_Zrow1.png", binZrow1);
					menuData.Zrow2 =createResourceFile ("KEYboard_Zrow2.png", binZrow2);
					menuData.Zrow3 =createResourceFile ("KEYboard_Zrow3.png", binZrow3);
					menuData.AddKey =createResourceFile ("KEYboard_AddKey.png", binAddKey);
					menuData.num01 =createResourceFile ("KEYboard_num01.png", binNum01);
					menuData.num02 =createResourceFile ("KEYboard_num02.png", binNum02);
					menuData.num03 =createResourceFile ("KEYboard_num03.png", binNum03);
					menuData.num04 =createResourceFile ("KEYboard_num04.png", binNum04);
					menuData.num05 =createResourceFile ("KEYboard_num05.png", binNum05);
					menuData.num06 =createResourceFile ("KEYboard_num06.png", binNum06);
					menuData.num07 =createResourceFile ("KEYboard_num07.png", binNum07);
					menuData.num08 =createResourceFile ("KEYboard_num08.png", binNum08);
					menuData.num09 =createResourceFile ("KEYboard_num09.png", binNum09);
					menuData.logo = [];
					//menuData.logo =createResourceFile ("KEYboard_logo.png", binLogo);
					menuData.logo[0] =createResourceFile ("KEYboard_logo.png", binLogo);
					menuData.logo[1] =createResourceFile ("KEYboard_logo2.png", binLogo2);
					menuData.logo[2] =createResourceFile ("KEYboard_logo3.png", binLogo3);
					menuData.logo[3] =createResourceFile ("KEYboard_logo4.png", binLogo4);
					menuData.logo[4] =createResourceFile ("KEYboard_logo5.png", binLogo5);
                
                    menuData.info2018 =createResourceFile ("KEYboard_2018info.png", bin2018info);
                
					menuData.folder =createResourceFile ("KEYboard_folder.png", binFolder);


				//////////////////////////////////////////////
			
				//////////////////////////////////////////////


				var AEversion = app.version.substring(0,4);
				if(thisObj instanceof Panel){
					//is in ScriptUI panels folder
					alert("Oops! KEYbaord must be placed in Scripts folder (not ScriptUI panels)");
					var alertPalette = thisObj;
					var alertGrp = alertPalette.add('group');
					alertGrp.graphics.backgroundColor = alertGrp.graphics.newBrush (alertGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
					
					var alertTxt =alertGrp.add ('statictext', [0,0,430,50], 'Please place 01-KEY-board.jsxbin in Scripts folder and restart After Effects. :D', {multiline: false});
					
					alertPalette.layout.layout(true);
					//alertPalette.layout.resize();
						
				}else{
					//is in Script folder
					
					if(app.settings.haveSetting("Ola_Keyboard", "shortcut") ){
						//create KEYboard UI
					
						//(AEversion<=12) ?createMenuCC(menuData) :createUIMenu(menuData);
						createUIMenu(menuData,settingJson2Obj);
					}else{
						
						//is first time to install
						var w =new Window ("dialog", "First time", undefined, {closeButton: true});
						w.margins = 10;
						w.spacing=5;
						w.alignChildren=['fill','fill'];

						var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
						if(securitySetting ===0){
							alert('Make sure Edit>Preferences>General>\r\r"Allow Scripts to Write Files and Access Network" \r\ris actived.');
							app.executeCommand(2359);
							w.close();
						}

						var infoGrp = w.add('group');
						infoGrp.spacing=8;
						infoGrp.orientation = 'column';
						infoGrp.alignChildren = ['fill','fill'];

						
						var infoText;
						if(AEversion <15.0){
                            var logo = infoGrp.add ("image", undefined, menuData.logo[0]);
							infoText = infoGrp.add('statictext', [0,0,150,120], 'Hi：\rThis is the first time that Keyboard is running.\r\rCreate a shortcut and restart AE to finish setup.\r\re.g. Shift+Q or Alt+Q', {multiline: true});


							var inputGrp = w.add('group');
							inputGrp.orientation = 'row';
							inputGrp.alignChildren=['fill','fill'];

							/*
							var myDropdown = inputGrp.add ("dropdownlist", [0,0,50,20], ["Ctrl", "Shift", "Alt",'-',"Shift+Alt","Shift+Ctrl","Ctrl+Alt",'-',"Ctrl+Shift+Alt",'-','(none)']);
							myDropdown.selection=1;
							*/
							var inputText=inputGrp.add('edittext',undefined);

							inputText.active=true;
							inputText.text='Shift+Q';
							var tmpStr="";
							inputText.addEventListener ("keydown", function (k) {
								handle_shortcut (k,this);
								tmpStr = inputText.text;
							});
							inputText.addEventListener ("keyup", function (k) {
								inputText.text =tmpStr;
							});

							/*
							var inputGrp2 = w.add('group');
							inputGrp2.alignChildren=['fill','fill'];
							var inputText2=inputGrp2.add('edittext',undefined);
							var tmpStr="";
							inputText2.addEventListener ("keydown", function (k) {
								handle_shortcut (k,this);
								tmpStr = inputText2.text;
							});
							inputText2.addEventListener ("keyup", function (k) {
								inputText2.text =tmpStr;
							});
							*/
						}else{
                            var info2018 = infoGrp.add ("image", undefined, menuData.info2018);
							infoText = infoGrp.add('statictext', [0,0,150,120], 'Hi：\rThis is the first time that Keyboard is running.\rIn CC2018, there is a new way to set shourtcut with Visual Keyboard Shortcut Editor.\r\rTo open the editor, select Edit > Keyboard Shortcuts. Type "01-KEY-board" in search-bar and finish setting.', {multiline: true});
						}
						
						var btnGrp = w.add('group');
						btnGrp.alignChildren=['fill','fill'];
						var btnOK = btnGrp.add ("button", undefined, "OK");

						var versionStr = w.add('statictext', [0,0,150,20], 'AE version : '+AEversion, {multiline: true});

						btnOK.onClick = function(){
							if(AEversion <15.0){
									var AEFolder = Folder ( Folder.userData.absoluteURI + "/Adobe/After Effects/"+AEversion );
									var osName=$.os.substring(0,3);
									//var shortcut=myDropdown.selection.text+"+"+inputText.text;
									var shortcut=inputText.text;
									var pathname = $.fileName;
									var leafname= pathname.split('\\').pop().split('/').pop();
									var itemIndex = Number(leafname.substring(1,2));
									var textFile;
									var dskPth;
									if(securitySetting ==1){

										textFile =getNameOfShortcutsFile ();
										testIO(textFile,shortcut);


										//---------------------------
										app.settings.saveSetting("Ola_Keyboard", "shortcut", shortcut);
										w.close();
										alert("Plz restart AE");
									}else{
										alert('Make sure Edit>Preferences>General>"Allow Scripts to Write Files and Access Network" is actived.');
										w.close();
									}
								
							}else{
								var none="none";
								app.settings.saveSetting("Ola_Keyboard", "shortcut", none);
								w.close();
								
							}
							


						};//end btn event


						w.show ();
					}//end is first time to install
				}//end is in Script folder
				

			}
//--setting window-------------------------------------
			function modifyShortcut(menuData,settingJson2Obj){		
				//var imgLogo =createResourceFile ("KEYboard_optionLogo.png", binLogo);

				//var w =new Window ("dialog", "Option", undefined);
				//var w = new Window ("dialog", "Settings");
				var AEversion = app.version.substring(0,4);
				var w = new Window ('palette', "Settings");
				w.margins = 10;
				w.spacing=10;
				w.alignChildren=['fill','fill'];
				w.orientation = 'column';

				//---------root group-------------//
				var logoGrp = w.add('group');
				var AllSettingGrp = w.add('group');
				
				var prefsGrp = AllSettingGrp.add('group');
				var prefsContainerGrp = prefsGrp.add('group');
				
				var SettingRow1Grp = AllSettingGrp.add('group');
				var scriptSettingGrp = SettingRow1Grp.add('group');
				var NumPadSettingGrp = SettingRow1Grp.add('group');

				AllSettingGrp.spacing=10;
				AllSettingGrp.alignChildren = ['fill','fill'];
				prefsGrp.alignChildren = ['fill','fill'];
				SettingRow1Grp.alignChildren = ['fill','fill'];
				AllSettingGrp.orientation = 'column';
				SettingRow1Grp.orientation = 'row';
				logoGrp.alignChildren=['center','fill'];
				logoGrp.orientation = 'column';
				logoGrp.spacings =0;
				
				
				/////
				
				var prefsPanel = prefsContainerGrp.add('panel',undefined,"Preference");
				//var resetPanel = scriptSettingContainerGrp.add('panel',undefined,"Reset Shortcut");
				
				prefsGrp.graphics.backgroundColor = prefsGrp.graphics.newBrush (prefsGrp.graphics.BrushType.SOLID_COLOR,menuData.red );
				prefsGrp.margins = 0;
				prefsGrp.margins.top = 5;
				prefsContainerGrp.alignChildren = ['fill','fill'];
				prefsContainerGrp.margins = 8;
				prefsPanel.spacing = 4;

				
				if(AEversion <13){
					prefsContainerGrp.graphics.backgroundColor = prefsContainerGrp.graphics.newBrush (prefsContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.darkGray2 );
				}else{
					prefsContainerGrp.graphics.backgroundColor = prefsContainerGrp.graphics.newBrush (prefsContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
				}
				var chkAutoClose=prefsPanel.add ("checkbox", undefined, "Enable Auto-close feature");
				var chkAlignLeft=prefsPanel.add ("checkbox", undefined, "(E) Align Keys : Always align left");
				var chkAddMaskPathKey=prefsPanel.add ("checkbox", undefined, "(Z) Add Path Keys : Also Affect Mask Path");
				
          
                chkAutoClose.value = settingJson2Obj.prefs_AutoClose;
                chkAlignLeft.value = settingJson2Obj.prefs_AlignLeft;
                chkAddMaskPathKey.value = settingJson2Obj.prefs_AddMaskPathKey;
				
				chkAutoClose.alignment = ['left',' '];
				chkAlignLeft.alignment = ['left',' '];
				chkAddMaskPathKey.alignment = ['left',' '];
				
				chkAutoClose.onClick = function () {
					settingJson2Obj.prefs_AutoClose = chkAutoClose.value;
					createJsonFile ("KEYboard_setting.json", settingJson2Obj);
				};
                chkAlignLeft.onClick = function () {
					settingJson2Obj.prefs_AlignLeft = chkAlignLeft.value;
					createJsonFile ("KEYboard_setting.json", settingJson2Obj);
				};
                chkAddMaskPathKey.onClick = function () {
					settingJson2Obj.prefs_AddMaskPathKey = chkAddMaskPathKey.value;
					createJsonFile ("KEYboard_setting.json", settingJson2Obj);
				};
				/////

				//-------------resetPanel-------------------//
				var logoCount =0;
				var logo = logoGrp.add ("image", undefined, menuData.logo[0]);
				logo.alignment = ['','center'];


				//var red=HexToRGB("#AC4C5E");
				//var lightGray = HexToRGB("#242424");



				var scriptSettingContainerGrp = scriptSettingGrp.add('group');

				scriptSettingGrp.graphics.backgroundColor = scriptSettingGrp.graphics.newBrush (scriptSettingGrp.graphics.BrushType.SOLID_COLOR,menuData.yellow );
				scriptSettingGrp.margins = 0;
				scriptSettingGrp.margins.top = 5;
				if(AEversion <13){
					scriptSettingContainerGrp.graphics.backgroundColor = scriptSettingContainerGrp.graphics.newBrush (scriptSettingContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.darkGray2 );
				}else{
					scriptSettingContainerGrp.graphics.backgroundColor = scriptSettingContainerGrp.graphics.newBrush (scriptSettingContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
				}
				

				scriptSettingContainerGrp.orientation = 'column';
				scriptSettingContainerGrp.margins=8;

				var resetPanel = scriptSettingContainerGrp.add('panel',undefined,"Reset Shortcut");
				var deletePanel = scriptSettingContainerGrp.add('panel',undefined,"Delete KEYboard Setting");



				scriptSettingGrp.alignChildren=['fill','fill'];
				scriptSettingContainerGrp.alignChildren=['fill','fill'];
				
				resetPanel.alignChildren = ['fill','fill'];
				deletePanel.alignChildren= ['fill','fill'];
				resetPanel.spacing=3;
				//resetPanel.margins=8;
				//deletePanel.spacing=0;
				//deletePanel.margins=8;

				var infoGrp = resetPanel.add('group');
				var inputGrp = resetPanel.add('group');
				var btnGrp = resetPanel.add('group');
				var deleteBtnGrp = deletePanel.add('group');
				infoGrp.spacing=0;
				//inputGrp.orientation = 'column';
				//inputGrp.alignChildren = ['fill','fill'];

				//inputGrp.orientation = 'row';
				//inputGrp.alignChildren=['fill','fill'];
				btnGrp.alignChildren=['center',''];
				deleteBtnGrp.alignChildren=['center',''];



				//var infoText = infoGrp.add('statictext',[0,0,120,30], '\r重設快捷鍵，需重啟AE', {multiline: true});

				//alert(itemIndex);
               

				var inputText=inputGrp.add('edittext',undefined);
				inputText.alignment = ['fill','fill'];
				var btnReset = btnGrp.add ("button", undefined, "Reset!");
				//inputText.active=true;
				inputText.text='Shift+Q';
				var tmpStr="";
				inputText.addEventListener ("keydown", function (k) {
					handle_shortcut (k,this);
					tmpStr = inputText.text;
				});
				inputText.addEventListener ("keyup", function (k) {
					inputText.text =tmpStr;
				});
				if(app.settings.haveSetting("Ola_Keyboard", "shortcut")){
					var SettingShortcut=app.settings.getSetting("Ola_Keyboard", "shortcut");
					//SettingShortcut =SettingShortcut.split("+");
					//inputText.text=SettingShortcut[SettingShortcut.length-1];
					inputText.text=SettingShortcut;
				}else{
					inputText.text='Shift+Q';
				}
                 if(AEversion >=15.0) {
                    inputGrp.remove(inputText);
                    //btnGrp.remove(btnReset);
                    var warningtxt=inputGrp.add('statictext',undefined);
                    warningtxt.text="Use Visual Keyboard Shortcut Editor instead";
                    //inputText.enabled = false;
                    btnReset.enabled = false;
                 }
				//-------------------------------

				var deleteBtn = deleteBtnGrp.add ("button", undefined, "Do it  :(");

				//deleteGrp.graphics.backgroundColor = deleteGrp.graphics.newBrush (deleteGrp.graphics.BrushType.SOLID_COLOR,HexToRGB("#d76ea7") );
				//inputText.active=true;

				//inputText.addEventListener ("keydown", function (k) {});
				//////////////////////////////////////////////////////////////
				var numPadSwitchFlag = 0;
				var tagetBtnIndex=-1;
				var saveFlag = 1;

				if (app.settings.haveSetting("Ola_Keyboard", "numPadSwitchFlag") === true){
					numPadSwitchFlag = app.settings.getSetting("Ola_Keyboard", "numPadSwitchFlag");
				}

				//////////////////////////////////////////////////////////////
				NumPadSettingGrp.orientation = 'column';
				NumPadSettingGrp.alignChildren=['fill','fill'];
				NumPadSettingGrp.margins = 0;
				NumPadSettingGrp.margins.top = 5;
				NumPadSettingGrp.spacing = 0;
				NumPadSettingGrp.graphics.backgroundColor = NumPadSettingGrp.graphics.newBrush (NumPadSettingGrp.graphics.BrushType.SOLID_COLOR,menuData.purple );

				var btnSize = [40,40];
				//var resetPanel = scriptSettingContainerGrp.add('panel',undefined,"Reset Shortcut");
				var NumpadContainerGrp = NumPadSettingGrp.add("group");
				NumpadContainerGrp.orientation = 'column';
				NumpadContainerGrp.margins = 8;
				NumpadContainerGrp.alignChildren=['fill','fill'];
				
				if(AEversion <13){
					NumpadContainerGrp.graphics.backgroundColor = NumpadContainerGrp.graphics.newBrush (NumpadContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.darkGray2 );
				}else{
					NumpadContainerGrp.graphics.backgroundColor = NumpadContainerGrp.graphics.newBrush (NumpadContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
				}
				
				var NumpadPanel = NumpadContainerGrp.add('panel',undefined,"Custom");

				//var numPadCheck = NumpadPanel.add ("checkbox", undefined, "Enable NumPad Shortcut");
				//numPadCheck.alignment = ['left','']
				var NumpadGrp = NumpadPanel.add("group");
				NumpadGrp.alignment = ['fill','fill'];
				//var NumpadSaveGrp = NumpadPanel.add("group");


				//NumpadPanel.margins =15;

				var numpadbtnGrp = NumpadGrp.add("group");
				var settingGrp = NumpadGrp.add("group");
				settingGrp.orientation = 'column';
				settingGrp.alignment = ['fill','fill'];
				settingGrp.spacing = 5;

				//NumpadGrp.graphics.backgroundColor = NumpadGrp.graphics.newBrush (NumpadGrp.graphics.BrushType.SOLID_COLOR,menuData.red );

				numpadbtnGrp.orientation = 'column';
				numpadbtnGrp.alignChildren = ['fill','fill'];

				var btnAry = [];
				var btnGrpAry = [];

				//var row1Grp = btnGrp.add("group");
				//var row2Grp = btnGrp.add("group");
				//var row3Grp = btnGrp.add("group");
				btnGrpAry[0] =numpadbtnGrp.add("group");
				btnGrpAry[1] =numpadbtnGrp.add("group");
				btnGrpAry[2] =numpadbtnGrp.add("group");
				btnGrpAry[0].orientation = 'row';
				btnGrpAry[0].spacing = 3;
				btnGrpAry[1].orientation = 'row';
				btnGrpAry[1].spacing = 3;
				btnGrpAry[2].orientation = 'row';
				btnGrpAry[2].spacing = 3;

				//btnGrpAry[1].alignment = ["left",""];
				//btnGrpAry[2].alignChildren = ["fill",""];

				////create button//////////////
				btnAry[0] = btnGrpAry[2].add ("button", undefined, "1");
				btnAry[1] = btnGrpAry[2].add ("button", undefined, "2");
				btnAry[2] = btnGrpAry[2].add ("button", undefined, "3");
				btnAry[3] = btnGrpAry[1].add ("button", undefined, "4");
				btnAry[4] = btnGrpAry[1].add ("button", undefined, "5");
				btnAry[5] = btnGrpAry[1].add ("button", undefined, "6");
				btnAry[6] = btnGrpAry[0].add ("button", undefined, "7");
				btnAry[7] = btnGrpAry[0].add ("button", undefined, "8");
				btnAry[8] = btnGrpAry[0].add ("button", undefined, "9");

				//btnGrpAry[2].graphics.backgroundColor = btnGrpAry[2].graphics.newBrush (btnGrpAry[2].graphics.BrushType.SOLID_COLOR,menuData.darkGray );
				//btnGrpAry[2].margins = 0;
				//btnGrpAry[2].margins.top =1;
				var btnSaveGrp =numpadbtnGrp.add("group");
				btnSaveGrp.graphics.backgroundColor = btnSaveGrp.graphics.newBrush (btnSaveGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
				btnSaveGrp.alignChildren = ["fill",""];
				//btnSaveGrp.margins.top = 10;
				var btnSave = btnSaveGrp.add ("button", undefined, "Save it!");
				//btnSave.preferredSize = btnSize +[20,0];

				for(var j =0 ; j<9 ; j++){
					btnAry[j].preferredSize = btnSize;
				}
				btnAry[0].onClick = function () {assignShortcut(settingJson2Obj.btn01);};
				btnAry[1].onClick = function () {assignShortcut(settingJson2Obj.btn02);};
				btnAry[2].onClick = function () {assignShortcut(settingJson2Obj.btn03);};
				btnAry[3].onClick = function () {assignShortcut(settingJson2Obj.btn04);};
				btnAry[4].onClick = function () {assignShortcut(settingJson2Obj.btn05);};
				btnAry[5].onClick = function () {assignShortcut(settingJson2Obj.btn06);};
				btnAry[6].onClick = function () {assignShortcut(settingJson2Obj.btn07);};
				btnAry[7].onClick = function () {assignShortcut(settingJson2Obj.btn08);};
				btnAry[8].onClick = function () {assignShortcut(settingJson2Obj.btn09);};
				/*
				var count = 4;
				for(var i =1 ; i>=0 ; i--){
					btnGrpAry[i].orientation = 'row';
					btnGrpAry[i].spacing = 3;
					for(var j =0 ; j<3 ; j++){
						btnAry[count] = btnGrpAry[i].add ("button", undefined, count+1);
						btnAry[count].preferredSize = btnSize;
						count++;
					}
				}
				*/


				var curBtnStr = settingGrp.add ('statictext', [0,0,150,20], '← select button');
				curBtnStr.alignment = ['fill','top'];

				var btnTitleGrp = settingGrp.add("group");
				var btnTitleName = btnTitleGrp.add ('statictext', [0,0,40,20], 'Name : ');
				var btnTitleStr = btnTitleGrp.add ("edittext", undefined, "",{multiline: false});
				btnTitleGrp.alignment = ['fill','top'];
				btnTitleStr.alignment = ['fill','top'];
				btnTitleGrp.spacing =0;
				btnTitleStr.enabled = false;

				var modeListGrp = settingGrp.add("group");
				var modeList = modeListGrp.add ("dropdownlist", undefined, ["expression", "JavaScript","easeIn","easeOut","easeInOut"]);
				//var modePathBtn = modeListGrp.add ("iconbutton", undefined, menuData.folder);
				modeListGrp.alignment = ['fill','top'];
				modeListGrp.spacing = 3;
				//modePathBtn.preferredSize = [1,25];
				//modePathBtn.enabled = false;

				var expressionStr = settingGrp.add ("edittext", undefined, "",{multiline: true});



				modeList.selection = 0;
				modeList.alignment = ['fill','top'];
				modeList.enabled = false;
				expressionStr.alignment = ['fill','fill'];
				expressionStr.enabled = false;

				//var AEversion = app.version.substring(0,4);
				
				//var versionStr = versionGrp.add('statictext',undefined, AEversion, {multiline: false});
				//scriptVersionStr +="\r©2017 olaolayuan";
				var txtGrp = AllSettingGrp.add("group");
				
				
				txtGrp.spacing = 5;
				txtGrp.orientation = 'column';
				txtGrp.alignment = ['','bottom'];
				txtGrp.alignChildren =['fill','fill'];
				//txtGrp.graphics.backgroundColor = txtGrp.graphics.newBrush (txtGrp.graphics.BrushType.SOLID_COLOR,menuData.purple );
				
				var versionGrp = txtGrp.add('group');
				versionGrp.orientation = 'column';
				versionGrp.spacing = 2;
				versionGrp.alignChildren = ['fill','fill'];
				versionGrp.alignment = ['center','fill'];
				
				
				var registGrp = txtGrp.add("group");
				

				
				
				registGrp.alignChildren = ['fill','fill'];
				
				registGrp.margins = 10;
				registGrp.margins.left =20;
				registGrp.margins.right = 20;
				
				registGrp.graphics.backgroundColor = registGrp.graphics.newBrush (registGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
				
				//var scriptVersionText = versionGrp.add('statictext',undefined, "KEYboard "+wow.scriptVersion, {multiline: false});
				//var aescriptText = versionGrp.add('statictext',undefined, "aescripts.com", {multiline: false});
				
				//var registration = sx2K ("p");  
				var registration = wow.getRegistration(); 
				var registrationText = registGrp.add('statictext',undefined, registration, {multiline: false});
				
				 //var isTrial = (sx2K ("v").match(/^t/)) ? true : false; 
				 if (isTrial) {
					var btnTrial = registGrp.add ("button", undefined, "activate");
					
					btnTrial.preferredSize = [60,20];
					btnTrial.onClick = function(){wow.c();};
					 
				   //limit some functions
					 //alert("QQ");
				 }
                var btnHelp = registGrp.add ("button", undefined, "?");
                btnHelp.preferredSize = [60,20];
				btnHelp.onClick = function(){wow.helpUI();};
				

				logo.addEventListener("mousedown", function(event) {
					logoCount +=1;
					if(event.shiftKey ===true && logoCount==5){
						scriptVersionText.text = "(●´∀`●)";
						//var copyrightText.text = "RESTART AE!";

					}
					if(logoCount>4)logoCount=0;

					logo.icon = ScriptUI.newImage(menuData.logo[logoCount]);
				});
				//

				//btnAry[0].onClick = function () {assignShortcut(menuData,1);}
				//btnAry[1].onClick = function () {assignShortcut(menuData,2);}
				//btnAry[2].onClick = function () {assignShortcut(menuData,3);}
				//btnAry[3].onClick = function () {assignShortcut(menuData,4);}

				/*
				modePathBtn.onClick = function(){
					var osName=$.os.substring(0,3);
					var path = new File("~/desktop");
					var file = path.openDlg("Select a script file", "Adobe JavaScript file:*.jsx,Adobe JavaScript Binary file:*.jsxbin" , false);
					while (file.alias) {
						file = file.resolve().openDlg("Select a script file", "Adobe JavaScript file:*.jsx,Adobe JavaScript Binary file:*.jsxbin" , false);
					}
					var path = file.fsName;
					if(osName =="Mac"){

					}else{
						path = path.replace(/\\/g, '/');
						path = path.replace(/:/g, '');
						var firstStr = path.substring(0,1);
						firstStr = firstStr.toLowerCase();
						path = path.substring(1,path.length);
						path = '/'+firstStr+path;

					}
					expressionStr.text =path;
					//expressionStr.text =file.fsName;
					switch(tagetBtnIndex) {
							case 1:
								menuData.btn01.expStr =expressionStr.text;
								break;
							case 2:
								menuData.btn02.expStr =expressionStr.text;
								break;
							case 3:
								menuData.btn03.expStr =expressionStr.text;
								break;
							case 4:
								menuData.btn04.expStr =expressionStr.text;
								break;
							case 5:
								settingJson2Obj.btn05.expStr =expressionStr.text;
								break;
							case 6:
								settingJson2Obj.btn06.expStr =expressionStr.text;
								break;
							case 7:
								settingJson2Obj.btn07.expStr =expressionStr.text;
								break;
							case 8:
								settingJson2Obj.btn08.expStr =expressionStr.text;
								break;
							case 9:
								settingJson2Obj.btn09.expStr =expressionStr.text;
								break;
						}

				}
				*/

				btnSave.onClick = function(){
					saveNumPadSettingTag();
					saveFlag = 1;
				};

				w.onClose = function () {
						if(saveFlag === 0){

							var saveWindow = new Window ("dialog", "Oops!", undefined, {borderless : true,closeButton: false});
							saveWindow.margins = 0;
							var allGrp = saveWindow.add("group");
							var allContainerGrp = allGrp.add("group");
							var infoGrp = allContainerGrp.add("group");
							var saveBtnGrp = allContainerGrp.add("group");

							allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,menuData.red );
							allGrp.margins = 0;
							allGrp.margins.top = 5;
							allContainerGrp.graphics.backgroundColor = allContainerGrp.graphics.newBrush (allContainerGrp.graphics.BrushType.SOLID_COLOR,menuData.black );
							allContainerGrp.margins = 10;

							saveWindow.orientation ='column';
							saveBtnGrp.orientation ='row';

							var alertInfo = infoGrp.add ('statictext', undefined, "You haven't save after setting expression shortcut.\r\rDo you want to save it?",{multiline:true});
							var saveBtn = saveBtnGrp.add ("button", undefined, "Save it!");
							var closeBtn = saveBtnGrp.add ("button", undefined, "No :(");

							saveBtn.onClick=function(){
								saveNumPadSettingTag();
								saveWindow.close();
								//alert("PLZ restart AE");
							};
							closeBtn.onClick=function(){
								saveWindow.close();
							};
							saveWindow.show ();
						}
					};

				btnReset.onClick = function(){
					var AEFolder = Folder ( Folder.userData.absoluteURI + "/Adobe/After Effects/"+AEversion );
					var osName=$.os.substring(0,3);
					//var shortcut=myDropdown.selection.text+"+"+inputText.text;
					var shortcut=inputText.text;
					var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
					var dskPth;
					var textFile;
					//alert(AEversion);
					if(securitySetting ==1){
						textFile =getNameOfShortcutsFile();
                        //alert("?")
						testIO(textFile,shortcut);
						//---------------------------
						app.settings.saveSetting("Ola_Keyboard", "shortcut", shortcut);
						w.close();
						alert("Plz restart AE");
					}else{
						alert('Make sure Edit>Preferences>General>"Allow Scripts to Write Files and Access Network" is actived.');
						w.close();
					}




				};//end btn event

				deleteBtn.onClick = function(){
					overwriteShortcut();
					deleteSettingTag();
					alert("finished!");
				};

				btnTitleStr.addEventListener ("keyup", function (k) {
						//handle_key (k, this,inputText,mode);
						switch(tagetBtnIndex) {
							case 1:
								settingJson2Obj.btn01.title =btnTitleStr.text;
								break;
							case 2:
								settingJson2Obj.btn02.title =btnTitleStr.text;
								break;
							case 3:
								settingJson2Obj.btn03.title =btnTitleStr.text;
								break;
							case 4:
								settingJson2Obj.btn04.title =btnTitleStr.text;
								break;
							case 5:
								settingJson2Obj.btn05.title =btnTitleStr.text;
								break;
							case 6:
								settingJson2Obj.btn06.title =btnTitleStr.text;
								break;
							case 7:
								settingJson2Obj.btn07.title =btnTitleStr.text;
								break;
							case 8:
								settingJson2Obj.btn08.title =btnTitleStr.text;
								break;
							case 9:
								settingJson2Obj.btn09.title =btnTitleStr.text;
								break;
						}
					},false);

				expressionStr.addEventListener ("keyup", function (k) {
						//handle_key (k, this,inputText,mode);
						if(modeList.selection >=2 && modeList.selection <=4){
							if(isNaN(expressionStr.text)){
								//alert("please input number. :D");
								expressionStr.text = "Please input number. \r\r:D";
								expressionStr.active = false;
								expressionStr.active = true;
							}else{
								if(expressionStr.text <0 || expressionStr.text >100){
									expressionStr.text = "Ease value is out of range.\r\rPlease input from 0.1 to 100. \r\r:D";
									expressionStr.active = false;
									expressionStr.active = true;
									//alert("Ease value is out of range from 0.1 to 100");
								}
							}
						}
					//var parseStr = expressionStr.text.replace(/"/g, "'");
					//var parseStr = expressionStr.text.replace(/"/g, '\\"');
					var parseStr = expressionStr.text;
						switch(tagetBtnIndex) {
							case 1:
								settingJson2Obj.btn01.expStr =parseStr;
								break;
							case 2:
								settingJson2Obj.btn02.expStr =parseStr;
								break;
							case 3:
								settingJson2Obj.btn03.expStr =parseStr;
								break;
							case 4:
								settingJson2Obj.btn04.expStr =parseStr;
								break;
							case 5:
								settingJson2Obj.btn05.expStr =parseStr;
								break;
							case 6:
								settingJson2Obj.btn06.expStr =parseStr;
								break;
							case 7:
								settingJson2Obj.btn07.expStr =parseStr;
								break;
							case 8:
								settingJson2Obj.btn08.expStr =parseStr;
								break;
							case 9:
								settingJson2Obj.btn09.expStr =parseStr;
								break;
						}
					},false);

				modeList.onChange = function(){

					switch(tagetBtnIndex) {
							case 1:
								settingJson2Obj.btn01.mode =modeList.selection.toString();
								break;
							case 2:
								settingJson2Obj.btn02.mode =modeList.selection.toString();
								break;
							case 3:
								settingJson2Obj.btn03.mode =modeList.selection.toString();
								break;
							case 4:
								settingJson2Obj.btn04.mode =modeList.selection.toString();
								break;
							case 5:
								settingJson2Obj.btn05.mode =modeList.selection.toString();
								break;
							case 6:
								settingJson2Obj.btn06.mode =modeList.selection.toString();
								break;
							case 7:
								settingJson2Obj.btn07.mode =modeList.selection.toString();
								break;
							case 8:
								settingJson2Obj.btn08.mode =modeList.selection.toString();
								break;
							case 9:
								settingJson2Obj.btn09.mode =modeList.selection.toString();
								break;
						}
				};
				///////////////////////////////////////////
				function saveNumPadSettingTag(){
						createJsonFile ("KEYboard_setting.json", settingJson2Obj);
						//alert("PLZ restart AE :)");
					}
				///////////////////////////////////////////

				function assignShortcut(btnObj){
						var isTrial = wow.t();
						if(isTrial){
							alert("This feature is not available in trial mode");
						}else{
							saveFlag = 0;
							curBtnStr.text="Button #"+btnObj.index;
							modeList.enabled = true;
							expressionStr.enabled = true;
							btnTitleStr.enabled = true;
							tagetBtnIndex = Number(btnObj.index);
							modeList.selection = chkMode(btnObj);

							expressionStr.text=btnObj.expStr;
							btnTitleStr.text=btnObj.title;
						}
						
					}
				///////////////////////////////////////////

				w.show ();

			}//end setting window


//********** transfer key feature *********************//
			function cloneKey(){
				
				app.beginUndoGroup("Clone Key");
				var myComp = app.project.activeItem;
				if(myComp !== null){
					var seLayers=myComp.selectedLayers;
					var selProps;
					var Time =myComp.time;
					var AllLayerKeyData=[];

					for(var i= 0; i<seLayers.length ; i++){
						var allPropsInALayer=[];
						for(var j=0 ; j<seLayers[i].selectedProperties.length ; j++){
							selProps=seLayers[i].selectedProperties[j];
							allPropsInALayer.push(collectKeyframes(selProps));
						}
						AllLayerKeyData.push(allPropsInALayer);
					 }

					//-----------------------------------
					//AllLayerKeyData[0] ==first selLayer
					//AllLayerKeyData[0][1] ==first prop for selProps //start from 1
					//AllLayerKeyData[0][1][0] ==first keyobj for selKey obj //start from 0
					//-----------------------------------

					var AllKeyTime=[];
					for(var x=0;x<AllLayerKeyData.length ; x++){
						for(var y=0 ; y<AllLayerKeyData[x].length ; y++){
							if(AllLayerKeyData[x][y] ===null ||AllLayerKeyData[x][y] ===undefined ) continue;
							for(var z=0 ; z<AllLayerKeyData[x][y].length ; z++){
								AllKeyTime.push(AllLayerKeyData[x][y][z].curKeyTime);
							}
						}
					}

					AllKeyTime.sort(function(a,b){return a-b;});
					Time =Time -AllKeyTime[0];
					for(var m= 0; m<seLayers.length ; m++){
						//var allPropsInALayer=[];
						for(var n=0 ; n<seLayers[m].selectedProperties.length ; n++){
							selProps=seLayers[m].selectedProperties[n];
							//allPropsInALayer.push(collectKeyframes(selProps));
							//transferKeyframes(selProps ,AllLayerKeyData[i][j] ,Time);
							transferKeyframes(selProps ,AllLayerKeyData[m][n] ,Time,"clone");
						}
					}
				}// end if myComp !== null
				app.endUndoGroup();

			}
			//--------------------------------------//
			function mirrorKey(){
				
				app.beginUndoGroup("Mirror Key");
				var myComp = app.project.activeItem;
				if(myComp !== null){
					var seLayers=myComp.selectedLayers;
					var selProps;
					var Time =myComp.time;
					var AllLayerKeyData=[];


					for(var i= 0; i<seLayers.length ; i++){
						var allPropsInALayer=[];
						for(var j=0 ; j<seLayers[i].selectedProperties.length ; j++){
							selProps=seLayers[i].selectedProperties[j];
							allPropsInALayer.push(collectKeyframes(selProps));

						}
						AllLayerKeyData.push(allPropsInALayer);
					 }

					//alert(AllLayerKeyData.length);
					//AllLayerKeyData[0] ==first selLayer
					//AllLayerKeyData[0][1] ==first prop for selProps //start from 1
					//AllLayerKeyData[0][1][0] ==first keyobj for selKey obj //start from 0
					//alert(AllLayerKeyData[0].length);

					var AllKeyTime=[];
					for(var x=0; x<AllLayerKeyData.length ; x++){
						for(var y=0 ; y<AllLayerKeyData[x].length ; y++){
							if(AllLayerKeyData[x][y] ===null ||AllLayerKeyData[x][y] ===undefined ) continue;

							for(var z=0 ; z<AllLayerKeyData[x][y].length ; z++){

								AllKeyTime.push(AllLayerKeyData[x][y][z].curKeyTime);
							}
						}
					}
					AllKeyTime.sort(function(a, b){return a-b;});
					var maxTime=AllKeyTime[AllKeyTime.length-1];
					Time=(Time+maxTime);

					for(var m= 0; m<seLayers.length ; m++){
						//var allPropsInALayer=[];
						for(var n=0 ; n<seLayers[m].selectedProperties.length ; n++){
							selProps=seLayers[m].selectedProperties[n];
							//allPropsInALayer.push(collectKeyframes(selProps));
							transferMirrorKeyframes(selProps ,AllLayerKeyData[m][n] ,Time,"mirror");

						}

					 }


				}// end if myComp !== null
				app.endUndoGroup();

			}
			//------------------------
			function alignKey(JsonSettingObj){
                try{
				    app.beginUndoGroup("Align Key");
				    var myComp = app.project.activeItem;
				    if(myComp !== null){
					var seLayers=myComp.selectedLayers;
					var selProps ,a,b;
					var Time =myComp.time;
					var AllLayerKeyData=[];
					var everyProps =[];
					var hasKeyInCurTime = 0;

					for(var i= 0; i<seLayers.length ; i++){
						everyProps[i]=[];
						var allPropsInALayer=[];
						for(var j=0 ; j<seLayers[i].selectedProperties.length ; j++){

							everyProps[i][j] =seLayers[i].selectedProperties[j];
							selProps=seLayers[i].selectedProperties[j];
							//alert(allPropsInALayer[j].length )
							allPropsInALayer.push(collectKeyframes(selProps));
							//alert(allPropsInALayer[j])
							//find maxTime and minTime for selProp's keys
							if(allPropsInALayer[j] ===null ||allPropsInALayer[j]===undefined ) continue;
							var thisPropKeyTimeAry=[];
							for(var k=0 ; k<allPropsInALayer[j].length ; k++){
								thisPropKeyTimeAry.push(allPropsInALayer[j][k].curKeyTime);
							}
							thisPropKeyTimeAry.sort(function(a, b){return a-b;});
							allPropsInALayer[j].maxTime=thisPropKeyTimeAry[thisPropKeyTimeAry.length-1];
							allPropsInALayer[j].minTime=thisPropKeyTimeAry[0];
						}
						AllLayerKeyData.push(allPropsInALayer);
					 }

					//-------------------------------------
					//AllLayerKeyData[0] ==first selLayer
					//AllLayerKeyData[0][1] ==first prop for selProps //start from 1
					//AllLayerKeyData[0][1][0] ==first keyobj for selKey obj //start from 0
					//-------------------------------------

					//AllLayerKeyData
					//Time =Time -everyPropsKeyTime[0];
					for(var d=0; d<everyProps.length ; d++){
						for(var c=0; c<everyProps[d].length ; c++){

							everyProps[d][c].selected=true;

							//skip for null property or property group
							if(AllLayerKeyData[d][c] ===null || AllLayerKeyData[d][c]===undefined ) continue;

							
                            //alert("left align");
						      if(myComp.time < AllLayerKeyData[d][c].minTime || JsonSettingObj.prefs_AlignLeft===true){

								//if current comp's time has key already, align keys to left will replace old keys,
								//so total key numbers will minus 1.
								var nearestKeyIndex = everyProps[d][c].nearestKeyIndex(myComp.time);
								var nearestKeyTime = everyProps[d][c].keyTime(nearestKeyIndex);
								if(nearestKeyTime == myComp.time){
									hasKeyInCurTime =1;
								}

								Time=myComp.time-AllLayerKeyData[d][c].minTime;
								transferKeyframes(everyProps[d][c] ,AllLayerKeyData[d][c] ,Time,"align");
                                //alert("right align")
							}else if(myComp.time > AllLayerKeyData[d][c].maxTime){
								Time=myComp.time-AllLayerKeyData[d][c].maxTime;
								transferKeyframes(everyProps[d][c] ,AllLayerKeyData[d][c] ,Time,"align");

							
							} 
							//transferKeyframes(everyProps[d][c],selPropKeyData[d][c],dataObj,"shiftDown");
						}
					}

					for(var m=0; m<everyProps.length ; m++){
						for(var n=0; n<everyProps[m].length ; n++){
							if(AllLayerKeyData[m][n] ===null || AllLayerKeyData[m][n]===undefined ) continue;
							var keysAry =AllLayerKeyData[m][n];

							for(var h=0 ; h <keysAry.length ; h++){
								//because keys' index would be changed 
								//when there is a keys in current time and left aligning keys
								//so index need to minus 1.
								if(hasKeyInCurTime ==1){
									everyProps[m][n].setSelectedAtKey(keysAry[h].curKeyIndex-1,true);
								}else{
									everyProps[m][n].setSelectedAtKey(keysAry[h].curKeyIndex,true);
								}

							}
						}
					}
				}// end if myComp !== null
                }catch(err){
                    
                }finally{
                    app.endUndoGroup();
                }
				
			}
            //------------------------
            function alignLeftKey(){
                try{
                    app.beginUndoGroup("Align Key");
                    var myComp = app.project.activeItem;
                    if(myComp !== null){
                    var seLayers=myComp.selectedLayers;
                    var selProps ,a,b;
                    var Time =myComp.time;
                    var AllLayerKeyData=[];
                    var everyProps =[];
                    var hasKeyInCurTime = 0;

                    for(var i= 0; i<seLayers.length ; i++){
                        everyProps[i]=[];
                        var allPropsInALayer=[];
                        for(var j=0 ; j<seLayers[i].selectedProperties.length ; j++){

                            everyProps[i][j] =seLayers[i].selectedProperties[j];
                            selProps=seLayers[i].selectedProperties[j];
                            //alert(allPropsInALayer[j].length )
                            allPropsInALayer.push(collectKeyframes(selProps));
                            //alert(allPropsInALayer[j])
                            //find maxTime and minTime for selProp's keys
                            if(allPropsInALayer[j] ===null ||allPropsInALayer[j]===undefined ) continue;
                            var thisPropKeyTimeAry=[];
                            for(var k=0 ; k<allPropsInALayer[j].length ; k++){
                                thisPropKeyTimeAry.push(allPropsInALayer[j][k].curKeyTime);
                            }
                            thisPropKeyTimeAry.sort(function(a, b){return a-b;});
                            allPropsInALayer[j].maxTime=thisPropKeyTimeAry[thisPropKeyTimeAry.length-1];
                            allPropsInALayer[j].minTime=thisPropKeyTimeAry[0];
                        }
                        AllLayerKeyData.push(allPropsInALayer);
                     }

                    //-------------------------------------
                    //AllLayerKeyData[0] ==first selLayer
                    //AllLayerKeyData[0][1] ==first prop for selProps //start from 1
                    //AllLayerKeyData[0][1][0] ==first keyobj for selKey obj //start from 0
                    //-------------------------------------

                    //AllLayerKeyData
                    //Time =Time -everyPropsKeyTime[0];
                    for(var d=0; d<everyProps.length ; d++){
                        for(var c=0; c<everyProps[d].length ; c++){

                            everyProps[d][c].selected=true;

                            //skip for null property or property group
                            if(AllLayerKeyData[d][c] ===null || AllLayerKeyData[d][c]===undefined ) continue;

                            //alert("right align")
                            if(myComp.time > AllLayerKeyData[d][c].maxTime){
                                Time=myComp.time-AllLayerKeyData[d][c].maxTime;
                                transferKeyframes(everyProps[d][c] ,AllLayerKeyData[d][c] ,Time,"align");

                            //alert("left align");
                            }else if(myComp.time < AllLayerKeyData[d][c].minTime){

                                //if current comp's time has key already, align keys to left will replace old keys,
                                //so total key numbers will minus 1.
                                var nearestKeyIndex = everyProps[d][c].nearestKeyIndex(myComp.time);
                                var nearestKeyTime = everyProps[d][c].keyTime(nearestKeyIndex);
                                if(nearestKeyTime == myComp.time){
                                    hasKeyInCurTime =1;
                                }

                                Time=myComp.time-AllLayerKeyData[d][c].minTime;
                                transferKeyframes(everyProps[d][c] ,AllLayerKeyData[d][c] ,Time,"align");
                            }
                            //transferKeyframes(everyProps[d][c],selPropKeyData[d][c],dataObj,"shiftDown");
                        }
                    }

                    for(var m=0; m<everyProps.length ; m++){
                        for(var n=0; n<everyProps[m].length ; n++){
                            if(AllLayerKeyData[m][n] ===null || AllLayerKeyData[m][n]===undefined ) continue;
                            var keysAry =AllLayerKeyData[m][n];

                            for(var h=0 ; h <keysAry.length ; h++){
                                //because keys' index would be changed 
                                //when there is a keys in current time and left aligning keys
                                //so index need to minus 1.
                                if(hasKeyInCurTime ==1){
                                    everyProps[m][n].setSelectedAtKey(keysAry[h].curKeyIndex-1,true);
                                }else{
                                    everyProps[m][n].setSelectedAtKey(keysAry[h].curKeyIndex,true);
                                }

                            }
                        }
                    }
                }// end if myComp !== null
                }catch(err){

                }finally{
                    app.endUndoGroup();
                }
            }
            
            //------------------------
			function organizeKey(){
                
                try{
				    app.beginUndoGroup("Correct Key");
				    var myComp = app.project.activeItem;
				    if(myComp !==null){
					var seLayers=myComp.selectedLayers;
					var offset ,selProps1 ,selProps2 ;

					var TimeObj = {};
					TimeObj.time =myComp.time;
					TimeObj.correctedKeyNums =0;
					var everyProps =[];
					//alert(seLayers[0].selectedProperties[0].name)
					for(var x=0; x<seLayers.length ; x++){//colect all selected properties
						everyProps[x]=[];
						for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){
							everyProps[x][y] =seLayers[x].selectedProperties[y];
						}
					}
					var selPropKeyData=[];
					for(var a=0; a<everyProps.length ; a++){
						selPropKeyData[a]=[];
						for(var b=0; b<everyProps[a].length ; b++){
							selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
						}

					}
					for(var d=0; d<everyProps.length ; d++){
						//offset=Time-seLayers[d].outPoint+myComp.frameDuration;
						for(var c=0; c<everyProps[d].length ; c++){
							everyProps[d][c].selected=true;
							transferKeyframes(everyProps[d][c],selPropKeyData[d][c],TimeObj,"organize");
						}
					}//move keys

					for(var m=0; m<everyProps.length ; m++){
						for(var n=0; n<everyProps[m].length ; n++){
							//alert(selPropKeyData[d][c])
							if(selPropKeyData[m][n] ===null || selPropKeyData[m][n]===undefined ) continue;
							var keysAry =selPropKeyData[m][n];

							for(var k=0 ; k <keysAry.length ; k++){
								everyProps[m][n].setSelectedAtKey(keysAry[k].curKeyIndex,true);
							}
						}
					}//re-select keys

					alert(TimeObj.correctedKeyNums+" keys are corrected. ");

				}// end if myComp !== null
                }catch(err){
                    
                }finally{
                    app.endUndoGroup();
                }
				
			}
			//------------------------
			function randomKey(JsonSettingObj){

				//biary
				
				var binIcon="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02sIDATx\u00DA\u00EC\u00981n\u00DB@\x10E)\u00C1}\u00CC\x1B\x04\u00AB\x03\u00C4\u0080\u0083\u00D4.\u0094>\u008D\u00DC\u00C6i\u00A4#DG\u00B0\u00BB\u00B4b\u0093\u00A4\u008D\u008A\x1C *\\\x07! \x1F\u00C0\x0B\u009D \u0092O\u00C0\u00FC\t\u00FE\x1A\u0083\t\x15P\u00C4ZZ\u00C1\\`@jv5|;\u00B33\u00A2\u00A6WUU\u0096\u00FA\u00E8gG0:\u00C8g\x05y\x12\u00CB\u00D0\u00BD\u00F73\\\u00C6\u00FC\u00B8\u0080L\x06\u00CE\u00F9d<\t\u00C0k\\F\u0090\u00B7\u0094\x1C\u00F2-\u00B5p\x0B`\x01\u00CF-Dp?\u0085\u009C\x03>O\t\u00D2A\x1ECKP\x19\u00E7\u00C7\u00908\u00EE\x18 }J\u0090\u009E\u00C9\x12\x12i\u00C8\u00DB2\u00A5\x12TH\u00F9\x01\u009C@\u00AD!\x1F\u00A5\f\u00E1l\u00AE\u0093\u00F1$`nX\x1B\x7F@~Q=\u0089ufz\u00DD[\u00D0!!{\u00B3\u009F\u00EF \u00A7\u00C9B\x02\u00EE\n\u0097\u00EF\u0090\u00DB}\u0081\u00F6[\x00~\u00E6\u00C7W\u00FB\x02\u00ED\u00EF\x12b\x05\u0098i\u00D0\u0094<)0w5\u00FAO\u00C9@V\u00937\x1B\\.\f\u00E8\x07\u00E8\u00BF$u&\rhc@9\u00CB\u0090\u00D6\u009By\u00F2bn\u0092\u00ED+6v\u0095T17\u00802\u00DE\u00B7\u00F1\u00E8\u0093y\u0092\u00A5i\x05ya\u00A6\x1E g\u00F0\u00E8\u00EA\u00E0\u009ET\u00E7\u00F7\u00C1\x00^\u00EC\x02\x18\u00DD\u0093\u00F0\u00DEK\\6\x04\f\u00BA3UK\x05py\u00B0p+\u0098\x15a,h\u00D6\x060\x1A\u00A4\x02\f\u00E7\u00EF\u00CE\u0082\x1E\u00F4U\u008D!\u00BE5\t\x12\u00F5\u00E72F\u00E2l\x18b;\u0096\u00C9@n\u00F9\u00B9lU\u00B4\u00F7\u00918\u00A7\f\u00F12&`\u00F7\x1F\u00A7\u0083|6\u0090\u00F7\u00DEW\u00AA\u00D5\u0092\u00B4'],C'j\u00F7C\u00B6I\u00A4]\"}Ei\u009D\\sz>p\u00EE\u00D2\u00AC\x19\x06=\u00BF/\u008DT\u00E9\u00EE\u0096\u00C6\u00AB\u00A2\u009F\u0085\u00D6\x0B\u00D6\u00CFk\u00EC\x14\u009C\x1Fk\u009Bu\u009E\f;\u0097\u0087\u00BC&\u00A0\u00B4\u0096\x07\u0090\x11\r\u008757F\u009F\x11p\u00A2\x1E\x18\u0086\x00N)3\u00F3\u00AC\u0082vB\u00AF\u00DD\u00DA\u00AC\x0F7v1eC~\u00C0\u008E\u00AD|a\u00AD\u00C3\u00C7\u00B6s\u00E8=:eT\u00BCP\u0098\u00E8HKpN\u00C95\u0080xU\u00D9)\u00B5\u00CD\u00A6gr\b\u0083\u00BF\x19\u00FA\u00BC\u00C9\u00F9\u00ABi\u00F5=\u00EA\u00D5\u009C\u008B\u00998\x7F\u00C3\x04\u00E3MZx\u00FE\x7Fzi\u00F0\u00AB&\u00BF\u008F\u009E\u00DD\rKI\u00C9\u00B5\u00D2H\x1D\u00EBc\u00C1\u00DB\x11e\u00ADt\u00BBgw\u00CD\x0E\u00C3A_pnL\u00DD?\u00DE\u0092P\x02.\u00AC/\u008D\u00BDK\u00EAs\u00DEo\u00F3\u00A6\u00DF\u00C6\u00D2\u00BD`t\u0090\u00A9\u008D?\x02\f\x00\u00E6R$d\u00A3\x0B\u00F6\u00BE\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binClose = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u008AIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\x00\x0B.\tii\u00E9\x04 U\x00\u00C4\u00FAhR\x17\u0081x\x01\b?}\u00FA\u00F4\x036\u00BD\u008C\u00E8\u00DE\x07\x1Af\x00\u00A46\x00\u00B1<\x01\x07}\x04\u00E2\x04\u00A0\u00C1\x1B\u00F0z\x1F\u00EA\u00BA\u00F3D\x18\b\x02\u00FC@\u00BC\x1E\u00AA\x07\u00BBK\u00A1.<\x00UL*p\x04\u00BA\u00F8\x006\u0097N \u00D3@\x06h\x18\u00A3z\x1F\u00EAJ{d\tsa)\u0086rMs\x06NfD\\\u0082\u00D8 1\u0090\x1C\x1A\u0090\x07\u009A\x11\u0080\u00EE\u00D2\x00\u00AC)\u0080\u0093\u0097!O\u00CD\x18l\x18\b\u0083\u00D8 1\x1C \x00=I9\u00A0\u00AB8\u00F9\u00F6\x19\u0098\u008E\u0096\u00D7b(P7a`\x00\x06\u00BD$'\x0F\u00C3\u00D2\u0087\u00D7\u00E0rh@\u0081`:\u0085\x19\u00CC\u00C6\u00C4\u00CC\x10*\u00AB\x0E\u00E6\u00AF~|\x03\u0097\u0081\u00C4\u00E7(\u0090\u0097\u00ADD\x10\u00E1g%\"\u008D\x12\u00C6\u0084\f}\u0080\u00CD@X\x18\u0082\u00BC\f\u00C2\u00C8a\u008C\x05|@7\u00F4\x00\u00BA\n\x0719\u00B8\u0081 /\u00830\u00CC\u00E0`\x19ul\u0086\x1E\u00C0\u0096\u00F8?\u00A0\u00A7SU^A\u0086\u00DB\u009F\u00DF\u00A3\u00E8\u00D4\x13\x10\x05\u008B}\u00FF\u00FB\x07=\u00CB*\u00C0\u00CA\x02\u00E40-@\u00B7\x1A\u00DD@\x10\u00B8\u00F4\u00E15\u00BA\u0081\u00E0\u008C\u0083\\\u00B8\u00A0\x14(@\u00D7\u0082rF<\u0089\u00B9\u00E9 \u00D0@\x07\u009C\u00B1\x0F\u0094\x04\x15\x0E\x0BI0p!\u00B6\u008C\u00C3\u0088\u00AD\u00E4\x07\u00BA\u00D8\x01Z\x16\u00E8\u00E30\u00EC!(\u00B8\u00B0\x15{8\rE2\\\x01\u009A\u00DB\x14\u0090\u0092\u00CD\x01\u00A0a\x17\u00F09\u009F\u0091\x16u\x14@\u0080\x01\x00\u00CB\u00DF\u008F\u00F5\u0099P\u00B8\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binShift="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x003\x00\x00\x00\x15\b\x06\x00\x00\x00\u00EBT\u00D6\x01\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02/IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3p\x01,\u0084\x14HKK;\f\x02w>x\u00FA\u00F4\u00E9\x03B\u008A\x18\u00B1\u00C5\f\u00D0\x03\n@\u00AA\x01\u0088\u00E3\x07Q\u00C0?\x04\u00B9\t\u00E8\u00A9\x05D{\x06\u00E8\u0091\x02 \u00D5?\u0088S\u00D3E \x0E\u00C0\x16S(\u009E\x01zd\u00C1 \u008B\r\\\u00E0#\x10\x1B\u00A0{\u0088\t\u00C9#\x01\u00F8<\u00F2t\u00917\n\u009E\u0099c\u00C4\u00C0\u00CF\u00CDJ\u0096K@\u00FAm\u00B5E\u00C0l\x10\r\u00E2\u00A3\u00CB\u00C78\u00CA\u00E13\u0082\x1F\u00887\u00A0\x0B2!\u00B1'\x10r\u00C4\u00D4-w\x19\u00CA\u00E7_\x06c]\x05~\u0086\x15\u00E5\u00E6dy\x06d\u00CE\u00A3\u00D7\u00DF\u00C0ly1.\u00EC\u00AE%\x1CP\u00FA\u00C0\bH\u00C0\u00F0\fTP\u009E\u0090n\u0090\x03\u0096\u00EC\x7F\x04\u00C6\u00D3\u00B6\u00DEe\u00D0\x03z\b\u0084a\u0096\u0083<\x07\n\u00D5c=\u008Epql \u00DBG\u0099AN\u0094\x0B\x1C+\u009D\u0089\u00BA\x18\u00B1E\x02h\u00C0\x163$\x17\u00BF\u0087\u00AF\u00BE\x01\u00D3z\u008A\x10Gw\x01\x1D\x05\u00F2\u0090g\u00DD\x11\u00B0\x1C\u00A1X\x03\u00C5\bH\x1D(\u0096@\x00\u00A6\u008FD \x0F-yQ<\u00A3@r9\u00F9\u00EA\x1BJr\x00\u0085\u00EA\u0096S\u00CF\x19.=\u00F8\u00C8\u00B0\x14\x18s q|\u00B1\u0083\x1C\u00DB \x00\u00D2\x07\u00CF\u00DD_\x7F\u00831\u0091@\x01[\u009E!\u00AFX\u0081Z\nr<\u008C\rs\x18,\u00D6\u00C8\u00AAT\u00A0\u0081E\n \u00DB3\u00B0\x18!\u00C7R\u0082\x1E\x01\u00C6\x16\t1\u0083\u00E1\u0099\x07\u00A4j\u0084eVX, [\x0E+\u00A1\u00C8\u00C8\x03\x10}W\u00DE\u0080=DlS\x07\u00DD3\x07\u0088\u00D1\x05*\u0081@\u00E5?\bW\u0085i\u0080\u00F3\b\u00CC\x13 \u0087G\x03\u00C5A\u00F9$\u00CB[\x19,NJ\u00AC\u00A1\u00E7/yQ.\u00A2Z\x03\u00C8\x15'\u00D83\u00D0\u00F6\u00CECB:AE*\u00A8(\x05\u00E1\u00CB\u00C0\x18)\x03\u00D670\x00b\u0083<\u00B0\u00BD\u00C9\u0086\u00C1\u00D7L\u0092!\u00A2\u00F3$Qy\x02\x16{ }\u00B0\x18\x05\u00D9Cd~\u009B\u0080\u00B59\x03m\x01\u00AC\x1FB-~P\u00AC\x18`-\x00\u0080\x12\u00A0\u00E6\u00C1\u00C4!\u00E2\x11PF\r\u00C0[\u009A\x01=\x04j1\x17\x0E\u00F6\x18\u00C1\u00D6\u00C8$\u00A6?\x13\x00m\u00D4\r\x16OL \u00A9?3\u00ECz\u009AC\x15\x00\x04\x18\x00j\u0083\x04\u008E\u00C1\x0E-[\x00\x00\x00\x00IEND\u00AEB`\u0082";
				
				var imgIcon =createResourceFile ("KEYboard_random.png", binIcon);
				var imgClose =createResourceFile ("KEYboard_random_close.png", binClose);
				var imgDoIt =createResourceFile ("KEYboard_DoIt.png", binShift);

				var lightGray = HexToRGB("#393939");
				var white =HexToRGB("#EEEEEE");
				var yellow = HexToRGB("#FFBC65");
				var red= HexToRGB("#AC4C5E");
				var purple =HexToRGB("#5C476F");

				var AEversion = app.version.substring(0,4);
				var myWindow;
				if(AEversion <12){
					myWindow = new Window('palette','Random Key',undefined ,{borderless:false});
				}else{
					myWindow = new Window('palette','Random Key',undefined ,{borderless:false});
				}
				myWindow.graphics.backgroundColor = myWindow.graphics.newBrush (myWindow.graphics.BrushType.SOLID_COLOR,yellow );
				//var myWindow = new Window ("dialog", "shift key",{borderless : true});
				myWindow.alignChildren = ['fill','fill'];
				myWindow.orientation = "row";
				myWindow.margins = 0;
				myWindow.margins.top = 5;
				myWindow.spacing = 0;


				var allGrp = myWindow.add ("group");
				allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,lightGray );
				allGrp.spacing = 0;

				var header = allGrp.add ("group");
				header.orientation = "row";
				header.alignChildren = ['fill','fill'];


				var iconGroup = header.add ("group");
				iconGroup.alignChildren = ['right',''];
				var icon = iconGroup.add ("image", undefined,imgIcon);

				var functionGroup = allGrp.add ("group");
				functionGroup.margins = 15;
				functionGroup.orientation = "column";

				var myInputGroup = functionGroup.add ("group");
				myInputGroup.spacing = 8;

				var min = myInputGroup.add ('edittext {text: "0", characters: 8, justify: "center"}');
				var divide = myInputGroup.add ('statictext {text: "~", characters: 2, justify: "center"}');
				var max = myInputGroup.add ('edittext {text: "5", characters: 8, justify: "center"}');
				var timeFormat = myInputGroup.add ("dropdownlist", undefined, ["Frames", "Seconds"]);
				timeFormat.selection = 0;

				//JsonSettingObj.randomKeys_preVal = [0,5];
				min.text=JsonSettingObj.randomKeys_preVal[0];
				max.text=JsonSettingObj.randomKeys_preVal[1];
				if(JsonSettingObj.randomKeys_preUnit =="Frames"){
					timeFormat.selection = 0;
				}else{
					timeFormat.selection = 1;
				}
				min.characters = 3;
				min.active = false;
				max.characters = 3;
				max.active = true;

				var OKbtn =myInputGroup.add ("iconbutton", undefined, imgDoIt,{style: "toolbutton"});
				var Closebtn =myInputGroup.add ("iconbutton", undefined, imgClose,{style: "toolbutton"});
				Closebtn.preferredSize = [23,23];
				OKbtn.preferredSize = [53,23];
				Closebtn.helpTip ="cancel and close window";
				var btnSize=[30,25];
				
				
				
	

				//------
				function getRandom(min, max) {
					min=parseInt(min);
					max=parseInt(max);
					return Math.floor(Math.random() * (max - min + 1)*10)/10 + min; // float
					//return Math.floor(Math.random() * (max - min + 1)) + min; //int
				}
				function getRandomFactor() {
					var random =(Math.random() >0.5) ? 1 : -1 ;
					return random;
				}
				function getRandomArray(minNum, maxNum, n) {	
					var rdmArray = [n];		//save random array which total are n

					for(var i=0; i<n; i++) {
						var rdm = 0;	
						rdm = getRandom(minNum, maxNum);	
						rdmArray[i] = Math.round(rdm);			
					}

					return rdmArray;
			     }
			
				function doRandom(){
					
					var myComp = app.project.activeItem;
					if(myComp !==null){
						var seLayers=myComp.selectedLayers;
						var offset ,selProps1 ,selProps2 ,Time ;
						var showTextMin = 30;
                        var info;
						if(seLayers.length >showTextMin){
							
							info = myInputGroup.add("statictext",[0,0,140,30],"");
							myWindow.layout.layout (true);	
						}
		
						Time =myComp.time;
						var everyProps =[];
						//alert(seLayers[0].selectedProperties[0].name)
						for(var x=0; x<seLayers.length ; x++){//colect all selected properties
							everyProps[x]=[];
							for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){
								everyProps[x][y] =seLayers[x].selectedProperties[y];
							}
						}
                        
                        if(everyProps.length >showTextMin){
								info.text="collect keyframes...(1/3)";
								myWindow.update();	
				        }
                        
						var selPropKeyData=[];
						for(var a=0,al=everyProps.length; a<al ; a++){//collect all key data for every selected props
							selPropKeyData[a]=[];
							for(var b=0,bl=everyProps[a].length; b<bl ; b++){
								selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
							}
                            if(everyProps.length >showTextMin){
								//info.text=(a+1)+" / "+everyProps.length+" (0/2)";
								//myWindow.update();	
							}

						}
                       
						if( isNaN(min.text)) min.text =0;
						if( isNaN(max.text)) max.text =0;
                        
                        if(everyProps.length >showTextMin){
								info.text="move keyframes...(2/3)";
								myWindow.update();	
				        }
		
						for(var d=0, el=everyProps.length; d<el ; d++){

							var factor =getRandomFactor();
                            var rdm = getRandom(min.text, max.text);	
							rdm = Math.round(rdm);
                            
							var dataObj = {};
							dataObj.offset=rdm *factor;
							dataObj.format=timeFormat.selection;
                            
							for(var c=0,el2=everyProps[d].length; c<el2 ; c++){
                                
                                if(everyProps[d][c] ===null ||everyProps[d][c]===undefined ) continue;
								everyProps[d][c].selected=true;
								transferKeyframes(everyProps[d][c],selPropKeyData[d][c],dataObj,"random");
							}
                            
							if(everyProps.length >showTextMin){
								//info.text=(d+1)+" / "+everyProps.length;
								//myWindow.update();	
							}
						}
                       
                        if(everyProps.length >showTextMin){
								info.text="select keyframes...(3/3)";
								myWindow.update();	
				        }
                        
						for(var m=0,el3=everyProps.length; m<el3 ; m++){ //select key again
							for(var n=0, el4=everyProps[m].length ; n<el4; n++){
								if(selPropKeyData[m][n] ===null || selPropKeyData[m][n]===undefined ) continue;
								var keysAry =selPropKeyData[m][n];
								for(var k=0,kl=keysAry.length ; k <kl ; k++){
									everyProps[m][n].setSelectedAtKey(keysAry[k].curKeyIndex,true);
								}
                            }
                            
                            if(everyProps.length >showTextMin){
                                //info.text="sel:"+(m+1)+" / "+everyProps.length+" (2/2)";
                                //myWindow.update();	
				            }
						}
                       
                        if(everyProps.length >showTextMin){
						      alert("finished");
					       }
					}// end if myComp !== null
					
					
				
				}//end doRandom function
                
                function doRandomV2(){
                    	var myComp = app.project.activeItem;
					if(myComp !==null){
						var seLayers=myComp.selectedLayers;
						var offset ,selProps1 ,selProps2 ,Time ;
						var showTextMin = 30;
                        var info;
                        if(seLayers.length >showTextMin){
							
							info = myInputGroup.add("statictext",[0,0,140,30],"");
							myWindow.layout.layout (true);	
						}
		
                        Time =myComp.time;
						var everyProps =[];
                        
                        for(var x=0; x<seLayers.length ; x++){//colect all selected properties
							everyProps[x]=[];
							for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){
								everyProps[x][y] =seLayers[x].selectedProperties[y];
							}
						}
                        
                        if(everyProps.length >showTextMin){
								info.text="collect keyframes...(1/3)";
								myWindow.update();	
				        }
                        
						var selPropKeyData=[];
						for(var a=0,al=everyProps.length; a<al ; a++){//collect all key data for every selected props
							selPropKeyData[a]=[];
							for(var b=0,bl=everyProps[a].length; b<bl ; b++){
								selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
							}
                            if(everyProps.length >showTextMin){
								//info.text=(a+1)+" / "+everyProps.length+" (0/2)";
								//myWindow.update();	
							}

						}
                        info.text="collect keyframes...(2/3)";
				        myWindow.update();	
                        
                    }
                }
		
				//------
				min.addEventListener ("keydown", function (kd) {pressed (kd);});
				max.addEventListener ("keydown", function (kd) {pressed (kd);});
				
                function pressed (k){
					if(k.keyName == "Enter"){
                        JsonSettingObj.randomKeys_preVal[0] =min.text;
                        JsonSettingObj.randomKeys_preVal[1] =max.text;

                        if(timeFormat.selection.toString() !=JsonSettingObj.randomKeys_preUnit){
                            JsonSettingObj.randomKeys_preUnit =timeFormat.selection.toString();
                        }
                        var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
                        
                        try{
                            app.beginUndoGroup("Random Key");
                            myWindow.close(); 
                            doRandom();
                            
                        }catch(err){
                            
                        }finally{
                            app.endUndoGroup();
                              
                        }
						

						
					}else if(k.keyName == "Escape"){
						myWindow.close();
					}
				}
				/*******************

				*/////////////////

				OKbtn.onClick = function(){
					
					
					
					
					
					JsonSettingObj.randomKeys_preVal[0] =min.text;
					JsonSettingObj.randomKeys_preVal[1] =max.text;

					if(timeFormat.selection.toString() !=JsonSettingObj.randomKeys_preUnit){
						JsonSettingObj.randomKeys_preUnit =timeFormat.selection.toString();
					}
					var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
					try{
                        app.beginUndoGroup("Random Key");
                        myWindow.close();
                        doRandom();
                    }catch(err){
                        
                    }finally{
                        app.endUndoGroup();
                        
                    }

				};

				Closebtn.onClick = function(){
				
					myWindow.close();
				};


				myWindow.show ();
				
			}
			//------------------------
			function shiftUpKey(JsonSettingObj){
		
				//binary
				
				var binIcon="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00ECIDATx\u00DA\u00EC\u0099=N\u00C3@\x10\u00857\x11=\u0084#8\x07\x00)\u0088:\x05\x07HCZL\x13\u00B7\u00E9\u00B8B\u00E8(1M\u009C\u00D6)\u00A0\x07\tZP\u0090\u00B8\x00\x16'H\u00C4\t\u00967bBV+\x07\u00EC\u00B0\u00B6\x06\u00B4#=\u00ED\u00EE\u00AC\u00E4|\u0099\u00F1\u00FEd\u00D2\u00D0Z+\u00E9\u00D6T\x7F\u00C0<\u00A4\u0087,k\u00AFYv\x04i\u00CB\u00A7\u00C9/)\u0092AI\u00BFO\u00B7\u0087\u00F4\u0090U\u00DB\u0096\u00A3\u00E7\u00DC\u00F1\u00B63B3\u0085\u008EM\u00FFo\u00AD\u00E1\u00EA\u0082\x01@\x02\u008B\u00A1\x16\u00B4\u0080\u00A2v\x10LEA\u00FA\u0085S:\u00F4\u00F1SW4$\x00\x134\u00F7hC\u0091\u0090\fx\u00C2\u00C3q\u009D\u00A0\u00CD\u0082\u0080\x17\x06\u00A0\u00AA\x1B\u00B4h$)\u008A\u00EF\u0096\u008F\u00C6/b utH0]\x03\u0094\u00DA.\u00FB+\u00B7R\u00FB$\u00D2\u00BB\u008F\u00E6\x06\u00EA\u00E5\x01b~\u0087\u00E7\u0087.\u00BF\u0080\u00B3\u00CD\u009C\x01\x1F\u00A0=\u00D7\u0091nV\x00H\u00B6Mc\u008E\u00BC\u0098\x13gh\x00*\x034\u0094\u0096\u00EE\u00C4\u00DA\u00A6&Hw()\u0092\u008A\u0081&?\x01n\u00F4\nP$]J]>\u0086\u00DF\u00CDA\x1AJ\u00CA<\u00B3\u00B6\u00AB\x1A\u009FN\u00E3M^\u0087Z \x01\u00D8Cs\u009D3U\b\u00B4\u00AE\u00FB\u00E4[\u00CE\u00B1\u00AAx\u00DB\u0092q\u00E9\u00CD9V\u00C9N\u00E1OD\u00DD\u00CC-\u00D0\u00C2\u0080\u00FE7\u008E\u0087\u00FC\u0097\u0090y\x05T\u00F6\x7F\x15Q\u00D1\u00A6\u00CB14\u0083:uGr]\u00A1\u00F4\x1C\u00CA\u00B8O\u00D5\u008D~;\b\u00A8\u00EC\u00D2aU\x03I\u00A5\x14h\u00CEQ\u0089\u00AD\u00B9\x19\u00FB\u00CF\u00D8Em`D95\u00FA1\u00FA\u0083\u00AA\"\u0099r\u0084\u00DA\u00D0\u00C0J\x1B\u00F9#hdF\x19\u00D1kp?\u00B2\u00FAWU\u00A6\u00BB\u00C3)>\u00C0\x07=/\u009D\u00AE\u008AS. \u00FB\x10-\u0086[\x12W\u00D2\u00C4\u00AD\u00EE\x16\u00A7zW}\u00D6!S\u0089\u0090\u00B1Z\x15H\x17,q\u0090}^\x18\u00F3\u00E5\u00B6bl3\u00CA\u00EA\u00AB5s\x19\u00AF\u00EE\u00C2\x7FD\u00F9\x0B\u0086\u0087\u0094f\x1F\x02\f\x000ee\u0082,E\u008A\x1C\x00\x00\x00\x00IEND\u00AEB`\u0082";


				var binClose = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u008AIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\x00\x0B.\tii\u00E9\x04 U\x00\u00C4\u00FAhR\x17\u0081x\x01\b?}\u00FA\u00F4\x036\u00BD\u008C\u00E8\u00DE\x07\x1Af\x00\u00A46\x00\u00B1<\x01\x07}\x04\u00E2\x04\u00A0\u00C1\x1B\u00F0z\x1F\u00EA\u00BA\u00F3D\x18\b\x02\u00FC@\u00BC\x1E\u00AA\x07\u00BBK\u00A1.<\x00UL*p\x04\u00BA\u00F8\x006\u0097N \u00D3@\x06h\x18\u00A3z\x1F\u00EAJ{d\tsa)\u0086rMs\x06NfD\\\u0082\u00D8 1\u0090\x1C\x1A\u0090\x07\u009A\x11\u0080\u00EE\u00D2\x00\u00AC)\u0080\u0093\u0097!O\u00CD\x18l\x18\b\u0083\u00D8 1\x1C \x00=I9\u00A0\u00AB8\u00F9\u00F6\x19\u0098\u008E\u0096\u00D7b(P7a`\x00\x06\u00BD$'\x0F\u00C3\u00D2\u0087\u00D7\u00E0rh@\u0081`:\u0085\x19\u00CC\u00C6\u00C4\u00CC\x10*\u00AB\x0E\u00E6\u00AF~|\x03\u0097\u0081\u00C4\u00E7(\u0090\u0097\u00ADD\x10\u00E1g%\"\u008D\x12\u00C6\u0084\f}\u0080\u00CD@X\x18\u0082\u00BC\f\u00C2\u00C8a\u008C\x05|@7\u00F4\x00\u00BA\n\x0719\u00B8\u0081 /\u00830\u00CC\u00E0`\x19ul\u0086\x1E\u00C0\u0096\u00F8?\u00A0\u00A7SU^A\u0086\u00DB\u009F\u00DF\u00A3\u00E8\u00D4\x13\x10\x05\u008B}\u00FF\u00FB\x07=\u00CB*\u00C0\u00CA\x02\u00E40-@\u00B7\x1A\u00DD@\x10\u00B8\u00F4\u00E15\u00BA\u0081\u00E0\u008C\u0083\\\u00B8\u00A0\x14(@\u00D7\u0082rF<\u0089\u00B9\u00E9 \u00D0@\x07\u009C\u00B1\x0F\u0094\x04\x15\x0E\x0BI0p!\u00B6\u008C\u00C3\u0088\u00AD\u00E4\x07\u00BA\u00D8\x01Z\x16\u00E8\u00E30\u00EC!(\u00B8\u00B0\x15{8\rE2\\\x01\u009A\u00DB\x14\u0090\u0092\u00CD\x01\u00A0a\x17\u00F09\u009F\u0091\x16u\x14@\u0080\x01\x00\u00CB\u00DF\u008F\u00F5\u0099P\u00B8\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binShift="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x003\x00\x00\x00\x15\b\x06\x00\x00\x00\u00EBT\u00D6\x01\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02/IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3p\x01,\u0084\x14HKK;\f\x02w>x\u00FA\u00F4\u00E9\x03B\u008A\x18\u00B1\u00C5\f\u00D0\x03\n@\u00AA\x01\u0088\u00E3\x07Q\u00C0?\x04\u00B9\t\u00E8\u00A9\x05D{\x06\u00E8\u0091\x02 \u00D5?\u0088S\u00D3E \x0E\u00C0\x16S(\u009E\x01zd\u00C1 \u008B\r\\\u00E0#\x10\x1B\u00A0{\u0088\t\u00C9#\x01\u00F8<\u00F2t\u00917\n\u009E\u0099c\u00C4\u00C0\u00CF\u00CDJ\u0096K@\u00FAm\u00B5E\u00C0l\x10\r\u00E2\u00A3\u00CB\u00C78\u00CA\u00E13\u0082\x1F\u00887\u00A0\x0B2!\u00B1'\x10r\u00C4\u00D4-w\x19\u00CA\u00E7_\x06c]\x05~\u0086\x15\u00E5\u00E6dy\x06d\u00CE\u00A3\u00D7\u00DF\u00C0ly1.\u00EC\u00AE%\x1CP\u00FA\u00C0\bH\u00C0\u00F0\fTP\u009E\u0090n\u0090\x03\u0096\u00EC\x7F\x04\u00C6\u00D3\u00B6\u00DEe\u00D0\x03z\b\u0084a\u0096\u0083<\x07\n\u00D5c=\u008Epql \u00DBG\u0099AN\u0094\x0B\x1C+\u009D\u0089\u00BA\x18\u00B1E\x02h\u00C0\x163$\x17\u00BF\u0087\u00AF\u00BE\x01\u00D3z\u008A\x10Gw\x01\x1D\x05\u00F2\u0090g\u00DD\x11\u00B0\x1C\u00A1X\x03\u00C5\bH\x1D(\u0096@\x00\u00A6\u008FD \x0F-yQ<\u00A3@r9\u00F9\u00EA\x1BJr\x00\u0085\u00EA\u0096S\u00CF\x19.=\u00F8\u00C8\u00B0\x14\x18s q|\u00B1\u0083\x1C\u00DB \x00\u00D2\x07\u00CF\u00DD_\x7F\u00831\u0091@\x01[\u009E!\u00AFX\u0081Z\nr<\u008C\rs\x18,\u00D6\u00C8\u00AAT\u00A0\u0081E\n \u00DB3\u00B0\x18!\u00C7R\u0082\x1E\x01\u00C6\x16\t1\u0083\u00E1\u0099\x07\u00A4j\u0084eVX, [\x0E+\u00A1\u00C8\u00C8\x03\x10}W\u00DE\u0080=DlS\x07\u00DD3\x07\u0088\u00D1\x05*\u0081@\u00E5?\bW\u0085i\u0080\u00F3\b\u00CC\x13 \u0087G\x03\u00C5A\u00F9$\u00CB[\x19,NJ\u00AC\u00A1\u00E7/yQ.\u00A2Z\x03\u00C8\x15'\u00D83\u00D0\u00F6\u00CECB:AE*\u00A8(\x05\u00E1\u00CB\u00C0\x18)\x03\u00D670\x00b\u0083<\u00B0\u00BD\u00C9\u0086\u00C1\u00D7L\u0092!\u00A2\u00F3$Qy\x02\x16{ }\u00B0\x18\x05\u00D9Cd~\u009B\u0080\u00B59\x03m\x01\u00AC\x1FB-~P\u00AC\x18`-\x00\u0080\x12\u00A0\u00E6\u00C1\u00C4!\u00E2\x11PF\r\u00C0[\u009A\x01=\x04j1\x17\x0E\u00F6\x18\u00C1\u00D6\u00C8$\u00A6?\x13\x00m\u00D4\r\x16OL \u00A9?3\u00ECz\u009AC\x15\x00\x04\x18\x00j\u0083\x04\u008E\u00C1\x0E-[\x00\x00\x00\x00IEND\u00AEB`\u0082";
				
				var imgIcon =createResourceFile ("KEYboard_shiftUp.png", binIcon);
				var imgClose =createResourceFile ("KEYboard_shiftUp_close.png", binClose);
				var imgDoIt =createResourceFile ("KEYboard_DoIt.png", binShift);

				var lightGray = HexToRGB("#393939");
				var white =HexToRGB("#EEEEEE");
				var yellow = HexToRGB("#FFBC65");
				var red= HexToRGB("#AC4C5E");
				var purple =HexToRGB("#5C476F");

				var AEversion = app.version.substring(0,4);
				var myWindow;
				if(AEversion <12){
					myWindow = new Window('palette','ShiftUp',undefined ,{borderless:false});
				}else{
					myWindow = new Window('palette','ShiftUp',undefined ,{borderless:false});
				}
				myWindow.graphics.backgroundColor = myWindow.graphics.newBrush (myWindow.graphics.BrushType.SOLID_COLOR,yellow );
				//var myWindow = new Window ("dialog", "shift key",{borderless : true});
				myWindow.alignChildren = ['fill','fill'];
				myWindow.orientation = "row";
				myWindow.margins = 0;
				myWindow.margins.top = 5;
				//myWindow.margins.right = 5;
				myWindow.spacing = 0;


				var allGrp = myWindow.add ("group");
				allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,lightGray );
				allGrp.spacing = 0;

				var header = allGrp.add ("group");
				header.orientation = "row";
				header.alignChildren = ['fill','fill'];


				var iconGroup = header.add ("group");
				iconGroup.alignChildren = ['right',''];
				var icon = iconGroup.add ("image", undefined,imgIcon);

				var functionGroup = allGrp.add ("group");
				functionGroup.margins = 15;
				functionGroup.orientation = "column";

				//functionGroup.alignChildren = ['fill','fill'];


				//myInputGroup.add ("statictext", undefined, "Offset:");
				var myInputGroup = functionGroup.add ("group");
				//myInputGroup.alignChildren = ['fill','fill'];
				//myInputGroup.alignment = ['center','center'];
				myInputGroup.spacing = 8;

				var offsetVal = myInputGroup.add ('edittext {text: "5", characters: 8, justify: "left"}');
				var timeFormat = myInputGroup.add ("dropdownlist", undefined, ["Frames", "Seconds"]);

				offsetVal.text = JsonSettingObj.shiftUpKeys_preVal;
				if(JsonSettingObj.shiftUpKeys_preUnit =="Frames"){
					timeFormat.selection = 0;
				}else{
					timeFormat.selection = 1;
				}

				offsetVal.characters = 5;
				offsetVal.active = true;
				//var OKbtn =myInputGroup.add ("button", undefined, "Shift!");
				var OKbtn =myInputGroup.add ("iconbutton", undefined, imgDoIt,{style: "toolbutton"});
				var Closebtn =myInputGroup.add ("iconbutton", undefined, imgClose,{style: "toolbutton"});
				Closebtn.preferredSize = [23,23];
				OKbtn.preferredSize = [53,23];
				Closebtn.helpTip ="cancel and close window";
				var btnSize=[30,25];

				//var myButtonGroup = myInputGroup.add ("group");
				//myButtonGroup.orientation = "column";

				//OKbtn.preferredSize = [50,30];

				//var presetGroup = functionGroup.add ("group");
				//presetGroup.orientation = "row";
				//presetGroup.alignChildren = ['fill','fill'];
				//presetGroup.margins = 0;
				//presetGroup.spacing = 10;


				/*
				var presetBtn05 = presetGroup.add ("button", undefined, "05");
				var presetBtn10 = presetGroup.add ("button", undefined, "10");
				var presetBtn20 = presetGroup.add ("button", undefined, "20");
				var presetBtn30 = presetGroup.add ("button", undefined, "30");
				var presetBtn50 = presetGroup.add ("button", undefined, "50");

				presetBtn05.preferredSize = btnSize;
				presetBtn10.preferredSize = btnSize;
				presetBtn20.preferredSize = btnSize;
				presetBtn30.preferredSize = btnSize;
				presetBtn50.preferredSize = btnSize;
				*/
				//------
				function doShift(offsetVal){
					//app.beginUndoGroup("Shift Keys by Enter");
                    
					var myComp = app.project.activeItem;
					var seLayers=myComp.selectedLayers;
					var offset ,selProps1 ,selProps2 ,Time,info ;
                    
                    if(seLayers.length >50){
                        info = myInputGroup.add("statictext",[0,0,100,30],"");
                        myWindow.layout.layout (true);	
                    }

					Time =myComp.time;
					var dataObj = {};
					dataObj.numProps=seLayers.length;
					var everyProps =[];
					//alert(seLayers[0].selectedProperties[0].name)
					for(var x=0; x<seLayers.length ; x++){//colect all selected properties
						everyProps[x]=[];
						for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){
							//skip when select property is propertyGroup
							if(seLayers[x].selectedProperties[y].propertyType  == PropertyType.NAMED_GROUP) continue;
							//skip when select property doesn't have keys
							if(seLayers[x].selectedProperties[y].selectedKeys  === 0) continue;
							everyProps[x][y] =seLayers[x].selectedProperties[y];
							//dataObj.numProps +=1;
						}
					}

					var selPropKeyData=[];
					for(var a=0; a<everyProps.length ; a++){
						//var selPropKeyData=[];
						selPropKeyData[a]=[];
						for(var b=0; b<everyProps[a].length ; b++){
							selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);

							//everyProps[a][b].selected=false;
						}

					}

					dataObj.counter=0;
					dataObj.offset =offsetVal;
					dataObj.format =timeFormat.selection.text;
                    if(everyProps.length >50){
                            info.text="move keyframes...";
                            myWindow.update();	
                    }
					for(var d=0,l=everyProps.length; d<l ; d++){
						dataObj.counter +=1;
						for(var c=0; c<everyProps[d].length ; c++){
								//skip when everyProps[d][c] have empty item

								if(everyProps[d][c] ===null ||everyProps[d][c]===undefined ) continue;

								everyProps[d][c].selected=true;

								transferKeyframes(everyProps[d][c],selPropKeyData[d][c],dataObj,"shiftUp");

							}
                        
					}//move keys
                    if(everyProps.length >50){
                            info.text="select keyframes...";
                            myWindow.update();	
                    }
					for(var m=0; m<everyProps.length ; m++){
						for(var n=0; n<everyProps[m].length ; n++){
							if(selPropKeyData[m][n] ===null ||selPropKeyData[m][n]===undefined ) continue;
							var keysAry =selPropKeyData[m][n];
							for(var k=0 ; k <keysAry.length ; k++){
								everyProps[m][n].setSelectedAtKey(keysAry[k].curKeyIndex,true);
							}
						}
                        
					}
					//app.endUndoGroup();
                    if(everyProps.length >50){
						alert("finished");
					}
				}
				//------
				offsetVal.addEventListener ("keydown", function (kd) {pressed (kd);});
				function pressed (k){

					if(k.keyName == "Enter"){
						if( isNaN(offsetVal.text)) offsetVal.text =0;

						if( offsetVal.text ===0){
							JsonSettingObj.shiftUpKeys_preVal = 5;
						}else{
							JsonSettingObj.shiftUpKeys_preVal = offsetVal.text;
						}
						// timeFormat.selection==
						if(timeFormat.selection.toString() !=JsonSettingObj.shiftUpKeys_preUnit){
							JsonSettingObj.shiftUpKeys_preUnit =timeFormat.selection.toString();
						}
						var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
                        try{
                            app.beginUndoGroup("Shift Keys by Enter");
                            myWindow.close();
                            doShift(Number(offsetVal.text));
                        }catch(err){

                        }finally{
                            app.endUndoGroup();
                            
                        }

						
					}else if(k.keyName == "Escape"){
						myWindow.close();
					}
				}




				OKbtn.onClick = function(){
					//app.beginUndoGroup("Shift Keys");
					if( isNaN(offsetVal.text)) offsetVal.text =0;
				

					if( offsetVal.text ===0){
						JsonSettingObj.shiftUpKeys_preVal = 5;
					}else{
						JsonSettingObj.shiftUpKeys_preVal = offsetVal.text;
					}
					if(timeFormat.selection.toString() !=JsonSettingObj.shiftUpKeys_preUnit){
						JsonSettingObj.shiftUpKeys_preUnit =timeFormat.selection.toString();
					}
					var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
					//app.endUndoGroup();
                    
                    try{
                        app.beginUndoGroup("Shift Keys by Enter");
                        myWindow.close();
                        doShift(Number(offsetVal.text));
                    }catch(err){

                    }finally{
                        app.endUndoGroup();
                        
                    }
					

				};

				Closebtn.onClick = function(){
					myWindow.close();
				};
				/*
				offsetVal.onEnterKey = function(){
					app.beginUndoGroup("Shift Key");
					doShift(offsetVal.text);
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn05.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("5");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn10.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("10");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn20.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("20");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn30.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("30");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn50.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("50");
					app.endUndoGroup();
					myWindow.close();
				}
				*/


				myWindow.show ();
			}
			//------------------------
			function shiftDownKey(JsonSettingObj){

				//binary
				
				var binIcon="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00)\x00\x00\x003\b\x06\x00\x00\x00\n-!\x0B\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00CFIDATx\u00DA\u00EC\u0098ON\u00C2@\x14\u00C6\u00A7\\\u00C0?G(\x07\u00D0\u00A4\u00C65\x0B\x0E\u00E0\x06\u00B6m7\u00B0e\u00E7\x15t\u00C7\u00D2\u00B2\x01\u00B6e\u00E3\x1E\x13\u00DDj4\u00C1\x038\u00F1\x04\u00A8'\u00A8\u00DF\u00C4G2\u0099\u00B4\u00D8\u009A\u00FEy53\u00C9\u0097\x19^I\u00F9\u00F1}\u00CCk\u00A9\u0093$\u0089\u00E0>:\u00A2\x05\u00C3BZ\u00C8\u00BF\u008E7)\u00FBP\u00C2\u00DDI\u00D7\u00C6m!-\u00A4\u0085l\x0ERV\x01\u00E9\u00D8\u00BB\u00A0\u00B6B:\u00D1S\u008F5$\x00\x03L\u00F7\u0098\x17,!\tpN/\u00FD\"\u00A0\u009D\u009A\x00/4@\u00A1\u0081N99\u00F9\x00\u00BD\u00A6\u00D47l \u0093\u00F1\u00F9'\u00A6\u009E\x01\x1A\u00A2\u009E+\u00F2R\u00FB$\u00E2;\u00C4t\x0BM\x00\u00B0\u00C98\u00AE\\\u009D\u00E6\x05,\x15R\x038\u0081\u00BE\u0094si\u00A0\u008D\u00F5I\x03P\u008D\x03\u00F5\x1A\u00F5SN\u00CD|\u00A2\x01\n\r4`u\u00ED\u00A6\u00BE\u00E7k\u00A5%\u00E2\x0E\x1Aq2+B\x02Z\u0096\r\u00F8sr8\u0099W\u00E2\u00E6q\x01%P\u00B0\u00E7=A\u0091s\u00E6Q\u00EE\u00B8S\u00E2\f\u008B\u00B4\u0091\u00CA\u00E3\u00A6\u00CB\u0097o\u0094\u00E7t\u00B9cs\u00AB\u0096\u00D6\u00EFT/|g\x03I\u00B1\u0086\x06`i\u00CD\u00BA\u00B4\u00DD\u00AD\u0081\u00D6\nh\u00FF\u00E3X\u00C8\x7F\t\u0099\u00F5\u00E0T\u00AFc\u008E\u00D5\u009Aj\u00CF\u0090W\u00B7\u0093\u00EE\u009E\u00A7\x19\u00D7\u00B4\x1E@\u00C3\u00AE\u00EB\u00DEa\u00F6H\u00D5@\u00C2\u0081\x01\u00B4%W\"\u00E3\u00D8\u009A\u00EA\u00B1\x06\x7F\u00A9\u00B9\x1Ck\u00EB\b\u00EBQUN\u00C6\u00E4N\x17\x1A\x19\u00B1\u00CD\u00A8\u00AE\u00BEH\x7F\u00E70\u00DCs\u00E8\u00F8\u00D8X\u00CF\u00AA\u008C\u00DB#\u00803|\u00D0\u00CB\u00AE\u0088\u00F5\n\u0092\u00BF\u00FC\x04j\u00D98CH\u00B9\u00B4VR\u00F1s\u00DC\u00DDG\x14\u00E91\u00B4\u00A2\u00F8\u00D9AF\u00B4S\u00D5\u00F8 \u00B1\u0083Tq_A\u00DB][\x11\u00E9\x0FNeJ]jsD\u009B\u00CB\u00DE`X\u00C8VB~\x0B0\x00\u009C\u0098O\u00EB2\u00EBA\u009D\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binClose = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u008AIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x13\x03\r\x00\x0B.\tii\u00E9\x04 U\x00\u00C4\u00FAhR\x17\u0081x\x01\b?}\u00FA\u00F4\x036\u00BD\u008C\u00E8\u00DE\x07\x1Af\x00\u00A46\x00\u00B1<\x01\x07}\x04\u00E2\x04\u00A0\u00C1\x1B\u00F0z\x1F\u00EA\u00BA\u00F3D\x18\b\x02\u00FC@\u00BC\x1E\u00AA\x07\u00BBK\u00A1.<\x00UL*p\x04\u00BA\u00F8\x006\u0097N \u00D3@\x06h\x18\u00A3z\x1F\u00EAJ{d\tsa)\u0086rMs\x06NfD\\\u0082\u00D8 1\u0090\x1C\x1A\u0090\x07\u009A\x11\u0080\u00EE\u00D2\x00\u00AC)\u0080\u0093\u0097!O\u00CD\x18l\x18\b\u0083\u00D8 1\x1C \x00=I9\u00A0\u00AB8\u00F9\u00F6\x19\u0098\u008E\u0096\u00D7b(P7a`\x00\x06\u00BD$'\x0F\u00C3\u00D2\u0087\u00D7\u00E0rh@\u0081`:\u0085\x19\u00CC\u00C6\u00C4\u00CC\x10*\u00AB\x0E\u00E6\u00AF~|\x03\u0097\u0081\u00C4\u00E7(\u0090\u0097\u00ADD\x10\u00E1g%\"\u008D\x12\u00C6\u0084\f}\u0080\u00CD@X\x18\u0082\u00BC\f\u00C2\u00C8a\u008C\x05|@7\u00F4\x00\u00BA\n\x0719\u00B8\u0081 /\u00830\u00CC\u00E0`\x19ul\u0086\x1E\u00C0\u0096\u00F8?\u00A0\u00A7SU^A\u0086\u00DB\u009F\u00DF\u00A3\u00E8\u00D4\x13\x10\x05\u008B}\u00FF\u00FB\x07=\u00CB*\u00C0\u00CA\x02\u00E40-@\u00B7\x1A\u00DD@\x10\u00B8\u00F4\u00E15\u00BA\u0081\u00E0\u008C\u0083\\\u00B8\u00A0\x14(@\u00D7\u0082rF<\u0089\u00B9\u00E9 \u00D0@\x07\u009C\u00B1\x0F\u0094\x04\x15\x0E\x0BI0p!\u00B6\u008C\u00C3\u0088\u00AD\u00E4\x07\u00BA\u00D8\x01Z\x16\u00E8\u00E30\u00EC!(\u00B8\u00B0\x15{8\rE2\\\x01\u009A\u00DB\x14\u0090\u0092\u00CD\x01\u00A0a\x17\u00F09\u009F\u0091\x16u\x14@\u0080\x01\x00\u00CB\u00DF\u008F\u00F5\u0099P\u00B8\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binShift="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x003\x00\x00\x00\x15\b\x06\x00\x00\x00\u00EBT\u00D6\x01\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02/IDATx\u00DAb\u00FC\u00FF\u00FF?\u00C3p\x01,\u0084\x14HKK;\f\x02w>x\u00FA\u00F4\u00E9\x03B\u008A\x18\u00B1\u00C5\f\u00D0\x03\n@\u00AA\x01\u0088\u00E3\x07Q\u00C0?\x04\u00B9\t\u00E8\u00A9\x05D{\x06\u00E8\u0091\x02 \u00D5?\u0088S\u00D3E \x0E\u00C0\x16S(\u009E\x01zd\u00C1 \u008B\r\\\u00E0#\x10\x1B\u00A0{\u0088\t\u00C9#\x01\u00F8<\u00F2t\u00917\n\u009E\u0099c\u00C4\u00C0\u00CF\u00CDJ\u0096K@\u00FAm\u00B5E\u00C0l\x10\r\u00E2\u00A3\u00CB\u00C78\u00CA\u00E13\u0082\x1F\u00887\u00A0\x0B2!\u00B1'\x10r\u00C4\u00D4-w\x19\u00CA\u00E7_\x06c]\x05~\u0086\x15\u00E5\u00E6dy\x06d\u00CE\u00A3\u00D7\u00DF\u00C0ly1.\u00EC\u00AE%\x1CP\u00FA\u00C0\bH\u00C0\u00F0\fTP\u009E\u0090n\u0090\x03\u0096\u00EC\x7F\x04\u00C6\u00D3\u00B6\u00DEe\u00D0\x03z\b\u0084a\u0096\u0083<\x07\n\u00D5c=\u008Epql \u00DBG\u0099AN\u0094\x0B\x1C+\u009D\u0089\u00BA\x18\u00B1E\x02h\u00C0\x163$\x17\u00BF\u0087\u00AF\u00BE\x01\u00D3z\u008A\x10Gw\x01\x1D\x05\u00F2\u0090g\u00DD\x11\u00B0\x1C\u00A1X\x03\u00C5\bH\x1D(\u0096@\x00\u00A6\u008FD \x0F-yQ<\u00A3@r9\u00F9\u00EA\x1BJr\x00\u0085\u00EA\u0096S\u00CF\x19.=\u00F8\u00C8\u00B0\x14\x18s q|\u00B1\u0083\x1C\u00DB \x00\u00D2\x07\u00CF\u00DD_\x7F\u00831\u0091@\x01[\u009E!\u00AFX\u0081Z\nr<\u008C\rs\x18,\u00D6\u00C8\u00AAT\u00A0\u0081E\n \u00DB3\u00B0\x18!\u00C7R\u0082\x1E\x01\u00C6\x16\t1\u0083\u00E1\u0099\x07\u00A4j\u0084eVX, [\x0E+\u00A1\u00C8\u00C8\x03\x10}W\u00DE\u0080=DlS\x07\u00DD3\x07\u0088\u00D1\x05*\u0081@\u00E5?\bW\u0085i\u0080\u00F3\b\u00CC\x13 \u0087G\x03\u00C5A\u00F9$\u00CB[\x19,NJ\u00AC\u00A1\u00E7/yQ.\u00A2Z\x03\u00C8\x15'\u00D83\u00D0\u00F6\u00CECB:AE*\u00A8(\x05\u00E1\u00CB\u00C0\x18)\x03\u00D670\x00b\u0083<\u00B0\u00BD\u00C9\u0086\u00C1\u00D7L\u0092!\u00A2\u00F3$Qy\x02\x16{ }\u00B0\x18\x05\u00D9Cd~\u009B\u0080\u00B59\x03m\x01\u00AC\x1FB-~P\u00AC\x18`-\x00\u0080\x12\u00A0\u00E6\u00C1\u00C4!\u00E2\x11PF\r\u00C0[\u009A\x01=\x04j1\x17\x0E\u00F6\x18\u00C1\u00D6\u00C8$\u00A6?\x13\x00m\u00D4\r\x16OL \u00A9?3\u00ECz\u009AC\x15\x00\x04\x18\x00j\u0083\x04\u008E\u00C1\x0E-[\x00\x00\x00\x00IEND\u00AEB`\u0082";
				
				var imgIcon =createResourceFile ("KEYboard_shiftDown.png", binIcon);
				var imgClose =createResourceFile ("KEYboard_shiftDown_close.png", binClose);
				var imgDoIt =createResourceFile ("KEYboard_DoIt2.png", binShift);

				var lightGray = HexToRGB("#393939");
				var white =HexToRGB("#EEEEEE");
				var yellow = HexToRGB("#FFBC65");
				var red= HexToRGB("#AC4C5E");
				var purple =HexToRGB("#5C476F");

				var AEversion = app.version.substring(0,4);
				var myWindow;
				if(AEversion <12){
					myWindow = new Window('palette','ShiftDown',undefined ,{borderless:false});
				}else{
					myWindow = new Window('palette','ShiftDown',undefined ,{borderless:false});
				}

				myWindow.graphics.backgroundColor = myWindow.graphics.newBrush (myWindow.graphics.BrushType.SOLID_COLOR,yellow );
				//var myWindow = new Window ("dialog", "shift key",{borderless : true});
				myWindow.alignChildren = ['fill','fill'];
				myWindow.orientation = "row";
				myWindow.margins = 0;
				myWindow.margins.top = 5;
				//myWindow.margins.right = 5;
				myWindow.spacing = 0;


				var allGrp = myWindow.add ("group");
				allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,lightGray );
				allGrp.spacing = 0;

				var header = allGrp.add ("group");
				header.orientation = "row";
				header.alignChildren = ['fill','fill'];


				var iconGroup = header.add ("group");
				iconGroup.alignChildren = ['right',''];
				var icon = iconGroup.add ("image", undefined,imgIcon);

				var functionGroup = allGrp.add ("group");
				functionGroup.margins = 15;
				functionGroup.orientation = "column";

				//functionGroup.alignChildren = ['fill','fill'];


				//myInputGroup.add ("statictext", undefined, "Offset:");
				var myInputGroup = functionGroup.add ("group");
				//myInputGroup.alignChildren = ['fill','fill'];
				//myInputGroup.alignment = ['center','center'];
				myInputGroup.spacing = 8;

				var offsetVal = myInputGroup.add ('edittext {text: "5", characters: 8, justify: "left"}');
				var timeFormat = myInputGroup.add ("dropdownlist", undefined, ["Frames", "Seconds"]);

				offsetVal.text = JsonSettingObj.shiftDownKeys_preVal;
				if(JsonSettingObj.shiftDownKeys_preUnit =="Frames"){
					timeFormat.selection = 0;
				}else{
					timeFormat.selection = 1;
				}

				offsetVal.characters = 5;
				offsetVal.active = true;
				//var OKbtn =myInputGroup.add ("button", undefined, "Shift!");
				var OKbtn =myInputGroup.add ("iconbutton", undefined, imgDoIt,{style: "toolbutton"});
				var Closebtn =myInputGroup.add ("iconbutton", undefined, imgClose,{style: "toolbutton"});
				Closebtn.preferredSize = [23,23];
				OKbtn.preferredSize = [53,23];
				Closebtn.helpTip ="cancel and close window";
				var btnSize=[30,25];

				//var myButtonGroup = myInputGroup.add ("group");
				//myButtonGroup.orientation = "column";

				//OKbtn.preferredSize = [50,30];

				//var presetGroup = functionGroup.add ("group");
				//presetGroup.orientation = "row";
				//presetGroup.alignChildren = ['fill','fill'];
				//presetGroup.margins = 0;
				//presetGroup.spacing = 10;


				/*
				var presetBtn05 = presetGroup.add ("button", undefined, "05");
				var presetBtn10 = presetGroup.add ("button", undefined, "10");
				var presetBtn20 = presetGroup.add ("button", undefined, "20");
				var presetBtn30 = presetGroup.add ("button", undefined, "30");
				var presetBtn50 = presetGroup.add ("button", undefined, "50");

				presetBtn05.preferredSize = btnSize;
				presetBtn10.preferredSize = btnSize;
				presetBtn20.preferredSize = btnSize;
				presetBtn30.preferredSize = btnSize;
				presetBtn50.preferredSize = btnSize;
				*/
				//------
				function doShift(offsetVal){
					var myComp = app.project.activeItem;
					var seLayers=myComp.selectedLayers;
					var offset ,selProps1 ,selProps2 ,Time,info ;
                    if(seLayers.length >50){
                        info = myInputGroup.add("statictext",[0,0,100,30],"");
                        myWindow.layout.layout (true);	
                    }

					Time =myComp.time;
					var dataObj = {};
					dataObj.numProps=seLayers.length;
					var everyProps =[];
					//alert(seLayers[0].selectedProperties[0].name)
					for(var x=0; x<seLayers.length ; x++){//colect all selected properties
						everyProps[x]=[];
						for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){

							//skip when select property is propertyGroup
							if(seLayers[x].selectedProperties[y].propertyType  == PropertyType.NAMED_GROUP) continue;
							//skip when select property doesn't have keys
							if(seLayers[x].selectedProperties[y].selectedKeys  === 0) continue;
							everyProps[x][y] =seLayers[x].selectedProperties[y];
							//dataObj.numProps +=1;
						}
					}

					var selPropKeyData=[];
					for(var a=0; a<everyProps.length ; a++){
						//var selPropKeyData=[];
						selPropKeyData[a]=[];
						for(var b=0; b<everyProps[a].length ; b++){
							selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);

							//everyProps[a][b].selected=false;
						}

					}

					dataObj.counter=0;
					dataObj.offset =offsetVal;
					dataObj.format =timeFormat.selection.text;
                    if(everyProps.length >50){
                                info.text="move keyframes...";
                                myWindow.update();	
                    }
					for(var d=0; d<everyProps.length ; d++){
						dataObj.counter +=1;
						for(var c=0; c<everyProps[d].length ; c++){
							//skip when everyProps[d][c] have empty item
							if(everyProps[d][c] ===null ||everyProps[d][c]===undefined ) continue;

							everyProps[d][c].selected=true;
							transferKeyframes(everyProps[d][c],selPropKeyData[d][c],dataObj,"shiftDown");
						}
                          
					}
                    if(everyProps.length >50){
                                info.text="select keyframes...";
                                myWindow.update();	
                    }
					for(var m=0; m<everyProps.length ; m++){
						for(var n=0; n<everyProps[m].length ; n++){
							if(selPropKeyData[m][n] ===null ||selPropKeyData[m][n]===undefined ) continue;
							var keysAry =selPropKeyData[m][n];
							for(var k=0 ; k <keysAry.length ; k++){
								everyProps[m][n].setSelectedAtKey(keysAry[k].curKeyIndex,true);
							}
						}
                        
					}
                    if(everyProps.length >50){
				    alert("finished");
					}
				}
				//------

				OKbtn.onClick = function(){
	
					if( isNaN(offsetVal.text)) offsetVal.text =0;
					
					if( offsetVal.text ===0){
						JsonSettingObj.shiftDownKeys_preVal = 5;
					}else{
						JsonSettingObj.shiftDownKeys_preVal = offsetVal.text;
					}
					if(timeFormat.selection.toString() !=JsonSettingObj.shiftDownKeys_preUnit){
						JsonSettingObj.shiftDownKeys_preUnit =timeFormat.selection.toString();
					}
					var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);

                    try{
                        app.beginUndoGroup("Shift Keys");
                        myWindow.close();
                        doShift(Number(offsetVal.text));
                    }catch(err){

                    }finally{
                        app.endUndoGroup();
                        
                    }
					

				};

				Closebtn.onClick = function(){
					myWindow.close();
				};

				//offsetVal.onEnterKey = function(){}
				offsetVal.addEventListener ("keydown", function (kd) {pressed (kd);});
				function pressed (k){
					if(k.keyName == "Enter"){
						//app.beginUndoGroup("Shift Key");
						if( isNaN(offsetVal.text)) offsetVal.text =0;
						//doShift(offsetVal.text);

						if( offsetVal.text ===0){
							JsonSettingObj.shiftDownKeys_preVal = 5;
						}else{
							JsonSettingObj.shiftDownKeys_preVal = offsetVal.text;
						}
						if(timeFormat.selection.toString() !=JsonSettingObj.shiftDownKeys_preUnit){
							JsonSettingObj.shiftDownKeys_preUnit =timeFormat.selection.toString();
						}
						var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
                        
                         try{
                            app.beginUndoGroup("Shift Keys");
                            myWindow.close();
                            doShift(Number(offsetVal.text));
                        }catch(err){

                        }finally{
                            app.endUndoGroup();
                            
                        }
						
						
					}else if(k.keyName == "Escape"){
						myWindow.close();
					}
				}
				/*
				presetBtn05.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("5");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn10.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("10");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn20.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("20");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn30.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("30");
					app.endUndoGroup();
					myWindow.close();
				}
				presetBtn50.onClick = function(){
					app.beginUndoGroup("Shift Key");
					doShift("50");
					app.endUndoGroup();
					myWindow.close();
				}
				*/


				myWindow.show ();
			}
			//------------------------
			function addMirrorKey(propertyInput,Time,curKeyTime){
				var addNewKey =propertyInput.addKey(Time - curKeyTime);
				return addNewKey;
			}
			//-------------------------
			function addCloneKey(propertyInput,Time,curKeyTime){
				var addNewKey =propertyInput.addKey(Time + curKeyTime);
				return addNewKey;
			}
			//-------------------------
			function collectKeyframes(propertyInput){
				if( propertyInput instanceof  Property){
					var totalKeys , prop,keyIndexList,curKeyTime, curKeyIndex, curKeyValue, inin, outin, ab, cb, ie, oe, sab, scb, ist, ost, rov, twoDs, threeDs,selKeys;
					twoDs = PropertyValueType.TwoD_SPATIAL;
					threeDs = PropertyValueType.ThreeD_SPATIAL;

					keyIndexList = [];
					totalKeys = propertyInput.numKeys;
					selKeys=propertyInput.selectedKeys;
					if(propertyInput.propertyValueType !==PropertyValueType.CUSTOM_VALUE){
						if(selKeys.length > 0){
							for(var i=0 ; i<selKeys.length ; i++){

								curKeyTime = propertyInput.keyTime(selKeys[i]);
								curKeyIndex = selKeys[i];
								curKeyValue = propertyInput.keyValue(selKeys[i]);
								inin = propertyInput.keyInInterpolationType(curKeyIndex);
								outin = propertyInput.keyOutInterpolationType(curKeyIndex);

								if(inin == KeyframeInterpolationType.BEZIER &&  outin == KeyframeInterpolationType.BEZIER){
									ab = propertyInput.keyTemporalAutoBezier(curKeyIndex);
									cb = propertyInput.keyTemporalContinuous(curKeyIndex);

									}// BEZIER
								if(inin != KeyframeInterpolationType.HOLD || outin != KeyframeInterpolationType.HOLD ){
									ie = propertyInput.keyInTemporalEase(curKeyIndex);
									oe = propertyInput.keyOutTemporalEase(curKeyIndex);
									}//HOLD
								if(propertyInput.propertyValueType == twoDs || propertyInput.propertyValueType == threeDs  ){
									sab =  propertyInput.keySpatialAutoBezier(curKeyIndex);
									scb =  propertyInput.keySpatialContinuous(curKeyIndex);
									ist =  propertyInput.keyInSpatialTangent(curKeyIndex);
									ost = propertyInput.keyOutSpatialTangent(curKeyIndex);
									rov = propertyInput.keyRoving(curKeyIndex);

									}//2d_S

								keyIndexList[keyIndexList.length] = {'curKeyTime':curKeyTime ,'curKeyIndex':curKeyIndex ,'curKeyValue':curKeyValue ,'inin':inin ,'outin':outin ,'ab':ab ,'cb':cb ,'ie':ie ,'oe':oe ,'sab':sab ,'scb':scb ,'ist':ist ,'ost':ost ,'rov':rov};

								}//end for loop

							return keyIndexList;
							}
						else{ return null; }
					}else{
						return null;
					}


					}//end  instance of
				}//end function
			//-------------------------
			function transferMirrorKeyframes(propertyInput,keysAry,Time,mode){
				try{
					if(propertyInput instanceof  Property && keysAry instanceof Array){

						var keysAryLength ,newKeyTime, addNewKey,newKeyIndex,bakKeyIndex;
						keysAryLength = keysAry.length;


						if(propertyInput.numKeys>0){
							//for(var k=0 ; k <keysAryLength ; k++){
							for(var k=keysAryLength-1 ; k >=0 ; k--){
								//alert(k)
								var duration;
								var factor;
								var offsetTime;
								switch(mode){
									case "mirror":
										addNewKey=addMirrorKey(propertyInput,Time,keysAry[k].curKeyTime);
										break;
									case "clone":
										addNewKey=addCloneKey(propertyInput,Time,keysAry[k].curKeyTime);
										break;
									case "organize":
										duration=app.project.activeItem.frameDuration;
										var correctTime= Math.round(keysAry[k].curKeyTime/duration)*duration;
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[k].curKeyTime));
										addNewKey =propertyInput.addKey(correctTime);
										break;
									case "shiftUp":
										duration=app.project.activeItem.frameDuration;
										factor =(Time.numProps ==1)? 0 :(Time.counter-1) / (Time.numProps-1) ;
										offsetTime=Time.offset*factor;
										offsetTime=(Time.format =="Frames")? offsetTime*duration :  offsetTime;
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[k].curKeyTime));
										addNewKey =propertyInput.addKey(keysAry[k].curKeyTime+offsetTime);
										break;
									case "shiftDown":
										duration=app.project.activeItem.frameDuration;
										factor =(Time.numProps ==1)? 0 :(Time.numProps-Time.counter) / (Time.numProps-1) ;
										offsetTime=Time.offset*factor;
										offsetTime=(Time.format =="Frames")? offsetTime*duration :  offsetTime;
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[k].curKeyTime));
										addNewKey =propertyInput.addKey(keysAry[k].curKeyTime+offsetTime);
										break;
								}

								//addNewKey = propertyInput.addKey(Time - keysAry[k].curKeyTime);
								if(k<keysAryLength-1)bakKeyIndex=newKeyIndex;
								newKeyIndex = addNewKey;
								propertyInput.setValueAtKey(newKeyIndex, keysAry[k].curKeyValue);
								//alert( keysAry[k].oe.influence)

								if(keysAry[k].inin == KeyframeInterpolationType.BEZIER &&  keysAry[k].outin == KeyframeInterpolationType.BEZIER){
									propertyInput.setTemporalEaseAtKey(newKeyIndex, keysAry[k].oe, keysAry[k].ie);
								}
								propertyInput.setInterpolationTypeAtKey(newKeyIndex, keysAry[k].outin, keysAry[k].inin);

								if(keysAry[k].inin == KeyframeInterpolationType.BEZIER &&  keysAry[k].outin == 	KeyframeInterpolationType.BEZIER && keysAry[k].cb ){

									propertyInput.setTemporalContinuousAtKey(newKeyIndex ,keysAry[k].cb);
									propertyInput.setTemporalAutoBezierAtKey(newKeyIndex ,keysAry[k].ab);
								}//BEZIER
								if(propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL || propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL ){
									propertyInput.setSpatialContinuousAtKey(newKeyIndex ,keysAry[k].scb);
									propertyInput.setSpatialAutoBezierAtKey(newKeyIndex ,keysAry[k].sab);
									propertyInput.setSpatialTangentsAtKey(newKeyIndex ,keysAry[k].ost ,keysAry[k].ist);
									if(k<keysAryLength-1) propertyInput.setRovingAtKey(bakKeyIndex ,keysAry[k+1].rov);
								} //2d_s
							}//end for
						}
						return true;

						} //instanceof

					}catch(err){alert(err.line.toString()+"\r" + err.toString()); }
				}//end function
			//-------------------------
			function transferKeyframes(propertyInput,keysAry,Time,mode){
				try{
					if(propertyInput instanceof  Property && keysAry instanceof Array){

						var keysAryLength ,newKeyTime, addNewKey,newKeyIndex,bakKeyIndex;
						keysAryLength = keysAry.length;


						if(propertyInput.numKeys>0){
							for(var m=0 ; m <keysAryLength ; m++){
							//for(var k=keysAryLength-1 ; k >=0 ; k--){
								//alert(k)
								switch(mode){
									case "mirror":
										break;
									case "clone":
										break;
									case "organize":
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[m].curKeyTime));
										break;
									case "shiftUp":
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[m].curKeyTime));
										break;
									case "shiftDown":
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[m].curKeyTime));
										break;
									case "align":
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[m].curKeyTime));
										break;
									case "random":
										propertyInput.removeKey(propertyInput.nearestKeyIndex(keysAry[m].curKeyTime));
										break;
								}
							}
							for(var k=0 ; k <keysAryLength ; k++){
                                
								var duration;
								var factor;
								var offsetTime;
								var correctTime;
								switch(mode){
									
									case "mirror":
										addNewKey=addMirrorKey(propertyInput,Time,keysAry[k].curKeyTime);
										break;
									case "clone":
										addNewKey=addCloneKey(propertyInput,Time,keysAry[k].curKeyTime);
										break;
									case "organize":
										duration=app.project.activeItem.frameDuration;
										correctTime= Math.round(keysAry[k].curKeyTime/duration)*duration;
										//if(correctTime !== keysAry[k].curKeyTime)alert(k)
										if(keysAry[k].curKeyTime !== correctTime){
											//alert(keysAry[k].curKeyTime +' | '+ correctTime);
											Time.correctedKeyNums +=1;

										}

										addNewKey =propertyInput.addKey(correctTime);
										break;
									case "shiftUp":
										duration=app.project.activeItem.frameDuration;
										factor =(Time.numProps ==1)? 0 :(Time.counter-1) / (Time.numProps-1) ;
										offsetTime=Time.offset*factor;
										offsetTime=(Time.format =="Frames")? offsetTime*duration :  offsetTime;
										addNewKey =propertyInput.addKey(keysAry[k].curKeyTime+offsetTime);
										break;
									case "shiftDown":
										duration=app.project.activeItem.frameDuration;
										factor =(Time.numProps ==1)? 0 :(Time.numProps-Time.counter) / (Time.numProps-1) ;
										offsetTime=Time.offset*factor;
										offsetTime=(Time.format =="Frames")? offsetTime*duration :  offsetTime;
										addNewKey =propertyInput.addKey(keysAry[k].curKeyTime+offsetTime);
										break;
									case "align":
										addNewKey =propertyInput.addKey(keysAry[k].curKeyTime+Time);
										break;
									case "random":
										duration=app.project.activeItem.frameDuration;
										correctTime= keysAry[k].curKeyTime;
										correctTime = (Time.format.toString() =="Frames") ? correctTime+Time.offset*duration : correctTime+Time.offset;

										addNewKey =propertyInput.addKey(correctTime);
										break;
								}
								//addNewKey = propertyInput.addKey(Time - keysAry[k].curKeyTime);

								if(k<keysAryLength)bakKeyIndex=newKeyIndex;
								newKeyIndex = addNewKey;
								propertyInput.setValueAtKey(newKeyIndex, keysAry[k].curKeyValue);
                           
                                
								//alert(keysAry[k].outin ==KeyframeInterpolationType.BEZIER)


								propertyInput.setInterpolationTypeAtKey(newKeyIndex, keysAry[k].inin, keysAry[k].outin);
								if(keysAry[k].inin == KeyframeInterpolationType.BEZIER &&  keysAry[k].outin == KeyframeInterpolationType.BEZIER){
									propertyInput.setTemporalEaseAtKey(newKeyIndex, keysAry[k].ie, keysAry[k].oe);
								}

								//inin = propertyInput.keyInInterpolationType(curKeyIndex);
								//outin = propertyInput.keyOutInterpolationType(curKeyIndex);
								if(keysAry[k].inin == KeyframeInterpolationType.BEZIER &&  keysAry[k].outin == 	KeyframeInterpolationType.BEZIER && keysAry[k].cb ){

									propertyInput.setTemporalContinuousAtKey(newKeyIndex ,keysAry[k].cb);
									propertyInput.setTemporalAutoBezierAtKey(newKeyIndex ,keysAry[k].ab);
								}//BEZIER
								if(propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL || propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL ){
									propertyInput.setSpatialContinuousAtKey(newKeyIndex ,keysAry[k].scb);
									propertyInput.setSpatialAutoBezierAtKey(newKeyIndex ,keysAry[k].sab);
									propertyInput.setSpatialTangentsAtKey(newKeyIndex ,keysAry[k].ist ,keysAry[k].ost);

									if(k<keysAryLength && k!==0){
										//alert(bakKeyIndex+" rov is"+keysAry[k-1].rov);
										propertyInput.setRovingAtKey(bakKeyIndex ,keysAry[k-1].rov);

									}
								} //2d_s
							}//end for
						}
						return true;

						} //instanceof

					}catch(err){alert(err.line.toString()+"\r" + err.toString()); }
				}//end function

//********** transfer key feature  end*********************//
			//--------------------------------------//
//********** fool parent *********************//
            function runFoolParent(){
            //#targetengine miscellaneous;

            var binHr= "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00x\x00\x00\x00\x03\b\x02\x00\x00\x00\u00D7\u00E3\\\u0087\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\x1BIDATx\u00DAb\u00E1\u00E5\u00E5e\x18\x05\u00B4\x07L\u00A3A0\x1A\u00D0\u00C3\n\x00\x04\x18\x00\u00C2L\x000\u009A\x0E\x03\u00BD\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binClose="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x02\x00\x00\x00\u0090\u0091h6\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\x01IDATx\u00DA\u00B4R\u00A1\x0E\u00C20\x14\\\u00D7\u00AE\u008C\u0090\t\u00EC$~\x1F\u0080A\u00CD\u00E3\u00F1(\x12\x12<\x12\u0085G\u00A10(>\x04\u0085Aa\u00F8\x00\f\u008A0\u00D6\u00AE\u00E3BY\u00D7-C\x10\u00C2\x13\u00CD\u00EB\u00EB]\u00EEz-\t\u00C3\u00D0\u00F9\u00A6\\\u00E7\u00CB\u00FA\u008D0N\u00BC^VN:9\u0099\u00DD9V\x1BC\u0083 0\u00E8X\u00B0\u00BE\u00A4G\u00AA\u00AEn\x0E\u00DC\u00FC\u00CE\u00A3\u008CF\u0099\u00BBgJ\u0090*a\u0098\u00B2a\u00EA\u00A1\u00E1\x0E\x01\u00E7L\u00D5$\u00E1Z\u00AD\u009B\u0093\x1B\u00C9OTU\b\u00D8\u00E3\u00A0\u00A7\\\u00CD\x19\b\u00D6-\u009C@p\u00ED\u008B\x06K\x07VrLAj\u00D9N\x05\u00F9p\u00E9mKB\u00DDl\u00D1/\u00DA\u00A9=\u00A9\x10\u00F4-\u00EDL\u00D0\u008F\x1E\u00AC\x16\u00EB\u00DB\u0092F\u00DB\u0099\u00EA\u0082C\u00F8\u0084\u00DB\u00BAB,\u00A8A\u00C3\u00F7\u00B4\u0093\u009C\u008BX\u00905\x12\u00AF+\u0098\u0094\u0080\u0083o\u00BC\x03\u00B2\u00C7\x0B\u00E8L7-\u0089IsJ;./\u00AF3$\x03\x0EdW\u00BE0j(\u00F2\u00F7\u00DF\u00FA\x14`\x00r%x*\u0082<\u00F9w\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binBtn01="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0087\x00\x00\x00\x14\b\x02\x00\x00\x00(w\u00B9\u00B0\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u00C3IDATx\u00DA\u00EC\u0098]HSa\x18\u00C73?\u00D6>\u00B3\u0099\x19\u00D3@Z\x10\x06Faf]4o6\u00BA\u0088P\n\x02\u00F3F\u00BB\u00C8\u00A0\u00E8\u00C2\u00A2@\u00AA\u008B\x1AA\x12]DA\u00DD\u00A4\x17\u0095W\u00C5\u00A0\u00BA\u0088y\u00A3Ba\x11E\u008A\x16\u00E40\u00DA\u00D4\u00F91mn\u00DA\u00B4\u00AD~\u00EB\u00B5\u00D3\u00DA\u0087\x0E#kr\x1E\x0E\u0087\u00E7\u00FDz\u00CE\u00F6\u00FF\u00BF\u00FF\u00E7y\u00CFI+))Y\u00B1X\x1B\x1C\x1C\\!\u00DB_\u00B0\u00952\x042+\u00B2\u00C9\u00AC,'Vfty\u00C3\u00DB*\u00FB\u00F6]\x18(\u00AB\u009E\u00CA\u00DD(\u00F5\u00E3\u00F7T\u00DD\u0090![\x02K7\x18\fR#\u00A8P\x7F\u00A8\u00B0BFz\u00C0\u00AFq\u00BF\u009BU\u00EB\u009D\u00A6:\u00EE\u00AB?\u00BEb4sj|h\u00C7\u00A1\u008C\u0080_5\u00EA\x10\u00F3}>\u009F\u008C\u00E0\u00DF\u00B0\u008C\u00C8\u00C6\u00FB\x03WT#\x0E\u00E3\u0093\u008B\u00B0\"z\f\u009Dw\u00E9D:\u00EB\u00DE\u00D8h\u00E6\u00BD\u00B1M\u00E6\x17\u00E7\u00F4\u00DAc\x03\u0085\u0094\u00BA\u00CF\u0095\u00E7\u00A6\u008B-a\u00AA=\u00CEl\u009BU\u00F1\u00A13\u00C9\x1F1p\u00F9\u00F5/\u00F1N{\u00D7\u00B4\u009CI~\u00ED2\u00CF`cE\u0096\u00A0BS\u00D8z-\u00A0\u00CB\u00EB7\u00D7\u00CFI)\u00E07t\u00DE\x1B-2\u008B\u00A6r\u00C4A~\u008B\x1B\u00C8\u00BB\u00F7\u00E4W}\u00C1\u00FAK\u00E5\u0086\u0086\u00ED\u00EA\u0097\x0F\u00C7\u00AB\x1A\u00E1)vZ`S\u0099\u00FB\u00F4\u00A3\u00D8\u00FE\u009C;\u00C7X\u00C8\u00B5\u00AA\u00CB\u00CE\u00DA?\u00FFc\u0089\x1E\u0094bZ\x19+2C\x00\u008EsO]No\u00AB\u00D4\u009F\u00EDx\u00DEo\u00A9\u0087\u008C,\u00AF{\u009E@\u00DF\u0094\u00BA\f\u008F\u0093\u009D\u008E\u00AFik\n\u00AD\u00D2\u00D2\x13\"\u00EC\u0091[\u00B3\u00F9E\u00E186+\x1A\u00A2)\u00C4\x01\x01q\u00E3(\u00BB\u00EDS;\x0F\x06\u00F5\x05\u00FE\u00D2\x03\u00BE\u00F2Z\u00A1<}\u00CB\x198\u009E\u00A8<\u0087\u0086\x18\u0085\u00FB\u00C8\u00B0\u00AA\x17\x0F @\f\u00D1\u00A3{z=\u00D3\u00D5\u00B3\u00E0\u0083RC+\x14sp\u00E7\u008EV\u00E2\u00E6\u00A8\u00F9M\u00D3\u00DE\u0084VF\u008E\u00DF\x07;\u00D0\x01\x1A\u00D0D@\f\x01\"\u00D8\u00E1g\u00BAz\u00D1\x04\u00FD\u00F3 \x150\u0096AmH\u00A9\u0085\u0092\u00BC\u00AB\u00FB\u0099\u00B9rz2\u00B0iW\u00B8\u00EC\u00E9\x0B\u00C2I\u00B5a{TX!JF\x19\u00A2\u00C7g\u00AA\u0081\u00A1\x05\x1F\u0094\x1AZ\u0081\x12\u00AA\u00BDj\u00B4oF\u00BB\x0EG*-d6|!\u0094\t\u00E3\u00EED\u008A\x01\u00F1\u00DC\u009B\u0087\u00C3G\u0080\u00F2Z\u0090\x05\u00AC\u00DC\u009B\u00D5_\u008A-\u00ABmVPf;\u00FBK\x0F\u00D2\x04\u00A9\u00B8\u00CB\u00C5\u00D6\u009ES\u00A7\u00CDJ4\x00\u0085\u00DD\x19C\r\fIC\u0090\u00CD=6\u00AC\u00D8\x16\u00DC\u00E1#T\u00A9[>\u00D5^\u00E1\x1D\u009E\u00D8\u00B8\u009B|E\u00FA\u00EA\u00AAi\u00A6\u00BC\u00E3\u00FB\u00F2\u00B7r$+\u00B4_\x13s\u0098 \u00F9Q6t\u00BE\r\u00A4\u0094]v\u00D2\u0097@\u0099\x14\u0084C\u0091\x18\u00AF\u00FAy\"\u00E8\u00D6\u00A5'\u00F8\x1Dl\u00ED\u00C8\nOv\"\x02\x1C\u00C0\x10\u00E2\u008B<\x0B\b'*\u00EC\u00B2=\u0083\u00C1\u00C1'\u00D3\u00D1`\u0087zC\u00C7\u00ED\u00ACI7\u00E7.\u00AE\u00EC\u00BE\u00E7\u00C6\u00C7\u0097\u00B4\u00AE\u00B7L\u00F8d\u00AASx\u00DD\u00C2\u008F5\u00AA\u00B4\u00CFT\u009B\u00E5\u00EAE\r`\u00CA\u00A5\u00E8\u00EB\u00A43c\u00DC\x05O\u00C1pr\u00BB\u0097H(\u00F1j\u00F5\u00AE\u00B4\x1FR \x0ER\u00D0\u00B47G=kqaS\u008F\x15j\tR\u00E0\x1C\u00BC\u00F9\u00E1Y\u00CA\u00BE\u00A8\u00FC\u0092\u00C1\x10\u00C7\u0081--'\x12\x05\x12\u009BZ:\u00F6\x00\u0099@\u00CDS\u00D5(\u00CA\x00\x10\u00A3$z\u00B8\x16,\u00C2\u00CCDjLC\x1Cd3\"\x10_\x1A\u00D5\u00B67G\u0085\x15\u00FEo\x7F\u00CC\u00E3J\u00E6A\u00FF\u00A7\u00A5E~3\u00A6\u009C\u00F4\u009BOQ\u00F0\u00A1$\u00DB\u00F1L\u0094\x16\u00A8\u0082\x12\u008E\x00\u00BC\u00C7\u00F06\x13\u00B9X\u00FEf\u00BC\x14\u00ACH\u00E5\u00DD\u00BD\u00ADbz\u00ED\u00DC\u00B7\u0096\u00AC\u00C9ad\u00C4\u00FB\u00A3T\u00FFeV\u00FE\x01+\u00C9\u009B\u00CC\u00CA\u00D2}\u009D\u0094MfE6\u0099\u0095\x14\u00B1\u00EF\x02\f\x00\u00E8\u00F0\u00F8\x7F\u00D4yh\u00ED\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binBtn02="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0087\x00\x00\x00\x14\b\x02\x00\x00\x00(w\u00B9\u00B0\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\x16IDATx\u00DA\u00ECXMk\x1AQ\x14u\u009C\u00A9\x1F\u00A1J\x17\n\u00A2\u0082\u00B4\x0BQ\x104\bJ\x16\u00BA\x12J\u00EBB\u00DA\u0095\u00BF\u00C0\x1F\u00E5\u00CEMq\u0095\u0082\u00A0\x10p'\u00A5 H\x15\x04\u00C5\u0085E\u00A9(\u00E8\"Q\u009BT\u00A3N\u008F\u00DE\u00F2\"1\u0095\u0099\x04q\u00849\u008B\u00C7\u009D7\u00F7\u00BD;s\u00EE\u00D7\u009B\u00E1\u0082\u00C1\u00A0\u00E6\u00B9\u00E8\u00F7\u00FB\x1A\x15\x07\u0080V\u00A5@\u0081\x10\u00A4\u00AB\u00F2\x1FL\u00FC\u00B9Q\u00BC^..o\u00C4\u00C1B\u00E5\u00EE\u00F8\u00B9\u00A2=7\u00F2\x17g\x1A\x03\u00C7\u00D9\x04\u00E1\u00A3I%N\x11^\u00E1\u00DE\u00F0\x0F\u00B2\u00ED\u0095J\u009C2\u00FA\u00CA\\d\u00E2\u00F2\u00C7\u009DJ\u00DC\u00F1\u00FB\u00CA\u00BA|\u00BD\x7F\u00BD\u00BC\u009AjV\"\u00FA\u00CA\u00AA1\u00DB\u00D5\t\x04\x02\u00A1P\u0088]\u00F6z\u00BD|>\x7F\u00A0\u0087v8\x1C\u00E1p\u00D8b\u00B1\u0090\u00A1R\u00A94\x1E\u008F#\u0091\u00C8d2\u00A9V\u00AB{\x16J\u00D1Q\x02x\u00BB\u00DD\u00BE\u00A7jq\x06\u00AD\u00D6k\x10>\u0099\x17_\u00C7\u00AB\u00F2\u00AD\u00F8\u00EB^\x1C-\u0099\u00C2t:e\u00B2\u00CDf\u00C3\u0098\u00CDf+\u0095J\u00A7\u00D3\u0081\u00938\u008E\x1B\f\x06/|\u00BEx<.\b\u00C2h4b3pF\"\u0091h\u00B5Z\u00B9\\\x0E\u00B6\u00DCn\u00B7\u00CF\u00E7\u00AB\u00D7\u00EB.\u0097k>\u009F\u00EF\u00B7\u00D8\u00EDv_\u00FEH\u00C7\u00CC\x15\u00E1\u00B3Y\x1B0\u0092\u00BCv\u0089\u009C\u00AA5\u00DA\u00C0d2\u0081\u00C1h4JA\u00DDh4\x10\u00D4`y8\x1Cz\u00BD\u00DEZ\u00AD6\u009B\u00CD\x10\u00BC\u00A4\u008F\u00C4z\u00B7\x01V\u0099\u00CDf\u00C4~\u00A1P\u00C0]\u00C7\x06z\u00BD\u009E\x058\u00FC\u00DDn\u00B7\u00CB\u00E52]\x16\u008BE\u00E4(\u0096@\u00C6r\u00CAW\u00CA\u00D4]\u00EB\u00B0\u008B\u009D\u00A1\u00FC\u00C8\x10\u00C6\x13\u00E8+\u00C8\x12\u00E6\x12@\u00FC9\u0097\u00B5)\u00DE\x16\\\u00A0V\u0080A\u00F8 \u009DN\u0083;0Bw!\u008020\x0B\u00D2\u00C1T&\u0093\u00A1I*M\u0098\u0081>Q\f5*P\u00DB5\x07;o\u00A7\x0E\\K\x15\f\u00B2N\u00A7\u00CBn\u0080}\u00A0\u00B6k\x1D\u0093V\u00ABu\u00D7\u00D0\t\x7F\u00AFH)\u00F7\u00A9T\u008A\u00A5\x0B\u00C2\x13\u0094!\u00CC\u00C1>F\u00A6\u0086y\u00DC\x05e\u00A4\u0083\x19\u0090\u008E\x18G\u00F6\u00F46\u00A0`\u0097n\x17k\u00E1c\b\x18\u00C9=\x18a\x11\u00CE\u00D8\u00B5\u00CE\u00DA\u00DE3\f\x1D\u00D9+\u00DC[\x1D\u0093W\u00D5;tx){\u00EDv\u00F8X,\u00C6\u00D8a!\u0089\u00EA\u00CF\u00A2\u009EyQVy\u00A4\u00A2D\u00C0\u00CET\u00D3\u00B6w\u00DEc\u00FDT\u00CF`8qQ{\u00A7\u00C2%\u00D1%O\x02\\\u00A0P c\u00B6\u008Fg\x04\u00F0\u00E8\u00F1x\u00A8\u00A6\u00E3\u00AE\u00D3\u00E9\u0094\u00B8'\u00D2\x0B\u00CD\tK\u00D0Z@7djc\u00B2\u00AC\u009F\u008CW\u00E0\u008C\u00F5\u00A7\u00E2\\\u00C4!Xn{\u00FF\x1F@\\d\x03\u00A4\x11\u00EB\u00ED\x048\u00A3\u00D9l&\u0093I\u0092\x11\u00D1T\u00F1\x1F\u0081\u008E\u00BC\u00DB\u00DD\u009E:\u008D\u00DF\u00EFG\u008A\u00B0K\u00B9\u00D6\x15\x0E\u008E\u00FE\x19\u00AF\u00FFq]\u009C\u00FD\u00FBH\u00BC\u009A.\u00BF\u00FD\u0096\u00B2X\u00FDg|\u00D83\x18\x7F\u00FEp\u00E2\u00D2\u00E88\u0095\x17Exe\u00BBy\u0088\u0083{\u0095\x17Exeqy\u00B3j\u00CE4\x7F\u00C4\u00E5\u00F7\u00DB'\x7F\u00A8\u00A88B\u00B7\x17\x07\u008B\u00C5\u0097k\u0095\x0EE\x7F\u00DB\u00AB8.\u00FE\n0\x00\u00B7\u00DE\u00DB\x1D\u00D8k\u00C1|\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binBtn03="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0087\x00\x00\x00\x14\b\x02\x00\x00\x00(w\u00B9\u00B0\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03 IDATx\u00DA\u00EC\u0099\u00BF\u008B\x1AQ\x10\u00C7\u00F5\u00B8`\u00A5\x10\u00D0\u00E6\u00CE\u00CA&Z)\bvZI\x1A+\u0085\u0080\u009D\u009Dpm\u00FAt\u00A9R\u00E4\x0F\u00B0\u00B33\x04\x14\x02ZI\x1A;\u00AB\x13\x02\u009A\u00C6J\u00CFB\u00E1@\u008BD\u0093#\u00F9\u00E0\x17\u0096e\u00D7\x1FQ\u00EF\u00BC\u00F3\u00B2S,o\u00DF\u009B7;\u00F3\u00FD\u00CE\u00CCsWw<\x1Ew\u00ED+\u00A3\u00D1\u00C8\u00E5\u00C8\x03\u00C8\u0099\x03\u0081\u00C3\u008A#\x0E+'+\u00E7\u00F6\u00A9W\x17\x7FV\u00AA\u00DE\u00DC\u00BAg?\x1C\u00C4\x1E\u0089\u0095\u00F7\u00F9\u00DF\x17/W\x10\u00F3\u00EE\u00D3\u00F9\u00D7oNm=\x12+\x12\u00CAb\u00F6\u00D3m\u0099\u00D9 \u00B1X,\u0091H\x18\u00B7\u00D3\u00E9\u00B4\u00D3\u00E9\u0084B\u00A1z\u00BD\u00BE\u0093C\u0091Hd\u008F]\u00FF\x0B+\x1F\u00BE\u00EC\\\x19\u00C3\u00E1\u00D0\u0082f\u00B7\u00DB\u00DD\u00BC\x05.\u00BD^o\u00AB\u00D5z\u00C6\x10\x17\u008B\u00C5J\u00A5B\u009A\u00DE\x03+\u0087\u008B\u00DF\u00EF\x0F\x06\u0083\u00D7\u00D7\u00D7\u00B8\u00D5n\u00B7\u00A9$\u00AE\u00E1p\u00D8\u00E7\u00F3\u00B1\n\x13\x1E\u008FG\u00E5\u00C5\u008C\u00BD8(\x1AV\u00D1\u00912Wn\u00CB\u00E5\u00B2\u0096\u00A2\u00D1(\u00A1&\u0093I\u00C6\u00A2\x1F\u009DL&3\x1E\u008F\u0099\u00A1Ly\u00EEJ;h\x1A\u00BB&\u0093\t\u00CF\u009D\u00CF\u00E7\u0086&f\u00E5\x0F \u00A2L\u009E\u00D9\u00B7\x1B\u00E1\u00B0\u0097\u00B26;\u0080e\u00D91r\x14e\u00C6\u00F9|\u009E13\u0087\u00B2\u00C2\u00D1b9\u00F6\u00BF\u00DF\u00B87\u00DB\u00BA\u00BC\u00BC\u0094\x13\x06\u008E\u00CC\b\x1D\u00BC\x07P\"\x01\b\u00D0T\u00A8\u0082x]\u00AD\u0088E\u00A2e\u00A0\u009E\u00A6A\u00BF\u00DF\u00C7l\u00AF\u00D7S\u00AF\u00ABV\u00AB(\u00C3\x07\u00F3B\x04M\u009E\u00B2\u00CE\u008E\u0080f\x17:\u0080\u00C5\u00D8\u00E0O|\bz\u008A8\u009DN\u00CBg\u00F3vU\u00BF\u00C2\t-\u00C5\u00E2\x00\u00BE\x11\u00A0\u0098 /K\u00A5\u00D2}\u00D6\u00CA\u00D5\u00EB\u00BB+\u00D7\u009D\u00F9\x07\u00D8\u009B\u008F/v\u00EA`J\x19\t\u0091\u0093\u0092\u00F8\u008D\u00F7$\u00D4l6\x13%\x1B\x04\x05\u00A2B9\x10\b(\u009DAD\u00B0rUb2#\x02\u00B4\u00A4\u0081\u0099\x12\u00BB\x1D\u00D0\u00C1B*\u0095\u00A2\u00AA\x1A\u008D\u0086\x05,\u00F6\nw\u00D1\u00C0F\u00BB\x1BF8\x10`w\u0080t\u0091M\u00AE\u00AA\u00B0\u0087=\u00ED\x0F\x11\u00C5\x03\x1C\u00E4\x0E\u00F9H\u00A3(\x14\n\u00B5Zm\u009D>\u00F1d\u00B3YX\x04}\u00D5\u0084\x02f\u0092[\u00E6e0\u00B6\x14#'\u00B8.\x16\u008B\u00ADv\u0094:\u00AA\u0086\u00C1`@)\u00ACs\x03W\u00D1\u00B1l7\u00C2\u00B1;\u00B0SA\x1C\u00E9\u00B4\u00DF*DH<DH\u00DF'Hz\u00D7\u00863\tD\u00A0\x01X\u00D1\x14\n\u00C4Lb\u00C2\u00A8:\x1E(\u00B0*\u0088s\u00B9\x1C\u00B9O:o\u00B5\u00C3\f\u00F5\u00CA.\u00F2\x1D\x07,[XE\u008D\u00C47\x1Ejw\u00C3\u00DC\x1B,\x0E\u00EC]\x1C\u00C7;\u00ED\u00ED\x02\x10\x10\u00A3\u00B3\u0087\x04$*b\u00A6Q\u00D8O\u00FB\u00E1Rh\u00CD\u00D2\u00D4\u00A1\nX\u008C\x01N\x1D\u009C[\u00E3$\u0083-\u0098\u00C6\u00B8\u00BD\u00A9Z\u00EC@\x03\x03@\x14\u00CD\u0096#\u008D\x19X\u00A7_A@\u00B3\u00D9\\\u00E9\u0086\u00F9\x17\u00A6\u00C5\x01\u00F3\u00BB\u0081\u00D9\u00E6\u00AE\u00A7\u00BD\u00DB\u00FE\u00CD\u00F8\u00F3\u00DB_\x1C\u00F5\u00FF\u00F2\u00CEx\u00FCo\u00C6\u00C2kC\u00CF9D\u009E\u00CE\u00AB\u00D2\u00D9\t}\\!+\u00F5\u00EB\u00EB\u00D9\u00BFE\u00BA\u009D\u00FFW\u009E\u00A08\u00DF\u00B5\x1CV\x1CqX9]\u00F9+\u00C0\x00\x1AwtL\x10\u00A6\u00BDd\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binBtn04="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0087\x00\x00\x00\x14\b\x02\x00\x00\x00(w\u00B9\u00B0\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x02\u00F3IDATx\u00DA\u00EC\u0099\u00BF\u00AA\x1AQ\x10\u00C6\u00AF\u00F9\u00A3\u00A4P\bhsce\x13\u00AD\x14\x04\u00AD\u00B4\u00B2\u00B3\x13\x02vv>@\x1E#E\x1E\u00C0\u00CEN\b()\u00EC\u00EC\u00AC4\u008DV\u009A\"v^\x0B\u0085\x0BZi\u008A\u009B\x1F~\u00B0lv\u00D7\u00C5${\u0093\u00BD\u00E1L\u00B1\x1C\u00CF\u00CE\u00CC\u00F9\u00E6\u009B9sv\u00D7H\u00B1X\u00BC\u00F9]\u00D9l67F\x1EA\u009E\x19\nLV\u008C\u0098\u00AC<Yy\u00E1\u009E\u00FA\u00F4\u00FE;\u00D7\x0F\u009F\u009F\x7F\u00F9fr\x16\u00A6\u00BDr\u00FB\u00FA!\u00FE\u00CA\u0090\u00F3\u00F4;X\u00A1P\u00A8\u00D7\u00EB\x7F\u00EE\u00A7R\u00A9\u00E0\u00CAd\u00E5_\n\u0089\u00CC\u00E5r\u00FF1\u00BFT\x18u\x16\u00C0\u00B9\x12\u0094$\u0093\u00C9j\u00B5\u00CA\u0095\u00F1b\u00B1\x18\u008F\u00C7$@\x10\u00F7\u00FB\u00FDh4*\u0097\u00CBo\u00CE\x12\u008B\u00C5f\u00B3\u0099\u00C3\u00BCT*i\u00D3H\u00B9V\u00AB-\u0097K\u00A95\u009B\u00CD\u00F9|\u00BE\u00DDn\u0099L$\x12R\u00D8\u00EDv\u00EDv{:\u009Db8\x1C\x0E\u00D7\u00EB\u00B5\u00A7\x1F\x06\u00B2b\x00$\u0080\u00D9\u00B7i*\u0095\x12`\u00BC\u00A1\u008C\u0089\u00C3<\u009DN\u00A3\u0080\u00F9\u00F1x\u009CL&\x0E\x00\x00c]\u00D5\x19H\u00B4:Wt\u0080\x14\u008A\u00BDB0\x10\u00D7\u00E9t@,\u00A0\u00F9|\x1E\u00AC\u00CC\x00\u009D\u00BB\u00E2\x0Ej\u00DC)!r\x14z\u00BD\x1E\u00CA\u00A7\u00D3\t.HI&\u0093\u00D1-\u00B2\b\u009B0\u0082\u00B9\u00BC\u0091`\x19\u00A2\u00D3\u00EDv\u00AD\u0094\u00B8\u00FD\u0080\x04\u00FA\u00F8\u00C9\u00BA\u00A2\u00CC.\u00F1x\u00BC\u00DF\u00EFs\x17\u00D2\u00B9\u00EB6\u00D7\x12\u00AC\x0ExO\x00$@\u00CE\t\u0096\u00B8\u0088W\u00CAa\u00E9`$\x03L\x14\u00A0\u00D8D`6\u009B\u00CD2\u00B3Z\u00ADT\u00B6\u0097D\u00C4\u00B1\u008DP\u008EF\u00A3\u00DAm\u00C9\u00B3\u0088\x14\x15\u00AC\u00EA\u0091+\u009A*\x7F\u0088\u0080P\x1F?,\u008D\x07~\u0092Z\u00F2\u00E7X\x17\u00CF\u0098h\u0080\u0095\u00DB\\>\u00FD\x01p%O\u00F8\x0F\u00F2\u00C98(\u00A1\u0094@\x06\u00FB\\\u0095\u0098\u00D9Y\b\u0080\x02\u00A4\u00B8\u00A8J\u009F\u00EE\u00C7\u0091C\u00B4\x14\u009D\u009A\x1E\\\u00C3\x05\u00D5\u008A++\u00A3\u00ADV\u00CB^\u00E6R\u00F3\u00F7\u00A3\u00EA\u0086Aj\x19\u00F3\u00C1`@\u00FF\u00F1\u00C4\x00l\u00B7\u00B9c\t7\u0080\u00B0\u009F\u00F6\u00D0Ga\x12\x03\u00F1[1\u00D0@\u00E0\u0085y\u00B5\u00EFK\x02\u00FBJ\u00836\u0087&\u00B1\u00C2\x15\u009Ddw\x16\u00D8\u00A43\u00A8C\u00AA\u0084\u00AF\u00F1C\u00AD\u00C0/\u00B6\u009CL\u00F0\u00EE\u00A0\x12x\x02&\u009C\u009E0\u00AC\x1Ds\r\u0080\u0080\u00F7\n\u00AF,oo\x1F\u00EC3_\u00EF\"\u00FE\u00BE\u00D8\x04\u009C\u00B7\x1A\u0083X\u00ED\x0B!<bc`\u00CDX\u0087!jj&\u008E\u00A3\u0085\x04\u00D0\u00EB\u00F0\u0086!\u00D1\u00D2\u00E2\u0099\u0091\x1F\x06\u00D2Q\u00FDZ\u00E7\u00B6c\u0097\\\u00F2\u00C3\x06%1\u00C2)\u009Fv\u00FD\u00C3\u00E1\u00D0h4\u00AC\u00D3\u009E\u0081\u00C3\\\u00B0\u00AF\x07\u00A0\u00F3\u00E9WO\u00FB\u0088\u00FB\u009B1\u00EF\u00F6\u00A4\u00C4\u00AD\u00FA\u00EE\u00E3\u00CB\u00BB\u00FB\u009F\x12\u00F3\u0097\u00BF\x19\x13\x1B\x0F9\x1C\x06\u009E\u00F1\x07\u00F2\u00AADV\u00DC\u008F\x1E\u00A1\u00F8\u00E2\u00828\u00D8\x0F\u00C9\u0083\u00BFJ\u00F5\u0091R\x12*\u0089\u0098\u00FFW\u00CC\u00BB\u00BD\x11\u0093\x15\u0093\x15#\x01\u00CA\x0F\x01\x06\x00\u0097\x03T\b\u009A\x00\u00F8=\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var	binBtn05="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0087\x00\x00\x00\x14\b\x02\x00\x00\x00(w\u00B9\u00B0\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03;IDATx\u00DA\u00EC\u0098\u00CFK*Q\x14\u00C7\u00F3iHa\u00BA\u00C8E\x14I\u00AF\u00D0\x14\u0085\x02\u00D1~\u0090\u00AB\u00DA\u00F5\x0F\u00B8k\u00E7\x1F\u00E5\u00AE\u009D;W\u00ED\\\x19\b\x1A\u0084\x0B\u00B5\u00DA(\"2E\u0086\x14Y\u0084-\u00FA\u00E0\u0081\u00CB`\u00E5\u00A3y\u00CFx\u00C9=\u008B\u00E1\u00DE\u00993\u00E7\u008E\u00DF\u00EF\u00FD\u009Es\u00AE\u00B6h4:e\u00D5\f\u00C3\u0098\u00D26\x06\u00FB\u00A5!\u00D0\u00ACh\u00FB\"+\u00B1XlssS#\u00F2?\u0098}qqQF\u008F\u008F\u008F\u00A1P\u00C8\u00E5r=<<,,,\u00AC\u00AE\u00AEz<\u009E~\u00BF\u00FF\u00F2\u00F2\"\x0En\u00B7{{{\u00BB\u00D9l\u00AA\u0097yE#8^V@\u00BF\u00DB\u00ED\u0086\u00C3\u00E1\u0095\u0095\x15\u009B\u00CD\u00D6\u00EB\u00F5\x1C\x0EG$\x12q:\u009D\u00B7\u00B7\u00B7\u00E2\u00E0\u00F7\u00FB\u00E1\t\u00DA4+c5\u0087y\u00B2\u00BE\u00BE~ss\u00E3\u00F5z\u0081\u00FE\u00EA\u00EA\u008A;\u008DF\u0083\u00CC\u0086n\u00EA\u00F5:S\u00AE\u00F3\u00F3\u00F3\u00ADV\u00EB}\u00A0D\"\u0081\u0098NNNd\u00BA\u00B4\u00B4txx\u0098N\u00A7G//nj\u00DA\u00E9tr\u00B9\u009Cb]\u00D7\u0095\u00A9\u00E5\u00E5\u00E5\u00D9\u00D9\u00D9r\u00B9|~~\x0EXRc\u009E\u009E\u009E\u00A0\u0087G\u00E2s\x7F\x7F\u008F\u00CF?\u00FF\u0088\u00F4\u00C0\u008E\u008F\u008F\x19\u00C7\u00E3\u00F1\u00BF\x0F\u00C8\u00C7\u00B3K&A+\u00D4\x12\b@%kkkH\u00C4\u00E7\u00F3\u00F1\u00DB \u00E9\u00FA\u00FA\u009A\x01d\u00C0\u0090\u0085\x05\u0092\u00C9d\u00BB\u00DD\u00A6b1.\u0095J\x04\u00FC\u00CC\u0093\f\u0089\x16\u0083\u00C1 9\u00F3\u00E0\u00E0\u0080\u009D!\u00EAA\x7F\u00BC\u008E\u0082\u00D1\">\u00C5b\u0091\u00A7\u008C\u0091\x14\u00C2\u00C2ah\tE\u00ADY\u00BB?U+\u00D4vp\u00E7\u0097@@\u00ADV+\x14\n\u00F0\u00A4\u00BA2j\u008C\u00E55\u0088\u0089\x14NOO766F{\u0092*A\x19|\u00E7\u00E6\u00E6x%\u0093\u00C90\u0080\x0Fytqq\x01\u00CAP\x02\x07<\u00E5\u00BA\u00B5\u00B5\u00F5~\t\u0088\u0087\x1Bq\u00FE\u00F1ZA%\u00D3\u00D3\u00D3l\u00C0\u0099\u0099\x19\x19@\u00CC\u00EE\u00EE\u00EE\u00CE\u00CE\u00CE\u00EB\u00EB\u00AB\u00E4za\u00EE\u00ABk\u0088>\x00\x11\x11\u0088z\x00\u0091\x01\u00C0I\u00B9J\u00A5R\u00E2\u00C9*8C\fW6\x04\u0094\u00C8+\"\x1A\u00FCE1\u00D9lVdqtt$\u00A1\u0086\u0096\u0098\u009Cj\x0F\u00DC\u0088\u0083|E1\u00DF\u00DF\u00DF'\u0089\x19\u0086\x01j\u00B4\x00 \u00A2\u00F6r\u00A5R\u00F9,\u00FF\u0098\x11\x11\u00B0>4\x14`\u00AE\u00F6RW\u0086\u00AA\x02\x0B\u00E5\u00F3y\u00D6\x15\x07\u0089\u00AF\x1C C\u008Dan\u0092{0\u00F8\u00A0-F%\u00D5j\x15\u00DD\u00FC\x1E\u00D8\u00DD\u00DD\x1D\u00D3@ \x00R\u00CF\u00CF\u00CF0\u0087\u00DB\u0087\u0081\u00D8\u00A7\u00F8\u0090|\u00D8\u00D1P\u00C2\u0080;\u00D6\u00BE\t&\u00E8\u00C5%\u0095\r\u00B1\u00CBM\u00F4D\u00A6\"8\u00CC\u0091\u00CD\u00D4\u008E\u0099LV\u0090\bZ\u00A1\x0F>;;\u00AB\x0E\u00CC\u008C\u00C5\u00DE\u00DE\x1E\u0087\x18\u00E0\u00F8,\x100\u0091R(\u00B3\u00D2\u00FC0\x1D\u00E1\u00FC\u00C7\u008CG\u00BB\f%\u009D\u0081\x11\u00F0\u00F2\u00F2R=%\u00ACt\u00E126k\u00C8,\\\u00BE\u00E4\u00E7V{\u009B\u00F9?c\u0084\x02+T{\u009A14\u0081b\u00B8\u00C9\x01\u0085$\u00C6\u0099\u00DFn\u00B7\u0093\u00D3\u00CCM\u0094\u00FE\u00CF\u00F8;XQ\x07\x17\u0092\u0083J\x1D$.dD\u0081\u00A1\x0B\u00A0\u00F8\u00C3\u0096\"F\u00B3\u00F2\x1Dg{\u0095\u00CA><\u00BD#\x1D\u00BA22\u0083\u00E5\u00B3\u008B6\u00EB\u00AC\u008C09\u00B8i\u00D4\u00BE\u00EF\x14\u00A9M\u00B3\u00A2m\u0094\u00BD\t0\x00\u00D4\u0092\u00E9\u00B9BW.\u00DE\x00\x00\x00\x00IEND\u00AEB`\u0082";

            var imgHr =createResourceFile ("FoolParent_hr.png", binHr);
            var imgClose =createResourceFile ("FoolParent_close.png", binClose);
            var imgBtn01 =createResourceFile ("FoolParent_Btn01.png", binBtn01);
            var imgBtn02 =createResourceFile ("FoolParent_Btn02.png", binBtn02);
            var imgBtn03 =createResourceFile ("FoolParent_Btn03.png", binBtn03);
            var imgBtn04 =createResourceFile ("FoolParent_Btn04.png", binBtn04);
            var imgBtn05 =createResourceFile ("FoolParent_Btn05.png", binBtn05);

            var w = new Window ('palette', "FoolParent", undefined, {borderless: false});

            var myFile = new File(Folder.userData.absoluteURI+'/Ola script UI/' +"cursorPos.txt");
            var pos;
            if(File(myFile).exists ){

                if(myFile.open("r")){
                    myFile.encoding = "UTF-8";
                    var txt = myFile.read();
                    pos=txt.split(",");
                    myFile.close();

                }
            }
            if(pos !== undefined) w.location =pos-[15,15];

                //////////////////////////////


            var btnGrp =w.add("group");
            var btnSize=[138,22];
            //btnGrp.button = btnGrp.add ("button", undefined, "set parent");
            btnGrp.button =	btnGrp.add ("iconbutton", undefined, imgBtn01, {style: "toolbutton"}); // b
            btnGrp.button.helpTip = "Right click for more mode :)";
            //btnGrp.hr1 = btnGrp.add ("image", undefined, imgHr);
            btnGrp.btnParentChain =	btnGrp.add ("iconbutton", undefined, imgBtn02, {style: "toolbutton"}); // b b
            //btnGrp.hr2 = btnGrp.add ("image", undefined, imgHr);
            btnGrp.btnFirstP =	btnGrp.add ("iconbutton", undefined, imgBtn03, {style: "toolbutton"}); // b
            btnGrp.btnLastP =	btnGrp.add ("iconbutton", undefined, imgBtn04, {style: "toolbutton"}); // b
            //btnGrp.hr3 = btnGrp.add ("image", undefined, imgHr);
            btnGrp.btnUnparent =	btnGrp.add ("iconbutton", undefined, imgBtn05, {style: "toolbutton"}); // b

            btnGrp.button.preferredSize=btnSize;
            btnGrp.btnParentChain.preferredSize=btnSize;
            btnGrp.btnFirstP.preferredSize=btnSize;
            btnGrp.btnLastP.preferredSize=btnSize;
            btnGrp.btnUnparent.preferredSize=btnSize;
            /*	
            btnGrp.btnParentChain = btnGrp.add ("button", undefined, "Parent Chain");
            btnGrp.btnFirstP =btnGrp.add ("button", undefined, "First layer as parent");
            btnGrp.btnLastP = btnGrp.add ("button", undefined, "Last layer as parent");
            btnGrp.btnUnparent = btnGrp.add ("button", undefined, "Unparent");
            */	
            var infoGrp =w.add("group");
            infoGrp.nobreak = infoGrp.add ('statictext {text: "select Name ", characters: 10, justify: "center"}');
            //infoGrp.btnClose = infoGrp.add ("button", undefined, "x");
            //infoGrp.btnClose =	infoGrp.add ("iconbutton", undefined, imgClose, {style: "toolbutton"}); // b
            //infoGrp.btnClose.preferredSize=[20,20];
            //infoGrp.btnClose.alignment=["right",""];




            //app.beginUndoGroup("select");

                try{
                    var myComp = app.project.activeItem;
                    var seLayers=myComp.selectedLayers;
                    var child = new Array;
                    for(i=0 ; i<seLayers.length ; i++)
                    {child[i]= seLayers[i]}

                    infoGrp.nobreak.text="child nums : "+seLayers.length;
                   }catch(err){
                       //alert("select at least one layer.")
                       infoGrp.nobreak.text="no layer selected";
                       btnGrp.button.enabled=false;
                        btnGrp.btnParentChain.enabled=false;
                        btnGrp.btnFirstP.enabled=false;
                        btnGrp.btnLastP.enabled=false;
                        btnGrp.btnUnparent.enabled=false;
                   }




            w.spacing=5;
            w.margins=5;
            btnGrp.spacing=0;
            btnGrp.orientation="column";
            btnGrp.alignChildren = ["fill","fill"];
            infoGrp.alignChildren = ["fill","fill"];




            btnGrp.button.onClick = function(){
                var keyState = ScriptUI.environment.keyboardState;  
                if (keyState.shiftKey){  parent_n_MoveToParent(child)}   
                else{
                setParent(child);
                }
                w.close();
            }
            btnGrp.btnParentChain.onClick = function(){parentChain(); w.close();}
            btnGrp.btnFirstP.onClick = function(){ firstLayerAsParent(); w.close();}
            btnGrp.btnLastP.onClick = function(){ lastLayerAsParent(); w.close();}
            btnGrp.btnUnparent.onClick = function(){unParent(); w.close();}

            //infoGrp.btnClose.onClick=function(){w.close();}

            btnGrp.button.addEventListener ("mousedown", function (k) {whatsup (k,w);});


            function whatsup (p,w)
            {
            //if (p.button == 2) {$.writeln ("Right-button clicked.")}
            //if (p.altKey) {$.writeln ("Alt key pressed.")}
            //$.writeln ("X: " + p.screenX);
            //$.writeln ("Y: " + p.screenY);
                    if (p.button == 2){
                        var pos = new Array();
                        pos[0]= p.screenX;
                        pos[1] = p.screenY;

                        //createMenu(pos,w);


                    }
            }


            w.onShow;
            w.show();

            }
            function setParent(child) {

            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            Parent=myComp.selectedLayers[0];
            for(i=0; i<child.length ; i++){

            if(Parent.parent != null){
               if(Parent.parent ==child[i])
               continue;
               }
            child[i].parent=Parent;
            }

            app.endUndoGroup();

            }

            //==================
            function createMenu(pos,win){


            var w = new Window ("palette", undefined, undefined, {borderless: true});
            //var w = new Window ("palette");
            w.location =pos;
            w.margins = 0;
            w.spacing = 0;
            w.alignChildren = ['fill', 'fill'];
            //var edit = w.add ("edittext");
            var grp_chain = w.add("group");
            var grp_insertP= w.add("group");
            var grp_divid = w.add("group");
            var grp_pAbove = w.add("group");
            var grp_pBelow = w.add("group");
            var grp_divid3 = w.add("group");
            var grp_selP = w.add("group");
            var grp_selC = w.add("group");
            var grp_divid2 = w.add("group");
            var grp_esc = w.add("group");

            grp_chain.spacing =grp_selP.spacing = grp_selC.spacing= grp_esc.spacing =grp_divid.spacing = grp_divid2.spacing  = 0;
            grp_divid3.spacing  = 0;
            grp_pAbove.spacing  = 0;
            grp_pBelow.spacing  = 0;
            grp_insertP.spacing  = 0;
            grp_chain.alignChildren = grp_selP.alignChildren = grp_selC.alignChildren= grp_esc.alignChildren =grp_divid.alignChildren =grp_divid2.alignChildren =  ['fill', 'fill'];
            grp_divid3.alignChildren =  ['fill', 'fill'];
            grp_pAbove.alignChildren =  ['fill', 'fill'];
            grp_pBelow.alignChildren =  ['fill', 'fill'];
            grp_insertP.alignChildren =  ['fill', 'fill'];

            //var img_chain = grp_chain.add ("image", undefined, binChain);
            var btn_chain = grp_chain.add ("button", undefined, "Parent Chain");
            var btn_insertP = grp_insertP.add ("button", undefined, "Insert Parent");

            var btn_divide = grp_divid.add ("button", undefined, "----------------");
            btn_divide.preferredSize.height = 5;
            btn_divide.enabled = false;



            var btn_pAbove = grp_pAbove.add ("button", undefined, "Parent Above");
            var btn_pBelow = grp_pBelow.add ("button", undefined, "Parent Below");

            /*
            //var img_selP = grp_selP.add ("image", undefined, binSelP);
            var btn_selP = grp_selP.add ("button", undefined, "Select Parent");

            //var img_selC = grp_selC.add ("image", undefined, binSelC);
            var btn_selC = grp_selC.add ("button", undefined, "Select Children");


            var btn_divide3 = grp_divid3.add ("button", undefined, "----------------");
            btn_divide3.preferredSize.height = 5;
            btn_divide3.enabled = false;
            */

            //var img_esc = grp_esc.add ("image", undefined, binEsc);


            btn_chain.preferredSize.height = 30;
            /*
            btn_selP.preferredSize.height = 30;
            btn_selC.preferredSize.height = 30;
            */


            btn_chain.onClick = function(){parentChain() ; w.close();win.close();}

            btn_insertP.onClick = function(){insertParent() ; w.close();win.close();}

            btn_pAbove.onClick = function(){parentAbove(); w.close();win.close();}

            btn_pBelow.onClick = function(){parentBelow(); w.close();win.close();}

            /*
            btn_selP.onClick = function(){ selParent() ; w.close();win.close();}

            btn_selC.onClick = function(){w.close();win.close();}
            */

            //edit.active = true;
            //edit.characters = 30;

             w.addEventListener("blur", function() {
                        w.hide();
                    });

                    w.onDeactivate = function() {
                      w.hide();
                    }

                    w.addEventListener("keydown", function(event) {
                      w.hide();
                    });


            function pressed (k)
            {
            //alert(k.keyName +"  |  " + k.keyIdentifier);

            //$.writeln (k.shiftKey ? "Shift pressed" : "Shift not pressed");
            //$.writeln (k.altKey ? "Alt pressed" : "Alt not pressed");
            //$.writeln (k.ctrlKey ? "Ctrl pressed" : "Ctrl not pressed");
            }
            w.show ();

            }

            //===========================
            function parentAbove(){
                app.beginUndoGroup("select");
                myComp = app.project.activeItem;
                seLayers=myComp.selectedLayers;
                //alert(seLayers[0].parent);
                for(i=0 ; i<seLayers.length ; i++){

                    if(seLayers[i].index != 1){
                        seLayers[i].parent = myComp.layer(seLayers[i].index -1);
                        }   
                  }
                //myComp.layer(child[i]).parent=Parent;
                app.endUndoGroup();

                }
            function parentBelow(){
                app.beginUndoGroup("select");
                myComp = app.project.activeItem;
                seLayers=myComp.selectedLayers;
                //alert(seLayers[0].parent);
                for(i=0 ; i<seLayers.length ; i++){

                    if(seLayers[i].index != myComp.layers.length){
                        seLayers[i].parent = myComp.layer(seLayers[i].index +1);
                        }   
                  }
                //myComp.layer(child[i]).parent=Parent;
                app.endUndoGroup();

                }

            function parentChain(){
                app.beginUndoGroup("select");
                myComp = app.project.activeItem;
                seLayers=myComp.selectedLayers;
                //alert(seLayers[0].parent);
                for(i=0 ; i<seLayers.length-1 ; i++){
                    seLayers[i].parent = seLayers[i+1];
                  }
                //myComp.layer(child[i]).parent=Parent;
                app.endUndoGroup();

                }

            function insertParent(){
                app.beginUndoGroup("select");

                myComp = app.project.activeItem;
                seLayers=myComp.selectedLayers;
                //alert(seLayers[0].parent);
                for(i=0 ; i<seLayers.length ; i++){
                    if(seLayers[i].parent !== null){
                        var N=myComp.layers.addNull();
                        N.source.width=50;
                        N.source.height=50;
                        N.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([25,25]);

                        var C =seLayers[i];
                        var P =seLayers[i].parent;
                        N.name ="Ctrl_"+C.name;
                        N.moveBefore(C);
                        N.guideLayer = true;

                        C.parent = null;

                        var C_curPos= seLayers[i].property("ADBE Transform Group").property("ADBE Position").value;
                        //alert(C_curPos);
                        N.property("ADBE Transform Group").property("ADBE Position").setValue(C_curPos);
                         C.parent =N;
                         N.parent =P;
                        }else{
                            var N=myComp.layers.addNull();
                            N.source.width=50;
                            N.source.height=50;
                            N.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([25,25]);
                            var C =seLayers[i];
                            N.name ="Ctrl_"+C.name;
                            N.moveBefore(C);
                            N.guideLayer = true;
                            var C_curPos= seLayers[i].property("ADBE Transform Group").property("ADBE Position").value;
                            //alert(C_curPos);
                            N.property("ADBE Transform Group").property("ADBE Position").setValue(C_curPos);
                            C.parent =N;

                            }
                    //seLayers[i].parent = seLayers[i+1];
                  }
                //myComp.layer(child[i]).parent=Parent;

                app.endUndoGroup();

                }

            //=======================
            function selParent(){
                 app.beginUndoGroup("select");

                myComp = app.project.activeItem;
                var seLayers=myComp.selectedLayers;
                var parents =new Array();
                 for(i=0 ; i<seLayers.length ; i++){
                    if(seLayers[i].parent !== null){    parents.push(seLayers[i].parent);  }     
                    seLayers[i].selected =false;
                    }
                for(j=0 ; j<parents.length ; j++){
                    parents[j].selected =true;
                        }



                 app.endUndoGroup();

                }
            //===========================

            function parent_n_MoveToParent(child) {

            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            Parent=myComp.selectedLayers[0];
            for(i=0; i<child.length ; i++){
                child[i].parent = null; 

                if(Parent.parent !== null){
                    if(Parent.parent !== child[i]){
                        child[i].parent = Parent.parent;
                        }else{break;}//!== child
                   } //!== null
                var P_curPos= Parent.property("ADBE Transform Group").property("ADBE Position").value;
                child[i].property("ADBE Transform Group").property("ADBE Position").setValue(P_curPos);
                child[i].parent = Parent; 



                   }//end for
              app.endUndoGroup();
            }

            //===========================
            function parentAbove(){

            app.beginUndoGroup("Parent Selected to Above");

            var thisComp = app.project.activeItem;

            for (var i = 0; i < thisComp.selectedLayers.length; i++){
                curLayer = thisComp.selectedLayers[i];
                curLayer.parent = thisComp.layer(curLayer.index-1);
            }

            app.endUndoGroup();

            }

            function unParent(){

                app.beginUndoGroup("unParent selected layers");

                var thisComp = app.project.activeItem;

                for (var i = 0; i < thisComp.selectedLayers.length; i++){
                    var curLayer = thisComp.selectedLayers[i];
                    curLayer.parent =null;
                }

                app.endUndoGroup();

            }
        
            function firstLayerAsParent(){
                app.beginUndoGroup("Use first selected layer as parent");

                var thisComp = app.project.activeItem;
                var parent = thisComp.selectedLayers[0];
                for (var i = 1; i < thisComp.selectedLayers.length; i++){
                    var curLayer = thisComp.selectedLayers[i];
                    curLayer.parent =parent;
                }

                app.endUndoGroup();
                
            }
            function lastLayerAsParent(){
                app.beginUndoGroup("Use last selected layer as parent");

                var thisComp = app.project.activeItem;
                var parent = thisComp.selectedLayers[thisComp.selectedLayers.length-1];
                for (var i = 0; i < thisComp.selectedLayers.length-1; i++){
                    var curLayer = thisComp.selectedLayers[i];
                    curLayer.parent =parent;
                }

                app.endUndoGroup();
                
            }

//********** fool parent end *********************//
			//--------------------------------------//
//********** fool paste *********************//
			function runFoolPaste(){
				//#targetengine miscellaneous;
				var lightGray = HexToRGB("#393939");
				var white =HexToRGB("#EEEEEE");
				var yellow = HexToRGB("#FFBC65");
				var red= HexToRGB("#AC4C5E");
				var purple =HexToRGB("#5C476F");

				var w = new Window ('palette');
				w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,red );
				w.margins = 0;
				w.margins.top = 5;

				var allGrp = w.add ("group");
				allGrp.spacing =10;
				allGrp.margins = 10;
				allGrp.orientation = 'row';
				allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,lightGray );

				allGrp.infoTxt = allGrp.add ('statictext {text: "", characters: 8, justify: "center"}');
                
                var btnGrp = allGrp.add ("group");
                btnGrp.orientation ="column";
                btnGrp.spacing =5;
                
				btnGrp.setBtnAbove = btnGrp.add ("button", undefined, "paste above");
				btnGrp.setBtnBelow = btnGrp.add ("button", undefined, "paste below");
				//allGrp.setBtn.helpTip = "Right click for more mode :)";
                
                btnGrp.setBtnAbove.preferredSize[0]=90;
                btnGrp.setBtnBelow.preferredSize[0]=90;
				
				var myComp = app.project.activeItem;
				if(myComp !==null){
					
					var seLayers=myComp.selectedLayers;
					//alert("select layer first.");
					//alert(seLayers);
					//app.beginUndoGroup("select");
					allGrp.infoTxt.text="nums : "+seLayers.length;

					var child = [];
					for(var i=0 ; i<seLayers.length ; i++){
						child[i]= seLayers[i]; 
					}
				}else{
					alert("no active comp");
				}
				


				btnGrp.setBtnAbove.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
					//if (keyState.shiftKey){  parent_n_MoveToParent(child); }
					moveLayer(child,"above");
					
					w.close();
				};
                btnGrp.setBtnBelow.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
					//if (keyState.shiftKey){  parent_n_MoveToParent(child); }
					moveLayer(child,"below");
					
					w.close();
				};


				//allGrp.setBtn.addEventListener ("mousedown", function (k) {whatsup (k,w);});

				w.addEventListener ("keydown", function (kd) {pressed (kd);});

				function pressed (k){

					if(k.keyName == "Escape"){
						w.close();
					}
				}

				function whatsup (p,w)	{
				//if (p.button == 2) {$.writeln ("Right-button clicked.")}
				//if (p.altKey) {$.writeln ("Alt key pressed.")}
				//$.writeln ("X: " + p.screenX);
				//$.writeln ("Y: " + p.screenY);
						if (p.button == 2){
							var pos = [];
							pos[0]= p.screenX;
							pos[1] = p.screenY;

							//createFoolParentMenu(pos,w);


						}
				}


				//w.onShow;
				w.show();

			}
			function moveLayer(child,mode){
				app.beginUndoGroup("move layer");
				var myComp = app.project.activeItem;
				var targetLayer=myComp.selectedLayers[0];
				
				
				child = child.sort(function (a, b) {
				 return a.index > b.index ? 1 : -1;
				});
				
				
                    if(mode =="above"){
                        for(var i=0; i<child.length ; i++){
                        child[i].moveBefore(targetLayer);
                        }
                            
                    }else{
                        for(var j=child.length-1; j>=0 ; j--){
                        child[j].moveAfter(targetLayer);
                        }
                    }
					
				

				app.endUndoGroup();
			}
//********** fool parent *********************//
             
			//add pathKey
			function addPathKey(JsonSettingObj){
				var keyState = ScriptUI.environment.keyboardState;
				if (keyState.ctrlKey){
					//createStrokeMenu();
				}else{
                    try{
                        app.beginUndoGroup("Add key at current time");
                        AddKeyForProp("ADBE Vector Shape");
                        if(JsonSettingObj.prefs_AddMaskPathKey==true ){
                            AddKeyForProp("ADBE Mask Shape");
                        }
                        
                    }catch(err){
                        alert(err);
                    }finally{
                       app.endUndoGroup(); 
                    }
					
				}

				function createStrokeMenu(){

					var mainPalette = new Window ("palette", undefined, undefined, {borderless: false});
					//var w = new Window ("palette");
					//mainPalette.location =pos;
					mainPalette.margins = 0;
					mainPalette.spacing = 0;
					mainPalette.alignChildren = ['fill', 'fill'];
					//var edit = w.add ("edittext");
					var grp_chain = mainPalette.add("group");


					grp_chain.spacing = 0;
					grp_chain.alignChildren = ['fill', 'fill'];
					grp_chain.orientation = "column";

					//----color----------------
					var  btnFillColor =grp_chain.add ("button", undefined, "Fill Color");
					var  btnStrokeColor =grp_chain.add ("button", undefined, "Stroke Color");

					//----trim--------------
					var  divide =grp_chain.add ("button", undefined, "---------------");
					divide.enabled=false;
					var  btnTrimEnd =grp_chain.add ("button", undefined, "Trim end");

					//----shape transform---------------
					var  divide2 =grp_chain.add ("button", undefined, "---------------");
					divide2.enabled=false;
					var  btnVectorPosition =grp_chain.add ("button", undefined, "Shape's position");





					btnFillColor.preferredSize.height = 30;
					var divideHeight =8;
					divide.preferredSize.height = divideHeight;
					divide2.preferredSize.height = divideHeight;


				   //================================

					//==============================

					btnFillColor.onClick = function(){
						AddKeyForProp("ADBE Vector Fill Color");
						mainPalette.hide();
						};//onClick

					btnStrokeColor.onClick = function(){
						AddKeyForProp("ADBE Vector Stroke Color");
						mainPalette.hide();
						};//onClick

					btnTrimEnd.onClick = function(){
						AddKeyForProp("ADBE Vector Trim End");
						mainPalette.hide();
						};//onClick

					btnVectorPosition.onClick = function(){
						AddKeyForProp("ADBE Vector Position");
						mainPalette.hide();
						};//onClick




					//edit.active = true;
					//edit.characters = 30;
					/*
					w.addEventListener ("keydown", function (ola) {pressed (ola)});
					function pressed (k)
					{
					//alert(k.keyName +"  |  " + k.keyIdentifier);

					//$.writeln (k.shiftKey ? "Shift pressed" : "Shift not pressed");
					//$.writeln (k.altKey ? "Alt pressed" : "Alt not pressed");
					//$.writeln (k.ctrlKey ? "Ctrl pressed" : "Ctrl not pressed");
					}
					*/


						//------------------------------//
					//mainPalette.location =pos;
					mainPalette.layout.layout(true);
					mainPalette.layout.resize();
					mainPalette.onResize = function () {alert("?");mainPalette.layout.resize();};
					mainPalette.show();


					}

				function AddKeyForProp(PropName){

					function findSelGrp(seLayer){
						var selectedProps = seLayer.selectedProperties;
						for(var x=0 ; x<selectedProps.length ; x++){
							var prop=selectedProps[x];
							if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)){
								pathData.selGrp.push(prop);
							}

						}

					}//end findSelGrp

					function scanPropGroupProperties(propGroup){
						   //mode 0 =only scan prop
						   //mode 1 = scan and add key

							var  prop,join;
							// Iterate over the specified property group's properties
							for (var i=1; i<=propGroup.numProperties; i++)
							{
								prop = propGroup.property(i);
								if (prop.propertyType === PropertyType.PROPERTY)    // Found a property
								{
									// Found a property
									// FYI: layer markers have a prop.matchName = "ADBE Marker"

											if(prop.matchName  === PropName){
												//alert(prop.parentProperty.parentProperty.parentProperty.name);
													prop.setValueAtTime(curTime, prop.value) ;


											}
									//alert(prop.name);
									   // prop.selected = true;
								}
								else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP))
								{
									// Found an indexed or named group, so check its nested properties

											scanPropGroupProperties(prop);
								}
							}

						}// end function


					//app.beginUndoGroup("Add key at current time");
					var myComp = app.project.activeItem;
					var seLayers=myComp.selectedLayers;
					var curTime =app.project.activeItem.time;
					for(var m=0 ; m<seLayers.length ; m++){
						var pathData = {};
						pathData.selGrp = [];
						pathData.allPathProp = [];
                       
						//if (seLayers[m] instanceof ShapeLayer){
						if (true){
							findSelGrp(seLayers[m]);
							//scanPropGroupProperties(seLayers[i].property("ADBE Root Vectors Group"));
							if(pathData.selGrp.length ===0){
                                if (seLayers[m] instanceof ShapeLayer){
                                    if(PropName =="ADBE Vector Shape"){
                                      scanPropGroupProperties(seLayers[m].property("ADBE Root Vectors Group"));  
                                    }
                                }
								
                                if(PropName =="ADBE Mask Shape"){
                                    scanPropGroupProperties(seLayers[m].property("ADBE Mask Parade"));
                                }
								
							}else{
								for(var k=0 ; k<pathData.selGrp.length ; k++){
									scanPropGroupProperties(pathData.selGrp[k]);
								}
							}
						}
					}
					//app.endUndoGroup();
				}

			}
			//--------------------------------------//
			function reverseLayerOrder(){
				
				app.beginUndoGroup("reverse layer order");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;
				var idx=[];
				for(var i=0 ; i<seLayers.length ; i++){
					idx[i]=seLayers[i].index;
				}
				idx.sort(function(a, b){return a-b;});
				for(var j=0 ; j<Math.floor(idx.length/2); j++){
					var end=idx.length-1;
					if(idx[j] !== idx[end-j] ){
						myComp.layer(idx[j]).moveAfter(myComp.layer(idx[end-j]) );
					}
					if(idx[end-j]-1 !==idx[j]){
						myComp.layer(idx[end-j]-1).moveBefore(myComp.layer(idx[j]) );
					}


				}//end for loop
				app.endUndoGroup();
			}
			//--------------------------------------//
			function setLinearInter(){
				
				app.beginUndoGroup("Linear Spatial Interpolation");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;
				for(var k=0; k<seLayers.length ; k++){
					var selProps=seLayers[k].selectedProperties;
					for(var j=0 ; j<selProps.length ; j++){
						if(selProps[j].propertyValueType ==PropertyValueType.ThreeD_SPATIAL){
							if(selProps[j].numKeys!== 0){
								var selKeys=selProps[j].selectedKeys;
								for(var i=0 ; i<selKeys.length ; i++){
									//selProps[j].setSpatialTangentsAtKey(selKeys[i], selProps[j].keyInSpatialTangent(selKeys[i]), [0,0,0])
									selProps[j].setSpatialTangentsAtKey(selKeys[i],[0,0,0], [0,0,0]);
								}//end key loop
							}//end if-else
						}

					}//end props loop
				}//end layers loop

				app.endUndoGroup();
			}
			//--------------------------------------//
			//--------------------------------------//
			function createShape(shapeType){
				
				app.beginUndoGroup("create shape");
				var myComp = app.project.activeItem;
				if(myComp !==null){
					var shapeLayer = myComp.layers.addShape();
					var stroke;
					var grp, path,myShape,shape;
					switch(shapeType){
						case "square" :

								shapeLayer.name="square";
								grp =shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
								shape=grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
								shape.property("ADBE Vector Rect Size").selected =true;
								shape.property("ADBE Vector Rect Size").setValue([myComp.width*0.25,myComp.width*0.25]);
								stroke =grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
								break;

						case "ellipse" :

								shapeLayer.name="ellipse";
								grp =shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
								shape=grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
								shape.property("ADBE Vector Ellipse Size").setValue([myComp.width*0.25,myComp.width*0.25]);
								stroke =grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
								break;

						case "hrLine":

								shapeLayer.name="hr";
								myShape = new Shape();
								myShape.vertices = [[0,0], [myComp.width*0.5,0]];
								grp =shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
								path=grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
								path.property("ADBE Vector Shape").setValue(myShape);
								stroke =grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
								break;

						case "vrLine":

								shapeLayer.name="hr";
								myShape = new Shape();
								myShape.vertices = [[0,0], [0,myComp.height*0.5]];
								grp =shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
								path=grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
								path.property("ADBE Vector Shape").setValue(myShape);
								stroke =grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
								break;

					}//end switch
					stroke.property("ADBE Vector Stroke Color").setValue([0,0,0]);
					stroke.property("ADBE Vector Stroke Width").setValue(5);
					var trim =shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
					trim.property("ADBE Vector Trim End").addKey(myComp.time);
					/*
					//add trim key
					trim.property("ADBE Vector Trim End").addKey(myComp.time+myComp.frameDuration*10);
					trim.property("ADBE Vector Trim End").setValueAtKey(1,0);
					trim.property("ADBE Vector Trim End").setValueAtKey(2,100);
					var easeIn  = new KeyframeEase(0, 100);
					var easeOut  = new KeyframeEase(0, 0.1);
					//var inTan =trim.property("ADBE Vector Trim End").keyInTemporalEase(2)
					var outTan =trim.property("ADBE Vector Trim End").keyOutTemporalEase(2);
					trim.property("ADBE Vector Trim End").setTemporalEaseAtKey(1, [easeIn], [easeIn]);
					trim.property("ADBE Vector Trim End").setTemporalEaseAtKey(2, [easeOut], [easeOut]);
					*/



				}
				app.endUndoGroup();
			}
			//--------------------------------------//
			function selectLastLayer(){
				
				app.beginUndoGroup("Select Last Layer");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;
				var allLayers =myComp.layers;
				for(var i=0 ; i<seLayers.length ; i++){
					seLayers[i].selected =false;
				}

				myComp.layer(allLayers.length).selected = true;
				app.endUndoGroup();
			}
			//--------------------------------------//
			function differenceMode(){		
				app.beginUndoGroup("BlendingMode DIFFERENCE");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;
				for(var i=0;i<seLayers.length;i++){
					SetDiffer(seLayers[i],myComp);
				}
				function SetDiffer(seLayers,myComp){
				seLayers.blendingMode =(seLayers.blendingMode !==BlendingMode.DIFFERENCE)?BlendingMode.DIFFERENCE : BlendingMode.NORMAL;
				}

				app.endUndoGroup();
			}
			//--------------------------------------//
			function setInfluence(type,influ){
				
				app.beginUndoGroup("Ease");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;
				for(var k=0; k<seLayers.length ; k++){
					var selProps=seLayers[k].selectedProperties;
					for(var j=0 ; j<selProps.length ; j++){
						if(selProps[j].propertyType !==PropertyType.PROPERTY) continue;
						if(selProps[j].numKeys !==0){
							//if(AllLayerKeyData[x][y] ===null ||AllLayerKeyData[x][y] ===undefined ) continue;

							var chk=0;
							if( selProps[j].propertyValueType == PropertyValueType.ThreeD ){
								chk=3;
							}else if( selProps[j].propertyValueType== PropertyValueType.TwoD ){
								chk=2;
							}else if(selProps[j].propertyValueType ==PropertyValueType.OneD || selProps[j].propertyValueType == PropertyValueType.TwoD_SPATIAL|| selProps[j].propertyValueType == PropertyValueType.ThreeD_SPATIAL || selProps[j].propertyValueType ==PropertyValueType.SHAPE  || selProps[j].propertyValueType ==PropertyValueType.COLOR || selProps[j].propertyValueType ==PropertyValueType.CUSTOM_VALUE){
								chk=1;
							}
							var selKeys=selProps[j].selectedKeys;
							//////////////////////////////////////////
							if(isNaN(influ))influ =0.1;
							if(influ ==="")influ =0.1;
							//////////////////////////////////////////
							var ease = new KeyframeEase(0,influ);
							for(var i=0 ; i<selKeys.length ; i++){
								var easeOut=selProps[j].keyOutTemporalEase(selKeys[i]);
								var easeIn=selProps[j].keyInTemporalEase(selKeys[i]);
								if(type == "in"){
									if(chk==3){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease,ease,ease],easeOut);
									}else if(chk==2){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease,ease],easeOut);
									}else if(chk==1){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease],easeOut);
									}
								}else if(type =="out"){
									if(chk==3){
										selProps[j].setTemporalEaseAtKey(selKeys[i],easeIn,[ease,ease,ease]);
									}else if(chk==2){
										selProps[j].setTemporalEaseAtKey(selKeys[i],easeIn,[ease,ease]);
									}else if(chk==1){
										selProps[j].setTemporalEaseAtKey(selKeys[i],easeIn,[ease]);
									}
								}else if(type =="inOut"){
									if(chk==3){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease,ease,ease],[ease,ease,ease]);
									}else if(chk==2){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease,ease],[ease,ease]);
									}else if(chk==1){
										selProps[j].setTemporalEaseAtKey(selKeys[i],[ease],[ease]);
									}
								}
							}//end key loop
						}//end if-else
					}//end props loop
				}//end layers loop
				app.endUndoGroup();
			}
//--------------------------------------//
			function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);}
			function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);}
			function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);}
			function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;}
			function HexToRGB(hex) {
				var r=Math.floor(hexToR(hex)*10/255)/10;
				var g=Math.floor(hexToG(hex)*10/255)/10;
				var b=Math.floor(hexToB(hex)*10/255)/10;
				return  [r,g,b,1];
			}
//--------------------------------------//
			function runQuickVal(JsonSettingObj,mode,inputVal){
				
				(function (thisObj) {
                    
                //alert(JsonSettingObj.quickVal_constrain)
				//set default peremeter
				mode = JsonSettingObj.quickVal_constrain || 0;
				inputVal = inputVal || JsonSettingObj.quickVal_preVal;
				//================
				var version = '1.0';
				//================

				// ================ ADD FUNCTIONS HERE =============
				{

					var detect = function  (k , control){
						if (k.button == 2) control.text =10;
					};

					var handle_keyQval = function (key, control,inputText,constarin){

						//app.beginUndoGroup("QucikVal");
						constarin =constarin || 0;
						var orignalInput = inputText.text;
						var keyName=key.keyName;
						//$.sleep(200);

						var input = {'text' : orignalInput , 'xyz' : 0, 'holdShift' : 0, 'holdCtrl' : 0};
						//writeLn("curInput  "+input.text);
						////////////////////////////////////////////
						if( isNaN(input.text)){
							//writeLn("NaN");
							//alert(orignalInput)
							//alert(input.text)

							input.text = input.text.substring(1,input.text.length);
							//writeLn("fixInput  "+input.text);

						}
						////////////////////////////////////////////
						if(key.shiftKey){
							input.text *= 10;
							input.holdShift = 1;
						}else{
							input.holdShift = 0;
						}

						if(key.ctrlKey){
							input.text *= 0.1;
							input.holdCtrl = 1;
						}else{
							input.holdCtrl = 0;
						}

						switch (key.keyName)
						{
							case "Up":
									input.text *=-1;
									input.xyz =1;
									modifyValue(input,constarin);
									break;
							case "W":
									input.text *=-1;
									input.xyz =1;
									modifyValue(input,constarin);
									break;
							//---------------------------------------
							case "Down":
									input.xyz =1;
									modifyValue(input,constarin);
									break;
							case "S":
									input.xyz =1;
									modifyValue(input,constarin);
									break;
							 //---------------------------------------
							case "Left":
									input.text *=-1;
									input.xyz =0;
									modifyValue(input,constarin);
									break;
							case "A":
									input.text *=-1;
									input.xyz =0;
									modifyValue(input,constarin);
									break;
							//---------------------------------------
							case "Right":
									input.xyz =0;
									modifyValue(input,constarin);
									break;

							case "D":
									input.xyz =0;
									modifyValue(input,constarin);
									break;
							//---------------------------------------
							case "Q":
									input.text *=-1;
									input.xyz =2;
									modifyValue(input,constarin);
									break;
							case "E":
									input.xyz =2;
									modifyValue(input,constarin);
									break;
							//---------------------------------------
                            case "C":
                                //input.xyz =2;
                                constarin = !constarin;
                                JsonSettingObj.quickVal_constrain=constarin;
                                var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
                                mainPalette.close();
						        runQuickVal(JsonSettingObj,constarin,inputText.text);
                                //modifyValue(input,constarin);
                                break;
						}
						//var reg=/[^0-9,]/;
						//control.text=control.text.replace(reg,"");

						//control.text =orignalInput;
						//var num_g = control.text.match(/\d+/);
						//writeLn(num_g[0]);
						//control.text =num_g[0];

						control.text = "";
						//app.endUndoGroup();

				}; //end  handle_key
					//----------------
					var chkPropValueType = function (curProp){
						var val =curProp.value;
						if(val !== undefined){
								if(curProp.propertyValueType ==PropertyValueType.OneD){
									//alert("1D");
									return 0;
								}else if(curProp.propertyValueType ==PropertyValueType.TwoD_SPATIAL){
									//alert("2D spatial");//e.g propertyGroup's position
									return 1;
								}else if(curProp.propertyValueType ==PropertyValueType.TwoD){
									//alert("2D"); //e.g propertyGroup's scale
									return 1;
								}else if(curProp.propertyValueType ==PropertyValueType.ThreeD){
									//alert("3D");    //e.g layer's scale
									return 2;
								}else if(curProp.propertyValueType ==PropertyValueType.ThreeD_SPATIAL){
									//alert("3D spatial"); //e.g layer's position
									return 2;
								}else if(curProp.propertyValueType ==PropertyValueType.SHAPE){
									//alert("shape");
									return 3;
								}else{
									return -1;
								}

						}else{
							//alert(curProp.property("ADBE Vector Shape"));
							//alert(curProp.name);


						}

					};//end function
					// main function : judge input and modify mode
					var modifyValue =function (input,constarin){
						//app.beginUndoGroup("QucikVal");

						constarin =constarin || 0;
						var myComp = app.project.activeItem;
						var seLayers=myComp.selectedLayers;
						var inputArr = [];
						var result;
                        try{
                            app.beginUndoGroup("QucikVal");  
                            for(var j=0 ; j<seLayers.length ; j++){
                                var selProps = seLayers[j].selectedProperties;

				                for(var i=0 ; i<selProps.length ; i++){
								var curProp =selProps[i] ;
								var val =selProps[i].value;
								var valType = chkPropValueType(curProp);
								var inputVal =parseFloat(input.text);
								////////////////////////////////////////////
								if( isNaN(input.text)){
									//inputVal = input.text.substring(1,input.text.length);
									//inputVal = parseFloat(inputVal);
								}
								////////////////////////////////////////////
								if(val !== undefined){
									if(constarin ===0){

										switch (input.xyz.toString() ){
											case "0":

												if(valType ===0) {
													result =plusValue(curProp,inputVal);
												}else if(valType ==1 ){
													inputArr = [inputVal,0] ;
													result =plusValue(curProp,inputArr);
												}else if(valType ==2 ){
													inputArr = [inputVal,0,0] ;
													result =plusValue(curProp,inputArr);
												}else if(valType ==3 ){
													inputArr = [inputVal,0] ; //plusVertice(curProp,inputArr,seLayers[j]);
												}      //path
												break;

											case "1":
												if(valType ==1 ){
													inputArr = [0,inputVal] ;
													result =plusValue(curProp,inputArr);
												}else if(valType ==2 ){
													inputArr = [0,inputVal,0] ;
													result =plusValue(curProp,inputArr);
												}else if(valType ==3 ){
													inputArr = [0,inputVal] ; //plusVertice(curProp,inputArr,seLayers[j]);
												}
												break;

											case "2":
												if(valType ==2 ){
													inputArr = [0,0,inputVal] ;
													result =plusValue(curProp,inputArr);
												}
												//else if(valType ==3 )   {moveVerticeGuide(curProp,input,seLayers[j])}
												break;

											case "3":
												break;

										 }//end switch
									 }else{
										if(valType ===0) {
											result =plusValue(curProp,inputVal);
										}else if(valType ==1 ){
											inputArr = [inputVal,inputVal] ;
											result =plusValue(curProp,inputArr);
										}else if(valType ==2 ){
											inputArr = [inputVal,inputVal,inputVal] ;
											result =plusValue(curProp,inputArr);
										}
									 }
									}// val !== undefined
								}//end i loop
							}//end j loop
						
                        }catch(err){
                            
                        }finally{
                            app.endUndoGroup();
                        }
                        
                        
						//app.endUndoGroup();
						//writeLn(result);
					};//end function
					//modify value

					var plusValue = function (curProp,inputVal){

						
							
							var curVal =curProp.value ;
							if(curProp.numKeys === 0){
								//alert(inputVal);
								//alert(curVal );
								//alert(curVal +inputVal);
								if( curProp.hasMax ){
									if(curVal + parseFloat(inputVal) >curProp.maxValue) 	{curProp.setValue(curProp.maxValue) ;   }
									else if(curVal + parseFloat(inputVal)<curProp.minValue)	{curProp.setValue(curProp.minValue) ;   }
									else  curProp.setValue(curVal + parseFloat(inputVal));
									}
								else curProp.setValue(curVal + inputVal);


							}else{//selProps has keys
								 for(var a=0; a<curProp.selectedKeys.length ; a++){

									 if( curProp.hasMax ){
										if(curVal + parseFloat(inputVal) > curProp.maxValue)         { curProp.setValueAtKey( curProp.selectedKeys[a] , curProp.maxValue) ;   }
										else if(curVal + parseFloat(inputVal)< curProp.minValue)    {curProp.setValueAtKey( curProp.selectedKeys[a] , curProp.minValue) ;  }
										else   curProp.setValueAtKey(curProp.selectedKeys[a] , curProp.keyValue(curProp.selectedKeys[a])+  inputVal);
										}
									else{
										//alert( curProp.keyValue(curProp.selectedKeys[a]) + parseFloat(inputVal) )
										//writeLn(inputVal);
										curProp.setValueAtKey(curProp.selectedKeys[a] , (curProp.keyValue(curProp.selectedKeys[a]) +inputVal) );
									}

								}//end a loop
							}// end selProps has keys
							
							
					
					};//end plusValue function
				}
				//==================================================
				//--------icon binary
				
				var binLock = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00FDIDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B5\x01\x0B!\x05\u00D2\u00D2\u00D2\x0EP\u00E6\u0083\u00A7O\u009F> \u00C6PFl.\x05\x1A\u0094\x00\u00A4\n\u0080X\x1FM\u00EA#\x10o\x00\u00E2\x06|\x16\u00A0\x18\n4\u00CC\x00H-\u00C0b\x1860\x11hp\x01^C\u00A1\x06\x1E\x00b~\x12\u0082o!\u00D0\u00E0\x04\u00AC\u0086\x02\r\x14\x00\u0085\x19>\x03\u00C3le\u00C0\x18\x04V\x1D~\x02\u00C6P\u00D0\b4\u00B8\x01Y-\x13\u0094\u009E\u0080\u00CB@>.V\u0086\u00DD-\u00B6\f\u00FD\u00A9\u00FA\fO\u00DE|g\u00E0\x07\u00F2Al\x0Fc\t\u0098\u0092z\u00A0\u00A3\x14P\f\u0085\u00BA2\x1E\u0097\x0B\u00B5\u00E5\u00F9\x18\u008E]\x7F\u00CBP8\u00FB\"C\u00C1\u00AC\u008B\f\u00C1m'\u00C0\u0086\u00C3\\\r\x05\x05\u00E8.u\u00C0e \u00C85\u00A9\u00EE\u008A`Cv\u009C}\t\x16\u00FB\u00F4\u00ED7\u00D8\u00B5\u00C7\u0081\x16!\x01\x07tC\rpyyn\u00BE1\u0083\u00AC\b'CC\u00B4\x16\u00C3\u00A9>'\u00B0\u00F8\u00844}\x06^.\x16\u00A0%/\u0090\u00B5\u00E8\u00E3M\u00FC \u008Dk\u00AB,\x18\u00B4\u00E4\u00F8\u00C0^\x06\u00B9\b$&+\u00CA\u00C5\u00D0\x14\u00A3\u00C5\x10j#\u00C3\u00B0\u00FA\u00C8\x13\u0086\u00C7@\u00D7\x13\u009D\u00A3\u008A\x03U\u00E1\x06\u00F2\u0083]l\u00C7\u00B0\u00F2\u00F0cp\u00D8Zj\b\u0083\r\x04\u0085-\u00A1l\u00FA\x00=\x1C\u00E7\u00EC\u00BC\x0FN2 \x17\u00820(R\x1E\u00BF\u00F9\x06\u00B6\b))!\u0083\u0087\u00E8\u0086\x1E\u0080\u00C74\u00D0\u00852\u00C00\u00FC\u00F4\u00ED\x0F<R@\u0086\x15@\u0083\x01\x0F8\u0080b((\x0F\x03\u0093\u00D5F \u00DB\u00FF\u00EA\u00A3O\f\u009F\u0081\x06z\x18\u008B\u0083\r\u00B4\u00D4\x14fp7\x12\u0087\u0084-\u00FE\u009C\u00B5\x00[\u008E\x02%\u00DE\x0B\u00A0\f\x00r\u00ED\u00BC\x02\x13\u00B0\u008BAI\u00A9w\u00FD-\\^\u0086\u0081\u008D@\u0087\x05\u00E0\u00CA\u00FB\u00A0<<\u009F\u00C4\u00A2\x13\x14c\x0E@C?`\u00CB\u00A6\f@\t\u0090\x17\x12\u00A1\u00C5\x1B1\u00E0 6\x03\u00B1\u0096\u00A7\u00D0\u00A0h\u00C0\u0093u\x1FB\u00CB\u00D3\x05$\x15\u00D2h\u00A5>(\u00C7\t@\u00C3\x1CT\u00FA_ \u00AB\u00E4\u00A7\x14\x00\x04\x18\x00\u008E\u008D\u00DD\u00D7y\u00EB\u00F5:\x00\x00\x00\x00IEND\u00AEB`\u0082";

				var binUnlock ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x15\x00\x00\x00\x15\b\x06\x00\x00\x00\u00A9\x17\u00A5\u0096\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\x15IDATx\u00DA\u00ECT\u00CB\r\u0082@\x14\x04\u00C3]:\u0090\x12\u00B6\x03\u00F5(':P+\x10:\u0080\x0E\u00E8@\u00AC@\u00BD\u00E0\u0095\x12\u00B0\x02\u00B1\x03:\u00C0y\u00C9\u0090l\u00FC\x00\n^\u008C\u009BLX\u00DE[\u00E6\u00CD\u00FB,fUU\u00C6\u00D0kd|a\u00FD\x00i\u009A\u009E<\u00C0\u00E6\u00DE\x17\f\u00A14\x04b\u00EE=\u00A0\x18\u0082t\x06\u00D8\u00DC'@\u00D6\u0095\u00D4\u00BC\x1F)\u00A6\u00B9\x02JQ\u00E8\u00BA\u008B\u0092v\tP\u00FB&\u00C0N2\u0081?oU\u008AC1?\x0EkB.\x07PT\x1C\u00B0$Y'\u00A5\u009AbE\u00F2%pe\u0090D\u00F3\u008B\u00E2-0\u0087=k\u00AD)\t3*\x0B\u00D8\u00A4\x18vG;\u00A6\u00F8|h\u00A0\u00D5@X\u00B0Y\t\u00A7 \u0087\u00A2\u0082\u00C4\u0092\u00C1\x06X\u008B\u00ADK\u00F7\u00FD\u009A\u00905\x15\u0092\u00BD\u00A4\x0FB\tpa\u00B3\"\u00BD\x1Cm\u00A4\u00D2\u0080\u0083\u00D6$!8\u00B2\u00B6\u0092E$\u0081\u00E0\x0F_\u008D\u0094\u00F5$\u00F5\u00B1\u00F6n\u00F3\x12\x14 1\u00FB\u00CC\u00A9\u00D4s\n\u009C\u0099\u00BA\u00C1R\u00E4}n\u0094\u00C7\x14K\u00AAT\u00EF\x106\u00CE\u00E9\u00FF'\u00FD\u00F1\u00BA\t0\x00\u00B2srA\u00F5\u00E4\u008CJ\x00\x00\x00\x00IEND\u00AEB`\u0082";
				

				var imgLock =createResourceFile ("KEYboard_Lock.png", binLock);
				var imgUnLock =createResourceFile ("KEYboard_UnLock.png", binUnlock);

				// _______ UI SETUP _______
				
					// if the script is a Panel, (launched from the 'Window' menu), use it,
					// else (launched via 'File/Scripts/Run script...') create a new window
					// store it in the variable mainPalette
					var AEversion = app.version.substring(0,4);
					var mainPalette;
					if(AEversion <12){
						mainPalette = new Window('palette','quickVal',undefined ,{borderless:false});
					}else{
						mainPalette = new Window('palette','quickVal',undefined ,{borderless:true});
					}

					//var mainPalette = thisObj instanceof Panel ? thisObj : new Window('palette','quickVal',undefined, {resizeable:false,borderless:true});

					//stop if there's no window
					if (mainPalette === null) return;

					// set margins and alignment
					mainPalette.alignChildren = ['fill','fill'];
					mainPalette.margins = 0;
					mainPalette.margins.top = 5;
					mainPalette.spacing = 2;


					var bgColor=HexToRGB("#AC4C5E");
					var lightGray = HexToRGB("#393939");
					mainPalette.graphics.backgroundColor = mainPalette.graphics.newBrush (mainPalette.graphics.BrushType.SOLID_COLOR,bgColor );
				
				//__________________________


				// ============ ADD UI CONTENT HERE =================
				{
					var content = mainPalette.add('group');
					content.graphics.backgroundColor = content.graphics.newBrush (content.graphics.BrushType.SOLID_COLOR,lightGray );
					//content.alignChildren = ['fill','fill'];
					content.orientation = 'row';
					content.margins = 10;
					content.spacing = 8;

					var info =content.add ('statictext {text: "QuickVal ", characters: 6, justify: "center"}');
					var inputText = content.add  ('edittext {text: "10", characters: 3, justify: "left"}');
					var controlText = content.add  ('edittext {text: "10", characters: 3, justify: "center"}');
					inputText.text = inputVal;
					controlText.text = "";
					controlText.active = true;
					inputText.helpTip = "Modify Amount";
					controlText.helpTip = "Active and press down\rW,A,S,D or Arrow Key";
					
					var toggleBtn;
					if(mode===0){ //no constrain
						toggleBtn =content.add ("iconbutton", undefined, imgUnLock,{style: "toolbutton"});
						toggleBtn.onClick = function(){
                            JsonSettingObj.quickVal_constrain=1;
                            var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
							mainPalette.close();
							runQuickVal(JsonSettingObj,1,inputText.text);
						};
					}else{
						toggleBtn =content.add ("iconbutton", undefined, imgLock,{style: "toolbutton"});
						toggleBtn.onClick = function(){
                            JsonSettingObj.quickVal_constrain=0;
                            var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
							mainPalette.close();
							runQuickVal(JsonSettingObj,0,inputText.text);
						};
					}

					toggleBtn.preferredSize = [23,23];
					toggleBtn.helpTip ="Constrain Proportions";


					$.sleep(250);

					inputText.addEventListener ("keyup", function (k) {
						JsonSettingObj.quickVal_preVal = inputText.text;
						var settingJson = createJsonFile ("KEYboard_setting.json", JsonSettingObj);
					},false);

                    
                    var triggerFlag =0;
                    var osName=$.os.substring(0,3);
                    info.text =0;
                    
					controlText.addEventListener ("keydown", function (k) {
                        
                        if(osName =="Mac"){
                            if(k.keyName == "Up" || k.keyName == "Down"|| k.keyName == "Left" || k.keyName == "Right"){
                                triggerFlag++;
                                if(triggerFlag ==2 ){ 
                                //if(true ){ 
                                    handle_keyQval (k, this,inputText,mode);
                                    triggerFlag=0;
                                     info.text =triggerFlag;
                                }
                            }else{
                                handle_keyQval (k, this,inputText,mode);
                            }
                            
                        }else{
                            handle_keyQval (k, this,inputText,mode);
                        }
                        k.stopPropagation();
                     
					},false);
                    
                    /*
                    var down = false;
                    info.text =0;
                    controlText.addEventListener ("keydown", function (k) {
                       if(k.keyName == "Up" || k.keyName == "Down"|| k.keyName == "Left" || k.keyName == "Right"){
                           info.text ++;
                       }
                        handle_keyQval (k, this,inputText,mode);
                        // your magic code here
                    }, false);
                    */
                    

					/////
					//var input = {'text' :  inputText.text*-1 , 'xyz' : 1, 'holdShift' : 0, 'holdCtrl' : 0};
					//writeLn("run QuickVal");
					//modifyValue(input,0);
					/////

					/*******ban hold keydown*************************************
					var down = false;
					controlText.addEventListener ("keydown", function (k) {
						if(down) return;
						down = true;
						handle_key (k, this,inputText,mode);
					},false);

					controlText.addEventListener('keyup', function () {
						down = false;
					}, false);
					************************************************/



					//valX.addEventListener ("click", function (k){detect(k,this); });
					//valX.onEnterKey = function(){boo(this)}

				}
				// ==================================================

				//__________ SHOW UI ___________
				{
					// Set layout, and resize it on resize of the Panel/Window
					mainPalette.layout.layout(true);
					//mainPalette.layout.resize();
					//mainPalette.onResizing = mainPalette.onResize = function () {mainPalette.layout.resize();}
					//if the script is not a Panel (launched from File/Scripts/Run script...) we need to show it
					if (!(mainPalette instanceof Panel)) mainPalette.show();


				}

				//______________________________
					mainPalette.addEventListener("blur", function() {
						//if(AEversion >=12){mainPalette.hide();}
					});
					mainPalette.onDeactivate = function() {
						if(AEversion >=12){mainPalette.hide();}
					};
					mainPalette.addEventListener("keydown", function(event) {
						//mainPalette.hide();
					},false);
			})(this);
			}
			//--------------------------------------//
			function add2Keys(valueA,valueB){
				app.beginUndoGroup("AddPreset");
				var myComp = app.project.activeItem;
				var seLayers=myComp.selectedLayers;

				for(var x=0; x<seLayers.length ; x++){//colect all selected properties

					for(var y=0 ; y<seLayers[x].selectedProperties.length ; y++){
						//skip when select property is propertyGroup
						if(seLayers[x].selectedProperties[y].propertyType  == PropertyType.NAMED_GROUP) continue;

						var selProp =seLayers[x].selectedProperties[y];
						var setValA;
						var setValB;
						var valType=0;
						if(selProp.propertyValueType ==PropertyValueType.OneD){
							setValA=valueA;
							setValB=valueB;
							valType=1;
						}else if(selProp.propertyValueType ==PropertyValueType.TwoD || selProp.propertyValueType ==PropertyValueType.TwoD_SPATIAL){
							//alert("2D spatial");//e.g propertyGroup's position
							setValA=[valueA,valueA];
							setValB=[valueB,valueB];
							valType=2;
						}else if(selProp.propertyValueType ==PropertyValueType.ThreeD ||selProp.propertyValueType ==PropertyValueType.ThreeD_SPATIAL){
							//alert("3D");    //e.g layer's scale
							setValA=[valueA,valueA,valueA];
							setValB=[valueB,valueB,valueB];
							valType=3;
						}
						if(valType >0){

							var haveMaxfor1 = 0;
							var keyA,offsetTime,keyB;

							if(valType ==1){
								if(selProp.hasMax){
									if(selProp.maxValue ==1){
										haveMaxfor1 =1;
									}
								}
							}

							if(haveMaxfor1 ==1){
								keyA = selProp.addKey(myComp.time);
								offsetTime=10*myComp.frameDuration;
								keyB =selProp.addKey(myComp.time+offsetTime);
								if(setValA > setValB){
									selProp.setValueAtKey(keyA , 1);
									selProp.setValueAtKey(keyB , setValB);
								}else{
									selProp.setValueAtKey(keyA , setValA);
									selProp.setValueAtKey(keyB , 1);
								}

							}else{
								keyA = selProp.addKey(myComp.time);
								offsetTime=10*myComp.frameDuration
								keyB =selProp.addKey(myComp.time+offsetTime);
								selProp.setValueAtKey(keyA , setValA);
								selProp.setValueAtKey(keyB , setValB);
							}

							selProp.setSelectedAtKey(keyA, true);
							selProp.setSelectedAtKey(keyB, true);
						}


					}
				}



				app.endUndoGroup();


			}//end add2keys
			//--------------------------------------//

//********** delete setting *********************//
			function deleteSettingTag(){
				
				var sectionTag = "Ola_Keyboard";
				var keyTag1 = "shortcut";
				//var keyTag2 = "trimInIndex" ;
				//var keyTag3 = "trimOutKey";
				//var keyTag4 = "trimOutIndex" ;
				//var keyValue = "I'm only temporary!";

				// Sample save + call
				//app.settings.saveSetting(sectionTag, keyTag, keyValue);

				if (app.settings.haveSetting(sectionTag, keyTag1) === true)
					//alert(app.settings.getSetting(sectionTag, keyTag1));

				// The magic delete
				app.preferences.deletePref("Settings_" + sectionTag, keyTag1);
				//app.preferences.deletePref("Settings_" + sectionTag, keyTag2);
				//app.preferences.deletePref("Settings_" + sectionTag, keyTag3);
				//app.preferences.deletePref("Settings_" + sectionTag, keyTag4);
				app.preferences.saveToDisk();
			}
			//----------
			function getNameOfShortcutsFile () {
				var appVersion,folderPath;
				var prefsSuffix = ".txt";
				var osName=$.os.substring(0,3);
				appVersion = app.version.substring(0,4);
                
				if (osName!== "Mac") {
					// this is Windows
					folderPath = String(Folder.userData) + "/Adobe/After Effects/" + appVersion;

				} else {
					// this is Mac
					if (appVersion < 12.0) prefsSuffix = "";
					folderPath = String(Folder.userData.parent) + "/Preferences/Adobe/After Effects/" +  appVersion;
				}
				folderPath =Folder(folderPath);
				if (folderPath.exists) {
				   var files = folderPath.getFiles();
				   for (var i=0; i < files.length; i++) {
						//var FilenameRegex = "^Adobe After Effects " + appVersion.replace(/\./g,"\\.") + " (Mac|Win) [^\.]*" + prefsSuffix.replace(/\./,"\\.")+"$";
					   var FilenameRegex = "^Adobe After Effects "+ appVersion.replace(/\./g,"\\.") + " (Mac|Win) [^\.]*"+prefsSuffix.replace(/\./,"\\.")+"$";
					   if (files[i].displayName.match(new RegExp (FilenameRegex))){

						   return files[i];
						   break;
					   }

					}
			   }
				return null;
			}
			//----------
			function writePrefs(prefFile,AEFolder,trimSetting){
				//var myComp = app.project.activeItem;

				var textFile =prefFile;
				textFile.copy(textFile.fsName + ".bak");//backup prefs
				//var textFile = File.openDialog("Select a text file to open.", "text:*.txt");
				if (textFile !== null) {
					//alert(trimSetting.inIndex);
					if(trimSetting.inIndex >trimSetting.outIndex ){
						var tmp=trimSetting.inIndex;
						trimSetting.inIndex=trimSetting.outIndex;
						trimSetting.outIndex=tmp;
					}
					var textLines = [];
					textFile.open("r", "TEXT", "????");
					var frontStr=[];	//current sub idx
					var middleStr=[];	//current sub idx
					var backStr=[];	//total subs num
					var findStr1=0;
					var findStr2=0;
					var chkStr1='	"ExecuteScriptMenuItem'+trimSetting.inIndex+'" = ';
					var chkStr2='	"ExecuteScriptMenuItem'+trimSetting.outIndex+'" = ';
					//alert("chkStr1 = "+chkStr1);
					//alert("chkStr2 = "+chkStr2);
					while (!textFile.eof) {
						var txt =textFile.readln();
						if(txt.match(chkStr1) !== null){
							findStr1=1;
							//alert("currentline="+txt);
						}
						if(txt.match(chkStr2) !== null){
							findStr2=1;
							//alert("currentline="+txt);
						}

						if(findStr1===0 && findStr2===0 ){
							frontStr.push(txt);
						}else if(findStr1==1 && findStr2==1){
							backStr.push(txt);
						}else if(findStr1==1 || findStr2==1){

							middleStr.push(txt);
						}



					}
					//alert(frontStr.length+"\r"+middleStr.length+"\r"+backStr.length);
					textFile.close();
					textFile.open("w", "TEXT", "????");
					for(var i=0 ; i<frontStr.length ; i++){
						textFile.writeln(frontStr[i]);
					}
					//textFile.writeln('add once');
					textFile.writeln('	"ExecuteScriptMenuItem'+trimSetting.inIndex+'" = "()"');

					for(var j=0 ; j<middleStr.length-1 ; j++){
						textFile.writeln(middleStr[j]);
					}
					//textFile.writeln('add second');
					textFile.writeln('	"ExecuteScriptMenuItem'+trimSetting.outIndex+'" = "()"');

					for(var k=1 ; k<backStr.length ; k++){
						textFile.writeln(backStr[k]);
					}
					textFile.close();


				}
			}
			//----------
			function overwriteShortcut(){
					var AEversion = app.version.substring(0,4);
					//var AEFolder = Folder ( Folder.userData.absoluteURI + "/Adobe/After Effects/"+AEversion );
					//var osName=$.os.substring(0,3);
					//var textFile,dskPth;
                
                    if(AEversion <15.0){
                        var textFile =getNameOfShortcutsFile ();
					   modify_txt_delete(textFile);
                    }
					
			
				///////
				//writePrefs(textFile,AEFolder,trimSetting);

			}
			//----------
			function modify_txt_delete(prefFile){		
				var myComp = app.project.activeItem;
				var osName=$.os.substring(0,3);
				var AEversion = Number(app.version.substring(0,4));
				var textFile =prefFile;
				var matchStr="";
				var pathname = $.fileName;
				var leafname= pathname.split('\\').pop().split('/').pop();
				var itemIndex = Number(leafname.substring(1,2));
				if(osName =="Mac"){
					if(AEversion >=14 && AEversion <=14.1){
						//for CC 2017.1
						matchStr='	"ExecuteScriptMenuItem0'+(itemIndex)+'" = ';
					}else{
						matchStr='	"ExecuteScriptMenuItem0'+(itemIndex+1)+'" = ';
					}
				}else{
					matchStr='	"ExecuteScriptMenuItem0'+itemIndex+'" = ';
				}
				textFile.copy(textFile.fsName + ".bak");//backup prefs
				//var textFile = File.openDialog("Select a text file to open.", "text:*.txt");
				if (textFile !== null) {

					var textLines =[];
					textFile.open("r", "TEXT", "????");
					var frontStr=[];	//current sub idx
					var backStr=[];	//total subs num
					var chk=0;
					while (!textFile.eof) {
						var txt =textFile.readln();
						if(chk===0){
							frontStr.push(txt);
						}else{
							backStr.push(txt);
						}
						if(txt.match(matchStr) !== null){
							chk=1;
						}


						}
					textFile.close();
					textFile.open("w", "TEXT", "????");
					for(var i=0 ; i<frontStr.length-1 ; i++){
						textFile.writeln(frontStr[i]);
					}
					textFile.writeln(matchStr+'"()"');

					for(var j=0 ; j<backStr.length ; j++){
						textFile.writeln(backStr[j]);
					}
					//alert(frontStr[frontStr.length-1])
					//alert(backStr[0])
					textFile.close();


				}
			}
//********** delete setting  end *********************//
			function applyExpression(btnObj){
						var expressionStr ="";
						var modeSelection = chkMode(btnObj);
						var osName=$.os.substring(0,3);
						if(modeSelection ===0){
							app.beginUndoGroup("Apply Expression");
							var myComp = app.project.activeItem;
							var seLayers=myComp.selectedLayers;

							for(var j=0 ; j<seLayers.length ; j++){
								selProps = seLayers[j].selectedProperties;
								for(var i=0 ; i<selProps.length ; i++){
									var curProp =selProps[i] ;
									if(curProp.canSetExpression ===true){
										curProp.expression = btnObj.expStr;
									}
									//var val =selProps[i].value;
									//var valType = chkPropValueType(curProp);
								}
							}
							app.endUndoGroup();
						}else if(modeSelection ==1){
							//alert("TEST:\r\rscript code is :\r"+btnObj.expStr);
							var scriptStr = btnObj.expStr;
	
							
							eval(scriptStr);

							//var file = new File(expressionStr);
							//file.open("r");
							//eval(file.read());
							//file.close();
						}else if(modeSelection ==2){
							setInfluence("in",btnObj.expStr);
						}else if(modeSelection ==3){
							setInfluence("out",btnObj.expStr);
						}else if(modeSelection ==4){
							setInfluence("inOut",btnObj.expStr);
						}

					}

			function chkMode(btnObj){
				var modeSrt =btnObj.mode;
				var modeSelection = 0;

				if(modeSrt =="expression"){
					modeSelection = 0;
				}else if(modeSrt =="JavaScript"){
					modeSelection = 1;
				}else if(modeSrt =="easeIn"){
					modeSelection = 2;
				}else if(modeSrt =="easeOut"){
					modeSelection = 3;
				}else if(modeSrt =="easeInOut"){
					modeSelection = 4;
				}
				//alert(modeSelection);
				return modeSelection;
			}
        
//v1.1 update--------------------------------------//
			function runNthKeys(){
				//#targetengine miscellaneous;
				var lightGray = HexToRGB("#393939");
				var white =HexToRGB("#EEEEEE");
				var yellow = HexToRGB("#FFBC65");
				var red= HexToRGB("#AC4C5E");
				var purple =HexToRGB("#5C476F");

				var w = new Window ('palette');
				w.graphics.backgroundColor = w.graphics.newBrush (w.graphics.BrushType.SOLID_COLOR,yellow );
				w.margins = 0;
				w.margins.top = 5;

				var allGrp = w.add ("group");
				allGrp.spacing =5;
				allGrp.margins = 10;
				allGrp.orientation = 'row';
				allGrp.graphics.backgroundColor = allGrp.graphics.newBrush (allGrp.graphics.BrushType.SOLID_COLOR,lightGray );

				allGrp.ctrlTxt = allGrp.add ('edittext {text: "", characters: 5, justify: "center"}');
				allGrp.ctrlTxt.active =true;
                
				allGrp.buttonLeftAdd = allGrp.add ("button", undefined, "<<");
				allGrp.buttonRightAdd = allGrp.add ("button", undefined, ">>");
                
                allGrp.buttonRedo = allGrp.add ("button", undefined, "R");
                allGrp.buttonAll = allGrp.add ("button", undefined, "All");

   
                allGrp.buttonLeftAdd.preferredSize[0]=40;
                allGrp.buttonRightAdd.preferredSize[0]=40;
                
                allGrp.buttonRedo.preferredSize[0]=25;
                allGrp.buttonAll.preferredSize[0]=25;

                //allGrp.buttonLeftAdd.helpTip = "Right click for more mode :)";
				//app.beginUndoGroup("select");
				var myComp = app.project.activeItem;
                if(myComp !== null){
					var seLayers=myComp.selectedLayers;
					var selProps;
					var Time =myComp.time;
                    
					var AllLayerKeyData=[];

					for(var i= 0; i<seLayers.length ; i++){
						var propsInALayer=[];
						for(var j=0 ; j<seLayers[i].selectedProperties.length ; j++){
							selProps=seLayers[i].selectedProperties[j];
							propsInALayer.push(collectKeyTime(selProps));
						}
						AllLayerKeyData.push(propsInALayer);
					 }

					//-----------------------------------
					//AllLayerKeyData[0] ==first selLayer
					//AllLayerKeyData[0][1] ==first prop for selProps //start from 1
					//AllLayerKeyData[0][1][0] ==first keyobj for selKey obj //start from 0
					//-----------------------------------

					var closetKey;
                    var diff=0;
                    var smallestDiff=1000000;
					for(var x=0;x<AllLayerKeyData.length ; x++){
						for(var y=0 ; y<AllLayerKeyData[x].length ; y++){
							if(AllLayerKeyData[x][y] ===null ||AllLayerKeyData[x][y] ===undefined ) continue;
							for(var z=0 ; z<AllLayerKeyData[x][y].length ; z++){
								diff = Math.abs(Time - AllLayerKeyData[x][y][z].keyTime);
                                
                                if(diff <=smallestDiff){
                                    //alert(diff);
                                    smallestDiff =diff;
                                    closetKey=AllLayerKeyData[x][y][z];
                                   
                                }
							}
						}
					}
                    var curLeftIndex =closetKey.index;
                    var curRightIndex =closetKey.index;
                    var curIndex =closetKey.index;
                    var numLayers = seLayers.length;
                    
                    var ctrlObj={};
                    ctrlObj.comp=myComp;
                    ctrlObj.closetKey=closetKey.index;
                    ctrlObj.curLeftIndex=closetKey.index;
                    ctrlObj.curRightIndex=closetKey.index;

				    deselectAllKey2(myComp,"deselect");
                    selectNthKey2(myComp,closetKey.index,numLayers,"select");
				}// end if myComp !== null
				//app.endUndoGroup();


				allGrp.buttonLeftAdd.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
                    var chk;
					if (keyState.shiftKey){  
                        curLeftIndex -=1;
                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
                    }else if(keyState.altKey) {
                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"deselect");
                        curLeftIndex+=1;
                        
                    }else{
                        deselectAllKey2(myComp,"deselect");
                        curLeftIndex -=1;
                        curRightIndex =curLeftIndex;
                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
					}
                    
                    
                    
                    
                    if(chk ===false)w.close();
					//w.close();
				};
                allGrp.buttonRightAdd.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
                    var chk;
					if (keyState.shiftKey){  
                        curRightIndex+=1;
                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");
                        
                    }else if(keyState.altKey){
                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"deselect");
                        curRightIndex-=1;
                        
                    }else{
                        deselectAllKey2(myComp,"deselect");
                        curRightIndex+=1;
                        curLeftIndex =curRightIndex;
                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");
					}
                    
                    
                    
                    if(chk ===false)w.close();
					//w.close();
				}; 
                allGrp.buttonRedo.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
					if (keyState.shiftKey){  }
					else{
                        deselectAllKey2(myComp,"deselect");
				        var chk=selectNthKey2(myComp,closetKey.index,numLayers,"select");
                        curIndex = curRightIndex = curLeftIndex =closetKey.index;
                        if(chk ===false)w.close();
					}
					//w.close();
				};
                allGrp.buttonAll.onClick = function(){
					var keyState = ScriptUI.environment.keyboardState;
					if (keyState.shiftKey){  
                    }else{
                        //deselectAllKey2(myComp,"deselect");
                        deselectAllKey2(myComp,"select");
				        //var chk=selectNthKey2(myComp,closetKey.index,numLayers);
                        //curIndex = curRightIndex = curLeftIndex =closetKey.index;
                        //if(chk ==false)w.close();
					}
					//w.close();
				};
                
                var triggerFlag = 0;
                var osName=$.os.substring(0,3);
                allGrp.ctrlTxt.addEventListener ("keyup", function (k) {

                        triggerFlag++;
                    if(osName =="Mac"){
                        if(triggerFlag ==3){    
                            triggerFlag=0;
                            handle_key_NthKeys (k, this,ctrlObj,numLayers);
                        }
                    }else{
                        handle_key_NthKeys (k, this,ctrlObj,numLayers);
                    }
                     
						
                        
					},false);
				allGrp.buttonLeftAdd.addEventListener ("mousedown", function (k) {whatsup (k,w);});
				w.addEventListener ("keydown", function (kd) {pressed (kd);});
                

				function pressed (k){

					if(k.keyName == "Escape"){
						w.close();
					}
				}
				function whatsup (p,w){
				//if (p.button == 2) {$.writeln ("Right-button clicked.")}
				//if (p.altKey) {$.writeln ("Alt key pressed.")}
				//$.writeln ("X: " + p.screenX);
				//$.writeln ("Y: " + p.screenY);
						if (p.button == 2){
							var pos = [];
							pos[0]= p.screenX;
							pos[1] = p.screenY;
						}
				}           
                function selectNthKey2(myComp,index,numLayers,mode){
                    //app.beginUndoGroup("add select");
                    var seLayers=myComp.selectedLayers;
    
                    if(seLayers.length  ==numLayers){
                        for(var m= 0; m<seLayers.length ; m++){
                       
						//var allPropsInALayer=[];
                        if(seLayers[m].selectedProperties.length)
                            for(var n=0 ; n<seLayers[m].selectedProperties.length ; n++){
                                var selProps=seLayers[m].selectedProperties[n];
                                var numKeys=selProps.numKeys;

                                if(selProps.propertyValueType !==PropertyValueType.CUSTOM_VALUE){
                                    if(numKeys >=index && index >0){
                                        if(mode =="select"){
                                            selProps.setSelectedAtKey(index,true);
                                        }else{
                                            selProps.setSelectedAtKey(index,false);
                                        }
                                        
                                    }                                
                                }
						  }//end for-loop
					   }
                        return true;
                    
                    }else{
                       alert("layer nums different") ;
                        return false;
                    }
                    //app.endUndoGroup();
                    
                }            
                function deselectAllKey2(myComp,mode){
                    var seLayers=myComp.selectedLayers;
                    for(var m= 0; m<seLayers.length ; m++){
                       
						//var allPropsInALayer=[];
						for(var n=0 ; n<seLayers[m].selectedProperties.length ; n++){
							var selProps=seLayers[m].selectedProperties[n];
                            var numKeys=selProps.numKeys;
                            //var selKeys=selProps.selectedKeys;
                            //deselectAllKey(selProps);
                            
                            if(selProps.propertyValueType !==PropertyValueType.CUSTOM_VALUE){
                               if(numKeys> 0){
							     for(var i=0 ; i<numKeys ; i++){
                                     if(mode =="deselect"){
                                        selProps.setSelectedAtKey(i+1,false);
                                     }else{
                                        selProps.setSelectedAtKey(i+1,true);
                                     }
								   
								    }//end for loop

							     }     
                            }
						}
					}
                }
                //-------------------------
                function collectKeyTime(propertyInput){
				if( propertyInput instanceof  Property){
					var totalKeys , prop,keyIndexList,selKeys;
					twoDs = PropertyValueType.TwoD_SPATIAL;
					threeDs = PropertyValueType.ThreeD_SPATIAL;

					keyIndexList = [];
					totalKeys = propertyInput.numKeys;
					selKeys=propertyInput.selectedKeys;
					if(propertyInput.propertyValueType !==PropertyValueType.CUSTOM_VALUE){
						if(selKeys.length > 0){
							for(var i=0 ; i<selKeys.length ; i++){
                                
                                keyIndexList[i] ={};
								keyIndexList[i].keyTime = propertyInput.keyTime(selKeys[i]);
								keyIndexList[i].index = selKeys[i];
								//curKeyValue = propertyInput.keyValue(selKeys[i]);
    

								}//end for loop

							return keyIndexList;
							}
						else{ return null; }
					}else{
						return null;
					}


					}//end  instance of
				}//end function
                //----            
				var handle_key_NthKeys = function (key, control,ctrlObj,numLayers){

						//app.beginUndoGroup("QucikVal");
						//constarin =constarin || 0;
						//var orignalInput = inputText.text;
						var keyName=key.keyName;
						//$.sleep(200);

						//var input = {'text' : orignalInput , 'xyz' : 0, 'holdShift' : 0, 'holdCtrl' : 0};
						//writeLn("curInput  "+input.text);
						////////////////////////////////////////////
						//if( isNaN(input.text)){
							//writeLn("NaN");
							//alert(orignalInput)
							//alert(input.text)

							//input.text = input.text.substring(1,input.text.length);
							//writeLn("fixInput  "+input.text);

						//}
						////////////////////////////////////////////
						if(key.shiftKey){
							//input.text *= 10;
							//input.holdShift = 1;
						}else{
							//nput.holdShift = 0;
						}

						if(key.ctrlKey){
							//input.text *= 0.1;
							//input.holdCtrl = 1;
						}else{
							//input.holdCtrl = 0;
						}
                        var chk;
						switch (key.keyName)
						{

							 //---------------------------------------
							case "Left":
                                    if (key.shiftKey){  
                                        curLeftIndex -=1;
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
                                    }else if(key.altKey) {
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"deselect");
                                        curRightIndex-=1;

                                    }else{
                                        deselectAllKey2(myComp,"deselect");
                                        curLeftIndex -=1;
                                        curRightIndex =curLeftIndex;
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
                                    }
									break;
							case "A":
				                    if (key.shiftKey){  
                                        curLeftIndex -=1;
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
                                    }else if(key.altKey) {
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"deselect");
                                        curRightIndex-=1;

                                    }else{
                                        deselectAllKey2(myComp,"deselect");
                                        curLeftIndex -=1;
                                        curRightIndex =curLeftIndex;
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"select");
                                    }
									break;
							//---------------------------------------
							case "Right":
								    if (key.shiftKey){  
                                        curRightIndex+=1;
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");

                                    }else if(key.altKey){
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"deselect");
                                        curLeftIndex+=1;

                                    }else{
                                        deselectAllKey2(myComp,"deselect");
                                        curRightIndex+=1;
                                        curLeftIndex =curRightIndex;
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");
                                    } 
									break;

							case "D":
				                    if (key.shiftKey){  
                                        curRightIndex+=1;
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");

                                    }else if(key.altKey){
                                        chk=selectNthKey2(myComp,curLeftIndex,numLayers,"deselect");
                                        curLeftIndex+=1;

                                    }else{
                                        deselectAllKey2(myComp,"deselect");
                                        curRightIndex+=1;
                                        curLeftIndex =curRightIndex;
                                        chk=selectNthKey2(myComp,curRightIndex,numLayers,"select");
                                    } 
									break;
                            case "Up":
                                deselectAllKey2(myComp,"select");
                                break;
                                
                            case "W":
                                deselectAllKey2(myComp,"select");
                                break;
                            
                            case "Down":
                                deselectAllKey2(myComp,"deselect");
                                chk=selectNthKey2(myComp,closetKey.index,numLayers,"select");
                                curIndex = curRightIndex = curLeftIndex =closetKey.index;
                                break;
                                
                            case "S":
                                deselectAllKey2(myComp,"deselect");
                                chk=selectNthKey2(myComp,closetKey.index,numLayers,"select");
                                curIndex = curRightIndex = curLeftIndex =closetKey.index;
                                break;

							//---------------------------------------
						}
						//var reg=/[^0-9,]/;
						//control.text=control.text.replace(reg,"");

						//control.text =orignalInput;
						//var num_g = control.text.match(/\d+/);
						//writeLn(num_g[0]);
						//control.text =num_g[0];

						control.text = "";
						//app.endUndoGroup();

				}; //end  handle_key
				//w.onShow;
				w.show();

			}
            //--------------------------------------//
            //***alingn selected layers and maintain time offest
            function alignLayers(){
                app.beginUndoGroup("Align Layers");
                var myComp = app.project.activeItem;
                var selayers=myComp.selectedLayers;
                var startTimeArr = [];



                for(var i =0; i<selayers.length; i++){
                    startTimeArr.push(selayers[i].inPoint);
                }
                startTimeArr.sort(function(a, b){return a-b;});
                var minTime = startTimeArr[0];


                for(var j =0; j<selayers.length; j++){
                    selayers[j].startTime = selayers[j].startTime - (minTime-myComp.time);
                }

                app.endUndoGroup();
            }
            //--------------------------------------//


	 }


 }
       

KEYboard_allScript (this);



