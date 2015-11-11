var xhr = new XMLHttpRequest(),
stylesheet = 'inspector.css';

xhr.open("GET", "/" + stylesheet, false);
xhr.send();

chrome.devtools.panels.applyStyleSheet(xhr.responseText);