// let tags={
//     '!DOCTYPE':{desc: 'Defines the document type',type:'Basic HTML'},
//     'html':{desc: 'Defines an HTML document',type:'Basic HTML'},
//     'head':{desc: 'Contains metadata/information for the document',type:'Basic HTML'},
//     'title':{desc: ' Defines a title for the document',type:'Basic HTML'},
//     'body' :{desc: 'Defines the descnt\'s body',type:'Basic HTML'},
//     'h1':{desc: 'Defines HTML headings size 1',type:'Basic HTML'},
//     'h2':{desc: 'Defines HTML headings size 2',type:'Basic HTML'},
//     'h3':{desc: 'Defines HTML headings size 3',type:'Basic HTML'},
//     'h4':{desc: 'Defines HTML headings size 4',type:'Basic HTML'},
//     'h5':{desc: 'Defines HTML headings size 5',type:'Basic HTML'},
//     'h6':{desc: 'Defines HTML headings size 6',type:'Basic HTML'},
//     'p':{desc: ' Defines a paragraph',type:'Basic HTML'},
//     'br':{desc: 'Inserts a single line break',type:'Basic HTML'},
//     'hr':{desc: 'Defines a thematic change in the content',type:'Basic HTML'},
//     '!--...--':{desc: 'Defines a comment',type:'Basic HTML'},
//     'acronym':{desc:'Defines an acronym',note:' Not supported in HTML5. Use <abbr> instead.',type:'Formatting'},
//     'abbr':{desc: 'Defines an abbreviation or an acronym',type:'Formatting'},
//     'address':{desc: ' Defines contact information for the author/owner of a document/article',type:'Formatting'},
//     'b':{desc: ' Defines bold text',type:'Formatting'},
//     'bdi':{desc: ' Isolates a part of text that might be formatted in a different direction from other text outside it',type:'Formatting'},
//     'bdo':{desc: ' Overrides the current text direction',type:'Formatting'},
//     'big':{desc:'Defines big text',note:' Not supported in HTML5. Use CSS instead.',type:'Formatting'},
//     'blockquote':{desc: 'Defines a section that is quoted from another source',type:'Formatting'},
//     'center':{desc:'Defines centered text',note: 'Not supported in HTML5. Use CSS instead.',type:'Formatting'},
//     'cite':{desc: 'Defines the title of a work',type:'Formatting'},
//     'code':{desc: 'Defines a piece of computer code',type:'Formatting'},
//     'del':{desc: ' Defines text that has been deleted from a document',type:'Formatting'},
//     'dfn':{desc: ' Specifies a term that is going to be defined within the content',type:'Formatting'},
//     'em':{desc: 'Defines emphasized text ',type:'Formatting'},
//     'font':{desc:'Defines font, color, and size for text',note: 'Not supported in HTML5. Use CSS instead.',type:'Formatting'},
//     'i':{desc: ' Defines a part of text in an alternate voice or mood',type:'Formatting'},
//     'ins':{desc: ' Defines a text that has been inserted into a document',type:'Formatting'},
//     'kbd':{desc: ' Defines keyboard input',type:'Formatting'},
//     'mark':{desc: 'Defines marked/highlighted text',type:'Formatting'},
//     'meter':{desc: ' Defines a scalar measurement within a known range (a gauge)',type:'Formatting'},
//     'pre':{desc: ' Defines preformatted text',type:'Formatting'},
//     'progress':{desc: 'Represents the progress of a task',type:'Formatting'},
//     'q':{desc: ' Defines a short quotation',type:'Formatting'},
//     'rp':{desc: 'Defines what to show in browsers that do not support ruby annotations',type:'Formatting'},
//     'rt':{desc: 'Defines an explanation/pronunciation of characters (for East Asian typography)',type:'Formatting'},
//     'ruby':{desc: 'Defines a ruby annotation (for East Asian typography)',type:'Formatting'},
//     's':{desc: ' Defines text that is no longer correct',type:'Formatting'},
//     'samp':{desc: 'Defines sample output from a computer program',type:'Formatting'},
//     'small':{desc: ' Defines smaller text',type:'Formatting'},
//     'strike':{desc:'Defines strikethrough text',note: 'Not supported in HTML5. Use <del> or <s> instead.',type:'Formatting'},
//     'strong':{desc: 'Defines important text',type:'Formatting'},
//     'sub':{desc: ' Defines subscripted text',type:'Formatting'},
//     'sup':{desc: ' Defines superscripted text',type:'Formatting'},
//     'template':{desc: 'Defines a container for content that should be hidden when the page loads',type:'Formatting'},
//     'time':{desc: 'Defines a specific time (or datetime)',type:'Formatting'},
//     'tt':{desc:'Defines teletype text',note: 'Not supported in HTML5. Use CSS instead.',type:'Formatting'},
//     'u':{desc: ' Defines some text that is unarticulated and styled differently from normal text',type:'Formatting'},
//     'var':{desc: ' Defines a variable',type:'Formatting'},
//     'wbr':{desc: ' Defines a possible line-break',type:'Formatting'},
//     'form':{desc: 'Defines an HTML form for user input',type:'Forms and Input'},
//     'input':{desc: ' Defines an input control',type:'Forms and Input'},
//     'textarea':{desc: 'Defines a multiline input control (text area)',type:'Forms and Input'},
//     'button':{desc: 'Defines a clickable button',type:'Forms and Input'},
//     'select':{desc: 'Defines a drop-down list',type:'Forms and Input'},
//     'optgroup':{desc: 'Defines a group of related options in a drop-down list',type:'Forms and Input'},
//     'option':{desc: 'Defines an option in a drop-down list',type:'Forms and Input'},
//     'label':{desc: ' Defines a label for an <input> element',type:'Forms and Input'},
//     'fieldset':{desc: 'Groups related elements in a form',type:'Forms and Input'},
//     'legend':{desc: 'Defines a caption for a <fieldset> element',type:'Forms and Input'},
//     'datalist':{desc: 'Specifies a list of pre-defined options for input controls',type:'Forms and Input'},
//     'output':{desc: 'Defines the result of a calculation',type:'Forms and Input'},
//     'frame': {note:'Not supported in HTML5',desc:'Defines a window (a frame) in a frameset',type:'Frames'},
//     'frameset':{desc:'Defines a set of frames',note: 'Not supported in HTML5.',type:'Frames'},
//     'noframes':{desc:'Defines an alternate content for users that do not support frames',note: 'Not supported in HTML5.',type:'Frames'},
//     'iframe':{desc: 'Defines an inline frame',type:'Frames'},
//     'img':{desc: ' Defines an image',type:'Images'},
//     'map':{desc: ' Defines a client-side image map',type:'Images'},
//     'area':{desc: 'Defines an area inside an image map',type:'Images'},
//     'canvas':{desc: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',type:'Images'},
//     'figcaption':{desc: 'Defines a caption for a <figure> element',type:'Images'},
//     'figure':{desc: 'Specifies self-contained content',type:'Images'},
//     'picture':{desc: ' Defines a container for multiple image resources',type:'Images'},
//     'svg':{desc: ' Defines a container for SVG graphics',type:'Images'},
//     'audio':{desc: ' Defines sound content',type:'Audio / Video'},
//     'source':{desc: 'Defines multiple media resources for media elements (<video>, <audio> and <picture>)',type:'Audio / Video'},
//     'track':{desc: ' Defines text tracks for media elements (<video> and <audio>)',type:'Audio / Video'},
//     'video':{desc: ' Defines a video or movie',type:'Audio / Video'},
//     'a':{desc: ' Defines a hyperlink',type:'Links'},
//     'link':{desc: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',type:'Links'},
//     'nav':{desc: ' Defines navigation links',type:'Links'},
//     'ul':{desc: 'Defines an unordered list',type:'Lists'},
//     'ol':{desc: 'Defines an ordered list',type:'Lists'},
//     'li':{desc: 'Defines a list item',type:'Lists'},
//     'dir':{desc:'Defines a directory list',note:' Not supported in HTML5. Use <ul> instead.',type:'Lists'},
//     'dl':{desc: 'Defines a description list',type:'Lists'},
//     'dt':{desc: 'Defines a term/name in a description list',type:'Lists'},
//     'dd':{desc: 'Defines a description of a term/name in a description list',type:'Lists'},
//     'table':{desc: ' Defines a table',type:'Tables'},
//     'caption':{desc: ' Defines a table caption',type:'Tables'},
//     'th':{desc: 'Defines a header cell in a table',type:'Tables'},
//     'tr':{desc: 'Defines a row in a table',type:'Tables'},
//     'td':{desc: 'Defines a cell in a table',type:'Tables'},
//     'thead':{desc: 'Groups the header content in a table',type:'Tables'},
//     'tbody':{desc: 'Groups the body content in a table',type:'Tables'},
//     'tfoot':{desc: 'Groups the footer content in a table',type:'Tables'},
//     'col':{desc: ' Specifies column properties for each column within a <colgroup> element',type:'Tables'},
//     'colgroup':{desc: 'Specifies a group of one or more columns in a table for formatting',type:'Tables'},
//     'style':{desc: ' Defines style information for a document',type:'Styles and Semantics'},
//     'div':{desc: ' Defines a section in a document',type:'Styles and Semantics'},
//     'span':{desc: 'Defines a section in a document',type:'Styles and Semantics'},
//     'header':{desc: 'Defines a header for a document or section',type:'Styles and Semantics'},
//     'footer':{desc: 'Defines a footer for a document or section',type:'Styles and Semantics'},
//     'main':{desc: 'Specifies the main content of a document',type:'Styles and Semantics'},
//     'section':{desc: ' Defines a section in a document',type:'Styles and Semantics'},
//     'article':{desc: ' Defines an article',type:'Styles and Semantics'},
//     'aside':{desc: ' Defines content aside from the page content',type:'Styles and Semantics'},
//     'details':{desc: ' Defines additional details that the user can view or hide',type:'Styles and Semantics'},
//     'dialog':{desc: 'Defines a dialog box or window',type:'Styles and Semantics'},
//     'summary':{desc: ' Defines a visible heading for a <details> element',type:'Styles and Semantics'},
//     'data':{desc: 'Adds a machine-readable translation of a given content',type:'Styles and Semantics'},
//     'head':{desc: 'Defines information about the document',type:'Meta Info'},
//     'meta':{desc: 'Defines metadata about an HTML document',type:'Meta Info'},
//     'base':{desc: 'Specifies the base URL/target for all relative URLs in a document',type:'Meta Info'},
//     'basefont':{desc:'Specifies a default color, size, and font for all text in a document',note: 'Not supported in HTML5. Use CSS instead.',type:'Meta Info'},
//     'script':{desc: 'Defines a client-side script',type:'Programming'},
//     'noscript':{desc: 'Defines an alternate content for users that do not support client-side scripts',type:'Programming'},
//     'applet':{desc:'Defines an embedded applet',note: 'Not supported in HTML5. Use <embed> or <object> instead.',type:'Programming'},
//     'embed':{desc: ' Defines a container for an external (non-HTML) application',type:'Programming'},
//     'object':{desc: 'Defines an embedded object',type:'Programming'},
//     'param':{desc: ' Defines a parameter for an object',type:'Programming'}
//     }

