;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module. 
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS 
        factory(require('jquery'));
    } else {
        // Browser globals 
        factory(window.jQuery);
    }
}(function ($) {

    var pluginName = "ktdChat",  // plugin name
        dataKey = "api-" + pluginName; // key using in $.data()

    // image SVG Default
    var avatarSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI3IDI0IDEwMCAxMDAiIGlkPSJ1bmtub3duIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNyAyNCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PHJlY3QgZmlsbD0iI0Y1RUVFNSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiIHg9Ii0yNyIgeT0iMjQiLz48Zz48ZGVmcz48cGF0aCBkPSJNMzYsOTUuOWMwLDQsNC43LDUuMiw3LjEsNS44YzcuNiwyLDIyLjgsNS45LDIyLjgsNS45YzMuMiwxLjEsNS43LDMuNSw3LjEsNi42djkuOEgtMjd2LTkuOCAgICAgICBjMS4zLTMuMSwzLjktNS41LDcuMS02LjZjMCwwLDE1LjItMy45LDIyLjgtNS45YzIuNC0wLjYsNy4xLTEuOCw3LjEtNS44YzAtNCwwLTEwLjksMC0xMC45aDI2QzM2LDg1LDM2LDkxLjksMzYsOTUuOXoiIGlkPSJzaG91bGRlcnMiLz48L2RlZnM+PHVzZSBmaWxsPSIjRTZDMTlDIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI3Nob3VsZGVycyIvPjxjbGlwUGF0aCBpZD0ic2hvdWxkZXJzXzFfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjc2hvdWxkZXJzIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjc2hvdWxkZXJzXzFfKSIgZD0iTTIzLjIsMzVjMC4xLDAsMC4xLDAsMC4yLDBjMCwwLDAsMCwwLDAgICAgICBjMy4zLDAsOC4yLDAuMiwxMS40LDJjMy4zLDEuOSw3LjMsNS42LDguNSwxMi4xYzIuNCwxMy43LTIuMSwzNS40LTYuMyw0Mi40Yy00LDYuNy05LjgsOS4yLTEzLjUsOS40YzAsMC0wLjEsMC0wLjEsMCAgICAgIGMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMSwwLTAuMSwwLTAuMiwwYzAsMC0wLjEsMC0wLjEsMGMtMy43LTAuMi05LjUtMi43LTEzLjUtOS40Yy00LjItNy04LjctMjguNy02LjMtNDIuNCAgICAgIGMxLjItNi41LDUuMi0xMC4yLDguNS0xMi4xYzMuMi0xLjgsOC4xLTIsMTEuNC0yYzAsMCwwLDAsMCwwQzIzLjEsMzUsMjMuMSwzNSwyMy4yLDM1TDIzLjIsMzV6IiBmaWxsPSIjRDRCMDhDIiBpZD0iaGVhZC1zaGFkb3ciLz48L2c+PC9nPjxwYXRoIGQ9Ik0yMi42LDQwYzE5LjEsMCwyMC43LDEzLjgsMjAuOCwxNS4xYzEuMSwxMS45LTMsMjguMS02LjgsMzMuN2MtNCw1LjktOS44LDguMS0xMy41LDguMyAgICBjLTAuMiwwLTAuMiwwLTAuMywwYy0wLjEsMC0wLjEsMC0wLjIsMEMxOC44LDk2LjgsMTMsOTQuNiw5LDg4LjdjLTMuOC01LjYtNy45LTIxLjgtNi44LTMzLjhDMi4zLDUzLjcsMy41LDQwLDIyLjYsNDB6IiBmaWxsPSIjRjJDRUE1IiBpZD0iaGVhZCIvPjwvZz48L3N2Zz4=";

    var actSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAwIDUwMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjUwLjQiIHI9IjIwNC43IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjQ3LjQiIGZpbGw9IiNGRkZGRkYiIHI9IjE4MS44IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjE0OC41IiBjeT0iMjQ3LjUiIHI9IjMxLjUiLz48Y2lyY2xlIGN4PSIyNTAuNSIgY3k9IjI1MC41IiByPSIzMS41Ii8+PGNpcmNsZSBjeD0iMzUxLjUiIGN5PSIyNDkuNSIgcj0iMzEuNSIvPjwvc3ZnPg==";

    // privateMethod here
    function isEmpty(value) {
        var temp = true;
        if (typeof (value) != "undefined" || value != null) {
            if (value.trim()) {
                temp = false;
            }
        }
        return temp;
    }

    function effectOn(el){
        el.animate({ value: 1 }, {
                step: function(now, fx) {
                    $(this).css({"transform": "scale("+ now +")", "opacity": now})
                },
                duration: 110,
                start: function(){
                    el.addClass('active');
                    $(this).css({"display": "block"})
                }
            })
    }

    function effectOff(el){
        el.animate({ value: 0 }, {
                step: function(now, fx) {
                    $(this).css({"transform": "scale("+ now +")", "opacity": now})
                },
                duration: 140,
                complete: function(){
                    $(this).css({"display": "none"});
                    el.removeClass('active');
                    $(this).stop(true, true); //stop toggle too much
                }
            });
    }

    function effectToggle(el){
        if (el.hasClass('active')) {
            effectOff(el);
        }
        else{
            effectOn(el);
        }
    };

    function renderList(data, insert) {
        var id = this.control;
        var ins = insert || 'append';
        var avatar = (data.avatar) ? data.avatar : opts.avatar;
        var name = (data.name) ? data.name : "";
        var media = (data.media) ? data.media : "";
        var temp = '<div class="ktd-media ktd-chat-pointer" data-box="' + data.id + '">\
                    <div class="ktd-media-img">\
                        <img src="'+ avatar + '">\
                    </div>\
                    <div class="ktd-media-body">\
                        <div class="ktd-media-title">\
                            <strong>'+ name + '</strong>\
                        </div>\
                        <div class="ktd-media-main">\
                            <span>'+ media + '</span>\
                        </div>\
                    </div>\
                </div>';
        $('#' + id).children('.ktd-chat-main')[ins](temp);
    }

    function renderMedia(id, data, position, insert) {
        if (!isEmpty(data.media)) {
            var pos = (position) ? ' ktd-m-' + position : '';
            var ins = insert || 'append';
            var avatar = (data.avatar) ? data.avatar : opts.avatar;
            var name = (data.name) ? data.name : "";
            var time, date = "";
            if (data.time) {
                var d = new Date(data.time);
                date = d.toLocaleString();
                time = d.toLocaleTimeString();
            }

            //var media = (data.media) ? data.media : "";
            var temp = '<div class="ktd-m' + pos + '" title="' + date + '">\
                            <div class="ktd-m-head">\
                                <strong class="ktd-m-name">'+ name + '</strong>\
                                <span class="ktd-m-time">'+ time + '</span>\
                            </div>\
                            <div class="ktd-m-body">'+ data.media + '</div>\
                        </div>';
            $('#' + id).find('.ktd-chat-content')[ins](temp);
        }
    }

    function renderAct(id, avatar) {
        var image = avatar || opts.avatar;
        var temp = '<span class="ktd-chat-tab">\
                        <img src="'+ image + '" />\
                    </div>';
        if ($('#' + id).find('.ktd-chat-atc .ktd-chat-tab').length == 0) {
            $('#' + id).children('.ktd-chat-atc').append(temp);
        }
    }

    function renderBox(id, type) {
        if (!id) {
            console.error("Error ! id is null.");
            return false;
        }
        if ($('#' + id).length == 0) {
            var box = $('<div class="ktd-chat-box active" id="' + id + '"><div class="ktd-chat-atc"></div><div class="ktd-chat-main active"></div></div>');
            var ktdChat = $root.find('.ktd-chat');
            box.appendTo(ktdChat);
            if (!type) {
                var temp = '<div class="ktd-chat-content"></div>\
                            <div class="ktd-m-footer">\
                                <textarea data-box="'+ id + '" class="ktd-m-editor" placeholder="' + opts.placeholder + '" rows="3"></textarea>\
                            </div>';
                box.children('.ktd-chat-main').addClass('ktd-chat-addon active').append(temp);
            }
        }
    }

    function renderChat(data, position, insert) {
        if (!isEmpty(data.id)) {
            renderBox(data.id);
            effectOn($('#' + data.id));
            renderAct(data.id, data.avatar);
            renderMedia(data.id, data, position, insert);
        }
        else {
            console.log('please! check data');
        }
    }

    function render() {
        var ktdChat = $('<div class="ktd-chat-wrap"><div class="ktd-chat"></div></div>');
        ktdChat.appendTo($root);
    }

    var opts = {
        owner: "không tên",
        avatar: avatarSVG,
        placeholder: 'nhập văn bản...',
        onChangeInput: null,
    };

    var Plugin = function (root, options) {
        this.root = root;
        $root = $(root);

        this.control = 'ktd-chat-control';
        // default options

        opts = $.extend(opts, options);
        
        /*
         * Initialization
         */
        this.init();
    };

    Plugin.prototype = {
        init: function () {
            render();
            renderBox(this.control, true);
            renderAct(this.control, actSVG);

            $(document).on('click', '.ktd-chat-tab', function (e) {
                var box = $(this).closest('.ktd-chat-box');
                var main = box.children('.ktd-chat-main');
                effectToggle(main);
            });

            $(document).on('click', '#ktd-chat-control .ktd-media', function (e) {
                var id = $(this).attr('data-box');
                var box = $('#' + id);
                if (box.length == 1) {
                    effectToggle(box);
                }
                else {
                    renderChat({ id: id })
                }
            });

            $(document).on('keypress', 'textarea[data-box]', function (e) {
                if (e.keyCode == 13 && !e.shiftKey) {
                    var text = $(this).val();
                    if (text.trim() != "") {
                        var d = new Date();
                        var data = {
                            name: opts.owner,
                            media: text,
                            time: d.getTime()
                        }
                        var id = $(this).attr('data-box');
                        renderMedia(id, data, 'right');

                        if (typeof (opts.onChangeInput) === "function") {
                            opts.onChangeInput.call(this, data);
                        }

                        $(this).val('');

                        var scrollEle = $('#' + id).find('.ktd-chat-content');
                        scrollEle.animate({ scrollTop: scrollEle[0].scrollHeight }, 200);

                    }

                    e.preventDefault();
                }
            })
        },
        
        chat: renderChat,
        listUser: renderList
        
    };

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
        
        return plugin;
    };

    

}));

/**
 * Chat box new 2017
 *
 * @copyright Copyright 2017 kimthiendung@gmail.com
 * @license   
 * @author    email kimthiendung@gmail.com
*/