import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const LanguageSettingsCopyScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasTopSafeArea={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).Viewfbc072c8}>
        {/* Back Click */}
        <View style={styles(theme).View53f79c36}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'AntDesign/left'}
              color={theme.colors['Community_Dark_UI']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Textc014fbe5}>{'Language'}</Text>
      </View>
      {/* Languages Container */}
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Suggested Languages */}
        <View style={styles(theme).View020681f5}>
          {/* Section Heading */}
          <Text style={styles(theme).Text50f9676b}>{'Suggested'}</Text>
          <FlatList
            data={SuggestedLanguagesArr}
            listKey={'6WFB0Ek4'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).View15f32fdd}>
                    {/* Language ~ */}
                    <Text style={styles(theme).Textc63a16a3}>{'English'}</Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-on'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-off-sharp'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            numColumns={1}
          />
        </View>
        {/* Other Languages */}
        <View style={styles(theme).View14dd6931}>
          {/* Section Heading */}
          <Text style={styles(theme).Text50f9676b}>{'Language'}</Text>
          <FlatList
            data={OtherLanguagesArr}
            listKey={'YNaR5G7l'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).View15f32fdd}>
                    {/* Language ~ */}
                    <Text style={styles(theme).Textcdd07424}>{'Spainish'}</Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-on'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-off-sharp'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text50f9676b: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_800ExtraBold',
      fontSize: 18,
      marginBottom: 16,
      marginTop: 5,
      opacity: 1,
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    Textc63a16a3: {
      color: 'rgba(3, 1, 1, 0.86)',
      fontFamily: 'Inter_400Regular',
      fontSize: 24,
    },
    Textcdd07424: {
      color: 'rgba(2, 1, 1, 0.86)',
      fontFamily: 'Inter_400Regular',
      fontSize: 24,
    },
    View020681f5: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingBottom: 12,
    },
    View14dd6931: {
      borderRadius: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
    },
    View15f32fdd: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export default withTheme(LanguageSettingsCopyScreen);
