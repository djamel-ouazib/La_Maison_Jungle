import CareScale from './Carescale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light,prix }) {
	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>`{prix} €`</div>
			<div  >
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}



export default PlantItem