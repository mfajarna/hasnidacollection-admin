import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange, type}) => {

  const renderPicker = () => {
    if(type === "tipe")
    {   

      return(
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onSelectChange(itemValue) }>
          <Picker.Item label="-- Pilih Tipe --" value="" />
          <Picker.Item label="New Collection" value="New Collection" />
          <Picker.Item label="Popular" value="Popular" />
          <Picker.Item label="Recommended" value="Recommended" />
      </Picker>
      )
    }
    if(type === "category")
    { 
      return(
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onSelectChange(itemValue) }>
          <Picker.Item label="-- Pilih Kategori --" value="" />
          <Picker.Item label="HIJAB" value="HIJAB" />
          <Picker.Item label="BEAUTY CARE" value="BEAUTY" />
          <Picker.Item label="HEELS" value="HEELS" />
          <Picker.Item label="PAKAIAN" value="PAKAIAN" />
        </Picker>
      )
      
    }
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
          {renderPicker()}
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 3,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 0,
    padding: -2,
  },
});
