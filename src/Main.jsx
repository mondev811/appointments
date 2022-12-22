import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
import {Form} from './components/Form';

export const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);

  const newAppointmentHandler = () => {
    setModalVisible(!modalVisible);
  };
  const renderItem = ({patient, owner, email, phone, date, symptoms}) => {
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{patient}</Text>
    </View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointments Administrator</Text>
      <Text style={{...styles.title, ...styles.titleBold}}>Veterinary</Text>
      <Pressable
        style={styles.btnNewAppointment}
        onPress={newAppointmentHandler}>
        <Text style={styles.btnTextNewAppointment}>New appointment</Text>
      </Pressable>
      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Form
        isVisible={modalVisible}
        savePatient={setPatients}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewAppointment: {
    backgroundColor: '#6d29d9',
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnTextNewAppointment: {
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  itemContainer: {backgroundColor: 'red', height: 50},
  itemText: {
    fontSize: 8,
  },
});
