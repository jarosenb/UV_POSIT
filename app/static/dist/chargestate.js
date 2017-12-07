webpackJsonp([2,6],{102:function(e,t){},104:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showModal:!1},n.close=n.close.bind(n),n.open=n.open.bind(n),n.saveCallback=n.saveCallback.bind(n),n}return r(t,e),s(t,[{key:"close",value:function(){this.setState({showModal:!1})}},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"saveCallback",value:function(e){this.setState({showModal:!e})}},{key:"render",value:function(){var e=this,t=[];return u.default.createElement("div",{style:{paddingBottom:5}},u.default.createElement(c.Button,{bsStyle:"default",onClick:this.open,block:!0},this.props.title),u.default.createElement(c.Modal,{show:this.state.showModal,onHide:this.close},u.default.createElement(c.Modal.Header,{closeButton:!0},u.default.createElement(c.Modal.Title,null,this.props.title),t),u.default.createElement(c.Modal.Body,null,this.props.body),u.default.createElement(c.Modal.Footer,null,u.default.createElement(c.Button,{onClick:this.close},"Close"),u.default.createElement(c.Button,{bsStyle:"primary",onClick:function(){return e.props.savefn(e.saveCallback)}},"Save"))))}}]),t}(u.default.Component);t.default=f},27:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.Navbar,null,u.default.createElement(c.Navbar.Header,null,u.default.createElement(c.Navbar.Brand,null,u.default.createElement("a",{href:""},"UV-POSIT")),u.default.createElement(c.Navbar.Toggle,null)),u.default.createElement(c.Navbar.Collapse,null,u.default.createElement(c.Nav,null,u.default.createElement(c.NavItem,{active:"intensity"==this.props.here,href:"/"},"Fragment Intensity"),u.default.createElement(c.NavItem,{active:"chargestate"==this.props.here,href:"/chargestate"},"Charge State Analysis"),u.default.createElement(c.NavItem,{active:"wildcard"==this.props.here,href:"/wildcard"},"Iterative Search"),u.default.createElement(c.NavItem,{active:"hem"==this.props.here,href:"/hem"},"Hydrogen Elimination Monitoring"),u.default.createElement(c.NavItem,{active:"readme"==this.props.here,href:"https://jarosenb.gitbooks.io/uv_posit/content/",target:"_blank"},"About/Readme")))))}}]),t}(u.default.Component);t.default=f},28:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(c.InputGroup,null,u.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),u.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},u.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),u.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(u.default.Component);t.default=f},284:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=(n(11),n(66)),f=a(c);n(131);var p=n(110),d=a(p);n(132);var h=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"componentDidMount",value:function(){this.hot=new f.default(this.hotDiv,{data:[["","","","",""],["","","","",""],["","","","",""],["","","","",""]],rowHeaders:!0,colHeaders:!0,stretchH:"all",preventOverflow:"horizontal"}),this.chart=d.default.chart(this.highchart,{chart:{type:"column"},title:{text:"Charge State Contributions"},credits:{enabled:!1},xAxis:{categories:["hey","hi","hello"]},yAxis:{title:{text:"Normalized Intensity"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{column:{stacking:"percent"}},series:[{name:"1+",data:[]}]})}},{key:"componentDidUpdate",value:function(){this.chart.destroy();var e="",t="";switch(this.props.state.activeKey){case 1:e="nterm_chart",t="nterm_hot";break;case 2:e="cterm_chart",t="cterm_hot"}this.chart=d.default.chart(this.highchart,{chart:{type:"column"},title:{text:"Charge State Visualization"},credits:{enabled:!1},xAxis:{categories:this.props.state.searchResult.sequence},yAxis:{title:{text:"Normalized Intensity"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{column:{stacking:"percent"}},series:this.props.state.searchResult[e]}),this.hot.loadData(this.props.state.searchResult[t])}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{style:{width:"100%"}},u.default.createElement("div",{id:"chart",ref:function(t){e.highchart=t}}),u.default.createElement("div",{id:"hot",ref:function(t){e.hotDiv=t}}))}}]),t}(u.default.Component);t.default=h},29:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel},this.props.title),u.default.createElement(c.Panel,{collapsible:!0,expanded:this.props.open},this.props.body,u.default.createElement("hr",null),u.default.createElement("div",{style:{textAlign:"right"}},u.default.createElement(c.Row,null,u.default.createElement(c.Col,{xs:8,md:8}),u.default.createElement(c.Col,{xs:2,md:2},u.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel,bsStyle:"default"},"Close")),u.default.createElement(c.Col,{xs:2,md:2},u.default.createElement(c.Button,{block:!0,bsStyle:"primary",onClick:this.props.vs},"Validate"))))))}}]),t}(u.default.Component);t.default=f},30:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e={paddingBottom:1};return u.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),u.default.createElement(c.Button,{href:"#",disabled:!0}),u.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(u.default.Component),p=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return r(t,e),s(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(u.default.Component);t.default=f},601:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=t(i),c=n(13),f=t(c),p=n(11);n(46),n(45);var d=n(37),h=t(d),m=n(83),g=(t(m),n(104)),y=(t(g),n(28)),b=t(y),v=n(30),E=t(v),_=n(29),C=t(_),w=n(27),O=t(w),k=n(284),S=t(k),P=function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={activeKey:1,searchResult:{search_successful:!1}},t.runSearch=t.runSearch.bind(t),t.runSearchCallback=t.runSearchCallback.bind(t),t.handleSelect=t.handleSelect.bind(t),t}return r(n,t),s(n,[{key:"runSearchCallback",value:function(e){(0,h.default)(this.state,{searchResult:{$set:e}});console.log(e),this.setState({searchResult:e})}},{key:"runSearch",value:function(t){var n=this;e("/chargesearch",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return n.runSearchCallback(e.result,t.modOptions)})}},{key:"handleSelect",value:function(e){var t=(0,h.default)(this.state,{activeKey:{$set:e}});this.setState(t)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(O.default,{here:"chargestate"}),u.default.createElement(p.Grid,null,u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,md:12},u.default.createElement(p.PanelGroup,null,u.default.createElement(p.Well,null,u.default.createElement(j,{runSearch:this.runSearch}))))),u.default.createElement(p.Well,null,u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,md:12},u.default.createElement(p.Nav,{bsStyle:"pills",justified:!0,activeKey:this.state.activeKey,onSelect:this.handleSelect},u.default.createElement(p.NavItem,{disabled:!this.state.searchResult.search_successful,eventKey:1},"N-terminal Ions"),u.default.createElement(p.NavItem,{disabled:!this.state.searchResult.search_successful,eventKey:2},"C-terminal Ions"))))),u.default.createElement(S.default,{state:this.state})))}}]),n}(u.default.Component),j=function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={sequence:"",sequenceValidated:!1,masslist:"",masslistValidated:!1,tolValue:"10",tolType:"PPM",tic:"1",ions:{a:!0,ap:!0,b:!1,c:!1,x:!0,xp:!0,y:!1,ym:!1,ymm:!1,z:!1,all_ax:!0,all_by:!1,all_cz:!1}},t.onIonToggle=t.onIonToggle.bind(t),t.axtoggle=t.axtoggle.bind(t),t.bytoggle=t.bytoggle.bind(t),t.cztoggle=t.cztoggle.bind(t),t.onInputChange=t.onInputChange.bind(t),t.onDropDownChange=t.onDropDownChange.bind(t),t.validateSeq=t.validateSeq.bind(t),t.validateSeqCallback=t.validateSeqCallback.bind(t),t.validateMasses=t.validateMasses.bind(t),t.validateMassesCallback=t.validateMassesCallback.bind(t),t.toggleSequencePanel=t.toggleSequencePanel.bind(t),t.toggleMasslistPanel=t.toggleMasslistPanel.bind(t),t}return r(n,t),s(n,[{key:"toggleSequencePanel",value:function(){this.setState((0,h.default)(this.state,{sequencePanelOpen:{$set:!this.state.sequencePanelOpen}}))}},{key:"toggleMasslistPanel",value:function(){this.setState((0,h.default)(this.state,{masslistPanelOpen:{$set:!this.state.masslistPanelOpen}}))}},{key:"validateSeqCallback",value:function(e){console.log(e.result),this.setState((0,h.default)(this.state,{sequenceValidated:{$set:e},sequencePanelOpen:{$set:!e.result}})),e&&this.state.masslistValidated&&(console.log("running search..."),this.props.runSearch(this.state))}},{key:"validateMassesCallback",value:function(e){console.log(e.result),this.setState((0,h.default)(this.state,{masslistValidated:{$set:e},masslistPanelOpen:{$set:!e.result}})),e&&this.state.sequenceValidated&&(console.log("running search..."),this.props.runSearch(this.state))}},{key:"validateSeq",value:function(){var t=this;e("/validateSequence",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state.sequence),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateSeqCallback(e)})}},{key:"validateMasses",value:function(){var t=this;e("/validateChargeData",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateMassesCallback(e)})}},{key:"onInputChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState((0,h.default)(this.state,a({},t,{$set:n})))}},{key:"onDropDownChange",value:function(e){var t=(0,h.default)(this.state,{tolType:{$set:e}});this.setState(t)}},{key:"onIonToggle",value:function(e){var t=!this.state.ions[e];this.setState((0,h.default)(this.state,{ions:a({},e,{$set:t})}))}},{key:"axtoggle",value:function(){var e=!this.state.ions.all_ax;this.setState((0,h.default)(this.state,{ions:{all_ax:{$set:e},a:{$set:e},ap:{$set:e},x:{$set:e},xp:{$set:e}}}))}},{key:"bytoggle",value:function(){var e=!this.state.ions.all_by;this.setState((0,h.default)(this.state,{ions:{all_by:{$set:e},b:{$set:e},y:{$set:e},ym:{$set:e},ymm:{$set:e}}}))}},{key:"cztoggle",value:function(){var e=!this.state.ions.all_cz;this.setState((0,h.default)(this.state,{ions:{all_cz:{$set:e},c:{$set:e},z:{$set:e}}}))}},{key:"modsOnChange",value:function(e){var t=e.map(function(e){return e.value}),n=(0,h.default)(this.state,{mods:{$set:t},modOptions:{$set:e}});this.setState(n)}},{key:"render",value:function(){var e=u.default.createElement(I,{state:this.state,onInputChange:this.onInputChange}),t=u.default.createElement(T,{state:this.state,onIonToggle:this.onIonToggle,axtoggle:this.axtoggle,bytoggle:this.bytoggle,cztoggle:this.cztoggle,onInputChange:this.onInputChange,onDropDownChange:this.onDropDownChange,modsOnChange:this.modsOnChange});return u.default.createElement("div",null,u.default.createElement("div",{style:{paddingTop:2}},u.default.createElement("div",{style:{paddingBottom:5}},u.default.createElement(C.default,{togglePanel:this.toggleSequencePanel,open:this.state.sequencePanelOpen,vs:this.validateSeq,title:"Edit Sequence",body:e})),u.default.createElement(C.default,{togglePanel:this.toggleMasslistPanel,open:this.state.masslistPanelOpen,vs:this.validateMasses,title:"Edit Mass List and Options",body:t})))}}]),n}(u.default.Component),I=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,md:12},u.default.createElement(p.FormControl,{name:"sequence",value:this.props.state.sequence,componentClass:"textarea",style:{height:200,resize:"none"},onChange:this.props.onInputChange})))}}]),t}(u.default.Component),T=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:6,md:6},u.default.createElement("b",null,"Mass and m/z Data from ProsightPC THRASH (tab-delimited):"),u.default.createElement(p.FormControl,{name:"masslist",value:this.props.state.masslist,componentClass:"textarea",style:{height:205,resize:"none"},onChange:this.props.onInputChange})),u.default.createElement(p.Col,{xs:6,md:6},u.default.createElement("div",{style:{paddingBottom:10}},u.default.createElement("b",null,"Ion series to search:"),u.default.createElement(E.default,{state:this.props.state.ions,onIonToggle:this.props.onIonToggle,axtoggle:this.props.axtoggle,bytoggle:this.props.bytoggle,cztoggle:this.props.cztoggle})),u.default.createElement("div",{style:{paddingBottom:10}},u.default.createElement("b",null,"Mass Error Tolerance:"),u.default.createElement(b.default,{state:this.props.state,onInputChange:this.props.onInputChange,onDropDownChange:this.props.onDropDownChange}))))}}]),t}(u.default.Component);f.default.render(u.default.createElement(P,null),document.getElementById("app"))}).call(t,n(56))},66:function(e,t){e.exports=Handsontable},83:function(e,t){e.exports=jQuery}},[601]);