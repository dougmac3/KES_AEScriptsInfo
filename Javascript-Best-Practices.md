# Javascript Best Practices

1.	Make sure that your entire script is inside a uniquely named function. 
1.	Make sure you always use matchNames to refer to effects and properties. Using localized names will cause the script to crash when AE is run in  a different language. 
> Use GimmePropsPath.jsx from [http://www.redefinery.com/](http://www.redefinery.com/) to get the matchNames. 
1.	Initialize all variables!! 
Especially in loops, this is a no-no:  
```javascript
for (i=0; i<length; i++) 
```
1.	An un-initialized variable in a local function will become a global variable. So always declare your variables. 
1.	Did we mention that you should declare/initialize all your variables? 
> Please declare your variables. [http://speakingjs.com/es5/ch16.html ](http://speakingjs.com/es5/ch16.html )
1.	Unless you really know what you are doing, *do not use prototypes or extend any native objects *
1.	Never use `for (var i in obj)` to loop through arrays, only to loop through objects and always use `if (obj.hasOwnProperty(prop))`
> more info about this here: [http://stackoverflow.com/questions/8312459/iterate-through-object-properties ](http://stackoverflow.com/questions/8312459/iterate-through-object-properties )
