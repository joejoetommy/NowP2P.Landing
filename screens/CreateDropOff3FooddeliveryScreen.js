import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import { MapView } from '@draftbit/maps';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  Picker,
  ScreenContainer,
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

const CreateDropOff3FooddeliveryScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [pickerValue, setPickerValue] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewa2IOfw0LRef = React.useRef();

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
        ref={mapViewa2IOfw0LRef}
      />
      {/* Form */}
      <View style={styles(theme).View44cd555e}>
        <View style={styles(theme).View9fa86917}>
          <Text style={styles(theme).Texte576ac7e}>{'From'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Source'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View style={styles(theme).Viewc22dd40d}>
          <Text style={styles(theme).Texte576ac7e}>{'To'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Destination'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View style={styles(theme).View754d13e9}>
          <View style={styles(theme).Viewdcbb4c7c}>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).DatePicker4a3dd8f9}
              label={'Departure'}
              date={datePickerValue}
              leftIconMode={'inset'}
              type={'solid'}
              format={'ddd, d mmm'}
              mode={'datetime'}
            />
          </View>
          <>
            {!(selectedTab === 'tab2') ? null : (
              <View style={styles(theme).Viewdcbb4c7c}>
                <DatePicker
                  onDateChange={newDatePickerValue => {
                    try {
                      setDatePickerValue(newDatePickerValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).DatePicker7b7ca838}
                  label={'Return'}
                  date={datePickerValue}
                  mode={'date'}
                  leftIconMode={'inset'}
                  type={'solid'}
                  format={'ddd, d mmm'}
                />
              </View>
            )}
          </>
        </View>
        {/* Add description */}
        <View
          style={GlobalStyles.ViewStyles(theme)['add description']}
          accessibilityRole={'text'}
        >
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3aede295}
            placeholder={'Add order number/ reciept'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
        </View>

        <ImageBackground
          style={styles(theme).ImageBackground8723160b}
          resizeMode={'cover'}
          source={Images.UploadImages}
        >
          <View style={styles(theme).View94c59805}>
            <Icon
              size={24}
              color={theme.colors.custom_rgb255_255_255}
              name={'Entypo/circle-with-plus'}
            />
          </View>
        </ImageBackground>

        <View style={styles(theme).Viewc22dd40d}>
          <Text style={styles(theme).Texte576ac7e}>{'Cash '}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              color={theme.colors.textPlaceholder}
              size={16}
              name={'MaterialIcons/attach-money'}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Add description */}
          <View
            style={GlobalStyles.ViewStyles(theme)['text box entry']}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Resturant Contact'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Add description */}
          <View
            style={GlobalStyles.ViewStyles(theme)['text box entry']}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Recipient Contact'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
        </View>
      </View>
      {/* Button Solid */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('Step1URLTokenScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttona63d871b}
        title={'Create Request'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttona63d871b: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
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

export default withTheme(CreateDropOff3FooddeliveryScreen);