// let all_attrs = {
//     accept: {
//         concern: ['input'],
//         desc: '    Specifies the types of files that the server accepts (only for type="file") ',
//         note: ''
//     },
//     'accet-charset': {
//         concern: ['form'],
//         desc: '    Specifies the character encodings that are to be used for the form submission   ',
//         note: ''
//     },
//     accesskey: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies a shortcut key to activate/focus an element   ',
//         note: ''
//     },
//     action: {
//         concern: ['form'],
//         desc: '    Specifies where to send the form-data when a form is submitted  ',
//         note: ''
//     },
//     align: {
//         concern: [],
//         desc: '    Specifies the alignment according to surrounding elements. Use CSS instead  ',
//         note: '    Not supported in HTML 5.    '
//     },
//     alt: {
//         concern: ['area', 'img', 'input'],
//         desc: '    Specifies an alternate text when the original element fails to display  ',
//         note: ''
//     },
//     async: {
//         concern: ['script'],
//         desc: '    Specifies that the script is executed asynchronously (only for external scripts)    ',
//         note: ''
//     },
//     autocomplete: {
//         concern: ['form', 'input'],
//         desc: '    Specifies whether the <form> or the <input> element should have autocomplete enabled    ',
//         note: ''
//     },
//     autofocus: {
//         concern: ['button', 'input', 'select', 'textarea'],
//         desc: '    Specifies that the element should automatically get focus when the page loads   ',
//         note: ''
//     },
//     autoplay: {
//         concern: ['audio', 'video'],
//         desc: '    Specifies that the audio/video will start playing as soon as it is ready    ',
//         note: ''
//     },
//     bgcolor: {
//         concern: [],
//         desc: '    Specifies the background color of an element. Use CSS instead   ',
//         note: '    Not supported in HTML 5.    '
//     },
//     border: {
//         concern: [],
//         desc: '    Specifies the width of the border of an element. Use CSS instead    ',
//         note: '    Not supported in HTML 5.    '
//     },
//     charset: {
//         concern: ['meta', 'script'],
//         desc: '    Specifies the character encoding    ',
//         note: ''
//     },
//     checked: {
//         concern: ['input'],
//         desc: '    Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")  ',
//         note: ''
//     },
//     cite: {
//         concern: ['blockquote', 'del', 'ins', 'q'],
//         desc: '    Specifies a URL which explains the quote/deleted/inserted text  ',
//         note: ''
//     },
//     class: {
//         concern: ['Global Attributes'],
//             desc: '    Specifies one or more classnames for an element (refers to a class in a style sheet)    ',
//             note: ''
//     },
//     color: {
//         concern: [],
//         desc: '    Specifies the text color of an element. Use CSS instead ',
//         note: '    Not supported in HTML 5.    '
//     },
//     cols: {
//         concern: ['textarea'],
//         desc: '    Specifies the visible width of a text area  ',
//         note: ''
//     },
//     colspan: {
//         concern: ['td', 'th'],
//         desc: '    Specifies the number of columns a table cell should span    ',
//         note: ''
//     },
//     content: {
//         concern: ['meta'],
//         desc: '    Gives the value associated with the http-equiv or name attribute    ',
//         note: ''
//     },
//     contenteditable: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies whether the content of an element is editable or not  ',
//         note: ''
//     },
//     controls: {
//         concern: ['audio', 'video'],
//         desc: '    Specifies that audio/video controls should be displayed (such as a play/pause button etc)   ',
//         note: ''
//     },
//     coords: {
//         concern: ['area'],
//         desc: '    Specifies the coordinates of the area   ',
//         note: ''
//     },
//     data: {
//         concern: ['object'],
//         desc: '    Specifies the URL of the resource to be used by the object  ',
//         note: ''
//     },
//     'data-*': {
//         concern: ['Global Attributes'],
//         desc: '    Used to store custom data private to the page or application    ',
//         note: ''
//     },
//     datetime: {
//         concern: ['del', 'ins', 'time'],
//         desc: '    Specifies the date and time ',
//         note: ''
//     },
//     default: {
//         concern: ['track'],
//         desc: '    Specifies that the track is to be enabled if the user\'s preferences do not indicate that another track would be more appropriate ',
//         note: ''
//     },
//     defer: {
//         concern: ['script'],
//         desc: '    Specifies that the script is executed when the page has finished parsing (only for external scripts)    ',
//         note: ''
//     },
//     dir: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies the text direction for the content in an element  ',
//         note: ''
//     },
//     dirname: {
//         concern: ['input', 'textarea'],
//         desc: '    Specifies that the text direction will be submitted ',
//         note: ''
//     },
//     disabled: {
//         concern: ['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea'],
//         desc: '    Specifies that the specified element/group of elements should be disabled   ',
//         note: ''
//     },
//     download: {
//         concern: ['a', 'area'],
//         desc: '    Specifies that the target will be downloaded when a user clicks on the hyperlink    ',
//         note: ''
//     },
//     draggable: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies whether an element is draggable or not    ',
//         note: ''
//     },
//     enctype: {
//         concern: ['form'],
//         desc: '    Specifies how the form-data should be encoded when submitting it to the server (only for method="post") ',
//         note: ''
//     },
//     for: {
//         concern: ['label', 'output'],
//         desc: '    Specifies which form element(s) a label/calculation is bound to ',
//         note: ''
//     },
//     form: {
//         concern: ['button', 'fieldset', 'input', 'label', 'meter', 'object', 'output', 'select', 'textarea'],
//         desc: '    Specifies the name of the form the element belongs to   ',
//         note: ''
//     },
//     formaction: {
//         concern: ['button', 'input'],
//         desc: '    Specifies where to send the form-data when a form is submitted. Only for type="submit"  ',
//         note: ''
//     },
//     headers: {
//         concern: ['td', 'th'],
//         desc: '    Specifies one or more headers cells a cell is related to    ',
//         note: ''
//     },
//     height: {
//         concern: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
//         desc: '    Specifies the height of the element ',
//         note: ''
//     },
//     hidden: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies that an element is not yet, or is no longer, relevant ',
//         note: ''
//     },
//     high: {
//         concern: ['meter'],
//         desc: '    Specifies the range that is considered to be a high value   ',
//         note: ''
//     },
//     href: {
//         concern: ['a', 'area', 'base', 'link'],
//         desc: '    Specifies the URL of the page the link goes to  ',
//         note: ''
//     },
//     hreflang: {
//         concern: ['a', 'area', 'link'],
//         desc: '    Specifies the language of the linked document   ',
//         note: ''
//     },
//     'http-equiv': {
//         concern: ['meta'],
//         desc: '    Provides an HTTP header for the information/value of the content attribute  ',
//         note: ''
//     },
//     id: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies a unique id for an element    ',
//         note: ''
//     },
//     ismap: {
//         concern: ['img'],
//         desc: '    Specifies an image as a server-side image map   ',
//         note: ''
//     },
//     kind: {
//         concern: ['track'],
//         desc: '    Specifies the kind of text track    ',
//         note: ''
//     },
//     label: {
//         concern: ['track', 'option', 'optgroup'],
//         desc: '    Specifies the title of the text track   ',
//         note: ''
//     },
//     lang: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies the language of the element\'s content ',
//         note: ''
//     },
//     list: {
//         concern: ['input'],
//         desc: '    Refers to a <datalist> element that contains pre-defined options for an <input> element ',
//         note: ''
//     },
//     loop: {
//         concern: ['audio', 'video'],
//         desc: '    Specifies that the audio/video will start over again, every time it is finished ',
//         note: ''
//     },
//     low: {
//         concern: ['meter'],
//         desc: '    Specifies the range that is considered to be a low value    ',
//         note: ''
//     },
//     max: {
//         concern: ['input', 'meter', 'progress'],
//         desc: '    Specifies the maximum value ',
//         note: ''
//     },
//     maxlength: {
//         concern: ['input', 'textarea'],
//         desc: '    Specifies the maximum number of characters allowed in an element    ',
//         note: ''
//     },
//     media: {
//         concern: ['a', 'area', 'link', 'source', 'style'],
//         desc: '    Specifies what media/device the linked document is optimized for    ',
//         note: ''
//     },
//     method: {
//         concern: ['form'],
//         desc: '    Specifies the HTTP method to use when sending form-data ',
//         note: ''
//     },
//     min: {
//         concern: ['input', 'meter'],
//         desc: '    Specifies a minimum value   ',
//         note: ''
//     },
//     multiple: {
//         concern: ['input', 'select'],
//         desc: '    Specifies that a user can enter more than one value ',
//         note: ''
//     },
//     muted: {
//         concern: ['video', 'audio'],
//         desc: '    Specifies that the audio output of the video should be muted    ',
//         note: ''
//     },
//     name: {
//         concern: ['button', 'fieldset', 'form', 'iframe', 'input', 'map', 'meta', 'object', 'output', 'param', 'select', 'textarea'],
//         desc: '    Specifies the name of the element   ',
//         note: ''
//     },
//     novalidate: {
//         concern: ['form'],
//         desc: '    Specifies that the form should not be validated when submitted  ',
//         note: ''
//     },
//     onabort: {
//         concern: ['audio', 'embed', 'img', 'object', 'video'],
//         desc: '    Script to be run on abort   ',
//         note: ''
//     },
//     onafterprint: {
//         concern: ['body'],
//         desc: '    Script to be run after the document is printed  ',
//         note: ''
//     },
//     onbeforeprint: {
//         concern: ['body'],
//         desc: '    Script to be run before the document is printed ',
//         note: ''
//     },
//     onbeforeunload: {
//         concern: ['body'],
//         desc: '    Script to be run when the document is about to be unloaded  ',
//         note: ''
//     },
//     onblur: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element loses focus   ',
//         note: ''
//     },
//     oncanplay: {
//         concern: ['audio', 'embed', 'object', 'video'],
//         desc: '    Script to be run when a file is ready to start playing (when it has buffered enough to begin)   ',
//         note: ''
//     },
//     oncanplaythrough: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when a file can be played all the way to the end without pausing for buffering ',
//         note: ''
//     },
//     onchange: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the value of the element is changed   ',
//         note: ''
//     },
//     onclick: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element is being clicked  ',
//         note: ''
//     },
//     oncontextmenu: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a context menu is triggered   ',
//         note: ''
//     },
//     oncopy: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the content of the element is being copied    ',
//         note: ''
//     },
//     oncuechange: {
//         concern: ['track'],
//         desc: '    Script to be run when the cue changes in a <track> element  ',
//         note: ''
//     },
//     oncut: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the content of the element is being cut   ',
//         note: ''
//     },
//     ondblclick: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element is being double-clicked   ',
//         note: ''
//     },
//     ondrag: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element is being dragged  ',
//         note: ''
//     },
//     ondragend: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run at the end of a drag operation ',
//         note: ''
//     },
//     ondragenter: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when an element has been dragged to a valid drop target    ',
//         note: ''
//     },
//     ondragleave: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when an element leaves a valid drop target ',
//         note: ''
//     },
//     ondragover: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when an element is being dragged over a valid drop target  ',
//         note: ''
//     },
//     ondragstart: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run at the start of a drag operation   ',
//         note: ''
//     },
//     ondrop: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when dragged element is being dropped  ',
//         note: ''
//     },
//     ondurationchange: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the length of the media changes   ',
//         note: ''
//     },
//     onemptied: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)    ',
//         note: ''
//     },
//     onended: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the media has reach the end (a useful event for messages like "thanks for listening") ',
//         note: ''
//     },
//     onerror: {
//         concern: ['audio', 'body', 'embed', 'img', 'object', 'script', 'style', 'video'],
//         desc: '    Script to be run when an error occurs   ',
//         note: ''
//     },
//     onfocus: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element gets focus    ',
//         note: ''
//     },
//     onhashchange: {
//         concern: ['body'],
//         desc: '    Script to be run when there has been changes to the anchor part of the a URL    ',
//         note: ''
//     },
//     oninput: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element gets user input   ',
//         note: ''
//     },
//     oninvalid: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element is invalid    ',
//         note: ''
//     },
//     onkeydown: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a user is pressing a key  ',
//         note: ''
//     },
//     onkeypress: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a user presses a key  ',
//         note: ''
//     },
//     onkeyup: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a user releases a key ',
//         note: ''
//     },
//     onload: {
//         concern: ['body', 'iframe', 'img', 'input', 'link', 'script', 'style'],
//         desc: '    Script to be run when the element is finished loading   ',
//         note: ''
//     },
//     onloadeddata: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when media data is loaded  ',
//         note: ''
//     },
//     onloadedmetadata: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when meta data (like dimensions and duration) are loaded   ',
//         note: ''
//     },
//     onloadstart: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run just as the file begins to load before anything is actually loaded ',
//         note: ''
//     },
//     onmousedown: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a mouse button is pressed down on an element  ',
//         note: ''
//     },
//     onmousemove: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run as long as the  mouse pointer is moving over an element    ',
//         note: ''
//     },
//     onmouseout: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a mouse pointer moves out of an element   ',
//         note: ''
//     },
//     onmouseover: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a mouse pointer moves over an element ',
//         note: ''
//     },
//     onmouseup: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a mouse button is released over an element    ',
//         note: ''
//     },
//     onmousewheel: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when a mouse wheel is being scrolled over an element   ',
//         note: ''
//     },
//     onoffline: {
//         concern: ['body'],
//         desc: '    Script to be run when the browser starts to work offline    ',
//         note: ''
//     },
//     ononline: {
//         concern: ['body'],
//         desc: '    Script to be run when the browser starts to work online ',
//         note: ''
//     },
//     onpagehide: {
//         concern: ['body'],
//         desc: '    Script to be run when a user navigates away from a page ',
//         note: ''
//     },
//     onpageshow: {
//         concern: ['body'],
//         desc: '    Script to be run when a user navigates to a page    ',
//         note: ''
//     },
//     onpaste: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the user pastes some content in an element    ',
//         note: ''
//     },
//     onpause: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the media is paused either by the user or programmatically    ',
//         note: ''
//     },
//     onplay: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the media has started playing ',
//         note: ''
//     },
//     onplaying: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the media has started playing ',
//         note: ''
//     },
//     onpopstate: {
//         concern: ['body'],
//         desc: '    Script to be run when the window\'s history changes. ',
//         note: ''
//     },
//     onprogress: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the browser is in the process of getting the media data   ',
//         note: ''
//     },
//     onratechange: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode). ',
//         note: ''
//     },
//     onreset: {
//         concern: ['form'],
//         desc: '    Script to be run when a reset button in a form is clicked.  ',
//         note: ''
//     },
//     onresize: {
//         concern: ['body'],
//         desc: '    Script to be run when the browser window is being resized.  ',
//         note: ''
//     },
//     onscroll: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when an element\'s scrollbar is being scrolled ',
//         note: ''
//     },
//     onsearch: {
//         concern: ['input'],
//         desc: '    Script to be run when the user writes something in a search field (for <input type="search">)   ',
//         note: ''
//     },
//     onseeked: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the seeking attribute is set to false indicating that seeking has ended   ',
//         note: ''
//     },
//     onseeking: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the seeking attribute is set to true indicating that seeking is active    ',
//         note: ''
//     },
//     onselect: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the element gets selected ',
//         note: ''
//     },
//     onstalled: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the browser is unable to fetch the media data for whatever reason ',
//         note: ''
//     },
//     onstorage: {
//         concern: ['body'],
//         desc: '    Script to be run when a Web Storage area is updated ',
//         note: ''
//     },
//     onsubmit: {
//         concern: ['form'],
//         desc: '    Script to be run when a form is submitted   ',
//         note: ''
//     },
//     onsuspend: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason ',
//         note: ''
//     },
//     ontimeupdate: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media) ',
//         note: ''
//     },
//     ontoggle: {
//         concern: ['details'],
//         desc: '    Script to be run when the user opens or closes the <details> element    ',
//         note: ''
//     },
//     onunload: {
//         concern: ['body'],
//         desc: '    Script to be run when a page has unloaded (or the browser window has been closed)   ',
//         note: ''
//     },
//     onvolumechange: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run each time the volume of a video/audio has been changed ',
//         note: ''
//     },
//     onwaiting: {
//         concern: ['audio', 'video'],
//         desc: '    Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)   ',
//         note: ''
//     },
//     onwheel: {
//         concern: ['All visible elements.'],
//         desc: '    Script to be run when the mouse wheel rolls up or down over an element  ',
//         note: ''
//     },
//     open: {
//         concern: ['details'],
//         desc: '    Specifies that the details should be visible (open) to the user ',
//         note: ''
//     },
//     optimum: {
//         concern: ['meter'],
//         desc: '    Specifies what value is the optimal value for the gauge ',
//         note: ''
//     },
//     pattern: {
//         concern: ['input'],
//         desc: '    Specifies a regular expression that an <input> element\'s value is checked against ',
//         note: ''
//     },
//     placeholder: {
//         concern: ['input', 'textarea'],
//         desc: '    Specifies a short hint that describes the expected value of the element ',
//         note: ''
//     },
//     poster: {
//         concern: ['video'],
//         desc: '    Specifies an image to be shown while the video is downloading, or until the user hits the play button   ',
//         note: ''
//     },
//     preload: {
//         concern: ['audio', 'video'],
//         desc: '    Specifies if and how the author thinks the audio/video should be loaded when the page loads ',
//         note: ''
//     },
//     readonly: {
//         concern: ['input', 'textarea'],
//         desc: '    Specifies that the element is read-only ',
//         note: ''
//     },
//     rel: {
//         concern: ['a', 'area', 'form', 'link'],
//         desc: '    Specifies the relationship between the current document and the linked document ',
//         note: ''
//     },
//     required: {
//         concern: ['input', 'select', 'textarea'],
//         desc: '    Specifies that the element must be filled out before submitting the form    ',
//         note: ''
//     },
//     reversed: {
//         concern: ['ol'],
//         desc: '    Specifies that the list order should be descending (9,8,7...)   ',
//         note: ''
//     },
//     rows: {
//         concern: ['textarea'],
//         desc: '    Specifies the visible number of lines in a text area    ',
//         note: ''
//     },
//     rowspan: {
//         concern: ['td', 'th'],
//         desc: '    Specifies the number of rows a table cell should span   ',
//         note: ''
//     },
//     sandbox: {
//         concern: ['iframe'],
//         desc: '    Enables an extra set of restrictions for the content in an <iframe> ',
//         note: ''
//     },
//     scope: {
//         concern: ['th'],
//         desc: '    Specifies whether a header cell is a header for a column, row, or group of columns or rows  ',
//         note: ''
//     },
//     selected: {
//         concern: ['option'],
//         desc: '    Specifies that an option should be pre-selected when the page loads ',
//         note: ''
//     },
//     shape: {
//         concern: ['area'],
//         desc: '    Specifies the shape of the area ',
//         note: ''
//     },
//     size: {
//         concern: ['input', 'select'],
//         desc: '    Specifies the width, in characters (for <input>) or specifies the number of visible options (for <select>)  ',
//         note: ''
//     },
//     sizes: {
//         concern: ['img', 'link', 'source'],
//         desc: '    Specifies the size of the linked resource   ',
//         note: ''
//     },
//     span: {
//         concern: ['col', 'colgroup'],
//         desc: '    Specifies the number of columns to span ',
//         note: ''
//     },
//     spellcheck: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies whether the element is to have its spelling and grammar checked or not    ',
//         note: ''
//     },
//     src: {
//         concern: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
//         desc: '    Specifies the URL of the media file ',
//         note: ''
//     },
//     srcdoc: {
//         concern: ['iframe'],
//         desc: '    Specifies the HTML content of the page to show in the <iframe>  ',
//         note: ''
//     },
//     srclang: {
//         concern: ['track'],
//         desc: '    Specifies the language of the track text data (required if kind="subtitles")    ',
//         note: ''
//     },
//     srcset: {
//         concern: ['img', 'source'],
//         desc: '    Specifies the URL of the image to use in different situations   ',
//         note: ''
//     },
//     start: {
//         concern: ['ol'],
//         desc: '    Specifies the start value of an ordered list    ',
//         note: ''
//     },
//     step: {
//         concern: ['input'],
//         desc: '    Specifies the legal number intervals for an input field ',
//         note: ''
//     },
//     style: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies an inline CSS style for an element    ',
//         note: ''
//     },
//     tabindex: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies the tabbing order of an element   ',
//         note: ''
//     },
//     target: {
//         concern: ['a', 'area', 'base', 'form'],
//         desc: '    Specifies the target for where to open the linked document or where to submit the form  ',
//         note: ''
//     },
//     title: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies extra information about an element    ',
//         note: ''
//     },
//     translate: {
//         concern: ['Global Attributes'],
//         desc: '    Specifies whether the content of an element should be translated or not ',
//         note: ''
//     },
//     type: {
//         concern: ['a', 'button', 'embed', 'input', 'link', 'menu', 'object', 'script', 'source', 'style'],
//         desc: '    Specifies the type of element   ',
//         note: ''
//     },
//     usemap: {
//         concern: ['img', 'object'],
//         desc: '    Specifies an image as a client-side image map   ',
//         note: ''
//     },
//     value: {
//         concern: ["button", "input", "option", "meter", "progress", "param"],
//         desc: '    Specifies the value of the element  ',
//         note: ''
//     },
//     width: {
//         concern: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
//         desc: '    Specifies the width of the element  ',
//         note: ''
//     },
//     wrap: {
//         concern: ['textarea'],
//         desc: '    Specifies how the text in a text area is to be wrapped when submitted in a form ',
//         note: ''
//     },
// };

