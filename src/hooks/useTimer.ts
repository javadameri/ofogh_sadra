import React, { useEffect, useState } from 'react'

export const useTimer = ({ time }: { time: number }) => {
    const [seconds, setSeconds] = useState<number>(time);
    const [canResend, setCanResend] = useState<boolean>(false);

    useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [seconds]);

    const resendCode = () => {
        setSeconds(time);
        setCanResend(false);
    };

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    return {
        seconds,
        canResend,
        resendCode,
        formatTime
    }
}
