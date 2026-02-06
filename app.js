// JavaScript functionality for the climbing plan web app

// Function to log current date and time
function logCurrentDateTime() {
    const now = new Date();
    console.log(`Current Date and Time (UTC): ${now.toISOString()}`);
}

// Function to add a climbing plan
function addClimbingPlan(plan) {
    // Logic to add the climbing plan
    console.log(`Adding climbing plan: ${plan}`);
}

// Function to display climbing plans
function displayClimbingPlans(plans) {
    plans.forEach(plan => {
        console.log(`Climbing Plan: ${plan}`);
    });
}

// Example usage
logCurrentDateTime();

// Example climbing plans
const plans = ['Climb Mount Everest', 'Hike in the Alps', 'Rock climb at Joshua Tree'];
displayClimbingPlans(plans);