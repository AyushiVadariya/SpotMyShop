import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, View, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { createUserDID, mintToken } from './src/blockchain';
import HomeScreen from './src/screens/HomeScreen';
import React from 'react';


export default function App() {
  return <HomeScreen />;
}
/*export default function App() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore in real-time
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('products')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const productList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      });

    return () => unsubscribe();
  }, []);

  // Add product to Firestore
  const addProduct = async () => {
    if (product.trim() !== '') {
      await firestore().collection('products').add({
        name: product,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      setProduct('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🛒 SpotMyShop</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={product}
        onChangeText={setProduct}
      />

      <Button title="Add Product" onPress={addProduct} />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#e6e6fa',
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
  },
});





/*import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, View, StyleSheet } from 'react-native';

export default function App() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (product.trim() !== '') {
      setProducts([...products, { id: Date.now().toString(), name: product }]);
      setProduct('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🛒 SpotMyShop</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={product}
        onChangeText={setProduct}
      />

      <Button title="Add Product" onPress={addProduct} />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#e6e6fa',
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
  },
});
*/