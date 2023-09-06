const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentDay = currentTime.getDate();
const currentMonth = currentTime.getMonth();
const currentYear = currentTime.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

try{
    //home
    const mainImage = document.getElementById("main-image")
    const mainTitle = document.getElementById("main-title")
    const date = document.getElementById("date")


    if (currentHour < 12 & currentHour >= 6){
      mainTitle.textContent = "Good morning"
      mainImage.src = "../public/img/gm_image.png"
      date.textContent = currentDay + " " + months[currentMonth] + ", " + currentYear
    }
    if (currentHour >= 12){
        mainTitle.textContent = "Good afternoon"
        mainImage.src = "../public/img/af_image.png"
        date.textContent = currentDay + " " + months[currentMonth] + ", " + currentYear
    }
    if (currentHour >= 18){
        mainTitle.textContent = "Good Evening"
        mainImage.src = "../public/img/ev_image.jpg"
        date.textContent = currentDay + " " + months[currentMonth] + ", " + currentYear
    }
    if (currentHour >= 22 || currentHour < 6){
        mainTitle.textContent = "Good night"
        mainImage.src = "../public/img/gn_image.jpg"
        date.textContent = currentDay + " " + months[currentMonth] + ", " + currentYear
    }
}
catch{

}

try{
    //weather
    const WeatherContainer = document.getElementById("weather-container")
    const Nav = document.getElementById("nav")
    
    let SavedNumber
    function GetRandomNumber() {

        SavedNumber = localStorage.getItem('SavedNumber');
        if (SavedNumber === null) {

        const RandomNumber = Math.floor(Math.random() * 10) + 9;
        
        localStorage.setItem('SavedNumber', RandomNumber);

        } else {
        console.log(SavedNumber);
        }
    }
  
    GetRandomNumber();
    
    setTimeout(() => {

        localStorage.removeItem('SavedNumber');
        
        GetRandomNumber();
    }, 360000);
  
  

    if(currentHour >= 9 && currentHour < 18 && SavedNumber === 11 || SavedNumber === 13 || SavedNumber === 15 || SavedNumber === 17){
        WeatherContainer.style.background = "linear-gradient(180deg, rgba(155,175,201,1) 0%, rgba(84,110,144,1) 100%)"
        Nav.style.background = "rgba(84,110,144,1)"
    }
    else{
        if (currentHour < 12 & currentHour >= 6){
            WeatherContainer.style.background = "linear-gradient(180deg, rgba(135,206,235,1) 0%, rgba(255,111,97,1) 100%)"
            Nav.style.background = "rgba(255,111,97,1)"
        }
        if (currentHour >= 12){
            WeatherContainer.style.background = "linear-gradient(180deg, rgba(135,206,235,1) 0%, rgba(30,144,255,1) 100%)"
            Nav.style.background = "rgba(30,144,255,1)"
        }
        if (currentHour >= 18){
            WeatherContainer.style.background = "linear-gradient(180deg, rgba(255,204,92,1) 0%, rgba(255,111,97,1) 100%)"
            Nav.style.background = "rgba(255,111,97,1)"
        }
        if (currentHour >= 22 || currentHour < 6){
            WeatherContainer.style.background = "linear-gradient(180deg, rgba(0,0,139,1) 0%, rgba(17,17,17,1) 100%)"
            Nav.style.background = "rgba(17,17,17,1)"
        }
    }


}
catch{
    
}

let PageReload = () => {
    location.reload()
}

setInterval(PageReload, 3600000)

try{
    const SettingsBtn = document.getElementById("settings-btn")
    const SettingsBox = document.getElementById("settings-box")
    
    SettingsBtn.addEventListener("click", () => {
        SettingsBox.classList.toggle("is-active")
    })
}
catch{

}

try{
    const DarkMode = document.getElementById("dark-mode")
    const Circle = document.getElementById("circle")

    const SettingsBox = document.getElementById("settings-box")
    const BottomLayout = document.getElementById("bottom-layout")
    const SettingsTitle = document.getElementById("settings-title")
    const Nav = document.getElementById("nav")

    let Value = document.getElementsByClassName("value")
    let ToggleIcon = document.getElementsByClassName("toggle-icon")
    let ToggleCircle = document.getElementsByClassName("circle")
    let Icon = document.getElementsByClassName("icon")
    let Socials = document.querySelectorAll("svg")
    let NavIcons = document.getElementsByClassName("material-symbols-rounded")
    let Activity = document.getElementsByClassName("activity")
    let ActivityTitle = document.getElementsByClassName("activity-title")
    let ActivityTime = document.getElementsByClassName("activity-time")

    DarkMode.addEventListener("click", () => {
        Circle.classList.toggle("is-active")

        
        if(Circle.classList.contains("is-active")){
            SettingsBox.style = "background: var(--white); color: var(--black)"
            SettingsTitle.style = "color: var(--black)"
            BottomLayout.style = "background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%)"
            Nav.style = "background: var(--light-mode-gray)"
            
            Array.from(Value).forEach(e => {
                e.style = "background: var(--light-mode-gray); color: var(--black)";
            })

            Array.from(ToggleIcon).forEach(e => {
                e.style = "background: var(--light-mode-gray)"
            })
            
            Array.from(ToggleCircle).forEach(e => {
                e.style = "background: var(--white)"
            })
            
            Array.from(Icon).forEach(e => {
                e.style = "background: var(--light-mode-gray)"
            })
            
            Array.from(Socials).forEach(e => {
                e.style = "fill: var(--black)"
            })

            Array.from(NavIcons).forEach(e => {
                e.style = "color: var(--black)"
            })

            Array.from(Activity).forEach(e => {
                e.style = "background: var(--light-mode-gray)"
            })

            Array.from(ActivityTitle).forEach(e => {
                e.style = "color: var(--black)"
            })

            Array.from(ActivityTime).forEach(e => {
                e.style = "color: var(--black)"
            })
        }
        if(!Circle.classList.contains("is-active")){
            SettingsBox.style = ""
            SettingsTitle.style = ""
            Nav.style = ""
            BottomLayout.style = ""
            
            Array.from(Value).forEach(e => {
                e.style = "";
            })
            
            Array.from(ToggleIcon).forEach(e => {
                e.style = ""
            })
            
            Array.from(ToggleCircle).forEach(e => {
                e.style = ""
            })

            Array.from(Icon).forEach(e => {
                e.style = ""
            })

            Array.from(Socials).forEach(e => {
                e.style = ""
            })

            Array.from(NavIcons).forEach(e => {
                e.style = ""
            })

            Array.from(Activity).forEach(e => {
                e.style = ""
            })

            Array.from(ActivityTitle).forEach(e => {
                e.style = ""
            })

            Array.from(ActivityTime).forEach(e => {
                e.style = ""
            })
        }
    })
    
}
catch{

}
