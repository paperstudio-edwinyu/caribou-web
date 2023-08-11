// Validation on Textfield
// To check if empty
function validatorTextfield(inputName, specificErrorMessageID = ""){
  var validationStatus = false
  var inputValue = document.querySelector('input[name="' + inputName +'"]').value

  // Check if the textfield is empty or not
  if (inputValue != "") {
    validationStatus = true
  }

  // Display or hide the specific error message
  if (validationStatus == false && specificErrorMessageID != ""){
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }

  return validationStatus
}

// Validation on Textfield 
// To check if is number and larger than 0
function validatorNumberTextfield(inputName, specificErrorMessageID = "") {
  var validationStatus = false
  var inputValue = document.querySelector('input[name="' + inputName +'"]').value

  if (typeof Number(inputValue) == "number" && Number(inputValue) > 0) {
    validationStatus = true
  }

  // Display or hide the specific error message
  if (validationStatus == false && specificErrorMessageID != ""){
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }

  return validationStatus
}


// Validation on Radio Button Group 
// To check if checked
function validatorRadioButtonGroup(checkedRadioElemName, specificErrorMessageID = "", otherLabelID = "", otherTextfieldID = ""){ 
  var validationStatus = false
  var checkedRadioElem = document.querySelector('input[name="' + checkedRadioElemName +'"]:checked')

  // check if the radio button group has been checked
  if (checkedRadioElem) {
    // check if there is other label ID and other text field id
    if (otherLabelID != "" && otherTextfieldID != "" ){
      const otherCheckStatus = document.querySelector(`#${otherLabelID} input`).checked
      const otherTextFieldInputValue = document.querySelector(`#${otherTextfieldID}`).value

      // check if the other radio button has been checked but without the textfield value
      if (otherCheckStatus && otherTextFieldInputValue != "") {
        validationStatus = true
      }
    } else {
      validationStatus = true
    }
  } 

  if (validationStatus == false && specificErrorMessageID != "") {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }
  
  return validationStatus
}


function validatorCheckboxGroup(checkboxGroupID, specificErrorMessageID = "", otherLabelID = "", otherTextfieldID ="") {
  var validationStatus = false
  var checkedCheckboxLength = document.querySelectorAll(`#${checkboxGroupID} input[type="checkbox"]:checked`).length
 
  // check if any checkbox has been checked within the checkbox group
  if (checkedCheckboxLength > 0){
    // check if there is other label ID and other text field id
    if (otherLabelID != "" && otherTextfieldID != "" ){

      const otherCheckStatus = document.querySelector(`#${otherLabelID} input`).checked
      const otherTextFieldInputValue = document.querySelector(`#${otherTextfieldID}`).value

      // check if the other radio button has been checked but without the textfield value
      if (otherCheckStatus && otherTextFieldInputValue != "") {
        validationStatus = true
      } else if (otherCheckStatus == false ){
        validationStatus = true
      }
    } else {
      validationStatus = true
    }
  } 

  if (validationStatus == false && specificErrorMessageID != "") {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }
  return validationStatus
  
}


function validatorCheckboxCount(checkboxGroupID, specificErrorMessageID, count) {
  var validationStatus = false
  var checkedCheckboxLength = document.querySelectorAll(`#${checkboxGroupID} input[type="checkbox"]:checked`).length

  // check if the number of checked value is the count (e.g. 3)
  if (checkedCheckboxLength <= count ){
    validationStatus = true
  } 

  if(validationStatus == false) {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
    document.querySelector(`#${specificErrorMessageID} .form-error-message-text`).innerHTML = `Max. ${count}`
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }
}



// Select other when the textfield has been filled for Radio button
// Also clear other active class as radio button is exclusive
function RadioButtonCheckboxSelectOther(otherTextfieldName, radioButtonGroupID, otherRadioButtonLabelID) {
  const otherTextfield = document.querySelector(`input[name="${otherTextfieldName}"]`)
  const radioButtonGroup = radioButtonGroupID
  const otherRadioButtonLabel = otherRadioButtonLabelID

  otherTextfield.addEventListener("keyup", function() {

    // Only applicable to Radio Button
    // clear the existing styling
    // Get all the labels with class "radio-button-field"
    var labels = document.querySelectorAll(`#${radioButtonGroup} .radio-button-field`);

    // Loop through each label
    labels.forEach(function(label) {
      // Get the div element within the current label
      var divElement = label.querySelector('.w-form-formradioinput');

      // Remove the class "w--redirected-checked" from the div if it exists
      if (divElement.classList.contains('w--redirected-checked')) {
        divElement.classList.remove('w--redirected-checked');
      }
    });

    document.querySelector(`#${otherRadioButtonLabel} input`).checked = true
    document.querySelector(`#${otherRadioButtonLabel} div`).classList.add("w--redirected-checked")
  })
}
