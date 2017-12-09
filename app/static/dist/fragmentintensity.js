webpackJsonp([1,6],{

/***/ 104:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 106:
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

var ModalTemplate = function (_React$Component) {
    _inherits(ModalTemplate, _React$Component);

    function ModalTemplate(props) {
        _classCallCheck(this, ModalTemplate);

        var _this = _possibleConstructorReturn(this, (ModalTemplate.__proto__ || Object.getPrototypeOf(ModalTemplate)).call(this, props));

        _this.state = { showModal: false };
        _this.close = _this.close.bind(_this);
        _this.open = _this.open.bind(_this);
        _this.saveCallback = _this.saveCallback.bind(_this);
        return _this;
    }

    _createClass(ModalTemplate, [{
        key: 'close',
        value: function close() {
            this.setState({ showModal: false });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({ showModal: true });
        }
    }, {
        key: 'saveCallback',
        value: function saveCallback(truthVal) {
            this.setState({ showModal: !truthVal });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var errmsg = [];
            //if (this.state.hasError)
            //   errmsg = <div>Error!</div>

            return _react2.default.createElement(
                'div',
                { style: { paddingBottom: 5 } },
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'default', onClick: this.open, block: true },
                    this.props.title
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.showModal, onHide: this.close },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            this.props.title
                        ),
                        errmsg
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        this.props.body
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.close },
                            'Close'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: 'primary',
                                onClick: function onClick() {
                                    return _this2.props.savefn(_this2.saveCallback);
                                } },
                            'Save'
                        )
                    )
                )
            );
        }
    }]);

    return ModalTemplate;
}(_react2.default.Component);

;

exports.default = ModalTemplate;

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

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(13);

var _lodash = __webpack_require__(107);

var _lodash2 = _interopRequireDefault(_lodash);

var _handsontable = __webpack_require__(71);

var _handsontable2 = _interopRequireDefault(_handsontable);

__webpack_require__(134);

var _highcharts = __webpack_require__(112);

var _highcharts2 = _interopRequireDefault(_highcharts);

__webpack_require__(135);

var _jquery = __webpack_require__(85);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var core = __webpack_require__(373);
var math = core.create();
math.import(__webpack_require__(432));
math.import(__webpack_require__(409));
math.import(__webpack_require__(390));

//HOT import


//Highcharts import

var IntensityViz = function (_React$Component) {
    _inherits(IntensityViz, _React$Component);

    function IntensityViz(props) {
        _classCallCheck(this, IntensityViz);

        var _this = _possibleConstructorReturn(this, (IntensityViz.__proto__ || Object.getPrototypeOf(IntensityViz)).call(this, props));

        _this.dataCallback = _this.dataCallback.bind(_this);
        _this.updateChart = _this.updateChart.bind(_this);
        return _this;
    }

    _createClass(IntensityViz, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.hot = new _handsontable2.default(this.hotDiv, {
                data: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
                rowHeaders: false,
                colHeaders: true,
                stretchH: 'all',
                preventOverflow: 'horizontal'
            });

            this.chart = _highcharts2.default.chart(this.highchart, {

                title: {
                    text: 'Fragment Abundance Map'
                },

                credits: {
                    enabled: false
                },

                yAxis: {
                    title: {
                        text: 'Normalized Abundance'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                series: [{
                    name: 'All ions',
                    color: '#1f77b4',
                    data: []
                }, {
                    name: 'N-terminal',
                    data: [],
                    color: '#ff7f0e',
                    visible: false
                }, {
                    name: 'C-terminal',
                    data: [],
                    color: '#2ca02c',
                    visible: false
                }]

            });
        }
    }, {
        key: 'dataCallback',
        value: function dataCallback(data) {
            this.hot.loadData(data.HOTdata);
            this.chart.update(data.HighchartsData);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            console.log(this.props.state.selectedMods);
            var apoMatrix = math.matrix(this.props.state.searchResult.apo);
            var dataMatrix = math.zeros(math.size(apoMatrix));
            var matrices_to_add = [];
            switch (this.props.state.activeKey) {
                case 1:
                    //all
                    matrices_to_add = this.props.state.selectedMods.map(function (m) {
                        return math.matrix(_this2.props.state.searchResult[m]);
                    });

                    matrices_to_add.forEach(function (m) {
                        return dataMatrix = math.add(dataMatrix, m);
                    });
                    dataMatrix = math.add(dataMatrix, apoMatrix);

                    break;
                case 2:
                    //apo
                    dataMatrix = apoMatrix;
                    break;

                case 3: //holo
                case 1:
                    //all
                    matrices_to_add = this.props.state.selectedMods.map(function (m) {
                        return math.matrix(_this2.props.state.searchResult[m]);
                    });

                    matrices_to_add.forEach(function (m) {
                        return dataMatrix = math.add(dataMatrix, m);
                    });

                    break;
            }

            var hcData = dataMatrix.valueOf();

            this.chart.update({

                xAxis: {
                    categories: this.props.state.searchResult['sequence'], title: { text: 'Residue' } },
                series: [{
                    name: 'All ions',
                    data: hcData[0]
                }, { name: 'N-terminal',
                    data: hcData[1]
                }, { name: 'C-terminal',
                    data: hcData[2]
                }]
            });

            var hotData = dataMatrix.valueOf();
            hotData = [this.props.state.searchResult.sequence].concat([_lodash2.default.range(1, this.props.state.searchResult.sequence.length + 1)]).concat(hotData);
            hotData = _lodash2.default.zip.apply(_lodash2.default, hotData);
            hotData = [this.props.state.searchResult.titles].concat(hotData);

            this.hot.loadData(hotData);
        }
    }, {
        key: 'updateChart',
        value: function updateChart(dataObject) {
            this.chart.update(dataObject);
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

    return IntensityViz;
}(_react2.default.Component);

;

exports.default = IntensityViz;

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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(39);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactBootstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModInput = function (_React$Component) {
    _inherits(ModInput, _React$Component);

    function ModInput() {
        _classCallCheck(this, ModInput);

        return _possibleConstructorReturn(this, (ModInput.__proto__ || Object.getPrototypeOf(ModInput)).apply(this, arguments));
    }

    _createClass(ModInput, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_reactSelect2.default.Creatable, {
                multi: true,
                options: this.props.state.modOptions,
                onChange: this.props.modsOnChange,
                value: this.props.state.mods,
                placeholder: 'input mass and press \'enter\''
            });
        }
    }]);

    return ModInput;
}(_react2.default.Component);

