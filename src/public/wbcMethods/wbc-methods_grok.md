# WBC-UI2 Utility Methods

| Method Name       | Description                                      | Example Input                       | Example Output               |
|-------------------|--------------------------------------------------|-------------------------------------|------------------------------|
| `flattenArray?`   | Flattens a nested array into a single level.     | [1, [2, [3]]]                       | [1, 2, 3]                    |
| `mergeObjects?`   | Merges multiple objects into one.                | ({a: 10}, {b: 20}, {c: 30})         | {a: 10, b: 20, c: 30}      |


This section documents the utility methods provided by the `wbc-ui2` library. These methods are designed to simplify common tasks such as string manipulation, random value generation, data validation, and more. Each method is grouped by functionality, with detailed explanations and examples to demonstrate their usage.

---

## Table of Contents

- [WBC-UI2 Utility Methods](#wbc-ui2-utility-methods)
  - [Table of Contents](#table-of-contents)
  - [String Manipulation Methods](#string-manipulation-methods)
    - [Explanation](#explanation)
    - [Example Usage](#example-usage)
  - [Random Generation Methods](#random-generation-methods)
    - [Explanation](#explanation-1)
    - [Example Usage](#example-usage-1)
  - [Object and Array Utilities](#object-and-array-utilities)
    - [Explanation](#explanation-2)
    - [Example Usage](#example-usage-2)
  - [Validation Methods](#validation-methods)
    - [Explanation](#explanation-3)
    - [Example Usage](#example-usage-3)
  - [Clipboard and JSON Utilities](#clipboard-and-json-utilities)
    - [Explanation](#explanation-4)
    - [Example Usage](#example-usage-4)
  - [Notes](#notes)

---

## String Manipulation Methods

These methods help transform, format, or convert strings for various use cases.

| Method Name         | Description                                      | Example Input                       | Example Output                      |
|---------------------|--------------------------------------------------|-------------------------------------|-------------------------------------|
| `camelToKebab?`     | Converts camelCase strings to kebab-case.        | "WbcUiComponentJS"                 | "wbc-Ui-Component-JS"              |
| `capitalizeWords?`  | Capitalizes the first letter of each word.       | "this an example of sentence"      | "This An Example Of Sentence"      |
| `toTitleCase?`      | Capitalizes only the first word of a string.     | "this an example of sentence"      | "This an example of sentence"      |
| `titleCase?`        | Capitalizes all words in a string.               | "this an example of sentence"      | "This An Example Of Sentence"      |

### Explanation
- These methods are useful for formatting text in UI components, such as titles, labels, or CSS class names.
- The `?` suffix indicates that these methods are optional or may return `undefined` if inputs are invalid.

### Example Usage
```javascript
import { camelToKebab, capitalizeWords } from 'wbc-ui2';

// Convert a camelCase string to kebab-case for CSS
const className = camelToKebab("WbcUiComponentJS");
console.log(className); // Output: "wbc-Ui-Component-JS"

// Capitalize words for a button label
const buttonText = capitalizeWords("click me now");
console.log(buttonText); // Output: "Click Me Now"
```

---

## Random Generation Methods

These methods generate random values, such as colors, keys, or integers.

| Method Name       | Description                                      | Example Input      | Example Output    |
|-------------------|--------------------------------------------------|--------------------|-------------------|
| `randomColor?`    | Generates a random hex color.                    | -                  | "#F6D7AF"         |
| `randomKey?`      | Generates a unique key from a base string.       | "baseKey"          | "baseKeyUO107"    |
| `getRandomInt?`   | Returns a random integer between two numbers.    | (10, 20)           | 14                |

### Explanation
- Useful for generating unique identifiers, random UI styling (e.g., colors), or random values in testing scenarios.
- `randomKey?` appends a unique suffix to the provided base string.

### Example Usage
```javascript
import { randomColor, getRandomInt } from 'wbc-ui2';

// Generate a random background color for a div
const bgColor = randomColor();
console.log(bgColor); // Output: e.g., "#A3BFFA"

// Pick a random number for a game
const randomNumber = getRandomInt(1, 100);
console.log(randomNumber); // Output: e.g., 42
```

---

## Object and Array Utilities

These methods assist in manipulating or transforming objects and arrays.

| Method Name       | Description                                      | Example Input                       | Example Output               |
|-------------------|--------------------------------------------------|-------------------------------------|------------------------------|
| `flattenArray?`   | Flattens a nested array into a single level.     | [1, [2, [3]]]                       | [1, 2, 3]                    |
| `mergeObjects?`   | Merges multiple objects into one.                | ({a: 10}, {b: 20}, {c: 30})         | {a: 10, b: 20, c: 30}      |

### Explanation
- `flattenArray?` is ideal for simplifying nested data structures.
- `mergeObjects?` combines multiple objects, useful for consolidating configuration settings or data.

### Example Usage
```javascript
import { flattenArray, mergeObjects } from 'wbc-ui2';

// Flatten a nested array for display
const nested = [1, [2, [3, 4]]];
const flat = flattenArray(nested);
console.log(flat); // Output: [1, 2, 3, 4]

// Merge configuration objects
const config1 = { theme: "light" };
const config2 = { fontSize: 16 };
const merged = mergeObjects(config1, config2);
console.log(merged); // Output: { theme: "light", fontSize: 16 }
```

---

## Validation Methods

These methods check or validate data types and conditions.

| Method Name       | Description                                      | Example Input      | Example Output    |
|-------------------|--------------------------------------------------|--------------------|-------------------|
| `isDate?`         | Checks if a string is a valid date.              | "2025-01-01"       | true              |
| `isEmpty?`        | Checks if a value is empty.                      | {}                 | true              |
| `isNonEmpty?`     | Checks if a value is non-empty.                  | {a: 10}            | true              |
| `isPlainObject?`  | Checks if a value is a plain object.             | {a: 10, b: 20}     | true              |
| `isPromise?`      | Checks if a value is a Promise.                  | new Promise(() => {}) | true          |

### Explanation
- These methods help ensure data integrity before performing operations (e.g., validating user input or checking API responses).
- They return boolean values for easy conditional logic.

### Example Usage
```javascript
import { isDate, isEmpty } from 'wbc-ui2';

// Validate a date string
const dateValid = isDate("2025-01-01");
console.log(dateValid); // Output: true

// Check if an object is empty
const obj = {};
const empty = isEmpty(obj);
console.log(empty); // Output: true
```

---

## Clipboard and JSON Utilities

These methods handle clipboard operations and JSON conversions.

| Method Name       | Description                                      | Example Input                       | Example Output                      |
|-------------------|--------------------------------------------------|-------------------------------------|-------------------------------------|
| `copyToClipboard?`| Copies text to the clipboard.                    | "Copied Text!"                     | -                                   |
| `stringToJson?`   | Parses a JSON string into an object.             | "{\"a\":10}"                      | { "a": 10 }                        |
| `stringify?`      | Converts an object to a JSON string, including functions. | {a: 1, f: () => 1}       | "{\"a\":1,\"f\":\"function f() { return 1; }\"}" |

### Explanation
- `copyToClipboard?` enhances user experience by allowing text copying (e.g., for sharing codes or links).
- `stringToJson?` and `stringify?` facilitate JSON data handling, with `stringify?` uniquely supporting function serialization.

### Example Usage
```javascript
import { copyToClipboard, stringToJson } from 'wbc-ui2';

// Copy text to clipboard
copyToClipboard("Share this link: https://example.com");
// No output, but text is copied to clipboard

// Parse a JSON string
const jsonString = "{\"name\": \"John\", \"age\": 30}";
const obj = stringToJson(jsonString);
console.log(obj); // Output: { name: "John", age: 30 }
```

---

## Notes
- All methods with a `?` suffix are optional and may return `undefined` or throw errors if inputs are invalid. Always check the return value or use try-catch blocks when necessary.
- These methods are accessible when using the `wbc-ui2` library and can be imported individually or as a group.

For more information about the `wbc-ui2` library, refer to the main documentation page.
