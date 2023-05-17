import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
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
      ) : null}
    </ViroARScene>
  )
}

export default () => {

    const [object, setObject] = useState('tv');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Lógica para cargar la escena
      // Una vez que la escena se haya cargado completamente, establece isLoading en false para mostrar la escena
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  
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
            <TouchableOpacity onPress={() => setObject('municipalidad')}>
              <Text style={styles.text}>Municipalidad</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setObject('palacio')}>
              <Text style={styles.text}>Palacio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setObject('skull')}>
              <Text style={styles.text}>Calavera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setObject('catedral')}>
              <Text style={styles.text}>Catedral</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setObject('tv')}>
              <Text style={styles.text}>Limpiar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
      alignContent: 'center'
    },
    textTitle: {
      backgroundColor: '#FFC300',
      color: '#0f0f0c',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 15,
      fontSize: 25,
    },
  });
  