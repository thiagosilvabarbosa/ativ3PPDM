// ExploreScreen.js
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import { Text, Avatar, Icon } from 'react-native-elements';

const categories = [
  { name: 'Resort', icon: 'beach' },
  { name: 'Homestay', icon: 'home' },
  { name: 'Hotel', icon: 'building' },
  { name: 'Lodge', icon: 'bed' },
  { name: 'Villa', icon: 'warehouse' },
  { name: 'Apartement', icon: 'city' },
  { name: 'Hostel', icon: 'hotel' },
  { name: 'See all', icon: 'grid' },
];

const destinations = [
  'https://picsum.photos/200/140?1',
  'https://picsum.photos/200/140?2',
  'https://picsum.photos/200/140?3',
  'https://picsum.photos/200/140?4',
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={styles.header}>
          <View style={styles.searchRow}>
            <Icon name="waves" type="material-community" color="#fff" size={30} />
            <View style={styles.searchBox}>
              <TextInput
                placeholder="Search here ..."
                placeholderTextColor="#999"
                style={styles.searchInput}
              />
              <Icon name="search" color="#5D5FEF" />
            </View>
          </View>

          <View style={styles.welcomeRow}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }}
              size="medium"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.username}>Donna Stroupe</Text>
            </View>
            <Icon
              name="notifications-outline"
              type="ionicon"
              color="#fff"
              style={{ marginLeft: 'auto' }}
            />
          </View>
        </View>

        <View style={styles.rowHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
          <Icon name="menu" />
        </View>

        <View style={styles.categoryWrap}>
          {categories.map((cat, idx) => (
            <View key={idx} style={styles.circleItem}>
              <View style={styles.circleIcon}>
                <Icon
                  name={cat.icon}
                  type="material-community"
                  color="#fff"
                  size={30}
                />
              </View>
              <Text style={styles.categoryLabel}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.rowHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <Icon name="menu" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destinations.map((url, idx) => (
            <Image
              key={idx}
              source={{ uri: url }}
              style={styles.destinationImage}
            />
          ))}
        </ScrollView>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Recommended</Text>
        <View style={styles.recommendContainer}>
          {destinations.slice(2).map((url, idx) => (
            <Image
              key={idx}
              source={{ uri: url }}
              style={styles.recommendImage}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  scrollArea: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#5D5FEF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 14,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 14,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  circleItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 15,
  },
  circleIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#5D5FEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
  },
  destinationImage: {
    width: 160,
    height: 110,
    borderRadius: 15,
    marginLeft: 20,
  },
  recommendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  recommendImage: {
    width: '48%',
    height: 120,
    borderRadius: 15,
  },
});
