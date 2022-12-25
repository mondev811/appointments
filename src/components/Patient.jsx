import {Pressable, View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const Patient = ({item, editPatient, deletePatient}) => {
  const formatDate = date => {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('es-ES', options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient: </Text>
      <Text style={styles.itemText}>{item.patient}</Text>
      <Text style={styles.date}>{formatDate(item.date)}</Text>

      <View style={styles.containerButtons}>
        <Pressable
          style={[styles.btn, styles.btnEdit]}
          onPress={() => {
            editPatient(item.id);
          }}>
          <Text style={styles.btnText}>Edit</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, styles.btnDelete]}
          onPress={() => deletePatient(item.id)}>
          <Text style={styles.btnText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 5,
  },
  itemText: {
    color: '#6d28d9',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#F59E0B',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});
