import { ReactNode } from "react";

interface propConatiner {
  children: ReactNode;
}

export function Container({ children }: propConatiner) {
  return (
    <section className="flex flex-col items-center w-full h-full px-5 md:px-20">
      {children}
    </section>
  );
}
