import React, { Suspense } from 'react'
import Image from 'next/image'
import {HydrateClient, trpc} from "@/trpc/server";
import { PageClient } from './client';
import { ErrorBoundary } from "react-error-boundary";

type Props = {}

const Home = async(props: Props) => {
  void trpc.hello.prefetch({ text: "Piyush" });
  return (
    <HydrateClient>
            <Suspense fallback={<p>Loading...</p>}>
            <ErrorBoundary fallback={<p>Error...</p>}>
              <PageClient/>
            </ErrorBoundary>
            </Suspense>
        </HydrateClient>
  )
}

export default Home