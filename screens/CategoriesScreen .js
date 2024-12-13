import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  {id: 1, name: 'AC Services', icon: 'ac-unit'},
  {id: 2, name: 'Beauty', icon: 'face'},
  {id: 3, name: 'Appliance', icon: 'kitchen'},
  {id: 4, name: 'Painting', icon: 'brush'},
  {id: 5, name: 'Cleaning', icon: 'cleaning-services'},
  {id: 6, name: 'Plumber', icon: 'plumbing'},
  {id: 7, name: 'Electronics', icon: 'electrical-services'},
  {id: 8, name: 'Shifting', icon: 'local-shipping'},
  {id: 9, name: 'Salon', icon: 'content-cut'},
];

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
            <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => {
              if (item.name === 'AC Services') {
                navigation.navigate('ACServicesScreen');
              } else {
                // Handle other categories here
                console.log(`Navigate to ${item.name}`);
              }
            }}>
            <View style={styles.categoryIcon}>
              <Icon name={item.icon} size={30} color="#0056F7" />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#0056F7',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    margin: 8,
    width: 100,
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
    color: '#555',
    textAlign: 'center',
  },
  // backButton: {
  //   marginTop: 16,
  //   alignItems: 'center',
  //   padding: 10,
  //   backgroundColor: '#0056F7',
  //   borderRadius: 8,
  // },
  // backButtonText: {
  //   color: '#FFF',
  //   fontSize: 14,
  //   fontWeight: '600',
  // },
});

export default CategoriesScreen;
