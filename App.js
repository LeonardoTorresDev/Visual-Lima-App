import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
  ViroImage,
  ViroText
} from '@viro-community/react-viro';

import LoadingScreen from './LoadingScreen';


const InititalScene = (props)=>{ 

  const [isAnimating, setIsAnimating] = useState(false);

  const [position, setPosition] = useState([0, 0, -5]);
  const [textPosition, setTextPosition] = useState([0, 0, -5])

  let data = props.sceneNavigator.viroAppProps;

  // Registrar la animación
  ViroAnimations.registerAnimations({
    rotateAnimation: {
      properties: {
        rotateY: '+=360'
      },
      duration: 1000
    }
  });

  // Función para manejar el evento onPress de la imagen
  const handleImagePress = () => {
    setIsAnimating(true);
  };

  const handleDrag = (dragToPos, source) => {
    setPosition(dragToPos);
  };

  const handleTextDrag = (dragToPos, source) => {
    setTextPosition(dragToPos);
  }

  const renderImageAndText = (source, text) => {
      <>
        <ViroImage
          source={source}
          position={[0, 0, -5]}
          scale={[3, 3, 3]}
          rotation={[0, 0, 0]}
          width={1}
          height={1}
          onDrag={handleDrag}
          onClick={handleImagePress}
          animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
        />
        <ViroText
          text={text}
          position={[3.3, 0, -5]}
          scale={[3, 3, 3]}
          rotation={[0, 0, 0]}
          style={styles.textStyle}
          onDrag={handleTextDrag}
        />
      </>
  };

  return(
    <ViroARScene>
      <ViroAmbientLight color="#ffffff"/>
        {data.object === "palacio" ? (
          <>
            <ViroImage
              source={require('./assets/palacio/palacio_1860.jpg')}
              position={[0, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            <ViroText
              text="Palacio de Gobierno del Perú previo a su reconstrucción en el año 1860"
              position={[3.3, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
          </>
        ) : data.object === "municipalidad" ? (
          <>
            <ViroImage
              source={require('./assets/municipalidad/municipalidad_1923_incendio.jpg')}
              position={[0, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            <ViroText
              text="Municipalidad de Lima antes del incendio ocurrido en 1923"
              position={[3.3, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
          </>
          
        ) : data.object === "catedral" ? (
          <>
            <ViroImage
              source={require('./assets/catedral/catedral_lima_1960.jpg')}
              position={[0, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            <ViroText
              text="Catedral de Lima en el año 1960"
              position={[3.3, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
        </> 
        ) : data.object === "palais concert" ? (
          <>
            <ViroImage
              source={require('./assets/palais-concert/jr_union_palais_concert.jpg')}
              position={[0, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            <ViroText
              text="Famoso Bar Limeño donde se reunían intelectuales como Valdelomar"
              position={[3.3, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
            <ViroImage
              source={require('./assets/palais-concert/valdelomar.jpeg')}
              position={[7, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
        </> 
        ) : data.object === "iglesia san francisco" ? (
          <>
            <ViroText
              text="Iglesia española de estilo neoclásico fundada en 1774"
              position={[-3, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
            <ViroImage
              source={require('./assets/san-francisco/san_francisco.jpg')}
              position={[0, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            
            <ViroImage
              source={require('./assets/san-francisco/osario.jpg')}
              position={[3.3, 0, -5]} // Ajusta la posición en el eje Z para que aparezca en el centro de la vista de realidad aumentada
              scale={[3, 3, 3]} // Ajusta la escala de la imagen según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación de la imagen según sea necesario
              width={1} // Ancho de la imagen
              height={1} // Altura de la imagen
              onDrag={handleDrag} // Manejar evento de arrastrar
              onClick={handleImagePress}
              animation={{ name: isAnimating ? 'rotateAnimation' : '', run: true }}
            />
            <ViroText
              text="Conocida por sus catacumbas, que fungían como cementerio."
              position={[7, 0, -5]} // Ajusta la posición en el eje Z para que el texto aparezca cerca de la imagen
              scale={[3, 3, 3]} // Ajusta la escala del texto según sea necesario
              rotation={[0, 0, 0]} // Ajusta la rotación del texto según sea necesario
              style={styles.textStyle} // Estilo personalizado para el texto
              onDrag={handleTextDrag}
            />
        </> 
      ) : null}
    </ViroARScene>
  )
}

export default () => {

  const [object, setObject] = useState('tv');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleModal = () => {
    fetch('https://visual-lima-api.herokuapp.com/stats/view')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setModalData([data]);
      })
      .catch(error => console.error(error));
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    // Lógica para cargar la escena
    // Una vez que la escena se haya cargado completamente, establece isLoading en false para mostrar la escena
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const handleObjectSelection = (experience) => {
    // Realizar la petición POST a la API
    fetch('https://visual-lima-api.herokuapp.com/stats', {
      method: 'POST',
      body: JSON.stringify({ experience, user: "prueba", date: new Date()}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Aquí puedes realizar cualquier acción adicional con la respuesta de la API
        console.log(data);
      })
      .catch(error => {
        // Manejar cualquier error que ocurra durante la petición
        console.error(error);
      });
  
    // Actualizar el estado del objeto seleccionado
    setObject(experience);
  };

  return (
      <View style={styles.mainView}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <ViroARSceneNavigator
            initialScene={{
              scene: InititalScene
            }}
            viroAppProps={{ object }}
            style={{ flex: 1 }}
          />
        )}
        <View>
          <Text style={styles.textTitle}>Visual Lima App</Text>
        </View>
        <View style={styles.controlsContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.controlsContent}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity onPress={() => handleObjectSelection('municipalidad')}>
              <Text style={styles.text}>Municipalidad</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleObjectSelection('palacio')}>
              <Text style={styles.text}>Palacio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleObjectSelection('palais concert')}>
              <Text style={styles.text}>Palais Concert!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleObjectSelection('catedral')}>
              <Text style={styles.text}>Catedral</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleObjectSelection('iglesia san francisco')}>
              <Text style={styles.text}>Convento San Francisco</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.textSpecial}>Estadísticas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setObject('tv')}>
              <Text style={styles.textSpecial}>Limpiar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalView}>
            {modalData ? (
              <>
                <Text style={styles.modalText}>Estadísticas de Visualización</Text>
                <Text style={styles.modalTextLine}>Palais Concert: {modalData[0].street}</Text>
                <Text style={styles.modalTextLine}>Catedral de Lima: {modalData[0].cathedral}</Text>
                <Text style={styles.modalTextLine}>Municipalidad de Lima: {modalData[0].municipality}</Text>
                <Text style={styles.modalTextLine}>Palacio de Gobierno: {modalData[0].palace}</Text>
                <Text style={styles.modalTextLine}>Iglesia de San Francisco: {modalData[0].church}</Text>
              </>
            ) : (
              <Text style={styles.modalText}>Cargando...</Text>
            )}
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };
  
  var styles = StyleSheet.create({
    mainView: {
      flex: 1,
    },
    controlsContainer: {
      height: '20%', // Ajusta esta altura según tus necesidades
      backgroundColor: '#FFC300',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlsContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      margin: 10,
      marginBottom: 25,
      borderRadius: 20,
      backgroundColor: '#0f0f0c',
      padding: 25,
      color: '#FFFFFF',
      fontWeight: 'bold',
      alignContent: 'center',
      textAlign: 'justify'
      
    },
    textSpecial: {
      margin: 10,
      marginBottom: 25,
      borderRadius: 20,
      backgroundColor: '#c13c3c',
      padding: 25,
      color: '#000000',
      fontWeight: 'bold',
      alignContent: 'center',
      textAlign: 'justify'
      
    },
    textTitle: {
      backgroundColor: '#FFC300',
      color: '#0f0f0c',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 15,
      fontSize: 25,
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FFFFFF',
    },
    modalTextLine: {
      fontSize: 20,
      marginBottom: 20,
      color: '#FFFFFF',
    },
    closeButton: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 10,
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
    }
  });
  