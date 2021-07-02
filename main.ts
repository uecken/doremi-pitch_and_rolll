input.onButtonPressed(Button.A, function () {
	
})
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (input.rotation(Rotation.Pitch) < -45) {
            music.ringTone(262)
        } else if (input.rotation(Rotation.Pitch) < 0) {
            music.ringTone(294)
        } else if (input.rotation(Rotation.Pitch) < 45) {
            music.ringTone(330)
        } else if (input.rotation(Rotation.Pitch) < 90) {
            music.ringTone(349)
        } else {
        	
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (input.rotation(Rotation.Roll) < -45) {
                music.ringTone(392)
            } else if (input.rotation(Rotation.Roll) < 0) {
                music.ringTone(440)
            } else if (input.rotation(Rotation.Roll) < 45) {
                music.ringTone(494)
            } else if (input.rotation(Rotation.Roll) < 90) {
                music.ringTone(523)
            }
        } else {
            music.stopAllSounds()
        }
        basic.pause(50)
    }
})