// let html_tags_by_browser = {
//     a: {
//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//         attrs: {
//             download: {
//                 browser: {
//                     chr: 14.0,
//                     ie: 18.0,
//                     fx: 20.0,
//                     saf: 10.1,
//                     op: 15.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },

//             href: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             hreflang: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             media: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             ping: {
//                 browser: {
//                     chr: true,
//                     ie: false,
//                     fx: true,
//                     saf: false,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             referrerpolicy: {
//                 browser: {
//                     chr: 51.0,
//                     ie: 79.0,
//                     fx: 50.0,
//                     saf: 11.1,
//                     op: 38.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },

//             rel: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             target: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             type: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {}
//             },
//         },
//     },
//     abbr: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {

//         },
//     },
//     address: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     area: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//             alt: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             coords: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             download: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             href: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             hreflang: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             media: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             referrerpolicy: {
//                 browser: {
//                     chr: 51.0,
//                     ie: 79.0,
//                     fx: 50.0,
//                     saf: 11.1,
//                     op: 38.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },

//             rel: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             shape: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             target: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             type: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {}
//             },
//         },
//     },
//     article: {

//         browser: {
//             chr: 6.0,
//             ie: 9.0,
//             fx: 4.0,
//             saf: 5.0,
//             op: 11.1
//         },
//         attrs: {

