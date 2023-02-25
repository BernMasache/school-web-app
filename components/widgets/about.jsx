import React from 'react';
import { CreditCardIcon } from '@heroicons/react/24/outline'
import Efficiency from './breadcrumbs';

function AboutPage(props) {
    const skills = [


        {
            skill: "Large development projects"
        },
        {
            skill: "Large real-estate transactions"
        },
        {
            skill: "Managing private capital that can withstand various economic cycles"
        },
        {
            skill: "Co-investment partnerships"
        },
        {
            skill: "Operations experience working inside companies"
        },
        {
            skill: "Advisory roles in setting strategy"
        },
        {
            skill: "Connecting appropriate resources"
        },

    ]
    return (
        <div>
            <div className="bg-white">
                <div className="sr-only bg-white relative sm:pb-32 py-2 lg:py-2">

                    <div className="relative">
                        <div className="relative overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                            <div className="absolute inset-0 ">
                                <img
                                    src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-brown opacity-60 mix-blend-multiply" aria-hidden="true" />

                            </div>
                            <div className="relative lg:col-span-1">

                                <h2 className="text-3xl text-gray-100 font-bold tracking-tight sm:text-4xl">About Us</h2>
                                <blockquote className="mt-6 text-white">
                                    <p className="text-xl text-white font-medium sm:text-2xl">
                                        “A great building must begin with the immeasurable, must go through measurable means when it is being designed, and in the end must be unmeasured.” – Louis Kahn
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-4 mx-auto max-w-md sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="divide-y divide-warm-gray-200">

                        <section className="" aria-labelledby="location-heading">

                            <div className=" pb-5">
                                <h3 className="text-start text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                                    Who We Are
                                </h3>
                                <p className="text-lg text-gray-600 mt-2">

                                    Sharp Valley, is a registered limited
                                    liability corporation with head offices in Lilongwe, Malawi. Sharp Valley has been established
                                    as the leading service provider of Project Management and Procurement Solutions, eCommerce,
                                    and logistics and advisory services to our clients worldwide. With our seven years of experience
                                    managing large projects and procurement in logistics, heavy equipment storage, and other supply
                                    chain nodes, Sharp Valley has helped many of our clients and partners navigate their difficult
                                    and challenging projects especially experienced in the last few years under the global pandemic
                                    conditions. Our staff has a combined 35 years of experience managing projects of strategic
                                    significance for our clients.
                                </p>

                                <p className="text-lg text-gray-600 mt-8">
                                    Sharp Valley is now serving clients with extensive diversity, both by regional footprint
                                    and industry. Our clients span healthcare, pharmaceuticals, military, government, oil and gas,
                                    and food and beverage industries in North America, Asia, Africa, Europe, and the Middle East.
                                    The company brings to bear its extensive network of partners, expertise, experience, diligence,
                                    and professionalism to deliver the most reliable and highest quality products and services.
                                </p>
                            </div>
                        </section>

                        <section className="mt-2 pt-2 " aria-labelledby="location-heading">
                            <div className="pb-2">
                                <h3 className="text-start text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                                    Our Values
                                </h3>
                                <p className="text-lg text-gray-600 mt-2">

                                    Our vision is to be a highly-valued partner by both our portfolio companies and our co-investors seeking investment opportunities.
                                </p>
                            </div>
                        </section>

                        <section className="mt-2 pt-2 " aria-labelledby="location-heading">
                            <div className="">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                    <Efficiency />
                                    <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                                        <div>

                                            <p className='font-semibold'>Excellence</p>
                                            <p>
                                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                                semper sed amet vitae sed turpis id.
                                            </p>
                                            <p className='mt-8 font-semibold'>Efficiency and Effective</p>

                                            <p className="">
                                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                                adipiscing egestas.
                                            </p>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Inclusivity</p>

                                            <p>
                                                Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                                                eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;