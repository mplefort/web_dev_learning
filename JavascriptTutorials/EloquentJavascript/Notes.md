# Eloquent Javascript

## Ch 10 Modules

Keywords for exports and imports. <br>
Importing
```javascipt
// importing: ./ relative to current module file location.
const package_name = require("./package")

or 

import package_name from "./package";

```
Exporting
```
// exporting
exports.my_function = function_to_export

or 

export function myfunction()

// defualt export
<!-- in file.js -->
export default myfunction()
import something from "file"
```

The **module** is the file name "module.js"
