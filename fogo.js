const firePixelsArray = []
const fireHeight = 10
const fireWidth = 10


function Start(){
    createFireStructure()
    createFireSource()
    renderFire()

    setInterval(calculateFirePropagation,1000)
}

function createFireStructure(){
    const numberOfPixels = fireHeight * fireWidth 
    for(let i = 0; i < numberOfPixels; i++){
        firePixelsArray[i] = 0 ;
    }
}
function calculateFirePropagation(){
    for(column = 0; column < fireWidth; column++){
        for(row = 0; row < fireHeight; row++){
            const pixelIndex = column + (fireHeight * row)
            console.log(pixelIndex)
            updateFireIntensityPerPixel(pixelIndex)

        }

    }

    renderFire()
}
function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'
        for(column = 0; column < fireWidth; column++){
            const pixelIndex = column + (fireWidth * row)
            const fireIntensity = firePixelsArray[pixelIndex]
            html += '<td>'
            html += `<div class=pixel-index>${pixelIndex}</div>`
            html += fireIntensity
            html += '</td>'

        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}
function createFireSource(){
    for(column = 0 ; column < fireWidth ; column++){
        const overflowPixelIndex = fireHeight * fireWidth
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        firePixelsArray[pixelIndex] = 36
    }
}
function updateFireIntensityPerPixel(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + fireWidth
    if(belowPixelIndex >= fireWidth * fireHeight){
        return 

    }
    const decay = 1
    const belowPixelIntensity = firePixelsArray[belowPixelIndex]
    const newFireIntensity = belowPixelIntensity - decay >= 0 ? belowPixelIntensity - decay : 0  
    firePixelsArray[currentPixelIndex] = newFireIntensity
}

Start()
