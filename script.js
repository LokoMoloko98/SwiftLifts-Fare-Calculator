document.addEventListener("DOMContentLoaded", function() {
  updateTripType(); // Call this function on page load to set the correct label.
});

function updateTripType() {
  const tripType = document.getElementById("tripType").value;
  const daysMissedLabel = document.querySelector('label[for="daysMissed"]');
  
  if (tripType === "return") {
      daysMissedLabel.textContent = "Trips Missed:";
  } else {
      daysMissedLabel.textContent = "Days Missed:";
  }
}


function calculateFare() {
  const weeklyFee = parseFloat(document.getElementById("weeklyFee").value);
  const tripsMissed = parseInt(document.getElementById("daysMissed").value);
  const tripType = document.getElementById("tripType").value;
  
  let fareAmount;
  const totalTrips = tripType === "return" ? 10 : 5; // 10 for return trips, 5 for morning only
  const tripsTaken = totalTrips - tripsMissed;

  // Check if no travel occurred
  if (tripsMissed >= totalTrips) {
      fareAmount = 0; // No fare if no travel
  } else if (tripsTaken <= totalTrips * 0.6) {
      // Calculate fare based on trips taken if 60% or less
      const fareRate = tripType === "return" ? 0.15 : 0.30; // 15% for return, 30% for morning only
      fareAmount = fareRate * weeklyFee * tripsTaken;
  } else {
      // Full weekly fare otherwise
      fareAmount = weeklyFee;
  }
  
  document.getElementById("result").innerHTML = `Fare amount: R${fareAmount.toFixed(2)}`;
}
