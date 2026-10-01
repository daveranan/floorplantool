import json,copy,pathlib,argparse
ap=argparse.ArgumentParser();ap.add_argument('--service',type=float,default=2.0);ap.add_argument('--basis',default='Provisional service clearance pending player-controller inspection');a=ap.parse_args()
root=pathlib.Path('dist');p=copy.deepcopy(json.loads((root/'kern-floorplans-v8.json').read_text()));S=a.service;M=round(4+S+.3,3);G=-M-4;B2=G-M;B3=B2-M
p.update(variant='v9',title='KERN V9 · Dropped garage & controlled research routes',revision='v9-circulation-drop',geometryVersion=5)
p['floorModule']={'occupiedClear':4,'serviceClear':S,'slab':.3,'floorToFloor':M,'basis':a.basis,'note':'Occupied height, usable service-zone clearance and slab allowance are separate. Concept game environment; structure, access and life safety are not engineered.'}
p['serviceRoute']={'clearHeight':S,'clearWidth':.8,'posture':'crouched','standingNominalHeight':1.80,'crouchedNominalHeight':1.23,'capsuleDiameter':.60,'crouchedNominalHeadroom':round(S-1.23,2),'pipeRule':'Pipes, ducts and cable trays must remain outside the reserved unobstructed 1.5 m high × 0.8 m wide route; allocate utilities alongside it.','runtimeTested':False,'source':'Read-only active Unity Character.prefab motor overrides, lines 286/294; DynamicRigidbodyCharacterMotor.cs line 1750. Capsule hover is included in floor-relative clearance.'}
p['garageSection']={'normalB1Datum':-M,'floor':G,'drop':4,'occupiedClear':8,'clearTop':G+8,'serviceClear':S,'serviceTop':-.3,'slabTop':0,'belowFloor':'B2','belowFloorZ':B2,'belowClear':4,'belowServiceClear':S,'belowSlab':.3,'note':'Whole B2 and B3 datums move down to preserve full research and maintenance rooms below the dropped garage. No overlapping basement program.'}
p['operationsSection']={'floor':0,'clearTop':2*M-S-.3,'serviceTop':2*M-.3,'slabTop':2*M,'voidLevel':'L1','note':'No intermediate L1 floor or services across Operations.'}
for k,z in {'L0':0,'L1':M,'L2':2*M,'L3':3*M,'B1':-M,'B2':B2,'B3':B3}.items():
 f=p['floors'][k];f['z']=round(z,3);f['elevation']=f'{z:+.2f} m';f['clearHeight']=4
 for r in f['rooms']:
  r.pop('z',None)
  if r['id']=='stair':r['stairDetail']=f'Standard {M:.1f} m rise: 36 risers, 2 flights, 1.4 m clear width and landings, 0.27 m going. B1–B2 adds intermediate landing at {G:.2f} m (no floor access).'

def room(k,id):return next(r for r in p['floors'][k]['rooms'] if r['id']==id)
def add(k,id,name,x,y,w,h,t='circulation',**kw):
 r=dict(id=id,name=name,x=x,y=y,w=w,h=h,type=t,**kw);p['floors'][k]['rooms'].append(r);return r
def remove(k,*ids):
 f=p['floors'][k];f['rooms']=[r for r in f['rooms'] if r['id'] not in ids];f['doors']=[d for d in f['doors'] if not set(ids)&{d['a'],d['b']}]
