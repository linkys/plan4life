var func = {
    action: function(){
        add_input();
        edit_text();
        off_on_plan();
    },
    change: function(){

    },
    confirm: function(){

    },
    remove: function(){

    },
    checkbox: function(){

    },
    validator: function(){

    },
    load: function(){
        hidden_button();
    },
    init: function(){
        this.action();
        this.change();
        this.confirm();
        this.remove();
        this.checkbox();
        this.validator();
        this.load();
    }
}

$(document).ready(function(){
    // init func
    func.init();
});

function bodyOffOn(events, selector, callback){
    $('body').off(events, selector).on(events, selector, callback);
}

function add_input(){
    bodyOffOn('click', '.add-note>span', function(e){
        var block = $(this).parent().siblings('.note');
        var input = '<form role="form">'+
                        '<div class="form-group input-group-sm">'+
                            '<input type="text" class="form-control">'+
                        '</div>'+
                    '</form>';
        block.append(input);
        block.find('input').focus();

        bodyOffOn('blur', 'input', function(e){
            if ($('input').val() == ''){
                $('input').remove();
            } else {
                var text = $('input').val();
                var block = $(this).parents('.note');
                var input = '<p><span class="pull-right btn-group hidden"><button class="btn btn-xs btn-default glyphicon glyphicon-ok"></button><button class="btn btn-xs btn-default glyphicon glyphicon-remove"></button></span><span class="text-plan">' + text + '</span></p>';
                block.append(input);
                $('form').remove();
            }
        });
    });
}

function edit_text(){
    bodyOffOn('click', '.text-plan', function(e){
        var text = $(this).text();
        var input = '<form role="form">'+
            '<div class="form-group input-group-sm">'+
            '<input type="text" class="form-control" value="' + text + '">'+
            '</div>'+
            '</form>';
        $(this).parent().replaceWith(input);
        $('.note').find('input').focus();
        bodyOffOn('blur', 'input', function(e){
            if ($('input').val() == ''){
                $('input').remove();
            } else {
                var text = $('input').val();
                var input = '<p><span class="pull-right btn-group hidden"><button class="btn btn-xs btn-default glyphicon glyphicon-ok"></button><button class="btn btn-xs btn-default glyphicon glyphicon-remove"></button></span><span class="text-plan">' + text + '</span></p>';
                $(this).parents('form').replaceWith(input);
            }
        });
    });
}

function off_on_plan(){
    bodyOffOn('click', '.glyphicon-ok', function(e){
        var el = $(this).parents('p').children().eq(1);
        if (el.css('color') == 'rgb(0, 128, 0)'){
            el.css('color', '');
        } else {
            el.css('color', 'green');
        }
    });
    bodyOffOn('click', '.glyphicon-remove', function(e){
        var el = $(this).parents('p').children().eq(1);
        if (el.css('color') == 'rgb(255, 0, 0)'){
            el.css('color', '');
        } else {
            el.css('color', 'red');
        }
    });
}

function hidden_button(){
    bodyOffOn('mouseover', '.note p', function(e){
        $(this).children('span.pull-right.btn-group').removeClass('hidden');
    });
    bodyOffOn('mouseout', '.note p', function(e){
        $(this).children('span.pull-right.btn-group').addClass('hidden');
    });
}