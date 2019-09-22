const firePixelsArray = []
const fireHeight = 2
const fireWidth = 3


function Start(){
    createFireStructure()
    console.log(firePixelsArray)
}

function createFireStructure(){
    const numberOfPixels = fireHeight * fireWidth 
    for(let i = 0; i < numberOfPixels; i++){
        firePixelsArray[i] = 0 ;
    }
}
function calculateFirePropagation(){}
function renderFire(){}

Start()