def door(k,a,b,w=1.2,**kw):p['floors'][k]['doors'].append({'id':a+'_'+b,'a':a,'b':b,'width':w,'offset':.5,**kw})
def omit(k,a,b):p['floors'][k]['doors']=[d for d in p['floors'][k]['doors'] if {d['a'],d['b']}!={a,b}]
# L0: separate main stair lobby and the annotated freight-side public passage.
f=p['floors']['L0'];room('L0','archive').update(y=12,h=8);omit('L0','archive','stair');add('L0','stairlanding','Main stair landing',8,10,6,2);door('L0','stair','stairlanding');door('L0','stairlanding','westhall',1,kind='open')
room('L0','issue').update(w=8,name='Equipment issue / cargo staging');remove('L0','cleanlanding');add('L0','freightreturn','Main passage / freight lobby',14,23,4,9,diagramLabel='FREIGHT\nPASSAGE');add('L0','cargoturn','Cargo corridor turn',18,23,6,3)
omit('L0','issue','freight');omit('L0','westelbow','issue');door('L0','westelbow','freightreturn',1,kind='open');door('L0','freightreturn','cargoturn',1,kind='open');door('L0','cargoturn','courtleg',1,kind='open');door('L0','freightreturn','issue',1.8);door('L0','freightreturn','freight',2.4)
ops=2*M-S-.3;room('L0','control').update(height=ops,diagramLabel=f'OPERATIONS HALL\n{ops:.1f} m CLEAR')
f['note']='Dedicated main-stair landing reaches West Passage without passing through Archive. The freight opens directly to the extended main passage; Equipment Issue is set back to its west. Cargo Return is now a continuous corridor turn. Bent east arrival, west-only Operations entry and open-sky courtyard are retained.'
# B1: both new stairs fit north of the untouched 408 m² garage.
f=p['floors']['B1'];remove('B1','stairlanding','northreturn');f['doors']=[d for d in f['doors'] if d['a'] not in ['stair'] and d['b'] not in ['stair']]
add('B1','stairlanding','Clean B1 stair lobby',12,2,6,8,diagramLabel=f'CLEAN LOBBY\n{(-M):+.2f} m')
add('B1','transferstair','Clean transfer stair · 4 m rise',14,10,4,8,'core',z=G,locked=True,stairTransition=True,upperZ=-M,lowerZ=G,diagramLabel='CLEAN STAIR\nUP 4.0 m',stairDetail='24 risers × 0.1667 m; two flights; 1.4 m clear width and landings; 0.27 m going. Both landings are at the north end; west upper door to clean lobby and east lower door to gowning.')
add('B1','gown','Clean gowning / return',18,8,6,5,'service',z=G)
add('B1','wash','Garage return / decon wash',18,13,6,5,'service',z=G)
add('B1','artifactstair','Dedicated artifact stair',6,10,8,8,'core',z=G,locked=True,diagramLabel='ARTIFACT STAIR\nDOWN TO B2',stairDetail=f'Independent garage–B2 stair; {M:.1f} m rise, 36 risers in two flights, 1.4 m clear width / landings, 0.27 m going. South-side landings connect to garage and B2 dirty arrival.')
for r in f['rooms']:
 if r['id'] not in ['stair','stairlanding','transferstair']:r['z']=G
 if r.get('garagePart'):r['height']=8
 if r.get('boardedSection'):r.update(height=4,ceilingZ=G+4,serviceClear=S,overheadVoid=True)
