# Annotonia
Annotating Willa Cather Letters

Using Annotator, which relies on Annotator Store for a back end



## Annotator-Store
Latest Release - https://github.com/openannotation/annotator-store/releases/tag/v0.14.2

This is a Python Flask app that serves an API to an Elasticsearch data store

### Install
Install in EL7 at `/var/local/www/python/annotator-store/`

#### Dependencies
Elasticsearch - [YUM Installation Instructions](https://www.elastic.co/guide/en/elasticsearch/reference/master/rpm.html)

```bash
virtualenv pyenv
source pyenv/bin/activate
pip install -e .[flask]
cp annotator.cfg.example annotator.cfg
python run.py
```

### Restarting
If Annotonia fails citing problems with the annotations store, the Annotator-Store Flask app has likely crashed.

One may confirm by visiting the [root web path for Annotator-Store](https://cather.unl.edu/annostore/)

**Restart Command for Andy**:<br>
`/var/local/annotonia/store_restart.sh`

**Restart Command for Anyone with Sudo**:<br>
`sudo -u ajewell /var/local/annotonia/store_restart.sh`



## Annotator
Latest Release (Full Source) - https://github.com/openannotation/annotator/archive/v1.2.10.tar.gz

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

### Notes
We are only using a basic demo page in the repository. The Store plugin cannot make ajax requests to the API when this page is opened from the file.

The files in `conf/etc/httpd/cdrh` are for use with Apache Cocoon-generated pages.
