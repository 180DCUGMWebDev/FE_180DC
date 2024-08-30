"use client";
import LookForward from "@/components/misc/LookForward";
import { Telescopes } from "@/components/telescope";
import { useEffect, useRef, useState } from "react";

async function getData() {
  const res = await fetch(
    "https://goldfish-app-38lif.ondigitalocean.app/api/articles?populate=*&sort=publishedAt:desc",
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    console.log("Failed to fetch data");
  }
  return res.json();
}

export default function Telescope() {
  const [articles, setArticles] = useState([]);
  const subscribeScrollRef = useRef();
  useEffect(() => {
    getData().then((res) => {
      const data = res.data.map((e) => e.attributes);
      setArticles(data);
    });
  }, []);
  return (
    <main>
      <Telescopes articles={articles} subscribeScrollRef={subscribeScrollRef} />
      <LookForward theme={"dark"} />
      <div ref={subscribeScrollRef} />
    </main>
  );
}
