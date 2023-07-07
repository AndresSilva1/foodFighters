let showName = document.getElementById("showName");
const clickButton = (e) => {
    e.preventDefault()
    showName.innerHTML = " "
    let cityName = document.getElementById("job-location").value
    console.log(cityName);
    // const result = await axios.get(`https://controllerdata.lacity.org/resource/v2mg-qsxf.json?city=${cityName}`);
    // console.log(result);
    fetch(`https://controllerdata.lacity.org/resource/v2mg-qsxf.json?city=${cityName}`)
        .then((response) => response.json())
        // .then((response) => console.log(response))
        .then((response) => appendData(response))
        .catch((err) => console.error(err));
}

let homePageForm = document.getElementById("homePageForm");
homePageForm.addEventListener("submit", clickButton);

const appendData = (data) => {
    console.log(data);
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            let nameDiv = document.createElement("div");
            nameDiv.textContent = data[i].name
            showName.append(nameDiv)

            let streetDiv = document.createElement("div");
            streetDiv.textContent = data[i].street_address;
            showName.append(streetDiv);

            let zipCodeDiv = document.createElement("div");
            zipCodeDiv.textContent = data[i].zip_code;
            showName.append(zipCodeDiv);

            let phoneDiv = document.createElement("div");
            phoneDiv.textContent = data[i].phone;
            showName.append(phoneDiv);

            //Added save button
            let buttonDiv = document.createElement("button");
            buttonDiv.textContent = "save";
            showName.append(buttonDiv);
            // an attempt to get the save button to work
            // buttonDiv.addEventListener("click", function(e){
            //     e.stopPropagation()
            //     console.log(data[i])
            // })

            buttonDiv.addEventListener("click", saveLocation(data[i]))
        }

    }
}
//Working 
const saveLocation = (location) => {
    console.log(location);
}

