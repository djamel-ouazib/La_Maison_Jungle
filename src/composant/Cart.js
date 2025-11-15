import { useState ,useEffect} from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const delet=<svg  xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.prix,
		0
	)
	function Remove(index){
		const newCart=[...cart]
		newCart.splice(index,1)
		updateCart(newCart)
	}
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className='panier'>
						{cart.map(({ name, prix, amount }, index) => (
							<div key={`${name}-${index}`}>
								 {name} {prix}€ x {amount}  <span  onClick={()=>{Remove(index)}}>{delet}</span>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
			
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart