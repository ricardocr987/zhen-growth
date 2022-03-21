import {useState} from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from "./Data"
require("./Faq.css");

export default function FAQ() {

	const [clicked, setClicked] = useState<boolean | any>(false);

	const toggle = (index: any) => {
	  if (clicked === index) {
		//if clicked question is already active, then close it
		return setClicked(null);
	  }
  
	  setClicked(index);
	};
	
    return (
		<IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
		<div className='faq-container' id="#faq">
			<div className="accordion">
				{Data.map((item, index) => {
					return (
						<>
							<div className='item-accordion' onClick={() => toggle(index)} key={index}>
								<h1>{item.question}</h1>
								<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
							</div>
							{clicked === index ? (
								<div className='accordion-dropdown'>
									<p>{item.answer}</p>
								</div>
							) : null}
						</>
					);
				})}
		  	</div>
		</div>
	  </IconContext.Provider>
    );
}