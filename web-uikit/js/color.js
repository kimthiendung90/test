/**
 * Chat box new 2017
 *
 * @copyright Copyright 2017 kimthiendung@gmail.com
 * @license   
 * @author    email kimthiendung@gmail.com
*/
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
    
    var avatarSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI3IDI0IDEwMCAxMDAiIGlkPSJ1bmtub3duIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNyAyNCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PHJlY3QgZmlsbD0iI0Y1RUVFNSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiIHg9Ii0yNyIgeT0iMjQiLz48Zz48ZGVmcz48cGF0aCBkPSJNMzYsOTUuOWMwLDQsNC43LDUuMiw3LjEsNS44YzcuNiwyLDIyLjgsNS45LDIyLjgsNS45YzMuMiwxLjEsNS43LDMuNSw3LjEsNi42djkuOEgtMjd2LTkuOCAgICAgICBjMS4zLTMuMSwzLjktNS41LDcuMS02LjZjMCwwLDE1LjItMy45LDIyLjgtNS45YzIuNC0wLjYsNy4xLTEuOCw3LjEtNS44YzAtNCwwLTEwLjksMC0xMC45aDI2QzM2LDg1LDM2LDkxLjksMzYsOTUuOXoiIGlkPSJzaG91bGRlcnMiLz48L2RlZnM+PHVzZSBmaWxsPSIjRTZDMTlDIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI3Nob3VsZGVycyIvPjxjbGlwUGF0aCBpZD0ic2hvdWxkZXJzXzFfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjc2hvdWxkZXJzIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjc2hvdWxkZXJzXzFfKSIgZD0iTTIzLjIsMzVjMC4xLDAsMC4xLDAsMC4yLDBjMCwwLDAsMCwwLDAgICAgICBjMy4zLDAsOC4yLDAuMiwxMS40LDJjMy4zLDEuOSw3LjMsNS42LDguNSwxMi4xYzIuNCwxMy43LTIuMSwzNS40LTYuMyw0Mi40Yy00LDYuNy05LjgsOS4yLTEzLjUsOS40YzAsMC0wLjEsMC0wLjEsMCAgICAgIGMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMSwwLTAuMSwwLTAuMiwwYzAsMC0wLjEsMC0wLjEsMGMtMy43LTAuMi05LjUtMi43LTEzLjUtOS40Yy00LjItNy04LjctMjguNy02LjMtNDIuNCAgICAgIGMxLjItNi41LDUuMi0xMC4yLDguNS0xMi4xYzMuMi0xLjgsOC4xLTIsMTEuNC0yYzAsMCwwLDAsMCwwQzIzLjEsMzUsMjMuMSwzNSwyMy4yLDM1TDIzLjIsMzV6IiBmaWxsPSIjRDRCMDhDIiBpZD0iaGVhZC1zaGFkb3ciLz48L2c+PC9nPjxwYXRoIGQ9Ik0yMi42LDQwYzE5LjEsMCwyMC43LDEzLjgsMjAuOCwxNS4xYzEuMSwxMS45LTMsMjguMS02LjgsMzMuN2MtNCw1LjktOS44LDguMS0xMy41LDguMyAgICBjLTAuMiwwLTAuMiwwLTAuMywwYy0wLjEsMC0wLjEsMC0wLjIsMEMxOC44LDk2LjgsMTMsOTQuNiw5LDg4LjdjLTMuOC01LjYtNy45LTIxLjgtNi44LTMzLjhDMi4zLDUzLjcsMy41LDQwLDIyLjYsNDB6IiBmaWxsPSIjRjJDRUE1IiBpZD0iaGVhZCIvPjwvZz48L3N2Zz4=";

    var menuSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAwIDUwMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjUwLjQiIHI9IjIwNC43IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjQ3LjQiIGZpbGw9IiNGRkZGRkYiIHI9IjE4MS44IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjE0OC41IiBjeT0iMjQ3LjUiIHI9IjMxLjUiLz48Y2lyY2xlIGN4PSIyNTAuNSIgY3k9IjI1MC41IiByPSIzMS41Ii8+PGNpcmNsZSBjeD0iMzUxLjUiIGN5PSIyNDkuNSIgcj0iMzEuNSIvPjwvc3ZnPg==";

    var count = 0;
    var Plugin = function (root, options) {
        count++;
        this.root = root;
        $root = $(root);

        var defaults = {
            owner: "không tên",
            avatar: avatarSVG,
            placeholder: 'nhập văn bản...',
            controlId: 'ktd-chat-control-' + count,
            onChangeInput: null,
        };

        // extends config
        this.opts = $.extend({}, defaults, options);

        // init modal
        this.init();
    }

    Plugin.prototype.init = function() {

        //build
        render.call(this);
        renderMore.call(this);

        _bindEvents.call(this);

    };

    Plugin.prototype.chat = renderChat;

    Plugin.prototype.listUser = renderList;

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

    function _bindEvents(){
        var that = this;

        $(document).on('click', '.ktd-menu .ktd-face', function (e) {
            var box = $(this).closest('.ktd-more');
            var main = box.children('.ktd-list');
            effectToggle(main);
        });

        $(document).on('click', '.ktd-chat-tab', function (e) {
            var box = $(this).closest('.ktd-chat-box');
            var main = box.children('.ktd-chat-main');
            effectToggle(main);
        });

        $(document).on('click', '#ktd-chat-control .ktd-media', function (e) {
            var id = $(this).attr('data-box');
            var box = $root.find('#' + id);
            if (box.length == 1) {
                effectToggle(box);
            }
            else {
                renderChat.call(this, { id: id })
            }
        });

        $(document).on('keypress', 'textarea[data-box]', function (e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                var text = $(this).val();
                if (text.trim() != "") {
                    var id = $(this).attr('data-box');

                    var d = new Date();
                    var data = {
                        id: id,
                        username: that.opts.owner,
                        media: text,
                        time: d.getTime()
                    }

                    renderMedia.call(that, id, data, 'right');
                    
                    $(document).trigger("chat::send", [data] );
                    
                    $(this).val('');

                    var scrollEle = $root.find('#' + id).find('.ktd-chat-content');
                    scrollEle.animate({ scrollTop: scrollEle[0].scrollHeight }, 200);

                }

                e.preventDefault();
            }
        })
    }

    function render() {
        var ktdChat = $('<div class="ktd-chat-wrap"><div class="ktd-chat"></div></div>');
        ktdChat.appendTo($root);
    }

    function renderMore(){
        var temp = '<div class="ktd-more">\
                            <div class="ktd-list" style="display: none;"><div class="spinner"></div></div>\
                            <div class="ktd-menu">\
                                <div class="ktd-avatar">\
                                    <span class="ktd-face">\
                                        <img src="'+menuSVG+'" />\
                                    </span>\
                                </div>\
                            </div>\
                    </div>';
            
        var ktdMore = $(temp);
        $root.find('.ktd-chat-wrap').append(ktdMore);
    }

    function renderBox(id, type) {
        if (!id) {
            console.error("Error ! id is null.");
            return false;
        }
        if ($root.find('#' + id).length == 0) {
            var box = $('<div class="ktd-chat-box active" id="' + id + '"><div class="ktd-chat-tab"></div><div class="ktd-chat-main active"></div></div>');
            var ktdChat = $root.find('.ktd-chat');
            box.appendTo(ktdChat);
            if (!type) {
                var temp = '<div class="ktd-chat-content"></div>\
                            <div class="ktd-m-footer">\
                                <textarea data-box="'+ id + '" class="ktd-m-editor" placeholder="' + this.opts.placeholder + '" rows="3"></textarea>\
                            </div>';
                box.children('.ktd-chat-main').addClass('ktd-chat-addon active').append(temp);
            }
        }
    }

    function renderList(data, insert) {
        var list = $root.find('.ktd-more .ktd-list');
        if(list.find('.spinner').length != 0){
            list.find('.spinner').remove();
        }
        var ins = insert || 'append';
        var avatar = (data.avatar) ? data.avatar : this.opts.avatar;
        var username = (data.username) ? data.username : "";
        var media = (data.media) ? data.media : "";
                
        var temp = '<div class="ktd-avatar" title="'+username +" - "+ media +'" data-box="' + data.id + '">\
                        <span class="ktd-face">\
                            <img src="'+ avatar + '" />\
                        </span>\
                        <span class="ktd-status"></span>\
                    </div>';
        list[ins](temp);
    }

    function renderChat(data, position, insert) {
        if (!isEmpty(data.id)) {
            renderBox.call(this, data.id);
            renderTab.call(this, data.id, data.avatar);
            renderMedia.call(this, data.id, data, position, insert);
            
            effectOn($('#' + data.id));
        }
        else {
            console.log('please! check data');
        }
    }

    function renderTab(id, avatar) {
        var image = avatar || this.opts.avatar;
        var temp = '<div class="ktd-avatar">\
                        <span class="ktd-face">\
                            <img src="'+image+'" /></span>\
                        <span class="ktd-status"></span>\
                        <span class="ktd-new"></span>\
                    </div>';
        if ($root.find('#' + id).find('.ktd-chat-tab .ktd-chat-avatar').length == 0) {
            $root.find('#' + id).children('.ktd-chat-tab').append(temp);
        }
    }

    function renderMedia(id, data, position, insert) {
        if (!isEmpty(data.media)) {
            var pos = (position) ? ' ktd-m-' + position : '';
            var ins = insert || 'append';
            var avatar = (data.avatar) ? data.avatar : this.opts.avatar;
            var username = (position != 'right' && data.username) ? data.username : '';
            var name = (data.username) ? data.username + ' - ' : '';
            var date,time = '';
            if (data.time) {
                var d = new Date(data.time);
                date = d.toLocaleString();
            }

            //var media = (data.media) ? data.media : "";
            var temp = '<div class="ktd-m' + pos + '" title="' + name + date + '">\
                            <div class="ktd-m-head">\
                                <strong class="ktd-m-name">'+ username + '</strong>\
                            </div>\
                            <div class="ktd-m-body">'+ data.media + '</div>\
                        </div>';
            $root.find('#' + id).find('.ktd-chat-content')[ins](temp);
        }
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
