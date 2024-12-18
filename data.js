export const tasks = [
    {
        name: 'Задание №1', 
        content: `<p class="task">Введите информацию о доходах за первый квартал текущего года</p>
            <div class="inputForm">
            <label>Первый месяц:</label>
            <input type="number" id="salaryInput1">
            <label>Второй месяц:</label>
            <input type="number" id="salaryInput2">
            <label>Третий месяц:</label>
            <input type="number" id="salaryInput3">
        </div>
        <button id="getSalary">Рассчитать</button>`
    },
    {
        name: 'Задание №2',
        content: `<p class='task'>Введите координаты (x,y) трёх точек</p>
        <div class='inputForm2'>
            <label>Координаты первой точки:</label>
            <input type="number" placeholder="x1" id="CoorX1">
            <input type="number" placeholder="y1" id="CoorY1">
            <label>Координаты второй точки:</label>
            <input type="number" placeholder="x2" id="CoorX2">
            <input type="number" placeholder="y2" id="CoorY2">
            <label>Координаты третьей точки:</label>
            <input type="number" placeholder="x3" id="CoorX3">
            <input type="number" placeholder="y3" id="CoorY3">
        </div>
        <button id="getSquare">Рассчитать</button>
        `
    },
    {
        name: 'Задание №3',
        content: `<p class='task'>Введите координаты точки</p>
        <div class='inputForm3'>
            <label>Координаты точки:</label>
            <input type="number" placeholder="x" id="x">
            <input type="number" placeholder="y" id="y">
        </div>
        <button id="getСoordinate">Рассчитать</button>
        `
    },
    {
        name: 'Задание №4',
        content: `<p class='task'>Введите значения переменных</p>
        <div class='inputForm4'>
            <label>Переменная <b>a</b>:</label>
            <input type="number" placeholder="a" id="varA">
            <label>Переменная <b>b</b>:</label>
            <input type="number" placeholder="b" id="varB">
        </div>
        <button id="getVariable">Рассчитать</button>
        `
    },
    {
        name: 'Задание №5',
        content: `<p class='task'>Введите значения радиуса</p>
        <div class='inputForm5'>
            <label>Радиус круга:</label>
            <input type="number" placeholder="10" id="radius">
        </div>
        <button id="getСircle">Рассчитать</button>
        `
    },
    {
        name: 'Задание №6',
        content: `<p class='task'>Введите значения радиуса</p>
        <div class='inputForm6'>
            <label>Радиус круга:</label>
            <input type="number" placeholder="10" id="radius">
        </div>
        <button id="getСircle">Рассчитать</button>
        `
    },
    {
        name: 'Задание №7',
        content: `<p class='task'>Введите значения радиуса</p>
        <div class='inputForm7'>
            <label>Центр окружности:</label>
            <input type="number" placeholder="x" id="coorX1">
            <input type="number" placeholder="y" id="coorY1">
            <label>Радиус круга:</label>
            <input type="number" placeholder="r" id="radius">
            <label>Координаты точки:</label>
            <input type="number" placeholder="x" id="coorX2">
            <input type="number" placeholder="y" id="coorY2">
        </div>
        <button id="getResult">Рассчитать</button>
        `
    },
    {
        name: 'Задание №8',
        content: `<p class='task'>Введите координаты двух точек</p>
        <div class='inputForm8'>
            <label>Координаты первой точки:</label>
            <div>
            <input type="number" placeholder="x1" id="coorX1">
            <input type="number" placeholder="y1" id="coorY1">
            </div>
            <label>Координаты второй точки:</label>
            <div>
            <input type="number" placeholder="x2" id="coorX2">
            <input type="number" placeholder="y2" id="coorY2">
            </div>
        </div>
        <button id="getResult">Рассчитать</button>
        `
    },
]