import { cn } from "@/lib/utils";

type Props = {
  fullHeight?: boolean;
  noPadding?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const PageSection = ({
  fullHeight = false,
  noPadding,
  children,
  className,
  id,
}: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full p-6 relative mb-32 pt-20",
        fullHeight && "h-screen",
        noPadding && "p-0",
        className
      )}
    >
      {children}
    </section>
  );
};
