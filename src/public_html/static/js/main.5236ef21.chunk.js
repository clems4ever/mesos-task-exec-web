(this["webpackJsonpmesos-term"]=this["webpackJsonpmesos-term"]||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/mesos.3cf38049.png"},110:function(e,t,a){e.exports=a.p+"static/media/helper.072f021d.png"},121:function(e,t,a){e.exports=a(168)},126:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(126),a(9)),i=a(111),l=a(12),u=a(112),d=a(217),p=5,m=Object(n.createContext)({notification:null,setNotification:function(){}}),f=m;function b(){var e=Object(n.useContext)(m),t=function(t){return function(a,n){var r=p;r=-1===n?void 0:n,e.setNotification({level:t,message:a,timeout:r})}},a=Object(n.useCallback)(t("info"),[]),r=Object(n.useCallback)(t("success"),[]),c=Object(n.useCallback)(t("warning"),[]),o=Object(n.useCallback)(t("error"),[]),s=null!==e.notification;return{notification:e.notification,resetNotification:function(){return e.setNotification(null)},createInfoNotification:a,createSuccessNotification:r,createWarnNotification:c,createErrorNotification:o,isActive:s}}var g=a(222),h=a(2),k=a(94),v=a.n(k),E=a(97),O=a.n(E),w=a(98),x=a.n(w),j=a(96),C=a.n(j),N=a(200),y=a(201),I=a(65),D=a(202),_=a(18),S=a.n(_),R={success:v.a,warning:C.a,error:O.a,info:x.a},L={success:"notification-success",warning:"notification-warning",error:"notification-error",info:"notification-info"},z=function(e){var t=P(),a=R[e.level],n=e.className,c=(e.variant,e.message),o=Object(h.a)(e,["className","variant","message"]);return r.a.createElement(N.a,Object.assign({className:S()(t[e.level],n,L[e.level]),message:r.a.createElement("span",{className:t.message},r.a.createElement(a,{className:S()(t.icon,t.iconVariant)}),r.a.createElement("span",{className:"message-content"},c))},o))},P=Object(y.a)((function(e){return{success:{backgroundColor:I.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:D.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center",color:"white"}}})),W=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],o=a[1],i=b().notification;Object(n.useEffect)((function(){i&&null!==i&&o(i)}),[i]);var l=void 0!==i&&null!==i;return r.a.createElement(g.a,{open:l,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:c&&c.timeout?1e3*c.timeout:void 0,onClose:e.onClose,onExited:function(){return o(null)}},r.a.createElement(z,{className:"notification",level:c?c.level:"info",message:c?c.message:""}))},U=a(204),T=a(30),A=a(24),B=function(e){var t=F(),a=Object(l.g)();return r.a.createElement("div",{id:"left-toolbar",className:t.root},r.a.createElement(U.a,{size:"medium",className:t.button,onClick:function(){a.push("/task/".concat(e.taskID,"/terminal"))}},r.a.createElement(T.a,{icon:A.h})),r.a.createElement(U.a,{size:"medium",className:t.button,onClick:function(){a.push("/task/".concat(e.taskID,"/sandbox"))}},r.a.createElement(T.a,{icon:A.e})))},F=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",paddingTop:e.spacing(2)},button:{marginBottom:e.spacing(),backgroundColor:e.palette.background.paper,color:"white"}}})),G=a(8),H=a.n(G),q=a(31),M=a(214),J=a(212),V=a(215),K=a(169),Y=a(227),$=a(100),Q=a(102),X=(a(135),a(103)),Z=a(104),ee=a(36),te=a.n(ee),ae=a(53),ne=a(70),re=a(54),ce=a(27),oe=a(71),se=a(72),ie=function(e){function t(){var e;return Object(ae.a)(this,t),e=Object(ne.a)(this,Object(re.a)(t).call(this,"Unauthorized access to container")),Object.setPrototypeOf(Object(ce.a)(e),t.prototype),e}return Object(oe.a)(t,e),t}(Object(se.a)(Error)),le=function(e){function t(){var e;return Object(ae.a)(this,t),e=Object(ne.a)(this,Object(re.a)(t).call(this,"Task not found")),Object.setPrototypeOf(Object(ce.a)(e),t.prototype),e}return Object(oe.a)(t,e),t}(Object(se.a)(Error));function ue(e,t){var a,n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a="/api/terminals/create/".concat(e),t&&(a+="?access_token=".concat(t)),r.next=4,H.a.awrap(te.a.post(a,null,{validateStatus:function(e){return!0},withCredentials:!0}));case 4:if(404!==(n=r.sent).status){r.next=7;break}throw new le;case 7:if(403!==n.status){r.next=9;break}throw new ie;case 9:if(200===n.status){r.next=11;break}throw new Error("Status code ".concat(n.status," != 200"));case 11:return r.abrupt("return",n.data);case 12:case"end":return r.stop()}}))}function de(e,t,a){var n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.awrap(te.a.post("/api/terminals/resize?cols=".concat(a,"&rows=").concat(t,"&token=").concat(e),null,{withCredentials:!0}));case 2:if(200===(n=r.sent).status){r.next=5;break}throw new Error("Status code ".concat(n.status," != 200"));case 5:case"end":return r.stop()}}))}function pe(e){var t;return H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H.a.awrap(te.a.post("/api/delegate",e,{validateStatus:function(e){return!0}}));case 2:if(200===(t=a.sent).status){a.next=5;break}throw new Error("Unexpected status ".concat(t.status));case 5:return a.abrupt("return",t.data);case 6:case"end":return a.stop()}}))}function me(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.awrap(te.a.get("/api/config",{validateStatus:function(e){return!0}}));case 2:if(200===(e=t.sent).status){t.next=5;break}throw new Error("Unexpected status ".concat(e.status));case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}))}function fe(e,t){var a;return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H.a.awrap(te.a.get("/api/sandbox/browse?taskID=".concat(e,"&path=").concat(encodeURIComponent(t))));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}))}function be(e,t,a,n){var r;return H.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,H.a.awrap(te.a.get("/api/sandbox/read?taskID=".concat(e,"&path=").concat(encodeURIComponent(t),"&offset=").concat(a,"&size=").concat(n)));case 2:return r=c.sent,c.abrupt("return",r.data);case 4:case"end":return c.stop()}}))}function ge(e,t,a){var n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.awrap(te.a.get("/api/sandbox/download?taskID=".concat(e,"&path=").concat(encodeURIComponent(t),"&directory=").concat(a),{headers:{Accept:"application/octet-stream"},responseType:"blob"}));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}))}var he=a(105),ke=a.n(he),ve=a(46),Ee=a.n(ve),Oe=function(e,t){var a=r.a.useRef(e),n=r.a.useCallback((function(){return a.current.apply(a,arguments)}),[]),c=r.a.useCallback(e,t);return r.a.useEffect((function(){a.current=c}),t),n},we=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,1)[0],c=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useRef)(new Z.FitAddon),u=Object(n.useRef)(null),d=xe(),p=Object(n.useState)(null),m=Object(s.a)(p,2),f=m[0],g=m[1],h=Object(n.useState)(WebSocket.CLOSED),k=Object(s.a)(h,2),v=k[0],E=k[1],O=b(),w=O.createErrorNotification,x=O.createInfoNotification,j=Object(l.h)(),C=Ee.a.parse(j.search),N=Object(n.useRef)(new Q.Terminal({screenReaderMode:"true"===C.screenReaderMode})),y=function(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:i.current.fit(),(e=i.current.proposeDimensions())&&g(e);case 3:case"end":return t.stop()}}))},I=Object(n.useCallback)((function(){return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==f&&null!==e.token){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,H.a.awrap(de(e.token,f.rows,f.cols));case 4:u.current&&v===WebSocket.OPEN&&u.current.send(" \x1b[D");case 5:case"end":return t.stop()}}))}),[f,e.token,v]),D=Oe((function(t,a){var n=t;!function e(){n.readyState===n.OPEN&&n.send(""),o.current=setTimeout(e,2e3)}(),E(WebSocket.OPEN),e.onOpen(),console.log("Connection is open!")}),[]),_=Oe((function(t,a){E(WebSocket.CLOSED),console.log("Connection has been closed."),x("Connection has been closed."),e.onClose()}),[]),R=Oe((function(e,t){E(-1),console.log("Error raised by websocket.",t),w("Error raised by websocket.")}),[]),L=Object(n.useCallback)((function(){var t,a;return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==e.token&&null!==c.current){n.next=2;break}return n.abrupt("return");case 2:t="https:"===window.location.protocol?"wss://":"ws://",a=t+window.location.hostname+(window.location.port?":"+window.location.port:"")+"/api/terminals/ws?token="+e.token,u.current=new WebSocket(a),E(WebSocket.CONNECTING),u.current.onopen=function(e){D(this,e)},u.current.onclose=function(e){_(this,e)},u.current.onerror=function(e){R(this,e)},N.current.loadAddon(i.current),N.current.loadAddon(new X.AttachAddon(u.current)),N.current.open(c.current),y();case 15:case"end":return n.stop()}}))}),[e.token,D,_,R]);Object(n.useEffect)((function(){I()}),[I]),Object(n.useEffect)((function(){L()}),[L]);var z=S()(a?"xterm-focused":null,d.termContainer),P=v===WebSocket.OPEN;return r.a.createElement($.a,{bounds:!0,onResize:y},(function(e){var t=e.measureRef;return r.a.createElement("div",{className:d.root,ref:t},r.a.createElement("img",{src:ke.a,alt:"mesos logo",className:S()(d.mesosLogo,P?d.mesosLogoBackground:"")}),r.a.createElement("div",{ref:c,className:z,id:"terminal"}))}))},xe=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:"black",height:"100%"},termContainer:{flexGrow:1,margin:e.spacing()},mesosLogo:{position:"absolute",left:0,right:0,marginLeft:"auto",marginRight:"auto",top:"350px",width:"500px",zIndex:1,opacity:1},mesosLogoBackground:{transition:"opacity 0.5s ease-in",opacity:.3}}})),je=a(107),Ce=a(106),Ne=a.n(Ce),ye=a(220),Ie=a(206),De=a(207),_e=a(223),Se=a(211),Re=a(213),Le=a(210),ze=a(225),Pe=a(218),We=a(226),Ue=function(e){var t=Object(n.useState)("1h"),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),u=l[0],d=l[1],p=Object(n.useState)(""),m=Object(s.a)(p,2),f=m[0],g=m[1],h=b().createErrorNotification,k=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+"/login/"+e.taskID+"?access_token="+f;return r.a.createElement(ye.a,{open:e.open,id:"delegation-dialog"},r.a.createElement(Ie.a,null,"Access Delegation"),r.a.createElement(De.a,null,f?r.a.createElement(_e.a,{fullWidth:!0,label:"Token",value:k,className:"token-field",rows:8,multiline:!0,style:{minWidth:"500px"},InputLabelProps:{shrink:!0}}):r.a.createElement(Te,{taskID:e.taskID,duration:c,username:u,onDurationChange:function(e){o(e.target.value)},onUsernameChange:function(e){d(e.target.value)}})),r.a.createElement(Se.a,null,f?null:r.a.createElement(J.a,{onClick:function(){var t;return H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return""===u&&h("Provide a username to delegate access to"),a.prev=1,a.next=4,H.a.awrap(pe({delegate_to:u,task_id:e.taskID,duration:c}));case 4:t=a.sent,g(t),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),h(a.t0.message);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},className:"generate-button"},"Generate"),r.a.createElement(J.a,{onClick:function(){g(""),e.onClose()},className:"close-button"},"Close")))};function Te(e){var t=Object(y.a)((function(e){return{field:{marginBottom:e.spacing(2)}}}))();return r.a.createElement(n.Fragment,null,r.a.createElement(Re.a,null,"Generate a delegation token to grant access to the current container for a limited period of time."),r.a.createElement(_e.a,{fullWidth:!0,InputProps:{readOnly:!0},id:"task_id",label:"Task ID",value:e.taskID,type:"text",className:S()(t.field,"taskid-field")}),r.a.createElement(_e.a,{fullWidth:!0,id:"username",label:"Username",type:"text",value:e.username,className:S()(t.field,"username-field"),onChange:e.onUsernameChange,InputLabelProps:{shrink:!0}}),r.a.createElement(Le.a,{fullWidth:!0,className:t.field},r.a.createElement(ze.a,{id:"duration-label"},"Duration"),r.a.createElement(Pe.a,{fullWidth:!0,labelId:"duration-label",id:"duration-select",className:"duration-field",value:e.duration,onChange:e.onDurationChange},r.a.createElement(We.a,{value:"1h"},"1 hour"),r.a.createElement(We.a,{value:"1d"},"1 day"),r.a.createElement(We.a,{value:"7d"},"7 days"),r.a.createElement(We.a,{value:"15d"},"15 days"))))}var Ae,Be=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement(ye.a,{open:e.open,id:"access-request-dialog"},r.a.createElement(Ie.a,null,"Unauthorized Access"),r.a.createElement(De.a,null,r.a.createElement(Re.a,null,"Enter an access token provided by an administrator to get access to the container"),r.a.createElement(_e.a,{label:"Access token",value:c,onChange:function(e){return o(e.target.value)},InputProps:{className:"token-field"},InputLabelProps:{shrink:!0},fullWidth:!0})),r.a.createElement(Se.a,null,r.a.createElement(J.a,{onClick:function(){e.onAccessRequest(c)},className:"ok-button"},"OK"),e.closable?r.a.createElement(J.a,{onClick:e.onClose,className:"close-button"},"Close"):null))};!function(e){e[e.Closed=1]="Closed",e[e.Failed=2]="Failed",e[e.Loaded=3]="Loaded",e[e.Loading=4]="Loading",e[e.Unauthorized=5]="Unauthorized"}(Ae||(Ae={}));var Fe=function(){var e=Ge(),t=Object(l.i)(),a=Object(n.useState)(null),c=Object(s.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),p=d[0],m=d[1],f=b().createErrorNotification,g=Object(n.useState)(Ae.Closed),h=Object(s.a)(g,2),k=h[0],v=h[1],E=Object(q.a)(),O=Object(n.useState)(!1),w=Object(s.a)(O,2),x=w[0],j=w[1],C=Object(n.useState)(!1),N=Object(s.a)(C,2),y=N[0],I=N[1],D=Object(l.h)(),_=Ee.a.parse(D.search),R=Object(n.useState)(_.access_token?_.access_token:null),L=Object(s.a)(R,2),z=L[0],P=L[1],W=Object(n.useState)(null),U=Object(s.a)(W,2),B=U[0],F=U[1],G=t.params.taskID?t.params.taskID:null,Y=Object(n.useCallback)((function(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(G){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,v(Ae.Loading),t.next=6,H.a.awrap(ue(G,z));case 6:e=t.sent,i(e.token),m({user:e.task.user,taskID:G,agent:e.task.agent_url}),t.next=26;break;case 11:if(t.prev=11,t.t0=t.catch(2),console.error(t.t0),!(t.t0 instanceof ie)){t.next=20;break}return v(Ae.Unauthorized),z&&f(t.t0.message),t.abrupt("return");case 20:if(!(t.t0 instanceof le)){t.next=24;break}return v(Ae.Failed),f("Task not found"),t.abrupt("return");case 24:f(t.t0.message,-1),v(Ae.Failed);case 26:case"end":return t.stop()}}),null,null,[[2,11]])}),[G,f,z]),$=Object(n.useCallback)((function(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.a.awrap(me());case 3:e=t.sent,F(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f("Unable to retrieve configuration: ".concat(t.t0.message));case 10:case"end":return t.stop()}}),null,null,[[0,7]])}),[f]);return Object(n.useEffect)((function(){Y()}),[Y]),Object(n.useEffect)((function(){k===Ae.Unauthorized?I(!0):k===Ae.Loaded&&I(!1)}),[k]),Object(n.useEffect)((function(){$()}),[$]),r.a.createElement("div",{className:e.root},G?r.a.createElement(Ue,{open:x,taskID:G,onClose:function(){return j(!1)}}):null,G?r.a.createElement(Be,{open:y,closable:k!==Ae.Unauthorized,onClose:function(){return I(!1)},onAccessRequest:P}):null,r.a.createElement("div",{className:e.terminal},r.a.createElement("span",{className:S()(e.loader,k===Ae.Loaded||k===Ae.Failed||k===Ae.Closed?"hidden":"")},r.a.createElement(M.a,{size:128})),r.a.createElement(we,{token:o,onOpen:function(){v(Ae.Loaded)},onClose:function(){v(Ae.Closed)}})),r.a.createElement("div",{className:e.statusBarContainer},r.a.createElement("div",{className:e.statusBar},r.a.createElement(He,{value:p?p.user:"_______",icon:A.i,copy:!0,className:"user-item"}),r.a.createElement(He,{value:p?p.taskID:"____________________",icon:A.a,copy:!0}),r.a.createElement(He,{value:p?p.agent:"____________________",icon:A.f,copy:!0}),B&&B.can_grant_access&&k===Ae.Loaded?r.a.createElement(J.a,{style:{padding:E.spacing(.3)},onClick:function(){return j(!0)},className:"grant-permission-button"},r.a.createElement("div",null,"Grant access")):null),r.a.createElement(V.a,{className:e.brand,href:"https://github.com/clems4ever/mesos-term",target:"_blank"},r.a.createElement(K.a,null,r.a.createElement(T.a,{icon:je.a}),"MesosTerm"))))},Ge=Object(y.a)((function(e){return{root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:e.palette.background.default},terminal:{flexGrow:1},statusBarContainer:{width:"100%",height:e.spacing(4),display:"flex",flexDirection:"row",alignContent:"center",alignItems:"center",zIndex:10},statusBar:{display:"flex",flexDirection:"row",alignContent:"center",alignItems:"center",color:"white",paddingLeft:e.spacing(),flexGrow:1},brand:{marginRight:e.spacing(),padding:e.spacing(.3),paddingLeft:e.spacing(),paddingRight:e.spacing(),background:e.palette.background.paper},loader:{zIndex:3,position:"absolute",left:"50%",top:"50%",marginLeft:"-64px",marginTop:"-64px"}}}));function He(e){var t=qe(),a=r.a.useState(!1),n=Object(s.a)(a,2),c=n[0],o=n[1],i=function(){o(!0),setTimeout((function(){return o(!1)}),1e3)};return e.copy?r.a.createElement(Y.a,{PopperProps:{disablePortal:!0},open:c,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"copied!"},r.a.createElement("div",{className:S()(t.root,e.className,e.copy?t.copyPointer:""),onClick:i},r.a.createElement(Ne.a,{text:e.value},r.a.createElement("div",null,r.a.createElement(T.a,{icon:e.icon,className:t.icon}),e.value)))):r.a.createElement("div",{className:S()(t.root,e.className),onClick:i},r.a.createElement(T.a,{icon:e.icon,className:t.icon}),e.value)}var qe=Object(y.a)((function(e){return{root:{marginRight:e.spacing(3)},copyPointer:{cursor:"pointer"},icon:{marginRight:e.spacing()}}})),Me=a(216),Je=a(221),Ve=a(73),Ke=a(109);function Ye(e){return"d"===e.mode.slice(0,1)}var $e=function(){var e=Object(l.i)(),t=Qe(),a=Object(l.h)(),c=Ee.a.parse(a.search),o=Object(n.useState)(c.path?c.path:"/"),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(null),m=Object(s.a)(p,2),f=m[0],g=m[1],h=Object(l.g)(),k=Object(n.useState)(null),v=Object(s.a)(k,2),E=v[0],O=v[1],w=Object(n.useState)(null),x=Object(s.a)(w,2),j=x[0],C=x[1],N=f&&0===f.length,y=Object(n.useState)(!1),I=Object(s.a)(y,2),D=I[0],_=I[1],R=b().createErrorNotification,L=Object(n.useCallback)((function(){var t,a,n,r;return H.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,_(!0),c.next=4,H.a.awrap(fe(e.params.taskID,u));case 4:return t=c.sent,a=u.slice(1).split("/").slice(0,-1).join("/"),c.next=8,H.a.awrap(fe(e.params.taskID,"/"+a));case 8:n=c.sent,r=0;case 10:if(!(r<n.length)){c.next=17;break}if(n[r].path!==u){c.next=14;break}return C(n[r]),c.abrupt("break",17);case 14:r++,c.next=10;break;case 17:g(t),O(null),c.next=24;break;case 21:c.prev=21,c.t0=c.catch(0),R(c.t0.message);case 24:return c.prev=24,_(!1),c.finish(24);case 27:case"end":return c.stop()}}),null,null,[[0,21,24,27]])}),[u,e.params.taskID,C]);Object(n.useEffect)((function(){u!==c.path&&d(c.path?c.path:"/")}),[c.path,d]),Object(n.useEffect)((function(){L()}),[L]),Object(n.useEffect)((function(){h.push("/task/".concat(e.params.taskID,"/sandbox?path=").concat(encodeURIComponent(u)))}),[h,u,e.params.taskID]);var z=f?f.map((function(e,t){return r.a.createElement(Me.a,{item:!0,lg:2,sm:3,xs:6,key:"file-".concat(t)},r.a.createElement(Xe,{fd:e,onClick:function(t){return a=e,t.stopPropagation(),void O(a);var a},onDoubleClick:function(t){d(e.path)},selected:null!==E&&e.path===E.path}))})):[],P=r.a.createElement(V.a,{href:"".concat(a.pathname,"?path=").concat(encodeURIComponent("/")),key:"path-item-root"},"Sandbox"),W=u.slice(1).split("/").filter((function(e){return""!==e})).map((function(e,t){var n=u.split("/").slice(0,t+2).join("/");return r.a.createElement(V.a,{href:"".concat(a.pathname,"?path=").concat(encodeURIComponent(n)),key:"path-item-".concat(t)},e)})),U=Object(n.useCallback)((function(){var t,a,n,r;return H.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,E?(t=E.path,a=Ye(E)):j?(t=j.path,a=Ye(j)):(a=!0,t="/"),(n=t.split("/").pop())||(n=e.params.taskID),c.next=6,H.a.awrap(ge(e.params.taskID,t,a));case 6:r=c.sent,Object(Ke.saveAs)(r,n+(a?".zip":"")),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),R(c.t0.message);case 13:case"end":return c.stop()}}),null,null,[[0,10]])}),[E,e.params.taskID,j]);return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:D?"":"hidden"},r.a.createElement(M.a,{size:128,className:S()(t.loader)})),r.a.createElement("div",{className:t.pathContainer},r.a.createElement(T.a,{icon:A.g,className:t.sitemapIcon}),r.a.createElement(Je.a,null,[P].concat(W))),N?r.a.createElement("div",{className:t.fileReader,id:"file-reader"},r.a.createElement(at,{taskID:e.params.taskID,path:u})):r.a.createElement("div",{className:t.explorerContainer,onClick:function(e){O(null),e.preventDefault()}},r.a.createElement(Me.a,{container:!0,className:t.grid,spacing:2},z)),r.a.createElement("div",{className:t.description},r.a.createElement(et,{fd:E||j,onDownloadClick:U})))},Qe=Object(y.a)((function(e){return{root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:e.palette.background.default,position:"relative"},loader:{position:"absolute",left:"calc(50% - 64px)",top:"calc(50% - 64px)"},explorerContainer:{flexGrow:1,overflowY:"scroll"},pathContainer:{padding:e.spacing(),borderBottom:"1px solid "+e.palette.background.default,backgroundColor:e.palette.background.paper,"& a":{textDecoration:"none",color:"white"},display:"flex",flexDirection:"row",alignContent:"center",alignItems:"center"},sitemapIcon:{marginRight:e.spacing(),marginLeft:e.spacing(),color:"white"},grid:{width:"calc(100%)",margin:0,padding:e.spacing()},description:{minHeight:e.spacing(2),padding:e.spacing(2),paddingTop:e.spacing(),paddingBottom:e.spacing(),color:"white",backgroundColor:e.palette.background.paper,borderTop:"1px solid "+e.palette.background.default},fileReader:{wordBreak:"break-all",padding:e.spacing(2),backgroundColor:"black",height:"100%",overflow:"auto"}}}));function Xe(e){var t=Ze(),a="d"===e.fd.mode.slice(0,1),n=e.fd.path.split("/").pop();return r.a.createElement(K.a,{elevation:1,onClick:function(t){return e.onClick(t,e.fd)},onDoubleClick:function(t){return e.onDoubleClick(t,e.fd)},className:S()(t.paper,e.selected?t.selected:"")},r.a.createElement("div",{className:t.content},r.a.createElement(T.a,{icon:a?A.d:A.b,size:"3x"}),r.a.createElement(Ve.a,{noWrap:!0,className:t.filename},n)))}var Ze=Object(y.a)((function(e){return{paper:{padding:e.spacing(2),cursor:"pointer",border:"1px solid "+e.palette.background.default,userSelect:"none"},content:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",color:"#b7b7b7",overflow:"hidden"},filename:{width:"100%",textAlign:"center"},selected:{border:"1px solid #949494"}}}));function et(e){var t=tt(),a=e.fd?e.fd.path.split("/").pop():"-",c=e.fd?(e.fd.size/1e3).toFixed(2):"-",o=e.fd?e.fd.mode:"-";return r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,{title:"download"},r.a.createElement("span",{onClick:e.onDownloadClick},r.a.createElement(T.a,{icon:A.c,className:t.icon}))),r.a.createElement("span",{className:t.item},"name: ",a)," ",r.a.createElement("span",{className:t.item},"size: ",c,"kb")," ",r.a.createElement("span",{className:t.item},"mode: ",o))}var tt=Object(y.a)((function(e){return{item:{marginRight:e.spacing(2)},icon:{display:"inline-block",cursor:"pointer",marginRight:e.spacing(2)}}}));function at(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],i=nt(),l=Object(n.useRef)(),u=Object(n.useCallback)((function(){var t,a;return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H.a.awrap(be(e.taskID,e.path,c.length,5e4));case 2:""!==(t=n.sent).data&&(o(c+t.data),(a=document.getElementById("file-reader"))&&(a.scrollTop=a.scrollHeight));case 4:case"end":return n.stop()}}))}),[e.path,e.taskID,o,c]);return Object(n.useEffect)((function(){return u(),l.current=setInterval(u,1e3),function(){l.current&&clearInterval(l.current)}}),[u]),r.a.createElement("div",{className:i.root},function(e){for(var t=e.split("\n"),a=[],n=0;n<t.length;n++)a.push(r.a.createElement("span",{key:"content-part-".concat(n)},t[n])),n!==t.length-1&&a.push(r.a.createElement("br",{key:"content-space-".concat(n)}));return r.a.createElement("p",{style:{margin:0,padding:0}},a)}(c))}var nt=Object(y.a)((function(e){return{root:{color:"#b7b7b7"}}})),rt=function(){var e=ct(),t=Object(l.i)();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.toolbar},r.a.createElement(B,{taskID:t.params.taskID})),r.a.createElement("div",{className:e.rightContainer},r.a.createElement("div",{className:e.container},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/task/:taskID/terminal",exact:!0},r.a.createElement(Fe,null)),r.a.createElement(l.b,{path:"/task/:taskID/sandbox",exact:!0},r.a.createElement($e,null)),r.a.createElement(l.b,{path:"/task/:taskID"},r.a.createElement(l.a,{to:"/task/".concat(t.params.taskID,"/terminal")}))))))},ct=Object(y.a)((function(e){return{root:{maxWidth:"100vw",maxHeight:"100vh",width:"100vw",height:"100vh",display:"flex",flexDirection:"row",overflow:"hidden"},toolbar:{minWidth:e.spacing(8),height:"100%",backgroundColor:e.palette.background.default,borderRight:"1px solid #565656"},rightContainer:{flexGrow:1,display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center"},container:{height:"100%",width:"100%"}}})),ot=a(110),st=a.n(ot),it=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Please provide a task ID as shown in the image."),r.a.createElement("img",{src:st.a,alt:"url with task id"}))},lt=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(u.a)({palette:{type:"dark"}});return r.a.createElement(d.a,{theme:o},r.a.createElement(f.Provider,{value:{notification:a,setNotification:c}},r.a.createElement(W,{onClose:function(){return c(null)}}),r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0},r.a.createElement(it,null)),r.a.createElement(l.b,{path:"/task/:taskID"},r.a.createElement(rt,null)),r.a.createElement(l.b,{path:"/"},r.a.createElement(l.a,{to:"/"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.5236ef21.chunk.js.map