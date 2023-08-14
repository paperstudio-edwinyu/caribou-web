// Overall Variable
const text_color_default = "#101820"
const text_color_error = "#ff3b30"
const wrapperSection_1 = document.querySelector("#customer-intake-form-section-1")
const wrapperSection_2 = document.querySelector("#customer-intake-form-section-2")
const wrapperSection_3 = document.querySelector("#customer-intake-form-section-3")
const wrapperSection_4 = document.querySelector("#customer-intake-form-section-4")
const formCustomerIntake = document.querySelector("#customer-intake-form")
var section_4_previous_section

formCustomerIntake.addEventListener("submit", async (e) => {
	e.preventDefault()
});


// Section 1 Handling
const section_1_next = document.querySelector("#section-1-next");

section_1_next.addEventListener("click", function () {

  // General Error Message
  const error_section_1 = document.querySelector("#error_section_1")

  var validation_section_1_Q1 = validatorTextfield("section_1_Q1", "error_section_1_Q1")
  var validation_section_1_Q2 = validatorRadioButtonGroup("section_1_Q2", "error_section_1_Q2")
  
  // Display Generic Error message
  if (validation_section_1_Q1 && validation_section_1_Q2) {
    error_section_1.style.display = "none"
    // Display corresponding section based on the value selected on radio button
    var inputValue
    inputValue = document.querySelector('input[name="section_1_Q2"]:checked').value
    if(inputValue == "Yes") {
      // Go to Section 2
      wrapperSection_1.style.display = "none"
      wrapperSection_2.style.display = "flex"
    } else {
      // Go to Section 3
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

  var validation_section_2_Q1 = validatorTextfield("section_2_Q1", "error_section_2_Q1")

  //Display Generic Error Message or go to next section
  if (validation_section_2_Q1) {
    error_section_2.style.display = "none"
    wrapperSection_2.style.display = "none"
    section_4_previous_section = "customer-intake-form-section-2"
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
  var validation_section_3_Q2 = validatorTextfield("section_3_Q1", "error_section_3_Q1")

  // Display Generic Error Message or go to next section
  if (validation_section_3_Q2) {
    error_section_3.style.display = "none"
    wrapperSection_3.style.display = "none"
    wrapperSection_4.style.display = "flex"
    section_4_previous_section = "customer-intake-form-section-3"
  } else {
    error_section_3.style.display = "flex"
  }
})





// Section 4 Handling
const section_4_previous = document.querySelector("#section-4-previous")
const section_4_submit = document.querySelector("#section-4-submit")

section_4_previous.addEventListener("click", function(){
  wrapperSection_4.style.display = "none"
  document.querySelector(`#${section_4_previous_section}`).style.display = "flex"
})

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
  var validation_section_4_Q4_number = validatorNumberTextfield("section_4_Q4", "error_section_4_Q4_number")
  var validation_section_4_Q5_number = validatorNumberTextfield("section_4_Q5", "error_section_4_Q5_number")
  var validation_section_4_Q7 = validatorTextfield("section_4_Q7", "error_section_4_Q7")
  var validation_section_4_Q11 = validatorTextfield("section_4_Q11", "error_section_4_Q11")
  var validation_section_4_Q12 = validatorTextfield("section_4_Q12", "error_section_4_Q12")

  // Radio Button Group Validation
  var validation_section_4_Q1 = validatorRadioButtonGroup("section_4_Q1", "error_section_4_Q1")
  var validation_section_4_Q2 = validatorRadioButtonGroup("section_4_Q2","error_section_4_Q2",  "section_4_Q2_Other", "section_4_Q2_Other_Textfield")
  var validation_section_4_Q8 = validatorRadioButtonGroup("section_4_Q8","error_section_4_Q8",  "section_4_Q8_Other", "section_4_Q8_Other_Textfield")

  // Checkbox Group Validation
  var validation_section_4_Q6_count_3 =  validatorCheckboxCount("section_4_Q6_group", "error_section_4_Q6_count", 3)
  var validation_section_4_Q9 = validatorCheckboxGroup("section_4_Q9_group", "error_section_4_Q9", "section_4_Q9_Other", "section_4_Q9_Other_Textfield")
  // Display Generic Error Message or go to the next section
  if (validation_section_4_Q1 && 
      validation_section_4_Q2 && 
      validation_section_4_Q4_number && 
      validation_section_4_Q5_number && 
      validation_section_4_Q6_count_3 && 
      validation_section_4_Q7 && 
      validation_section_4_Q8 && 
      validation_section_4_Q9 &&
      validation_section_4_Q11 && 
      validation_section_4_Q12) {
     
        error_section_4.style.display = "none"
        document.querySelector("#btn-submit").click()
  } else {
    error_section_4.style.display = "flex"
  }
})

