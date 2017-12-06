#target estoolkit#dbg

/***********************************************************************************************
    Encode text in ESTK.jsx
    By Alex White in 2017
    www.motion.land

    Description:
        Encodes selected string inside ESTK to jsxbin and evals it.
    
    How to use:
        Launch the script in ESTK.
        Select your text and click "Encode Selection"
            
        This script is provided "as is," without warranty of any kind, expressed
        or implied. In no event shall the author be held liable for any damages
        arising in any way from the use of this script.
***********************************************************************************************/

encodeSelectionPanel();

function encodeSelectionPanel() {
  
var encTxtPal = new Window("palette", "Encode the selection", undefined, {closeOnKey:"OSCmnd+W",resizeable:true});  
    encTxtPal.margins = encTxtPal.spacing = 0; encTxtPal.alignment = encTxtPal.alignChildren = ["fill", "fill"];
    
    encodeButton = encTxtPal.add("button", [0,0,120,55], "Encode Selection");
    encodeButton.onClick = function () { encodeSelection(); } 


function encodeSelection() {

    var textSelection = document.editor.textselection; 
    if(textSelection === "") { alert("Please, select the text"); return false; }

    try{
        var encoded = encodeFile(textSelection);
    }catch(e){ alert("Something went wring during the encoding. Check your selection.\n" + e); return false; }


    var pasteText = textSelection.replace(/\n/g, ""); // we need this workaround because during the document.editor.insert() adds additional line breaks =\
        pasteText = pasteText.replace(/^/gm,"//~$1");
    
   document.editor.cut();

    var encodedText = "\n\neval(\"" + encoded+"\");\n\n"; // add linebreaks and eval
    document.editor.insert(encodedText); // inserting our text at the cursor position


   document.editor.insert(pasteText); // inserting our text at the cursor position



};

function encodeFile( selection ) {

    var t = app.compile(selection); // compile in ESTK
    var content = (t.replace("@2.0@","@2.1@")).replace(/\n/g,""); // yes, we replace that to disable automatic decode
    return content;
    
};


encTxtPal.onResizing = encTxtPal.onResize = function () {this.layout.resize ();}

encTxtPal.center();
encTxtPal.show();


}; //encodeSelectionPanel()
