import styles from "../styles/Countdown.module.css"


export default function Countdown() {

    let countDownDate = new Date("Jan 1, 2030 12:00:00")

    let countDownFunction = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        
         
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let newDays = Math.floor(days - (years * 365))
        let years = Math.floor( days - (years*365))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        console.log(newDays)
    
        if (distance < 0) {
            clearInterval(countDownFunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000) 


    return (
        <div>
            <h1 className={styles.main} id="countdown">test</h1>
        </div>
    )
}