/**
 * Created by Administrator on 2016/7/30.
 */

(function ($) {

    var privateFun = function () {
        
    }
    var PageSwitch = (function () {
        function PageSwitch(element, options) {
            this.settins = $.extend(true, $.fn.PageSwitch.default, options || {});

            this.element = element;
        }

        PageSwitch.prototype = {
            init: function () {

            }
        }
        return PageSwitch;
    })();
    $.fn.PageSwitch = function (options) {

        return this.each(function () {
            var me = $(this),
                instance = me.data("PageSwitch");
            if (!instance) {
                instance = new PageSwitch(me, options);
                me.data("PageSwitch", instance);
            }
            if ($.type(options) === "string")
                return instance[options]();
            $("div").PageSwitch("init");
        });
    };
    $.fn.PageSwitch.default = {
        selectors: {
            sections: ".sections",
            section: '.section',
            page: '.pages',
            action: '.action'
        },
        index: 0,
        easing: "ease",
        duration: "ease",
        loop: false,
        pagination: true,
        keyboard: true,
        direction: "vertical",
        callback: ''

    };

$(function () {
    $("[data-PageSwitch]").PageSwitch();
})();
}