room('B1','garage').update(diagramLabel='GARAGE / EXPEDITION BAY\n408 m² TOTAL · 8 m CLEAR')
room('B1','garagewide').update(diagramLabel='TURNING / LOADING\n8 m CLEAR')
door('B1','stair','stairlanding',offset=1);door('B1','stairlanding','transferstair');door('B1','transferstair','gown',offset=0);door('B1','gown','wash');door('B1','wash','garagewide',1.5);door('B1','garage','artifactstair',1.5)
f.update(name='Dropped garage · clean stair return',elevation=f'Lobby {-M:+.2f} / garage {G:+.2f} m',garageClearHeight=8,garageZ=G,cleanLobbyZ=-M)
f['note']=f'Garage remains 408 m² in its V8 footprint, with floor at {G:+.2f} m and 8 m clear height. It is 4 m below the clean B1 lobby ({-M:+.2f} m). Garage → wash → gowning → full 24-riser transfer stair → main-stair lobby. A different 8 × 8 m stair descends directly to B2 dirty arrival and decon. Freight has one garage stop, at {G:+.2f} m, with no redundant lobby-level stop. The boarded 280 m² wing shares the garage floor but has a 4 m ceiling and unused overhead void.'
# B2: a clean staff entry, one controlled dirty return, and a separate straight cargo chain.
f=p['floors']['B2'];remove('B2','stairlanding','westhall','researchhall','gown','wash','dirty','unload')
add('B2','stairlanding','Main stair landing',12,2,6,8);add('B2','westhall','Clean staff return',14,10,4,8);add('B2','researchhall','Clean research hall',18,13,4,7)
add('B2','artifactstair','Dedicated artifact stair',6,10,8,8,'core',locked=True,diagramLabel='ARTIFACT STAIR\nUP TO GARAGE',stairDetail=f'{M:.1f} m rise, 36 risers in two flights; 1.4 m clear width and landings, 0.27 m going; separate from NW main stair.')
add('B2','dirtyarrival','Dirty arrival landing',6,18,8,2,diagramLabel='DIRTY ARRIVAL');add('B2','dirty','Dirty gear / undress',6,20,6,6,'service');add('B2','dirtyfreight','Dirty freight return',6,26,6,6,'service');add('B2','wash','Decon wash',12,23,6,3,'service');add('B2','gown','Clean gowning',14,18,4,5,'service');add('B2','unload','Dirty freight lobby',12,26,6,6);add('B2','dirtyexit','Lab / intake dirty return',18,20,4,6,'service')
door('B2','stair','stairlanding',offset=1);door('B2','stairlanding','westhall',1,kind='open');door('B2','westhall','gown');door('B2','gown','researchhall');door('B2','researchhall','analysis',1.5)
door('B2','artifactstair','dirtyarrival',1.5);door('B2','dirtyarrival','dirty',1.5);door('B2','dirty','wash');door('B2','wash','gown');door('B2','dirty','dirtyfreight',1.5);door('B2','dirtyfreight','unload',1.5);door('B2','unload','freight',2.4)
door('B2','analysis','dirtyexit');door('B2','intake','dirtyexit');door('B2','dirtyexit','wash');omit('B2','analysis','test')
f['entrances']=['stair','freight','artifactstair'];f['note']='Cargo: east through-car freight door → intake/scanner → analysis → artifact store → containment. Clean staff: main stair → clean return → gowning → research hall → analysis. Garage personnel: independent artifact stair → dirty arrival → undress → wash → gowning. Dirty lab/intake exit uses its own return to wash; the west freight door serves dirty gear deliberately. No Research Hall–Intake door and no Analysis–Test Observation shortcut. Test Observation remains reached through Containment.'
# Lower levels move as complete floors, not cut-outs under the garage.
p['floors']['B3']['note']=f'Complete maintenance level lowered to {B3:+.2f} m, beneath the complete B2 research level. Six stabilization nodes, exciter, service galleries and cave progression retain their V8 plan. Normal rooms remain 4 m clear with a separate {S:.1f} m service zone and 0.3 m slab.'
p['floors']['L1']['note']=f'Room layout preserved from V8. Entire Operations footprint remains a void at L1 ({M:+.2f} m). Quarters and the 80 m² boarded listening suite retain 4 m clear height plus separate {S:.1f} m service clearance.'
p['floors']['L2']['note']=f'Partial roof-service landing at {2*M:+.2f} m; no extra occupied hidden floor. Operations roof is at this level. Open-sky courtyard and guarded west service route are retained.'
p['floors']['L3']['note']=f'Outdoor observation / radar deck at {3*M:+.2f} m. Upper plan is retained; freight and NW main stair are aligned with lower levels. No bridge spans the courtyard.'
levels=['B3','B2','B1','L0','L1','L2','L3'];stops=[{'floor':k,'z':G if k=='B1' else p['floors'][k]['z']} for k in levels]
p['verticalConnections']=[{'id':'main-stair','type':'stair','room':'stair','floors':levels,'footprint':{'x':8,'y':2,'w':4,'h':8},'standardStair':{'risers':36,'riserHeight':M/36,'flights':2,'flightWidth':1.4,'landingDepth':1.4,'treadDepth':.27},'B1toB2':{'rise':M+4,'intermediateZ':G,'intermediateDoor':False,'flightGroups':[{'rise':4,'risers':24,'flights':2},{'rise':M,'risers':36,'flights':2}]}},{'id':'freight','type':'lift','room':'freight','floors':levels,'footprint':{'x':18,'y':26,'w':4,'h':6},'stops':stops,'throughCar':True,'doorClearWidth':2.4,'note':'B1 stop aligns with dropped garage floor, not clean B1 lobby. Lift pit / overrun provisional.'},{'id':'artifact-stair','type':'stair','room':'artifactstair','floors':['B1','B2'],'footprint':{'x':6,'y':10,'w':8,'h':8},'upperZ':G,'lowerZ':B2,'risers':36,'riserHeight':M/36,'flights':2,'flightWidth':1.4,'landingDepth':1.4,'treadDepth':.27}]
p['splitLevelConnections']=[{'id':'B1-clean-return','room':'transferstair','floor':'B1','lowerZ':G,'upperZ':-M,'rise':4,'risers':24,'riserHeight':4/24,'flightWidth':1.4,'landingDepth':1.4,'treadDepth':.27,'flights':2,'route':['garage','garagewide','wash','gown','transferstair','stairlanding','stair']}]
p['section']=[{'label':k+' · '+p['floors'][k]['name'],'z':p['floors'][k]['z']} for k in p['floors']];p['section'].insert(5,{'label':'G · garage / boarded wing / freight stop','z':G});p['overlooks'][0]['guardTop']=M+1.1
p['routeStudy']={'cargo':['B1:garage','B1:freight','B2:freight','B2:intake','B2:analysis','B2:artifact','B2:containment'],'cleanStaff':['B2:stair','B2:stairlanding','B2:westhall','B2:gown','B2:researchhall','B2:analysis'],'garagePersonnel':['B1:garage','B1:artifactstair','B2:artifactstair','B2:dirtyarrival','B2:dirty','B2:wash','B2:gown','B2:researchhall','B2:analysis'],'dirtyExit':['B2:analysis','B2:dirtyexit','B2:wash','B2:gown','B2:westhall','B2:stairlanding','B2:stair'],'garageCleanReturn':['B1:garage','B1:garagewide','B1:wash','B1:gown','B1:transferstair','B1:stairlanding','B1:stair'],'L0freight':['L0:freight','L0:freightreturn','L0:westelbow','L0:westhall','L0:stairlanding','L0:stair'],'boardedSections':p['routeStudy']['boardedSections']}
p['designSequence']=[f'Service routes reserve {S:.1f} m clear height × 0.8 m clear width for crouching; pipes stay outside that route. Controller nominal clearance is 1.23 m crouched / 1.80 m standing; runtime traversal is untested.',f'Normal module: 4.0 m occupied + {S:.1f} m service + 0.3 m slab = {M:.1f} m.',f'Garage: floor {G:+.2f} m; 8 m clear. Clean B1 lobby {-M:+.2f} m; 4 m full stair between them.',f'B2 {B2:+.2f} m and B3 {B3:+.2f} m keep complete 4 m-clear floors beneath the garage.','Three distinct vertical routes: NW main stair, dedicated artifact stair, freight shaft.','Boarded sections stay 280 m² B1 + 80 m² L1; upper room layouts are retained.']
p['approaches'][0]['note']=f'West vehicle opening at dropped garage floor {G:+.2f} m; 5 m clear opening. Hillside / ramp gradient and ground interface remain schematic.'
p['sourceBaseline']='V8 full-height freight / doubled garage. V9 is a 2D floorplan and vertical-section revision only; no Blender or 3D changes.'
root.joinpath('kern-floorplans-v9.json').write_text(json.dumps(p,indent=2));root.joinpath('seed-v9.js').write_text('window.KERN_V9 = '+json.dumps(p,indent=2)+';')
print(json.dumps({'module':M,'garage':G,'B2':B2,'B3':B3,'opsClear':ops,'basis':a.basis}))
