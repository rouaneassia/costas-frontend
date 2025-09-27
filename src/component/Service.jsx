import React from "react";
import CardService from "./Cardservice";
import {
  Gavel,
  Car,
  HeartPulse,
  Briefcase,
  Users,
  ShieldAlert,
  HardHat,
  Landmark,
  Banknote,
  Globe,
  Umbrella,
} from "lucide-react";

const services = [
  {
    Icon: Gavel,
    title: "domaines.array.0.title",
    subtitle: "domaines.array.0.subtitle",
    description: "domaines.array.0.description"
  },
  {
    Icon: Car,
    title: "domaines.array.1.title",
    subtitle: "domaines.array.1.subtitle",
    description: "domaines.array.1.description"
  },
  {
    Icon: HeartPulse,
    title: "domaines.array.2.title",
    subtitle: "domaines.array.2.subtitle",
    description: "domaines.array.2.description"
  },
  {
    Icon: Briefcase,
    title: "domaines.array.3.title",
    subtitle: "domaines.array.3.subtitle",
    description: "domaines.array.3.description"
  },
  {
    Icon: Users,
    title: "domaines.array.4.title",
    subtitle: "domaines.array.4.subtitle",
    description: "domaines.array.4.description"
  },
  {
    Icon: ShieldAlert,
    title: "domaines.array.5.title",
    subtitle: "domaines.array.5.subtitle",
    description: "domaines.array.5.description"
  },
  {
    Icon: HardHat,
    title: "domaines.array.6.title",
    subtitle: "domaines.array.6.subtitle",
    description: "domaines.array.6.description"
  },
  {
    Icon: Landmark,
    title: "domaines.array.7.title",
    subtitle: "domaines.array.7.subtitle",
    description: "domaines.array.7.description"
  },
  {
    Icon: Banknote,
    title: "domaines.array.8.title",
    subtitle: "domaines.array.8.subtitle",
    description: "domaines.array.8.description"
  },
  {
    Icon: Globe,
    title: "domaines.array.9.title",
    subtitle: "domaines.array.9.subtitle",
    description: "domaines.array.9.description"
  },
  {
    Icon: Umbrella,
    title: "domaines.array.10.title",
    subtitle: "domaines.array.10.subtitle",
    description: "domaines.array.10.description"
  },
  {
    Icon: Globe,
    title: "domaines.array.11.title",
    subtitle: "domaines.array.11.subtitle",
    description: "domaines.array.11.description"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {services.map((service, index) => (
          <CardService key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
