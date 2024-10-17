import Link from "next/link"

export default function Menu() {


    return (
        <>


            <ul className="navigation clearfix">
        
                <li><Link href="/">Home</Link></li>
                       
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/service">Our Services</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/faq">Faq's</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
