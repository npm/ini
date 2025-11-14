
An INI format parser & serializer.

## Note

-   Sections are treated as nested objects.

-   Section-less items are treated as globals.

## Usage

Consider an INI file such as the following:

```ini
; This comment is being ignored
scope = global

[database]
user = dbuser
password = dbpassword
database = use_this_database

[paths.default]
datadir = /var/lib/data
array[] = first value
array[] = second value
array[] = third value
```

You can **read**, **modify** and **write** it like so:

```js
import { writeFile , readFile } from 'node:fs/promises'
import { stringify , parse } from 'ini'

//  Read INI file as text

let text = await readFile(`./Original.ini`,{
    encoding : 'utf-8'
})

//  Parse text data to object

const config = parse(text)

//  Modify data object

config.scope = 'local'
config.database.database = 'use_another_database'
config.paths.default.tmpdir = '/tmp'
delete config.paths.default.datadir
config.paths.default.array.push('fourth value')

//  Stringify data object

text = stringify(config,{ 
    section : 'section' 
})

//  Write INI file as text

await writeFile(`./Modified.ini`,text)
```

The written file will contain the following:

```ini
[section]
scope=local
[section.database]
user=dbuser
password=dbpassword
database=use_another_database
description=this is a multiline 
  value -- continuation lines for multiline
  values must be indented
[section.paths.default]
tmpdir=/tmp
array[]=first value
array[]=second value
array[]=third value
array[]=fourth value
```

## API

### Parse

Attempts to turn the given INI string into a nested data object.

```js
// You can also use `decode`
const object = parse(`<INI Text>`, {
  /**
   * Interpret indented lines that immediately follow key/value pairs
   * as multiline continuations. Enabled by default for backwards
   * compatibility with the Node.js parser this module replaces.
   *
   * Set to `false` to treat those indented lines as standalone keys.
   */
  multiline: true,

  /**
   * Whether to treat repeated keys without a `[]` suffix as arrays.
   * Enabled by default to match the .ini format used by npm.
   */
  bracketedArray: true,
})
```

### Stringify

Encodes the given data object as an INI formatted string.

```js
// You can also use `encode`
stringify(object,{

    /**
     *  Whether to insert spaces before & after `=`
     * 
     *  Disabled by default to have better 
     *  compatibility with old picky parsers.
     */

    whitespace : false ,

    /**
     *  Whether to align the `=` character for each section.
     *  -> Also enables the `whitespace` option
     */

    align : false ,

    /**
     *  Identifier to use for global items 
     *  and to prepend to all other sections.
     */

    section ,

    /**
     *  Whether to sort all sections & their keys alphabetically.
     */

    sort : false ,

    /**
     *  Whether to insert a newline after each section header.
     * 
     *  The TOSHIBA & FlashAir parser require this format. 
     */

    newline : false ,

    /**
     *  Which platforms line-endings should be used.
     * 
     *  win32 -> CR+LF
     *  other -> LF
     * 
     *  Default is the current platform
     */

    platform ,

    /**
     *  Whether to append `[]` to array keys.
     * 
     *  Some parsers treat duplicate names by themselves as arrays
     */

    bracketedArray : true,

    /**
     *  Enforce indentation on continuation lines for string values
     *  that contain literal newlines.
     *
     *  When `true` (default), `stringify()` throws if any line after
     *  the first does not start with a space or tab. This protects
     *  against accidentally emitting multiline INI values that other
     *  parsers cannot safely read.
     *
     *  Set to `false` to fall back to JSON-quoted output for those
     *  values (the legacy behavior prior to multiline support).
     */
    strictMultiline : true

})
```

*For backwards compatibility any string passed as the*  
*options parameter is treated as the `section` option.*

```js
stringify(object,'section')
```

### Un / Escape

Turn the given string into a safe to  
use key or value in your INI file.

```js
safe(`"unsafe string"`) // -> \"unsafe string\"
```

Or reverse the process with:

```js
unsafe(`\\"safe string\\"`) // -> "safe string"
```
