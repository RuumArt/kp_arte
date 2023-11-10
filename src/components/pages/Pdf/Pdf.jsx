import React from 'react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./MyDocumentView'), {
  ssr: false,
});

const Pdf = () => {
  return <PDFViewer />;
};

Pdf.propTypes = {};

Pdf.defaultProps = {};

export default Pdf;
