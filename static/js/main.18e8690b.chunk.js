(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=a(9),i=a(4),u=a(5),l=a(7),h=a(6),m=a(2),b=(a(10),a(15),a(16),a(1)),g=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={text:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleSubmit=function(e){if(e.preventDefault(),""===t.state.text.trim())return m.c.error("Enter city name");t.props.onSubmit(t.state.text),t.setState({text:""})},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:this.state.text,onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component);a(18);function j(t){var e=t.webformatURL,a=(t.largeImageURL,t.tags);return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:e,alt:a,className:"ImageGalleryItem-image"})})}a(19);function d(t){var e=t.images;return Object(b.jsx)("ul",{className:"ImageGallery",children:e.map((function(t){var e=t.webformatURL,a=t.largeImageURL,n=t.tags,r=t.id;return Object(b.jsx)(j,{webformatURL:e,largeImageURL:a,tags:n},r)}))})}a(20);function f(t){var e=t.onLoadMore;return Object(b.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})}var p=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={text:"",page:1,images:[],showModal:!1,error:null,status:"idle"},t.fetchImages=function(){var e=t.state,a=e.text,n=e.page,r="/?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(n,"&per_page=").concat(12,"&key=").concat("22952317-a5881606497ad665bd114491c");t.setState({status:"pending"}),fetch("https://pixabay.com/api"+r).then((function(t){return t.json()})).then((function(e){var a=e.hits;a.length<1&&m.c.error("Nothing found, specify your search"),t.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(a)),status:"resolved",page:t.page+1}})),t.handlePageScroll()})).catch((function(e){return t.setState({error:e,status:"rejected"})}))},t.handlePageScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t.onSubmit=function(e){t.setState({text:e})},t.onLoadMore=function(){t.fetchImages()},t}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(t,e){var a=this;e.text!==this.state.text&&(this.setState({images:[],page:1}),setTimeout((function(){a.fetchImages()}),1500))}},{key:"render",value:function(){var t=this.state.images;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{onSubmit:this.onSubmit}),Object(b.jsx)(d,{images:t}),t.length>0&&Object(b.jsx)(f,{onLoadMore:this.onLoadMore})]}),Object(b.jsx)(m.a,{transition:m.b,autoClose:3e3})]})}}]),a}(n.Component);a(21);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.18e8690b.chunk.js.map