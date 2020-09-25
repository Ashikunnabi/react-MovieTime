(this["webpackJsonpmovie-time"]=this["webpackJsonpmovie-time"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),l=(a(65),a(66),a(67),a(68),a(15)),i=(a(73),a(19)),m=a(7),s=a(51),u=a(52),d=a(59),h=a(58),p=a(3),v=a(33),E=a.n(v),f=a(34),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e.onChangeSearchHandeller=function(t){e.props.searchMovie(t.target.value)},e.onSubmitSearchHandeller=function(t){"Enter"===t.key&&(t.preventDefault(),e.props.fetchMovie(e.props.text))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=["student","Ant","joker","year","dream","fare","kill"],t=Math.floor(Math.random()*e.length);this.props.fetchMovie(e[t])}},{key:"render",value:function(){return r.a.createElement(p.s,{color:"indigo",dark:!0,expand:"md"},r.a.createElement(p.t,null,r.a.createElement("strong",{className:"white-text"},"MovieTime")),r.a.createElement(p.v,{onClick:this.toggleCollapse}),r.a.createElement(p.i,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(p.u,{left:!0},r.a.createElement(p.q,{active:!0},r.a.createElement(p.r,{to:"/"},"Home"))),r.a.createElement(p.u,{right:!0},r.a.createElement(p.q,null,r.a.createElement(p.l,{waves:!0},r.a.createElement("div",{className:"md-form my-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",onChange:this.onChangeSearchHandeller,onKeyPress:this.onSubmitSearchHandeller})))))))}}]),a}(n.Component),b=Object(l.b)((function(e){return{text:e.movies.text}}),(function(e){return{searchMovie:function(t){var a;e((a=t,function(e){e({type:"SEARCH_MOVIE",payload:a})}))},fetchMovie:function(t){var a;e((a=t,function(e){E.a.get("https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=".concat(f.key,"&s=").concat(a)).then((function(t){return e({type:"FETCH_MOVIE",payload:t.data.Search})})).catch((function(e){return console.log(e)}))}))}}}))(g),y=function(){return r.a.createElement(p.k,{color:"indigo",className:"font-small pt-4 mt-4"},r.a.createElement(p.j,{fluid:!0,className:"text-center text-md-left"},r.a.createElement(p.y,null,r.a.createElement(p.h,{md:"6"},r.a.createElement("h5",{className:"title"},"Footer Content"),r.a.createElement("p",null,"This MovieTime is a simple React Redux project which is using "," ",r.a.createElement("a",{href:"http://www.omdbapi.com/"},"OMDB")," "," ","as api provider.")))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(p.j,{fluid:!0},"Developed by: ",r.a.createElement("a",{href:"https://www.github.com/Ashikunnabi"}," Md. Ashikun Nabi "))))},w=function(e){return r.a.createElement(p.h,{md:"3",className:"my-2",style:{height:"500px",display:"flex"}},r.a.createElement(p.c,{className:"hoverable"},r.a.createElement(p.e,{hover:!0,zoom:!0,className:"img-fluid",src:e.movie.Poster,waves:!0}),r.a.createElement(p.d,null,r.a.createElement(p.g,null,e.movie.Title),r.a.createElement("span",{className:"badge badge-default"},e.movie.Year)," "," ",r.a.createElement("span",{className:"badge badge-success"},e.movie.Type),r.a.createElement("hr",{style:{background:e.hrColor}}),r.a.createElement(p.p,{to:"/movie/"+e.movie.imdbID,className:"orange-text mt-1 d-flex justify-content-end align-items-center"},r.a.createElement("h5",{className:""},"See details","",r.a.createElement(p.m,{icon:"angle-double-right",className:"ml-2",size:"sm"}))))))},O=Object(l.b)((function(e){return{movie:e.movies.movie}}),(function(e){return{singleMovie:function(t){var a;e((a=t,function(e){E.a.get("https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=".concat(f.key,"&i=").concat(a)).then((function(t){return e({type:"SINGLE_MOVIE",payload:t.data})})).catch((function(e){return console.log(e)}))}))}}}))((function(e){return Object(n.useEffect)((function(){e.singleMovie(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))}),[]),r.a.createElement(p.y,null,r.a.createElement(p.h,{md:"12"},r.a.createElement(p.c,{reverse:!0},r.a.createElement(p.e,{cascade:!0,style:{height:"80%",margin:"0 auto"},src:e.movie.Poster}),r.a.createElement(p.d,{cascade:!0,className:"text-center"},r.a.createElement(p.g,null,e.movie.Title),r.a.createElement("h5",{className:"indigo-text"},r.a.createElement("strong",null,e.movie.Genre," - ",e.movie.Type,", Released at: ",e.movie.Released)),r.a.createElement("h5",{className:"standered-text"},r.a.createElement("strong",null,"Directed By: ",e.movie.Director,", Writer: ",e.movie.Writer)),r.a.createElement("h5",{className:"default-text"},r.a.createElement("strong",null,"Actors: ",e.movie.Actors)),r.a.createElement(p.f,null,e.movie.Plot),r.a.createElement("a",{href:"#!",className:"icons-sm li-ic ml-1"},"Meta Score:",e.movie.Metascore),",",r.a.createElement("a",{href:"#!",className:"icons-sm tw-ic ml-1"},"IMDB Rating: ",e.movie.imdbRating),",",r.a.createElement("a",{href:"#!",className:"icons-sm fb-ic ml-1"},"IMDB Voats: ",e.movie.imdbVotes)))))}));var N=Object(l.b)((function(e){return{moviesList:e.movies.movies}}))((function(e){var t=e.moviesList.map((function(e,t){return r.a.createElement(w,{movie:e,key:t})}));return r.a.createElement("div",{className:"container"},r.a.createElement(p.y,null,t))}));var x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(O,null))},M=a(14),k=a(57),j=(a(113),a(17)),S={text:"",movies:[],loading:!1,movie:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(j.a)(Object(j.a)({},e),{},{text:t.payload,loading:!1});case"FETCH_MOVIE":return Object(j.a)(Object(j.a)({},e),{},{movies:t.payload});case"SINGLE_MOVIE":return Object(j.a)(Object(j.a)({},e),{},{movie:t.payload});default:return e}},I=Object(M.combineReducers)({movies:C}),A=[k.a],D=Object(M.createStore)(I,M.applyMiddleware.apply(void 0,A));var H=function(){return r.a.createElement(l.a,{store:D},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:N}),r.a.createElement(m.a,{path:"/movie/:id",exact:!0,component:x})),r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t){e.exports={key:"bbf598ef"}},60:function(e,t,a){e.exports=a(114)},65:function(e,t,a){},73:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.e4ee70c2.chunk.js.map