let all_attrs = {
    accept: {
        concern: ['input'],
        desc: '    Specifies the types of files that the server accepts (only for type="file") ',
        note: ''
    },
    'accet-charset': {
        concern: ['form'],
        desc: '    Specifies the character encodings that are to be used for the form submission   ',
        note: ''
    },
    accesskey: {
        concern: ['Global Attributes'],
        desc: '    Specifies a shortcut key to activate/focus an element   ',
        note: ''
    },
    action: {
        concern: ['form'],
        desc: '    Specifies where to send the form-data when a form is submitted  ',
        note: ''
    },
    align: {
        concern: [],
        desc: '    Specifies the alignment according to surrounding elements. Use CSS instead  ',
        note: '    Not supported in HTML 5.    '
    },
    alt: {
        concern: ['area', 'img', 'input'],
        desc: '    Specifies an alternate text when the original element fails to display  ',
        note: ''
    },
    async: {
        concern: ['script'],
        desc: '    Specifies that the script is executed asynchronously (only for external scripts)    ',
        note: ''
    },
    autocomplete: {
        concern: ['form', 'input'],
        desc: '    Specifies whether the <form> or the <input> element should have autocomplete enabled    ',
        note: ''
    },
    autofocus: {
        concern: ['button', 'input', 'select', 'textarea'],
        desc: '    Specifies that the element should automatically get focus when the page loads   ',
        note: ''
    },
    autoplay: {
        concern: ['audio', 'video'],
        desc: '    Specifies that the audio/video will start playing as soon as it is ready    ',
        note: ''
    },
    bgcolor: {
        concern: [],
        desc: '    Specifies the background color of an element. Use CSS instead   ',
        note: '    Not supported in HTML 5.    '
    },
    border: {
        concern: [],
        desc: '    Specifies the width of the border of an element. Use CSS instead    ',
        note: '    Not supported in HTML 5.    '
    },
    charset: {
        concern: ['meta', 'script'],
        desc: '    Specifies the character encoding    ',
        note: ''
    },
    checked: {
        concern: ['input'],
        desc: '    Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")  ',
        note: ''
    },
    cite: {
        concern: ['blockquote', 'del', 'ins', 'q'],
        desc: '    Specifies a URL which explains the quote/deleted/inserted text  ',
        note: ''
    },
    class: {
        concern: ['Global Attributes'],
        desc: '    Specifies one or more classnames for an element (refers to a class in a style sheet)    ',
        note: ''
    },
    color: {
        concern: [],
        desc: '    Specifies the text color of an element. Use CSS instead ',
        note: '    Not supported in HTML 5.    '
    },
    cols: {
        concern: ['textarea'],
        desc: '    Specifies the visible width of a text area  ',
        note: ''
    },
    colspan: {
        concern: ['td', 'th'],
        desc: '    Specifies the number of columns a table cell should span    ',
        note: ''
    },
    content: {
        concern: ['meta'],
        desc: '    Gives the value associated with the http-equiv or name attribute    ',
        note: ''
    },
    contenteditable: {
        concern: ['Global Attributes'],
        desc: '    Specifies whether the content of an element is editable or not  ',
        note: ''
    },
    controls: {
        concern: ['audio', 'video'],
        desc: '    Specifies that audio/video controls should be displayed (such as a play/pause button etc)   ',
        note: ''
    },
    coords: {
        concern: ['area'],
        desc: '    Specifies the coordinates of the area   ',
        note: ''
    },
    data: {
        concern: ['object'],
        desc: '    Specifies the URL of the resource to be used by the object  ',
        note: ''
    },
    'data-*': {
        concern: ['Global Attributes'],
        desc: '    Used to store custom data private to the page or application    ',
        note: ''
    },
    datetime: {
        concern: ['del', 'ins', 'time'],
        desc: '    Specifies the date and time ',
        note: ''
    },
    default: {
        concern: ['track'],
        desc: '    Specifies that the track is to be enabled if the user\'s preferences do not indicate that another track would be more appropriate ',
        note: ''
    },
    defer: {
        concern: ['script'],
        desc: '    Specifies that the script is executed when the page has finished parsing (only for external scripts)    ',
        note: ''
    },
    dir: {
        concern: ['Global Attributes'],
        desc: '    Specifies the text direction for the content in an element  ',
        note: ''
    },
    dirname: {
        concern: ['input', 'textarea'],
        desc: '    Specifies that the text direction will be submitted ',
        note: ''
    },
    disabled: {
        concern: ['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea'],
        desc: '    Specifies that the specified element/group of elements should be disabled   ',
        note: ''
    },
    download: {
        concern: ['a', 'area'],
        desc: '    Specifies that the target will be downloaded when a user clicks on the hyperlink    ',
        note: ''
    },
    draggable: {
        concern: ['Global Attributes'],
        desc: '    Specifies whether an element is draggable or not    ',
        note: ''
    },
    enctype: {
        concern: ['form'],
        desc: '    Specifies how the form-data should be encoded when submitting it to the server (only for method="post") ',
        note: ''
    },
    for: {
        concern: ['label', 'output'],
        desc: '    Specifies which form element(s) a label/calculation is bound to ',
        note: ''
    },
    form: {
        concern: ['button', 'fieldset', 'input', 'label', 'meter', 'object', 'output', 'select', 'textarea'],
        desc: '    Specifies the name of the form the element belongs to   ',
        note: ''
    },
    formaction: {
        concern: ['button', 'input'],
        desc: '    Specifies where to send the form-data when a form is submitted. Only for type="submit"  ',
        note: ''
    },
    headers: {
        concern: ['td', 'th'],
        desc: '    Specifies one or more headers cells a cell is related to    ',
        note: ''
    },
    height: {
        concern: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
        desc: '    Specifies the height of the element ',
        note: ''
    },
    hidden: {
        concern: ['Global Attributes'],
        desc: '    Specifies that an element is not yet, or is no longer, relevant ',
        note: ''
    },
    high: {
        concern: ['meter'],
        desc: '    Specifies the range that is considered to be a high value   ',
        note: ''
    },
    href: {
        concern: ['a', 'area', 'base', 'link'],
        desc: '    Specifies the URL of the page the link goes to  ',
        note: ''
    },
    hreflang: {
        concern: ['a', 'area', 'link'],
        desc: '    Specifies the language of the linked document   ',
        note: ''
    },
    'http-equiv': {
        concern: ['meta'],
        desc: '    Provides an HTTP header for the information/value of the content attribute  ',
        note: ''
    },
    id: {
        concern: ['Global Attributes'],
        desc: '    Specifies a unique id for an element    ',
        note: ''
    },
    ismap: {
        concern: ['img'],
        desc: '    Specifies an image as a server-side image map   ',
        note: ''
    },
    kind: {
        concern: ['track'],
        desc: '    Specifies the kind of text track    ',
        note: ''
    },
    label: {
        concern: ['track', 'option', 'optgroup'],
        desc: '    Specifies the title of the text track   ',
        note: ''
    },
    lang: {
        concern: ['Global Attributes'],
        desc: '    Specifies the language of the element\'s content ',
        note: ''
    },
    list: {
        concern: ['input'],
        desc: '    Refers to a <datalist> element that contains pre-defined options for an <input> element ',
        note: ''
    },
    loop: {
        concern: ['audio', 'video'],
        desc: '    Specifies that the audio/video will start over again, every time it is finished ',
        note: ''
    },
    low: {
        concern: ['meter'],
        desc: '    Specifies the range that is considered to be a low value    ',
        note: ''
    },
    max: {
        concern: ['input', 'meter', 'progress'],
        desc: '    Specifies the maximum value ',
        note: ''
    },
    maxlength: {
        concern: ['input', 'textarea'],
        desc: '    Specifies the maximum number of characters allowed in an element    ',
        note: ''
    },
    media: {
        concern: ['a', 'area', 'link', 'source', 'style'],
        desc: '    Specifies what media/device the linked document is optimized for    ',
        note: ''
    },
    method: {
        concern: ['form'],
        desc: '    Specifies the HTTP method to use when sending form-data ',
        note: ''
    },
    min: {
        concern: ['input', 'meter'],
        desc: '    Specifies a minimum value   ',
        note: ''
    },
    multiple: {
        concern: ['input', 'select'],
        desc: '    Specifies that a user can enter more than one value ',
        note: ''
    },
    muted: {
        concern: ['video', 'audio'],
        desc: '    Specifies that the audio output of the video should be muted    ',
        note: ''
    },
    name: {
        concern: ['button', 'fieldset', 'form', 'iframe', 'input', 'map', 'meta', 'object', 'output', 'param', 'select', 'textarea'],
        desc: '    Specifies the name of the element   ',
        note: ''
    },
    novalidate: {
        concern: ['form'],
        desc: '    Specifies that the form should not be validated when submitted  ',
        note: ''
    },
    onabort: {
        concern: ['audio', 'embed', 'img', 'object', 'video'],
        desc: '    Script to be run on abort   ',
        note: ''
    },
    onafterprint: {
        concern: ['body'],
        desc: '    Script to be run after the document is printed  ',
        note: ''
    },
    onbeforeprint: {
        concern: ['body'],
        desc: '    Script to be run before the document is printed ',
        note: ''
    },
    onbeforeunload: {
        concern: ['body'],
        desc: '    Script to be run when the document is about to be unloaded  ',
        note: ''
    },
    onblur: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element loses focus   ',
        note: ''
    },
    oncanplay: {
        concern: ['audio', 'embed', 'object', 'video'],
        desc: '    Script to be run when a file is ready to start playing (when it has buffered enough to begin)   ',
        note: ''
    },
    oncanplaythrough: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when a file can be played all the way to the end without pausing for buffering ',
        note: ''
    },
    onchange: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the value of the element is changed   ',
        note: ''
    },
    onclick: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element is being clicked  ',
        note: ''
    },
    oncontextmenu: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a context menu is triggered   ',
        note: ''
    },
    oncopy: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the content of the element is being copied    ',
        note: ''
    },
    oncuechange: {
        concern: ['track'],
        desc: '    Script to be run when the cue changes in a <track> element  ',
        note: ''
    },
    oncut: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the content of the element is being cut   ',
        note: ''
    },
    ondblclick: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element is being double-clicked   ',
        note: ''
    },
    ondrag: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element is being dragged  ',
        note: ''
    },
    ondragend: {
        concern: ['All visible elements.'],
        desc: '    Script to be run at the end of a drag operation ',
        note: ''
    },
    ondragenter: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when an element has been dragged to a valid drop target    ',
        note: ''
    },
    ondragleave: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when an element leaves a valid drop target ',
        note: ''
    },
    ondragover: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when an element is being dragged over a valid drop target  ',
        note: ''
    },
    ondragstart: {
        concern: ['All visible elements.'],
        desc: '    Script to be run at the start of a drag operation   ',
        note: ''
    },
    ondrop: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when dragged element is being dropped  ',
        note: ''
    },
    ondurationchange: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the length of the media changes   ',
        note: ''
    },
    onemptied: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)    ',
        note: ''
    },
    onended: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the media has reach the end (a useful event for messages like "thanks for listening") ',
        note: ''
    },
    onerror: {
        concern: ['audio', 'body', 'embed', 'img', 'object', 'script', 'style', 'video'],
        desc: '    Script to be run when an error occurs   ',
        note: ''
    },
    onfocus: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element gets focus    ',
        note: ''
    },
    onhashchange: {
        concern: ['body'],
        desc: '    Script to be run when there has been changes to the anchor part of the a URL    ',
        note: ''
    },
    oninput: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element gets user input   ',
        note: ''
    },
    oninvalid: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element is invalid    ',
        note: ''
    },
    onkeydown: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a user is pressing a key  ',
        note: ''
    },
    onkeypress: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a user presses a key  ',
        note: ''
    },
    onkeyup: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a user releases a key ',
        note: ''
    },
    onload: {
        concern: ['body', 'iframe', 'img', 'input', 'link', 'script', 'style'],
        desc: '    Script to be run when the element is finished loading   ',
        note: ''
    },
    onloadeddata: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when media data is loaded  ',
        note: ''
    },
    onloadedmetadata: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when meta data (like dimensions and duration) are loaded   ',
        note: ''
    },
    onloadstart: {
        concern: ['audio', 'video'],
        desc: '    Script to be run just as the file begins to load before anything is actually loaded ',
        note: ''
    },
    onmousedown: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a mouse button is pressed down on an element  ',
        note: ''
    },
    onmousemove: {
        concern: ['All visible elements.'],
        desc: '    Script to be run as long as the  mouse pointer is moving over an element    ',
        note: ''
    },
    onmouseout: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a mouse pointer moves out of an element   ',
        note: ''
    },
    onmouseover: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a mouse pointer moves over an element ',
        note: ''
    },
    onmouseup: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a mouse button is released over an element    ',
        note: ''
    },
    onmousewheel: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when a mouse wheel is being scrolled over an element   ',
        note: ''
    },
    onoffline: {
        concern: ['body'],
        desc: '    Script to be run when the browser starts to work offline    ',
        note: ''
    },
    ononline: {
        concern: ['body'],
        desc: '    Script to be run when the browser starts to work online ',
        note: ''
    },
    onpagehide: {
        concern: ['body'],
        desc: '    Script to be run when a user navigates away from a page ',
        note: ''
    },
    onpageshow: {
        concern: ['body'],
        desc: '    Script to be run when a user navigates to a page    ',
        note: ''
    },
    onpaste: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the user pastes some content in an element    ',
        note: ''
    },
    onpause: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the media is paused either by the user or programmatically    ',
        note: ''
    },
    onplay: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the media has started playing ',
        note: ''
    },
    onplaying: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the media has started playing ',
        note: ''
    },
    onpopstate: {
        concern: ['body'],
        desc: '    Script to be run when the window\'s history changes. ',
        note: ''
    },
    onprogress: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the browser is in the process of getting the media data   ',
        note: ''
    },
    onratechange: {
        concern: ['audio', 'video'],
        desc: '    Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode). ',
        note: ''
    },
    onreset: {
        concern: ['form'],
        desc: '    Script to be run when a reset button in a form is clicked.  ',
        note: ''
    },
    onresize: {
        concern: ['body'],
        desc: '    Script to be run when the browser window is being resized.  ',
        note: ''
    },
    onscroll: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when an element\'s scrollbar is being scrolled ',
        note: ''
    },
    onsearch: {
        concern: ['input'],
        desc: '    Script to be run when the user writes something in a search field (for <input type="search">)   ',
        note: ''
    },
    onseeked: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the seeking attribute is set to false indicating that seeking has ended   ',
        note: ''
    },
    onseeking: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the seeking attribute is set to true indicating that seeking is active    ',
        note: ''
    },
    onselect: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the element gets selected ',
        note: ''
    },
    onstalled: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the browser is unable to fetch the media data for whatever reason ',
        note: ''
    },
    onstorage: {
        concern: ['body'],
        desc: '    Script to be run when a Web Storage area is updated ',
        note: ''
    },
    onsubmit: {
        concern: ['form'],
        desc: '    Script to be run when a form is submitted   ',
        note: ''
    },
    onsuspend: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason ',
        note: ''
    },
    ontimeupdate: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media) ',
        note: ''
    },
    ontoggle: {
        concern: ['details'],
        desc: '    Script to be run when the user opens or closes the <details> element    ',
        note: ''
    },
    onunload: {
        concern: ['body'],
        desc: '    Script to be run when a page has unloaded (or the browser window has been closed)   ',
        note: ''
    },
    onvolumechange: {
        concern: ['audio', 'video'],
        desc: '    Script to be run each time the volume of a video/audio has been changed ',
        note: ''
    },
    onwaiting: {
        concern: ['audio', 'video'],
        desc: '    Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)   ',
        note: ''
    },
    onwheel: {
        concern: ['All visible elements.'],
        desc: '    Script to be run when the mouse wheel rolls up or down over an element  ',
        note: ''
    },
    open: {
        concern: ['details'],
        desc: '    Specifies that the details should be visible (open) to the user ',
        note: ''
    },
    optimum: {
        concern: ['meter'],
        desc: '    Specifies what value is the optimal value for the gauge ',
        note: ''
    },
    pattern: {
        concern: ['input'],
        desc: '    Specifies a regular expression that an <input> element\'s value is checked against ',
        note: ''
    },
    placeholder: {
        concern: ['input', 'textarea'],
        desc: '    Specifies a short hint that describes the expected value of the element ',
        note: ''
    },
    poster: {
        concern: ['video'],
        desc: '    Specifies an image to be shown while the video is downloading, or until the user hits the play button   ',
        note: ''
    },
    preload: {
        concern: ['audio', 'video'],
        desc: '    Specifies if and how the author thinks the audio/video should be loaded when the page loads ',
        note: ''
    },
    readonly: {
        concern: ['input', 'textarea'],
        desc: '    Specifies that the element is read-only ',
        note: ''
    },
    rel: {
        concern: ['a', 'area', 'form', 'link'],
        desc: '    Specifies the relationship between the current document and the linked document ',
        note: ''
    },
    required: {
        concern: ['input', 'select', 'textarea'],
        desc: '    Specifies that the element must be filled out before submitting the form    ',
        note: ''
    },
    reversed: {
        concern: ['ol'],
        desc: '    Specifies that the list order should be descending (9,8,7...)   ',
        note: ''
    },
    rows: {
        concern: ['textarea'],
        desc: '    Specifies the visible number of lines in a text area    ',
        note: ''
    },
    rowspan: {
        concern: ['td', 'th'],
        desc: '    Specifies the number of rows a table cell should span   ',
        note: ''
    },
    sandbox: {
        concern: ['iframe'],
        desc: '    Enables an extra set of restrictions for the content in an <iframe> ',
        note: ''
    },
    scope: {
        concern: ['th'],
        desc: '    Specifies whether a header cell is a header for a column, row, or group of columns or rows  ',
        note: ''
    },
    selected: {
        concern: ['option'],
        desc: '    Specifies that an option should be pre-selected when the page loads ',
        note: ''
    },
    shape: {
        concern: ['area'],
        desc: '    Specifies the shape of the area ',
        note: ''
    },
    size: {
        concern: ['input', 'select'],
        desc: '    Specifies the width, in characters (for <input>) or specifies the number of visible options (for <select>)  ',
        note: ''
    },
    sizes: {
        concern: ['img', 'link', 'source'],
        desc: '    Specifies the size of the linked resource   ',
        note: ''
    },
    span: {
        concern: ['col', 'colgroup'],
        desc: '    Specifies the number of columns to span ',
        note: ''
    },
    spellcheck: {
        concern: ['Global Attributes'],
        desc: '    Specifies whether the element is to have its spelling and grammar checked or not    ',
        note: ''
    },
    src: {
        concern: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
        desc: '    Specifies the URL of the media file ',
        note: ''
    },
    srcdoc: {
        concern: ['iframe'],
        desc: '    Specifies the HTML content of the page to show in the <iframe>  ',
        note: ''
    },
    srclang: {
        concern: ['track'],
        desc: '    Specifies the language of the track text data (required if kind="subtitles")    ',
        note: ''
    },
    srcset: {
        concern: ['img', 'source'],
        desc: '    Specifies the URL of the image to use in different situations   ',
        note: ''
    },
    start: {
        concern: ['ol'],
        desc: '    Specifies the start value of an ordered list    ',
        note: ''
    },
    step: {
        concern: ['input'],
        desc: '    Specifies the legal number intervals for an input field ',
        note: ''
    },
    style: {
        concern: ['Global Attributes'],
        desc: '    Specifies an inline CSS style for an element    ',
        note: ''
    },
    tabindex: {
        concern: ['Global Attributes'],
        desc: '    Specifies the tabbing order of an element   ',
        note: ''
    },
    target: {
        concern: ['a', 'area', 'base', 'form'],
        desc: '    Specifies the target for where to open the linked document or where to submit the form  ',
        note: ''
    },
    title: {
        concern: ['Global Attributes'],
        desc: '    Specifies extra information about an element    ',
        note: ''
    },
    translate: {
        concern: ['Global Attributes'],
        desc: '    Specifies whether the content of an element should be translated or not ',
        note: ''
    },
    type: {
        concern: ['a', 'button', 'embed', 'input', 'link', 'menu', 'object', 'script', 'source', 'style'],
        desc: '    Specifies the type of element   ',
        note: ''
    },
    usemap: {
        concern: ['img', 'object'],
        desc: '    Specifies an image as a client-side image map   ',
        note: ''
    },
    value: {
        concern: ["button", "input", "option", "meter", "progress", "param"],
        desc: '    Specifies the value of the element  ',
        note: ''
    },
    width: {
        concern: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
        desc: '    Specifies the width of the element  ',
        note: ''
    },
    wrap: {
        concern: ['textarea'],
        desc: '    Specifies how the text in a text area is to be wrapped when submitted in a form ',
        note: ''
    },
};

// export default all_attrs;
module.exports = all_attrs;
