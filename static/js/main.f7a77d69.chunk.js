(this["webpackJsonpreact-momentum"]=this["webpackJsonpreact-momentum"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},4:function(e){e.exports=JSON.parse('{"songs":{"1":{"artist":"30 second to mars","title":"A beautiful life","link":"https://mezzoforte.ru/s/artist/308840-30_seconds_to_mars_a_beautiful_lie.mp3"},"2":{"artist":"30 second to mars","title":"The kill","link":"https://mezzoforte.ru/s/artist/342884-30_seconds_to_mars_the_kill.mp3"},"3":{"artist":"30 second to mars","title":"From yesterday","link":"https://mezzoforte.ru/s/artist/488738-30_seconds_to_mars_from_yesterday.mp3"},"4":{"artist":"30 second to mars","title":"Hurricane","link":"https://mezzoforte.ru/s/artist/347647-30_seconds_to_mars_hurricane.mp3"},"5":{"artist":"30 second to mars","title":"ill attack","link":"https://mezzoforte.ru/s/artist/417488-30_seconds_to_mars_ill_attack.mp3"}}}')},46:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(18),n=a.n(s),r=(a(24),a(25),a(9)),o=a.n(r),i=a(19),l=a(2),u=a(4),j=a(0),d=function(){var e=Object(c.useState)(3),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),d=r[0],m=r[1],b=u.songs["".concat(a)].link,O=Object(c.useRef)(),h=function(){d?(O.current.pause(),m(!1)):(O.current.play(),m(!0))},p=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(a+=t),e.next=3,O.current.pause();case 3:a>Object.keys(u.songs).length?s(1):a<1&&s(Object.keys(u.songs).length),O.current.src=u.songs["".concat(a)].link,O.current.play();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)("audio",{ref:O,src:b}),Object(j.jsxs)("div",{className:"player-controls",children:[Object(j.jsx)("button",{className:"play-prev player-icon",onClick:function(){return p(-1)}}),d?Object(j.jsx)("button",{className:"play player-icon pause",onClick:h}):Object(j.jsx)("button",{className:"play player-icon",onClick:h}),Object(j.jsx)("button",{className:"play-next player-icon",onClick:function(){return p(1)}})]}),Object(j.jsx)("ul",{className:"play-list",children:Object.keys(u.songs).map((function(e){return Object(j.jsxs)("li",{className:"play-item",style:e!=a?{color:"white"}:{color:"violet"},children:[u.songs[e].artist,': "',u.songs[e].title,'"']},e)}))})]})},m=a(5),b=a.n(m),O=function(){var e=Object(c.useState)("Tambov"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),m=d[0],O=d[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),f=p[0],g=p[1],x=Object(c.useState)(""),v=Object(l.a)(x,2),y=v[0],N=v[1],_=Object(c.useRef)(null);Object(c.useEffect)((function(){localStorage.getItem("city")&&s(localStorage.getItem("city")),k()}),[a]);var k=function(){b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&lang=en&appid=").concat("171811e697309d78e6a7383c0e567329","&units=metric")).then((function(e){_.current.classList.add("owf-".concat(e.data.weather[0].id)),O(e.data.weather[0].description),i(Math.floor(e.data.main.temp)),g(Math.floor(e.data.wind.speed)),N(e.data.main.humidity)}))};return Object(j.jsxs)("div",{className:"weather",children:[Object(j.jsx)("input",{type:"text",className:"city",value:a,onChange:function(e){localStorage.setItem("city",e.target.value),s(e.target.value)},onBlur:k}),Object(j.jsx)("i",{className:"weather-icon owf",ref:_}),Object(j.jsx)("div",{className:"weather-error"}),Object(j.jsxs)("div",{className:"description-container",children:[Object(j.jsxs)("span",{className:"temperature",children:[o," \xb0C"]}),Object(j.jsx)("span",{className:"weather-description",children:m})]}),Object(j.jsxs)("div",{className:"wind",children:["Wind speed: ",f]}),Object(j.jsxs)("div",{className:"humidity",children:["Humidity: ",y]})]})},h=function(e){var t=e.setBg;return Object(j.jsxs)("div",{className:"slider-icons",children:[Object(j.jsx)("button",{className:"slide-prev slider-icon",onClick:t}),Object(j.jsx)("button",{className:"slide-next slider-icon",onClick:t})]})},p=function(){var e=Object(c.useState)((new Date).toLocaleTimeString()),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)((new Date).toLocaleDateString()),r=Object(l.a)(n,2),o=r[0],i=r[1];return setInterval((function(){s((new Date).toLocaleTimeString("en-US",{hour12:!1})),i((new Date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}))}),1e3),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("time",{className:"time",children:a}),Object(j.jsx)("div",{className:"date",children:o})]})},f=function(){var e="",t=(new Date).getHours();e=t<7?"night":t<13?"morning":t<19?"evening":"night";var a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1];Object(c.useEffect)((function(){localStorage.getItem("username")&&r(localStorage.getItem("username"))}),[]);return Object(j.jsxs)("div",{className:"greeting-container",children:[Object(j.jsxs)("span",{className:"greeting",children:["Good ",e,", "]}),Object(j.jsx)("input",{type:"text",className:"name",value:n,onChange:function(e){localStorage.setItem("username",e.target.value),r(e.target.value)},placeholder:"[Enter your name]"})]})},g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1],u=function(){b.a.get("https://favqs.com/api/qotd").then((function(e){s(e.data.quote.body),i(e.data.quote.author)}))};return Object(c.useEffect)((function(){u()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"change-quote",onClick:function(){return u()}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"quote",children:a}),Object(j.jsx)("div",{className:"author",children:o})]})]})};var x=function(){Object(c.useEffect)((function(){e()}),[]);var e=function(){b.a.get("https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=aJCc9fzFH_gUnZ4nrG--nVY_D88ajHeqJyMAgd9rxb0").then((function(e){var t=new Image;t.src="".concat(e.data.urls.regular),t.onload=function(){document.body.style="background: url(".concat(t.src,") center/cover, rgba(0, 0, 0, 0.5);")}}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(d,{}),Object(j.jsx)(O,{})]}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(h,{setBg:e}),Object(j.jsx)(p,{}),Object(j.jsx)(f,{})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(g,{})})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f7a77d69.chunk.js.map