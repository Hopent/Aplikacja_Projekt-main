/*import React, { useState, useEffect, useRef } from 'react';
import { Image,ImageBackground,Text,View,StyleSheet } from 'react-native';
import { SensorTypes } from 'react-native-sensors';

const CompassApp = () => {
  const [magnetometerData, setMagnetometerData] = useState({});
  const [rotation, setRotation] = useState(0);
  const inclination = 87.75; // Inclination in degrees (87° 45')
  const subscriptionRef = useRef(null);

  useEffect(() => {
    const Magnetometer = new SensorTypes['Magnetometer']();
    Magnetometer.setUpdateInterval(200); // Set the update interval for the magnetometer sensor

    const subscription = Magnetometer.subscribe(({ x, y }) => {
      let heading = 0;

      if (x !== undefined && y !== undefined) {
        // Calculate the heading or direction based on the x and y magnetometer data
        heading = Math.atan2(y, x) * (180 / Math.PI);
        if (heading < 0) {
          heading += 360; // Convert negative angles to positive angles (0 to 360 degrees)
        }
      }

      const adjustedHeading = heading - inclination; // Adjust heading by inclination

      let newRotation = adjustedHeading;
      if (adjustedHeading >= 360) {
        newRotation -= 360; // Normalize the rotation to be within 0-359 degrees
      } else if (adjustedHeading < 0) {
        newRotation += 360; // Normalize negative angles
      }

      setMagnetometerData({ x, y });
      setRotation(newRotation);
    });

    subscriptionRef.current = subscription;

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../textures/compass_face.jpg')}
        style={{
          height: 320,
          width: 320,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{ rotate: `${0}deg` }],
        }}
      >
        <Image
          source={require('../textures/compass.jpg')}
          style={{
            height: 200,
            width: 10,
            transform: [{ rotate: `${rotation}deg` }],
          }}
        />
      </ImageBackground>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Magnetometer Data:</Text>
        <Text>{JSON.stringify(magnetometerData)}</Text>
        <Text>{rotation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  dataContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dataText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CompassApp;
*/


const CompassApp = () => {
  return (
    <>
    
    </>  
  );
};

export default CompassApp;
