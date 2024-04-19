const calendarDiv = document.getElementById('holiday-calendar')

navigator.geolocation.getCurrentPosition((position) => {

    let lat = position.coords.latitude
    let long = position.coords.longitude


    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longtitude=${long}$localityLanguage=en`)
        .then((response) => {
           return response.json()
        })
        .then((json) => {
            let countryCode = json.countryCod
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth()

            fetch(`https://date.nager.at/api/v3/publicgolidays/2024/AT/${year}/${countryCode}`)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    let dateISOS = date.toISOString().split('T')[0]
                    let holiday = json.find((day)=> {
                        return day.date == dateISOS
                    })
                    console.log(holiday)
                    if (holiday) {
                        let h3 = document.createElement('h3')
                        h3.innerText = holiday.localName
                        calendarDiv.appendChild(h3)

                    }
            })
        })
})
