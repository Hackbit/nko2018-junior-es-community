(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],u=0,p=[];u<l.length;u++)i=l[u],n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},n={app:0},r=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2057a07e"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,a){o=n[t]=[e,a]});e.push(o[2]=a);var r,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,o[1](i)}n[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,s.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2b56":function(t,e,o){"use strict";var a=o("9906"),n=o.n(a);n.a},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),n=o("bb71");o("da64");a["a"].use(n["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("navbar"),o("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Bookman")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[o("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")]),o("v-btn",{attrs:{flat:"",to:"/about"}},[t._v("About")])],1)],1)},s=[],c={name:"Navbar",mounted(){console.log("Hello")}},u=c,d=o("2877"),p=o("6544"),v=o.n(p),f=o("8336"),b=o("9910"),h=o("71d9"),m=o("2a7f"),g=Object(d["a"])(u,l,s,!1,null,null,null);g.options.__file="Navbar.vue";var _=g.exports;v()(g,{VBtn:f["a"],VSpacer:b["a"],VToolbar:h["a"],VToolbarItems:m["a"],VToolbarTitle:m["b"]});var k={name:"App",components:{Navbar:_},data(){return{}}},w=k,y=o("7496"),x=Object(d["a"])(w,r,i,!1,null,null,null);x.options.__file="App.vue";var V=x.exports;v()(x,{VApp:y["a"]});var T=o("8c4f"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{id:"home"}},[o("h1",[t._v("This is your bookmark manager 🚀")]),o("br"),o("p",[t._v("We create this webapp to allow you to manage your bookmarks easily "),o("br"),t._v("\n    We also did it for the Node Knockout hackaton")]),o("v-btn",{attrs:{flat:"",to:"/login",color:"info"}},[t._v("Login")]),o("v-btn",{attrs:{flat:"",to:"/signup",color:"info"}},[t._v("Signup")])],1)},j=[],O={},S=O,E=(o("cccb"),o("a523")),L=Object(d["a"])(S,C,j,!1,null,null,null);L.options.__file="Home.vue";var P=L.exports;v()(L,{VBtn:f["a"],VContainer:E["a"]});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Login")])],1),o("v-card-text",[o("v-alert",{attrs:{value:t.error,type:"error"}},[t._v("\n          Something got wrong with your credentials\n        ")]),o("v-form",{ref:"form"},[o("v-container",[o("v-text-field",{attrs:{"prepend-icon":"person",label:"E-mail",name:"email",required:"",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password","append-icon":t.show1?"visibility_off":"visibility",type:t.show1?"text":"password",name:"password",required:"",solo:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-btn",{on:{click:t.submit}},[t._v("\n              submit\n            ")])],1)],1)],1)],1)],1)],1)},B=[],N={data(){return{email:"",password:"",show1:!1,error:!1}},methods:{submit(){fetch("http://localhost:3333/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:this.email,password:this.password})}).then(t=>t.text()).then(t=>"loggedin"==t?pt.push("dashboard"):this.error=trues).catch(t=>this.error=!0)}}},q=N,$=o("0798"),F=o("b0af"),J=o("99d9"),M=o("4bd4"),D=o("a722"),I=o("2677"),H=Object(d["a"])(q,A,B,!1,null,null,null);H.options.__file="Login.vue";var W=H.exports;v()(H,{VAlert:$["a"],VBtn:f["a"],VCard:F["a"],VCardText:J["b"],VContainer:E["a"],VForm:M["a"],VLayout:D["a"],VTextField:I["a"],VToolbar:h["a"],VToolbarTitle:m["b"]});var K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Signup")])],1),o("v-card-text",[o("v-alert",{attrs:{value:t.error,type:"error"}},[t._v("\n          Something got wrong with your credentials\n        ")]),o("v-form",{ref:"form"},[o("v-container",[o("v-text-field",{attrs:{"prepend-icon":"person",label:"E-mail",required:"",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password","append-icon":t.show1?"visibility_off":"visibility",type:t.show1?"text":"password",name:"password",required:"",solo:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password confirmation","append-icon":t.show2?"visibility_off":"visibility",type:t.show2?"text":"password",name:"password_confirmation",required:"",solo:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),o("v-btn",{on:{click:t.submit}},[t._v("\n              submit\n            ")])],1)],1)],1)],1)],1)],1)},Y=[],z={data(){return{email:"",password:"",password_confirmation:"",show1:!1,show2:!1,error:!1}},methods:{submit(){fetch("/signup",{method:"POST",mode:"cors",body:JSON.stringify({email:this.email,password:this.password,password_confirmation:this.password_confirmation}),headers:{"Content-Type":"application/json"}}).then(t=>t.text()).then(t=>"loggedin"==t?pt.push("dashboard"):this.error=!0).catch(t=>this.error=!0)}}},G=z,Q=Object(d["a"])(G,K,Y,!1,null,null,null);Q.options.__file="Signup.vue";var R=Q.exports;v()(Q,{VAlert:$["a"],VBtn:f["a"],VCard:F["a"],VCardText:J["b"],VContainer:E["a"],VForm:M["a"],VLayout:D["a"],VTextField:I["a"],VToolbar:h["a"],VToolbarTitle:m["b"]});var U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isConnected?o("v-container",{attrs:{id:"title"}},[o("h1",[t._v("Dashboard page")])]):o("v-container",[o("v-alert",{attrs:{value:!t.isConnected,type:"error"}},[t._v("\n      SYou are not loggedin\n    ")])],1),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("My Bookmarks")]),o("v-spacer"),o("v-dialog",{attrs:{persistent:"","max-width":"600px"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.dialog=!1}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[o("v-icon",[t._v("fas fa-plus")])],1),o("v-card",[o("v-card-title",{attrs:{dark:"",color:"black"}},[o("span",{staticClass:"headline"},[t._v("New Bookmark")])]),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{solo:"",label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{solo:"",name:"subtitle",label:"Subtitle"},model:{value:t.subtitle,callback:function(e){t.subtitle=e},expression:"subtitle"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{solo:"",label:"Link",required:""},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("Submit")])],1)],1)],1)],1),o("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.items,function(e){return o("v-list-tile",{key:e.title,attrs:{avatar:""}},[o("v-list-tile-content",[o("v-list-tile-title",[o("a",{attrs:{href:e.link}},[t._v(t._s(e.title))])]),o("v-list-tile-sub-title",[t._v(t._s(e.subtitle)+" - "),o("a",{attrs:{href:e.link}},[t._v(t._s(e.link))])])],1),o("v-list-tile-action",[o("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(o){t.deleteItem(e.id)}}},[o("v-icon",{attrs:{color:"red"}},[t._v("fas fa-trash")])],1)],1)],1)}))],1)],1)],1),o("v-container",{attrs:{id:"logout"}},[o("v-btn",{attrs:{color:"danger"},on:{click:t.logout}},[t._v("\n      logout\n    ")])],1)],1)},X=[],Z={data(){return{isConnected:!0,items:[],dialog:!1,title:"",subtitle:"",link:""}},methods:{logout(){fetch("/logout").then(t=>t.text()).then(t=>"loggedout"==t?pt.push("/"):console.log("not logged out"))},submit(){fetch("/bookmarks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.title,subtitle:this.subtitle,link:this.link})}).then(t=>t.json()).then(t=>{this.items=t,this.dialog=!1,this.title="",this.subtitle="",this.link=""})},deleteItem(t){fetch(`/bookmarks/${t}`,{method:"DELETE"}).then(t=>t.json()).then(t=>this.items=t)}},mounted(){fetch("/isconnected").then(t=>t.text()).then(t=>this.isConnected="connected"==t),console.log(1),fetch("/bookmarks").then(t=>t.json()).then(t=>{this.items=t,console.log(2)})}},tt=Z,et=(o("2b56"),o("12b2")),ot=o("169a"),at=o("0e8f"),nt=o("132d"),rt=o("8860"),it=o("ba95"),lt=o("40fe"),st=o("5d23"),ct=o("a844"),ut=Object(d["a"])(tt,U,X,!1,null,null,null);ut.options.__file="Dashboard.vue";var dt=ut.exports;v()(ut,{VAlert:$["a"],VBtn:f["a"],VCard:F["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:et["a"],VContainer:E["a"],VDialog:ot["a"],VFlex:at["a"],VIcon:nt["a"],VLayout:D["a"],VList:rt["a"],VListTile:it["a"],VListTileAction:lt["a"],VListTileContent:st["a"],VListTileSubTitle:st["b"],VListTileTitle:st["c"],VSpacer:b["a"],VTextField:I["a"],VTextarea:ct["a"],VToolbar:h["a"],VToolbarTitle:m["b"]}),a["a"].use(T["a"]);var pt=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:()=>o.e("about").then(o.bind(null,"f820"))},{path:"/login",name:"login",component:W},{path:"/signup",name:"signup",component:R},{path:"/dashboard",name:"dashboard",component:dt}]});a["a"].config.productionTip=!1,new a["a"]({router:pt,render:t=>t(V)}).$mount("#app")},9906:function(t,e,o){},"9ba7":function(t,e,o){},cccb:function(t,e,o){"use strict";var a=o("9ba7"),n=o.n(a);n.a}});
//# sourceMappingURL=app.aaec1491.js.map