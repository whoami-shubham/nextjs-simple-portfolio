import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import data from "../metaData.json";
import About from "../components/About";
import MainCta from "../components/MainCta";
import SocialLinks from "../components/SocialLinks";
import Divider from "../components/Divider";
import Cards from "../components/Cards";

type ComponentMapKeyType =
  | "About"
  | "MainCta"
  | "SocialLinks"
  | "Divider"
  | "Cards";

const componentMap = {
  About,
  MainCta,
  SocialLinks,
  Divider,
  Cards,
};

const Home: NextPage = () => {
  return (
    <div className="bg-background flex justify-center w-full">
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-10  text-primary max-w-[1024px] flex flex-col items-start px-6">
        {data?.components?.map((item, idx) => {
          const key = item?.name as ComponentMapKeyType;
          const Comp = componentMap[key];

          return <Comp key={idx} data={item?.data as any} />;
        })}
      </div>
    </div>
  );
};

export default Home;
