# WBC and Markdown

The `WBC` component in `WBC-UI2` simplifies Markdown rendering and extends its capabilities by allowing seamless integration with HTML, Bootstrap, Vuetify, and even external files. Below, we explore how the `WBC` component handles Markdown content and files, making it an indispensable tool for modern web development.

---

## Rendering Markdown Content with `WBC`

The `WBC` component supports multiple ways to render Markdown content dynamically. Whether you're embedding simple Markdown strings, arrays of Markdown snippets, or complex objects with event handlers, the `WBC` component makes it effortless.

### Example 1: Simple Markdown Rendering

Render a Markdown string directly:

```html
<WBC item="MD\__ This is a Title with Markdown"></WBC>
```


Output:
```html
<h1>This is a Title with Markdown</h1>
```

### Example 2: Rendering Arrays of Markdown Snippets

Create an ordered list with mixed Markdown and component content:

```vue
<template>
   <WBC :item="[
    '<~ol>',
    '<li>',
    'MD\__# This is a Title',
    'MD\__Markdown section 1',
    'MD\__Markdown section 2',
    './fileName.md'
  ]"></WBC>
</template>
```

Output:
An ordered list with:
1. A Markdown title (`# This is a Title`).
2. A plain Markdown section (`Markdown section 1`).
3. Another Markdown section (`Markdown section 2`).
4. The content of the Markdown file (`./fileName.md`).

### Example 3: Rendering Complex Markdown Objects

Style Markdown elements with classes and add interactivity:

```vue
<template>
   <WBC :item="{ 
    comp: 'MD', 
    options: { 
      class: 'error pa-15', 
      html: '### li\__A List Item in Markdown Code', 
      on: { click: '() => alert("Clicked on Markdown snippet")' } 
    } 
  }"></WBC>
</template>
```

Output:
A styled `<li>` tag with the class `error pa-15` and an interactive `click` event.

---

## Rendering Markdown Files with `WBC`

Embedding Markdown files is straightforward with the `WBC` component. Place the file inside the ``public`` folder (respecting paths) and reference it using the ``./`` syntax.

### Example 1: Embedding a Local Markdown File

```vue
<WBC item="./fileName.md"></WBC>
```

### Example 2: Mixing Markdown Files with Other Components

Combine Markdown files with HTML, Bootstrap, and Vuetify components effortlessly:

```vue
<template>
   <WBC :item="[
    '<~ol>',
    '<li>',
    'item1',
    'BButton\__item2 is a Bootstrap Button|yellow pa-1|https://google.com',
    'VCard\__item3 is a red Vuetify Card|red|https://google.com',
    './fileName.md'
  ]"></WBC>
</template>
```

Output:
An ordered list with:
1. A plain text item (`item1`).
2. A styled Bootstrap button (`item2`).
3. A red Vuetify card linked to `https://google.com` (`item3`).
4. The content of the Markdown file (`./fileName.md`).

This approach allows developers to create rich, interactive lists or layouts without writing verbose HTML/CSS/JS.

---

## Extending Markdown Capabilities

While Markdown itself does not natively support embedding files directly, the `WBC` component bridges this gap. With `WBC`, developers can embed images, videos, PDFs, Excel sheets, and more within Markdown content.

### Example 1: Embedding an Image

```vue
<WBC item="MD\__![Image Alt Text](./jp0.jpg)"></WBC>
```

### Example 2: Embedding a Video

```vue
<WBC item="MD\__<video src='./mp4_0.mp4' controls></video>"></WBC>
```

### Example 3: Embedding a PDF

```vue
<WBC item="MD\__<embed src='./cv.pdf' type='application/pdf' width='100%' height='600px'></embed>"></WBC>
```

---

## Dynamic and Interactive Markdown

The `WBC` component supports dynamic behavior through the `dive: true` property. This enables real-time updates, backend communication, and asynchronous actions within Markdown content.

### Example: Dynamic Language Selection

```vue
<template>
   <WBC :item="{
    dive: true,
    comp: 'div',
    options: {
      html: 'MD\__### Select Your Language',
      watch: {
        '`route.params.lang': function(newLang) {
          this.updateLanguage(newLang);
        }
      }
    }
  }"></WBC>
</template>
```

 ---
## Markdown & File Integration

### Rendering Markdown Content with WBC

The `WBC` component simplifies Markdown rendering, allowing developers to embed Markdown strings, snippets, or entire files with ease. Here’s how:

#### Example 1: Basic Markdown Rendering

Render a simple Markdown title:

```
<WBC item="MD\__# This is a Title with Markdown"></WBC>
```

Output:
```
<h1>This is a Title with Markdown</h1>
```

#### Example 2: Rendering Markdown Snippets

Create an ordered list with mixed Markdown and Vue components:

```
<WBC item="[
  '<~ol>',
  '<li>',
  'MD\__Item 1',
  'BButton\__Item 2 is a Bootstrap Button|yellow pa-1|https://google.com',
  'VCard\__Item 3 is a Vuetify Card|red|https://example.com',
  './mdFile.md'
]"></WBC>
```

Output:
An ordered list with:
1. A plain Markdown text (`Item 1`).
2. A styled Bootstrap button (`Item 2`).
3. A red Vuetify card linked to `https://example.com`.
4. The content of the Markdown file (`./mdFile.md`).

#### Example 3: Stylish Markdown Components

Style Markdown elements with Bootstrap/Vuetify classes:

```
<WBC item="{ 
  comp: 'MD', 
  options: { 
    class: 'error pa-15', 
    html: '### li\__A List Item in Markdown Code', 
    on: { click: '() => alert("Clicked on Markdown snippet")' } 
  } 
}"></WBC>
```

