import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  CheckboxRow,
  Circle,
  CircleImage,
  Icon,
  Link,
  Picker,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Locatepin2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  const mapViewN4fcDxIGRef = React.useRef();

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
                      navigation.navigate('Locatepin3Screen');
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
        {/* Header */}
        <View style={GlobalStyles.ViewStyles(theme)['Map search bar 4']}>
          {/* Left View */}
          <View style={styles(theme).View7a3e3e89}>
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
                      navigation.navigate('Locatepin1Screen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                <Icon
                  size={24}
                  color={theme.colors['Light']}
                  name={'AntDesign/minuscircle'}
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
        ref={mapViewN4fcDxIGRef}
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
          <View>
            <Button
              style={[
                GlobalStyles.ButtonStyles(theme)['Button'],
                styles(theme).Button66ae8500,
              ]}
              title={'Leave Token in my Wallet'}
            />
          </View>
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
    Button714b903d: {
      backgroundColor: theme.colors['Community_Dark_UI'],
      color: theme.colors['Background'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 21,
      marginBottom: 10,
      marginLeft: 60,
      marginRight: 60,
      marginTop: 5,
      textTransform: 'capitalize',
    },
    Button7a095cbe: {
      backgroundColor: theme.colors['Custom Color_10'],
      borderTopWidth: 0,
      color: theme.colors['Background'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 21,
      marginBottom: 0,
      marginLeft: 20,
      marginRight: 20,
    },
    Button8cc9e18f: {
      backgroundColor: theme.colors['Custom Color_18'],
      borderRadius: 100,
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      height: 58,
      textAlign: 'center',
      width: '48%',
    },
    Buttona6490727: {
      backgroundColor: 'rgb(233, 225, 225)',
      borderBottomWidth: 15,
      borderLeftWidth: 105,
      borderRightWidth: 105,
      borderTopWidth: 20,
      color: 'rgb(6, 2, 2)',
      minWidth: 35,
      width: 25,
    },
    Buttonbd55a17d: {
      backgroundColor: theme.colors['Custom Color_10'],
      color: theme.colors['Background'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 21,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
    },
    Buttonf03235cf: {
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      height: 58,
      textAlign: 'center',
      width: '48%',
    },
    Fetch431eb058: { minHeight: 40 },
    FlashListc992f941Content: { flex: 1 },
    FlatListc992f941Content: { flex: 1 },
    FlatListdf29e2e2: { width: '100%' },
    Icon6cafd915: { marginTop: 14 },
    Image115e9468: { height: 100, width: 100 },
    ScrollView5777ad69Content: { flexDirection: 'row', marginTop: 16 },
    ScrollViewdf29e2e2: { width: '100%' },
    Surfacec38b2542: {
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      flex: 1,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      minHeight: 48,
      paddingRight: 16,
    },
    Surfacec8f20155: {
      alignItems: 'center',
      borderRadius: 12,
      height: 24,
      justifyContent: 'center',
      minHeight: 24,
      width: 24,
    },
    Surfacee42c301c: {
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      marginBottom: 12,
      minHeight: 40,
    },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    Text1274fdea: {
      color: theme.colors.medium,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Text18d40600: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      paddingLeft: 8,
    },
    Text44302ea3: {
      color: theme.colors.medium,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Text54b43c21: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
    },
    Text671cd870: {
      color: theme.colors.tripItBlue,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Text961160f7: {
      alignSelf: 'center',
      fontSize: 21,
      textDecorationLine: 'underline',
    },
    TextInputacfc6cc8: {
      borderRadius: 8,
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 8,
      paddingTop: 8,
      width: '90%',
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
    Textb00a595f: {
      color: theme.colors.tripItBlue,
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '600',
      marginTop: -8,
      textAlign: 'center',
      textDecorationColor: theme.colors.tripItBlue,
      textDecorationLine: 'underline',
    },
    Textc521608b: { textAlign: 'center' },
    Textcc3ff0cd: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      fontSize: 11,
      lineHeight: 14,
      marginTop: 4,
      textTransform: 'capitalize',
    },
    Texte34170ea: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      paddingLeft: 6,
      textTransform: 'capitalize',
    },
    Texte487d65e: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      marginBottom: 14,
    },
    Textfdf01a36: { marginBottom: 3 },
    Touchable0f93a9b2: { marginTop: 16, width: '100%' },
    Touchable29534911: { marginLeft: 12 },
    View1705936f: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View2741d373: {
      alignItems: 'flex-start',
      flex: 1,
      paddingBottom: 9,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 9,
    },
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
    View39912261: { alignItems: 'center' },
    View4ab6c823: { borderRadius: 12, overflow: 'hidden' },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View550d1a35: { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
    View683ac205: { justifyContent: 'space-between' },
    View6fe868d4: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
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
    View797f2946: { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
    View7a3e3e89: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
    },
    View897c6051: { marginLeft: 16 },
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
    Viewa32f7bb2: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    Viewa9cfacd9: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    Viewaa9f708d: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 7,
      paddingTop: 7,
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
    Viewc992f941: { flex: 1 },
    Viewf6874caa: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
      paddingRight: 10,
      width: '100%',
    },
    Viewfc9f47c1: { flex: 1, paddingLeft: 8, paddingRight: 8 },
  });

export default withTheme(Locatepin2Screen);
