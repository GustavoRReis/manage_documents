/* import React from 'react';
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

const EmployeePDF = ({ employee }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    header: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 15,
    },
    table: {
      display: 'table',
      width: 'auto',
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    cell: {
      padding: 5,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Informações do Funcionário</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={[styles.cell, { width: 200 }]}>
              <Text>Nome:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{employee.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cell, { width: 200 }]}>
              <Text>Cargo:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{employee.position}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cell, { width: 200 }]}>
              <Text>Setor:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{employee.sector}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cell, { width: 200 }]}>
              <Text>Situação:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{employee.situation}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cell, { width: 200 }]}>
              <Text>Data de admissão:</Text>
            </View>
            <View style={styles.cell}>
              <Text>{employee.hireDate}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  const generatePdfLink = () => (
    <PDFDownloadLink document={<MyDocument />} fileName="employee.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Carregando documento...' : 'Baixar PDF'
      }
    </PDFDownloadLink>
  );

  return <>{generatePdfLink()}</>;
};

export default EmployeePDF;
 */
