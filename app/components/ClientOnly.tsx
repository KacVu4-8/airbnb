"use client";

import React, { useEffect, useState } from "react";

interface ClienrOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClienrOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
