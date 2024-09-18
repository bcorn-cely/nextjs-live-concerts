import { ReactNode } from "react";
import { unstable_generatePermutations as generatePermuations } from "@vercel/flags/next";
import { artistProfilePageFlags } from "@/lib/flags";

export async function generateStaticParams() {
    const ids = await generatePermuations(artistProfilePageFlags);
    console.log('ids', ids);
    return ids.map((val) => ({code: val }));
}

export default async function Layout({children}: { children: ReactNode }) {
    return children;
}