exports.default = ModInput;

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

/***/ 616:
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

var _jquery = __webpack_require__(85);

var _jquery2 = _interopRequireDefault(_jquery);

var _ModalTemplate = __webpack_require__(106);

var _ModalTemplate2 = _interopRequireDefault(_ModalTemplate);

var _ModInput = __webpack_require__(290);

var _ModInput2 = _interopRequireDefault(_ModInput);

var _PPMInput = __webpack_require__(29);

var _PPMInput2 = _interopRequireDefault(_PPMInput);

var _ToggleButtonContainer = __webpack_require__(31);

var _ToggleButtonContainer2 = _interopRequireDefault(_ToggleButtonContainer);

var _IntensityViz_highcharts = __webpack_require__(289);

var _IntensityViz_highcharts2 = _interopRequireDefault(_IntensityViz_highcharts);

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


var IntensityApp = function (_React$Component) {
    _inherits(IntensityApp, _React$Component);

    function IntensityApp(props) {
        _classCallCheck(this, IntensityApp);

        var _this = _possibleConstructorReturn(this, (IntensityApp.__proto__ || Object.getPrototypeOf(IntensityApp)).call(this, props));

        _this.state = {
            activeKey: 1,
            mydata: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],

            options: [],
            selectedMods: [],
            searchResult: { search_successful: false },
            disableSelection: false
        };

        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.onModSelect = _this.onModSelect.bind(_this);
        _this.runSearch = _this.runSearch.bind(_this);
        _this.runSearchCallback = _this.runSearchCallback.bind(_this);

        return _this;
    }

    _createClass(IntensityApp, [{
        key: 'runSearchCallback',
        value: function runSearchCallback(result, modOptions, removeDupes) {
            console.log(modOptions);
            var newState = (0, _immutabilityHelper2.default)(this.state, {
                searchResult: { $set: result },
                options: { $set: modOptions },
                selectedMods: { $set: removeDupes ? modOptions.map(function (k) {
                        return k.value;
                    }) : [] },
                disableSelection: { $set: removeDupes }
            });
            this.setState(newState);
        }
    }, {
        key: 'runSearch',
        value: function runSearch(state) {
            var _this2 = this;

            fetch('/runSearch', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state),
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this2.runSearchCallback(response.result, state.modOptions, state.removeDuplicates);
            });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(event) {
            var newState = (0, _immutabilityHelper2.default)(this.state, {
                activeKey: { $set: event }
            });
            this.setState(newState);
        }
    }, {
        key: 'onModSelect',
        value: function onModSelect(event) {
            var modlist = event.map(function (k) {
                return k.value;
            });
            var newState = (0, _immutabilityHelper2.default)(this.state, {
                selectedMods: { $set: modlist }
            });
            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AppNavbar2.default, { here: 'intensity' }),
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 12, md: 12 },
                            _react2.default.createElement(
                                _reactBootstrap.PanelGroup,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Well,
                                    null,
                                    _react2.default.createElement(ModalContainer, { runSearch: this.runSearch })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Well,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 9, md: 9 },
                                _react2.default.createElement(
                                    _reactBootstrap.Nav,
                                    { bsStyle: 'pills', justified: true,
                                        activeKey: this.state.activeKey,
                                        onSelect: this.handleSelect },
                                    _react2.default.createElement(
                                        _reactBootstrap.NavItem,
                                        { disabled: !this.state.searchResult['search_successful'], eventKey: 1 },
                                        'All Ions'
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.NavItem,
                                        { disabled: !this.state.searchResult['search_successful'], eventKey: 2 },
                                        _react2.default.createElement(
                                            'i',
                                            null,
                                            'apo'
                                        ),
                                        ' Ions'
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.NavItem,
                                        { disabled: !this.state.searchResult['search_successful'], eventKey: 3 },
                                        _react2.default.createElement(
                                            'i',
                                            null,
                                            'holo'
                                        ),
                                        ' Ions'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 3, md: 3 },
                                _react2.default.createElement(_reactSelect2.default, { multi: true, placeholder: 'Select modifications to include',
                                    value: this.state.selectedMods,
                                    options: this.state.options,
                                    disabled: this.state.disableSelection,
                                    onChange: this.onModSelect })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_IntensityViz_highcharts2.default, { state: this.state })
                    )
                )
            );
        }
    }]);

    return IntensityApp;
}(_react2.default.Component);

