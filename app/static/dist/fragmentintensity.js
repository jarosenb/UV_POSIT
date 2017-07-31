webpackJsonp([1,6],{102:function(e,t){},104:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showModal:!1},n.close=n.close.bind(n),n.open=n.open.bind(n),n.saveCallback=n.saveCallback.bind(n),n}return r(t,e),s(t,[{key:"close",value:function(){this.setState({showModal:!1})}},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"saveCallback",value:function(e){this.setState({showModal:!e})}},{key:"render",value:function(){var e=this,t=[];return u.default.createElement("div",{style:{paddingBottom:5}},u.default.createElement(c.Button,{bsStyle:"default",onClick:this.open,block:!0},this.props.title),u.default.createElement(c.Modal,{show:this.state.showModal,onHide:this.close},u.default.createElement(c.Modal.Header,{closeButton:!0},u.default.createElement(c.Modal.Title,null,this.props.title),t),u.default.createElement(c.Modal.Body,null,this.props.body),u.default.createElement(c.Modal.Footer,null,u.default.createElement(c.Button,{onClick:this.close},"Close"),u.default.createElement(c.Button,{bsStyle:"primary",onClick:function(){return e.props.savefn(e.saveCallback)}},"Save"))))}}]),t}(u.default.Component);t.default=f},27:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.Navbar,null,u.default.createElement(c.Navbar.Header,null,u.default.createElement(c.Navbar.Brand,null,u.default.createElement("a",{href:""},"UV-POSIT")),u.default.createElement(c.Navbar.Toggle,null)),u.default.createElement(c.Navbar.Collapse,null,u.default.createElement(c.Nav,null,u.default.createElement(c.NavItem,{active:"intensity"==this.props.here,href:"/"},"Fragment Intensity"),u.default.createElement(c.NavItem,{active:"chargestate"==this.props.here,href:"/chargestate"},"Charge State Analysis"),u.default.createElement(c.NavItem,{active:"wildcard"==this.props.here,href:"/wildcard"},"Iterative Search"),u.default.createElement(c.NavItem,{active:"hem"==this.props.here,href:"/hem"},"Hydrogen Elimination Monitoring"),u.default.createElement(c.NavItem,{active:"readme"==this.props.here,href:"https://jarosenb.gitbooks.io/uv_posit/content/",target:"_blank"},"About/Readme")))))}}]),t}(u.default.Component);t.default=f},28:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(c.InputGroup,null,u.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),u.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},u.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),u.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(u.default.Component);t.default=f},285:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=(n(11),n(105)),f=a(c),p=n(66),d=a(p);n(131);var h=n(110),m=a(h);n(132);var g=n(83),b=(a(g),n(367)),y=b.create();y.import(n(426)),y.import(n(403)),y.import(n(384));var v=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.dataCallback=n.dataCallback.bind(n),n.updateChart=n.updateChart.bind(n),n}return r(t,e),s(t,[{key:"componentDidMount",value:function(){this.hot=new d.default(this.hotDiv,{data:[["","","","",""],["","","","",""],["","","","",""],["","","","",""]],rowHeaders:!0,colHeaders:!0,stretchH:"all",preventOverflow:"horizontal"}),this.chart=m.default.chart(this.highchart,{title:{text:"Fragment Abundance Map"},credits:{enabled:!1},yAxis:{title:{text:"Normalized Abundance"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},series:[{name:"All ions",color:"#1f77b4",data:[]},{name:"N-terminal",data:[],color:"#ff7f0e",visible:!1},{name:"C-terminal",data:[],color:"#2ca02c",visible:!1}]})}},{key:"dataCallback",value:function(e){this.hot.loadData(e.HOTdata),this.chart.update(e.HighchartsData)}},{key:"componentDidUpdate",value:function(){var e=this;console.log(this.props.state.selectedMods);var t=y.matrix(this.props.state.searchResult.apo),n=y.zeros(y.size(t)),a=[];switch(this.props.state.activeKey){case 1:a=this.props.state.selectedMods.map(function(t){return y.matrix(e.props.state.searchResult[t])}),a.forEach(function(e){return n=y.add(n,e)}),n=y.add(n,t);break;case 2:n=t;break;case 3:case 1:a=this.props.state.selectedMods.map(function(t){return y.matrix(e.props.state.searchResult[t])}),a.forEach(function(e){return n=y.add(n,e)})}var o=n.valueOf();this.chart.update({xAxis:{categories:this.props.state.searchResult.sequence,title:{text:"Residue"}},series:[{name:"All ions",data:o[0]},{name:"N-terminal",data:o[1]},{name:"C-terminal",data:o[2]}]});var l=n.valueOf();l=[this.props.state.searchResult.sequence].concat([f.default.range(1,this.props.state.searchResult.sequence.length+1)]).concat(l),l=f.default.zip.apply(f.default,l),l=[this.props.state.searchResult.titles].concat(l),this.hot.loadData(l)}},{key:"updateChart",value:function(e){this.chart.update(e)}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{style:{width:"100%"}},u.default.createElement("div",{id:"chart",ref:function(t){e.highchart=t}}),u.default.createElement("div",{id:"hot",ref:function(t){e.hotDiv=t}}))}}]),t}(u.default.Component);t.default=v},286:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(36),f=a(c),p=(n(11),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(f.default.Creatable,{multi:!0,options:this.props.state.modOptions,onChange:this.props.modsOnChange,value:this.props.state.mods,placeholder:"input mass and press 'enter'"})}}]),t}(u.default.Component));t.default=p},29:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel},this.props.title),u.default.createElement(c.Panel,{collapsible:!0,expanded:this.props.open},this.props.body,u.default.createElement("hr",null),u.default.createElement("div",{style:{textAlign:"right"}},u.default.createElement(c.Row,null,u.default.createElement(c.Col,{xs:8,md:8}),u.default.createElement(c.Col,{xs:2,md:2},u.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel,bsStyle:"default"},"Close")),u.default.createElement(c.Col,{xs:2,md:2},u.default.createElement(c.Button,{block:!0,bsStyle:"primary",onClick:this.props.vs},"Save"))))))}}]),t}(u.default.Component);t.default=f},30:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),c=n(11),f=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e={paddingBottom:1};return u.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),u.default.createElement(c.Row,{className:"show-grid"},u.default.createElement(c.ButtonGroup,{justified:!0,style:e},u.default.createElement(p,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),u.default.createElement(p,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),u.default.createElement(c.Button,{href:"#",disabled:!0}),u.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(u.default.Component),p=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return r(t,e),s(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return u.default.createElement(c.ButtonGroup,null,u.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(u.default.Component);t.default=f},602:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=t(i),c=n(13),f=t(c);n(57);var p=n(11),d=n(36),h=t(d);n(46),n(45);var m=n(37),g=t(m),b=n(83),y=(t(b),n(104)),v=(t(y),n(286)),E=t(v),_=n(28),C=t(_),O=n(30),w=t(O),k=n(285),S=t(k),P=n(29),j=t(P),I=n(27),T=t(I),M=function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={activeKey:1,mydata:[["","","","",""],["","","","",""],["","","","",""],["","","","",""]],options:[],selectedMods:[],searchResult:{search_successful:!1},disableSelection:!1},t.handleSelect=t.handleSelect.bind(t),t.onModSelect=t.onModSelect.bind(t),t.runSearch=t.runSearch.bind(t),t.runSearchCallback=t.runSearchCallback.bind(t),t}return r(n,t),s(n,[{key:"runSearchCallback",value:function(e,t,n){console.log(t);var a=(0,g.default)(this.state,{searchResult:{$set:e},options:{$set:t},selectedMods:{$set:n?t.map(function(e){return e.value}):[]},disableSelection:{$set:n}});this.setState(a)}},{key:"runSearch",value:function(t){var n=this;e("/runSearch",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return n.runSearchCallback(e.result,t.modOptions,t.removeDuplicates)})}},{key:"handleSelect",value:function(e){var t=(0,g.default)(this.state,{activeKey:{$set:e}});this.setState(t)}},{key:"onModSelect",value:function(e){var t=e.map(function(e){return e.value}),n=(0,g.default)(this.state,{selectedMods:{$set:t}});this.setState(n)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(T.default,{here:"intensity"}),u.default.createElement(p.Grid,null,u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,md:12},u.default.createElement(p.PanelGroup,null,u.default.createElement(p.Well,null,u.default.createElement(x,{runSearch:this.runSearch}))))),u.default.createElement(p.Well,null,u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:9,md:9},u.default.createElement(p.Nav,{bsStyle:"pills",justified:!0,activeKey:this.state.activeKey,onSelect:this.handleSelect},u.default.createElement(p.NavItem,{disabled:!this.state.searchResult.search_successful,eventKey:1},"All Ions"),u.default.createElement(p.NavItem,{disabled:!this.state.searchResult.search_successful,eventKey:2},u.default.createElement("i",null,"apo")," Ions"),u.default.createElement(p.NavItem,{disabled:!this.state.searchResult.search_successful,eventKey:3},u.default.createElement("i",null,"holo")," Ions"))),u.default.createElement(p.Col,{xs:3,md:3},u.default.createElement(h.default,{multi:!0,placeholder:"Select modifications to include",value:this.state.selectedMods,options:this.state.options,disabled:this.state.disableSelection,onChange:this.onModSelect})))),u.default.createElement("div",null,u.default.createElement(S.default,{state:this.state}))))}}]),n}(u.default.Component),x=function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={sequence:"",sequenceValidated:!1,sequencePanelOpen:!1,masslist:"",masslistValidated:!1,masslistPanelOpen:!1,tolValue:"10",tolType:"PPM",tic:"1",removeDuplicates:!1,ions:{a:!0,ap:!0,b:!0,c:!0,x:!0,xp:!0,y:!0,ym:!0,ymm:!0,z:!0,all_ax:!0,all_by:!0,all_cz:!0},mods:[],modOptions:[]},t.onIonToggle=t.onIonToggle.bind(t),t.axtoggle=t.axtoggle.bind(t),t.bytoggle=t.bytoggle.bind(t),t.cztoggle=t.cztoggle.bind(t),t.onInputChange=t.onInputChange.bind(t),t.onDropDownChange=t.onDropDownChange.bind(t),t.modsOnChange=t.modsOnChange.bind(t),t.validateSeq=t.validateSeq.bind(t),t.validateSeqCallback=t.validateSeqCallback.bind(t),t.validateMasses=t.validateMasses.bind(t),t.validateMassesCallback=t.validateMassesCallback.bind(t),t.toggleSequencePanel=t.toggleSequencePanel.bind(t),t.toggleMasslistPanel=t.toggleMasslistPanel.bind(t),t}return r(n,t),s(n,[{key:"toggleSequencePanel",value:function(){this.setState((0,g.default)(this.state,{sequencePanelOpen:{$set:!this.state.sequencePanelOpen}}))}},{key:"toggleMasslistPanel",value:function(){this.setState((0,g.default)(this.state,{masslistPanelOpen:{$set:!this.state.masslistPanelOpen}}))}},{key:"validateSeqCallback",value:function(e){console.log(e.result),this.setState((0,g.default)(this.state,{sequenceValidated:{$set:e},sequencePanelOpen:{$set:!e.result}})),e&&this.state.masslistValidated&&(console.log("running search..."),this.props.runSearch(this.state))}},{key:"validateMassesCallback",value:function(e){console.log(e.result),this.setState((0,g.default)(this.state,{masslistValidated:{$set:e},masslistPanelOpen:{$set:!e.result}})),e&&this.state.sequenceValidated&&(console.log("running search..."),this.props.runSearch(this.state))}},{key:"validateSeq",value:function(){var t=this;e("/validateSequence",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state.sequence),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateSeqCallback(e)})}},{key:"validateMasses",value:function(){var t=this;e("/validateData",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateMassesCallback(e)})}},{key:"onInputChange",value:function(e){var t=e.target.name,n="checkbox"==e.target.type?e.target.checked:e.target.value;this.setState((0,g.default)(this.state,a({},t,{$set:n})))}},{key:"onDropDownChange",value:function(e){var t=(0,g.default)(this.state,{tolType:{$set:e}});this.setState(t)}},{key:"onIonToggle",value:function(e){var t=!this.state.ions[e];this.setState((0,g.default)(this.state,{ions:a({},e,{$set:t})}))}},{key:"axtoggle",value:function(){var e=!this.state.ions.all_ax;this.setState((0,g.default)(this.state,{ions:{all_ax:{$set:e},a:{$set:e},ap:{$set:e},x:{$set:e},xp:{$set:e}}}))}},{key:"bytoggle",value:function(){var e=!this.state.ions.all_by;this.setState((0,g.default)(this.state,{ions:{all_by:{$set:e},b:{$set:e},y:{$set:e},ym:{$set:e},ymm:{$set:e}}}))}},{key:"cztoggle",value:function(){var e=!this.state.ions.all_cz;this.setState((0,g.default)(this.state,{ions:{all_cz:{$set:e},c:{$set:e},z:{$set:e}}}))}},{key:"modsOnChange",value:function(e){var t=e.map(function(e){return e.value}),n=(0,g.default)(this.state,{mods:{$set:t},modOptions:{$set:e}});this.setState(n)}},{key:"render",value:function(){var e=u.default.createElement(D,{state:this.state,onInputChange:this.onInputChange}),t=u.default.createElement(R,{state:this.state,onIonToggle:this.onIonToggle,axtoggle:this.axtoggle,bytoggle:this.bytoggle,cztoggle:this.cztoggle,onInputChange:this.onInputChange,onDropDownChange:this.onDropDownChange,modsOnChange:this.modsOnChange});return u.default.createElement("div",{style:{paddingTop:2}},u.default.createElement("div",{style:{paddingBottom:5}},u.default.createElement(j.default,{togglePanel:this.toggleSequencePanel,open:this.state.sequencePanelOpen,vs:this.validateSeq,title:"Edit Sequence",body:e})),u.default.createElement("div",null,u.default.createElement(j.default,{togglePanel:this.toggleMasslistPanel,open:this.state.masslistPanelOpen,vs:this.validateMasses,title:"Edit Mass List and Options",body:t})))}}]),n}(u.default.Component),D=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,md:12},"Enter amino acid sequence with parenthetical modifications, e.g. PEP(44.01)TIDE",u.default.createElement(p.FormControl,{name:"sequence",value:this.props.state.sequence,componentClass:"textarea",style:{height:200,resize:"none"},onChange:this.props.onInputChange})))}}]),t}(u.default.Component),R=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:6,md:6},u.default.createElement("b",null,"Mass/Intensity list (tab-delimited):"),u.default.createElement(p.FormControl,{name:"masslist",value:this.props.state.masslist,componentClass:"textarea",style:{height:335,resize:"none"},onChange:this.props.onInputChange})),u.default.createElement(p.Col,{xs:6,md:6},u.default.createElement("div",{style:{paddingBottom:10}},u.default.createElement("b",null,"Ion series to search:"),u.default.createElement(w.default,{state:this.props.state.ions,onIonToggle:this.props.onIonToggle,axtoggle:this.props.axtoggle,bytoggle:this.props.bytoggle,cztoggle:this.props.cztoggle})),u.default.createElement("div",{style:{paddingBottom:10}},u.default.createElement("b",null,"TIC Intensity:"),u.default.createElement(p.FormControl,{name:"tic",onChange:this.props.onInputChange,value:this.props.state.tic})),u.default.createElement("div",{style:{paddingBottom:10}},u.default.createElement("b",null,"Mass Error Tolerance:"),u.default.createElement(C.default,{state:this.props.state,onInputChange:this.props.onInputChange,onDropDownChange:this.props.onDropDownChange})),u.default.createElement("b",null,"Ligand Masses:"),u.default.createElement(E.default,{state:this.props.state,modsOnChange:this.props.modsOnChange}),"Run in duplicate ion removal mode? "," ",u.default.createElement("input",{type:"checkbox",name:"removeDuplicates",checked:this.props.state.removeDuplicates,onChange:this.props.onInputChange})))}}]),t}(u.default.Component);f.default.render(u.default.createElement(M,null),document.getElementById("app"))}).call(t,n(56))},66:function(e,t){e.exports=Handsontable},83:function(e,t){e.exports=jQuery}},[602]);