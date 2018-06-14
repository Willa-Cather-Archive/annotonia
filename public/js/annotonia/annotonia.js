// Annotator's styling and images
$('head').append('<link rel="stylesheet" href="js/annotonia/annotator/pkg/annotator.min.css">');

// Annotonia CSS
$('head').append('<link rel="stylesheet" href="js/annotonia/annotonia.css">');


// To load only annotations for this specific page
// Also used by Store plugin below
var pageID = window.location.pathname.match(/(?:\/|\.)([^./]+)\.html$/);

// Default to implied "index" page name if no other detected
pageID = pageID !== undefined
  ? pageID[1] ? pageID[1] : undefined
  : "index"
;

var optionsOffline = {
  setAnnotationData: function (note) {
    note.pageID = pageID;
  },
  shouldLoadAnnotation : function (note) {
    return note.pageID === pageID;
  }
}


// RichText w TinyMCE
$('head').append('<link rel="stylesheet" href="js/annotonia/richText-annotator/richText-annotator.min.css">');

// Clean up status bar styling
$('head').append('<style> \
  .mce-path { display: none !important; } \
  .mce-statusbar { border-width: 0 !important; } \
</style>');

var optionsRichText = {
  tinymce:{
    branding: false,
    content_css: "js/annotonia/annotonia.css",
    extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align|id]",
    menubar: false,
    plugins: "media image insertdatetime link code",
    selector: "li.annotator-item textarea",
    toolbar: "italic underline blockquote | bullist numlist | link image media | code",
    toolbar_items_size: 'small',
  }
};


// The Store plugin. Saves annotations to a remote backend
var optionsStore = {
  annotationData: {
    'pageID' : pageID
  },
  loadFromSearch: {
    'pageID' : pageID
  },
  prefix: '/annostore'
};


// Tags
$('head').append('<link rel="stylesheet" href="js/annotonia/tags-annotator/build/tags-annotator.min.css">');

var optionsTags = {
  tag: "Needs Correction:red,Needs Annotation:yellow,Draft:green,Complete:teal,Published:blue"
};



$(function ($) {
  if (typeof $.fn.annotator !== 'function') {
    alert("Annotator was not able to load properly.");
  } else {
    $('body')
      .annotator()
      .annotator('addPlugin', 'Filter')
      .annotator('addPlugin', 'HighlightTags', optionsTags)
//      .annotator('addPlugin', 'Offline', optionsOffline)
      .annotator('addPlugin', 'RichText', optionsRichText)
      .annotator('addPlugin', 'Store', optionsStore)
      .annotator('addPlugin', 'Unsupported')
    ;
  }
});

