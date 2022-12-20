import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Form} from './components/Form';

export const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const newAppointmentHandler = () => {
    setModalVisible(!modalVisible);
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
      <Form isVisible={modalVisible} onClose={() => setModalVisible(false)} />
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
});
