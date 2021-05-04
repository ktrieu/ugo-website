import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative">
        <StaticImage
          imgClassName="w-full"
          src="../images/home/hero.jpg"
          alt="A circuit board."
        />
        <div className="absolute left-0 top-0 p-10 text-white h-full flex flex-col justify-between">
          <h1 className="text-3xl sm:text-8xl">
            A company you have to believe in.
          </h1>
          <p className="mt-6 sm:text-4xl">
            Building today's technology, today.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