//         },
//     },
//     aside: {

//         browser: {
//             chr: 6.0,
//             ie: 9.0,
//             fx: 4.0,
//             saf: 5.0,
//             op: 11.1
//         },
//         attrs: {

//         },
//     },
//     audio: {

//         browser: {
//             chr: 4.0,
//             ie: 9.0,
//             fx: 3.5,
//             saf: 4.0,
//             op: 11.5
//         },
//         attrs: {},

//         autoplay: {
//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 3.5,
//                 saf: 4.0,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',
//         },

//         controls: {
//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 3.5,
//                 saf: 4.0,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',
//         },

//         loop: {
//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 3.5,
//                 saf: 4.0,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',
//         },

//         muted: {
//             browser: {
//                 chr: 4.0,
//                 ie: 10.0,
//                 fx: 11.0,
//                 saf: 7.1,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',
//         },

//         preload: {
//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 4.0,
//                 saf: 4.0,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',
//         },

//         src: {
//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 3.5,
//                 saf: 4.0,
//                 op: 11.5
//             },
//             concern: {},
//             desc: '',
//             note: '',

//         },
//     },
//     b: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {

//         },
//     },
//     base: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//             href: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {},
//             },
//             target: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {}
//             },
//         },
//             },
//         bdi: {

//             browser: {
//                 chr: 16.0,
//                 ie: 79.0,
//                 fx: 10.0,
//                 saf: false,
//                 op: 15.0
//             },
//             attrs: {

