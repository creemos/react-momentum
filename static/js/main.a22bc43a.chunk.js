(this["webpackJsonpreact-momentum"]=this["webpackJsonpreact-momentum"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"songs":{"1":{"artist":"\u0420\u0430\u0434\u0438\u043e","title":"\u041d\u0410\u0428\u0415 \u0420\u0430\u0434\u0438\u043e (\u041f\u0430\u043d\u043a\u0438 \u0445\u043e\u0439!)","link":"https://nashe1.hostingradio.ru/nashepunks.mp3"},"2":{"artist":"\u0420\u0430\u0434\u0438\u043e","title":"\u0414\u0438\u0441\u043a\u043e\u0442\u0435\u043a\u0430: 90-\u0445","link":"https://radiorecord.hostingradio.ru/sd9096.aacp?46caa922"},"3":{"artist":"\u0420\u0430\u0434\u0438\u043e","title":"Radio Record","link":"https://radiorecord.hostingradio.ru/rr_main96.aacp"}}}')},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(18),s=n.n(a),r=(n(42),n(43),n(44),n(7)),o=n.n(r),i=n(12),u=n(3),l=n(10),j=(n(46),n(1)),d=function(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),d=r[0],b=r[1],O=Object(c.useState)("0.5"),m=Object(u.a)(O,2),p=m[0],h=m[1],f=l.songs["".concat(n)].link,g=Object(c.useRef)(),x=function(){d?(g.current.pause(),b(!1)):(g.current.play(),b(!0))},y=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(n+=t),e.next=3,g.current.pause();case 3:n>Object.keys(l.songs).length?a(1):n<1&&a(Object.keys(l.songs).length),g.current.src=l.songs["".concat(n)].link,g.current.play();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g.current.volume=p}),[p]),Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)("audio",{ref:g,src:f}),Object(j.jsxs)("div",{className:"player-controls",children:[Object(j.jsx)("button",{className:"play-prev player-icon",onClick:function(){return y(-1)}}),d?Object(j.jsx)("button",{className:"play player-icon pause",onClick:x}):Object(j.jsx)("button",{className:"play player-icon",onClick:x}),Object(j.jsx)("button",{className:"play-next player-icon",onClick:function(){return y(1)}}),Object(j.jsx)("input",{type:"range",className:"volume",min:"0",max:"1",step:"0.1",value:p,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)("ul",{className:"play-list",children:Object.keys(l.songs).map((function(e){return Object(j.jsxs)("li",{className:"play-item",onClick:Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e);case 2:b(!0),g.current.play();case 4:case"end":return t.stop()}}),t)}))),style:e!=n?{color:"white"}:{color:"#30d5c8"},children:[l.songs[e].artist,': "',l.songs[e].title,'"']},e)}))})]})},b=n(11),O=n.n(b),m=(n(66),n(15)),p=n(5),h={username:"",city:"Moscow",isAuth:!1,todos:[]},f="SET_USER_DATA",g="SET_AUTH",x="SET_CITY",y="ADD_TODO",v="REMOVE_TODO",N="TOGGLE_COMPLETED",k={setUser:function(e){return{type:f,payload:e}},setIsAuth:function(e){return{type:g,payload:e}},setCity:function(e){return{type:x,payload:e}},addTodo:function(e){return{type:y,payload:e}},removeTodo:function(e){return{type:v,payload:e}},toggleCompleted:function(e){return{type:N,payload:e}},login:function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(k.setUser(e)),n(k.setIsAuth(!0))}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.removeItem("username"),e.next=4,t(k.setIsAuth(!1));case 4:t(k.setUser("")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},w=n(4),S=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),b=d[0],m=d[1],p=Object(c.useState)(""),h=Object(u.a)(p,2),f=h[0],g=h[1],x=Object(c.useRef)(null),y=Object(w.b)(),v=Object(w.c)((function(e){return e.auth.city})),N=function(){localStorage.getItem("city")&&y(k.setCity(localStorage.getItem("city"))),O.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(v,"&lang=ru&appid=").concat("171811e697309d78e6a7383c0e567329","&units=metric")).then((function(e){x.current.classList="weather-icon owf owf-".concat(e.data.weather[0].id),i(e.data.weather[0].description),a(Math.floor(e.data.main.temp)),m(Math.floor(e.data.wind.speed)),g(e.data.main.humidity),y((function(e){return k.setCity(e)}))}))};return Object(c.useEffect)((function(){N()}),[]),Object(j.jsxs)("div",{className:"weather",children:[Object(j.jsxs)("div",{className:"search-block",children:[Object(j.jsx)("input",{type:"text",className:"city",value:v,onChange:function(e){y(k.setCity(e.target.value)),localStorage.setItem("city",e.target.value)}}),Object(j.jsx)("button",{className:"search-button search",onClick:N})]}),Object(j.jsx)("i",{ref:x}),Object(j.jsx)("div",{className:"weather-error"}),Object(j.jsxs)("div",{className:"description-container",children:[Object(j.jsxs)("span",{className:"temperature",children:[n," \xb0C"]}),Object(j.jsx)("span",{className:"weather-description",children:o})]}),Object(j.jsxs)("div",{className:"wind",children:["\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430: ",b," \u043c/\u0441"]}),Object(j.jsxs)("div",{className:"humidity",children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",f,"%"]})]})},C=function(e){var t=e.setBg;return Object(j.jsxs)("div",{className:"slider-icons",children:[Object(j.jsx)("button",{className:"slide-prev slider-icon",onClick:t}),Object(j.jsx)("button",{className:"slide-next slider-icon",onClick:t})]})},T=(n(73),function(){var e=Object(c.useState)((new Date).toLocaleTimeString()),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)((new Date).toLocaleDateString()),r=Object(u.a)(s,2),o=r[0],i=r[1];return setInterval((function(){a((new Date).toLocaleTimeString("ru-RU",{hour12:!1})),i((new Date).toLocaleDateString("ru-RU",{weekday:"long",month:"long",day:"numeric"}))}),1e3),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("time",{className:"time",children:n}),Object(j.jsx)("div",{className:"date",children:o})]})}),I=n(22),D=(n(75),function(){var e="",t=(new Date).getHours();e=t<7?"\u0414\u043e\u0431\u0440\u043e\u0439 \u043d\u043e\u0447\u0438":t<13?"\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":t<19?"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":"\u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440";var n=Object(w.b)(),a=Object(w.c)((function(e){return e.auth.isAuth})),s=Object(w.c)((function(e){return e.auth.username}));return Object(c.useEffect)((function(){localStorage.getItem("username")&&n(k.login(localStorage.getItem("username")))}),[localStorage.getItem("username")]),Object(j.jsx)("div",{className:"greeting-container",children:a?Object(j.jsxs)("span",{className:"greeting",children:[e,", ",s,"!",Object(j.jsx)("button",{className:"greetingBtn",onClick:function(){n(k.logout())},children:"\ud83d\udeaa"})]}):Object(j.jsx)(I.c,{initialValues:{username:""},onSubmit:function(e){return t=e,n(k.login(t.username)),void localStorage.setItem("username",t.username);var t},children:Object(j.jsxs)(I.b,{children:[Object(j.jsx)(I.a,{id:"username",name:"username",className:"name",placeholder:"[\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f]"}),Object(j.jsx)("button",{className:"greetingBtn",type:"submit",children:"\u0412\u0445\u043e\u0434"})]})})})}),E=(n(76),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(u.a)(l,2),b=d[0],m=d[1],p=function(){m(!0),O.a.get("https://favqs.com/api/qotd").then((function(e){setTimeout((function(){a(e.data.quote.body),i(e.data.quote.author),m(!1)}),1e3)}))};return Object(c.useEffect)((function(){p()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"change-quote",onClick:function(){return p()},style:b?{animation:"spin 1s infinite"}:{}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"quote",children:n}),Object(j.jsx)("div",{className:"author",children:o})]})]})}),A=(n(77),function(){var e=Object(w.c)((function(e){return e.auth.todos})),t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(w.b)();return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("ul",{children:e.map((function(e,t){return Object(j.jsxs)("li",{className:"todosItem",children:[Object(j.jsx)("p",{style:{textDecoration:e.completed?"line-through":""},children:e.description}),Object(j.jsx)("button",{className:"todoBtn",onClick:function(){return function(e){r(k.toggleCompleted(e))}(t)},children:"\u2713"}),Object(j.jsx)("button",{className:"todoBtn",onClick:function(){return function(e){r(k.removeTodo(e))}(t)},children:"\u2716"})]},t)}))}),Object(j.jsxs)("div",{className:"todo-adder",children:[Object(j.jsx)("input",{type:"text",className:"todo-input",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"todoBtn",onClick:function(){console.log(a);var t=e.length+1;r(k.addTodo({id:t,description:a,completed:!1})),s("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})});var _=function(){Object(c.useEffect)((function(){e()}),[]);var e=function(){O.a.get("https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=aJCc9fzFH_gUnZ4nrG--nVY_D88ajHeqJyMAgd9rxb0").then((function(e){var t=new Image;t.src="".concat(e.data.urls.regular),t.onload=function(){document.body.style="background: url(".concat(t.src,") center/cover, rgba(0, 0, 0, 0.5);")}}))},t=Object(w.c)((function(e){return e.auth.isAuth}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(d,{}),t?Object(j.jsx)(A,{}):null,Object(j.jsx)(S,{})]}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(C,{setBg:e}),Object(j.jsx)(T,{}),Object(j.jsx)(D,{})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(E,{})})]})},q=n(23),B=n(37),R=Object(q.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(Object(p.a)({},e),{},{username:t.payload});case g:return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload});case x:return Object(p.a)(Object(p.a)({},e),{},{city:t.payload});case y:return Object(p.a)(Object(p.a)({},e),{},{todos:[].concat(Object(m.a)(e.todos),[t.payload])});case v:return Object(p.a)(Object(p.a)({},e),{},{todos:[].concat(Object(m.a)(e.todos.slice(0,t.payload)),Object(m.a)(e.todos.slice(t.payload+1)))});case N:return Object(p.a)(Object(p.a)({},e),{},{todos:Object(m.a)(e.todos.map((function(e){return e.id-1===t.payload?Object(p.a)(Object(p.a)({},e),{},{completed:!e.completed}):e})))});default:return e}}}),U=Object(q.c)(R,Object(q.a)(B.a));s.a.render(Object(j.jsx)(w.a,{store:U,children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.a22bc43a.chunk.js.map