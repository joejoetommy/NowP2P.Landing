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
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateWorkTask4CreativeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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
        {/* Product Form */}
        <View>
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Task Title:'}
          </Text>
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
              placeholder={'Name / Title'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Type:                                        Remote:'}
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
              placeholder={'Industry'}
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
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput73e36f22}
              placeholder={'Yes/No'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Description:'}
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

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Task Price:'}
          </Text>
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
                placeholder={'Price'}
                placeholderTextColor={theme.colors.textPlaceholder}
              />
              {/* Unit */}
              <View style={styles(theme).Viewede514f6}>
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
                  style={styles(theme).TextInput3b20f325}
                  placeholder={'Hourly rate / Fixed rate'}
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
              {/* Unit */}
              <View style={styles(theme).Viewede514f6}>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).TextInput6acd3301}
                  placeholder={'Est. Hours'}
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

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Key Information:'}
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
              placeholder={'Key information'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
            <View style={GlobalStyles.ViewStyles(theme)['Time and date block']}>
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).DatePicker4a3dd8f9}
                label={'Completion date & Time'}
                leftIconMode={'inset'}
                type={'solid'}
                format={'ddd, d mmm'}
                mode={'datetime'}
              />
            </View>
          </View>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Type:'}
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
            styles(theme).Text01bf11c8,
          ]}
        >
          {'Attachments:'}
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
              style={styles(theme).ImageBackgrounddd46ddd6}
              resizeMode={'cover'}
              source={Images.Documents}
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

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['header 2'],
              styles(theme).Text01bf11c8,
            ]}
          >
            {'Equipment needed:'}
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
            {'Location:'}
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
    DatePicker4a3dd8f9: {
      backgroundColor: theme.colors['Community_Border'],
      borderRadius: 12,
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
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
    TextInput3b20f325: {
      backgroundColor: theme.colors.strongInverse,
      borderBottomWidth: 1,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.strong,
      height: 50,
      minWidth: 250,
      paddingLeft: 16,
      width: '100%',
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
    View84d72844: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 2,
      marginTop: 2,
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
    View9d48eb5b: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      marginTop: 2,
      width: '100%',
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
    Viewede514f6: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      marginBottom: 3,
      marginLeft: 16,
      marginTop: 10,
      maxHeight: 25,
      width: '50%',
    },
  });

export default withTheme(CreateWorkTask4CreativeScreen);
