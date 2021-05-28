const ScreenRecorder = require("./recorder");
const screen = require('screenz');

async function record() {
    const recorder = new ScreenRecorder(screen.width, screen.height);
    if (recorder) {
        await recorder.startRecording();
        setTimeout(async () => await recorder.stopRecording(), 20000);
    } else {
        console.log("recorder not found")   
    }
}

record();
