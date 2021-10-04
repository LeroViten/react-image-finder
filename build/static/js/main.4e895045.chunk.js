(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{38:function(t,e,a){},39:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=a(10),i=a(4),l=a(5),u=a(7),h=a(6),g=a(8),m=a(12),d=a.n(m),f=(a(11),a(37),a(38),a(39),a(1)),j=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={text:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleSubmit=function(e){if(e.preventDefault(),""===t.state.text.trim())return g.c.error("Enter city name");t.props.onSubmit(t.state.text),t.setState({text:""})},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{value:this.state.text,onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component);a(41);function b(t){var e=t.webformatURL,a=t.largeImageURL,n=t.tags,o=(t.toggleModal,t.setModalImgInfo);return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:e,alt:n,onClick:function(){return o({largeImageURL:a,tags:n})},className:"ImageGalleryItem-image"})})}a(42);function p(t){var e=t.images,a=t.toggleModal,n=t.setModalImgInfo;return Object(f.jsx)("ul",{className:"ImageGallery",children:e.map((function(t){var e=t.webformatURL,o=t.largeImageURL,r=t.tags,c=t.id;return Object(f.jsx)(b,{webformatURL:e,largeImageURL:o,tags:r,toggleModal:a,setModalImgInfo:n},c)}))})}a(43);function O(t){var e=t.onLoadMore;return Object(f.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})}a(44);var v=document.querySelector("#modal-root"),x=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleEscButtonPress=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscButtonPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscButtonPress)}},{key:"render",value:function(){return Object(r.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:"Modal",children:this.props.children})}),v)}}]),a}(n.PureComponent),y=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={text:"",page:1,images:[],showModal:!1,error:null,status:"idle",largeImageURL:null,tags:null},t.fetchImages=function(){var e=t.state,a=e.text,n=e.page,o="/?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(n,"&per_page=").concat(12,"&key=").concat("22952317-a5881606497ad665bd114491c");t.setState({status:"pending"}),fetch("https://pixabay.com/api"+o).then((function(t){return t.json()})).then((function(e){var a=e.hits;a.length<1&&g.c.error("Nothing found, specify your search"),t.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(a)),status:"resolved",page:t.page+1}})),t.handlePageScroll()})).catch((function(e){return t.setState({error:e,status:"rejected"})}))},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.setModalImgInfo=function(e){var a=e.largeImageURL,n=e.tags;t.setState({largeImageURL:a,tags:n}),t.toggleModal()},t.handlePageScroll=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},t.onSubmit=function(e){t.setState({text:e})},t.onLoadMore=function(){t.fetchImages()},t}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(t,e){var a=this;e.text!==this.state.text&&(this.setState({images:[],page:1}),setTimeout((function(){a.fetchImages()}),1500))}},{key:"render",value:function(){var t=this.state,e=t.images,a=t.showModal,n=t.largeImageURL,o=t.tags,r=t.status;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(j,{onSubmit:this.onSubmit}),"pending"===r&&Object(f.jsx)(d.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:150,width:150,timeout:2e3}),Object(f.jsx)(p,{images:e,setModalImgInfo:this.setModalImgInfo}),e.length>0&&Object(f.jsx)(O,{onLoadMore:this.onLoadMore}),a&&Object(f.jsx)(x,{onClose:this.toggleModal,children:Object(f.jsx)("img",{src:n,alt:o})})]}),Object(f.jsx)(g.a,{transition:g.b,autoClose:3e3})]})}}]),a}(n.Component);a(45);c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4e895045.chunk.js.map