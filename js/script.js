$('#name').focus();
$('#other-title').hide();
$('#colors-js-puns').hide();
let total = 0;

$('#title').change( e => {
    if(e.target.value === 'other'){
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
});

$('#design').change( e => {
    if(e.target.value === 'js puns'){
        $('#color option[value ="cornflowerblue"').show().attr('selected', 'selected');
        $('#color option[value ="darkslategrey"').show();
        $('#color option[value ="gold"').show();
        $('#color option[value ="tomato"').hide().removeAttr('selected');
        $('#color option[value ="steelblue"').hide();
        $('#color option[value ="dimgrey"').hide();
        $('#colors-js-puns').show();
    }
    else if (e.target.value === 'heart js'){
        $('#color option[value ="cornflowerblue"').hide().removeAttr('selected');
        $('#color option[value ="darkslategrey"').hide();
        $('#color option[value ="gold"').hide();
        $('#color option[value ="tomato"').show().attr('selected', 'selected');
        $('#color option[value ="steelblue"').show();
        $('#color option[value ="dimgrey"').show();
        $('#colors-js-puns').show();
    }
    else {
        $('#colors-js-puns').hide();
    }
});

$('.activities').change( e => {
    const checkbox = e.target;
    
    if(checkbox.name === 'all') {
        if($(checkbox).prop("checked")){
            total += 200;
        }
        else {
            total -= 200;
        }
    }
    if(checkbox.name === 'js-frameworks') {
       if($(checkbox).prop("checked")){
           $('input[name="express"]').attr('disabled', true).parent().css('color', 'grey');
           total += 100;
        }
        else {
            $('input[name="express"]').attr('disabled', false).parent().css('color', 'black');
            total -= 100;
        }
    }
    if(checkbox.name === 'js-libs') {
        if($(checkbox).prop("checked")){
            $('input[name="node"]').attr('disabled', true).parent().css('color', 'grey');
             total += 100;
         }
         else {
            $('input[name="node"]').attr('disabled', false).parent().css('color', 'black');
             total -= 100;
         }
     }
     if(checkbox.name === 'express') {
        if($(checkbox).prop("checked")){
            $('input[name="js-frameworks"]').attr('disabled', true).parent().css('color', 'grey');
             total += 100;
         }
         else {
            $('input[name="js-frameworks"]').attr('disabled', false).parent().css('color', 'black');
             total -= 100;
         }
     }
     if(checkbox.name === 'node') {
        if($(checkbox).prop("checked")){
            $('input[name="js-libs"]').attr('disabled', true).parent().css('color', 'grey');
             total += 100;
         }
         else {
            $('input[name="js-libs"]').attr('disabled', false).parent().css('color', 'black');
             total -= 100;
         }
     }
     if(checkbox.name === 'build-tools') {
        if($(checkbox).prop("checked")){
             total += 100;
         }
         else {
             total -= 100;
         }
     }
     if(checkbox.name === 'npm') {
        if($(checkbox).prop("checked")){
             total += 100;
         }
         else {
             total -= 100;
         }
     }

    $('#total').text(total);

});





