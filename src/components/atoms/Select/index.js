import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange, type}) => {

          const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const d = new Date();
        const monthName = monthNames[d.getMonth()];
        const month = d.getMonth();

        
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
    if(type === "month")
    { 
      return(
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onSelectChange(itemValue) }>
          <Picker.Item label="--Pilih Bulan--" value="" />
          <Picker.Item label="Januari" value="1" />
          <Picker.Item label="Februari" value="2" />
          <Picker.Item label="Maret" value="3" />
          <Picker.Item label="April" value="4" />
          <Picker.Item label="Mei" value="5" />
          <Picker.Item label="Juni" value="6" />
          <Picker.Item label="Juli" value="7" />
          <Picker.Item label="Agustus" value="8" />
          <Picker.Item label="September" value="9" />
          <Picker.Item label="Oktober" value="10" />
          <Picker.Item label="November" value="11" />
          <Picker.Item label="Desember" value="12" />
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
