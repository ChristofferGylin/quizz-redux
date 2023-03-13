const millisToTime = (millis) => {

    let rest = millis % 60000;
    let minutes = (millis - rest) / 60000;
    millis = rest;
    rest = millis % 1000;
    let seconds = (millis - rest) / 1000;
    millis = rest;

    return { minutes, seconds, millis };

}

export default millisToTime;