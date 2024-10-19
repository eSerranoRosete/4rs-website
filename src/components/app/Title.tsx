import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className }: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "text-4xl md:text-5xl text-center m-auto font-semibold tracking-tight max-w-3xl text-balance",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};
