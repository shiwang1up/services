import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  {id: 1, name: 'AC Services', icon: 'ac-unit'},
  {id: 2, name: 'Beauty', icon: 'face'},
  {id: 3, name: 'Appliance', icon: 'kitchen'},
];

const cleaningServices = [
  {
    id: 1,
    name: 'Home Cleaning',
    discount: '10% OFF',
    image: require('../assets/home_cleaning.png'),
  },
  {
    id: 2,
    name: 'Carpet Cleaning',
    discount: '15% OFF',
    image: require('../assets/carpet_cleaning.png'),
  },
];

const specialOffers = [
  {
    id: 1,
    name: 'Home Painting',
    offer: '30% offer',
    image: require('../assets/home_painting.jpg'),
  },
  {
    id: 2,
    name: 'AC Service',
    offer: '15% offer',
    image: require('../assets/ac_service.jpg'),
  },
  {
    id: 3,
    name: 'Home Painting',
    offer: '20% offer',
    image: require('../assets/home_painting.jpg'),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello Shiwang</Text>
          <Text style={styles.subGreeting}>Good morning!</Text>
        </View>
        <Icon name="notifications-none" size={24} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity>
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categories}>
          {categories.map(category => (
            <View key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Icon name={category.icon} size={30} color="#0056F7" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
          ))}
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CategoriesScreen')}>
                <Icon name={'chevron-right'} size={30} color="#0056F7" />
              </TouchableOpacity>
            </View>
            <Text style={styles.categoryName}>See More</Text>
          </View>
        </View>
      </View>

      {/* Cleaning Services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cleaning Services</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={cleaningServices}
          renderItem={({item}) => (
            <View style={styles.card}>
              {item.discount && (
                <Text style={styles.discount}>{item.discount}</Text>
              )}
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Special Offers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={specialOffers}
          renderItem={({item}) => (
            <View style={styles.offerCard}>
              <Image source={item.image} style={styles.offerImage} />
              <View style={styles.offerContainer}>
                <Text style={styles.offerTitle}>{item.name}</Text>
                <Text style={styles.offer}>{item.offer}</Text>
                <TouchableOpacity style={styles.offerButton}>
                  <Text style={styles.offerButtonText}>Grab Offer</Text>
                  <Icon style={styles.grabIcon}  name={'chevron-right'} size={20} color="#283891" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  greeting: {
    fontSize: 14,
    color: '#888',
  },
  subGreeting: {
    fontSize: 18,
    color: '#637382',
    fontWeight: '600',
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 30,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    paddingHorizontal: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  menu: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#CCCCCC',
    borderRadius: 11,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color:'#637382',
  },
  seeAllText: {
    fontSize: 14,
    color: '#283891',
    fontWeight:'600',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    // backgroundColor: '#E0F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  categoryName: {
    fontSize: 12,
    color: '#889aa8',
  },
  card: {
    width: 160,
    marginRight: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    margin: 4,
    alignItems: 'start',
    // borderWidth:2,
    position: 'relative',
  },
  discount: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 11,
    color: 'white',
    marginBottom: 8,
    zIndex: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 20,
    backgroundColor: '#ff5958',
    position: 'absolute',
  },
  cardImage: {
    width: 140,
    height: 140,
    marginBottom: 8,
    borderRadius: 14,
    margin: 10,
  },
  cardTitle: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
  },
  offerCard: {
    width: 300,
    marginRight: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    // borderWidth: 2,
    position: 'relative',
  },
  offerImage: {
    height: '45%',
    width: 280,
    borderRadius: 8,
    marginBottom: 8,
  },
  offerContainer: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 15,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },

  offer: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  offerButton: {
    justifyContent: 'center',
    width:100,
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#f2f4ff',
    paddingVertical: 4,
    borderRadius: 40,
    alignItems: 'center',
    position: 'relative',
    marginTop: 55,
  },
  // grabIcon: {
  //   color: 'white',

  // },
  offerButtonText: {
    color: '#283891',
    fontSize: 14,
    fontWeight: '600',
    marginLeft:6,
  },
});

export default HomeScreen;
