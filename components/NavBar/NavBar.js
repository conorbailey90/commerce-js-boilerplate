import { useCartState, useCartDispatch } from "../../context/cart";
import Link from "next/link";

export default function NavBar(){

    const cart = useCartState();
    console.log(cart)

    return (
        <div>
            <Link href={'/'}>
                <a>
                    Home
                </a>
            </Link>
            <br />
            <Link href={'/cart'}>
                <a>
                    Cart items: {cart.total_items}
                </a>
            </Link>

        </div>
    )
}