"""Static shell regression. This does not replace browser layout testing."""
from html.parser import HTMLParser
from pathlib import Path
from collections import Counter
class DOM(HTMLParser):
    def __init__(self): super().__init__(); self.stack=[]; self.ids={}; self.counts=Counter()
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:
            self.counts[a['id']]+=1; self.ids[a['id']]={'tag':tag,'attrs':a,'ancestors':self.stack.copy()}
        if tag not in ['meta','link','input','br','img','hr','path','rect','line','circle']: self.stack.append((tag,a))
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0]==tag: self.stack=self.stack[:i]; return
h=Path('dist/index.html').read_text(); d=DOM(); d.feed(h)
assert all(n==1 for n in d.counts.values()),d.counts
for id in ['building','floors','levelcode','levelname']:
    assert any('floor-sidebar' in a.get('class','').split() for t,a in d.ids[id]['ancestors']),id
for id in ['tool-select','tool-connect','tool-disconnect','tool-draw','undo','redo','zoomout','fit','zoomin']:
    assert any('toolbar' in a.get('class','').split() for t,a in d.ids[id]['ancestors']),id
for id in ['export','backupall','import','pngexport','svgexport','stackpngexport','archive']:
    assert any(a.get('id')=='filemenu' for t,a in d.ids[id]['ancestors']),id
for id in ['belowtoggle','dimensions','open3d','openstack']:
    assert any(a.get('id')=='viewmenu' for t,a in d.ids[id]['ancestors']),id
for id in ['floorbrief','summary','toolhint','inspector']:
    assert any(t=='aside' for t,a in d.ids[id]['ancestors']),id
for id in ['canvas','plan','emptyfloor','canvasfloor']:
    assert any('workspace' in a.get('class','').split() for t,a in d.ids[id]['ancestors']),id
css=Path('dist/style.css').read_text()+Path('dist/ui.css').read_text()
assert css.count('{')==css.count('}')
for rule in ['height:100dvh','min-height:0','grid-template-columns:234px minmax(180px,1fr) 294px','overflow:auto','@media(max-width:720px)','env(safe-area-inset-bottom)','max-width:calc(100vw - 24px)']:
    assert rule in css,rule
assert d.ids['building']['attrs']['aria-label']=='Building'
assert d.ids['plan']['attrs']['aria-keyshortcuts']=='Shift+F10'
assert all(d.ids[id]['tag']=='details' for id in ['filemenu','viewmenu','buildingmenu'])
assert d.ids['inspectortoggle']['attrs']['aria-controls']=='inspectorpanel'
print('PASS: one toolbar, left building/floor navigation, canvas-only working area, right independent inspector, grouped File/View actions, unique IDs, responsive/safe-area contracts and labelled controls. Static checks only; browser layout not verified.')
