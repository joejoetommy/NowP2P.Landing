import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  NumberInput,
  Picker,
  ScreenContainer,
  Stepper,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const FeedCreatePinScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewFPHruLIARef = React.useRef();

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={true}
      scrollable={true}
      hasBottomSafeArea={false}
    >
      {/* Top Navigation Header */}
      <View style={styles(theme).Viewe903f622}>
        <View style={styles(theme).Viewe9defed4}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Surface style={styles(theme).Surface52a4c315}>
              <Icon name={'Entypo/chevron-left'} size={24} />
            </Surface>
          </Touchable>
        </View>
      </View>

      <MapView
        style={[
          GlobalStyles.MapViewStyles(theme)['Map View'],
          styles(theme).MapViewb3e67b3e,
        ]}
        latitude={37.40241}
        longitude={-122.12125}
        zoom={8}
        zoomEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        loadingEnabled={true}
        showsPointsOfInterest={true}
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        ref={mapViewFPHruLIARef}
      >
        <MapMarker flat={false} pinColor={theme.colors['App Green']} />
      </MapView>
      {/* Form */}
      <View style={styles(theme).View44cd555e}>
        <View style={styles(theme).View9fa86917}>
          <Text style={styles(theme).Texte576ac7e}>{'Map it'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                const handler = async () => {
                  try {
                    setTextInputValue2(newTextInputValue);
                    const Map = await Utils.getLocation();
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Locate'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View style={styles(theme).View754d13e9}></View>

        <Text style={styles(theme).Textcdd19b4c}>{'Days Active'}</Text>
        {/* Actions Stepper Frame */}
        <View style={GlobalStyles.ViewStyles(theme)['+/- Num.']}>
          {/* Design Style Frame */}
          <View style={styles(theme).View63187c72}>
            <Stepper
              onChange={newStepperValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              iconSize={32}
              min={1}
              max={10}
              iconColor={theme.colors.internalPrimaryColor}
            />
          </View>
          {/* Summary Detail Frame */}
          <View>
            {/* Data Frame */}
            <View style={styles(theme).View76c6e7e6}>
              {/* Data */}
              <Text style={styles(theme).Text8c17155f}>{'Total: $0.1'}</Text>
            </View>
          </View>
        </View>

        <Text style={styles(theme).Textcdd19b4c}>{'Token attached'}</Text>
        {/* Add description */}
        <View
          style={[
            GlobalStyles.ViewStyles(theme)['add description'],
            styles(theme).View39912261,
          ]}
          accessibilityRole={'text'}
        >
          <Icon
            style={styles(theme).Icondfd4eb9f}
            size={24}
            name={'Ionicons/document-attach-outline'}
          />
          <Icon size={24} name={'AntDesign/pluscircle'} />
        </View>
      </View>
      {/* Button Solid */}
      <Button
        style={styles(theme).Buttone2902bd0}
        disabled={Constants['Language']}
        loading={Constants['Language']}
        title={'...\n'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttone2902bd0: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
      marginBottom: 16,
      marginTop: 16,
      textAlign: 'center',
      width: '60%',
    },
    DatePicker4a3dd8f9: {
      backgroundColor: theme.colors['Community_Border'],
      borderRadius: 12,
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
    },
    DatePicker7b7ca838: {
      backgroundColor: theme.colors['Community_Heather_Gray'],
      borderRadius: 12,
      color: 'rgb(11, 7, 7)',
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
    },
    Icon6cafd915: { marginTop: 14 },
    Icondfd4eb9f: { maxHeight: 45, minHeight: 45 },
    ImageBackground8723160b: {
      alignItems: 'center',
      height: 85,
      justifyContent: 'flex-end',
      width: 85,
    },
    MapViewb3e67b3e: {
      alignContent: 'flex-start',
      bottom: 0,
      flexWrap: 'nowrap',
      height: 400,
      minHeight: 300,
      width: 400,
    },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    Text8c17155f: {
      color: theme.colors.internalPrimaryBold,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 20,
      lineHeight: 26,
    },
    TextInput3aede295: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 50,
      paddingLeft: 16,
    },
    TextInput8a0338d3: {
      borderColor: theme.colors.divider,
      borderRadius: 15,
      height: 45,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 8,
      paddingTop: 8,
      width: '100%',
    },
    Texta5a64f59: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Textcdd19b4c: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      marginLeft: 20,
      marginTop: 8,
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Texte515109a: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Texte576ac7e: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      textTransform: 'capitalize',
    },
    Touchable29534911: { marginLeft: 12 },
    Touchableba8738b6: { marginLeft: 16, marginRight: 16, width: '90%' },
    View39912261: { alignItems: 'center' },
    View43f5d9c4: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      marginTop: 20,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    View44cd555e: {
      marginLeft: 16,
      marginRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View63187c72: {
      borderBottomWidth: 1,
      borderColor: theme.colors.internalBorder,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 18,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 18,
    },
    View6b56ee91: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 20,
      flex: 1,
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
    View754d13e9: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginTop: 16,
      width: '100%',
    },
    View76c6e7e6: { alignItems: 'center', paddingBottom: 12, paddingTop: 12 },
    View90d66b2f: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 20,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
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
    View94c59805: {
      backgroundColor: theme.colors.shopAppBlue,
      borderRadius: 4,
      bottom: -15,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
    },
    View967fd4f5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    View98498b12: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 10,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    View9fa86917: { paddingLeft: 16, paddingRight: 16 },
    Viewb8ef214e: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    Viewc22dd40d: { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    Viewcbf533b7: {
      alignItems: 'center',
      backgroundColor: theme.colors.divider,
      borderRadius: 12,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 16,
      width: '100%',
    },
    Viewd8249661: { alignItems: 'center', flex: 1, width: '45%' },
    Viewdcbb4c7c: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewe369120c: { height: 200, justifyContent: 'center', width: 200 },
    Viewe903f622: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      width: '100%',
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    Viewf7d57e05: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    screen: { alignItems: 'center' },
  });

export default withTheme(FeedCreatePinScreen);
