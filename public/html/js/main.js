var func = {
    init: function(){
        toggle_note_button();
        toggle_note();
    }
};

$(document).ready(function(){
    func.init();
});

function toggle_note_button(){
    $('.note .text-plan').on('mouseover', function(){
        $(this).siblings('.note-buttons').css('display', 'block');
    });
    $('.note-buttons').on('mouseleave', function(){
        $(this).css('display', 'none');
    });
}

function toggle_note(){
    $('.add-note').on('click', function(){
        var input = '<li><input type="text" class="form-control"></li>';
        $(this).siblings('.note').find('ul').append(input);
        $(this).siblings('.note').find('input').focus();
    });
    $('body').on('blur', 'input', function(){
        if($(this).val()){
            $(this).parent().text($(this).val());
            $(this).parent().remove();
        } else {
            $(this).parent().remove();
        }
    });
}