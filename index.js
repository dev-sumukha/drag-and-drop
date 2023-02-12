const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e)=>{
    console.log('drag start has been triggered');
    e.target.className += ' hold'; // += is used bcz adding in the class name
    console.log(e.target.className += ' hold');
    setTimeout(()=>{
        e.target.className = ' hide' // we are using setTimeout bcz we need to give delay to pick the element
    },0);   
})

imgBox.addEventListener('dragend',(e)=>{
    console.log('drag end has been triggered');
    e.target.className = 'imgBox';
})

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault()
        console.log('dragover has been triggered');
    })

    whiteBox.addEventListener('dragenter',()=>{
        console.log('dragenter has been triggered');
    })

    whiteBox.addEventListener('dragleave',()=>{
        console.log('dragleave has been triggered');
    })

    whiteBox.addEventListener('drop',(e)=>{
        console.log('drop has been triggered');
        e.target.append(imgBox)
    })
}