//             },
//         },
//         bdo: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {
//                 dir: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     desc: '',
//                     note: '',
//                     concern: {}
//                 },
//             },
//         },
//         blockquote: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {
//                 cite: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     }
//                 },
//                 desc: '',
//                 note: '',
//                 concern: {}
//             },
//         },
//         body: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         br: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         button: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {
//                 autofocus: {
//                     browser: {
//                         chr: 5.0,
//                         ie: 10.0,
//                         fx: 4.0,
//                         saf: 5.0,
//                         op: 9.6
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },

//                 disabled: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     desc: '',
//                     note: '',
//                     concern: {},
//                 },
//                 form: {
//                     browser: {
//                         chr: 10.0,
//                         ie: 16.0,
//                         fx: 4.0,
//                         saf: 5.1,
//                         op: 9.5
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 formaction: {
//                     browser: {
//                         chr: 9.0,
//                         ie: 10.0,
//                         fx: 4.0,
//                         saf: 5.1,
//                         op: 15.0
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 formenctype: {
//                     browser: {
//                         chr: 9.0,
//                         ie: 10.0,
//                         fx: 4.0,
//                         saf: 5.1,
//                         op: 11.5
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 formmethod: {
//                     browser: {
//                         chr: 9.0,
//                         ie: 10.0,
//                         fx: 4.0,
//                         saf: 5.1,
//                         op: 15.0
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 formnovalidate: {
//                     browser: {
//                         chr: 6.0,
//                         ie: 11.0,
//                         fx: 4.0,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },

//                 formtarget: {
//                     browser: {
//                         chr: 9.0,
//                         ie: 10.0,
//                         fx: 4.0,
//                         saf: 5.1,
//                         op: 10.6
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 name: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },
//                 type: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },
//                 value: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 }
//             },
//         },
//         canvas: {

//             browser: {
//                 chr: 4.0,
//                 ie: 9.0,
//                 fx: 2.0,
//                 saf: 3.1,
//                 op: 9.0
//             },
//             attrs: {},

//             height: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 2.0,
//                     saf: 3.1,
//                     op: 9.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             width: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 2.0,
//                     saf: 3.1,
//                     op: 9.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//         },

//     caption: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//     },
//         },
//         cite: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         code: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {

//             },
//             col: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {
//                     span: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     }
//                 },
//             },
//             colgroup: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {
//                     span: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     }
//                 },
//             },
//             data: {

//                 browser: {
//                     chr: 62.0,
//                     ie: 13.0,
//                     fx: 22.0,
//                     saf: false,
//                     op: 49.0
//                 },
//                 attrs: {

//                     value: {
//                         browser: {
//                             chr: 62.0,
//                             ie: 13.0,
//                             fx: 22.0,
//                             saf: false,
//                             op: 49.0
//                         },
//                         concern: {},
//                         desc: '',
//                         note: ''
//                     },

//                 },
//             },
//             datalist: {

//                 browser: {
//                     chr: 20.0,
//                     ie: 10.0,
//                     fx: 4.0,
//                     saf: 12.1,
//                     op: 9.5
//                 },
//                 attrs: {},
//             },
//             dd: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {

//                 },
//                 del: {

//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     attrs: {
//                         cite: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         datetime: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         }
//                     },
//                 },
//                 details: {

//                     browser: {
//                         chr: 12.0,
//                         ie: 79.0,
//                         fx: 49.0,
//                         saf: 6.0,
//                         op: 15.0
//                     },
//                     attrs: {},

//                     open: {
//                         browser: {
//                             chr: 12.0,
//                             ie: 79.0,
//                             fx: 49.0,
//                             saf: 6.0,
//                             op: 15.0
//                         },
//                         concern: {},
//                         desc: '',
//                         note: ''
//                     },

//                 },
//             },
//             dfn: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {

//                 },
//                 dialog: {

//                     browser: {
//                         chr: 37.0,
//                         ie: 79.0,
//                         fx: 53.0,
//                         saf: false,
//                         op: 24.0
//                     },
//                     attrs: {},

//                     open: {
//                         browser: {
//                             chr: 37.0,
//                             ie: 79.0,
//                             fx: 53.0,
//                             saf: false,
//                             op: 24.0
//                         },
//                         concern: {},
//                         desc: '',
//                         note: ''
//                     },

//                 },
//             },
//             div: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {

//                 },
//                 dl: {

//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     attrs: {

//                     },
//                     dt: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         em: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {

//                             },
//                             embed: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     height: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     src: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     type: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     width: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             fieldset: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     disabled: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: 6.0,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     form: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     name: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 11.0,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             figcaption: {

//                                 browser: {
//                                     chr: 8.0,
//                                     ie: 9.0,
//                                     fx: 4.0,
//                                     saf: 5.1,
//                                     op: 11.0
//                                 },
//                                 attrs: {},

//                             },
//                         },
//                         figure: {

//                             browser: {
//                                 chr: 8.0,
//                                 ie: 9.0,
//                                 fx: 4.0,
//                                 saf: 5.1,
//                                 op: 11.0
//                             },
//                             attrs: {},

//                         },
//                     },
//                     footer: {

//                         browser: {
//                             chr: 5.0,
//                             ie: 9.0,
//                             fx: 4.0,
//                             saf: 5.0,
//                             op: 11.1
//                         },
//                         attrs: {},

//                     },
//                 },
//                 form: {

//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     attrs: {
//                         'accept-charset': {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },

//                         action: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         autocomplete: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: 4.0,
//                                 saf: 5.2,
//                                 op: 15.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         enctype: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         method: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         name: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         novalidate: {
//                             browser: {
//                                 chr: true,
//                                 ie: 10.0,
//                                 fx: 4.0,
//                                 saf: 10.1,
//                                 op: 15.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         rel: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         target: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         }
//                     },
//                 },
//                 h6: {

//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     attrs: {

//                     },
//                     head: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         header: {

//                             browser: {
//                                 chr: '5.0 and +',
//                                 ie: 9.0,
//                                 fx: 4.0,
//                                 saf: 5.0,
//                                 op: 11.1
//                             },
//                             attrs: {},

//                         },
//                     },
//                     hr: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         html: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 xmlns: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         i: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {

//                             },
//                             iframe: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     allow: {
//                                         browser: {
//                                             chr: 60.0,
//                                             ie: 79.0,
//                                             fx: 74.0,
//                                             saf: 11.1,
//                                             op: 47.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     allowfullscreen: {
//                                         browser: {
//                                             chr: 27.0,
//                                             ie: '11.0 - ms - ',
//                                             fx: 18.0,
//                                             saf: 7.0,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     allowpaymentrequest: {
//                                         browser: {
//                                             chr: false,
//                                             ie: false,
//                                             fx: false,
//                                             saf: false,
//                                             op: false
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },

//                                     height: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     name: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     referrerpolicy: {
//                                         browser: {
//                                             chr: 51.0,
//                                             ie: 79.0,
//                                             fx: 50.0,
//                                             saf: 11.1,
//                                             op: 38.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     sandbox: {
//                                         browser: {
//                                             chr: 4.0,
//                                             ie: 10.0,
//                                             fx: 17.0,
//                                             saf: 5.0,
//                                             op: 15.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     src: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     srcdoc: {
//                                         browser: {
//                                             chr: 20.0,
//                                             ie: 79.0,
//                                             fx: 25.0,
//                                             saf: 6.0,
//                                             op: 15.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     width: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             img: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     alt: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     crossorigin: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     height: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     ismap: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     loading: {
//                                         browser: {
//                                             chr: 77.0,
//                                             ie: 79.0,
//                                             fx: 75.0,
//                                             saf: false,
//                                             op: 64.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     longdesc: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     referrerpolicy: {
//                                         browser: {
//                                             chr: 51.0,
//                                             ie: 79.0,
//                                             fx: 50.0,
//                                             saf: 11.1,
//                                             op: 38.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     sizes: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     src: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     srcset: {
//                                         browser: {
//                                             chr: 34.0,
//                                             ie: '?',
//                                             fx: 38.0,
//                                             saf: 8.0,
//                                             op: 21.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     usemap: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     width: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             input: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     accept: {
//                                         browser: {
//                                             chr: 26.0,
//                                             ie: 10.0,
//                                             fx: 37.0,
//                                             saf: 11.1,
//                                             op: 15.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     alt: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     autocomplete: {
//                                         browser: {
//                                             chr: 17.0,
//                                             ie: 6.0,
//                                             fx: 2.0,
//                                             saf: 5.1,
//                                             op: 10.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     autofocus: {
//                                         browser: {
//                                             chr: 5.0,
//                                             ie: 11.0,
//                                             fx: 4.0,
//                                             saf: 5.0,
//                                             op: 9.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     checked: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     dirname: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 79.0,
//                                             fx: false,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     disabled: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     form: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     formaction: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 10.0,
//                                             fx: true,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     formenctype: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 10.0,
//                                             fx: true,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     formmethod: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 10.0,
//                                             fx: true,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     formnovalidate: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 10.0,
//                                             fx: true,
//                                             saf: 10.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     formtarget: {
//                                         browser: {
//                                             chr: true,
//                                             ie: 10.0,
//                                             fx: true,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     height: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: 16.0,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     list: {
//                                         browser: {
//                                             chr: 20.0,
//                                             ie: 10.0,
//                                             fx: 4.0,
//                                             saf: false,
//                                             op: 9.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     max: {
//                                         browser: {
//                                             chr: 5.0,
//                                             ie: 10.0,
//                                             fx: 16.0,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     maxlength: {
//                                         browser: {
//                                             chr: 4.0,
//                                             ie: 10.0,
//                                             fx: 4.0,
//                                             saf: 5.1,
//                                             op: 15.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     min: {
//                                         browser: {
//                                             chr: 5.0,
//                                             ie: 10.0,
//                                             fx: 16.0,
//                                             saf: 5.1,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     minlength: {
//                                         browser: {
//                                             chr: 40.0,
//                                             ie: 17.0,
//                                             fx: 51.0,
//                                             saf: 10.1,
//                                             op: 27.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     multiple: {
//                                         browser: {
//                                             chr: 6.0,
//                                             ie: 10.0,
//                                             fx: 3.6,
//                                             saf: 5.0,
//                                             op: 11.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     name: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     pattern: {
//                                         browser: {
//                                             chr: 5.0,
//                                             ie: 10.0,
//                                             fx: 4.0,
//                                             saf: 10.1,
//                                             op: 9.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     placeholder: {
//                                         browser: {
//                                             chr: 10.0,
//                                             ie: 10.0,
//                                             fx: 4.0,
//                                             saf: 5.0,
//                                             op: 11.0
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     readonly: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     required: {
//                                         browser: {
//                                             chr: 5.0,
//                                             ie: 10.0,
//                                             fx: 4.0,
//                                             saf: 10.1,
//                                             op: 9.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     size: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     src: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     step: {
//                                         browser: {
//                                             chr: 6.0,
//                                             ie: 10.0,
//                                             fx: 16.0,
//                                             saf: 5.0,
//                                             op: 10.6
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: ''
//                                     },

//                                     type: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     value: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     width: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: 16.0,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             ins: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     cite: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     datetime: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             kbd: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {

//                                 },
//                                 label: {

//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     attrs: {
//                                         for: {
//                                             browser: {
//                                                 chr: true,
//                                                 ie: true,
//                                                 fx: true,
//                                                 saf: true,
//                                                 op: true
//                                             },
//                                             concern: {},
//                                             desc: '',
//                                             note: '',
//                                         },
//                                         form: {
//                                             browser: {
//                                                 chr: true,
//                                                 ie: true,
//                                                 fx: true,
//                                                 saf: true,
//                                                 op: true
//                                             },
//                                             concern: {},
//                                             desc: '',
//                                             note: '',
//                                         }
//                                     },
//                                 },
//                                 legend: {

//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     attrs: {

//                                     },
//                                     li: {

//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         attrs: {
//                                             value: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             }
//                                         },
//                                     },
//                                     link: {

//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         attrs: {
//                                             crossorigin: {
//                                                 browser: {
//                                                     chr: 25.0,
//                                                     ie: 79.0,
//                                                     fx: 18.0,
//                                                     saf: '?',
//                                                     op: 15.0
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: ''
//                                             },

//                                             href: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },
//                                             hreflang: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },
//                                             media: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },
//                                             referrerpolicy: {
//                                                 browser: {
//                                                     chr: 51.0,
//                                                     ie: 79.0,
//                                                     fx: 50.0,
//                                                     saf: 11.1,
//                                                     op: 38.0
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: ''
//                                             },

//                                             rel: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },
//                                             sizes: {
//                                                 browser: {
//                                                     chr: false,
//                                                     ie: false,
//                                                     fx: false,
//                                                     saf: false,
//                                                     op: false
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },

//                                             title: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             },
//                                             type: {
//                                                 browser: {
//                                                     chr: true,
//                                                     ie: true,
//                                                     fx: true,
//                                                     saf: true,
//                                                     op: true
//                                                 },
//                                                 concern: {},
//                                                 desc: '',
//                                                 note: '',
//                                             }
//                                         },
//                                     },
//                                     main: {

//                                         browser: {
//                                             chr: 26.0,
//                                             ie: 12.0,
//                                             fx: 21.0,
//                                             saf: 7.0,
//                                             op: 16.0
//                                         },
//                                         attrs: {},

//                                     },
//                                 },
//                                 map: {

//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     attrs: {
//                                         name: {
//                                             browser: {
//                                                 chr: true,
//                                                 ie: true,
//                                                 fx: true,
//                                                 saf: true,
//                                                 op: true
//                                             },
//                                             concern: {},
//                                             desc: '',
//                                             note: '',
//                                         }
//                                     },
//                                 },
//                                 mark: {

//                                     browser: {
//                                         chr: 6.0,
//                                         ie: 9.0,
//                                         fx: 4.0,
//                                         saf: 5.0,
//                                         op: 11.1
//                                     },
//                                     attrs: {},

//                                 },
//                             },
//                             meta: {

//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 attrs: {
//                                     charset: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     content: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     http_equiv: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     },
//                                     name: {
//                                         browser: {
//                                             chr: true,
//                                             ie: true,
//                                             fx: true,
//                                             saf: true,
//                                             op: true
//                                         },
//                                         concern: {},
//                                         desc: '',
//                                         note: '',
//                                     }
//                                 },
//                             },
//                             meter: {

//                                 browser: {
//                                     chr: 8.0,
//                                     ie: 13.0,
//                                     fx: 16.0,
//                                     saf: 6.0,
//                                     op: 11.5
//                                 },
//                                 attrs: {},

//                                 form: {
//                                     browser: {
//                                         chr: false,
//                                         ie: false,
//                                         fx: false,
//                                         saf: false,
//                                         op: false
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },

//                                 high: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 low: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 max: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 min: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 optimum: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 value: {
//                                     browser: {
//                                         chr: 8.0,
//                                         ie: 13.0,
//                                         fx: 16.0,
//                                         saf: 6.0,
//                                         op: 11.5
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                             },
//                         },
//                         nav: {

