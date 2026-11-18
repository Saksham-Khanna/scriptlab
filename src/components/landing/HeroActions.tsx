"use client";

import { useAuth } from "@/components/providers/AuthProvider";
import { ButtonLink } from "@/components/ui";
import { roleHome } from "@/lib/format";

export function HeroActions() {
  const { user, loading } = useAuth();

  return (
    <div className="animate-rise delay-3 mt-9 flex flex-wrap gap-3">
      {loading ? (
        <div className="h-11 w-32 animate-pulse rounded-md bg-charcoal/80" />
      ) : user ? (
        <ButtonLink href={roleHome[user.role] || "/dashboard"} size="lg">
          Go to dashboard
        </ButtonLink>
      ) : (
        <ButtonLink href="/register" size="lg">
          Join the Lab
        </ButtonLink>
      )}
      <ButtonLink href="/courses" variant="secondary" size="lg">
        Explore programs
      </ButtonLink>
    </div>
  );
}
