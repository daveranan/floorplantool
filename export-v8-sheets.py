import json,re,html,textwrap,pathlib,subprocess
P=pathlib.Path('dist'); OUT=pathlib.Path('/workspace/scratch/a3097e26a27a/kern_floorplans_v8');OUT.mkdir(exist_ok=True)
p=json.loads((P/'kern-floorplans-v8.json').read_text());
def txt(x,y,s,size=24,fill='#263d44',weight='normal',anchor='start'):
 return f'<text x="{x}" y="{y}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{html.escape(str(s))}</text>'
def rect(x,y,w,h,fill,stroke='none',sw=1):return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
def base(w,h):return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'+rect(0,0,w,h,'#f7f7f2')
for k,f in p['floors'].items():
 raw=(P/f'kern-v8-{k}.svg').read_text();inner=raw[raw.index('>')+1:raw.rindex('</svg>')]
 inner=re.sub(r'<path d="M0 43h10.*?</text>', '',inner,count=1)
 inner=re.sub(r'<text[^>]*y="44"[^>]*>.*?</text>','',inner)
 inner=re.sub(r'<text[^>]*>KERN /.*?</text>','',inner)
 rooms=f['rooms'];x0=min(r['x'] for r in rooms)-5;x1=max(r['x']+r['w'] for r in rooms)+5;y0=min(r['y'] for r in rooms)-1;y1=max(r['y']+r['h'] for r in rooms)+2
 scale=min(1320/(x1-x0),1120/(y1-y0));drawH=(y1-y0)*scale
 noteLines=textwrap.wrap(f['note'],91);height=int(210+drawH+240+len(noteLines)*31)
 s=base(1400,height)+rect(0,0,1400,142,'#1e3037')+txt(45,56,'KERN / V8',26,'#efb66f','bold')+txt(45,103,f'{k}  ·  {f["name"]}',32,'#ffffff')+txt(1355,56,f['elevation'],29,'#efb66f','bold','end')+txt(1355,103,'↑ NORTH',20,'#d5e1e3','normal','end')
 s+=f'<defs><clipPath id="planclip"><rect x="20" y="162" width="1360" height="{drawH+12}"/></clipPath></defs><g clip-path="url(#planclip)"><g transform="translate({40-x0*scale} {175-y0*scale}) scale({scale})">{inner}</g></g>'
 fy=185+drawH;s+=f'<path d="M50 {fy+25}h{scale*10}m-{scale*10} -7v14m{scale*5} -14v14m{scale*5} -14v14" stroke="#34464b" stroke-width="2"/>'+txt(50,fy+60,'0',18)+txt(50+scale*5,fy+60,'5',18,anchor='middle')+txt(50+scale*10,fy+60,'10 m',18,anchor='middle')
 clear='OPEN DECK · CORE HEADHOUSES ONLY' if k=='L3' else '4 m CLEAR + 1 m SERVICE + 0.3 m SLAB'
 if k=='L0':clear='OPERATIONS: 9.3 m CLEAR · L1 VOID'
 if k=='L2':clear='PARTIAL ROOF SERVICE · NO HIDDEN FLOOR'
 s+=txt(1350,fy+44,clear,22,'#52696d','bold','end')
 fy+=95;s+=rect(40,fy,1320,2,'#c4cece');fy+=36
 legend=[('Research','#b9cbd0'),('Living','#d4bb94'),('Service','#d0d3c8'),('Circulation','#e9e7df'),('Boarded','#cfa989')]
 for j,(name,col) in enumerate(legend):s+=rect(45+j*255,fy-17,18,18,col)+txt(75+j*255,fy,name,21)
 fy+=45
 for line in noteLines:s+=txt(45,fy,line,23,'#536970');fy+=31
 s+=txt(45,height-24,'Concept floor plan · 50% floor tints · Symbolic stair treads / door swings · Not a construction plan',18,'#718389')+'</svg>'
 out=P/f'KERN_V8_{k}.svg';out.write_text(s)
 subprocess.run(['inkscape',str(out),'--export-type=png',f'--export-filename={OUT}/KERN_V8_{k}.png'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 (P/f'KERN_V8_{k}.png').write_bytes((OUT/f'KERN_V8_{k}.png').read_bytes())
# Vertical stack: authoritative elevations, with actual 1 m crawl bands above clear ceilings.
W,H=1400,1700;S=30;top=225
y=lambda z:top+(21.2-z)*S
s=base(W,H)+rect(0,0,W,142,'#1e3037')+txt(45,57,'KERN / V8',26,'#efb66f','bold')+txt(45,107,'Vertical stack & clearances',37,'#fff')+txt(45,182,'5.3 m floor module  =  4.0 m clear  +  1.0 m clear service zone  +  0.3 m slab',26,'#263d44','bold')
s+='<defs><pattern id="mep" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#dce9d0"/><path d="M0 0v8" stroke="#849b77" stroke-width="2"/></pattern></defs>'
xA,wA,xO,wO=240,380,645,380;xF,wF,xS,wS=1100,65,1245,65
for k in ['B3','B2','B1','L0','L1','L2']:
 f=p['floors'][k];z=f['z'];span=wA if k in ['L0','L1','L2'] else wA+25+wO
 color={'B3':'#e5e6de','B2':'#dbe5e7','B1':'#e5e6de','L0':'#dbe5e7','L1':'#e8dbc5','L2':'#e5e6de'}[k]
 s+=rect(xA,y(z+4),span,4*S,color,'#72868c',1)+rect(xA,y(z+5),span,S,'url(#mep)')+rect(xA,y(z+5.3),span,.3*S,'#3b5158')
 name={'B3':'Maintenance / caves','B2':'Artifact analysis','B1':'Garage 408 m² + boarded wing','L0':'Main occupied wings','L1':'Quarters + boarded suite 02','L2':'Partial roof service'}[k]
 s+=txt(xA+18,y(z+2),name,24)+txt(xA+18,y(z+.9),'4.0 m clear',22,'#6b7d82')
 if k=='L2':s+=txt(xO+18,y(z+2.4),'No full upper floor',23,'#809095')+txt(xO+18,y(z+1.2),'Open roof above Operations',21,'#809095')
 # keep the service label inside the wide hatch band
 s+=txt(xA+span-10,y(z+4.45),'1.0 m service',19,'#466241','normal','end')
# Double-height Operations wipes no structural bands because they exist only in occupied-wing column.
s+=rect(xO,y(9.3),wO,9.3*S,'#dbe5e7','#526c75',2)+rect(xO,y(10.3),wO,S,'url(#mep)')+rect(xO,y(10.6),wO,.3*S,'#3b5158')
s+=txt(xO+wO/2,y(7.5),'OPERATIONS',29,'#314d56','bold','middle')+txt(xO+wO/2,y(6.2),'9.3 m CLEAR',27,'#314d56','bold','middle')
s+=f'<path d="M{xO} {y(5.3)}h{wO}" stroke="#8a9fa5" stroke-width="2" stroke-dasharray="9 7"/>'+txt(xO+wO/2,y(5.3)-10,'L1 VOID · NO SLAB / MEP',18,'#667f88','normal','middle')+txt(xO+wO/2,y(2.6),'No intermediate floor',23,'#667f88','normal','middle')
s+=txt(xO+wO/2,y(9.75),'1.0 m service',20,'#466241','normal','middle')
# L3 deck and small core headhouses, not a full storey.
s+=rect(xA,y(15.9)-5,wA,9,'#3b5158')+txt(xA+15,y(17.4),'L3 OUTDOOR OBSERVATION',24,'#314d56','bold')+txt(xA+15,y(16.35),'Radar deck + guarded service walk',22,'#6b7d82')
s+=rect(xF-16,y(21.2),wF+32,y(15.9)-y(21.2),'#edf0e9','#8da0a2',1)+rect(xS-16,y(21.2),wS+32,y(15.9)-y(21.2),'#edf0e9','#8da0a2',1)
s+=rect(xF,y(20.9),wF,y(-15.9)-y(20.9),'#eed7b8','#8c6a3b',2)
s+=rect(xS,y(19.9),wS,y(-15.9)-y(19.9),'#e5e7e1','#6d8085',2)
for k in ['L3','L2','L1','L0','B1','B2','B3']:
 z=p['floors'][k]['z'];yy=y(z);s+=txt(45,yy-13,k,32,'#263d44','bold')+txt(45,yy+18,p['floors'][k]['elevation'],24,'#6b7d82')+f'<path d="M190 {yy}H1065" stroke="#aab9bc" stroke-width="1" stroke-dasharray="6 8"/>'
 s+=rect(xF-9,yy-10,wF+18,20,'#a57539')+txt(xF+wF/2,yy-24,k,16,'#765b36','bold','middle')
 if k!='L3':
  pts=[]
  for t in range(12):pts.append((xS+8+(wS-16)*(t%2),yy-(t/11)*5.3*S))
  s+='<polyline points="'+' '.join(f'{a},{b}' for a,b in pts)+'" fill="none" stroke="#859b9f" stroke-width="2"/>'
s+=txt(xF+wF/2,1375,'FREIGHT',20,'#8b642d','bold','middle')+txt(xS+wS/2,1375,'NW STAIR',20,'#506b73','bold','middle')
s+=txt(45,1410,'Freight: direct 2.4 m garage loading door; all seven levels served',25,'#8b642d','bold')+txt(45,1450,'Through-car unloading on B2 / B3. Independent NW stair: 4 × 8 m, 30 risers per level.',23,'#536970')
s+=txt(45,1500,'The 1 m zone is genuinely clear above occupied rooms. It is not another occupied floor.',23,'#536970')+txt(45,1550,'Roof core caps shown to +21.20 m. Lift pit / overrun and structural depth remain provisional.',23,'#536970')+txt(45,1600,'Diagrammatic section · Elevations govern · Not an engineered structural, lift or life-safety design',22,'#718389')
s+='</svg>'; (P/'kern-v8-section.svg').write_text(s);(OUT/'KERN_V8_Vertical_Stack.svg').write_text(s)
subprocess.run(['inkscape',str(P/'kern-v8-section.svg'),'--export-type=png',f'--export-filename={OUT}/KERN_V8_Vertical_Stack.png'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
(P/'KERN_V8_Vertical_Stack.png').write_bytes((OUT/'KERN_V8_Vertical_Stack.png').read_bytes())
print('Created 7 annotated PNG plan sheets and vertical-stack sheet')
