// Render the Expert Name
const url = new URL(window.location)
const urlExpertId = url.searchParams.get("expert_id") || ""
var advisorId = ""
var advisorIdValidation = false

if (urlExpertId == "" ) {
  advisorId = "Caribou"
} else {
  advisorId = urlExpertId
}

// Pass the advisor id into the hidden field
document.querySelector("#hidden_field_expert_id").value = advisorId

// Get the div element with class "form-advisor-collection-list"
var collectionList = document.querySelector(".form-advisor-collection-list");

// Get all the advisor wrapper div elements
var advisorWrappers = collectionList.querySelectorAll(".form-advisor-item-wrapper");

// Loop through each advisor wrapper div
advisorWrappers.forEach(function(advisorWrapper) {
  // Check if the class list of the advisor wrapper contains the advisor name
  if (advisorWrapper.classList.contains(advisorId)) {
    advisorIdValidation = true;
    advisorWrapper.style.display = "flex";
  }
});

if (advisorIdValidation == false){
  document.querySelector(".form-advisor-item-wrapper.caribou").style.display = "flex"
}

// Render the client name
const urlCustomer = url.searchParams.get("customer") || ""

if (urlCustomer != "") {
  const htmlCustomerName = document.querySelector(".form-paragraph-greeting-customer-name")
  htmlCustomerName.textContent = urlCustomer
  htmlCustomerName.style.color = "#FF9206"
  
}
