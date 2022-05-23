import * as React from 'react';
import {View, Image} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapEvent,
  Region,
  Polyline,
} from 'react-native-maps';
import styles from './styles';
import {darkModeStyle} from '../googleMapStyle';
import {useTheme} from '@react-navigation/native';

type DeliveryMapViewProps = {};

const DeliveryMapView: React.FC<DeliveryMapViewProps> = () => {
  const {
    colors: {primary},
  } = useTheme();
  const [currentLocation, setCurrentLocation] = React.useState<Region>({
    latitude: 10.999662,
  longitude: 77.084857,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
  });

  const _onRegionChangeComplete = (region: Region) => {
    setCurrentLocation(region);
  };

  const _onMapViewPressed = (event: MapEvent) => {
    const {
      nativeEvent: {coordinate},
    } = event;

    console.log('_onMapViewPressed -> coordinate', coordinate);
  };

  return (
    <View style={styles.mapViewContainer}>
      <MapView
        loadingEnabled
        cacheEnabled
        loadingIndicatorColor="black"
        loadingBackgroundColor="black"
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        customMapStyle={darkModeStyle}
        onRegionChangeComplete={_onRegionChangeComplete}
        onPress={_onMapViewPressed}
        region={currentLocation}>
        <Marker
          coordinate={{
            longitude: 10.999662,
            latitude: 77.084857,
          }}>
          <View style={styles.currentLocationMarkerContainer}>
            {/* <Image
              source={require('../../../assets/drivers/location.png')}
              style={styles.marker}
            /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            ...currentLocation,
            longitude:10.998876 ,
            latitude:77.084192,
          }}>
          <View style={styles.driverMarkerContainer}>
            {/* <Image
              source={require('../../../assets/drivers/driver-marker.png')}
              style={styles.marker}
            /> */}
          </View>
        </Marker>
        <Polyline
          lineDashPattern={[3, 3, 3, 3]}
          coordinates={[
            {latitude: 10.998876, longitude: 77.084192},
            {latitude: 10.998876, longitude: 77.084192},
            {latitude: 10.998876, longitude: 77.084192},
            {
              latitude: 10.999662,
              longitude:77.084857,
            },
          ]}
          strokeColor={primary}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

export default DeliveryMapView;
