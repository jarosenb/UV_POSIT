webpackJsonp([5,6],{

/***/ 104:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppNavbar = function (_React$Component) {
    _inherits(AppNavbar, _React$Component);

    function AppNavbar(props) {
        _classCallCheck(this, AppNavbar);

        return _possibleConstructorReturn(this, (AppNavbar.__proto__ || Object.getPrototypeOf(AppNavbar)).call(this, props));
    }

    _createClass(AppNavbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Navbar,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Header,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Navbar.Brand,
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '' },
                                'UV-POSIT'
                            )
                        ),
                        _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Collapse,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Nav,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { active: this.props.here == 'intensity', href: '/' },
                                'Fragment Intensity'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { active: this.props.here == 'chargestate', href: '/chargestate' },
                                'Charge State Analysis'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { active: this.props.here == 'wildcard', href: '/wildcard' },
                                'Iterative Search'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { active: this.props.here == 'hem', href: '/hem' },
                                'Hydrogen Elimination Monitoring'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { active: this.props.here == 'readme',
                                    href: 'https://jarosenb.gitbooks.io/uv_posit/content/',
                                    target: '_blank' },
                                'About/Readme'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AppNavbar;
}(_react2.default.Component);

exports.default = AppNavbar;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PPMInput = function (_React$Component) {
    _inherits(PPMInput, _React$Component);

    function PPMInput(props) {
        _classCallCheck(this, PPMInput);

        return _possibleConstructorReturn(this, (PPMInput.__proto__ || Object.getPrototypeOf(PPMInput)).call(this, props));
    }

    _createClass(PPMInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.InputGroup,
                null,
                _react2.default.createElement(_reactBootstrap.FormControl, { name: 'tolValue', value: this.props.state.tolValue,
                    onChange: this.props.onInputChange }),
                _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { componentClass: _reactBootstrap.InputGroup.Button, title: this.props.state.tolType,
                        id: 'bg-nested-dropdown' },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { value: 'ppm', eventKey: 'PPM', onSelect: this.props.onDropDownChange },
                        'PPM'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { value: 'ppm', eventKey: 'Da', onSelect: this.props.onDropDownChange },
                        'Da'
                    )
                )
            );
        }
    }]);

    return PPMInput;
}(_react2.default.Component);

;

exports.default = PPMInput;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelTemplate = function (_React$Component) {
    _inherits(PanelTemplate, _React$Component);

    function PanelTemplate(props) {
        _classCallCheck(this, PanelTemplate);

        return _possibleConstructorReturn(this, (PanelTemplate.__proto__ || Object.getPrototypeOf(PanelTemplate)).call(this, props));
    }

    _createClass(PanelTemplate, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { block: true, onClick: this.props.togglePanel },
                    this.props.title
                ),
                _react2.default.createElement(
                    _reactBootstrap.Panel,
                    { collapsible: true, expanded: this.props.open },
                    this.props.body,
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'right' } },
                        _react2.default.createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2.default.createElement(_reactBootstrap.Col, { xs: 8, md: 8 }),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 2, md: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { block: true, onClick: this.props.togglePanel, bsStyle: 'default' },
                                    'Close'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 2, md: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { block: true, bsStyle: 'primary', onClick: this.props.vs },
                                    'Validate'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PanelTemplate;
}(_react2.default.Component);

