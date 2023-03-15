import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { Button, ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const Step1URLTokenScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Text style={GlobalStyles.TextStyles(theme)['header 2']}>
        {'URL view to your minted Token'}
      </Text>
      <WebView
        style={GlobalStyles.WebViewStyles(theme)['Web View']}
        source={{ uri: 'https://reactnative.dev' }}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        cacheEnabled={true}
      />
      <View>
        <View>
          <Button
            onPress={() => {
              try {
                navigation.navigate('Step2LocatepinScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              GlobalStyles.ButtonStyles(theme)['Button'],
              styles(theme).Button4afca57b,
            ]}
            title={'Pin Your Token on the Market (Active)'}
          />
          <View>
            <Button
              style={[
                GlobalStyles.ButtonStyles(theme)['Button'],
                styles(theme).Button66ae8500,
              ]}
              title={'Leave Token in my Wallet (in-Active)'}
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
  });

export default withTheme(Step1URLTokenScreen);
