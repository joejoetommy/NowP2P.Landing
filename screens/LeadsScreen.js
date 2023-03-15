import React from 'react';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const LeadsScreen = props => {
  const { theme } = props;

  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
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
        <Text style={styles(theme).Text7b0e5938}>{'Inbox'}</Text>
      </View>
      {/* Second Navigation Frame */}
      <View style={styles(theme).View02a568ec}>
        {/* 3 Options Frame */}
        <View style={styles(theme).Vieweb647bde}>
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
                        {'Messages'}
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
                        {'Messages'}
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
                      <Text style={styles(theme).Text474141ca}>{'Events'}</Text>
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
                      <Text style={styles(theme).Text838c68b1}>{'Events'}</Text>
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
                        {'Notifications'}
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
                        {'Notifications'}
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
                      listKey={'UPaTGx5F'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <>
                            {/* List Flex Frame */}
                            <View style={styles(theme).Viewdbf79098}>
                              {/* Touchable Flex Frame */}
                              <View style={styles(theme).View598980f3}>
                                <Touchable>
                                  {/* Record Frame */}
                                  <View style={styles(theme).Viewcc2aa855}>
                                    {/* Left Side Frame */}
                                    <View style={styles(theme).View9749c706}>
                                      {/* Date Frame */}
                                      <View style={styles(theme).View4533f261}>
                                        <Text
                                          style={styles(theme).Text4388086f}
                                        >
                                          {'Tues'}
                                        </Text>
                                      </View>

                                      <Circle
                                        size={36}
                                        bgColor={
                                          theme.colors.communityPrimaryAlt
                                        }
                                      >
                                        <Text
                                          style={styles(theme).Textf6348c2e}
                                        >
                                          {'12'}
                                        </Text>
                                      </Circle>
                                    </View>
                                    {/* Right Side Frame */}
                                    <View style={styles(theme).View25a148c3}>
                                      <ExampleDataForListsApi.Fetch5SampleRecordsGET>
                                        {({
                                          loading,
                                          error,
                                          data,
                                          refetch5SampleRecords,
                                        }) => {
                                          const fetchData = data;
                                          if (!fetchData || loading) {
                                            return <ActivityIndicator />;
                                          }

                                          if (error) {
                                            return (
                                              <Text
                                                style={{ textAlign: 'center' }}
                                              >
                                                There was a problem fetching
                                                this data
                                              </Text>
                                            );
                                          }

                                          return (
                                            <FlatList
                                              data={fetchData}
                                              listKey={JSON.stringify(
                                                fetchData
                                              )}
                                              keyExtractor={listData =>
                                                listData?.id ||
                                                listData?.uuid ||
                                                JSON.stringify(listData)
                                              }
                                              renderItem={({ item }) => {
                                                const listData = item;
                                                return (
                                                  <>
                                                    {/* Touchable Flex Frame */}
                                                    <View>
                                                      <Touchable>
                                                        {/* Sub Option Frame */}
                                                        <View
                                                          style={
                                                            styles(theme)
                                                              .View1594f5d8
                                                          }
                                                        >
                                                          {/* Left Side Grow */}
                                                          <View
                                                            style={
                                                              styles(theme)
                                                                .View0419a0dc
                                                            }
                                                          >
                                                            {/* Data Point */}
                                                            <Text
                                                              style={
                                                                styles(theme)
                                                                  .Text923d5429
                                                              }
                                                            >
                                                              {
                                                                'Irvine Promenade Luncheon'
                                                              }
                                                            </Text>
                                                          </View>
                                                          {/* Right Side Shrink */}
                                                          <View
                                                            style={
                                                              styles(theme)
                                                                .Viewbe5e6c31
                                                            }
                                                          >
                                                            <Circle
                                                              size={22}
                                                              bgColor={
                                                                theme.colors
                                                                  .communityWhite
                                                              }
                                                            >
                                                              {/* Icon Flex Frame */}
                                                              <View
                                                                style={
                                                                  styles(theme)
                                                                    .Viewdbf79098
                                                                }
                                                              >
                                                                <Icon
                                                                  name={
                                                                    'MaterialIcons/lunch-dining'
                                                                  }
                                                                  size={18}
                                                                  color={
                                                                    theme.colors
                                                                      .communityTrueOption
                                                                  }
                                                                />
                                                              </View>
                                                            </Circle>
                                                          </View>
                                                        </View>
                                                      </Touchable>
                                                    </View>
                                                  </>
                                                );
                                              }}
                                              style={
                                                styles(theme).FlatList989db244
                                              }
                                              contentContainerStyle={
                                                styles(theme)
                                                  .FlatListc992f941Content
                                              }
                                              numColumns={1}
                                            />
                                          );
                                        }}
                                      </ExampleDataForListsApi.Fetch5SampleRecordsGET>
                                      {/* Touchable Flex Frame */}
                                      <View>
                                        <Touchable>
                                          {/* Sub Actions Frame */}
                                          <View
                                            style={styles(theme).View50b05d97}
                                          >
                                            {/* Left Side Grow */}
                                            <View
                                              style={styles(theme).View0419a0dc}
                                            >
                                              {/* Data Point */}
                                              <Text
                                                style={
                                                  styles(theme).Textad9452a7
                                                }
                                              >
                                                {'Show All'}
                                              </Text>
                                            </View>
                                            {/* Right Side Shrink */}
                                            <View
                                              style={styles(theme).Viewbe5e6c31}
                                            >
                                              <Circle
                                                size={18}
                                                bgColor={
                                                  theme.colors.communityGreenBG
                                                }
                                              >
                                                {/* Icon Flex Frame */}
                                                <View
                                                  style={
                                                    styles(theme).Viewdbf79098
                                                  }
                                                >
                                                  <Icon
                                                    name={
                                                      'AntDesign/arrowright'
                                                    }
                                                    size={15}
                                                    color={
                                                      theme.colors
                                                        .communityPrimary
                                                    }
                                                  />
                                                </View>
                                              </Circle>
                                            </View>
                                          </View>
                                        </Touchable>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
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
                <View style={styles(theme).Viewa22ed7d9}>
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
                <View style={styles(theme).Viewa22ed7d9}>
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
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
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
    Text923d5429: {
      color: theme.colors.communityTrueOption,
      fontFamily: 'Rubik_400Regular',
      fontSize: 13,
      lineHeight: 19,
    },
    Textad9452a7: {
      color: theme.colors.communityPrimary,
      fontFamily: 'Rubik_400Regular',
      fontSize: 13,
      lineHeight: 19,
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
    Textf6348c2e: {
      color: theme.colors.communityWhite,
      fontFamily: 'Rubik_400Regular',
      fontSize: 15,
      lineHeight: 21,
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
    View1594f5d8: {
      borderBottomWidth: 1,
      borderColor: theme.colors.communityDivider,
      flexDirection: 'row',
      paddingBottom: 9,
      paddingLeft: 9,
      paddingRight: 9,
      paddingTop: 9,
    },
    View1e67b218: {
      backgroundColor: theme.colors.communityIconBGColor,
      paddingBottom: 1,
      paddingTop: 1,
    },
    View25a148c3: {
      backgroundColor: theme.colors.communityIconBGColor,
      borderRadius: 18,
      flexGrow: 1,
      flexShrink: 0,
      marginLeft: 12,
      marginRight: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
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
    View4533f261: { alignItems: 'center', marginBottom: 6 },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View50b05d97: {
      flexDirection: 'row',
      paddingBottom: 9,
      paddingLeft: 9,
      paddingRight: 9,
      paddingTop: 9,
    },
    View598980f3: {
      flexGrow: 0,
      flexShrink: 0,
      marginBottom: 12,
      marginTop: 12,
    },
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
    View7b593d28: { flex: 1, flexGrow: 1, flexShrink: 0 },
    View9749c706: { paddingLeft: 12 },
    Viewa22ed7d9: {
      alignItems: 'center',
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
    Viewbe5e6c31: { flexGrow: 0, flexShrink: 0, marginLeft: 12 },
    Viewcc2aa855: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: '100%',
      paddingTop: 12,
      width: '100%',
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
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Vieweb647bde: { flexDirection: 'row', paddingBottom: 12, paddingTop: 12 },
    screen: { backgroundColor: theme.colors.communityWhite },
  });

export default withTheme(LeadsScreen);
