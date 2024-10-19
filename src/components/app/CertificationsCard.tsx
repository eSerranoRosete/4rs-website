import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  items: string[];
  icon: React.ElementType;
};

export const CertificationsCard = ({ title, items, icon: Icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="p-6 border-r-foreground border-b-foreground rounded-br-2xl grow relative"
    >
      <div className="z-10 relative">
        <p className="text-4xl text-balance font-bold tracking-tighter">
          {title}
        </p>
        <hr className="mt-5 mb-2 h-0.5 bg-black/30" />
        <ul className="list-disc list-outside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Icon className="absolute hidden md:block bottom-5 right-5 w-16 h-16 text-muted-foreground opacity-50" />
    </motion.div>
  );
};
