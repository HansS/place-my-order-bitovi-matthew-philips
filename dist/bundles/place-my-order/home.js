/*place-my-order@0.0.0#home.component/template*/
define('place-my-order@0.0.0#home.component/template', [
    'can/view/stache/stache',
    'can/component/component'
], function (stache) {
    return stache([
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
            'args': ['homepage']
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
                'img',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['src']
        },
        {
            'tokenType': 'special',
            'args': ['joinBase \'node_modules/place-my-order-assets/images/homepage-hero.jpg\'']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['src']
        },
        {
            'tokenType': 'attrStart',
            'args': ['width']
        },
        {
            'tokenType': 'attrValue',
            'args': ['250']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['width']
        },
        {
            'tokenType': 'attrStart',
            'args': ['height']
        },
        {
            'tokenType': 'attrValue',
            'args': ['380']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['height']
        },
        {
            'tokenType': 'end',
            'args': [
                'img',
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
                'h1',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Ordering food has never been easier']
        },
        {
            'tokenType': 'close',
            'args': ['h1']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
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
            'args': ['\n        We make it easier than ever to order gourmet food\n        from your favorite local restaurants.\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
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
            'tokenType': 'attrStart',
            'args': ['href']
        },
        {
            'tokenType': 'attrValue',
            'args': ['/restaurants']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['href']
        },
        {
            'tokenType': 'attrStart',
            'args': ['role']
        },
        {
            'tokenType': 'attrValue',
            'args': ['button']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['role']
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
            'args': ['Choose a Restaurant']
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
            'args': ['\n     ']
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
/*place-my-order@0.0.0#home.component!done-component@0.4.0#component*/
define('place-my-order@0.0.0#home.component!done-component@0.4.0#component', [
    'can/component/component',
    'place-my-order@0.0.0#home.component/template'
], function (Component, template) {
    var __interop = function (m) {
        if (m && m['default']) {
            return m['default'];
        } else if (m)
            return m;
    };
    var viewModel = __interop(typeof viewModel !== 'undefined' ? viewModel : undefined);
    var ComponentConstructor = Component.extend({
        tag: 'pmo-home',
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