//                             browser: {
//                                 chr: 5.0,
//                                 ie: 9.0,
//                                 fx: 4.0,
//                                 saf: 5.0,
//                                 op: 11.1
//                             },
//                             attrs: {},

//                         },
//                     },
//                     noscript: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         object: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 data: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 form: {
//                                     browser: {
//                                         chr: false,
//                                         ie: false,
//                                         fx: false,
//                                         saf: false,
//                                         op: false
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },

//                                 height: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 name: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 type: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 usemap: {
//                                     browser: {
//                                         chr: false,
//                                         ie: false,
//                                         fx: true,
//                                         saf: false,
//                                         op: false
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },

//                                 width: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         ol: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 reversed: {
//                                     browser: {
//                                         chr: 18.0,
//                                         ie: 79.0,
//                                         fx: 18.0,
//                                         saf: 6.0,
//                                         op: 12.1
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: ''
//                                 },

//                                 start: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 type: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         optgroup: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 disabled: {
//                                     browser: {
//                                         chr: true,
//                                         ie: 8.0,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 label: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         option: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 disabled: {
//                                     browser: {
//                                         chr: true,
//                                         ie: 8.0,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 label: {
//                                     browser: {
//                                         chr: true,
//                                         ie: 8.0,
//                                         fx: false,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 selected: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 value: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         output: {

