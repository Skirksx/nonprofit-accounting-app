const yearPicker = document.querySelector('#budget-year');
const fiscalYearLabel = document.querySelector('.fiscal-note strong');
const fiscalYearDates = document.querySelector('.fiscal-note p');
const allocationYear = document.querySelector('.budget-panel .eyebrow');

export function rotaryYearDates(value) {
  const [startYear, endYear] = value.split('-').map(Number);
  return `This budget covers July 1, ${startYear} through June 30, ${endYear}.`;
}

export function updateBudgetYear(value) {
  fiscalYearLabel.textContent = `Rotary year: ${value}`;
  fiscalYearDates.textContent = rotaryYearDates(value);
  allocationYear.textContent = `${value} budget`;
}

yearPicker.addEventListener('change', (event) => updateBudgetYear(event.target.value));
