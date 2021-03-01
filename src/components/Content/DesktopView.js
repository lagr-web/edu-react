import React, {Fragment, useState} from 'react';
import topImg from "../../assets/website-top.jpg"
import Footer from './Footer';
import Modal from "./Modal"
import { gsap } from "gsap";



const DesktopView = ({items}) => {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (e) => {
    setOpen(true)
    setIndex(e.currentTarget.dataset.index);
  
    const timer = setTimeout(() => {

let getElementYPos = document.querySelector("#modal").getBoundingClientRect().top

      gsap.to("#modal", {
        duration:.5,
        top:getElementYPos + 250,
        ease: "elastic.out",
        onComplete: () => {

          clearInterval(timer);

          gsap.to("#modal", {
            duration:.3,
            rotation:5,
            transformOrigin: "center"
          })


        }
      });

    }, 10);
  
    
  };
  

  const closeModal = () => {
  
   gsap.to("#modal", {
    duration:.2,
    alpha:0,
    onComplete: () => {
      setOpen(false);
    }
  });


  }

  return (

    <Fragment>
      
      <div className="topImgContainer">
        <img alt="topimage" src={topImg} />
        </div>

        <div className="mainHeadlineContainer" id="mainHeadlineContainer">

        {items.map((mData, id) => (

					<div className="subHeadlineContainer" key={id}>
						<div id="headlines" style={{ color: mData.color }} > 
            #{mData.headline} &nbsp;&nbsp;<span id='readMore' data-index={id} onClick={openModal}>++</span>
            </div>
						<div className="description">{mData.description}</div>
					</div>
				))}

          </div>
          <Footer />

        <Modal
          moreTxt={items[index].more}
          isOpen={open}
          onClose={closeModal}
        />
     
     

    </Fragment>

  );
};

export default DesktopView;