//                             browser: {
//                                 chr: 10.0,
//                                 ie: 13.0,
//                                 fx: 4.0,
//                                 saf: 5.1,
//                                 op: 11.0
//                             },
//                             attrs: {},

//                             for: {
//                                 browser: {
//                                     chr: 10.0,
//                                     ie: 13.0,
//                                     fx: 4.0,
//                                     saf: 7.0,
//                                     op: 11.5
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: ''
//                             },

//                             form: {
//                                 browser: {
//                                     chr: false,
//                                     ie: false,
//                                     fx: false,
//                                     saf: false,
//                                     op: false
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: '',
//                             },

//                             name: {
//                                 browser: {
//                                     chr: 10.0,
//                                     ie: 13.0,
//                                     fx: 4.0,
//                                     saf: 7.0,
//                                     op: 11.5
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: ''
//                             },

//                         },
//                     },
//                     p: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         param: {

//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             attrs: {
//                                 name: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 },
//                                 value: {
//                                     browser: {
//                                         chr: true,
//                                         ie: true,
//                                         fx: true,
//                                         saf: true,
//                                         op: true
//                                     },
//                                     concern: {},
//                                     desc: '',
//                                     note: '',
//                                 }
//                             },
//                         },
//                         picture: {

//                             browser: {
//                                 chr: 38.0,
//                                 ie: 13.0,
//                                 fx: 38.0,
//                                 saf: 9.1,
//                                 op: 25.0
//                             },
//                             attrs: {},

//                         },
//                     },
//                     pre: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {

//                         },
//                         progress: {

//                             browser: {
//                                 chr: 8.0,
//                                 ie: 10.0,
//                                 fx: 16.0,
//                                 saf: 6.0,
//                                 op: 11.0
//                             },
//                             attrs: {},

//                             max: {
//                                 browser: {
//                                     chr: 8.0,
//                                     ie: 10.0,
//                                     fx: 16.0,
//                                     saf: 6.0,
//                                     op: 11.0
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: ''
//                             },

//                             value: {
//                                 browser: {
//                                     chr: 8.0,
//                                     ie: 10.0,
//                                     fx: 16.0,
//                                     saf: 6.0,
//                                     op: 11.0
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: ''
//                             },

//                         },
//                     },
//                     q: {

//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         attrs: {
//                             cite: {
//                                 browser: {
//                                     chr: true,
//                                     ie: true,
//                                     fx: true,
//                                     saf: true,
//                                     op: true
//                                 },
//                                 concern: {},
//                                 desc: '',
//                                 note: '',
//                             }
//                         },
//                     },
//                     rp: {

//                         browser: {
//                             chr: 5.0,
//                             ie: 5.5,
//                             fx: 38.0,
//                             saf: 5.0,
//                             op: 15.0
//                         },
//                         attrs: {},

//                     },
//                 },
//                 rt: {

//                     browser: {
//                         chr: 5.0,
//                         ie: 5.5,
//                         fx: 38.0,
//                         saf: 5.0,
//                         op: 15.0
//                     },
//                     attrs: {},

//                 },
//             },
//             ruby: {

//                 browser: {
//                     chr: 5.0,
//                     ie: 5.5,
//                     fx: 38.0,
//                     saf: 5.0,
//                     op: 15.0
//                 },
//                 attrs: {},

//             },
//         },
//         s: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {

//             },
//             samp: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {

//                 },
//                 script: {

//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     attrs: {
//                         async: {
//                             browser: {
//                                 chr: 8.0,
//                                 ie: 10.0,
//                                 fx: 3.6,
//                                 saf: 5.1,
//                                 op: 15.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         crossorigin: {
//                             browser: {
//                                 chr: 30.0,
//                                 ie: 18.0,
//                                 fx: 13.0,
//                                 saf: 13.0,
//                                 op: 12.1
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         defer: {
//                             browser: {
//                                 chr: 8.0,
//                                 ie: 10.0,
//                                 fx: 3.5,
//                                 saf: 5.0,
//                                 op: 15.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         integrity: {
//                             browser: {
//                                 chr: 45.0,
//                                 ie: 17.0,
//                                 fx: 43.0,
//                                 saf: 13.0,
//                                 op: 66.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         nomodule: {
//                             browser: {
//                                 chr: 61.0,
//                                 ie: 16.0,
//                                 fx: 60.0,
//                                 saf: 11.0,
//                                 op: 48.0
//                             },
//                             concern: {},
//                             desc: '',
//                             note: ''
//                         },

//                         referrerpolicy: {
//                             browser: {
//                                 chr: 70.0,
//                                 ie: 79.0,
//                                 fx: 65.0,
//                                 saf: false,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         src: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         },
//                         type: {
//                             browser: {
//                                 chr: true,
//                                 ie: true,
//                                 fx: true,
//                                 saf: true,
//                                 op: true
//                             },
//                             concern: {},
//                             desc: '',
//                             note: '',
//                         }
//                     },
//                 },
//                 section: {

//                     browser: {
//                         chr: 5.0,
//                         ie: 9.0,
//                         fx: 4.0,
//                         saf: 5.0,
//                         op: 11.5
//                     },
//                     attrs: {},

//                 },
//             },
//             select: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {
//                     autofocus: {
//                         browser: {
//                             chr: true,
//                             ie: 10.0,
//                             fx: false,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     disabled: {
//                         browser: {
//                             chr: true,
//                             ie: 9.0,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     form: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     multiple: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     name: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     required: {
//                         browser: {
//                             chr: true,
//                             ie: 10.0,
//                             fx: 4.0,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     },
//                     size: {
//                         browser: {
//                             chr: true,
//                             ie: true,
//                             fx: true,
//                             saf: true,
//                             op: true
//                         },
//                         concern: {},
//                         desc: '',
//                         note: '',
//                     }
//                 },
//                 slot: {
//                     global: {
//                         browser: {
//                             chr: 53.0,
//                             ie: 79.0,
//                             fx: 63.0,
//                             saf: 10.0,
//                             op: 40.0
//                         },
//                         concern: {},
//                         desc: '',
//                         note: ''
//                     },

//                 },
//             },
//             small: {

//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 attrs: {},
//             },
//             source: {

//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 4.0,
//                     op: 10.5
//                 },
//                 attrs: {},

//                 media: {
//                     browser: {
//                         chr: 38.0,
//                         ie: 9.0,
//                         fx: 15.0,
//                         saf: 9.1,
//                         op: 25.0
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 sizes: {
//                     browser: {
//                         chr: 38.0,
//                         ie: 13.0,
//                         fx: 3.8,
//                         saf: 9.1,
//                         op: 25.0
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 src: {
//                     browser: {
//                         chr: 4.0,
//                         ie: 9.0,
//                         fx: 3.5,
//                         saf: 4.0,
//                         op: 10.5
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 srcset: {
//                     browser: {
//                         chr: 38.0,
//                         ie: 13.0,
//                         fx: 38.0,
//                         saf: 9.1,
//                         op: 25.0
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//                 type: {
//                     browser: {
//                         chr: 4.0,
//                         ie: 9.0,
//                         fx: 3.5,
//                         saf: 4.0,
//                         op: 10.5
//                     },
//                     concern: {},
//                     desc: '',
//                     note: ''
//                 },

//             },
//         },
//         span: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         strong: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         style: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {
//                 media: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },
//                 type: {
//                     browser: {
//                         chr: true,
//                         ie: true,
//                         fx: true,
//                         saf: true,
//                         op: true
//                     },
//                     concern: {},
//                     desc: '',
//                     note: '',
//                 },
//             },
//         },
//         sub: {

//             browser: {
//                 chr: true,
//                 ie: true,
//                 fx: true,
//                 saf: true,
//                 op: true
//             },
//             attrs: {},
//         },
//         summary: {

//             browser: {
//                 chr: 12.0,
//                 ie: 79.0,
//                 fx: 49.0,
//                 saf: 6.0,
//                 op: 15.0
//             },
//             attrs: {},

//         },

//     sup: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     svg: {

//         browser: {
//             chr: 4.0,
//             ie: 9.0,
//             fx: 3.0,
//             saf: 3.2,
//             op: 10.1
//         },
//         attrs: {

//         },
//     },
//     table: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     tbody: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     td: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//             colspan: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             headers: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             rowspan: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//         },
//     },
//     template: {

//         browser: {
//             chr: 26.0,
//             ie: 13.0,
//             fx: 22.0,
//             saf: 8.0,
//             op: 15.0
//         },
//         attrs: {

//         },
//     },
//     textarea: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//             autocomplete: {
//                 browser: {
//                     chr: false,
//                     ie: false,
//                     fx: 59.0,
//                     saf: 13.0,
//                     op: false
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },

//             autofocus: {
//                 browser: {
//                     chr: true,
//                     ie: 10.0,
//                     fx: 4.0,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             cols: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             dirname: {
//                 browser: {
//                     chr: true,
//                     ie: 79.0,
//                     fx: false,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             disabled: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             form: {
//                 browser: {
//                     chr: true,
//                     ie: 11.0,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             maxlength: {
//                 browser: {
//                     chr: true,
//                     ie: 10.0,
//                     fx: 4.0,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             minlength: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             name: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             placeholder: {
//                 browser: {
//                     chr: true,
//                     ie: 10.0,
//                     fx: 4.0,
//                     saf: 5.0,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             readonly: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             required: {
//                 browser: {
//                     chr: true,
//                     ie: 10.0,
//                     fx: 4.0,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             rows: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             spellcheck: {
//                 browser: {
//                     chr: true,
//                     ie: 11.0,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             wrap: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//         },
//     },
//     tfoot: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     th: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {
//             abbr: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             colspan: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             headers: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             rowspan: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             scope: {
//                 browser: {
//                     chr: true,
//                     ie: true,
//                     fx: true,
//                     saf: true,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//         },
//     },
//     thead: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     time: {

//         browser: {
//             chr: 62.0,
//             ie: 18.0,
//             fx: 22.0,
//             saf: 7.0,
//             op: 49.0
//         },
//         attrs: {

//             datetime: {
//                 browser: {
//                     chr: 62.0,
//                     ie: 18.0,
//                     fx: 22.0,
//                     saf: 7.0,
//                     op: 49.0
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//         },
//     },
//     title: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},

//     },
//     tr: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {

//         },
//         track: {

//             browser: {
//                 chr: 23.0,
//                 ie: 10.0,
//                 fx: 31.0,
//                 saf: 6.0,
//                 op: 12.1
//             },
//             attrs: {},

//             default: {
//                 browser: {
//                     chr: 23.0,
//                     ie: 10.0,
//                     fx: 31.0,
//                     saf: 6.0,
//                     op: 12.1
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             kind: {
//                 browser: {
//                     chr: 23.0,
//                     ie: 10.0,
//                     fx: 31.0,
//                     saf: 6.0,
//                     op: 12.1
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             label: {
//                 browser: {
//                     chr: 23.0,
//                     ie: 10.0,
//                     fx: 31.0,
//                     saf: 6.0,
//                     op: 12.1
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             src: {
//                 browser: {
//                     chr: 23.0,
//                     ie: 10.0,
//                     fx: 31.0,
//                     saf: 6.0,
//                     op: 12.1
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             srclang: {
//                 browser: {
//                     chr: 23.0,
//                     ie: 10.0,
//                     fx: 31.0,
//                     saf: 6.0,
//                     op: 12.1
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//         },
//     },
//     u: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},

//     },
//     ul: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},

//     },
//     var: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {},
//     },
//     video: {

//         browser: {
//             chr: 4.0,
//             ie: 9.0,
//             fx: 3.5,
//             saf: 3.1,
//             op: 11.5
//         },
//         attrs: {

//             autoplay: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             controls: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             height: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             loop: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 11.0,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             muted: {
//                 browser: {
//                     chr: 30.0,
//                     ie: 10.0,
//                     fx: 11.0,
//                     saf: 5.0,
//                     op: true
//                 },
//                 concern: {},
//                 desc: '',
//                 note: '',
//             },
//             poster: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.6,
//                     saf: 3.1,
//                     op: 10.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             preload: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 4.0,
//                     saf: 3.1,
//                     op: 10.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             src: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },

//             width: {
//                 browser: {
//                     chr: 4.0,
//                     ie: 9.0,
//                     fx: 3.5,
//                     saf: 3.1,
//                     op: 11.5
//                 },
//                 concern: {},
//                 desc: '',
//                 note: ''
//             },
//         },

//     },
//     wbr: {

//         browser: {
//             chr: true,
//             ie: true,
//             fx: true,
//             saf: true,
//             op: true
//         },
//         attrs: {}
//     }

// };

let tags = require("./htmlSource/tags");
let global_attrs = require("./htmlSource/global_attrs");
let all_attrs = require("./htmlSource/all_attrs");
let html_tags_by_browser = require("./htmlSource/html_tags_by_browser");

// console.log(333333333333333333, tags, global_attrs, all_attrs, html_tags_by_browser);
let html_tags = {};
for (let k in { ...tags, ...html_tags_by_browser }) {
    // console.log(k);
    html_tags[k] = {
        browser: {},
        attrs: { concern: [], desc: "", note: "" },
        ...tags[k],
        ...html_tags_by_browser[k],
    };
    for (let k_k in html_tags_by_browser[k]?.["attrs"] || {}) {
        if (["desc", "concern", "note"].includes(k_k)) {
            continue;
        }

        html_tags[k]["attrs"][k_k].concern = all_attrs?.[k_k]?.concern || [];
        html_tags[k]["attrs"][k_k].desc = all_attrs?.[k_k]?.desc || "";
        html_tags[k]["attrs"][k_k].note = all_attrs?.[k_k]?.note || "";
    }
}

// console.log(html_tags);
export default { html_tags, global_attrs };

