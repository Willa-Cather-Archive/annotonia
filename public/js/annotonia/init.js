$LAB
.setOptions({BasePath : "js/annotonia/"})
.script("annotator/lib/vendor/json2.js")
.script("annotator/lib/vendor/jquery.js")
.script("annotator/pkg/annotator.min.js")


// Annotator Plugins
// ----------------
// Filter
.script("annotator/pkg/annotator.filter.min.js")

// Offline
.script("annotator.offline.js/offline.min.js")

// RichText with TinyMCE
.script("richText-annotator/lib/tinymce/tinymce.min.js")
.script("richText-annotator/richText-annotator.min.js")

// Store
.script("annotator/pkg/annotator.store.min.js")

// Tags
.script("tags-annotator/src/tags-annotator.js")

// Unsupported
.script("annotator/pkg/annotator.unsupported.min.js")


// Start Annotonia
// ----------------
.script("annotonia.js")

