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
        "w-full p-6 relative mb-10",
        fullHeight && "md:max-h-[900px] h-screen",
        noPadding && "p-0",
        className
      )}
    >
      {children}
    </section>
  );
};
