import React from "react";

export default function About(props) {
//   const myopcity = {
//     opacity: "2",
//     zIndex: "2",
//   };
  
  return (
      <>
      <div className='accordion container mb-2' id="accordionExample">
        <div className={`accordion-item bg-${props.mode==='dark'?'light':'dark'} text-${props.mode==='dark'?'light':'dark'}`}>
          <h2 className={`accordion-header bg-${props.mode==='dark'?'light':'dark'}`} id="headingOne">
            <button className= 'accordion-button text-dark' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className={`accordion-body text-${props.mode==='dark'?'dark':'white'}`}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode==='dark'?'light':'dark'} text-${props.mode==='dark'?'light':'dark'}`}>
            <h2 className={`accordion-header bg-${props.mode==='dark'?'light':'dark'}`} id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className={`accordion-body text-${props.mode==='dark'?'dark':'white'}`}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
        </div>
        <div className={`accordion-item bg-${props.mode==='dark'?'light':'dark'} text-${props.mode==='dark'?'light':'dark'}`}>
            <h2 className={`accordion-header bg-${props.mode==='dark'?'light':'dark'}`} id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className={`accordion-body text-${props.mode==='dark'?'dark':'white'}`}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
        </div>
      </div>  
      </>  
  );
}
