/*
 npm - global command, comes with node
 npm --version

 local dependency - use it only in this particular project
 npm i <packageName>

 global dependency - use it in any project
 npm install -g <packageName>
 sudo npm install -g <packageName>  (mac)
 
 package.json - manifest file(stores important info about project/package)
 1. manual approach (create package.json in the root, create properties etc)
 2. npm init (step by step, press enter to skip)
 3. npm init -y (everything by default)
 package name is always unique

 To install package as dev dependency
 npm i <package name> -D (or) npm i <package name> --save-dev
 
To uninstall a package 
npm uninstall <package name>

Remove nodemodules and package-lock.json and the run npm install then all files get restored


 */

//  using lodash
const _ = require("lodash");
const items = [1, [2, [3, 4, [5]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
