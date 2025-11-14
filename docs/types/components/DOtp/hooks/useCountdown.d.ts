export default function useCountdown(seconds: number): {
    secondsLeft: number;
    restartCountdown: () => void;
};
