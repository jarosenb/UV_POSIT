webpackJsonp([4,6],{105:function(e,t){},106:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),c=(n(10),n(67)),f=a(c);n(132);var p=n(112),h=a(p);n(133);var d=n(36),m=a(d),g=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedRow:1},n}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.hot=new f.default(this.hotDiv,{data:this.props.state.data.map(function(e){return{pos:e.pos,charge:e.charge,res:e.res,hem:e.hem,hem_hb:e.hem_hb,hem_nhb:e.hem_nhb,score:e.score,warn:e.warn,button:"Visualize Fitting"}}),afterSelection:function(t,n){console.log("row: "+t+" col: "+n),8===n&&t>0&&e.setState((0,m.default)(e.props.state,{selectedRow:{$set:t}}))},stretchH:"all"}),this.chart=h.default.chart(this.highchart,{chart:{type:"column"},title:{text:"Isotope Fitting"},credits:{enabled:!1},yAxis:{title:{text:"Normalized Intensity"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},series:[{name:"Experimental",data:[]},{name:"Theoretical",data:[]}]})}},{key:"componentDidUpdate",value:function(){for(var e=this.props.state.data[this.state.selectedRow].peaksTheo,t=this.props.state.data[this.state.selectedRow].peaksExp,n=this.props.state.data[this.state.selectedRow].masses;this.chart.series.length>0;)this.chart.series[0].remove(!0);this.chart.addSeries({name:"Experimental",data:t,stack:"Experimental"},!1),this.chart.addSeries({name:"Theoretical",data:e,stack:"Theoretical"}),this.chart.update({xAxis:{categories:n}}),this.hot.loadData(this.props.state.data.map(function(e){return{pos:e.pos,charge:e.charge,res:e.res,hem:e.hem,hem_hb:e.hem_hb,hem_nhb:e.hem_nhb,score:e.score,warn:e.warn,button:"Click to Visualize"}}))}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{style:{width:"100%"}},s.default.createElement("div",{id:"chart",ref:function(t){e.highchart=t}}),s.default.createElement("div",{id:"hot",ref:function(t){e.hotDiv=t}}))}}]),t}(s.default.Component);t.default=g},26:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),c=n(10),f=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.Navbar,null,s.default.createElement(c.Navbar.Header,null,s.default.createElement(c.Navbar.Brand,null,s.default.createElement("a",{href:"#"},"UV-POSIT")),s.default.createElement(c.Navbar.Toggle,null)),s.default.createElement(c.Navbar.Collapse,null,s.default.createElement(c.Nav,null,s.default.createElement(c.NavItem,{active:"intensity"==this.props.here,href:"/"},"Fragment Intensity"),s.default.createElement(c.NavItem,{active:"chargestate"==this.props.here,href:"/chargestate"},"Charge State Analysis"),s.default.createElement(c.NavItem,{active:"wildcard"==this.props.here,href:"/wildcard"},"Iterative Search"),s.default.createElement(c.NavItem,{active:"hem"==this.props.here,href:"/hem"},"HEM"),s.default.createElement(c.NavItem,{active:"readme"==this.props.here,href:"https://jarosenb.gitbooks.io/uv_posit/content/",target:"_blank"},"About/Readme")))))}}]),t}(s.default.Component);t.default=f},27:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),c=n(10),f=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){return s.default.createElement(c.InputGroup,null,s.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),s.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},s.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),s.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(s.default.Component);t.default=f},28:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),c=n(10),f=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel},this.props.title),s.default.createElement(c.Panel,{collapsible:!0,expanded:this.props.open},this.props.body,s.default.createElement("hr",null),s.default.createElement("div",{style:{textAlign:"right"}},s.default.createElement(c.Row,null,s.default.createElement(c.Col,{xs:8,md:8}),s.default.createElement(c.Col,{xs:2,md:2},s.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel,bsStyle:"default"},"Close")),s.default.createElement(c.Col,{xs:2,md:2},s.default.createElement(c.Button,{block:!0,bsStyle:"primary",onClick:this.props.vs},"Save"))))))}}]),t}(s.default.Component);t.default=f},29:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),c=n(10),f=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){var e={paddingBottom:1};return s.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),s.default.createElement(c.Button,{href:"#",disabled:!0}),s.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(s.default.Component),p=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return l(t,e),u(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(s.default.Component);t.default=f},610:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=t(i),c=n(12),f=t(c);n(58);var p=n(10);n(44);var h=n(35);t(h);n(46),n(45);var d=n(36),m=t(d),g=n(27),b=t(g),y=n(29),v=(t(y),n(28)),E=t(v),_=n(26),w=t(_),C=n(106),O=t(C),P=n(108),k=(t(P),function(t){function n(e){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.onFileChange=t.onFileChange.bind(t),t.state={data:[{pos:"Position",charge:"Charge",res:"Residue",hem:"HEM value",score:"Score",peaksExp:[1,15,20,15,1],peaksTheo:[.9,18,21,14.5,1.1],masses:[101.1,101.2,101.3,101.4,101.5],hem_hb:"HB value",hem_nhb:"non-HB value",warn:"Warnings"}]},t}return l(n,t),u(n,[{key:"onFileChange",value:function(){var t=this;e("/getform",{method:"POST",body:new FormData(this.formContent)}).then(function(e){return e.json()}).then(function(e){return t.setState({data:e.response})})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",null,s.default.createElement(w.default,{here:"hem"}),s.default.createElement(p.Grid,null,s.default.createElement("form",{id:"formContent",method:"POST",name:"formContent",encType:"multipart/form-data",ref:function(t){return e.formContent=t}},s.default.createElement(j,{saveCallback:this.onFileChange})),s.default.createElement(O.default,{state:this.state})))}}]),n}(s.default.Component)),j=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sequencePanelOpen:!1},n.toggleSequencePanel=n.toggleSequencePanel.bind(n),n}return l(t,e),u(t,[{key:"toggleSequencePanel",value:function(){this.setState((0,m.default)(this.state,{sequencePanelOpen:{$set:!this.state.sequencePanelOpen}}))}},{key:"render",value:function(){var e=s.default.createElement(T,null);return s.default.createElement("div",null,s.default.createElement(p.PanelGroup,null,s.default.createElement(p.Well,null,s.default.createElement("div",{style:{paddingTop:2}},s.default.createElement(E.default,{togglePanel:this.toggleSequencePanel,open:this.state.sequencePanelOpen,title:"Upload MzML File and Select Options",body:e,vs:this.props.saveCallback})))))}}]),t}(s.default.Component),T=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filename:"\t No File Selected",charge:"",signal:"1e1",score:"1e-2",tolValue:"10",tolType:"PPM"},n.inputMask=n.inputMask.bind(n),n.fileChange=n.fileChange.bind(n),n.onInputChange=n.onInputChange.bind(n),n.onDropDownChange=n.onDropDownChange.bind(n),n}return l(t,e),u(t,[{key:"inputMask",value:function(){this.hemIP.click()}},{key:"onDropDownChange",value:function(e){var t=(0,m.default)(this.state,{tolType:{$set:e}});this.setState(t)}},{key:"fileChange",value:function(){console.log(this.hemIP.files[0].name),this.setState({filename:" "+this.hemIP.files[0].name})}},{key:"onInputChange",value:function(e){var t=e.target.name,n="checkbox"==e.target.type?e.target.checked:e.target.value;this.setState((0,m.default)(this.state,a({},t,{$set:n})))}},{key:"render",value:function(){var e=this;return s.default.createElement(p.Row,null,s.default.createElement(p.Col,{xs:12,md:12},"Enter amino acid sequence. Pass modifications using Hill notation, e.g. PEP(CH2Br)TIDE",s.default.createElement(p.FormControl,{name:"sequence",componentClass:"textarea",style:{height:200,resize:"none"}}),s.default.createElement("hr",null)),s.default.createElement("div",{hidden:!0},s.default.createElement("input",{name:"ip",id:"ip",type:"file",ref:function(t){return e.hemIP=t},onChange:this.fileChange})),s.default.createElement(p.Col,{xs:6,md:6},s.default.createElement(p.Button,{onClick:this.inputMask},"Upload MzML File"),s.default.createElement("div",{style:{paddingTop:5}},s.default.createElement(p.Well,null,s.default.createElement("div",{style:{wordWrap:"break-word"}},this.state.filename))),s.default.createElement(b.default,{state:this.state,onInputChange:this.onInputChange,onDropDownChange:this.onDropDownChange})),s.default.createElement(p.Col,{xs:6,md:6},s.default.createElement("div",null,"max charge:"),s.default.createElement(p.FormControl,{name:"charge",value:this.state.charge,onChange:this.onInputChange}),s.default.createElement("div",null,"min signal:"),s.default.createElement(p.FormControl,{name:"signal",value:this.state.signal,onChange:this.onInputChange}),s.default.createElement("div",null,"Score cutoff (lower values are more stringent):"),s.default.createElement(p.FormControl,{name:"score",value:this.state.score,onChange:this.onInputChange}),s.default.createElement("input",{hidden:!0,readOnly:!0,name:"tolType",value:this.state.tolType})))}}]),t}(s.default.Component);f.default.render(s.default.createElement(k,null),document.getElementById("app"))}).call(t,n(57))},67:function(e,t){e.exports=Handsontable}},[610]);