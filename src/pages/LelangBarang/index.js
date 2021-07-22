import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Headers, Kategori, Gap, HomeTabSection} from '../../components';

const LelangBarang = ({navigation}) => {
    return (
    <View style={styles.page}>
        <Headers title="Lelang Barang" subTitle="Atur Lelang Barang Disini" onBack={() => navigation.goBack()} />
        <View style={styles.content}>
            <Gap height={10}/>
             <Text style={styles.desc}>Pilih kategori barang </Text>
            <Gap height={10}/>
            <View style={styles.kategori}>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategoriItem}>
                <Kategori
                    label="PAKAIAN"
                    onPress={() => navigation.navigate('CategoryPakaian')}
                    />
                </View>
                <View style={styles.kategoriItem}>
                    <Kategori
                    label="HEELS"
                    onPress={() => navigation.navigate('CategoryHeels')}
                    />
                </View>
                <View style={styles.kategoriItem}>
                    <Kategori
                    label="HIJAB"
                    onPress={() => navigation.navigate('CategoryHijab')}
                    />
                </View>
                <View style={styles.kategoriItem}>
                    <Kategori
                    label="TAS"
                    onPress={() => navigation.navigate('CategoryTas')}
                    />
                </View>
                <View style={styles.kategoriItem}>
                    <Kategori
                    label="BEAUTY"
                    onPress={() => navigation.navigate('CategoryBeauty')}
                    />
                </View>
                </ScrollView>
          </View>
      </View>
        <View style={styles.tabContent}>
            <HomeTabSection />
        </View>
    </View>
    )
}

export default LelangBarang

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E3E3E3'
    },
    content: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    kategori: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
  },
    kategoriItem: {
        paddingRight: 5,
        marginLeft: 5,
        width: 77,
        paddingVertical: 10,
  },
    desc: {
      fontFamily: 'Nunito-Regular',
      fontSize: 16,
      color: '#595260',
      paddingHorizontal: 6
  },
  tabContent: {
      flex: 1,
      marginTop: 10
  }
})
