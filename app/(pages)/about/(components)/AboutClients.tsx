"use client"

import React, {useRef} from 'react';
import {clientsData, clientsHeading} from '../../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

export default function AboutClients(): React.JSX.Element{
    const clients = useRef(clientsData);
    return (
        <div className="mt-10 sm:mt-20">
            <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
                {clientsHeading}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
                {clients.current.map((client) => (
                    <AboutClientSingle
                        title={client.title}
                        image={client.img}
                        key={client.id}
                    />
                ))}
            </div>
        </div>
    );
}
