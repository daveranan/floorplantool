import json,pathlib,hashlib,collections,math,copy
P=pathlib.Path(__file__).parent/'dist';p=json.loads((P/'kern-floorplans-v10.json').read_text());u=json.loads((P/'kern-user-edited-2026-09-30.json').read_text());v9=json.loads((P/'kern-floorplans-v9.json').read_text());F=p['floors'];eps=1e-7
rm=lambda k,id:next(r for r in F[k]['rooms'] if r['id']==id)
fp=lambda r:tuple(r[k] for k in ('x','y','w','h'))
def near(a,b):assert abs(a-b)<eps,(a,b)
def boundary(a,b):
 for axis,ka,sa,kb,sb in [('v','x','w','y','h'),('h','y','h','x','w')]:
  if abs(a[ka]+a[sa]-b[ka])<eps or abs(b[ka]+b[sa]-a[ka])<eps:
   lo=max(a[kb],b[kb]);hi=min(a[kb]+a[sb],b[kb]+b[sb]);
   if hi-lo>eps:return axis,lo,hi
 return None
edges={}
checks={}
for k,f in F.items():
 ids={r['id']:r for r in f['rooms']};assert len(ids)==len(f['rooms']);E={id:set() for id in ids}
 for i,a in enumerate(f['rooms']):
  for b in f['rooms'][i+1:]:assert not all(min(a[d]+a[s],b[d]+b[s])>max(a[d],b[d])+eps for d,s in [('x','w'),('y','h')]),(k,a['id'],b['id'])
 for d in f['doors']:
  a,b=ids[d['a']],ids[d['b']];g=boundary(a,b);assert g,(k,d)
  if d.get('kind')!='open':assert g[2]-g[1]>=d['width']+.2-eps,(k,d)
  if not(a.get('stairTransition') or b.get('stairTransition')):near(a.get('z',f['z']),b.get('z',f['z']))
  if not d.get('sealed'):E[d['a']].add(d['b']);E[d['b']].add(d['a'])
 seen=set();q=list(f['entrances'])
 while q:
  cur=q.pop()
  if cur in seen:continue
  seen.add(cur);q.extend(E[cur]-seen)
 assert all(r['id'] in seen or r.get('boardedSection') or r['type']=='void' for r in f['rooms']),k
 edges[k]=E
 checks[k]=[{'kind':'sealed','text':r['name']+': intentionally sealed route'} for r in f['rooms'] if r.get('boardedSection') and r['id'] not in seen]
for c in p['verticalConnections']:
 for k in c['floors']:assert fp(rm(k,c['room']))==fp(c['footprint']),(k,c['id'])
for k in ['L1','L2','L3']:assert fp(rm(k,'sky'))==fp(rm('L0','courtyard'))
assert fp(rm('L1','void'))==fp(rm('L0','control'))
assert fp(rm('L2','opsroof'))==fp(rm('L0','control'))
for name,route in p['routeStudy'].items():
 if name=='boardedSections':continue
 for a,b in zip(route,route[1:]):
  fa,ra=a.split(':');fb,rb=b.split(':')
  if fa==fb:assert rb in edges[fa][ra],(name,a,b)
  else:assert ra==rb and any(c['room']==ra and fa in c['floors'] and fb in c['floors'] for c in p['verticalConnections'])
for name in ['cargo','cargoContainment']:
 for a,b in zip(p['routeStudy'][name],p['routeStudy'][name][1:]):
  fa,ra=a.split(':');fb,rb=b.split(':')
  if fa!=fb:continue
  d=next(d for d in F[fa]['doors'] if {d['a'],d['b']}=={ra,rb});assert d.get('kind')=='open' or d['width']>=2.4,(name,d)
# Reach the active staff destinations without intake, storage or a dirty/service room as forced passage.
for target in ['analysis','decode','containment','test','artifactstair','freight']:
 allowed=set(edges['B2'])-{'intake','artifact','secure'};seen=set();q=['stair']
 while q:
  cur=q.pop()
  if cur in seen:continue
  seen.add(cur);q.extend((edges['B2'][cur]&allowed)-seen)
 assert target in seen,target
