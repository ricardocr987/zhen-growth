import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
require("./Faq.css");

const data = {
    rows: [
        {
			id: 1,
			title: <p style={{ color: 'white'}}>What are Solana Invasion NFTs?</p>,
			content:
			<p>'Solana Invasion are 3,333 algorithmically generated unique and collectible Aliens stored on the Solana blockchain!',</p>
		  },
		  {
			id: 2,
			title: <p style={{ color: 'white'}}>How were the Aliens generated?</p>,
			content:
			<p>'All Aliens have been algorithmically generated using base layers created by our artists. With these layers and attributes, it gives various of unique Aliens combinations but with only 5,000 being minted, some of them will be more unique and exclusive than others.',</p>
		  },
		  {
			id: 3,
			title: <p style={{ color: 'white'}}>How much is it to mint an Alien?</p>,
			content:
			<p>'Each Alien will cost 0'5 SOL to mint.',</p>
		  },
		  {
			id: 4,
			title: <p style={{ color: 'white'}}>How do I purchase an Alien?</p>,
			content:
			<p>'The launch will take place on ONLY our website and will be available for purchase there.',</p>
		  },
		  {
			id: 5,
			title: <p style={{ color: 'white'}}>Where will Aliens be sold?</p>,
			content:
			<p>'We have not yet reached any agreement with the marketplaces, but we will contact sites such as Digital Eyes, Solsea, Solanart and more in due course. We will work hard to achieve it.',</p>
		  },
		  {
			id: 6,
			title: <p style={{ color: 'white'}}>When will Aliens be sold?</p>,
			content:
			<p>'The mint date is the 19th at 20:00 UTC.',</p>
		  },
		  {
			id: 7,
			title: <p style={{ color: 'white'}}>What Solana wallets can I use?</p>,
			content:
			<p>'You will be able to use two of Solana’s main wallets Phantom, Sollet, Solflare and Slope.',</p>
		  },
		  {
			id: 8,
			title: <p style={{ color: 'white'}}>How many Alien can I buy per Transaction?</p>,
			content:
			<p>'You can buy 1 Alien per transaction.',</p>
		  },
		  {
			id: 9,
			title: <p style={{ color: 'white'}}>Will there be Aliens giveaways?</p>,
			content:
			  <p>'We have reserved 50 Aliens for giveaways and competitions. Pay attention to our Twitter and Discord accounts, you will know everything about our events!',</p>
		  },
    ],
};

const styles = {
	bgColor: 'black',
	titleTextColor: 'white',
	rowTitleColor: 'white',
	rowContentColor: 'grey',
	arrowColor: 'white',
};

const config = {
	animate: true,
	arrowIcon: "v",
	tabFocus: true
};

export default function FAQ() {

    return (
        <div className="faq-box" id="#faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}