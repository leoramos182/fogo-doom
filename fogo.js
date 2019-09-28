const firePixelsArray = []
const fireHeight = 40
const fireWidth = 40
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":15,"g":0,"b":28},
                            {"r":20,"g":0,"b":38},{"r":27,"g":0,"b":51},
                            {"r":34,"g":0,"b":64},{"r":41,"g":0,"b":77},
                            {"r":48,"g":0,"b":90},{"r":55,"g":0,"b":102},
                            {"r":61,"g":0,"b":112},{"r":68,"g":0,"b":128},
                            {"r":75,"g":0,"b":141},{"r":82,"g":10,"b":147},
                            {"r":100,"g":25,"b":167},{"r":112,"g":36,"b":177},
                            {"r":125,"g":48,"b":192},{"r":138,"g":61,"b":205},
                            {"r":147,"g":112,"b":212},{"r":155,"g":81,"b":220},
                            {"r":164,"g":91,"b":228},{"r":171,"g":100,"b":233},
                            {"r":143,"g":72,"b":205},{"r":151,"g":81,"b":212},
                            {"r":159,"g":88,"b":220},{"r":166,"g":96,"b":228},
                            {"r":173,"g":105,"b":233},{"r":180,"g":114,"b":238},
                            {"r":186,"g":128,"b":243},{"r":194,"g":135,"b":246},
                            {"r":198,"g":148,"b":248},{"r":204,"g":151,"b":251},
                            {"r":208,"g":157,"b":253},{"r":212,"g":165,"b":253},
                            {"r":218,"g":177,"b":253},{"r":224,"g":180,"b":253},
                            {"r":230,"g":203,"b":253},{"r":242,"g":228,"b":253},
                            {"r":255,"g":255,"b":255}];



function Start(){
    createFireStructure()
    createFireSource()
    renderFire()

    setInterval(calculateFirePropagation,100)
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
    debug = false
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'
        for(column = 0; column < fireWidth; column++){
            const pixelIndex = column + (fireWidth * row)
            const fireIntensity = firePixelsArray[pixelIndex]
            if(debug == true){
                html += '<td>'
                html += `<div class=pixel-index>${pixelIndex}</div>`
                html += fireIntensity
                html += '</td>'
            }else{
                const color = fireColorsPalette[fireIntensity]
                const colorString = `${color.r},${color.g},${color.b}`
                html += `<td class="pixel" style="background-color: rgb(${colorString})">`
                html += `</td>`
            }
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
    const decay = Math.floor(Math.random() * 3)
    const belowPixelIntensity = firePixelsArray[belowPixelIndex]
    const newFireIntensity = belowPixelIntensity - decay >= 0 ? belowPixelIntensity - decay : 0  
    firePixelsArray[currentPixelIndex - decay] = newFireIntensity
}

Start()