var ModalContainer = function (_React$Component2) {
    _inherits(ModalContainer, _React$Component2);

    function ModalContainer(props) {
        _classCallCheck(this, ModalContainer);

        var _this3 = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));

        _this3.state = {
            sequence: "",
            sequenceValidated: false,
            sequencePanelOpen: false,
            masslist: "",
            masslistValidated: false,
            masslistPanelOpen: false,
            tolValue: "10",
            tolType: "PPM",
            tic: "1",
            removeDuplicates: false,
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
            },
            mods: [],
            modOptions: []
        };
        _this3.onIonToggle = _this3.onIonToggle.bind(_this3);
        _this3.axtoggle = _this3.axtoggle.bind(_this3);
        _this3.bytoggle = _this3.bytoggle.bind(_this3);
        _this3.cztoggle = _this3.cztoggle.bind(_this3);
        _this3.onInputChange = _this3.onInputChange.bind(_this3);
        _this3.onDropDownChange = _this3.onDropDownChange.bind(_this3);
        _this3.modsOnChange = _this3.modsOnChange.bind(_this3);
        _this3.validateSeq = _this3.validateSeq.bind(_this3);
        _this3.validateSeqCallback = _this3.validateSeqCallback.bind(_this3);
        _this3.validateMasses = _this3.validateMasses.bind(_this3);
        _this3.validateMassesCallback = _this3.validateMassesCallback.bind(_this3);
        _this3.toggleSequencePanel = _this3.toggleSequencePanel.bind(_this3);
        _this3.toggleMasslistPanel = _this3.toggleMasslistPanel.bind(_this3);
        return _this3;
    }

    _createClass(ModalContainer, [{
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
            console.log(response.result);
            this.setState((0, _immutabilityHelper2.default)(this.state, { sequenceValidated: { $set: response },
                sequencePanelOpen: { $set: !response.result } }));
            if (response && this.state.masslistValidated) {
                console.log('running search...');
                this.props.runSearch(this.state);
            }
        }
    }, {
        key: 'validateMassesCallback',
        value: function validateMassesCallback(response) {
            console.log(response.result);
            this.setState((0, _immutabilityHelper2.default)(this.state, { masslistValidated: { $set: response },
                masslistPanelOpen: { $set: !response.result } }));
            if (response && this.state.sequenceValidated) {
                console.log('running search...');
                this.props.runSearch(this.state);
            }
        }
    }, {
        key: 'validateSeq',
        value: function validateSeq() {
            var _this4 = this;

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
                return _this4.validateSeqCallback(response);
            });
        }
    }, {
        key: 'validateMasses',
        value: function validateMasses() {
            var _this5 = this;

            fetch('/validateData', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state),
                dataType: 'json'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this5.validateMassesCallback(response);
            });
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(e) {
            var name = e.target.name;
            var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
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
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PanelTemplate2.default, { togglePanel: this.toggleMasslistPanel,
                        open: this.state.masslistPanelOpen,
                        vs: this.validateMasses,
                        title: 'Edit Mass List and Options',
                        body: massData })
                )
            );
        }
    }]);

    return ModalContainer;
}(_react2.default.Component);

var Sequence = function (_React$Component3) {
    _inherits(Sequence, _React$Component3);

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
                    'Enter amino acid sequence with parenthetical modifications, e.g. PEP(44.01)TIDE',
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

var MassData = function (_React$Component4) {
    _inherits(MassData, _React$Component4);

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
                        'Mass/Intensity list (tab-delimited):'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'masslist',
                        value: this.props.state.masslist,
                        componentClass: 'textarea',
                        style: { height: 335, resize: 'none' },
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
                            'TIC Intensity:'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { name: 'tic',
                            onChange: this.props.onInputChange,
                            value: this.props.state.tic })
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
                    ),
                    _react2.default.createElement(
                        'b',
                        null,
                        'Ligand Masses:'
                    ),
                    _react2.default.createElement(_ModInput2.default, { state: this.props.state, modsOnChange: this.props.modsOnChange }),
                    'Run in duplicate ion removal mode? ',
                    ' ',
                    _react2.default.createElement('input', { type: 'checkbox', name: 'removeDuplicates',
                        checked: this.props.state.removeDuplicates, onChange: this.props.onInputChange })
                )
            );
        }
    }]);

    return MassData;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(IntensityApp, null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = Handsontable;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

},[616]);