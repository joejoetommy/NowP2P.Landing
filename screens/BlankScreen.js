import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { Icon, ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const BlankScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View style={GlobalStyles.ViewStyles(theme)['Token business card 3']}>
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

      <View style={styles(theme).View2cb0e1d8}>
        <WebView
          style={GlobalStyles.WebViewStyles(theme)['Web View']}
          source={{ uri: 'https://reactnative.dev' }}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          cacheEnabled={true}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Icon7a9a00a4: { left: 35 },
    Icond51c0199: { left: 15 },
    Image0479822d: { borderRadius: 4, height: 80, width: 80 },
    Text282d784e: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 5,
    },
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
    Textc8e26ead: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 15,
    },
    View2cb0e1d8: { height: '65%' },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    Viewb3d565fb: { flex: 1, marginLeft: 15 },
  });

export default withTheme(BlankScreen);
