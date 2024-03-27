const Render = (parentElement, data) => {

    const table = document.createElement('table')
    let tr
    let td 
    let ul
    let li
    let a

    data.employees.forEach(employee => {
        
        tr = document.createElement('tr')

        Object.keys(employee).forEach( prop => {
            td = document.createElement('td')
            if (prop == 'photo') {
                let img = document.createElement('img')
                img.src = (employee[prop])
                img.classList.add('profile-img')
                td.appendChild(img)
            }else if (prop == 'contacts') {
                ul = document.createElement('ul')
                employee.contacts.forEach(contact => {
                    li = document.createElement('li')
                    a = document.createElement('a')
                    
                    a.innerHTML = contact
                    a.href = contact

                    li.appendChild(a)
                    ul.appendChild(li)
                })
                td.appendChild(ul)
            }else {
                td.innerText = employee[prop]
            }
            tr.appendChild(td)
        })
        table.appendChild(tr)    
    });
    parentElement.appendChild(table)
}

const content = document.getElementById('content')
Render(content, data)