import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  AccordionGroup,
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

const FindDropoffScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
    >
      {/* Top Navigation Header */}
      <View style={styles(theme).View783fbd5a}>
        {/* Left Section */}
        <View style={styles(theme).Viewabfce44f}>
          <Text style={styles(theme).Text44302ea3}>
            {"Hey, Polish Painter's.."}
          </Text>

          <View style={styles(theme).View550d1a35}>
            <Icon
              name={'Feather/map-pin'}
              size={15}
              color={theme.colors.medium}
            />
            <Text style={styles(theme).Texta21d3b0d}>{'Mayo, Ireland'}</Text>
            <Icon name={'Entypo/chevron-small-down'} size={24} />
          </View>
        </View>
        {/* Right Section */}
        <View style={styles(theme).View967fd4f5}>
          <Touchable>
            <View style={styles(theme).View53f79c36}>
              <Icon
                style={styles(theme).Icon6cafd915}
                name={'Ionicons/ios-notifications'}
                size={30}
                color={theme.colors.textPlaceholder}
              />
              <>
                {!starRatingValue ? null : (
                  <View style={styles(theme).View92787b34} />
                )}
              </>
            </View>
          </Touchable>

          <Touchable style={styles(theme).Touchable29534911}>
            <Surface style={styles(theme).Surfacef30bfc43} elevation={3}>
              <CircleImage size={40} source={Images.PolishPainters} />
            </Surface>
          </Touchable>
        </View>
      </View>

      <ScrollView
        style={styles(theme).ScrollViewdf29e2e2}
        contentContainerStyle={styles(theme).ScrollView989db244Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* header */}
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text961160f7,
          ]}
        >
          {'\nSelect Sub-Category :'}
        </Text>
        <Button
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Button714b903d,
          ]}
          title={'Drop Off ;'}
        />
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
            styles(theme).Button7a095cbe,
          ]}
          title={'Private Driver '}
        />
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
            styles(theme).Buttonbd55a17d,
          ]}
          title={'Delivery'}
        />
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
            styles(theme).Buttonbd55a17d,
          ]}
          title={'Food Drop'}
        />
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
            styles(theme).Buttonbd55a17d,
          ]}
          title={'Freight delivery'}
        />
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
            styles(theme).Buttonbd55a17d,
          ]}
          title={'Ride Share'}
        />
        <Button
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Buttonbd55a17d,
          ]}
          title={'Transportation'}
        />
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Textc521608b,
          ]}
        >
          {'.  .  .'}
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
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
  });

export default withTheme(FindDropoffScreen);
