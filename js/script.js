$('#name').focus();
$('#other-title').hide();

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
    }
    else if (e.target.value === 'heart js'){
        $('#color option[value ="cornflowerblue"').hide().removeAttr('selected');
        $('#color option[value ="darkslategrey"').hide();
        $('#color option[value ="gold"').hide();
        $('#color option[value ="tomato"').show().attr('selected', 'selected');
        $('#color option[value ="steelblue"').show();
        $('#color option[value ="dimgrey"').show();
        
    }
    else {
        resetColorValues();
    }
});

function resetColorValues(){
    $('#color option[value ="cornflowerblue"').show().attr('selected', 'selected');
    $('#color option[value ="darkslategrey"').show();
    $('#color option[value ="gold"').show();
    $('#color option[value ="tomato"').show().removeAttr('selected');
    $('#color option[value ="steelblue"').show();
    $('#color option[value ="dimgrey"').show();
}




