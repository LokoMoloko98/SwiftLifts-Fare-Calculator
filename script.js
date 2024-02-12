function calculatePenalty() {
    const weeklyFee = parseFloat(document.getElementById("weeklyFee").value);
    const daysMissed = parseInt(document.getElementById("daysMissed").value);
    const tripType = document.getElementById("tripType").value;
    
    const returnTripPenalty = 0.15;
    const oneWayMorningPenalty = 0.30;
    
    const totalTrips = 5; // Assuming trips are from Monday to Friday
    const totalCost = totalTrips * weeklyFee;
    
    let penaltyRate;
    if (tripType === "return") {
      penaltyRate = returnTripPenalty;
    } else if (tripType === "one_way_morning") {
      penaltyRate = oneWayMorningPenalty;
    } else {
      alert("Invalid trip type");
      return;
    }
    
    const penaltyAmount = penaltyRate * totalCost * daysMissed / totalTrips;
    document.getElementById("result").innerHTML = `Fare amount: R${penaltyAmount.toFixed(2)}`;
  }
  