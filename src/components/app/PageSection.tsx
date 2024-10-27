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
        "relative w-full bg-background p-6 py-32",
        fullHeight && "h-screen md:max-h-[900px]",
        noPadding && "p-0",
        className,
      )}
    >
      {children}
    </section>
  );
};
