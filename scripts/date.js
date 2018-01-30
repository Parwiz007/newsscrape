


var makeDate = function() {
 
  var d = new Date();
  
  var formattedDate = "";
  
  formattedDate += (d.getMonth() + 1) + "_";
  
  formattedDate += d.getDate() + "_";

  formattedDate += d.getFullYear();

  return formattedDate;
};

// Exporting the makeDate function so other files in the backend can use it.
module.exports = makeDate;
