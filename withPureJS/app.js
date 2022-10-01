const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: '08:11',
        destination: 'INDIA',
        flight: 'DX 203',
        gate: 'A 01',
        remark: 'ON TIME'
    },
    {
        time: '2:39',
        destination: 'OMAN',
        flight: 'HG 219',
        gate: 'S 03',
        remark: 'CANCELLED'
    },
    {
        time: '12:39',
        destination: 'LONDON',
        flight: 'CL 320',
        gate: 'C 31',
        remark: 'DELAYED'
    },
]

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr');

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td');

            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div');

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }

            tableBody.append(tableCell);
        }
        tableBody.append(tableRow);
    }
}

populateTable();