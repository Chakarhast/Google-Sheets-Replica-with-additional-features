document.addEventListener('DOMContentLoaded', (event) => {
    generateTableHeaders();
    generateTableBody();
});

function generateTableHeaders() {
    const headerRow = document.querySelector('#gridTable thead tr');
    for (let i = 0; i < 16; i++) {
        const th = document.createElement('th');
        th.textContent = String.fromCharCode(65 + i);
        headerRow.appendChild(th);
    }
}

function generateTableBody() {
    const tbody = document.querySelector('#gridTable tbody');
    for (let j = 1; j <= 100; j++) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = j;
        row.appendChild(th);
        
        for (let k = 0; k < 16; k++) {
            const td = document.createElement('td');
            switch (`${j}-${k}`) {
                case '7-7':
                    td.id = "H7";
                    td.onmouseover = animation1_hello; // Change to call the function on mouseover
                    td.onmouseleave = resetCell; // Reset the cell on mouse leave
                    td.onclick = changeWhiteToBlack;

                    break;
                default:
                    //td.onclick = () => highlightCell(td);
                    //td.ondblclick = () => editCell(td);
                    //td.onmouseover = () => _3DCell(td);
                    break;
            }
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
}

function animation1_hello() {
    console.log('H7 cell clicked!');
    const cell = document.getElementById('H7');
    expandCell(cell); 
}

function expandCell(cell) {
    console.log('Expanding cell...');
    cell.style.width = '400px'; 
    cell.style.height = '200px'; 
    
}

function resetCell() {
    console.log('Resetting cell...');
    const cell = document.getElementById('H7');
    cell.style.width = ''; 
    cell.style.height = ''; 
    cell.style.backgroundColor = ''; 
    
}

