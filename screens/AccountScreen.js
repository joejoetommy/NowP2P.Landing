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

const AccountScreen = props => {
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
                  navigation.navigate('AppSettingsScreen');
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
                  size={18}
                  color={theme.colors.communityWhite}
                  name={'Ionicons/settings-sharp'}
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
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('PinsprofileScreen');
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
                  style={styles(theme).Iconf699feb3}
                  color={theme.colors.communityWhite}
                  size={24}
                  name={'MaterialIcons/pin-drop'}
                />
              </Circle>
            </Touchable>
          </View>
          {/* Flex Frame for Touchable */}
          <View style={styles(theme).View4f6009be}>
            <Touchable
              onPress={() => {
                try {
                  setModalOpen(true);
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
                  size={18}
                  color={theme.colors.communityWhite}
                  name={'Entypo/text-document-inverted'}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Hero Frame */}
      <View style={styles(theme).View8100ef92}>
        <Image
          style={styles(theme).Image65c0b03b}
          resizeMode={'cover'}
          source={Images.HouseWallPainting}
        />
      </View>
      {/* Profile Image Frame */}
      <View style={styles(theme).Viewc9fd7ffc}>
        {/* Profile Image Background */}
        <Circle size={96} bgColor={theme.colors.communityWhite}>
          {/* Profile Image */}
          <CircleImage size={90} source={Images.PolishPainters} />
        </Circle>
      </View>
      {/* Profile Detail Frame */}
      <View style={styles(theme).View31ec6587}>
        {/* Bio Frame */}
        <View style={styles(theme).View81c9ae94}>
          {/* Rubik Headline Style 18/24 Bold */}
          <Text style={styles(theme).Text5f4acb5b}>{'Polish Painters'}</Text>
          {/* Rubik Text Style 12/18 Regular */}
          <Text style={styles(theme).Text6a1a93dd}>{'@PolishPainters'}</Text>
          {/* Rubik Text Style 12/18 Regular */}
          <Text
            style={styles(theme).Text4388086f}
            numberOfLines={4}
            ellipsizeMode={'tail'}
          >
            {
              "A family-run business, with 28 years in the industry.\nOperating in South-East Ireland.\nWith 30 members of staff, with 1,000's happy & satisfied customer's."
            }
          </Text>
        </View>
        {/* Action Frame */}
        <View style={styles(theme).View9797fb79}>
          {/* Left Frame */}
          <View style={styles(theme).View0837d5bd}>
            {/* Flex Frame for Touchable */}
            <View style={styles(theme).View279a58f9}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('CreateUserCVScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Circle bgColor={theme.colors.communityIconBGColor} size={35}>
                  <Icon
                    color={theme.colors.communityIconFill}
                    name={'Foundation/page-export-doc'}
                    size={25}
                  />
                </Circle>
              </Touchable>
            </View>
            {/* Flex Frame for Touchable */}
            <View style={styles(theme).View4f6009be}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChatdirectmessageScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
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
                <View style={styles(theme).View0d993f97}>
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
          </View>
        </View>
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
                          <Text style={styles(theme).Text2abe1446}>
                            {'Proof of Value'}
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
                            {'Proof of Value'}
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
                            {'P2P Reviews'}
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
                          <Text style={styles(theme).Text6d6734ad}>
                            {'P2P Reviews'}
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
                            {'Network'}
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
                            {'Network'}
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
                        listKey={'lFvWRNMj'}
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
                                                'MaterialCommunityIcons/format-paint'
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
                                          {'Commercial Pianting'}
                                        </Text>
                                        {/* Data Point */}
                                        <Text
                                          style={styles(theme).Text198a46ec}
                                        >
                                          {'Private under contract.'}
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
                                            {'View'}
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
                        listKey={'brXT354m'}
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
                                          <CircleImage size={38} />
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
                                              'Excellent work, on-time & professional.\nThey finished an apartment block for me, very tidy workers and contactable at any time.\nIt would be more than happy to give a refer this to any users looking to get commercial & residential painting done.'
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
                                              {'3'}
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
                                              {'3'}
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
                                              {'40'}
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
                        listKey={'ZXFMMkzd'}
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
                                          <Circle
                                            size={42}
                                            bgColor={
                                              theme.colors.communityWhite
                                            }
                                          >
                                            <CircleImage size={36} />
                                          </Circle>
                                        </View>
                                      </View>
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
                                            name={'AntDesign/checkcircle'}
                                            size={24}
                                            color={
                                              theme.colors.communityPrimaryAlt
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
                                  {'Proof of Value'}
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
                                  {'Proof of Value'}
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
                                  {'P2P Reviews'}
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
                                  {'P2P Reviews'}
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
                                  {'Network'}
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
                                  {'Network'}
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
                                listKey={'BtrTBR0s'}
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
                                                      size={50}
                                                      color={
                                                        theme.colors
                                                          .communityDarkUI
                                                      }
                                                      name={
                                                        'MaterialCommunityIcons/format-paint'
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
                                                  {'Commercial painting'}
                                                </Text>
                                                {/* Data Point */}
                                                <Text
                                                  style={
                                                    styles(theme).Text198a46ec
                                                  }
                                                >
                                                  {'Co. Mayo'}
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
                                                    {'View'}
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
                                listKey={'xoZBSb31'}
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
                                                <CircleImage size={38} />
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
                                                    'Excellent work, good pricing and great communication. I would recommend this service.'
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
                                                    resizeMode={'cover'}
                                                    source={
                                                      Images.HouseWallPainting
                                                    }
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
                                                    {'4'}
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
                                                    {'3'}
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
                                                    {'4'}
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
                                listKey={'KT1xFt4v'}
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
                                                    <CircleImage size={36} />
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
    Iconf699feb3: { marginLeft: 2 },
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
    Text2abe1446: {
      color: theme.colors.communityWhite,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
      textAlign: 'center',
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
    Text6d6734ad: {
      color: theme.colors.communityIconFill,
      fontFamily: 'Rubik_400Regular',
      fontSize: 12,
      lineHeight: 18,
      textAlign: 'center',
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
    View0d993f97: {
      backgroundColor: theme.colors['Custom Color_10'],
      borderRadius: 64,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
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
    View7b138601: {
      borderColor: theme.colors.background,
      borderRadius: 12,
      flexGrow: 0,
      flexShrink: 0,
      height: 200,
      overflow: 'hidden',
      width: 300,
    },
    View8100ef92: {
      marginBottom: 6,
      marginLeft: 3,
      marginRight: 3,
      marginTop: -54,
      overflow: 'hidden',
    },
    View81c9ae94: { paddingBottom: 12, paddingLeft: 12, paddingRight: 12 },
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

export default withTheme(AccountScreen);
