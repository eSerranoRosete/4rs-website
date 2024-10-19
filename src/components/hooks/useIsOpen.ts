"use client";

import { useState } from "react";

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onOpenChange = () => setIsOpen((prev) => !prev);

  return { isOpen, onOpen, onClose, onOpenChange };
}
