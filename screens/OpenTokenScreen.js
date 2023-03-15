import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import Images from '../config/Images';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const OpenTokenScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [accountFriend, setAccountFriend] = React.useState(false);
  const [actionSheet, setActionSheet] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Navigation Frame */}
      <View style={styles(theme).Viewd79298eb}>
        {/* Left Frame */}
        <View style={styles(theme).View2a2749f9}>
          {/* Flex Frame for Touchable */}
          <View style={styles(theme).View4f6009be}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Circle
                size={31}
                bgColor={theme.colors.communityModalOpacityOverlay}
              >
                <Icon
                  name={'Ionicons/caret-back'}
                  size={18}
                  color={theme.colors.communityWhite}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
        {/* Middle Frame */}
        <View style={styles(theme).View768dd5f3}></View>
        {/* Right Frame */}
        <View style={styles(theme).View0eecdd0f}>
          {/* Flex Frame for Touchable */}
          <View style={styles(theme).View279a58f9}>
            <Touchable>
              <Circle
                size={31}
                bgColor={theme.colors.communityModalOpacityOverlay}
              >
                <Icon
                  name={'Ionicons/ios-share'}
                  size={18}
                  color={theme.colors.communityWhite}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Hero Frame */}
      <View style={styles(theme).View7c273546}>
        <Image
          style={styles(theme).Image65c0b03b}
          source={Images.JonathanBorbaKgCSRo4SiT8Unsplash}
          resizeMode={'cover'}
        />
      </View>
      {/* Profile Image Frame */}
      <View style={styles(theme).Viewc9fd7ffc}>
        {/* Profile Image Background */}
        <Circle size={96} bgColor={theme.colors.communityWhite}>
          {/* Profile Image */}
          <CircleImage
            source={Images.MalikSkydsgaardIgkwHPbVk8Unsplash}
            size={90}
          />
        </Circle>
      </View>
      {/* Profile Detail Frame */}
      <View style={styles(theme).View31ec6587}>
        {/* Bio Frame */}
        <View style={styles(theme).Viewc8ddb0d6}>
          {/* Rubik Headline Style 18/24 Bold */}
          <Text style={styles(theme).Text5f4acb5b}>{'Albert Flores'}</Text>
          {/* Rubik Text Style 12/18 Regular */}
          <Text style={styles(theme).Text6a1a93dd}>{'@AlbertFlores'}</Text>
        </View>
        {/* Action Frame */}
        <View style={styles(theme).View9797fb79}>
          {/* Left Frame */}
          <View style={styles(theme).View0837d5bd}>
            {/* Flex Frame for Touchable */}
            <View style={styles(theme).View279a58f9}>
              <Touchable>
                <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                  <Icon
                    name={'Foundation/telephone'}
                    size={18}
                    color={theme.colors.communityIconFill}
                  />
                </Circle>
              </Touchable>
            </View>
            {/* Flex Frame for Touchable */}
            <View style={styles(theme).View4f6009be}>
              <Touchable>
                <Circle bgColor={theme.colors.communityIconBGColor} size={31}>
                  <Icon
                    name={'MaterialCommunityIcons/message-processing'}
                    size={18}
                    color={theme.colors.communityIconFill}
                  />
                </Circle>
              </Touchable>
            </View>
          </View>
          {/* Right Frame */}
          <View style={styles(theme).View0419a0dc}>
            {/* Flex Frame for Touchable */}
            <>
              {!accountFriend ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setAccountFriend(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View style={styles(theme).View3cff3826}>
                      {/* Rubik Text Style 12/18 Regular */}
                      <Text style={styles(theme).Text08b37424}>
                        {'Following'}
                      </Text>
                      {/* Flex Frame for Icons */}
                      <View style={styles(theme).Viewfeac12d8}>
                        <Icon
                          color={theme.colors.communityPrimaryAlt}
                          name={'Feather/user-check'}
                          size={18}
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {accountFriend ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setAccountFriend(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View style={styles(theme).View7d00a05a}>
                      {/* Rubik Text Style 12/18 Regular */}
                      <Text style={styles(theme).Textf6348c2e}>{'Follow'}</Text>
                      {/* Flex Frame for Icons */}
                      <View style={styles(theme).Viewfeac12d8}>
                        <Icon
                          name={'FontAwesome/user'}
                          size={18}
                          color={theme.colors.communityWhite}
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
        </View>
      </View>

      <View style={styles(theme).View5ca232e1}>
        <WebView
          style={GlobalStyles.WebViewStyles(theme)['Web View']}
          source={{ uri: 'https://reactnative.dev' }}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          cacheEnabled={true}
        />
      </View>
      {/* Three Tabs Component Group */}
      <View style={styles(theme).Viewc992f941}>
        {/* Three Tabs Gradient for Aesthetic */}
        <View style={styles(theme).Viewd0d54e1f}>
          <LinearGradient
            style={styles(theme).LinearGradient8dc796a9}
            endY={1}
            endX={0}
            color1={theme.colors.communityStoneGray}
            color2={theme.colors.communityWhite}
            startY={100}
          />
        </View>
        {/* Three Tabs Menu Frame */}
        <View style={styles(theme).Viewafdeb542}>
          {/* Second Navigation Frame */}
          <View style={styles(theme).Viewde12b17f}>
            {/* 3 Options Frame */}
            <View style={styles(theme).Viewdebd3207}>
              {/* Option 1 Frame */}
              <View style={styles(theme).Viewf6252edd}>
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
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {/* Button Frame True */}
                        <View style={styles(theme).View0ec5e160}>
                          {/* Label */}
                          <Text style={styles(theme).Text474141ca}>
                            {'Reviews'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab1 ? null : (
                    <View>
                      <Touchable
                        onPress={() => {
                          try {
                            setMenuTab1(true);
                            setMenuTab2(false);
                            setMenuTab3(false);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {/* Button Frame False */}
                        <View style={styles(theme).View39704305}>
                          {/* Label */}
                          <Text style={styles(theme).Text862e224b}>
                            {'Reviews'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
              </View>
              {/* Option 2 Frame */}
              <View style={styles(theme).Viewf6252edd}>
                {/* Flex Frame for Touchable */}
                <>
                  {!menuTab2 ? null : (
                    <View>
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
                        <View style={styles(theme).View0ec5e160}>
                          {/* Label */}
                          <Text style={styles(theme).Text474141ca}>
                            {'Comments'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab2 ? null : (
                    <View>
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
                        {/* Button Frame False */}
                        <View style={styles(theme).View39704305}>
                          {/* Label */}
                          <Text style={styles(theme).Text862e224b}>
                            {'Comments'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
              </View>
              {/* Option 3 Frame */}
              <View style={styles(theme).Viewf6252edd}>
                {/* Flex Frame for Touchable */}
                <>
                  {!menuTab3 ? null : (
                    <View>
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
                        <View style={styles(theme).View0ec5e160}>
                          {/* Label */}
                          <Text style={styles(theme).Text474141ca}>
                            {'Reactions'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab3 ? null : (
                    <View>
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
                        {/* Button Frame False */}
                        <View style={styles(theme).View39704305}>
                          {/* Label */}
                          <Text style={styles(theme).Text862e224b}>
                            {'Reactions'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
        {/* Three Tabs Content Frame */}
        <View style={styles(theme).Viewc992f941}>
          {/* Content Frame Tab 1 */}
          <>
            {!menuTab1 ? null : (
              <View style={styles(theme).View0419a0dc}>
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
                        listKey={'Qu0Yr8HA'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
                              <View style={styles(theme).View378b3d40}>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View style={styles(theme).View15949a8a}>
                                    {/* Record Frame */}
                                    <View style={styles(theme).View46d255b9}>
                                      {/* Left Side */}
                                      <View style={styles(theme).Viewdbf79098}>
                                        {/* Image Frame */}
                                        <View
                                          style={styles(theme).Viewdbf79098}
                                        >
                                          {/* Flex Frame for Icons */}
                                          <View>
                                            <Icon
                                              size={50}
                                              color={
                                                theme.colors.communityDarkUI
                                              }
                                              name={
                                                'MaterialCommunityIcons/account-box'
                                              }
                                            />
                                          </View>
                                        </View>
                                      </View>
                                      {/* Middle Grow Column */}
                                      <View style={styles(theme).Viewfa928eb2}>
                                        {/* Data Title */}
                                        <Text
                                          style={styles(theme).Text2809b4de}
                                        >
                                          {'Mary Joe'}
                                        </Text>
                                        {/* Data Point */}
                                        <Text
                                          style={styles(theme).Text198a46ec}
                                        >
                                          {
                                            'Very professional, lovely people with service as expected.'
                                          }
                                        </Text>
                                      </View>
                                      {/* Right Column */}
                                      <View style={styles(theme).View6a955cc3}>
                                        {/* Flex Frame */}
                                        <View
                                          style={styles(theme).Viewd73ba143}
                                        >
                                          {/* Rubik Headline Style 18/24 Bold */}
                                          <Text
                                            style={styles(theme).Texted3aea6a}
                                          >
                                            {'RSVP'}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
                        numColumns={1}
                      />
                    );
                  }}
                </ExampleDataForListsApi.FetchGetSampleDataList10GET>
              </View>
            )}
          </>
          {/* Content Frame Tab 2 */}
          <>
            {!menuTab2 ? null : (
              <View style={styles(theme).View0419a0dc}>
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
                        listKey={'EGif8jOS'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
                              <View style={styles(theme).View598980f3}>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View style={styles(theme).View0419a0dc}>
                                    {/* Record Frame */}
                                    <View style={styles(theme).Viewafe98872}>
                                      {/* Left Side Frame */}
                                      <View style={styles(theme).View6ec90e13}>
                                        {/* Circle Image Frame */}
                                        <View>
                                          <CircleImage
                                            source={
                                              Images.JoelMottLaK153ghdigUnsplash
                                            }
                                            size={38}
                                          />
                                        </View>
                                      </View>
                                      {/* New Right Side */}
                                      <View style={styles(theme).View4adcbad7}>
                                        {/* Top Row Frame */}
                                        <View
                                          style={styles(theme).View4a00b558}
                                        >
                                          {/* Rubik Headline Style 18/24 Bold */}
                                          <Text
                                            style={styles(theme).Text69b36461}
                                            numberOfLines={2}
                                          >
                                            {'Floyd Miles'}
                                          </Text>
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            style={styles(theme).Text81cbe3d3}
                                          >
                                            {'@FloydMiles'}
                                          </Text>
                                        </View>
                                        {/* Second Row Frame */}
                                        <View
                                          style={styles(theme).View3479f541}
                                        >
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            style={styles(theme).Text249e5b54}
                                            numberOfLines={3}
                                            ellipsizeMode={'tail'}
                                          >
                                            {
                                              'So how can advisors add Bitcoin exposure to client portfolios? Here are five routes you can take, listed from the most different unique locations. '
                                            }
                                          </Text>
                                        </View>
                                        {/* Third Row */}
                                        <View
                                          style={styles(theme).Viewadd17dea}
                                        >
                                          {/* Flex for Image */}
                                          <View
                                            style={styles(theme).View7b138601}
                                          >
                                            <Image
                                              style={
                                                styles(theme).Image5c10beb9
                                              }
                                              source={
                                                Images.AndreTaissin5OUMf1Mr5pUUnsplash
                                              }
                                              resizeMode={'cover'}
                                            />
                                          </View>
                                        </View>
                                        {/* Fourth Row */}
                                        <View
                                          style={styles(theme).View0139f4ac}
                                        >
                                          {/* Action 1 Frame */}
                                          <View
                                            style={styles(theme).Viewefc94cd2}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={'AntDesign/heart'}
                                                uncheckedIcon={
                                                  'AntDesign/hearto'
                                                }
                                                color={
                                                  theme.colors
                                                    .communitySecondary
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={styles(theme).Text55b2c3f3}
                                            >
                                              {'27.1k'}
                                            </Text>
                                          </View>
                                          {/* Action 2 Frame */}
                                          <View
                                            style={styles(theme).Viewefc94cd2}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={
                                                  'Ionicons/chatbubbles'
                                                }
                                                uncheckedIcon={
                                                  'Ionicons/chatbubbles'
                                                }
                                                color={
                                                  theme.colors.communityIconFill
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={styles(theme).Text55b2c3f3}
                                            >
                                              {'3.3k'}
                                            </Text>
                                          </View>
                                          {/* Action 3 Frame */}
                                          <View
                                            style={styles(theme).Viewefc94cd2}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={'AntDesign/eye'}
                                                uncheckedIcon={'AntDesign/eye'}
                                                color={
                                                  theme.colors.communityIconFill
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={styles(theme).Text55b2c3f3}
                                            >
                                              {'104k'}
                                            </Text>
                                          </View>
                                          {/* Flex Frame for Touchable */}
                                          <View>
                                            <Touchable>
                                              {/* Flex Frame for Icons */}
                                              <View
                                                style={
                                                  styles(theme).View13759030
                                                }
                                              >
                                                <Icon
                                                  name={'Ionicons/ios-share'}
                                                  size={18}
                                                  color={
                                                    theme.colors
                                                      .communityMediumBlack
                                                  }
                                                />
                                              </View>
                                            </Touchable>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
                        numColumns={1}
                      />
                    );
                  }}
                </ExampleDataForListsApi.FetchGetSampleDataList10GET>
              </View>
            )}
          </>
          {/* Content Frame Tab 3 */}
          <>
            {!menuTab3 ? null : (
              <View style={styles(theme).View0419a0dc}>
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
                        listKey={'RnqTTYB1'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
                              <View style={styles(theme).View378b3d40}>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View style={styles(theme).View15949a8a}>
                                    {/* Record Frame */}
                                    <View style={styles(theme).View46d255b9}>
                                      {/* Left Side */}
                                      <View
                                        style={styles(theme).Viewdbf79098}
                                      ></View>
                                      {/* Middle Grow Column */}
                                      <View style={styles(theme).Viewfa928eb2}>
                                        {/* Data Title */}
                                        <Text
                                          style={styles(theme).Text2809b4de}
                                        >
                                          {'Daniel Allison'}
                                        </Text>
                                        {/* Data Point */}
                                        <Text
                                          style={styles(theme).Text198a46ec}
                                        >
                                          {'@DanielAlison'}
                                        </Text>
                                      </View>
                                      {/* Right Column */}
                                      <View>
                                        {/* Flex Frame for Icons */}
                                        <View
                                          style={styles(theme).View4f6009be}
                                        >
                                          <Icon
                                            size={24}
                                            color={
                                              theme.colors.communityPrimaryAlt
                                            }
                                            name={'FontAwesome/heart'}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
                        numColumns={1}
                      />
                    );
                  }}
                </ExampleDataForListsApi.FetchGetSampleDataList10GET>
              </View>
            )}
          </>
        </View>
        {/* Three Tabs Modal Frame */}
        <>
          {!modalOpen ? null : (
            <Modal
              visible={modalOpen}
              animationType={'slide'}
              presentationStyle={'pageSheet'}
              transparent={true}
            >
              {/* Modal Actions Frame */}
              <View style={styles(theme).Viewc97a0f15}>
                {/* Navigation Frame */}
                <View style={styles(theme).View12f6f69c}>
                  {/* Left Frame */}
                  <View></View>
                  {/* Middle Frame */}
                  <View style={styles(theme).Viewcd2d5486}></View>
                  {/* Right Frame */}
                  <View style={styles(theme).Viewdebd3207}>
                    {/* Flex Frame for Touchable */}
                    <View style={styles(theme).View279a58f9}>
                      <Touchable
                        onPress={() => {
                          try {
                            setModalOpen(false);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <Circle
                          size={31}
                          bgColor={theme.colors.communityModalOpacityOverlay}
                        >
                          <Icon
                            color={theme.colors.communityWhite}
                            name={'AntDesign/closecircle'}
                            size={18}
                          />
                        </Circle>
                      </Touchable>
                    </View>
                  </View>
                </View>
              </View>
              {/* Actions Frame Mock */}
              <View style={styles(theme).View31087ed4}>
                {/* Second Navigation Frame */}
                <View style={styles(theme).View02a568ec}>
                  {/* 3 Options Frame */}
                  <View style={styles(theme).Viewdebd3207}>
                    {/* Option 1 Frame */}
                    <View style={styles(theme).Viewf6252edd}>
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
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              {/* Button Frame True */}
                              <View style={styles(theme).View0ec5e160}>
                                {/* Label */}
                                <Text style={styles(theme).Text474141ca}>
                                  {'Events'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      {/* Flex Frame for Touchable */}
                      <>
                        {menuTab1 ? null : (
                          <View>
                            <Touchable
                              onPress={() => {
                                try {
                                  setMenuTab1(true);
                                  setMenuTab2(false);
                                  setMenuTab3(false);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              {/* Button Frame False */}
                              <View style={styles(theme).View39704305}>
                                {/* Label */}
                                <Text style={styles(theme).Text862e224b}>
                                  {'Events'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                    </View>
                    {/* Option 2 Frame */}
                    <View style={styles(theme).Viewf6252edd}>
                      {/* Flex Frame for Touchable */}
                      <>
                        {!menuTab2 ? null : (
                          <View>
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
                              <View style={styles(theme).View0ec5e160}>
                                {/* Label */}
                                <Text style={styles(theme).Text474141ca}>
                                  {'Posts'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      {/* Flex Frame for Touchable */}
                      <>
                        {menuTab2 ? null : (
                          <View>
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
                              {/* Button Frame False */}
                              <View style={styles(theme).View39704305}>
                                {/* Label */}
                                <Text style={styles(theme).Text862e224b}>
                                  {'Posts'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                    </View>
                    {/* Option 3 Frame */}
                    <View style={styles(theme).Viewf6252edd}>
                      {/* Flex Frame for Touchable */}
                      <>
                        {!menuTab3 ? null : (
                          <View>
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
                              <View style={styles(theme).View0ec5e160}>
                                {/* Label */}
                                <Text style={styles(theme).Text474141ca}>
                                  {'Followers'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      {/* Flex Frame for Touchable */}
                      <>
                        {menuTab3 ? null : (
                          <View>
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
                              {/* Button Frame False */}
                              <View style={styles(theme).View39704305}>
                                {/* Label */}
                                <Text style={styles(theme).Text862e224b}>
                                  {'Followers'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                    </View>
                  </View>
                </View>
              </View>
              {/* Content Frame */}
              <ScrollView
                style={styles(theme).ScrollView989db244}
                contentContainerStyle={styles(theme).ScrollView5e068462Content}
                showsVerticalScrollIndicator={true}
                bounces={true}
              >
                {/* Tabs Frame */}
                <View style={styles(theme).View0419a0dc}>
                  {/* Tab 1 Frame */}
                  <>
                    {!menuTab1 ? null : (
                      <View style={styles(theme).View0419a0dc}>
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'UQAC5Hod'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
                                      <View style={styles(theme).View378b3d40}>
                                        <Touchable>
                                          {/* List Frame */}
                                          <View
                                            style={styles(theme).View15949a8a}
                                          >
                                            {/* Record Frame */}
                                            <View
                                              style={styles(theme).View46d255b9}
                                            >
                                              {/* Left Side */}
                                              <View
                                                style={
                                                  styles(theme).Viewdbf79098
                                                }
                                              >
                                                {/* Image Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewdbf79098
                                                  }
                                                >
                                                  {/* Flex Frame for Icons */}
                                                  <View>
                                                    <Icon
                                                      name={
                                                        'Entypo/game-controller'
                                                      }
                                                      size={50}
                                                      color={
                                                        theme.colors
                                                          .communityDarkUI
                                                      }
                                                    />
                                                  </View>
                                                </View>
                                              </View>
                                              {/* Middle Grow Column */}
                                              <View
                                                style={
                                                  styles(theme).Viewfa928eb2
                                                }
                                              >
                                                {/* Data Title */}
                                                <Text
                                                  style={
                                                    styles(theme).Text2809b4de
                                                  }
                                                >
                                                  {'Game Night'}
                                                </Text>
                                                {/* Data Point */}
                                                <Text
                                                  style={
                                                    styles(theme).Text198a46ec
                                                  }
                                                >
                                                  {'Irvine Promenade'}
                                                </Text>
                                              </View>
                                              {/* Right Column */}
                                              <View
                                                style={
                                                  styles(theme).View6a955cc3
                                                }
                                              >
                                                {/* Flex Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewd73ba143
                                                  }
                                                >
                                                  {/* Rubik Headline Style 18/24 Bold */}
                                                  <Text
                                                    style={
                                                      styles(theme).Texted3aea6a
                                                    }
                                                  >
                                                    {'RSVP'}
                                                  </Text>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </Touchable>
                                      </View>
                                    </>
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
                  {/* Tab 2 Frame */}
                  <>
                    {!menuTab2 ? null : (
                      <View style={styles(theme).View0419a0dc}>
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'KNlUj9KK'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
                                      <View style={styles(theme).View598980f3}>
                                        <Touchable>
                                          {/* Record Frame */}
                                          <View
                                            style={styles(theme).Viewafe98872}
                                          >
                                            {/* Left Side Frame */}
                                            <View
                                              style={styles(theme).View6ec90e13}
                                            >
                                              {/* Circle Image Frame */}
                                              <View>
                                                <CircleImage
                                                  source={
                                                    Images.JoelMottLaK153ghdigUnsplash
                                                  }
                                                  size={38}
                                                />
                                              </View>
                                            </View>
                                            {/* New Right Side */}
                                            <View
                                              style={styles(theme).View4adcbad7}
                                            >
                                              {/* Top Row Frame */}
                                              <View
                                                style={
                                                  styles(theme).View4a00b558
                                                }
                                              >
                                                {/* Rubik Headline Style 18/24 Bold */}
                                                <Text
                                                  style={
                                                    styles(theme).Text69b36461
                                                  }
                                                  numberOfLines={2}
                                                >
                                                  {'Floyd Miles'}
                                                </Text>
                                                {/* Rubik Text Style 12/18 Regular */}
                                                <Text
                                                  style={
                                                    styles(theme).Text81cbe3d3
                                                  }
                                                >
                                                  {'@FloydMiles'}
                                                </Text>
                                              </View>
                                              {/* Second Row Frame */}
                                              <View
                                                style={
                                                  styles(theme).View3479f541
                                                }
                                              >
                                                {/* Rubik Text Style 12/18 Regular */}
                                                <Text
                                                  style={
                                                    styles(theme).Text249e5b54
                                                  }
                                                  numberOfLines={3}
                                                  ellipsizeMode={'tail'}
                                                >
                                                  {
                                                    'So how can advisors add Bitcoin exposure to client portfolios? Here are five routes you can take, listed from the most different unique locations. '
                                                  }
                                                </Text>
                                              </View>
                                              {/* Third Row */}
                                              <View
                                                style={
                                                  styles(theme).Viewadd17dea
                                                }
                                              >
                                                {/* Flex for Image */}
                                                <View
                                                  style={
                                                    styles(theme).View7b138601
                                                  }
                                                >
                                                  <Image
                                                    style={
                                                      styles(theme)
                                                        .Image5c10beb9
                                                    }
                                                    source={
                                                      Images.AndreTaissin5OUMf1Mr5pUUnsplash
                                                    }
                                                    resizeMode={'cover'}
                                                  />
                                                </View>
                                              </View>
                                              {/* Fourth Row */}
                                              <View
                                                style={
                                                  styles(theme).View0139f4ac
                                                }
                                              >
                                                {/* Action 1 Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewefc94cd2
                                                  }
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'AntDesign/heart'
                                                      }
                                                      uncheckedIcon={
                                                        'AntDesign/hearto'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communitySecondary
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={
                                                      styles(theme).Text55b2c3f3
                                                    }
                                                  >
                                                    {'27.1k'}
                                                  </Text>
                                                </View>
                                                {/* Action 2 Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewefc94cd2
                                                  }
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'Ionicons/chatbubbles'
                                                      }
                                                      uncheckedIcon={
                                                        'Ionicons/chatbubbles'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={
                                                      styles(theme).Text55b2c3f3
                                                    }
                                                  >
                                                    {'3.3k'}
                                                  </Text>
                                                </View>
                                                {/* Action 3 Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewefc94cd2
                                                  }
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'AntDesign/eye'
                                                      }
                                                      uncheckedIcon={
                                                        'AntDesign/eye'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={
                                                      styles(theme).Text55b2c3f3
                                                    }
                                                  >
                                                    {'104k'}
                                                  </Text>
                                                </View>
                                                {/* Flex Frame for Touchable */}
                                                <View>
                                                  <Touchable>
                                                    {/* Flex Frame for Icons */}
                                                    <View
                                                      style={
                                                        styles(theme)
                                                          .View13759030
                                                      }
                                                    >
                                                      <Icon
                                                        name={
                                                          'Ionicons/ios-share'
                                                        }
                                                        size={18}
                                                        color={
                                                          theme.colors
                                                            .communityMediumBlack
                                                        }
                                                      />
                                                    </View>
                                                  </Touchable>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </Touchable>
                                      </View>
                                    </>
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
                  {/* Tab 3 Frame */}
                  <>
                    {!menuTab3 ? null : (
                      <View style={styles(theme).View0419a0dc}>
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'5B95gsut'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
                                      <View style={styles(theme).View378b3d40}>
                                        <Touchable>
                                          {/* List Frame */}
                                          <View
                                            style={styles(theme).View15949a8a}
                                          >
                                            {/* Record Frame */}
                                            <View
                                              style={styles(theme).View46d255b9}
                                            >
                                              {/* Left Side */}
                                              <View
                                                style={
                                                  styles(theme).Viewdbf79098
                                                }
                                              >
                                                {/* Image Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewdbf79098
                                                  }
                                                >
                                                  <Circle
                                                    size={42}
                                                    bgColor={
                                                      theme.colors
                                                        .communityWhite
                                                    }
                                                  >
                                                    <CircleImage
                                                      source={
                                                        Images.LolaRoseZcHseJqAeEcUnsplash
                                                      }
                                                      size={36}
                                                    />
                                                  </Circle>
                                                </View>
                                              </View>
                                              {/* Middle Grow Column */}
                                              <View
                                                style={
                                                  styles(theme).Viewfa928eb2
                                                }
                                              >
                                                {/* Data Title */}
                                                <Text
                                                  style={
                                                    styles(theme).Text2809b4de
                                                  }
                                                >
                                                  {'Daniel Allison'}
                                                </Text>
                                                {/* Data Point */}
                                                <Text
                                                  style={
                                                    styles(theme).Text198a46ec
                                                  }
                                                >
                                                  {'@DanielAlison'}
                                                </Text>
                                              </View>
                                              {/* Right Column */}
                                              <View>
                                                {/* Flex Frame for Icons */}
                                                <View
                                                  style={
                                                    styles(theme).View4f6009be
                                                  }
                                                >
                                                  <Icon
                                                    name={
                                                      'AntDesign/checkcircle'
                                                    }
                                                    size={24}
                                                    color={
                                                      theme.colors
                                                        .communityPrimaryAlt
                                                    }
                                                  />
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </Touchable>
                                      </View>
                                    </>
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
                </View>
              </ScrollView>
            </Modal>
          )}
        </>
      </View>
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
    Image5c10beb9: { height: 200, width: 300 },
    Image65c0b03b: { height: 150, width: 500 },
    LinearGradient8dc796a9: { height: '100%', width: '100%' },
    ScrollView5e068462Content: { backgroundColor: theme.colors.communityWhite },
    Text08b37424: {
      color: theme.colors.communityPrimaryAlt,
      fontFamily: 'Rubik_400Regular',
      fontSize: 15,
      lineHeight: 21,
    },
    Text198a46ec: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_400Regular',
      fontSize: 11,
      lineHeight: 17,
    },
    Text249e5b54: {
      color: theme.colors.communityTrueOption,
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Text2809b4de: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 12,
      lineHeight: 18,
    },
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
    Text55b2c3f3: {
      color: theme.colors.communityMediumBlack,
      fontFamily: 'Rubik_700Bold',
      fontSize: 12,
      lineHeight: 18,
      marginLeft: 12,
    },
    Text5f4acb5b: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 20,
      lineHeight: 26,
    },
    Text69b36461: {
      color: theme.colors.communityTrueOption,
      fontFamily: 'Rubik_700Bold',
      fontSize: 13,
      lineHeight: 19,
    },
    Text6a1a93dd: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
      marginBottom: 12,
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
    Text81cbe3d3: {
      color: theme.colors.communityLightBlack,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Text862e224b: {
      color: theme.colors.communityIconFill,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Textb7d03b19: {
      color: theme.colors.communityDarkUI,
      fontFamily: 'Rubik_700Bold',
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center',
    },
    Textc8e26ead: {
      color: theme.colors['Primary'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 15,
    },
    Texted3aea6a: {
      color: theme.colors.communityPrimaryAlt,
      fontFamily: 'Rubik_700Bold',
      fontSize: 11,
      lineHeight: 17,
      paddingLeft: 3,
      paddingRight: 3,
    },
    Textf6348c2e: {
      color: theme.colors.communityWhite,
      fontFamily: 'Rubik_400Regular',
      fontSize: 15,
      lineHeight: 21,
    },
    View0139f4ac: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 6,
    },
    View02a568ec: { paddingLeft: 12, paddingRight: 12 },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View0837d5bd: {
      flexDirection: 'row',
      marginRight: 12,
      paddingBottom: 7,
      paddingTop: 7,
    },
    View0ec5e160: {
      alignItems: 'center',
      backgroundColor: theme.colors.communityTrueOption,
      borderBottomWidth: 2,
      borderColor: theme.colors.communityDarkUI,
      borderLeftWidth: 2,
      borderRadius: 12,
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
    View0eecdd0f: { flexDirection: 'row', paddingBottom: 7, paddingTop: 7 },
    View12f6f69c: {
      backgroundColor: theme.colors.communityModalOpacityOverlay,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 18,
      paddingTop: 12,
      zIndex: 12,
    },
    View13759030: {
      paddingBottom: 6,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
    },
    View15949a8a: {
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    View279a58f9: {
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      marginRight: 12,
    },
    View2a2749f9: { paddingBottom: 7, paddingTop: 7 },
    View31087ed4: {
      backgroundColor: theme.colors.communityWhite,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      flexGrow: 0,
      flexShrink: 0,
    },
    View31ec6587: {
      backgroundColor: theme.colors.communityWhite,
      flexGrow: 0,
      flexShrink: 0,
      marginTop: -36,
    },
    View3479f541: {
      flexGrow: 0,
      flexShrink: 0,
      marginTop: 6,
      maxWidth: 300,
      paddingBottom: 6,
    },
    View378b3d40: { marginBottom: 12 },
    View39704305: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderBottomWidth: 2,
      borderColor: theme.colors.communityBorder,
      borderLeftWidth: 2,
      borderRadius: 12,
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
    View3cff3826: {
      backgroundColor: theme.colors.communityWhite,
      borderBottomWidth: 2,
      borderColor: theme.colors.communityPrimaryAlt,
      borderLeftWidth: 2,
      borderRadius: 64,
      borderRightWidth: 2,
      borderTopWidth: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    View46d255b9: {
      backgroundColor: theme.colors.communityIconBGColor,
      borderRadius: 12,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    View4a00b558: { flexGrow: 0, flexShrink: 0, paddingBottom: 6 },
    View4adcbad7: {
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View598980f3: {
      flexGrow: 0,
      flexShrink: 0,
      marginBottom: 12,
      marginTop: 12,
    },
    View5ca232e1: { height: 555 },
    View6a955cc3: { justifyContent: 'center' },
    View6ec90e13: { paddingTop: 12 },
    View768dd5f3: {
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View7b138601: {
      borderColor: theme.colors.background,
      borderRadius: 12,
      flexGrow: 0,
      flexShrink: 0,
      height: 200,
      overflow: 'hidden',
      width: 300,
    },
    View7c273546: {
      height: 45,
      marginBottom: 6,
      marginLeft: 3,
      marginRight: 3,
      marginTop: -54,
      overflow: 'hidden',
    },
    View7d00a05a: {
      backgroundColor: theme.colors.communityPrimaryAlt,
      borderRadius: 64,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View9797fb79: {
      flexDirection: 'row',
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    Viewadd17dea: {
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingTop: 12,
    },
    Viewafdeb542: {
      backgroundColor: theme.colors.communityWhite,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      marginTop: -12,
    },
    Viewafe98872: {
      borderBottomWidth: 2,
      borderColor: theme.colors.communityBorder,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewb3d565fb: { flex: 1, marginLeft: 15 },
    Viewc8ddb0d6: {
      height: 25,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    Viewc97a0f15: {
      backgroundColor: theme.colors.communityModalOpacityOverlay,
    },
    Viewc992f941: { flex: 1 },
    Viewc9fd7ffc: {
      alignItems: 'flex-end',
      marginTop: -40,
      paddingRight: 18,
      zIndex: 20,
    },
    Viewcd2d5486: {
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 12,
      paddingRight: 12,
    },
    Viewd0d54e1f: { height: 36 },
    Viewd73ba143: {
      alignItems: 'center',
      backgroundColor: theme.colors.communityWhite,
      borderRadius: 12,
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      paddingBottom: 6,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
    },
    Viewd79298eb: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingLeft: 12,
      paddingRight: 12,
      zIndex: 12,
    },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewde12b17f: { paddingLeft: 12, paddingRight: 12, paddingTop: 6 },
    Viewdebd3207: { flexDirection: 'row' },
    Viewefc94cd2: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 6,
      paddingTop: 6,
    },
    Viewf6252edd: {
      flex: 1,
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 12,
    },
    Viewfa928eb2: {
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      marginLeft: 12,
    },
    Viewfeac12d8: { justifyContent: 'center', marginLeft: 12 },
    screen: { backgroundColor: theme.colors.communityWhite },
  });

export default withTheme(OpenTokenScreen);
