'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactivebase = require('@appbaseio/reactivebase');

var _app = require('../app.js');

var _Img = require('./Img.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var historyPin = require('./placeholder.svg');

var DataSearchDefault = function (_Component) {
	_inherits(DataSearchDefault, _Component);

	function DataSearchDefault(props) {
		_classCallCheck(this, DataSearchDefault);

		var _this = _possibleConstructorReturn(this, (DataSearchDefault.__proto__ || Object.getPrototypeOf(DataSearchDefault)).call(this, props));

		_this.onPopoverTrigger = _this.onPopoverTrigger.bind(_this);
		return _this;
	}

	_createClass(DataSearchDefault, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_reactivebase.AppbaseSensorHelper.ResponsiveStory();
		}
	}, {
		key: 'onPopoverTrigger',
		value: function onPopoverTrigger(marker) {
			return _react2.default.createElement(
				'div',
				{ className: 'popoverComponent row', style: { 'margin': '0', 'maxWidth': '300px' } },
				_react2.default.createElement(
					'span',
					{ className: 'imgContainer col s2', style: { 'padding': '0' } },
					_react2.default.createElement(_Img.Img, { src: marker._source.member.photo })
				),
				_react2.default.createElement(
					'div',
					{ className: 'infoContainer col s10' },
					_react2.default.createElement(
						'div',
						{ className: 'nameContainer' },
						_react2.default.createElement(
							'strong',
							null,
							marker._source.member.member_name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'description' },
						_react2.default.createElement(
							'p',
							{ style: { 'margin': '5px 0', 'lineHeight': '18px' } },
							'is going to\xA0',
							_react2.default.createElement(
								'a',
								{ href: marker._source.event.event_url, target: '_blank' },
								marker._source.event.event_name
							)
						)
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactivebase.ReactiveBase,
				{
					app: 'reactivemap_demo',
					username: 'y4pVxY2Ok',
					password: 'c92481e2-c07f-4473-8326-082919282c18',
					type: 'meetupdata1'
				},
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col s6 col-xs-6' },
						_react2.default.createElement(_reactivebase.DataSearch, _extends({
							appbaseField: this.props.mapping.venue,
							componentId: 'VenueSensor',
							placeholder: 'Search Venue'
						}, this.props))
					),
					_react2.default.createElement(
						'div',
						{ className: 'col s6 col-xs-6' },
						_react2.default.createElement(_app.ReactiveMap, {
							appbaseField: this.props.mapping.location,
							historicalData: true,
							setMarkerCluster: false,
							defaultMapStyle: 'Light Monochrome',
							autoCenter: true,
							searchAsMoveComponent: true,
							MapStylesComponent: true,
							title: 'Reactive Maps',
							showPopoverOn: 'click',
							historicPin: historyPin,
							onPopoverTrigger: this.onPopoverTrigger,
							defaultZoom: 13,
							defaultCenter: { lat: 37.74, lng: -122.45 },
							actuate: {
								VenueSensor: { "operation": "must" }
							}
						})
					)
				)
			);
		}
	}]);

	return DataSearchDefault;
}(_react.Component);

exports.default = DataSearchDefault;


DataSearchDefault.defaultProps = {
	mapping: {
		venue: 'venue_name_ngrams',
		location: 'location'
	}
};