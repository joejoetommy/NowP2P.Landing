import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Circle,
  Icon,
  NumberInput,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Step3PayPinitScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewGs2shc1WRef = React.useRef();

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasBottomSafeArea={false}
      hasTopSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View style={styles(theme).View0b6d15b8}>
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
          </View>
        </View>
      </View>
      {/* Map */}
      <View style={styles(theme).Viewc992f941}>
        <MapView
          style={styles(theme).MapViewc992f941}
          latitude={37.40241}
          longitude={-122.12125}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          loadingEnabled={true}
          showsPointsOfInterest={true}
          showsUserLocation={true}
          showsCompass={true}
          followsUserLocation={true}
          zoom={15}
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          ref={mapViewGs2shc1WRef}
        >
          <MapMarker
            longitude={-122.1228}
            title={'audi a4 car for sale'}
            latitude={37.4078}
            pinColor={theme.colors['Blue']}
          />
        </MapView>
      </View>
      {/* Hospital Details */}
      <View style={styles(theme).View2f76121f}>
        <View style={styles(theme).View273fdc97}>
          <Image
            style={styles(theme).Image0479822d}
            resizeMode={'cover'}
            source={{
              uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/QIdTF7fF/assets/vhoBEsR3H2JeO6mN8Nvwx',
            }}
          />
          <View style={styles(theme).Viewb3d565fb}>
            {/* Name */}
            <Text style={styles(theme).Text6c129e6a}>
              {'Token "variable name"'}
            </Text>
            {/* Name */}
            <Text style={styles(theme).Text6c129e6a}>
              {'Price: variable + Currency'}
            </Text>
            {/* Address */}
            <Text style={styles(theme).Text76e6c974}>
              {'Jl. Prapatan No 26, Labuan, Malang'}
            </Text>
            {/* Distance */}
            <View style={styles(theme).View79351d85}>
              <Icon
                size={20}
                color={theme.colors['Primary']}
                name={'MaterialIcons/account-circle'}
              />
              <Icon
                style={styles(theme).Icon7a9a00a4}
                size={20}
                color={theme.colors['Primary']}
                name={'MaterialCommunityIcons/comment-text-multiple'}
              />
              <Text style={styles(theme).Text4ce026e8}>{'33'}</Text>
              <Icon
                style={styles(theme).Icond51c0199}
                size={20}
                color={theme.colors['Primary']}
                name={'Ionicons/heart'}
              />
              <Text style={styles(theme).Textc8e26ead}>{'112'}</Text>
              <Icon
                style={styles(theme).Icond51c0199}
                size={20}
                color={theme.colors['Primary']}
                name={'Entypo/attachment'}
              />
              <Text style={styles(theme).Textc8e26ead}>{'VIEW'}</Text>
            </View>
            {/* Distance */}
            <View style={styles(theme).View79351d85} />
          </View>
        </View>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text3d14e011,
          ]}
        >
          {'.  .  .'}
        </Text>
        {/* Actions */}
        <View style={styles(theme).Viewaa24b36c}>
          {/* Call */}
          <Button
            style={styles(theme).Button91880a01}
            disabledOpacity={0.8}
            title={'Days active'}
            icon={'Ionicons/ios-today'}
            activeOpacity={1}
          />
          <NumberInput
            onChangeText={newNumberInputValue => {
              const numberInputValue = newNumberInputValue;
              try {
                setNumberInputValue(newNumberInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={GlobalStyles.NumberInputStyles(theme)['Number Input']}
            editable={true}
            value={numberInputValue}
            placeholder={"Number of Day's"}
          />
          <View style={GlobalStyles.ViewStyles(theme)['payment breakdown']}>
            {/* Consultation Fee */}
            <View style={styles(theme).View4762dfc8}>
              <Text style={styles(theme).Texta96c86ce}>
                {'Consultation Fee'}
              </Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 300.000'}</Text>
            </View>
            {/* Admin Fee */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Admin Fee'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Free'}</Text>
            </View>
            {/* Discount */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Discount'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp.10.000'}</Text>
            </View>
            {/* Total */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Textc13f7d58}>{'Total'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 290.000'}</Text>
            </View>
          </View>

          <View style={GlobalStyles.ViewStyles(theme)['payment breakdown 2']}>
            {/* Consultation Fee */}
            <View style={styles(theme).View4762dfc8}>
              <Text style={styles(theme).Texta96c86ce}>
                {'Consultation Fee'}
              </Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 300.000'}</Text>
            </View>
            {/* Admin Fee */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Admin Fee'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Free'}</Text>
            </View>
            {/* Discount */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Discount'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp.10.000'}</Text>
            </View>
            {/* Total */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Textc13f7d58}>{'Total'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 290.000'}</Text>
            </View>
          </View>

          <View style={GlobalStyles.ViewStyles(theme)['payment breakdown 3']}>
            {/* Consultation Fee */}
            <View style={styles(theme).View4762dfc8}>
              <Text style={styles(theme).Texta96c86ce}>
                {'Consultation Fee'}
              </Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 300.000'}</Text>
            </View>
            {/* Admin Fee */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Admin Fee'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Free'}</Text>
            </View>
            {/* Discount */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Discount'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp.10.000'}</Text>
            </View>
            {/* Total */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Textc13f7d58}>{'Total'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 290.000'}</Text>
            </View>
          </View>

          <View style={GlobalStyles.ViewStyles(theme)['payment breakdown 4']}>
            {/* Consultation Fee */}
            <View style={styles(theme).View4762dfc8}>
              <Text style={styles(theme).Texta96c86ce}>
                {'Consultation Fee'}
              </Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 300.000'}</Text>
            </View>
            {/* Admin Fee */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Admin Fee'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Free'}</Text>
            </View>
            {/* Discount */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Texta96c86ce}>{'Discount'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp.10.000'}</Text>
            </View>
            {/* Total */}
            <View style={styles(theme).View8840418d}>
              <Text style={styles(theme).Textc13f7d58}>{'Total'}</Text>

              <Text style={styles(theme).Texte22969f4}>{'Rp 290.000'}</Text>
            </View>
          </View>
        </View>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text7ec18380,
          ]}
        >
          {'No. Days x 0.1 USD'}
        </Text>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text7ec18380,
          ]}
        >
          {'Total USD = '}
        </Text>
        <Button
          onPress={() => {
            try {
              navigation.navigate('FeedFindPinScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Button4b9c9e9e,
          ]}
          title={'Pay & Pin It'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button4b9c9e9e: {
      borderRadius: 32,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
    },
    Button91880a01: {
      backgroundColor: theme.colors['Blue'],
      borderRadius: 8,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      textAlign: 'center',
      width: '45%',
    },
    Buttonb5c2c720: {
      backgroundColor: theme.colors['Community_Light_Green'],
      borderRadius: 8,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      textAlign: 'center',
      width: '45%',
    },
    Icon7a9a00a4: { left: 35 },
    Icond51c0199: { left: 15 },
    Image0479822d: { borderRadius: 4, height: 80, width: 80 },
    MapViewc992f941: { flex: 1 },
    Text282d784e: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 5,
    },
    Text3d14e011: { marginBottom: 1, marginTop: 1, textAlign: 'center' },
    Text4ce026e8: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 35,
    },
    Text6c129e6a: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Text76e6c974: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      fontSize: 12,
      marginTop: 5,
      opacity: 0.7,
    },
    Text7ec18380: {
      fontSize: 12,
      marginBottom: 1,
      marginTop: 1,
      textAlign: 'center',
    },
    TextInpute7357a8b: {
      borderRadius: 8,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Texta96c86ce: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      opacity: 0.6,
    },
    Textc13f7d58: { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
    Textc8e26ead: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 15,
    },
    Texte22969f4: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      textAlign: 'right',
    },
    View02f8ec45: { marginTop: 20 },
    View0b6d15b8: {
      backgroundColor: theme.colors['Custom Color'],
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      flexDirection: 'column',
      height: 72,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View273fdc97: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 12,
      flexDirection: 'row',
      height: 104,
      marginBottom: 0,
      paddingLeft: 12,
    },
    View2f76121f: {
      backgroundColor: theme.colors['Custom Color'],
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      bottom: 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      left: 0,
      marginTop: 10,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      position: 'absolute',
      right: 0,
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
    View4762dfc8: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View7a3e3e89: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
    },
    View8840418d: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    Viewaa24b36c: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
    },
    Viewb3d565fb: { flex: 1, marginLeft: 15 },
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
    Viewfc9f47c1: { flex: 1, paddingLeft: 8, paddingRight: 8 },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(Step3PayPinitScreen);
