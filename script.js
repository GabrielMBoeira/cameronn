function startVideoFromCamera() {

    const specs = {
        video: { width: 1080 },
        audio: false
    }

    // const specs = {
    //     video: { width: 1080, height: 200 },
    //     audio: false
    // }

    // const specs = {
    //     video: { width: 1080, aspectRatio: 21 / 9 },
    //     audio: false
    // }

    navigator.mediaDevices.getUserMedia(specs).then(stream => {

        const videoElement = document.querySelector("#video")

        videoElement.srcObject = stream
    }).catch(err => { console.log(err) })

}

window.addEventListener("DOMContentLoaded", startVideoFromCamera())