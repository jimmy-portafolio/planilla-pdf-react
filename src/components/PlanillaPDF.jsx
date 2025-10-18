import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './style/PlanillaPDFStyles';
import './PlanillaPDF.css';


function planillaPDF() {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.proformaContainer}>
            {/* Fila 1 */}
            <View style={styles.proformaFila1}>
              <Text style={styles.text}>colocar imagen</Text>
            </View>
            
            {/* Fila 2 */}
            <View style={styles.proformaFila2}>
              <View style={styles.proformaFila2Sub1}>
                <Text style={styles.proformaFila2Sub1_titulo}>PROFORMA</Text>
              </View>
              <View style={styles.proformaFila2Sub2}>
                <Text style={styles.proformaFila2Sub2_NroReferencia}>2025-0625</Text>
                <Text style={styles.proformaFila2Sub2_lugarFecha}>La Paz, 13 de Marzo de 2025</Text>
              </View>
            </View>
            
            {/* Fila 3 */}
            <View style={styles.proformaFila3}>
              <View style={styles.proformaFila3Sub1}>
                <Text style={[styles.proformaFila3Sub1_text,{ fontWeight: 'semiBold' }]}>NIT</Text>
                <Text style={styles.proformaFila3Sub1_text}>1001943024</Text>
              </View>
              <View style={styles.proformaFila3Sub2}>
                <Text style={[styles.proformaFila3Sub1_text,{ fontWeight: 'semiBold' }]}>Importador/Exportador</Text>
                <Text style={styles.proformaFila3Sub1_text}>AMPER SRL</Text>
              </View>
            </View>
            
            {/* Fila 4 */}
            <View style={styles.proformaFila4}>
              {/* Subcolumna 1 */}
              <View style={styles.proformaFila4Sub1}>
                <View style={styles.proformaFila4Sub1Fila1}>
                  <Text style={[styles.proformaFila4Sub1Sub1__detalle,{ fontWeight: 'semiBold' }]}>Valor CIF Frontera</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Valor FOB</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us.</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>7,282.00</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Seguros</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us.</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>32.77</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Fletes |</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us.</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>207.75</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Fletes ||</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>24.93</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Gastos</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>350.50</Text>
                </View>
                <View style={styles.proformaFila4Sub1Sub1Fila}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Gastos Portuarios </Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>4.50</Text>
                </View>
                <View style={[styles.proformaFila4Sub1Sub1Fila,{backgroundColor:'black',color:'white',paddingTop:'3px'}]}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Valor CIF</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>$us</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>7,902.00</Text>
                </View>
                <View style={[styles.proformaFila4Sub1Sub1Fila,{paddingTop:'3px'}]}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>T.c.:</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>6.96</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}></Text>
                </View>
                <View style={[styles.proformaFila4Sub1Sub1Fila,{backgroundColor:'black',color:'white',paddingTop:'3px'}]}>
                  <Text style={styles.proformaFila4Sub1Sub1Fila1}>Valor CIF</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila2}>Bs.</Text>
                  <Text style={styles.proformaFila4Sub1Sub1Fila3}>55,001.00</Text>
                </View>

              </View>
              
              {/* Subcolumna 2 */}
              <View style={styles.proformaFila4Sub2}>
                <View style={styles.proformaFila4Sub2Sub1}>
                  <Text style={[styles.proformaFila4Sub2Sub1_descripcion,{fontWeight:'semiBold'}]}>Descripción de las Mercancias</Text>
                  <Text style={styles.proformaFila4Sub2Sub1_descripcion}>ACCESORIOS ELECTRICOS</Text>
                </View>
                <View style={styles.proformaFila4Sub2Sub2}>
                  <Text style={[styles.proformaFila4Sub2Sub2_descripcion,{fontWeight:'semiBold'}]}>Factura Comercial:</Text>
                  <Text style={styles.proformaFila4Sub2Sub2_descripcion}>1209. AMPER USA LLC</Text>
                </View>
                <View style={styles.proformaFila4Sub2Sub3}>
                  <View style={styles.proformaFila4Sub2Sub3Sub1}>
                    <Text style={[styles.proformaFila4Sub2Sub3Sub1_descripcion,{fontWeight:'semibold'}]}>Bultos</Text>
                    <Text style={[styles.proformaFila4Sub2Sub3Sub1_descripcion,{paddingRight:'20px'}]}>0.00</Text>
                  </View>
                  <View style={styles.proformaFila4Sub2Sub3Sub2}>
                    <Text style={[styles.proformaFila4Sub2Sub3Sub1_descripcion,{fontWeight:'semibold'}]}>Peso</Text>
                    <Text style={[styles.proformaFila4Sub2Sub3Sub1_descripcion,{paddingRight:'40px'}]}>0.00</Text>
                  </View>
                </View>
                <View style={styles.proformaFila4Sub2Sub4}>
                  <Text style={[styles.proformaFila4Sub2Sub4_descripcion,{fontWeight:'semiBold'}]}>Aduana <Text style={{fontWeight:'normal'}}>    201 Interior La Paz</Text> </Text>
                  <Text style={[styles.proformaFila4Sub2Sub4_descripcion,{fontWeight:'semiBold'}]}>Modalidad <Text style={{fontWeight:'normal'}}>      IM 4 Importacion para el Consumo</Text> </Text>
                </View>
              </View>
            </View>
            
            {/* Fila 5 */}
            <View style={styles.proformaFila5}>
              <View style={styles.proformaFila5Sub1}>
                <Text style={{fontSize:'10px'}}>Concepto</Text>
              </View>
              <View style={styles.proformaFila5Sub2}>
                <Text style={{fontSize:'10px'}}>Monto</Text>
              </View>
            </View>
            
            {/* Fila 6 */}
            <View style={styles.proformaFila6}>
              <View style={styles.proformaFila6Sub1}>
                <Text style={[styles.text,{fontWeight:'semiBold',paddingBottom:'6px'}]}>TRIBUTOS ADUANEROS</Text>
                <Text style={styles.text}>DERECHOS Y GRAVANES ADUANEROS</Text>
                <Text style={styles.text}>IMPUESTO VALOR AGREGADO</Text>
                <Text style={styles.text}>IMPUESTO AL CONSUMO ESPECIFICO</Text>
                <Text style={styles.text}>USO FORMULARIO DIGITAL</Text>
                <Text style={[styles.text,{fontWeight:'semiBold'}]}>Sub Total</Text>
              </View>
              <View style={styles.proformaFila6Sub2}>
                <View style={styles.proformaFila6Sub2sub1}>
                  <Text style={[styles.text,{height:'15px'}]}></Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={[styles.text,{height:'15px'}]}></Text>
                </View>
                <View style={styles.proformaFila6Sub2sub2}>
                  <Text style={[styles.text,{height:'15px'}]}></Text>
                  <Text style={styles.text}>0.00</Text>
                  <Text style={styles.text}>8,217.00</Text>
                  <Text style={styles.text}>0.00</Text>
                  <Text style={styles.text}>100.00</Text>
                  <Text style={[styles.text,{fontWeight:'semiBold'}]}>5,317.00</Text>
                </View>
              </View>
            </View>
            
            {/* Fila 7 */}
            <View style={styles.proformaFila7}>
              <View style={styles.proformaFila7Sub1}>
                <Text style={[styles.proformaFila7Sub1_operativo,{paddingBottom:'1px',fontWeight:'semiBold'}]}>GASTOS DE OPERACION</Text>
                <Text style={styles.proformaFila7Sub1_operativo}>ALMACENAJE</Text>
                <Text style={[styles.proformaFila7Sub1_operativo,{fontWeight:'semiBold'}]}>Sub Total</Text>
              </View>
              <View style={styles.proformaFila7Sub2}>
                <View style={styles.proformaFila7Sub2Sub1}>
                  <Text style={[styles.text,{height:'11px'}]}></Text>
                  <Text style={[styles.text,{paddingLeft:'3px'}]}>Bs.</Text>
                  <Text style={[styles.text,{height:'15px'}]}></Text>
                </View>
                <View style={styles.proformaFila7Sub2Sub2}>
                  <Text style={[styles.text,{height:'11px'}]}></Text>
                  <Text style={styles.text}>358.00</Text>
                  <Text style={[styles.text,{fontWeight:'semiBold'}]}>358.00</Text>
                </View>
              </View>
            </View>
            
            {/* Fila 8 */}
            <View style={styles.proformaFila8}>
              <View style={styles.proformaFila8Sub1}>
                <Text style={[styles.text,{fontWeight:'semiBold',paddingBottom:'6px'}]}>SERVICIOS ACENCIA</Text>
                <Text style={styles.text}>SERVICIOS AGENCIA</Text>
                <Text style={styles.text}>MOVILIZACIONES</Text>
                <Text style={styles.text}>VALORES AOUANA</Text>
                <Text style={[styles.text,{fontWeight:'semiBold'}]}>Sub Total</Text>
              </View>
              <View style={styles.proformaFila8Sub2}>
                <View style={styles.proformaFila6Sub2sub1}>
                  <Text style={[styles.text,{height:'16px'}]}></Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={styles.text}>Bs.</Text>
                  <Text style={[styles.text,{height:'15px'}]}></Text>
                </View>
                <View style={styles.proformaFila6Sub2sub2}>
                  <Text style={[styles.text,{height:'16px'}]}></Text>
                  <Text style={styles.text}>1,276</Text>
                  <Text style={styles.text}>150.00</Text>
                  <Text style={styles.text}>154.00</Text>
                  <Text style={[styles.text,{fontWeight:'semiBold'}]}>1,580.00</Text>
                </View>
              </View>
            </View>
            
            {/* Fila 9 */}
            <View style={styles.proformaFila9}>
              <View style={styles.proformaFila9Sub1}>
                <Text style={[styles.text,{fontWeight:'semiBold'}]}>TOTAL COTIZACION</Text>
              </View>
              <View style={styles.proformaFila9Sub2}>
                {/* proformaFila9Sub2Sub1*/}
                {/*  proformaFila9Sub2Sub2*/}
                <View style={styles.proformaFila9Sub2Sub1}>
                  <Text style={[styles.proformaFila9Sub2Sub1_text,{paddingLeft:'3px'}]}>Bs.</Text>
                </View>
                <View style={styles.proformaFila9Sub2Sub2}>
                  <Text style={[styles.proformaFila9Sub2Sub1_text,{fontWeight:'semiBold'}]}>358.00</Text>
                </View>
              </View>
            </View>
            
            {/* Fila 10 */}
            <View style={styles.proformaFila10}>
                <Text style={styles.proformaFila10_text}>SON DIEZ DOSCIENTOS CINCUENTA Y CINCO CON 00/100</Text>
                <Text style={[styles.proformaFila10_text,{fontWeight:'semiBold'}]}>IMPORTANTE</Text>
                <Text style={[styles.proformaFila10_text,{lineHeight:'12px'}]}>Para su mayor comodidad. Ud. puede efectuar el deposito del monto señalado en nuestra Cta. <Text style={{fontWeight:'semiBold'}}>Bs.: 10000029719230</Text> en el Banco Union S.A. a nombre de <Text style={{fontWeight:'semiBold'}}>Agencia Despachante de Aduanas PATROSS S:R:L</Text> haciendo referencia a la presente planilla.</Text>
                <Text style={styles.proformaFila10_text}>Pasado las 48 Horas  de la emision de la planilla no se acepta reclamos o devoluciones.</Text>
 
            </View>
            
            {/* Fila 11 */}
            <View style={styles.proformaFila11}>
              <Text style={[styles.text,{fontWeight:'semiBold'},{fontSize:'10px'}]}>Nuestra mejor referencia en servicios es Usted !!!</Text>
            </View>
            
            {/* Fila 12 */}
            <View style={styles.proformaFila12}>
              <Text style={styles.text}></Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default planillaPDF