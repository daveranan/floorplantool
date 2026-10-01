import json,copy,pathlib
root=pathlib.Path('dist'); src=json.load(open('../kern_render/v7/kern-v7-geometry.json'))['sourcePlan']; manifest=json.load(open('../kern_render/v7/V7_manifest.json'))
v7=copy.deepcopy(src);v7['floors']=manifest['new_floor_plan'];v7['variant']='v7'

for k,f in v7['floors'].items():
 f.setdefault('entrances',['stair']);f.setdefault('note','Preserved approved V7 layout. This baseline retains its original dimensions and elevations.');f.setdefault('z',manifest['datums'].get(k,0))

# V7 model openings use geometry coordinates. Translate to room edges for this 2D editor.
def v7door(a,b,width=1.2,**kw):return dict(id=a+'_'+b,a=a,b=b,width=width,offset=.5,**kw)
v7['floors']['L2']['doors']=[v7door('stair','vestibule',offset=1) if False else dict(id='stair_vestibule',a='stair',b='vestibule',width=1.2,offset=1),v7door('plant','secretspine'),v7door('vestibule','secretspine',sealed=True),v7door('records','secretspine',sealed=True),v7door('northpassage','maproom',1.3),v7door('northpassage','signalvault'),v7door('maproom','signalvault',1.1,sealed=True),v7door('secretspine','northpassage',1,kind='open'),v7door('plantreturn','plant'),v7door('plantreturn','vestibule')]
vr=next(r for r in v7['floors']['L3']['rooms'] if r['id']=='roofroute');vr.update(x=12,w=20,thresholdAllowance=.4)
v7['floors']['L3']['doors']=[v7door('stair','roofroute'),v7door('roofroute','observation',1,kind='open'),v7door('roofroute','radar',1,kind='open'),v7door('roofroute','plantroof'),v7door('observation','radar',1,kind='open')]
root.joinpath('kern-preserved-v7.json').write_text(json.dumps(v7,indent=2));root.joinpath('seed-v7.js').write_text('window.KERN_V7 = '+json.dumps(v7,indent=2)+';')
p=copy.deepcopy(v7);p.update(variant='v8',title='KERN V8 · Full-height freight & two boarded wings',geometryVersion=4,revision='v8-garage-double')
p['floors']={};p['floorModule']={'occupiedClear':4,'serviceClear':1,'slab':.3,'floorToFloor':5.3,'note':'Service void is a clear crawl / ventilation zone, not an occupied level. Slab allowance is separate. Concept dimensions; detailed structure, access and ventilation are not engineered.'}
p['operationsSection']={'floor':0,'clearTop':9.3,'serviceTop':10.3,'slabTop':10.6,'voidLevel':'L1','note':'No L1 slab and no intermediate service ceiling in the hall. The shared upper service zone sits above 9.3 m.'}
F=None
def floor(k,name,z,note):
 global F
 F={'name':name,'z':z,'elevation':('+' if z>0 else '')+f'{z:.2f} m','clearHeight':4,'rooms':[],'doors':[],'entrances':['stair','freight'],'note':note};p['floors'][k]=F;return F
def R(id,name,x,y,w,h,t='circulation',**kw):
 r=dict(id=id,name=name,x=x,y=y,w=w,h=h,type=t,**kw);F['rooms'].append(r);return r
def D(a,b,width=1.2,**kw):
 d=dict(id=a+'_'+b,a=a,b=b,width=width,offset=.5);d.update(kw);F['doors'].append(d)
def O(a,b):D(a,b,1,kind='open')
def core():
 R('stair','Main stair',8,2,4,8,'core',locked=True,diagramLabel='NW STAIR',stairDetail='30 risers × 0.1767 m; 2 flights; 1.35 m clear flight / landings; 0.27 m going; conceptual 4 × 8 m shaft')
 R('freight','Full-height freight',18,26,4,6,'core',locked=True,diagramLabel='FREIGHT',liftDetail='4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination')
# MAIN FLOOR: retain the V7 courtyard, east bends, and west-only Operations entry.
f=floor('L0','Main floor · double-height Operations',0,'V7 east arrival and the 10 × 10 m open-sky court are retained. Cargo now arrives at the west equipment bay. Operations is reached only around the south and west sides of the court, never through reception. NW stair and freight remain separate; the stair is reached through Archive, as in V7. The former clean-transfer stair is removed; all basements now share full levels.')
core()
for r in v7['floors']['L0']['rooms']:
 if r['id'] not in ['stair','freight','deconclean','cleanlanding']:
  r=copy.deepcopy(r)
  if r['id']=='issue':r.update(name='Equipment issue / cargo staging',h=9)
  if r['id']=='control':r.update(height=9.3,diagramLabel='OPERATIONS HALL\n9.3 m CLEAR')
  F['rooms'].append(r)