exports.default = PanelTemplate;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleButtonContainer = function (_React$Component) {
    _inherits(ToggleButtonContainer, _React$Component);

    function ToggleButtonContainer(props) {
        _classCallCheck(this, ToggleButtonContainer);

        return _possibleConstructorReturn(this, (ToggleButtonContainer.__proto__ || Object.getPrototypeOf(ToggleButtonContainer)).call(this, props));
    }

    _createClass(ToggleButtonContainer, [{
        key: 'render',
        value: function render() {

            var mystyle = {
                paddingBottom: 1
            };

            return _react2.default.createElement(
                'div',
                { style: { paddingLeft: 15, paddingRight: 15 } },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: 'show-grid' },
                    _react2.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { justified: true, style: mystyle },
                        _react2.default.createElement(
                            _reactBootstrap.ButtonGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.props.axtoggle,
                                    bsStyle: this.props.state.all_ax ? 'success' : 'default' },
                                'toggle a/x'
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.ButtonGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.props.bytoggle,
                                    bsStyle: this.props.state.all_by ? 'primary' : 'default' },
                                'toggle b/y'
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.ButtonGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.props.cztoggle,
                                    bsStyle: this.props.state.all_cz ? 'danger' : 'default' },
                                'toggle c/z'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: 'show-grid' },
                    _react2.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { justified: true, style: mystyle },
                        _react2.default.createElement(ToggleButton, { name: 'a', title: 'a', tval: this.props.state.a,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'ap', title: 'a+1', tval: this.props.state.ap,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'x', title: 'x', tval: this.props.state.x,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'xp', title: 'x+1  ', tval: this.props.state.xp,
                            onIonToggle: this.props.onIonToggle })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: 'show-grid' },
                    _react2.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { justified: true, style: mystyle },
                        _react2.default.createElement(ToggleButton, { name: 'b', title: 'b', tval: this.props.state.b,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'y', title: 'y', tval: this.props.state.y,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'ym', title: 'y-1', tval: this.props.state.ym,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'ymm', title: 'y-2  ', tval: this.props.state.ymm,
                            onIonToggle: this.props.onIonToggle })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: 'show-grid' },
                    _react2.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { justified: true, style: mystyle },
                        _react2.default.createElement(ToggleButton, { name: 'c', title: 'c', tval: this.props.state.c,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(ToggleButton, { name: 'z', title: 'z', tval: this.props.state.z,
                            onIonToggle: this.props.onIonToggle }),
                        _react2.default.createElement(_reactBootstrap.Button, { href: '#', disabled: true }),
                        _react2.default.createElement(_reactBootstrap.Button, { href: '#', disabled: true })
                    )
                )
            );
        }
    }]);

    return ToggleButtonContainer;
}(_react2.default.Component);

var ToggleButton = function (_React$Component2) {
    _inherits(ToggleButton, _React$Component2);

    function ToggleButton(props) {
        _classCallCheck(this, ToggleButton);

        var _this2 = _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).call(this, props));

        _this2.setColor = _this2.setColor.bind(_this2);
        return _this2;
    }

    _createClass(ToggleButton, [{
        key: 'setColor',
        value: function setColor() {
            if (!this.props.tval) {
                return 'default';
            } else {
                if (['a', 'x'].includes(this.props.name[0])) {
                    return 'success';
                }
                if (['b', 'y'].includes(this.props.name[0])) {
                    return 'primary';
                }
                if (['c', 'z'].includes(this.props.name[0])) {
                    return 'danger';
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _reactBootstrap.ButtonGroup,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                        bsStyle: this.setColor(),
                        onClick: function onClick() {
                            return _this3.props.onIonToggle(_this3.props.name);
                        },
                        block: true },
                    this.props.title
                )
            );
        }
    }]);

    return ToggleButton;
}(_react2.default.Component);

exports.default = ToggleButtonContainer;

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(60);

var _reactBootstrap = __webpack_require__(13);

var _reactSelect = __webpack_require__(39);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

__webpack_require__(49);

__webpack_require__(48);

var _immutabilityHelper = __webpack_require__(40);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _PPMInput = __webpack_require__(29);

var _PPMInput2 = _interopRequireDefault(_PPMInput);

var _ToggleButtonContainer = __webpack_require__(31);

var _ToggleButtonContainer2 = _interopRequireDefault(_ToggleButtonContainer);

var _PanelTemplate = __webpack_require__(30);

var _PanelTemplate2 = _interopRequireDefault(_PanelTemplate);

var _AppNavbar = __webpack_require__(28);

var _AppNavbar2 = _interopRequireDefault(_AppNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import 'bootstrap/dist/css/bootstrap.css'


var WildcardApp = function (_React$Component) {
    _inherits(WildcardApp, _React$Component);

    function WildcardApp(props) {
        _classCallCheck(this, WildcardApp);

        var _this = _possibleConstructorReturn(this, (WildcardApp.__proto__ || Object.getPrototypeOf(WildcardApp)).call(this, props));

        _this.state = { tasks: [] };
        _this.runSearch = _this.runSearch.bind(_this);
        _this.runSearchCallback = _this.runSearchCallback.bind(_this);
        return _this;
    }

    _createClass(WildcardApp, [{
        key: 'runSearchCallback',
        value: function runSearchCallback(response) {

            this.setState((0, _immutabilityHelper2.default)(this.state, { tasks: { $push: [{ taskID: response.taskID,
                        statusURL: response.statusURL,
                        resultURL: response.resultURL }] } }));
        }
    }, {
        key: 'runSearch',
        value: function runSearch(state) {
            var _this2 = this;

            console.log('sending request');

            fetch('/longtask', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state),
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this2.runSearchCallback(response);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AppNavbar2.default, { here: 'wildcard' }),
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(InputContainer, { runSearch: this.runSearch }),
                    _react2.default.createElement(TaskProgressContainer, { tasks: this.state.tasks })
                )
            );
        }
    }]);

    return WildcardApp;
}(_react2.default.Component);

