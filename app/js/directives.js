angular.module('myApp.directives', [])
    .directive("fbLogin", function($rootScope) {
        return function(scope, iElement, iAttrs) {
            if (FB) {
                FB.XFBML.parse(iElement[0]);
            }
        };
    })
    .directive('setHtmlClass', function(){
        return function(scope, element, attrs){
            if (attrs.isClear === 'true') {
                $('html').removeClass(attrs.className);
            } else {
                $('html').addClass(attrs.className);
            }

        }
    })
;