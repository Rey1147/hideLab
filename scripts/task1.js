export const task1 = () => {    
    const content = document.getElementById('content')
    const button = document.getElementById('getSalary')

    document.getElementById('salaryInput1').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('salaryInput2').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('salaryInput3').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        const month1 = parseFloat(document.getElementById("salaryInput1").value) || 0
        const month2 = parseFloat(document.getElementById("salaryInput2").value) || 0
        const month3 = parseFloat(document.getElementById("salaryInput3").value) || 0

        const sum = (month1 + month2 + month3).toFixed(2)
        const persent = (sum * 0.13).toFixed(2)
        const withoutPersent = (sum * 0.87).toFixed(2)


        const result = `<div class="task1Result">
                        <p>Общая сумма зарплаты: <b/>${sum}</b></p>
                        <p>Процент от зарплаты: <b>${persent}</b></p>
                        <p>Сумма зарплаты с вычетом процента: <b>${withoutPersent}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}