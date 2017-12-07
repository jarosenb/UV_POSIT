webpackJsonp([3,6],{102:function(e,t){},103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=(n(11),n(66)),f=o(c);n(131);var p=n(110),d=o(p);n(132);var h=n(37),m=o(h),b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedRow:1},n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.hot=new f.default(this.hotDiv,{data:this.props.state.data.map(function(e){return{pos:e.pos,charge:e.charge,res:e.res,hem:e.hem,hem_hb:e.hem_hb,hem_nhb:e.hem_nhb,score:e.score,button:"Visualize Fitting"}}),afterSelection:function(t,n){console.log("row: "+t+" col: "+n),7===n&&t>0&&e.setState((0,m.default)(e.props.state,{selectedRow:{$set:t}}))},stretchH:"all"}),this.chart=d.default.chart(this.highchart,{chart:{type:"column"},title:{text:"Isotope Fitting"},credits:{enabled:!1},yAxis:{title:{text:"Normalized Intensity"}},xAxis:{title:{text:"m/z"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},series:[{name:"Experimental",data:[]},{name:"Fitted",data:[]}]})}},{key:"componentDidUpdate",value:function(){for(var e=this.props.state.data[this.state.selectedRow].peaksTheo,t=this.props.state.data[this.state.selectedRow].peaksExp,n=this.props.state.data[this.state.selectedRow].masses;this.chart.series.length>0;)this.chart.series[0].remove(!0);this.chart.addSeries({name:"Experimental",data:t,stack:"Experimental"},!1),this.chart.addSeries({name:"Fitted",data:e,stack:"Fitted"}),this.chart.update({xAxis:{categories:n}}),console.log(this.props.state.data),this.hot.loadData(this.props.state.data.map(function(e){return{pos:e.pos,charge:e.charge,res:e.res,hem:e.hem,hem_hb:e.hem_hb,hem_nhb:e.hem_nhb,score:e.score,button:"Click to Visualize"}}))}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{style:{width:"100%"}},s.default.createElement("div",{id:"chart",ref:function(t){e.highchart=t}}),s.default.createElement("div",{id:"hot",ref:function(t){e.hotDiv=t}}))}}]),t}(s.default.Component);t.default=b},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(11),f=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.Navbar,null,s.default.createElement(c.Navbar.Header,null,s.default.createElement(c.Navbar.Brand,null,s.default.createElement("a",{href:""},"UV-POSIT")),s.default.createElement(c.Navbar.Toggle,null)),s.default.createElement(c.Navbar.Collapse,null,s.default.createElement(c.Nav,null,s.default.createElement(c.NavItem,{active:"intensity"==this.props.here,href:"/"},"Fragment Intensity"),s.default.createElement(c.NavItem,{active:"chargestate"==this.props.here,href:"/chargestate"},"Charge State Analysis"),s.default.createElement(c.NavItem,{active:"wildcard"==this.props.here,href:"/wildcard"},"Iterative Search"),s.default.createElement(c.NavItem,{active:"hem"==this.props.here,href:"/hem"},"Hydrogen Elimination Monitoring"),s.default.createElement(c.NavItem,{active:"readme"==this.props.here,href:"https://jarosenb.gitbooks.io/uv_posit/content/",target:"_blank"},"About/Readme")))))}}]),t}(s.default.Component);t.default=f},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(11),f=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement(c.InputGroup,null,s.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),s.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},s.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),s.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(s.default.Component);t.default=f},29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(11),f=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel},this.props.title),s.default.createElement(c.Panel,{collapsible:!0,expanded:this.props.open},this.props.body,s.default.createElement("hr",null),s.default.createElement("div",{style:{textAlign:"right"}},s.default.createElement(c.Row,null,s.default.createElement(c.Col,{xs:8,md:8}),s.default.createElement(c.Col,{xs:2,md:2},s.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel,bsStyle:"default"},"Close")),s.default.createElement(c.Col,{xs:2,md:2},s.default.createElement(c.Button,{block:!0,bsStyle:"primary",onClick:this.props.vs},"Validate"))))))}}]),t}(s.default.Component);t.default=f},30:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(11),f=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){var e={paddingBottom:1};return s.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),s.default.createElement(c.Row,{className:"show-grid"},s.default.createElement(c.ButtonGroup,{justified:!0,style:e},s.default.createElement(p,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),s.default.createElement(p,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),s.default.createElement(c.Button,{href:"#",disabled:!0}),s.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(s.default.Component),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return l(t,e),i(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return s.default.createElement(c.ButtonGroup,null,s.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(s.default.Component);t.default=f},604:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(13),f=o(c);n(57);var p=n(11),d=n(287),h=n(36);o(h);n(46),n(45);var m=n(37),b=(o(m),n(28)),y=(o(b),n(30)),g=(o(y),n(29)),v=(o(g),n(27)),E=o(v),_=n(103),w=(o(_),n(105)),O=(o(w),function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(E.default,{here:"readme"}),s.default.createElement(p.Grid,null,s.default.createElement(p.Col,{sm:3}," ",s.default.createElement(d.AutoAffix,{viewportOffsetTop:15,offsetTop:1e3,container:this},s.default.createElement(p.Nav,{bsStyle:"pills",stacked:!0,activeKey:1},s.default.createElement(p.NavItem,{eventKey:1,href:"/home"},"NavItem 1 content"),s.default.createElement(p.NavItem,{eventKey:2,title:"Item"},"NavItem 2 content"),s.default.createElement(p.NavItem,{eventKey:3,disabled:!0},"NavItem 3 content")))),s.default.createElement(p.Col,{sm:9},s.default.createElement("div",{className:"affix-example"},s.default.createElement("div",{className:"panel panel-default"},s.default.createElement("div",{className:"panel-body"},"I am an affixed element"))))))}}]),t}(s.default.Component));f.default.render(s.default.createElement(O,null),document.getElementById("app"))},66:function(e,t){e.exports=Handsontable}},[604]);