(this["webpackJsonpwfh-mate"]=this["webpackJsonpwfh-mate"]||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/tired.ffc21062.png"},122:function(e,t,n){e.exports=n(212)},127:function(e,t,n){},131:function(e,t,n){},190:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(16),c=n.n(o),l=(n(127),n(128),n(5)),r=n(100),s=n(214),u=(n(131),function(){var e=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("click",t,!1),function(){document.removeEventListener("click",t,!1)}}),[]);var t=function(t){e.current&&!e.current.contains(t.target)&&u(!1)},n=new Date,o=Object(a.useState)(!1),c=Object(l.a)(o,2),r=c[0],u=c[1];return i.a.createElement("div",{className:"calender",ref:e},i.a.createElement("div",{onClick:function(){return u(!r)},className:"calender-wrapper"},i.a.createElement("div",{className:"calender-inner-wrapper"},i.a.createElement("p",{className:"month"},n.toString().split(" ")[1]),i.a.createElement("p",{className:"date"},n.getDate()<10?"0".concat(n.getDate()):n.getDate()),i.a.createElement("p",{className:"formatted-date"},n.toLocaleDateString()))),r&&i.a.createElement("div",{className:"monthly-calender-wrapper"},i.a.createElement(s.a,{className:"monthly-calender",fullscreen:!1})))}),m=n(216),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.serialize,o=void 0===i?JSON.stringify:i,c=n.deserialize,r=void 0===c?JSON.parse:c,s=Object(a.useState)((function(){var n=localStorage.getItem(e);return n?r(n):"function"===typeof t?t():t})),u=Object(l.a)(s,2),m=u[0],d=u[1];return Object(a.useEffect)((function(){localStorage.setItem(e,o(m))}),[m,e,o]),[{state:m,setState:d}]},v=n(215),f=function(e){var t=e.time,n=t.hours,o=void 0===n?0:n,c=t.minutes,r=void 0===c?0:c,s=t.seconds,u=void 0===s?0:s,m=e.totalTime,d=e.percent,f=void 0===d?0:d,b=e.width,p=void 0===b?132:b,k=Object(a.useState)(0),E=Object(l.a)(k,2),h=E[0],g=E[1];return Object(a.useEffect)((function(){g((m-r)/m*100)}),[m,r]),Object(a.useEffect)((function(){0!==u&&0===r&&g(95)}),[u,r]),i.a.createElement("div",null,i.a.createElement(v.a,{percent:f||h,type:"circle",width:p,strokeColor:o>9?"red":"#FFBDA3",format:function(){return"".concat(o?o<10?"0".concat(o):o:"","  ").concat(r<10?"0".concat(r):r,":").concat(u<10?"0".concat(u):u)}}))},b=(n(190),function(e){var t=e.isModalOpen,n=e.workDone,a=e.handleModalClose,o=d("breakTaken",{hours:0,minutes:0,seconds:0}),c=Object(l.a)(o,1)[0].state;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"Day Stats",visible:t,onOk:a,onCancel:a},i.a.createElement("div",{className:"result-area"},i.a.createElement("div",null,i.a.createElement("p",null,"Total Hours Worked "),i.a.createElement(f,{width:170,time:n,percent:100})),i.a.createElement("div",null,i.a.createElement("p",null,"Total Break taken  ",i.a.createElement("span",{className:"approx"},"(*approx)")),i.a.createElement(f,{width:170,time:c,percent:100}))),(null===n||void 0===n?void 0:n.hours)>9&&i.a.createElement("p",{className:"warning-text"},"hey working more than 10 hrs",i.a.createElement("span",{role:"img","aria-labelledby":"shock"},"\ud83d\ude32"),"!!  take care of your health too")))}),p=n(26),k=n.n(p),E=function(e){var t=(new Date).toLocaleTimeString();return k.a.duration(k()(t,"HH:mm:ss").diff(k()(e,"HH:mm:ss")))},h={seconds:0,minutes:0,hours:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).toLocaleTimeString(),t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(a.useState)((function(){return h})),i=Object(l.a)(n,2),o=i[0],c=i[1],r=Object(a.useState)(e),s=Object(l.a)(r,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){var e;if(t){var n=E(u);e=setTimeout((function(){var e,t,a;c({seconds:null===n||void 0===n||null===(e=n._data)||void 0===e?void 0:e.seconds,minutes:null===n||void 0===n||null===(t=n._data)||void 0===t?void 0:t.minutes,hours:null===n||void 0===n||null===(a=n._data)||void 0===a?void 0:a.hours})}),1e3)}return function(){return clearTimeout(e)}}),[o,t,u]),[o,m]},O=(n(204),function(){var e=d("timing",null),t=Object(l.a)(e,1)[0],n=t.state,o=t.setState,c=d("isStartClicked",!1),s=Object(l.a)(c,1)[0],m=s.state,v=s.setState,f=d("breakTaken",{hours:0,minutes:0,seconds:0}),p=Object(l.a)(f,1)[0].setState,k=g(n,m),E=Object(l.a)(k,2),h=E[0],O=E[1],w=Object(a.useState)(!1),j=Object(l.a)(w,2),N=j[0],S=j[1],y=new Date;return i.a.createElement("div",{className:"work-timer-wrap"},i.a.createElement(r.a,null,i.a.createElement("title",null,"wfh-mate -".concat(y.toLocaleDateString()," ").concat((null===h||void 0===h?void 0:h.hours)?"- worked for ".concat(null===h||void 0===h?void 0:h.hours,":").concat(null===h||void 0===h?void 0:h.minutes):"")),i.a.createElement("meta",{name:"description",content:"Work from home helper application"})),i.a.createElement("div",{className:"control-button",onClick:function(){v(!0),o((new Date).toLocaleTimeString()),O((new Date).toLocaleTimeString())}},i.a.createElement("div",{className:"control-button-inner"},"Start Work")),i.a.createElement("p",{className:"timer"},i.a.createElement("span",{className:"timer-element"},(null===h||void 0===h?void 0:h.hours)<10?"".concat(0,null===h||void 0===h?void 0:h.hours):null===h||void 0===h?void 0:h.hours),i.a.createElement("span",{className:"timer-element"},(null===h||void 0===h?void 0:h.minutes)<10?"".concat(0,null===h||void 0===h?void 0:h.minutes):null===h||void 0===h?void 0:h.minutes),i.a.createElement("span",{className:"timer-element"},(null===h||void 0===h?void 0:h.seconds)<10?"".concat(0,null===h||void 0===h?void 0:h.seconds):null===h||void 0===h?void 0:h.seconds)),i.a.createElement("div",{className:"control-button",onClick:function(){v(!1),S(!0),p({hours:0,minutes:0,seconds:0})}},i.a.createElement("div",{className:"control-button-inner"},"End Work")),i.a.createElement(u,null),N&&i.a.createElement(b,{isModalOpen:N,workDone:h,handleModalClose:function(){S(!1)}}))}),w=n(8),j=n(217),N=(n(205),function(e){var t=e.children,n=e.handleSwitchChange,o=e.checked,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1];Object(a.useEffect)((function(){o&&u(!0)}),[o]);var m=function(e){n(e),u(!s)};return i.a.Children.map(t,(function(e){return"string"===typeof e.type?e:i.a.cloneElement(e,{on:s,onChange:m})}))}),S=function(e){e.on;return e.children},y=function(e){var t=e.on,n=e.onChange;return i.a.createElement(j.a,{checked:t,onChange:n})},T=function(e){var t=e.label,n=void 0===t?"Switch":t,a=e.handleSwitchChange,o=e.checked;return i.a.createElement("div",{className:"switch-class"},i.a.createElement(N,{handleSwitchChange:a,checked:o},i.a.createElement(S,null,i.a.createElement("div",null,n)),i.a.createElement(y,null)))},C=n(219),D=n(114),x=n.n(D),B=n(74),W=n.n(B),L=function(e){var t=e.title,n=void 0===t?"WFH mate":t,a=e.body,o=(e.sound,e.showDesktopNotification),c=e.resetValue,l=(e.timing,{tag:"now",body:a,icon:W.a,lang:"en",dir:"ltr"});return i.a.createElement("div",null,i.a.createElement(x.a,{ignore:!o,askAgain:!0,onShow:function(){c()},onPermissionDenied:function(){alert("Allow notification in site settings to achieve the functionality!")},timeout:4e3,title:n,options:l}))},H={seconds:0,minutes:0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=Object(a.useState)((function(){return e})),o=Object(l.a)(i,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){var e;return t&&n&&(e=setTimeout((function(){(null===c||void 0===c?void 0:c.seconds)<=59&&(null===c||void 0===c?void 0:c.seconds)>0&&r((function(e){return Object(w.a)(Object(w.a)({},e),{},{seconds:e.seconds-1})})),0===(null===c||void 0===c?void 0:c.seconds)&&(null===c||void 0===c?void 0:c.minutes)>0&&r((function(e){return Object(w.a)(Object(w.a)({},e),{},{seconds:59,minutes:e.minutes-1})}))}),1e3)),function(){return clearTimeout(e)}}),[c,t,n]),[c,r]},_=function(){var e=d("breakTaken",{hours:0,minutes:0,seconds:0}),t=Object(l.a)(e,1)[0],n=t.state,i=t.setState,o=Object(a.useState)(null),c=Object(l.a)(o,2),r=c[0],s=c[1],u=Object(a.useState)(5),m=Object(l.a)(u,2),v=m[0],f=m[1];return Object(a.useEffect)((function(){!function(e,t){if(null===t||void 0===t?void 0:t.breakTaken){var a,o,c,l,r,s,u,m,d,f,b,p=Object(w.a)({},e),k=!1;if(0===(null===p||void 0===p?void 0:p.hours)&&0===(null===p||void 0===p?void 0:p.minutes)&&0===(null===p||void 0===p?void 0:p.seconds))p.minutes=(null===t||void 0===t?void 0:t.totalBreak)===(null===t||void 0===t||null===(s=t.breakTaken)||void 0===s?void 0:s.minutes)?null===t||void 0===t?void 0:t.totalBreak:(null===t||void 0===t?void 0:t.totalBreak)-1-(null===t||void 0===t||null===(u=t.breakTaken)||void 0===u?void 0:u.minutes),p.seconds=60-((null===t||void 0===t||null===(m=t.breakTaken)||void 0===m?void 0:m.seconds)>0?null===t||void 0===t||null===(d=t.breakTaken)||void 0===d?void 0:d.seconds:60),k=!0;if(60-((null===t||void 0===t||null===(a=t.breakTaken)||void 0===a?void 0:a.seconds)>0?null===t||void 0===t||null===(o=t.breakTaken)||void 0===o?void 0:o.seconds:60)+(null===e||void 0===e?void 0:e.seconds)>59&&(p.minutes=(null===p||void 0===p?void 0:p.minutes)+1,p.seconds=0,k=!0),v-((null===t||void 0===t||null===(c=t.breakTaken)||void 0===c?void 0:c.minutes)<n?null===t||void 0===t||null===(l=t.breakTaken)||void 0===l?void 0:l.minutes:0)+(null===e||void 0===e?void 0:e.minutes)>59&&(p.hours=(null===p||void 0===p?void 0:p.hours)+1,p.minutes=0,k=!0),(null===t||void 0===t||null===(r=t.breakTaken)||void 0===r?void 0:r.minutes)!==(null===t||void 0===t?void 0:t.totalBreak)||k||(p.minutes=(null===p||void 0===p?void 0:p.minutes)+(null===t||void 0===t?void 0:t.totalBreak),k=!0),!k)p.minutes=(null===p||void 0===p?void 0:p.minutes)+((null===t||void 0===t?void 0:t.totalBreak)-1-(null===t||void 0===t||null===(f=t.breakTaken)||void 0===f?void 0:f.minutes)),p.seconds=(null===p||void 0===p?void 0:p.seconds)+(60-(null===t||void 0===t||null===(b=t.breakTaken)||void 0===b?void 0:b.seconds));i(p)}}(Object(w.a)({},n),r)}),[r]),[s,f]},A=n(75),F=n.n(A),J=n(76),M=n.n(J),V=n(77),z=n.n(V),K=n(78),R=n.n(K),P=n(115),$=n.n(P),q=(n(206),0),G=new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"),Q=function(){var e=Object(a.useState)({seconds:0,minutes:5}),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1],m=d("isDesktopNotificationBreak",!0),v=Object(l.a)(m,1)[0],b=v.state,p=v.setState,k=d("isAlarmEnabled",!0),E=Object(l.a)(k,1)[0],h=E.state,g=E.setState,O=I({minutes:5,seconds:0},s),j=Object(l.a)(O,2),N=j[0],S=j[1],y=_(),D=Object(l.a)(y,2),x=D[0],B=D[1],W=Object(a.useState)(!1),H=Object(l.a)(W,2),A=H[0],J=H[1];window.onbeforeunload=function(){return"err"},Object(a.useEffect)((function(){return function(){return clearInterval(q)}}),[]);var V=function(){G.play()},K=function(e){e.pause(),e.currentTime=0},P=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];u(!1),x({breakTaken:e?N:n,totalBreak:null===n||void 0===n?void 0:n.minutes}),S({seconds:0,minutes:null===n||void 0===n?void 0:n.minutes}),window.clearInterval(q),e&&K(G)};return i.a.createElement("div",{className:"break-wrapper"},i.a.createElement(C.a,{placement:"bottomRight",title:"Tired ? No clue ? Taking a break really helps to solve things...\ud83d\ude09"},i.a.createElement("div",{className:"tired-img-wrapper"},i.a.createElement("figure",{className:"tired-img-figure"},i.a.createElement("img",{className:"tired-img",src:$.a,alt:"tired"})))),i.a.createElement("div",{className:"break-control-wrapper"},i.a.createElement("div",{className:"set-break-wrapper"},i.a.createElement("p",null,"Set break for"),i.a.createElement("div",{className:"set-break-time"},i.a.createElement("figure",{className:"set-break-icon",onClick:function(){(null===n||void 0===n?void 0:n.minutes)<25&&(o((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes+5})})),S((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes+5})})))}},i.a.createElement("img",{src:z.a,alt:"plus"})," "),i.a.createElement("p",null,null===n||void 0===n?void 0:n.minutes,"  mins"),i.a.createElement("figure",{className:"set-break-icon",onClick:function(){(null===n||void 0===n?void 0:n.minutes)>5&&(o((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes-5})})),S((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes-5})})))}},i.a.createElement("img",{src:R.a,alt:"minus"})," "))),i.a.createElement("div",{className:"switch-wrapper"},i.a.createElement(T,{label:"Desktop notification",handleSwitchChange:function(e){p(e)},checked:b}),i.a.createElement(T,{label:"Alert tone",handleSwitchChange:function(e){g(e)},checked:h}))),i.a.createElement("div",null,i.a.createElement(f,{time:N,totalTime:null===n||void 0===n?void 0:n.minutes}),i.a.createElement("div",{className:"timer-control-wrapper"},i.a.createElement("figure",{className:"timer-icons",onClick:function(){u(!s),S(n),B(null===n||void 0===n?void 0:n.minutes),q=setInterval((function(){b&&J(!0),h&&V(),P(!1)}),6e4*(null===n||void 0===n?void 0:n.minutes))}},i.a.createElement("img",{className:"timer-img",src:F.a,alt:"play/pause"})),i.a.createElement("figure",{className:"timer-icons",onClick:P},i.a.createElement("img",{className:"timer-img",src:M.a,alt:"stop"})))),i.a.createElement(L,{title:"WFH mate",body:"hey mate break time over!",timing:8e3,showDesktopNotification:!!b&&A,resetValue:function(){J(!1)}}))},U=(n(207),0),X=function(){var e=Object(a.useState)({seconds:0,minutes:20}),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1],m=Object(a.useState)(!1),v=Object(l.a)(m,2),b=v[0],p=v[1],k=d("isDesktopNotificationWater",!0),E=Object(l.a)(k,1)[0],h=E.state,g=E.setState,O=I({minutes:0,seconds:0},b),j=Object(l.a)(O,2),N=j[0],S=j[1];Object(a.useEffect)((function(){0===(null===N||void 0===N?void 0:N.seconds)&&0===(null===N||void 0===N?void 0:N.minutes)&&S((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:null===n||void 0===n?void 0:n.minutes,seconds:0})}))}),[N,S,n]),Object(a.useEffect)((function(){return function(){return clearInterval(U)}}),[]);return i.a.createElement("div",{className:"water-break-wrapper"},i.a.createElement("div",{className:"notify-text-water"},i.a.createElement("p",{className:"sticky-note-wrap sticky-note-orange sticky-note-wrap-text"},"Drink sufficient water,Also follow 20-20-20 rule(Take a 20 second break! Look at a 20 feet object for 20 seconds) ")),i.a.createElement("div",null,i.a.createElement(f,{time:N,totalTime:null===n||void 0===n?void 0:n.minutes}),i.a.createElement("div",{className:"water-break-control"},i.a.createElement("figure",{className:"timer-icons",onClick:function(){p(!0),S(n),U=setInterval((function(){u(!0),S({minutes:19,seconds:59})}),6e4*(null===n||void 0===n?void 0:n.minutes))}},i.a.createElement("img",{className:"timer-img",src:F.a,alt:"play/pause"})),i.a.createElement("figure",{className:"timer-icons",onClick:function(){p(!1),S({seconds:0,minutes:null===n||void 0===n?void 0:n.minutes}),clearInterval(U)}},i.a.createElement("img",{className:"timer-img",src:M.a,alt:"stop"})))),i.a.createElement("div",{className:"set-water-break-wrapper"},i.a.createElement("div",{className:"set-water-break"},i.a.createElement("p",null,"Water break on every "),i.a.createElement("div",{className:"water-break-timer"},i.a.createElement("figure",{className:"set-break-icon",onClick:function(){(null===n||void 0===n?void 0:n.minutes)<30&&(o((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes+10})})),S((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes+10})})))}},i.a.createElement("img",{src:z.a,alt:"play"})),i.a.createElement("p",null,null===n||void 0===n?void 0:n.minutes,"  mins"),i.a.createElement("figure",{className:"set-break-icon",onClick:function(){(null===n||void 0===n?void 0:n.minutes)>20&&(o((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes-10})})),S((function(e){return Object(w.a)(Object(w.a)({},e),{},{minutes:e.minutes-10})})))}},i.a.createElement("img",{src:R.a,alt:"minus"})))),i.a.createElement(T,{label:"Desktop notification",handleSwitchChange:function(e){g(e)},checked:h})),i.a.createElement(L,{title:"WFH mate",body:"hey mate water break now",sound:"https://actions.google.com/sounds/v1/water/pour_into_metal_bucket.ogg",showDesktopNotification:!!h&&s,resetValue:function(){u(!1)}}))},Y=(n(208),function(){var e=d("textAreaContent",""),t=Object(l.a)(e,1)[0],n=t.state,a=t.setState;return i.a.createElement("div",{className:"textBox-wrapper"},i.a.createElement("textarea",{placeholder:"Note the important ones here...",onChange:function(e){a(e.target.value)},value:n,draggable:!1}))}),Z=n(59),ee=n(220),te=(n(209),[{id:0,completed:!1,todoText:""}]),ne=function(){var e=d("todoList",te),t=Object(l.a)(e,1)[0],n=t.state,a=t.setState;return i.a.createElement("div",{className:"todo-wrapper"},null===n||void 0===n?void 0:n.map((function(e,t){return i.a.createElement("div",{className:"todo-elements",key:null===e||void 0===e?void 0:e.id},i.a.createElement(ee.a,{className:"todo-checkbox",onChange:function(){return function(e){var t=Object(Z.a)(n);n[e].completed=!n[e].completed,a(t)}(t)},checked:null===e||void 0===e?void 0:e.completed}),i.a.createElement("input",{autoFocus:!0,className:"todo-input",onKeyDown:function(e){return function(e,t){if("Enter"===e.key&&!e.shiftKey&&n.length<10){e.preventDefault();var i={id:n.length,completed:!1,todoText:""};a([].concat(Object(Z.a)(n),[i]))}if("Backspace"===e.key||"Delete"===e.key){var o=Object(Z.a)(n);!n[t].todoText&&o.length>1&&(o.splice(t,1),a(o))}}(e,t)},onChange:function(e){return function(e,t){var i=Object(Z.a)(n);n[t].todoText=e.target.value,a(i)}(e,t)},value:null===e||void 0===e?void 0:e.todoText}))})))},ae=(n(210),function(){return i.a.createElement("div",{className:"notes-wrapper"},i.a.createElement("div",{className:"notify-text"},i.a.createElement("p",{className:"sticky-note-wrap sticky-note-blue sticky-note-wrap-text"},"Check how long u're working! Start,End Work button helps u to manage..."),i.a.createElement("p",{className:"sticky-note-wrap sticky-note-blue sticky-note-wrap-text"},"Don't test your memory skills in the list of work to do!! Have a todo list...")),i.a.createElement(Y,null),i.a.createElement(ne,null),i.a.createElement("div",{className:"mate-image-wrapper"},i.a.createElement("figure",{className:"mate-figure"},i.a.createElement("img",{className:"mate-img",src:W.a,alt:"mate"}))))}),ie=(n(211),function(){return i.a.createElement("div",{className:"main-wrapper"},i.a.createElement("div",{className:"components-wrapper"},i.a.createElement(O,null),i.a.createElement(ae,null),i.a.createElement("div",{className:"break-wrap"},i.a.createElement(Q,null),i.a.createElement(X,null),i.a.createElement("p",{className:"clear-note"},"*only this part will reset during page refresh"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,n){e.exports=n.p+"static/media/mate.985ddc7d.png"},75:function(e,t,n){e.exports=n.p+"static/media/play.ef083f73.svg"},76:function(e,t,n){e.exports=n.p+"static/media/stop.e412b71f.svg"},77:function(e,t,n){e.exports=n.p+"static/media/plus.4874204c.svg"},78:function(e,t,n){e.exports=n.p+"static/media/minus.35493834.svg"}},[[122,1,2]]]);
//# sourceMappingURL=main.4c180c41.chunk.js.map