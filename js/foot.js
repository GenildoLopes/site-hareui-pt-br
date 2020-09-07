// ATUAL YEAR (Footer)

const newYear = new Date()
const atualYear = newYear.getFullYear()

// Get year
const boxYear = document.querySelector('#box-year') 

boxYear.innerHTML = `${atualYear}`