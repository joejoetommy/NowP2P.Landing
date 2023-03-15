import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      {/* Header Wrapper */}
      <View style={styles(theme).Viewf1322e91}>
        {/* Settings */}
        <Text style={styles(theme).Text305fb3ae}>{'Settings'}</Text>
      </View>
      {/* Content Wrapper */}
      <View style={styles(theme).View20402b8c}>
        <Touchable>
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
                size={24}
              />
              <Text
                style={styles(theme).Texta88f3b0f}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
                size={24}
              />
              <Text
                style={styles(theme).Texta88f3b0f}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
                size={24}
              />
              <Text
                style={styles(theme).Text605679d4}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                name={'AntDesign/questioncircle'}
                size={24}
              />
              <Text
                style={styles(theme).Texta88f3b0f}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>
            {/* Row Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
                size={24}
              />
              <Text
                style={styles(theme).Texta88f3b0f}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('LanguageSettingsCopyScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View style={styles(theme).View811dc628}>
            {/* Left Aligned */}
            <View style={styles(theme).View2d8383e6}>
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'FontAwesome/language'}
              />
              <Text
                style={styles(theme).Texta88f3b0f}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Language '}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>
      {/* Footer Wrapper */}
      <View style={styles(theme).View0419a0dc}>
        <Touchable>
          {/* Button Wrapper */}
          <View style={styles(theme).View8eb8d6c4}>
            {/* Sign Out Text */}
            <Text style={styles(theme).Text495ae2b3}>{'Sign Out'}</Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Dividerde11d607: { height: 1 },
    Text305fb3ae: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 24,
      marginBottom: 6,
    },
    Text495ae2b3: { color: theme.colors.primary, textAlign: 'center' },
    Text605679d4: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 12,
    },
    Texta88f3b0f: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
      marginLeft: 12,
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View20402b8c: {
      flexGrow: 1,
      flexShrink: 0,
      marginLeft: 24,
      marginRight: 24,
    },
    View2d8383e6: { alignItems: 'center', flex: 1, flexDirection: 'row' },
    View811dc628: {
      flexDirection: 'row',
      height: 60,
      justifyContent: 'space-between',
    },
    View8eb8d6c4: {
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      minHeight: 54,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewf1322e91: {
      alignItems: 'center',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
    },
  });

export default withTheme(AppSettingsScreen);
