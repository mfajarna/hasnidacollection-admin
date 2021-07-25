import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackgroundTimer from "react-native-background-timer";
import { useEffect } from 'react'

const Timer = () => {
    const [secondsLeft, setSecondsLeft] = useState(10);
    const [timerOn, setTimerOn] = useState(false);
    
    useEffect(() => {
        if(timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();

        return () => {
            BackgroundTimer.stopBackgroundTimer();
        }
    },[timerOn]);
    useEffect(() => {
        if(secondsLeft === 0){
            BackgroundTimer.stopBackgroundTimer();
        }
    }, [secondsLeft])

    useEffect(() => {
        setTimerOn(true);
    },[])
    const startTimer = () => {
        BackgroundTimer.runBackgroundTimer(() => {
            setSecondsLeft(secs => {
                if(secs> 0 ) return secs -1
                else return 0
            })
        }, 1000)
    }
    const clockify = () => {
        let hours = Math.floor(secondsLeft / 60 / 60)
        let mins = Math.floor((secondsLeft / 60) % 60)
        let seconds = Math.floor(secondsLeft % 60)


        let displayHours = hours < 10 ? `0${hours}` : hours
        let displayMins = mins < 10 ? `0${mins}` : mins
        let displaySecs = seconds < 10 ? `0${seconds}` : seconds

        return {
            displayHours,
            displayMins,
            displaySecs,
        }
    }
    return (
            <View style={styles.content}>
                <Text style={styles.time}>{clockify().displayHours} Hours {clockify().displayMins} Mins{" "}
                {clockify().displaySecs} Secs</Text>
            </View>
    )
}

export default Timer

const styles = StyleSheet.create({
        content:{
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    time: {
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 15,
    },

})
