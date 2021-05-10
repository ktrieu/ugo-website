import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";

interface HeaderBrandProps {
  products: Array<{
    childMarkdownRemark: {
      frontmatter: {
        name: string;
      };
    };
  }>;
}

const HeaderBrand: React.FC<HeaderBrandProps> = (props) => {
  const productTitles = props.products.map(
    (product) => product.childMarkdownRemark.frontmatter.name
  );

  const selectedTitle =
    productTitles[Math.floor(Math.random() * productTitles.length)];

  return (
    <div className="flex items-end">
      <Link to="/">
        <h1 className="text-4xl text-primary mr-3">UGO II</h1>
      </Link>
      <p className="text-2xl mr-3">our product is...</p>
      <p className="text-primary text-2xl hidden sm:inline">{selectedTitle}</p>
    </div>
  );
};

interface MobileNavbarButtonProps {
  onClick: () => void;
}

const MobileNavbarButton: React.FC<MobileNavbarButtonProps> = (props) => {
  return (
    <button
      className="border-2 border-primary rounded p-3 sm:hidden"
      onClick={props.onClick}
    >
      <svg
        className="fill-current text-primary"
        viewBox="0 0 100 80"
        width="20"
        height="20"
      >
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
    </button>
  );
};

interface NavbarLink {
  name: string;
  link: string;
}

interface NavbarProps {
  links: NavbarLink[];
}

const MobileNavbar: React.FC<NavbarProps> = (props) => {
  return (
    <ul className="sm:hidden w-full">
      {props.links.map((link) => (
        <li className="mt-3" key={link.name}>
          <Link
            className="block w-full text-primary text-center text-2xl hover:underline"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DesktopNavbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="hidden sm:block">
      <ul className="flex justify-start">
        {props.links.map((link) => (
          <li key={link.name}>
            <Link
              className="text-primary text-center text-2xl mr-12 hover:underline"
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface NavbarQuery {
  site: {
    siteMetadata: {
      navLinks: NavbarLink[];
    };
  };
  products: {
    nodes: Array<{
      childMarkdownRemark: {
        frontmatter: {
          name: string;
        };
      };
    }>;
  };
}

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const navbarQuery = useStaticQuery<NavbarQuery>(
    graphql`
      query NavbarQuery {
        site {
          siteMetadata {
            navLinks {
              name
              link
            }
          }
        }
        products: allFile(
          filter: { relativePath: { glob: "products/*/*.md" } }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                name
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="border-b-2 border-primary p-3 shadow-md">
      <div className="mx-auto max-w-screen-lg flex justify-between">
        <HeaderBrand products={navbarQuery.products.nodes} />
        <MobileNavbarButton
          onClick={() => {
            setShowMobileNavbar((val) => !val);
          }}
        />
      </div>
      <div className="mx-auto max-w-screen-lg flex justify-between mt-3">
        {showMobileNavbar && (
          <MobileNavbar links={navbarQuery.site.siteMetadata.navLinks} />
        )}
        <DesktopNavbar links={navbarQuery.site.siteMetadata.navLinks} />
      </div>
    </div>
  );
};

export default Navbar;
