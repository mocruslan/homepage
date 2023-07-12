"use client";

import React, { useRef } from "react";
import {
  ClientInformation,
  clientsData,
  clientsHeading,
} from "../(data)/clientsData";
import AboutClientSingle from "./AboutClientSingle";

export default function AboutClients(): React.JSX.Element {
  const clientsDataRef = useRef(clientsData);

  if (clientsDataRef.current.length === 0) {
    return null; // Return null if there are no clients
  }

  return (
    <div className="mt-10 sm:mt-20">
      <p className="text-center text-2xl font-general-medium text-primary-dark dark:text-primary-light sm:text-3xl">
        {clientsHeading}
      </p>
      <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-4">
        {clientsDataRef.current.map((client: ClientInformation) => (
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
