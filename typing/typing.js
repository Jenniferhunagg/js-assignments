const typing =[
    [82,76,85,89,85,83,88,92,91,90,91,86,91 ],
    [25,21,26,32,29,29,33,40,38,34,35,36,83 ],
]
let sumAcc= 0
let sumWPM=0
typing[0].forEach(function(element) {
    sumAcc = sumAcc + element
})
let avgAcc = sumAcc / typing[0].length
document.querySelector(".scoreAccAv").innerText = avgAcc

typing[1].forEach(function(element) {
    sumWPM = sumWPM + element
})
let avgWPM = sumWPM / typing[0].length
document.querySelector(".scoreWPMAv").innerText = avgWPM

let lastAcc = typing[0][typing[0].length - 1];
document.querySelector(".latesAcc").innerText = "Accuracy:" + lastAcc

let lastWPA = typing[1][typing[1].length - 1];
document.querySelector(".latestWAP").innerText = "WPM:" +lastWPA

const biggest_numberWPM = Math.max(...typing[1]);
document.querySelector(".scoreWPM").innerText = biggest_numberWPM

const biggest_numberAcc = Math.max(...typing[0]);
document.querySelector(".scoreAcc").innerText = biggest_numberAcc