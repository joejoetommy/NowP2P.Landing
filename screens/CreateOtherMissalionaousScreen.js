import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateOtherMissalionaousScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={true}
      hasBottomSafeArea={true}
      hasSafeArea={false}
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
              placeholder={'Product Name*'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Category */}
          <View style={styles(theme).View5c33f592}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput6acd3301}
              value={textInputValue}
              placeholder={'Product Category*'}
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
          {/* Add description */}
          <View style={styles(theme).View18802ae4} accessibilityRole={'text'}>
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
              placeholder={'Add Description'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Stock & Unit */}
          <View style={styles(theme).View43f90d47}></View>
          {/* Sale Price & Discount */}
          <View style={styles(theme).View43f90d47}>
            {/* Sale Price */}
            <View style={styles(theme).View1387499f}>
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
                placeholder={'Asking Price*'}
                placeholderTextColor={theme.colors.textPlaceholder}
              />
              {/* Unit */}
              <View style={styles(theme).Viewc94a68d8}>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).TextInput6acd3301}
                  value={textInputValue}
                  placeholder={'Unit*'}
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
            </View>
          </View>
          {/* Wholesale & Dealer prices */}
          <View style={styles(theme).View43f90d47}></View>
          {/* Add description */}
          <View style={styles(theme).View18802ae4} accessibilityRole={'text'}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput3aede295}
              placeholder={'Key information'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
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
              placeholder={'Shipping'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>
        {/* Action Btn */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('Step1URLTokenScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button916837df}
          title={'save & publish'}
        />
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
    View1387499f: { flex: 1, marginBottom: 10, marginTop: 10 },
    View18802ae4: { marginBottom: 10, marginTop: 10 },
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
    Viewc94a68d8: {
      alignItems: 'center',
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

export default withTheme(CreateOtherMissalionaousScreen);
