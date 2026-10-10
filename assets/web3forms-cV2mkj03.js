import{j as o}from"./index-mM7CWzdj.js";/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function n({checked:t,onChange:s}){return o.jsx("input",{type:"checkbox",name:"botcheck",checked:t,onChange:e=>s(e.target.checked),tabIndex:-1,autoComplete:"off","aria-hidden":"true",style:{display:"none"}})}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Web3Forms is a form-backend service for static sites — submissions are
 * posted straight from the browser and relayed to an inbox, with no server
 * of our own needed. The access key is meant to be public (Web3Forms' own
 * docs: "You do not need to hide the access key"), so shipping it in the
 * client bundle is the intended usage, not a leak.
 */const a="fa1aad6b-260b-4603-b9af-529324047884";async function r(t){try{const s=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:a,...t})}),e=await s.json().catch(()=>({}));return{success:s.ok&&e.success!==!1,message:typeof e.message=="string"?e.message:""}}catch{return{success:!1,message:"Network error — could not reach the notification service."}}}export{n as H,r as s};
