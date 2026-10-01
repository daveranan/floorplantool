import json,re,html,textwrap,pathlib,subprocess
P=pathlib.Path('dist');OUT=pathlib.Path('/workspace/scratch/a3097e26a27a/kern_floorplans_v10');OUT.mkdir(exist_ok=True)
p=json.loads((P/'kern-floorplans-v10.json').read_text());m=p['floorModule'];S=m['serviceClear'];M=m['floorToFloor'];G=p['garageSection']['floor'];ops=p['operationsSection']['clearTop']
def txt(x,y,s,size=24,fill='#263d44',weight='normal',anchor='start'):
 return f'<text x="{x}" y="{y}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{html.escape(str(s))}</text>'
def rect(x,y,w,h,fill,stroke='none',sw=1):return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
def base(w,h):return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'+rect(0,0,w,h,'#f7f7f2')
def png(path,out):subprocess.run(['inkscape',str(path),'--export-type=png',f'--export-filename={out}'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
for k,f in p['floors'].items():
 raw=(P/f'kern-v10-{k}.svg').read_text();inner=raw[raw.index('>')+1:raw.rindex('</svg>')];inner=re.sub(r'<path d="M0 43h10.*?</text>','',inner,count=1);inner=re.sub(r'<text[^>]*y="44"[^>]*>.*?</text>','',inner);inner=re.sub(r'<text[^>]*>KERN /.*?</text>','',inner)
 rooms=f['rooms'];x0=min(r['x'] for r in rooms)-5;x1=max(r['x']+r['w'] for r in rooms)+5;y0=min(r['y'] for r in rooms)-1;y1=max(r['y']+r['h'] for r in rooms)+2;scale=min(1320/(x1-x0),1120/(y1-y0));drawH=(y1-y0)*scale
 noteLines=textwrap.wrap(f['note'],94);height=int(210+drawH+240+len(noteLines)*31);s=base(1400,height)+rect(0,0,1400,142,'#1e3037')+txt(45,56,'KERN / V10',26,'#efb66f','bold')+txt(45,103,f'{k}  ·  {f["name"]}',32,'#fff')+txt(1355,56,f['elevation'],24 if k=='B1' else 29,'#efb66f','bold','end')+txt(1355,103,'↑ NORTH',20,'#d5e1e3','normal','end')
 s+=f'<defs><clipPath id="planclip"><rect x="20" y="162" width="1360" height="{drawH+12}"/></clipPath></defs><g clip-path="url(#planclip)"><g transform="translate({40-x0*scale} {175-y0*scale}) scale({scale})">{inner}</g></g>'
 fy=185+drawH;s+=f'<path d="M50 {fy+25}h{scale*10}m-{scale*10} -7v14m{scale*5} -14v14m{scale*5} -14v14" stroke="#34464b" stroke-width="2"/>'+txt(50,fy+60,'0',18)+txt(50+scale*5,fy+60,'5',18,anchor='middle')+txt(50+scale*10,fy+60,'10 m',18,anchor='middle')
 clear=f'4 m CLEAR + {S:g} m SERVICE + 0.3 m SLAB'
 if k=='B1':clear='GARAGE 8 m CLEAR · CLEAN LOBBY 4 m ABOVE'
 if k=='L0':clear=f'OPERATIONS {ops:g} m CLEAR · L1 VOID'
 if k=='L2':clear='ENCLOSED SERVICE ROUTE · OPEN COURT'
 if k=='L3':clear='OPEN OBSERVATION DECK · UPPER PLAN RETAINED'
 s+=txt(1350,fy+44,clear,22,'#52696d','bold','end');fy+=95;s+=rect(40,fy,1320,2,'#c4cece');fy+=36
 for j,(name,col) in enumerate([('Research','#b9cbd0'),('Living','#d4bb94'),('Service','#d0d3c8'),('Circulation','#e9e7df'),('Boarded','#cfa989')]):s+=rect(45+j*255,fy-17,18,18,col)+txt(75+j*255,fy,name,21)
 fy+=45
 for line in noteLines:s+=txt(45,fy,line,23,'#536970');fy+=31
 s+=txt(45,height-24,'Concept gameplay plan · Door swings / stair treads symbolic · Dimensions govern · Not a construction plan',18,'#718389')+'</svg>'
 file=P/f'KERN_V10_{k}.svg';file.write_text(s);(OUT/file.name).write_text(s);png(file,OUT/f'KERN_V10_{k}.png');(P/f'KERN_V10_{k}.png').write_bytes((OUT/f'KERN_V10_{k}.png').read_bytes())
# Section with independent occupied/service/slab bands and the actual dropped garage.
W,H=1700,2050;scale=27;topZ=4*M;top=260;y=lambda z:top+(topZ-z)*scale
s=base(W,H)+rect(0,0,W,148,'#1e3037')+txt(45,56,'KERN / V10',26,'#efb66f','bold')+txt(45,109,'Vertical stack · dropped garage / complete basements',37,'#fff')
s+=txt(45,195,f'Normal module: 4.0 m occupied + {S:.1f} m clear services + 0.3 m slab = {M:.1f} m',27,'#263d44','bold')+txt(45,231,'Garage floor drops 4.0 m; B2 and B3 move down in full. No research volume is removed.',24,'#536970')
s+='<defs><pattern id="mep" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#e0ead4"/><path d="M0 0v8" stroke="#8a9e7b" stroke-width="2"/></pattern><pattern id="empty" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="11" height="11" fill="#f0efea"/><path d="M0 0v11" stroke="#d6d7cf" stroke-width="1"/></pattern></defs>'
xA,wA,xB,wB,xC,wC=255,370,665,370,1075,275
for x,w,label in [(xA,wA,'OCCUPIED / CLEAN CORE'),(xB,wB,'GARAGE / OPERATIONS'),(xC,wC,'BOARDED B1 WING')]:s+=txt(x+w/2,272,label,18,'#637b80','bold','middle')
def band(x,w,z,clear,label,col='#dbe5e7',small=False):
 global s
 s+=rect(x,y(z+clear),w,clear*scale,col,'#72868c',1)+rect(x,y(z+clear+S),w,S*scale,'url(#mep)')+rect(x,y(z+clear+S+.3),w,.3*scale,'#3b5158')
 s+=txt(x+w/2,y(z+clear/2)+2,label,21 if not small else 18,'#314d56','bold','middle')+txt(x+w/2,y(z+.55),f'{clear:g} m clear',20,'#6b7d82','normal','middle')+txt(x+w/2,y(z+clear+S/2)+6,f'{S:g} m clear services',18,'#466241','normal','middle')
# Upper ordinary occupied wings.
for k,label in [('L0','Main rooms'),('L1','Quarters'),('L2','Partial roof service')]:band(xA,wA,p['floors'][k]['z'],4,label,'#e8dbc5' if k=='L1' else '#dbe5e7')
band(xB,wB,0,ops,'OPERATIONS')
s+=f'<path d="M{xB} {y(M)}h{wB}" stroke="#8a9fa5" stroke-width="2" stroke-dasharray="9 7"/>'+txt(xB+wB/2,y(M)-12,'L1 VOID · NO SLAB / MEP',18,'#667f88','normal','middle')
s+=rect(xA,y(3*M)-4,wA,8,'#3b5158')+txt(xA+10,y(3*M)-25,'L3 OUTDOOR OBSERVATION',22,'#314d56','bold')
# Garage and side rooms: one continuous eight-metre high bay.
band(xB,wB,G,8,'GARAGE · 420 m²','#dfe4d8');band(xA,wA,-M,4,'Clean B1 lobby','#e5e6de');band(xC,wC,G,4,'BOARDED 01','#e7d3bd',True)
voidBase=G+4+S+.3;s+=rect(xC,y(0),wC,(0-voidBase)*scale,'url(#empty)','#c9cdc6',1)+txt(xC+wC/2,y(voidBase/2)-9,'UNUSED OVERHEAD',18,'#87948d','bold','middle')+txt(xC+wC/2,y(voidBase/2)+18,'No occupied room',18,'#87948d','normal','middle')
# 4 m full transfer stairs; separate research stairs continue one full module.
s+=rect(xA,y(-M),wA,4*scale,'#f0f0e9','#b6c1bb',1);pts=[]
for t in range(12):pts.append((xA+45+(wA-90)*(t%2),y(-M)+(t/11)*4*scale))
s+='<polyline points="'+' '.join(f'{x},{yy}' for x,yy in pts)+'" fill="none" stroke="#8ca092" stroke-width="2"/>'+txt(xA+wA/2,y(G+2.5),'CLEAN TRANSFER',20,'#526c5c','bold','middle')+txt(xA+wA/2,y(G+.8),'4 m rise · 24 risers',20,'#526c5c','normal','middle')
for k,label in [('B2','COMPLETE ARTIFACT RESEARCH'),('B3','COMPLETE MAINTENANCE / CAVES')]:band(xA,wA+wB+40+wC+40,p['floors'][k]['z'],4,label,'#dbe5e7' if k=='B2' else '#e5e6de')
# Elevation marks and freight/main-stair schematic columns.
xF,wF,xSt,wSt=1440,65,1570,65
s+=rect(xF,y(4*M-.3),wF,y(p['floors']['B3']['z'])-y(4*M-.3),'#eed7b8','#8c6a3b',2)+rect(xSt,y(4*M-.3),wSt,y(p['floors']['B3']['z'])-y(4*M-.3),'#e5e7e1','#6d8085',2)
marks=[('L3',3*M),('L2',2*M),('L1',M),('L0',0),('B1 lobby',-M),('G / garage',G),('B2',p['floors']['B2']['z']),('B3',p['floors']['B3']['z'])]
for k,z in marks:
 yy=y(z);s+=txt(42,yy-11,k,26,'#263d44','bold')+txt(42,yy+18,f'{z:+.2f} m',24,'#6b7d82')+f'<path d="M215 {yy}H1380" stroke="#aab9bc" stroke-width="1" stroke-dasharray="6 8"/>'
 if k!='B1 lobby':s+=rect(xF-8,yy-8,wF+16,16,'#a57539')
 if k!='G / garage':s+=rect(xSt-5,yy-4,wSt+10,8,'#718b8c')
s+=txt(xF+wF/2,1595,'FREIGHT',18,'#8b642d','bold','middle')+txt(xSt+wSt/2,1595,'NW STAIR',18,'#506b73','bold','middle')
fy=1660
notes=[f'Freight stops: B3, B2, garage ({G:+.2f} m), L0, L1, L2, L3. No B1 clean-lobby stop.',f'B1 clean lobby ({-M:+.2f} m) → 24-riser / 4 m transfer stair → gowning → wash → garage.',f'Dedicated artifact stair: garage {G:+.2f} m → B2 {p["floors"]["B2"]["z"]:+.2f} m; aligned 8 × 4 m shaft; flights run east–west.',f'NW main stair B1–B2: two stacked flight groups with a closed intermediate landing at {G:+.2f} m.',f'Services: {S:.1f} m high × 0.8 m wide unobstructed crouch route; pipes / ducts stay outside that route.','Boarded B1 wing shares the garage floor, but remains 4 m clear below an unused overhead void.','Controller: 1.23 m crouched / 1.80 m standing including hover. Traversal still needs an in-game test.', 'Slabs: additional 0.3 m dark bands. Lift pit / overrun, structure and fire strategy remain provisional.']
for line in notes:s+=txt(45,fy,line,23,'#536970');fy+=43
s+='</svg>';(P/'kern-v10-section.svg').write_text(s);(OUT/'KERN_V10_Vertical_Stack.svg').write_text(s);png(P/'kern-v10-section.svg',OUT/'KERN_V10_Vertical_Stack.png');(P/'KERN_V10_Vertical_Stack.png').write_bytes((OUT/'KERN_V10_Vertical_Stack.png').read_bytes())
(OUT/'KERN_V10_Editable_Floorplans.json').write_text(json.dumps(p,indent=2));print('Created seven floorplan sheets and section')
