// Overall Variable
const text_color_default = "#101820"
const text_color_error = "#ff3b30"
const wrapperSection_1 = document.querySelector("#customer-intake-form-section-1")
const wrapperSection_2 = document.querySelector("#customer-intake-form-section-2")
const wrapperSection_3 = document.querySelector("#customer-intake-form-section-3")
const wrapperSection_4 = document.querySelector("#customer-intake-form-section-4")

// Section 1 Handling
const section_1_previous = document.querySelector("#section-1-previous");
const section_1_next = document.querySelector("#section-1-next");

section_1_next.addEventListener("click", function () {

  // General Error Message
  const error_section_1 = document.querySelector("#error_section_1")

  var validation_section_1_Q1 = validatorTextfield("title_section_1_Q1","section_1_Q1", "error_section_1_Q1")
  var validation_section_1_Q2 = validatorRadioButtonGroup("title_section_1_Q2", "section_1_Q2", "error_section_1_Q2")
  
  // Display Generic Error message
  if (validation_section_1_Q1 && validation_section_1_Q2) {
    error_section_1.style.display = "none"
    // Display corresponding section based on the value selected on radio button
    var inputValue
    inputValue = document.querySelector('input[name="section_1_Q2"]:checked').value
    if(inputValue == "Yes") {
      wrapperSection_1.style.display = "none"
      wrapperSection_2.style.display = "flex"
    } else {
      wrapperSection_1.style.display = "none"
      wrapperSection_3.style.display = "flex"
    }
  
  } else {
    error_section_1.style.display = "flex"
  }
});


// Section 2 Handling
const section_2_previous = document.querySelector("#section-2-previous");
const section_2_next = document.querySelector("#section-2-next");

section_2_previous.addEventListener("click", function() {
  wrapperSection_2.style.display = "none"
  wrapperSection_1.style.display = "flex"  
})    

section_2_next.addEventListener("click", function() {
  // General Error Message
  const error_section_2 = document.querySelector("#error_section_2")

  var validation_section_2_Q2 = validatorTextfield("title_section_2_Q2", "section_2_Q2", "error_section_2_Q2")

  //Display Generic Error Message or go to next section
  if (validation_section_2_Q2) {
    error_section_2.style.display = "none"
    wrapperSection_2.style.display = "none"
    wrapperSection_4.style.display = "flex"
  } else {
    error_section_2.style.display = "flex"
  }
})


// Section 3 Handling
const section_3_previous = document.querySelector("#section-3-previous");
const section_3_next = document.querySelector("#section-3-next");

section_3_previous.addEventListener("click", function(){
  wrapperSection_3.style.display = "none"
  wrapperSection_1.style.display = "flex"
})

section_3_next.addEventListener("click", function(){
  // General Error Message
  const error_section_3 = document.querySelector("#error_section_3")

  // Question: When do you plan to go there? (DD/MM/YY) 
  var validation_section_3_Q2 = validatorTextfield("section_3_Q2", "error_section_3_Q2")

  // Display Generic Error Message or go to next section
  if (validation_section_3_Q2) {
    error_section_3.style.display = "none"
    wrapperSection_3.style.display = "none"
    wrapperSection_4.style.display = "flex"
  } else {
    error_section_3.style.display = "flex"
  }
})


// Section 4 Handling
const section_4_submit = document.querySelector("#section-4-submit")

// Handle the radio other option
// Check the other radio button when the textfield has been provided
RadioButtonCheckboxSelectOther("section_4_Q2_Other_Textfield", "section_4_Q2_group", "section_4_Q2_Other")
RadioButtonCheckboxSelectOther("section_4_Q3_Other_Textfield", "section_4_Q3_group", "section_4_Q3_Other")
RadioButtonCheckboxSelectOther("section_4_Q6_Other_Textfield", "section_4_Q6_group", "section_4_Q6_Other")
RadioButtonCheckboxSelectOther("section_4_Q8_Other_Textfield", "section_4_Q8_group", "section_4_Q8_Other")
RadioButtonCheckboxSelectOther("section_4_Q9_Other_Textfield", "section_4_Q9_group", "section_4_Q9_Other")

// form input validation
section_4_submit.addEventListener("click", function() {
  // General Error Message
  const error_section_4 = document.querySelector("#error_section_4")
  
  // Textfield Validation
  var validation_section_4_Q4 = validatorTextfield("section_4_Q4", "error_section_4_Q4")
  var validation_section_4_Q5 = validatorTextfield( "section_4_Q5", "error_section_4_Q5")
  var validation_section_4_Q7 = validatorTextfield("section_4_Q7", "error_section_4_Q7")
  var validation_section_4_Q11 = validatorTextfield("section_4_Q11", "error_section_4_Q11")
  var validation_section_4_Q12 = validatorTextfield("section_4_Q12", "error_section_4_Q12")

  // Radio Button Group Validation
  var validation_section_4_Q1 = validatorRadioButtonGroup("section_4_Q1", "error_section_4_Q1")
  var validation_section_4_Q2 = validatorRadioButtonGroup("section_4_Q2","error_section_4_Q2",  "section_4_Q2_Other", "section_4_Q2_Other_Textfield")
  var validation_section_4_Q8 = validatorRadioButtonGroup("section_4_Q8","error_section_4_Q8",  "section_4_Q8_Other", "section_4_Q8_Other_Textfield")

  // Checkbox Group Validation
  var validatio_section_4_Q9 = validatorCheckboxGroup("section_4_Q9_group", "error_section_4_Q9", "section_4_Q9_Other", "section_4_Q9_Other_Textfield")

  // Display Generic Error Message or go to the next section
  if (validation_section_4_Q1 && 
      validation_section_4_Q2 && 
      validation_section_4_Q4 && 
      validation_section_4_Q5 && 
      validation_section_4_Q7 && 
      validation_section_4_Q8 && 
      validation_section_4_Q11 && 
      validation_section_4_Q12) {
    error_section_4.style.display = "none"
  } else {
    error_section_4.style.display = "flex"
  }
})


// to validate the textfield
// specific error message is optional
function validatorTextfield(inputName, specificErrorMessageID = ""){
  var validationStatus = false
  var inputValue = document.querySelector('input[name="' + inputName +'"]').value

  // Check if the textfield is empty or not
  if (inputValue != "") {
    validationStatus = true
  }

  // Display the specific error message if the textfield is empty and the specific error message has been passed
  if (validationStatus == false && specificErrorMessageID != ""){
    document.querySelector(`#${specificErrorMessageID}`).style.display = "flex"
  } else {
    document.querySelector(`#${specificErrorMessageID}`).style.display = "none"
  }

  return validationStatus
}

// to validate the radio button group
// 
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
  var validationStatus = true
  var checkedCheckboxLength = document.querySelectorAll(`#${checkboxGroupID}input[type="checkbox"]:checked`).length
  
  // check if any checkbox has been checked within the checkbox group
  if (checkedCheckboxLength > 0){
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