var TaskProgressContainer = function (_React$Component2) {
    _inherits(TaskProgressContainer, _React$Component2);

    function TaskProgressContainer(props) {
        _classCallCheck(this, TaskProgressContainer);

        return _possibleConstructorReturn(this, (TaskProgressContainer.__proto__ || Object.getPrototypeOf(TaskProgressContainer)).call(this, props));
    }

    _createClass(TaskProgressContainer, [{
        key: 'render',
        value: function render() {

            var taskbars = this.props.tasks.map(function (t) {
                return _react2.default.createElement(TaskProgressBar, { key: t.taskID, task: t });
            });

            return _react2.default.createElement(
                'div',
                null,
                taskbars
            );
        }
    }]);

    return TaskProgressContainer;
}(_react2.default.Component);

var TaskProgressBar = function (_React$Component3) {
    _inherits(TaskProgressBar, _React$Component3);

    function TaskProgressBar(props) {
        _classCallCheck(this, TaskProgressBar);

        var _this4 = _possibleConstructorReturn(this, (TaskProgressBar.__proto__ || Object.getPrototypeOf(TaskProgressBar)).call(this, props));

        _this4.state = { progress: 0, status: 'Waiting for response from server...', completed: false };
        _this4.pollTask = _this4.pollTask.bind(_this4);
        _this4.pollTaskCallback = _this4.pollTaskCallback.bind(_this4);
        return _this4;
    }

    _createClass(TaskProgressBar, [{
        key: 'pollTaskCallback',
        value: function pollTaskCallback(response, task) {
            var _this5 = this;

            var percent = parseInt(response.current * 100 / response.total);
            this.setState({ progress: percent, status: response.status });

            if (response.state != 'PENDING' && response.state != 'PROGRESS') {
                if ('result' in response) {
                    this.setState({ completed: true });
                }
            } else {
                console.log('going again');
                setTimeout(function () {
                    return _this5.pollTask(task);
                }, 2000);
            }
        }
    }, {
        key: 'pollTask',
        value: function pollTask(task) {
            var _this6 = this;

            fetch(task.statusURL, {
                headers: {
                    'content-type': 'application/json'
                },
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this6.pollTaskCallback(response, task);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.pollTask(this.props.task);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Well,
                null,
                this.state.status,
                _react2.default.createElement(_reactBootstrap.ProgressBar, { now: this.state.progress, label: this.state.progress + '%', srOnly: true }),
                this.state.completed ? _react2.default.createElement(
                    'a',
                    { href: this.props.task.resultURL },
                    ' Click to Download Results'
                ) : undefined
            );
        }
    }]);

    return TaskProgressBar;
}(_react2.default.Component);

var InputContainer = function (_React$Component4) {
    _inherits(InputContainer, _React$Component4);

    function InputContainer(props) {
        _classCallCheck(this, InputContainer);

        var _this7 = _possibleConstructorReturn(this, (InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call(this, props));

        _this7.state = {
            sequence: "",
            sequenceValidated: false,
            masslist: "",
            masslistValidated: false,
            tolValue: "10",
            tolType: "PPM",
            firstMass: "",
            lastMass: "",
            increment: "",
            ions: {
                a: true,
                ap: true,
                b: true,
                c: true,
                x: true,
                xp: true,
                y: true,
                ym: true,
                ymm: true,
                z: true,
                all_ax: true,
                all_by: true,
                all_cz: true
            }
        };
        _this7.onIonToggle = _this7.onIonToggle.bind(_this7);
        _this7.axtoggle = _this7.axtoggle.bind(_this7);
        _this7.bytoggle = _this7.bytoggle.bind(_this7);
        _this7.cztoggle = _this7.cztoggle.bind(_this7);
        _this7.onInputChange = _this7.onInputChange.bind(_this7);
        _this7.onDropDownChange = _this7.onDropDownChange.bind(_this7);
        _this7.validateSeq = _this7.validateSeq.bind(_this7);
        _this7.validateSeqCallback = _this7.validateSeqCallback.bind(_this7);
        _this7.validateMasses = _this7.validateMasses.bind(_this7);
        _this7.validateMassesCallback = _this7.validateMassesCallback.bind(_this7);
        _this7.toggleSequencePanel = _this7.toggleSequencePanel.bind(_this7);
        _this7.toggleMasslistPanel = _this7.toggleMasslistPanel.bind(_this7);
        return _this7;
    }

    _createClass(InputContainer, [{
        key: 'toggleSequencePanel',
        value: function toggleSequencePanel() {
            this.setState((0, _immutabilityHelper2.default)(this.state, { sequencePanelOpen: { $set: !this.state.sequencePanelOpen } }));
        }
    }, {
        key: 'toggleMasslistPanel',
        value: function toggleMasslistPanel() {
            this.setState((0, _immutabilityHelper2.default)(this.state, { masslistPanelOpen: { $set: !this.state.masslistPanelOpen } }));
        }
    }, {
        key: 'validateSeqCallback',
        value: function validateSeqCallback(response) {

            this.setState((0, _immutabilityHelper2.default)(this.state, { sequenceValidated: { $set: response },
                sequencePanelOpen: { $set: !response.result } }));
        }
    }, {
        key: 'validateMassesCallback',
        value: function validateMassesCallback(response) {
            this.setState((0, _immutabilityHelper2.default)(this.state, { masslistValidated: { $set: response },
                masslistPanelOpen: { $set: !response.result } }));
        }
    }, {
        key: 'validateSeq',
        value: function validateSeq() {
            var _this8 = this;

            fetch('/validateSequence', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state.sequence),
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this8.validateSeqCallback(response);
            });
        }
    }, {
        key: 'validateMasses',
        value: function validateMasses() {
            var _this9 = this;

            fetch('/validateWildcardData', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state),
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this9.validateMassesCallback(response);
            });
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(e) {

            var name = e.target.name;
            var value = e.target.value;
            this.setState((0, _immutabilityHelper2.default)(this.state, _defineProperty({}, name, { $set: value })));
        }
    }, {
        key: 'onDropDownChange',
        value: function onDropDownChange(e) {
            var newState = (0, _immutabilityHelper2.default)(this.state, {
                tolType: { $set: e }
            });
            this.setState(newState);
        }
    }, {
        key: 'onIonToggle',
        value: function onIonToggle(name) {
            var newTval = !this.state.ions[name];
            this.setState((0, _immutabilityHelper2.default)(this.state, {
                ions: _defineProperty({}, name, { $set: newTval })
            }));
        }
    }, {
        key: 'axtoggle',
        value: function axtoggle() {
            var newaxval = !this.state.ions.all_ax;
            this.setState((0, _immutabilityHelper2.default)(this.state, {
                ions: {
                    all_ax: { $set: newaxval },
                    a: { $set: newaxval },
                    ap: { $set: newaxval },
                    x: { $set: newaxval },
                    xp: { $set: newaxval }
                }
            }));
        }
    }, {
        key: 'bytoggle',
        value: function bytoggle() {
            var newbyval = !this.state.ions.all_by;
            this.setState((0, _immutabilityHelper2.default)(this.state, {
                ions: {
                    all_by: { $set: newbyval },
                    b: { $set: newbyval },
                    y: { $set: newbyval },
                    ym: { $set: newbyval },
                    ymm: { $set: newbyval }
                }
            }));
        }
    }, {
        key: 'cztoggle',
        value: function cztoggle() {
            var newczval = !this.state.ions.all_cz;
            this.setState((0, _immutabilityHelper2.default)(this.state, {
                ions: {
                    all_cz: { $set: newczval },
                    c: { $set: newczval },
                    z: { $set: newczval }
                }
            }));
        }
    }, {
        key: 'modsOnChange',
        value: function modsOnChange(value) {
            var mods = value.map(function (e) {
                return e.value;
            });
            var newState = (0, _immutabilityHelper2.default)(this.state, {
                mods: { $set: mods },
                modOptions: { $set: value }
            });

            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            var sequence = _react2.default.createElement(Sequence, { state: this.state,
                onInputChange: this.onInputChange });

            var massData = _react2.default.createElement(MassData, {
                state: this.state,
                onIonToggle: this.onIonToggle,
                axtoggle: this.axtoggle,
                bytoggle: this.bytoggle,
                cztoggle: this.cztoggle,
                onInputChange: this.onInputChange,
                onDropDownChange: this.onDropDownChange,
                modsOnChange: this.modsOnChange });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.PanelGroup,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Well,
                        null,
                        _react2.default.createElement(
                            'div',
                            { style: { paddingTop: 2 } },
                            _react2.default.createElement(
                                'div',
                                { style: { paddingBottom: 5 } },
                                _react2.default.createElement(_PanelTemplate2.default, { togglePanel: this.toggleSequencePanel,
                                    open: this.state.sequencePanelOpen,
                                    vs: this.validateSeq,
                                    title: 'Edit Sequence',
                                    body: sequence })
                            ),
                            _react2.default.createElement(_PanelTemplate2.default, { togglePanel: this.toggleMasslistPanel,
                                open: this.state.masslistPanelOpen,
                                vs: this.validateMasses,
                                title: 'Edit Mass List and Options',
                                body: massData })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: this.state.sequenceValidated && this.state.masslistValidated ? 'success' : 'default',
                            onClick: function onClick() {
                                return _this10.props.runSearch(_this10.state);
                            },
                            disabled: !this.state.sequenceValidated || !this.state.masslistValidated,
                            block: true },
                        'Submit search to server'
                    )
                )
            );
        }
    }]);

    return InputContainer;
}(_react2.default.Component);

