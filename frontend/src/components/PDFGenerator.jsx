import React from 'react';
import { Document, Page, Text } from 'react-pdf';
import { useReactToPrint } from 'react-to-print';

function PDFGenerator() {
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <button onClick={handlePrint}>Print</button>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <Document>
            <Page>
              <Text>Hello World!</Text>
            </Page>
          </Document>
        </div>
      </div>
    </>
  );
}

export default PDFGenerator;
