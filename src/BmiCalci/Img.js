import React from 'react'

function Img() {
    const img = `https://thumbs.dreamstime.com/b/body-parts-14986567.jpg`
  return (
    <>
        <div>
            <img src={img} alt="photo" className='img'/>
        </div>
    </>
  )
}
function ImgTwo(){
    const imgtwo = `https://thumbs.dreamstime.com/z/cartoon-body-builder-flexing-his-muscles-19748240.jpg`
    return(
        <div>
            <img src={imgtwo} alt="photo"  className='img' />
        </div>
    )
}

export default Img;
export {ImgTwo};