cb_trigger(this);



function cb_trigger(thisObj) {
    //Global Varibles 
    var selectedArray;
    var layerMarkerName;
    var newMarker;
    var markerTime;
    var selectedCompsAry;
    var layerIndices;
    var layerName;
    var itemindex;
    var triggerNull;
    var multipleLayersSameName = new Array()
    var selectedLayerIndex;
    var triggerLayerIndex
    var enableLayerMarkerMirroring
    var globalCompIndex
    var globalCompName
    var globalComp
    var compsAry
    var markerNamesAry = new Array();
    var increment
    var stopExecution = false;
    var donotshow = false;
    var triggerNullAdded
    var recordSelectedAry = new Array()
    var commentName
    var activeCompName
    var curSelectedLayer
    var cycle = 0
    var selectedKeysTimeAry = new Array();
    var selectedKeysAry = new Array()
    var highLevelCompItemNum
    var higherLevelCompIndex
    var curProperty = null
    var expressionRetime = "trigger =comp(thisLayer.source.name).layer(\'Trigger'\); var preMarker = 0; if (marker.numKeys > 0){preMarker = marker.nearestKey(time).index;if (marker.key(preMarker).time > time){preMarker--;}}if (preMarker == 0){0}else{var mostRecent = marker.key(preMarker);var layerMarkerName = mostRecent.comment;var tDif = time - mostRecent.time;try{triggerMarker = trigger.marker.key(layerMarkerName);if (trigger.marker.numKeys > triggerMarker.index){offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax = framesToTime(offset) - triggerMarker.time;}else{tDifMax = trigger.outPoint - triggerMarker.time;}tDif = Math.min(tDif, tDifMax);triggerMarker.time + tDif;}catch (err){ try{ for (var i=1; i<=trigger.marker.numKeys; i++){ if(layerMarkerName.toLowerCase() == trigger.marker.key(i).comment.toLowerCase()) {layerMarkerName=trigger.marker.key(i).comment}}triggerMarker = trigger.marker.key(layerMarkerName); if (trigger.marker.numKeys > triggerMarker.index){ offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax =tDifMax = framesToTime(offset) - triggerMarker.time;}else{ tDifMax = trigger.outPoint - triggerMarker.time;} tDif = Math.min(tDif, tDifMax); triggerMarker.time + tDif;}catch (err){0}}}"
    var scriptName = "Trigger";
    var scriptVersion = "1.2";
    var trialUrl = "http://aescripts.com/trigger";
    var helpText = "Frequently Asked Questions:" + '\r' + '\r' + "When you enable 'Generate Triggers on Comp Layers' and click ‘Add Trigger’ while inside a Trigger comp you will be adding layer markers both on the Trigger null and on the precomp’s parent layer, nested in the above composition. Note this applies markers to every instance that a Trigger precomp is present in another composition." + '\r' + '\r' + "How do I add Triggers?" + '\r' + "Add Trigger at Current Time: Select the Trigger Null and set the current time indicator to the desired point in time, select ‘Add Trigger’ and a layer marker will be place on the Trigger null at the point in time." + '\r' + '\r' + "Add Trigger(s) at Layer(s) In Point: Select a layer or multiple layers in your comp and press ‘Add Trigger’. Layer markers will be automatically placed at the in point of each layer with marker names that match layer names." + '\r' + '\r' + "Add Trigger(s) Using Selected Keyframe(s) : Add single or multiple Trigger Add Trigger Select a keyframe or multiple keyframes in a comp, name your layer marker in the Trigger UI panel, and click ‘Add Trigger’. A layer marker will be placed on the Trigger null at each point where a keyframe is selected.";


    var af_settings = {
        // THESE SETTINGS ARE MANDATORY
        scriptName: "Trigger", //This is the name of your product,  best thing to do is to use your global script name variable so they are always in sync
        scriptVersion: "1.2", //just the version number, do not add a v.  best thing to do is to use your global script version variable so they are always in sync
        scriptAuthor: "Casey Baker", // your author name, this will be used in the copyright on the help UI
        scriptURL: "https://aescripts.com/trigger/", //enter the script URL here
        privateNumber: 7647859521583373, // **THIS IS YOUR SCRIPT'S UNIQUE PRIVATE NUMBER** please get this number from the aescripts admin, every product and major version will need a new number
        productSKU: "CBKT-SUL", // this is the products SKU on the site, ie AESLT-SUL

        // HELP UI VARIABLES ////////
        helpText: helpText, //You must include some brief instructions on how the tool works, THIS IS MANDATORY. If you don't use the helpUI function, please include the intructions in your UI somewhere.

        // THESE SETTINGS ARE ALL OPTIONAL
        helpButtons: [  //optional, You can include up to 3 buttons at the bottom of the help UI. They are defined in an array, if you are not using the helpUI function you do not need to include this variable
            //   {name: "Video Tutorial", url: "https://youtu.be/j7Q2bhWSmJk"}, // this object defines the 1st button
            //   {name: "Other Products", url: "http://aescripts.com/authors/joe-author"}, // this would be the second button
            //only define the buttons you want, up to 3 
        ],

        ////// TRIAL ///////
        offerTrial: true, //optional, set to false if you don't want to offer a trial mode, true if you do, defaults to true

        // BETA MODE SETTINGS // optional, you only need to include these if you are using the beta mode
        offerBeta: false, //set to true if you are distributing the script as a beta test, set the expiration date below, defaults to false
        betaStartDate: new Date("Nov 1, 2017"), //Date the beta will start
        betaExpirationDate: new Date("Dec 1, 2017"), //Date the beta should expire in this format: "Dec 1, 2017"
        betaSupportEmail: "info@caseybaker.com", //optional, so that beta testers can contact you directly
    };

    //  include "trial_serializaton_generic_v3_mx.jsx"
    //@include "../Licensing v2/new_keygen/_versions/trial_serializaton_generic_v3_mx.jsx";

    var cbk25 = new a(af_settings);

    if (cbk25.c()) {
        var myPalette = buildUI(thisObj);
        if (myPalette != null && myPalette instanceof Window) {
            myPalette.center();
            myPalette.show();
        }

        function buildUI(thisObj) {

            if (thisObj instanceof Panel) {
                var myPal = thisObj;
            } else {
                var myPal = new Window("palette", af_settings.scriptName + " v" +  af_settings.scriptVersion, undefined, { resizeable: true });
            }

            if (myPal != null) {

                var res =
                    res = "group{\
                  alignment: ['fill','fill'], \
				alignChildren: ['fill','top'], \
                  orientation: 'column', \
                  mytopText: StaticText{text:'Select Comp To Retime',},\
                  retimeBtn: Button{text:'Retime',},\
                  markerName1: EditText{text:'Enter Layer Marker Name'},\
                  addMarkerBtn: Button{text:'Add Trigger'},\
                  buttons: Group {\
                  enableMirror: Checkbox{text:'Generate Triggers on Comp Layer', alignment: ['left','top']}, \
                  helpBtn: Button{text:'?', preferredSize: [30,30], alignment: ['right','top']},\
                       },\
                      },\
                    },\
         }";

                myPal.grp = myPal.add(res);
                // var registration = cbk25("p");
                myPal.grp.buttons.helpBtn.onClick = function () {
                    cbk25.helpUI();
                }

                myPal.grp.addMarkerBtn.onClick = function () {

                    //MakeSureLayer is Selected
                    if (app.project.activeItem == null || app.project.activeItem.selectedLayers[0] == null) {

                        alert("Select a layer to add layer markers")
                        return;
                    }

                    if (app.project.activeItem instanceof CompItem && myPal.grp.buttons.enableMirror.value == false) {
                        stopExecution = false;
                        //Run Function
                        addTriggerNullandTimeRemapping();
                        if (stopExecution == false) {
                            allowMarkeronTriggerComps();
                            AddMarkersOnlyInComp();
                            app.beginUndoGroup("Add Markers")
                            getSelectedKeysandTime();
                        }
                        app.endUndoGroup();
                    }

                    if (myPal.grp.buttons.enableMirror.value == true) {

                        try {
                            stopExecution = false;

                            //MakeSureLayer is Selected
                            if (app.project.activeItem.selectedLayers[0] == null) {

                                alert("Select a layer to add layer markers")
                                return;
                            }

                            //Run Function
                            addTriggerNullandTimeRemapping();

                            if (stopExecution == false) {
                                //Run Function
                                allowMarkeronTriggerComps();
                                //Get Active CompName and Find Item Index
                                globalCompName = app.project.activeItem.name
                                for (var i = 1; i <= app.project.numItems; i++) {
                                    if (app.project.item(i).name == globalCompName && app.project.item(i) instanceof CompItem) {
                                        globalCompIndex = i
                                    }
                                }
                                globalComp = app.project.activeItem.name
                                compsAry = new Array();
                                //Get Comps that Contains Active Layer and Find Layer Index of Active Comp Within HigherLevelComp
                                for (var d = 1; d <= app.project.items.length; d++) {
                                    if (app.project.item(d) instanceof CompItem && app.project.item(d).layer(globalComp) != null) {
                                        higherLevelCompIndex = app.project.item(d).layer(globalComp).index
                                        highLevelCompItemNum = d
                                        compsAry.push(d)
                                    }

                                }
                            }

                            if (compsAry.length == 0 || compsAry == null) {
                                if (donotshow == false) {
                                    popUpWindow();
                                    return;
                                }
                                AddMarkersOnlyInComp();
                            } else {
                                app.beginUndoGroup("Add Markers")
                                for (var j = 0; j < compsAry.length; j++) {
                                    higherLevelCompIndex = app.project.item(compsAry[j]).layer(globalComp).index
                                    highLevelCompItemNum = compsAry[j]
                                    cycle = cycle + 1
                                    for (var y = 1; y <= app.project.item(compsAry[j]).numLayers; y++) {
                                        if (app.project.item(compsAry[j]).layer(y).name == globalComp) {
                                            multipleLayersSameName.push(y)
                                        }
                                    }
                                    addMarkerstoAllComps();
                                    multipleLayersSameName.length = 0
                                }
                                app.endUndoGroup();
                                compsAry.length = 0
                                cycle = 0
                            }
                        } catch (err) {
                            alert(err.message + '\r' + "Error occured at line:" + " " + err.line)
                        }
                    }
                }
                //Retime Interaction
                myPal.grp.retimeBtn.onClick = function () {
                    //MakeSureLayer is Selected
                    if (app.project.activeItem.selectedLayers[0] == null) {

                        alert("Select a layer to add layer markers")
                        return;
                    }
                    if (app.project.activeItem instanceof CompItem) {
                        if (app.project.activeItem.selectedLayers.length == 0) {
                            alert("Select a Composition to Retime!")
                        }
                        checkNameDuplication();
                        app.beginUndoGroup(scriptName);
                        if (app.project.activeItem != null && app.project.activeItem instanceof CompItem) {
                            //Get selected comps index #
                            selectedCompsAry = new Array();
                            for (var i = 0; i < app.project.activeItem.selectedLayers.length; ++i) {
                                selectedCompsAry.push(app.project.activeItem.selectedLayers[i].index)
                            }
                            layerIndices = selectedCompsAry;
                            //Get Name of Selected Layer
                            layerName = app.project.activeItem.layer(layerIndices[0]).name;
                            selectedLayerIndex = app.project.activeItem.selectedLayers[0].index
                            //Get Item number of selected item
                            for (var i = 1; i <= app.project.numItems; i++) {
                                if (app.project.item(i).name == layerName && app.project.item(i) instanceof CompItem) {
                                    itemindex = i
                                }
                            }
                            //Creates Trigger Null within Selecteed Comp     
                            if (app.project.item(itemindex).layer("Trigger") == null) {
                                triggerNull = app.project.item(itemindex).layers.addNull();
                                triggerNull.name = "Trigger"
                                expressionRetime = "trigger =comp(thisLayer.source.name).layer(\'Trigger'\); var preMarker = 0; if (marker.numKeys > 0){preMarker = marker.nearestKey(time).index;if (marker.key(preMarker).time > time){preMarker--;}}if (preMarker == 0){0}else{var mostRecent = marker.key(preMarker);var layerMarkerName = mostRecent.comment;var tDif = time - mostRecent.time;try{triggerMarker = trigger.marker.key(layerMarkerName);if (trigger.marker.numKeys > triggerMarker.index){offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax = framesToTime(offset) - triggerMarker.time;}else{tDifMax = trigger.outPoint - triggerMarker.time;}tDif = Math.min(tDif, tDifMax);triggerMarker.time + tDif;}catch (err){ try{ for (var i=1; i<=trigger.marker.numKeys; i++){ if(layerMarkerName.toLowerCase() == trigger.marker.key(i).comment.toLowerCase()) {layerMarkerName=trigger.marker.key(i).comment}}triggerMarker = trigger.marker.key(layerMarkerName); if (trigger.marker.numKeys > triggerMarker.index){ offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax =tDifMax = framesToTime(offset) - triggerMarker.time;}else{ tDifMax = trigger.outPoint - triggerMarker.time;} tDif = Math.min(tDif, tDifMax); triggerMarker.time + tDif;}catch (err){0}}}"
                                app.project.activeItem.layer(selectedLayerIndex).timeRemapEnabled = true;
                                app.project.activeItem.layer(selectedLayerIndex).property("ADBE Time Remapping").expression = expressionRetime;
                            }
                            expressionRetime = "trigger =comp(thisLayer.source.name).layer(\'Trigger'\); var preMarker = 0; if (marker.numKeys > 0){preMarker = marker.nearestKey(time).index;if (marker.key(preMarker).time > time){preMarker--;}}if (preMarker == 0){0}else{var mostRecent = marker.key(preMarker);var layerMarkerName = mostRecent.comment;var tDif = time - mostRecent.time;try{triggerMarker = trigger.marker.key(layerMarkerName);if (trigger.marker.numKeys > triggerMarker.index){offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax = framesToTime(offset) - triggerMarker.time;}else{tDifMax = trigger.outPoint - triggerMarker.time;}tDif = Math.min(tDif, tDifMax);triggerMarker.time + tDif;}catch (err){ try{ for (var i=1; i<=trigger.marker.numKeys; i++){ if(layerMarkerName.toLowerCase() == trigger.marker.key(i).comment.toLowerCase()) {layerMarkerName=trigger.marker.key(i).comment}}triggerMarker = trigger.marker.key(layerMarkerName); if (trigger.marker.numKeys > triggerMarker.index){ offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax =tDifMax = framesToTime(offset) - triggerMarker.time;}else{ tDifMax = trigger.outPoint - triggerMarker.time;} tDif = Math.min(tDif, tDifMax); triggerMarker.time + tDif;}catch (err){0}}}"
                            app.project.activeItem.layer(selectedLayerIndex).timeRemapEnabled = true;
                            app.project.activeItem.layer(selectedLayerIndex).property("ADBE Time Remapping").expression = expressionRetime;
                        }
                    }
                    app.endUndoGroup()
                }

                //////////////Functions////////////////
                function checkNameDuplication() {
                    var selectedLayerName = app.project.activeItem.selectedLayers[0].name
                    var dupAry = new Array()
                    for (var i = 1; i <= app.project.numItems; i++) {
                        if (app.project.item(i).name == selectedLayerName && app.project.item(i) instanceof CompItem) {
                            dupAry.push(app.project.item(i).name)
                        }
                    }
                    if (dupAry.length > 1) {
                        alert("Multiple Comps Named" + " " + selectedLayerName + " " + "Detected!" + "\r" + "Its best practice to change the source name of the selected comp in your project panel to a unique name (Right Click On Comp > Reveal Layer in Source Project)." + "\r" + "\r" + "Note: Trigger will work with comps that have duplcate names this is just a reminder of best practices.")
                    }
                }

                function addTriggerNullandTimeRemapping() {
                    //Add trigger Null if Non Exsists in Comp   
                    triggerNullAdded = false;
                    recordSelectedAry.length = 0
                    expressionRetime = "trigger =comp(thisLayer.source.name).layer(\'Trigger'\); var preMarker = 0; if (marker.numKeys > 0){preMarker = marker.nearestKey(time).index;if (marker.key(preMarker).time > time){preMarker--;}}if (preMarker == 0){0}else{var mostRecent = marker.key(preMarker);var layerMarkerName = mostRecent.comment;var tDif = time - mostRecent.time;try{triggerMarker = trigger.marker.key(layerMarkerName);if (trigger.marker.numKeys > triggerMarker.index){offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax = framesToTime(offset) - triggerMarker.time;}else{tDifMax = trigger.outPoint - triggerMarker.time;}tDif = Math.min(tDif, tDifMax);triggerMarker.time + tDif;}catch (err){ try{ var i=1; i<=trigger.marker.numKeys; i++){ if(layerMarkerName.toLowerCase() == trigger.marker.key(i).comment.toLowerCase()) {layerMarkerName=trigger.marker.key(i).comment}}triggerMarker = trigger.marker.key(layerMarkerName); if (trigger.marker.numKeys > triggerMarker.index){ offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax =tDifMax = framesToTime(offset) - triggerMarker.time;}else{ tDifMax = trigger.outPoint - triggerMarker.time;} tDif = Math.min(tDif, tDifMax); triggerMarker.time + tDif;}catch (err){0}}}"
                    if (app.project.activeItem.layer(scriptName) == null && app.project.activeItem.selectedLayers[0].timeRemapEnabled != true) {
                        if (confirm('No Trigger null found\rWould you like to add one?\r\rPress "Yes" to add Trigger Null, populate layer makers and make this composition triggerable\r\rPress "No" to add a layer maker only on the selected layer')) {
                            for (var i = 0; i < app.project.activeItem.selectedLayers.length; i++) {
                                recordSelectedAry.push(app.project.activeItem.selectedLayers[i].index)
                            }
                            triggerNull = app.project.activeItem.layers.addNull();
                            triggerNull.name = scriptName
                            triggerNullAdded = true;
                            app.project.activeItem.layer(scriptName).selected = false;
                            for (var t = 0; t < recordSelectedAry.length; t++) {
                                app.project.activeItem.layer(recordSelectedAry[t] + 1).selected = true;
                            }
                            activeCompName = app.project.activeItem.name
                            try {
                                for (var k = 1; k <= app.project.numItems; k++) {
                                    if (app.project.item(k) instanceof CompItem && app.project.item(k).layer(activeCompName) != null) {
                                        for (var g = 1; g <= app.project.item(k).numLayers; g++) {
                                            if (app.project.item(k).layer(g).name == activeCompName) {
                                                var activeCompIndex = app.project.item(k).layer(g).index
                                                expressionRetime = "trigger =comp(thisLayer.source.name).layer(\'Trigger'\); var preMarker = 0; if (marker.numKeys > 0){preMarker = marker.nearestKey(time).index;if (marker.key(preMarker).time > time){preMarker--;}}if (preMarker == 0){0}else{var mostRecent = marker.key(preMarker);var layerMarkerName = mostRecent.comment;var tDif = time - mostRecent.time;try{triggerMarker = trigger.marker.key(layerMarkerName);if (trigger.marker.numKeys > triggerMarker.index){offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax = framesToTime(offset) - triggerMarker.time;}else{tDifMax = trigger.outPoint - triggerMarker.time;}tDif = Math.min(tDif, tDifMax);triggerMarker.time + tDif;}catch (err){ try{ for (var i=1; i<=trigger.marker.numKeys; i++){ if(layerMarkerName.toLowerCase() == trigger.marker.key(i).comment.toLowerCase()) {layerMarkerName=trigger.marker.key(i).comment}}triggerMarker = trigger.marker.key(layerMarkerName); if (trigger.marker.numKeys > triggerMarker.index){ offset= timeToFrames(trigger.marker.key(triggerMarker.index + 1).time)-1; tDifMax =tDifMax = framesToTime(offset) - triggerMarker.time;}else{ tDifMax = trigger.outPoint - triggerMarker.time;} tDif = Math.min(tDif, tDifMax); triggerMarker.time + tDif;}catch (err){0}}}"
                                                app.project.item(k).layer(activeCompIndex).timeRemapEnabled = true;
                                                app.project.item(k).layer(activeCompIndex).property("ADBE Time Remapping").expression = expressionRetime;
                                            }
                                        }
                                    }
                                }
                            } catch (err) { alert("Trigger Null and Marker Added" + '\r' + " Timeremapping expression has not been added to this composition layer, press Retime on this comp from your global comp ") }

                        } else {

                            stopExecution = true;
                            newMarker = new MarkerValue(myPal.grp.markerName1.text);
                            markerTime = app.project.activeItem.layer(app.project.activeItem.selectedLayers[0].index).time
                            app.project.activeItem.layer(app.project.activeItem.selectedLayers[0].index).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                        }
                    }

                }

                //////////////////////////////////////
                function allowMarkeronTriggerComps() {
                    try {
                        //Allow to Add Markers on Trigger Comps
                        if (app.project.activeItem.selectedLayers[0].timeRemapEnabled == true && app.project.activeItem.layer(app.project.activeItem.selectedLayers[0].index).property("ADBE Time Remapping").expression == expressionRetime) {

                            layerMarkerName = myPal.grp.markerName1.text;

                            newMarker = new MarkerValue(layerMarkerName);

                            markerTime = app.project.activeItem.time;

                            //for(var t=1; t<=app.project.activeItem.selectedLayers[0].property("ADBE Marker").numKeys; t++){

                            //commentName=app.project.activeItem.selectedLayers[0].property("ADBE Marker").keyValue(t).comment

                            //if(commentName.toLowerCase() === layerMarkerName.toLowerCase()){

                            //layerMarkerName=layerMarkerName+"_"+t

                            //newMarker= new MarkerValue(layerMarkerName);

                            //}   
                            //}

                            app.project.activeItem.selectedLayers[0].property("ADBE Marker").setValueAtTime(markerTime, newMarker);

                            return;

                        }
                    } catch (err) {

                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)

                    }
                }

                function addMarkersOnSelectedTriggerNullandGlobalComp() {

                    try {
                        //Make Sure Trigger layer is Selected
                        if (app.project.activeItem.selectedLayers[0].name === scriptName) {
                            //Creates Action Markers
                            layerMarkerName = myPal.grp.markerName1.text;
                            triggerLayerIndex = app.project.activeItem.layer(scriptName).index
                            newMarker = new MarkerValue(layerMarkerName);
                            for (var t = 1; t <= app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").numKeys; t++) {
                                commentName = app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").keyValue(t).comment
                                if (commentName.toLowerCase() === layerMarkerName.toLowerCase() && compsAry.length <= 1) {
                                    layerMarkerName = layerMarkerName + "_" + t
                                    newMarker = new MarkerValue(layerMarkerName);
                                }
                            }
                            markerTime = app.project.activeItem.time;
                            app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                            for (var m = 0; m < multipleLayersSameName.length; m++) {
                                app.project.item(highLevelCompItemNum).layer(multipleLayersSameName[m]).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                            }
                        }
                    } catch (err) {
                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)
                    }
                }

                function addMarkersFromSelectedLayers() {
                    try {
                        //IterateUntil compAry is empty
                        //Find selected layers and iterate through
                        for (var i = 0; i < app.project.activeItem.selectedLayers.length; ++i) {
                            selectedLayerIndex = app.project.activeItem.selectedLayers[i].index;
                            //If Trigger Null is Not Selected 
                            if (app.project.activeItem.layer(selectedLayerIndex).name != scriptName && app.project.activeItem.layer(selectedLayerIndex).timeRemapEnabled == false) {
                                layerMarkerName = app.project.activeItem.selectedLayers[i].name
                                newMarker = new MarkerValue(layerMarkerName);
                                triggerLayerIndex = app.project.activeItem.layer("Trigger").index
                                for (var t = 1; t <= app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").numKeys; t++) {
                                    commentName = app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").keyValue(t).comment
                                    if (commentName.toLowerCase() === layerMarkerName.toLowerCase() && compsAry.length <= 1) {
                                        layerMarkerName = layerMarkerName + "_" + t
                                        newMarker = new MarkerValue(layerMarkerName);
                                    }
                                }
                                selectedLayerIndex = app.project.activeItem.selectedLayers[i].index;
                                markerTime = app.project.activeItem.layer(selectedLayerIndex).inPoint
                                if (app.project.activeItem.layer(selectedLayerIndex).selectedProperties == "") {
                                    app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                                    //app.project.item(highLevelCompItemNum).layer(higherLevelCompIndex).property("ADBE Marker").setValueAtTime(markerTime,newMarker);  
                                    for (var m = 0; m < multipleLayersSameName.length; m++) {
                                        app.project.item(highLevelCompItemNum).layer(multipleLayersSameName[m]).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                                    }
                                } else {
                                }
                            }
                        }
                    } catch (err) {
                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)
                    }
                }


                function addMarkerstoAllComps() {
                    try {
                        if (app.project.activeItem.selectedLayers.length == 1 && app.project.activeItem.selectedLayers[0].name === scriptName) {
                            addMarkersOnSelectedTriggerNullandGlobalComp();
                        } else {
                            getSelectedKeysandTime();
                            addMarkersFromSelectedLayers();
                        }
                    } catch (err) {
                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)
                    }
                }

                function AddMarkersOnlyInComp() {
                    try {
                        app.beginUndoGroup("Add Markers")
                        //Find selected layers and store in array
                        for (var i = 0; i < app.project.activeItem.selectedLayers.length; ++i) {
                            selectedLayerIndex = app.project.activeItem.selectedLayers[i].index;
                            //If Trigger Null is Not Selected
                            if (app.project.activeItem.layer(selectedLayerIndex).name != scriptName && app.project.activeItem.layer(selectedLayerIndex).timeRemapEnabled == false) {
                                for (var i = 0; i < app.project.activeItem.selectedLayers.length; ++i) {
                                    //Creates Action Markers At 
                                    layerMarkerName = app.project.activeItem.selectedLayers[i].name
                                    newMarker = new MarkerValue(layerMarkerName);
                                    selectedLayerIndex = app.project.activeItem.selectedLayers[i].index;
                                    markerTime = app.project.activeItem.layer(selectedLayerIndex).inPoint;
                                    triggerLayerIndex = app.project.activeItem.layer("Trigger").index
                                    for (var t = 1; t <= app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").numKeys; t++) {
                                        commentName = app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").keyValue(t).comment
                                        if (commentName.toLowerCase() === layerMarkerName.toLowerCase()) {
                                            layerMarkerName = layerMarkerName + "_" + t
                                            newMarker = new MarkerValue(layerMarkerName);
                                        }
                                    }
                                    if (app.project.activeItem.layer(selectedLayerIndex).name != app.project.activeItem.layer(triggerLayerIndex).name && app.project.activeItem.layer(selectedLayerIndex).selectedProperties == "") {
                                        app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                                    }
                                }
                            } else {
                                if (app.project.activeItem.layer(selectedLayerIndex).name === scriptName && app.project.activeItem.selectedLayers.length == 1) {
                                    //Creates Action Markers
                                    layerMarkerName = myPal.grp.markerName1.text;
                                    newMarker = new MarkerValue(layerMarkerName);
                                    triggerLayerIndex = app.project.activeItem.layer("Trigger").index
                                    for (var t = 1; t <= app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").numKeys; t++) {
                                        commentName = app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").keyValue(t).comment
                                        if (commentName.toLowerCase() === layerMarkerName.toLowerCase()) {
                                            layerMarkerName = layerMarkerName + "_" + t
                                            newMarker = new MarkerValue(layerMarkerName);
                                        }
                                    }

                                    markerTime = app.project.activeItem.time;

                                    if (app.project.activeItem.layer(selectedLayerIndex).selectedProperties == "") {
                                        app.project.activeItem.layer(triggerLayerIndex).property("ADBE Marker").setValueAtTime(markerTime, newMarker);

                                    }
                                }

                            }

                        }
                        app.endUndoGroup()
                    } catch (err) {
                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)
                    }

                }

                /////////////////////Error Window Functions/////////////////////////////

                function popUpWindow() {
                    var box = new Window('dialog', "Trigger Notification");

                    box.panel2 = box.add('panel', undefined, "     Cannot Generate Triggers on Comp Layer     ");
                    box.panel2.group = box.panel2.add('group', undefined);
                    box.panel2.group.orientation = 'column';

                    box.panel2.group.text1 = box.panel2.group.add('statictext', undefined, "This composition is not nested inside any composition(s) in your project. This comp must first be added as a precomp into a another composition in order to automatically generate triggers on its comp layer.", { multiline: true });

                    box.panel3 = box.add('panel', undefined, "");
                    box.panel3.group = box.panel2.add('group', undefined);
                    box.panel3.group.orientation = 'row';
                    box.panel3.group.checkbox = box.panel3.group.add('checkbox', undefined, "Do Not Show Me Again", { name: 'close' });
                    box.panel3.group.closeBtn = box.panel3.group.add('button', undefined, "Close", { name: 'close' });


                    box.panel3.group.checkbox.onClick = function () {
                        if (box.panel3.group.checkbox.value == true) {

                            donotshow = true;
                        } else {

                            donotshow = false;

                        }
                    }


                    box.panel3.group.closeBtn.onClick = function () {
                        box.close();
                    }
                    box.show()

                }

                /////////////////////////////////////////////////////



                function getSelectedKeysandTime() {
                    try {

                        selectedKeysTimeAry.length = 0
                        selectedKeysAry.length = 0


                        //Iterate Through Selected Layers                
                        for (var j = 0; j < app.project.activeItem.selectedLayers.length; j++) {
                            curSelectedLayer = app.project.activeItem.selectedLayers[j].index


                            //Get Selected Keys Index
                            if (app.project.activeItem.selectedProperties != "") {

                                for (var k = 0; k < app.project.activeItem.layer(curSelectedLayer).selectedProperties.length; k++) {

                                    if (app.project.activeItem.layer(curSelectedLayer).selectedProperties[k].selectedKeys[0] != null) {

                                        curProperty = k

                                    }

                                    //alert(app.project.activeItem.layer(curSelectedLayer).selectedProperties[0].selectedKeys.length)
                                    if (curProperty != null) {
                                        for (var i = 0; i < app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].selectedKeys.length; i++) {

                                            selectedKeysAry.push(app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].selectedKeys[i])

                                        }
                                    }
                                }
                            }

                            //Add Marker at Time of Selected Key
                            for (var r = 0; r < selectedKeysAry.length; r++) {

                                if (r == 0) {
                                    selectedKeysTimeAry.push(app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].keyTime(selectedKeysAry[r]))

                                    layerMarkerName = myPal.grp.markerName1.text

                                    newMarker = new MarkerValue(layerMarkerName);

                                    markerTime = app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].keyTime(selectedKeysAry[r])
                                    if (app.project.activeItem.layer(scriptName) != null) {
                                        app.project.activeItem.layer(scriptName).property("ADBE Marker").setValueAtTime(markerTime, newMarker);
                                    }

                                    if (myPal.grp.buttons.enableMirror.value == true) {

                                        for (var m = 0; m < multipleLayersSameName.length; m++) {

                                            app.project.item(highLevelCompItemNum).layer(multipleLayersSameName[m]).property("ADBE Marker").setValueAtTime(markerTime, newMarker);

                                        }


                                        //app.project.item(highLevelCompItemNum).layer(higherLevelCompIndex).property("ADBE Marker").setValueAtTime(markerTime,newMarker);    
                                    }

                                } else {

                                    selectedKeysTimeAry.push(app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].keyTime(selectedKeysAry[r]))

                                    layerMarkerName = myPal.grp.markerName1.text

                                    newMarker = new MarkerValue(layerMarkerName + "_" + r);

                                    markerTime = app.project.activeItem.layer(curSelectedLayer).selectedProperties[curProperty].keyTime(selectedKeysAry[r])

                                    app.project.activeItem.layer(scriptName).property("ADBE Marker").setValueAtTime(markerTime, newMarker);


                                    if (myPal.grp.buttons.enableMirror.value == true) {

                                        for (var m = 0; m < multipleLayersSameName.length; m++) {

                                            app.project.item(highLevelCompItemNum).layer(multipleLayersSameName[m]).property("ADBE Marker").setValueAtTime(markerTime, newMarker);

                                        }


                                        //app.project.item(highLevelCompItemNum).layer(higherLevelCompIndex).property("ADBE Marker").setValueAtTime(markerTime,newMarker);    
                                    }




                                }



                            }
                            selectedKeysAry.length = 0



                            selectedKeysTimeAry.length = 0
                        }





                    } catch (err) {

                        alert(err.message + '\r' + "Error occured at line:" + " " + err.line)

                    }


                }






                myPal.layout.layout(true);
                myPal.layout.resize();
                myPal.onResizing = myPal.onResize = function () { this.layout.resize(); }

            }

            return myPal;
        }
    }

}