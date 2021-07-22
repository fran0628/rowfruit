import { useRef, useState } from 'react'
import './indexfarmer.scss'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import CardItem from './CardItem/CardItem';

 function IndexFarmer() {
     const listRef =useRef()
    //  const cardWidthRef=useRef()
    //  console.log(cardWidthRef.current)
    const [slideNumber, setSlideNumber] = useState(0);
		const [isMoved, setIsMoved] = useState(false);
     const handleClick=(direction)=>{
         setIsMoved(true)
         let distance = listRef.current.getBoundingClientRect().x - 100
         if (direction === "left" && slideNumber >0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${348 + distance}px)`
         }
         if (direction === "right" && slideNumber < 5) {
                setSlideNumber(slideNumber + 1);
				listRef.current.style.transform = `translateX(${
							-348 + distance
						}px)`;
		}
     }
    return (
			<>
				<div className="overflow-hidden">
					<div className="container-fluild fr-list">
						<h1 class="text-center mb-3">小農部落</h1>
						<div className="card-track">
							<IoIosArrowBack
								className="sliderArrow left"
								onClick={() => handleClick("left")}
                                style={{display:!isMoved && "none"}}
							/>
							<div className="farmer-cards" ref={listRef}>
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
							</div>
							<IoIosArrowForward
								className="sliderArrow right"
								onClick={() => handleClick("right")}
							/>
						</div>
					</div>
				</div>
			</>
		);
}
export default IndexFarmer;