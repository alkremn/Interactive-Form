$('#name').focus();
$('#other-title').hide();
$('#colors-js-puns').hide();
let total = 0;
$('#payment option[value ="select_method"').attr('disabled', 'disabled');
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


$('#payment').change( e=> {
    const method = e.target.value;
    const creditCardDiv = $('#credit-card');
    if(method === 'credit card'){
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.show();
    }
    if (method === 'paypal'){
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.next().show();
    }
    if(method === 'bitcoin'){
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.next().next().show();
    }
});

function hideAllPaymentDivs(paymentDiv){
    paymentDiv.hide();
    paymentDiv.next().hide();
    paymentDiv.next().next().hide();
}

$('#name').on('input', ()=> {
    nameCheck();
});

$('#mail').on('input', () =>{
    emailCheck();
});
$('#cc-num').on('input', () => {
    ccNumCheck();
});

$('#zip').on('input', () => {
    zipCheck();
});

$('#cvv').on('input', () => {
    cvvCheck();
});

function nameCheck(){
    const name = $('#name');
    if(name.val() ===''){
        name.css('border-color', 'coral');
        return false;
    }
    else{
        name.css('border-color', '#c1deeb');
        return true;
    }
}

function emailCheck(){
    const mail = $('#mail');
    const valid = isEmailValid(mail.val());
    if(mail.val() === '' || !valid){
        mail.css('border-color', 'coral');
        return false;
    }
    else{
        mail.css('border-color', '#c1deeb');
        return true;
    }
}
function ccNumCheck(){
    const ccNum = $('#cc-num');
    const valid = isCCNumValid(ccNum.val());
    if(ccNum.val() ==='' || !valid){
        ccNum.css('border-color', 'coral');
        return false;
    }
    else{
        ccNum.css('border-color', '#c1deeb');
        return true;
    }
}

function zipCheck(){
    const zip = $('#zip');
    const valid = isZipValid(zip.val());
    if(zip.val() ==='' || !valid){
        zip.css('border-color', 'coral');
        return false;
    }
    else{
        zip.css('border-color', '#c1deeb');
        return true;
    }
}

function cvvCheck(){
    const cvv = $('#cvv');
    const valid = isCvvValid(cvv.val());
    if(cvv.val() ==='' || !valid){
        cvv.css('border-color', 'coral');
        return false;
    }
    else{
        cvv.css('border-color', '#c1deeb');
        return true;
    }
}

function isEmailValid(mail){
    return /^\w+@\w+.(com|net|org)$/.test(mail);
}

function isCCNumValid(ccNum){
    return /^\d{13,16}$/.test(ccNum);
}

function isZipValid(zip){
    return /^\d{5}$/.test(zip);
}
function isCvvValid(cvv){
    return /^\d{3}$/.test(cvv);
}

$('form').on('submit', (e) =>{
    e.preventDefault();
    const nameValid = nameCheck();
    const emailValid = emailCheck();
    const checkBoxChecked = validateCheckBox();
    if(nameValid && emailValid && checkBoxChecked){
       if($('#payment').val() === 'credit card'){
            validateCreditCard();
        }
    }

    
});

function validateCheckBox(){
    const activities =  $('input[type="checkbox"]');
    
    let isChecked = false;
    activities.each( function(index){
        if($(this).prop('checked')){
            isChecked = true;
        }
    });
    return isChecked
}


