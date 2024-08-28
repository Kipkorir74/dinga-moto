"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                        src="/logo.svg"
                        alt="Logo" width={118}
                        height={10}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        &#169; 2024 Dinga Moto Inc.<br />
                        All rights reserved.
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="text-lg font-bold">{link.title}</h3>
                            <div className="flex flex-col gap-5">
                                {link.links.map((item) => (
                                    <Link href={item.url}
                                        key={item.title}
                                        className="text-gray-600 text-base">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <div className="flex justify-between 
                items-center flex-wrap mt-10 border-t border-gray-100 
                sm:px-16 px-6 py-10">
                <p>
                    &#169; 2024 Dinga Moto Inc.
                    All rights reserved.
                </p>

                <div className="footer__copyrights-link">
                    <Link href="/"
                        className="text-gray-600 text-base">
                        Privacy Policy
                    </Link>
                    <Link href="/"
                        className="text-gray-600 text-base">
                        Terms of Use
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
