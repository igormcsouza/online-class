(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/learn-english.de2c60f2.png"},37:function(e,a,t){e.exports=t(68)},42:function(e,a,t){},43:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(30),r=t.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(34),c=t(6),i=(t(42),t(43),function(){return o.a.createElement("div",{id:"bg-header"},o.a.createElement("header",{id:"main-header"},o.a.createElement("p",{id:"text-header"},"Aulas de Ingl\xeas sem Sair de Casa?")))}),m=t(9),u=t(10),d=t(12),p=t(11),h=t(13),v=t(15),f=t.n(v),b=t(31),E=t(32),g=t.n(E),N=(t(28),function(e){var a=e.labelName,t=e.type,n=e.name,s=e.placeholder,r=e.value,l=e.onChange;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-25"},o.a.createElement("label",null," ",a," ")),o.a.createElement("div",{className:"col-75"},o.a.createElement("input",{type:t,name:n,placeholder:s,value:r,onChange:l})))}),w=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={name:"",email:"",observations:"",sended:!1},t.handleChangeName=function(e){t.setState({name:e.target.value})},t.handleChangeEmail=function(e){t.setState({email:e.target.value})},t.handleChangeObservation=function(e){t.setState({observations:e.target.value})},t.handleSubmit=function(){var e=Object(b.a)(f.a.mark(function e(a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,g.a.post("https://online-class-api.herokuapp.com/api/landing-page-form",{name:t.state.name,email:t.state.email,observations:t.state.observations}).then(function(e){console.log("Sucessfully submitted!"),t.setState({sended:!0})}).catch(function(){return console.log("Something went wrong and the post was blocked")});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"title"}," Inscreva-se Abaixo! "),o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement(N,{labelName:"Seu Nome",type:"text",name:"nome",placeholder:"Jo\xe3o Arruda",value:this.state.name,onChange:this.handleChangeName}),o.a.createElement(N,{labelName:"Seu Email",type:"text",name:"email",placeholder:"joaoarruda@domain.com.br",value:this.state.email,onChange:this.handleChangeEmail}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-25"},o.a.createElement("label",null," Observa\xe7\xf5es ")),o.a.createElement("div",{className:"col-75"},o.a.createElement("textarea",{name:"observacoes",placeholder:"Nos deixe seu feedback...",value:this.state.observations,onChange:this.handleChangeObservation}))),o.a.createElement("br",null),this.state.sended?o.a.createElement("p",null," Obrigado! "):o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"submit",value:"Enviar"}))))}}]),a}(o.a.Component),y=(t(62),t(33)),x=t.n(y),S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={showForm:!1},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("main",{className:"main-body"},o.a.createElement("p",{className:"title"}," Qual a nossa proposta? "),o.a.createElement("p",{className:"text"},"Ap\xf3s alguns estudos, percebemos uma grande necessidade na popula\xe7\xe3o brasileira, tendo em vista essa necessidade, propomos uma solu\xe7\xe3o que vai dar muito certo para voc\xea."),o.a.createElement("p",{className:"quote"}," What is your biggest dream? "),o.a.createElement("p",{className:"text"},"Foi dif\xedcil ler essa frase? Ent\xe3o, se voc\xea teve dificuldade n\xe3o fique triste, apenas 5% da popula\xe7\xe3o brasileira \xe9 capaz de ler essa frase e responde-la apropriadamente, temos mais de 200 milh\xf5es de pessoas que n\xe3o falam a lingua dos neg\xf3cios, isso \xe9 um dado que nos assuta, na verdade estamos trabalhando para sanar essa dificuldade."),o.a.createElement("p",{className:"text"},"Queremos lan\xe7ar uma aplica\xe7\xe3o online onde voc\xea pode conversar com professores de ingl\xeas muito bem qualificados e treinados, nestas aulas o nosso foco \xe9 conversa\xe7\xe3o voc\xea vai poder tirar suas d\xfavidas e ainda ter uma boa conversa com quem entender do assunto."),o.a.createElement("img",{className:"image",src:x.a,alt:"Learn English"}),o.a.createElement("p",{className:"comments"},"N\xe3o estude sozinho, estude conosco!"),o.a.createElement("p",{className:"text"},"Se voc\xea quiser apoiar o projeto, pode fazer clicando abaixo."),this.state.showForm?o.a.createElement(w,null):null,o.a.createElement("button",{className:"button",onClick:function(){e.state.showForm?e.setState({showForm:!1}):e.setState({showForm:!0})}},o.a.createElement("span",null," ",this.state.showForm?"Fechar":"Apoiar"," ")))}}]),a}(o.a.Component),C=(t(63),function(){return o.a.createElement("footer",{id:"main-footer"},"Igor Souza - Professor de Ingl\xeas Particular")}),O=function(){return o.a.createElement("div",{className:"LandingPage"},o.a.createElement(i,null),o.a.createElement(S,null),o.a.createElement(C,null))};r.a.render(o.a.createElement(l.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:O}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.aa5c5e5c.chunk.js.map