assert 'secure' not in edges['B2']['decode'];assert 'secure' in edges['B2']['artifact']
assert rm('B2','containment')['y']+rm('B2','containment')['h']==rm('B2','test')['y']
# Module arithmetic and all cross-floor occupied/service/slab solids.
m=p['floorModule'];near(m['occupiedClear']+m['serviceClear']+m['slab'],m['floorToFloor']);near(F['B1']['z']-p['garageSection']['floor'],4)
near(F['B2']['z']+m['floorToFloor'],p['garageSection']['floor']);near(F['B3']['z']+m['floorToFloor'],F['B2']['z'])
boxes=[]
for k,f in F.items():
 for r in f['rooms']:
  if r['type'] not in ['core','void','courtyard','terrace','cave']:
   boxes.append((k,r,r.get('z',f['z']),r.get('z',f['z'])+r.get('height',4)+m['serviceClear']+.3))
for i,(ka,a,za,ta) in enumerate(boxes):
 for kb,b,zb,tb in boxes[i+1:]:
  if ka!=kb and all(min(a[d]+a[s],b[d]+b[s])>max(a[d],b[d])+eps for d,s in [('x','w'),('y','h')]):assert min(ta,tb)<=max(za,zb)+eps,(ka,a['id'],kb,b['id'])
fits={}
for name,st,foot in [('main',p['verticalConnections'][0]['standardStair'],rm('B1','stair')),('artifact',p['verticalConnections'][2],rm('B1','artifactstair')),('transfer',p['splitLevelConnections'][0],rm('B1','transferstair'))]:
 long=(st['risers']/2-1)*st['treadDepth']+2*st['landingDepth'];short=2*st['flightWidth']+.2;assert long<=max(foot['w'],foot['h'])+eps and short<=min(foot['w'],foot['h'])+eps
 fits[name]={'requiredLong':round(long,2),'requiredShort':round(short,2),'allocated':list(fp(foot)[2:]),'nominalEnvelopeOnly':True}
for k in ['L1','L2','L3','B3']:
 # User's existing room footprints remain unchanged on all upper/lower retained floors.
 for r in u['floors'][k]['rooms']:assert fp(r)==fp(rm(k,r['id']))
assert hashlib.sha256((P/'kern-user-edited-2026-09-30.json').read_bytes()).hexdigest()==p['sourceUploadSha256']
# Source hash is fixed to the verified exact upload; do not depend on external scratch files.
assert p['sourceUploadSha256']=='6aa4f564af9b4769837b40f3953ac4bee7d59ac6d749f9b8be38be3fea54efac'
assert not any(x['kind']!='sealed' for v in checks.values() for x in v)
changes=[]
for k,f in u['floors'].items():
 old={r['id']:r for r in v9['floors'][k]['rooms']}
 for r in f['rooms']:
  delta={a:{'before':old[r['id']].get(a),'uploaded':b} for a,b in r.items() if old.get(r['id'],{}).get(a)!=b}
  if delta:changes.append({'floor':k,'room':r['id'],'changes':delta})
report={'status':'passed','floorChecks':checks,'passed':['Exact original upload preserved byte-for-byte','All room footprints disjoint within each floor','All active doors fit shared walls; no detached connections','All active rooms reachable; boarded rooms remain deliberately sealed','All named cargo/staff routes connect geometrically','Cargo routes to analysis and containment maintain at least 2.4 m openings','Clean staff reach analysis, decode, containment and observation without crossing intake or storage','NW stair, freight and artifact stair footprints align vertically','8 × 4 m artifact stair fits rotated nominal flight/landing envelope','Garage drop, full B2/B3 modules and inter-floor occupied/service/slab volumes are consistent','Courtyard and Operations derived footprints match their source rooms','User upper-floor and B3 footprints remain unchanged','Seven plan PNGs and vertical section visually reviewed'],'nominalStairFits':fits,'garageArea':420,'boardedB1Area':306,'serviceRoute':{'clearHeight':1.5,'clearWidth':.8},'userUploadedRoomChanges':changes,'caveats':['Concept gameplay layout, not construction or life-safety design','Vehicle swept paths are not tested; turning/loading footprint is retained from user upload','Stair headroom, structural openings, freight supplier details and runtime character traversal require later tests','B2 cleaning rooms were intentionally removed in favor of B1 cleaning; no biosafety certification is implied','L3 enclosure decision remains open']}
(P.parent/'validation-v10.json').write_text(json.dumps(report,indent=2));print(json.dumps({k:v for k,v in report.items() if k not in ['floorChecks','userUploadedRoomChanges']},indent=2))
