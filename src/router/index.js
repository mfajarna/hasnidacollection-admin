import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Akun,
  Home,
  Keranjang,
  Scan,
  Signin,
  Signup,
  SignupAddress,
  SplashScreen,
  SuccessSignup,
  ItemDetail,
  OrderSummary,
  SuccessOrder,
  NotificationOrder,
  OrderDetail,
  CategoryPakaian,
  CategoryHeels,
  CategoryHijab,
  CategoryTas,
  CategoryBeauty,
  Pembelian,
  Messages,
  Chatting,
  PesananDetail,
  LelangBarang,
  LelangDetail,
  StatusLelang,
  PememangLelang,
  HistoryLelang,
  BarangLelang,
  TukarBarang,
  UploadPhotoKoleksi,
} from '../pages';
import {BottomNavigator} from '../components';
import KonfirmasiLelang from '../pages/KonfirmasiLelang';
import KonfirmasiPemenangLelang from '../pages/KonfirmasiPemenangLelang';
import Koleksi from '../pages/Koleksi';
import DetailTukarBarang from '../pages/DetailTukarBarang';
import UploadPhotoBarcode from '../pages/UploadPhotoBarcode';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cek Pesanan" component={Keranjang} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Akun" component={Akun} />

    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupAddress"
        component={SignupAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignup"
        component={SuccessSignup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationOrder"
        component={NotificationOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryPakaian"
        component={CategoryPakaian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryHeels"
        component={CategoryHeels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryHijab"
        component={CategoryHijab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryTas"
        component={CategoryTas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryBeauty"
        component={CategoryBeauty}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembelian"
        component={Pembelian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pesananDetail"
        component={PesananDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangBarang"
        component={LelangBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangDetail"
        component={LelangDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StatusLelang"
        component={StatusLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PemenangLelang"
        component={PememangLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryLelang"
        component={HistoryLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarangLelang"
        component={BarangLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TukarBarang"
        component={TukarBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KonfirmasiLelang"
        component={KonfirmasiLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KonfirmasiPemenangLelang"
        component={KonfirmasiPemenangLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Koleksi"
        component={Koleksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailTukarBarang"
        component={DetailTukarBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhotoKoleksi"
        component={UploadPhotoKoleksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhotoBarcode"
        component={UploadPhotoBarcode}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
