// total will store the running total, starting at 0
var total = 0;

// Set the currency
function currencyFormat(currency){
  return "£" + currency.toFixed(2);
}

// enter() gets the input, and updates the total
function enter(event) {
  // Prevent form resubmission
  event.preventDefault();
  // Read the user input
  var entry = $("#newEntry").val();
  // Convert to decimal
  entry = parseFloat (entry);
  // Round to 2 decimal places
  // entry = entry.toFixed(2);
  // Add item to the end of the table, just like using  inner HTML, "append" lets us keep adding
  $("#entries").append("<tr><td></td><td>" + currencyFormat(entry) + "</td></tr>");
  // Reassign the running total (total is now total plus the new entry)
  total = total + entry;
  // Display the updated total
  $('#total').html(currencyFormat(total));
  // Clears out the entry box each time used
  $("#newEntry").val("");
}
// When the user submits the form the "enter" function runs (the variable above the function wont re run as its not in the function)
$('#entry').submit(enter);
