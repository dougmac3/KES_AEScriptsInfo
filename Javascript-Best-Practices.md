# Javascript Best Practices

1.	Make sure that your entire script is inside a uniquely named function. 
1.	Make sure you always use **matchNames** to refer to effects and properties. Using localized names will cause the script to crash when AE is run in  a different language. Use GimmePropsPath.jsx from [http://www.redefinery.com/](http://www.redefinery.com/) to get the matchNames. 
1.	Initialize all variables!!  Especially in loops, **this is a no-no**: `for (i=0; i<length; i++)`  
    This is how you do it correctly, add **var** before the i:
    ```javascript
    for (var i=0; i<length; i++) 
    ```
1.	An un-initialized variable in a local function will become a global variable. So **always declare your variables**. 
1.	Did we mention that you should declare/initialize all your variables? **Please declare your variables**. Please read this if you still don't believe us:  [http://speakingjs.com/es5/ch16.html ](http://speakingjs.com/es5/ch16.html )
1.	Unless you really know what you are doing, *do not use prototypes or extend any native objects *
1.	Never use `for (var i in obj)` to loop through arrays, only to loop through objects and always use:
    ```javascript
    if (obj.hasOwnProperty(prop))
    ```
    > more info about this here: [http://stackoverflow.com/questions/8312459/iterate-through-object-properties (http://stackoverflow.com/questions/8312459/iterate-through-object-properties )
1. Lint your code. This is the one we recommend (but any js linter will do): 
[JSHint](http://jshint.com/). Please note that the `#include` from the framework will fail in the linter because it is ESTK specific code, so just ignore that warning.
