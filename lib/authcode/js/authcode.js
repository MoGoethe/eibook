(function(window,document,undefined){
    var dog = {//声明一个命名空间，或者称为对象
        $:function(id){
            return document.querySelector(id);
        },
        on:function(el,type,handler){
            el.addEventListener(type,handler,false);
        },
        off:function(el,type,handler){
            el.removeEventListener(type,handler,false);
        }
    }; 
    //封装一个滑块类
    function Slider(){
        var args = arguments[0];
        for(var i in args){
          this[i] = args[i]; //一种快捷的初始化配置
        }
        //直接进行函数初始化，表示生成实例对象就会执行初始化
        this.init();
    }
    Slider.prototype = {
        constructor:Slider,
        init:function(){
            this.initDom();
            this.getDom();
            this.dragBar(this.handler);
            
        },
        initDom:function(){
            this.slider = dog.$('#'+this.id);
            slider.innerHTML = '<div class="drag_bg"></div><div class="drag_text" id="drag_text" onselectstart="return false;" unselectable="on">'+this.notice+'</div><div class="handler handler_bg"></div>';
        },
        getDom:function(){
           this.handler = dog.$('.handler');
           this.bg = dog.$('.drag_bg');
        },
        dragBar:function(handler){
            var that = this,
            startX = 0,
            lastX = 0,
            doc = document,
            width = this.slider.offsetWidth,
            max = width - handler.offsetWidth,
            drag = {
                down:function(e){
                    var e = e||window.event;
                    that.slider.classList.add('unselect');
                    startX = e.clientX - handler.offsetLeft;
                    dog.on(doc,'mousemove',drag.move);
                    dog.on(doc,'mouseup',drag.up);
                    return false;
                },
                move:function(e){
                    var e = e||window.event;
                    lastX = e.clientX - startX;
                    lastX = Math.max(0,Math.min(max,lastX)); //这一步表示距离大于0小于max，巧妙写法
                    if(lastX>=max){
                        handler.classList.add('handler_ok_bg');
                        that.slider.classList.add('slide_ok');
                        dog.off(handler,'mousedown',drag.down);
                        drag.up();
                        dog.$("#drag_text").innerHTML = '验证成功';
                    }
                    that.bg.style.width = lastX + 'px';
                    handler.style.left = lastX + 'px';
                },
                up:function(e){
                    var e = e||window.event;
                    that.slider.classList.remove('unselect');
                    if(lastX < width){ 
                        that.bg.classList.add('ani');
                        handler.classList.add('ani');
                        that.bg.style.width = 0;
                        handler.style.left = 0;
                        setTimeout(function(){
                          that.bg.classList.remove('ani');
                          handler.classList.remove('ani');
                        },300);
                    }
                    dog.off(doc,'mousemove',drag.move);
                    dog.off(doc,'mouseup',drag.up);
                }
            };
            dog.on(handler,'mousedown',drag.down);
        }
    };
    window.sliderBar = window.Slider = Slider;
})(window,document);