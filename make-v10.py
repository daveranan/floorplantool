import json,copy,pathlib,hashlib
P=pathlib.Path(__file__).parent/'dist'; source=P/'kern-user-edited-2026-09-30.json';p=json.loads(source.read_text()); original=copy.deepcopy(p)
p.update(variant='v10',title='KERN V10 · Polished user edits',revision='v10-user-edits-polished',geometryVersion=6)
def room(k,id):return next(r for r in p['floors'][k]['rooms'] if r['id']==id)
def remove(k,*ids):
 f=p['floors'][k];f['rooms']=[r for r in f['rooms'] if r['id'] not in ids];f['doors']=[d for d in f['doors'] if not {d['a'],d['b']}&set(ids)]
def omit(k,*ids):p['floors'][k]['doors']=[d for d in p['floors'][k]['doors'] if d['id'] not in ids]
def door(k,a,b,w=1.2,**kw):
 f=p['floors'][k];f['doors']=[d for d in f['doors'] if {d['a'],d['b']}!={a,b}];d=dict(id=a+'_'+b,a=a,b=b,width=w,offset=.5);d.update(kw);f['doors'].append(d)
def add(k,id,name,x,y,w,h,t='circulation',**kw):
 p['floors'][k]['rooms'].append(dict(id=id,name=name,x=x,y=y,w=w,h=h,type=t,**kw))
# Preserve the user's continuous L0 West Passage; discard only its detached old fragments.
remove('L0','westelbow','freightreturn');door('L0','westhall','wc');door('L0','westhall','issue',1.8);door('L0','westhall','freight',2.4);door('L0','westhall','courtleg',1,kind='open');door('L0','westhall','cargoturn',1,kind='open');door('L0','courtleg','cargoturn',1,kind='open')
p['floors']['L0']['note']='Your continuous West Passage is retained, with direct stair, WC, equipment and full-width freight access. The detached former West Turn and Freight Passage fragments are removed. The larger reception, bent east arrival, west-only Operations entry, double-height Operations and open-sky court are retained.'
# B1: compact the wash/gown pair into the vacant north strip rather than cutting into the vehicle bay.
room('B1','gown').update(y=10,h=4)
room('B1','wash').update(y=14,h=4)
omit('B1','d1790801674957')
door('B1','transferstair','gown',1.2,offset=0)
room('B1','transferstair')['stairDetail']='24 risers × 0.1667 m; two flights, 1.4 m clear width and landings, 0.27 m going. Both landing ends are north: upper north door to clean lobby; lower east door at y=10.1–11.3 to gowning.'
# Keep the user's repositioned boarded suite; its entry must share the garage datum.
door('B1','garagewide','signal',1.5,sealed=True,boarded=True,label='BOARDED 01')
for k in ['B1','B2']:
 room(k,'artifactstair').update(x=18,y=32,w=8,h=4,locked=False,runAxis='x',landingEnd='west',editGroup='artifact-stair',stairDetail='Rotated U-stair: 5.8 m rise, 36 risers in two east–west flights. 1.4 m clear flights/landings and 0.27 m going fit a 7.39 × 3.0 m nominal envelope inside 8 × 4 m. Upper and lower doors meet the west landings.')
