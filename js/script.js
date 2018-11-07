// variable holds total value for activites
let total = 0;

//preps the page on load
$(document).ready(function () {
    $('#name').focus();
    $('#other-title').hide();
    $('#colors-js-puns').hide();
    $('#payment option[value ="select_method"').attr('disabled', 'disabled');
    $('#name').after('<span id="name_error" style="color: red"></span>');
    $('#mail').after('<span id="email_error" style="color: red"></span>');
    $('.activities').append('<p>Total: $<span id="total">0</span></p> ');
    $('.activities').append('<p id="checkbox_error" style="color: red"></p> ');
    $('#credit-card').append('<p id="card_error" style="color: red;"></p>');
    $('#payment option[value ="credit card"').attr('selected', true);
    hideAllPaymentDivs($('#credit-card'));
    $('#credit-card').show();
});

//shows or hides input for other job role
$('#title').change(e => {
    if (e.target.value === 'other') {
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
});

//changes available color for specific design
$('#design').change(e => {
    if (e.target.value === 'js puns') {
        $('#color option[value ="cornflowerblue"').show().attr('selected', 'selected');
        $('#color option[value ="darkslategrey"').show();
        $('#color option[value ="gold"').show();
        $('#color option[value ="tomato"').hide().removeAttr('selected');
        $('#color option[value ="steelblue"').hide();
        $('#color option[value ="dimgrey"').hide();
        $('#colors-js-puns').show();
    }
    else if (e.target.value === 'heart js') {
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

//Checkboxes listener which modifes total price and disables same time activity
$('.activities').change(e => {
    const checkbox = e.target;
    validateCheckBox();
    if (checkbox.name === 'all') {
        if ($(checkbox).prop("checked")) {
            total += 200;
        }
        else {
            total -= 200;
        }
    }
    if (checkbox.name === 'js-frameworks') {
        if ($(checkbox).prop("checked")) {
            $('input[name="express"]').attr('disabled', true).parent().css('color', 'grey');
            total += 100;
        }
        else {
            $('input[name="express"]').attr('disabled', false).parent().css('color', 'black');
            total -= 100;
        }
    }
    if (checkbox.name === 'js-libs') {
        if ($(checkbox).prop("checked")) {
            $('input[name="node"]').attr('disabled', true).parent().css('color', 'grey');
            total += 100;
        }
        else {
            $('input[name="node"]').attr('disabled', false).parent().css('color', 'black');
            total -= 100;
        }
    }
    if (checkbox.name === 'express') {
        if ($(checkbox).prop("checked")) {
            $('input[name="js-frameworks"]').attr('disabled', true).parent().css('color', 'grey');
            total += 100;
        }
        else {
            $('input[name="js-frameworks"]').attr('disabled', false).parent().css('color', 'black');
            total -= 100;
        }
    }
    if (checkbox.name === 'node') {
        if ($(checkbox).prop("checked")) {
            $('input[name="js-libs"]').attr('disabled', true).parent().css('color', 'grey');
            total += 100;
        }
        else {
            $('input[name="js-libs"]').attr('disabled', false).parent().css('color', 'black');
            total -= 100;
        }
    }
    if (checkbox.name === 'build-tools') {
        if ($(checkbox).prop("checked")) {
            total += 100;
        }
        else {
            total -= 100;
        }
    }
    if (checkbox.name === 'npm') {
        if ($(checkbox).prop("checked")) {
            total += 100;
        }
        else {
            total -= 100;
        }
    }
    $('#total').text(total);
});

//payment option listener which hides or shows correct payment option 
$('#payment').change(e => {
    const method = e.target.value;
    const creditCardDiv = $('#credit-card');
    if (method === 'credit card') {
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.show();
    }
    if (method === 'paypal') {
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.next().show();
    }
    if (method === 'bitcoin') {
        hideAllPaymentDivs(creditCardDiv);
        creditCardDiv.next().next().show();
    }
});

function hideAllPaymentDivs(paymentDiv) {
    paymentDiv.hide();
    paymentDiv.next().hide();
    paymentDiv.next().next().hide();
}

$('#name').on('focusout input', () => {
    nameCheck();
});

$('#mail').on('focusout input', () => {
    emailCheck();
});
$('#cc-num').on('focusout input', () => {
    ccNumCheck();
});

$('#zip').on('focusout input', () => {
    zipCheck();
});

$('#cvv').on('focusout input', () => {
    cvvCheck();
});

//validates name field
function nameCheck() {
    const name = $('#name');
    if (name.val() === '') {
        $('#name_error').text("Name is empty");
        name.css('border-color', 'coral');
        return false;
    }
    else {
        $('#name_error').text("");
        name.css('border-color', '#c1deeb');
        return true;
    }
}

//falidates email field
function emailCheck() {
    const mail = $('#mail');
    const valid = isEmailValid(mail.val());
    if (mail.val() === '') {
        $('#email_error').text('Email is empty');
        mail.css('border-color', 'coral');
        return false;
    }
    else if (!valid) {
        $('#email_error').text('Email is invalid');
        mail.css('border-color', 'coral');
        return false;
    }
    else {
        $('#email_error').text('');
        mail.css('border-color', '#c1deeb');
        return true;
    }
}
//validates credit card number field
function ccNumCheck() {
    const ccNum = $('#cc-num');
    const valid = isCCNumValid(ccNum.val());
    if (ccNum.val() === '') {
        $('#card_error').text('Card number cannot be empty');
        ccNum.css('border-color', 'coral');
        return false;
    }
    else if (!valid) {
        $('#card_error').text('Card number is invalid');
        ccNum.css('border-color', 'coral');
        return false;
    }
    else {
        $('#card_error').text('');
        ccNum.css('border-color', '#c1deeb');
        return true;
    }
}
//validates zip code field
function zipCheck() {
    const zip = $('#zip');
    const valid = isZipValid(zip.val());
    if (zip.val() === '') {
        $('#card_error').text('Zip Code cannot be empty');
        zip.css('border-color', 'coral');
        return false;
    }
    else if (!valid) {
        $('#card_error').text('Zip Code is invalid');
        zip.css('border-color', 'coral');
        return false;
    }
    else {
        $('#card_error').text('');
        zip.css('border-color', '#c1deeb');
        return true;
    }
}
//validates CVV code field
function cvvCheck() {
    const cvv = $('#cvv');
    const valid = isCvvValid(cvv.val());
    if (cvv.val() === '') {
        $('#card_error').text('CVV cannot be empty');
        cvv.css('border-color', 'coral');
        return false;
    }
    else if (!valid) {
        $('#card_error').text('CVV is invalid');
        cvv.css('border-color', 'coral');
        return false;
    }
    else {
        $('#card_error').text('');
        cvv.css('border-color', '#c1deeb');
        return true;
    }
}

function isEmailValid(mail) {
    return /^\w+@\w+.(com|org|net)$/.test(mail);
}

function isCCNumValid(ccNum) {
    return /^\d{13,16}$/.test(ccNum);
}

function isZipValid(zip) {
    return /^\d{5}$/.test(zip);
}
function isCvvValid(cvv) {
    return /^\d{3}$/.test(cvv);
}

//Validates form in submition
$('form').on('submit', (e) => {
    const nameValid = nameCheck();
    const emailValid = emailCheck();
    const checkBoxChecked = validateCheckBox();
    let validCard = false;
    if ($('#payment').val() === 'credit card') {
        validCard = validateCreditCard();
    }
    else {
        validCard = true;
        $('#card_error').text('');
    }

    if (nameValid && emailValid && checkBoxChecked && validCard) {
        return true;
    }
    else {
        $('#card_error').text('Invalid card number');
        return false;
    }
});

//validates all credit card fields and return true if everything is valid
function validateCreditCard() {
    const validCvv = cvvCheck();
    const validZip = zipCheck();
    const validCard = ccNumCheck();
    return validCard && validZip && validCvv;
}
//validates checkboxes and returns true if everything is valid or false and creates error message
function validateCheckBox() {
    const activities = $('input[type="checkbox"]');
    let isChecked = false;
    activities.each(function (index) {
        if ($(this).prop('checked')) {
            isChecked = true;
            $('#checkbox_error').text('');
        }
    });
    if (!isChecked) {
        $('#checkbox_error').text('at least one activity must be selected');
    }
    return isChecked
}