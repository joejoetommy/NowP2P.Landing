import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateBuySellDD5PropertyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.navigate('Step1URLTokenScreen');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasBottomSafeArea={true}
    >
      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollView7005d0c0Content
        }
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await Utils.openCamera({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          <View style={styles(theme).Viewa8efbbc7}>
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
          </View>
        </Touchable>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text3fce65c2,
          ]}
        >
          {'Price:'}
        </Text>
        {/* Unit */}
        <View style={styles(theme).View1f228051}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput9b14a7aa}
            value={textInputValue}
            placeholder={'Price*'}
            placeholderTextColor={theme.colors.textPlaceholder}
          />
          <Touchable style={styles(theme).Touchable7be23627}></Touchable>
        </View>
        {/* Product Form */}
        <View>
          {/* Name */}
          <View style={styles(theme).View18802ae4}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              value={textInputValue}
              placeholder={'Property Address'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Stock & Unit */}
          <View style={styles(theme).View43f90d47}></View>
          {/* Category */}
          <View style={styles(theme).View22f2d7c1}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput71c233ed}
              placeholder={'Type'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable>
              <Icon
                style={styles(theme).Icon8ae4314e}
                size={24}
                name={'Entypo/chevron-down'}
                color={theme.colors.textPlaceholder}
              />
            </Touchable>
          </View>
          {/* Wholesale & Dealer prices */}
          <View style={styles(theme).View43f90d47}></View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text537db0a5,
            ]}
          >
            {'Beds:'}
          </Text>

          <View>
            {/* Key INFO */}
            <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput3aede295}
                placeholder={'Add'}
                placeholderTextColor={theme.colors.textPlaceholder}
                multiline={true}
              />
            </View>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['header 2'],
                styles(theme).Text537db0a5,
              ]}
            >
              {'Baths:'}
            </Text>
            {/* Key INFO */}
            <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput3aede295}
                placeholder={'Add'}
                placeholderTextColor={theme.colors.textPlaceholder}
                multiline={true}
              />
            </View>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['header 2'],
                styles(theme).Text043c5e54,
              ]}
            >
              {'M2:'}
            </Text>
            {/* Key INFO */}
            <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput3aede295}
                placeholder={'Add'}
                placeholderTextColor={theme.colors.textPlaceholder}
                multiline={true}
              />
            </View>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['header 2'],
                styles(theme).Textcc96f507,
              ]}
            >
              {'BER Rating:'}
            </Text>
            {/* Key INFO */}
            <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput3aede295}
                placeholder={'Add'}
                placeholderTextColor={theme.colors.textPlaceholder}
                multiline={true}
              />
            </View>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['header 2'],
                styles(theme).Text043c5e54,
              ]}
            >
              {'Description: '}
            </Text>
          </View>
          <View />
          {/* Name */}
          <View style={styles(theme).View18802ae4}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Add Description'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text4c3203f7,
            ]}
          >
            {'Property Features:'}
          </Text>
          {/* Property Features */}
          <View style={styles(theme).View18802ae4}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Add Property Features'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text4c3203f7,
            ]}
          >
            {'Neighbourhood Guide:'}
          </Text>
          {/* Neighbourhood Guide */}
          <View style={styles(theme).View18802ae4}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Add neighbourhood Guide'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text3168ba69,
            ]}
          >
            {'Property Agent:'}
          </Text>
        </View>
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await Utils.openCamera({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          <View style={styles(theme).Viewa8efbbc7}>
            <ImageBackground
              style={styles(theme).ImageBackground8723160b}
              resizeMode={'cover'}
              source={Images.ProfessIcon}
            >
              <View style={styles(theme).View94c59805}>
                <Icon
                  size={24}
                  color={theme.colors.custom_rgb255_255_255}
                  name={'Entypo/circle-with-plus'}
                />
              </View>
            </ImageBackground>
          </View>
        </Touchable>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text043c5e54,
          ]}
        >
          {'Name: '}
        </Text>
        {/* Key INFO */}
        <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3aede295}
            placeholder={'Add'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
        </View>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text043c5e54,
          ]}
        >
          {'License: '}
        </Text>
        {/* Key INFO */}
        <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3aede295}
            placeholder={'Add'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
        </View>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text043c5e54,
          ]}
        >
          {'Office: '}
        </Text>
        {/* Key INFO */}
        <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3aede295}
            placeholder={'Add'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
        </View>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text043c5e54,
          ]}
        >
          {'Email: '}
        </Text>
        {/* Key INFO */}
        <View style={styles(theme).View09a29be6} accessibilityRole={'text'}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3aede295}
            placeholder={'Add'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
        </View>
        {/* Action Btn */}
        <Button style={styles(theme).Button916837df} title={'save & publish'} />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button916837df: {
      backgroundColor: theme.colors.shopAppBlue,
      borderRadius: 11,
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: '600',
      height: 51,
      marginBottom: 20,
      marginTop: 20,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    DatePicker3e92c935: { height: 32, marginTop: -8, width: 80 },
    Icon1d734f49: { marginLeft: -48 },
    Icon8ae4314e: { marginLeft: -35 },
    ImageBackground8723160b: {
      alignItems: 'center',
      height: 85,
      justifyContent: 'flex-end',
      width: 85,
    },
    KeyboardAwareScrollView7005d0c0Content: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Text043c5e54: { fontSize: 14, marginBottom: 4, marginRight: 220 },
    Text3168ba69: {
      fontSize: 14,
      marginBottom: 0,
      marginRight: 0,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    Text3fce65c2: { fontSize: 14, marginBottom: 0, marginRight: 250 },
    Text4c3203f7: { fontSize: 14, marginBottom: 0, marginRight: 150 },
    Text537db0a5: { fontSize: 14, marginBottom: 4, marginRight: 250 },
    TextInput10b53848: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 50,
      minWidth: 150,
      paddingLeft: 16,
    },
    TextInput392147e8: {
      backgroundColor: theme.colors.divider,
      borderColor: theme.colors.divider,
      borderRadius: 15,
      height: 45,
      marginTop: 10,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 8,
      paddingTop: 8,
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
    TextInput6acd3301: {
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
      width: '100%',
    },
    TextInput71c233ed: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      fontSize: 14,
      height: 50,
      maxHeight: 25,
      minWidth: 250,
      paddingLeft: 16,
      width: '100%',
    },
    TextInput8e3a6bed: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      paddingLeft: 16,
    },
    TextInput9b14a7aa: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 50,
      maxHeight: 25,
      paddingLeft: 16,
      width: '100%',
    },
    Textcc96f507: { fontSize: 14, marginBottom: 4, marginRight: 200 },
    Textef981779: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      textTransform: 'capitalize',
    },
    Touchable7be23627: { marginLeft: 25, minWidth: 0 },
    View057dce78: {
      backgroundColor: theme.colors.divider,
      borderRadius: 12,
      height: 45,
      marginTop: 10,
      paddingLeft: 16,
      paddingTop: 14,
    },
    View09a29be6: {
      flexDirection: 'column',
      marginBottom: 10,
      marginTop: 0,
      maxHeight: 25,
      maxWidth: 150,
      minWidth: 50,
    },
    View1387499f: { flex: 1, marginBottom: 10, marginTop: 10 },
    View18802ae4: { marginBottom: 10, marginTop: 10 },
    View1f228051: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
      marginLeft: 16,
      marginTop: 10,
      maxHeight: 25,
      width: '50%',
    },
    View22f2d7c1: {
      alignItems: 'center',
      borderStyle: 'solid',
      bottom: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop: 0,
      maxHeight: 25,
      maxWidth: 250,
      width: '100%',
    },
    View32d7c3ab: {
      marginBottom: 10,
      marginTop: 0,
      maxHeight: 25,
      maxWidth: 150,
      minWidth: 50,
    },
    View43f90d47: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    View4762dfc8: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    View52027b74: { flex: 1, marginBottom: 10, marginLeft: 16, marginTop: 10 },
    View591d32f4: { flex: 1, marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    View5c33f592: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop: 10,
      width: '100%',
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
    Viewa8efbbc7: {
      alignItems: 'center',
      borderRadius: 8,
      justifyContent: 'center',
      marginBottom: 16,
      marginTop: 16,
    },
    Viewd2a4e8a5: {
      alignItems: 'center',
      borderRightWidth: 0,
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
      marginLeft: 16,
      marginTop: 10,
      width: '50%',
    },
    Viewe34c0bbe: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 50,
      justifyContent: 'center',
      marginLeft: 16,
      width: 50,
    },
  });

export default withTheme(CreateBuySellDD5PropertyScreen);
