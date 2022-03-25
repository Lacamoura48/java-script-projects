

setInterval(() => {
    const theTime = new Date()
    const secHand = document.getElementById('senconds_hand')
    var theSeconds = theTime.getSeconds();
    var secToDegrees = ((theSeconds / 60) * 360)+90
    secHand.style.transform = `rotate(${secToDegrees}deg)`

    
    const minHand = document.getElementById('minute_hand')
    var theMinutes = theTime.getMinutes();
    var minToDegrees = ((theMinutes / 60) * 360)+90
    minHand.style.transform = `rotate(${minToDegrees}deg)`

    
    const hrHand = document.getElementById('hour_hand')
    var theHours = theTime.getHours();
    var hrToDegrees = ((theHours / 12) * 360)+90
    hrHand.style.transform = `rotate(${hrToDegrees}deg)`
    
}, 1000);
