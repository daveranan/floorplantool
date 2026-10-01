const fs=require('fs'),vm=require('vm'),assert=require('assert'),{JSDOM}=require('jsdom');
const scripts=['seed','seed-v2','seed-v3','seed-v4','seed-v5','seed-v6','seed-v7','seed-v8initial','seed-v8','seed-v9','seed-useredit20260930','seed-v10','seed-v11','seed-v12','objects','stair-types','geometry','stair-detail','stair-author','buildings','app','ui','preview-geometry','exports','commands','object-editor','place-picker'];
function boot(initial={}){
 const dom=new JSDOM(fs.readFileSync('dist/index.html','utf8'),{url:'https://example.test',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window,doc=w.document;w.alert=m=>{throw Error('Unexpected native alert: '+m)};w.prompt=()=>{throw Error('Unexpected native prompt')};w.confirm=()=>{throw Error('Unexpected native confirmation')};
 Object.assign(w.HTMLDialogElement.prototype,{showModal(){this.open=true},close(){this.open=false;this.dispatchEvent(new w.Event('close'))}});
 w.SVGElement.prototype.getBoundingClientRect=()=>({width:900,height:650,x:0,y:0,top:0,left:0,bottom:650,right:900});w.SVGElement.prototype.setPointerCapture=()=>{};w.SVGElement.prototype.hasPointerCapture=()=>false;w.SVGElement.prototype.releasePointerCapture=()=>{};
 w.SVGSVGElement.prototype.createSVGPoint=()=>({x:0,y:0,matrixTransform(){return{x:this.x,y:this.y}}});w.SVGSVGElement.prototype.getScreenCTM=()=>({inverse(){return{}}});
 w.HTMLElement.prototype.getClientRects=function(){return this.hidden||this.closest('[hidden]')?[]:[{}]};
 const downloads=[];w.URL.createObjectURL=b=>{downloads.push(b);return 'blob:test'};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){};
 for(const [k,v]of Object.entries(initial))w.localStorage.setItem(k,v);
 for(const script of scripts)vm.runInContext(fs.readFileSync('dist/'+script+'.js','utf8'),dom.getInternalVMContext(),{filename:script+'.js'});
 return{dom,w,doc,get:id=>doc.getElementById(id),run:s=>vm.runInContext(s,dom.getInternalVMContext()),downloads,close:()=>{for(const e of doc.querySelectorAll('details'))e.ontoggle=null;w.close()}};
}

module.exports={boot};
