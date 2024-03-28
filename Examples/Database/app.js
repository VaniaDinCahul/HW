const Render = (parentElement, data) => {
    // CURRENT TASK:
    // Finish debugging code at line 26, it will make more copies than needed for no reason (no found reason).

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
                
                Object.keys(employee.contacts).forEach( contact =>{
                    console.log(contact)
                    
                    li = document.createElement('li')
                    a = document.createElement('a')
                    
                    if (contact == 'display') {
                        a.innerHTML = employee.contacts[contact]
                        a.href = employee.contacts[contact]
                    } else {
                        a.innerHTML = contact
                        a.href = employee.contacts[contact]
                    }
                    
                    // console.log(contact)
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