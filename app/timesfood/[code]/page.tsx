// server component – uses a client component for the redirect

import RedirectClient from "./RedirectClient";

// map the friendly slug make to the telephone number you want to dial
const PHONE_MAP: Record<string, string> = {
  "one8": "07315185804",
  "maa-anjani-pbc": "07315186819",
  "royal-china-bandra-chinese": "07315187421",
  "royal-china-bandra-asian": "07315187422",
  "jia-the-oriental-kitchen-asian": "07315187417",
  "jia-the-oriental-kitchen-chinese": "07315187418",
  "kuai-kitchen-a": "07315187419",
  "kuai-kitchen-b": "07315187420",
  "gola-sizzlers-a": "07315185558",
  "gola-sizzlers-b": "07315185559",
  "gola-sizzlers-c": "07315185560",
  "livenoida-a": "07315185784", 
  "livenoida-b": "07315185785", 
  "majlis-a": "07315185786",
  "majlis-b": "07315185787",
};

interface PageProps {
  params: {
    code: string;
  };
}

export const dynamic = "force-static"; // page can be served statically

export function generateStaticParams() {
  // pre-build a page for every known slug so that GH Pages can serve it directly
  return Object.keys(PHONE_MAP).map((code) => ({ code }));
}

export default async function Page({ params }: PageProps) {
  // `params` can be async in the app router; destructure after awaiting
  const { code } = await params;
  return <RedirectClient code={code} phoneMap={PHONE_MAP} />;
}
