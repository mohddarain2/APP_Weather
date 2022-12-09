const API_KEY =`2f1529d5c73a063ca5bb0e2b51d3251f`
//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form =document.querySelector("form")
const search =document.querySelector("#search")
const weather =document.querySelector("#weather")

form.addEventListener("submit",(event)=>{
    getWeather(search.value)
    event.preventDefault();
})
 
const getWeather= async(city)=>{
    weather.innerHTML='<h1>Loading...</h1>'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return  showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod=="404"){
        weather.innerHTML='<h1>City not found</h1>'
        return;
    }
    weather.innerHTML =` <div>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        </div>
                        <div>
                            <h3>${data.main.temp}℃</h3>
                            <h3>${data.weather[0].main}</h3>
                        </div>`
}

let state = document.getElementById("two")
let cityVal = document.getElementById("three")

let changeCity = (stateVal)=>{
    var str = "";
    if(stateVal =="Punjab"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Amritsar'>Amritsar</option>"

    }else if(stateVal == "MP"){
        str = "<option value='audi'>Choose City</option>";
        str +="<option value='Indore'>Indore</option>";
        str +="<option value='Bhopal'>Bhopal</option>";
        str +="<option value='Ujjain'>Ujjain</option>"; 
        str +="<option value='Katni'>Katni</option>";
        str +="<option value='Jabalpur'>Jabalpur</option>"; 
        str +="<option value='Gwalior'>Gwalior</option>";
    }else if(stateVal == "Chattishgarh"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Raipur'>Raipur</option>"
        str +="<option value='Bilaspur'>Bilaspur</option>"
        str +="<option value='Durg'>Durg</option>"
        str +="<option value='Raigarh'>Raigarh</option>"
        str +="<option value='Korba'>Korba</option>"
        str +="<option value='Mahasamund'>Mahasamund</option>"
    }else if(stateVal == "Maharastra"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Mumbai'>Mumbai</option>"
        str +="<option value='Pune'>pune</option>"
        str +="<option value='Nagpur'>Nagpur</option>"
        str +="<option value='Nashik'>Nashik</option>"
    }
    else if(stateVal == "Himachal Pradesh"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Shimla'>Shimla</option>"
        str +="<option value='Solan'>Solan</option>"
        str +="<option value='Mandi'>Mandi</option>"
        str +="<option value='Chamba'>Chamba</option>"
        str +="<option value='Kullu'>Kullu</option>"
        str +="<option value='Mandi'>Mandi</option>"
    }
    else if(stateVal == "Manipur"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Dispur'>Dispur</option>"
        str +="<option value='Imphal'>Imphal</option>"
        str +="<option value='Churachandpur'>Churachandpur</option>"
        str +="<option value='Bishnupur'>Bishnupur</option>"
        str +="<option value='Uashik'>Ukhrul</option>"
        str +="<option value='Tamenlong'>Tamenglong</option>"
    }
    else if(stateVal == "Haryana"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Ambala'>Ambala</option>"
        str +="<option value='Rohtak'>Rohtak</option>"
        str +="<option value='Hisar'>Hisar</option>"
        str +="<option value='Karnal'>Karnal</option>"
        str +="<option value='Panipat'>Panipat</option>"
        str +="<option value='Gurugram'>Gurugram</option>"
    }
    else if(stateVal == "Nagaland"){
        str = "<option value='audi'>Choose City</option>"
        str +="<option value='Kohima'>Kohima</option>"
        str +="<option value='Dimapur'>Dimapur</option>"
        str +="<option value='Mokokchung'>Mokokchung</option>"
        str +="<option value='Wokha'>Wokha</option>"
        str +="<option value='Phek'>Phek</option>"
        str +="<option value='Soma'>Soma</option>"
    }else if(stateVal == "Andhra Pradesh"){
        var str = "<option value='audi'>Choose City</option>"
        str += "<option value='Amravati'>Amravati</option>"
        str += "<option value='vishakhapatnam'>Vishakhapatnam</option>"
        str += "<option value='Vijaywada'>Vijaywada</option>"
        str += "<option value='Tirupati'>Triputi</option>"
        str += "<option value='Kakinada'>Kakinada</option>"
        str += "<option value='Nellore'>Nellore</option>"
        str += "<option value='Kurnool'>Kurnool</option>"
        str += "<option value='Guntur'>Guntur</option>"
        str += "<option value='Chittoor'>Chittoor</option>"
        str += "<option value='Srikakulam'>Srikakulam</option>"
        }else if(stateVal == "Punjab"){
            var str = "<option value='audi'>Choose City</option>"
             str += "<option value='Chabdigarh'>Chandigarh</option>"
             str += "<option value='Amritsar'>Amritsar</option>"
             str += "<option value='Ludhiana'>Ludhiana</option>"
             str += "<option value='Jalandar'>Jalandar</option>"
             str += "<option value='Bathindab'>Bathinda</option>"
             str += "<option value='Patiala'>Patiala</option>"
             str += "<option value='Pathankot'>Pathankot</option>"
             str += "<option value='Hoshiarpur'>Hoshiarpur</option>"
        }else if(stateVal == "Uttar Pradesh"){
            var str = "<option value='audi'>Choose City</option>"
            str += "<option value='Lucknow'>Lucknow</option>"
            str += "<option value='Kanpur'>Kanpur</option>"
            str += "<option value='Varanasi'>Varanasi</option>"
            str += "<option value='Prayagraj'>Prayagraj</option>"
            str += "<option value='Agra'>Agra</option>"
            str += "<option value='Jhansi'>Jhansi</option>"
            str += "<option value='Meerut'>Meerut</option>"
            str += "<option value='Bareilly'>Bareilly</option>"
            str += "<option value='Gorakhpur'>Gorakhpur</option>"
            str += "<option value='Mathura'>Mathura</option>"
        }else if(stateVal == "Tripura"){
            var str = "<option value='audi'>Choose City</option>"
            str += "<option value='Agartala'>Agartala</option>"
            str += "<option value='Belonia'>Belonia</option>"
            str += "<option value='Kailashahar'>Kailashahar</option>"
            str += "<option value='Sabroom'>Sabroom</option>"
            str += "<option value='Dharmanagar'>Dharmanagar</option>"
            str += "<option value='Kamalpur'>Kamalpur</option>"
            str += "<option value='Amarpur'>Amarpur</option>"
        }else if(stateVal == "JammuKashmir"){
            var str = "<option value='audi'>Choose City</option>"
            str += "<option value='Srinagar'>Srinagar</option>"
            str += "<option value='Jammu'>Jammu</option>"
            str += "<option value='Udhampur'>Udhampur</option>"
            str += "<option value='Anantnag'>Anantnag</option>"
            str += "<option value='Baramula'>Baramula</option>"
            str += "<option value='Leh'>Leh</option>"
            str += "<option value='Samba'>Samba</option>"
            str += "<option value='Pulwama'>Pulwama</option>"
            str += "<option value='Doda'>Doda</option>"
            str += "<option value='Sopur'>Sopur</option>"
        }

    cityVal.innerHTML = str;
    console.log(str);
}

state.addEventListener("change",()=>{
    //state.value

    changeCity(state.value)

})

cityVal.addEventListener("change",()=>{
    search.value = cityVal.value
    getWeather(cityVal.value)
})



