"use client";

import { ClientCarousell } from "./ClientCarousell";

export const Clients = () => {
  return (
    <div>
      <ClientCarousell pauseOnHover={false} speed="slow" />
      <ClientCarousell
        reverseItems
        pauseOnHover={false}
        speed="slow"
        direction="right"
      />
    </div>
  );
};
