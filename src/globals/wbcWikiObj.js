let wiki = {
  viewData_: {},
  // strObj: "aaaaaaaaaaaa",
  // strObj: "{en:'eeeeeeeeeeeeee',fr:'fffffffffff',ar:'rrrrrrrrrrrr'}",

  MDObj1: {
    comp: "MD",
    header: "div__global header inside WBC markdown (MD)|green text-h4",
    footer: "div__global footer inside WBC markdown (MD)|green text-h4",

    options: {
      class: "blue pa-5 ma-5",
      html: [
        "<li|ma-5 pa-5 grey >",
        "./files/__ts0.ts",
        "h1__html section as Title|red__green|aazzzz",
        `MD__# html section tille as mark down 
          second line 
          third line
          ...
          last line
          |red pa-5 pink__green pa-5|aaaa`,
      ],
      src: `# main vue mark down source 
## 1st line sample vue mark down source 
### second line 
third line
...
last line`,

      MDOptions: {
        class: "yellow",
      },
      headers: "li__header inside WBC markdown (MD)|green",
      footers: "li__footer inside WBC markdown (MD)|green",
    },
  },
  VCMObj0: {
    comp: "VCM",
    options: {
      class: "blue pa-5",
      //html: "# aaaaaaaaaaaaaaaaaaa",
      props: {
        options: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          // keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          // theme: "monokai",
          extraKeys: { Ctrl: "autocomplete" },
          hintOptions: {
            completeSingle: false,
          },
        },
        // Optional: expands the height of the editor
        value: "code  mirror example code",
      },
      style: {
        border: "1px solid #eee",
        "font-family": "monospace",
        height: "300px",
      },
      on: {
        change: (v) => {
          alert(v);
          console.log(v);
        },
        input: (v) => {
          alert(v);
          console.log(v);
        },
      },
    },
  },
  VCMObj1: {
    comp: "VCM",
    header: "div__global header inside WBC codeMirror (VCM)|green text-h4",
    footer: "div__global footer inside WBC codeMirror (VCM)|green text-h4",

    options: {
      class: "blue pa-5 ma-5",
      html: [
        "<li|ma-5 pa-5 grey >",
        "./files/__ts0.ts",
        "h1__html section as Title",
        `MD__# html section tille as mark down 
          second line 
          third line
          ...
          last line
          `,
      ],
      props: {
        value: `# main vue code mirror source 
## 1st line sample vue code mirror source 
### second line 
third line
...
last line`,

        // mode: 'text/html',
        // mode: 'text/x-vue'
        // mode: 'text/x-python'
        // mode: 'text/javascsript'
        mode: "text/x-markdown",
        // mode: 'text/html',
        // mode: 'text/x-python'
      },
      VCMOptions: {
        class: "yellow pa-5",
        mode: "text/x-python",
      },
      headers: "li__header inside WBC codeMirror (VCM)|green",
      footers: "li__footer inside WBC codeMirror (VCM)|green",
    },
  },

  strObj: "{en:'eeeeeeeeeeeeee',fr:'fffffffffff',ar:'rrrrrrrrrrrr'}",
  // strObj: {
  //   comp: "div",
  //   header: "gloabl header",
  //   options: {
  //     html: { en: "li__Register", fr: "Inscrivez-vous", ar: "عملية التسجيل " },
  //     headers: ["<li>", "caption header"],
  //     footers: "li__caption footer",
  //     class: "red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green",
  //   },
  // },

  WBCobjLang: { en: "eeeeeeeeeeeeee", fr: "fffffffffff", ar: "rrrrrrrrrrrr" },

  code: "const a = 10",
  mdProps: `[[MD__# zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz]]`,
  mdProps: [`MD__# zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz `],
  mdProps: "MD__# zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  cmOptions: {
    //VCM options
    tabSize: 14,
    mode: "text/javascript",
    theme: "ambiance",
    theme: "3024-day",
    theme: "3024-night",
    theme: "abbott",
    theme: "abcdef",
    theme: "ambiance",
    theme: "ayu-dark",
    theme: "ayu-mirage",
    theme: "base16-dark",
    theme: "base16-light",
    theme: "bespin",
    theme: "blackboard",
    theme: "cobalt",
    theme: "colorforth",
    theme: "darcula",
    theme: "dracula",
    theme: "duotone-dark",
    theme: "duotone-light",
    theme: "eclipse",
    theme: "elegant",
    theme: "erlang-dark",
    theme: "gruvbox-dark",
    theme: "hopscotch",
    theme: "icecoder",
    theme: "idea",
    theme: "isotope",
    theme: "juejin",
    theme: "lesser-dark",
    theme: "liquibyte",
    theme: "lucario",
    theme: "material",
    theme: "material-darker",
    theme: "material-palenight",
    theme: "material-ocean",
    theme: "mbo",
    theme: "mdn-like",
    theme: "midnight",
    theme: "monokai",
    theme: "moxer",
    theme: "neat",
    theme: "neo",
    theme: "night",
    theme: "nord",
    theme: "oceanic-next",
    theme: "panda-syntax",
    theme: "paraiso-dark",
    theme: "paraiso-light",
    theme: "pastel-on-dark",
    theme: "railscasts",
    theme: "rubyblue",
    theme: "seti",
    theme: "shadowfox",
    theme: "solarized dark",
    theme: "solarized light",
    theme: "the-matrix",
    theme: "tomorrow-night-bright",
    theme: "tomorrow-night-eighties",
    theme: "ttcn",
    theme: "twilight",
    theme: "vibrant-ink",
    theme: "xq-dark",
    theme: "xq-light",
    theme: "yeti",
    theme: "yonce",
    theme: "zenburn",
    theme: "default",

    lineNumbers: true,
    line: true,
    //         // name
    // mode: {
    //   name: 'javascript',
    //   json: true
    // },

    // // ext
    // mode: {
    //   ext: 'js'
    // },

    // // mime
    // mode: {
    //   mime: 'text/javascript'
    // },

    // // filename
    // mode: {
    //   filename: 'index.js'
    // }
    // more VCM options, 更多 VCM 的高级配置...
  },
  mkdSrc: `# h1 headeing 8-)
      aaaaaaa<li>aaaaaa</li>555555
      bbbbbbbbb
      dddddd`,
  trackedObj: {
    comp: "VTextField",
    options: {
      val: null,
      props: {
        value: "a value",
      },
    },
    tracker: (that) => {
      that.data.options.class =
        that.data.options?.val?.length % 2 == 0 ? "red" : "blue";
    },
  },

  vTextFieldObj: {
    comp: "VTextField",
    // comp:"VCheckbox",
    // comp: "VCard",
    // comp: "div",
    // comp: "input",
    options: {
      val: "ssssssssssssssss",
      // html:'mdi-tennis',
      attrs: { value: "sssss" },
      global: "ch",
      // val:true,
      slots: {
        append: "li__appppppppend",
        label: "li__label",
      },
      props: {
        value: "wwwwwwwwwwwwwww",
        label: "aaaaaaaaaaaa",
      },
      // on:{}
      on: {
        click: () => {
          alert("dddddddddd");
        },
        inputtt: (event) => {
          alert("input event occurred");
        },
        change: (event) => {
          alert("change event occurred");
        },
        "click:append": (event) => {
          alert("click:append event occurred");
        },
      },
    },
  },
  // vTextFieldObj:'li__dddddddddddddd',
  vCheckBoxObj: {
    // comp: "VTextField",
    comp: "VCheckbox",
    // comp: "VCard",
    // comp: "div",
    options: {
      global: "ch",
      val: true,
      slots: {
        append: "li__appppppppend",
        label: "li__label",
      },
      props: {
        value: true,
        label: "aaaaaaaaaaaa",
      },
      on: {
        click: () => {
          alert("dddddddddd");
        },
        change: (event) => {
          alert("change event occurred");
        },
        "click:append": (event) => {
          alert("click:append event occurred");
        },
      },
    },
  },

  tooltipContent: "<a href='www.google.comn'>2eme luttin</a>",
  objWithLoading: {
    // comp: "ScheduleComp",
    comp: "div",
    options: {
      key: "key-timetable",
      class: "deep-purple",
      html: "htmel content with loading desactivated",
      // global: 'ttb',
      load: {
        active: true,
        options: {
          html: "custom loading",
          props: {
            // color:'red',
            size: "60",
            width: "5",
            indeterminate: true,
          },
        },
      },
      hide: !true,
    },
    // class: " black--text-center  black--text-center ",
  },
  //  tooltip: false,
  loading: true,
  dialog: false,
  dialogTop: 0,
  dialogLeft: 0,

  menuProperty0: {
    comp: "VCard",
    options: {
      menu: {
        event: "mouseover",
        event: "mouseleave",
        event: "mouseenter",
        // event:'click',
        comp: "VDialog",
        activeOptions: {
          class: "green pa-5 ma-5",
        },
        options: {
          class: "red",
          props: {
            value: true /* your model for controlling the menu visibility */,
            offsetY: true,
            closeOnContentClick: !true,
            contentClass: "grey",
            closeDelay: 10,
          },
        },
        content: [
          "<~ol>",
          "li__wbc withmenu property content|pa-5 ma-5 orange__red",
          "li__wbc withmenu property content|pa-5 ma-5 orange__blue",
          "li__wbc withmenu property content|pa-5 ma-5 orange__green text-h4",
          "VTab__wbc withmenu property content",
        ],
        // content:contactView
      },
      // menu:['<~ol>','li__wbc withmenu property content|red','li__wbc withmenu property content|blue','li__wbc withmenu property content|green text-h4','li__wbc withmenu property content',],
      // float:true,
      html: "activator of th wbc menu Property|yellow",
      footers: ["footers activator of th wbc menu Property|red"],
      headers: ["headers activator of th wbc menu Property|blue"],
    },
    header: ["headers activator of th wbc menu Property|grey"],
    footer: ["footers activator of th wbc menu Property|grey"],
  },
  menuProperty1: {
    comp: "VCard",
    options: {
      menu: {
        event: "mouseover",
        event: "mouseenter",
        comp: "div",
        options: {
          class: "red",
          props: {
            value: !true /* your model for controlling the menu visibility */,
            offsetY: true,
            closeOnContentClick: !true,
            contentClass: "grey",
            closeDelay: 10,
          },
        },
        // content:['<~ol>','li__wbc withmenu property content|pa-5 ma-5 orange__red','li__wbc withmenu property content|pa-5 ma-5 orange__blue','li__wbc withmenu property content|pa-5 ma-5 orange__green text-h4','VTab__wbc withmenu property content',]
        content: "contactView",
      },
      // menu:['<~ol>','li__wbc withmenu property content|red','li__wbc withmenu property content|blue','li__wbc withmenu property content|green text-h4','li__wbc withmenu property content',],
      // float:true,
      html: "activator of th wbc menu Property|yellow",
      footers: ["footers activator of th wbc menu Property|red"],
      headers: ["headers activator of th wbc menu Property|blue"],
    },
    header: ["headers activator of th wbc menu Property|grey"],
    footer: ["footers activator of th wbc menu Property|grey"],
  },
  aud0: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
  aud1: "https://www.bensound.com/bensound-music/bensound-acoustic.mp3",
  aud2: "https://incompetech.com/music/royalty-free/mp3",
  aud3: "https://soundbible.com/mp3/lion_roar.mp3",
  aud4: "https://freemusicarchive.org/music/download/0b16e4f6a5684b0c9edffda0132586a6/1e3e5d1e35c24b13a1d2451448d5c22d/6c926ddf67b941f0ba2ff42920702c74.mp3",

  ds2: {
    // comp:['~VContainer','ex1'],
    options: {
      class: "container text--primary",
    },

    p2: [
      "<b>HTML</b>, ou <b>HyperText Markup Language</b>, est un langage qui structure le contenu d'une page web à travers une suite d'<b>éléments</b>. <br><b>Ces éléments HTML</b>, définis par des <b>balises</b>, encadrent et formatent le contenu pour lui donner une apparence ou un comportement spécifique. Par exemple, ils peuvent transformer du texte ou une image en lien vers une autre page, créer des titres, et plus encore.<br>  ",
      "<~ol>",
      [
        "<div>",
        "h2__Partie 1: Elément HTML",
        `par exemple: Si on veut que la ligne ait son propre paragraphe, on peut utiliser les balises correspondantes (&ltp&gt) pour encadrer le contenu :`,
        {
          comp: "img",
          options: {
            class: "container pa-15 ma-1",
            attrs: {
              src: 'require("./../../assets/html_ele1.png")',
              height: "500px",
              width: "50px",
            },
            style: {},
          },
        },
        "Les parties principales de notre élément sont :",
        [
          "<~ul>",
          "<li>",
          "<b>Le nom de l'élément</b> : refere au l'élément lui meme (ici p)",
          "<b>La balise ouvrante</b> : celle-ci se compose du nom de l'élément (ici p), entre deux chevrons (le premier ouvrant < et le second fermant >). Cela indique le début de l'élément, ici cela indique où le paragraphe commence.",
          "<b>La balise fermante</b> : à la différence de la balise ouvrante, une barre oblique (slash) est ajoutée avant le nom de l'élément. Cela indique la fin de l'élément. Dans notre exemple, c'est l'endroit où le paragraphe s'arrête. Oublier cette balise fermante est une erreur qu'on fait souvent au début et qui peut déclencher des effets étranges et indésirables.",
          "<b>Le contenu</b> : le contenu de l'élément. Pour cet exemple, il s'agit uniquement de texte.",
          "<b>L'élément</b> : l'ensemble formé par la balise ouvrante, la balise fermante et le contenu constitue l'élément.",
        ],
        [
          "<li>",
          `1-Ecrire une fonction nommee balise_ouverture qui prend en paramètre une chaine "tag" et renvvoie une balise HTML de la forme <tag> si elle est de taille <10 et alphanumerique
        sinon elle renvoie "&ltdiv>"
        exemple:
            balise_ouverture("h1")=="&lth1>"
        `,
          `2-De meme raisonnement ecrire une fonction nommee balise_fermeture qui prend en paramètre une chaine "tag" et renvoie une balise HTML de la forme </tag> si elle est de taille <10 et alphanumerique
        `,
          `3- Reecrire la meme fonction balise fermetur en utilisant la fonction balise_ouverture`,
          `
        4- une chaine de caractere est une bonne chaine si elle commence  par une balise d ouverure (question 1) et se termine par une balise de fermeture (question 2)

    Exemple:
        ch0='&lth1>This is a good string&lt/h1>' est une bonne chaine
        ch1='&lth1>This is a good string&lt/h1>' est une bonne chaine
        ch2='&lth1>This is a bad string&lt/h2>' n'est pas une bonne chaine

    Ecrire une fonction nommee good_str qui prend en parametre une chaine de caractere et renvoie True si c'est une bonne chaine et False sinon
        `,
          `
        5- ecrire une fonction html_to_list qui prend en parametre une chaine de caractere et retourne une liste de chaine de type good_str
        exemple:
            ch='&lth1>This is a good string&lt/h1>&lth2>This is a bad string&lt/h2>&ltdiv>this another string&lt/div>&lt&lth1>This is a good string&lt/h1>&ltli>This is a good string&lt/li>'
            indication: utiliser la fonction split de la str selon '>&lt'
        `,
        ],
        `h2__Partie 2:Imbrication d'éléments`,

        `On peut également placer des éléments à l'intérieur d'autres éléments : c'est ce qu'on appelle l'imbrication. Si on souhaitait indiquer que le chat était très grincheux, on pourrait placer le mot « très » dans un élément &ltstrong>, indiquant l'accentuation sur ce mot :

HTML
Copy to Clipboard
&ltp>Mon chat est &ltstrong>très&lt/strong> grincheux.&lt/p>
Il faut en revanche s'assurer que les éléments sont correctement imbriqués. Dans l'exemple précédent, on commence par ouvrir l'élément &ltp>, puis l'élément &ltstrong>. Il faut donc commencer par fermer l'élément &ltstrong>, puis l'élément &ltp>. Ce qui suit est incorrect :

HTML
Copy to Clipboard
&ltp>Mon chat est &ltstrong>très grincheux.&lt/p></strong>
Les éléments doivent être ouverts et fermés correctement pour contenir ou être contenu. S'ils se chevauchent l'un sur l'autre, votre navigateur web essaiera au mieux de deviner l'intention, mais cela pourra entraîner des résultats inattendus : mieux vaut éviter !
`,

        [
          "<li>",
          `
                                6- on suppose qu une chaine de type good_str est de la forme <tag>texte</tag> peut contenir une autre chaine de type good_str
dans le cas ou une chaine de type good_str on va retourner un dictionnaire de la forme {tag:[chaine1,chaine2,...]}
On va ecrire une fonction nommee html_to_dict qui prend en parametre une chaine de caractere et retourne un dictionnaire de chaine de type good_str 

example:
ch='&lthead>&lth1>This is a good string&lt/h1>&lth2>This is a bad string&lt/h2>&lt/head>'
html_to_dict(ch) retourne {'head':['&lth1>This is a good string&lt/h1>','&lth2>This is a bad string&lt/h2>']}
                                `,
          `
        7- On va utiliser la fonction html_to_dict pour ecrire une fonction recursive nommee html_content  c est a dire que les valeur du dictionnaire peuvent etre des dictionnaires
        `,
        ],
        `h2__Partie 3: gestion de fichiers`,
        `Une page html peut etre simplifie et represente par un fichier txt de la forme :

Exemple de contenue:

    &lthtml>
        &lthead>
            &lttitle>My Webpage&lt/title>
        &lt/head>
        &ltbody>
            &lth1>Welcome to my webpage!&lt/h1>
            &ltp>This is a simple HTML content.&lt/p>
            &ltdiv>This is a simple HTML content.&lt/div>
            &ltdiv>This is a simple HTML content.&lt/div>
        &lt/body>
    &lt/html>`,
        [
          "<li>",
          `8- Ecrire une fonction nommee file_to_string qui prend en parametre un fichier txt et retourne une chaine de caractere qui represente le contenue du fichier sans les espaces, les tabulations  et les retours a la lignes entre les balises

Exemple:
ch='&lthtml>&lthead>   
      &lttitle>My Webpage&lt/title>     &lt/head>&ltbody>
      
      &lth1>Welcome to my webpage!&lt/h1>    &ltp>This is a simple HTML content.&lt/p>
      
      &ltdiv>This is a simple HTML content.&lt/div>&ltdiv>This is a simple HTML content.&lt/div>&lt/body>
      &lt/html>'

file_to_string(ch)='&lthtml>&lthead>&lttitle>My Webpage&lt/title>&lt/head>&ltbody>&lth1>Welcome to my webpage!&lt/h1>&ltp>This is a simple HTML content.&lt/p>&ltdiv>This is a simple HTML content.&lt/div>&ltdiv>This is a simple HTML content.&lt/div>&lt/body>&lt/html>'`,
          `
9- Ecrire une fonction nommee file_to_dict qui prend en parametre  le nom de fichier  qui contient le contenue de la page html et retourne un dictionnaire de type html_content
il faut  se debarrasser des caracteres non imprimables entre les good_str (utiliser la fonction file_to_string pour recuperer le contenue du fichier)
`,
        ],
      ],
    ],
  },

  drawer: false,
  group: null,
  arrayCompNested: {
    comp: [
      // '<li>',
      // '<VCard|red>',
      // { comp: '*li',header:'Global header',footer:'Global footer', options: { /* disposition: 'adjacent', */ class: 'green pa-15 ma-15',html:'hhhhhhhhh',footers:'footers',headers:'headers' } },
      // 'a',
      // {comp:'~li',options:{class:'red'}},
      "title",
      "club",
      "seasonSection",
      "playerSection",
      "<~ol|green pa-1 ma-1>",
      "<li>",
      "dateSection",
      "sessionScheduleSection",
      "bookingBtnSection",
    ],
    dive: true,
    a: { options: { html: "bbbbbbbb" } },
    options: {
      key: "key-pageComps",
      hide: !true,
      dispView: true,
      load: false,
      float: false,
      on: {},
      class: "red",
      meta: {
        title: {
          en: `Looking for session `,
          fr: "A la recherche d'une réservation de la session de ",
          ar: `البحث عن حجز `,
        },
      },
    },

    title: {
      ///title////
      comp: "VRow",
      hide: !true,
      options: {
        key: "key-title",
        class: "text-h3 justify-center text-darken-1 my-5", // md: "12", // sm: "12", // lg: "12", // xl: "12",
        html: {
          en: "The Booking Session ",
          fr: "La séance réservée ",
          ar: "تم حجز الحصة الخاصة ",
        },
        footers: {
          comp: "VRow",
          options: {
            class: "text-h6 justify-center text-darken-1 my-5",
            html: {
              en: `Looking for session `,
              fr: "A la recherche d'une réservation de la session de ",
              ar: `البحث عن حجز `,
            },
          },
        },
      },
    },

    club: {
      comp: "VSelect",
      options: {
        key: "key-club",
        class: "red",
        headers: {
          en: "Club choice",
          fr: "Choix du club",
          ar: "اختيار النادي",
        },
        hide: (_thiss) => {
          let u = _thiss._user;
          return !(
            u &&
            u?.is_staff |
              u?.is_federation |
              u?.is_governoment |
              u?.is_ministry |
              u?.is_club
          );
        },
        val: null,
        // ref: 'username',
        props: {
          disabled: false,
          // cols: "6",
          // class:"red ",
          // loading: true,
          dense: true,
          outlined: true,

          items: [],
          label: (_thiss) => {
            return {
              en: "Select a Club",
              fr: "Sélectionnez un Club",
              ar: "حدد النادي",
            };
          },
          title: (_thiss) => {
            return {
              en: "Select a Club",
              fr: "Sélectionnez un Club",
              ar: "حدد النادي",
            };
          },
          placeholder: (_thiss) => {
            return {
              en: "Select a Club",
              fr: "Sélectionnez un Club",
              ar: "حدد النادي",
            };
          },
          "prepend-icon": "mdi-tennis",
        },
        style: {},
      },
      on: {},
      // rules: [
      //   { method: 'required', params: { message: '', lg: obj.lg } },
      //   { method: 'email', params: { message: '', lg: obj.lg } },
      //   { method: 'maxLength', params: { message: '', length: 20, lg: obj.lg } },
      //   { method: 'minLength', params: { message: '', length: 3, lg: obj.lg } },
      // ],

      on: {
        // change: () => alert('rrrrrrr'),
        // click: () => alert('rrrrrrr'),
        // keyup: (e) => obj.onKeyUp(e),
        // mousedown: doThis,
        // mouseup: doThat
      },
    },

    seasonSection: {
      comp: ["season", "year"],

      options: {
        headers: {
          en: "Season choice",
          fr: "Choix de la saison",
          ar: "اختيار الموسم",
        },
        class: "red",
      },
      year: {
        comp: "VSelect",
        options: {
          key: "key-year",
          hide: !true,
          props: {
            disabled: false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            // type: 'text',
            items: [],
            // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
            val: "",
            // transfVal: v=>v.id,
            // transfVal: v => v.name,
            "item-text": (v) => v.year,
            "item-value": (v) => v.year,

            label: (thiss) => {
              return {
                en: "Select a Year",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            title: (thiss) => {
              return {
                en: "Select a Year",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Select a Year",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            "prepend-icon": "mdi-calendar-month",
          },
          style: {},
        },
      },

      season: {
        comp: "VSelect",
        options: {
          // key: _thiss => {
          // 	console.log('thhhhhhhhhhhhhhhhhhhhhhhhhhhhh', _thiss)
          // 	return "key-season" + _thiss._data.seasonSection.season.options.props.items.length
          // },
          class: "yellow",
          key: "key-season",
          hide: !true,
          props: {
            disabled: false,
            // ref: 'username',
            // cols: "6",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            // type: 'text',
            items: ["baba"],
            // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
            val: null,
            // transfVal: v=>v.id,
            // transfVal: v => v.name,
            // "item-text": (v) => v.year,
            // "item-value": (v) => v.year,

            label: {
              en: "Select a Season",
              fr: "Sélectionnez une Saison",
              ar: "حدد الموسم",
            },
            title: (thiss) => {
              return {
                en: "Select a Season",
                fr: "Sélectionnez une Saison",
                ar: "حدد الموسم",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Select a Season",
                fr: "Sélectionnez une Saison",
                ar: "حدد الموسم",
              };
            },
            "prepend-icon": "mdi-tennis-ball",
          },
          style: {},
        },
      },
    },

    playerSection: {
      ///title////
      comp: ["group", "player"],
      options: {
        key: "p-sec",
        hide: !true,
        val: "",
        class: "red text-h5 justify-center text-darken-1 my-5 ",
        style: {},
        html: (thiss) => {
          return {
            en: "Player Choice",
            fr: "Choix du Joueur",
            ar: "اختيار اللاعب",
          };
        },
      },

      group: {
        comp: "VSelect",
        options: {
          key: "group",
          hide: !true,
          props: {
            disabled: !false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            items: [],
            hide: !true,
            val: "",
            // transfVal: '',
            // transfVal: v=>v.username, // v => { return { "name": "" } },
            // type: 'text',
            label: (thiss) => {
              return {
                en: "Group",
                fr: "Groupe",
                ar: "المجموعة",
              };
            },
            title: (thiss) => {
              return {
                en: "Group",
                fr: "Groupe",
                ar: "المجموعة",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Group",
                fr: "Groupe",
                ar: "المجموعة",
              };
            },
            "prepend-icon": "mdi-account-multiple",
            style: {},
          },
        },
      },
      player: {
        comp: "VSelect",
        options: {
          key: "key-player",
          hide: !true,
          props: {
            disabled: false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            items: [],
            hide: !true,
            val: "",
            // transfVal: '',
            // transfVal: v=>v.username, // v => { return { "name": "" } },
            // type: 'text',
            label: (thiss) => {
              return {
                en: "Player",
                fr: "Joueur",
                ar: "اللاعب",
              };
            },
            title: (thiss) => {
              return {
                en: "Player",
                fr: "Joueur",
                ar: "اللاعب",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Player",
                fr: "Joueur",
                ar: "اللاعب",
              };
            },
            "prepend-icon": "mdi-face",
            style: {},
          },
        },
      },
    },

    dateSection: {
      comp: ["date"],
      options: {
        key: "sess-sec",
        hide: !true,
        val: "",
        class: "red text-h5 justify-center text-darken-1 my-5 ",
        style: {},
        html: (thiss) => {
          return {
            en: "Date Choice",
            fr: "Choix de la date",
            ar: "اختيار التاريخ",
          };
        },
      },
      date: {
        comp: "VSelect",
        options: {
          key: "date-booking",
          hide: !true,
          props: {
            disabled: !false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            // type: 'text',
            items: [],
            // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
            val: "",
            // transfVal: v=>v.id,
            // 'item-text':"name",
            // 'item-value':"id",

            label: (thiss) => {
              return {
                en: "Select a Date",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            title: (thiss) => {
              return {
                en: "Select a Date",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Select a Date",
                fr: "Sélectionnez une Année",
                ar: "اختر السنة",
              };
            },
            "prepend-icon": "mdi-calendar-month",
            style: {},
          },
        },
        // rules: [
        //   { method: 'required', params: { message: '', lg: obj.lg } },
        //   { method: 'email', params: { message: '', lg: obj.lg } },
        //   { method: 'maxLength', params: { message: '', length: 20, lg: obj.lg } },
        //   { method: 'minLength', params: { message: '', length: 3, lg: obj.lg } },
        // ],

        // mainActionEvents: {change:'linkVariablesToFields'},
        // mainActionEvents: {},
        events: {
          // change: () => alert('rrrrrrr'),
          // click: () => alert('rrrrrrr'),
          // keyup: (e) => obj.onKeyUp(e),
          // mousedown: doThis,
          // mouseup: doThat
        },
        // to: (s) => ({
        //   name: "TimeTableDetailsCompList",
        //   params: {
        //     day: s,
        //     typeSeance: "s.statu",
        //     timeInterval: 60,
        //     typeDisplay: 0
        //     // name: s.id,
        //   }
        // })
      },
    },

    sessionScheduleSection: {
      comp: ["duration", "playground", "sessionSchedule"],
      options: {
        key: "sess-sec",
        hide: !true,
        val: "",
        class: "red text-h5 justify-center text-darken-1 my-5 ",
        style: {},
        html: (thiss) => {
          return {
            en: "Session Choice",
            fr: "Choix de la Séance",
            ar: "اختيار الحصة",
          };
        },
      },
      duration: {
        comp: "VSelect",
        options: {
          key: "duration-key",
          hide: !true,
          props: {
            disabled: !false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            items: [30, 60, 90, 120, 150, 180],
            // hide: !true,
            val: "",
            // transfVal: '',
            // transfVal: v=>v.username, // v => { return { "name": "" } },
            // type: 'text',
            label: (thiss) => {
              return {
                en: "Session length",
                fr: "Durée de la séance",
                ar: "مدة الحصة",
              };
            },
            title: (thiss) => {
              return {
                en: "Session length",
                fr: "Durée de la séance",
                ar: "مدة الحصة",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Session length",
                fr: "Durée de la séance",
                ar: "مدة الحصة",
              };
            },
            "prepend-icon": "mdi-tennis-ball",
            style: {},
          },
        },
      },
      playground: {
        comp: "VSelect",
        options: {
          key: "pg-booking",
          hide: !true,
          props: {
            disabled: !false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            // type: 'text',
            items: [],
            // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
            val: "",
            // transfVal: v=>v.id,
            // transfVal: v => v.name,
            // 'item-text':"name",
            // 'item-value':"id",

            label: (thiss) => {
              return {
                en: "Select a Court",
                fr: "Sélectionnez un Court",
                ar: "حدد الملعب",
              };
            },
            title: (thiss) => {
              return {
                en: "Select a Court",
                fr: "Sélectionnez un Court",
                ar: "حدد الملعب",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Select a Court",
                fr: "Sélectionnez un Court",
                ar: "حدد الملعب",
              };
            },
            "prepend-icon": "mdi-stadium",
            style: {},
          },
        },
        // rules: [
        //   { method: 'required', params: { message: '', lg: obj.lg } },
        //   { method: 'email', params: { message: '', lg: obj.lg } },
        //   { method: 'maxLength', params: { message: '', length: 20, lg: obj.lg } },
        //   { method: 'minLength', params: { message: '', length: 3, lg: obj.lg } },
        // ],

        // EventFoncArg: {

        //   // load: (thiss) => {
        //   //   let aSeason = thiss.clubSection.content.season.props,
        //   //    aGroupe = thiss.playerSection.content.groupe.props;
        //   //   //================intiailisation of Season===================
        //   //   thiss.ObjTransfFunc({
        //   //     "serializer": {
        //   //       "model": "Season",
        //   //       "fields": {
        //   //         name:"",
        //   //         id:""
        //   //       },
        //   //       "kwargs": {
        //   //         id__gte: 0 //m.$data.fieldos.desc.props.val?m.$data.fieldos.desc.props.val:0
        //   //         // id__gte:6
        //   //       },
        //   //       "order_by": [
        //   //         "id"
        //   //       ]
        //   //     },
        //   //     "custom_permission": [
        //   //       "IsAdminUser"
        //   //     ]
        //   //   }).then((response) => {
        //   //     alert('kkkkkkkkkkkk');
        //   //     alert(JSON.stringify(response));
        //   //     aGroupe.disabled=true
        //   //     aSeason.items =response.body[0].result
        //   //     aSeason['item-text'] = v => v.name;
        //   //     aSeason['item-value'] = "id";
        //   //   alert(JSON.stringify(thiss.clubSection.content.season))

        //   //     // alert(aSeason.val);

        //   //   })

        //   // },
        //   change: (thiss) => {
        //     console.log('++++++++++++++++++', thiss.user);
        //     // thiss.mainWrapper.displayComp = false;
        //     //================ Initialisation ===================

        //     let aClub = thiss.postFieldos.clubSection.content.club.props,
        //       aDate = thiss.postFieldos.sessionScheduleSection.content.date.props,
        //       aPlayground = thiss.postFieldos.sessionScheduleSection.content.playground.props,
        //       //================ fields ===================
        //       // aSession = thiss.$data.fieldos.session.props;
        //       aSession = thiss.postFieldos.sessionScheduleSection.content.session.props;

        //     // thiss.mainWrapper.displayComp = false

        //     // ================intiailisation of Current User OR accounts Users (only for staff)===================
        //     thiss.ObjTransfFunc({
        //       "serializer": {
        //         "model": "Playground",
        //         "fields": {
        //           "id": "",
        //           "club": { "name": "" },
        //           "name": "",
        //           "abbr": "",
        //           "ground": "",
        //           "state": ""
        //         },
        //         "kwargs": {
        //           "id": aPlayground.val
        //         },
        //         "depth": 2,
        //         "logic_and": true,
        //         "order_by": [
        //           "id"
        //         ]
        //       },
        //       // "check_pwd": "YASMINEahmed1978",
        //       "custom_permission": [
        //         "IsAuthenticated"
        //       ],
        //       "methods_fields": [{
        //         "name": "get_Sessions_libre_per_date",
        //         "display": "availableSessions",
        //         "serializer": {
        //           "model": "Session",
        //           "fields": {},
        //           "depth": 2,
        //           "logic_and": true,

        //           "order_by": [
        //             "-id"
        //           ]
        //         },
        //         "kwargs": {},
        //         "args": [
        //           aDate.val
        //         ],
        //         "order_by": [
        //           "-id"
        //         ]
        //       }]
        //     }, 'playground/playground').then((response) => {
        //       // thiss.$data.mainWrapper.displayComp = true;

        //       aSession.disabled = false
        //       // alert(JSON.stringify(response[0].availableSessions));
        //       // alert(JSON.stringify(thiss.user));
        //       // accountField.props.items = thiss.user
        //       // if (thiss.user.is_staff) {
        //       aSession.items = response.body[0].result[0].availableSessions;
        //       // }
        //       aSession['item-text'] = v => v.times.begin.slice(0, 5) + '-' + v.times.end.slice(0, 5) + ' (' + thiss.capitalizeWords(v.playground.name) + ')'; //item=> JSON.stringify(item),
        //       aSession['item-value'] = "id";

        //     })
        //     // thiss.$data.generalData_.theSentData.serializer.kwargs = {contract__season_id__gte: aSeason.val}

        //     // thiss.mainWrapper.displayComp = true;
        //     // thiss.linkVariablesToFields();

        //   },
        // },

        // mainActionEvents: {change:'linkVariablesToFields'},
        // mainActionEvents: {},
        events: {
          // change: () => alert('rrrrrrr'),
          // click: () => alert('rrrrrrr'),
          // keyup: (e) => obj.onKeyUp(e),
          // mousedown: doThis,
          // mouseup: doThat
        },
        // to: (s) => ({
        //   name: "TimeTableDetailsCompList",
        //   params: {
        //     day: s,
        //     typeSeance: "s.statu",
        //     timeInterval: 60,
        //     typeDisplay: 0
        //     // name: s.id,
        //   }
        // })
      },
      sessionSchedule: {
        comp: "VSelect",
        options: {
          key: "sess-schedule-key",
          hide: !true,
          props: {
            disabled: !false,
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            items: [],
            // hide: !true,
            val: "",
            // transfVal: '',
            // transfVal: v=>v.username, // v => { return { "name": "" } },
            // type: 'text',
            label: (thiss) => {
              return {
                en: "Session Schedule",
                fr: "Horaire de la Séances",
                ar: "توقيت الحصة",
              };
            },
            title: (thiss) => {
              return {
                en: "Session Schedule",
                fr: "Horaire de la Séances",
                ar: "توقيت الحصة",
              };
            },
            placeholder: (thiss) => {
              return {
                en: "Session Schedule",
                fr: "Horaire de la Séances",
                ar: "توقيت الحصة",
              };
            },
            "prepend-icon": "mdi-tennis-ball",
            style: {},
          },
        },
      },
    },

    bookingBtnSection: {
      comp: ["bookingBtn"],
      options: {
        key: "btn-booking-sec",
        hide: !true,
        val: "",
        class: "red text-h3 justify-end text-darken-1 my-5 ",
        style: {},
        // html: { en: 'Management of Categories', fr: 'Gestion des Catégories', ar: 'إدارة الفئات' },
      },

      bookingBtn: {
        comp: "VBtn",

        options: {
          disabled: true,
          html: (thiss) => {
            return {
              en: "[[Schedule|white--text]]",
              fr: "[[Planifier|white--text]]",
              ar: "[[أضف|white--text]]",
            };
          },
          class: "purple darken-2 white--text  ma-5",
          style: {},
          props: {
            // ref: 'username',
            // cols: "6",
            // class:"red ",
            // loading: true,
            dense: true,
            outlined: true,
            // prefix: 'My username is: ',
            // reverse: true,
            // shaped: true,
            // rounded: true,
            // success: true,
            // 'validate-on-blur': false,
            // suffix: "?????",
            // id: 'username',
            // val: 'My favorite club',
            // transfVal: '',
          },
        },
      },
    },
  },

  ob0: 999999,
  ob0: "999999",
  obIcon: {
    hComp: "VIcon",
    // comp: "li",
    switch: true,
    // switchEvent:'click',
    options: {
      class: "grey  white--text px-16",
      style: {
        "background-color": "red",
        border: `10px dashed black`,
      },
      html: "mdi-home",
      headers: "header before the v-icon|red",
      footers: "footer after the v-icon|blue",
    },
    hOptions: {
      class: "red  white--text px-16",
      html: "mdi-tennis",
      headers: "header before the v-icon|red",
      footers: "footer after the v-icon|blue",
    },
  },
  WBCFunc0: (h_) => h_("li", "fffffffffffffff"),
  WBCFunc1: "(h_) => h_(contactView)",
  WBCFunc2: { comp: "contactView", options: {} },
  WBCFunc3: "contactView",
  WBCFunc4: "contactView1",
  WBCFunc5: (h_) =>
    h_("li", { class: "green container" }, [
      "aaaaaaaaaaaaaaaaaaaaaaa",
      "h_(contactView)",
    ]),

  imgObj: {
    comp: "img",
    options: {
      class: "text-center text-h10 green font-weight-medium   ",
      attrs: {
        src: "https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000",
        hight: 70,
        width: 1000,
      },
      headers: "pets",
      to: "https://google.com",
    },
  },
  VImgObj: {
    comp: "VImg",
    options: {
      class: "text-center text-h10 green font-weight-medium   ",
      props: {
        src: "https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000",
        hight: 70,
        width: 100,
      },
      headers: "pets",
      to: "https://google.com",
    },
  },
  VBtnSlotsObj0: (h) =>
    h(
      "VBtn",
      {
        props: {
          loading: true, // Pass the loading state as a prop
        },
        on: {
          // click: this.handleClick
        },
      },
      [
        h("template", { slot: "default" }, "Click me"),
        h("template", { slot: "loader" }, [h("VIcon", "mdi-tennis")]),
      ]
    ),
  VBtnSlotsObj: {
    comp: "VBtn",
    dive: true,
    options: {
      // props:{loading:true},
      loading: true,
      on: {
        click: (thiss, evt) => {
          alert(5555555555555);
          console.log(thiss);

          thiss.data.options.loading = !thiss?.data?.options?.loading;
          if (thiss?.data?.options.loading) {
            thiss.data.options.html = "eeeeeeeeeeeeeeeeee";
          } else {
            thiss.data.options.html =
              "li__fffffffffffffffffff|grey pa-15__red pa-5|dfdsfas";
          }
        },
      },
      html: "dddddddddddddddddd",
      //   slots:{default:'default slot',
      //   // loader:h=>h('li','dddddddddd'),
      //   loader:{comp:'VIcon',options:{html:'mdi-tennis'}},
      // }
    },
  },
  VMenuSlotsObj0: {
    comp: "VTab",
    options: {
      props: {
        value: true,
        // activator: h=>h('li','activatorBtn') // Set the activator slot to the v-btn component
      },
      html: "VMenu ddddddddddddddddddddddddddd",
      // slots:{
      //   activator:'menu activator',

      // },
      footers: ["<~VList>", ["<~VListItem>", "aaaaa", "bbbbb"]],
    },
  },

  carouselObj0: [
    "logInView",
    "contactView",
    // {comp:['contactView'],options:{}},

    "<~VCarousel>",
    {
      comp: "<*VCarouselItem>",
      options: {
        key: "image-0",
        props: {
          value: true,
          src: "https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo",
          // href: 'https://www.google.com',
        },
        // class: 'red',
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },

    // contactView,
    {
      options: {
        key: "image-1",
        props: {
          value: true,
          // src: 'https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo',
          // href: 'https://www.google.com',
        },
        html: "Second slide",
        html: "VSheet__First slide|red",
        footers: [
          "contactView",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
        ],

        class: "green container",
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },
    {
      options: {
        key: "image-1",
        props: {
          value: true,
          // src: 'https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo',
          // href: 'https://www.google.com',
        },
        html: "Second slide",
        html: "VSheet__First slide|red",
        footers: [
          "logInView",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
          "li__aaaaaaaaaaa",
        ],

        class: "green container",
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },
    {
      options: {
        key: "image-2",
        props: {
          // value:true,
          src: "https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo",
          // href: 'https://www.google.com',
        },
        html: { comp: "logInView", options: {} },
        // class: 'green',
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },
    {
      options: {
        key: "image-3",
        props: {
          value: true,
          src: "https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo",
          // href: 'https://www.google.com',
        },
        html: [
          "<~VContainer>",
          "<~VRow>",
          "<VCard>",
          {
            comp: "div",
            // header:'THe title',
            header: "VDivider",
            switch: true,
            switchEvent: "click",
            // dive:true,
            hOptions: {
              html: "Lista 1 hover",
              class: "container yellow blue--text",
            },
            options: {
              // global:'nested1',
              // nested: true,
              class: "container blue red--text",

              html: "Lista 1 is hovered ",
              //         html:that=>{
              //     console.log('yyyyyyyyyyyyy',that);
              //     return 'Ordered List WBCArrNested|red'
              // },
            },
            footer: [
              "<~ol>",
              "<li|red  yellow--text>",
              "THe footer",
              "THe footer",
              "THe footer",
              "THe footer",
            ],
            // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
            // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
            hFooter: [],
          },
          {
            comp: "div",
            // header:'THe title',
            switch: true,
            // dive:true,
            // hOptions: {html:'Hoptionsssssssssss'},
            options: {
              class: "container blue",
              html: "Lista 2 hover",
            },
            footer: [
              "<li|red  yellow--text>",
              "THe footer",
              "THe footer",
              "THe footer",
              "THe footer",
            ],
            // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
            hFooter: [],
          },
          {
            comp: "div",
            // header:'THe title',
            switch: true,
            // dive:true,
            // hOptions: {html:'Hoptionsssssssssss'},
            options: {
              // global:'nested1',
              // nested: true,
              class: "container blue",
              html: "Lista 3 hover",
            },
            footer: [
              "<li|red  yellow--text>",
              "THe footer",
              "THe footer",
              "THe footer",
              "THe footer",
            ],
            // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
            hFooter: [],
          },
        ],
        // class: 'green',
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },
  ],
  carouselObj1: [
    "<~VCarousel>",
    {
      comp: "*VCarouselItem",
      options: {
        html: {
          comp: "VImg",
          options: {
            props: {
              src: "image arbitraire",
            },
            html: "Second slide",
          },
        },
        // html: 'First slide',
        // class: 'red',
        // style: {color: 'rgba(0, 0, 0, 0.54)'}
      },
    },
    {
      options: {
        html: {
          options: {
            props: {
              src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            },
            html: "third slide",
          },
        },
      },
    },
    {
      options: {
        html: {
          options: {
            props: { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
            html: "third slide",
          },
        },
      },
    },
    {
      options: {
        html: {
          options: {
            props: { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
            html: "third slide",
          },
        },
      },
    },
    {
      options: {
        html: {
          options: {
            props: {
              src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            html: "third slide",
          },
        },
      },
    },
    {
      options: {
        html: {
          options: {
            props: {
              src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
            html: [
              "<~VContainer>",
              "<~VRow>",
              "<VCard>",
              {
                comp: "div",
                // header:'THe title',
                header: "VDivider",
                switch: true,
                switchEvent: "click",
                // dive:true,
                hOptions: {
                  html: "Lista 1 hover",
                  class: "container yellow blue--text",
                },
                options: {
                  // global:'nested1',
                  // nested: true,
                  class: "container blue red--text",

                  html: "Lista 1 is hovered ",
                  //         html:that=>{
                  //     console.log('yyyyyyyyyyyyy',that);
                  //     return 'Ordered List WBCArrNested|red'
                  // },
                },
                footer: [
                  "<~ol>",
                  "<li|red  yellow--text>",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                ],
                // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
                // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
                hFooter: [],
              },
              {
                comp: "div",
                // header:'THe title',
                switch: true,
                // dive:true,
                // hOptions: {html:'Hoptionsssssssssss'},
                options: {
                  class: "container blue",
                  html: "Lista 2 hover",
                },
                footer: [
                  "<li|red  yellow--text>",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                ],
                // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
                hFooter: [],
              },
              {
                comp: "div",
                // header:'THe title',
                switch: true,
                // dive:true,
                // hOptions: {html:'Hoptionsssssssssss'},
                options: {
                  // global:'nested1',
                  // nested: true,
                  class: "container blue",
                  html: "Lista 3 hover",
                },
                footer: [
                  "<li|red  yellow--text>",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                  "THe footer",
                ],
                // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
                hFooter: [],
              },
            ],
          },
        },
      },
    },
  ],
  //  VMenuSlotsObj0:{
  //     // '<~VTabs|green pa-15 ma-15>',
  //   // b0:{
  //     comp:'VTab',
  //     // hComp:'li',
  //     switch:true,
  //     // options:{
  //     //   // wrap:'VTab',
  //     //   // class:'blue pa-15 ma-15',
  //     //   // style:{
  //     //     // height:'500px',
  //     //     // width:'500px',
  //     //   // },
  //     //   html:'VTab1',
  //     // },
  //     options:{
  //       class:'blue',
  //       html:['<VTabs>',['<VListItem>','div__aaaaa|green','div__bbbbb','div__ccccc','div__ddddd']]},
  //       hOptions:{html:['<VList>',['<VListItem>','div__aaaaa|red','div__bbbbb','div__ccccc','div__ddddd']]},
  //         header:'VTab',
  //         footer:['div__aaaaa|green','div__bbbbb','div__ccccc','div__ddddd'],
  //         hFooter:[],
  //   // },
  //   /* ['<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd'] */
  //   },
  VMenuSlotsObj0: [
    "<~VList|red>",
    "<VListItem>",
    "aaaaa",
    "bbbbb",
    "ccccc",
    "ddddd",
  ],
  // VMenuSlotsObj0:['<~ol>','<li>','aaaaa','bbbbb','ccccc','ddddd'],
  // VMenuSlotsObj0:['<VTab|green>',['VTab__tab_header','<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd']],
  // VMenuSlotsObj0: [
  //       ['<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd'],
  //       ['<~VList|green>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd'],
  //       // ['<VTab|blue>',['<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd']],
  //       // ['<VTab|yellow>',['<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd']],
  //       // ['<VTab|orange>',['<~VList|red>','<VListItem>','aaaaa','bbbbb','ccccc','ddddd']]
  //   ],
  videoObj: {
    comp: "video",
    options: {
      attrs: {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        hight: 120,
        width: 120,
        controls: true,
        autoplay: true,
      },
      headers: "video",
    },
  },
  // WBCObj0:{en:'english',fr:'french',ar:'arabic'},
  WBCSimpleObj1: `{ en: "The Club", fr: "Le club", ar: "النادي"}|green|{name:'TheClubView'}`,
  WBCSimpleObj0: {
    comp: "li",
    switch: true,
    header: "div__gloabal Header|green",
    footer: "div__global footer|yellow",

    hHeader: "div__gloabal hHeader|grey",
    hOptions: {
      class: "blue",
      html: "aaaaaaaaaaaaaa",
    },
    options: {
      class: "red",
      float: true,
      headers: "div__headerssss|green",
      footers: "div__footerssss|yellow",
      html: "ggggggggggggggggg",
      to: "ddddddd",
      all: true,
      mode: "dev",
    },
  },
  WBCFloatWithoutBtnObj: {
    comp: "li",
    header: "div__gloabal Header|green",
    footer: "div__global footer|yellow",

    options: {
      class: "red",
      close: true,
      float: "str",
      float: true,
      // float:!true,
      headers: "div__headerssss|green",
      footers: "div__footerssss|yellow",
      html: "ggggggggggggggggg",
      to: "ddddddd",
    },
  },
  WBCSimpleObjWithOutput0: {
    // output:['allOptions','main','wbcProps','raw','close','vProps','gAttrs','all'],
    output: (h_) => h_("li", { class: "red" }, "ddddddddddddddddd"),
  },
  WBCSimpleObjWithOutput1: {
    // output:['allOptions','main','wbcProps','raw','close','vProps','gAttrs','all'],
    output: (h_, that) => {
      return h_("div", { class: "blue" }, [
        that.vNodes.wbcSrc,
        that.vNodes.htmlSrc,
        that.vNodes.main,
        that.vNodes.wbcProps,
      ]);
      return that.vNodes.wbcProps;
      return that.vNodes.all;
      return that.vNodes.raw0;
      return that.vNodes.main;
      // h_('li',{class:'red'},'ddddddddddddddddd'+that.lg.lang)
    },
    comp: "li",
    // switch:true,
    header: "div__gloabal Header|green",
    footer: "div__global footer|yellow",

    hHeader: "div__gloabal hHeader|grey",
    hOptions: {
      class: "blue",
      html: "aaaaaaaaaaaaaa",
    },
    options: {
      load: false,
      class: "red",
      float: true,
      headers: "div__headerssss|green",
      footers: "div__footerssss|yellow",
      html: "ggggggggggggggggg",
      to: "ddddddddd",
      all: true,
      mode: "dev",
    },
  },
  WBCObj0: { comp: "li", header: "{en:'english',fr:'french',ar:'arabic'}" },
  WBCObjLink: {
    comp: "li",
    header: "{en:'english',fr:'french',ar:'arabic'}",
    options: { html: "htmlllllllllllll", to: "dddddddddddddddd" },
  },
  WBCObj1: {
    // comp: "VTextField",
    // comp:"VCheckbox",
    comp: "VCard",
    // comp: "div",
    hComp: "li",
    switch: true,
    dive: true,
    options: {
      global: "gbl",
      // ref: 'refA',
      // key: 'refA',
      footers: "footers1",
      footers: ["footers1"],
      class: "blue",
      key: "abc",
      html: "dddddddddddd",
      html: (that) => {
        console.log("gggggggggggggg", that);
        that.data.options.html = "eeeeeeeeeeee";
        that.data.options.on.clickk = (thiss, v) => {
          console.log("eeeeeeeee", thiss, v);
          // thiss.data.options.html+='hhhhh'ffff
          that.data.options.class = "yellow";
          alert("dddddddddddddddddddddddddddddd");
        };
        return "dsfsdfasdfasdf|red";
      },
      val: false,
      val1: false,
      props: {
        value: false,
      },
      on: {
        //   'update:inputValue':(thiss,v)=>{
        //     console.log('hhhhhhhhhhhhhhhh',thiss,v)
        //     return v
        //   }
        click: (thiss, event) => {
          console.log("clllllllllllllllicked", thiss, event);
          // thiss.vm.$emit('abc','abcdefgh')
          alert("clicked");

          // thiss.ref().$emit('mouseenter',()=>alert('over'))
        },
        abc: (thiss, value) => {
          console.log("clllllllllllllllicked", thiss, value);
          alert("abc event" + value);
        },
        aaa: (thiss, value) => {
          console.log("clllllllllllllllicked", thiss, value);
          alert("aaa event" + value);
        },
      },
    },
    hOptions: {
      class: "blue pa-15",
      html: "text changed by switching|red",
      footers: [
        "footers of switching",
        {
          comp: "VCard",
          options: {
            class: "yellow",
          },
        },
        {
          comp: "li",
          options: {
            class: "red",
            html: "ssssssssssss",
          },
        },
      ],
      footers: ["footers of switching"],
      // on:{
      //   click:()=>{
      //     alert('clicked from switch')
      //   }
      // }
    },
    init: (that) => {
      that.data.options.class = "grey";
      // that.data.options.props.label = 'manual label'
      // that.data.options.class='pink'
      // console.log("init thattttttttttttttttttttttt", that);
    },
    tracker: (that) => {
      // that.data.options.val1=that.data.options.val
      // if(that.data.options.class!=that.data.options.val)
      // {
      // that.data.options.class = that.data.options.val
      // that.data.options.html+=that.data.options.html
      // alert('stop')
      // if (that?.data?.options?.class=='red')
      // {
      // that.data.options.footers.push('li__dddddddd|blue pa-15__red pa-10')
      //   // that.data.options.footers=['li__eeeeeeeeeeeeee|blue pa-15__red pa-10']
      //   // that.data.options.class='green'
      // that.data.options.html=that.cookies.get('lg')
      // console.log("Tracked thattttttttttttttttttttttt", that, that.data.options.lg);
      // }
      // }
    },
    watch: [
      [
        [
          "data.options.html",
          "data.options.class",
          "data.options.val",
          (that) =>
            that.store.state
              .lg /* ,that=>that.cookies.state()?.var */ /* ,that=>that.data0.storage */,
        ],
        // that=>{
        //   console.log('rrrrrrrr',that,that.data.options.html)
        //   return that.data.options.html

        //   // return that.data.footer[0].comp
        // }
        // ,
        (that, newVal, oldVal) => {
          alert("changed");
          // console.log("fffffff", that, newVal, oldVal);
          // that.data.options.class='blue'
          // that.data.options.val+='green'
        },
      ],
    ],
    // footer:'ssssssssssssssss'
    // footer:['ssssssssssssssss|red'],
    // footer:{comp:'li',options:{html:'ssssssssssssssss|red'}},
    // footer:['ssssssssssssssss|red',111,true],
    // footer:thiss=>h_=>h_('li','kkkkkkkkkkkk'+thiss.data.options.ref),
    // hFooter:h_=>'hhhhhhhhhhhhwwwwwwwwww',
    // hFooter:h_=>'hhhhhhhhhhhhwwwwwwwwww',
    footer: [
      {
        comp: "li",
        options: {
          html: "classic footer",
          class: "green",
          on: {
            //   'update:inputValue':(thiss,v)=>{
            //     console.log('hhhhhhhhhhhhhhhh',thiss,v)
            //     return v
            //   }
            // click:(_thiss,that,event)=>{
            click: (_thiss) => (that) => (that0, event) => {
              console.log(_thiss, that, that0, event);
              alert("footer clicked");
              // that0.data.comp='div'
              // event.stopPropagation();
            },
          },
        },
        // watch:thiss=>([
        //   [
        //     'data.options.class',
        //     (that,oldV,newV)=>{
        //       alert('footer watched')
        //       console.log(thiss,that,oldV,newV)
        //     }
        //   ]
        // ])
      },
    ],
    header: "header switched|yellow",
    hHeader: "hHeader hover switched|grey",
    footer: "footer switched|yellow",
    hFooter: "hFooter hover switched|grey",
  },
  WBCObj2: {
    comp: "VTextField",
    dive: true,
    // comp:'input',
    options: {
      lang: "fr",
      global: "txt",
      // float:true,
      // close:true,
      class: "container green",
      // headers: {en:'englishtext to input label',fr:'french label',ar:'arab label'},

      attrs: {
        value: "ffff",
      },
      val: "aaaaaaa",
      props: {
        label: {
          en: "englishtext to input label",
          fr: "french label",
          ar: "arab label",
        },
        // value: "hhhhhhhhh",
      },
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      headers: "headersssssssssssss",
      // on: {
      //   input: (thiss, val) => {
      //     // thiss.emit('abc',val)
      //   },
      //   abc: (thiss, value) => {
      //     alert(value);
      //     thiss.data.options.props.value = value;
      //   },
      // },
    },
  },
  WBCObj3: {
    comp: "input",
    // comp:'VTextField',
    hComp: "VTextField",
    // switch: !true,
    options: {
      attrs: {},
      class: "red",
      val: "aaaaaaa",
      props: {
        label: "text to input",
        value: "hhhhhhhhh",
      },
    },
    hOptions: {
      class: "blue",
      attrs: {},
      val: "aaaaaaa",
      props: {
        label: "text to input",
        value: "hhhhhhhhh",
      },
    },
  },
  WBCObj4: {
    comp: "VCard",
    // hComp:'VTextField',
    hComp: "li",
    // switch: !true,

    options: {
      close: "clossssss",
      footers: "footers",
      global: "aaa",
      // footers: {en:'englishtext to input label',fr:'french label',ar:'arab label'},
      class: "ma-15 pa-15 red",
      // val:'aaaaaaa',
      html: "aaaaaaa",
      // props:{

      //   value:'hhhhhhhhh'
      // }
    },
    hOptions: {
      // class:'blue',
      // attrs:{},
      footers: ["footers switch"],
      footers: "footers switch",
      html: "bbbbbbbbbbb",
      props: {
        label: "text to input",
        value: "hhhhhhhhh",
      },
      style: {
        border: `10px dashed black`,
        "background-color": "#7FFFD4",
      },
    },
    footer: "footer nnnnnn",
    hFooter: "footer nnnnnn switche",
  },
  WBCObj5: {
    comp: "VCard",
    hComp: "VImg",
    // hComp: 'li',
    // switch: 'options',
    switch: true,
    // switch: 'hOptions',
    // switch: 'op',
    // libelle:'options',
    // hComp:'VIcon',
    // hComp:'VTextField',
    op: { html: "aaaaaaaaaaaaaaaa" },
    options: {
      // class: 'yellow container',
      html: "ddddddddddddd",
      // footers: ['footerrrrrrr', 'aaaaaaaaaaaaaaaa|blue'],
      footers: "main heaers level0",
      footers: "main footers level0",
      // html:'httttttttttttttt|red',
      html: {
        comp: "li",
        // hComp: 'div',
        options: {
          class: "pa-15 pink container",
          footers: "heaers level1",
          html: {
            comp: "div",
            hComp: "li",
            switch: true,
            hOptions: { html: "yyyyyyyyyyy" },
            options: {
              footers: "heaers level2",
              class: "pa-15 grey container",
              html: {
                comp: "div",
                hComp: "li",
                switch: true,
                hOptions: { html: "rrrrrrrrrr", class: "grey" },
                options: {
                  footers: "heaers level3",
                  class: "pa-15 grey container",
                  html: "footer inside html|blue",
                },
              },
            },
          },
          //         footers: {
          //     comp: 'VBtn',
          //     hComp: 'div',
          //     // switch: !true,
          //     options: {
          //         class: 'pa-15 red container',
          //         html: 'footer inside switch',
          //         footers: {
          //     comp: 'VBtn',
          //     hComp: 'div',
          //     // switch: !true,
          //     options: {
          //         class: 'pa-15 yellow container',
          //         html: 'footer inside switch'
          //     },
          //     hOptions: {
          //         class: 'pa-15 grey container',
          //         html: 'switch of footer that is inside switch',
          //     }
          // },
          //     },
          //     hOptions: {
          //         class: 'pa-15 grey container',
          //         html: 'switch of footer that is inside switch',
          //     }
          // },
        },
        hOptions: {
          class: "pa-15 grey container",
          html: "switch of footer that is inside switch",
        },
      },
      // rules: {required:(v)=>'vvvvvvvvvvvvvv'+v},
      // rules: {required:{ lg: 'fr', message: 'matloub bel francais' },maxLength:{len:20},minLength:{len:5},specialCharNb:'specialCharNb matloub',digitCharNb:{len:2},upperCharNb:{},lowerCharNb:{}},
      // rules: [
      //       'required',
      //       'maxLength',
      //       'minLength',
      //       'upperCharNb',
      //       'lowerCharNb',
      //       'specialCharNb',
      //       'digitCharNb'
      //     ] ,
      // props: {
      //     value: '',
      // },
    },
    hOptions: {
      html: "mdi-tennis",
      footers: {
        comp: "div",
        options: { html: "switch of footer that is inside switch" },
      },

      // html: thiss=>{
      //   console.log('hhhhhhhhhhhhhocer thiss',thiss)
      //   return  'WBCObj5 mouse switched on me|grey'},

      props: {
        src: "https://picsum.photos/id/11/500/300",
      },
      class: "ma-15 pa-15 yellow red--text",
      // on:{
      //   click:(that,v)=>{
      //     console.log('switched and clicked',that,v)
      //     alert('switched and clicked')
      //     v.stopPropagation()

      //   }
      // }
    },
    footer: {
      comp: "VCard",
      options: {
        html: "footer|orange",
        on: {
          click: (that) => () => {
            console.log(that);
            // that.data.switch='op'
            that.data.switch = true;
            that.data.hOptions.class = "grey";
            that.data.options.class = "grey";

            that.update();
          },
        },
      },
    },
    // hFooter:{
    //     comp:'VCard',
    //     options:{
    //         html:'footer|blue',
    //         on:{
    //             click:(that)=>()=>{
    //                 console.log(that)
    //                 // that.data.switch='op'
    //                 that.data.hOptions.html+='grey'
    //             }
    //         }
    //     }
    // }
  },
  WBCObj6: {
    comp: "VIcon",
    hComp: "div",
    switch: true,
    options: {
      class: "red",
      html: "mdi-account",
      // html:{comp:'li',options:{html:'aaaaaaaaaa'}},
      html: { en: "mdi-tennis", fr: "mdi-account", ar: "mdi-mail" },
    },
    hOptions: {
      class: "blue",
      html: "mdi-account",
      // html:{ar:'mdi-tennis',en:'mdi-account',fr:'mdi-mail'}
    },
  },
  WBCObj7: (h_) => h_("VIcon", {}, "mdi-account"),
  WBCObj8: {
    comp: "div",

    // comp: 'VIcon',
    hComp: "VIcon",
    // switch:true,
    // switch:'op',
    dive: true,

    op: { html: "other opotions", class: "grey" },
    options: {
      // close:true,
      // float:true,
      // load:true,
      headers: "div__headers options|green",
      footers: "footers options|green",
      class: "red",
      html: "mdi-account",
      // rtl:true,
      // html:{en:'mdi-tennis',fr:'mdi-account',ar:'mdi-mail'}
    },
    hOptions: {
      load: true,
      load: {
        comp: "VProgressLinear",
        comp: "VProgressCircular",
        load: true,
        options: {
          props: {
            size: "200",
            width: "40",
            color: "yellow",
            indeterminate: true,
          },
        },
      },
      class: "blue",
      html: "mdi-tennis",
      headers: "headers hOptions|yellow",
      footers: "footers hOptions|yellow",
      // html:{ar:'mdi-tennis',en:'mdi-account',fr:'mdi-mail'}
    },

    header: {
      comp: "div",
      options: {
        class: "grey",
        html: [
          {
            comp: "VTab",
            dive: true,
            options: {
              html: (that) => {
                console.log("yyyyyyyyyyyyy", that);
                return "tab0|red";
              },
              on: {
                click: (thiss) => (that) => () => {
                  console.log("11111111111111111111111", thiss, that);
                  thiss.data.switch = "op";
                  thiss.data.header[0].options.class = "red";
                  thiss.data.header[1].options.class = "blue";
                  thiss.data.header[2].options.class = "blue";
                  thiss.data.header[3].options.class = "blue";
                  // alert('11111111')
                },
              },
            },
          },
          {
            comp: "VTab",
            options: {
              html: "tab1",
              on: {
                click: (thiss) => () => {
                  console.log("2222222222222222222222222222", thiss);
                  thiss.data.switch = "options";
                  thiss.data.header[0].options.class = "blue";
                  thiss.data.header[1].options.class = "red";
                  thiss.data.header[2].options.class = "blue";
                  thiss.data.header[3].options.class = "blue";
                  // alert('222222')
                },
              },
            },
          },
          {
            comp: "VTab",
            options: {
              html: "tab2",
              on: {
                click: (thiss) => () => {
                  console.log("2222222222222222222222222222", thiss);
                  thiss.data.switch = "hOptions";
                  thiss.data.header[0].options.class = "blue";
                  thiss.data.header[1].options.class = "blue";
                  thiss.data.header[2].options.class = "red";
                  thiss.data.header[3].options.class = "blue";
                  // alert('222222')
                },
              },
            },
          },
          {
            comp: "VTab",
            options: {
              html: "tab3",
              on: {
                click: (thiss) => () => {
                  console.log("2222222222222222222222222222", thiss);
                  thiss.data.switch = true;
                  thiss.data.header[0].options.class = "blue";
                  thiss.data.header[1].options.class = "blue";
                  thiss.data.header[2].options.class = "blue";
                  thiss.data.header[3].options.class = "red";
                  // alert('222222')
                },
              },
            },
          },
        ],
      },
    },

    footer: [
      {
        comp: "ol",
        dive: true,
        options: {
          html: (that) => {
            console.log("yyyyyyyyyyyyy", that);
            return "tab0|red";
          },
          on: {
            click: (thiss) => (that) => () => {
              console.log("11111111111111111111111", thiss, that);
              thiss.data.switch = "op";
              thiss.data.header[0].options.class = "red";
              thiss.data.header[1].options.class = "blue";
              thiss.data.header[2].options.class = "blue";
              thiss.data.header[3].options.class = "blue";
              // alert('11111111')
            },
          },
        },
      },
      {
        comp: "li",
        options: {
          html: "tab1",
          on: {
            click: (thiss) => () => {
              console.log("2222222222222222222222222222", thiss);
              thiss.data.switch = "options";
              thiss.data.header[0].options.class = "blue";
              thiss.data.header[1].options.class = "red";
              thiss.data.header[2].options.class = "blue";
              thiss.data.header[3].options.class = "blue";
              // alert('222222')
            },
          },
        },
      },
      {
        comp: "li",
        options: {
          html: "tab2",
          on: {
            click: (thiss) => () => {
              console.log("2222222222222222222222222222", thiss);
              thiss.data.switch = "hOptions";
              thiss.data.header[0].options.class = "blue";
              thiss.data.header[1].options.class = "blue";
              thiss.data.header[2].options.class = "red";
              thiss.data.header[3].options.class = "blue";
              // alert('222222')
            },
          },
        },
      },
      {
        comp: "li",
        options: {
          html: "tab3",
          on: {
            click: (thiss) => () => {
              console.log("2222222222222222222222222222", thiss);
              thiss.data.switch = true;
              thiss.data.header[0].options.class = "blue";
              thiss.data.header[1].options.class = "blue";
              thiss.data.header[2].options.class = "blue";
              thiss.data.header[3].options.class = "red";
              // alert('222222')
            },
          },
        },
      },
    ],
    // hHeader:'hover Header nnnnn',

    // footer:'div__footer nnnnn',
    hFooter: "hover footer nnnnn",
  },
  WBCObj9: {
    comp: "VCard",
    comp: "VTextField",
    // switch: 'options',
    switch: true,
    // switch: 'hOptions',
    // switch: 'op',
    // libelle:'options',
    // hComp:'VIcon',
    hComp: "li",
    // hComp:'VTextField',
    // op:{html:'aaaaaaaaaaaaaaaa'},
    options: {
      // class: 'yellow container',
      html: "ddddddddddddd",
      // footers: ['footerrrrrrr', 'aaaaaaaaaaaaaaaa|blue'],
      headers: "main heaers level0",
      footers: "main footers level0",
      // html:'httttttttttttttt|red',
      // html: {
      //     comp: 'li',
      //     // hComp: 'div',
      //     options: {
      //         class: 'pa-15 pink container',
      //         footers:'heaers level1',
      //         html: {comp:'div',hComp:'li', switch: true, hOptions:{html:'yyyyyyyyyyy'},options:{footers:'heaers level2',class: 'pa-15 grey container',html:{
      //           comp:'div',
      //           hComp:'li',switch: true,hOptions:{html:'rrrrrrrrrr',class:'grey'},options:{footers:'heaers level3',class: 'pa-15 grey container',html:'footer inside html|blue'}},}},
      // //         footers: {
      // //     comp: 'VBtn',
      // //     hComp: 'div',
      // //     // switch: !true,
      // //     options: {
      // //         class: 'pa-15 red container',
      // //         html: 'footer inside switch',
      // //         footers: {
      // //     comp: 'VBtn',
      // //     hComp: 'div',
      // //     // switch: !true,
      // //     options: {
      // //         class: 'pa-15 yellow container',
      // //         html: 'footer inside switch'
      // //     },
      // //     hOptions: {
      // //         class: 'pa-15 grey container',
      // //         html: 'switch of footer that is inside switch',
      // //     }
      // // },
      // //     },
      // //     hOptions: {
      // //         class: 'pa-15 grey container',
      // //         html: 'switch of footer that is inside switch',
      // //     }
      // // },
      //     },
      //     hOptions: {
      //         class: 'pa-15 grey container',
      //         html: 'switch of footer that is inside switch',

      //     }
      // },
      // rules: {required:(v)=>'vvvvvvvvvvvvvv'+v},
      // rules: {required:{ lg: 'fr', message: 'matloub bel francais' },maxLength:{len:20},minLength:{len:5},specialCharNb:'specialCharNb matloub',digitCharNb:{len:2},upperCharNb:{},lowerCharNb:{}},
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      // rules: {
      //     required: {
      //         lg: 'ar',
      //         message: {
      //             en: 'english',
      //             fr: 'french',
      //             ar: 'arabic'
      //         }
      //     },
      //     required: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      //     // v=>   thiss.validators.username(v,'ar'),
      //     maxLength: {
      //         lg: 'ar'
      //     },
      //     minLength: {
      //         lg: 'ar',
      //     }

      // },
      // attrs: {},
      props: {
        value: "text value",
      },
    },
    hOptions: {
      html: "mdi-tennis",
      footers: {
        comp: "div",
        options: { html: "switch of footer that is inside switch" },
      },

      // html: thiss=>{
      //   console.log('hhhhhhhhhhhhhocer thiss',thiss)
      //   return  'WBCObj5 mouse switched on me|grey'},

      props: {
        src: "https://picsum.photos/id/11/500/300",
      },
      class: "ma-15 pa-15 yellow red--text",
      // on:{
      //   click:(that,v)=>{
      //     console.log('switched and clicked',that,v)
      //     alert('switched and clicked')
      //     v.stopPropagation()

      //   }
      // }
    },
    // footer:{
    //     comp:'VCard',
    //     options:{
    //         html:'footer|orange',
    //         on:{
    //             click:(that)=>()=>{
    //                 console.log(that)
    //                 // that.data.switch='op'
    //                 that.data.switch=true
    //                 that.data.hOptions.class='grey'
    //                 that.data.options.class='grey'

    //                 that.update()
    //             }
    //         }
    //     }
    // },
    // hFooter:{
    //     comp:'VCard',
    //     options:{
    //         html:'footer|blue',
    //         on:{
    //             click:(that)=>()=>{
    //                 console.log(that)
    //                 // that.data.switch='op'
    //                 that.data.hOptions.html+='grey'
    //             }
    //         }
    //     }
    // }
  },
  WBCObj10: {
    comp: "VTextField",
    // comp: 'li',
    // switch: 'options',
    switch: true,
    // switch: 'hOptions',
    // switch: 'op',
    // libelle:'options',
    // hComp:'VIcon',
    hComp: "li",
    // hComp:'VTextField',
    options: {
      // class: 'yellow container',
      html: "ddddddddddddd",
      // footers: ['footerrrrrrr', 'aaaaaaaaaaaaaaaa|blue'],
      footers: "main heaers level0",
      footers: "main footers level0",
      // html:'httttttttttttttt|red',
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      // rules: {
      //     required: {
      //         lg: 'ar',
      //         message: {
      //             en: 'english',
      //             fr: 'french',
      //             ar: 'arabic'
      //         }
      //     },
      //     required: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      //     // v=>   thiss.validators.username(v,'ar'),
      //     maxLength: {
      //         lg: 'ar'
      //     },
      //     minLength: {
      //         lg: 'ar',
      //     }

      // },
      // attrs: {},
      props: {
        value: "text value",
      },
    },
    hOptions: {
      html: "mdi-tennis",
      footers: {
        comp: "div",
        options: { html: "switch of footer that is inside switch" },
      },

      // html: thiss=>{
      //   console.log('hhhhhhhhhhhhhocer thiss',thiss)
      //   return  'WBCObj5 mouse switched on me|grey'},
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      props: {
        src: "https://picsum.photos/id/11/500/300",
      },
      class: "ma-15 pa-15 yellow red--text",
      // on:{
      //   click:(that,v)=>{
      //     console.log('switched and clicked',that,v)
      //     alert('switched and clicked')
      //     v.stopPropagation()

      //   }
      // }
    },
  },
  WBCObj11: {
    comp: "VCard",
    dive: true,
    header: {
      comp: "li",
      options: { global: "ob11gh", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li",
      options: { global: "ob11gf", html: "global footer", class: "orange" },
    },
    options: {
      global: "ob11",
      a: (thiss) => {
        console.log(
          "ttttttttttttttttttt",
          thiss.data.options.html.options.footers
        );
      },
      // class: "blue pa-15 container",
      // html:thiss=>{
      // console.log('htmlllllll',thiss)
      //     return 'htmlllllll'
      // },
      html: {
        comp: "li",
        dive: true,
        options: {
          global: "obj11html",
          // mode:'dev',
          close: true,
          // all:true,
          float: !true,
          // gAttrs:true,

          // htmlSrc:true,
          class: " pa-15 green",
          html: (thiss) => {
            console.log("xxxxxxxxxxxxxxxx", thiss);
            // that.data.options.class='green'
            // thiss.data.options.html.options.class='blue'
            return "hhhhhhhhhhhhhh|red";
          },
          // html:'hhhhhhhhhhh',
          footers: {
            comp: "li",
            dive: true,
            options: {
              global: "ob11htmlf",
              // class: "grey",
              key: "key",
              // html: (thiss) =>  {
              // html: (thiss) =>(that0) =>  {
              html: (thiss) => (that0) => (that) => {
                // thiss.data.options.html.options.footers='ppppppppppppppppp'
                console.log("fooooooooooooooters", thiss, that0, that);
                thiss.data.options.class = " pink orange--text";
                that.data.options.class = "black";
                thiss.data.options.html.options.footers.options.class = "blue";
                return "footers";
              },
              // html:'aaaaaaaaaaaa'
              // html:'fffffffffffffffffff'
              // html:(thiss)=>{
              //     console.log('fffffffffffffff',this)
              //     return 'ffffffff'
              // }
            },
          },
        },
      },
      headers: {
        comp: "VCard",
        // dive: true,
        options: {
          global: "ob11h",
          class: "yellow",
          key: "key-objh11",
          // html: (thiss) => (that) => {
          //   console.log("xxxxxxxxxxxxxxxx", thiss, that);
          //   // that.data.options.class = "yellow";
          //   // thiss.data.options.headers.options.class='yellow'
          //   return "headers";
          // },
          html: "headers",
        },
      },
      footers: {
        comp: "VCard",
        // dive: true,
        options: {
          global: "ob11h",
          class: "yellow",
          key: "key-objh11",
          // html: (thiss) => (that) => {
          //   console.log("xxxxxxxxxxxxxxxx", thiss, that);
          //   // that.data.options.class = "yellow";
          //   // thiss.data.options.footers.options.class='yellow'
          //   return "footers";
          // },
          html: "footers",
        },
      },
    },
    // header:{
    //         comp:'VCard',
    //         // dive:!true,
    //         options:{
    //             html:(thiss)=>{
    //                 console.log('header=>htmlllllll',thiss)
    //                     return `header>htmlllllll`
    //                 },
    //             // on:{click:thiss=>{
    //             //         console.log('yyyyyyyyyyyyyy',thiss)
    //             //     }
    //             // }
    //                 // html:'headerrrrrrrrr'
    //                 // html:thiss=>'ssssssssssssss'
    //         },
    //     },
    // header:'gggggggggggg'
  },
  WBCObj12: {
    comp: "li",
    options: {
      html: "hhhhhhhhhhhhhhhh",
    },
  },
  WBCObj13: (h_) => h_("li", "hhhhhhhhhhhhhhhh"),
  WBCObj14: { comp: "li", options: { html: "ddddddddddddddd" } },
  WBCObj15: { comp: "div", options: { html: "ddddddddddddddd" } },
  WBCObj16: { comp: "li", options: { html: "ddddddddddddddd|red|qqqq" } },
  // WBCObj12:[{comp:'VTab',options:{html:'tab0'}},{comp:'VTab',options:{html:'tab1'}}],

  WatchedWBCObj1: {
    comp: "VCard",
    options: {
      // ref: 'refA',
      // key: 'refA',
      footers: "footers1",
      footers: ["footers1"],
      class: "blue",
      key: "abc",
      html: "dddddddddddd",
      html: (that) => {
        // console.log("gggggggggggggg", that);
        that.data.options.html = "eeeeeeeeeeee";
        that.data.options.on.click = (thiss, v) => {
          // console.log("eeeeeeeee", thiss, v);
          // thiss.data.options.html+='hhhhh'ffff
          that.data.options.class = "yellow";
          alert("dddddddddddddddddddddddddddddd");
        };
        return "dsfsdfasdfasdf|red";
      },
      val: false,
      val1: false,
      props: {
        value: false,
      },
      on: {
        //   'update:inputValue':(thiss,v)=>{
        //     console.log('hhhhhhhhhhhhhhhh',thiss,v)
        //     return v
        //   }
        click: (thiss, event) => {
          console.log("clllllllllllllllicked", thiss, event);
          alert("clicked");
        },
      },
    },
    init: (that) => {
      that.data.options.class = "grey";
      // that.data.options.props.label = 'manual label'
      // that.data.options.class='pink'
      console.log("init thattttttttttttttttttttttt", that);
    },
    tracker: (that) => {
      // that.data.options.val1=that.data.options.val
      // if(that.data.options.class!=that.data.options.val)
      // {
      // that.data.options.class = that.data.options.val
      // that.data.options.html+=that.data.options.html
      // alert('stop')
      // if (that?.data?.options?.class=='red')
      // {
      // that.data.options.footers.push('li__dddddddd|blue pa-15__red pa-10')
      //   // that.data.options.footers=['li__eeeeeeeeeeeeee|blue pa-15__red pa-10']
      //   // that.data.options.class='green'
      // that.data.options.html=that.cookies.get('lg')
      // console.log("Tracked thattttttttttttttttttttttt", that, that.data.options.lg);
      // }
      // }
    },
    watch: [
      [
        [
          "data.options.html",
          "data.options.class",
          "data.options.val",
          (that) =>
            that.store.state
              .lg /* ,that=>that.cookies.state()?.var */ /* ,that=>that.data0.storage */,
        ],
        // that=>{
        //   console.log('rrrrrrrr',that,that.data.options.html)
        //   return that.data.options.html

        //   // return that.data.footer[0].comp
        // }
        // ,
        (that, newVal, oldVal) => {
          alert("changed");
          console.log("fffffff", that, newVal, oldVal);
          // that.data.options.class='blue'
          // that.data.options.val+='green'
        },
      ],
    ],
    // footer:'ssssssssssssssss'
    // footer:['ssssssssssssssss|red'],
    // footer:{comp:'li',options:{html:'ssssssssssssssss|red'}},
    // footer:['ssssssssssssssss|red',111,true],
    // footer:thiss=>h_=>h_('li','kkkkkkkkkkkk'+thiss.data.options.ref),
    // hFooter:h_=>'hhhhhhhhhhhhwwwwwwwwww',
    // hFooter:h_=>'hhhhhhhhhhhhwwwwwwwwww',
    footer: [
      {
        comp: "li",
        options: {
          html: "classic footer",
          class: "green",
          on: {
            //   'update:inputValue':(thiss,v)=>{
            //     console.log('hhhhhhhhhhhhhhhh',thiss,v)
            //     return v
            //   }
            // click:(_thiss,that,event)=>{
            click: (_thiss) => (that) => (that0, event) => {
              console.log(_thiss, that, that0, event);
              alert("footer clicked");
              // that0.data.comp='div'
              // event.stopPropagation();
            },
          },
        },
        // watch:thiss=>([
        //   [
        //     'data.options.class',
        //     (that,oldV,newV)=>{
        //       alert('footer watched')
        //       console.log(thiss,that,oldV,newV)
        //     }
        //   ]
        // ])
      },
    ],
    footer: "footer switched|yellow",
    hFooter: "footer switched|grey",
  },

  a: { en: "hello", fr: "salut", ar: "" },

  strToCompObj0: {
    // comp: ["b"],
    comp: "e+b+b+a|e|a+b|~b+e+a+e+b",
    // comp:'e+b+b|e|b|b',
    comp: ["e", ["b", "b", ["b", "e", ["b", "b", ["c", "b", "e"]]]]],
    // comp:[ "e~","d","e~","d","d","d"],
    // comp:[ "e~","d","e~","d","d","d"],

    // comp:[ ["e","e","e"],"c","c"],
    // comp:"e|d+e|d+d+d+e",
    // comp:'contactView',

    footer: ["footer A", "footer B", "footer C"],
    header: ["header A", "header B", "header C"],

    options: {
      class: " container pa-15 ma-15",
      // wrap:'li',
      // footers:'footersssssssss',
      // footers:'footers',
      style: {
        border: "10px solid black",
      },
    },
    a: {
      comp: "VCard",
      options: {
        class: "pa-5 ma-5 red",
        html: "aaaaaaaaaa|yellow",
      },
    },
    b: {
      comp: "VCard",
      options: {
        class: "pa-5 ma-5 yellow",
        html: "bbbbbbbbbbbbb|grey",
      },
    },
    // d:'dddddddddddddddddd',
    d: 88888888,
    c: "cccccccccccccccc",

    e: {
      comp: "div",
      options: {
        global: "ee",
        class: " container blue pa-15 ma-15",
        html: "eeeeeeeeeeeeeeee",
        footers: ["111", "222"],
        style: {
          border: "5px solid red ",
        },
      },

      // footer:[{comp:contactView,options:{class:'pa-15 ma-15 blue'}}],
      // class: "container ma-15 pa-15 red",
      // ref: contactView,
      // za: "zazazazazazazaz",
      // zb: "zbzbzbzbzbzbzbzb",
      // nav0View
    },
    // e:contactView,
    // b:contactView,
    // c:PlayerCustomTimeTableView
  },

  strToCompObj: {
    // comp: [[[[[[['a'],'a']]]]]],
    // comp: ['a',['a',"b"],'a','a','a'],
    comp: [[[[["a", "b"]]], "b"], "b", ["b", "b"], "b"],
    // comp: [[[[[[['a']]]]],'a']],
    // comp: ['~a',"b", "c", "d", "e", "v", "w", "x", "y", "z"],
    // comp: [[[[['a',"b", "c", "d", "e", "v", "w", "x", "y", "z"]]]]],
    // comp: [[['a',"b"], "c", "d", "e"], "v", "w", "x", "y", "z"],
    // comp:['a',[[[[[[[['b','c']]]]]]]],'d'],
    // comp:'~li+~a+a+~b|||b+a+li+VTextField',
    // header:'headerrrrrrrrrrrrrrrrrrrrrrrrrrr',
    a: {
      comp: "VCard",
      options: {
        class: "pa-5 ma-5 red",
        html: "aaaaaaaaaa|yellow",
      },
    },
    b: {
      comp: "VCard",
      options: {
        class: "pa-5 ma-5 yellow",
        html: "bbbbbbbbbbbbb|grey",
      },
    },
    // a:'li__aaaaaaaaaaaaaaaaaaa',
    // b:'li__bbbbbbbbbbbbbbbbbbb',
    c: "li__ccccccccccccccccccc",
    d: "li__ddddddddddddddddddd",
    e: "li__eeeeeeeeeeeeeeeeeee",
    v: "li__vvvvvvvvvvvvvvvvv|orange",
    w: "li__wwwwwwwwwwwwwww|green",
    x: "li__xxxxxxxxxxxxxxxxxxxxxxx|red",
    y: "li__yyyyyyyyyyyyyyyy|yellow",
    z: "li__zzzzzzzzzzzzzzz|grey",
  },
  // strToCompObjj:{comp:'li' ,
  //     options:{
  //         html:'ffffffffff'
  //     }
  // },

  nestedWithoutCompObj1: {
    tbody: {
      // header:'ggggggggggggggggggggggggggg',
      options: { comp: "tbody", class: "red pa-5" },
      "0th": {
        options: { comp: "td", class: "blue" },
        a01: "th0",
      },
      "1th": {
        options: { comp: "td", class: "blue" },
        a01: "th1",
      },
      tr: {
        // a00: "a00000000000",
        "0th": {
          options: { comp: "th", class: "blue" },
          a01: "th1",
        },
        // tds: ["<td>", "td0|green|dddd", "td1", "td2", "td3"],
        td1: {
          options: { comp: "td", class: "blue" },
          a01: "td1",
        },
        td2: {
          options: { comp: "td", class: "blue" },
          a01: "td2",
        },
        td3: {
          options: { comp: "td", class: "blue" },
          a01: "td3",
        },
      },
      b: "span__bbbbbbbbbbb",
      c: "ccccccccccc",
    },
  },
  // nestedWithoutCompObj1: [[9999], 888, 555],
  // nestedWithoutCompObj1: true,
  nestedWithoutCompObj1: {
    /* comp:'~td', */ options: { comp: "ol", html: "fffffff" },
    a: "aaaaaaaaaaaa",
    b: "bbbb",
  },
  // nestedWithoutCompObj1: [
  //   { comp: "~td", options: { html: "aaaaaaaaaaaa" } },
  //   "bbbb",
  //   ["<li>", "cccc", "dddd"],
  // ],
  nestedWithoutCompObj1: [1000, "<li>", "cccc", "dddd"],
  // nestedWithoutCompObj1: ["<~ol>", 1000, "<li>", "cccc", "dddd"],
  // nestedWithoutCompObj1: [
  //   ["<~ol>", 1000, "<li>", "cccc", "dddd"],
  //   ["<~ol>", 1000, "<li>", "cccc", "dddd"],
  // ],
  // nestedWithoutCompObj1: "li__ddddddddddddd",
  // nestedWithoutCompObj1: {
  //   options: { comp: "li", html: "ddddddddddddd" },
  //   a: [1111, 2222, 333],
  // },

  nestedWithoutCompObj0: {
    footer: "h1__Global footer in options (level0)",
    header: "h1__Global header in options (level0)",

    options: {
      global: "z00",
      comp: "li",
      wrap: { comp: "VCard", options: { class: "pink pa-15 ma-15" } },
      class: "pa-5 ma-5 blue",
      html: "html in options (level0)",
      footers: "h1__footers in options (level0)",
      headers: "h1__headers in options (level0)",
      menu: {
        event: "mouseover",
        content: {
          item_0: "h1__item_0|green pa-15 ma-15",
          item_1: "h1__item_1|green pa-15 ma-15",
          item_2: "h1__item_2|green pa-15 ma-15",
          item_3: "h1__item_3|green pa-15 ma-15",
        },
      },
      headers: "9999999999999999999999999999",
    },
    // header:'headerrrrrrrrrrrrrrrrrrrrrrrrrrr',
    a0: {
      // comp: "VCard",
      options: {
        global: "a0",
        comp: "li",
        class: "pa-5 ma-5 red",
        // html: "aaaaaaaaaa|yellow",
        html: "html in options (level1)|yellow",
        footers: "h1__footers in options (level1)",
        headers: "h1__headers in options (level1)",
      },
      z: {
        z0: "zzzzzzzzzzzzzzzzz0",
        z1: {
          html0: "zzzzzzzzzzzzzzzz1",
          html1: {
            // comp:'li',
            options: {
              class: "grey pa-15 ma-5",
              html: "zzzzzzzzzzzzzzzzz_html_11",
            },
            z11: "li__zzzzzzzzzzzzzzzzzzz_11",
            z12: {
              // options:{
              //   class:'green'
              // },
              html: {
                options: {
                  global: "z12",
                  class: "yellow pa-15",
                },
                z120: "zzzzzzzzzzzzzzzzzzzzz_120|red",
                z121: "zzzzzzzzzzzzzzzzzzzzz_121|red",
                z122: "zzzzzzzzzzzzzzzzzzzzz_122|red",
                z123: "zzzzzzzzzzzzzzzzzzzzz_123|red",
                z122: "zzzzzzzzzzzzzzzzzzzzz_12|red",
                z123: {
                  options: {
                    global: "z123",
                    class: "orange pa-15",
                  },
                  html1230: "zzzzzzzzzzzzzzzzzzzzz_123",
                  html1231: {
                    comp: "li",
                    header: "h1__html1231 Global header in options (level -1)",
                    footer: "h1__html1231 Global footer in options (level -1)",
                    options: {
                      footers:
                        "h4__html1231 local footers in options (level -1)",
                      headers:
                        "h4__html1231 local headers in options (level -1)",
                      html: "html1231 wbc html inside",
                    },
                  },
                },
              },
            },
            a: "cccccccccccccccccccccccccc",
            z10: {
              x: "xxxxxxxxxxxxxxx",
            },
          },
        },
      },
      x: "xxxxxxxxxxxxxxxxxxx",
    },
    // b: {
    //   comp: "VCard",
    //   options: {
    //     class: "pa-5 ma-5 yellow",
    //     html: "bbbbbbbbbbbbb|grey",
    //   },
    // },
    // // a:'li__aaaaaaaaaaaaaaaaaaa',
    // // b:'li__bbbbbbbbbbbbbbbbbbb',
    // c:'li__ccccccccccccccccccc',
    // d:'li__ddddddddddddddddddd',
    // e:'li__eeeeeeeeeeeeeeeeeee',
    // v:'li__vvvvvvvvvvvvvvvvv|orange',
    // w:'li__wwwwwwwwwwwwwww|green',
    // x:'li__xxxxxxxxxxxxxxxxxxxxxxx|red',
    // y:'li__yyyyyyyyyyyyyyyy|yellow',
    // z:'li__zzzzzzzzzzzzzzz|grey'
  },

  nestedWithoutCompObj: {
    options: {
      class: "red pa-15",
      html: "hhhhhhhhhhhhhhh",
      // a:'aaaaaaaaaaaaaaa'
    },
    a: {
      options: {
        class: "blue",
      },
      // class:'red',
      a0: "aaaaaaaaaaaaaaa",
      a1: {
        options: {
          class: "yellow pa-15",
        },
        a11: {
          options: {
            wrap: "VCard",
            class: "green pa-15",
            html: "html a11",
          },
          a11: "li__bbbbbbbbbbbbbbbbb",
        },
      },
    },
    // a:'aaaaaaaaaaaaa',
    // b:'bbbbbbbbbbbbbb'
  },

  nestedOrderedArr0: [
    {
      comp: "~VCard", // same as comp:'<~VCard>',
      options: {
        global: "nest0",
        class: "blue pa-10 ma-10",
        // nested:true,
        html: "aaaaaaaaa",
      },
    },
    {
      comp: "li",
      options: {
        global: "nest1",
        html: "bbbbbbbbb|red",
      },
    },
    {
      comp: "li",
      comp: "~VCard",
      comp: "<~VCard>",
      // comp:'<~li>',
      // comp:'<li>',
      // comp:'<*li>',
      options: {
        global: "nest3",
        class: "yellow ma-5 pa-5",
        html: "ccccccccc0000000000",
      },
      header: "global header",
      footer: "global footer",
    },
    {
      comp: "li",
      options: {
        global: "nest4",
        html: "ddddddddd",
      },
    },
    {
      comp: "li",
      options: {
        global: "nest5",
        class: "",
        html: "eeeeeeeeee",
      },
    },
  ],
  nestedOrderedArr: [
    {
      comp: "<VCard>",
      options: {
        global: "ar",
        class: "blue pa-10 ma-10",
        // nested:true,
        html: "aaaaaaaaa",
      },
    },
    {
      comp: "li",
      options: {
        html: "bbbbbbbbb|red",
      },
    },
    {
      comp: "<VCard>",
      options: {
        html: "ccccccccc",
      },
    },
    {
      comp: "li",
      options: {
        html: "ddddddddd",
      },
    },
  ],

  adjacentOrderedWithoutCompObj: {
    options: {
      class: "green pa-15 ma-15",
      html: "hhhhhhhhhhhhhhh",
      // a:'aaaaaaaaaaaaaaa'
    },

    a: {
      comp: "li",
      comp: "<li>",
      // comp:'~li',
      // comp:'<*li>',
      // comp:'*li',
      options: {
        // disposition:'adjacent',// herite or or adjacent or nested
        class: "blue pa-1 ma-1",
        html: "aaaaaaaaa",
      },
    },
    b: {
      comp: "li",
      options: {
        html: "bbbbbbbbb",
      },
    },
    c: {
      comp: "VCard",
      options: {
        class: "yellow pa-15 ma-15",
        html: "ccccccccc",
      },
    },
    d: {
      comp: "li",
      options: {
        html: "ddddddddd",
      },
    },
    e: {
      comp: "li",
      options: {
        html: "eeeeeee",
      },
    },

    // b:'bbbbbbbbbbbbbb'
  },
  WBCArrNested1: [
    {
      comp: "ol",
      dive: true,
      options: {
        nested: true,
        html: (that) => {
          console.log("yyyyyyyyyyyyy", that);
          return "Ordered List WBCArrNested|red";
        },
      },
    },
    {
      comp: "li",
      options: {
        // nested:true,
        class: "blue pa-10",
        html: "tab1",
      },
    },
    {
      comp: "li",
      options: {
        // nested:true,
        class: "red pa-5",
        html: "tab2",
      },
    },
    {
      comp: "li",
      options: {
        html: "tab3",
      },
    },
  ],
  WBCArrNested2: [
    {
      comp: "VTabs",
      // dive:true,
      options: {
        global: "nested1",
        nested: true,
        class: "container blue pa-10 ma-10",

        // html:'aaa'
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
    },
    // 'li__~aaaaaaaaaaaaa|red',
    {
      comp: "VTab",
      options: {
        global: "nested2",
        // nested:true,
        html: "tab1",
      },
    },
    {
      comp: "VTab",
      options: {
        global: "nested3",

        // nested:true,
        class: "red pa-5",
        html: "tab2",
      },
    },
    {
      comp: "VTab",
      options: {
        nested: true,
        class: "grey",
        html: "tab3",
      },
    },
    {
      comp: "VTab",
      options: {
        // nested:true,
        html: "tab4",
      },
    },
  ],
  WBCArrNested3: [
    {
      comp: "VTabs",
      // dive:true,
      options: {
        // nested:true,
        class: "container blue pa-10",

        // html:'aaa'
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
    },
    {
      comp: "VTab",
      options: {
        // nested:true,
        html: "tab1",
      },
    },
    {
      comp: "VTab",
      options: {
        // nested:true,
        class: "red pa-5",
        html: "tab2",
      },
    },
    {
      comp: "VTab",
      options: {
        nested: true,
        class: "grey",
        html: "tab3",
      },
    },
    {
      comp: "VTab",
      options: {
        // nested:true,
        html: "tab4",
      },
    },
  ],
  WBCArrNested4: [
    "<~VNavigationDrawer>",
    "<VListGroup>",
    {
      comp: "div",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<VListItem|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",

        html: "Lista 2 hover",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",

        html: "Lista 3 hover",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested5: [
    "<~VContainer>",
    "<~VRow>",
    "<VCol>",
    {
      comp: "div",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      switchEvent: "click",
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<VListItem|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container blue",
        html: "Lista 2 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",
        html: "Lista 3 hover",
      },
      footer: [
        "<~ol>",
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested6: [
    "<~VContainer>",
    "<~VRow>",
    "<VCard>",
    {
      comp: "div",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      switchEvent: "click",
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<~ol>",
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container blue",
        html: "Lista 2 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",
        html: "Lista 3 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested7: [
    "<~ol|container>",
    "<li>",
    {
      comp: "div",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      switchEvent: "click",
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<~ol>",
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container blue",
        html: "Lista 2 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "div",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",
        html: "Lista 3 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested8: [
    "<~VContainer>",
    "<~VRow>",
    "<VCol>",
    {
      comp: "VTab",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      switchEvent: "click",
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<~ol>",
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "VTab",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container blue",
        html: "Lista 2 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "VTab",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue",
        html: "Lista 3 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested9: [
    "<~VContainer>",
    "<~VRow>",
    "<VCol>",
    {
      comp: "VTab",
      // header:'THe title',
      header: "VDivider",
      switch: true,
      switchEvent: "click",
      // dive:true,
      hOptions: {
        html: "Lista 1 hover",
        class: "container pa-2 ma-2 yellow blue--text",
      },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container pa-2 ma-2 blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
      },
      footer: [
        "<~ol>",
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "VTab",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container pa-2 ma-2 blue",
        html: "Lista 2 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    {
      comp: "VTab",
      // header:'THe title',
      switch: true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container pa-2 ma-2  blue",
        html: "Lista 3 hover",
      },
      footer: [
        "<li|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
  ],

  WBCArrNested10: [
    //   '<~VContainer>',
    // '<~VRow>',
    // '<VCol>',
    {
      comp: "<*li>",
      // comp: "li",
      // hComp: "div",
      header: "THe title",
      // header:'VDivider',
      switch: true,
      // switchEvent:'click',
      // // dive:true,
      // hOptions: {
      //   html:'Lista 1 hover',
      //   class: "container yellow blue--text",

      // },
      options: {
        // global:'nested1',
        // nested: true,
        class: "container blue red--text",

        html: "Lista 1 is hovered ",
        //         html:that=>{
        //     console.log('yyyyyyyyyyyyy',that);
        //     return 'Ordered List WBCArrNested|red'
        // },
        footers: "fffffffffffff",
      },
      footer: [
        "<VListItem|red  yellow--text>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [
        "<li|yellow yellow--red>",
        "THe footer",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:[]
    },
    "aaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbb",
    { options: { html: "cccccccccccccccc", footers: "custom footer" } },
    {
      // comp: "div",
      // header:'THe title',
      // switch:true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        class: "container orange",
        // html:'Lista 2 hover'
      },
      footer: [
        "<li|green  yellow--text>",
        "THe footersssssssss",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      hFooter: [
        "<li|grey yellow--red>",
        "THe footerssssssss",
        "THe footer",
        "THe footer",
        "THe footer",
      ],
      // hFooter:[]
    },
    {
      comp: "div",
      // header:'THe title',
      // switch:true,
      // dive:true,
      // hOptions: {html:'Hoptionsssssssssss'},
      options: {
        // global:'nested1',
        // nested: true,
        class: "container green",
        // html:'Lista 3 hover'
        footers: [
          "<~ol>",
          "<li|red  yellow--text>",
          "THe footerrrrrrrrrr",
          "THe footer",
          "THe footer",
          "THe footer",
        ],
      },
      // hFooter:['<li|yellow yellow--red>','THe footer','THe footer','THe footer','THe footer',]
      hFooter: [],
    },
    { comp: "li", options: { headers: "====ffffffffinallllllllllllll====" } },
  ],

  /* 
      WBCArrNested10: [
      {
        comp: "div",
        header:'THe title',
        // switch:true,
        dive:true,
        // hOptions: {html:'Hoptionsssssssssss'},
        options: {
          // global:'nested1',
          // nested: true,
          class: "container blue pa-10 ma-10",
footers:[],
          html:'aaa',
          on:{
            click:that=>()=>{
              alert('ddddddddddd')
              console.log(that)
              that.data.options.footers=that?.data?.options?.footers.length>1?[]:['<li>','THe footer|red','THe footer|red','THe footer|red','THe footer|red','THe footer|red',]
            }
          }
          //         html:that=>{
          //     console.log('yyyyyyyyyyyyy',that);
          //     return 'Ordered List WBCArrNested|red'
          // },
        },
        // footer:['<li>','THe footer|red','THe footer|red','THe footer|red','THe footer|red','THe footer|red',],
        // hFooter:['<li>','THe footer|green','THe footer|green','THe footer|green','THe footer|green','THe footer|green',],
        // hFooter:[],

      }], */

  // 'li__~aaaaaaaaaaaaa|red',
  // 'li__~aaaaaaaaaaaaa|red',
  // {
  //    comp: "<*VTab>",
  //   options: {
  //     global:'nested2',
  //     // nested:true,
  //     class: "red pa-5",
  //     html: "tab1",
  //   },
  // },
  // {
  //   // comp: "li",
  //   options: {
  //     global:'nested3',

  //     // nested:true,
  //     html: "tab2",
  //   },
  // },
  // {
  //   // comp: "li",
  //   options: {
  //     nested: true,
  //     // class: "grey",
  //     html: "tab3",
  //   },
  // },
  // {
  //   // comp: "li",
  //   options: {
  //     // nested:true,
  //     html: "tab4",
  //   },
  // },

  arrayWBCObj1: [
    "<ol>",
    "li__aaaaaaa|red",
    "li__bbbbbbbbbb",
    "li__cccccccccccccc",
  ],
  arrayWBCObj2: [
    "<~ol>",
    "li__aaaaaaa|blue",
    "li__bbbbbbbbbb",
    "li__cccccccccccccc",
  ],
  arrayWBCObj3: [
    "<VTabs>",
    "VTab__aaaaaaa|blue",
    "VTab__bbbbbbbbbb",
    "VTab__cccccccccccccc",
  ],
  arrayWBCObj4: [
    "<~VTabs>",
    "VTab__aaaaaaa|blue",
    "VTab__bbbbbbbbbb",
    "VTab__cccccccccccccc",
  ],
  // {comp:'~VTabs'/* ,options:{class:'pa-10 blue',html:'ssssssssssssss'} */},
  arrayWBCObj5: [
    ["<VTab>", "li__aaaaaaa|red", "li__bbbbbbbbbb", "li__cccccccccccccc"],
  ],

  WBCArrTabs0: {
    comp: "VCard",
    // dive:true,
    options: {
      // nested:true,

      html: "ddddddddddddddddd",
      // on:{
      //     click:that=>that0=>()=>{
      //         console.log('yyyyyyyyyyyyy',that,that0);
      //         alert('clicked VTabs')
      //     }
      //  }
    },

    header: [
      {
        comp: "VTabs",
        // dive:true,
        options: {
          nested: true,
          class: "container blue pa-10 ma-10",

          // html:'aaa'
          html: (that) => {
            console.log("xxxxxxxxxxxxx", that);
            return "Ordered List WBCArrNested|red";
          },
        },
      },
      // 'li__~aaaaaaaaaaaaa|red',
      {
        comp: "VTab",
        dive: true,
        options: {
          html: (that) => "tab0",
          on: {
            click: (that) => {
              console.log("yyyyyyyyyyyyy", that);
              alert("clicked tab1");
            },
          },
        },
      },
      {
        comp: "VTab",
        dive: true,
        options: {
          html: "tab1",
          class: "grey",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that.data.options.class = "blue";
            },
          },
        },
      },
      {
        comp: "VTab",
        //    dive:true,
        options: {
          html: "tab2",
          on: {
            click: (that, that0) => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              // that0.data.options.class='blue'
            },
          },
        },
      },
      {
        comp: "VTab",
        options: {
          // nested:true,
          class: "red pa-5",
          html: "tab3",
        },
      },
      {
        comp: "VTab",
        options: {
          // nested:true,
          class: "grey",
          html: "tab4",
        },
      },
      {
        comp: "VTab",
        options: {
          // nested:true,
          html: "tab5",
        },
      },
    ],
  },

  WBCArrTabsFullHover: {
    comp: "div",
    hComp: "li",
    dive: true,
    // switch:'opt',
    switch: true,
    opt: { html: "aaaaaaaaaaaaaa", class: "red" },
    hOptions: {
      class: "green pa-15 ma-15",
    },
    options: {
      class: "grey",
      // nested:true,

      html: "ddddddddddddddddd",
      // on:{
      //     click:that=>that0=>()=>{
      //         console.log('yyyyyyyyyyyyy',that,that0);
      //         alert('clicked VTabs')
      //     }
      //  }
    },

    header: [
      {
        comp: "~VTabs",
        dive: true,
        options: {
          // nested:true,
          class: "container blue pa-10 ma-10",

          // html:'aaa'
          html: (that) => {
            console.log("xxxxxxxxxxxxx", that);
            return "Ordered List WBCArrNested|red";
          },
        },
      },
      // "VSpacer__" ,

      // 'li__~aaaaaaaaaaaaa|red',
      {
        comp: "VTab",
        dive: true,
        options: {
          selectItemOptions: {},
          // nested:true,

          html: (that) => "tab0",
          on: {
            // click:(that,evt)=>{
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that);
              alert("clicked tab1");
              that.data.options.class = "grey";
              that0.data.options.class = "red";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|red";
            },
          },
        },
      },
      {
        comp: "VTab",
        dive: true,

        options: {
          html: "tab1",
          class: "grey",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "yellow";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|yellow";
            },
          },
        },
      },

      {
        comp: "VTab",
        dive: true,
        options: {
          html: "tab2",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "green";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|green";
            },
          },
        },
      },
      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          class: "red pa-5",
          html: "tab3",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "orange";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|orange";
            },
          },
        },
      },

      // "VSpacer__" ,

      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          class: "grey",
          html: "tab4",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "purple";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|purple";
            },
          },
        },
      },
      "VSpacer__",

      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          html: "tab5",
          class: "",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "yellow";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|yellow";
            },
          },
        },
      },
    ],
  },
  WBCArrTabsFull: {
    comp: "div",
    hComp: "li",
    dive: true,
    // switch:'opt',

    options: { html: "aaaaaaaaaaaaaa", class: "red" },
    options1: {
      class: "grey",
      // nested:true,

      html: {
        comp: "li",
        comp: "VCard",
        switch: true,
        options: {
          class: "pa-15 ma-15 grey",
          html: "aaaaaaaaaaa|yellow red--text",
        },
        hOptions: {
          class: "pa-15 ma-15 green",
          html: "bbbbbbbbbbb|red yellow--text",
        },
      },
      // on:{
      //     click:that=>that0=>()=>{
      //         console.log('yyyyyyyyyyyyy',that,that0);
      //         alert('clicked VTabs')
      //     }
      //  }
    },

    header: [
      {
        comp: "~VTabs",
        dive: true,
        options: {
          // nested:true,
          class: "container blue pa-10 ma-10",

          // html:'aaa'
          html: (that) => {
            console.log("xxxxxxxxxxxxx", that);
            return "Ordered List WBCArrNested|red";
          },
        },
      },
      // "VSpacer__" ,

      // 'li__~aaaaaaaaaaaaa|red',
      {
        comp: "VTab",
        dive: true,
        options: {
          selectItemOptions: {},
          // nested:true,

          html: (that) => "tab0",
          on: {
            // click:(that,evt)=>{
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that);
              alert("clicked tab1");
              that.data.options.class = "grey";
              that0.data.options.class = "pink";
              that.data.options = { ...that.data.options1 };
            },
          },
        },
      },
      {
        comp: "VTab",
        dive: true,

        options: {
          html: "tab1",
          class: "grey",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "yellow";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|yellow";
            },
          },
        },
      },

      {
        comp: "VTab",
        dive: true,
        options: {
          html: "tab2",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "green";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|green";
            },
          },
        },
      },
      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          class: "red pa-5",
          html: "tab3",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "orange";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|orange";
            },
          },
        },
      },

      // "VSpacer__" ,

      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          class: "grey",
          html: "tab4",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "purple";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|purple";
            },
          },
        },
      },
      "VSpacer__",

      {
        comp: "VTab",
        dive: true,
        options: {
          // nested:true,
          html: "tab5",
          class: "",
          on: {
            click: (that) => (that0) => () => {
              console.log("yyyyyyyyyyyyy", that, that0);
              alert("clicked tab1");
              that0.data.options.class = "yellow";
              that.data.options.html = "hhhhhhhhhhhhhhhhhhhh|yellow";
            },
          },
        },
      },
    ],
  },
  listItems_simple1: [
    "0000|red",
    ["aaaa0", "aaaa1", "aaaa2", "aaaa3"],
    "bbbb",
    {
      options: {
        class: "blue",
        html: (those) => {
          console.log("thooooooooooooose", those);
          return "cccc";
        },
      },
      a: {
        options: {
          class: "green pa-4",
        },
        a0: "0000",
        a1: "1111",
        a2: {
          options: {
            class: "red pa-4",
          },
          a22: "2222",
          a23: {
            options: {
              class: "grey pa-4",
            },
            a33: "li__33333",
            a44: "li__44444",
            a55: "li__55555",
            a66: "li__66666",
          },
        },
      },
    },
  ],
  listItems_navDrawer1: [
    7777,
    (those) => {
      console.log("88888888888888888888", those);
      return "88888888";
    },
    true,
    "par1...",
    ["row1_1....", "row1_2...", "row1_3..."],
    ["row2_1....", "row2_2...", "row2_3..."],
    ["row3_1....", "row3_2...", "row3_3..."],
    "any type except an array or any component...",
    '() => import("./../views/ui/contactView/_view.js")',
    [
      "A Component",
      '() => import("./../views/ui/contactView/_view.js")',
      "8888888888",
    ],

    ["sfsdfsdfsdfsdfsd", 8888],
    "sssssssssss",
    [
      "title|h4 blue",
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
    ],
    [
      "section1|blue",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
    ],
    [
      "~section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
      [5555, 6666, 7777],
      454445,
      544545,
    ],
    "bla bla bla bla ...",
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    "VSpacer",
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    "aaaaaaaaaaa",
    [
      "A Component",
      '() => import("./../views/ui/contactView/_view.js")',
      "8888888888",
    ],
    [
      "A Component",
      '() => import("./../views/ui/contactView/_view.js")',
      "8888888888",
    ],
  ],

  layout_navDrawer1: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-switch": !true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VMenu",
      options: {
        class: " yellow ",
        props: {
          bottom: true,
          // top: true,
          "offset-x": true,
          // 'offset-y': true,
        },
      },
    },
    footer: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 pink--text",
        style: {
          border: `1px dashed red`,
          "background-color": "#7FFFD4",
        },
        props: {
          //   round:true
        },
      },
      oOptions: {
        class: "ma-2 pa-2 h1",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
          color: "yellow",
        },
        props: {
          color: "yellow",
        },
      },

      activator: true,
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 green  white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },

      activator: !true,
    },
  },

  objOutput1: {
    nav0ViewPart: {
      comp: "e+e||||b+b+e",
      options: {
        class: " pa-15 ma-15",
        footers: "footersssssssss",
        footers: "footers",
      },
      e: "aaaaaaaaaaaaaaaaa",
      b: "bbbbbbbbbbbbbb",
      e: {
        // class: "container ma-15 pa-15 red",
        ref: "contactView",
        za: "aaaaaaaaaaaa",
        zb: "bbbbbbbbbbbbbbbbbbb",
        // nav0View
      },
    },
  },
  objOutput: {
    comp: "li",
    output: null,
    // output:(thiss,h)=>[h('li','ddddddddddddddddd'),h('li','ddddddddddddddddd'),h('li','ddddddddddddddddd'),thiss.vNodes],
    options: {
      html: "aaaaaaaaaaa",
      class: "blue",
    },
  },

  urlRouteWithParam: `{
    comp: PlayerCustomTimeTableView,
    options: {
      props: {
        params: {
          extra1: 10,
          extra2: 20,
          club: "tennis club of monastirssssssssssss",
          year: "2022",
          season: "liga tennis",
          date: "2023-08-10",
          interval: "month",
          group: "Abddddddddddddd",
          first_name: "aya",
          last_name: "boussaid",
          type: "fitness,booking,training",
          compact: "compact",
          vcompact: "noempty",
        },
      },
    },
  }`,
  arrayType0: ["aaaaaaaaa"],
  arrayType1: [
    "aaaaaaaaaa",
    "li__bbbbbbbbbb|red",
    { comp: "li", options: { html: "ggggggggg1" } },
    { comp: "li", options: { html: "ggggggggg2" } },
  ],
  objType: {
    comp: "div",
    options: {
      class: "yellow",
      load: !true,
      hide: !true,
      html: "ddddddddddd",
      footers: "",
      close: "aaaaaaaaaaaaaaaaaa",
    },
  },
  nested0: {
    options: {
      class: "pa-15 ma-15 grey",
    },
    0: ["li__000000000000000000", "li__77777777777777777|red", "88888888888"],
    1: "li__111111111111111111",
    2: "222222222222222222",
    3: {
      options: {
        class: "pa-15 ma-15 red",
      },
      0: "333333333333333333_0",
      1: "333333333333333333_1",
      2: "333333333333333333_2",
      3: {
        options: {
          class: "pa-15 ma-15 blue",
        },
        0: "333333333333333333_3_0",
        1: "333333333333333333_3_1",
        2: "333333333333333333_3_2",
      },
    },
  },

  nested1: {
    options: {
      class: "red",
      global: "aaa",
    },
    3: {
      a: ["li__aaaaaa", "li__nnnnn"],
      b: "bbbbbbbbbb|blue",
      optionssss: {
        key: "key-aaaaaa",
        class: "red",
        html: (thiss) => ({
          en: "9999999999",
          fr: "8888888888",
          ar: "77777777777777777",
        }),
        html: `[[li__{en:'9999999999',fr:'8888888888',ar:'77777777777777777'}|green|ddddddd]]dddddddddddd`,
        // mode: 'dev',
        // all:true,
        // close:true,
        footers: "footers",
        footers: "footers",
        e: {
          aa: "aaaaaaaaaaaaaaaaaa",
          a: {
            b: "li__bbbbbbbbbb|blue__red",
          },
        },
        to: "ggggggggg",
      },
      c: {
        // comp: 'li',
        options: {
          html: "hhhhhhhhhh",
          class: "green pa-15 ma-15",
          footers: "footers",
          footers: "footers",
          e: {
            aa: "ffffffffff",
            a: {
              b: "li__xxxxxxxxxxx|blue__red",
            },
          },
          to: "llllllllllllllll",
        },
        c1: "c1c1c1c1c1c1c1",
        c2: "c2c2c2c2c2c2c2",
      },
    },
    // optionsss: {
    // 	footers: 'dddddddddddddddddd',
    // 	footers:'ddddddddsssssssssssssssssss',
    // 	wrap:'li',
    // 	class:'red',
    // 	style: {
    // 		'background-color': 'rgba(0, 0, 0, 0.1)',
    // 	}
    // },
    "0Year": {
      comp: "VSelect",
      options: {
        key: "key-year",
        hide: !true,
        props: {
          disabled: false,
          // ref: 'username',
          // cols: "6",
          // class:"red ",
          // loading: true,
          dense: true,
          outlined: true,
          // prefix: 'My username is: ',
          // reverse: true,
          // shaped: true,
          // rounded: true,
          // success: true,
          // 'validate-on-blur': false,
          // suffix: "?????",
          // id: 'username',
          // val: 'My favorite club',
          // type: 'text',
          items: [],
          // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
          val: "",
          // transfVal: v=>v.id,
          // transfVal: v => v.name,
          "item-text": (v) => v.year,
          "item-value": (v) => v.year,

          label: (thiss) => {
            return {
              en: "Select a Year",
              fr: "Sélectionnez une Année",
              ar: "اختر السنة",
            };
          },
          title: (thiss) => {
            return {
              en: "Select a Year",
              fr: "Sélectionnez une Année",
              ar: "اختر السنة",
            };
          },
          placeholder: (thiss) => {
            return {
              en: "Select a Year",
              fr: "Sélectionnez une Année",
              ar: "اختر السنة",
            };
          },
          "prepend-icon": "mdi-calendar-month",
        },
        style: {},
      },
    },

    "1season": {
      comp: "VSelect",
      options: {
        // key: "key-season",
        hide: !true,
        props: {
          disabled: false,
          // ref: 'username',
          // cols: "6",
          // class:"red ",
          // loading: true,
          dense: true,
          outlined: true,
          // prefix: 'My username is: ',
          // reverse: true,
          // shaped: true,
          // rounded: true,
          // success: true,
          // 'validate-on-blur': false,
          // suffix: "?????",
          // id: 'username',
          // val: 'My favorite club',
          // type: 'text',
          items: [],
          // items: ['Planifiee', 'En cours', 'En attente', 'Reportee', 'Annulee', 'Finie'],
          val: "",
          // transfVal: v=>v.id,
          // transfVal: v => v.name,
          "item-text": (v) => v.year,
          "item-value": (v) => v.year,

          label: (thiss) => {
            return {
              en: "Select a Season",
              fr: "Sélectionnez une Saison",
              ar: "حدد الموسم",
            };
          },
          title: (thiss) => {
            return {
              en: "Select a Season",
              fr: "Sélectionnez une Saison",
              ar: "حدد الموسم",
            };
          },
          placeholder: (thiss) => {
            return {
              en: "Select a Season",
              fr: "Sélectionnez une Saison",
              ar: "حدد الموسم",
            };
          },
          "prepend-icon": "mdi-tennis-ball",
        },
        style: {},
      },
    },
  },

  RegisterView: "RegisterView",
  ProfileView: "ProfileView",
  func: [
    "ssssssssssssss|red",
    (h_) => h_("li", ["ssssssssssssss|red", "h_(ProfileView)"]),
  ],
  objFunc: `{
    comp: ProfileView,
    options: {},
  }`,
  WBListWBC: {
    comp: "WBList",
    options: {
      props: {
        class: "container",
        mode: "wiki",
      },
    },
  },
  itemWithRefArr: {
    comp: ["a", "b"],
    options: {
      global: "arr",
    },
    a: {
      comp: "VTextField",
      options: {
        global: "vTxt",
        html: "sdsdsdsdsd",
        rules: [
          "required",
          "maxLength",
          "minLength",
          "upperCharNb",
          "lowerCharNb",
          "specialCharNb",
          "digitCharNb",
        ],
        props: {
          html: "ddsfsdfas",
          label: "dddd",
        },
      },
    },
    b: "bbbbbbbbbbbbbb",
  },
  itemWithRef: {
    comp: "VTextField",
    options: {
      global: "vTxt",
      html: "sdsdsdsdsd",
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      props: {
        html: "ddsfsdfas",
        label: "dddd",
      },
    },
  },
  itemWithHOptions: {
    comp: "li",
    options: {
      html: "text with switch",
      class: "red yellow--text",
    },
    hOptions: {
      html: "mouse switched on me",
      class: "yellow red--text",
    },
  },
  // logInView:() => import("./../views/ui/account/loginView/_view.js"),
  // 'logInView',
  // logInView:{comp:logInView},
  // logInView:{
  //   output:(thiss,h_)=>h_('logInView',{class:'red'}),
  // },
  //   tabkelogInViewfooters:[{comp:logInView}],
  //   tabkelogInViewItems:'logInView',
  // itemVnodesFn0:[contactView],
  // itemVnodesFn2:contactView,
  items: ["Item A", "Item B", "Item C"],
  itemVnodesFn2: [
    "{en:'english',fr:'french',ar:'arabic',}",
    [(h) => h("li", "33333")],
    "contactView",
  ],
  itemVnodesFn1: (h) =>
    h("ol", [h("li", "aaaaaaaaaaaaaaaaaaaa"), h("li", "bbbbbbbbbbbbbbbb")]),
  itemVnodesFnLg: (h) =>
    h("ol", [
      h("li", ["{en:'english',fr:'french',ar:'arabic',}"]),
      h("li", ["{en:'english',fr:'french',ar:'arabic',}"]),
    ]),
  tablePropsSimple0: {
    items: [
      "a",
      "b",
      "c",
      1,
      2,
      true,
      { comp: "li", key1: "VCard__llllll|green", options: { html: "column" } },
    ],

    // emptyCell: {
    //     comp: "ul",
    //     options: {
    //         html: ["<li>","empty cell|red","empty cell|blue"],
    //         class: "pa-2 ma-2",
    //     },
    // },
  },
  tablePropsSimple0: { items: [{ a: "1", b: "2", c: "3" }] },

  // tablePropsSimple0:{
  //   items:{a:'1',b:'2',c:'3'}
  // },
  tablePropsSimple1: {
    items: [
      {
        a: "1",
        b: "2",
        c: "3",
      },
      {
        e: 4,
        f: 5,
      },
      {
        q9999: "",
      },
      "_xxxx_",
      9999,
      1,
      2,
    ],
  },
  // tablePropsSimple1:{
  //   items:[{a:'1',b:'2',c:'3'},{a:'1',b:'2',c:'3'},{a:'1',b:'2',c:'3'},{a:'1',b:'2',c:'3'}],
  //   footers:['c','b',{comp:'li',options:{html:'a|red',footer:'a'}}]
  // },
  tableProps: {
    items: {
      variabl_1: "aaaaa",
      variabl_2: "bbbbb",
      variabl_3: "ccccc",
    },
    items: [
      {
        variable0: "item_0_0",
        variable1: "item_1_0",
        variable2: "item_2_0",
        variable3: "item_3_0",
      },
      {
        variable0: "item_0_1",
        variable1: "item_1_1",
        variable2: "item_2_1",
        variable3: "item_3_1",
      },
      {
        variable0: "item_0_2",
        variable1: "item_1_2",
        variable2: "item_2_2",
        variable3: "item_3_2",
      },
      {
        variable0: "item_0_3",
        variable1: "item_1_3",
        variable2: "item_2_3",
        variable3: "item_3_3",
      },
      {
        variable0: "item_0_4",
        variable1: "item_1_4",
        variable2: "item_2_4",
        variable3: "item_3_4",
      },
    ],
    extraItems: {
      zitems1: "new item",
    },
    sort: {
      order: "multi", //'single' or 'multi'
      sortedHead: ["variable0", "variable3"],
      // sortedHead:'all'
    },
    search: {
      filter: !true,

      resultCell: {
        // class: 'yellow pa-15 ma-15',
        style: {
          // 'border-width': '5px',
          // 'border-style': 'solid',
          // 'border-color': 'green',
          border: "5px solid red ",
          backgroundColor: "yellow ",
        },
        on: {
          click: () => {
            alert("td found is selected");
          },
        },
      },
      resultCell: (those, { item, footer }) => {
        return {
          // class: 'yellow pa-15 ma-15',
          style: {
            // 'border-width': '5px',
            // 'border-style': 'solid',
            // 'border-color': 'green',
            border: "5px solid red ",
            backgroundColor: "yellow ",
          },
          on: {
            click: () => {
              alert(`${footer} is select and found`);
            },
          },
        };
      },

      field: {
        comp: "VTextField",
        options: {
          hide: !true,
          // key: 'search-field-txt',
          val: "",
          footers: "search footers",
          footers: "search footers",
          // class: "yellow text-h5 text-center text-darken-1",
          props: {
            "append-icon": "mdi-magnify",
            label: {
              en: "Search",
              fr: "Chercher",
              ar: "بحث",
            },
            class: "deep-purple lighten-5 ma-5 mb-10",
            dense: true,
            "single-line": true,
            "hide-details": true,
          },
          style: {},
        },
      },
    },
    filter: {
      colFilt: !true,

      filteredCol: ["variable0", "variable1"],
      // filteredCol:'all',

      colFiltSlot: {
        comp: "VIcon",
        options: {
          // html: { en: 'Filterrrrr', fr: 'Filtrerrrrr', ar: 'فلترrrr' },
          // html: 'mdi-filter',
          // class:'red text-caption '
        },
      },
      colFiltMenu: {
        props: {
          offsetY: true,
          closeOnContentClick: !true,
          contentClass: "yellow",
          // closeDelay:10,
        },
      },
      colFiltOpt: {
        comp: "li",
        options: {
          class: "pa-3 ma-3",
        },
      },

      globalFilter: !true,
      globalFiltOpt: {
        class: "blue",
      },
      globalFiltResOpt: {
        class: "font-weight-black text-decoration-line-through",
        style: {
          // color:'green',
          border: "5px solid red ",
          backGroundColor: "grey ",
        },
      },
      globalFiltResOpt: (those, { item, footer, i, j }) => {
        return {
          [footer == "carbs"
            ? "class"
            : null]: `h1 grey--text pa-4 m-4   darken-5}`,
          style: {
            "border-width": "10px",
            "border-style": "solid",
            "border-color": footer == "carbs" ? "green" : "",
            backgroundColor: ` ${i % 2 == 1 && j % 2 == 1 ? "blue" : ""}`,
          },
        };
      },
    },
    selected: {
      th: {
        class: "blue",
        style: {
          "border-width": "10px",
          "border-style": "solid",
          "border-color": "orange",
        },
        on: {
          click: () => {
            alert("thead th is clicked");
          },
        },
      },
      th: (those) => {
        return {
          class: "blue",
          style: {
            "border-width": "10px",
            "border-style": "solid",
            "border-color": "grey",
          },
          on: {
            click: () => {
              alert("thead th is clicked");
              // console.log('ffffffffffffffff', footer, )
            },
          },
        };
      },
      tdSel: {
        class: "green",
        style: {
          "border-width": "10px",
          "border-style": "solid",
          "border-color": "pink",
        },
        on: {
          click: () => {
            alert("check bock clicked");
          },
        },
      },
      tdSel: (those, { item, items }) => {
        return {
          class: item?.selected?.options?.val ? "yellow" : "green",
          style: {
            "border-width": "10px",
            "border-style": "solid",
            "border-color": item?.selected?.options?.val ? "pink" : "black",
          },
          on: {
            click: () => {
              alert("check bock function clicked");
            },
          },
        };
      },
      td: {
        class: "grey",
        style: {
          "border-width": "100px",
          "border-style": "solid",
          "border-color": "red",
        },
        on: {
          click: () => {
            alert("selected td is clciked");
          },
        },
      },

      td: (those, item) => {
        return {
          // class: item?.selected?.options?.val ? 'pink' : 'grey',
          style: {
            "border-width": "10px",
            "border-style": "solid",
            "border-color": "pink",
          },
          on: {
            click: () => {
              alert("selected td is clciked");
            },
          },
        };
      },
    },
    vDataTableOpt: {
      class: "deep-purple pa-15 ma-15",

      props: {
        dense: true,
        dark: !false,
        "hide-default-footer": !true,
        "footer-props": {
          pageText: "Pageeeee",
          showCurrentPage: true,
          showFirstLastPage: true,
          firstIcon: "mdi-arrow-collapse-left",
          lastIcon: "mdi-arrow-collapse-right",
          prevIcon: "mdi-minus",
          nextIcon: "mdi-plus",
          itemsPerPageAllText: "All", // Label for selecting to display all items on one page
          itemsPerPageOptions: [1, 3, 10, 15, -1],
          "disable-items-per-page": !true,
          "disable-pagination": !true,
        },
      },
    },
    transTable: {
      defaultfooter: true,
      footer: [
        "Properties",
        "ele1|red",
        "ele2",
        "ele3",
        "ele4|green",
        "ele5",
        "VBtn__ele6",
        {
          comp: "VIcon",
          options: {
            html: "mdi-tennis",
          },
        },
      ],
      footerOpt: {
        class: "ma-5 pa-5 text-h5 text-center",
        style: {
          border: "10px solid black ",
          backgroundColor: "yellow",
        },
      },
      container: {
        comp: "VCard",
        options: {
          class: "orange container",
        },
      },
    },
    table: {
      container: {
        comp: "VCard",
        options: {
          class: "orange container",
        },
      },
    },
    customTable: {
      itemFn: (those, h_, item) => [
        h_("h1", [item.variable0]),
        h_("h1", [those.lg_]),
        h_(
          "li",
          {
            class: "red ",
          },
          ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", JSON.stringify(item)]
        ),
      ],
      container: {
        comp: "VCard",
        options: {
          class: "green container",
        },
      },
    },
    caption: (those) =>
      those.lg_ +
      "div__Caption: eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee|red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|",
    // caption: `eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee|red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|`,
    // caption: those=>`div__Caption: ${those.lg_} eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee|red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|`,
    // caption: those=>({comp:'li',options:{html:`div__Caption: ${those.lg_} eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee|red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|`}}),
    // caption: those=>{console.log('eeeeeeeeeeeeeeeeeeeee',those)
    //   return `div__Caption: ${those.data_.selItems.length} selected item from ${those.data_.items_.length} item |red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|` },
    // caption: (those,{ items, footersArray,  }) => { return `[[div__Caption: Left Search section:the first selected ${those.data_.selItems?.[0]?.variable0.options.val} and ${selItems.length} record is selected|red d-flex justify-center__text-h6 text-md-h5 text-lg-h4 green|]] ` + those.data_.selItems.map(e => `${e?.variable0.options.val}`) },
    layOutTable: {
      tr: {
        class: `grey--text text-darken-1 mb-2   lighten-5 yellow`,
        style: {
          border: "10px solid green ",
          // 'border-width': '10px',
          // 'border-style': 'solid',
          // 'border-color': 'green'
        },
      },
      tr: (those, { item, i }) => {
        return {
          class: `grey--text text-darken-1 mb-2   lighten-5 ${
            i % 2 == 1
              ? "blue-grey"
              : i > 7
              ? "black"
              : item?.calories?.options?.val == "400"
              ? "black"
              : "yellow"
          }`,
          style: {
            border: "10px solid green ",
            // 'border-width': '10px',
            // 'border-style': 'solid',
            // 'border-color': 'green'
          },
        };
      },
      th: {
        class: `text-h5 grey--text pa-5 m-5   darken-5 red`,
        style: {
          border: "20px solid green ",
          // 'border-width': '20px',
          // 'border-style': 'solid',
          // 'border-color': 'green'
        },
      },
      th: (those, { footer, i }) => {
        return {
          class: `text-h5 grey--text pa-5 m-5   darken-5 ${
            i % 2 == 1
              ? "blue-grey"
              : i > 7
              ? "yellow"
              : footer == "calories"
              ? "yellow"
              : "red"
          }`,
          style: {
            border: "20px solid green ",
            // 'border-width': '20px',
            // 'border-style': 'solid',
            // 'border-color': 'green'
          },
        };
      },
      td: {
        class: `h1 grey--text pa-4 m-4   darken-5`,
        style: {
          border: "10px solid black ",
          // 'border-width': '10px',
          // 'border-style': 'solid',
          // 'border-color': 'black'
        },
      },
      td: (those, { item, footer, i, j }) => {
        return {
          [footer == "carbs"
            ? "class"
            : null]: `h1 grey--text pa-4 m-4   darken-5}`,

          style: {
            "border-width": "10px",
            "border-style": "solid",
            "border-color": footer == "carbs" ? "green" : "",
            backgroundColor: ` ${i % 2 == 1 && j % 2 == 1 ? "blue" : ""}`,
          },
        };
      },
      // tdswitch: {
      //   class: `h1 grey--text pa-4 m-4   darken-5 blue`,
      //   style: {
      //     "border": "10px solid black ",
      //     // 'border-width': '10px',
      //     // 'border-style': 'solid',
      //     // 'border-color': 'black'
      //   }
      // },
      // tdswitch: (those,{ item, footer, items, footersArray, i, j,  }) => {
      //   return {
      //     'class': `blue`,

      //     style: {
      //       'border-width': '10px',
      //       'border-style': 'solid',
      //       'border-color':'green',

      //     }
      //   }
      // },
      // tr:{
      //     class: `grey--text text-darken-1 mb-2   lighten-5 ${11%2==0?'blue-grey':'yellow'}`,
      //     style: {
      //       'border-width': '10px',
      //       'border-style': 'solid',
      //       'border-color': 'green'
      //     }
      //   }
    },
    footers: ["variable0", "footers1", "new column"],
    footers: [
      "name",
      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "classic wbc th with val",
          val: "calories",
          footer: "calories",
        },
      },
      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "dynamic wbc th with val",
          val: "dynamic_column",
          footer: "dynamic_column",
        },
        items: (those, item, val = null) =>
          item?.calories?.options?.val || item?.calories,
      },

      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "dynamic wbc th with val",
          val: "customColumn",
          footer: "customColumn",
          footers: {
            comp: "VTextField",
            options: {
              val: "item?.calories",
              rules: [""],
              props: {
                "append-icon": "mdi-tennis",
              },
              on: {
                change: (those, vv) => {
                  // console.log(9999999999,those,vv)
                  those.data_.items_.forEach((item) => {
                    // console.log(77777777777777,item)
                    item["customColumn"] = eval(vv);
                  });
                },
                "click:append": (those, that) => {
                  alert("aaa");
                },
              },
            },
          },
        },
      },
      {
        comp: "div",
        options: {
          class: "blue",
          val: "customColumn1",
          val: "customColumn1",
          footers: {
            comp: "VTextField",
            options: {
              val: "item?.calories",
              rules: [""],
              props: {
                "append-icon": "mdi-tennis",
              },
              on: {
                change: (those, vv) => {
                  // console.log(9999999999,those,vv)
                  those.data_.items_.forEach((item) => {
                    // console.log(77777777777777,item)
                    item["customColumn1"] = eval(vv);
                  });
                },
                "click:append": (those, that) => {
                  alert("aaa");
                },
              },
            },
          },
        },
      },
      "f",

      9999,
      {
        a0: (those, item) => item?.calories?.options?.val,
        a1: (those, item) => item?.calories,
        a2: (those, item) => {
          return those.data_.items_.map(
            (el) => el?.variable0?.options?.val || el?.variable0
          );
        },
        a: 10,
        b: {
          comp: "VTextField",
          options: {
            class: "blue",
            html: "classic wbc th with val",
            val: "initial fixed value",
            props: {
              rules: [
                "required",
                "maxLength",
                "minLength",
                "upperCharNb",
                "lowerCharNb",
                "specialCharNb",
                "digitCharNb",
              ],
            },
          },
        },
        "li__styled thead|blue__red|#link": "Fixed text",
        // c: {comp:contactView,options:{}},

        // d: (those, item) => { return { comp: 'VBtn', options: { class: 'blue', html: item.variable0, val: 'atct' } }; },
        e: (those, item) => {
          return [
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: "item.variable0",
                val: "btct",
              },
            },
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: "item?.calories?.options?.val || item?.calories",
                val: "ctct",
              },
            },
          ];
        },
        "li__styled heade|blue__red|link": (those, item) => {
          return {
            comp: "VBtn",
            options: {
              class: "blue",
              html: item.variable0,
              val: "atct",
            },
          };
        },
      },

      {
        Actions: (those, item) => {
          return [
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: item.variable0,
                val: "btct",
                footer: "btct",
              },
            },
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: item?.calories?.options?.val || item?.calories,
                val: "ctct",
              },
            },
          ];
        },
      },
      //  view:()=>import("./../../../../../../views/ui/contactView/_view.js")
      //   'calories', 'carbs', 'iron', 'line1','line2', 'fat1', 'extra2', { 'head1': (those,item) => item?.calories?.options?.val, head2: (those,item) => 999 }
    ],
    // footers:['variable1', { comp: 'VBtn', options: { class: 'blue', html: 'VBtn column ', val: 'variable0', footer: 'variable0' } },'zitems1'],
    extraColumns: [
      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "classic wbc th with val",
          val: "calories",
          footer: "calories",
        },
      },
      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "dynamic wbc th with val",
          val: "dynamic_column",
          footer: "dynamic_column",
        },
        items: (those, item, val = null) =>
          item?.calories?.options?.val || item?.calories,
      },

      {
        comp: "VBtn",
        options: {
          class: "blue",
          html: "dynamic wbc th with val",
          val: "customColumn",
          footer: "customColumn",
          footers: {
            comp: "VTextField",
            options: {
              val: "item?.calories",
              rules: [""],
              props: {
                "append-icon": "mdi-tennis",
              },
              on: {
                change: (those, vv) => {
                  // console.log(9999999999,those,vv)
                  those.data_.items_.forEach((item) => {
                    // console.log(77777777777777,item)
                    item["customColumn"] = eval(vv);
                  });
                },
                "click:append": (those, that) => {
                  alert("aaa");
                },
              },
            },
          },
        },
      },
      {
        comp: "div",
        options: {
          class: "blue",
          val: "customColumn1",
          footers: "customColumn1",
          footers: {
            comp: "VTextField",
            options: {
              val: "item?.calories",
              rules: [""],
              props: {
                "append-icon": "mdi-tennis",
              },
              on: {
                change: (those, vv) => {
                  // console.log(9999999999,those,vv)
                  those.data_.items_.forEach((item) => {
                    // console.log(77777777777777,item)
                    item["customColumn1"] = eval(vv);
                  });
                },
                "click:append": (those, that) => {
                  alert("aaa");
                },
              },
            },
          },
        },
      },

      9999,
      {
        a0: (those, item) => item?.calories?.options?.val,
        a1: (those, item) => item?.calories,
        a2: (those, item) => {
          return those.data_.items_.map(
            (el) => el?.variable0?.options?.val || el?.variable0
          );
        },
        a: 10,
        b: {
          comp: "VTextField",
          options: {
            class: "blue",
            html: "classic wbc th with val",
            val: "initial fixed value",
            props: {
              rules: [
                "required",
                "maxLength",
                "minLength",
                "upperCharNb",
                "lowerCharNb",
                "specialCharNb",
                "digitCharNb",
              ],
            },
          },
        },
        "li__styled thead|blue__red|#link": "Fixed text",
        c: `{
          comp: contactView,
          options: {},
        }`,
        // d: (those, item) => { return { comp: 'VBtn', options: { class: 'blue', html: item.variable0, val: 'atct' } }; },
        e: (those, item) => {
          return [
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: item.variable0,
                val: "tct",
                footer: "tct",
              },
            },
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: "item?.calories?.options?.val || item?.calories",
                val: "ctct",
              },
            },
          ];
        },
        "li__styled heade|blue__red|link": (those, item) => {
          return {
            comp: "VBtn",
            options: {
              class: "blue",
              html: item.variable0,
              val: "atct",
              footer: "atct",
            },
          };
        },
      },

      {
        Actions: (those, item) => {
          return [
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: item.variable0,
                val: "btct",
                footer: "btct",
              },
            },
            {
              comp: "VBtn",
              options: {
                class: "blue",
                html: item?.calories?.options?.val || item?.calories,
                val: "ctct",
              },
            },
          ];
        },
      },
      //   'calories', 'carbs', 'iron', 'line1','line2', 'fat1', 'extra2', { 'head1': (those,item) => item?.calories?.options?.val, head2: (those,item) => 999 }
    ],
    extraColumns: {
      "extra1:variable0+iron": (those, item) =>
        item?.variable0?.options?.val || item?.variable0 + item?.iron,
      extra2: (those, item) =>
        `[[${item?.variable0?.options?.val || item?.variable0}**${
          item.name
        }|black|${item.name}]]`,
      extra3: (those, item) => [item?.variable0, item.name],
      footerSelect: (those, item) => {
        if (item?.variable0?.options?.val) {
          item.variable0.options.val = `${item.variable0.options.val}|yellow`;
        }
        return {
          comp: "VCard",
          // comp: 'VCheckbox',
          // comp: 'VTextField',
          options: {
            // val:'',
            val:
              those?.data_?.items_[1]?.variable0 ||
              "those.data_.items_[3].variable0",
            html:
              those?.data_?.items_[1]?.variable0 +
              `${those.data_.globalFilters}`,
            // html: item?.variable0?.options?.val || item?.variable0 || '',
            props: {
              label: {
                en: "EN variable0",
                fr: "FR variable0",
                ar: "AR variable0",
              },
              value: true,
            },
          },
        };
      },
      extraVtextDyn: (those, item) => {
        return {
          // comp: 'VCheckbox',
          comp: "VTextField",
          options: {
            val: "",
            // key:item?.options?.val,
            // val: those?.data_?.items_[1]?.calories||'those.data_.items_[3].calories',
            // html: item?.calories?.options?.val || item?.calories || '',
            props: {
              label: {
                en: "EN calories",
                fr: "FR calories",
                ar: "AR calories",
              },
              value: true,
            },
          },
        };
      },
      extra4: (those, item) => ({
        comp: "VCard",
        comp: "VTextField",
        options: {
          // val:'',
          val: item?.calories?.options?.val || item?.calories || "",
          html: item?.calories?.options?.val || item?.calories || "",
          props: {
            label: {
              en: "EN calories",
              fr: "FR calories",
              ar: "AR calories",
            },
            value: item?.calories?.options?.val || item?.calories || "",

            rules: [
              "required",
              "maxLength",
              "minLength",
              "upperCharNb",
              "lowerCharNb",
              "specialCharNb",
              "digitCharNb",
              // 'isValidDate',
              // 'email',
              // 'usernameOrEmail',
              // 'phone',
              // 'matches',
              // 'banned',
              // 'includes',
              // 'excludes',
              // 'username'
            ],
          },
        },
      }),
      extra5: () => 555,
    },
  },
  aUser: {
    label: "albbbbbbbbbbbbbbel",
    value: "vallllllllllllllue",
  },

  keyUsername: "key-username",

  footerUsername: "dfasdfsdaf",
  footerUsername: {
    comp: "li",
    options: {
      html: (that) => "footerUsername|red|",
    },
  },
  // footerUsername:[{comp:'li', options:{class:'red',html:that=>that.lg+'===>cxfvxcvcxvxcvxcv'}}],

  wrapUsername: "li",
  // wrapUsername:{comp:'li', options:{class:'blue pa-5'}},

  username: {
    name: "username",
    comp: "VDatePicker",
    // comp: "VTimePicker",
    // comp: "textarea",
    // comp: "VTextarea",
    // comp: "VSlider",
    // comp: "VSelect",
    // comp: "input",
    // comp: "VCheckbox",
    comp: "VTextField",
    // comp: "div",
    // comp: "VCard",
    // comp: "img",
    dive: true,
    footer: (that) => [that.lg, "888888888888"],
    footer: {
      comp: "li",
      options: {
        html: "iiiiiiiiiiiiiiiiii",
      },
    },
    footer: [
      {
        comp: "VTextField",
        options: {
          html: "iiiiiiiiiiiiiiiiii",
          props: {
            label: "dddddddddd",
          },
          on: {
            input: (that, vv) => {
              // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq',that,vv)
              //  let v=that.data.options.props.label+that.lg
              //  v+=1
              // alert(7777777777)
            },
          },
        },
      },
      "888888888888",
      {
        comp: "li",
        options: {
          html: "iiiiiiiiiiiiiiiiii",
        },
      },
      {
        comp: "li",
        options: {
          html: "iiiiiiiiiiiiiiiiii",
        },
      },
    ],

    // output:['allOptions','main','wbcProps','raw','close','vProps','gAttrs','all'],
    // output:['allOptions','wbcProps','vProps','all','gAttrs','main'/*,'raw','close' */],

    // output:['all'],
    // output:['raw0'],
    // output:['raw0'],
    // output:['main'],
    // // output:true,
    // output:(thiss,h_)=>{
    //   console.log('thisssssssssssss',thiss)
    //   return h_('div',{class:'red'},[thiss.vNodes.main,thiss.vNodes.allOptions,thiss.vNodes.close])
    //   // return h_('li',{},[h_('li',{class:'red'},[thiss.lg]),h_('WBC',{class:'blue',props:{item:{comp:[() => import("../views/ui/contactView/ContactView.vue"),() => import("../views/ui/contactView/ContactView.vue"),() => import("../views/ui/contactView/ContactView.vue"),() => import("../views/ui/contactView/ContactView.vue")]}}}),thiss.vNodes.wrappedRaw])
    // },

    init: (thiss) => {
      // alert('initialized')
      // thiss._data.username.options.val="sssssssss"
      // thiss.data.options.class="grey"
    },
    options: {
      // itemSrc:true,
      all: true,
      // gAttrs:true,
      attrs: {
        id: "iiiiiiiiiiiiiiiiiii",
      },
      // attrs:{width:{en:"500px",fr:"1000",ar:"100"},height:"50px",src:"https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo"},
      // itemSrc:true,
      // // wbcSyn:true,
      // // wbcSrc:true,
      // htmlSrc:true,
      allOptions: true,
      gAttrs: true,
      wbcProps: true,
      vProps: true,
      raw: true,
      raw0: true,
      main: true,
      // mode:'dev',

      // footers: true,
      // footers: true,
      // wrappedRaw: true,
      // mode:'dev',
      // wbcProps:true,
      // hAttrs:true,
      //   close:thiss=>'clossssssssssse',
      //   close:(thiss)=>{
      // console.log('444444444444444444444',thiss,this)
      //     return 'feeeeeeeeeeeermer'

      // },
      close: true,
      close: "Fermer",
      float: true,
      float: {
        fixed: true,
        dispBtn: true,
      },
      float: "true",

      lang: "ar",
      global: "usr1",
      name: "usr1",
      hide: !true,
      load: !true,
      key: "username",
      val: "22:22:22",
      // val: !true,
      rtl: true,
      html: "dddddd",
      wrap: {
        comp: "li",
        options: {
          class: "green pa-1",
        },
      },

      html: {
        en: "en-reddddddddddddddd",
        fr: "fr-blueeeeeeeeee",
        ar: "ar-orangeeeeeeee",
      },
      class: {
        en: "pa-10 ma-10 red",
        fr: "pa-10 ma-10 blue",
        ar: "pa-10 ma-10 orange",
      },
      // footers:'footersssss',
      footers: {
        comp: "VBtn",
        options: {
          html: "footers WBC component",
        },
      },
      footers: "[[footersssss|red|]]",
      // footers:{comp:'VBtn',options:{html:'footers WBC component'}},

      props: {
        // items: [
        //   { abbr: "en", name: "english" },
        //   { abbr: "fr", name: "france" },
        //   { abbr: "ar", name: "arabic" },
        // ],
        // "item-text": (thiss, v) => v.variable0,
        // "item-value": (thiss, v) => v,
        type: (v) => {
          // alert(9999)
          // console.log('v :>> ', v);
          v.alert("999", 555, {
            comp: "ddd",
            a: "ssss",
            b: "ggggg",
          });
          v.alert("+", "8888", 555);
          // v.alert('999',555,{comp:'ddd',a:'ssss',b:'ggggg'})
          // v.alert('+',v.data.options,true)
          // v.alert.push(v.data.options)
          return "text";
        },
        disabled: (v) => {
          // v.alert('4444444444',true)
          // v.alert(['8888',555])

          return false;
        },
        loading: true,
        // // outlined: true,
        // dense: true,
        // prefix: 'My username is: ',
        // reverse: thiss=>thiss._lg=='ar',
        // shaped: true,
        rounded: true,
        rounded: {
          en: true,
          fr: false,
          ar: true,
        },
        // success: true,
        // "validate-on-blur": false,
        // // suffix: "?????",
        // // id: 'username',
        label: (that) => that.data.options.val,
        // label: {
        // 	"en": 'Username or Email',
        // 	"fr": "Nom d'utilisateur ou email",
        // 	"ar": 'اسم المستخدم أو البريد الالكتروني',
        // },
        // title: {
        // 	en: 'Username or Email',

        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // placeholder: {
        // 	en: 'Username or Email',
        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // 'prepend-icon': 'mdi-mail',

        "prepend-icon": "mdi-account-circle",
        // style: {
        // display: 'none', padding: '0', margin: '0', 'background-color': 'green', // color: 'blue', // width: '12em', // hight: '1500px', // 'font-size': '300%'}
        // },
        value: "22:00:00",
        // value:'2023-01-22'
        // value:true
        // rules: [],
      },
      rules: [
        "required",
        "maxLength",
        "minLength",
        "upperCharNb",
        "lowerCharNb",
        "specialCharNb",
        "digitCharNb",
      ],
      on: {
        dbclick: (that, v) => {
          alert("clicked");
          // console.log('clikkkkkkkkkkkkkked',that,v)
          that.data.options.load = true;
          // username:  {comp:() => import(/* webpackChunkName:"WikiWBC" */ "./../views/ui/contactView/_view.js"),options:{class:'grey',close:true}},
          (that.data.comp = [
            `() =>
              import(
                /* webpackChunkName:"WikiWBC" */
                "./../views/ui/contactView/_view.js"
              ),`,
            // () => import(/* webpackChunkName:"WikiWBC" */ "./../views/ui/account/loginView/_view.js")
          ]),
            (that.data.options.load = !true);
        },
        // input:(that,v)=>{
        // console.log(that,v)
        //     that.data.comp='li'
        //     // that.data.options.class='black'
        //     // that.data_.comp='li'
        //     // that.data_.options.class='black'
        //     // thiss._data.options.hide=true
        //     // thiss._data.username.comp='li'
        //     // thiss._data.username.options.class='black'
        //     // thiss._data.username.options.key+=1
        //       alert(v);
        //       // thiss.data.options.val=v
        //     }
        //     input:thiss=>(that,v)=>{
        // console.log(thiss,that,v)
        //         alert(v);
        //         // thiss._data.options.val=v
        //       }
        //   // click: (thiss,event) => alert('username ic clicked'),
        // // keyup: (e) => this.onKeyUp(e)
      },
      slots: {
        "append-outer": {
          comp: "li",
          options: {
            html: "Custom Slot Content",
          },
        },
        append: {
          comp: "li",
          options: {
            html: "Custom Slot Content",
          },
        },

        // 'prepend':'Custom Slot Contenddddddddt'
      },
    },
  },
  usernameRules: {
    name: "username",
    comp: "VDatePicker",
    comp: "VTimePicker",
    // comp: "textarea",
    // comp: "VTextarea",
    // comp: "VSlider",
    // comp: "VSelect",
    comp: "input",
    // comp: "VCheckbox",
    comp: "VTextField",
    init: (thiss) => {
      // alert('initialized')
      // thiss._data.username.options.val="sssssssss"
      // thiss.data.options.class="grey"
    },
    options: {
      // itemSrc:true,
      all: true,
      // gAttrs:true,
      attrs: {
        id: "iiiiiiiiiiiiiiiiiii",
      },
      // attrs:{width:{en:"500px",fr:"1000",ar:"100"},height:"50px",src:"https://media.licdn.com/dms/image/D4E03AQG1Lm7u6yhAxA/profile-displayphoto-shrink_400_400/0/1665259738020?e=1697068800&v=beta&t=_4QUGjgTj0LRRtVv7wBkRBJKcMUTTnRYnYHW0BChITo"},
      // itemSrc:true,
      // // wbcSyn:true,
      // // wbcSrc:true,
      // htmlSrc:true,
      allOptions: true,
      gAttrs: true,
      wbcProps: true,
      vProps: true,
      // raw: true,
      main: true,
      // footers: true,
      // footers: true,
      // wrappedRaw: true,
      // mode:'dev',
      // wbcProps:true,
      // hAttrs:true,
      //   close:thiss=>'clossssssssssse',
      //   close:(thiss)=>{
      // console.log('444444444444444444444',thiss,this)
      //     return 'feeeeeeeeeeeermer'

      // },
      close: true,
      // float:!true,
      float: {
        fixed: !true,
        dispBtn: true,
      },

      // lang: "ar",
      global: "usr1",
      name: "usr1",
      hide: !true,
      load: !true,
      key: "username",
      val: "22:22:22",
      // val: !true,
      rtl: true,
      html: "dddddd",
      wrap: {
        comp: "li",
        options: {
          class: "green pa-1",
        },
      },

      html: {
        en: "en-reddddddddddddddd",
        fr: "fr-blueeeeeeeeee",
        ar: "ar-orangeeeeeeee",
      },
      class: {
        en: "pa-10 ma-10 grey",
        fr: "pa-10 ma-10 blue",
        ar: "pa-10 ma-10 yellow",
      },
      // footers:'footersssss',
      footers: {
        comp: "VBtn",
        options: {
          html: "footers WBC component",
        },
      },
      footers: "[[footersssss|red|]]",
      // footers:{comp:'VBtn',options:{html:'footers WBC component'}},

      props: {
        // items: [
        //   { abbr: "en", name: "english" },
        //   { abbr: "fr", name: "france" },
        //   { abbr: "ar", name: "arabic" },
        // ],
        // "item-text": (thiss, v) => v.variable0,
        // "item-value": (thiss, v) => v,
        type: (v) => {
          // alert(9999)

          v.alert("999", 555, {
            comp: "ddd",
            a: "ssss",
            b: "ggggg",
          });
          v.alert("+", "8888", 555);
          // v.alert('999',555,{comp:'ddd',a:'ssss',b:'ggggg'})
          // v.alert('+',v.data.options,true)
          // v.alert.push(v.data.options)
          return "text";
        },
        disabled: (v) => {
          // v.alert('4444444444',true)
          // v.alert(['8888',555])

          return false;
        },
        loading: true,
        // // outlined: true,
        // dense: true,
        // prefix: 'My username is: ',
        // reverse: thiss=>thiss._lg=='ar',
        // shaped: true,
        rounded: true,
        rounded: {
          en: true,
          fr: false,
          ar: true,
        },
        // success: true,
        // "validate-on-blur": false,
        // // suffix: "?????",
        // // id: 'username',
        // label: {
        // 	"en": 'Username or Email',
        // 	"fr": "Nom d'utilisateur ou email",
        // 	"ar": 'اسم المستخدم أو البريد الالكتروني',
        // },
        // title: {
        // 	en: 'Username or Email',

        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // placeholder: {
        // 	en: 'Username or Email',
        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // 'prepend-icon': 'mdi-mail',

        "prepend-icon": "mdi-account-circle",
        // style: {
        // display: 'none', padding: '0', margin: '0', 'background-color': 'green', // color: 'blue', // width: '12em', // hight: '1500px', // 'font-size': '300%'}
        // },
        value: "22:00:00",
        // value:'2023-01-22'
        // value:true
        rules: (thiss) => {
          // console.log('uuuuuuuuuuuuuuuuuuu',thiss)
          return [
            (v) =>
              thiss.validators.required(v, {
                lg: thiss.lg,
                message: {
                  en: "english",
                  fr: "french",
                  ar: "arabic",
                },
              }),
            // v=>   thiss.validators.username(v,thiss.lg),
            (v) =>
              thiss.validators.maxLength(v, {
                lg: thiss.lg,
              }),
            (v) =>
              thiss.validators.minLength(v, {
                lg: thiss.lg,
              }),
          ];
        },
        rules: {
          required: {
            lg: "ar",
            message: {
              en: "english",
              fr: "french",
              ar: "arabic",
            },
          },
          required: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          // v=>   thiss.validators.username(v,'ar'),
          maxLength: {
            lg: "ar",
          },
          minLength: {
            lg: "ar",
          },
        },

        rules: [
          //   'required',
          //   'maxLength',
          //  'minLength',
          //  'upperCharNb',
          //  'lowerCharNb',
          //  'specialCharNb',
          //  'digitCharNb',
          //  'isValidDate',
          //  'email',
          //  'usernameOrEmail',
          //  'phone',
          //  'matches',
          //  'banned',
          //  'includes',
          //  'excludes',
          //  'username',
        ],
      },
      on: {
        //   click:(that,v)=>{
        //     alert('clicked')
        // console.log('clikkkkkkkkkkkkkked',that,v)
        //     that.data.options.load=true
        //     // username:  {comp:() => import(/* webpackChunkName:"WikiWBC" */ "./../views/ui/contactView/_view.js"),options:{class:'grey',close:true}},
        //     that.data.comp=  [
        //       () => import(/* webpackChunkName:"WikiWBC" */ "./../views/ui/contactView/_view.js"),
        //     // () => import(/* webpackChunkName:"WikiWBC" */ "./../views/ui/account/loginView/_view.js")
        //   ],
        //     that.data.options.load=!true
        //   },
        //   input:(that,v)=>{
        // console.log(that,v)
        //       that.data.comp='li'
        //       // that.data.options.class='black'
        //       // that.data_.comp='li'
        //       // that.data_.options.class='black'
        //       // thiss._data.options.hide=true
        //       // thiss._data.username.comp='li'
        //       // thiss._data.username.options.class='black'
        //       // thiss._data.username.options.key+=1
        //         alert(v);
        //         // thiss.data.options.val=v
        //       }
        // //     input:thiss=>(that,v)=>{
        //       console.log(thiss,that,v)
        // //         alert(v);
        // //         // thiss._data.options.val=v
        // //       }
        // //   // click: (thiss,event) => alert('username ic clicked'),
        // // // keyup: (e) => this.onKeyUp(e)
      },
    },
  },
  username1: ` {
    comp: () =>
      import(
        /* webpackChunkName:"WikiWBC" */ "./../views/ui/contactView/_view.js"
      ),
    options: {
      class: "grey",
      close: true,
    },
  }`,
  username1: ` () =>
    import(
      /* webpackChunkName:"WikiWBC" */ "./../views/ui/contactView/_view.js"
    )`,

  WBListItems_VNavDrawer0: [
    "aaaaaa",
    [
      "bbbbbb",
      {
        comp: "li",
        switch: true,
        options: { html: "bbbbbb0" },
        hOptions: { class: "ma-3 pa-3 red", html: "bbbbbb0" },
      },
      ,
      "bbbbbb1",
      "bbbbbb2",
      "bbbbbb3",
    ],
    "cccccccccc",
    "dddddddddd",
    "eeeeeeeee",
  ],
  WBListLayout_navDrawer0: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VListGroup",
      options: {
        class: "ma-3 pa-3 yellow  ",
        props: {
          "prepend-icon": "mdi-home",
          "append-icon": "mdi-home",
          // 'bottom': true,
          // bottom: true,
          // 'offset-x': true,
        },
      },
    },
    items: {
      comp: "VCard",
      options: {
        // class: ' ma-1 pa-1 pink--text',
        class: "grey ma-1 pa-1",
        style: {
          border: `15px dashed red`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 pink white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },
    },
    header: {
      comp: "VTab",
      options: {
        class: "ma-1 pa-1 pink--text",
        style: {
          border: `1px dashed red`,
          "background-color": "blue",
        },
        props: {
          round: true,
        },
      },
      oOptions: {
        class: "ma-3 pa-3  white--text h6",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
        },
      },

      activator: true,
    },
  },
  // WBListItems_VNavDrawer: ['aaaaaa',['bbbbbb',{comp:'li',switch:true,options:{html:'bbbbbb0'},hOptions:{class:"ma-3 pa-3 red",html:'bbbbbb0'}},,'bbbbbb1','bbbbbb2','bbbbbb3'],'cccccccccc','dddddddddd','eeeeeeeee'],
  // WBListItems_VNavDrawer: ['aaaaaa',['bbbbbb','bbbbbb0','bbbbbb1',[555,['~bbbbbb2','bbbbbb20','bbbbbb21','bbbbbb22','bbbbbb23']],'bbbbbb3'],'cccccccccc','dddddddddd','eeeeeeeee'],
  // WBListItems_VNavDrawer: ['<VTab>','aaaaaa|grey|dfasdfsa','cccccccccc','dddddddddd','eeeeeeeee'],
  WBListItems_VNavDrawer: ["cccccccccc", "dddddddddd", "eeeeeeeee"],
  WBListItems_VNavDrawer: ["<li>", "cccccccccc", "dddddddddd", "eeeeeeeee"],
  WBListItems_VNavDrawer: [
    "aaaa",

    // ['<li|{class:"blue pa-15 ma-15"}|fdfsdfdsf>','aaaa',['<~VTabs>','VTab__VTab0','VTab__VTab1','VSpacer__','VTab__VTab2' ],'bbbb','ccccc'],

    // '<ol>',
    {
      comp: "<ol>",
      options: {
        class: "red pa-15 ma-15",
        html: "htmllllllllllll====>",
        headers: "div__hhhhh",
        footers: "div__fffffff",
      },
    },
    // '<~ol>',
    // {comp:'<~ol>',options:{class:'grey pa-15 ma-15',html:'htmllllllllllll====>',headers:'div__hhhhh',footers:'div__fffffff'}},
    // '<li>',
    // {comp:'~li',options:{class:'yellow pa-15 ma-15',html:'htmllllllllllll====>',headers:'div__hhhhh',footers:'div__fffffff'}},
    // {comp:'<~li>',options:{class:'yellow pa-15 ma-15',html:'htmllllllllllll====>',headers:'div__hhhhh',footers:'div__fffffff'}},
    // {comp:'li',options:{nested:true,class:'yellow pa-15 ma-15',html:'htmllllllllllll====>',headers:'div__hhhhh',footers:'div__fffffff'}},
    // '<li>',
    // '<~li|{class:"red pa-15 ma-15"}>',
    // '<li|{class:"blue pa-15 ma-15"}|fdfsdfdsf>',
    ["<li>", "aaaa", "bbbb", "ccccc"],
    [
      "<~VRow>",
      "<VCol>",
      "text111111111111111111111111111111111",
      "text222222222222222222222222222222222",
      "text333333333333333333333333333333333",
    ],
    ['<li|{class:"orange pa-15 ma-15"}|fdfsdfdsf>', "aaaa", "bbbb", "ccccc"],
    [
      '<li|{class:"blue pa-15 ma-15"}|fdfsdfdsf>',
      "aaaa",
      [
        "<~VTabs>",
        "<VTab|green red--text>",
        "VTab0",
        "VTab1",
        "VSpacer__",
        "VTab2",
      ],
      "bbbb",
      "ccccc",
    ],
    [
      '<li|{class:"blue pa-15 ma-15"}|fdfsdfdsf>',
      "aaaa",
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      "bbbb",
      "ccccc",
    ],

    ["VTab__VTab0", "VTab__VTab1", "VTab__VTab2"],

    // '<~ol|blue|oooooooolllll>',
    // '<~li|green|lllllliiiii>',
    // {comp:'<~li>',options:{class:'yellow pa-15 ma-15',html:'htmllllllllllll====>',headers:'div__hhhhh',footers:'div__fffffff'}},
    // '<~VTabs|blue pa-15>',
    // '<VTab|yellow pa-5>',
    "VTab__cccccccccc|red",
    "VTab__dddddddddd|pink",
    // 'VSpacer',
    "VTab__eeeeeeeee|grey",
  ],
  WBListItems_VNavDrawer: [
    "<VRow|pa-15 ma-15>",
    [
      "<VCol|red>",
      [
        "<VRow|green>",
        "text111111111111111111111111111111111",
        "text111111111111111111111111111111111",
        "text111111111111111111111111111111111",
        "text111111111111111111111111111111111",
      ],
      "text222222222222222222222222222222222",
      "text333333333333333333333333333333333",
    ],
    [
      "<VCol|blue>",
      "text111111111111111111111111111111111",
      "text222222222222222222222222222222222",
      "[[text33333333333]][[33333|grey|xcvcxv]][[33333333333333333]]",
      "text444444444444444444444444444444444",
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
    ],
    [
      "<VCol|yellow>",
      "text111111111111111111111111111111111",
      "text222222222222222222222222222222222",
      "[[text33333333333]][[33333|grey|xcvcxv]][[33333333333333333]]",
      "text444444444444444444444444444444444",
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
      ["<~VTabs>", "VTab__VTab0", "VTab__VTab1", "VSpacer__", "VTab__VTab2"],
    ],
  ],
  WBListItems_VNavDrawer: [
    "<li>",
    [[["<~li|yellow>", "aaaa", "bbb"], "111111111"], "222222"],
    "3333333",
  ],
  // WBListItems_VNavDrawer:['<li>','aaaa','bbb'],
  // WBListItems_VNavDrawer:[[['<li|red>','aaaa','bbb']]],
  // WBListItems_VNavDrawer:['<li>',[[[[['aaaa']]]]]],
  // WBListItems_VNavDrawer:['<~ol>',[[[[['<li>','aaaa','bbbbbb','ccccc']]]]]],
  WBListLayout_navDrawer: {
    root: {
      // comp: "VCard",
      comp: "~VNavigationDrawer",
      hide: false,
      options: {
        class: "ma-10 pa-10  pink--text ",
        html: "ggggggggggggggggggg",
        props: {
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      // comp: "~div",
      comp: "<div>",
      options: {
        class: "ma-5 pa-5 yellow  ",
        props: {
          "prepend-icon": "mdi-home",
          "append-icon": "mdi-home",
          // 'bottom': true,
          // bottom: true,
          // 'offset-x': true,
        },
      },
    },
    items: {
      comp: "li",
      options: {
        // class: ' ma-1 pa-1 pink--text',
        class: "grey ma-1 pa-1",
        style: {
          border: `15px dashed red`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 pink white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },
    },
    header: {
      comp: "VCard",
      options: {
        class: "ma-1 pa-1 pink--text",
        style: {
          border: `1px dashed red`,
          "background-color": "blue",
        },
        props: {
          round: true,
        },
      },
      oOptions: {
        class: "ma-15 pa-15  white--text h6",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
        },
      },

      activator: true,
    },
  },

  WBListItems_vmenu: [
    "aaaaaa",
    [
      "bbbbbb",
      "bbbbbb0",
      "bbbbbb1",
      [555, ["~bbbbbb2", "bbbbbb20", "bbbbbb21", [["bbbbbb22", "bbbbbb23"]]]],
      "bbbbbb3",
    ],
    "cccccccccc",
    "dddddddddd",
    "eeeeeeeee",
  ],

  WBListItems_VNavDrawer00: [
    {
      comp: "~VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-switch": !true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },

    555555,
    "VDivider",
    [
      "<~VListGroup>",
      "<li|pa-5>",
      "tttttttt",
      11111111,
      "VDivider",
      "VDivider",
      555555555555555555,
      [888888888, "VDivider"],
      11111,
      [44444444, 9999, 7777, [5555, 666, 4444, ["33333", 2222, 111]]],
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/220px-Adult_Scottish_Fold.jpg",
          },
          html: "Scottish Fold",
          footers: "Scottish Fold",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
      ["[[li__3333]]", 444, "VDivider", 555, 666],
    ],
    [
      "<VCard|green >",
      789,
      "VDivider",
      6543,
      [
        "<~ol>",
        "<li>",
        "~1111",
        {
          comp: "VIcon",
          options: {
            class: "grey  white--text px-16",
            style: {
              "background-color": "red",
              border: `10px dashed black`,
            },
            headers: "xczxczxczxc",
            html: "mdi-home",
          },
        },
        777777,
        "[[bla bla|red|]]",
        "VDivider",
        888,
        ["<~VTabs|blue pa-5>", "<VTab|grey pa-3>", "9999", 8888, 9999, 5555],
        33333,
        44444,
        5555,
        [66666, 777, 88888],
      ],
    ],
    "[[li__777777]]",
    "[[li__666666]]",
    "[[li__555555]]",
    [
      "[[li__56565]]",
      "[[li__455454]]",
      "[[li__121]]",
      ["<div|yellow>", 1, 2, 3, 4, 5],
    ],

    [
      "<li|red ma-5>",
      {
        comp: ["span", "a"],
        options: {
          wrap: "VListGroup",
        },
        a: "menue",
      },
      444,
      5555,
      666,
      777,
    ],
    99999,
    [
      "<~VTabs>",
      '<VTab|yellow">',
      "a",
      "b",
      "c",
      ["<~ol| container>", "<li|grey>", "d0", "d1", "d2", "d3"],
    ],

    [
      {
        comp: "img",
        options: {
          class: "text-center text-h10 green font-weight-medium   ",
          attrs: {
            src: "https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000",
            hight: 70,
            width: 100,
          },
          headers: "pets",
          to: "https://google.com",
        },
      },

      {
        comp: "div",
        options: {
          class: "text-center text-h10 font-weight-medium  yellow ",
          html: "bla bla ",
          to: "https://google.com",
          on: {},
        },
      },
      {
        comp: "div",
        options: {
          class: "text-center text-h10 font-weight-medium  pink px-16",
          html: "a0",
          to: "https://google.com",
          on: {},
        },
      },
      [
        '<VCard|{"props":{"color":"red pa-5 ma-5"}}>',
        // `<li>`,
        "a1",
        "a2",
        "a3",
        "VDivider",
        "a4",
        "a5",
      ],
    ],
    "VDivider",
    [
      '<VCard|{"html":"mdi-tennis","props":{"color":"grey pa-5 ma-5"}}>',

      // '<div|{"html":"mdi-tennis",class:"green"}>',
      "Birds [[<br><small>(ctr+click on item below to search)</small>]]",
      "[[Parrots|yellow red--text|https://www.google.com/search?q=Parrots]]",
      "[[Pelicans|yellow|https://www.google.com/search?q=Pelicans]]",
      "[[Penguins|yellow|https://www.google.com/search?q=Penguins]]",
      "[[Pigeons and Doves |yellow|https://www.google.com/search?q=Pigeons+and+Doves]]",
      "[[Shrikes|yellow|https://www.google.com/search?q=Shrikes]]",
    ],
    [
      "<li>",

      "Cats",
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg",
          },
          html: "Persian Cat",
          footers: "Persian Cat",
          to: "https://www.google.com/search?q=Persian+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/220px-Paintedcats_Red_Star_standing.jpg",
          },
          html: "Bengal Cat",
          footers: "Bengal Cat",
          to: "https://www.google.com/search?q=Bengal+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG/220px-British_burmese_-_Andel_Alois_at_Cat_show.JPG",
          },
          html: "Burmese Cat",
          footers: "Burmese Cat",
          to: "https://www.google.com/search?q=Burmese+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/220px-Adult_Scottish_Fold.jpg",
          },
          html: "Scottish Fold",
          footers: "Scottish Fold",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
      888888888888888,
    ],
    [
      {
        comp: "video",
        options: {
          attrs: {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            hight: 120,
            width: 120,
            controls: true,
            autoplay: true,
          },
          headers: "video",
        },
      },
      "[[google|blue|http://www.google.com]]",
      "item2",
      "item3",
      "item4",
    ],
    [
      {
        comp: "VBtn",
        options: {
          html: "click me",
          class: "red white--text",
          on: {
            click: () => alert("The button has been clicked. Thanks!! "),
          },
        },
      },
    ],
    "VDivider",
    [
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium   pa-2 white--text ",
          attrs: {
            src: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F7R4B39%2Fmedia%2FL6IWPSOTLA6R",
            hight: 70,
            width: 100,
          },
          footers: "list of dogs",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
      "golden retriever",
      "labrador retriever",
      "french bulldog",
      "beagle",
      "german shepherd dog",
      "poodle",
      "bulldog",
      "most popular breeds",
    ],
    "VDivider",
    [
      {
        comp: "VIcon",
        options: {
          hide: false,
          html: "mdi-dots-vertical",
        },
      },
    ],
    {
      comp: "VIcon",
      options: {
        hide: false,
        html: "mdi-card-account-phone-outline",
      },
    },
    "[[google|pink|http://www.google.com]]",
  ],
  WBListItems_VNavDrawer01: [
    [
      {
        comp: "li",
        expanded: true,
        options: {
          "prepend-icon": "mdi-food-apple",
          value: true,
          headers: "xczxczxczxc",
          html: (that) =>
            `language is ${that.lg} style group title withe expanded property`,
        },
        layout: {
          root: {
            comp: "VTab",
            hide: false,
            options: {
              props: {
                class: "ma-1 pa-1  pink--text ",
                color: "deep-purple lighten-4",
                // permanent: !true,
                "expand-on-hover": true,
                right: !true,
                floating: true,
                width: 500,
                app: true,
                // absolute: true,
                fixed: true,
              },
            },
          },
          group: {
            comp: "VMenu",
            options: {
              class: "ma-3 pa-3 green  ",
              props: {
                bottom: true,
                // top: true,
                "offset-x": true,
                // 'offset-y': true,
              },
            },
          },
          items: {
            comp: "VTab",
            options: {
              // class: ' ma-1 pa-1 pink--text',
              class: "grey ma-1 pa-1",
              style: { border: `15px dashed red`, "background-color": "blue" },
            },
          },
          header: {
            comp: "VTab",
            options: {
              class: "ma-2 pa-2 pink--text",
              style: { border: `1px dashed red`, "background-color": "blue" },
            },
            oOptions: {
              class: "ma-2 pa-2 h1",
              style: {
                border: `1px dashed yellow`,
                "background-color": "red",
                color: "yellow",
              },
              props: {
                color: "yellow",
              },
            },

            activator: true,
          },
        },
      },
    ],
  ],

  WBListItems_VMenu00:
    // [
    // '<VTabs>',
    {
      comp: "div",
      hComp: "li",
      switch: true,
      switchEvent: "click",
      options: {
        html: "VTab1",
        footers: [
          "<~VTab>",
          [
            "<~VList>",
            "<VListItem|green pa-5 ma-5|link>",
            "aaaa",
            "bbbb",
            "ccccc",
          ],
        ],
        headers: "ggggggggggggggggggg|red",
      },
      hOptions: {
        html: "VTab1000",
        // html:[],
        footers: [
          "<~VTab>",
          ["<~VList>", "<VListItem|red pa-5 ma-5>", "xxxxx", "yyyyy", "zzzzzz"],
        ],
        headers: "ffffffffffffffff|green",
      },

      header: { comp: "li", options: { html: "Global headerrrrrrrr" } },
      hHeader: { comp: "li", options: { html: "Global hover headerrrrrrrr" } },
    },
  // {
  //   comp:'VBtn',
  //   // hComp:'div',
  //   // switch:!true,
  //   options:{
  //     html:'VTab2',

  //   },
  // hOptions:['<~VList>',['<VListItem>',,'aaaa','bbbb','ccccc']],
  // hOptions:{html:['<~VList>',['<VListItem>',,'aaaa','bbbb','ccccc']]}
  // }

  // ],
  WBListItems_VMenu1: [
    "<~VTabs|container>",
    "<VTab|red pa-1 ma-1|aaaaaaaaaaaaaaaaaaa>",
    "VTAB1|green--text|aaaa",
    "VTAB2||bbbb",
    "VTAB3||cccc",
    "VTAB4||dddd",
    "VTAB5||eeee",
    {
      comp: "VCard",
      options: {
        html: "aaaa",
      },
    },
  ],
  WBListItems_VMenu20: [
    "<~VTabs>",
    {
      comp: "VBtn",
      options: {
        html: "VTAB2",
        // footers:[ 'aaaa','bbbb','ccccc']
      },
    },
    {
      comp: "VBtn",
      options: {
        html: "VTAB2",
      },
      // footer:[ 'aaaa','bbbb','ccccc']
    },
    {
      comp: "VBtn",
      options: {
        html: "VTAB2",
      },
      // footer:[ 'aaaa','bbbb','ccccc']
    },
  ],

  WBListItems_VMenu2: [
    "<~VTabs>",
    "<VTab>",
    {
      comp: "VMenu",
      dive: true,
      options: {
        class: "ma-3 pa-3 green  ",
        props: {
          // value:!true,

          bottom: true,
          // top: true,
          "offset-x": true,
          "offset-y": true,
        },

        // html:'ssssssssssssssssss',
        slots: {
          activator: {
            comp: "VTab",
            options: {
              html: "activator1111",
              on: {
                click: (that, evt) => {
                  console.log(that);
                  // that.data.options.props.value=!that.data.options.props.value
                  that.ref().isActive = !that.ref().isActive;
                },
              },
            },
          },
        },

        footers: [
          "<~ol>",
          ["<li>", "aaaaaaaaaaaaa", "bbbbbbbbbbbbbb", "ccccccccccccccccc"],
        ],
      },
    },
    {
      comp: "VMenu",
      dive: true,
      options: {
        class: "ma-3 pa-3 green  ",
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          "offset-x": true,
          "offset-y": true,
        },

        // html:'ssssssssssssssssss',
        slots: {
          activator: {
            comp: "VTab",
            options: {
              html: "activator",
              on: {
                click: (that, evt) => {
                  console.log(that);
                  that.ref().isActive = !that.ref().isActive;

                  // that.data.options.props.value=!that.data.options.props.value
                },
              },
            },
          },
        },

        footers: [
          "<~ol>",
          ["<li>", "aaaaaaaaaaaaa", "bbbbbbbbbbbbbb", "ccccccccccccccccc"],
        ],
      },
    },
    {
      comp: "VMenu",
      dive: true,
      options: {
        class: "ma-3 pa-3 green  ",
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          "offset-x": true,
          "offset-y": true,
        },

        // html:'ssssssssssssssssss',
        slots: {
          activator: {
            comp: "VTab",
            options: {
              html: "activator",
              on: {
                click: (that, evt) => {
                  console.log(that);
                  that.ref().isActive = !that.ref().isActive;

                  // that.data.options.props.value=!that.data.options.props.value
                },
              },
            },
          },
        },

        footers: [
          "<~ol>",
          ["<li>", "aaaaaaaaaaaaa", "bbbbbbbbbbbbbb", "ccccccccccccccccc"],
        ],
      },
    },
    {
      comp: "VMenu",
      dive: true,
      options: {
        class: "ma-3 pa-3 green  ",
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          "offset-x": true,
          "offset-y": true,
        },

        // html:'ssssssssssssssssss',
        slots: {
          activator: {
            comp: "VTab",
            options: {
              html: "activator",
              on: {
                click: (that, evt) => {
                  console.log(that);
                  that.ref().isActive = !that.ref().isActive;
                  // that.emit('abc',true)

                  // that.data.options.props.value=!that.data.options.props.value
                },
              },
            },
          },
        },
        // on:{
        //   abc:(that,val)=>{
        //     alert(val)
        //     // that.data.options.props.value=val
        //   }
        // },
        footers: [
          "<~ol>",
          [
            "<li>",
            "aaaaaaaaaaaaa|red",
            "bbbbbbbbbbbbbb",
            "ccccccccccccccccc|green",
          ],
        ],
      },
    },
  ],

  WBListItems_VMenu3: [
    "<~VTabs|container>",
    // '<VTab>',
    [
      {
        comp: "<*VMenu>",
        dive: true,
        // header:'div__headersssssssssss|yellow pa-15 ma-15',
        // footer:'div__footersssssssssss|yellow pa-15 ma-15',
        options: {
          class: "ma-3 pa-3 green  ",
          props: {
            // value:!true,
          },
          html: "htmlllllllllllllllllll0",
          //   slots:{
          //     activator:{comp:'VTab',options:{class:'blue',html:'activator',on:{
          //     click:(that,evt)=>{
          //       alert('dddddddddddddd')
          //       console.log(that)
          //       that.data.options.props.value=!that.data.options.props.value
          //     }
          //   },
          // }}
          //   },

          headers: "jjjjjjjjjjjjjj",
          footers: [
            "<~ol>",
            [
              "<li>",
              "aaaaaaaaaaaaa|red",
              "bbbbbbbbbbbbbb",
              "ccccccccccccccccc|green",
            ],
          ],
        },
      },
      ["<li>", "VBtn__aaa|grey", "VBtn__bbb"],
      "div__ggggggg|red pa-15 ma-15|green pa-15 ma-15",
      ["div__aaa", "div__bbb"],
      // {
      //   footers:['div__aaa','div__bbb'],
      //   slots:{
      //             activator:{comp:'VTab',options:{class:'blue',html:'activatorA',on:{
      //             click:(that,evt)=>{
      //               alert('aaaaaaaaaaaaa')
      //               console.log(that)
      //               that.data.options.props.value=!that.data.options.props.value
      //             }
      //           },
      //         }}
      //           }
      //   },
      {
        options: {
          footers: ["div__footers_1111111111", "div__footers_222222222222"],
          headers: ["div__headers_1111111111", "div__headers_222222222222"],
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            // "offset-x": true,
            "offset-y": true,
            origin: "center center",
            transition: "scale-transition",
            "content-class": "green ",
          },

          slots: {
            activator: {
              comp: "VTab",
              dive: true,
              options: {
                class: "blue",
                html: "activatorB",
                on: {
                  mouseover: (that, evt) => {
                    // alert('bbbbbbbbbbbbb')
                    console.log(that);
                    // that.data.options.props.value=!that.data.options.props.value

                    that.ref().isActive = !that.ref().isActive;
                  },
                },
              },
            },
          },
        },
      },
      {
        options: {
          footers: ["div__33333333", "div__44444444"],
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            "offset-x": true,
            "offset-y": true,
          },
          slots: {
            activator: {
              comp: "VTab",
              options: {
                class: "red",
                html: "activatorC",
                on: {
                  click: (that, evt) => {
                    alert("bbbbbbbbbbbbb");
                    console.log(that);
                    // that.data.options.props.value=!that.data.options.props.value

                    that.ref().isActive = !that.ref().isActive;
                  },
                },
              },
            },
          },
        },
      },
      {
        options: {
          footers: ["div__5555555555", "div__6666666666"],
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            "offset-x": true,
            "offset-y": true,
          },
          html: "html99999999999999999999",

          slots: {
            activator: {
              comp: "VTab",
              options: {
                class: "green pa-5",
                html: "activatorD",
                on: {
                  click: (that, evt) => {
                    alert("bbbbbbbbbbbbb");
                    console.log(that);
                    // that.data.options.props.value=!that.data.options.props.value

                    that.ref().isActive = !that.ref().isActive;
                  },
                },
              },
            },
          },
        },
      },
    ],
    // {options:{html:'hhhhhhhhhhhhhhhhhhhh'}},
    // {options:{html:'ffffffffff'}},
    // {html:'hhhhhhhhhhhhhhhhhhhh'},
    // ['aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa'],
    // ['bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb',],
    // ['cccccccccccccccccccccccc','cccccccccccccccccccccccc','cccccccccccccccccccccccc',]
    // 'aaaa',
    // 'bbbb',
    // 'cccc'
  ],
  WBListItems_VMenu4: [
    {
      comp: "<li>",
      options: {
        // html:
      },
    },
    "aaaaaaaaaa",
    "bbbbbbbbbbbb",
  ],

  WBListItems_VMenu5: [
    "<~VTabs|container>",
    "<VTab>",
    [
      {
        comp: "<*VMenu>",
        dive: true,
        // header:'div__headersssssssssss|yellow pa-15 ma-15',
        // footer:'div__footersssssssssss|yellow pa-15 ma-15',
        options: {
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            // "offset-x": true,
            "offset-y": true,
            origin: "center center",
            transition: "scale-transition",
            "content-class": "green ",
          },

          slots: {
            activator: {
              comp: "VTab",
              dive: true,
              options: {
                class: "blue",
                html: "activatorB",
                on: {
                  mouseover: (that, evt) => {
                    // alert('bbbbbbbbbbbbb')
                    console.log(that);
                    // that.data.options.props.value=!that.data.options.props.value
                  },
                },
              },
            },
          },

          headers: "jjjjjjjjjjjjjj",
          footers: [
            "<~ol>",
            [
              "<li>",
              "aaaaaaaaaaaaa|red",
              "bbbbbbbbbbbbbb",
              "ccccccccccccccccc|green",
            ],
          ],
        },
      },
      ["<li>", "VBtn__aaa|grey", "VBtn__bbb"],
      "div__ggggggg|red pa-15 ma-15|green pa-15 ma-15",
      ["div__aaa", "div__bbb"],
      // {
      //   footers:['div__aaa','div__bbb'],
      //   slots:{
      //             activator:{comp:'VTab',options:{class:'blue',html:'activatorA',on:{
      //             click:(that,evt)=>{
      //               alert('aaaaaaaaaaaaa')
      //               console.log(that)
      //               that.data.options.props.value=!that.data.options.props.value
      //             }
      //           },
      //         }}
      //           }
      //   },
      {
        options: {
          footers: ["div__footers_1111111111", "div__footers_222222222222"],
          headers: ["div__headers_1111111111", "div__headers_222222222222"],
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            // "offset-x": true,
            "offset-y": true,
            origin: "center center",
            transition: "scale-transition",
            "content-class": "green ",
          },

          slots: {
            activator: {
              comp: "VTab",
              dive: true,
              options: {
                class: "blue",
                html: "activatorB",
                on: {
                  mouseover: (that, evt) => {
                    // alert('bbbbbbbbbbbbb')
                    console.log(that);
                    // that.data.options.props.value=!that.data.options.props.value
                    that.ref().isActive = !that.ref().isActive;
                  },
                },
              },
            },
          },
        },
      },
      {
        options: {
          footers: ["div__33333333", "div__44444444"],
          props: {
            // value:!true,
            bottom: true,
            // top: true,
            "offset-x": true,
            "offset-y": true,
          },
          // slots:{
          //         activator:{comp:'VTab',options:{class:'red',html:'activatorC',on:{
          //         click:(that,evt)=>{
          //           alert('bbbbbbbbbbbbb')
          //           console.log(that)
          //           that.data.options.props.value=!that.data.options.props.value
          //         }
          //       },
          //     }}
          //       }
        },
      },
      {
        options: {
          footers: ["div__5555555555", "div__6666666666"],
          // props: {
          //           value:!true,
          //           bottom: true,
          //           // top: true,
          //           "offset-x": true,
          //           'offset-y': true,
          //         },
          html: "html99999999999999999999",
        },
      },
    ],
    // {options:{html:'hhhhhhhhhhhhhhhhhhhh'}},
    // {options:{html:'ffffffffff'}},
    // {html:'hhhhhhhhhhhhhhhhhhhh'},
    // ['aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa'],
    // ['bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb',],
    // ['cccccccccccccccccccccccc','cccccccccccccccccccccccc','cccccccccccccccccccccccc',]
    // 'aaaa',
    // 'bbbb',
    // 'cccc'
  ],
  WBListItems_VMenu6: [
    "<~VTabs|container>",
    "<VTab>",

    {
      comp: "<*VMenu>",
      dive: true,
      // header:'div__headersssssssssss|yellow pa-15 ma-15',
      // footer:'div__footersssssssssss|yellow pa-15 ma-15',
      options: {
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          // "offset-x": true,
          "offset-y": true,
          origin: "center center",
          transition: "scale-transition",
          "content-class": "green ",
        },

        slots: {
          activator: {
            comp: "VTab",
            dive: true,
            options: {
              class: "blue",
              html: "activatorB",
              on: {
                mouseover: (that, evt) => {
                  // alert('bbbbbbbbbbbbb')
                  console.log(that);
                  // that.data.options.props.value=!that.data.options.props.value
                  that.ref().isActive = !that.ref().isActive;
                },
              },
            },
          },
        },

        headers: "jjjjjjjjjjjjjj",
        footers: [
          "<~ol>",
          [
            "<li>",
            "aaaaaaaaaaaaa|red",
            "bbbbbbbbbbbbbb",
            "ccccccccccccccccc|green",
          ],
        ],
      },
    },
    ["<li>", "VBtn__aaa|grey", "VBtn__bbb"],
    "div__ggggggg|red pa-15 ma-15|green pa-15 ma-15",
    ["div__aaa", "div__bbb"],
    // {
    //   footers:['div__aaa','div__bbb'],
    //   slots:{
    //             activator:{comp:'VTab',options:{class:'blue',html:'activatorA',on:{
    //             click:(that,evt)=>{
    //               alert('aaaaaaaaaaaaa')
    //               console.log(that)
    //               that.data.options.props.value=!that.data.options.props.value
    //             }
    //           },
    //         }}
    //           }
    //   },
    {
      options: {
        footers: ["div__footers_1111111111", "div__footers_222222222222"],
        headers: ["div__headers_1111111111", "div__headers_222222222222"],
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          // "offset-x": true,
          "offset-y": true,
          origin: "center center",
          transition: "scale-transition",
          "content-class": "green ",
        },

        slots: {
          activator: {
            comp: "VTab",
            dive: true,
            options: {
              class: "blue",
              html: "activatorB",
              on: {
                mouseover: (that, evt) => {
                  // alert('bbbbbbbbbbbbb')
                  console.log(that);
                  // that.data.options.props.value=!that.data.options.props.value
                  that.ref().isActive = !that.ref().isActive;
                },
              },
            },
          },
        },
      },
    },
    {
      options: {
        footers: ["div__33333333", "div__44444444"],
        props: {
          // value:!true,
          bottom: true,
          // top: true,
          "offset-x": true,
          "offset-y": true,
        },
        // slots:{
        //         activator:{comp:'VTab',options:{class:'red',html:'activatorC',on:{
        //         click:(that,evt)=>{
        //           alert('bbbbbbbbbbbbb')
        //           console.log(that)
        //           that.data.options.props.value=!that.data.options.props.value
        //         }
        //       },
        //     }}
        //       }
      },
    },
    {
      options: {
        footers: ["div__5555555555", "div__6666666666"],
        // props: {
        //           value:!true,
        //           bottom: true,
        //           // top: true,
        //           "offset-x": true,
        //           'offset-y': true,
        //         },
        html: "html99999999999999999999",
      },
    },

    // {options:{html:'hhhhhhhhhhhhhhhhhhhh'}},
    // {options:{html:'ffffffffff'}},
    // {html:'hhhhhhhhhhhhhhhhhhhh'},
    // ['aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa'],
    // ['bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb','bbbbbbbbbbbbbbbbbbbbbbb',],
    // ['cccccccccccccccccccccccc','cccccccccccccccccccccccc','cccccccccccccccccccccccc',]
    // 'aaaa',
    // 'bbbb',
    // 'cccc'
  ],
  arraCompObjWithStar0: [
    {
      comp: "<li>",
      options: {
        class: "yellow pa-4 ma-4",
      },
    },
    "aaaaaaa|red",
    "bbbbbbbb|blue",
  ],
  arraCompObjWithStar0: [
    {
      comp: "<~li>", //same as'~li'
      options: {
        class: "yellow pa-4 ma-4",
      },
    },
    "aaaaaaa|red",
    "bbbbbbbb|blue",
  ],
  arraCompObjWithStar0: [
    {
      comp: "~li",
      options: {
        class: "yellow pa-4 ma-4",
      },
    },
    "aaaaaaa|red",
    "bbbbbbbb|blue",
  ],
  arraCompObjWithStar0: [
    // '<~div>',
    {
      comp: "<*div>",
      // comp:'<*VTab>',
      // comp:'VTab',
      // hComp:'li',
      switch: true,
      options: {
        class: "yellow pa-4 ma-4",
        html: "initial text 0 ",
      },
      // hOptions:{
      //   html:'hovered'
      // }
    },
    // 'aaaaaaaaaaaaaaaaaa',
    // 'bbbbbbbbbbbbbbbbbbbb',
    // 'ccccccccccccccccccc',
    // {options:{headers:'aaaaaaa|red',on:{click:()=>{alert('bbbb|red')}}},header:'div__Global header|blue'},
    // {hComp:'li',options:{headers:'bbbbbbbb|blue'/* ,on:{click:()=>{alert('bbbbbbbb|blue')}} */,footers:'div__inside footers|red'},hOptions:{html:'aaaaaaaa'}},
    // {comp:'li'},
    // {hComp:'li',switch:true,hOptions:{html:'bbbbbbbbb'}},
    // {hComp:'li',switch:true,hOptions:{html:'bbbbbbbbb'}},
    // {hComp:'li',switch:true,hOptions:{html:'ccccccccc'}},
    // {hComp:'li',hOptions:{html:'bbbbbbbb'}},
    { hComp: "li", header: { html: "bbbbbbbb" } },
    // {hComp:'li',hOptions:{html:'cccccccc'}},
  ],

  layout_navDrawer00: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VListGroup",
      options: {
        class: "ma-3 pa-3 yellow  ",
        props: {
          "prepend-icon": "mdi-home",
          "append-icon": "mdi-home",
          // 'bottom': true,
          // bottom: true,
          // 'offset-x': true,
        },
      },
    },
    items: {
      comp: "VCard",
      options: {
        // class: ' ma-1 pa-1 pink--text',
        class: "grey ma-1 pa-1",
        style: {
          border: `15px dashed red`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 pink white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },
    },
    header: {
      comp: "VTab",
      options: {
        class: "ma-1 pa-1 pink--text",
        style: {
          border: `1px dashed red`,
          "background-color": "blue",
        },
        props: {
          round: true,
        },
      },
      oOptions: {
        class: "ma-3 pa-3  white--text h6",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
        },
      },

      activator: true,
    },
  },
  urlCasaque:
    "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",

  xxxx: "./files/a.xlsx",

  xls0: "./files/a.xlsx",

  filePdf0: "./files/pdf0.pdf",
  filePdf1: "./pdf0.pdf",
  filePdf2: "./cv.pdf",
  filePdf3: "./files/cv.pdf",

  json0: "./files/json0.json",
  json1: "./json0.json",

  md0: "./files/md0.md",
  md1: "./md0.md",
  md2: "./md1.md",

  vue_src_0: "./files/__vue0.vue",
  vue_src_1: "./__vue0.vue",

  py_src_0: "./files/__py0.py",
  py_src_1: "./__py0.py",

  md_src_0: "./files/__md0.md",
  md_src_1: "./__md0.md",

  js0_src: "./files/__js0.js",
  js1_src: "./__js0.js",

  ts0_src: "./files/__ts0.ts",
  ts1_src: "./__ts0.ts",

  htmll_src_0: "./__html0.html",
  htmll_src_1: "./files/__html0.html",

  htmll1_src_0: "./__html1.html",
  htmll1_src_1: "./files/__html1.html",

  html_0: "./html0.html",
  html_1: "./files/html0.html",

  html1_0: "./html1.html",
  html1_1: "./files/html1.html",

  mp3_0: "./files/0.mp3",
  mp3_1: "./files/1.mp3",

  mp4_0: "./files/mp4_0.mp4",
  mp4_1: "./files/0.mp4",
  mp4_2: "./files/files/0.mp4",
  mp4_3: "./0.mp4",

  png0: "./logo.png",

  png1: "./assets/logo.png",
  png2: "./files/logo.png",
  jpeg1: "./files/jpeg1.jpeg",
  jp_00: "./files/jp0.jpg",
  svg0: "./files/svg0.svg",

  jp0: "./files/jp0.jpg",
  jp1: "./jp0.jpg",
  jp2: "./jp0.jpg",
  jp3: "./files/jpeg0.jpeg",
  txt0: "./txt0.txt", //files/jpeg1.
  html_11: "./content.html",
  html_111: "/content.html",
  html_1111: "content.html",

  htmm: "https://pdfobject.com/pdf/sample.pdf",
  v0: "https://www.youtube.com/5608bbc1-65a9-4144-8d48-2c92f908ef46",
  im0: "https://cdn.pixabay.com/photo/2023/11/07/06/52/forest-8371211_1280.jpg",
  im1: "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  im2: "https://img.freepik.com/premium-photo/medium-shot-family-retro-style_52683-115524.jpg?w=1380",
  im3: "https://images.freeimages.com/images/large-previews/588/futuristic-brain-data-visualization-0410-5697445.jpg",
  im4: "https://images.pexels.com/photos/28871575/pexels-photo-28871575/free-photo-of-scenic-view-of-lush-green-landscape-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img0: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/10/file_example_JPG_100kB.jpg",
  img1: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/10/file_example_JPG_100kB.jpg",
  img2: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/10/file_example_PNG_500kB.png",
  img3: "http://www.bmsc.washington.edu/raster3d/examples/density.gif",
  img4: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/10/file_example_favicon.ico",
  img5: "https://file-examples.com/storage/feb05093336710053a32bc1/2020/03/file_example_SVG_20kB.svg",
  img55:
    "https://media.licdn.com/dms/image/v2/D4D22AQFrzsWE0tN2pA/feedshare-shrink_800/feedshare-shrink_800/0/1727209737358?e=1732752000&v=beta&t=w0jIijc-qtpdwhAKsGoZbwem2vj0wXQEsQ2TnqPx9VQ",
  img56:
    "https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/fact-file-color-icon.svg",
  img6: "https://file-examples.com/storage/feb05093336710053a32bc1/2020/03/file_example_WEBP_50kB.webp",
  img7: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/10/file_example_GIF_500kB.gif",
  html0: "https://filesampleshub.com/download/code/html/sample1.html",
  html0_src: "https://filesampleshub.com/download/code/html/sample1.html?src",
  html1: "https://www.tutorialspoint.com/online_vuejs_editor.php",
  html2: "http://w-learn.org/html/li",
  aud0: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
  aud1: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/11/file_example_MP3_700KB.mp3",
  aud2: "https://incompetech.com/music/royalty-free/mp3",
  aud3: "https://soundbible.com/mp3/lion_roar.mp3",
  aud4: "https://file-examples.com/storage/feb05093336710053a32bc1/2017/11/file_example_MP3_700KB.mp3",
  aud41:
    "https://file-examples.com/wp-content/storage/2017/11/file_example_WAV_1MG.wav",
  "aud42`":
    "https://file-examples.com/storage/feb05093336710053a32bc1/2017/11/file_example_OOG_1MG.ogg",
  aud5: "https://www.soundjay.com/button/beep-07.wav",
  aud6: "https://www.sample-videos.com/audio/wav/NjAwMQ.wav",
  aud7: "https://www.soundjay.com/button/beep-07.ogg",
  aud8: "https://www.sample-videos.com/audio/ogg/Sample-3s.ogg",
  aud9: "https://www.sample-videos.com/audio/m4a/Sample-3s.m4a",
  aud90: "https://www.sample-videos.com/audio/flac/Sample-3s.flac",
  aud91: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.aac",
  aud92: "https://www.sample-videos.com/audio/aiff/Sample-3s.aiff",
  aud93: "https://www.sample-videos.com/audio/wma/Sample-3s.wma",
  aud94: "https://www.alroqya.com/media/sound/baqara.mp3",
  aud95: "URL: https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

  vid40:
    "https://www.pexels.com/video/vintage-camera-held-by-woman-outdoors-28830627/",
  vid4: "https://youtu.be/U6uUNRt_grk",
  vid5: "https://youtu.be/Jpe_YkX4kac",
  vid51: "https://youtu.be/elvsunVPtpM",

  vid52: "https://fb.watch/vlW-xa0j5I/",
  vid53: "https://cdn.pixabay.com/video/2023/03/01/152798-803733100_large.mp4",
  vid54:
    "https://videocdn.cdnpk.net/joy/content/video/free/2014-12/large_preview/Raindrops_Videvo.mp4?token=exp=1729629492~hmac=906198a55438ac0e0aa19f80a20cdba3512785d2d353118c1b991ea95631c0fa",
  vid55: "https://www.linkedin.com/38ee7ccb-c1a4-4b9d-b293-98f56a22d204",
  vid56: "https://www.linkedin.com/29d7b632-3484-47d4-9801-f7e9283e6835",

  vid53: "http://www.wikipedia.com/",

  vid: "https://www.w3schools.com/html/mov_bbb.mp4",
  vid1: "https://spankbang.com/64lcw/embed",
  vid2: "https://vdownload-1.sb-cd.com/1/0/10292000-480p.mp4?secure=93tPcG1gH8Stgr3gvx__Dw,1729541133&m=1&d=5&_tid=10292000",
  aud66: "https://soundcloud.com/trending-music-afrno/sets/indie",
  vid3: "https://soundcloud.com/trapcity/eden-venom",
  vid6: "https://www.youtube.com/embed/U6uUNRt_grk?list=RDU6uUNRt_grk",
  vid7: "https://spankbang.com/9kbb8/video/fc2+ppv+4079839+2",
  vid8: "https://www.xvideos.com/embedframe/ucdvulv43d0",
  vid9: "https://fb.watch/vlUHGYxIAZ/",
  v91: `	<iframe iframe src = "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fa2waal%2Fvideos%2F1118611192845554%2F&show_text=false&width=267&t=0" width = "267" height = "476" style = "border:none;overflow:hidden" scrolling = "no" frameborder = "0" allowfullscreen = "true" allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen = "true" > </iframe>`,
  vid92:
    "https://file-examples.com/wp-content/storage/2018/04/file_example_AVI_480_750kB.avi",
  vid93:
    "https://file-examples.com/wp-content/storage/2018/04/file_example_MOV_480_700kB.mov",
  vid94:
    "https://file-examples.com/wp-content/storage/2017/04/file_example_MP4_480_1_5MG.mp4",
  vid95:
    "https://file-examples.com/wp-content/storage/2018/04/file_example_OGG_480_1_7mg.ogg",
  vid96:
    "https://file-examples.com/wp-content/storage/2018/04/file_example_WMV_480_1_2MB.wmv",
  vid97:
    "https://file-examples.com/wp-content/storage/2020/03/file_example_WEBM_480_900KB.webm",
  vid98: "https://alcorn.com/ftp/downloads/test-files/vid00001.mpg",
  pdff0:
    "https://file-examples.com/wp-content/storage/2017/10/file-sample_150kB.pdf",
  pdff1: "https://pdfobject.com/pdf/sample.pdf",
  pdff2: "http://study.wi-bg.com/files/sess1_reminder.pdf",

  pyy0: "http://study.wi-bg.com/files/str_cond_input.py",

  doc000:
    "https://file-examples.com/wp-content/storage/2017/02/file-sample_100kB.doc",
  doc1: "http://static.shanhuxueyuan.com/test6.docx",
  doc11:
    "https://d26eilqraqdwgi.cloudfront.net/freeRes/document/doc/25.5000KB.doc",
  doc3: "https://file-examples.com/wp-content/storage/2017/08/file_example_PPT_250kB.ppt",
  doc4: "https://file-examples.com/wp-content/storage/2017/10/file-sample_100kB.odt",
  doc5: "https://file-examples.com/wp-content/storage/2017/10/file_example_ODS_10.ods",
  doc6: "https://file-examples.com/wp-content/storage/2017/10/file_example_ODP_200kB.odp",
  doc7: "https://file-examples.com/wp-content/storage/2019/09/file-sample_100kB.rtf",
  doc8: "https://products.groupdocs.app/viewer/app/?lang=en&file=acd084fc-4307-4fe5-9118-b2b4e1af46dd%2Ffile-sample_100kB.rtf",
  xls0: "https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls",
  xlsx0: "http://static.shanhuxueyuan.com/demo/excel.xlsx",
  css0: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
  js: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js",

  mdd0: "https://raw.githubusercontent.com/adam-p/markdown-here/master/README.md",
  mdd1: "https://raw.githubusercontent.com/adam-p/markdown-here/master/README.md",

  jsonn0: "https://jsonplaceholder.typicode.com/posts",
  json11:
    "https://file-examples.com/wp-content/storage/2017/02/file_example_JSON_1kb.json",

  txtt0: "http://study.wi-bg.com/files/poly_ans.txt",

  eleveur: "E.A.R.L. ELEVAGE LA TOUR DE VANDEL",
  allure: "TROT",
  objMode: {
    comp: "VCard",
    options: {
      mode: "dev",
      class: "blue",
      hide: !true,
      html: "dddddddddddddd",
      output: [
        "allOptions",
        "main",
        "wbcProps",
        "raw",
        "close",
        "vProps",
        "gAttrs",
        // "all",
      ],
      all: true,
      wbcProps: true,
      gAttrs: true,
    },
  },

  viewData_: {},

  arrayType: ["aaaaaaaaa"],
  objType: {
    comp: "div",
    options: {
      class: "yellow",
      load: !true,
      hide: !true,
      html: "ddddddddddd",
      footers: "",
      close: "aaaaaaaaaaaaaaaaaa",
    },
  },
  nesetd0: {
    options: {
      class: "pa-15 ma-15 grey",
    },
    0: ["li__000000000000000000", "li__77777777777777777|red", "88888888888"],
    1: "li__111111111111111111",
    2: "222222222222222222",
    3: {
      options: {
        class: "pa-15 ma-15 red",
      },
      0: "333333333333333333_0",
      1: "333333333333333333_1",
      2: "333333333333333333_2",
      3: {
        options: {
          class: "pa-15 ma-15 blue",
        },
        0: "333333333333333333_3_0",
        1: "333333333333333333_3_1",
        2: "333333333333333333_3_2",
      },
    },
  },

  linkObj: {
    name: "GeneralTimeTableUi",
    params: {
      club: "Tennis Club of Monastir",
      compact: "extended",
      vcompact: "noemty",
      type: "general",
      date: "2023-08-08",
    },
  },
  signInBtn0: {
    comp: "VBtn",
    options: {
      global: "glq",
      headers: `click me to load data from https://jsonplaceholder.typicode.com/posts.|red`,
      html: `load post`,
      props: {},
      on: {
        click: (thiss) => (that, $event) => {
          console.log(888888888888, thiss, that);
          alert(888888888888);
          // thiss.watch('item_',(nVal,oVal)=>alert(nVal))
          // thiss.data.comp = "li";
          // thiss.data.props.html += "A";
          // thiss.data.props.key += "1";
          // thiss.data.props.mode = "prod";

          let data = {},
            url = "https://jsonplaceholder.typicode.com/posts",
            head = null,
            method = "get";
          let actions = [
            [
              (response) => {
                console.log("First success function", response.body);
                return Promise.resolve(response.body);
              },
              (error) => {
                console.error("First error function", error);
                return Promise.reject(error);
              },
            ],
            [
              (response) => {
                console.log("Second success function", response, that);
                that.data.comp = "VSelect";
                that.data.options.props.items = response;
                that.data.options.props.label = "Posts titles";
                that.data.options.headers =
                  "data was loaded from https://jsonplaceholder.typicode.com/posts|green";
                that.data.options.props["item-text"] = (that, v) => {
                  console.log("vvvvvvvvvvvvvvv", "thiss", "VSelect v", v, that);
                  return that.lg + "|" + v.title;
                };

                return Promise.resolve(response.body);
              },
              (error) => {
                console.error("Second error function", error);
                return Promise.reject(error);
              },
            ],
          ];
          let theHead = {
            Authorization: `JWT`,
            "Content-Type": "application/json",
          };

          let xx = that.queryData({
            data,
            url,
            theHead,
            method,
            actions,
            // encFn
          });

          alert(xx);

          // thiss.data.item_.eventFoncArg.click=that=>alert('hi every body')
          // thiss.$data.item_.comp='a'
          // thiss.$data.item_.props.mode='prod'
        },
      },
    },
  },

  username: {
    name: "username",
    comp: "VDatePicker",
    comp: "VTimePicker",
    // comp: "textarea",
    // comp: "VTextarea",
    // comp: "VSlider",
    // comp: "VSelect",
    comp: "input",
    // comp: "VCheckbox",
    comp: "VTextField",
    // comp: "div",
    // comp: "img",
    // output:['itemSrc','main','close','wbcProps','gAttrs','all'],
    // output:'all',
    // output:(thiss,h_)=>{
    //   console.log('thisssssssssssss',thiss)
    //   // return h_('div',{class:'red'},[thiss.vnodes.main])
    //   return h_('li',{},[h_('li',{class:'red'},[thiss.lg]),h_('WBC',{class:'blue',props:{item:{comp:[() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue")]}}}),thiss.vNodes.wrappedRaw])
    // },
    init: (thiss) => {
      alert("was initialized");
      console.log("thisssssssss", thiss);

      // thiss.data_.comp='li'
      thiss.data_.options.class = "pink";
      thiss.data_.options.val = "blackkkkkkkkkkkkk";
      alert("ddddddddddd");
    },
    options: {
      // attrs:{type:'checkbox'},
      float: !true,
      // itemSrc:true,
      // all:true,
      // gAttrs:true,
      itemSrc: true,
      // wbcSyn:true,
      // wbcSrc:true,
      // htmlSrc:true,
      // allOptions:true,
      // gAttrs:true,
      // wbcProps: true,
      // vProps: true,
      // raw: true,
      // main: true,
      // headers: true,
      // footers: true,
      // wrappedRaw: true,
      // mode:'dev',
      // wbcProps:true,
      close: (thiss) => true,
      close: (thiss) => {
        console.log("33333333", thiss);
        return "sakkarni";
      },

      // hAttrs:true,
      lang: "ar",
      global: "usr",
      name: "usr",
      hide: !true,
      load: !true,
      key: "username",
      // val: "22:22:22",
      val: !true,
      rtl: true,
      html: "dddddd",
      wrap: { comp: "VCard", options: { class: "grey pa-1" } },

      html: {
        en: "en-reddddddddddddddd",
        fr: "fr-blueeeeeeeeee",
        ar: "ar-orangeeeeeeee",
      },
      class: { en: "red", fr: "blue", ar: "orange" },
      headers: "headersssss",
      footers: "footersssss",

      props: {
        items: [
          { abbr: "en", name: "english" },
          { abbr: "fr", name: "france" },
          { abbr: "ar", name: "arabic" },
        ],
        "item-text": (thiss, v) => v.name,
        "item-value": (thiss, v) => v,
        type: (thiss) => "txt",
        disabled: false,
        loading: true,
        // // outlined: true,
        // dense: true,
        // prefix: 'My username is: ',
        // reverse: thiss=>thiss._lg=='ar',
        // shaped: true,
        rounded: true,
        // success: true,
        // "validate-on-blur": false,
        // // suffix: "?????",
        // // id: 'username',
        // label: {
        // 	"en": 'Username or Email',
        // 	"fr": "Nom d'utilisateur ou email",
        // 	"ar": 'اسم المستخدم أو البريد الالكتروني',
        // },
        // title: {
        // 	en: 'Username or Email',

        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // placeholder: {
        // 	en: 'Username or Email',
        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // 'prepend-icon': 'mdi-mail',

        "prepend-icon": "mdi-account-circle",
        // style: {
        // display: 'none', padding: '0', margin: '0', 'background-color': 'green', // color: 'blue', // width: '12em', // hight: '1500px', // 'font-size': '300%'}
        // },
        // rules: []
        // value: "22:00:00",
        // value:'2023-01-22'
        value: true,
      },
      on: {
        input: (thiss, v) => {
          // alert(v);
          thiss.data.options.val = v;
        },
        click: (thiss, event) => {
          console.log(
            "thhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhis",
            thiss,
            event
          );
          alert("username ic clicked");
        },
        // keyup: (e) => this.onKeyUp(e)
      },
    },
  },
  username1: {
    comp: "VDatePicker",
    comp: "VTimePicker",
    // comp: "textarea",
    // comp: "VTextarea",
    // comp: "VSlider",
    // comp: "VSelect",
    comp: "input",
    // comp: "VCheckbox",
    comp: "VTextField",
    comp: "div",
    // comp: "img",
    // output:['itemSrc','main','wbcProps','gAttrs','all'],
    // output:'all',
    // output:(thiss,h_)=>{
    //   console.log('thisssssssssssss',thiss)
    //   // return h_('div',{class:'red'},[thiss.vnodes.main])
    //   return h_('li',{},[h_('li',{class:'red'},[thiss.lg]),h_('WBC',{class:'blue',props:{item:{comp:[() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue"),() => import("../../../app/views/ui/contactView/ContactView.vue")]}}}),thiss.vNodes.wrappedRaw])
    // },
    options: {
      // attrs:{type:'checkbox'},
      // float:!true,
      // itemSrc:true,
      // all:true,
      // gAttrs:true,
      // itemSrc:true,
      // wbcSyn:true,
      // wbcSrc:true,
      // htmlSrc:true,
      // allOptions:true,
      // gAttrs:true,
      // wbcProps: true,
      // vProps: true,
      // raw: true,
      // main: true,
      // headers: true,
      // footers: true,
      wrappedRaw: true,
      // mode:'dev',
      // wbcProps:true,
      // close:true,
      // hAttrs:true,
      lang: "ar",
      global: "usr",
      name: "usr",
      hide: !true,
      load: !true,
      key: "username",
      // val: "22:22:22",
      val: !true,
      rtl: true,
      html: "dddddd",
      wrap: { comp: "li", options: { class: "blue pa-1" } },

      html: {
        en: "en-reddddddddddddddd",
        fr: "fr-blueeeeeeeeee",
        ar: "ar-orangeeeeeeee",
      },
      class: { en: "red", fr: "blue", ar: "orange" },
      headers: "headersssss",
      footers: "footersssss",

      props: {
        items: [
          { abbr: "en", name: "english" },
          { abbr: "fr", name: "france" },
          { abbr: "ar", name: "arabic" },
        ],
        "item-text": (thiss, v) => v.name,
        "item-value": (thiss, v) => v,
        type: (thiss) => "txt",
        disabled: false,
        loading: true,
        // // outlined: true,
        // dense: true,
        // prefix: 'My username is: ',
        // reverse: thiss=>thiss._lg=='ar',
        // shaped: true,
        rounded: true,
        // success: true,
        // "validate-on-blur": false,
        // // suffix: "?????",
        // // id: 'username',
        // label: {
        // 	"en": 'Username or Email',
        // 	"fr": "Nom d'utilisateur ou email",
        // 	"ar": 'اسم المستخدم أو البريد الالكتروني',
        // },
        // title: {
        // 	en: 'Username or Email',

        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // placeholder: {
        // 	en: 'Username or Email',
        // 	fr: "Nom d'utilisateur ou email",
        // 	ar: 'اسم المستخدم أو البريد الالكتروني',
        // },
        // 'prepend-icon': 'mdi-mail',

        "prepend-icon": "mdi-account-circle",
        // style: {
        // display: 'none', padding: '0', margin: '0', 'background-color': 'green', // color: 'blue', // width: '12em', // hight: '1500px', // 'font-size': '300%'}
        // },
        // rules: []
        // value: "22:00:00",
        // value:'2023-01-22'
        value: true,
      },
      // on: {
      //     input:(thiss,v)=>{
      //         // alert(v);
      //         thiss.data.options.val=v}
      //   click: (thiss,event) => alert('username ic clicked'),
      // keyup: (e) => this.onKeyUp(e)
      // }
    },
  },

  wbcsObj: {
    comp: ["~VContainer", "~a", "b"],
    // comp:'div',
    options: {
      //   load:true,
      class: "blue",
      hide: !true,
      // close:true ,
      // mode:'dev',
      // float:true ,
      // style:{'background-color':'red'},
      headers: "hhhhhhhhhhhhhhhhhhhhhhh",
      footers: "fffffffffffffff",
      // wrap:'li',
      wrap: { comp: "li", options: { class: "red pa-1" } },
    },
    a: {
      comp: "div",
      options: { close: true, class: "pa-2 ma-2 blue", html: "salut " },
    },
    b: {
      comp: "div",
      options: { class: "pa-2 ma-2 green", html: "au revovir " },
    },
    // b:'Au revoir '
  },
  closeObj: {
    comp: "div",
    name: "closeObj",
    //                 output:(that)=>{
    //                     console.log('thattttttttttttttttttt',that)
    //       return h('div',{class:'blue'},[that.savedVn.closeObj.close,'overide WBC-S vnode by this blue div content',111111,that.savedVn.closeObj.raw])
    // },
    // output:'all',
    // output:['main','mainWrapped','float'],
    options: {
      //   load: true,

      // mainWrapped:true,

      close: {
        comp: "VBtn",
        options: {
          html: "Close",
          key: "key-close",
          style: {
            display: "block",
            margin: "-1%",
            float: "right",
          },
          on: {
            click: (that, event) => {
              alert(11111111111111);
              console.log(44444444, that, event);
              that.data.options.hide = true;
              // that.data.options.key+=1
              that.data.options.key = that?.data?.options?.key
                ? that.data.options.key.replace("11", "") + "1"
                : this.randomKey("close");
            },
          },
        },
      },
      // float:true,
      // lang:'ar',
      key: "abc",
      html: "[[{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'}]]",
      // html:thiss=>{
      //     // thiss.lg='aaaaaaaaaaaaaaaa'
      //     return {'en':'english',fr:'french','ar':'arabic'}
      //     // return thiss.store.state.lg
      // },
      // html:{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'},
      global: "closeObj",
      class: { en: "primary", fr: "warning", ar: "yellow" },
      headers: "hhhhhhhhhhhhhhhhhhhhhhh",
      footers: "fffffffffffffff",
      // mode:'dev'
    },
  },
  loadingCircObj: {
    comp: "div",
    options: {
      load: {
        comp: "VProgressCircular",
        options: {
          hide: false,
          html: "li__Data is loading ...|red",
          props: {
            size: "400",
            width: "30",
            color: "yellow",
            indeterminate: true, // indeterminate: false,
          },
        },
      },
    },
  },
  loadingCircObj: {
    comp: "div",
    options: {
      load: {
        comp: "VProgressCircular",
        options: {
          hide: false,
          html: "li__Data is loading ...|red",
          props: {
            size: "400",
            width: "30",
            color: "yellow",
            indeterminate: true, // indeterminate: false,
          },
        },
      },
    },
  },
  loadingProgObj: {
    comp: "div",
    options: {
      load: {
        comp: "VProgressLinear",
        options: {
          hide: false,
          html: "li__Data is loading ...|red",
          props: {
            height: "30",
            color: "yellow",
            indeterminate: true,
          },
        },
      },
    },
  },
  listItems5: [
    [
      // 'title|h4 blue',111111,22222,
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      // 'VDivider'   ,
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!',
    ],
    "sddsdasdasdasdasdkjjkhkjhkjh",
    [
      //           {comp:'li',options:{
      //                 html:'micro_item1',
      //                 // float:true,
      //                 // close:true
      //             },
      //             expanded:true,
      //             layout: {
      //                 spread:!true,
      //                 root: {
      //             comp: 'VCard',
      //             options: {
      //                 hide: false,
      //                 class: 'container black ma-10 pa-10',
      //                 props: {
      //                     round:true,
      //                     // color:'pink'
      // 				}
      //             },
      //         },
      //         group: {
      //             comp: 'div',
      //             options: {
      //                 class: 'container orange ma-10 pa-10',
      //                 props: {
      //                     // bottom: true,
      //                     // // top: true,
      //                     // 'offset-x': true,
      //                     // // 'offset-y': true,
      //                 }
      //             }
      //         },
      //         header: {
      //             comp: 'li',

      //             options: {
      //                 class: 'container blue ma-1 pa-1 white--text',
      //                 // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
      //                 props: {
      //                     // cols:'2'
      //                     //   round:true
      //                 }
      //             },
      //               activator:true
      //         },
      //         items: {
      //             comp: 'VCol',
      //             options: {
      //                 class: '  cayan ma-1 pa-1',
      //                 style: {
      //                     border: `5px dashed blue`,
      //                     'background-color': 'green'
      //                 },
      //                 props: {
      //                     'align-self':'center',
      //                     // cols:'4'
      //                 }
      //             },
      //             oOptions: {
      //                 hide: false,
      //                 class: 'grey ',
      //                 style: {
      //                     // border: `5px dashed black`,
      //                     // 'background-color': 'green'
      //                 },
      //                 props: {
      //                     round:true,
      //                     color:'pink'
      // 				}
      //             },
      //         },
      //     }
      // },
      "~section11|blue",
      "[[VContainer__Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!|ma-10 pa-10]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
    ],

    [
      "~section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
    ],
    [
      "section1|blue",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
      [555555, 666666, 777777],
    ],
    // 'VSpacer',
    "88888888888888888888888888888888888888888",
    [8888888888888888888],
    [
      ["11", "222", "333", "444"],
      [
        55555,
        66666,
        77777,
        88888,
        [
          "aaaa",
          "bbbb",
          "cccccc",
          [
            "aaaa",
            "bbbb",
            "cccccc",
            [
              {
                comp: "li",
                options: {
                  html: "micro_item1",
                  // float:true,
                  // close:true
                },
                expanded: true,
                layout: {
                  spread: true,
                  root: {
                    comp: "li",
                    options: {
                      hide: false,
                      class: "container pink ma-10 pa-10",
                      props: {
                        round: true,
                        // color:'pink'
                      },
                    },
                  },
                  group: {
                    comp: "VListGroup",
                    options: {
                      class: "container orange ma-10 pa-10",
                      props: {
                        // bottom: true,
                        // // top: true,
                        // 'offset-x': true,
                        // // 'offset-y': true,
                      },
                    },
                  },
                  header: {
                    comp: "li",

                    options: {
                      class: "container blue ma-1 pa-1 white--text",
                      // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
                      props: {
                        // cols:'2'
                        //   round:true
                      },
                    },
                    activator: true,
                  },
                  items: {
                    comp: "VCol",
                    options: {
                      class: "  cayan ma-1 pa-1",
                      style: {
                        border: `5px dashed blue`,
                        "background-color": "green",
                      },
                      props: {
                        "align-self": "center",
                        // cols:'4'
                      },
                    },
                    oOptions: {
                      hide: false,
                      class: "grey ",
                      style: {
                        // border: `5px dashed black`,
                        // 'background-color': 'green'
                      },
                      props: {
                        round: true,
                        color: "pink",
                      },
                    },
                  },
                },
              },
              "aaaa",
              "bbbb",
              "cccccc",
              [
                // 8555555,
                "~aaaaaa",
                "bbbb",
                "cccccc",
                [
                  `{
                    comp: () =>
                      import(
                        /* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"
                      ),
                  }`,
                  44444,
                  444445,
                  444446,
                  444447,
                  [999999, 888888, 77777, 6666],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
  layout5: {
    // spread:true,

    root: {
      comp: "div",
      options: {
        hide: false,
        class: "container ma-10 pa-10",
        style: { border: "5px dashed black" },
        props: {},
      },
    },
    group: {
      comp: "VRow",
      options: {
        class: "container yellow ma-10 pa-10",
        props: {},
      },
    },
    header: {
      comp: "VCol",

      options: {
        class: "container green ma-1 pa-1 pink--text",
        // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
        props: {
          // cols:'2'
          //   round:true
        },
      },
      activator: true,
    },
    items: {
      comp: "VCol",
      options: {
        class: "  grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {
          "align-self": "center",
          // cols:'4'
        },
      },
    },
  },

  layout_navDrawer1: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": !true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VMenu",
      options: {
        class: " yellow ",
        props: {
          bottom: true,
          // top: true,
          "offset-x": true,
          // 'offset-y': true,
        },
      },
    },
    header: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 pink--text",
        style: { border: `1px dashed red`, "background-color": "#7FFFD4" },
        props: {
          //   round:true
        },
      },
      oOptions: {
        class: "ma-2 pa-2 h1",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
          color: "yellow",
        },
        props: { color: "yellow" },
      },

      activator: true,
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 green  white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },

      activator: !true,
    },
  },

  // iconObj:{comp:'div',options:{html:thiss=>{
  //                 console.log('thisssssssssssssss7777777',thiss)
  //                 return {en:'mdi-account',fr:'mdi-tennis'}},
  //                 global:'gl'}},

  iconObj: {
    comp: "div",
    name: "iconObj",
    //                 output:(that)=>{
    //                     console.log('thattttttttttttttttttt',that)
    //       return h('div',{class:'blue'},[that.savedVn.iconObj.close,'overide WBC-S vnode by this blue div content',111111,that.savedVn.iconObj.raw])
    // },
    // output:'all',
    // output:['main','mainWrapped','float'],
    options: {
      // mainWrapped:true,

      close: {
        comp: "VBtn",
        options: {
          html: "Close",
          key: "key-close",
          style: {
            display: "block",
            margin: "-1%",
            float: "right",
          },
          // on:{
          //   click:(that,event)=>{
          //       alert(11111111111111)
          //       console.log(44444444,that,event)
          // 		// that.data.options.hide=true
          // 		// that.data.options.key+=1
          // 		// that.data.options.key=that?.data?.options?.key?that.data.options.key.replace('11','')+'1':this.randomKey('close')
          // 	}
          // 		},
        },
      },
      // float:true,
      // lang:'ar',
      key: "abc",
      html: "[[{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'}]]",
      // html:thiss=>{
      //     // thiss.lg='aaaaaaaaaaaaaaaa'
      //     return {'en':'english',fr:'french','ar':'arabic'}
      //     // return thiss.store.state.lg
      // },
      // html:{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'},
      global: "iconObj",
      class: { en: "primary", fr: "warning", ar: "yellow" },
      // mode:'dev'
    },
  },
  // iconObj:() => import(/* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"),

  wbcArray: {
    comp: ["a", ["~li", "a"]],
    a: {
      comp: "div",
      name: "wbcArray",
      options: {
        global: "arr",
        // mainWrapped:true,
        html: "ggggggggggg",
        class: { en: "primary", fr: "warning", ar: "yellow" },
        class: "yellow",
        close: true,
        on: {
          click: (that, event) => {
            alert(22222222);
            console.log(555555555, that, event);
            that.data.options.key += 1;
            that.vm.item_.options.key += 1;
          },
        },
      },
    },
  },
  // 	obj: {comp:"li",
  // 	props:{html:"dynamic link to /page/:item"},
  // 	to:{name:"PageView",params:{item:JSON.stringify(
  // 		[{comp:"VCArd", props:{html:99999999999,class:'red'},to:'http://google.com'},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:99999999999}},
  // 		{comp:"li", props:{html:5555555555555555555}},]
  // 		)}}
  // },
  // 	layout0: {
  // 		hide: false,
  // 	},
  // 	layout: {
  // 		hide: false,
  // 		drawer:{
  // 			color:"#033red",
  // 	// class: 'ma-1 pa-1  red pink--text ',
  // 	// permanent: true,
  // 	'expand-on-hover': true,
  // 	right: !true,
  // 	floating: !true,
  // 	width: 300,
  // 	// app: true,
  // 	// absolute: true,
  // 	// fixed: true,
  // 	src:"https://media.tenor.com/1Q35mFla8xoAAAAC/100-keep-it100.gif",
  // 	// tag:'li'
  //   },

  // 	}
  listItems1: ["[[Home||home]]", "[[contact||contact]]", "[[about||about]]"],
  listItems2: [
    "[[li__Home||home]]",
    "[[li__contact||contact]]",
    "[[li__about||about]]",
  ],
  listItems3: [
    ["[[~li__list of fruit]]", "Apple", "Orange", "Strubbery", "Banana"],
    [
      "[[li__list of Meals]]",
      "Salads",
      "Soups",
      "Stir-fries",
      "Pasta dishes",
      "Rice dishes",
      "Vegetarian chili",
    ],
    ["[[li__list of Dessert]]", "Cakes", "Cookies", "Pies", "Other Desserts"],
  ],

  listItems4: [
    [
      "~li__Pies|red",
      ["~Apple pie|green", "Cherry pie", "Pumpkin pie", "Blueberry pie"],
    ],
    [
      "li__Cakes|red",
      ["Chocolate cake|green", "Vanilla cake", "Red velvet cake", "Cheesecake"],
    ],
    [
      "li__Cookies|red",
      [
        "Chocolate chip cookies|green",
        "Oatmeal raisin cookies",
        "Peanut butter cookies",
        "Sugar cookies",
      ],
    ],
    [
      "li__Ice cream|red",
      [
        "~Vanilla ice cream|green",
        "Chocolate ice cream",
        "Strawberry ice cream",
        "Mint chocolate chip ice cream",
      ],
    ],
  ],
  listItems5: [
    [
      // 'title|h4 blue',111111,22222,
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      // 'VDivider'   ,
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!',
    ],
    "sddsdasdasdasdasdkjjkhkjhkjh",
    [
      //           {comp:'li',options:{
      //                 html:'micro_item1',
      //                 // float:true,
      //                 // close:true
      //             },
      //             expanded:true,
      //             layout: {
      //                 spread:!true,
      //                 root: {
      //             comp: 'VCard',
      //             options: {
      //                 hide: false,
      //                 class: 'container black ma-10 pa-10',
      //                 props: {
      //                     round:true,
      //                     // color:'pink'
      // 				}
      //             },
      //         },
      //         group: {
      //             comp: 'div',
      //             options: {
      //                 class: 'container orange ma-10 pa-10',
      //                 props: {
      //                     // bottom: true,
      //                     // // top: true,
      //                     // 'offset-x': true,
      //                     // // 'offset-y': true,
      //                 }
      //             }
      //         },
      //         header: {
      //             comp: 'li',

      //             options: {
      //                 class: 'container blue ma-1 pa-1 white--text',
      //                 // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
      //                 props: {
      //                     // cols:'2'
      //                     //   round:true
      //                 }
      //             },
      //               activator:true
      //         },
      //         items: {
      //             comp: 'VCol',
      //             options: {
      //                 class: '  cayan ma-1 pa-1',
      //                 style: {
      //                     border: `5px dashed blue`,
      //                     'background-color': 'green'
      //                 },
      //                 props: {
      //                     'align-self':'center',
      //                     // cols:'4'
      //                 }
      //             },
      //             oOptions: {
      //                 hide: false,
      //                 class: 'grey ',
      //                 style: {
      //                     // border: `5px dashed black`,
      //                     // 'background-color': 'green'
      //                 },
      //                 props: {
      //                     round:true,
      //                     color:'pink'
      // 				}
      //             },
      //         },
      //     }
      // },
      "~section11|blue",
      "[[VContainer__Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!|ma-10 pa-10]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
    ],

    [
      "~section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
    ],
    [
      "section1|blue",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
      [555555, 666666, 777777],
    ],
    // 'VSpacer',
    "88888888888888888888888888888888888888888",
    [8888888888888888888],
    [
      ["11", "222", "333", "444"],
      [
        55555,
        66666,
        77777,
        88888,
        [
          "aaaa",
          "bbbb",
          "cccccc",
          [
            "aaaa",
            "bbbb",
            "cccccc",
            [
              {
                comp: "li",
                options: {
                  html: "micro_item1",
                  // float:true,
                  // close:true
                },
                expanded: true,
                layout: {
                  spread: true,
                  root: {
                    comp: "li",
                    options: {
                      hide: false,
                      class: "container pink ma-10 pa-10",
                      props: {
                        round: true,
                        // color:'pink'
                      },
                    },
                  },
                  group: {
                    comp: "VListGroup",
                    options: {
                      class: "container orange ma-10 pa-10",
                      props: {
                        // bottom: true,
                        // // top: true,
                        // 'offset-x': true,
                        // // 'offset-y': true,
                      },
                    },
                  },
                  header: {
                    comp: "li",

                    options: {
                      class: "container blue ma-1 pa-1 white--text",
                      // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
                      props: {
                        // cols:'2'
                        //   round:true
                      },
                    },
                    activator: true,
                  },
                  items: {
                    comp: "VCol",
                    options: {
                      class: "  cayan ma-1 pa-1",
                      style: {
                        border: `5px dashed blue`,
                        "background-color": "green",
                      },
                      props: {
                        "align-self": "center",
                        // cols:'4'
                      },
                    },
                    oOptions: {
                      hide: false,
                      class: "grey ",
                      style: {
                        // border: `5px dashed black`,
                        // 'background-color': 'green'
                      },
                      props: {
                        round: true,
                        color: "pink",
                      },
                    },
                  },
                },
              },
              "aaaa",
              "bbbb",
              "cccccc",
              [
                // 8555555,
                "~aaaaaa",
                "bbbb",
                "cccccc",
                [
                  `{
                    comp: () =>
                      import(
                        /* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"
                      ),
                  }`,
                  44444,
                  444445,
                  444446,
                  444447,
                  [999999, 888888, 77777, 6666],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
  layout5: {
    // spread:true,

    root: {
      comp: "div",
      options: {
        hide: false,
        class: "container ma-10 pa-10",
        style: { border: "5px dashed black" },
        props: {},
      },
    },
    group: {
      comp: "VRow",
      options: {
        class: "container yellow ma-10 pa-10",
        props: {},
      },
    },
    header: {
      comp: "VCol",

      options: {
        class: "container green ma-1 pa-1 pink--text",
        // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
        props: {
          // cols:'2'
          //   round:true
        },
      },
      activator: true,
    },
    items: {
      comp: "VCol",
      options: {
        class: "  grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {
          "align-self": "center",
          // cols:'4'
        },
      },
    },
  },

  listItems6: [
    [
      "title|h4 blue",
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
    ],
    [
      "section1|blue",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      ["paragrpah1_2...", "...", "paragrpah1_n..."],
    ],
    [
      "section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
    ],
  ],
  layout6: {
    root: {
      comp: "VContainer",
      options: {
        hide: false,
        class: " red",
        props: {},
      },
    },
    group: {
      comp: "VRow",
      options: {
        class: " yellow ",
        props: {},
      },
    },
    header: {
      comp: "div",

      options: {
        class: "ma-1 pa-1 pink--text",
        // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
        props: {
          //   round:true
        },
      },
      activator: !true,
    },
    items: {
      comp: "p",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
    },
  },

  listItems7: [
    [
      "title|h4 blue",
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
    ],
    [
      "Section's list",
      [
        "section1|blue",
        "paragrpah1_0...|green|llllll]]",
        "[[paragrpah1_1...|red__grey]]",
      ],
      [77777],
      [
        "paragrpah1_2...",
        "...",
        "paragrpah1_n...",
        [1111, "p1....", "p2....", "...."],
        [222],
        [3333],
        [4444],
      ],
    ],
    [
      "section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
    ],
  ],
  layout7: {
    root: {
      comp: "div",
      options: {
        hide: false,
        class: " container red",
        props: {},
        // attrs:{type:"I"}
      },
    },
    group: {
      comp: "ol",
      options: {
        class: "pa-3 ma-3 yellow ",
        props: {},
        attrs: { type: "I" },
      },
    },
    header: {
      comp: "div",

      options: {
        class: "ma-1 pa-1 pink--text",
        props: {},
      },
      //   activator:true
    },
    items: {
      comp: "li",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
        // attrs:{type:"I"}
      },
    },
  },
  listItems8: [
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph1</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>...",
      "<u>content2</u> of paragraph1 ...",
      "<u>content3</u> of paragraph1 ...",
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content2</u> of paragraph2</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph2 ...",
      "<u>content3</u> of paragraph2 ...",
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph3</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph3 ...",
      "<u>content3</u> of paragraph3 ...",
    ],
  ],
  layout8: {
    root: {
      comp: "ol",
      options: {
        hide: false,
        class: " container red",
        props: {},
        // attrs:{type:"I"}
      },
    },
    group: {
      comp: "li",
      options: {
        class: "pa-3 ma-3 yellow ",
        props: {},
        attrs: { type: "I" },
      },
    },
    header: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 pink--text",
        props: {},
      },
      activator: true,
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
        // attrs:{type:"I"}
      },
    },
  },

  listItems9: [
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph1</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>...",
      "<u>content2</u> of paragraph1 ...",
      "<u>content3</u> of paragraph1 ...",
      ["sub1 paragraph1", "sub1 content1", "sub1 content2", "..."],
      ["sub2 paragraph1", "sub2 content1", "sub2 content2", "..."],
      ["sub3 paragraph1", "sub3 content1", "sub3 content2", "..."],
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content2</u> of paragraph2</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph2 ...",
      "<u>content3</u> of paragraph2 ...",
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph3</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph3 ...",
      "<u>content3</u> of paragraph3 ...",
    ],
  ],
  layout9: {
    root: {
      comp: "ol",
      options: {
        hide: false,
        class: " container red",
        props: {},
        attrs: { type: "I" },
      },
    },
    group: {
      comp: "li",
      options: {
        class: "pa-3 ma-3 yellow ",
        props: {},
        // attrs:{type:"I"}
      },
    },
    header: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 pink--text",
        props: {},
      },
      //   activator:true
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
        // attrs:{type:"I"}
      },
    },
  },

  listItems10: [
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph1</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>...",
      "<u>content2</u> of paragraph1 ...",
      "<u>content3</u> of paragraph1 ...",
      ["sub1 paragraph1", "sub1 content1", "sub1 content2", "..."],
      ["sub2 paragraph1", "sub2 content1", "sub2 content2", "..."],
      ["sub3 paragraph1", "sub3 content1", "sub3 content2", "..."],
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content2</u> of paragraph2</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph2 ...",
      "<u>content3</u> of paragraph2 ...",
    ],
    [
      "numbered title|h4 blue",
      "<i><u>content1</u> of paragraph3</i>. it is an item controlled by one of <b>layout.header</b> or <b>layout.items</b>of paragraph3 ...",
      "<u>content2</u> of paragraph3 ...",
      "<u>content3</u> of paragraph3 ...",
    ],
  ],
  layout10: {
    root: {
      comp: "div",
      options: {
        hide: false,
        class: " container red",
        props: {},
        attrs: { type: "I" },
      },
    },
    group: {
      comp: "ol",
      options: {
        class: "pa-3 ma-3 yellow ",
        props: {},
        // attrs:{type:"I"}
      },
    },
    header: {
      comp: "li",

      options: {
        class: "ma-1 pa-1 pink--text",
        props: {},
        attrs: { type: "I" },
      },
      activator: true,
    },
    items: {
      comp: "li",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
        // attrs:{type:"I"}
      },
    },
  },

  itemWithWatch: {
    comp: "div",
    options: {
      global: "gl",
      html: `I am a watched component with different manners`,
    },
    // init:that=>{
    //   that.data.options.class='red'
    //     alert("init: 'item was  initialized and its color is set to red'")
    //   },
    watch: [
      [
        "data.comp",
        (that, newVal, oldVal) => {
          alert(`watched comp from ${oldVal} to ${newVal}`);
          console.log(`watched comp from `, oldVal, "to", newVal, that);
        },
      ],
      [
        "data.options.html",
        (that, newVal, oldVal) => {
          console.log(`watched comp from ${oldVal} to ${newVal}`, that);
          alert(`watched options.html from ${oldVal} to ${newVal}`);
        },
      ],
      [
        (that) => {
          console.log("watchd thrrough function", that);
          return `${that.data.options.html}/${that.data.comp}`;
        },
        (that, newVal, oldVal) => {
          alert(
            `watched transformation of WBCContObj from ${oldVal} to ${newVal}`
          );
          console.log(
            `watched transformation of WBCContObj from `,
            oldVal,
            "to",
            newVal,
            that
          );
        },
      ],
      // [
      // (that) =>{
      // console.log('watchd thrrough function',that)
      // return that.data.comp},
      // (that,newVal, oldVal) => {
      // alert(`watched comp from ${oldVal} to ${newVal}`);
      // console.log(`watched comp from `,oldVal,'to',newVal,that);
      // }
      // ],
      // [
      // "data.options.html",
      // (that,newVal, oldVal) => {
      // console.log(`watched comp from ${oldVal} to ${newVal}`,that);
      // alert(`watched options.html from ${oldVal} to ${newVal}`);
      // }
      // ],
    ],
  },

  itemQueryData: {
    comp: "VBtn",
    options: {
      global: "glq",
      headers: `click me to load data from https://jsonplaceholder.typicode.com/posts.|red`,
      html: `load post`,
      props: {},
      on: {
        click: (that, $event) => {
          console.log(888888888888);
          alert(888888888888);
          // thiss.watch('item_',(nVal,oVal)=>alert(nVal))
          // thiss.data.comp = "li";
          // thiss.data.props.html += "A";
          // thiss.data.props.key += "1";
          // thiss.data.props.mode = "prod";

          let data = {},
            url = "https://jsonplaceholder.typicode.com/posts",
            head = null,
            method = "get";
          let actions = [
            [
              (response) => {
                console.log("First success function", response.body);
                return Promise.resolve(response.body);
              },
              (error) => {
                console.error("First error function", error);
                return Promise.reject(error);
              },
            ],
            [
              (response) => {
                console.log("Second success function", response, that);
                that.data.comp = "VSelect";
                that.data.options.props.items = response;
                that.data.options.props.label = "Posts titles";
                that.data.options.headers =
                  "data was loaded from https://jsonplaceholder.typicode.com/posts|green";
                that.data.options.props["item-text"] = (that, v) => {
                  console.log("vvvvvvvvvvvvvvv", "thiss", "VSelect v", v, that);
                  return that.lg + "|" + v.title;
                };

                return Promise.resolve(response.body);
              },
              (error) => {
                console.error("Second error function", error);
                return Promise.reject(error);
              },
            ],
          ];
          let theHead = {
            Authorization: `JWT`,
            "Content-Type": "application/json",
          };

          let xx = that.queryData({
            data,
            url,
            theHead,
            method,
            actions,
            // encFn
          });

          alert(xx);

          // thiss.data.item_.eventFoncArg.click=that=>alert('hi every body')
          // thiss.$data.item_.comp='a'
          // thiss.$data.item_.props.mode='prod'
        },
      },
    },
  },

  wbcObj: {
    comp: "div",
    name: "wbcObj",
    //                 output:(that)=>{
    //                     console.log('thattttttttttttttttttt',that)
    //       return h('div',{class:'blue'},[that.savedVn.wbcObj.close,'overide WBC-S vnode by this blue div content',111111,that.savedVn.wbcObj.raw])
    // },
    // output:'all',
    // output:['main','mainWrapped','float'],
    options: {
      // mainWrapped:true,
      to: { name: "ContactView" },
      // to:"ContactView",
      close: {
        comp: "VBtn",
        options: {
          html: "Close",
          key: "key-close",
          style: {
            display: "block",
            margin: "-1%",
            float: "right",
          },
          on: {
            click: (that, event) => {
              alert(11111111111111);
              console.log(44444444, that, event);
              that.data.options.hide = true;
              // that.data.options.key+=1
              that.data.options.key = that?.data?.options?.key
                ? that.data.options.key.replace("11", "") + "1"
                : this.randomKey("close");
            },
          },
        },
      },
      // float:true,
      lang: "ar",
      key: "abc",
      // html:"[[{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'}]]",
      // html:thiss=>{
      //     // thiss.lg='aaaaaaaaaaaaaaaa'
      //     return {'en':'english',fr:'french','ar':'arabic'}
      //     // return thiss.store.state.lg
      // },
      html: "{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarabe'}",
      // html:{en:'mdi-account',fr:'mdi-tennis','ar':'{{ol}}[[li__aaaaaaaaaaaarabe|red|dddd]][[li__ssssssssssss|grey|ss]]'},
      // html:'abcd|red|sssss',
      global: "wbcObj",
      class: { en: "primary", fr: "warning", ar: "yellow" },
      // mode:'dev'
    },
  },
  // wbcObj:"[[{a:'aaaaa',b:555555}]]",

  wbhtmlObj1:
    "{en:'{{ol|red}}[[mdi-<i>account</i>|blue]]',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'}",
  wbhtmlObj2: "[[li__bbb{{ol}}[[li__ll<b>ll</b>]]li__aaaaa[[li__5555|red|eeee",
  wbhtmlObj3: "{{ol}}[[li__aaaaaaaaaaaa]]",
  wbhtmlObj4: {
    en: "{{li|green|oooo}}[[nnnnnn|red]]",
    fr: "[[aaaaa]]",
    ar: "hhhhhh",
    children: "sssssssssss",
  },
  wbhtmlObj5:
    "{{div|{class:'ma-2',style:{'background-color':'red'},}|tyui}}[[3333333]]{{ol|{class:'yellow'}|abcd}}[[li__11111111111|red pa-10__ma-10 blue|link1]][[li__22222222|red pa-10__ma-10 blue|link2]][[li__wawwwwwww|grey ma-15]]{{ol|pink|uuuuuuuuu}}[[li__aaaaaaaaaaaaaaaaaaa]][[li__dddddddddd]][[li__ddddddd<b>ddd</b>|green|]]{{ol}}[[{en:'mdi-<i>account</i>',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'}]]",
  // wbcObj:{en:'mdi-account',fr:'mdi-tennis','ar':'aaaaaaaaaaaarab'},
  // wbcObj:[11111,'ggggg'],

  //       item: [
  //         "<li>",
  //         {
  //           comp: "~VCard",
  //           props: {
  //             hide: !true,
  //             html: "web link000000",
  //             class: "red",
  //             mode: "wiki",
  //             // prod:true
  //           },
  //           init: (that) => () => {
  //             alert("helloooooooooooo");
  //           },
  //           events: {
  //             click: (thiss) => () => {
  //               console.log(6666666666666, thiss);
  //               // thiss.comp='a'
  //             },
  //             mouseleave: (thiss) => () => {
  //               console.log(777777777777777, thiss);
  //             },
  //           },
  //         },
  //         555555555,
  //         {
  //           comp: "~div",
  //           props: {
  //             class: "green",
  //             html: "load data",
  //             key: "abc-",
  //             // mode: 'dev'
  //           },
  //           watch: {
  //             "item.comp": (thiss,newVal, oldVal) => {
  //               alert(`watched comp from ${oldVal} to ${newVal}`+thiss);
  //             },
  //             "item.props.html": (thiss,newVal, oldVal) => {
  //               alert(`watched props.html from ${oldVal} to ${newVal}`+thiss);
  //             },
  //           },
  //           init: (that) => () => {
  //             alert("hello");
  //           },
  //           events: {
  //             click: (thiss) => () => {
  //               console.log("asdfghjkjjjjjjjjjjjjj", thiss);
  //               // thiss.watch('item_',(nVal,oVal)=>alert(nVal))
  //               // thiss.data.comp = 'li'
  //               thiss.data.props.html += "A";
  //               // thiss.data.props.key += '1'
  //               thiss.data.props.mode = "prod";

  //               let data = "abcdefgh",
  //                 url = "https://jsonplaceholder.typicode.com/posts",
  //                 head = null,
  //                 method = "get";
  //               let actions = [
  //                 [
  //                   (response) => {
  //                     console.log("First success function", response.body);
  //                     thiss.data.comp = "VSelect";
  //                     thiss.data.props.items = response.body;
  //                     thiss.data.props.val = thiss.data.props.items[0];

  //                     thiss.data.props["item-text"] = (v) => v.title;
  //                     thiss.data.props["item-color"] = "primary";
  //                     thiss.data.props["item-value"] = (v) => v;
  //                     thiss.data.props.to = (v) => `https://google.com/search?q=${v.title}`;

  //                     return Promise.resolve(response.body);
  //                   },
  //                   (error) => {
  //                     console.error("First error function", error);
  //                     return Promise.reject(error);
  //                   },
  //                 ],
  //                 [
  //                   (response) => {
  //                     console.log("Second success function", response.body);
  //                     return Promise.resolve(response.body);
  //                   },
  //                   (error) => {
  //                     console.error("Second error function", error);
  //                     return Promise.reject(error);
  //                   },
  //                 ],
  //               ];
  //               let theHead = {
  //                 Authorization: `JWT`,
  //                 "Content-Type": "application/json",
  //               };
  //               let obj_request = {
  //                 data,
  //                 url,
  //                 theHead,
  //                 method,
  //                 actions,
  //                 key1: "abcde",
  //                 key2: "xyz",
  //               };
  //               let encFn = (x) => {
  //                 alert(x);
  //                 // alert(a);
  //                 // alert(extra_obj);
  //                 // alert(JSON.stringify(y));
  //                 alert(JSON.stringify(x));
  //                 // alert(x.split(''));
  //                 // alert(x.split(''));
  //                 x.data += "/1";
  //                 alert(x.url);
  //                 alert(JSON.stringify(x));
  //                 return x;
  //               };
  //               let xx = thiss.queryData(obj_request, encFn);

  //               alert(xx);

  //               // thiss.data.item_.eventFoncArg.click=that=>alert('hi every body')
  //               // thiss.$data.item_.comp='a'
  //               // thiss.$data.item_.props.mode='prod'
  //             },
  //           },
  //           events: {
  //             // click:()=>alert('cvcvcv'),
  //             mouseleave: (thiss) => () => {
  //               console.log(999999999999999999, thiss);
  //             },
  //           },
  //         },
  //         66666666666,
  //       ],
  //            theItem:null,
  //       theItem0:null,
  //       theItem1:null,
  //       theItem2:null,
  //       theItem3:{},
  //       theItem4:{},
  //       theItem5:{},
  //       theItem6:{},
  //       item0: [
  //         {
  //           comp: "VBtn",
  //           load: !true,
  //           props: {
  //             disp: { wbc: true },
  //             html: "web link000000",
  //             mode: "dev",
  //           },
  //           init: (that) => () => {
  //             alert("hello");
  //           },
  //           events: {
  //             click: (thiss) => () => {
  //               console.log(6666666666666, thiss);
  //               // thiss.comp='a'
  //             },

  //             // click:()=>alert('cvcvcv'),
  //             mouseleave: (thiss) => () => {
  //               console.log(777777777777777, thiss);
  //             },
  //           },
  //         },
  //         {
  //           comp: "VBtn",

  //           props: {
  //             load: !true,
  //             html: "load data",
  //             key: "abc-",
  //             mode: "dev",
  //           },
  //           watch: {
  //             "item.comp": (thiss,newVal, oldVal) => {
  //               alert(`watched comp from ${oldVal} to ${newVal}`+thiss);
  //             },
  //             "item.props.html": (thiss,newVal, oldVal) => {
  //               alert(`watched props.html from ${oldVal} to ${newVal}`+thiss);
  //             },
  //           },
  //           init: (thiss) =>  () => {
  //             alert("hello");
  //           },
  //           events: {
  //             click: (thiss) => () => {
  //               console.log(888888888888, thiss);
  //               // thiss.watch('item_',(nVal,oVal)=>alert(nVal))
  //               thiss.data.comp = "li";
  //               thiss.data.props.html += "A";
  //               thiss.data.props.key += "1";
  //               thiss.data.props.mode = "prod";

  //               let data = {},
  //                 url = "https://jsonplaceholder.typicode.com/posts",
  //                 head = null,
  //                 method = "get";
  //               let actions = [
  //                 [
  //                   (response) => {
  //                     console.log("First success function", response.body);
  //                     return Promise.resolve(response.body);
  //                   },
  //                   (error) => {
  //                     console.error("First error function", error);
  //                     return Promise.reject(error);
  //                   },
  //                 ],
  //                 [
  //                   (response) => {
  //                     console.log("Second success function", response.body);
  //                     return Promise.resolve(response.body);
  //                   },
  //                   (error) => {
  //                     console.error("Second error function", error);
  //                     return Promise.reject(error);
  //                   },
  //                 ],
  //               ];
  //               let theHead = {
  //                 Authorization: `JWT`,
  //                 "Content-Type": "application/json",
  //               };

  //               let xx = thiss.queryData({
  //                 data,
  //                 url,
  //                 theHead,
  //                 method,
  //                 actions,
  //                 // encFn
  //               });

  //               alert(xx);

  //               // thiss.data.item_.eventFoncArg.click=that=>alert('hi every body')
  //               // thiss.$data.item_.comp='a'
  //               // thiss.$data.item_.props.mode='prod'
  //             },
  //             mouseleave: (thiss) => () => {
  //               console.log(999999999999999999, thiss);
  //             },
  //           },
  //           // events: {
  //           //   // click:()=>alert('cvcvcv'),
  //           // },
  //         },
  //       ],
  //       viewComps: {
  //         // comp:'li||||title+|title+title+~title+title',
  //         // comp:['~li','title','~title','title','title'],

  //         // comp: ["~menu",'~span',"language", "sidebar", ["~VContainer", "menu", "RouterView",'footer'], "footer"],
  //         comp: [
  //           ["mm", "menu0", "menu000"],
  //           "menu",
  //           "span",
  //           "language",
  //           "sidebar",
  //           ["~VContainer", "menu", "RouterView", "footer"],
  //           "footer",
  //         ],

  //         props: {
  //           load: !true,
  //           // html: "load data",
  //           key: "abc-",
  //           // mode: "dev",
  //           dispView: !true,
  //           title: (thiss) => ({ en: `Default page name`, fr: `Default page name`, ar: `Default page name` }),
  //           favIcon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png",
  //           // class:"green"
  //         },

  //         mm: [
  //           { comp: "VBtn", props: { html: "dddd" } },
  //           { comp: "VBtn", props: { html: "dddd" } },
  //           { comp: "VBtn", props: { html: "dddd" } },
  //           { comp: "VBtn", props: { html: "dddd" } },
  //           "fggggg",
  //           "[[aaaaaaaaaaa|yellow|]]",
  //         ],
  //         menu000: {
  //           comp: "div",
  //           props: {
  //             class: "grey",
  //             // mode:'dev',
  //             html: {
  //               en: "Select Language",
  //               ar: "اختيار اللغة",
  //               fr: "Choisir la langue",
  //             },
  //             headers: [
  //               { comp: "VBtn", props: { html: "dddd" } },
  //               { comp: "VBtn", props: { html: "dddd" } },
  //               { comp: "VBtn", props: { html: "dddd" } },
  //               { comp: "VBtn", props: { html: "dddd" } },
  //               "fggggg",
  //               "aaaaaaaaaaa",
  //             ],
  //           },
  //         },
  //         menu0: [
  //           {
  //             comp: "div",
  //             props: {
  //               class: "grey",
  //               // mode:'dev',
  //               html: {
  //                 en: "Select Language",
  //                 ar: "اختيار اللغة",
  //                 fr: "Choisir la langue",
  //               },
  //               headers: [
  //                 { comp: "VBtn", props: { html: "dddd" } },
  //                 { comp: "VBtn", props: { html: "dddd" } },
  //                 { comp: "VBtn", props: { html: "dddd" } },
  //                 { comp: "VBtn", props: { html: "dddd" } },
  //                 "fggggg",
  //                 "aaaaaaaaaaa",
  //               ],
  //             },
  //           },
  //           {
  //             comp: "VBtn",
  //             props: {
  //               html: "en",
  //             },
  //             events: {
  //               click: function (w) {
  //                 console.log("cahnge aaaaaaaaaaaaaaaaaaaaaaaaa", w, this);
  //                 w.store.commit("updateLang", "en");
  //               },
  //             },
  //           },
  //           {
  //             comp: "VBtn",
  //             props: {
  //               html: "fr",
  //             },
  //             events: {
  //               click: function (w) {
  //                 console.log("cahnge aaaaaaaaaaaaaaaaaaaaaaaaa", w, this);
  //                 w.store.commit("updateLang", "fr");
  //               },
  //             },
  //           },

  //           {
  //             comp: "VBtn",
  //             props: {
  //               html: "العربية",
  //             },
  //             events: {
  //               click: function (w) {
  //                 console.log("cahnge aaaaaaaaaaaaaaaaaaaaaaaaa", w, this);
  //                 w.store.commit("updateLang", "ar");
  //               },
  //             },
  //           },
  //         ],

  //         // menu0: {
  //         // 	comp: "WBMenu",
  //         // 	props: {
  //         // 		mode: (thiss) => (that) => {
  //         // 			console.log(88888888888888888888, thiss, that);
  //         // 			// return !true
  //         // 		},
  //         // 		load: (thiss) => (that) => {
  //         // 			console.log(999999999999999999, thiss, that);
  //         // 			return !true;
  //         // 		},

  //         // 		items: WBMenu0.items_,
  //         // 		layout: WBMenu0.layout_,
  //         // 	},
  //         // },

  //         menu: {
  //           comp: "WBMenu",
  //           props: {
  //             mode: (thiss) => (that) => {
  //               console.log(88888888888888888888, thiss, that);
  //               // return !true
  //             },
  //             load: (thiss) => (that) => {
  //               console.log(999999999999999999, thiss, that);
  //               return !true;
  //             },
  //             items: WBMenu.items_,
  //             layout: WBMenu.layout_,
  //             // key="randomKey('dfsdf-')"
  //           },
  //         },
  //         sidebar: {
  //           comp: "WBSidebar",
  //           props: {
  //             items: appSideBarObj,
  //             layout: layout,
  //             // 			mode:thiss=>that=>{
  //             // 	console.log(88888888888888888888,thiss,that)
  //             // 	return 'wiki'

  //             // },
  //             load: (thiss) => (that) => {
  //               console.log(999999999999999999, thiss, that);
  //               return !true;
  //             },
  //             app: true,
  //             temporary: true,
  //             /* items:WBMenu.items_,
  //     layout:WBMenu.layout_,
  //      */ // key="randomKey('dfsdf-')"
  //           },
  //         },

  //         language: {
  //           comp: "VSelect",
  //           props: {
  //             width: "1px",
  //             //   mode:'dev',
  //             lang: "en",
  //             // hide:thiss=>thiss.is_staff | thiss.is_federation | thiss.is_government | thiss.is_ministry,
  //             load: (thiss) => (that) => {
  //               console.log(5555555555555555555555555, thiss, that);
  //               return !true;
  //             },
  //             hide: false,
  //             //   val:{lg: 'English',abbr:'en'},
  //             val: null,

  //             items: [
  //               { lg: "English", abbr: "en" },
  //               { lg: "French", abbr: "fr" },
  //               { lg: "العربية", abbr: "ar" },
  //             ],
  //             label: {
  //               en: "Select Language",
  //               ar: "اختيار اللغة",
  //               fr: "Choisir la langue",
  //             },
  //             title: {
  //               en: "Select Language",
  //               ar: "اختيار اللغة",
  //               fr: "Choisir la langue",
  //             },
  //             "item-text": (v) => v.abbr,
  //             //   'item-text':v=>{
  //             // 	console.log('vvvvvvvvvvvvvvvvvv',v)
  //             // 	return v.abbr},
  //             itemValue: (v) => v,
  //             height: 15,
  //             //   to:v=>{
  //             // 	// thiss._store.commit("updateLang", 'ar');
  //             // 	return 'sssssssssss'+v.abbr
  //             // }
  //           },
  //           global: "lang",
  //           watch: [
  //             [
  //               (w) => {
  //                 console.log("vvvvvvvvvvvvvvvvvvv", w);
  //                 return w?.data?.props?.label;
  //               },
  //               function (newVal, oldVal, w) {
  //                 alert(`WBC function watched comp from ${oldVal} to ${newVal}`);
  //                 console.log(
  //                   "WBC Watcheddddddddddddddd itemAccessebility.data",
  //                   oldVal,
  //                   newVal,
  //                   this,
  //                   w
  //                 );
  //               },
  //               { deep: true },
  //             ],
  //             [
  //               "data.props.lang",
  //               (newVal, oldVal, w) => {
  //                 alert(`WBC string watched comp from ${oldVal} to ${newVal}`);
  //                 console.log("WBC Watcheddddddddddddddd itemAccessebility.data", oldVal, newVal, w);
  //               },
  //               { deep: true },
  //             ],
  //           ],
  //           events: {
  //             click: function (w) {
  //               alert("mouseover 5555555555555");
  //               console.log("click 999999999999999999999999999", w, this);
  //               // w.data.comp='li'
  //             },

  //             change: function (w) {
  //               console.log("cahnge aaaaaaaaaaaaaaaaaaaaaaaaa", w, this);
  //               alert("cahnge 5555555555555");

  //               // w.data.props.val=v
  //               w.store.commit("updateLang", w.data.props.val.abbr);
  //               // w.data.props.val=v.props.val.abbr
  //               // w.data.comp='li'
  //               // return 'http://vxcvcxv'
  //             },

  //             // 	// thiss._data.lang_='fr'
  //             // 	// that.data.lang_='fr'
  //             // 	// thiss._data.lang_=thiss?._data?.viewComps?.language?.props?.val?.abbr||'en'
  //             // 	// alert('VCheckbox is clicked')

  //             // 	      thiss._store.commit("updateLang", 'ar');
  //             // 	// 	  thiss._data.compKey = thiss._methods.randomKey('main-key');

  //             // },
  //             // events: {
  //             // 	click:(thiss)=>{
  //             // 		alert('clickkkkkkkkkkkkkkkkkkkkked')
  //             // }
  //             // change: (thiss) => () => {
  //             // 		console.log(6666666666666, thiss,thiss._store);

  //             // 		thiss._store.commit("updateLang", thiss._data.viewComps.language.props.val);
  //             // 		// this.$cookies.set("lg", v.abbr);
  //             // // 	// thiss._data.lang_='en'
  //             // // 	// thiss.data.keyComp+='1'
  //             // },
  //             //   }
  //             // to: {
  //             //   name: '',
  //             // },
  //           },
  //         },
  //
  layout_navDrawer0: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": !true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VListGroup",
      options: {
        class: "ma-3 pa-3 yellow  ",
        props: {
          "prepend-icon": "mdi-home",
          "append-icon": "mdi-home",
          // 'bottom': true,
          // bottom: true,
          // 'offset-x': true,
        },
      },
    },
    items: {
      comp: "VCard",
      options: {
        // class: ' ma-1 pa-1 pink--text',
        class: "grey ma-1 pa-1",
        style: {
          border: `15px dashed red`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "ma-3 pa-3 pink white--text h3",
        style: {
          border: `1px dashed blue`,
          "background-color": "green",
        },
      },
    },
    header: {
      comp: "VTab",
      options: {
        class: "ma-1 pa-1 pink--text",
        style: {
          border: `1px dashed red`,
          "background-color": "blue",
        },
        props: {
          round: true,
        },
      },
      oOptions: {
        class: "ma-3 pa-3  white--text h6",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
        },
      },

      activator: true,
    },
  },
  listItems_navDrawer0: [
    555555,
    "VDivider",
    [
      "~tttttttt",
      11111,
      "VDivider",
      "VDivider",
      555555555555555555,
      [888888888, "VDivider"],
      11111,
      [44444444, 9999, 7777, [5555, 666, 4444, ["33333", 2222, 111]]],
      {
        comp: "img",
        options: {
          global: "gl",
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/220px-Adult_Scottish_Fold.jpg",
          },
          html: "Scottish Fold",
          footers: "Scottish Fold",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
    ],
    ["[[~li__3333]]", 444, "VDivider", 555, 666],
    789,
    "VDivider",
    6543,
    [
      "~1111",
      {
        comp: "VIcon",
        options: {
          class: "grey  white--text px-16",
          style: {
            "background-color": "red",
            border: `10px dashed black`,
          },
          headers: "xczxczxczxc",
          html: "mdi-home",
        },
      },
      777777,
      "[[bla bla|red|]]",
      "VDivider",
      888,
      ["9999", 8888, 9999, 5555],
      33333,
      44444,
      5555,
      [66666, 777, 88888],
    ],
    [
      {
        comp: "li",
        expanded: true,
        options: {
          "prepend-icon": "mdi-food-apple",
          value: true,
          headers: "xczxczxczxc",
          html: (that) =>
            `language is ${that.lg} style group title withe expanded property`,
        },
        layout: {
          root: {
            comp: "VTab",
            hide: false,
            options: {
              props: {
                class: "ma-1 pa-1  pink--text ",
                color: "deep-purple lighten-4",
                // permanent: !true,
                "expand-on-hover": true,
                right: !true,
                floating: true,
                width: 500,
                app: true,
                // absolute: true,
                fixed: true,
              },
            },
          },
          group: {
            comp: "VMenu",
            options: {
              class: "ma-3 pa-3 green  ",
              props: {
                bottom: true,
                // top: true,
                "offset-x": true,
                // 'offset-y': true,
              },
            },
          },
          items: {
            comp: "VTab",
            options: {
              // class: ' ma-1 pa-1 pink--text',
              class: "grey ma-1 pa-1",
              style: { border: `15px dashed red`, "background-color": "blue" },
            },
          },
          header: {
            comp: "VTab",
            options: {
              class: "ma-2 pa-2 pink--text",
              style: { border: `1px dashed red`, "background-color": "blue" },
            },
            oOptions: {
              class: "ma-2 pa-2 h1",
              style: {
                border: `1px dashed yellow`,
                "background-color": "red",
                color: "yellow",
              },
              props: {
                color: "yellow",
              },
            },

            activator: true,
          },
        },
      },
      "[[li__777777]]",
      "[[li__666666]]",
      "[[li__555555]]",
      ["[[~li__56565]]", "[[li__455454]]", "[[li__121]]", [1, 2, 3, 4, 5]],
    ],
    [
      {
        comp: ["span", "a"],
        options: {
          wrap: "VListGroup",
        },
        a: "menue",
      },
      444,
      5555,
      666,
      777,
    ],
    99999,
    ["a", "b", "c", ["d0", "d1", "d2", "d3"]],

    [
      {
        comp: "img",
        options: {
          class: "text-center text-h10 green font-weight-medium   ",
          attrs: {
            src: "https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000",
            hight: 70,
            width: 100,
          },
          headers: "pets",
          to: "https://google.com",
        },
      },

      {
        comp: "div",
        options: {
          class: "text-center text-h10 font-weight-medium  yellow ",
          html: "bla bla ",
          to: "https://google.com",
          on: {},
        },
      },
      {
        comp: "div",
        options: {
          class: "text-center text-h10 font-weight-medium  pink px-16",
          html: "a0",
          to: "https://google.com",
          on: {},
        },
      },
      "a1",
      "a2",
      "a3",
      "VDivider",
      "a4",
      "a5",
    ],
    "VDivider",
    [
      "Birds [[<br><small>(ctr+click on item below to search)</small>]]",
      "[[Parrots|yellow red--text|https://www.google.com/search?q=Parrots]]",
      "[[Pelicans|yellow|https://www.google.com/search?q=Pelicans]]",
      "[[Penguins|yellow|https://www.google.com/search?q=Penguins]]",
      "[[Pigeons and Doves |yellow|https://www.google.com/search?q=Pigeons+and+Doves]]",
      "[[Shrikes|yellow|https://www.google.com/search?q=Shrikes]]",
    ],
    [
      "Cats",
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg",
          },
          html: "Persian Cat",
          footers: "Persian Cat",
          to: "https://www.google.com/search?q=Persian+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/220px-Paintedcats_Red_Star_standing.jpg",
          },
          html: "Bengal Cat",
          footers: "Bengal Cat",
          to: "https://www.google.com/search?q=Bengal+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG/220px-British_burmese_-_Andel_Alois_at_Cat_show.JPG",
          },
          html: "Burmese Cat",
          footers: "Burmese Cat",
          to: "https://www.google.com/search?q=Burmese+Cat",
        },
      },
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium  blue pa-2",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/220px-Adult_Scottish_Fold.jpg",
          },
          html: "Scottish Fold",
          footers: "Scottish Fold",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
    ],
    [
      {
        comp: "video",
        options: {
          attrs: {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            hight: 120,
            width: 120,
            controls: true,
            autoplay: true,
          },
          headers: "video",
        },
      },
      "[[google|blue|http://www.google.com]]",
      "item2",
      "item3",
      "item4",
    ],
    [
      {
        comp: "VBtn",
        options: {
          html: "click me",
          class: "red white--text",
          on: {
            click: () => alert("The button has been clicked. Thanks!! "),
          },
        },
      },
    ],
    "VDivider",
    [
      {
        comp: "img",
        options: {
          class: "text-center text-h10 font-weight-medium   pa-2 white--text ",
          attrs: {
            src: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F7R4B39%2Fmedia%2FL6IWPSOTLA6R",
            hight: 70,
            width: 100,
          },
          footers: "list of dogs",
          to: "https://www.google.com/search?q=Scottish+Fold",
        },
      },
      "golden retriever",
      "labrador retriever",
      "french bulldog",
      "beagle",
      "german shepherd dog",
      "poodle",
      "bulldog",
      "most popular breeds",
    ],
    "VDivider",
    [
      {
        comp: "VIcon",
        options: {
          hide: false,
          html: "mdi-dots-vertical",
        },
      },
    ],
    {
      comp: "VIcon",
      options: {
        hide: false,
        html: "mdi-card-account-phone-outline",
      },
    },
    "[[google|pink|http://www.google.com]]",
  ],
  layout_navDrawer1: {
    root: {
      comp: "VNavigationDrawer",
      hide: false,
      options: {
        props: {
          class: "ma-1 pa-1  pink--text ",
          color: "deep-purple lighten-4",
          // permanent: !true,
          "expand-on-hover": !true,
          right: !true,
          floating: true,
          width: 500,
          // app: true,
          absolute: true,
          fixed: true,
        },
      },
    },
    group: {
      comp: "VMenu",
      options: {
        class: " yellow ",
        props: {
          bottom: true,
          // top: true,
          "offset-x": true,
          // 'offset-y': true,
        },
      },
    },
    header: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 pink--text",
        style: { border: `1px dashed red`, "background-color": "#7FFFD4" },
        props: {
          //   round:true
        },
      },
      oOptions: {
        class: "ma-2 pa-2 h1",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
          color: "yellow",
        },
        props: { color: "yellow" },
      },
      aOptions: {
        class: "ma-2 pa-2 h1",
        style: {
          border: `1px dashed yellow`,
          "background-color": "red",
          color: "yellow",
        },
        props: { color: "yellow" },
      },
      activator: true,
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
    },
  },

  layout_menu: {
    root: {
      comp: "VRow",
      hide: false,
      options: {
        class: "ma-1 pa-1 red  pink--text ",
        props: {
          // color: 'deep-purple lighten-4',
          // // permanent: !true,
          // 'expand-on-hover': !true,
          // right: !true,
          // floating: true,
          // width: 500,
          // // app: true,
          // absolute: true,
          // fixed: true,
        },
      },
    },
    group: {
      comp: "VMenu",
      options: {
        class: " yellow ",
        props: {
          bottom: true,
          // top: true,
          "offset-x": true,
          // 'offset-y': true,
        },
      },
    },
    header: {
      comp: "VCard",

      options: {
        class: "ma-1 pa-1 blue pink--text",
        style: { border: `1px dashed red`, "background-color": "#7FFFD4" },
        props: {
          //   round:true
        },
      },
      oOptions: {
        class: "pa-2 h1",
        style: {
          border: `5px dashed black`,
          "background-color": "red",
          color: "yellow",
        },
        props: {
          // color:'yellow'
        },
      },

      // activator:true,
    },
    items: {
      comp: "div",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
      oOptions: {
        class: "pa-2 h1",
        style: {
          border: `5px dashed green`,
          "background-color": "yellow",
          color: "pink",
        },
        props: {
          // color:'yellow'
        },
      },
    },
  },
  listItems_menu: [
    "par1...",
    ["row1_1....", "row1_2...", "row1_3..."],
    "VSpacer",
    ["row2_1....", "row2_2...", "row2_3..."],
    ["row3_1....", "row3_2...", "row3_3..."],
    "any type except an array or any component...",
    [
      {
        comp: "li",
        options: {
          html: (that) => ({
            en: that.lg + ": wbc component",
            fr: that.lg + ": wbc composant",
          }),
        },
      },
    ],
    // () => import(/* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"),
    [
      "A Component",
      `() =>
        import(
          /* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"
        )`,
      "8888888888",
    ],
    {
      comp: "VIcon",
      options: {
        hide: false,
        html: "mdi-card-account-phone-outline",
      },
    },
    ["sfsdfsdfsdfsdfsd", 8888],
    "sssssssssss",
    [
      "[[title|h4 blue]]",
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
    ],
    [
      "[[section1|blue]]",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
    ],
    [
      "[[~section2|blue]]",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
      [5555, 6666, 7777],
      454445,
      544545,
    ],
    "bla bla bla bla ...",
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    "VSpacer",
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    "aaaaaaaaaaa",
    // 	['A Component',() => import(/* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"),'8888888888'],
    // 	['A Component',() => import(/* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"),'8888888888'],
  ],
  listItems_grid: [
    // {comp:'RouterView',options:{class:'blue'}},
    {
      en: `engliiiiiiiiiiiiiiiiiisi`,
      fr: `fransawiiiiiiiiiiii`,
      ar: `3arrrrrrrrrbi`,
    },
    "par1...",
    ["row1_1....", "row1_2...", "row1_3..."],
    ["row2_1....", "row2_2...", "row2_3..."],
    ["row3_1....", "row3_2...", "row3_3..."],
    "any type except an array or any component...",
    "[[br_aaaaaaaaaaaaaa|]]",

    ["sfsdfsdfsdfsdfsd", 8888],
    "sssssssssss",
    [
      "title|h4 blue",
      "<i>Lorem</i> <u>ipsum red dolor</u> sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos enim, cum quis cupiditate, sequi et excepturi minima, sint doloremque voluptatem reprehenderit deserunt laudantium quo? Similique nostrum ipsa enim iusto!",
    ],
    [
      "section1|blue",
      "paragrpah1_0...|green|llllll]]",
      "[[paragrpah1_1...|red__grey]]",
      "paragrpah1_2...",
      "...",
      "paragrpah1_n...",
    ],
    [
      "section2|blue",
      "paragrpah2_0...|green|llllll]]",
      "[[paragrpah2_1...|red__grey]]",
      "paragrpah2_2...",
      "...",
      "paragrpah2_p...",
      [5555, 6666, 7777],
      454445,
      544545,
    ],
    "VSpacer",
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    [545545, 45545, 454545, 4454, 4545, 45454],
    "VSpacer",
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    [4454545, 5454545, 54545],
    "aaaaaaaaaaa",
    [
      "VContainer",
      `() =>
        import(
          /* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"
        )`,
      "8888888888",
    ],
    [
      "VContainer",
      `() =>
        import(
          /* webpackChunkName:"WikiWBC" */ "../../../app/views/ui/contactView/ContactView.vue"
        )`,
      "8888888888",
    ],
  ],
  layout_grid: {
    root: {
      comp: "VRow",
      options: {
        hide: false,
        class: " red",
        props: {},
      },
    },
    group: {
      comp: "VCol",
      options: {
        class: " yellow ",
        props: {},
      },
    },
    header: {
      comp: "div",

      options: {
        class: "ma-1 pa-1 green pink--text",
        // style: { border: `1px dashed red`,'background-color': '#7FFFD4' },
        props: {
          //   round:true
        },
      },
      // activator:true
    },
    items: {
      comp: "VCard",
      options: {
        class: "grey ma-1 pa-1",
        style: {
          border: `5px dashed blue`,
          "background-color": "green",
        },
        props: {},
      },
    },
  },
  objFullOuputs: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "div",
    // output: [
    // 	'<li|grey pa-15 ma-15>',
    // 	'vProps',
    // 	'itemSrc',
    // 	'hAttrs',
    //   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
    //   "./md0.md",
    //   "aaaaaaaaa|red|dddd",
    //   "wbcSrc",
    //   "globalHtml",
    //   "main",
    // 	  "raw",
    // 	  "raw0",
    // 	'all',
    // 	'close',
    // 	'float',
    // 	'wbcProps',
    // 	'allOptions',
    // 	'gAttrs',
    // 	'htmlSrc',
    // 	'wbcSrc',
    // 	'wbcSyn',
    // ],
    // output:'aaaaaa',
    // output:'main',
    output: "./md0.md",
    // output: ['hAttrs', "main","./md0.md"],
    output: {
      a0: "hAttrs",
      ts_src_0: "./__ts0.ts",
      mp4: "./0.mp4",
      a1: "main" /* ,a2:"./md0.md" */,
    },
    output: (h) => h("li", "sssssssssssssss"),
    // output: ['all'],
    // output: 'all',
    output: {
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: "main",
      mp4: "./0.mp4",
      nested: {
        options: {
          comp: "VCard",
          class: "yellow",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-5",
            },
            a131: "MD__## Markdowncontent131  aaaaaaaaaaaaa",
            a132: "MD__- Markdown content132",
            a133: "MD__- Markdown content133",
            a134: "MD_1- Markdown content134",
            a135: "MD_2- Markdown content135",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    // 		output: [
    // 			"wbcSrc",
    // 			'mainHtml',
    // 			"raw",
    // 			"raw0",
    // 			'raw0Html',
    // 			'rawHtml',
    // 			'externalHtml',
    // 'linkHtml',
    // 'globalHtml',
    // 'menuHtml',
    // 'wrapHtml',
    // 			['<~VCard|pa-15 ma-15 blue>',"main",['<~div|yellow pa-14>',"main"],"main"],
    // 			'<li|grey pa-15 ma-15>',
    // 			// 'float',
    // 			// 'vProps',
    // 			// 'itemSrc',
    // 			'hAttrs',

    // 			// "globalHtml",
    // 			// 'all',
    // 			// 'close',
    // 			'wbcProps',
    // 			'allOptions',
    // 			'gAttrs',
    // 			'htmlSrc',
    // 			'wbcSrc',
    // 			'wbcSyn',
    // 		],
    outputtt: [
      "aaaa",
      "raw0",
      "main",
      "raw",

      // // 'mainHtmllll',
      // 'raw0Html',
      // // // "wbcSrc",
      // "raw",
      // "raw0",
      "raw0Html",

      // 'externalHtml',
      // 'linkHtml',
      // 'globalHtml',
      // 'menuHtml',
      // 'wrapHtml',
      [
        "<~VCard|pa-15 ma-15 blue>",
        "main",
        ["<~div|yellow pa-14>", "main"],
        "main",
      ],
      // '<li|grey pa-15 ma-15>',
      // // 'float',
      // // 'vProps',
      // // 'itemSrc',
      // 'hAttrs',

      // // "globalHtml",
      "all",
      // 'close',
      "wbcProps",
      "allOptions",
      "gAttrs",
      "htmlSrc",
      "wbcSrc",
      "wbcSyn",
    ],

    output: {
      options: {
        class: "grey  pa-15 ma-15",
        wrap: "li",
      },
      a0: "main",
      a00: "raw0",
      mp4: ["<VCard|yellow pa-15 ma-15>", "./0.mp4"],
      nested: {
        options: {
          comp: "VCard",
          class: "yellow  pa-15 ma-15 ",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue  pa-15 ma-15 ",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-15 ma-15",
            },
            a131: "MD__## Markdowncontent131  aaaaaaaaaaaaa",
            a132: "MD__- Markdown content132",
            a133: "MD__- Markdown content133",
            a134: "MD_1- Markdown content134",
            a135: "MD_2- Markdown content135",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    outputtt: {
      0: "raw",
      "00": "raw0",
      "000": "main",
      "01": "all",
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        "main",
        "main",
        "main",
        "main",
        "wrapHtml",
      ],

      a1: [["<~VRow>", "<VCol>", "gAttrs", "wbcProps"], "allOptions"],
      /* 
						// // 'mainHtmllll',
						// 'raw0Html',
						// // // "wbcSrc",
						// "raw",
						// "raw0",
						'raw0Html',
			
						// 'externalHtml',
						// 'linkHtml',
						// 'globalHtml',
						// 'menuHtml',
						// 'wrapHtml',
						['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
						'<li|grey pa-15 ma-15>',
						// // 'float',
						// // 'vProps',
						// // 'itemSrc',
						// 'hAttrs',
			
						// // "globalHtml",
						'all',
						// 'close',
						'wbcProps',
						'allOptions',
						'gAttrs',
						'htmlSrc',
						'wbcSrc',
						'wbcSyn', */
      // mp4: './0.mp4',
      // nested: {
      // 	options: {
      // 		comp: 'VCard',
      // 		class: 'yellow',
      // 	},
      // 	a0: 'content 0',
      // 	a1: {
      // 		options: {
      // 			comp: 'VCard',
      // 			class: 'blue',
      // 		},
      // 		a11: 'li__content 11',
      // 		a12: 'li__content 12',
      // 		a13: {
      // 			options: {
      // 				comp: 'VCard',
      // 				class: 'red pa-5',
      // 			},
      // 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
      // 			a132: 'MD__- Markdown content132',
      // 			a133: 'MD__- Markdown content133',
      // 			a134: 'MD_1- Markdown content134',
      // 			a135: 'MD_2- Markdown content135',
      // 		}
      // 	}

      // },
      // ts_src_0: './__ts0.ts'
    },
    outputtt: [[["main", "wbcProps"]]],
    outputtt: "all",
    outputtt: [
      "<VCard|grey pa-15 ma-15>",
      "main",
      "raw",
      "wbcProps",
      "globalHtml",
    ],
    outputtt: [
      "raw",
      ["<VCard|grey pa-15 ma-15>", "main", "raw", "wbcProps", "globalHtml"],
    ],

    // output: {0:'raw', 1:'wbcProps', 2:'globalHtml'},
    // output: {
    // 	0: 'raw',
    // 	'00': 'raw0',
    // 	'01': 'wbcProps'
    // },
    outputtt: (h, thiss) =>
      h("div", [
        thiss.vNodes.main,
        h("WBC", {
          props: {
            item: [
              "<VCard|grey pa-15 ma-15>",
              // 'raw', 'wbcProps',
              thiss.vNodes.mainHtml,
              thiss.vNodes.globalHtml,
              thiss.vNodes.wrapHtml,
              thiss.vNodes.rawHtml,
              thiss.vNodes.all,
              thiss.vNodes.header,
              thiss.vNodes.headers,
              thiss.vNodes.raw0,
              thiss.vNodes.main,
              thiss.vNodes.wbcProps,
            ],
          },
        }),
      ]),
    outputttt: (h, thiss) => h("div", [thiss.vNodes.all]),
    outputttt: (h, thiss) =>
      h("div", [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
      ]),
    outputtt: (h, thiss) => [
      thiss.vNodes.main,
      "<VCard|grey pa-15 ma-15>",
      "raw",
      "wbcProps",
      thiss.vNodes.mainHtml,
      thiss.vNodes.globalHtml,
      thiss.vNodes.wrapHtml,
      thiss.vNodes.rawHtml,
      thiss.vNodes.header,
      thiss.vNodes.headers,
      thiss.vNodes.raw0,
      thiss.vNodes.main,
      thiss.vNodes.wbcProps,
    ],
    outputtt: (h, thiss) =>
      h("WBC", {
        props: {
          item: {
            comp: "div",
            options: {
              load: !true,
              html: [
                "<VCard|grey pa-15 ma-15>",
                "raw",
                "wbcProps",
                thiss.vNodes.all,
                thiss.vNodes.main,
                thiss.vNodes.wbcProps,
              ],
            },
          },
        },
      }),
    output: (h, thiss) =>
      h("div", {}, [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
      ]),
    output: null,
    output: "main",
    output: "header",
    output: "all",
    output: "globalHtml",
    output: "wrapHtml",
    output: "mainHtml",
    output: "all",

    output: {
      0: "raw",
      "00": "raw0",
      "000": "main",
      "01": "all",
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        "main",
        "main",
        "main",
        "main",
        "wrapHtml",
      ],

      a1: [["<~VRow>", "<VCol>", "gAttrs", "wbcProps"], "allOptions"],

      // // 'mainHtmllll',
      // 'raw0Html',
      // // // "wbcSrc",
      // "raw",
      // "raw0",
      // 'raw0Html',

      // 'externalHtml',
      // 'linkHtml',
      // 'globalHtml',
      // 'menuHtml',
      // 'wrapHtml',
      // ['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
      // '<li|grey pa-15 ma-15>',
      // // 'float',
      // // 'vProps',
      // // 'itemSrc',
      // 'hAttrs',

      // // "globalHtml",
      // 'all',
      // // 'close',
      // 'wbcProps',
      // 'allOptions',
      // 'gAttrs',
      // 'htmlSrc',
      // 'wbcSrc',
      // 'wbcSyn',
      mp4: "./0.mp4",
      nested: {
        options: {
          comp: "VCard",
          class: "yellow",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-5",
            },
            a131: "MD__## Markdowncontent131  aaaaaaaaaaaaa",
            a132: "MD__- Markdown content132",
            a133: "MD__- Markdown content133",
            a134: "MD_1- Markdown content134",
            a135: "MD_2- Markdown content135",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },

    header: "global header",
    footer: "global footer",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: false,

      main: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },

  objAllExampleOuput: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "li",
    // output: [
    // 	'<li|grey pa-15 ma-15>',
    // 	'vProps',
    // 	'itemSrc',
    // 	'hAttrs',
    //   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
    //   "./md0.md",
    //   "aaaaaaaaa|red|dddd",
    //   "wbcSrc",
    //   "globalHtml",
    //   "main",
    // 	  "raw",
    // 	  "raw0",
    // 	'all',
    // 	'close',
    // 	'float',
    // 	'wbcProps',
    // 	'allOptions',
    // 	'gAttrs',
    // 	'htmlSrc',
    // 	'wbcSrc',
    // 	'wbcSyn',
    // ],
    // output:'aaaaaa',
    output: "main",
    output: "./md0.md",
    output: "./0.mp4",
    output: "http://study.wi-bg.com/files/sess1_reminder.pdf",
    outputtt: (h) => h("li", "sssssssssssssss"),

    // output: ['hAttrs', "main","./md0.md"],
    outputtt: {
      a0: "hAttrs",
      ts_src_0: "./__ts0.ts",
      mp4: "./0.mp4",
      a1: "main" /* ,a2:"./md0.md" */,
    },
    // output: ['all'],
    // output: 'all',
    output: {
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: "main",
      mp4: "./0.mp4",
      nested: {
        options: {
          comp: "VCard",
          class: "yellow",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-5",
            },
            a131: "MD__## Markdowncontent131  aaaaaaaaaaaaa",
            a132: "MD__- Markdown content132",
            a133: "MD__- Markdown content133",
            a134: "MD_1- Markdown content134",
            a135: "MD_2- Markdown content135",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    // 		output: [
    // 			"wbcSrc",
    // 			'mainHtml',
    // 			"raw",
    // 			"raw0",
    // 			'raw0Html',
    // 			'rawHtml',
    // 			'externalHtml',
    // 'linkHtml',
    // 'globalHtml',
    // 'menuHtml',
    // 'wrapHtml',
    // 			['<~VCard|pa-15 ma-15 blue>',"main",['<~div|yellow pa-14>',"main"],"main"],
    // 			'<li|grey pa-15 ma-15>',
    // 			// 'float',
    // 			// 'vProps',
    // 			// 'itemSrc',
    // 			'hAttrs',

    // 			// "globalHtml",
    // 			// 'all',
    // 			// 'close',
    // 			'wbcProps',
    // 			'allOptions',
    // 			'gAttrs',
    // 			'htmlSrc',
    // 			'wbcSrc',
    // 			'wbcSyn',
    // 		],
    outputttt: [
      "aaaa",
      "raw0",
      "main",
      "raw",

      // // 'mainHtmllll',
      // 'raw0Html',
      // // // "wbcSrc",
      // "raw",
      // "raw0",
      "raw0Html",

      // 'externalHtml',
      // 'linkHtml',
      // 'globalHtml',
      // 'menuHtml',
      // 'wrapHtml',
      [
        "<~VCard|pa-15 ma-15 blue>",
        "main",
        ["<~div|yellow pa-14>", "main"],
        "main",
      ],
      // '<li|grey pa-15 ma-15>',
      // // 'float',
      // // 'vProps',
      // // 'itemSrc',
      // 'hAttrs',

      // // "globalHtml",
      "all",
      // 'close',
      "wbcProps",
      "allOptions",
      "gAttrs",
      "htmlSrc",
      "wbcSrc",
      "wbcSyn",
    ],

    outputtt: {
      options: {
        class: "grey  pa-15 ma-15",
        wrap: "li",
      },
      a0: "main",
      a00: "raw0",
      a000: {
        comp: "VCard",
        header:
          "MD__# Global (markdown) header of the video|red ma-15 pa-15|google",
        footer: "h1__Global footer of the video",
        options: { class: "yellow", html: "./0.mp4" },
      },
      mp4: ["<VCard|yellow pa-15 ma-15>", "./0.mp4"],
      nested: {
        options: {
          comp: "VCard",
          class: "yellow  pa-15 ma-15 ",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue  pa-15 ma-15 ",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-15 ma-15",
            },
            a131: "MD__## Markdowncontent131  aaaaaaaaaaaaa",
            a132: "MD__- Markdown content132",
            a133: "MD__- Markdown content133",
            a134: "MD_1- Markdown content134",
            a135: "MD_2- Markdown content135",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    outputtt: {
      0: "raw",
      "00": "raw0",
      "000": "main",
      "01": "all",
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        "main",
        "main",
        "main",
        "main",
        "wrapHtml",
      ],

      a1: [["<~VRow>", "<VCol>", "gAttrs", "wbcProps"], "allOptions"],
      /* 
						// // 'mainHtmllll',
						// 'raw0Html',
						// // // "wbcSrc",
						// "raw",
						// "raw0",
						'raw0Html',
			
						// 'externalHtml',
						// 'linkHtml',
						// 'globalHtml',
						// 'menuHtml',
						// 'wrapHtml',
						['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
						'<li|grey pa-15 ma-15>',
						// // 'float',
						// // 'vProps',
						// // 'itemSrc',
						// 'hAttrs',
			
						// // "globalHtml",
						'all',
						// 'close',
						'wbcProps',
						'allOptions',
						'gAttrs',
						'htmlSrc',
						'wbcSrc',
						'wbcSyn', */
      // mp4: './0.mp4',
      // nested: {
      // 	options: {
      // 		comp: 'VCard',
      // 		class: 'yellow',
      // 	},
      // 	a0: 'content 0',
      // 	a1: {
      // 		options: {
      // 			comp: 'VCard',
      // 			class: 'blue',
      // 		},
      // 		a11: 'li__content 11',
      // 		a12: 'li__content 12',
      // 		a13: {
      // 			options: {
      // 				comp: 'VCard',
      // 				class: 'red pa-5',
      // 			},
      // 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
      // 			a132: 'MD__- Markdown content132',
      // 			a133: 'MD__- Markdown content133',
      // 			a134: 'MD_1- Markdown content134',
      // 			a135: 'MD_2- Markdown content135',
      // 		}
      // 	}

      // },
      // ts_src_0: './__ts0.ts'
    },
    outputtt: [[["main", "wbcProps"]]],
    outputtt: "all",
    outputtt: [
      "<VCard|grey pa-15 ma-15>",
      "main",
      "raw",
      "wbcProps",
      "globalHtml",
    ],
    outputtt: [
      "raw",
      ["<VCard|grey pa-15 ma-15>", "main", "raw", "wbcProps", "globalHtml"],
    ],

    // output: {0:'raw', 1:'wbcProps', 2:'globalHtml'},
    // output: {
    // 	0: 'raw',
    // 	'00': 'raw0',
    // 	'01': 'wbcProps'
    // },
    outputtt: (h, thiss) =>
      h("div", [
        thiss.vNodes.main,
        h("WBC", {
          props: {
            item: [
              "<VCard|grey pa-15 ma-15>",
              // 'raw', 'wbcProps',
              thiss.vNodes.mainHtml,
              thiss.vNodes.globalHtml,
              thiss.vNodes.wrapHtml,
              thiss.vNodes.rawHtml,
              thiss.vNodes.all,
              thiss.vNodes.header,
              thiss.vNodes.headers,
              thiss.vNodes.raw0,
              thiss.vNodes.main,
              thiss.vNodes.wbcProps,
            ],
          },
        }),
      ]),
    outputtt: (h, thiss) => h("div", [thiss.vNodes.all]),
    outputttt: (h, thiss) =>
      h("div", [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
      ]),
    outputt: (h, thiss) => [
      thiss.vNodes.main,
      "<VCard|grey pa-15 ma-15>",
      "raw",
      "wbcProps",
      thiss.vNodes.mainHtml,
      thiss.vNodes.globalHtml,
      thiss.vNodes.wrapHtml,
      thiss.vNodes.rawHtml,
      thiss.vNodes.header,
      thiss.vNodes.headers,
      thiss.vNodes.raw0,
      thiss.vNodes.main,
      thiss.vNodes.wbcProps,
    ],
    outputttt: (h, thiss) =>
      h("WBC", {
        props: {
          item: {
            comp: "div",
            options: {
              load: !true,
              html: [
                "<VCard|grey pa-15 ma-15>",
                "raw",
                "wbcProps",
                thiss.vNodes.all,
                thiss.vNodes.main,
                thiss.vNodes.wbcProps,
              ],
            },
          },
        },
      }),
    outputtt: (h, thiss) =>
      h("div", {}, [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
        // ]),
        // output:null,
        // output:'main',
        // output:'header',
        // output:'all',
        // output:'globalHtml',
        // output:'wrapHtml',
        // output:'mainHtml',
        // output: 'all',
      ]),
    outputtt: [
      "aaaaaaaaaaa",
      "hAttrs",
      "main",
      "main",
      "main",
      "main",
      "mainHtml",
      "header",
      [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        "main",
        "mainHtml",
        "main",
        "mainHtml",
        "main",
        "mainHtml",
        "main",
        "mainHtml",
      ],
      ["<~VRow>", "<VCol>", "gAttrs", "wbcProps"],
      "allOptions",
      // {
      // 	a0: 'hAttrs',
      // 	a00: 'main',
      // 	// '0000': 'raw',
      // 	a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml', 'wbcProps'

      // 	]
      // },
    ],
    outputttt: {
      a0: "hAttrs",
      a00: "main",
      a01: "mainHtml",
      "0000": "raw",
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        "main",
        "mainHtml",
        "wbcProps",
      ],
      // '00': 'raw0',
      // '000': 'main',
      // '01': 'all',
      // options: {
      // 	class: 'grey pa-15 ma-15',
      // 	wrap: 'li'
      // },

      a2: [
        [
          "<~VRow>",
          "<VCol>",
          "main",
          "main",
          "main",
          "main",
          "gAttrs",
          "wbcProps",
        ],
        "allOptions",
      ],
      // a3: 'all',

      // // 'mainHtmllll',
      // 'raw0Html',
      // // // "wbcSrc",
      // "raw",
      // "raw0",
      // 'raw0Html',

      // 'externalHtml',
      // 'linkHtml',
      // 'globalHtml',
      // 'menuHtml',
      // 'wrapHtml',
      // ['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
      // '<li|grey pa-15 ma-15>',
      // // 'float',
      // // 'vProps',
      // // 'itemSrc',
      // 'hAttrs',

      // // "globalHtml",
      // 'all',
      // // 'close',
      // 'wbcProps',
      // 'allOptions',
      // 'gAttrs',
      // 'htmlSrc',
      // 'wbcSrc',
      // 'wbcSyn',
      // mp4: './0.mp4',
      // nested: {
      // 	options: {
      // 		comp: 'VCard',
      // 		class: 'yellow',
      // 	},
      // 	a0: 'content 0',
      // 	a1: {
      // 		options: {
      // 			comp: 'VCard',
      // 			class: 'blue',
      // 		},
      // 		a11: 'li__content 11',
      // 		a12: 'li__content 12',
      // 		a13: {
      // 			options: {
      // 				comp: 'VCard',
      // 				class: 'red pa-5',
      // 			},
      // 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
      // 			a132: 'MD__- Markdown content132',
      // 			a133: 'MD__- Markdown content133',
      // 			a134: 'MD_1- Markdown content134',
      // 			a135: 'MD_2- Markdown content135',
      // 		}
      // 	}

      // },
      // ts_src_0: './__ts0.ts'
    },
    output: {
      header: "Global header|green",
      footer: "Global footer|green",
      a0: "<~VRow|red pa-15>",
      a00: "<VCol|blue pa-15>",
      a1: "ddddddddddd",
      a2: "hhhhhhhhhhh",
      a3: "http://study.wi-bg.com/files/sess1_reminder.pdf",
      options: {
        class: "green pa-14 ma-15",
        html: "sssssssssssssssssss",
        headers: ["li__G headers|yellow"],
        footers: "li__footers|yellow",
      },
    },

    output: {
      header: "Global header|green",
      footer: "Global footer|green",
      a0: "<~VTabs| container red pa-5 >",
      a00: "<VTab| pink pa-5 yellow--text>",
      a000: "ddddddddddd",
      a01: "VSpacer",
      a1: "ddddddddddd",
      a2: "hhhhhhhhhhh",
      a20: "VSpacer",
      // a200: 'VSpacer',
      a201: "sssssssssss",
      a3: "http://study.wi-bg.com/files/sess1_reminder.pdf",
      options: {
        class: "container green pa-5 ma-15",
        /* style: {height:'80%'}, */ html: "sssssssssssssssssss",
        headers: ["li__G headers|yellow"],
        footers: "li__footers|yellow",
      },
    },
    // tracker: that => {
    // 	that.data.options.class = 'yellow'
    // 	that.data.output = {
    // 		0: 'hAttrs',
    // 		'0000': 'raw',
    // 		a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "raw0", 'mainHtml',
    // 		],
    // 		// '00': 'raw0',
    // 		'000': 'main',
    // 		// '01': 'all',
    // 		options: {
    // 			class: 'grey',
    // 			wrap: 'li'
    // 		},

    // 		a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions']
    // 	},
    // },
    header: "global header",
    footer: "global footer",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: !false,

      main: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objWithOuput: {
    comp: "li",
    header: "headerrrrrrrrrr|red",
    footer: "footerrrrrrrrrr|blue",
    output: [
      "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
      "./md0.md",
      "aaaaaaaaa|red|dddd",
      "wbcSrc",
      "globalHtml",
      "main",
      "wbcProps",
    ],
    options: {
      wrap: "li",
      global: "test",
      html: "aaaaaaaaaaaaabbb",
      //   output: [
      //     "allOptions",
      //     "main",
      //     "wbcProps",
      //     "raw",
      //     "close",
      //     "vProps",
      //     "gAttrs",
      //     // "all",
      //   ],
      //   mode: "dev",
      //   all: true,
      close: true,
      //   wbcProps: true,
      gAttrs: true,
      wbcSrc: true,
      globalHtml: true,
    },
  },
  objWithSrc: {
    comp: "li",
    header: "headerrrrrrrrrr|red",
    footer: "footerrrrrrrrrr|blue",
    // output: [
    //   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
    //   "./md0.md",
    //   "aaaaaaaaa|red|dddd",
    //   "wbcSrc",
    //   "globalHtml",
    //   "main",
    //   "wbcProps",
    // ],
    options: {
      wrap: "li",
      global: "test",
      html: "aaaaaaaaaaaaabbb",
      //   output: [
      //     "allOptions",
      //     "main",
      //     "wbcProps",
      //     "raw",
      //     "close",
      //     "vProps",
      //     "gAttrs",
      //     // "all",
      //   ],
      //   mode: "dev",
      //   all: true,
      close: true,
      //   wbcProps: true,
      gAttrs: true,
      wbcSrc: true,
      globalHtml: true,
    },
  },
  objOutput0: {
    comp: "div",
    output: [
      "<li|grey pa-15 ma-15>",
      "vProps",
      "itemSrc",
      "hAttrs",
      "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
      "./md0.md",
      "aaaaaaaaa|red|dddd",
      "wbcSrc",
      "globalHtml",
      "main",
      "raw",
      "raw0",
      "all",
      "close",
      "float",
      "wbcProps",
      "allOptions",
      "gAttrs",
      "htmlSrc",
      "wbcSrc",
      "wbcSyn",
    ],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput10: {
    comp: "div",
    output: [[["main", "wbcProps"]]],

    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput11: {
    comp: "div",
    output: [
      "<VCard|grey pa-15 ma-15>",
      "main",
      "raw",
      "wbcProps",
      "globalHtml",
    ],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput12: {
    comp: "div",
    outputtt: [
      "raw",
      ["<VCard|grey pa-15 ma-15>", "main", "raw", "wbcProps", "globalHtml"],
    ],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput13: {
    comp: "div",
    output: "aaaaaa",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput14: {
    comp: "div",
    output: null,
    output: "main",
    output: "header",
    output: "all",
    output: "globalHtml",
    output: "wrapHtml",
    output: "mainHtml",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput2: {
    comp: "div",
    output: "main",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput3: {
    comp: "div",
    output: "./md0.md",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput4: {
    comp: "div",
    output: ["hAttrs", "main", "./md0.md", "allOptions"],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput5: {
    comp: "div",
    output: {
      a0: "hAttrs",
      ts_src_0: "./__ts0.ts",
      mp4: "./0.mp4",
      a1: "main" /* ,a2:"./md0.md" */,
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput6: {
    comp: "div",
    output: ["all"],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput7: {
    comp: "div",
    output: "all",
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput80: {
    comp: "div",
    output: {
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: "main",
      mp4: "./0.mp4",
      nested: {
        options: {
          comp: "VCard",
          class: "yellow",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-5",
            },
            a131: "div__# Markdown content131|yellow pa-1",
            a132: "div__- Markdown content132|yellow pa-1",
            a133: "div__- Markdown content133|yellow pa-1",
            a134: "div__1- Markdown content134|yellow pa-1",
            a135: "div__2- Markdown content135|yellow pa-1",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput8: {
    comp: "div",
    output: {
      options: {
        class: "grey",
        wrap: "li",
      },
      a0: "main",
      mp4: "./0.mp4",
      nested: {
        options: {
          comp: "VCard",
          class: "yellow",
        },
        a0: "content 0",
        a1: {
          options: {
            comp: "VCard",
            class: "blue",
          },
          a11: "li__content 11",
          a12: "li__content 12",
          a13: {
            options: {
              comp: "VCard",
              class: "red pa-5",
            },
            a131: "div__# Markdown content131|yellow pa-1",
            a132: "div__- Markdown content132|yellow pa-1",
            a133: "div__- Markdown content133|yellow pa-1",
            a134: "div__1- Markdown content134|yellow pa-1",
            a135: "div__2- Markdown content135|yellow pa-1",
          },
        },
      },
      ts_src_0: "./__ts0.ts",
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput9: {
    comp: "div",
    output: [
      [
        "<~VCard|pa-15 ma-15 blue>",
        "main",
        ["<~div|yellow pa-14>", "main"],
        "main",
      ],
      "<li|grey pa-15 ma-15>",
      // 'float',
      // 'vProps',
      // 'itemSrc',
      "hAttrs",

      "wbcSrc",
      // "globalHtml",
      // "raw",
      // "raw0",
      // 'all',
      // 'close',
      "wbcProps",
      "allOptions",
      "gAttrs",
      "htmlSrc",
      "wbcSrc",
      "wbcSyn",
    ],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput10: {
    comp: "div",
    output: (h) => h("li", "sssssssssssssss"),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput11: {
    comp: "div",
    output: (h, thiss) =>
      h("div", [
        thiss.vNodes.main,
        h("WBC", {
          props: {
            item: [
              "<VCard|grey pa-15 ma-15>",
              // 'raw', 'wbcProps',
              thiss.vNodes.mainHtml,
              thiss.vNodes.globalHtml,
              thiss.vNodes.wrapHtml,
              thiss.vNodes.rawHtml,
              thiss.vNodes.all,
              thiss.vNodes.header,
              thiss.vNodes.headers,
              thiss.vNodes.raw0,
              thiss.vNodes.main,
              thiss.vNodes.wbcProps,
            ],
          },
        }),
      ]),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput12: {
    comp: "div",
    output: (h, thiss) => h("div", [thiss.vNodes.all]),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput13: {
    comp: "div",
    output: (h, thiss) =>
      h("div", [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
      ]),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput14: {
    comp: "div",
    output: (h, thiss) => [
      thiss.vNodes.main,
      "<VCard|grey pa-15 ma-15>",
      "raw",
      "wbcProps",
      thiss.vNodes.mainHtml,
      thiss.vNodes.globalHtml,
      thiss.vNodes.wrapHtml,
      thiss.vNodes.rawHtml,
      thiss.vNodes.header,
      thiss.vNodes.headers,
      thiss.vNodes.raw0,
      thiss.vNodes.main,
      thiss.vNodes.wbcProps,
    ],
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput15: {
    comp: "div",
    output: (h, thiss) =>
      h("WBC", {
        props: {
          item: {
            comp: "div",
            options: {
              load: !true,
              html: [
                "<VCard|grey pa-15 ma-15>",
                "raw",
                "wbcProps",
                thiss.vNodes.all,
                thiss.vNodes.main,
                thiss.vNodes.wbcProps,
              ],
            },
          },
        },
      }),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput16: {
    comp: "div",
    output: (h, thiss) =>
      h("div", {}, [
        "<VCard|grey pa-15 ma-15>",
        "raw",
        "wbcProps",
        thiss.vNodes.main,
        thiss.vNodes.wbcProps,
      ]),
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput17: {
    comp: "div",
    output: {
      header: "Global header|green",
      footer: "Global footer|green",
      a0: "<~VRow|red pa-15>",
      a00: "<VCol|blue pa-15>",
      a1: "ddddddddddd",
      a2: "hhhhhhhhhhh",
      a3: "http://study.wi-bg.com/files/sess1_reminder.pdf",
      options: {
        class: "green pa-14 ma-15",
        html: "sssssssssssssssssss",
        headers: ["li__G headers|yellow"],
        footers: "li__footers|yellow",
      },
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  objOutput18: {
    comp: "div",
    output: {
      header: "Global header|green",
      footer: "Global footer|green",
      a0: "<~VTabs| container red pa-5 >",
      a00: "<VTab| pink pa-5 yellow--text>",
      a000: "ddddddddddd",
      a01: "VSpacer",
      a1: "ddddddddddd",
      a2: "hhhhhhhhhhh",
      a20: "VSpacer",
      // a200: 'VSpacer',
      a201: "sssssssssss",
      a3: "http://study.wi-bg.com/files/sess1_reminder.pdf",
      options: {
        class: "container green pa-5 ma-15",
        /* style: {height:'80%'}, */ html: "sssssssssssssssssss",
        headers: ["li__G headers|yellow"],
        footers: "li__footers|yellow",
      },
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      // mode: 'dev',
      // all:true,
      rtl: false,
      // float: !false,

      main: true,

      close: true,
      float: true,
      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      // //   mode: "dev",
      all: true,
      // // close: true,
      wbcProps: true,

      // externalHtml:true,
      // linkHtml:true,
      globalHtml: true,
      raw0Html: true,

      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      // headers: 'headersssss',
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
    },
  },
  floatObj0: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "img",
    // output: [
    // 	'<li|grey pa-15 ma-15>',
    // 	'vProps',
    // 	'itemSrc',
    // 	'hAttrs',
    //   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
    //   "./md0.md",
    //   "aaaaaaaaa|red|dddd",
    //   "wbcSrc",
    //   "globalHtml",
    //   "main",
    // 	  "raw",
    // 	  "raw0",
    // 	'all',
    // 	'close',
    // 	'float',
    // 	'wbcProps',
    // 	'allOptions',
    // 	'gAttrs',
    // 	'htmlSrc',
    // 	'wbcSrc',
    // 	'wbcSyn',
    // ],
    // output:'aaaaaa',

    output: {
      0: "main",
      a: "all",
      // // a0: 'focusOn',
      // a00: 'float',
      a001: "hAttrs",
      // a01: 'mainHtml',
      // '0000': 'raw',
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        /* "main", */ "mainHtml",
        "wbcProps",
      ],
      // // '00': 'raw0',
      // // '000': 'main',
      // // '01': 'all',
      // options: {
      // 		class: 'grey pa-15 ma-15',
      // 	wrap: 'li',
      // 	},
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: !false,
      floatOptions: {
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of main floating",
      },
      floatContent: {
        // float:null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },

      gClose: true,
      gFloat: !true,
      gFloatContent: {
        // content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },
      gFloatOptions: {
        class: "yellow pa-15",
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of global floating",
      },

      main: true,
      focusOn: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
      attrs: {
        src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        // height:99,
        // width:99,
      },
    },
  },
  floatObj1: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "img",

    output: {
      0: "main",
      a: "all",
      // // a0: 'focusOn',
      // a00: 'float',
      a001: "hAttrs",
      // a01: 'mainHtml',
      // '0000': 'raw',
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        /* "main", */ "mainHtml",
        "wbcProps",
      ],
      // // '00': 'raw0',
      // // '000': 'main',
      // // '01': 'all',
      // options: {
      // 		class: 'grey pa-15 ma-15',
      // 	wrap: 'li',
      // 	},
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: false,
      floatOptions: {
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of main floating",
      },
      floatContent: {
        // float:null,
        float: {
          comp: "~VCard",
          options: {
            class: "red",
            html: "Float layout",
          },
        },
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`

        // },
        // on: { }
      },

      gClose: true,
      gFloat: !true,
      gFloatContent: {
        // content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },
      gFloatOptions: {
        class: "yellow pa-15",
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of global floating",
      },

      main: true,
      focusOn: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
      attrs: {
        src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        // height:99,
        // width:99,
      },
    },
  },
  gFloatObj0: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "img",

    output: {
      0: "main",
      a: "all",
      // // a0: 'focusOn',
      // a00: 'float',
      a001: "hAttrs",
      // a01: 'mainHtml',
      // '0000': 'raw',
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        /* "main", */ "mainHtml",
        "wbcProps",
      ],
      // // '00': 'raw0',
      // // '000': 'main',
      // // '01': 'all',
      // options: {
      // 		class: 'grey pa-15 ma-15',
      // 	wrap: 'li',
      // 	},
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: false,
      floatOptions: {
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of main floating",
      },
      floatContent: {
        content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`

        // },
        // on: { }
      },

      gClose: true,
      gFloat: !true,
      gFloatContent: {
        // content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },
      gFloatOptions: {
        class: "yellow pa-15",
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of global floating",
      },

      main: true,
      focusOn: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
      attrs: {
        src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        // height:99,
        // width:99,
      },
    },
  },
  gFloatObj1: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "img",

    output: {
      0: "main",
      a: "all",
      // // a0: 'focusOn',
      // a00: 'float',
      a001: "hAttrs",
      // a01: 'mainHtml',
      // '0000': 'raw',
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        /* "main", */ "mainHtml",
        "wbcProps",
      ],
      // // '00': 'raw0',
      // // '000': 'main',
      // // '01': 'all',
      // options: {
      // 		class: 'grey pa-15 ma-15',
      // 	wrap: 'li',
      // 	},
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: false,
      floatOptions: {
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of main floating",
      },
      floatContent: {
        content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`

        // },
        // on: { }
      },

      gClose: true,
      gFloat: true,
      gFloatContent: {
        // content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },
      gFloatOptions: {
        class: "yellow pa-15",
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of global floating",
      },

      main: true,
      focusOn: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
      attrs: {
        src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        // height:99,
        // width:99,
      },
    },
  },
  gFloatObj1: {
    // comp: "thiss._routeParams.tag",
    // options: {
    // 	class: "red",
    // 	html: "ddddddddddddddddd",
    // },
    // {
    comp: "img",

    output: {
      0: "main",
      a: "all",
      // // a0: 'focusOn',
      // a00: 'float',
      a001: "hAttrs",
      // a01: 'mainHtml',
      // '0000': 'raw',
      a1: [
        "<~VRow|pa-15 ma-15 blue>",
        "<VCol>",
        /* "main", */ "mainHtml",
        "wbcProps",
      ],
      // // '00': 'raw0',
      // // '000': 'main',
      // // '01': 'all',
      // options: {
      // 		class: 'grey pa-15 ma-15',
      // 	wrap: 'li',
      // 	},
    },
    options: {
      key: "key-html-",
      class: "red",
      global: "html",
      mode: "dev",
      all: true,
      rtl: false,
      float: false,
      floatOptions: {
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of main floating",
      },
      floatContent: {
        content: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`

        // },
        // on: { }
      },

      gClose: true,
      gFloat: true,
      gFloatContent: {
        gcontent: null,
        // content:{
        // 	comp: '~VCard',
        // options: {
        // 	class: 'red',
        // 	html:'Float layout'
        // }, }
        // style: {
        // position: 'fixed',
        // top: '3% ',
        // left: '50%',
        // 'z-index': '10',
        // height: 'auto',
        // width: 'auto',
        // padding: '0.8%',
        // 'background-color': '#FAFAFA',
        // border: `5px dashed green`
        // },
        // on: { }
      },
      gFloatOptions: {
        class: "yellow pa-15",
        // options:{class:'yellow pa-15'}
        "0-title": "h1__title of global floating",
      },

      main: true,
      focusOn: true,
      close: true,

      itemSrc: true,
      raw: true,
      raw0: true,
      allOptions: true,
      gAttrs: true,
      hAttrs: true,
      vProps: true,
      htmlSrc: true,
      wbcSrc: true,
      wbcSyn: true,
      wbcProps: true,
      globalHtml: true,
      externalHtml: true,
      linkHtml: true,
      raw0Html: true,
      mainHtml: true,
      menuHtml: true,
      wrapHtml: true,

      wrap: "li",
      headers: "headersssss",
      hide: !true,
      load: !true,
      // 	style:{
      // 		// border: `2px dashed black `,
      // 		margin: `20px`,
      // 		padding: `20px`,
      // 		// 'background-color':'red',
      //   },
      html: (thiss) => {
        return `This is a ${thiss._routeParams.tag} tag`;
      },

      // class:"text-darken-1 ma-16 my-16",
      // disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
      footers: "inside footers",
      headers: "inside headers",
      attrs: {
        src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        // height:99,
        // width:99,
      },
    },
  },
  
  'close-gClose-float-gFloat-output0': {
		// comp: "thiss._routeParams.tag",
		// options: {
		// 	class: "red",
		// 	html: "ddddddddddddddddd",
		// },
		// {
		comp: 'img',
		// output: [
		// 	'<li|grey pa-15 ma-15>',
		// 	'vProps',
		// 	'itemSrc',
		// 	'hAttrs',
		//   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
		//   "./md0.md",
		//   "aaaaaaaaa|red|dddd",
		//   "wbcSrc",
		//   "globalHtml",
		//   "main",
		// 	  "raw",
		// 	  "raw0",
		// 	'all',
		// 	'close',
		// 	'float',
		// 	'wbcProps',
		// 	'allOptions',
		// 	'gAttrs',
		// 	'htmlSrc',
		// 	'wbcSrc',
		// 	'wbcSyn',
		// ],
		// output:'aaaaaa',
		output:'main',
		output: "./md0.md",
		output: "./0.mp4",
		output: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
		outputtt: h => h('li', 'sssssssssssssss'),


		// output: ['hAttrs', "main","./md0.md"],
		outputtt: { a0: 'hAttrs', ts_src_0: './__ts0.ts', mp4: './0.mp4', a1: "main"/* ,a2:"./md0.md" */ },
		// output: ['all'],
		// output: 'all',
		output: {
			options: {
				class: 'grey',
				wrap: 'li'
			},
			a0: "main",
			mp4: './0.mp4',
			nested: {
				options: {
					comp: 'VCard',
					class: 'yellow',
				},
				a0: 'content 0',
				a1: {
					options: {
						comp: 'VCard',
						class: 'blue',
					},
					a11: 'li__content 11',
					a12: 'li__content 12',
					a13: {
						options: {
							comp: 'VCard',
							class: 'red pa-5',
						},
						a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
						a132: 'MD__- Markdown content132',
						a133: 'MD__- Markdown content133',
						a134: 'MD_1- Markdown content134',
						a135: 'MD_2- Markdown content135',
					}
				}

			},
			ts_src_0: './__ts0.ts'
		},
		// 		output: [
		// 			"wbcSrc",
		// 			'mainHtml',
		// 			"raw",
		// 			"raw0",
		// 			'raw0Html',
		// 			'rawHtml',
		// 			'externalHtml',
		// 'linkHtml',
		// 'globalHtml',
		// 'menuHtml',
		// 'wrapHtml',
		// 			['<~VCard|pa-15 ma-15 blue>',"main",['<~div|yellow pa-14>',"main"],"main"],
		// 			'<li|grey pa-15 ma-15>',
		// 			// 'float',
		// 			// 'vProps',
		// 			// 'itemSrc',
		// 			'hAttrs',

		// 			// "globalHtml",
		// 			// 'all',
		// 			// 'close',
		// 			'wbcProps',
		// 			'allOptions',
		// 			'gAttrs',
		// 			'htmlSrc',
		// 			'wbcSrc',
		// 			'wbcSyn',
		// 		],
		outputttt: [
			'aaaa',
			'raw0',
			'main',
			'raw',

			// // 'mainHtmllll',
			// 'raw0Html',
			// // // "wbcSrc",
			// "raw",
			// "raw0",
			'raw0Html',

			// 'externalHtml',
			// 'linkHtml',
			// 'globalHtml',
			// 'menuHtml',
			// 'wrapHtml',
			['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
			// '<li|grey pa-15 ma-15>',
			// // 'float',
			// // 'vProps',
			// // 'itemSrc',
			// 'hAttrs',

			// // "globalHtml",
			'all',
			// 'close',
			'wbcProps',
			'allOptions',
			'gAttrs',
			'htmlSrc',
			'wbcSrc',
			'wbcSyn',
		],
		
		outputtt: {
			options: {
				class: 'grey  pa-15 ma-15',
				wrap: 'li'
			},
			a0: "main",
			a00: "raw0",
			a000: { comp: 'VCard', header: 'MD__# Global (markdown) header of the video|red ma-15 pa-15|google',footer: 'h1__Global footer of the video', options: { class: 'yellow', html: './0.mp4' } },
			mp4: ['<VCard|yellow pa-15 ma-15>','./0.mp4'],
			nested: {
				options: {
					comp: 'VCard',
					class: 'yellow  pa-15 ma-15 ',
				},
				a0: 'content 0',
				a1: {
					options: {
						comp: 'VCard',
						class: 'blue  pa-15 ma-15 ',
					},
					a11: 'li__content 11',
					a12: 'li__content 12',
					a13: {
						options: {
							comp: 'VCard',
							class: 'red pa-15 ma-15',
						},
						a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
						a132: 'MD__- Markdown content132',
						a133: 'MD__- Markdown content133',
						a134: 'MD_1- Markdown content134',
						a135: 'MD_2- Markdown content135',
					}
				}

			},
			ts_src_0: './__ts0.ts'
		},
		outputttt: {
			0: 'raw',
			'00': 'raw0',
			'000': 'main',
			'01': 'all',
			options: {
				class: 'grey',
				wrap: 'li'
			},
			a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", "main", "main", "main", 'wrapHtml',
			],

			a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions'],
			/* 
						// // 'mainHtmllll',
						// 'raw0Html',
						// // // "wbcSrc",
						// "raw",
						// "raw0",
						'raw0Html',
			
						// 'externalHtml',
						// 'linkHtml',
						// 'globalHtml',
						// 'menuHtml',
						// 'wrapHtml',
						['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
						'<li|grey pa-15 ma-15>',
						// // 'float',
						// // 'vProps',
						// // 'itemSrc',
						// 'hAttrs',
			
						// // "globalHtml",
						'all',
						// 'close',
						'wbcProps',
						'allOptions',
						'gAttrs',
						'htmlSrc',
						'wbcSrc',
						'wbcSyn', */
			// mp4: './0.mp4',
			// nested: {
			// 	options: {
			// 		comp: 'VCard',
			// 		class: 'yellow',
			// 	},
			// 	a0: 'content 0',
			// 	a1: {
			// 		options: {
			// 			comp: 'VCard',
			// 			class: 'blue',
			// 		},
			// 		a11: 'li__content 11',
			// 		a12: 'li__content 12',
			// 		a13: {
			// 			options: {
			// 				comp: 'VCard',
			// 				class: 'red pa-5',
			// 			},
			// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
			// 			a132: 'MD__- Markdown content132',
			// 			a133: 'MD__- Markdown content133',
			// 			a134: 'MD_1- Markdown content134',
			// 			a135: 'MD_2- Markdown content135',
			// 		}
			// 	}

			// },
			// ts_src_0: './__ts0.ts'
		},
		outputtt: [[['main', 'wbcProps']]],
		outputtt: 'all',
		outputtt: [
			'<VCard|grey pa-15 ma-15>',
			'main','raw', 'wbcProps', 'globalHtml'],
		outputtt: [
			'raw',
			[
			'<VCard|grey pa-15 ma-15>',
			'main', 'raw', 'wbcProps', 'globalHtml'
		]
		],
		
		// output: {0:'raw', 1:'wbcProps', 2:'globalHtml'},
		// output: {
		// 	0: 'raw',
		// 	'00': 'raw0',
		// 	'01': 'wbcProps'
		// },
		outputtt: (h, thiss) => h('div', [
			thiss.vNodes.main,
			h('WBC', {
			props: {
				item: [
					'<VCard|grey pa-15 ma-15>',
					// 'raw', 'wbcProps',
					thiss.vNodes.mainHtml,
					thiss.vNodes.globalHtml,
					thiss.vNodes.wrapHtml,
					thiss.vNodes.rawHtml,
					thiss.vNodes.all,
					thiss.vNodes.header,
					thiss.vNodes.headers,
					thiss.vNodes.raw0,
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				]
			}
		})]),
		outputtt: (h, thiss) => h('div', [thiss.vNodes.all]),
		outputttt: (h, thiss) => h('div',[
					'<VCard|grey pa-15 ma-15>',
					'raw', 'wbcProps',
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				]
			),
		outputt: (h, thiss) => ([
			thiss.vNodes.main,
					'<VCard|grey pa-15 ma-15>',
			'raw', 'wbcProps',
			thiss.vNodes.mainHtml,
			thiss.vNodes.globalHtml,
			thiss.vNodes.wrapHtml,
			thiss.vNodes.rawHtml,
			thiss.vNodes.header,
			thiss.vNodes.headers,
					thiss.vNodes.raw0,
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				])
			,
		outputttt: (h, thiss) =>h('WBC', {
			props: {
				item: {
					comp: 'div',
					options: {
						load:!true,
						html: [
							'<VCard|grey pa-15 ma-15>',
							'raw', 'wbcProps',
							thiss.vNodes.all,
							thiss.vNodes.main,
							thiss.vNodes.wbcProps,
						]
					}
				}
			}
		}),
		outputtt: (h, thiss) => h('div', { }, [
			'<VCard|grey pa-15 ma-15>',
			'raw', 'wbcProps',
			thiss.vNodes.main,
			thiss.vNodes.wbcProps,
		// ]),
		// output:null,
		// output:'main',
		// output:'header',
		// output:'all',
		// output:'globalHtml',
		// output:'wrapHtml',
		// output:'mainHtml',
		// output: 'all',
		]),
		outputtt: [
			'aaaaaaaaaaa',
			'hAttrs',
			"main",
			"main",
			"main",
			"main",
			'mainHtml',
			'header',
			['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml', ],
			['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions',
			// {
			// 	a0: 'hAttrs',
			// 	a00: 'main',
			// 	// '0000': 'raw',
			// 	a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml', 'wbcProps'

			// 	]
			// },
		],
		output: {
			0: 'main',
			// a: 'all',
			// // a0: 'focusOn',
			// a00: 'float',
			a001: 'hAttrs',
			a01: 'mainHtml',
			// '0000': 'raw',
			a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', /* "main", */ 'mainHtml', 'wbcProps' ],
			// // '00': 'raw0',
			// // '000': 'main',
			// // '01': 'all',
			// options: {
			// 		class: 'grey pa-15 ma-15',
			// 	wrap: 'li',
			// 	},


				
			// 	a2: [['<~VRow>', '<VCol>', /* 'main','main','main','main',  */'gAttrs', 'wbcProps'], 'allOptions'],
				// a3: 'all',
			// a3: 'all',

			

			// // 'mainHtmllll',
			// 'raw0Html',
			// // // "wbcSrc",
			// "raw",
			// "raw0",
			// 'raw0Html',

			// 'externalHtml',
			// 'linkHtml',
			// 'globalHtml',
			// 'menuHtml',
			// 'wrapHtml',
			// ['<~VCard|pa-15 ma-15 blue>', /* "main", */ ['<~div|yellow pa-14>', "main"], "main"],
			// '<li|grey pa-15 ma-15>',
			// // 'float',
			// // 'vProps',
			// // 'itemSrc',
			// 'hAttrs',

			// // "globalHtml",
			// 'all',
			// // 'close',
			// 'wbcProps',
			// 'allOptions',
			// 'gAttrs',
			// 'htmlSrc',
			// 'wbcSrc',
			// 'wbcSyn',
			// mp4: './0.mp4',
			// nested: {
			// 	options: {
			// 		comp: 'VCard',
			// 		class: 'yellow',
			// 	},
			// 	a0: 'content 0',
			// 	a1: {
			// 		options: {
			// 			comp: 'VCard',
			// 			class: 'blue',
			// 		},
			// 		a11: 'li__content 11',
			// 		a12: 'li__content 12',
			// 		a13: {
			// 			options: {
			// 				comp: 'VCard',
			// 				class: 'red pa-5',
			// 			},
			// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
			// 			a132: 'MD__- Markdown content132',
			// 			a133: 'MD__- Markdown content133',
			// 			a134: 'MD_1- Markdown content134',
			// 			a135: 'MD_2- Markdown content135',
			// 		}
			// 	}

			// },
			// ts_src_0: './__ts0.ts'
		},
		outputtt: {
			header: 'Global header|green', footer: 'Global footer|green',
			a0:'<~VRow|red pa-15>',
			a00:'<VCol|blue pa-15>',
			a1:'ddddddddddd',
			a2: 'hhhhhhhhhhh',
			a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
			options: { class:'green pa-14 ma-15',html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers:'li__footers|yellow'},
		},
		
		outputtt: {
			header: 'Global header|green', footer: 'Global footer|green',
			a0: '<~VTabs| container red pa-5 >',
			a00: '<VTab| pink pa-5 yellow--text>',
			a000: 'ddddddddddd',
			a01: 'VSpacer',
			a1: 'ddddddddddd',
			a2: 'hhhhhhhhhhh',
			a20: 'VSpacer',
			// a200: 'VSpacer',
			a201: 'sssssssssss',
			a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
			options: { class: 'container green pa-5 ma-15', /* style: {height:'80%'}, */ html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers: 'li__footers|yellow' },
		},
		// tracker: that => {
		// 	that.data.options.class = 'yellow'
		// 	that.data.output = {
		// 		0: 'hAttrs',
		// 		'0000': 'raw',
		// 		a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "raw0", 'mainHtml',
		// 		],
		// 		// '00': 'raw0',
		// 		'000': 'main',
		// 		// '01': 'all',
		// 		options: {
		// 			class: 'grey',
		// 			wrap: 'li'
		// 		},


		// 		a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions']
		// 	},
		// },
		// output:null,
		header:'global header',
		footer:'global footer',
		options: {
			key:'key-html-',
			class:'red',
			global:'html',
			mode: 'dev',
			all:true,
			rtl: false,
			float: false,
			float: !false,
			// float: null,
			floatOptions: {
				// options:{class:'yellow pa-15'}
				'0-title':'h1__title of main floating|black white-text'
			},
			floatContent: {
				// content:null,
				// content:{
				// 	comp: '~VCard',
				// options: {
				// 	class: 'red',
				// 	html:'Float layout'
				// }, }
				// style: {
					// position: 'fixed',
					// top: '3% ',
					// left: '50%',
					// 'z-index': '10',
					// height: 'auto',
					// width: 'auto',
					// padding: '0.8%',
					// 'background-color': '#FAFAFA',
					// border: `5px dashed green` 

				// },
				// on: { }
			},

			gClose: !true,
			gClose: true,
			// gClose: null,
			gFloat: true,
			gFloatContent: {
				options: {
					class: 'red',
					html: 'Float layout'
				},
				// content: null,
				// content:{
				// 	comp: '~VCard',
				// options: {
				// 	class: 'red',
				// 	html:'Float layout'
				// }, }
				// style: {
				// position: 'fixed',
				// top: '3% ',
				// left: '50%',
				// 'z-index': '10',
				// height: 'auto',
				// width: 'auto',
				// padding: '0.8%',
				// 'background-color': '#FAFAFA',
				// border: `5px dashed green` 

				// },
				// on: { }
			},
			gFloatOptions: {
				class: 'yellow pa-15',
				// options:{class:'yellow pa-15'}
				'0-title': 'h1__title of global floating'
			},

			main: true,
			focusOn: true,

			close: !true,
			close: null,
			close: true,
			closeOptions: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				// html: 'ssssss',
				// content:'override close'
			},
			

			itemSrc: true,
			raw: true,
			raw0: true,
			allOptions: true,
			gAttrs: true,
			hAttrs: true,
			vProps: true,
			htmlSrc: true,
			wbcSrc: true,
			wbcSyn: true,
			wbcProps: true,
			globalHtml: true,
			externalHtml:true,
			linkHtml:true,
			raw0Html:true,
			mainHtml:true,
			menuHtml:true,
			wrapHtml:true,
			
			wrap: 'li',
			headers: 'headersssss',
			hide:!true,
			load:!true,
			// 	style:{
				// 		// border: `2px dashed black `,
				// 		margin: `20px`,
				// 		padding: `20px`,
				// 		// 'background-color':'red',
				//   },
			html: thiss => {
				return `This is a ${thiss._routeParams.tag} tag`
			},
			
			// class:"text-darken-1 ma-16 my-16",
			// disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
			footers:'inside footers',
			headers: 'inside headers',
			attrs: {
				src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
				// height:99,
				// width:99,
			}
		},



		},
    'close-gClose-float-gFloat-output1': {
		// comp: "thiss._routeParams.tag",
		// options: {
		// 	class: "red",
		// 	html: "ddddddddddddddddd",
		// },
		// {
		comp: 'img',
		// output: [
		// 	'<li|grey pa-15 ma-15>',
		// 	'vProps',
		// 	'itemSrc',
		// 	'hAttrs',
		//   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
		//   "./md0.md",
		//   "aaaaaaaaa|red|dddd",
		//   "wbcSrc",
		//   "globalHtml",
		//   "main",
		// 	  "raw",
		// 	  "raw0",
		// 	'all',
		// 	'close',
		// 	'float',
		// 	'wbcProps',
		// 	'allOptions',
		// 	'gAttrs',
		// 	'htmlSrc',
		// 	'wbcSrc',
		// 	'wbcSyn',
		// ],
		// output:'aaaaaa',
		output:'main',
		output: "./md0.md",
		output: "./0.mp4",
		output: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
		outputtt: h => h('li', 'sssssssssssssss'),


		// output: ['hAttrs', "main","./md0.md"],
		outputtt: { a0: 'hAttrs', ts_src_0: './__ts0.ts', mp4: './0.mp4', a1: "main"/* ,a2:"./md0.md" */ },
		// output: ['all'],
		// output: 'all',
		output: {
			options: {
				class: 'grey',
				wrap: 'li'
			},
			a0: "main",
			mp4: './0.mp4',
			nested: {
				options: {
					comp: 'VCard',
					class: 'yellow',
				},
				a0: 'content 0',
				a1: {
					options: {
						comp: 'VCard',
						class: 'blue',
					},
					a11: 'li__content 11',
					a12: 'li__content 12',
					a13: {
						options: {
							comp: 'VCard',
							class: 'red pa-5',
						},
						a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
						a132: 'MD__- Markdown content132',
						a133: 'MD__- Markdown content133',
						a134: 'MD_1- Markdown content134',
						a135: 'MD_2- Markdown content135',
					}
				}

			},
			ts_src_0: './__ts0.ts'
		},
		// 		output: [
		// 			"wbcSrc",
		// 			'mainHtml',
		// 			"raw",
		// 			"raw0",
		// 			'raw0Html',
		// 			'rawHtml',
		// 			'externalHtml',
		// 'linkHtml',
		// 'globalHtml',
		// 'menuHtml',
		// 'wrapHtml',
		// 			['<~VCard|pa-15 ma-15 blue>',"main",['<~div|yellow pa-14>',"main"],"main"],
		// 			'<li|grey pa-15 ma-15>',
		// 			// 'float',
		// 			// 'vProps',
		// 			// 'itemSrc',
		// 			'hAttrs',

		// 			// "globalHtml",
		// 			// 'all',
		// 			// 'close',
		// 			'wbcProps',
		// 			'allOptions',
		// 			'gAttrs',
		// 			'htmlSrc',
		// 			'wbcSrc',
		// 			'wbcSyn',
		// 		],
		outputttt: [
			'aaaa',
			'raw0',
			'main',
			'raw',

			// // 'mainHtmllll',
			// 'raw0Html',
			// // // "wbcSrc",
			// "raw",
			// "raw0",
			'raw0Html',

			// 'externalHtml',
			// 'linkHtml',
			// 'globalHtml',
			// 'menuHtml',
			// 'wrapHtml',
			['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
			// '<li|grey pa-15 ma-15>',
			// // 'float',
			// // 'vProps',
			// // 'itemSrc',
			// 'hAttrs',

			// // "globalHtml",
			'all',
			// 'close',
			'wbcProps',
			'allOptions',
			'gAttrs',
			'htmlSrc',
			'wbcSrc',
			'wbcSyn',
		],
		
		outputtt: {
			options: {
				class: 'grey  pa-15 ma-15',
				wrap: 'li'
			},
			a0: "main",
			a00: "raw0",
			a000: { comp: 'VCard', header: 'MD__# Global (markdown) header of the video|red ma-15 pa-15|google',footer: 'h1__Global footer of the video', options: { class: 'yellow', html: './0.mp4' } },
			mp4: ['<VCard|yellow pa-15 ma-15>','./0.mp4'],
			nested: {
				options: {
					comp: 'VCard',
					class: 'yellow  pa-15 ma-15 ',
				},
				a0: 'content 0',
				a1: {
					options: {
						comp: 'VCard',
						class: 'blue  pa-15 ma-15 ',
					},
					a11: 'li__content 11',
					a12: 'li__content 12',
					a13: {
						options: {
							comp: 'VCard',
							class: 'red pa-15 ma-15',
						},
						a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
						a132: 'MD__- Markdown content132',
						a133: 'MD__- Markdown content133',
						a134: 'MD_1- Markdown content134',
						a135: 'MD_2- Markdown content135',
					}
				}

			},
			ts_src_0: './__ts0.ts'
		},
		outputttt: {
			0: 'raw',
			'00': 'raw0',
			'000': 'main',
			'01': 'all',
			options: {
				class: 'grey',
				wrap: 'li'
			},
			a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", "main", "main", "main", 'wrapHtml',
			],

			a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions'],
			/* 
						// // 'mainHtmllll',
						// 'raw0Html',
						// // // "wbcSrc",
						// "raw",
						// "raw0",
						'raw0Html',
			
						// 'externalHtml',
						// 'linkHtml',
						// 'globalHtml',
						// 'menuHtml',
						// 'wrapHtml',
						['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
						'<li|grey pa-15 ma-15>',
						// // 'float',
						// // 'vProps',
						// // 'itemSrc',
						// 'hAttrs',
			
						// // "globalHtml",
						'all',
						// 'close',
						'wbcProps',
						'allOptions',
						'gAttrs',
						'htmlSrc',
						'wbcSrc',
						'wbcSyn', */
			// mp4: './0.mp4',
			// nested: {
			// 	options: {
			// 		comp: 'VCard',
			// 		class: 'yellow',
			// 	},
			// 	a0: 'content 0',
			// 	a1: {
			// 		options: {
			// 			comp: 'VCard',
			// 			class: 'blue',
			// 		},
			// 		a11: 'li__content 11',
			// 		a12: 'li__content 12',
			// 		a13: {
			// 			options: {
			// 				comp: 'VCard',
			// 				class: 'red pa-5',
			// 			},
			// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
			// 			a132: 'MD__- Markdown content132',
			// 			a133: 'MD__- Markdown content133',
			// 			a134: 'MD_1- Markdown content134',
			// 			a135: 'MD_2- Markdown content135',
			// 		}
			// 	}

			// },
			// ts_src_0: './__ts0.ts'
		},
		outputtt: [[['main', 'wbcProps']]],
		outputtt: 'all',
		outputtt: [
			'<VCard|grey pa-15 ma-15>',
			'main','raw', 'wbcProps', 'globalHtml'],
		outputtt: [
			'raw',
			[
			'<VCard|grey pa-15 ma-15>',
			'main', 'raw', 'wbcProps', 'globalHtml'
		]
		],
		
		// output: {0:'raw', 1:'wbcProps', 2:'globalHtml'},
		// output: {
		// 	0: 'raw',
		// 	'00': 'raw0',
		// 	'01': 'wbcProps'
		// },
		outputtt: (h, thiss) => h('div', [
			thiss.vNodes.main,
			h('WBC', {
			props: {
				item: [
					'<VCard|grey pa-15 ma-15>',
					// 'raw', 'wbcProps',
					thiss.vNodes.mainHtml,
					thiss.vNodes.globalHtml,
					thiss.vNodes.wrapHtml,
					thiss.vNodes.rawHtml,
					thiss.vNodes.all,
					thiss.vNodes.header,
					thiss.vNodes.headers,
					thiss.vNodes.raw0,
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				]
			}
		})]),
		outputtt: (h, thiss) => h('div', [thiss.vNodes.all]),
		outputttt: (h, thiss) => h('div',[
					'<VCard|grey pa-15 ma-15>',
					'raw', 'wbcProps',
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				]
			),
		outputt: (h, thiss) => ([
			thiss.vNodes.main,
					'<VCard|grey pa-15 ma-15>',
			'raw', 'wbcProps',
			thiss.vNodes.mainHtml,
			thiss.vNodes.globalHtml,
			thiss.vNodes.wrapHtml,
			thiss.vNodes.rawHtml,
			thiss.vNodes.header,
			thiss.vNodes.headers,
					thiss.vNodes.raw0,
					thiss.vNodes.main,
					thiss.vNodes.wbcProps,
				])
			,
		outputttt: (h, thiss) =>h('WBC', {
			props: {
				item: {
					comp: 'div',
					options: {
						load:!true,
						html: [
							'<VCard|grey pa-15 ma-15>',
							'raw', 'wbcProps',
							thiss.vNodes.all,
							thiss.vNodes.main,
							thiss.vNodes.wbcProps,
						]
					}
				}
			}
		}),
		outputtt: (h, thiss) => h('div', { }, [
			'<VCard|grey pa-15 ma-15>',
			'raw', 'wbcProps',
			thiss.vNodes.main,
			thiss.vNodes.wbcProps,
		// ]),
		// output:null,
		// output:'main',
		// output:'header',
		// output:'all',
		// output:'globalHtml',
		// output:'wrapHtml',
		// output:'mainHtml',
		// output: 'all',
		]),
		outputtt: [
			'aaaaaaaaaaa',
			'hAttrs',
			"main",
			"main",
			"main",
			"main",
			'mainHtml',
			'header',
			['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml', ],
			['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions',
			// {
			// 	a0: 'hAttrs',
			// 	a00: 'main',
			// 	// '0000': 'raw',
			// 	a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml', 'wbcProps'

			// 	]
			// },
		],
		output: {
			0: 'main',
			// a: 'all',
			// // a0: 'focusOn',
			// a00: 'float',
			a001: 'hAttrs',
			a01: 'mainHtml',
			// '0000': 'raw',
			a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', /* "main", */ 'mainHtml', 'wbcProps' ],
			// // '00': 'raw0',
			// // '000': 'main',
			// // '01': 'all',
			// options: {
			// 		class: 'grey pa-15 ma-15',
			// 	wrap: 'li',
			// 	},


				
			// 	a2: [['<~VRow>', '<VCol>', /* 'main','main','main','main',  */'gAttrs', 'wbcProps'], 'allOptions'],
				// a3: 'all',
			// a3: 'all',

			

			// // 'mainHtmllll',
			// 'raw0Html',
			// // // "wbcSrc",
			// "raw",
			// "raw0",
			// 'raw0Html',

			// 'externalHtml',
			// 'linkHtml',
			// 'globalHtml',
			// 'menuHtml',
			// 'wrapHtml',
			// ['<~VCard|pa-15 ma-15 blue>', /* "main", */ ['<~div|yellow pa-14>', "main"], "main"],
			// '<li|grey pa-15 ma-15>',
			// // 'float',
			// // 'vProps',
			// // 'itemSrc',
			// 'hAttrs',

			// // "globalHtml",
			// 'all',
			// // 'close',
			// 'wbcProps',
			// 'allOptions',
			// 'gAttrs',
			// 'htmlSrc',
			// 'wbcSrc',
			// 'wbcSyn',
			// mp4: './0.mp4',
			// nested: {
			// 	options: {
			// 		comp: 'VCard',
			// 		class: 'yellow',
			// 	},
			// 	a0: 'content 0',
			// 	a1: {
			// 		options: {
			// 			comp: 'VCard',
			// 			class: 'blue',
			// 		},
			// 		a11: 'li__content 11',
			// 		a12: 'li__content 12',
			// 		a13: {
			// 			options: {
			// 				comp: 'VCard',
			// 				class: 'red pa-5',
			// 			},
			// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
			// 			a132: 'MD__- Markdown content132',
			// 			a133: 'MD__- Markdown content133',
			// 			a134: 'MD_1- Markdown content134',
			// 			a135: 'MD_2- Markdown content135',
			// 		}
			// 	}

			// },
			// ts_src_0: './__ts0.ts'
		},
		outputtt: {
			header: 'Global header|green', footer: 'Global footer|green',
			a0:'<~VRow|red pa-15>',
			a00:'<VCol|blue pa-15>',
			a1:'ddddddddddd',
			a2: 'hhhhhhhhhhh',
			a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
			options: { class:'green pa-14 ma-15',html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers:'li__footers|yellow'},
		},
		
		outputtt: {
			header: 'Global header|green', footer: 'Global footer|green',
			a0: '<~VTabs| container red pa-5 >',
			a00: '<VTab| pink pa-5 yellow--text>',
			a000: 'ddddddddddd',
			a01: 'VSpacer',
			a1: 'ddddddddddd',
			a2: 'hhhhhhhhhhh',
			a20: 'VSpacer',
			// a200: 'VSpacer',
			a201: 'sssssssssss',
			a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
			options: { class: 'container green pa-5 ma-15', /* style: {height:'80%'}, */ html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers: 'li__footers|yellow' },
		},
		// tracker: that => {
		// 	that.data.options.class = 'yellow'
		// 	that.data.output = {
		// 		0: 'hAttrs',
		// 		'0000': 'raw',
		// 		a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "raw0", 'mainHtml',
		// 		],
		// 		// '00': 'raw0',
		// 		'000': 'main',
		// 		// '01': 'all',
		// 		options: {
		// 			class: 'grey',
		// 			wrap: 'li'
		// 		},


		// 		a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions']
		// 	},
		// },
		// output:null,
		header:'global header',
		footer:'global footer',
		options: {
			key:'key-html-',
			class:'red',
			global:'html',
			mode: 'dev',
			all:true,
			rtl: false,
			float: false,
			float: !false,
			// float: null,
			floatOptions: {
				// options:{class:'yellow pa-15'}
				'0-title':'h1__title of main floating|black white-text'
			},
			floatContent: {
				// content:null,
				// content:{
				// 	comp: '~VCard',
				// options: {
				// 	class: 'red',
				// 	html:'Float layout'
				// }, }
				// style: {
					// position: 'fixed',
					// top: '3% ',
					// left: '50%',
					// 'z-index': '10',
					// height: 'auto',
					// width: 'auto',
					// padding: '0.8%',
					// 'background-color': '#FAFAFA',
					// border: `5px dashed green` 

				// },
				// on: { }
			},

			gClose: !true,
			gClose: true,
			// gClose: null,
			gFloat: true,
			gFloatContent: {
				options: {
					class: 'red',
					html: 'Float layout'
				},
				// content: null,
				// content:{
				// 	comp: '~VCard',
				// options: {
				// 	class: 'red',
				// 	html:'Float layout'
				// }, }
				// style: {
				// position: 'fixed',
				// top: '3% ',
				// left: '50%',
				// 'z-index': '10',
				// height: 'auto',
				// width: 'auto',
				// padding: '0.8%',
				// 'background-color': '#FAFAFA',
				// border: `5px dashed green` 

				// },
				// on: { }
			},
			gFloatOptions: {
				class: 'yellow pa-15',
				// options:{class:'yellow pa-15'}
				'0-title': 'h1__title of global floating'
			},

			main: true,
			focusOn: true,

			close: !true,
			close: null,
			close: true,
			closeOptions: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				// html: 'ssssss',
				// content:'override close'
			},
			

			itemSrc: true,
			raw: true,
			raw0: true,
			allOptions: true,
			gAttrs: true,
			hAttrs: true,
			vProps: true,
			htmlSrc: true,
			wbcSrc: true,
			wbcSyn: true,
			wbcProps: true,
			globalHtml: true,
			externalHtml:true,
			linkHtml:true,
			raw0Html:true,
			mainHtml:true,
			menuHtml:true,
			wrapHtml:true,
			
			wrap: 'li',
			headers: 'headersssss',
			hide:!true,
			load:!true,
			// 	style:{
				// 		// border: `2px dashed black `,
				// 		margin: `20px`,
				// 		padding: `20px`,
				// 		// 'background-color':'red',
				//   },
			html: thiss => {
				return `This is a ${thiss._routeParams.tag} tag`
			},
			
			// class:"text-darken-1 ma-16 my-16",
			// disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
			footers:'inside footers',
			headers: 'inside headers',
			attrs: {
				src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
				// height:99,
				// width:99,
			}
		},



		},
    'close-gClose-float-gFloat-output2':{
		// // comp: "thiss._routeParams.tag",
		// // options: {
		// // 	class: "red",
		// // 	html: "ddddddddddddddddd",
		// // },
		// // {
		// comp: 'img',
		comp: _thiss => _thiss._routeParams.tag,
		// // output: [
		// // 	'<li|grey pa-15 ma-15>',
		// // 	'vProps',
		// // 	'itemSrc',
		// // 	'hAttrs',
		// //   "https://www.pmu.fr/back-assets/hippique/casaques/11072020/R1/C1/P1.png",
		// //   "./md0.md",
		// //   "aaaaaaaaa|red|dddd",
		// //   "wbcSrc",
		// //   "globalHtml",
		// //   "main",
		// // 	  "raw",
		// // 	  "raw0",
		// // 	'all',
		// // 	'close',
		// // 	'float',
		// // 	'wbcProps',
		// // 	'allOptions',
		// // 	'gAttrs',
		// // 	'htmlSrc',
		// // 	'wbcSrc',
		// // 	'wbcSyn',
		// // ],
		// // output:'aaaaaa',
		// output:'main',
		// output: "./md0.md",
		// output: "./0.mp4",
		// output: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
		// outputtt: h => h('li', 'sssssssssssssss'),


		// // output: ['hAttrs', "main","./md0.md"],
		// outputtt: { a0: 'hAttrs', ts_src_0: './__ts0.ts', mp4: './0.mp4', a1: "main"/* ,a2:"./md0.md" */ },
		// // output: ['all'],
		// // output: 'all',
		// output: {
		// 	options: {
		// 		class: 'grey',
		// 		wrap: 'li'
		// 	},
		// 	a0: "main",
		// 	mp4: './0.mp4',
		// 	nested: {
		// 		options: {
		// 			comp: 'VCard',
		// 			class: 'yellow',
		// 		},
		// 		a0: 'content 0',
		// 		a1: {
		// 			options: {
		// 				comp: 'VCard',
		// 				class: 'blue',
		// 			},
		// 			a11: 'li__content 11',
		// 			a12: 'li__content 12',
		// 			a13: {
		// 				options: {
		// 					comp: 'VCard',
		// 					class: 'red pa-5',
		// 				},
		// 				a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
		// 				a132: 'MD__- Markdown content132',
		// 				a133: 'MD__- Markdown content133',
		// 				a134: 'MD_1- Markdown content134',
		// 				a135: 'MD_2- Markdown content135',
		// 			}
		// 		}

		// 	},
		// 	ts_src_0: './__ts0.ts'
		// },
		// // 		output: [
		// // 			"wbcSrc",
		// // 			'mainHtml',
		// // 			"raw",
		// // 			"raw0",
		// // 			'raw0Html',
		// // 			'rawHtml',
		// // 			'externalHtml',
		// // 'linkHtml',
		// // 'globalHtml',
		// // 'menuHtml',
		// // 'wrapHtml',
		// // 			['<~VCard|pa-15 ma-15 blue>',"main",['<~div|yellow pa-14>',"main"],"main"],
		// // 			'<li|grey pa-15 ma-15>',
		// // 			// 'float',
		// // 			// 'vProps',
		// // 			// 'itemSrc',
		// // 			'hAttrs',

		// // 			// "globalHtml",
		// // 			// 'all',
		// // 			// 'close',
		// // 			'wbcProps',
		// // 			'allOptions',
		// // 			'gAttrs',
		// // 			'htmlSrc',
		// // 			'wbcSrc',
		// // 			'wbcSyn',
		// // 		],
		// outputttt: [
		// 	'aaaa',
		// 	'raw0',
		// 	'main',
		// 	'raw',

		// 	// // 'mainHtmllll',
		// 	// 'raw0Html',
		// 	// // // "wbcSrc",
		// 	// "raw",
		// 	// "raw0",
		// 	'raw0Html',

		// 	// 'externalHtml',
		// 	// 'linkHtml',
		// 	// 'globalHtml',
		// 	// 'menuHtml',
		// 	// 'wrapHtml',
		// 	['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
		// 	// '<li|grey pa-15 ma-15>',
		// 	// // 'float',
		// 	// // 'vProps',
		// 	// // 'itemSrc',
		// 	// 'hAttrs',

		// 	// // "globalHtml",
		// 	'all',
		// 	// 'close',
		// 	'wbcProps',
		// 	'allOptions',
		// 	'gAttrs',
		// 	'htmlSrc',
		// 	'wbcSrc',
		// 	'wbcSyn',
		// ],
		
		// outputtt: {
		// 	options: {
		// 		class: 'grey  pa-15 ma-15',
		// 		wrap: 'li'
		// 	},
		// 	a0: "main",
		// 	a00: "raw0",
		// 	a000: { comp: 'VCard', header: 'MD__# Global (markdown) header of the video|red ma-15 pa-15|google',footer: 'h1__Global footer of the video', options: { class: 'yellow', html: './0.mp4' } },
		// 	mp4: ['<VCard|yellow pa-15 ma-15>','./0.mp4'],
		// 	nested: {
		// 		options: {
		// 			comp: 'VCard',
		// 			class: 'yellow  pa-15 ma-15 ',
		// 		},
		// 		a0: 'content 0',
		// 		a1: {
		// 			options: {
		// 				comp: 'VCard',
		// 				class: 'blue  pa-15 ma-15 ',
		// 			},
		// 			a11: 'li__content 11',
		// 			a12: 'li__content 12',
		// 			a13: {
		// 				options: {
		// 					comp: 'VCard',
		// 					class: 'red pa-15 ma-15',
		// 				},
		// 				a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
		// 				a132: 'MD__- Markdown content132',
		// 				a133: 'MD__- Markdown content133',
		// 				a134: 'MD_1- Markdown content134',
		// 				a135: 'MD_2- Markdown content135',
		// 			}
		// 		}

		// 	},
		// 	ts_src_0: './__ts0.ts'
		// },
		output: {
			// 'a00': 'itemSrc',
			'a001': 'main',
			'z01': 'all',
			options: {
				// class: 'grey',
				wrap: 'li'
			},
			'a0020':'hAttrs',
			'a0021': 'gAttrs',
			
			a003: ['<~VRow|pa-15 ma-15 >', '<VCol>', "raw", 'mainHtml',
			],
			// 'a0031':'mainHtml',

			a004: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions'],
			a005:'htmlSrc',
			a006:'wbcSyn',

			/* 
						// // 'mainHtmllll',
						// 'raw0Html',
						// // // "wbcSrc",
						// "raw",
						// "raw0",
						'raw0Html',
			
						// 'externalHtml',
						// 'linkHtml',
						// 'globalHtml',
						// 'menuHtml',
						// 'wrapHtml',
						['<~VCard|pa-15 ma-15 blue>', "main", ['<~div|yellow pa-14>', "main"], "main"],
						'<li|grey pa-15 ma-15>',
						// // 'float',
						// // 'vProps',
						// // 'itemSrc',
						// 'hAttrs',
			
						// // "globalHtml",
						'all',
						// 'close',
						'wbcProps',
						'allOptions',
						'gAttrs',
						'htmlSrc',
						'wbcSrc',
						'wbcSyn', */
			// mp4: './0.mp4',
			// nested: {
			// 	options: {
			// 		comp: 'VCard',
			// 		class: 'yellow',
			// 	},
			// 	a0: 'content 0',
			// 	a1: {
			// 		options: {
			// 			comp: 'VCard',
			// 			class: 'blue',
			// 		},
			// 		a11: 'li__content 11',
			// 		a12: 'li__content 12',
			// 		a13: {
			// 			options: {
			// 				comp: 'VCard',
			// 				class: 'red pa-5',
			// 			},
			// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
			// 			a132: 'MD__- Markdown content132',
			// 			a133: 'MD__- Markdown content133',
			// 			a134: 'MD_1- Markdown content134',
			// 			a135: 'MD_2- Markdown content135',
			// 		}
			// 	}

			// },
			// ts_src_0: './__ts0.ts'
		},
		// outputtt: [[['main', 'wbcProps']]],
		// outputtt: 'all',
		// outputtt: [
		// 	'<VCard|grey pa-15 ma-15>',
		// 	'main','raw', 'wbcProps', 'globalHtml'],
		// outputtt: [
		// 	'raw',
		// 	[
		// 	'<VCard|grey pa-15 ma-15>',
		// 	'main', 'raw', 'wbcProps', 'globalHtml'
		// ]
		// ],
		
		// // output: {0:'raw', 1:'wbcProps', 2:'globalHtml'},
		// // output: {
		// // 	0: 'raw',
		// // 	'00': 'raw0',
		// // 	'01': 'wbcProps'
		// // },
		// outputtt: (h, thiss) => h('div', [
		// 	thiss.vNodes.main,
		// 	h('WBC', {
		// 	props: {
		// 		item: [
		// 			'<VCard|grey pa-15 ma-15>',
		// 			// 'raw', 'wbcProps',
		// 			thiss.vNodes.mainHtml,
		// 			thiss.vNodes.globalHtml,
		// 			thiss.vNodes.wrapHtml,
		// 			thiss.vNodes.rawHtml,
		// 			thiss.vNodes.all,
		// 			thiss.vNodes.header,
		// 			thiss.vNodes.headers,
		// 			thiss.vNodes.raw0,
		// 			thiss.vNodes.main,
		// 			thiss.vNodes.wbcProps,
		// 		]
		// 	}
		// })]),
		// outputtt: (h, thiss) => h('div', [thiss.vNodes.all]),
		// outputttt: (h, thiss) => h('div',[
		// 			'<VCard|grey pa-15 ma-15>',
		// 			'raw', 'wbcProps',
		// 			thiss.vNodes.main,
		// 			thiss.vNodes.wbcProps,
		// 		]
		// 	),
		// outputt: (h, thiss) => ([
		// 	thiss.vNodes.main,
		// 			'<VCard|grey pa-15 ma-15>',
		// 	'raw', 'wbcProps',
		// 	thiss.vNodes.mainHtml,
		// 	thiss.vNodes.globalHtml,
		// 	thiss.vNodes.wrapHtml,
		// 	thiss.vNodes.rawHtml,
		// 	thiss.vNodes.header,
		// 	thiss.vNodes.headers,
		// 			thiss.vNodes.raw0,
		// 			thiss.vNodes.main,
		// 			thiss.vNodes.wbcProps,
		// 		])
		// 	,
		// outputttt: (h, thiss) =>h('WBC', {
		// 	props: {
		// 		item: {
		// 			comp: 'div',
		// 			options: {
		// 				load:!true,
		// 				html: [
		// 					'<VCard|grey pa-15 ma-15>',
		// 					'raw', 'wbcProps',
		// 					thiss.vNodes.all,
		// 					thiss.vNodes.main,
		// 					thiss.vNodes.wbcProps,
		// 				]
		// 			}
		// 		}
		// 	}
		// }),
		// outputtt: (h, thiss) => h('div', { }, [
		// 	'<VCard|grey pa-15 ma-15>',
		// 	'raw', 'wbcProps',
		// 	thiss.vNodes.main,
		// 	thiss.vNodes.wbcProps,
		// // ]),
		// // output:null,
		// // output:'main',
		// // output:'header',
		// // output:'all',
		// // output:'globalHtml',
		// // output:'wrapHtml',
		// // output:'mainHtml',
		// // output: 'all',
		// ]),
		// outputtt: [
		// 	'aaaaaaaaaaa',
		// 	'hAttrs',
		// 	"main",
		// 	"main",
		// 	"main",
		// 	"main",
		// 	'mainHtml',
		// 	'header',
		// 	['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml',"main", 'mainHtml', ],
		// 	['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions',
		// 	// {
		// 	// 	a0: 'hAttrs',
		// 	// 	a00: 'main',
		// 	// 	// '0000': 'raw',
		// 	// 	a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "main", 'mainHtml', 'wbcProps'

		// 	// 	]
		// 	// },
		// ],
		// output: {
		// 	0: 'main',
		// 	a: 'all',
		// 	// // a0: 'focusOn',
		// 	// a00: 'float',
		// 	a001: 'hAttrs',
		// 	a01: 'mainHtml',
		// 	// '0000': 'raw',
		// 	a1: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', /* "main", */ 'mainHtml', 'wbcProps' ],
		// 	// // '00': 'raw0',
		// 	// // '000': 'main',
		// 	// // '01': 'all',
		// 	// options: {
		// 	// 		class: 'grey pa-15 ma-15',
		// 	// 	wrap: 'li',
		// 	// 	},


				
		// 	// 	a2: [['<~VRow>', '<VCol>', /* 'main','main','main','main',  */'gAttrs', 'wbcProps'], 'allOptions'],
		// 		// a3: 'all',
		// 	// a3: 'all',

			

		// 	// // 'mainHtmllll',
		// 	// 'raw0Html',
		// 	// // // "wbcSrc",
		// 	// "raw",
		// 	// "raw0",
		// 	// 'raw0Html',

		// 	// 'externalHtml',
		// 	// 'linkHtml',
		// 	// 'globalHtml',
		// 	// 'menuHtml',
		// 	// 'wrapHtml',
		// 	// ['<~VCard|pa-15 ma-15 blue>', /* "main", */ ['<~div|yellow pa-14>', "main"], "main"],
		// 	// '<li|grey pa-15 ma-15>',
		// 	// // 'float',
		// 	// // 'vProps',
		// 	// // 'itemSrc',
		// 	// 'hAttrs',

		// 	// // "globalHtml",
		// 	// 'all',
		// 	// // 'close',
		// 	// 'wbcProps',
		// 	// 'allOptions',
		// 	// 'gAttrs',
		// 	// 'htmlSrc',
		// 	// 'wbcSrc',
		// 	// 'wbcSyn',
		// 	// mp4: './0.mp4',
		// 	// nested: {
		// 	// 	options: {
		// 	// 		comp: 'VCard',
		// 	// 		class: 'yellow',
		// 	// 	},
		// 	// 	a0: 'content 0',
		// 	// 	a1: {
		// 	// 		options: {
		// 	// 			comp: 'VCard',
		// 	// 			class: 'blue',
		// 	// 		},
		// 	// 		a11: 'li__content 11',
		// 	// 		a12: 'li__content 12',
		// 	// 		a13: {
		// 	// 			options: {
		// 	// 				comp: 'VCard',
		// 	// 				class: 'red pa-5',
		// 	// 			},
		// 	// 			a131: 'MD__## Markdowncontent131  aaaaaaaaaaaaa',
		// 	// 			a132: 'MD__- Markdown content132',
		// 	// 			a133: 'MD__- Markdown content133',
		// 	// 			a134: 'MD_1- Markdown content134',
		// 	// 			a135: 'MD_2- Markdown content135',
		// 	// 		}
		// 	// 	}

		// 	// },
		// 	// ts_src_0: './__ts0.ts'
		// },
		// outputtt: {
		// 	header: 'Global header|green', footer: 'Global footer|green',
		// 	a0:'<~VRow|red pa-15>',
		// 	a00:'<VCol|blue pa-15>',
		// 	a1:'ddddddddddd',
		// 	a2: 'hhhhhhhhhhh',
		// 	a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
		// 	options: { class:'green pa-14 ma-15',html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers:'li__footers|yellow'},
		// },
		
		// outputtt: {
		// 	header: 'Global header|green', footer: 'Global footer|green',
		// 	a0: '<~VTabs| container red pa-5 >',
		// 	a00: '<VTab| pink pa-5 yellow--text>',
		// 	a000: 'ddddddddddd',
		// 	a01: 'VSpacer',
		// 	a1: 'ddddddddddd',
		// 	a2: 'hhhhhhhhhhh',
		// 	a20: 'VSpacer',
		// 	// a200: 'VSpacer',
		// 	a201: 'sssssssssss',
		// 	a3: 'http://study.wi-bg.com/files/sess1_reminder.pdf',
		// 	options: { class: 'container green pa-5 ma-15', /* style: {height:'80%'}, */ html: 'sssssssssssssssssss', headers: ['li__G headers|yellow'], footers: 'li__footers|yellow' },
		// },
		// // tracker: that => {
		// // 	that.data.options.class = 'yellow'
		// // 	that.data.output = {
		// // 		0: 'hAttrs',
		// // 		'0000': 'raw',
		// // 		a0: ['<~VRow|pa-15 ma-15 blue>', '<VCol>', "raw0", 'mainHtml',
		// // 		],
		// // 		// '00': 'raw0',
		// // 		'000': 'main',
		// // 		// '01': 'all',
		// // 		options: {
		// // 			class: 'grey',
		// // 			wrap: 'li'
		// // 		},


		// // 		a1: [['<~VRow>', '<VCol>', 'gAttrs', 'wbcProps'], 'allOptions']
		// // 	},
		// // },
		// output:'main',
		// output:['main'],
		// output:null,
		// // output:null,
		// header:'VCard__global header|blue',
		// footer:'VCard__global footer|blue',
		options: {
			key:'key-html-',
			class:'',
			global:'html',
			// mode: 'dev',
			all:true,
			// rtl: false,

			close: !true,
			// close: null,
			// close: !true,
			closeContent: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				html: 'close',
				// content:'override close'
				// content:null
			},

			float: false,
			// float: !false,
			floatContent: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				html: 'float ',
				// content: 'override float'
				// content: null

			},

				drag: !false,
			dragContent: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				html: 'drag ',
				// content: 'override drag'
			},

			// focusOnOptions: {
			// 	content:null,
			// 	content:{
			// 		comp: '~VCard',
			// 	options: {
			// 		class: 'red',
			// 		html:'Float layout'
			// 	}, }
			// 	style: {
			// 		position: 'fixed',
			// 		top: '3% ',
			// 		left: '50%',
			// 		'z-index': '10',
			// 		height: 'auto',
			// 		width: 'auto',
			// 		padding: '0.8%',
			// 		'background-color': '#FAFAFA',
			// 		border: `5px dashed green`

			// 	},

			// },


			
			gClose: true,
			// // gClose: null,
			// // gClose: !true,
			// gCloseContent: {
			// 	// options:{},
			// 	// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
			// 	// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
			// 	// html: 'gClose',
			// 	// content:'override close'
			// 	// content:null
			// },


			gFloat: !false,
			// // gFloat: !false,
			gFloatContent: {
				// options:{},
				// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
				// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
				html: 'gFloat ',
				// content: 'override gFloat'
				// content: null

			},

	

			// gDrag: false,
			// gDragContent: {
			// 	// options:{},
			// 	// a:{comp:'~VRow',options:{class:'red pa-15 ma-15'}},
			// 	// a1:{comp:'VCol',options:{class:'green pa-15 ma-15'}},
			// 	html: 'gDrag ',
			// 	// content: 'override gDrag'
			// },

			// focusOnOptions: {
			// 	content:null,
			// 	content:{
			// 		comp: '~VCard',
			// 	options: {
			// 		class: 'red',
			// 		html:'gFloat layout'
			// 	}, }
			// 	style: {
			// 		position: 'fixed',
			// 		top: '3% ',
			// 		left: '50%',
			// 		'z-index': '10',
			// 		height: 'auto',
			// 		width: 'auto',
			// 		padding: '0.8%',
			// 		'background-color': '#FAFAFA',
			// 		border: `5px dashed green`

			// 	},

			// },


			// main: true,
			// focusOn: true,


			

			itemSrc: true,
			raw: true,
			raw0: true,
			allOptions: true,
			gAttrs: true,
			hAttrs: true,
			vProps: true,
			htmlSrc: true,
			wbcSrc: true,
			wbcSyn: true,
			wbcProps: true,
			globalHtml: true,
			externalHtml:true,
			linkHtml:true,
			rawHtml:true,
			mainHtml:true,
			menuHtml:true,
			wrapHtml:true,
			
			// wrap: 'li',
			// headers: 'headersssss',
			hide:!true,
			load:!true,
			// 	style:{
				// 		// border: `2px dashed black `,
				// 		margin: `20px`,
				// 		padding: `20px`,
				// 		// 'background-color':'red',
				//   },
			html: thiss => {
				return `This is a ${thiss._routeParams.tag} tag`
			},
			
			// class:"text-darken-1 ma-16 my-16",
			// disp: { /* el_: true, el: true, item: true, wbc: true, */ global: true, context: true, /* parts: true, */ root: true },
			// footers:'inside footers',
			// headers: 'inside headers',
			attrs: {
				src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
				// height:99,
				// width:99,
			}
		},



		},
};
export default wiki;
// module.exports = default ;
