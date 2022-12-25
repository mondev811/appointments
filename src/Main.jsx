import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
import {Form, Patient} from './components';

const initialPatients = [
  {
    id: Date.now(),
    patient: 'Fluffy',
    owner: 'Edgar',
    email: 'ed@email.com',
    phone: '222-222-2222',
    date: new Date(),
    symptoms: 'Sleeps too much.',
  },
  {
    id: new Date('2022-10-01').valueOf(),
    patient: 'Rover',
    owner: 'Lenny',
    email: 'len@email.com',
    phone: '333-333-3333',
    date: new Date(),
    symptoms: 'Eats too much',
  },
];

export const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState(initialPatients);
  const [patientInitForm, setPatientInitForm] = useState();

  const newAppointmentHandler = () => {
    setModalVisible(!modalVisible);
  };

  const editItemHandler = id => {
    const patientToEdit = patients.find(item => item.id === id);
    setPatientInitForm(patientToEdit);
    setModalVisible(true);
  };

  const deletePatient = id => {
    newPatients = patients.filter(p => p.id !== id);
    setPatients(newPatients);
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
      {patients.length === 0 && (
        <Text style={styles.noPatients}>There are no patients to display.</Text>
      )}
      {patients.length > 0 && (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Patient
              item={item}
              editPatient={editItemHandler}
              deletePatient={deletePatient}
            />
          )}
        />
      )}
      <Form
        isVisible={modalVisible}
        patients={patients}
        savePatient={setPatients}
        onClose={() => setModalVisible(false)}
        initializePatient={patientInitForm}
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
    marginBottom: 10,
  },
  btnTextNewAppointment: {
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },

  noPatients: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  list: {
    marginTop: 5,
    marginHorizontal: 10,
  },
});
