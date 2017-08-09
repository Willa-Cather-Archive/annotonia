# Annotonia
Annotations from Browser to TEI

## Components

## TEI Display
[TEI Boilerplate](https://github.com/GrantLS/TEI-Boilerplate) is used to display TEI documents in the browser as similarly to their original markup as possible.

## Annotation
Annotation is handled by AnnotatorJS, modified in this repository from the latest AnnotatorJS release (Full Source) - https://github.com/openannotation/annotator/archive/v1.2.10.tar.gz

### Plugins
#### Filter
Assist browsing annotations with previous/next buttons and text filtering

#### Offline
Use browser localstorage when the network is unavailable

#### Rich-Text Annotator
TinyMCE-based text editor

#### Store
Send annotation data to Annotator Store powered API

#### Tags Annotator
Highlight annotations different colors based when specific tags applied

#### Unsupported
Display a message to users if their browser is unsupported


## Storage
This is handled by our fork of [Annotator-Store](https://github.com/Willa-Cather-Archive/annotator-store), a Python Flask app that serves an API to an Elasticsearch data store

### Dependencies
[Elasticsearch](https://www.elastic.co/)


## Review
Review of annotations is handled by [Annotonia-Status](https://github.com/Willa-Cather-Archive/annotonia-status), a set of PHP scripts to browse, search, and edit Annotonia annotations


## TEI Export
Export and integration of annotations into the TEI documents is handled by [Annotonia-Converter](https://github.com/Willa-Cather-Archive/annotonia-converter), a set of Ruby scripts using nokogiri to work with HTML and XML


## Notes
We are only using a basic demo page demonstrating how to add Annotonia to your web page in this repository. The AnnotatorJS Store plugin cannot make ajax requests to the API when this page is opened from the file.
