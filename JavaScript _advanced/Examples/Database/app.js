const renderChache = {

}


const search = (e) => {
    let phrase = e.target.value
    data.employees = data.employees.filter(employee => {
        return employee.className.startsWith(phrase)
    })
    Render(content.data)
}




const Render = (parentElement, data) => {
    // CURRENT TASK:
    // Finish debugging code at line 26, it will make more copies than needed for no reason (no found reason).
    parentElement.innerHTML = ''


    const table = document.createElement('table')
    let tr
    let td 
    let ul
    let li
    let a
    let input

    //Collumn headers
    if(renderChache.headers) {
        tr = renderChache.headers
    }else {
        tr = document.createElement("tr")
        data.fields.forEach(key => {
            th = document.createElement('th')
            th.innerText = key
            tr.appendChild(th)
        })
        renderChache.headers = tr
    }
    table.appendChild(tr)

    //Search Form
    if (renderChache.searchForm) {
        tr = renderChache.searchForm
    } else {
        let form = document.createElement("form")
        let input = document.createElement("input")
        input.placeholder = "Search data"
        input.addEventListener('keyup', (e) =>{search(e, data)})
    
        tr = document.createElement("tr")
        td = document.createElement('td')
        td.colSpan = 6
        td.className = "search-bar"
        
        form.append(input)
        td.appendChild(form)
        tr.appendChild(td)
        renderChache.searchForm = tr
    }
    table.appendChild(tr)
    input = tr.firstElementChild.firstElementChild.firstElementChild

    //Employees
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
                    // console.log(contact)
                    
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
    input.focus()
}

const content = document.getElementById('content')
Render(content, data)