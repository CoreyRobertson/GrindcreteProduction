import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiInstagram } from 'react-icons/ci';

const Gallery = () => {
    return (
        <section className='gallery_section'>
            <div className='gallery_content'>
                <div className='gallery_grid'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Link href='https://www.instagram.com/grind.crete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' key={index} passHref>
                            <div className='gallery_card'>
                                <Image src={`/images/image${index + 1}.jpg`} layout='fill' objectFit='cover' alt={`Gallery Image ${index + 1}`} />
                                <div className='overlay2'>
                                    <CiInstagram className='icon' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