var Sequence = function (_React$Component5) {
    _inherits(Sequence, _React$Component5);

    function Sequence(props) {
        _classCallCheck(this, Sequence);

        return _possibleConstructorReturn(this, (Sequence.__proto__ || Object.getPrototypeOf(Sequence)).call(this, props));
    }

    _createClass(Sequence, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12, md: 12 },
                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'sequence',
                        value: this.props.state.sequence,
                        componentClass: 'textarea',
                        style: { height: 200, resize: 'none' },
                        onChange: this.props.onInputChange })
                )
            );
        }
    }]);

    return Sequence;
}(_react2.default.Component);

var MassData = function (_React$Component6) {
    _inherits(MassData, _React$Component6);

    function MassData(props) {
        _classCallCheck(this, MassData);

        return _possibleConstructorReturn(this, (MassData.__proto__ || Object.getPrototypeOf(MassData)).call(this, props));
    }

    _createClass(MassData, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 6 },
                    _react2.default.createElement(
                        'b',
                        null,
                        'Mass and m/z Data from ProsightPC THRASH (tab-delimited):'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'masslist',
                        value: this.props.state.masslist,
                        componentClass: 'textarea',
                        style: { height: 395, resize: 'none' },
                        onChange: this.props.onInputChange })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 6 },
                    _react2.default.createElement(
                        'div',
                        { style: { paddingBottom: 10 } },
                        _react2.default.createElement(
                            'b',
                            null,
                            'Ion series to search:'
                        ),
                        _react2.default.createElement(_ToggleButtonContainer2.default, {
                            state: this.props.state.ions,
                            onIonToggle: this.props.onIonToggle,
                            axtoggle: this.props.axtoggle,
                            bytoggle: this.props.bytoggle,
                            cztoggle: this.props.cztoggle })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { paddingBottom: 10 } },
                        _react2.default.createElement(
                            'b',
                            null,
                            'First mass in search range:'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { name: 'firstMass',
                            onChange: this.props.onInputChange,
                            value: this.props.state.firstMass })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { paddingBottom: 10 } },
                        _react2.default.createElement(
                            'b',
                            null,
                            'Last mass in search range:'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { name: 'lastMass',
                            onChange: this.props.onInputChange,
                            value: this.props.state.lastMass })
                    ),
                    _react2.default.createElement(
                        'b',
                        null,
                        'Mass increment to use:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { paddingBottom: 10 } },
                        _react2.default.createElement(_reactBootstrap.FormControl, { name: 'increment',
                            onChange: this.props.onInputChange,
                            value: this.props.state.increment })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { paddingBottom: 10 } },
                        _react2.default.createElement(
                            'b',
                            null,
                            'Mass Error Tolerance:'
                        ),
                        _react2.default.createElement(_PPMInput2.default, { state: this.props.state,
                            onInputChange: this.props.onInputChange,
                            onDropDownChange: this.props.onDropDownChange })
                    )
                )
            );
        }
    }]);

    return MassData;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(WildcardApp, null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ })

},[619]);