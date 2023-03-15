import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FilterdistanceageScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [AgeSlider, setAgeSlider] = React.useState(0);
  const [FilterBy, setFilterBy] = React.useState('');
  const [InterestedIn, setInterestedIn] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).View8e4f9c45}>
        {/* Back */}
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
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Textee3b3f07}>{'All'}</Text>
        {/* Close */}
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
            <Icon size={24} name={'AntDesign/close'} />
          </Touchable>
        </View>
      </View>
      {/* Distance */}
      <View style={styles(theme).View20607a6a}>
        <View style={styles(theme).View90d80928}>
          <Text style={styles(theme).Text0f0b5bd0}>{'Distance'}</Text>

          <Text style={styles(theme).Texte19a6c98}>
            {sliderValue}
            {' km'}
          </Text>
        </View>
        <Slider
          onValueChange={newSliderValue => {
            try {
              setSliderValue(newSliderValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Slidere30805ee}
          thumbTintColor={theme.colors['Custom Color_5']}
          maximumValue={60}
          minimumTrackTintColor={theme.colors['Custom Color_5']}
          minimumValue={1}
          defaultValue={5}
        />
      </View>
      {/* Filter By */}
      <View style={styles(theme).View4e541e98}>
        {/* Options */}
        <View style={styles(theme).View88c44c3e}>
          {/* All */}
          <View style={styles(theme).Viewd4bf455f}>
            {/* selected */}
            <>
              {!(FilterBy === 'all') ? null : (
                <Button style={styles(theme).Button2bfc8b93} title={'All'} />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'all') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('all');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Button240bdac7}
                  title={'All'}
                />
              )}
            </>
          </View>
          {/* Online */}
          <View style={styles(theme).Viewd4bf455f}>
            {/* selected */}
            <>
              {!(FilterBy === 'online') ? null : (
                <Button style={styles(theme).Button2bfc8b93} title={'Online'} />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'online') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('online');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Button240bdac7}
                  title={'Online'}
                />
              )}
            </>
          </View>
          {/* New */}
          <View style={styles(theme).Viewc992f941}>
            {/* selected */}
            <>
              {!(FilterBy === 'new') ? null : (
                <Button style={styles(theme).Button2bfc8b93} title={'New'} />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'new') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('new');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Button240bdac7}
                  title={'New'}
                />
              )}
            </>
          </View>
        </View>
      </View>
      {/* Age */}
      <View style={styles(theme).View6d63ea89}>
        <View style={styles(theme).View90d80928}>
          <Text style={styles(theme).Text0f0b5bd0}>{'Days active'}</Text>

          <Text style={styles(theme).Texte19a6c98}>
            {'Upto '}
            {AgeSlider}
          </Text>
        </View>
        <Slider
          onValueChange={newSliderValue => {
            try {
              setAgeSlider(newSliderValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Slidere30805ee}
          thumbTintColor={theme.colors['Custom Color_5']}
          maximumValue={60}
          minimumTrackTintColor={theme.colors['Custom Color_5']}
          minimumValue={18}
        />
      </View>
      {/* Apply */}
      <Button
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttonf267d445}
        title={'Apply'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button240bdac7: {
      backgroundColor: theme.colors['Custom Color_3'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_9'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_9'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      height: 48,
      textAlign: 'center',
    },
    Button2bfc8b93: {
      backgroundColor: theme.colors['Custom Color_4'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_5'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      height: 48,
      textAlign: 'center',
    },
    Buttonf267d445: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      fontFamily: 'Poppins_500Medium',
      fontSize: 17,
      height: 48,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 25,
      textAlign: 'center',
    },
    Slidere30805ee: { marginLeft: 12, marginRight: 12 },
    Text0f0b5bd0: {
      color: 'rgb(3, 2, 2)',
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 15,
      paddingBottom: 15,
      paddingTop: 15,
    },
    Text28e1ff9a: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 15,
      paddingBottom: 15,
      paddingTop: 15,
    },
    TextInput08e8a9a7: {
      backgroundColor: theme.colors['Custom Color_3'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 8,
    },
    Texte19a6c98: {
      color: 'rgb(3, 2, 2)',
      fontFamily: 'Poppins_400Regular',
      fontSize: 13,
      paddingBottom: 15,
      paddingTop: 15,
    },
    Textee3b3f07: {
      color: theme.colors.strong,
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
    },
    View20607a6a: { marginTop: 15 },
    View4e541e98: { marginTop: 15, paddingLeft: 20, paddingRight: 20 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View6d63ea89: { flex: 1, marginTop: 15 },
    View88c44c3e: { flexDirection: 'row', justifyContent: 'space-between' },
    View8e4f9c45: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
    },
    View90d80928: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    Viewc992f941: { flex: 1 },
    Viewd4bf455f: { flex: 1, marginRight: 10 },
  });

export default withTheme(FilterdistanceageScreen);
