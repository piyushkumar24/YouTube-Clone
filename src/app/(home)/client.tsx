"use client";

import { trpc } from "@/trpc/client";
import { HydrateClient } from "@/trpc/server";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export const PageClient = () => {
    // const trpc = useTRPC();
    // const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

    const [data] = trpc.hello.useSuspenseQuery({
        text: "Piyush",
    });

    return (
        <div>
            Page Client says: {data.greeting}
        </div>
    );
};
