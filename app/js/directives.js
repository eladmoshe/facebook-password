angular.module('myApp.directives', [])
    .directive("fbLogin", function($rootScope) {
        return function(scope, iElement, iAttrs) {
            console.log(FB);
            if (FB) {
                FB.XFBML.parse();
            }
        };
    })
    .directive('setHtmlClass', function() {
        return function(scope, element, attrs) {
            if (attrs.isClear === 'true') {
                $('html').removeClass(attrs.className);
            } else {
                $('html').addClass(attrs.className);
            }
        }
    })
    .directive('keyboardFlash', function() {
        return function(scope, element, attrs) {
            var body = $('body');
            body.keydown(function() {
                $('html').addClass(attrs.className);
            });
            body.keyup(function() {
                $('html').removeClass(attrs.className);
            });
            element.bind('$destroy', function() {
                body.unbind('keydown');
            });
        }
    })
;