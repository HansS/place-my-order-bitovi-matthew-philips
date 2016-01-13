/*bit-tabs@0.2.0#util*/
define('bit-tabs@0.2.0#util', function (require, exports, module) {
    module.exports = { name: 'util' };
});
/*bit-tabs@0.2.0#tabs.stache!can@2.3.9#view/stache/system*/
define('bit-tabs@0.2.0#tabs.stache!can@2.3.9#view/stache/system', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'special',
            'args': ['tabsClass']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#panels']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#isActive']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['active']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'special',
            'args': ['/isActive']
        },
        {
            'tokenType': 'attrStart',
            'args': ['can-click']
        },
        {
            'tokenType': 'attrValue',
            'args': ['makeActive']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['can-click']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['href']
        },
        {
            'tokenType': 'attrValue',
            'args': ['javascript://']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['href']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['title']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'special',
            'args': ['/panels']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['content']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*bit-tabs@0.2.0#panel.stache!can@2.3.9#view/stache/system*/
define('bit-tabs@0.2.0#panel.stache!can@2.3.9#view/stache/system', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'special',
            'args': ['#if active']
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['content']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*bit-tabs@0.2.0#unstyled*/
define('bit-tabs@0.2.0#unstyled', [
    'exports',
    'can',
    'can/view/stache/',
    './util',
    './tabs.stache!',
    './panel.stache!'
], function (exports, _can, _canViewStache, _util, _tabsStache, _panelStache) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _stache = _interopRequireDefault(_canViewStache);
    var _util2 = _interopRequireDefault(_util);
    var _tabsStache2 = _interopRequireDefault(_tabsStache);
    var _panelStache2 = _interopRequireDefault(_panelStache);
    var BitPanelVM = _can2['default'].Map.extend({ active: false });
    exports.BitPanelVM = BitPanelVM;
    _can2['default'].Component.extend({
        tag: 'bit-panel',
        template: _panelStache2['default'],
        scope: BitPanelVM,
        events: {
            inserted: function inserted() {
                this.element.parent().scope().addPanel(this.scope);
            },
            removed: function removed() {
                this.element.parent().scope().removePanel(this.scope);
            }
        }
    });
    var BitTabsVM = _can2['default'].Map.extend({
        panels: [],
        tabsClass: '',
        addPanel: function addPanel(panel) {
            if (this.attr('panels').length === 0) {
                this.makeActive(panel);
            }
            this.attr('panels').push(panel);
        },
        removePanel: function removePanel(panel) {
            var panels = this.attr('panels');
            _can2['default'].batch.start();
            panels.splice(panels.indexOf(panel), 1);
            if (panel === this.attr('active')) {
                if (panels.length) {
                    this.makeActive(panels[0]);
                } else {
                    this.removeAttr('active');
                }
            }
            _can2['default'].batch.stop();
        },
        makeActive: function makeActive(panel) {
            this.attr('active', panel);
            this.attr('panels').each(function (panel) {
                panel.attr('active', false);
            });
            panel.attr('active', true);
        },
        isActive: function isActive(panel) {
            return this.attr('active') === panel;
        }
    });
    exports.BitTabsVM = BitTabsVM;
    _can2['default'].Component.extend({
        tag: 'bit-tabs',
        template: _tabsStache2['default'],
        scope: BitTabsVM
    });
});
/*place-my-order@0.0.0#order/details.component/template*/
define('place-my-order@0.0.0#order/details.component/template', [
    'can/view/stache/stache',
    'can/component/component'
], function (stache) {
    return stache([
        {
            'tokenType': 'special',
            'args': ['#order']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'h3',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h3',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Thanks for your order ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'chars',
            'args': ['!']
        },
        {
            'tokenType': 'close',
            'args': ['h3']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        Confirmation Number: ']
        },
        {
            'tokenType': 'special',
            'args': ['_id']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'h4',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h4',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Items ordered:']
        },
        {
            'tokenType': 'close',
            'args': ['h4']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group panel']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each items']
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group-item']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n              ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'chars',
            'args': [' ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['badge']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['$']
        },
        {
            'tokenType': 'special',
            'args': ['price']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group-item']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n            Total ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['badge']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['$']
        },
        {
            'tokenType': 'special',
            'args': ['total']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        Phone: ']
        },
        {
            'tokenType': 'special',
            'args': ['phone']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        Address: ']
        },
        {
            'tokenType': 'special',
            'args': ['address']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'special',
            'args': ['/order']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
});
/*place-my-order@0.0.0#order/details.component!done-component@0.4.0#component*/
define('place-my-order@0.0.0#order/details.component!done-component@0.4.0#component', [
    'can/component/component',
    'place-my-order@0.0.0#order/details.component/template'
], function (Component, template) {
    var __interop = function (m) {
        if (m && m['default']) {
            return m['default'];
        } else if (m)
            return m;
    };
    var viewModel = __interop(typeof viewModel !== 'undefined' ? viewModel : undefined);
    var ComponentConstructor = Component.extend({
        tag: 'pmo-order-details',
        template: __interop(typeof template !== 'undefined' ? template : undefined),
        viewModel: viewModel,
        events: __interop(typeof events !== 'undefined' ? events : undefined),
        helpers: __interop(typeof helpers !== 'undefined' ? helpers : undefined)
    });
    return {
        Component: ComponentConstructor,
        ViewModel: ComponentConstructor.Map,
        viewModel: viewModel
    };
});
/*place-my-order@0.0.0#order/new/new.stache!can@2.3.9#view/stache/system*/
define('place-my-order@0.0.0#order/new/new.stache!can@2.3.9#view/stache/system', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core',
    'bit-tabs/unstyled',
    'place-my-order/order/details.component!'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'can-import',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['from']
        },
        {
            'tokenType': 'attrValue',
            'args': ['bit-tabs/unstyled']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['from']
        },
        {
            'tokenType': 'end',
            'args': [
                'can-import',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'can-import',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['from']
        },
        {
            'tokenType': 'attrValue',
            'args': ['place-my-order/order/details.component!']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['from']
        },
        {
            'tokenType': 'end',
            'args': [
                'can-import',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n\r\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order-form']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'restaurant-model',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['get']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{ _id=slug }']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['get']
        },
        {
            'tokenType': 'end',
            'args': [
                'restaurant-model',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#if isPending']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['loading']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['    ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n      ']
        },
        {
            'tokenType': 'special',
            'args': ['#value']
        },
        {
            'tokenType': 'special',
            'args': ['#if saveStatus.isResolved']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'pmo-order-details',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['order']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{saveStatus.value}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['order']
        },
        {
            'tokenType': 'end',
            'args': [
                'pmo-order-details',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['pmo-order-details']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['href']
        },
        {
            'tokenType': 'attrValue',
            'args': ['javascript://']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['href']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($click)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['startNewOrder']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($click)']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            Place another order\r\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['        ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'h3',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h3',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Order from ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'close',
            'args': ['h3']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n\r\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'form',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['($submit)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['placeOrder']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($submit)']
        },
        {
            'tokenType': 'end',
            'args': [
                'form',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'bit-tabs',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['tabs-class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['nav nav-tabs']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['tabs-class']
        },
        {
            'tokenType': 'end',
            'args': [
                'bit-tabs',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['info ']
        },
        {
            'tokenType': 'special',
            'args': ['^if order.items.length']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text-error']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text-success']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['^if order.items.length']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                  Please choose an item                ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                  ']
        },
        {
            'tokenType': 'special',
            'args': ['order.items.length']
        },
        {
            'tokenType': 'chars',
            'args': [' selected']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'bit-panel',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Lunch menu']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['title']
        },
        {
            'tokenType': 'end',
            'args': [
                'bit-panel',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each menu.lunch']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group-item']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['checkbox']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order.items.toggle(.)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($change)']
        },
        {
            'tokenType': 'special',
            'args': ['#if order.items.has(.)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['checked']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['checked']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                        ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'chars',
            'args': [' ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['badge']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['$']
        },
        {
            'tokenType': 'special',
            'args': ['price']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                      ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                    ']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'close',
            'args': ['bit-panel']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'bit-panel',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Dinner menu']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['title']
        },
        {
            'tokenType': 'end',
            'args': [
                'bit-panel',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each menu.dinner']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['list-group-item']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['checkbox']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order.items.toggle(this)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($change)']
        },
        {
            'tokenType': 'special',
            'args': ['#if order.items.has(.)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['checked']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['checked']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                        ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'chars',
            'args': [' ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['badge']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['$']
        },
        {
            'tokenType': 'special',
            'args': ['price']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                      ']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                    ']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'close',
            'args': ['bit-panel']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['bit-tabs']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n\r\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Name:']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['name']
        },
        {
            'tokenType': 'attrValue',
            'args': ['name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['name']
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order.name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Please enter your name.']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Address:']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['name']
        },
        {
            'tokenType': 'attrValue',
            'args': ['address']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['name']
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order.address']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['help-text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Please enter your address.']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['control-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Phone:']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['name']
        },
        {
            'tokenType': 'attrValue',
            'args': ['phone']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['name']
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order.phone']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['help-text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Please enter your phone number.']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['submit']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n              ']
        },
        {
            'tokenType': 'start',
            'args': [
                'h4',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h4',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Total: $']
        },
        {
            'tokenType': 'special',
            'args': ['order.total']
        },
        {
            'tokenType': 'close',
            'args': ['h4']
        },
        {
            'tokenType': 'special',
            'args': ['#if saveStatus.isPending']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['loading']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['              ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'button',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['submit']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'special',
            'args': ['^if canPlaceOrder']
        },
        {
            'tokenType': 'attrStart',
            'args': ['disabled']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['disabled']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['btn']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n                  Place My Order!\r\n                ']
        },
        {
            'tokenType': 'close',
            'args': ['button']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['form']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n      ']
        },
        {
            'tokenType': 'special',
            'args': ['/value']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n  ']
        },
        {
            'tokenType': 'close',
            'args': ['restaurant-model']
        },
        {
            'tokenType': 'chars',
            'args': ['\r\n']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*place-my-order@0.0.0#order/new/new*/
define('place-my-order@0.0.0#order/new/new', [
    'exports',
    'can/component/component',
    'can/map/',
    'can/map/define/',
    './new.stache!',
    'place-my-order/models/restaurant',
    'place-my-order/models/order'
], function (exports, _canComponentComponent, _canMap, _canMapDefine, _newStache, _placeMyOrderModelsRestaurant, _placeMyOrderModelsOrder) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _Component = _interopRequireDefault(_canComponentComponent);
    var _Map = _interopRequireDefault(_canMap);
    var _template = _interopRequireDefault(_newStache);
    var _Restaurant = _interopRequireDefault(_placeMyOrderModelsRestaurant);
    var _Order = _interopRequireDefault(_placeMyOrderModelsOrder);
    var ViewModel = _Map['default'].extend({
        define: {
            slug: { type: 'string' },
            order: { Value: _Order['default'] },
            saveStatus: { Value: Object },
            canPlaceOrder: {
                get: function get() {
                    var items = this.attr('order.items');
                    return items.attr('length');
                }
            }
        },
        placeOrder: function placeOrder() {
            var order = this.attr('order');
            order.attr('restaurant', this.attr('restaurant._id'));
            this.attr('saveStatus', order.save());
            return false;
        },
        startNewOrder: function startNewOrder() {
            this.attr('order', new _Order['default']());
            this.attr('saveStatus', null);
            return false;
        }
    });
    exports.ViewModel = ViewModel;
    exports['default'] = _Component['default'].extend({
        tag: 'pmo-order-new',
        viewModel: ViewModel,
        template: _template['default']
    });
});