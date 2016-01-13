/*place-my-order@0.0.0#order/list.component/template*/
define('place-my-order@0.0.0#order/list.component/template', [
    'can/view/stache/stache',
    'can/component/component'
], function (stache) {
    return stache([
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'tokenType': 'special',
            'args': ['listTitle']
        },
        {
            'tokenType': 'close',
            'args': ['h4']
        },
        {
            'tokenType': 'special',
            'args': ['#if orders.isPending']
        },
        {
            'tokenType': 'chars',
            'args': ['\n     ']
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
            'args': ['\n      ']
        },
        {
            'tokenType': 'special',
            'args': ['#each orders.value']
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
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order ']
        },
        {
            'tokenType': 'special',
            'args': ['status']
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
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'address',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'address',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
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
                'br',
                true
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'br',
                true
            ]
        },
        {
            'tokenType': 'special',
            'args': ['address']
        },
        {
            'tokenType': 'chars',
            'args': [' ']
        },
        {
            'tokenType': 'start',
            'args': [
                'br',
                true
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'br',
                true
            ]
        },
        {
            'tokenType': 'special',
            'args': ['phone']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'close',
            'args': ['address']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n        ']
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
            'args': ['items']
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
            'args': ['\n          ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
        },
        {
            'tokenType': 'special',
            'args': ['#each items']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['name']
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
            'args': ['\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n        ']
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
            'args': ['total']
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
            'args': ['$']
        },
        {
            'tokenType': 'special',
            'args': ['total']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n        ']
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
            'args': ['actions']
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
            'args': ['\n          ']
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
            'tokenType': 'special',
            'args': ['statusTitle']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'special',
            'args': ['#if action']
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
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
            'args': ['action']
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
            'args': ['\n              Mark as:\n              ']
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
            'args': ['markAs(action)']
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
            'args': ['                ']
        },
        {
            'tokenType': 'special',
            'args': ['actionTitle']
        },
        {
            'tokenType': 'chars',
            'args': ['\n              ']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n          ']
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
            'args': ['action']
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
            'args': ['\n            ']
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
            'args': ['destroy()']
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
            'args': ['Delete']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['      ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['order empty']
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
            'tokenType': 'special',
            'args': ['emptyMessage']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
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
/*place-my-order@0.0.0#order/list.component!done-component@0.4.0#component*/
define('place-my-order@0.0.0#order/list.component!done-component@0.4.0#component', [
    'can/component/component',
    'place-my-order@0.0.0#order/list.component/template'
], function (Component, template) {
    var __interop = function (m) {
        if (m && m['default']) {
            return m['default'];
        } else if (m)
            return m;
    };
    var viewModel = __interop(typeof viewModel !== 'undefined' ? viewModel : undefined);
    var ComponentConstructor = Component.extend({
        tag: 'pmo-order-list',
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
/*place-my-order@0.0.0#order/history.component/template*/
define('place-my-order@0.0.0#order/history.component/template', [
    'can/view/stache/stache',
    'can/component/component',
    'place-my-order/models/order',
    'place-my-order/order/list.component!'
], function (stache) {
    return stache([
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'args': ['place-my-order/models/order']
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
            'args': ['\n\n    ']
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
            'args': ['order-history']
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
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['order header']
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
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'address',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'address',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Name / Address / Phone']
        },
        {
            'tokenType': 'close',
            'args': ['address']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['items']
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
            'args': ['Order']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['total']
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
            'args': ['Total']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['actions']
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
            'args': ['Action']
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
            'args': ['place-my-order/order/list.component!']
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
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['getList']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{status=\'new\'}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['getList']
        },
        {
            'tokenType': 'end',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['.']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['New Orders']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status']
        },
        {
            'tokenType': 'attrValue',
            'args': ['new']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['New Order!']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action']
        },
        {
            'tokenType': 'attrValue',
            'args': ['preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['empty-message']
        },
        {
            'tokenType': 'attrValue',
            'args': ['No new orders']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['empty-message']
        },
        {
            'tokenType': 'end',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['order-model']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['getList']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{status=\'preparing\'}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['getList']
        },
        {
            'tokenType': 'end',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['.']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status']
        },
        {
            'tokenType': 'attrValue',
            'args': ['preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delivery']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Out for delivery']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['empty-message']
        },
        {
            'tokenType': 'attrValue',
            'args': ['No orders preparing']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['empty-message']
        },
        {
            'tokenType': 'end',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['order-model']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['getList']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{status=\'delivery\'}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['getList']
        },
        {
            'tokenType': 'end',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['.']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Out for delivery']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delivery']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Out for delivery']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action']
        },
        {
            'tokenType': 'attrStart',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['action-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['empty-message']
        },
        {
            'tokenType': 'attrValue',
            'args': ['No orders are being delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['empty-message']
        },
        {
            'tokenType': 'end',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['order-model']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['getList']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{status=\'delivered\'}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['getList']
        },
        {
            'tokenType': 'end',
            'args': [
                'order-model',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['.']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{orders}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['list-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status']
        },
        {
            'tokenType': 'attrStart',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Delivered']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['status-title']
        },
        {
            'tokenType': 'attrStart',
            'args': ['empty-message']
        },
        {
            'tokenType': 'attrValue',
            'args': ['No delivered orders']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['empty-message']
        },
        {
            'tokenType': 'end',
            'args': [
                'pmo-order-list',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['order-model']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
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
/*place-my-order@0.0.0#order/history.component!done-component@0.4.0#component*/
define('place-my-order@0.0.0#order/history.component!done-component@0.4.0#component', [
    'can/component/component',
    'place-my-order@0.0.0#order/history.component/template'
], function (Component, template) {
    var __interop = function (m) {
        if (m && m['default']) {
            return m['default'];
        } else if (m)
            return m;
    };
    var viewModel = __interop(typeof viewModel !== 'undefined' ? viewModel : undefined);
    var ComponentConstructor = Component.extend({
        tag: 'pmo-order-history',
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