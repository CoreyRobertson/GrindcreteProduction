import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";

const serviceCards = [
    {
        id: 1,
        heading: "GRINDING",
        text: "Concrete grinding involves the use of specialized machinery to level, smooth, or clean the surface of a concrete slab, removing imperfections, surface stains, and any surface irregularities.",
        text2: 'This process not only prepares the concrete for further treatments but also corrects uneven floors and repairs surface damage. The benefits of concrete grinding include improved aesthetics, increased durability, and the creation of a perfect base for additional finishes, ensuring your concrete surfaces are both functional and visually appealing.'
    }, {
        id: 2,
        heading: "SEALING",
        text: "Sealing provides a protective barrier for your concrete surfaces, safeguarding them against moisture, stains, chemicals, and environmental wear. ",
        text2: 'This treatment extends the life of your concrete by preventing corrosion, fading, and other damage. The sealing process, involving the application of high-quality sealants, offers enhanced durability and ease of maintenance, making it an essential step for preserving the integrity and appearance of your concrete floors and surfaces.'
    }
    , {
        id: 3,
        heading: "MECHANICAL POLISH",
        text: "Mechanical polishing transforms your concrete floor into a smooth, glossy surface that reflects light, enhancing the aesthetic appeal of your space. ",
        text2: 'This environmentally friendly process not only adds a sophisticated touch to your floors but also increases their resistance to wear and tear. Polished concrete is low maintenance, requiring only occasional cleaning to maintain its luster, and is ideal for commercial and residential properties looking for a durable, stylish flooring solution.'
    }
    , {
        id: 4,
        heading: "EPOXY",
        text: "Epoxy coating involves applying a resilient protective layer over concrete floors, offering superior durability and resistance against spills, stains, and heavy foot traffic. ",
        text2: 'This seamless coating is ideal for industrial, commercial, and residential spaces, providing a safe, non-slip surface that is easy to clean and maintain. Epoxy floors come in various colors and finishes, allowing for complete customization to fit any design aesthetic, making them a practical and attractive flooring choice.'
    }
    , {
        id: 5,
        heading: "PAVILION FINISH",
        text: "Pavilion finishing is a preparatory process that uses a chemical solution to create a roughened texture on the concrete surface, improving the adhesion of subsequent coatings or sealants.",
        text2: "This method not only adds aesthetic appeal but also ensures safety with a non-slip surface. Pavilion finishes are low maintenance and ideal for spaces where both durability and safety are essential, making them perfect for residential and commercial outdoor areas."
    },
    {
        id: 6,
        heading: "TILE & GLUE REMOVAL",
        text: "Our tile and glue removal service efficiently eliminates old tiles and adhesives, preparing your surface for a fresh start. Whether you're renovating or updating a space, this process ensures the concrete is left clean and smooth, ready for your next project.",
        text2: "Using specialized equipment, we safely and effectively remove stubborn tile glue, leaving no residue behind. This service provides a seamless, ready-to-use surface for any new flooring installation."
    }

]

const Services = () => {



    return (
        <section className='services_section' id='services'>
            <h3 className='inter-bold'><BsArrowDownRight />WHAT WE DO</h3>
            <div className='service_card-container'>
                <div className="row top-row">
                    {serviceCards.slice(0, 2).map((card) => (
                        <div key={card.id} className='service_card'>
                            <h4 className='inter-light'>{card.heading}</h4>
                            <hr />
                            <p className='roboto-light' style={{ color: '#F2F2F2' }}>{card.text}</p>
                            <p className='roboto-light'>{card.text2}</p>
                        </div>
                    ))}
                </div>
                <div className="row bottom-row">
                    {serviceCards.slice(2).map((card) => (
                        <div key={card.id} className='service_card'>
                            <h4 className='inter-light'>{card.heading}</h4>
                            <hr />
                            <p className='roboto-light' style={{ color: '#F2F2F2' }}>{card.text}</p>
                            <p className='roboto-light'>{card.text2}</p>
                        </div>
                    ))}
                    <div className="buttons-container">
                        <a href='#contact'>CONTACT</a>
                        <Link href="/Quote">REQUEST QUOTE</Link>
                    </div>
                </div>
            </div>
            <div className='service_diamond'>
                <Image src='/images/diamondbluegrey.svg' alt='diamondbluegrey' layout='fill' quality={100} />
            </div>
        </section>
    )
}

export default Services