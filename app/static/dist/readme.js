webpackJsonp([3,6],{

/***/ 104:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

var _handsontable = __webpack_require__(71);

var _handsontable2 = _interopRequireDefault(_handsontable);

__webpack_require__(134);

var _highcharts = __webpack_require__(112);

var _highcharts2 = _interopRequireDefault(_highcharts);

__webpack_require__(135);

var _immutabilityHelper = __webpack_require__(40);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Highcharts import


var HEMVis = function (_React$Component) {
    _inherits(HEMVis, _React$Component);

    function HEMVis(props) {
        _classCallCheck(this, HEMVis);

        var _this = _possibleConstructorReturn(this, (HEMVis.__proto__ || Object.getPrototypeOf(HEMVis)).call(this, props));

        _this.state = {
            selectedRow: 1
        };

        return _this;
    }

    _createClass(HEMVis, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.hot = new _handsontable2.default(this.hotDiv, {
                data: this.props.state.data.map(function (d) {
                    return {
                        pos: d.pos,
                        charge: d.charge,
                        res: d.res,
                        hem: d.hem,
                        hem_hb: d.hem_hb,
                        hem_nhb: d.hem_nhb,
                        score: d.score,
                        //warn: d.warn,
                        button: 'Visualize Fitting'
                    };
                }),

                afterSelection: function afterSelection(row, col) {
                    console.log("row: " + row + " col: " + col);
                    if (col === 7 && row > 0) {
                        _this2.setState((0, _immutabilityHelper2.default)(_this2.props.state, {
                            selectedRow: { $set: row }
                        }));
                    }
                },

                stretchH: "all"

            });

            this.chart = _highcharts2.default.chart(this.highchart, {
                chart: {
                    type: 'column'
                },

                title: {
                    text: 'Isotope Fitting'
                },

                credits: {
                    enabled: false
                },

                yAxis: {
                    title: {
                        text: 'Normalized Intensity'
                    }
                },
                xAxis: {
                    title: {
                        text: 'm/z'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                series: [{ name: 'Experimental', data: [] }, { name: 'Fitted', data: [] }]

            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var theoList = this.props.state.data[this.state.selectedRow].peaksTheo;
            var expList = this.props.state.data[this.state.selectedRow].peaksExp;
            var masses = this.props.state.data[this.state.selectedRow].masses;
            while (this.chart.series.length > 0) {
                this.chart.series[0].remove(true);
            }

            this.chart.addSeries({ name: 'Experimental', data: expList, stack: 'Experimental' }, false);
            this.chart.addSeries({ name: 'Fitted', data: theoList, stack: 'Fitted' });

            this.chart.update({ xAxis: { categories: masses } });

            console.log(this.props.state.data);

            this.hot.loadData(this.props.state.data.map(function (d) {
                return {
                    pos: d.pos,
                    charge: d.charge,
                    res: d.res,
                    hem: d.hem,
                    hem_hb: d.hem_hb,
                    hem_nhb: d.hem_nhb,
                    score: d.score,
                    //warn: d.warn,
                    button: 'Click to Visualize'
                };
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // Use the `ref` callback to store a reference to the text input DOM
            return _react2.default.createElement(
                'div',
                { style: { width: '100%' } },
                _react2.default.createElement('div', { id: 'chart',
                    ref: function ref(chart) {
                        _this3.highchart = chart;
                    } }),
                _react2.default.createElement('div', { id: 'hot',
                    ref: function ref(hotdiv) {
                        _this3.hotDiv = hotdiv;
                    } })
            );
        }
    }]);

    return HEMVis;
}(_react2.default.Component);

;

exports.default = HEMVis;

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

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(60);

var _reactBootstrap = __webpack_require__(13);

var _reactOverlays = __webpack_require__(291);

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

var _HEMVis = __webpack_require__(105);

var _HEMVis2 = _interopRequireDefault(_HEMVis);

var _lodash = __webpack_require__(107);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import 'bootstrap/dist/css/bootstrap.css'

var AffixExample = function (_React$Component) {
    _inherits(AffixExample, _React$Component);

    function AffixExample() {
        _classCallCheck(this, AffixExample);

        return _possibleConstructorReturn(this, (AffixExample.__proto__ || Object.getPrototypeOf(AffixExample)).apply(this, arguments));
    }

    _createClass(AffixExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AppNavbar2.default, { here: 'readme' }),
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { sm: 3 },
                        ' ',
                        _react2.default.createElement(
                            _reactOverlays.AutoAffix,
                            { viewportOffsetTop: 15, offsetTop: 1000, container: this },
                            _react2.default.createElement(
                                _reactBootstrap.Nav,
                                { bsStyle: 'pills', stacked: true, activeKey: 1 },
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    { eventKey: 1, href: '/home' },
                                    'NavItem 1 content'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    { eventKey: 2, title: 'Item' },
                                    'NavItem 2 content'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    { eventKey: 3, disabled: true },
                                    'NavItem 3 content'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { sm: 9 },
                        _react2.default.createElement(
                            'div',
                            { className: 'affix-example' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel panel-default' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'panel-body' },
                                    'I am an affixed element'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AffixExample;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(AffixExample, null), document.getElementById('app'));

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = Handsontable;

/***/ })

},[618]);