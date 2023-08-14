// Overall Variable
const text_color_default = "#101820"
const text_color_error = "#ff3b30"
const wrapperSection_1 = document.querySelector("#hotel-booking-form-section-1")
const wrapperSection_2 = document.querySelector("#hotel-booking-form-section-2")
const wrapperSection_3 = document.querySelector("#hotel-booking-form-section-3")
const wrapperSection_4 = document.querySelector("#hotel-booking-form-section-4")
const formHotelBooking = document.querySelector("#hotel-booking-form")

formHotelBooking.addEventListener("submit", async (e) => {
	e.preventDefault()
});

// Submit button handling
const section_4_submit = document.querySelector("#section-4-submit") 

// Handle the radio other option
// Check the other radio button when the textfield has been filled
RadioButtonCheckboxSelectOther("section_4_Q1_Other_Textfield", "section_4_Q1_group", "section_4_Q1_Other")

// form input validation
section_4_submit.addEventListener("click", function() {
  // General Error Message 
  const error_section_4 = document.querySelector("#error_section_4")

  // Textfield Validation
  var validation_section_1_Q1 = validatorTextfield("section_1_Q1", "error_section_1_Q1")
  var validation_section_1_Q5 = validatorTextfield("section_1_Q5", "error_section_1_Q5")
  var validation_section_3_Q1 = validatorTextfield("section_3_Q1", "error_section_3_Q1")
  var validation_section_3_Q2 = validatorTextfield("section_3_Q2", "error_section_3_Q2")
  var validation_section_3_Q3 = validatorTextfield("section_3_Q3", "error_section_3_Q3")
  var validation_section_3_Q4 = validatorTextfield("section_3_Q4", "error_section_3_Q4")
  var validation_section_3_Q5 = validatorTextfield("section_3_Q5", "error_section_3_Q5")

  // Number Textfield Validation
  var validation_section_1_Q2_number = validatorNumberTextfield("section_1_Q2", "error_section_1_Q2_number")
  var validation_section_1_Q3_number = validatorNumberTextfield("section_1_Q3", "error_section_1_Q3_number")
  var validation_section_1_Q4_number = validatorNumberTextfield("section_1_Q4", "error_section_1_Q4_number")

  // Radio Button Group Validation
  var validation_section_1_Q7 = validatorRadioButtonGroup("section_1_Q7", "error_section_1_Q7")
  var validation_section_1_Q8 = validatorRadioButtonGroup("section_1_Q8", "error_section_1_Q8")
  var validation_section_4_Q1 = validatorRadioButtonGroup("section_4_Q1", "error_section_4_Q1", "section_4_Q1_Other", "section_4_Q1_Other_Textfield")

  // Display Generic Error Message or go to the next section
  if (validation_section_1_Q1 &&
    validation_section_1_Q2_number &&
    validation_section_1_Q3_number &&
    validation_section_1_Q4_number &&
    validation_section_1_Q5 && 
    validation_section_1_Q7 && 
    validation_section_1_Q8 && 
    validation_section_3_Q1 &&
    validation_section_3_Q2 &&
    validation_section_3_Q3 &&
    validation_section_3_Q4 &&
    validation_section_3_Q5 && 
    validation_section_4_Q1 ) {
      error_section_4.style.display = "none"
      document.querySelector("#btn-submit").click()
      
    } else {
      error_section_4.style.display =  "flex"

    }
})