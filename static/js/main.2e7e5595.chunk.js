(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(42),l=a(43),c=a(44),i=a(45),o=a(46),s=a(47),m=a(48),u=a(49),p=a(50),d=a(51),h=a(52),E=a(53),f=a(0),b=a(26),g=a(3),v=a(4),k=a(6),w=a(5),j=a(7),y=a(12),O=a(8),N=a(14),C=a(2),_=a(16),S=a.n(_),M=function(e){return f.createElement(f.Fragment,null,f.createElement("main",{id:"error",className:"wrapper"},f.createElement(O.b,{to:"",onClick:function(){return e.history.goBack()},className:"go-back"},f.createElement(C.a,{icon:"chevron-circle-left"})," Go back"),f.createElement("h1",null,"Sorry, this content is not available right now :("),f.createElement("p",null,"Error: ",e.error?e.error.message||e.error.statusText:"Wrong route")))},x=a(15),D=a(20),T=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).modal=f.createRef(),a.handleInput=function(e){var t=e;a.setState(Object(D.a)({},t.target.name,t.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,message:a.state.message,name:a.state.name,subject:a.state.subject};S.a.post("https://cirov.com.ve/wp/wp-json/contact/v1/send",JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).then(function(e){var t=Object(x.a)({},a.state.response);t.status=e.data.status,t.text=e.data.message,a.setState({response:t})}).catch(function(e){var t=Object(x.a)({},a.state.response);t.status=1,t.text=e.message,a.setState({response:t})})},a.state={email:"",message:"",name:"",response:{status:0,text:""},subject:""},a}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",function(t){t.target===e.modal.current&&e.props.toggle()})}},{key:"render",value:function(){return f.createElement("div",{className:"modal-layer",ref:this.modal},f.createElement("div",{className:"form-container",role:"dialog","aria-modal":"true","aria-label":"Send me an email"},f.createElement("div",{className:"modal-intro"},f.createElement("h1",null,"Get in touch"),f.createElement("p",null,"Send any inquiries to ",f.createElement("a",{href:"mailto:contact@cirov.com.ve"},"contact@cirov.com.ve")," or use the following form:")),f.createElement("form",{onSubmit:this.handleSubmit},0!==this.state.response.status&&f.createElement("p",{className:200===this.state.response.status?"form-success":"form-failure"},this.state.response.text),f.createElement("p",null,f.createElement("label",{htmlFor:"name"},"Name: "),f.createElement("input",{type:"text",name:"name",id:"name",onChange:this.handleInput,value:this.state.name,placeholder:"Your name...",required:!0})),f.createElement("p",null,f.createElement("label",{htmlFor:"email"},"Email: "),f.createElement("input",{type:"email",name:"email",id:"email",required:!0,onChange:this.handleInput,value:this.state.email,placeholder:"Your email..."})),f.createElement("p",null,f.createElement("label",{htmlFor:"subject"},"Subject: "),f.createElement("input",{type:"text",name:"subject",id:"subject",onChange:this.handleInput,value:this.state.subject,placeholder:"Subject"})),f.createElement("p",null,f.createElement("label",{htmlFor:"message"},"Message: "),f.createElement("textarea",{name:"message",id:"message",value:this.state.message,placeholder:"Your message...",onChange:this.handleInput})),f.createElement("button",{type:"submit"},"Send email"),f.createElement("button",{onClick:this.props.toggle},"Cancel"))))}}]),t}(f.Component),R=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).handleModal=function(){a.setState({isModalVisible:!a.state.isModalVisible})},a.state={isModalVisible:!1},a}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return f.createElement(f.Fragment,null,this.state.isModalVisible&&f.createElement(T,{toggle:this.handleModal}),f.createElement("footer",null,f.createElement("div",{id:"contact",className:"wrapper"},f.createElement("h2",null,"Contact me!"),f.createElement("div",{className:"social-icons"},f.createElement("a",{href:"https://twitter.com/cvillafraz",target:"_blank","item-prop":"url","aria-label":"twitter"},f.createElement(C.a,{icon:["fab","twitter"]})),f.createElement("a",{href:"https://www.linkedin.com/in/ciro-villafraz/",target:"_blank","item-prop":"url","aria-label":"linkedin"},f.createElement(C.a,{icon:["fab","linkedin"]})),f.createElement("a",{href:"https://github.com/cvillafraz",target:"_blank","item-prop":"url","aria-label":"github"},f.createElement(C.a,{icon:["fab","github"]})),f.createElement("a",{href:"https://es.stackoverflow.com/users/103373/c-villafraz?tab=profile",target:"_blank","item-prop":"url","aria-label":"stack overflow"},f.createElement(C.a,{icon:["fab","stack-overflow"]})),f.createElement("a",{onClick:this.handleModal},f.createElement(C.a,{icon:["far","envelope"]})))),f.createElement("p",null,"\xa9 Ciro Villafraz, 2018")))}}]),t}(f.Component),L=a(59),P=a.n(L),V=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).toggleMenu=function(){a.setState({isBurgerNavClicked:!a.state.isBurgerNavClicked})},a.state={isBurgerNavClicked:!1},a}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return f.createElement("header",{style:{backgroundColor:this.props.background}},f.createElement("div",{className:"blue-layer",style:{display:this.state.isBurgerNavClicked?"block":"none"}}),f.createElement("div",{className:"wrapper"},f.createElement(O.b,{to:"/",className:"logo"},f.createElement("img",{src:P.a,alt:"home page"})),f.createElement("div",null,f.createElement("span",{onClick:this.toggleMenu,"aria-label":"toggle menu"},f.createElement(C.a,{icon:this.state.isBurgerNavClicked?"times":"bars",className:"nav-icon"})),f.createElement("nav",{"aria-label":"Main Navigation",style:{display:this.state.isBurgerNavClicked?"block":"none"}},f.createElement("ul",{onClick:this.toggleMenu},f.createElement("li",null,f.createElement(O.c,{exact:!0,to:"/"},"Home")),f.createElement("li",null,f.createElement(O.c,{to:"/about_services"},"About & Services")),f.createElement("li",null,f.createElement(O.c,{to:"/portfolio"},"Portfolio")),f.createElement("li",null,f.createElement(O.c,{to:"/blog"},"Blog")))))))}}]),t}(f.Component),B=function(){return f.createElement("div",{className:"wait-screen"},f.createElement("span",null,"Wait..."))},F=a(19),I=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).regexp=/<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g,a.handleModal=function(){a.setState({isModalVisible:!a.state.isModalVisible})},a.state={isModalVisible:!1},a}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.getPages()}},{key:"render",value:function(){var e=this.props.pages&&this.props.pages.filter(function(e){return 1726===e.id})[0],t=this.props.pages&&this.props.pages.filter(function(e){return 1726===e.parent}).sort(function(e,t){return e.id-t.id});return f.createElement(f.Fragment,null,this.state.isModalVisible&&f.createElement(T,{toggle:this.handleModal}),f.createElement(V,{background:"#283149"}),this.props.error?f.createElement(M,{error:this.props.error}):e&&t?f.createElement("main",{id:"about/services-main"},f.createElement("section",{id:"about-section"},f.createElement("article",{className:"wrapper"},f.createElement("h1",null,e.title.rendered),f.createElement("p",null,e.content.rendered.replace(this.regexp,"")))),f.createElement("section",{id:"services-section",className:"wrapper"},f.createElement("h2",null,"What I have to offer"),f.createElement("div",null,t.map(function(e){return f.createElement("div",{className:"service",key:e.id},f.createElement("span",{className:"service-icon"},f.createElement(C.a,{icon:e.custom_fields.icon})),f.createElement("h3",null,e.title.rendered),F(e.content.rendered),Object.keys(e.custom_fields).map(function(t,a){return/^[A-Z]/.test(t)&&f.createElement(f.Fragment,{key:a},f.createElement("h4",null,t),f.createElement("p",null,e.custom_fields[t]))}))})),f.createElement("button",{onClick:this.handleModal},"Let's start a project!"))):f.createElement(B,null),f.createElement(R,null))}}]),t}(f.Component),z=Object(y.b)(function(e){return{error:e.errorMessage,pages:e.pages.items}},{getPages:function(){return function(e){S.a.get("https://cirov.com.ve/wp/wp-json/wp/v2/pages").then(function(t){return e({error:"",payload:t.data,type:"GET_PAGES"})}).catch(function(t){return e({type:"HANDLE_ERRORS",error:t})})}}})(I),U=function(){return function(e){S.a.get("https://cirov.com.ve/wp/wp-json/wp/v2/posts").then(function(t){return e({payload:t.data,type:"FETCH_POSTS"})}).catch(function(t){return e({type:"HANDLE_ERRORS",error:t})})}},A=a(19),q=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.error;return f.createElement(f.Fragment,null,f.createElement(V,{background:"#283149"}),a?f.createElement(M,{error:a}):t.length>=1?f.createElement("main",{id:"main-posts"},f.createElement("section",{className:"wrapper",id:"posts-section"},f.createElement("h1",null,"Blog"),t.map(function(e){return f.createElement("article",{className:"post",key:e.id},f.createElement("img",{src:e.featured_image||"https://placehold.it/300x200",alt:""}),f.createElement("div",null,f.createElement("h2",null,e.title.rendered),f.createElement("div",null,f.createElement(O.b,{className:"category-link",to:"blog/".concat(e.category_slug)},e.category_name),f.createElement("span",null," ","/"," ",new Date(e.date).toLocaleDateString().replace(/\//g,"-"))),A(e.excerpt.rendered),f.createElement(O.b,{to:"/post/".concat(e.slug),className:"post-link"},"Keep reading")))}))):f.createElement(B,null),f.createElement(R,null))}}]),t}(f.Component),G=Object(y.b)(function(e,t){return{error:e.errorMessage,posts:e.posts.items.filter(function(e){return t.match.params.category?e.category_slug===t.match.params.category:190!==e.categories[0]})}},{fetchPosts:U})(q),H=a(60),W=a.n(H),J=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).newTxt="",a.words=["Developer","Designer"],a.wordIndex=0,a.wait=3e3,a.isDeleting=!1,a.textTimeout=void 0,a.handleModal=function(){a.setState({isModalVisible:!a.state.isModalVisible})},a.type=function(){var e=a.wordIndex%a.words.length,t=a.words[e];a.isDeleting?a.newTxt=t.substring(0,a.newTxt.length-1):a.newTxt=t.substring(0,a.newTxt.length+1);var n=300;a.isDeleting&&(n/=2),a.isDeleting||a.newTxt!==t?a.isDeleting&&""===a.newTxt&&(a.isDeleting=!1,a.wordIndex++,n=500):(n=a.wait,a.isDeleting=!0),a.setState({txt:a.newTxt}),a.textTimeout=setTimeout(function(){return a.type()},n)},a.state={isModalVisible:!1,txt:""},a}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.type()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.textTimeout)}},{key:"render",value:function(){return f.createElement(f.Fragment,null,this.state.isModalVisible&&f.createElement(T,{toggle:this.handleModal}),f.createElement(V,{background:"rgba(0,0,0,0)"}),f.createElement("div",{id:"gradient-layer"},f.createElement("section",{className:"wrapper","item-scope":"true","item-type":"http://schema.org/Person"},f.createElement("img",{src:W.a,alt:"A photo of me","item-prop":"image"}),f.createElement("div",{id:"landing-text"},f.createElement("h1",{"item-prop":"name"},"Ciro Villafraz"),f.createElement("h2",{"item-prop":"jobTitle"},"Professional Web"," ",f.createElement("span",{className:"non-static-text"},this.state.txt))),f.createElement("div",{className:"social-icons"},f.createElement("a",{href:"https://twitter.com/cvillafraz",target:"_blank","item-prop":"url","aria-label":"twitter"},f.createElement(C.a,{icon:["fab","twitter"]})),f.createElement("a",{href:"https://www.linkedin.com/in/ciro-villafraz/",target:"_blank","item-prop":"url","aria-label":"linkedin"},f.createElement(C.a,{icon:["fab","linkedin"]})),f.createElement("a",{href:"https://github.com/cvillafraz",target:"_blank","item-prop":"url","aria-label":"github"},f.createElement(C.a,{icon:["fab","github"]})),f.createElement("a",{href:"https://es.stackoverflow.com/users/103373/c-villafraz?tab=profile",target:"_blank","item-prop":"url","aria-label":"stack overflow"},f.createElement(C.a,{icon:["fab","stack-overflow"]})),f.createElement("a",{onClick:this.handleModal},f.createElement(C.a,{icon:["far","envelope"]}))),f.createElement(O.b,{to:"/portfolio",className:"portfolio-link"},"Check my work!"))))}}]),t}(f.Component),Y=a(19),Q=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.error;return f.createElement(f.Fragment,null,f.createElement(V,{background:"#283149"}),a?f.createElement(M,{error:a}):t.length>=1?f.createElement("main",{id:"portfolio",className:"wrapper"},f.createElement("h1",null,"My latest work"),f.createElement("section",{id:"portfolio-items"},t.map(function(e){return f.createElement("figure",{key:e.id},f.createElement("img",{src:e.featured_img,alt:""}),f.createElement("figcaption",null,f.createElement("h2",null,e.title.rendered),Y(e.content.rendered)),f.createElement("a",{href:e.code_link,target:"_blank"},"View project"))})),f.createElement("a",{className:"codepen-link",href:"http://codepen.io/cvillafraz"},"See more!")):f.createElement(B,null),f.createElement(R,null))}}]),t}(f.Component),K=Object(y.b)(function(e){return{error:e.errorMessage,items:e.posts.items.filter(function(e){return 190===e.categories[0]})}},{fetchPosts:U})(Q),Z=a(61),$=a(64),X="cirovilla",ee=document.URL;function te(){if(void 0===window.DISQUS){var e=document.createElement("script");e.async=!0,e.src="https://"+X+".disqus.com/embed.js",document.getElementsByTagName("head")[0].appendChild(e)}else window.DISQUS.reset({reload:!0})}var ae=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||this.props.title!==e.title||this.props.path!==e.path}},{key:"componentDidMount",value:function(){te()}},{key:"componentDidUpdate",value:function(){te()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.path,r=Object($.a)(e,["id","title","path"]);return Object({NODE_ENV:"production",PUBLIC_URL:"/Cirovcom"}).BROWSER&&(window.disqus_shortname=X,window.disqus_identifier=t,window.disqus_title=a,window.disqus_url=ee+n),f.createElement("div",Object.assign({},r,{id:"disqus_thread"}))}}]),t}(f.Component),ne=a(19),re=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.posts.length<1&&this.props.fetchPosts()}},{key:"render",value:function(){var e=this,t=1===this.props.posts.length&&this.props.posts.reduce(function(e,t){return e});return f.createElement(f.Fragment,null,t&&f.createElement(Z.Helmet,null,f.createElement("title",null,t.title.rendered),f.createElement("meta",{name:"description"},t.meta_description)),f.createElement(V,{background:"#283149"}),this.props.error?f.createElement(M,{error:this.props.error}):f.createElement("div",{className:"wrapper"},f.createElement(O.b,{to:"",onClick:function(){return e.props.history.goBack()},className:"go-back"},f.createElement(C.a,{icon:"chevron-circle-left"})," Go back"),f.createElement("main",{id:"main-post"},t&&f.createElement("article",{className:"single-post"},f.createElement("img",{src:t.featured_image||"https://placehold.it/300x200",alt:""}),f.createElement("h1",null,t.title.rendered),f.createElement("div",null,f.createElement(O.b,{className:"category-link",to:"/blog/".concat(t.category_slug)},t.category_name),f.createElement("span",null," ","/"," ",new Date(t.date).toLocaleDateString().replace(/\//g,"-"))),ne(t.content.rendered),f.createElement("hr",null)),f.createElement("div",{className:"share"},f.createElement("h2",null,"Share this post!"),f.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(document.URL),className:"share-icon",target:"_blank"},f.createElement(C.a,{icon:["fab","facebook"]})),f.createElement("a",{href:"https://twitter.com/home?status=".concat(document.URL),className:"share-icon",target:"_blank"},f.createElement(C.a,{icon:["fab","twitter"]})),f.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url="+document.URL+"&title="+(t?t.title.rendered:"")+"&summary=&source=",className:"share-icon",target:"_blank"},f.createElement(C.a,{icon:["fab","linkedin"]}))),t?f.createElement(ae,{id:t.id,title:t.title,path:"/blog/"+this.props.match.params.post_slug}):f.createElement(B,null))),f.createElement(R,null))}}]),t}(f.Component),le=Object(y.b)(function(e,t){return{error:e.errorMessage,posts:e.posts.items.filter(function(e){return e.slug===t.match.params.post_slug})}},{fetchPosts:U})(re),ce=a(13),ie=a(62),oe=a(63),se={items:[]},me={items:[]},ue=Object(ce.combineReducers)({errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.error,n=t.type;return a&&"HANDLE_ERRORS"===n?a:"HANDLE_ERRORS"!==n?null:e},pages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PAGES":return Object(x.a)({},e,{items:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return Object(x.a)({},e,{items:t.payload});default:return e}}}),pe=[oe.a],de=Object(ce.createStore)(ue,Object(ie.composeWithDevTools)(ce.applyMiddleware.apply(void 0,pe))),he=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return f.createElement(y.a,{store:de},f.createElement(O.a,null,f.createElement(N.c,null,f.createElement(N.a,{path:"/",exact:!0,component:J}),f.createElement(N.a,{path:"/about_services",component:z}),f.createElement(N.a,{path:"/portfolio",component:K}),f.createElement(N.a,{path:"/blog/:category?",component:G}),f.createElement(N.a,{exact:!0,path:"/post/:post_slug",component:le}),f.createElement(N.a,{component:M}))))}}]),t}(f.Component);a(121);n.b.add(r.faFacebook,l.faGithub,c.faLinkedin,i.faStackOverflow,o.faTwitter,E.faTimes,m.faBars,p.faCode,d.faEdit,h.faServer,u.faChevronCircleLeft,s.faEnvelope);var Ee=document.getElementById("root");Ee.hasChildNodes()?Object(b.hydrate)(f.createElement(he,null),Ee):Object(b.render)(f.createElement(he,null),Ee)},59:function(e,t,a){e.exports=a.p+"static/media/logo.afe9cc92.png"},60:function(e,t,a){e.exports=a.p+"static/media/io.6f91bb26.png"},65:function(e,t,a){e.exports=a(122)}},[[65,1,2]]]);
//# sourceMappingURL=main.2e7e5595.chunk.js.map