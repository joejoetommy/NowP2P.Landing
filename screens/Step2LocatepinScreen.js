import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Step2LocatepinScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  const mapViewmRFJ0Qg3Ref = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      <View>
        {/* Header */}
        <View style={GlobalStyles.ViewStyles(theme)['Map search bar 4']}>
          {/* Left View */}
          <View style={styles(theme).View7a3e3e89}>
            {/* Back */}
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles(theme).Viewc66ddf6d}>
                <Circle size={50}>
                  <Icon
                    size={24}
                    name={'Ionicons/arrow-back-sharp'}
                    color={theme.colors['Strong']}
                  />
                </Circle>
              </View>
            </Touchable>
            {/* Address */}
            <View style={styles(theme).View33be5bc5}>
              <Icon
                size={24}
                name={'Ionicons/search-outline'}
                color={theme.colors['Light']}
              />
              <View style={styles(theme).Viewfc9f47c1}>
                <TextInput
                  style={styles(theme).TextInpute7357a8b}
                  autoCapitalize={'none'}
                  placeholder={'Enter a value...'}
                  defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
                />
              </View>

              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Locatepin2Screen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                <Icon
                  size={24}
                  name={'Entypo/circle-with-plus'}
                  color={theme.colors['Light']}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Text
        style={[
          GlobalStyles.TextStyles(theme)['header 2'],
          styles(theme).Textfdf01a36,
        ]}
      >
        {'     Locate your Token for the Market:'}
      </Text>

      <MapView
        style={GlobalStyles.MapViewStyles(theme)['Map View']}
        latitude={37.40241}
        longitude={-122.12125}
        zoom={8}
        zoomEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        loadingEnabled={true}
        showsPointsOfInterest={true}
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        ref={mapViewmRFJ0Qg3Ref}
      >
        <MapMarker pinColor={theme.colors['App Green']} flat={true}>
          <MapCallout showTooltip={true} />
        </MapMarker>
      </MapView>

      <View>
        <View>
          <Button
            onPress={() => {
              try {
                navigation.navigate('Step3PayPinitScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              GlobalStyles.ButtonStyles(theme)['Button'],
              styles(theme).Button4afca57b,
            ]}
            title={'Pin Your Token Here'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button4afca57b: {
      backgroundColor: theme.colors['App Green'],
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    },
    Button66ae8500: {
      backgroundColor: theme.colors['Community_Dark_Red'],
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 0,
    },
    Icon6cafd915: { marginTop: 14 },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    Text44302ea3: {
      color: theme.colors.medium,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    TextInpute7357a8b: {
      borderRadius: 8,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Texta21d3b0d: {
      color: theme.colors.strong,
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      paddingLeft: 8,
      paddingRight: 5,
      textTransform: 'capitalize',
    },
    Textfdf01a36: { marginBottom: 3 },
    Touchable29534911: { marginLeft: 12 },
    View33be5bc5: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 10,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flex: 1,
      flexDirection: 'row',
      marginLeft: 8,
      paddingLeft: 12,
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View550d1a35: { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
    View783fbd5a: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
    },
    View7a3e3e89: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
    },
    View92787b34: {
      backgroundColor: theme.colors.custom_rgb255_0_0,
      borderBottomWidth: 3,
      borderColor: theme.colors.custom_rgb255_255_255,
      borderLeftWidth: 3,
      borderRadius: 7,
      borderRightWidth: 3,
      borderTopWidth: 3,
      height: 14,
      left: 6,
      top: -30,
      width: 14,
    },
    View967fd4f5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    Viewabfce44f: { alignItems: 'flex-start', justifyContent: 'center' },
    Viewc66ddf6d: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 10,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      width: 48,
    },
    Viewfc9f47c1: { flex: 1, paddingLeft: 8, paddingRight: 8 },
  });

export default withTheme(Step2LocatepinScreen);
