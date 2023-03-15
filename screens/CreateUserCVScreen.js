import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateUserCVScreen = props => {
  const { theme } = props;

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
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['header 2'],
            styles(theme).Text01bf11c8,
          ]}
        >
          {'Profile picture:'}
        </Text>
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
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Name:'}
          </Text>
          {/* Name */}
          <View style={styles(theme).View769e29cc}>
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
              placeholder={'Name'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Title:'}
          </Text>
          {/* Category */}
          <View style={styles(theme).View9d48eb5b}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput73e36f22}
              value={textInputValue}
              placeholder={'Sector'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable></Touchable>
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Profile:'}
          </Text>
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
              scrollEnabled={true}
            />
          </View>
          {/* Sale Price & Discount */}
          <View style={styles(theme).View43f90d47}></View>
          {/* Wholesale & Dealer prices */}
          <View style={styles(theme).View43f90d47} />
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Intro Video:'}
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
              source={Images.VideoIcon}
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
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Contact:'}
          </Text>
          {/* Key INFO */}
          <View
            style={GlobalStyles.ViewStyles(theme)['BER Rating: 2']}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Email'}
          </Text>
          {/* Key INFO */}
          <View
            style={GlobalStyles.ViewStyles(theme)['BER Rating: 2']}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Located'}
          </Text>
          {/* Key INFO */}
          <View
            style={[
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              styles(theme).View8c840908,
            ]}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={[
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              styles(theme).View8625cee3,
            ]}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Give Title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
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
              style={styles(theme).TextInput2a1528e9}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={[
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              styles(theme).View134041d5,
            ]}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Give title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
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
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={[
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              styles(theme).Viewa554a937,
            ]}
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
              style={styles(theme).TextInput8f56e6f5}
              placeholder={'Give title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
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
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Action Btn */}
          <Button
            style={styles(theme).Button916837df}
            title={'save & publish'}
          />
        </Touchable>
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
    ImageBackgrounddd46ddd6: {
      alignItems: 'center',
      height: 55,
      justifyContent: 'flex-end',
      width: 55,
    },
    KeyboardAwareScrollView7005d0c0Content: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Text01bf11c8: { fontSize: 14, marginBottom: 4 },
    Text77ffacf8: { fontSize: 14, marginBottom: 0, marginTop: 5 },
    TextInput2a1528e9: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 10,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 50,
      paddingLeft: 16,
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
    TextInput73e36f22: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 25,
      paddingLeft: 16,
      width: '100%',
    },
    TextInput749d0c68: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 25,
      marginBottom: 4,
      paddingLeft: 16,
      width: '100%',
    },
    TextInput8f56e6f5: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 25,
      paddingLeft: 16,
    },
    View134041d5: { marginTop: 1 },
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
    View769e29cc: { marginBottom: 10, marginTop: 1, minHeight: 13 },
    View84d72844: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 2,
      marginTop: 2,
      width: '100%',
    },
    View8625cee3: { marginBottom: 1, marginTop: 10 },
    View8c840908: { marginBottom: 20 },
    View94c59805: {
      backgroundColor: theme.colors.shopAppBlue,
      borderRadius: 4,
      bottom: -15,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
    },
    View9b672f7c: { marginTop: 3 },
    View9d48eb5b: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      marginTop: 2,
      width: '100%',
    },
    Viewa554a937: { marginBottom: 0, marginTop: 10 },
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

export default withTheme(CreateUserCVScreen);