room('B1','artifactstair')['diagramLabel']='ARTIFACT STAIR\nDOWN TO B2'
# Compact B2: one connected corridor, no duplicate cleaning suite on this floor.
remove('B2','dirtyarrival','dirty','dirtyfreight','wash','gown','unload','dirtyexit')
room('B2','westhall').update(name='Research corridor · west return',x=14,y=10,w=4,h=26,diagramLabel='RESEARCH\nCORRIDOR')
room('B2','researchhall').update(name='Research corridor',x=18,y=18,w=18,h=4,diagramLabel='RESEARCH CORRIDOR')
room('B2','analysis').update(x=18,y=12,w=18,h=6)
room('B2','containment').update(x=32,y=22,w=12,h=4)
room('B2','test').update(x=32,y=26,w=12,h=6,diagramLabel='TEST OBSERVATION')
add('B2','researchturn','Research corridor turn',18,22,4,4,diagramLabel='',circulationGroup='research')
for id in ['westhall','researchhall']:room('B2',id)['circulationGroup']='research'
# Rebuild only this floor's connections from its new adjacency, keeping storage access purposeful.
p['floors']['B2']['doors']=[]
door('B2','stair','stairlanding',offset=1);door('B2','stairlanding','westhall',1,kind='open');door('B2','westhall','researchhall',1,kind='open');door('B2','westhall','researchturn',1,kind='open');door('B2','researchhall','researchturn',1,kind='open');door('B2','westhall','freight',2.4);door('B2','westhall','artifactstair',1.5)
door('B2','freight','intake',2.4);door('B2','researchhall','intake',2.4);door('B2','researchhall','analysis',2.4);door('B2','analysis','decode',1.2);door('B2','researchhall','artifact',2.4);door('B2','artifact','secure',1.5);door('B2','artifact','containment',2.4);door('B2','researchhall','containment',1.5);door('B2','containment','test',1.5)
p['floors']['B2']['name']='Artifact research · single corridor'
p['floors']['B2']['note']='A single west/horizontal research corridor feeds analysis, intake, artifact storage and containment. Cleaning is concentrated at B1 loading; the duplicated B2 wash/gowning/backroom sequence is removed. The 8 × 4 m artifact stair aligns beside freight on B1/B2. Test Observation is widened to 12 × 6 m below Containment. Decode/server access stays through Analysis; Secure Reference Store is reached from Artifact Store. Clean staff can reach research without passing through intake, storage or cleaning rooms. Concept gameplay zoning, not an engineered biosafety separation.'
# The user's upper-floor circulation categories are preserved. Resolve contradictory outdoor flags only at L2.
for id in ['roofpath','pathturn']:
 r=room('L2',id);r.pop('outdoor',None);r['name']={'roofpath':'Enclosed service passage','pathturn':'Service passage turn'}[id]
p['floors']['L2']['note']='The user-designated circulation route is enclosed service access. Roof plant, Operations roof terrace and the open-sky courtyard remain as drawn. No hidden occupied floor or bridge is added.'
p['floors']['L3']['note']='Observation / radar deck remains outdoors. The user-designated circulation paths retain outdoor access while the L3 enclosure decision is open. Freight and NW stair align with the lower levels; no bridge spans the courtyard.'
p['floors']['L1']['note']='Your enlarged 8 m-wide showers/WC and adjusted east return are retained. Operations remains a full L1 void; the 80 m² boarded listening suite and living areas retain 4 m occupied height plus separate 1.5 m service clearance.'
# Explicit editable source relationships for the linked-core/derived-void editor.
for k,f in p['floors'].items():
 for id,group in [('stair','main-stair'),('freight','freight')]:room(k,id)['editGroup']=group
 if k in ['L1','L2','L3']:room(k,'sky').update(linkedSource={'floor':'L0','room':'courtyard'},derived=True,locked=True)
room('L1','void').update(linkedSource={'floor':'L0','room':'control'},derived=True,locked=True)
room('L2','opsroof').update(linkedSource={'floor':'L0','room':'control'},derivedFootprint=True)
for c in p['verticalConnections']:
 if c['id']=='artifact-stair':
  c.update(footprint={'x':18,'y':32,'w':8,'h':4},footprints={k:{'x':18,'y':32,'w':8,'h':4} for k in ['B1','B2']},runAxis='x',landingEnd='west',requiredEnvelope={'long':7.39,'short':3.0},nominalEnvelopeOnly=True)
