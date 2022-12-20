import {Button, Pressable, StyleSheet, Text, Modal} from 'react-native';
import React from 'react';

export const Form = ({isVisible, onClose}) => {
  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <Text>From modal</Text>
      <Pressable>
        <Button title="Close" onPress={onClose} />
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({});
