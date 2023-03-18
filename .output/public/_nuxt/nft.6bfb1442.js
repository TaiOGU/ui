import{_ as Z}from"./nuxt-link.f89ff8b9.js";import{e as j,r as h,J as S,K as ee,x as I,z as te,f as o,h as s,u as e,i as f,j as T,L as u,w as J,v as Y,F as V,c as H,H as K,l as ae,M as A,k as oe,o as a}from"./entry.87fa91ac.js";import"./app.config.99ea903c.js";import{A as se,_ as ne}from"./index.279fda99.js";import{c as le}from"./index.47b87a02.js";const re=""+new URL("image.b95a6928.svg",import.meta.url).href,ie={class:"h-full-navbared w-full flex flex-col items-center justify-center"},ce={class:"m-2 rounded mt-6"},de=["src"],ue={key:1,autoplay:"",muted:"",controls:""},me=["src","type"],pe={class:"text-3xl text-center font-mono"},ve={key:0,class:"text-md text-center font-mono p-2 max-w-[32rem]"},fe={key:1,class:"text-md text-center font-mono text-zinc-500"},he={class:"my-2 w-max min-w-[14rem]"},ye={class:"rounded-none w-full bg-zinc-900 border-b-2 border-black text-white p-2 flex flex-row items-center justify-between"},be={key:0,class:"text-sm rounded-xl p-2 ml-2 bg-zinc-700 flex-row flex items-center"},_e=["src"],xe={class:"rounded-none w-full bg-zinc-900 border-b-2 border-black text-white p-2 flex flex-row items-center justify-between"},we={key:0,class:"text-sm rounded-xl p-2 ml-2 bg-zinc-700 flex-row flex items-center"},ge=["src"],ke={class:"rounded-none w-full bg-zinc-900 border-b-2 border-black text-white p-2 flex flex-row items-center justify-between"},Se={key:0,class:"p-2 bg-green-600 text-sm"},Te={key:1,class:"p-2 bg-red-600 text-sm"},ze={class:"rounded-none w-full bg-zinc-900 border-b-2 border-black text-white p-2 flex flex-row items-center justify-between"},Fe={key:0,class:"p-1 pr-2 bg-zinc-700 text-sm"},Ne={key:1,class:"p-2 bg-zinc-700 text-sm"},Ce={class:"rounded-none w-full bg-zinc-900 border-b-2 border-black text-white p-2 flex flex-row items-center justify-between"},Ie={class:"p-2 bg-zinc-700 text-sm"},Ae=["disabled"],Oe=s("input",{type:"checkbox",id:"buy-modal",class:"modal-toggle",checked:!1},null,-1),Re={class:"modal"},Be={key:0,class:"modal-box relative flex flex-col"},We={key:0,for:"buy-modal",class:"btn btn-sm absolute right-2 top-2"},je={class:"font-bold text-lg text-center"},Je={class:"steps steps-vertical mt-4 ml-4"},Ve={class:"step step-primary"},De={key:1,class:"text-lg"},Me={key:2,class:"text-lg"},Pe=["disabled"],Ue={key:1,class:"text-lg"},Ee={key:2,class:"btn btn-error btn-outline rounded-lg btn-sm"},qe={class:"modal-action"},Le={key:0,for:"buy-modal",class:"btn"},Ye={key:1,class:"modal-box relative flex flex-col items-center"},He=s("label",{for:"buy-modal",class:"btn btn-sm absolute right-2 top-2"},"✕",-1),Ke={class:"font-bold text-lg text-center"},$e=s("img",{src:re,class:"w-2/3 m-2"},null,-1),Ge={class:"text-md text-center"},Qe=s("div",{class:"modal-action"},[s("label",{for:"buy-modal",class:"btn"},"Close")],-1),nt={__name:"nft",async setup(Xe){let n,m,l=j("account",()=>null),$=j("accountTools",()=>new ne({cacheIsActivated:!0,cacheSize:100,cacheTime:60}));j("wallet",()=>null).value;const r=se.init({host:"arweave.net",port:443,protocol:"https",timeout:6e4,logging:!1});let O=h(([n,m]=S(()=>$fetch("https://arweave.net/info")),n=await n,m(),n).height);const R=$.value,D=le.WarpFactory.forMainnet({inMemory:!1},!1,r);let _=ee().hash.slice(1),z=l.value?D.contract(_).setEvaluationOptions({unsafeClient:"allow",waitForConfirmation:!1}).connect("use_wallet"):D.contract(_).setEvaluationOptions({unsafeClient:"allow",waitForConfirmation:!1}),p=h(([n,m]=S(()=>z.readState()),n=await n,m(),n).cachedValue.state),t=h(JSON.parse(JSON.stringify(p.value))),F=I(()=>{var c;return t.value.reservationTxId&&O.value-t.value.reservationBlockHeight<16&&t.value.reserver==((c=l.value)==null?void 0:c.addr)}),M=I(()=>{var c;return t.value.reservationTxId&&O.value-t.value.reservationBlockHeight<16&&t.value.reserver!=((c=l.value)==null?void 0:c.addr)}),P=h(!1),v=h(0),i=h(parseFloat(parseFloat(r.ar.winstonToAr(t.value.price)).toFixed(3))),U=h(parseFloat(t.value.royalty*100)),y=h(([n,m]=S(()=>R.get(t.value.owner)),n=await n,m(),n)),N=([n,m]=S(()=>R.get(t.value.minter)),n=await n,m(),n),B=I(()=>l.value&&l.value.addr&&l.value.addr==y.value.addr),W=I(()=>i.value!=parseFloat(parseFloat(r.ar.winstonToAr(p.value.price)).toFixed(3))||p.value.description!=t.value.description||p.value.forSale!=t.value.forSale),G=setInterval(async()=>{O.value=(await $fetch("https://arweave.net/info")).height,W.value||(p.value=(await z.readState()).cachedValue.state,t.value=JSON.parse(JSON.stringify(p.value)),i.value=parseFloat(parseFloat(r.ar.winstonToAr(t.value.price)).toFixed(3)),y.value=await R.get(t.value.owner))},5e4);console.log(([n,m]=S(()=>z.readState()),n=await n,m(),n)),te(()=>clearInterval(G));async function Q(){await z.writeInteraction({function:"edit-nft",description:t.value.description,forSale:t.value.forSale,price:parseInt(r.ar.arToWinston(i.value))}),p.value=JSON.parse(JSON.stringify({...t.value,price:r.ar.arToWinston(i.value)})),console.log(i.value!=parseFloat(parseFloat(r.ar.winstonToAr(p.value.price)).toFixed(3)),p.value.description!=t.value.description,p.value.forSale!=t.value.forSale)}function E(c){return c.map(d=>({name:btoa(d.name),value:btoa(d.value)}))}async function q(){v.value=1,P.value=!0;let c=[{name:"Contract",value:_},{name:"Input",value:JSON.stringify({function:"reserve-buying-zone",price:parseInt(r.ar.arToWinston(i.value))})},{name:"App-Name",value:"SmartWeaveAction"},{name:"App-Version",value:"0.3.0"},{name:"Nonce",value:Date.now().toString()},{name:"SDK",value:"0.3.0"}];try{let d=await fetch("https://arweave.net/price/1000000").then(x=>x.text()),b=await r.createTransaction({tags:E(c),target:t.value.minter,quantity:(parseInt(r.ar.arToWinston(i.value))*t.value.royalty).toString(),reward:d});await r.transactions.sign(b),await r.transactions.post(b)}catch{q.value=!1}}async function X(){v.value=2;let c=t.value.reservationTxId,d=[{name:"Contract",value:_},{name:"Input",value:JSON.stringify({function:"finalize-buy",price:parseInt(r.ar.arToWinston(i.value)),reservationTxId:c})},{name:"App-Name",value:"SmartWeaveAction"},{name:"App-Version",value:"0.3.0"},{name:"Nonce",value:Date.now().toString()},{name:"SDK",value:"0.3.0"}],b=(await fetch("https://arweave.net/graphql",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({query:`query {
         transaction(id: "${c}") {
            id
            block {
            id
           }
         }
      }`})}).then(w=>w.json())).data.transaction.block.id,x=await fetch("https://arweave.net/price/1000000").then(w=>w.text()),k=await r.createTransaction({tags:E(d),target:t.value.owner,quantity:r.ar.arToWinston(i.value),reward:x,last_tx:b});await r.transactions.sign(k),await r.transactions.post(k);let C=setInterval(()=>{t.value.owner==l.value.addr&&(v.value=3,clearInterval(C))})}return(c,d)=>{var x,k,C,w,L;const b=Z;return a(),o("div",ie,[s("div",ce,[(k=(x=e(t))==null?void 0:x.contentType)!=null&&k.startsWith("image")?(a(),o("img",{key:0,src:"https://arweave.net/"+e(_),class:"inline-flex max-h-[20rem] max-w-20rem"},null,8,de)):(w=(C=e(t))==null?void 0:C.contentType)!=null&&w.startsWith("video")?(a(),o("video",ue,[s("source",{src:"https://arweave.net/"+e(_),type:(L=e(t))==null?void 0:L.contentType},null,8,me),f(" Your browser does not support the video tag. ")])):T("",!0)]),s("h1",pe,u(e(t).name),1),e(l)&&e(l).addr&&e(l).addr==e(y).addr?J((a(),o("textarea",{key:0,class:"text-md textarea font-mono m-2 max-w-[32rem] w-full overflow-auto transition-none textarea-bordered rounded-md","onUpdate:modelValue":d[0]||(d[0]=g=>e(t).description=g)},null,512)),[[Y,e(t).description]]):(a(),o(V,{key:1},[e(t).description?(a(),o("p",ve,u(e(t).description),1)):(a(),o("p",fe,"[This NFT has no description]"))],64)),s("div",he,[s("div",ye,[f(" Owner: "),e(l)&&e(l).addr&&e(l).addr==e(y).addr?(a(),o("div",be,"You")):(a(),H(b,{key:1,to:"/profile/#"+e(y).addr,class:"text-sm rounded-xl p-1 ml-2 bg-zinc-700 flex-row flex items-center"},{default:K(()=>[s("img",{src:e(y).profile.avatarURL,class:"w-8 rounded-xl mr-2"},null,8,_e),f(" "+u(e(y).handle),1)]),_:1},8,["to"]))]),s("div",xe,[f(" Minter: "),e(l)&&e(l).addr&&e(l).addr==e(N).addr?(a(),o("div",we,"You")):(a(),H(b,{key:1,to:"/profile/#"+e(N).addr,class:"text-sm rounded-xl p-1 ml-2 bg-zinc-700 flex-row flex items-center"},{default:K(()=>[s("img",{src:e(N).profile.avatarURL,class:"w-8 rounded-xl mr-2"},null,8,ge),f(" "+u(e(N).handle),1)]),_:1},8,["to"]))]),s("div",ke,[f(" For sale: "),e(B)?J((a(),o("input",{key:0,type:"checkbox",class:A(["toggle",e(t).forSale?"toggle-success":"toggle-error"]),"onUpdate:modelValue":d[1]||(d[1]=g=>e(t).forSale=g)},null,2)),[[ae,e(t).forSale]]):(a(),o(V,{key:1},[e(t).forSale?(a(),o("div",Se,"Yes")):(a(),o("div",Te,"No"))],64))]),e(t).forSale?(a(),o(V,{key:0},[s("div",ze,[f(" Price: "),e(B)?(a(),o("div",Fe,[J(s("input",{"onUpdate:modelValue":d[2]||(d[2]=g=>oe(i)?i.value=g:i=g),type:"number",class:"input text-start appearance-[textfield] w-14 rounded-none px-1 input-sm bg-transparent",placeholder:"Price"},null,512),[[Y,e(i)]]),f(" AR ")])):(a(),o("div",Ne,u(e(i))+" AR",1))]),s("div",Ce,[f(" Royalty: "),s("div",Ie,u(e(U))+"%",1)])],64)):T("",!0),e(B)?(a(),o("button",{key:1,class:A(["btn","amazing-button2","rounded-md","w-full","my-2",,e(W)?"":"btn-disabled"]),disabled:!e(W),onClick:Q},"Save changes",10,Ae)):e(l)&&e(l).addr&&e(t).forSale?(a(),o("label",{key:2,for:"buy-modal",class:A({btn:!0,"amazing-button":!0,"rounded-md":!0,"w-full":!0,"my-2":!0,"text-lg":!0,"btn-disabled":e(M)})},"Buy",2)):T("",!0)]),Oe,s("div",Re,[e(v)!=3?(a(),o("div",Be,[e(v)==0||e(v)==3?(a(),o("label",We,"✕")):T("",!0),s("h3",je,'Buy "'+u(e(t).name)+'"',1),s("ul",Je,[s("li",Ve,[!e(P)&&!e(F)?(a(),o("button",{key:0,onClick:q,class:"btn amazing-button2 rounded-lg btn-sm"},"Pay royalty ("+u(e(i)*(e(U)/100))+" AR)",1)):e(F)?(a(),o("span",De,"Paid royalty")):(a(),o("span",Me,"Paying royalty... Don't close this tab"))]),s("li",{class:A({step:!0,"step-primary":e(F)})},[!e(M)&&e(v)!=2?(a(),o("button",{key:0,disabled:!e(F),class:"btn amazing-button rounded-lg btn-sm",onClick:X},"Finalize buy ("+u(e(i))+" AR)",9,Pe)):e(v)==2?(a(),o("span",Ue,"Finalizing buy... ")):(a(),o("button",Ee,"Someone else did reserve this NFT before you"))],2)]),s("div",qe,[e(v)==0||e(v)==3?(a(),o("label",Le,"Close")):T("",!0)])])):(a(),o("div",Ye,[He,s("h3",Ke,'Successfully bought "'+u(e(t).name)+'"',1),$e,s("span",Ge,"Now you own "+u(e(t).name)+"!",1),Qe]))])])}}};export{nt as default};