Output:
A styled `<li>` tag with the class `error pa-15` and an interactive `click` event.

---

### Embedding Files with WBC

The `WBC` component supports embedding a wide range of file types, including images, audio, video, JSON, text, HTML, Markdown, documents (PDF, DOCX), and even code files (Python, TypeScript, Vue, PHP, etc.). Simply place the files in the ``public`` folder and reference them using the ``./`` or ``../`` syntax.

#### Example 1: Embedding Local Files

Place files in the ``public`` folder and use the following syntax:

```
<!-- Images -->
<WBC item="./jp0.jpg"></WBC>
<WBC item="./gif0.gif"></WBC>

<!-- Audio -->
<WBC item="./1.mp3"></WBC>

<!-- Video -->
<WBC item="./mp4_0.mp4"></WBC>

<!-- JSON -->
<WBC item="./json0.json"></WBC>

<!-- Documents -->
<WBC item="./cv.pdf"></WBC>
<WBC item="./docx0.docx"></WBC>

<!-- Code Files -->
<WBC item="./\__py0.py"></WBC>
<WBC item="./\__ts0.ts"></WBC>
```

#### Example 2: Embedding Remote Files

Integrate online content by specifying URLs:

```
<!-- Markdown File -->
<WBC item="https://example.com/file.md"></WBC>

<!-- Excel File -->
<WBC item="https://exinfm.com/excel%20files/cash_flow_model.xls"></WBC>

<!-- YouTube Video -->
<WBC item="https://youtu.be/aMkKs4l-dI0?list=RDaMkKs4l-dI0"></WBC>
```

#### Example 3: Mixing Markdown with Other Components

Combine Markdown with Vuetify, Bootstrap, and custom logic:

```
<WBC item="[
  '<~ol>',
  '<li>',
  'MD\__Item 1',
  'BButton\__Item 2 is a Bootstrap Button|yellow pa-1|https://google.com',
  'VCard\__Item 3 is a Vuetify Card|red|https://example.com',
  './mdFile.md'
]"></WBC>
```

Output:
An ordered list with:
1. A plain Markdown text (`Item 1`).
2. A styled Bootstrap button (`Item 2`).
3. A red Vuetify card linked to `https://example.com`.
4. The content of the Markdown file (`./mdFile.md`).

---

### Why This Matters in Web Development

1. **Unified Approach**:  
   - Developers no longer need separate libraries for Markdown rendering, file embedding, or dynamic component generation. `WBC-UI2` consolidates these functionalities into one micro-component.

2. **Interactive Documentation**:  
   - Perfect for creating interactive documentation or tutorials where Markdown is enriched with live examples, buttons, cards, or external content.

3. **Content Management Systems (CMS)**:  
   - Ideal for CMS platforms where users can write content in Markdown while embedding media files or interactive elements.

4. **Educational Tools**:  
   - Supports embedding Python, TypeScript, or PHP code snippets, making it ideal for educational platforms or technical blogs.

5. **Cross-Domain Applications**:  
   - Allows seamless integration of local and remote files, bridging the gap between frontend and backend workflows.

6. **Minimal Boilerplate**:  
   - No need for complex configurations or third-party libraries. Everything is handled through the ``WBC`` component.

---

### Conclusion

The `WBC` component’s ability to render Markdown, embed files, and mix with other frameworks (Bootstrap, Vuetify) makes `WBC-UI2` a standout choice for modern web development. Whether you’re building documentation, dashboards, or educational platforms, this feature accelerates development and enhances user experience.

Check out the [official documentation](https://github.com/wissemb11/wbc-ui2) for more advanced use cases and examples.

aaaaaaaaa|blue|kljlkl

bbbbbbb|blue|kljlkl
ccccccc\|blue\|kljlkl

ddddddd\\|blue\\|kljlkl

aaaaaaaaa\\|blue\\|yellow

li\__aaaaaaaaa|blue|kljlkl

li__bbbbbbb|blue|kljlkl

li__ccccccc\|blue\|kljlkl

li__ddddddd\\|blue\\|kljlkl
li\\__eeeeeeeeeee\\|blue\\|kljlkl

li\\__aaaaaaaaa\\|blue|yellow

WBC__./jp0.jpg

WBC__./gif0.gif

WBC__./jpeg1.jpeg

WBC__./jp0.jpg

WBC__./files/jp0.jpg

WBC__./files/gif0.gif

WBC__./files/jpeg1.jpeg

WBC__./files/jp0.jpg

WBC__./1.mp3

WBC__./0.mp3

WBC__./files/0.mp3

WBC__./files/1.mp3

WBC__./mp4_0.mp4

WBC__./0.mp4

WBC__./files/0.mp4

WBC__./json0.json

WBC__./files/json0.json

WBC__./txt0.txt

WBC__./files/txt0.txt

WBC__./html0.html

WBC__./indexxx.html

WBC__./files/html0.html

WBC__./md0.md

WBC__./md1.md

WBC__./files/md0.md

WBC__./files/md1.md

WBC__./doc0.doc

WBC__./docx0.docx

WBC__./pdf0.pdf

WBC__./cv.pdf

WBC__./files/pdf0.pdf

WBC__./__py0.py

WBC__./__md0.md

WBC__./__ts0.ts

WBC__./__tss0.ts

WBC__./__vue0.vue

WBC__./__php0.php

WBC__./__ts0.js

WBC__./__html0.html

WBC__./__html1.html
