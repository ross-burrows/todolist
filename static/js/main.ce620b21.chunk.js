(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),s=(n(13),n(3)),l=n(4),c=n(6),u=n(5),m=n(7),p=(n(14),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={list:[],inputText:"",errorText:"Please type something into the input box"},n.changeHandler=function(t){""===t.target.value?n.setState({inputText:t.target.value,errorText:"Please type something into the input box"}):n.setState({inputText:t.target.value,errorText:""})},n.onSubmit=function(){var t=n.state.list;t.push(n.state.inputText),n.setState({list:t,inputText:""})},n.removeHandler=function(t){var e=n.state.list;e.splice(t,1),n.setState({list:e})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=""===this.state.inputText;return o.a.createElement("div",{className:"Full"},o.a.createElement("p",null,this.state.errorText),o.a.createElement("p",null,"To Do List"),o.a.createElement("input",{className:"boxInput",type:"text",onChange:function(e){return t.changeHandler(e)},placeholder:"give me a task",value:this.state.inputText}),o.a.createElement("button",{className:"button",type:"submit",onClick:this.onSubmit,disabled:e},"add!"),o.a.createElement("div",{className:"list"},this.state.list.map((function(e,n){return o.a.createElement("div",{className:"box"},o.a.createElement("p",{key:n,onClick:function(){return t.removeHandler(n)}},e))}))))}}]),e}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ce620b21.chunk.js.map