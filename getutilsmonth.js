// Create a new date object for March of the current year

const date = new Date();
date.setMonth(2);

// March is the third month, with zero-based indexing

// Get the last day of March
const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

// Loop backwards from the last day of March to find the last Friday

for (let day = lastDayOfMonth.getDate(); day >= 1; day--) {
  const testDate = new Date(date.getFullYear(), date.getMonth(), day);
  if (testDate.getDay() === 5) {
    // Friday has a numeric value of 5
    console.log(testDate);
    break; // or return testDate
  }
}
