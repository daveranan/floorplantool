from html.parser import HTMLParser
from pathlib import Path
from collections import Counter
import re
class DOM(HTMLParser):
    def __init__(self):super().__init__();self.stack=[];self.ids={};self.counts=Counter();self.workspace_ids=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs);classes=a.get('class','').split()
        if 'id' in a:
            self.counts[a['id']]+=1;self.ids[a['id']]={'tag':tag,'attrs':a,'ancestors':self.stack.copy()}
            if any('workspace' in n[1].get('class','').split() for n in self.stack):self.workspace_ids.append(a['id'])
        if tag not in ['meta','link','input','br','img','hr','path','rect','line','circle']:self.stack.append((tag,a))
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0]==tag:self.stack=self.stack[:i];return
h=Path('dist/index.html').read_text();d=DOM();d.feed(h)
assert all(n==1 for n in d.counts.values()),d.counts
assert d.workspace_ids==['canvas','plan'],d.workspace_ids
for id in ['levelcode','levelname']:assert any(t=='header' for t,a in d.ids[id]['ancestors'])
for id in ['tool-select','tool-connect','tool-disconnect','tool-draw','undo','redo','zoomout','fit','zoomin','variant','floors']:
    assert any('toolbar' in a.get('class','').split() for t,a in d.ids[id]['ancestors']),id
for id in ['geometryexport','export','import','svgexport']:assert any(a.get('id')=='filemenu' for t,a in d.ids[id]['ancestors']),id
for id in ['belowtoggle','dimensions','sectionview','planpng']:assert any(a.get('id')=='viewmenu' for t,a in d.ids[id]['ancestors']),id
for id in ['floorbrief','summary','toolhint']:assert any(t=='aside' for t,a in d.ids[id]['ancestors']),id
assert '<footer>' not in h
css=Path('dist/style.css').read_text().split('/* Compact working surface:')[1]
assert css.count('{')==css.count('}')
for rule in ['height:100dvh','min-height:0','grid-template-columns:282px minmax(0,1fr)','padding:0','overflow:auto','@media(max-width:720px)','@media(max-width:360px)','@media(max-height:520px)','max-width:calc(100vw - 16px)','max-height:calc(100dvh - 120px)']:assert rule in css,rule
# Labels and viewport clamping remain available; no duplicate control targets or fixed inspector height tied to selection.
assert d.ids['variant']['attrs']['aria-label']=='Layout variant'
assert d.ids['plan']['attrs']['aria-keyshortcuts']=='Shift+F10'
assert d.ids['zoomout']['attrs']['aria-label']=='Zoom out'
assert all(d.ids[id]['tag']=='details' for id in ['filemenu','viewmenu'])
print('PASS: unique IDs, canvas-only workspace, compact top-bar controls, File/View grouping, sidebar notes/legend, no bottom/footer band, independent scroll, mobile/landscape breakpoints and bounded popovers. Static checks only; browser layout not verified.')
