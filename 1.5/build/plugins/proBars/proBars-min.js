/*!build time : 2013-09-25 11:07:13 AM*/
KISSY.add("gallery/uploader/1.5/plugins/proBars/progressBar",function(a,b,c){function d(b,c){var e=this;c=a.merge({wrapper:f(b)},c),d.superclass.constructor.call(e,c)}var e="",f=b.all,g="progressbar",h="role",i="aria-valuemin",j="aria-valuemax",k="aria-valuenow",l="data-value";return a.mix(d,{tpl:{DEFAULT:'<div class="ks-progress-bar-value" data-value="{value}"></div>'},cls:{PROGRESS_BAR:"ks-progress-bar",VALUE:"ks-progress-bar-value"},event:{RENDER:"render",CHANGE:"change",SHOW:"show",HIDE:"hide"}}),a.extend(d,c,{render:function(){var a=this,b=a.get("wrapper"),c=a.get("width");return b.length?("auto"==c&&(c=b.parent().width()),b.width(c),b.addClass(d.cls.PROGRESS_BAR),a._addAttr(),!a.get("visible")&&a.hide(),a.set("bar",a._create()),a.fire(d.event.RENDER),void 0):!1},show:function(){var a=this,b=a.get("wrapper");b.fadeIn(a.get("duration"),function(){a.set("visible",!0),a.fire(d.event.SHOW,{visible:!0})})},hide:function(){var a=this,b=a.get("wrapper");b.fadeOut(a.get("duration"),function(){a.set("visible",!1),a.fire(d.event.HIDE,{visible:!1})})},_create:function(){var b=this,c=b.get("wrapper"),d=b.get("value"),e=b.get("tpl"),g=a.substitute(e,{value:d});return c.html(""),f(g).appendTo(c)},_addAttr:function(){var a=this,b=a.get("wrapper"),c=a.get("value");return b.attr(h,g),b.attr(i,0),b.attr(j,100),b.attr(k,c),a}},{ATTRS:{wrapper:{value:e},bar:{value:e},width:{value:"auto"},value:{value:0,setter:function(a){var b,c=this,e=c.get("wrapper"),f=c.get("bar"),g=c.get("speed");return a>100&&(a=100),0>a&&(a=0),b=Math.ceil(e.width()*(a/100)),f.stop().animate({width:b+"px"},g,"none",function(){e.attr(k,a),f.attr(l,a),c.fire(d.event.CHANGE,{value:a,width:b})}),a}},visible:{value:!0},duration:{value:.3},tpl:{value:d.tpl.DEFAULT},speed:{value:.2}}}),d},{requires:["node","base"]}),KISSY.add("gallery/uploader/1.5/plugins/proBars/proBars",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a)}var f=b.all,g="J_ProgressBar_";return a.mix(e,{event:{RENDER:"render"}}),a.extend(e,c,{pluginInitializer:function(a){if(!a)return!1;var b=this;a.on("start",function(a){b.add(a.file.id)}),a.on("progress",b._uploaderProgressHandler,b),a.on("success",b._uploaderSuccessHandler,b),b.fire(e.event.RENDER)},_uploaderProgressHandler:function(a){var b=this,c=a.file,d=c.id,e=a.loaded,f=a.total,g=Math.ceil(100*(e/f)),h=b.get("bars")[d];h&&h.set("value",g)},_uploaderSuccessHandler:function(b){var c=this,d=b.file,e=d.id,h=c.get("bars")[e],i=c.get("isHide");h&&h.set("value",100),i&&a.later(function(){var a=f("."+g+b.file.id);a.hide()},500)},add:function(b){if(!a.isString(b))return!1;var c=this,e=f("."+g+b),h=f(".J_ProgressCount_"+b),i=c.get("speed"),j=new d(e,{width:c.get("width"),speed:i});h.length&&j.on("change",function(a){h.text(a.value+"%")}),j.render();var k=c.get("bars");return k[b]=j}},{ATTRS:{pluginId:{value:"proBars"},bars:{value:{}},width:{value:"auto"},isHide:{value:!0},speed:{value:.2}}}),e},{requires:["node","base","./progressBar"]});