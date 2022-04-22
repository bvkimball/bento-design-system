import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Make it your own",
    image: "/img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Bento is designed for customization and extensibility: create a custom theme and
        configuration that matches your brand identity and extend the existing components using
        Bento's powerful foundations.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    image: "/img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Bento lets you focus on the business logic of your front-end app: implementing the correct
        UI becomes a trivial task that won't distract your from more important concerns.
      </>
    ),
  },
  {
    title: "Powered by TypeScript",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>
        Bento is built with TypeScript and for TypeScript users: whether you use the high-level
        components, or you delve deep into the foundations the type-checker always has your back.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
