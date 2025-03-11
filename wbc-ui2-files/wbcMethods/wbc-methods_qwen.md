# WBC-UI2 Methods Documentation

This page documents the built-in utility methods provided by the **WBC-UI2** library. These methods are globally accessible once the library is installed and can be used directly in your Vue components or scripts.

---

## Table of Contents

- [WBC-UI2 Methods Documentation](#wbc-ui2-methods-documentation)
  - [Table of Contents](#table-of-contents)
  - [General Utility Methods](#general-utility-methods)
    - [Examples](#examples)
  - [Validation Methods](#validation-methods)
    - [Examples](#examples-1)
  - [Data Transformation Methods](#data-transformation-methods)
    - [Examples](#examples-2)
  - [Date \& Time Methods](#date--time-methods)
    - [Examples](#examples-3)
  - [Localization Methods](#localization-methods)
    - [Examples](#examples-4)
  - [Event Handling Methods](#event-handling-methods)
    - [Examples](#examples-5)
  - [Encryption Methods](#encryption-methods)
    - [Examples](#examples-6)
  - [Miscellaneous Methods](#miscellaneous-methods)
    - [Examples](#examples-7)
  - [Full List of Methods](#full-list-of-methods)
  - [Notes](#notes)
  - [Conclusion](#conclusion)

---

## General Utility Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `randomColor?`      | Generates a random hex color.                                               | -                                              | `#F6D7AF`             |
| `randomKey?(base)`  | Generates a unique key based on the provided base string.                   | `"baseKey"`                                   | `"baseKeyUO107"`      |
| `getRandomInt?(min, max)` | Returns a random integer between `min` and `max`.                     | `(10, 20)`                                   | `14`                  |
| `camelToKebab?(str)` | Converts camelCase strings to kebab-case.                                 | `"WbcUiComponentJS"`                         | `"wbc-Ui-Component-JS"` |
| `capitalizeWords?(str)` | Capitalizes the first letter of each word in a string.                   | `"this an example of sentence"`               | `"This An Example Of Sentence"` |
| `toTitleCase?(str)`     | Converts a string to title case (capitalizes only the first word).       | `"this an example of sentence"`               | `"This an Example of Sentence"` |
| `titleCase?(str)`       | Converts a string to full title case (capitalizes all words).            | `"this an example of sentence"`               | `"This An Example Of Sentence"` |
| `flattenArray?(arr)`    | Flattens a nested array into a single-level array.                       | `[1, [2, [3]]]`                              | `[1, 2, 3]`           |
| `mergeObjects?(...objs)` | Merges multiple objects into one.                                       | `({a: 10}, {b: 20}, {c: 30})`                | `{a: 10, b: 20, c: 30}` |

### Examples

```javascript
// Generate random color
const color = WBC.randomColor?(); // #F6D7AF

// Convert camelCase to kebab-case
const kebabCase = WBC.camelToKebab?("WbcUiComponentJS"); // wbc-Ui-Component-JS

// Flatten a nested array
const flatArray = WBC.flattenArray?([1, [2, [3]]]) ; 

// Merge multiple objects
const mergedObj = WBC.mergeObjects?({a: 10}, {b: 20}, {c: 30}); // {a: 10, b: 20, c: 30}
```

---

## Validation Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `isDate?(dateStr)`  | Checks if a string is a valid date.                                         | `"2025-01-01"`                               | `true`                |
| `isEmpty?(value)`   | Checks if a value is empty (null, undefined, empty string, array, object).  | `{}`                                          | `true`                |
| `isNonEmpty?(value)` | Opposite of `isEmpty?(). Checks if a value is non-empty.                 | `{a: 10}`                                    | `true`                |
| `isPlainObject?(value)` | Checks if a value is a plain object (not an array or function).          | `{a: 10, b: 20}`                             | `true`                |
| `isPromise?(value)` | Checks if a value is a Promise.                                            | `new Promise(() => {});`                      | `true`                |
| `isVnode?(value)`   | Checks if a value is a Vue virtual DOM node.                                | `h('div')`                                    | `true`                |

### Examples

```javascript
// Validate date
const isValidDate = WBC.isDate?("2025-01-01"); // true

// Check if an object is empty
const isEmpty = WBC.isEmpty?({}); // true

// Check if a value is a Promise
const isPromise = WBC.isPromise?(new Promise(() => {})); // true
```

---

## Data Transformation Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `stringToJson?(str)` | Parses a JSON string into an object.                                        | ``{"a":10}``                                 | `{ "a": 10 }`        |
| `stringify?(obj)`   | Converts an object to a JSON string, including functions.                   | `{a: 1, f: () => 1}`                          | `{"a":1,"f":"function f() { return 1; }"}` |
| `parse?(jsonStr)`   | Parses a JSON string into an object.                                        | ``{"a":1,"f":"() => 1"}``                    | `{ "a": 1 }`          |
| `clone?(obj)`       | Creates a deep clone of an object or array.                                 | `{a: 10}`                                     | `{a: 10}`             |
| `getObjectDepth?(obj)` | Returns the depth of a nested object.                                      | `{a: {b: {c: 1}}}`                           | `3`                   |

### Examples

```javascript
// Parse JSON string
const obj = WBC.stringToJson?(`{"a":10}`); // { "a": 10 }

// Stringify object with functions
const jsonString = WBC.stringify?({a: 1, f: () => 1}); 
// {"a":1,"f":"function f() { return 1; }"}

// Clone an object
const clonedObj = WBC.clone?({a: 10, b: 20}); // {a: 10, b: 20}

// Get object depth
const depth = WBC.getObjectDepth?({a: {b: {c: 1}}}); // 3
```

---

## Date & Time Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `today?()`          | Returns the current date as a JavaScript Date object.                       | -                                              | `Thu Oct 19 2023 ...` |
| `todayISO?()`       | Returns the current date in ISO format.                                     | -                                              | `"2023-10-19T..."`    |
| `todayStr?()`       | Returns the current date as a formatted string.                             | -                                              | `"October 19, 2023"`  |
| `minsToHours?(minutes)` | Converts minutes to hours and minutes.                                     | `999`                                          | `"16h 39m"`           |

### Examples

```javascript
// Get today's date
const currentDate = WBC.today?(); // Thu Oct 19 2023 ...

// Format minutes to hours
const time = WBC.minsToHours?(999); // "16h 39m"
```

---

## Localization Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `objLang?(obj)`     | Extracts language-specific properties from an object.                       | `{ en: "English", fr: "Français" }`           | `"English"`            |
| `objMultiLang?(obj)` | Handles multi-language objects for localization.                            | `{ en: "Hello", fr: "Bonjour" }`              | `"Hello"`              |

### Examples

```javascript
// Extract language-specific property
const langText = WBC.objLang?({ en: "English", fr: "Français" }); // "English"

// Handle multi-language object
const localizedText = WBC.objMultiLang?({ en: "Hello", fr: "Bonjour" }); // "Hello"
```

---

## Event Handling Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `copyToClipboard?(text)` | Copies the provided text to the clipboard.                                 | `"Copied Text!"`                              | -                      |
| `raise?(event)`     | Triggers an event with optional parameters.                                 | `{ type: 'click', payload: { data: 'test' } }`| -                      |

### Examples

```javascript
// Copy text to clipboard
WBC.copyToClipboard?("Copied Text!");

// Trigger an event
WBC.raise?({ type: 'click', payload: { data: 'test' } });
```

---

## Encryption Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `aesEnc?(data, key)` | Encrypts data using AES encryption.                                         | `"data", "key"`                               | `"encryptedData"`      |
| `aesDec?(encryptedData, key)` | Decrypts AES-encrypted data.                                               | `"encryptedData", "key"`                      | `"data"`              |

### Examples

```javascript
// Encrypt data
const encryptedData = WBC.aesEnc?("data", "key"); // "encryptedData"

// Decrypt data
const decryptedData = WBC.aesDec?("encryptedData", "key"); // "data"
```

---

## Miscellaneous Methods

| Method Name         | Description                                                                 | Example Input                                  | Example Output         |
|---------------------|-----------------------------------------------------------------------------|-----------------------------------------------|------------------------|
| `compFunc?(input)`   | Processes input dynamically to generate a component configuration.           | `"ali baba"`                                  | `{ comp: "div", props: { ... } }` |
| `anyMatchInArray?(array, value)` | Checks if any element in an array matches the given value.                 | `(["1", 2, 3], "1")`                         | `true`                |
| `transfObj?(obj)`    | Transforms an object based on custom rules.                                 | `{a: 10}`                                     | `{ transformed: 10 }` |
| `validators?(rules)` | Applies validation rules to a value.                                        | -                                              | -                      |
| `vuetifyColorList?()` | Returns a list of Vuetify colors.                                           | -                                              | -                      |
| ```inspect?(value)`` | Inspects and logs the structure of a value.                                 | -                                              | -                      |

### Examples

```javascript
// Transform object
const transformedObj = WBC.transfObj?({a: 10}); // { transformed: 10 }

// Process input dynamically
const config = WBC.compFunc?("ali baba"); 
// { comp: "div", props: { ... } }
```

---

## Full List of Methods

Here’s a comprehensive list of all the methods available in **WBC-UI2**:

- `cookies`
- `Http`
- `aesDec`
- `aesEnc`
- `anyMatchInArray`
- `camelToKebab`
- `capitalizeWords`
- `clone`
- `colorLibelle`
- `compFunc`
- `copyToClipboard`
- `flattenArray`
- `formatToStr`
- `generalVal`
- `getAttrs`
- `getObjectDepth`
- `getRandomInt`
- `isDate`
- `isDynamicImport`
- `isEmpty`
- `isIterable`
- `isNonEmpty`
- `isPlainObject`
- `isPromise`
- `isVnode`
- `mergeObjects`
- `minsToHours`
- `objLang`
- `parse`
- `project`
- `queryData`
- `raise`
- `randomColor`
- `randomKey`
- `strToObj`
- `stringToJson`
- `stringify`
- `titleCase`
- `toTitleCase`
- `today`
- `todayISO`
- `todayStr`
- `transfObj`
- `validators`
- `vuetifyColorList`
- ```inspect?

---

## Notes

- These methods are automatically available when you install and use the **WBC-UI2** library.
- For advanced use cases, refer to the official documentation or source code for detailed explanations.

---

## Conclusion

The **WBC-UI2** library offers a wide range of utility methods to simplify development tasks. Whether you need to validate data, transform objects, handle localization, or interact with the backend, these methods provide powerful tools to enhance your application's functionality.

Thank you for using **WBC-UI2**!
