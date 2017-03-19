/**
 * Chat box new 2017
 *
 * @copyright Copyright 2017 kimthiendung@gmail.com
 * @license   
 * @author    email kimthiendung@gmail.com
*/
;(function($, document, window, undefined) {
    "use strict";

    var avatarSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI3IDI0IDEwMCAxMDAiIGlkPSJ1bmtub3duIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNyAyNCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PHJlY3QgZmlsbD0iI0Y1RUVFNSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiIHg9Ii0yNyIgeT0iMjQiLz48Zz48ZGVmcz48cGF0aCBkPSJNMzYsOTUuOWMwLDQsNC43LDUuMiw3LjEsNS44YzcuNiwyLDIyLjgsNS45LDIyLjgsNS45YzMuMiwxLjEsNS43LDMuNSw3LjEsNi42djkuOEgtMjd2LTkuOCAgICAgICBjMS4zLTMuMSwzLjktNS41LDcuMS02LjZjMCwwLDE1LjItMy45LDIyLjgtNS45YzIuNC0wLjYsNy4xLTEuOCw3LjEtNS44YzAtNCwwLTEwLjksMC0xMC45aDI2QzM2LDg1LDM2LDkxLjksMzYsOTUuOXoiIGlkPSJzaG91bGRlcnMiLz48L2RlZnM+PHVzZSBmaWxsPSIjRTZDMTlDIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI3Nob3VsZGVycyIvPjxjbGlwUGF0aCBpZD0ic2hvdWxkZXJzXzFfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjc2hvdWxkZXJzIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjc2hvdWxkZXJzXzFfKSIgZD0iTTIzLjIsMzVjMC4xLDAsMC4xLDAsMC4yLDBjMCwwLDAsMCwwLDAgICAgICBjMy4zLDAsOC4yLDAuMiwxMS40LDJjMy4zLDEuOSw3LjMsNS42LDguNSwxMi4xYzIuNCwxMy43LTIuMSwzNS40LTYuMyw0Mi40Yy00LDYuNy05LjgsOS4yLTEzLjUsOS40YzAsMC0wLjEsMC0wLjEsMCAgICAgIGMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMSwwLTAuMSwwLTAuMiwwYzAsMC0wLjEsMC0wLjEsMGMtMy43LTAuMi05LjUtMi43LTEzLjUtOS40Yy00LjItNy04LjctMjguNy02LjMtNDIuNCAgICAgIGMxLjItNi41LDUuMi0xMC4yLDguNS0xMi4xYzMuMi0xLjgsOC4xLTIsMTEuNC0yYzAsMCwwLDAsMCwwQzIzLjEsMzUsMjMuMSwzNSwyMy4yLDM1TDIzLjIsMzV6IiBmaWxsPSIjRDRCMDhDIiBpZD0iaGVhZC1zaGFkb3ciLz48L2c+PC9nPjxwYXRoIGQ9Ik0yMi42LDQwYzE5LjEsMCwyMC43LDEzLjgsMjAuOCwxNS4xYzEuMSwxMS45LTMsMjguMS02LjgsMzMuN2MtNCw1LjktOS44LDguMS0xMy41LDguMyAgICBjLTAuMiwwLTAuMiwwLTAuMywwYy0wLjEsMC0wLjEsMC0wLjIsMEMxOC44LDk2LjgsMTMsOTQuNiw5LDg4LjdjLTMuOC01LjYtNy45LTIxLjgtNi44LTMzLjhDMi4zLDUzLjcsMy41LDQwLDIyLjYsNDB6IiBmaWxsPSIjRjJDRUE1IiBpZD0iaGVhZCIvPjwvZz48L3N2Zz4=";

    var actSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAwIDUwMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjUwLjQiIHI9IjIwNC43IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjI0OS45IiBjeT0iMjQ3LjQiIGZpbGw9IiNGRkZGRkYiIHI9IjE4MS44IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjE0OC41IiBjeT0iMjQ3LjUiIHI9IjMxLjUiLz48Y2lyY2xlIGN4PSIyNTAuNSIgY3k9IjI1MC41IiByPSIzMS41Ii8+PGNpcmNsZSBjeD0iMzUxLjUiIGN5PSIyNDkuNSIgcj0iMzEuNSIvPjwvc3ZnPg==";

    var ktdChat = function(chatWrap, options) {
        var control = 'ktd-chat-control';

        var defaults = {
            owner: "không tên",
            avatar: avatarSVG,
            placeholder: 'nhập văn bản...',
            onInitBefore: null,
            onInitAfter: null,
        };

        options = $.extend(defaults, options);

        function aaa(value) {
            return value;
        }
        /**
         * Method used to switch tabs using the
         * browser query hash.
         *
         * @param  object e Event.
         * @return void
         */
        function bbb(value) {
            console.log(value)
        }

        function render(){
            var ktdChat = $('<div class="ktd-chat-wrap"><div class="ktd-chat"></div></div>');
            ktdChat.appendTo(chatWrap);
        }
        
        function renderBox(id, type){
            if(!id){
                console.error("Error ! id is null.");
                return false;
            }
            if($('#'+id).length == 0){
                var box = $('<div class="ktd-chat-box" id="'+id+'"><div class="ktd-chat-atc"></div><div class="ktd-chat-main"></div></div>');
                var ktdChat = chatWrap.find('.ktd-chat');
                    box.appendTo(ktdChat);
                if(!type){
                    var temp = '<div class="ktd-chat-content"></div>\
                                <div class="ktd-m-footer">\
                                    <textarea data-editor="'+id+'" class="ktd-m-editor" placeholder="'+options.placeholder+'" rows="3"></textarea>\
                                </div>';
                    box.find('.ktd-chat-main').addClass('ktd-chat-addon').append(temp);
                }
            }
            
        }

        function renderAct(id, data, insert){
            var ins = insert || 'append';
            var avatar = data || options.avatar;
            var temp = '<span class="ktd-chat-tab">\
                            <img src="'+avatar+'" />\
                        </div>';
            $('#'+id).find('.ktd-chat-atc')[ins](temp);
        }
        
        function renderList(data, insert){
            var id = control;
            var ins = insert || 'append';
            var avatar = (data.avatar) ? data.avatar : options.avatar;
            var title = (data.title) ? data.title : "";
            var main = (data.main) ? data.main : "";
            var temp = '<div class="ktd-media">\
                        <div class="ktd-media-img">\
                            <img src="'+avatar+'">\
                        </div>\
                        <div class="ktd-media-body">\
                            <div class="ktd-media-title">\
                                <strong>'+title+'</strong>\
                            </div>\
                            <div class="ktd-media-main">\
                                <span>'+main+'</span>\
                            </div>\
                        </div>\
                    </div>';
            $('#'+id).find('.ktd-chat-main')[ins](temp);
        }

        function renderChat(id, data, insert, position){
            var pos = (position) ? ' ktd-m-'+position : '';
            var ins = insert || 'append';
            var avatar = (data.avatar) ? data.avatar : options.avatar;
            var name = (data.name) ? data.name : "";
            var time = (data.time) ? data.time : "";
            var main = (data.main) ? data.main : "";
            var temp = '<div class="ktd-m'+pos+'" title="2017-03-19 20:01:40">\
                            <div class="ktd-m-head">\
                                <strong class="ktd-m-name">'+name+'</strong>\
                                <span class="ktd-m-time">'+time+'</span>\
                            </div>\
                            <div class="ktd-m-body">'+main+'</div>\
                        </div>';
            $('#'+id).find('.ktd-chat-content')[ins](temp);
        }

        function init() {
            render();
            renderBox(control, true);
            renderAct(control, actSVG);

            $(document).on('keypress', 'textarea[data-editor]', function(e) {
                var main = $(this).val();
                if (e.keyCode == 13 && !e.shiftKey && main!=""){
                    var data = {
                        name: options.owner,
                        main: main
                    }
                    renderChat($(this).attr('data-editor'), data, null, 'right');
                    $(this).val('');
                    e.preventDefault();
                }
            })
        }
        
        /**
         * Returns the methods exposed in the api.
         *
         * @return object Containing each api method.
         */
        function api() {
            return {
                'listUser': renderList,
                'box': renderBox,
                'avatar': renderAct,
                'chat': renderChat
            };
        }

        init();

        return api();
    };

    $.fn.ktdChat = function(options) {
        return this.each(function() {
            if(!$(this).data('api')) {
                $(this).data('api', new ktdChat($(this), options));
            }
        });
    };

})(window.jQuery || window.Zepto || window.$, document, window);