(this["webpackJsonpreact-firechat"]=this["webpackJsonpreact-firechat"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),a=n(16),i=n.n(a),s=(n(22),n(3)),u=function(e){var t=e.onClick,n=void 0===t?null:t,c=e.children,r=void 0===c?null:c;return Object(s.jsx)("button",{onClick:n,children:r})},o=n(13),l=n(10),d=n(11);n(24),n(29);d.a.initializeApp({apiKey:"AIzaSyAyqBM3_dlRBmhfHVzlT0Ge-ntEWlvKWSY",authDomain:"firechat-test-d8a2d.firebaseapp.com",projectId:"firechat-test-d8a2d",storageBucket:"firechat-test-d8a2d.appspot.com",messagingSenderId:"357937782271",appId:"1:357937782271:web:076d7669e39effb6b6dbca",measurementId:"G-X4WMD8ZG6J"});var j=d.a.firestore(),h=new d.a.auth.GoogleAuthProvider,b=n(31),f=function(e){var t="";return e&&(t=(t=Object(b.a)(e,new Date)).charAt(0).toUpperCase()+t.slice(1)),t},p=function(e){var t=e.createdAt,n=void 0===t?null:t,c=e.text,r=void 0===c?"":c,a=e.displayName,i=void 0===a?"":a,u=e.photoURL,o=void 0===u?"":u;return r?Object(s.jsxs)("div",{class:"todo",children:[o?Object(s.jsx)("img",{src:o,alt:"Avatar",className:"rounded-full mr-4",width:45,height:45}):null,i?Object(s.jsx)("p",{children:i}):null,(null===n||void 0===n?void 0:n.seconds)?Object(s.jsx)("span",{children:f(new Date(1e3*n.seconds))}):null,Object(s.jsx)("div",{class:"text",children:Object(s.jsx)("p",{class:"hola",children:r})})]}):null},v=function(e){var t=e.user,n=void 0===t?null:t,r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],u=a[1];Object(c.useEffect)((function(){return j.collection("messages").orderBy("createdAt").limit(100).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[]);var h=n.uid,b=n.displayName,f=n.photoURL,v=Object(c.useState)(""),O=Object(l.a)(v,2),x=O[0],m=O[1],g=j.collection("messages"),S=Object(c.useRef)();return Object(c.useEffect)((function(){S.current&&S.current.focus()}),[S]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{children:i.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(p,Object(o.a)({},e))},e.id)}))}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=x.trim();t&&(g.add({text:t,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:h,displayName:b,photoURL:f}),m(""))},children:[Object(s.jsx)("input",{ref:S,type:"text",value:x,onChange:function(e){e.preventDefault(),m(e.target.value)},placeholder:"Escribe tu mensaje aqui..."}),Object(s.jsx)("button",{class:" enviar",type:"submit",disabled:!x,children:"Enviar"})]})]})},O=n(9),x=n.n(O),m=n(12),g=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.a.auth().useDeviceLanguage(),e.prev=1,e.next=4,d.a.auth().signInWithPopup(h);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();var y=function(e){var t=Object(c.useState)(!0),n=Object(l.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)((function(){return e.currentUser})),s=Object(l.a)(i,2),u=s[0],o=s[1];return Object(c.useEffect)((function(){return e.onAuthStateChanged((function(e){o(e||!1),r&&a(!1)}))}),[e,r]),{user:u,initializing:r}};var k=function(){var e=y(d.a.auth()),t=e.user,n=e.initializing;return Object(s.jsxs)("div",{children:[function(){if(n)return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading ..."})})}(),t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{onClick:S,children:"Logout Google"}),Object(s.jsx)("p",{children:" Bienvenidos al CHAT!"}),Object(s.jsx)(v,{user:t})]}):Object(s.jsx)(u,{onClick:g,children:" Sign In With Google "})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),w()}},[[28,1,2]]]);
//# sourceMappingURL=main.aadddf0b.chunk.js.map