p['courtyard'].update(source={'floor':'L0','room':'courtyard'})
p['operationsSection'].update(source={'floor':'L0','room':'control'})
garageArea=sum(r['w']*r['h'] for r in p['floors']['B1']['rooms'] if r.get('garagePart'));boardedArea=sum(r['w']*r['h'] for r in p['floors']['B1']['rooms'] if r.get('boardedSection'))
room('B1','garage')['diagramLabel']=f'GARAGE / EXPEDITION BAY\n{garageArea:g} m² TOTAL · 8 m CLEAR'
p['floors']['B1'].update(garageArea=garageArea,boardedArea=boardedArea)
p['floors']['B1']['note']=f'Your 8 × 4 m artifact stair stays directly beside freight and is aligned to B2. The compact wash/gowning pair is moved north into vacant space, preserving your {garageArea:g} m² garage footprint without an overlap or vehicle pinch point. Garage → wash → gowning → full 4 m transfer stair → clean main-stair lobby remains continuous. Your repositioned {boardedArea:g} m² boarded suite is retained; its sealed threshold now meets the garage datum. Garage and freight are -9.80 m; the clean lobby is -5.80 m.'
p['routeStudy']={'cargo':['B1:garage','B1:freight','B2:freight','B2:intake','B2:researchhall','B2:analysis'], 'cargoStorage':['B2:intake','B2:researchhall','B2:artifact','B2:secure'], 'cargoContainment':['B2:intake','B2:researchhall','B2:artifact','B2:containment'], 'cleanStaff':['B2:stair','B2:stairlanding','B2:westhall','B2:researchhall','B2:analysis'], 'garagePersonnel':['B1:garage','B1:artifactstair','B2:artifactstair','B2:westhall','B2:researchhall','B2:analysis'], 'garageCleanReturn':['B1:garage','B1:garagewide','B1:wash','B1:gown','B1:transferstair','B1:stairlanding','B1:stair'], 'L0freight':['L0:freight','L0:westhall','L0:stairlanding','L0:stair'], 'boardedSections':[{'id':'01','floor':'B1','threshold':'garagewide_signal','clearOpening':1.5},{'id':'02','floor':'L1','threshold':'eastreturn_tapes','clearOpening':1.2}]}
p['splitLevelConnections'][0]['route']=['garage','garagewide','wash','gown','transferstair','stairlanding','stair']
p['designSequence'][-1]=f'User-repositioned boarded sections: {boardedArea:g} m² B1 + 80 m² L1; upper layouts retained.'
p['designSequence']+=['Artifact stair follows the user edit: aligned 8 × 4 m footprint south of freight; east–west flights.', 'B2 uses one connected research corridor; cleaning is concentrated in B1.', 'Original uploaded JSON is retained separately; this is a polished derivative.']
p['sourceBaseline']='Exact user-uploaded kern-plan.json dated 2026-09-30. Polished copy only; original preserved separately. Earlier annotation intent applied to B2. No Blender or 3D changes.'
p['sourceUploadSha256']=hashlib.sha256(source.read_bytes()).hexdigest()
p['section']=[{'label':k+' · '+f['name'],'z':f['z']} for k,f in p['floors'].items()];p['section'].insert(5,{'label':'G · garage / boarded wing / freight stop','z':-9.8})
p['polishNotes']=['Removed the two parked L0 circulation fragments, preserving the user’s continuous hall and expanded reception.', 'Preserved the user’s L1 WC/east-return edit and L2/L3 circulation categories; L3 remains outdoor pending a decision.', 'Preserved the user’s B1 wing positions and 8 × 4 m artifact stair beside freight; aligned the stair on B2.', 'Moved wash/gowning into the vacant strip; fixed transfer-stair landing access and the boarded-wing elevation mismatch.', 'Replaced the B2 cleaning maze with one continuous corridor. Widened Test Observation below Containment. Removed Decode–Secure Store connection.', 'Kept all level datums, service clearances, the double-height Operations void and open-sky courtyard.']
(P/'kern-floorplans-v10.json').write_text(json.dumps(p,indent=2));(P/'seed-v10.js').write_text('window.KERN_V10 = '+json.dumps(p,indent=2)+';\n')
print(json.dumps({'garageArea':garageArea,'boardedArea':boardedArea,'roomCounts':{k:len(f['rooms']) for k,f in p['floors'].items()}},indent=2))
