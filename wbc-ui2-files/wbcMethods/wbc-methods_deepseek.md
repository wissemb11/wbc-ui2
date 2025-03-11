# WBC Methods Documentation

The `wbc-ui2` module provides a rich set of **built-in methods** designed to simplify common tasks in web development. These methods enhance productivity and make it easier to build dynamic, responsive, and secure applications. Below is a comprehensive list of the methods and their use cases.

---

## **Utility Methods**

### 1. **`$cookies`**
   - **Description**: Manage browser cookies (get, set, remove, etc.).
   - **Use Case**: Handle authentication tokens, user preferences, etc.
   - **Example**:
     ```javascript
     $cookies.set('userToken', 'abc123');
     const token = $cookies.get('userToken');
     ```

### 2. **`Http`**
   - **Description**: A utility for making HTTP requests (e.g., GET, POST, PUT, DELETE).
   - **Use Case**: Simplify API communication.
   - **Example**:
     ```javascript
     Http.get('/api/data').then(response => console.log(response));
     ```

### 3. **`aesDec`**
   - **Description**: Decrypt data using AES encryption.
   - **Use Case**: Secure data handling.
   - **Example**:
     ```javascript
     const decryptedData = aesDec(encryptedData, secretKey);
     ```

### 4. **`aesEnc`**
   - **Description**: Encrypt data using AES encryption.
   - **Use Case**: Ensure data security during transmission or storage.
   - **Example**:
     ```javascript
     const encryptedData = aesEnc(data, secretKey);
     ```

### 5. **`anyMatchInArray`**
   - **Description**: Check if any element in an array matches a given value or condition.
   - **Use Case**: Filtering or validation.
   - **Example**:
     ```javascript
     const hasMatch = anyMatchInArray([1, 2, 3], 2); // true
     ```

### 6. **`camelToKebab`**
   - **Description**: Convert camelCase strings to kebab-case.
   - **Use Case**: Generate CSS class names or HTML attributes.
   - **Example**:
     ```javascript
     const kebabCase = camelToKebab('myComponentName'); // 'my-component-name'
     ```

### 7. **`capitalizeWords`**
   - **Description**: Capitalize the first letter of each word in a string.
   - **Use Case**: Formatting text (e.g., titles, names).
   - **Example**:
     ```javascript
     const formattedText = capitalizeWords('hello world'); // 'Hello World'
     ```

### 8. **`clone`**
   - **Description**: Create a deep copy of an object or array.
   - **Use Case**: Prevent unintended mutations of data.
   - **Example**:
     ```javascript
     const clonedObject = clone(originalObject);
     ```

### 9. **`colorLibelle`**
   - **Description**: Generate or manipulate color values (e.g., hex, RGB).
   - **Use Case**: Dynamic theming or styling.
   - **Example**:
     ```javascript
     const color = colorLibelle('primary'); // '#1976D2'
     ```

### 10. **`compFunc`**
    - **Description**: Dynamically generate component configurations.
    - **Use Case**: Create reusable or dynamic components.
    - **Example**:
      ```javascript
      const componentConfig = compFunc('div', { class: 'my-class' });
      ```

---

## **Data Manipulation Methods**

### 11. **`copyToClipboard`**
    - **Description**: Copy text or data to the clipboard.
    - **Use Case**: Enhance user experience (e.g., copy buttons).
    - **Example**:
      ```javascript
      copyToClipboard('Hello, World!');
      ```

### 12. **`flattenArray`**
    - **Description**: Flatten a nested array into a single-level array.
    - **Use Case**: Process complex data structures.
    - **Example**:
      ```javascript
      const flatArray = flattenArray([[1, 2], [3, 4]]); // [1, 2, 3, 4]
      ```

### 13. **`formatToStr`**
    - **Description**: Format data (e.g., numbers, dates) into a string.
    - **Use Case**: Display data in a user-friendly way.
    - **Example**:
      ```javascript
      const formattedDate = formatToStr(new Date(), 'YYYY-MM-DD');
      ```

### 14. **`generalVal`**
    - **Description**: Validate or process general values (e.g., check for null, undefined, or empty values).
    - **Use Case**: Data validation.
    - **Example**:
      ```javascript
      if (generalVal(userInput)) {
        console.log('Input is valid');
      }
      ```

### 15. **`getAttrs`**
    - **Description**: Retrieve attributes from an object or DOM element.
    - **Use Case**: Dynamic attribute handling.
    - **Example**:
      ```javascript
      const attrs = getAttrs(document.getElementById('myElement'));
      ```

