import style from './containerCards.module.css';
import Card from '../cards/Cards';

const ContainerCards = () => {
	return (
		<div className={style.container}>
			<Card
				imgSource={'/public/assets/images/sedan.svg'}
				title1={'SEDANS'}
				text1={
					'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				}
				button={'Learn More'}
				buttonColor={'buttonColorSedans'}
				color={'colorSedans'}
			></Card>
			<Card
				imgSource={'/public/assets/images/suv.svg'}
				title1={'SUVS'}
				text1={
					'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				}
				button={'Learn More'}
				buttonColor={'buttonColorSuvs'}
				color={'colorSuvs'}
			></Card>
			<Card
				imgSource={'/public/assets/images/luxury.svg'}
				title1={'Luxury'}
				text1={
					'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				}
				button={'Learn More'}
				buttonColor={'buttonColorLuxury'}
				color={'colorLuxury'}
			></Card>
		</div>
	);
};

export default ContainerCards;
