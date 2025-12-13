import React from 'react'
import { footerListItems, footerSocialIcons } from '../constant/data'

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-neutral-100 pb-9 pt-[60px]" id='contact'>
            <div className="container">
                {/* {footer top} */}
                <div className='grid gap-7 sm:grid-cols-2 md:grid-cols-4'>
                    {/* footer brand */}
                    <div>
                        <a href="#" className='inline-block'>
                            <img src="/images/Logo.png" alt="footer logo" />
                        </a>

                        <p className="my-[14px] text-neutral-50/60">
                            Helping you find the perfect home with expert guidance and a seamless experience.
                        </p>

                        <div className="flex gap-6">
                            {footerSocialIcons.map(item =>(
                                <a href="" className='hover:text-sky-500 transition-colors'>{item.icon}</a>
                            ))}
                        </div>
                    </div>
                    {/* Footer List */}
                    {footerListItems.map(item =>(
                        <div key={item.id}>
                            <p className='text-white text-xl fort-bold mb-3'>{item.title}</p>
                            <ul className="grid gap-2">
                                {item.links.map((link,index)=>(
                                    <li key={index}>
                                        <a href="#" className='text-neutral-50/60 hover:text-neutral-100 transition'>
                                            {link.label}
                                        </a>
                                    </li>   
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Footer Bottom */}
                <div className="grid gap-4 md:mt-20 mt-10">
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <p className='text-white/80'>&copy; {new Date().getFullYear()} copyright Homes@dubai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