---

## **Validation and Debugging Methods**

### 16. **`getObjectDepth`**
    - **Description**: Determine the depth of a nested object.
    - **Use Case**: Debugging or processing complex objects.
    - **Example**:
      ```javascript
      const depth = getObjectDepth({ a: { b: { c: 1 } } }); // 3
      ```

### 17. **`getRandomInt`**
    - **Description**: Generate a random integer within a specified range.
    - **Use Case**: Generate IDs, keys, or random values.
    - **Example**:
      ```javascript
      const randomNumber = getRandomInt(1, 100);
      ```

### 18. **`isDate`**
    - **Description**: Check if a value is a valid date.
    - **Use Case**: Date validation.
    - **Example**:
      ```javascript
      const isValidDate = isDate('2023-10-01'); // true
      ```

### 19. **`isEmpty`**
    - **Description**: Check if a value is empty (e.g., null, undefined, empty string, empty array, or empty object).
    - **Use Case**: Validation.
    - **Example**:
      ```javascript
      if (isEmpty(userInput)) {
        console.log('Input is empty');
      }
      ```

### 20. **`isPlainObject`**
    - **Description**: Check if a value is a plain object (not an array, function, or special object).
    - **Use Case**: Type checking.
    - **Example**:
      ```javascript
      const isPlain = isPlainObject({ a: 1 }); // true
      ```

---

## **Internationalization and Theming Methods**

### 21. **`objLang`**
    - **Description**: Handle multi-language objects or strings.
    - **Use Case**: Internationalization (i18n).
    - **Example**:
      ```javascript
      const translatedText = objLang({ en: 'Hello', fr: 'Bonjour' }, 'fr'); // 'Bonjour'
      ```

### 22. **`vuetifyColorList`**
    - **Description**: Get a list of Vuetify colors.
    - **Use Case**: Dynamic theming.
    - **Example**:
      ```javascript
      const colors = vuetifyColorList(); // ['primary', 'secondary', ...]
      ```

---

## **Conclusion**
The `wbc-ui2` module offers a wide range of utility methods to simplify web development tasks. Whether you're working with **data manipulation**, **validation**, **styling**, or **internationalization**, these methods provide powerful tools to enhance your productivity.

For more details, refer to the official documentation or explore the examples provided above.

---# WBC Methods Documentation

The `wbc-ui2` module provides a rich set of **built-in methods** designed to simplify common tasks in web development. These methods enhance productivity and make it easier to build dynamic, responsive, and secure applications. Below is a comprehensive list of the methods and their use cases.

---

## **Utility Methods**

### 1. **`$cookies`**
   - **Description**: Manage browser cookies (get, set, remove, etc.).
   - **Use Case**: Handle authentication tokens, user preferences, etc.
   - **Example**:
     ```javascript
     $cookies.set('userToken', 'abc123');
     const token = $cookies.get('userToken');
     ```

### 2. **`Http`**
   - **Description**: A utility for making HTTP requests (e.g., GET, POST, PUT, DELETE).
   - **Use Case**: Simplify API communication.
   - **Example**:
     ```javascript
     Http.get('/api/data').then(response => console.log(response));
     ```

### 3. **`aesDec`**
   - **Description**: Decrypt data using AES encryption.
   - **Use Case**: Secure data handling.
   - **Example**:
     ```javascript
     const decryptedData = aesDec(encryptedData, secretKey);
     ```

### 4. **`aesEnc`**
   - **Description**: Encrypt data using AES encryption.
   - **Use Case**: Ensure data security during transmission or storage.
   - **Example**:
     ```javascript
     const encryptedData = aesEnc(data, secretKey);
     ```

### 5. **`anyMatchInArray`**
   - **Description**: Check if any element in an array matches a given value or condition.
   - **Use Case**: Filtering or validation.
   - **Example**:
     ```javascript
     const hasMatch = anyMatchInArray([1, 2, 3], 2); // true
     ```

### 6. **`camelToKebab`**
   - **Description**: Convert camelCase strings to kebab-case.
   - **Use Case**: Generate CSS class names or HTML attributes.
   - **Example**:
     ```javascript
     const kebabCase = camelToKebab('myComponentName'); // 'my-component-name'
     ```

### 7. **`capitalizeWords`**
   - **Description**: Capitalize the first letter of each word in a string.
   - **Use Case**: Formatting text (e.g., titles, names).
   - **Example**:
     ```javascript
     const formattedText = capitalizeWords('hello world'); // 'Hello World'
     ```

