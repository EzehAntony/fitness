'use client';

import { useEffect, useState } from 'react';

interface HydrationProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function Hydration({ children, fallback = null }: HydrationProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Only run on the client
    setHasMounted(true);
  }, []);

  // During SSR or very first client paint, show fallback
  if (!hasMounted) return <>{fallback}</>;

  // Once mounted, render children
  return <>{children}</>;
}
