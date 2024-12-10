import style from './cards.module.css';

const Card = ({ imgSource, title1, text1, button, buttonColor, color }) => {
	return (
		<div className={`${style.orderCards} ${style[color]}`}>
			<img className={style.img} src={imgSource} alt='car' />
			<h1 className={style.title}>{title1}</h1>
			<p className={style.text}>{text1}</p>
			<button className={`${style.button} ${style[buttonColor]}`}>
				{button}
			</button>
		</div>
	);
};
export default Card;
