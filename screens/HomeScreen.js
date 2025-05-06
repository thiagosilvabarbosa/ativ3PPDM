import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';

const categories = [
  { name: 'Consultation', icon: 'account-circle-outline' },
  { name: 'Dentist', icon: 'tooth-outline' },
  { name: 'Cardiologist', icon: 'heart-pulse' },
  { name: 'Hospital', icon: 'hospital-building' },
  { name: 'Emergency', icon: 'ambulance' },
  { name: 'Laboratory', icon: 'flask-outline' },
];

const doctors = [
  {
    name: 'dr. Olivia Wilson',
    role: 'Consultant - Physiotherapy',
    rating: 4.9,
    reviews: 37,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'dr. Jonathan Patterson',
    role: 'Consultant - Internal Medicine',
    rating: 4.9,
    reviews: 37,
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={styles.headerArea}>
          <View style={styles.headerContent}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              size="medium"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.username}>Dani Martinez</Text>
            </View>
          </View>

          <View style={styles.searchBox}>
            <Icon name="search" type="feather" color="#5D5FEF" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search doctor"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.rowHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.showAll}>Show All</Text>
        </View>

        <View style={styles.categories}>
          {categories.map((cat, idx) => (
            <View key={idx} style={styles.categoryItem}>
              <Icon
                name={cat.icon}
                type="material-community"
                color="#5D5FEF"
                size={30}
              />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Top doctors</Text>
        {doctors.map((doc, idx) => (
          <View key={idx} style={styles.doctorCard}>
            <Avatar rounded source={{ uri: doc.image }} size="large" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.docName}>{doc.name}</Text>
              <Text style={styles.docRole}>{doc.role}</Text>
              <Text style={styles.docRating}>
                ⭐ {doc.rating} ({doc.reviews} Reviews)
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerArea: {
    backgroundColor: '#5D5FEF',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  welcome: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  username: {
    color: '#fff',
    fontSize: 16,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  showAll: {
    color: '#5D5FEF',
    fontSize: 14,
    paddingHorizontal: 20,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 12,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoryItem: {
    width: '30%',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 1,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 1,
    marginHorizontal: 20,
  },
  docName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  docRole: {
    color: 'gray',
    fontSize: 12,
  },
  docRating: {
    marginTop: 4,
    fontSize: 12,
  },
});
