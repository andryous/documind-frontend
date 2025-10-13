// src/components/dashboard/LoadingState.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Hourglass } from "lucide-react"; // An icon that represents waiting

/**
 * Renders a loading state indicator within a card.
 * This component is displayed while the application is processing a file.
 */
export function LoadingState() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="text-center">
        {/* The title indicates the current process to the user. */}
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <Hourglass className="animate-spin" />
          Anaizing document...
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* The Skeleton components mimic the structure of the success state. */}
        {/* This creates a perception of faster loading. */}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </CardContent>
    </Card>
  );
}
