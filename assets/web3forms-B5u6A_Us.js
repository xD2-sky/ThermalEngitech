import{c,j as o}from"./index-x_T7BS6b.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],i=c("clock",a);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function p({checked:t,onChange:s}){return o.jsx("input",{type:"checkbox",name:"botcheck",checked:t,onChange:e=>s(e.target.checked),tabIndex:-1,autoComplete:"off","aria-hidden":"true",style:{display:"none"}})}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Web3Forms is a form-backend service for static sites — submissions are
 * posted straight from the browser and relayed to an inbox, with no server
 * of our own needed. The access key is meant to be public (Web3Forms' own
 * docs: "You do not need to hide the access key"), so shipping it in the
 * client bundle is the intended usage, not a leak.
 */const n="fa1aad6b-260b-4603-b9af-529324047884";async function m(t){try{const s=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:n,...t})}),e=await s.json().catch(()=>({}));return{success:s.ok&&e.success!==!1,message:typeof e.message=="string"?e.message:""}}catch{return{success:!1,message:"Network error — could not reach the notification service."}}}export{i as C,p as H,m as s};