R('cleanlanding','Cargo return',18,23,6,3)
for d in v7['floors']['L0']['doors']:
 if not set([d['a'],d['b']])&set(['freight','deconclean']):F['doors'].append(copy.deepcopy(d))
D('issue','freight',2.4)
F['entrances']=['entry','survey'];F['externals']=copy.deepcopy(v7['floors']['L0']['externals'])
# L1: the double-height hall is an actual hole; one compact sealed listening suite.
floor('L1','Crew quarters · boarded listening suite',5.3,'The entire Operations footprint is void at L1. Quiet rooms and a common room use the west / south wings. A disused listening booth and tape records room form boarded section 02, entered from the east return only after removing boards. The suite is 80 m²; its 1.2 m opening is separate from normal circulation.')
core();R('sky','OPEN SKY COURT',18,10,10,10,'void',locked=True,courtyardVoid=True);R('void','VOID TO OPERATIONS BELOW',18,0,14,10,'void',locked=True,diagramLabel='OPERATIONS VOID\nNO L1 FLOOR')
R('stairlanding','Stair landing',8,10,6,2);R('sleepa','Sleeping A',8,12,6,5,'living');R('sleepb','Sleeping B',8,17,6,6,'living');R('westhall','Quiet hall / freight return',14,10,4,22);R('overlook','Operations overlook',14,7,4,3);R('bath','Showers / WC',18,20,6,3,'service');R('southlink','Common return',18,23,4,3);R('common','Kitchen / common',22,23,10,9,'living');R('eastreturn','East return',24,20,12,3);R('terrace','South roof terrace',32,23,12,9,'terrace',outdoor=True)
R('listening','02 · Boarded listening booth',28,10,8,6,'secret',boardedSection='02');R('tapes','02 · Sealed tape records',28,16,8,4,'secret',boardedSection='02')
D('stair','stairlanding');O('stairlanding','westhall');O('westhall','overlook');D('westhall','sleepa');D('westhall','sleepb');D('westhall','bath');O('westhall','southlink');D('westhall','freight',2.4);D('southlink','common',1.5);D('southlink','bath');D('common','eastreturn',1.5);D('common','terrace',1.8);D('eastreturn','tapes',1.2,sealed=True,boarded=True,label='BOARDED 02');D('tapes','listening')
# B1: a garage only in the active area, plus the deliberately inaccessible former wing.
floor('B1','Garage only · boarded former research wing',-5.3,'The garage is doubled from 204 to 408 m² as one open L-shaped bay. The added 204 m² turning / loading arm takes over the former research side; the building footprint and freight position stay fixed. Freight opens directly into the original bay through a 2.4 m doorway, with 6 m staging clearance. Boarded section 01 retains 280 m² for old maps, signals and its internal return, sealed at one 1.5 m doorway. Only garage and core circulation remain active on B1.')
core();R('stairlanding','Stair lobby',8,10,6,3);R('northreturn','Garage return',14,10,4,8);R('garage','Garage / expedition bay',6,18,12,17,'service',zones=[{'name':'VEHICLES','x':9.5,'y':23},{'name':'CARGO STAGING','x':14,'y':29}]);R('garagewide','Garage extension / turning bay',18,18,25.5,8,'service',garagePart=True);R('maps','01 · Old map room',24,4,12,10,'secret',boardedSection='01');R('signal','01 · Signal vault',36,4,8,10,'secret',boardedSection='01');R('secretreturn','01 · Former research return',24,14,20,4,'secret',boardedSection='01')
next(r for r in F['rooms'] if r['id']=='garage').update(garagePart=True,diagramLabel='GARAGE / EXPEDITION BAY\n408 m² TOTAL')
F['garageArea']=408;F['previousGarageArea']=204;F['boardedArea']=280
D('stair','stairlanding');O('stairlanding','northreturn');D('northreturn','garage',1.5);D('garage','freight',2.4);O('garage','garagewide');D('garagewide','secretreturn',1.5,sealed=True,boarded=True,label='BOARDED 01');D('secretreturn','maps',1.5);D('secretreturn','signal',1.5)
F['entrances']=['stair','garage'];F['externals']=[{'room':'garage','side':'w','width':5,'label':'WEST VEHICLE APPROACH'}]
# B2: separate clean and dirty approaches, direct freight intake via through-car east door.
floor('B2','Artifact analysis · controlled intake',-10.6,'Artifacts travel straight from B1 garage to B2 intake via a through-car freight lift: west loading doors at B1, east unloading doors at B2. The west core lobby is retained for staff and service access. People returning with dirty equipment pass through wash and gowning; the NW stair reaches the research hall independently. All active rooms have 4 m clear height.')
core();R('stairlanding','Stair landing',8,10,10,3);R('westhall','Staff return',14,13,4,7);R('researchhall','Research hall',18,13,4,13);R('unload','Freight lobby',12,26,6,6);R('dirty','Dirty gear / undress',6,26,6,6,'service');R('wash','Decon wash',6,20,6,6,'service');R('gown','Clean gowning',12,20,6,6,'service');R('intake','Artifact intake / scanner',22,22,10,10,'tech');R('analysis','Artifact analysis station',22,12,14,10,'tech');R('artifact','Artifact store',36,12,8,10,'tech');R('test','Test observation',32,22,4,10,'tech');R('containment','Containment',36,22,8,10,'tech');R('decode','Decode / server lab',22,4,10,8,'tech');R('secure','Secure reference store',32,4,12,8,'tech')
D('stair','stairlanding');O('stairlanding','westhall');O('westhall','researchhall');D('westhall','gown');D('researchhall','gown');D('gown','wash');D('wash','dirty');D('dirty','unload',1.5);D('unload','freight',2.4);D('freight','intake',2.4);D('researchhall','intake',1.5);D('researchhall','analysis',1.5);D('intake','analysis',2.4);D('analysis','artifact',2.4);D('analysis','test',1.2);D('test','containment',1.2);D('artifact','containment',1.5);D('analysis','decode');D('decode','secure');D('secure','artifact',1.5)
# B3 preserves six nodes and the cave progression, freed from split-level headroom problems.
floor('B3','Maintenance · stabilization & old caves',-15.9,'Maintenance occupies the lowest full basement, with the six stabilization nodes and cave route retained. The former sealed cavern is now a surveyed cave pocket, so the only boarded / hidden building sections are B1 and L1. Both aligned cores reach this level; maintenance freight never crosses Operations or living quarters.')
core();R('stairlanding','NW stair landing',8,10,6,5);R('north','North maintenance gallery',14,12,34,3);R('west','West maintenance gallery',14,15,4,19);R('south','South maintenance gallery',22,31,26,3);R('east','East maintenance gallery',45,15,3,16);R('spine','Freight service return',22,26,4,5);R('plant','Maintenance / plant',22,22,14,4,'service');R('exciter','Central exciter',28,15,8,7,'tech')
for i,x,y,w,h in [(1,20,6,6,6),(2,39,6,6,6),(3,48,18,6,6),(4,39,34,6,6),(5,20,34,6,6),(6,8,18,6,6)]:R('n'+str(i),'Node 0'+str(i),x,y,w,h,'tech')
R('cavew','West cave passage',6,24,8,4,'cave');R('caves','Old cave pocket',6,28,8,8,'cave');R('cavelink','South cave bypass',14,34,6,4,'cave');R('fissure','North fissure',26,6,13,4,'cave');R('cavern','Surveyed cavern',48,24,8,7,'cave')
D('stair','stairlanding');O('stairlanding','north');O('north','west');O('north','east');O('east','south');D('west','freight',2.4);D('freight','spine',2.4,offset=17/24);O('spine','south');D('spine','plant',2.4);D('plant','exciter',2.4);D('north','exciter',1.8);D('north','n1');D('north','n2');D('east','n3');D('south','n4');D('south','n5');D('cavelink','n5',1.5);D('west','n6');D('west','cavew',1.5);O('cavew','caves');O('caves','cavelink');O('west','cavelink');D('n1','fissure',1.5);D('fissure','n2',1.5);D('east','cavern',1.5)
# Small roof-service level, not a new hidden occupied floor.
floor('L2','Partial roof-service landing',10.6,'The former concealed L2 rooms have moved down to the two boarded sections. This is a small legitimate roof-service landing and plant room, with a guarded outdoor route between the two cores. The Operations roof is at +10.60 m. No roof or bridge crosses the open-sky courtyard.')
core();R('stairlanding','Roof stair landing',8,10,6,3);R('roofpath','Guarded roof service walk',14,13,4,13,'terrace',outdoor=True);R('liftlobby','Roof freight lobby',14,26,4,6);R('pathturn','Roof route turn',14,10,4,3,'terrace',outdoor=True);R('plant','Roof plant / service',12,2,6,8,'service');R('opsroof','Operations roof terrace',18,0,14,10,'terrace',outdoor=True);R('sky','COURTYARD / OPEN SKY',18,10,10,10,'void',courtyardVoid=True,locked=True)
D('stair','stairlanding');D('stairlanding','plant');D('stairlanding','pathturn');O('pathturn','roofpath');D('roofpath','liftlobby');D('liftlobby','freight',2.4);D('plant','opsroof',1.5)
# Observation level, outdoor except the independent core caps.
floor('L3','Observation deck · radar maintenance',15.9,'A partial open observation / radar deck caps the north crown, with a guarded service walk to the freight tower. Freight therefore serves B3, B2, B1, L0, L1, L2 and L3. This is an outdoor deck, not another full enclosed storey. NW stair remains the normal human route; the freight lift is not an escape route.')
core();R('stairlanding','Roof stair landing',8,10,10,3,'terrace',outdoor=True);R('observation','Observation deck',12,0,10,10,'terrace',outdoor=True);R('radar','Radar / dish maintenance',22,0,10,10,'terrace',outdoor=True);R('roofroute','Clear roof return',18,10,14,3,'terrace',outdoor=True);R('roofpath','Guarded freight service walk',14,13,4,13,'terrace',outdoor=True);R('liftlobby','Roof freight lobby',14,26,4,6);R('sky','COURTYARD / OPEN SKY',18,13,10,7,'void',courtyardVoid=True,locked=True)
D('stair','stairlanding');D('stairlanding','observation',1.5);O('stairlanding','roofroute');O('observation','radar');O('radar','roofroute');O('stairlanding','roofpath');D('roofpath','liftlobby');D('liftlobby','freight',2.4)
# Avoid any bridge over the top three metres of the court: route stays west or north.
F['rooms']=[r for r in F['rooms'] if r['id']!='roofroute'];F['doors']=[d for d in F['doors'] if 'roofroute' not in [d['a'],d['b']]];next(r for r in F['rooms'] if r['id']=='sky').update(y=10,h=10)
# Global design and route metadata
p['floors']={k:p['floors'][k] for k in ['L3','L2','L1','L0','B1','B2','B3']}
levels=['B3','B2','B1','L0','L1','L2','L3'];p['verticalConnections']=[{'id':'main-stair','type':'stair','room':'stair','floors':levels,'footprint':{'x':8,'y':2,'w':4,'h':8},'stair':{'risers':30,'riserHeight':5.3/30,'flights':2,'flightWidth':1.35,'landingDepth':1.35,'treadDepth':.27}},{'id':'freight','type':'lift','room':'freight','floors':levels,'footprint':{'x':18,'y':26,'w':4,'h':6},'throughCar':True,'doorClearWidth':2.4,'note':'West loading door on all levels; opposite east unloading door on B2 and B3. Nominal shaft, supplier design required.'}]
p['splitLevelConnections']=[];p['section']=[{'label':k+' · '+p['floors'][k]['name'],'z':p['floors'][k]['z']} for k in p['floors']];p['overlooks']=[{'axis':'v','fixed':18,'lo':7,'hi':10,'guardTop':6.4,'levels':['L0','L1']}];p['routeStudy']={'garageToAnalysis':['B1 garage','freight down 5.3 m','B2 intake','analysis'],'mainArrival':['entry','entryleg','entryelbow','eastleg','corelink','courtleg','westelbow','westhall','northlink','control'],'boardedSections':[{'id':'01','floor':'B1','threshold':'garagewide_secretreturn','clearOpening':1.5},{'id':'02','floor':'L1','threshold':'eastreturn_tapes','clearOpening':1.2}]};p['designSequence']=['B1 garage directly loads freight; B2 receives artifacts; B3 receives heavy maintenance equipment.','L0 retains the bent east arrival and west-only Operations entry.','4.0 m clear + 1.0 m clear service zone + 0.3 m slab = 5.3 m floor module.','Operations has no L1 floor and is 9.3 m clear.','Exactly two boarded building sections: large B1 former research wing, small L1 listening suite.']
p['approaches']=[{'id':'vehicle-approach','level':'B1','note':'West garage door at −5.30 m; hillside / ramp approach remains schematic. 5 m vehicle opening.'},{'id':'pedestrian-entry','level':'L0','note':'V7 east entrance retained. No new west pedestrian entrance.'}]
p['sourceBaseline']='Approved V7 layout / V7_manifest.json. V8 is a floor-plan revision only; no Blender model or render has been regenerated.'
root.joinpath('kern-floorplans-v8.json').write_text(json.dumps(p,indent=2));root.joinpath('seed-v8.js').write_text('window.KERN_V8 = '+json.dumps(p,indent=2)+';')
print('Created V7 baseline + V8 floors:',list(p['floors']))
