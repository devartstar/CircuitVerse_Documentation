import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    title: 'Export High Resolution Image',
    imageUrl: 'https://circuitverse.org/assets/homepage/export-hd-946593743bdc762f0efe2b8916f0914b48b80b8421a90a57e493602ce17a6f05.png',
    description: (
      <>
        CircuitVerse can export high-resolution images in multiple formats including SVG.
      </>
    ),
  },
  {
    title: 'Combitorial Analysis',
    imageUrl: 'https://circuitverse.org/assets/homepage/combinations%20analysis-b9582339167b40ec42ac88cdfc18689420ce5d22f698b2dfd6812f1d87f62329.png',
    description: (
      <>
        Automatically generate circuit based on truth table data. This is great to create complex logic circuits and can be easily be made into a subcircuit.
      </>
    ),
  },
  {
    title: 'Embed in Blogs',
    imageUrl: 'https://circuitverse.org/assets/homepage/embed-c0d8fb9785cdcfaad0bd226c5829987bae9dcd5705a3bf30e3886b0306b26295.png',
    description: (
      <>
        Since CircuitVerse is built in HTML5, an iFrame can be generated for each project allowing the user to embed it almost anywhere.
      </>
    ),
  },
  {
    title: 'Use Sub circuits',
    imageUrl: 'https://circuitverse.org/assets/homepage/sub-circuit-eec8bd42a9dc77e12b2dbf954a1c21eeef740dfc5c299f2684159118114a1604.png',
    description: (
      <>
        Create subcircuits once and use them repeatedly. This allows easier and more structured design.
      </>
    ),
  },
  {
    title: 'Multi Bit Buses and components',
    imageUrl: 'https://circuitverse.org/assets/homepage/multi-bit-bus-afccf109066b18dc5a34b753b7166785fd244491845efc2cffc99016d2768d05.png',
    description: (
      <>
        CircuitVerse supports multi bit-wires, this means circuit design is easier, faster, and uncluttered.
      </>
    ),
  },
  {
    title: 'Exams And Assignment',
    imageUrl: 'http://www.pngmart.com/files/7/Exam-PNG-Transparent-Image.png',
    description: (
      <>
        Full feature of providing Assignments, Exams and Grades for Proffesors to test the Exam
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
