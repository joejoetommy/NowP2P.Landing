import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import useIsOnline from '../utils/useIsOnline';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;
  const isOnline = useIsOnline();

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <>
        {!isOnline ? null : (
          <ImageBackground
            style={[
              GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
              styles(theme).ImageBackground0c96785e,
            ]}
            resizeMode={'cover'}
            backgroundColor={'"rgba(0, 0, 0, 0)"'}
            source={{
              uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/QIdTF7fF/assets/SY3WZIG4QYkH5UfVqyqt_',
            }}
          />
        )}
      </>
      <Button
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator', {
              initial: false,
              screen: 'CreateFindScreen_cqvrEKO9',
            });
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          GlobalStyles.ButtonStyles(theme)['Button'],
          styles(theme).Buttondb53e306,
        ]}
        title={'HandCash'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttondb53e306: {
      backgroundColor: 'rgb(89, 17, 164)',
      borderColor: 'rgb(61, 30, 155)',
      color: 'rgb(234, 234, 241)',
      fontFamily: 'System',
      fontSize: 32,
      fontStyle: 'italic',
      fontWeight: '700',
      marginLeft: 95,
      marginTop: 450,
      opacity: 1,
      position: 'absolute',
      textAlign: 'right',
    },
    ImageBackground0c96785e: {
      alignItems: 'flex-start',
      height: '100%',
      left: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
    },
    screen: { borderTopWidth: 0 },
  });

export default withTheme(WelcomeScreen);
