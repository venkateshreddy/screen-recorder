var Recorder = require('screen-capture-recorder');

class ScreenRecorder {
    constructor(width, height) {
        this.recorder = new Recorder({ x:0, y:0, w:width, h:height }, Math.floor(Math.random() * 2000) + 1000);
    }

    async startRecording() {
        const warmuperr = await this.recorder.warmup(async err => {
            console.log("Warmup error ", err);
            await this.recorder.StartRecord(err => {
                console.log("Start record error ", err);
            });
        });
    }

    async stopRecording() {
        this.recorder.once('done', function(err, tmp_path) {
            const path = `C://Users/vekaliki/Videos/screen-capture/${Math.random()}.mp4`;
            if(!err) {
                require('fs').renameSync(tmp_path, path);
                console.log(path);
            } else {
                console.log(err);
            }
        });
        const path = await this.recorder.StopRecord(err => {
            console.log("stop record error ", err);
        });
    }
}
module.exports = ScreenRecorder;