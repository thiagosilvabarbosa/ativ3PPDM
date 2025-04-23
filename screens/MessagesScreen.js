// MessagesScreen.js
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Text, Avatar, Icon } from 'react-native-elements';

const messages = [
  {
    name: 'Claudia Alves',
    message: 'Do more of what you love.',
    time: '3m ago',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
    unread: 3,
  },
  {
    name: 'Dani Martinez',
    message: 'Do your own thing.',
    time: '5m ago',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    unread: 1,
  },
  {
    name: 'Kimberly Nguyen',
    message: 'Kindness is beautiful.',
    time: '1h ago',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    unread: 2,
  },
  {
    name: 'Mariana Napolitani',
    message: 'Live your purpose.',
    time: '2h ago',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    unread: 1,
  },
  {
    name: 'Olivia Wilson',
    message: 'You got this.',
    time: '5h ago',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Rachelle Beaudry',
    message: "You're wonderful.",
    time: 'Yesterday',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    name: 'Soo Jin Ae',
    message: 'Keep it simple.',
    time: 'Yesterday',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerTopDecor} />
      <Text style={styles.title}>Messages & Chat</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity>
          <Text style={styles.actionText}>Mark all read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.actionText}>Sort by time</Text>
          <Icon name="chevron-down" type="feather" size={16} color="#777" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageItem}>
            <Avatar rounded source={{ uri: msg.image }} size="medium" />
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{msg.name}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
            </View>
            <View style={styles.rightInfo}>
              <Text style={styles.timeText}>{msg.time}</Text>
              {msg.unread && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{msg.unread}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footerDecor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  headerTopDecor: {
    width: 100,
    height: 100,
    backgroundColor: '#5D5FEF',
    borderBottomRightRadius: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  footerDecor: {
    width: 100,
    height: 100,
    backgroundColor: '#5D5FEF',
    borderTopLeftRadius: 100,
    position: 'absolute',
    bottom: 60,
    right: 0,
    zIndex: -1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    color: '#555',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 12,
    borderRadius: 12,
    elevation: 1,
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  messageName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  messageText: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  rightInfo: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  unreadBadge: {
    marginTop: 6,
    backgroundColor: '#5D5FEF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  unreadText: {
    fontSize: 12,
    color: '#fff',
  },
});
