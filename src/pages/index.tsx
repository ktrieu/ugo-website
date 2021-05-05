import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { IconType } from "react-icons";
import { FaBoxes, FaClock, FaInfo } from "react-icons/fa";
import Layout from "../components/Layout";

interface HeroButtonProps {
  to: string;
  name: string;
  icon: IconType;
}

const HeroButton: React.FC<HeroButtonProps> = (props) => {
  const ButtonIcon = props.icon;
  return (
    <Link
      className="border-2 border-primary text-primary hover:bg-primary hover:text-white p-6 flex flex-col items-center"
      to={props.to}
    >
      <ButtonIcon size="50" className="fill-current" />
      <p className="mt-3 text-2xl">{props.name}</p>
    </Link>
  );
};

const IndexPage = () => {
  return (
    <Layout title="Home" path="">
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
          <p className="mt-6 sm:text-4xl">Building today's products, today.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        <HeroButton to="/about" icon={FaInfo} name="About Us" />
        <HeroButton to="/history" icon={FaClock} name="Our History" />
        <HeroButton to="/products" icon={FaBoxes} name="Our Products" />
      </div>
    </Layout>
  );
};

export default IndexPage;
