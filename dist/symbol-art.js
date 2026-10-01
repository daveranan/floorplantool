/* Shared architectural top-view symbols, normalized to their editable footprint. */
(function(){
const paths={
scanner:'<rect x="4" y="12" width="42" height="76" rx="10"/><path d="M14 20v60m24-60v60M5 29h40M5 71h40"/><rect x="27" y="34" width="68" height="32" rx="7"/><rect x="73" y="40" width="15" height="20" rx="4"/><path d="M33 43h32m-32 14h32M50 34v32"/>',
exam:'<rect x="5" y="20" width="90" height="60" rx="9"/><rect x="12" y="27" width="21" height="46" rx="5"/><path d="M39 23v54M6 12h88M6 88h88M47 24h38m-38 52h38"/><circle cx="12" cy="15" r="3"/><circle cx="87" cy="15" r="3"/><circle cx="12" cy="85" r="3"/><circle cx="87" cy="85" r="3"/>',
decoder:'<rect x="3" y="6" width="94" height="66" rx="3"/><rect x="17" y="14" width="41" height="20" rx="2"/><path d="M23 29h29m-33 15h42m-42 6h42m-42 6h42"/><rect x="70" y="15" width="18" height="32" rx="2"/><circle cx="79" cy="56" r="4"/><path d="M28 83q22-15 44 0v9H28z"/>',
panel:'<rect x="3" y="10" width="94" height="80" rx="3"/><path d="M10 20h80M10 80h80M50 20v60"/><path d="M14 31h23v11H14zM14 56h23v11H14zM63 31h23v11H63zM63 56h23v11H63zM42 33v5m0 22v5m15-32v5m0 22v5"/>',
rack:'<rect x="12" y="4" width="76" height="90" rx="2"/><path d="M21 14h58v61H21zM21 25h58M21 38h58M21 51h58M21 64h58M12 85h76m-68-3v8m60-8v8"/><circle cx="70" cy="85" r="2"/>',
tools:'<rect x="3" y="10" width="94" height="77" rx="3"/><path d="M8 22h84M8 42h84M8 62h84M8 80h84m-57-49h30m-30 20h30m-30 21h30"/>',
radio:'<rect x="3" y="8" width="94" height="69" rx="3"/><rect x="10" y="17" width="42" height="25" rx="2"/><path d="M15 23h32m-32 7h32m-32 7h32M10 52h42"/><circle cx="68" cy="28" r="10"/><circle cx="87" cy="24" r="3"/><circle cx="87" cy="38" r="3"/><path d="M62 56h28m-28 7h28M30 89q20-17 40 0v6H30z"/>',
utility:'<rect x="5" y="5" width="90" height="90" rx="5"/><circle cx="45" cy="49" r="31"/><circle cx="45" cy="49" r="6"/><path d="M43 43Q18 14 23 47l16 5M51 47q31-23 4-27L46 43M47 55q14 36 26 9L51 49M39 53Q9 74 36 80l9-25M84 15v70"/>',
core:'<rect x="4" y="4" width="92" height="92"/><rect x="12" y="12" width="76" height="76"/><path d="M12 12l76 76m0-76L12 88"/>',
text:'<path d="M17 15h66M50 15v72M33 87h34M17 15v15m66-15v15"/>',
duct:'<path d="M5 12h45v34h45v20H30V32H5z"/><path d="M70 66v25h18V66M15 12v20M38 12v20M50 52h20"/>',
crawlway:'<path d="M5 15h48v37h42v27H27V42H5z" stroke-dasharray="6 4"/><path d="M14 28h25v37h44m-8-7l8 7-8 7"/>',
hatch:'<rect x="8" y="8" width="84" height="84"/><rect x="17" y="17" width="66" height="66"/><path d="M17 17l66 66m0-66L17 83M39 83h22"/>',
vent:'<rect x="8" y="8" width="84" height="84"/><path d="M18 22h64m-64 14h64m-64 14h64m-64 14h64m-64 14h64"/>'};
window.KERN_SYMBOL_ART={paths,icon:kind=>`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind]||paths.core}</svg>`,plan:o=>{const turn=o.rotation||0,w=turn%180?o.h:o.w,h=turn%180?o.w:o.h;return `<g transform="translate(${o.x+o.w/2} ${o.y+o.h/2}) rotate(${turn}) scale(${w/100} ${h/100}) translate(-50 -50)" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${paths[o.kind]||paths.core}</g>`;}};
})();
