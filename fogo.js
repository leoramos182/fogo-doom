const firePixelsArray = []
const fireHeight = 3
const fireWidth = 3


function Start(){
    createFireStructure()
    renderFire()
}

function createFireStructure(){
    const numberOfPixels = fireHeight * fireWidth 
    for(let i = 0; i < numberOfPixels; i++){
        firePixelsArray[i] = 0 ;
    }
}
function calculateFirePropagation(){}
function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'
        for(column = 0; column < fireWidth; column++){
            const pixelIndex = column + (fireWidth * row)
            html += '<td>'
            html += pixelIndex
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}

Start()
