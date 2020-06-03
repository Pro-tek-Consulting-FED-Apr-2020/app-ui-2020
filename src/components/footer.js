


const Footer = () => {

    const products = [
        'Hotel Express Deals™',
        'Hotels',
        'Cars',
        'Flights',
        'Packages',
        'Cruises',
        'Priceline Rewards™ Visa® Card'
    ]

    const about = [
        'About Priceline',
        'Contact Us',
        'Our Story',
        'Careers',
        'Press Center',
        'Investor Relations',
        'Privacy Policy',
        'Terms and Conditions',
        'Do Not Sell My Personal Information'

    ]

    const partners = [
        'Add Your Hotel',
        'Priceline Partner Network',
        'Advertise'
    ]

    const connect = [
        'Priceline for iOS',
        'Priceline for Android',
        'Facebook',
        'Instagram',
        'Twitter',
        'YouTube'
    ]



    return (
        <div>
            <div className='footer-flex'>
                <FooterNavigation title='Our Products' navigationList={products} />
                <FooterNavigation title='About Priceline' navigationList={about} />
                <FooterNavigation title='Partner with Priceline' navigationList={partners} />
                <FooterNavigation title='Connect with Priceline' navigationList={connect} />


            </div>

            <p>PRICELINE, PRICELINE.COM, NAME YOUR OWN PRICE, EXPRESS DEALS, TONIGHT ONLY DEAL,
            and PRICEBREAKER are service marks or registered service marks of priceline.com LLC.
            All material herein © 1998-2020 priceline.com LLC, all rights reserved. priceline.com LLC is
            located at 800 Connecticut Ave. Norwalk, CT 06854.</p>
            <p>*Priceline Name Your Own Price®, Express Deals® and PRICEBREAKER® services are different
                from published price services. Exact hotel, airline and rental car company are shown only after booking. All sales final.</p>

            <p>*Savings based on all flight and hotel itineraries booked together as a package, compared to price of
            same flight and hotel booked separately on priceline.com. Savings vary and may not be available for all packages.</p>


        </div>
    );

}



