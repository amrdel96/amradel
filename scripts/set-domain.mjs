import fs from 'node:fs';
const input=process.argv[2];
if(!input){console.error('Usage: npm run set-domain -- https://your-domain.com');process.exit(1)}
let url;try{url=new URL(input)}catch{console.error('Enter a valid absolute https:// domain URL.');process.exit(1)}
if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash){console.error('Use an HTTPS URL without credentials, query parameters or fragments.');process.exit(1)}
const canonical=url.href.replace(/\/$/,'')+'/';
let html=fs.readFileSync('index.html','utf8');
html=html.replace(/<link rel="canonical"[^>]*>/g,'').replace(/<meta property="og:url"[^>]*>/g,'');
const escaped=canonical.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
html=html.replace('</head>',`<link rel="canonical" href="${escaped}"/><meta property="og:url" content="${escaped}"/></head>`);
html=html.replace(/(<script type="application\/ld\+json">)(.*?)(<\/script>)/s,(_,open,data,close)=>{const person=JSON.parse(data);person.url=canonical;return open+JSON.stringify(person)+close});
fs.writeFileSync('index.html',html);console.log(`Portfolio domain metadata set to ${canonical}. Run npm run build to rebuild.`);
