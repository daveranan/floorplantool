"""Isolated concealed-L2 revision. V10 and the exact uploaded baseline are inputs only."""
import json,copy,pathlib
P=pathlib.Path(__file__).parent/'dist';p=json.loads((P/'kern-floorplans-v10.json').read_text())
p.update(variant='v11',revision='v11-concealed-concrete-L2',title='KERN V11 · Concealed concrete L2')
f=p['floors']['L2'];f['name']='Concealed concrete level';f['note']='Only the NW stair and its small landing are in use. The former doorway beyond the landing is cemented shut. The rest of this level is concealed concrete, not terrace, maintenance space or normal circulation. The NW stair continues through to the L3 observation roof. The freight shaft passes through without an L2 stop. L1 and L3 remain unchanged.'
for r in f['rooms']:
 if r['id']=='stairlanding':r.update(name='L2 stair landing',diagramLabel='STAIR\nLANDING')
 elif r['id']=='freight':r.update(name='Freight shaft · no L2 stop',diagramLabel='FREIGHT SHAFT\nNO L2 STOP',throughOnly=True,access='no-floor-access')
 elif r['id'] not in ['stair','sky']:
  r.update(name='Concealed concrete',type='solid',sealedConcrete=True,program=False,outdoor=False,diagramLabel='SEALED\nCONCRETE' if r['id'] in ['plant','opsroof'] else '')
f['doors']=[d for d in f['doors'] if d['id'] in ['stair_stairlanding','stairlanding_plant']]
for d in f['doors']:
 if d['id']=='stairlanding_plant':d.update(sealed=True,cemented=True,material='concrete infill',label='CEMENTED SHUT',kind='door')
f['entrances']=['stair']
for c in p.get('verticalConnections',[]):
 if c['type']=='lift':
  c['stops']=[stop for stop in c.get('stops',[]) if stop['floor']!='L2'];c['throughOnlyFloors']=['L2']
  c['note']=c.get('note','')+' L2 has no landing access or active lift stop.'
for item in p.get('section',[]):
 if item.get('floor')=='L2' or item.get('id')=='L2':item['note']='Concealed concrete level; NW stair landing only; no freight stop.'
p['concealedLevel']={'floor':'L2','activeRooms':['stair','stairlanding'],'sealedConnection':'stairlanding_plant','material':'concrete','roofAbove':'L3','freightStop':False}
# Editable design parameters, with obsolete nominal annotations removed in this new copy only.
p['stairDesign']={'clearWidth':1.4,'landingDepth':1.4,'treadDepth':.28,'targetRiser':.17,'maxRiser':.18,'minHeadroom':2.2,'perimeter':.2,'centerGap':.2,'waistThickness':.2}
for level in p['floors'].values():
 for r in level['rooms']:
  if 'stairDetail' in r:r['stairDetail']='Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.'
for c in p['verticalConnections']:
 if c['type']!='stair':continue
 if 'standardStair' in c:c['standardStair'].update(risers=34,riserHeight=5.8/34,treadDepth=.28)
 if 'risers' in c:c.update(risers=34,riserHeight=5.8/34,treadDepth=.28)
 if 'requiredEnvelope' in c:c['requiredEnvelope']={'long':7.68,'short':3.4}
 for group in c.get('B1toB2',{}).get('flightGroups',[]):group['risers']=24 if abs(group['rise']-4)<.01 else 34
for c in p.get('splitLevelConnections',[]):c.update(risers=24,riserHeight=4/24,treadDepth=.28)
text=json.dumps(p,indent=2,ensure_ascii=False)+'\n';(P/'kern-floorplans-v11.json').write_text(text);(P/'seed-v11.js').write_text('window.KERN_V11='+text.strip()+';\n')
print('Created isolated V11; V10 and original unchanged')
