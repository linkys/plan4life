var func = {
    init: function(){
        toggle_note_button();
        toggle_note();
        edit_note();
    }
};

$(document).ready(function(){
    func.init();
});

function bodyOffOn(events, selector, callback){
    $('body').off(events, selector).on(events, selector, callback);
}

function toggle_note_button(){
    bodyOffOn('mouseover', '.note .text-plan', function(){
        $(this).siblings('.note-buttons').css('display', 'block');
    });
    bodyOffOn('mouseleave', '.note-buttons', function(){
        $(this).css('display', 'none');
    });
}

function toggle_note(){
    bodyOffOn('click', '.add-note', function(){
        var input = '<li><input type="text" class="form-control"></li>';
        $(this).siblings('.note').find('ul').append(input);
        $(this).siblings('.note').find('input').focus();
    });
    bodyOffOn('blur', 'input', function(){
        if($(this).val()){
            $(this).parent().text($(this).val());
            $(this).remove();
        } else {
            $(this).parent().remove();
        }
    });
}

function edit_note(){
    bodyOffOn('click', '.note li', function(){
        var text = $(this).text();
        var input = '<input type="text" class="form-control" value="'+ text +'">';

        $(this).html(input);
        $('.note').find('input').focus();
    });
}