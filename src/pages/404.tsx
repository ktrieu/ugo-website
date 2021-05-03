import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Page404: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-primary text-9xl">404</h1>
      <h3 className="text-3xl">PAGE NOT FOUND</h3>
      <div className="mt-3 text-lg">
        <p>
          Despite our world-class expertise in every field of human endeavor, we
          were unable to find the page you requested.
        </p>
        <p>
          Try our{" "}
          <Link className="text-primary" to="/">
            homepage
          </Link>{" "}
          instead.
        </p>
      </div>
    </Layout>
  );
};

export default Page404;
