import Footer from "../components/Homepage/Footer";
import Team from "../components/Homepage/About/About-Team";
import Contact from "../components/Homepage/About/About-Contact";
import Mission from "../components/Homepage/About/About-Mission";
import React from "react";
import { Popover } from '@headlessui/react'
export default function About() {
    return (
        <>

            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <Popover>
                    <nav
                        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="#">
                                    <span className="sr-only">Tekado</span>
                                    <h3 className='text-4xl font-extrabold text-indigo-500'>Te<span className='text-sky-500'>ka</span><span className='text-teal-500'>do</span></h3>
                                </a>
                               
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10">
                            </div>
                        </div>

                    </nav>


                </Popover>
            </div>


            <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">About us</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Das sind wir
          </p>

        </div>
      </div>
    </div>


            <Team />

            <Mission />

            <Contact />

            <Footer />
        </>
    )
}
