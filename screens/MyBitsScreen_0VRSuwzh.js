import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import Images from '../config/Images';
import { MapView } from '@draftbit/maps';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyBitsScreen_0VRSuwzh = props => {
  const { theme } = props;
  const { navigation } = props;

  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

  const mapViewJesrb1ZJRef = React.useRef();

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Navigation Frame */}
      <View style={styles(theme).View41492e28}>
        {/* Left Frame */}
        <View style={styles(theme).View2a2749f9}>
          {/* Flex Frame for Touchable */}
          <View style={styles(theme).View4f6009be}>
            <Touchable>
              <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                <Icon
                  size={18}
                  color={theme.colors.communityIconFill}
                  name={'Entypo/chevron-thin-down'}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
        {/* Middle Frame */}
        <View style={styles(theme).View768dd5f3}></View>
        {/* Right Frame */}
        <View style={styles(theme).View2a2749f9}>
          {/* Flex Frame for Touchable */}
          <View style={styles(theme).View4f6009be}>
            <Touchable>
              <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                <Icon
                  name={'FontAwesome/search'}
                  size={18}
                  color={theme.colors.communityIconFill}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Headline Only Frame */}
      <View style={styles(theme).View404f027f}>
        {/* Rubik Headline Style 18/24 Bold */}
        <Text style={styles(theme).Text7b0e5938}>{'My Bits'}</Text>
      </View>
      {/* Second Navigation Frame */}
      <View style={styles(theme).View02a568ec}>
        {/* 3 Options Frame */}
        <View style={styles(theme).View10a8e0eb}>
          {/* Option 1 Frame */}
          <View style={styles(theme).View62b314a3}>
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab1 ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(true);
                        setMenuTab2(false);
                        setMenuTab3(false);
                        setListMissing(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View style={styles(theme).Viewb0a8418e}>
                      {/* Label */}
                      <Text style={styles(theme).Text474141ca}>
                        {'My Pins'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab1 ? null : (
                <View style={styles(theme).View6ba11793}>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(true);
                        setMenuTab2(false);
                        setMenuTab3(false);
                        setListMissing(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View style={styles(theme).Viewce28ad1b}>
                      {/* Label */}
                      <Text style={styles(theme).Text838c68b1}>
                        {'My Pins'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
          {/* Option 2 Frame */}
          <View style={styles(theme).View7b593d28}>
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab2 ? null : (
                <View style={styles(theme).View35b8ace5}>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(true);
                        setMenuTab3(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View style={styles(theme).Viewb0a8418e}>
                      {/* Label */}
                      <Text style={styles(theme).Text474141ca}>
                        {'My Tokens'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab2 ? null : (
                <View style={styles(theme).View1e67b218}>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab3(false);
                        setMenuTab2(true);
                        setListMissing(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View style={styles(theme).Viewce28ad1b}>
                      {/* Label */}
                      <Text style={styles(theme).Text838c68b1}>
                        {'My Tokens'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
          {/* Option 3 Frame */}
          <View style={styles(theme).View010f28bd}>
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab3 ? null : (
                <View style={styles(theme).Viewafea9bd2}>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(false);
                        setMenuTab3(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View style={styles(theme).Viewb0a8418e}>
                      {/* Label */}
                      <Text style={styles(theme).Text474141ca}>
                        {'My Reviews'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab3 ? null : (
                <View style={styles(theme).Viewafea9bd2}>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(false);
                        setMenuTab3(true);
                        setListMissing(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View style={styles(theme).Viewce28ad1b}>
                      {/* Label */}
                      <Text style={styles(theme).Text838c68b1}>
                        {'My Reviews'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
        </View>
      </View>
      {/* Scroll Content View */}
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollView4e34f380Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <MapView
          style={[
            GlobalStyles.MapViewStyles(theme)['Map View'],
            styles(theme).MapView078632a5,
          ]}
          latitude={37.40241}
          longitude={-122.12125}
          zoom={8}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          loadingEnabled={true}
          showsPointsOfInterest={true}
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          ref={mapViewJesrb1ZJRef}
        />
        {/* Content Frame Tab 1 */}
        <>
          {!menuTab1 ? null : (
            <View style={styles(theme).View7b593d28}>
              <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                {({ loading, error, data, refetchGetSampleDataList10 }) => {
                  const fetchData = data;
                  if (!fetchData || loading) {
                    return <ActivityIndicator />;
                  }

                  if (error) {
                    return (
                      <Text style={{ textAlign: 'center' }}>
                        There was a problem fetching this data
                      </Text>
                    );
                  }

                  return (
                    <FlatList
                      data={fetchData}
                      listKey={'IvFbewXR'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('OpenTokenScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* List Style Frame */}
                            <View style={styles(theme).Viewb5386ed1}>
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate('OpenTokenScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* TOKEN */}
                                <View
                                  style={[
                                    GlobalStyles.ViewStyles(theme)[
                                      'Token business card 7'
                                    ],
                                    styles(theme).View3c2eeb57,
                                  ]}
                                >
                                  <Image
                                    style={styles(theme).Image0479822d}
                                    resizeMode={'cover'}
                                    source={{
                                      uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/QIdTF7fF/assets/vhoBEsR3H2JeO6mN8Nvwx',
                                    }}
                                  />
                                  <Touchable>
                                    <View style={styles(theme).Viewb3d565fb}>
                                      {/* Name */}
                                      <Text style={styles(theme).Texta2081972}>
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
                                        <Text
                                          style={styles(theme).Text282d784e}
                                        >
                                          {'Day 12'}
                                        </Text>
                                        <Icon
                                          style={styles(theme).Icon7a9a00a4}
                                          size={20}
                                          color={theme.colors['Primary']}
                                          name={
                                            'MaterialCommunityIcons/comment-text-multiple'
                                          }
                                        />
                                        <Text
                                          style={styles(theme).Text4ce026e8}
                                        >
                                          {'33'}
                                        </Text>
                                        <Icon
                                          style={styles(theme).Icond51c0199}
                                          size={20}
                                          color={theme.colors['Primary']}
                                          name={'Ionicons/heart'}
                                        />
                                        <Text
                                          style={styles(theme).Textc8e26ead}
                                        >
                                          {'112'}
                                        </Text>
                                        <Icon
                                          style={styles(theme).Icond51c0199}
                                          size={20}
                                          color={theme.colors['Primary']}
                                          name={
                                            'MaterialCommunityIcons/cursor-default-click'
                                          }
                                        />
                                        <Text
                                          style={styles(theme).Textc8e26ead}
                                        >
                                          {'1,533'}
                                        </Text>
                                      </View>
                                      {/* Distance */}
                                      <View
                                        style={styles(theme).View79351d85}
                                      />
                                      <Touchable />
                                    </View>
                                  </Touchable>
                                </View>
                              </Touchable>
                              <Touchable />
                            </View>
                          </Touchable>
                        );
                      }}
                      style={styles(theme).FlatList989db244}
                      contentContainerStyle={
                        styles(theme).FlatListc992f941Content
                      }
                      numColumns={1}
                    />
                  );
                }}
              </ExampleDataForListsApi.FetchGetSampleDataList10GET>
            </View>
          )}
        </>
        {/* Content Frame Tab 2 */}
        <>{!menuTab2 ? null : <View style={styles(theme).View7b593d28} />}</>
        {/* Content Frame Tab 3 */}
        <>{!menuTab3 ? null : <View />}</>
      </ScrollView>
      {/* No Content Frame */}
      <>
        {!listMissing ? null : (
          <View style={styles(theme).View0419a0dc}>
            {/* System Notification Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View style={styles(theme).Viewa5740c23}>
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      name={'MaterialIcons/event-busy'}
                      size={48}
                      color={theme.colors.communityIconFill}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View style={styles(theme).View36e703fe}>
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text style={styles(theme).Textb77975ff}>
                      {
                        'Your Events inbox is \ncurrently empty. \nNew events will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
            {/* System Notification Tab 3 */}
            <>
              {!menuTab3 ? null : (
                <View style={styles(theme).Viewa5740c23}>
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      name={'Ionicons/md-notifications-off'}
                      size={48}
                      color={theme.colors.communityIconFill}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View style={styles(theme).View36e703fe}>
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text style={styles(theme).Textb77975ff}>
                      {
                        'Your Notifications inbox is \ncurrently empty. \nNew events will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Icon7a9a00a4: { left: 35 },
    Icond51c0199: { left: 15 },
    Image0479822d: { borderRadius: 4, height: 80, width: 80 },
    MapView078632a5: { maxHeight: 255, width: '100%' },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text282d784e: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 5,
    },
    Text4388086f: {
      color: theme.colors.communityTrueOption,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Text474141ca: {
      color: theme.colors.communityWhite,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
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
    Text7b0e5938: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 24,
      lineHeight: 30,
    },
    Text838c68b1: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Texta2081972: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      marginTop: 2,
    },
    Textb77975ff: {
      color: theme.colors.communityIconFill,
      fontFamily: 'Rubik_700Bold',
      fontSize: 18,
      lineHeight: 24,
      textAlign: 'center',
    },
    Textb7d03b19: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center',
    },
    Textc5c9670a: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 13,
      lineHeight: 19,
    },
    Textc8e26ead: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 15,
    },
    View010f28bd: {
      borderBottomRightRadius: 64,
      borderTopRightRadius: 64,
      flex: 1,
      flexGrow: 1,
      flexShrink: 0,
    },
    View02a568ec: { paddingLeft: 12, paddingRight: 12 },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View078c265c: {
      flexGrow: 0,
      flexShrink: 1,
      paddingBottom: 18,
      paddingLeft: 15,
      paddingRight: 12,
      paddingTop: 3,
    },
    View10a8e0eb: { flexDirection: 'row', paddingTop: 12 },
    View1e67b218: {
      backgroundColor: theme.colors.communityIconBGColor,
      paddingBottom: 1,
      paddingTop: 1,
    },
    View2a2749f9: { paddingBottom: 7, paddingTop: 7 },
    View35b8ace5: { backgroundColor: theme.colors.communityIconBGColor },
    View36e703fe: {
      alignItems: 'center',
      flexShrink: 0,
      justifyContent: 'center',
      marginLeft: 24,
      marginRight: 24,
      marginTop: 24,
    },
    View3c2eeb57: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Background'],
      borderLeftWidth: 1,
      borderRightWidth: 1,
      marginBottom: 0,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 1,
    },
    View3f2edd64: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      paddingTop: 18,
    },
    View404f027f: {
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 18,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 18,
    },
    View41492e28: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingLeft: 12,
      paddingRight: 12,
    },
    View43b593eb: { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View599ded88: { marginLeft: -18 },
    View62b314a3: {
      backgroundColor: theme.colors.communityIconBGColor,
      borderBottomLeftRadius: 64,
      borderTopLeftRadius: 64,
      flex: 1,
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
    },
    View6ba11793: {
      backgroundColor: theme.colors.communityIconBGColor,
      borderBottomLeftRadius: 64,
      borderTopLeftRadius: 64,
    },
    View768dd5f3: {
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View7a32df12: {
      borderBottomWidth: 1,
      borderColor: theme.colors.communityListDividerForGrayList,
      flexDirection: 'row-reverse',
      flexGrow: 0,
      flexShrink: 0,
      marginBottom: 6,
      marginLeft: 12,
      marginRight: 12,
      marginTop: 6,
      paddingBottom: 12,
      paddingTop: 12,
    },
    View7b593d28: { flex: 1, flexGrow: 1, flexShrink: 0 },
    View9fb4a4f3: {
      backgroundColor: theme.colors.communityWhite,
      flexGrow: 0,
      flexShrink: 1,
    },
    Viewa5740c23: {
      alignItems: 'center',
      flex: 1,
      flexShrink: 0,
      justifyContent: 'center',
    },
    Viewafea9bd2: {
      backgroundColor: theme.colors.communityIconBGColor,
      borderBottomRightRadius: 64,
      borderTopRightRadius: 64,
      paddingBottom: 1,
      paddingTop: 1,
    },
    Viewb0a8418e: {
      alignItems: 'center',
      backgroundColor: theme.colors.communityTrueOption,
      borderBottomWidth: 2,
      borderColor: theme.colors.communityDarkUI,
      borderLeftWidth: 2,
      borderRadius: 64,
      borderRightWidth: 2,
      borderTopWidth: 2,
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      paddingBottom: 9,
      paddingLeft: 9,
      paddingRight: 9,
      paddingTop: 9,
    },
    Viewb3d565fb: { flex: 1, marginLeft: 15 },
    Viewb5386ed1: {
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
      marginTop: 1,
    },
    Viewb8226a49: {
      flexGrow: 0,
      flexShrink: 1,
      paddingBottom: 3,
      paddingLeft: 15,
      paddingRight: 12,
      paddingTop: 18,
    },
    Viewce28ad1b: {
      alignItems: 'center',
      backgroundColor: theme.colors.communityIconBGColor,
      borderBottomWidth: 2,
      borderColor: theme.colors.communityIconBGColor,
      borderLeftWidth: 2,
      borderRadius: 64,
      borderRightWidth: 2,
      borderTopWidth: 2,
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      paddingBottom: 9,
      paddingLeft: 9,
      paddingRight: 9,
      paddingTop: 9,
    },
    Viewdc72771a: {
      borderBottomWidth: 1,
      borderColor: theme.colors.communityListDividerForGrayList,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      marginLeft: 12,
      marginRight: 12,
      paddingBottom: 12,
      paddingTop: 12,
    },
    Viewf7e34d90: { flexGrow: 0, flexShrink: 1 },
    screen: { backgroundColor: theme.colors.communityWhite },
  });

export default withTheme(MyBitsScreen_0VRSuwzh);