### 8. **`clone`**
   - **Description**: Create a deep copy of an object or array.
   - **Use Case**: Prevent unintended mutations of data.
   - **Example**:
     ```javascript
     const clonedObject = clone(originalObject);
     ```

### 9. **`colorLibelle`**
   - **Description**: Generate or manipulate color values (e.g., hex, RGB).
   - **Use Case**: Dynamic theming or styling.
   - **Example**:
     ```javascript
     const color = colorLibelle('primary'); // '#1976D2'
     ```

### 10. **`compFunc`**
    - **Description**: Dynamically generate component configurations.
    - **Use Case**: Create reusable or dynamic components.
    - **Example**:
      ```javascript
      const componentConfig = compFunc('div', { class: 'my-class' });
      ```

---

## **Data Manipulation Methods**

### 11. **`copyToClipboard`**
    - **Description**: Copy text or data to the clipboard.
    - **Use Case**: Enhance user experience (e.g., copy buttons).
    - **Example**:
      ```javascript
      copyToClipboard('Hello, World!');
      ```

### 12. **`flattenArray`**
    - **Description**: Flatten a nested array into a single-level array.
    - **Use Case**: Process complex data structures.
    - **Example**:
      ```javascript
      const flatArray = flattenArray([[1, 2], [3, 4]]); // [1, 2, 3, 4]
      ```

### 13. **`formatToStr`**
    - **Description**: Format data (e.g., numbers, dates) into a string.
    - **Use Case**: Display data in a user-friendly way.
    - **Example**:
      ```javascript
      const formattedDate = formatToStr(new Date(), 'YYYY-MM-DD');
      ```

### 14. **`generalVal`**
    - **Description**: Validate or process general values (e.g., check for null, undefined, or empty values).
    - **Use Case**: Data validation.
    - **Example**:
      ```javascript
      if (generalVal(userInput)) {
        console.log('Input is valid');
      }
      ```

### 15. **`getAttrs`**
    - **Description**: Retrieve attributes from an object or DOM element.
    - **Use Case**: Dynamic attribute handling.
    - **Example**:
      ```javascript
      const attrs = getAttrs(document.getElementById('myElement'));
      ```

---

## **Validation and Debugging Methods**

### 16. **`getObjectDepth`**
    - **Description**: Determine the depth of a nested object.
    - **Use Case**: Debugging or processing complex objects.
    - **Example**:
      ```javascript
      const depth = getObjectDepth({ a: { b: { c: 1 } } }); // 3
      ```

### 17. **`getRandomInt`**
    - **Description**: Generate a random integer within a specified range.
    - **Use Case**: Generate IDs, keys, or random values.
    - **Example**:
      ```javascript
      const randomNumber = getRandomInt(1, 100);
      ```

### 18. **`isDate`**
    - **Description**: Check if a value is a valid date.
    - **Use Case**: Date validation.
    - **Example**:
      ```javascript
      const isValidDate = isDate('2023-10-01'); // true
      ```

### 19. **`isEmpty`**
    - **Description**: Check if a value is empty (e.g., null, undefined, empty string, empty array, or empty object).
    - **Use Case**: Validation.
    - **Example**:
      ```javascript
      if (isEmpty(userInput)) {
        console.log('Input is empty');
      }
      ```

### 20. **`isPlainObject`**
    - **Description**: Check if a value is a plain object (not an array, function, or special object).
    - **Use Case**: Type checking.
    - **Example**:
      ```javascript
      const isPlain = isPlainObject({ a: 1 }); // true
      ```

---

## **Internationalization and Theming Methods**

### 21. **`objLang`**
    - **Description**: Handle multi-language objects or strings.
    - **Use Case**: Internationalization (i18n).
    - **Example**:
      ```javascript
      const translatedText = objLang({ en: 'Hello', fr: 'Bonjour' }, 'fr'); // 'Bonjour'
      ```

### 22. **`vuetifyColorList`**
    - **Description**: Get a list of Vuetify colors.
    - **Use Case**: Dynamic theming.
    - **Example**:
      ```javascript
      const colors = vuetifyColorList(); // ['primary', 'secondary', ...]
      ```

---

## **Conclusion**
The `wbc-ui2` module offers a wide range of utility methods to simplify web development tasks. Whether you're working with **data manipulation**, **validation**, **styling**, or **internationalization**, these methods provide powerful tools to enhance your productivity.

For more details, refer to the official documentation or explore the examples provided above.

---