webpackJsonp([3,4],{176:function(e,t){},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=a(u),c=n(14),p=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Navbar,null,i.default.createElement(c.Navbar.Header,null,i.default.createElement(c.Navbar.Brand,null,i.default.createElement("a",{href:"#"},"UVPD-Utils")),i.default.createElement(c.Navbar.Toggle,null)),i.default.createElement(c.Navbar.Collapse,null,i.default.createElement(c.Nav,null,i.default.createElement(c.NavItem,{active:"intensity"==this.props.here,href:"/"},"Fragment Intensity"),i.default.createElement(c.NavItem,{active:"chargestate"==this.props.here,href:"/chargestate"},"Charge State Analysis"),i.default.createElement(c.NavItem,{active:"wildcard"==this.props.here,href:"/wildcard"},"Wildcard Search"),i.default.createElement(c.NavItem,{active:"hem"==this.props.here,href:"/hem"},"HEM")))))}}]),t}(i.default.Component);t.default=p},47:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=a(u),c=n(14),p=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement(c.InputGroup,null,i.default.createElement(c.FormControl,{name:"tolValue",value:this.props.state.tolValue,onChange:this.props.onInputChange}),i.default.createElement(c.DropdownButton,{componentClass:c.InputGroup.Button,title:this.props.state.tolType,id:"bg-nested-dropdown"},i.default.createElement(c.MenuItem,{value:"ppm",eventKey:"PPM",onSelect:this.props.onDropDownChange},"PPM"),i.default.createElement(c.MenuItem,{value:"ppm",eventKey:"Da",onSelect:this.props.onDropDownChange},"Da")))}}]),t}(i.default.Component);t.default=p},48:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=a(u),c=n(14),p=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel},this.props.title),i.default.createElement(c.Panel,{collapsible:!0,expanded:this.props.open},this.props.body,i.default.createElement("hr",null),i.default.createElement("div",{style:{textAlign:"right"}},i.default.createElement(c.Row,null,i.default.createElement(c.Col,{xs:8,md:8}),i.default.createElement(c.Col,{xs:2,md:2},i.default.createElement(c.Button,{block:!0,onClick:this.props.togglePanel,bsStyle:"default"},"Close")),i.default.createElement(c.Col,{xs:2,md:2},i.default.createElement(c.Button,{block:!0,bsStyle:"primary",onClick:this.props.vs},"Save"))))))}}]),t}(i.default.Component);t.default=p},49:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=a(u),c=n(14),p=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e={paddingBottom:1};return i.default.createElement("div",{style:{paddingLeft:15,paddingRight:15}},i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.axtoggle,bsStyle:this.props.state.all_ax?"success":"default"},"toggle a/x")),i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.bytoggle,bsStyle:this.props.state.all_by?"primary":"default"},"toggle b/y")),i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{onClick:this.props.cztoggle,bsStyle:this.props.state.all_cz?"danger":"default"},"toggle c/z")))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"a",title:"a",tval:this.props.state.a,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ap",title:"a+1",tval:this.props.state.ap,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"x",title:"x",tval:this.props.state.x,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"xp",title:"x+1  ",tval:this.props.state.xp,onIonToggle:this.props.onIonToggle}))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"b",title:"b",tval:this.props.state.b,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"y",title:"y",tval:this.props.state.y,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ym",title:"y-1",tval:this.props.state.ym,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"ymm",title:"y-2  ",tval:this.props.state.ymm,onIonToggle:this.props.onIonToggle}))),i.default.createElement(c.Row,{className:"show-grid"},i.default.createElement(c.ButtonGroup,{justified:!0,style:e},i.default.createElement(f,{name:"c",title:"c",tval:this.props.state.c,onIonToggle:this.props.onIonToggle}),i.default.createElement(f,{name:"z",title:"z",tval:this.props.state.z,onIonToggle:this.props.onIonToggle}),i.default.createElement(c.Button,{href:"#",disabled:!0}),i.default.createElement(c.Button,{href:"#",disabled:!0}))))}}]),t}(i.default.Component),f=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setColor=n.setColor.bind(n),n}return r(t,e),s(t,[{key:"setColor",value:function(){return this.props.tval?["a","x"].includes(this.props.name[0])?"success":["b","y"].includes(this.props.name[0])?"primary":["c","z"].includes(this.props.name[0])?"danger":void 0:"default"}},{key:"render",value:function(){var e=this;return i.default.createElement(c.ButtonGroup,null,i.default.createElement(c.Button,{bsStyle:this.setColor(),onClick:function(){return e.props.onIonToggle(e.props.name)},block:!0},this.props.title))}}]),t}(i.default.Component);t.default=p},584:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=t(u),c=n(20),p=t(c);n(119);var f=n(14);n(74);var d=n(45);t(d);n(76),n(75);var h=n(72),g=t(h),m=n(47),y=t(m),E=n(49),b=t(E),v=n(48),O=t(v),C=n(46),S=t(C),I=function(t){function n(e){l(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={tasks:[]},t.runSearch=t.runSearch.bind(t),t.runSearchCallback=t.runSearchCallback.bind(t),t}return r(n,t),s(n,[{key:"runSearchCallback",value:function(e){this.setState((0,g.default)(this.state,{tasks:{$push:[{taskID:e.taskID,statusURL:e.statusURL,resultURL:e.resultURL}]}}))}},{key:"runSearch",value:function(t){var n=this;console.log("sending request"),e("/longtask",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return n.runSearchCallback(e)})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(S.default,{here:"wildcard"}),i.default.createElement(f.Grid,null,i.default.createElement(k,{runSearch:this.runSearch}),i.default.createElement(_,{tasks:this.state.tasks})))}}]),n}(i.default.Component),_=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e=this.props.tasks.map(function(e){return i.default.createElement(T,{key:e.taskID,task:e})});return i.default.createElement("div",null,e)}}]),t}(i.default.Component),T=function(t){function n(e){l(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={progress:0,status:"booting",completed:!1},t.pollTask=t.pollTask.bind(t),t.pollTaskCallback=t.pollTaskCallback.bind(t),t}return r(n,t),s(n,[{key:"pollTaskCallback",value:function(e,t){var n=this,a=parseInt(100*e.current/e.total);this.setState({progress:a,status:e.status}),"PENDING"!=e.state&&"PROGRESS"!=e.state?"result"in e&&this.setState({completed:!0}):(console.log("going again"),setTimeout(function(){return n.pollTask(t)},2e3))}},{key:"pollTask",value:function(t){var n=this;e(t.statusURL,{headers:{"content-type":"application/json"},dataType:"json"}).then(function(e){return e.json()}).then(function(e){return n.pollTaskCallback(e,t)})}},{key:"componentDidMount",value:function(){this.pollTask(this.props.task)}},{key:"render",value:function(){return i.default.createElement(f.Well,null,this.state.status,i.default.createElement(f.ProgressBar,{now:this.state.progress,label:this.state.progress+"%",srOnly:!0}),this.state.completed?i.default.createElement("a",{href:this.props.task.resultURL}," EVERY MORNING I WAKE UP AND OPEN PALM SLAM A VHS INTO THE SLOT. ITS CHRONICLES OF RIDDICK AND RIGHT THEN AND THERE I START DOING THE MOVES ALONGSIDE WITH THE MAIN CHARACTER, RIDDICK. I DO EVERY MOVE AND I DO EVERY MOVE HARD. MAKIN WHOOSHING SOUNDS WHEN I SLAM DOWN SOME NECRO BASTARDS OR EVEN WHEN I MESS UP TECHNIQUE. NOT MANY CAN SAY THEY ESCAPED THE GALAXYS MOST DANGEROUS PRISON. I CAN. I SAY IT AND I SAY IT OUTLOUD EVERYDAY TO PEOPLE IN MY COLLEGE CLASS AND ALL THEY DO IS PROVE PEOPLE IN COLLEGE CLASS CAN STILL BE IMMATURE JEKRS. AND IVE LEARNED ALL THE LINES AND IVE LEARNED HOW TO MAKE MYSELF AND MY APARTMENT LESS LONELY BY SHOUTING EM ALL. 2 HOURS INCLUDING WIND DOWN EVERY MORNIng"):void 0)}}]),n}(i.default.Component),k=function(t){function n(e){l(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={sequence:"",sequenceValidated:!0,masslist:"",masslistValidated:!0,tolValue:"10",tolType:"PPM",firstMass:"",lastMass:"",increment:"",ions:{a:!0,ap:!0,b:!0,c:!0,x:!0,xp:!0,y:!0,ym:!0,ymm:!0,z:!0,all_ax:!0,all_by:!0,all_cz:!0}},t.onIonToggle=t.onIonToggle.bind(t),t.axtoggle=t.axtoggle.bind(t),t.bytoggle=t.bytoggle.bind(t),t.cztoggle=t.cztoggle.bind(t),t.onInputChange=t.onInputChange.bind(t),t.onDropDownChange=t.onDropDownChange.bind(t),t.validateSeq=t.validateSeq.bind(t),t.validateSeqCallback=t.validateSeqCallback.bind(t),t.validateMasses=t.validateMasses.bind(t),t.validateMassesCallback=t.validateMassesCallback.bind(t),t.toggleSequencePanel=t.toggleSequencePanel.bind(t),t.toggleMasslistPanel=t.toggleMasslistPanel.bind(t),t}return r(n,t),s(n,[{key:"toggleSequencePanel",value:function(){this.setState((0,g.default)(this.state,{sequencePanelOpen:{$set:!this.state.sequencePanelOpen}}))}},{key:"toggleMasslistPanel",value:function(){this.setState((0,g.default)(this.state,{masslistPanelOpen:{$set:!this.state.masslistPanelOpen}}))}},{key:"validateSeqCallback",value:function(e){this.setState((0,g.default)(this.state,{sequenceValidated:{$set:e},sequencePanelOpen:{$set:!e.result}}))}},{key:"validateMassesCallback",value:function(e){this.setState((0,g.default)(this.state,{masslistValidated:{$set:e},masslistPanelOpen:{$set:!e.result}}))}},{key:"validateSeq",value:function(){var t=this;e("/validateSequence",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state.sequence),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateSeqCallback(e)})}},{key:"validateMasses",value:function(){var t=this;e("/validateWildcardData",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.state),dataType:"json"}).then(function(e){return e.json()}).then(function(e){return t.validateMassesCallback(e)})}},{key:"onInputChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState((0,g.default)(this.state,a({},t,{$set:n})))}},{key:"onDropDownChange",value:function(e){var t=(0,g.default)(this.state,{tolType:{$set:e}});this.setState(t)}},{key:"onIonToggle",value:function(e){var t=!this.state.ions[e];this.setState((0,g.default)(this.state,{ions:a({},e,{$set:t})}))}},{key:"axtoggle",value:function(){var e=!this.state.ions.all_ax;this.setState((0,g.default)(this.state,{ions:{all_ax:{$set:e},a:{$set:e},ap:{$set:e},x:{$set:e},xp:{$set:e}}}))}},{key:"bytoggle",value:function(){var e=!this.state.ions.all_by;this.setState((0,g.default)(this.state,{ions:{all_by:{$set:e},b:{$set:e},y:{$set:e},ym:{$set:e},ymm:{$set:e}}}))}},{key:"cztoggle",value:function(){var e=!this.state.ions.all_cz;this.setState((0,g.default)(this.state,{ions:{all_cz:{$set:e},c:{$set:e},z:{$set:e}}}))}},{key:"modsOnChange",value:function(e){var t=e.map(function(e){return e.value}),n=(0,g.default)(this.state,{mods:{$set:t},modOptions:{$set:e}});this.setState(n)}},{key:"render",value:function(){var e=this,t=i.default.createElement(P,{state:this.state,onInputChange:this.onInputChange}),n=i.default.createElement(w,{state:this.state,onIonToggle:this.onIonToggle,axtoggle:this.axtoggle,bytoggle:this.bytoggle,cztoggle:this.cztoggle,onInputChange:this.onInputChange,onDropDownChange:this.onDropDownChange,modsOnChange:this.modsOnChange});return i.default.createElement("div",null,i.default.createElement(f.PanelGroup,null,i.default.createElement(f.Well,null,i.default.createElement("div",{style:{paddingTop:2}},i.default.createElement("div",{style:{paddingBottom:5}},i.default.createElement(O.default,{togglePanel:this.toggleSequencePanel,open:this.state.sequencePanelOpen,vs:this.validateSeq,title:"Edit Sequence",body:t})),i.default.createElement(O.default,{togglePanel:this.toggleMasslistPanel,open:this.state.masslistPanelOpen,vs:this.validateMasses,title:"Edit Mass List and Options",body:n}))),i.default.createElement(f.Button,{bsStyle:this.state.sequenceValidated&&this.state.masslistValidated?"success":"default",onClick:function(){return e.props.runSearch(e.state)},disabled:!this.state.sequenceValidated||!this.state.masslistValidated,block:!0},"Submit search to server")))}}]),n}(i.default.Component),P=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement(f.Row,null,i.default.createElement(f.Col,{xs:12,md:12},i.default.createElement(f.FormControl,{name:"sequence",value:this.props.state.sequence,componentClass:"textarea",style:{height:200,resize:"none"},onChange:this.props.onInputChange})))}}]),t}(i.default.Component),w=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return i.default.createElement(f.Row,null,i.default.createElement(f.Col,{xs:6,md:6},i.default.createElement("b",null,"Mass and m/z Data from ProsightPC THRASH (tab-delimited):"),i.default.createElement(f.FormControl,{name:"masslist",value:this.props.state.masslist,componentClass:"textarea",style:{height:395,resize:"none"},onChange:this.props.onInputChange})),i.default.createElement(f.Col,{xs:6,md:6},i.default.createElement("div",{style:{paddingBottom:10}},i.default.createElement("b",null,"Ion series to search:"),i.default.createElement(b.default,{state:this.props.state.ions,onIonToggle:this.props.onIonToggle,axtoggle:this.props.axtoggle,bytoggle:this.props.bytoggle,cztoggle:this.props.cztoggle})),i.default.createElement("div",{style:{paddingBottom:10}},i.default.createElement("b",null,"First mass in search range:"),i.default.createElement(f.FormControl,{name:"firstMass",onChange:this.props.onInputChange,value:this.props.state.firstMass})),i.default.createElement("div",{style:{paddingBottom:10}},i.default.createElement("b",null,"Last mass in search range:"),i.default.createElement(f.FormControl,{name:"lastMass",onChange:this.props.onInputChange,value:this.props.state.lastMass})),i.default.createElement("b",null,"Mass increment to use:"),i.default.createElement("div",{style:{paddingBottom:10}},i.default.createElement(f.FormControl,{name:"increment",onChange:this.props.onInputChange,value:this.props.state.increment})),i.default.createElement("div",{style:{paddingBottom:10}},i.default.createElement("b",null,"Mass Error Tolerance:"),i.default.createElement(y.default,{state:this.props.state,onInputChange:this.props.onInputChange,onDropDownChange:this.props.onDropDownChange}))))}}]),t}(i.default.Component);p.default.render(i.default.createElement(I,null),document.getElementById("app"))}).call(t,n(73))}},[584]);