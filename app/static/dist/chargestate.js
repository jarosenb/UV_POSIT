webpackJsonp([2,3],{572:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),c=o(i),p=n(21),f=o(p),d=n(28);n(113),n(115),n(114);var h=n(112),g=o(h),m=n(67),y=o(m),b=n(87),v=o(b),E=n(88),_=o(E),C=n(89),w=o(C),O=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={result:[]},n.runSearch=n.runSearch.bind(n),n.runSearchCallback=n.runSearchCallback.bind(n),n}return s(t,e),u(t,[{key:"runSearchCallback",value:function(e){(0,g.default)(this.state,{searchResult:{$set:e}});console.log(e)}},{key:"runSearch",value:function(e){y.default.ajax({type:"POST",context:this,contentType:"application/json",data:JSON.stringify(e),dataType:"json",url:"/chargesearch",success:function(e){this.runSearchCallback(e.result)},error:function(){callback(!1)}})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(T,{runSearch:this.runSearch}))}}]),t}(c.default.Component),T=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sequence:"",sequenceValidated:!1,masslist:"",masslistValidated:!1,tolValue:"10",tolType:"PPM",tic:"1",ions:{a:!0,ap:!0,b:!1,c:!1,x:!0,xp:!0,y:!1,ym:!1,ymm:!1,z:!1,all_ax:!0,all_by:!1,all_cz:!1}},n.onIonToggle=n.onIonToggle.bind(n),n.axtoggle=n.axtoggle.bind(n),n.bytoggle=n.bytoggle.bind(n),n.cztoggle=n.cztoggle.bind(n),n.onInputChange=n.onInputChange.bind(n),n.onDropDownChange=n.onDropDownChange.bind(n),n.modsOnChange=n.modsOnChange.bind(n),n.validateSeq=n.validateSeq.bind(n),n.validateMasses=n.validateMasses.bind(n),n}return s(t,e),u(t,[{key:"validateSeq",value:function(e){y.default.ajax({type:"POST",context:this,contentType:"application/json",data:JSON.stringify(this.state.sequence),dataType:"json",url:"/validateSequence",success:function(t){e(t.result),this.setState((0,g.default)(this.state,{sequenceValidated:{$set:t.result}})),t.result&&this.state.masslistValidated&&this.props.runSearch(this.state)},error:function(){e(!1)}})}},{key:"validateMasses",value:function(e){y.default.ajax({type:"POST",context:this,contentType:"application/json",data:JSON.stringify(this.state),dataType:"json",url:"/validateChargeData",success:function(t){e(t.result),this.setState((0,g.default)(this.state,{masslistValidated:{$set:t.result}})),t.result&&this.state.sequenceValidated&&this.props.runSearch(this.state)},error:function(){e(!1)}})}},{key:"onInputChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState((0,g.default)(this.state,a({},t,{$set:n})))}},{key:"onDropDownChange",value:function(e){var t=(0,g.default)(this.state,{tolType:{$set:e}});this.setState(t)}},{key:"onIonToggle",value:function(e){var t=!this.state.ions[e];this.setState((0,g.default)(this.state,{ions:a({},e,{$set:t})}))}},{key:"axtoggle",value:function(){var e=!this.state.ions.all_ax;this.setState((0,g.default)(this.state,{ions:{all_ax:{$set:e},a:{$set:e},ap:{$set:e},x:{$set:e},xp:{$set:e}}}))}},{key:"bytoggle",value:function(){var e=!this.state.ions.all_by;this.setState((0,g.default)(this.state,{ions:{all_by:{$set:e},b:{$set:e},y:{$set:e},ym:{$set:e},ymm:{$set:e}}}))}},{key:"cztoggle",value:function(){var e=!this.state.ions.all_cz;this.setState((0,g.default)(this.state,{ions:{all_cz:{$set:e},c:{$set:e},z:{$set:e}}}))}},{key:"modsOnChange",value:function(e){var t=e.map(function(e){return e.value}),n=(0,g.default)(this.state,{mods:{$set:t},modOptions:{$set:e}});this.setState(n)}},{key:"render",value:function(){var e=c.default.createElement(I,{state:this.state,onInputChange:this.onInputChange}),t=c.default.createElement(S,{state:this.state,onIonToggle:this.onIonToggle,axtoggle:this.axtoggle,bytoggle:this.bytoggle,cztoggle:this.cztoggle,onInputChange:this.onInputChange,onDropDownChange:this.onDropDownChange,modsOnChange:this.modsOnChange});return c.default.createElement("div",null,c.default.createElement(v.default,{body:e,title:"sequence",savefn:this.validateSeq,state:this.state}),c.default.createElement(v.default,{body:t,title:"Masses",savefn:this.validateMasses,state:this.state}))}}]),t}(c.default.Component),I=function(e){function t(e){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(d.Row,null,c.default.createElement(d.Col,{xs:12,md:12},c.default.createElement(d.FormControl,{name:"sequence",value:this.props.state.sequence,componentClass:"textarea",style:{height:200,resize:"none"},onChange:this.props.onInputChange})))}}]),t}(c.default.Component),S=function(e){function t(e){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(d.Row,null,c.default.createElement(d.Col,{xs:6,md:6},c.default.createElement("b",null,"Mass/Intensity list (tab-delimited):"),c.default.createElement(d.FormControl,{name:"masslist",value:this.props.state.masslist,componentClass:"textarea",style:{height:335,resize:"none"},onChange:this.props.onInputChange})),c.default.createElement(d.Col,{xs:6,md:6},c.default.createElement("div",{style:{paddingBottom:10}},c.default.createElement("b",null,"Ion series to search:"),c.default.createElement(w.default,{state:this.props.state.ions,onIonToggle:this.props.onIonToggle,axtoggle:this.props.axtoggle,bytoggle:this.props.bytoggle,cztoggle:this.props.cztoggle})),c.default.createElement("div",{style:{paddingBottom:10}},c.default.createElement("b",null,"Mass Error Tolerance:"),c.default.createElement(_.default,{state:this.props.state,onInputChange:this.props.onInputChange,onDropDownChange:this.props.onDropDownChange}))))}}]),t}(c.default.Component);f.default.render(c.default.createElement(O,null),document.getElementById("app"))},67:function(e,t){e.exports=jQuery},87:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),i=o(u),c=n(28),p=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showModal:!1},n.close=n.close.bind(n),n.open=n.open.bind(n),n.saveCallback=n.saveCallback.bind(n),n}return r(t,e),s(t,[{key:"close",value:function(){this.setState({showModal:!1})}},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"saveCallback",value:function(e){this.setState({showModal:!e})}},{key:"render",value:function(){var e=this,t=[];return i.default.createElement("div",{style:{paddingBottom:5}},i.default.createElement(c.Button,{bsStyle:"default",onClick:this.open,block:!0},this.props.title),i.default.createElement(c.Modal,{show:this.state.showModal,onHide:this.close},i.default.createElement(c.Modal.Header,{closeButton:!0},i.default.createElement(c.Modal.Title,null,this.props.title),t),i.default.createElement(c.Modal.Body,null,this.props.body),i.default.createElement(c.Modal.Footer,null,i.default.createElement(c.Button,{onClick:this.close},"Close"),i.default.createElement(c.Button,{bsStyle:"primary",onClick:function(){return e.props.savefn(e.saveCallback)}},"Save"))))}}]),t}(i.default.Component);t.default=p},88:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),i=o(u),c=n(28),p=function(e){function t(e){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement(c.InputGroup,null,i.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),i.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},i.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),i.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(i.default.Component);t.default=p},89:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),i=o(u),c=n(28),p=function(e){function t(e){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e={paddingBottom:1};return i.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),i.default.createElement(c.Button,{href:"#",disabled:!0}),i.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(i.default.Component),f=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return r(t,e),s(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(i.default.Component);t.default=p}},[572]);