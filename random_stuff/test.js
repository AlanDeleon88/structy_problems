function conflictInfo(meetings) {
    // using a map function to parse the data into usable integers
    // will return in format of [ [0000,00], [0000, 00]]
    const mappedMeetings = meetings.map((meet) =>{
        let parsedTime = meet.split(',')
        if(parsedTime[0] === '2400' ){
            parsedTime[0] = '0000'
        }
        return[Number(parsedTime[0]), Number(parsedTime[1])]
    })
    //setting up variables to store outcomes
    let duration = 0;
    let totalConflict = 0;
    let conflictObj = {};
    console.log('length test', mappedMeetings.length)

    // Nested for loop to compare all the times together
    for(let i = 0; i < mappedMeetings.length; i++){
        let currentMeeting = mappedMeetings[i]
        let [currentStart, currentDuration] = currentMeeting
        let currentEnd = currentStart + currentDuration
        let currentJoin = String(currentEnd)
        console.log(i)
        console.log('test', currentJoin)
        if( Number(currentJoin[2] + currentJoin[3]) > 30){
            console.log(currentEnd - 60 + 100)
            currentEnd = currentEnd - 60 + 100
        }

        for(let j = i+1; j < mappedMeetings.length; j++){
            //Now we are going to compare the meetings here.
            let comparedMeeting = mappedMeetings[j]
            let [comparedStart] = comparedMeeting
            // checking if the compared meeting is starting between the timeframes of start and end of the current meeting.
            if((comparedStart > currentStart) && (comparedStart < currentEnd)){
                //If this is true, we found a conflict.
                // first i need to find out which meeting is earlier
                duration += Math.abs((comparedStart - currentEnd))
                if((!conflictObj[comparedStart]) && (!conflictObj[currentStart])){
                    conflictObj[comparedStart] = true
                    conflictObj[currentStart] = true
                    totalConflict +=1
                }
            }
            // console.log(conflictObj)

        }

    }
    if(totalConflict > 0){
        return `conflict,${totalConflict},${duration}`
    }
    else{
        return 'good'
    }

}

let arr =   [ '0800,30' ,  '1030,45' ,  '1100,30' ,  '0815,30']
console.log(conflictInfo(arr))
