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
        //$('#color').
    }
    else if (e.target.value === 'heart js'){
        console.log(e.target.value);   
    }
    else {
        console.log(e.target.value);
    }
});


