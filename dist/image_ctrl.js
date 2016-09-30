'use strict';

System.register(['lodash', 'app/plugins/sdk', 'app/features/dashboard/impression_store', 'app/core/config', './css/image.css!'], function (_export, _context) {
    "use strict";

    var _, PanelCtrl, impressions, config, ImageCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_lodash) {
            _ = _lodash.default;
        }, function (_appPluginsSdk) {
            PanelCtrl = _appPluginsSdk.PanelCtrl;
        }, function (_appFeaturesDashboardImpression_store) {
            impressions = _appFeaturesDashboardImpression_store.impressions;
        }, function (_appCoreConfig) {
            config = _appCoreConfig.default;
        }, function (_cssImageCss) {}],
        execute: function () {
            _export('ImageCtrl', ImageCtrl = function (_PanelCtrl) {
                _inherits(ImageCtrl, _PanelCtrl);

                function ImageCtrl($scope, $injector, backendSrv) {
                    _classCallCheck(this, ImageCtrl);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCtrl).call(this, $scope, $injector));
                }

                return ImageCtrl;
            }(PanelCtrl));

            _export('ImageCtrl', ImageCtrl);

            ImageCtrl.templateUrl = 'module.html';
        }
    };
});
//# sourceMappingURL=image_ctrl.js.map
