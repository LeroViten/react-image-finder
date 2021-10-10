(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),s=n(9),i=n(3),u=n(5),l=n(11),j=n.n(l),b=(n(10),n(40),n(41),n(42),n(1));function m(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.c.error("Enter valid search");t(o),r("")},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:o,onChange:function(e){r(e.target.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}n(44);function d(e){var t=e.webformatURL,n=e.largeImageURL,a=e.tags,c=e.setModalImgInfo;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:t,alt:a,onClick:function(){return c({largeImageURL:n,tags:a})},className:"ImageGalleryItem-image"})})}n(45);function h(e){var t=e.images,n=e.setModalImgInfo;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,c=e.tags,o=e.id;return Object(b.jsx)(d,{webformatURL:t,largeImageURL:a,tags:c,setModalImgInfo:n},o)}))})}n(46);function f(e){var t=e.onLoadMore;return Object(b.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var g=n(12),O=n(13),p=n(15),v=n(14),x=(n(47),document.querySelector("#modal-root")),y=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleEscButtonPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscButtonPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscButtonPress)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),x)}}]),n}(a.PureComponent);function S(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(1),r=Object(i.a)(o,2),l=r[0],d=r[1],g=Object(a.useState)([]),O=Object(i.a)(g,2),p=O[0],v=O[1],x=Object(a.useState)(!1),S=Object(i.a)(x,2),I=S[0],w=S[1],k=Object(a.useState)(null),L=Object(i.a)(k,2),N=(L[0],L[1]),C=Object(a.useState)("idle"),E=Object(i.a)(C,2),F=E[0],M=E[1],U=Object(a.useState)(null),B=Object(i.a)(U,2),R=B[0],P=B[1],G=Object(a.useState)(null),q=Object(i.a)(G,2),A=q[0],D=q[1],J=function(){var e="/?image_type=photo&orientation=horizontal&q=".concat(n,"&page=").concat(l,"&per_page=").concat(12,"&key=").concat("22952317-a5881606497ad665bd114491c");M("pending"),fetch("https://pixabay.com/api"+e).then((function(e){return e.json()})).then((function(e){var t=e.hits;t.length<1&&u.c.error("Nothing found, specify your search"),v((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),M("resolved"),d((function(e){return e+1})),1!==l&&_()})).catch((function(e){N(e),console.error(e.message),M("rejected")}))};Object(a.useEffect)((function(){n&&J()}),[n]);var T=function(){w(!I)},_=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},z=p.length>0&&p.length>=12;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{onSubmit:function(e){e!==n&&(c(e),d(1),v([]))}}),"pending"===F&&Object(b.jsx)(j.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:150,width:150,timeout:2e3}),Object(b.jsx)(h,{images:p,setModalImgInfo:function(e){var t=e.largeImageURL,n=e.tags;P(t),D(n),T()}}),z&&Object(b.jsx)(f,{onLoadMore:function(){J()}}),I&&Object(b.jsx)(y,{onClose:T,children:Object(b.jsx)("img",{src:R,alt:A})})]}),Object(b.jsx)(u.a,{transition:u.b,autoClose:3e3})]})}n(48);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.39683075.chunk.js.map