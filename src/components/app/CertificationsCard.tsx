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
      className="relative grow rounded bg-background p-6 pt-10 shadow-xl"
    >
      <Icon className="mb-10 inline-block h-12 w-12 text-brand" />
      <div className="relative z-10">
        <p className="text-balance text-4xl font-semibold tracking-tighter">
          {title}
        </p>
        <hr className="mb-2 mt-5 h-0.5 bg-black/30" />
        <ul className="flex flex-col gap-4 text-lg text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
