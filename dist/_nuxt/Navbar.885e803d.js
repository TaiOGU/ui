import{_ as c}from"./nuxt-link.17d7e8e8.js";import{a as _,u as o,o as s,b as l,p as a,q as n,f as r,e as u,L as i}from"./entry.954ec5be.js";const d={key:0,class:"py-4 px-2 bg-base-300 w-full flex flex-row justify-between items-center"},f=["src"],x={key:1,class:"py-4 px-2 bg-base-300 w-full flex flex-row justify-between items-center"},h={__name:"Navbar",setup(m){let e=_("account",()=>null);return console.log(e.value),(p,b)=>{const t=c;return o(e)?(s(),l("div",d,[a(t,{to:"/",class:"rareweave-font text-3xl ml-2"},{default:n(()=>[r("RareWeave")]),_:1}),a(t,{class:"bg-neutral font-mono hover:bg-neutral-focus transition-all rounded-xl p-2 inline-flex flex-row items-center border border-base-300 cursor-pointer hover:rounded-2xl",to:"/profile/#"+o(e).addr},{default:n(()=>[u("img",{class:"h-[2rem] mr-2",src:o(e).profile.avatarURL},null,8,f),r(i(o(e).handle),1)]),_:1},8,["to"])])):(s(),l("div",x,[a(t,{to:"/",class:"rareweave-font text-3xl ml-2"},{default:n(()=>[r("RareWeave")]),_:1}),a(t,{class:"btn amazing-button2 rounded-md hover:rounded-xl transition-all font-mono",to:"/login"},{default:n(()=>[r("Login ")]),_:1})]))}}};export{h as _};