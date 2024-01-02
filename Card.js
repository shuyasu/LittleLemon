import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Container from '../../Component/container';
import CustomHeader from '../../Component/CustomHeader';
import VendorHeader from '../../Component/Vendorheader';
import Typography from '../../Component/typography';
import Content from '../../Component/content';
import Cards from '../../Component/Cards';
import { FlatList } from 'react-native';

const CreateCustomer = () => {


  // const Shubham = () =>{
    // Alert.alert("Success data is saved")
    // console.log("hello Shubham Tyagi")
  //  if(title==true){
  //   console.log("pending is clicked")
  //  }else{
  //   console.log("green word")
  //  }
  // }

  // const Pend =()=>{
  //   alert(" some data pending status ")
    // console.log("yet pending data")
  // }

  // const Reject =()=>{
  //   alert("all data is rejected")
    // console.log("all data is rejected")
  // }
  return (
    <Container>
      <VendorHeader>
        <CustomHeader
          // leftComponent={<View style={{paddingTop: 5}}></View>}
          centerComponent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 5,
              }}>
              <View>
                <Typography
                  numberOfLines={1}
                  size={19}
                  bold
                  type={'bold'}
                  color={'textPrimary'}>
                  Dashboard
                </Typography>
              </View>
            </View>
          }
        />
      </VendorHeader>

      <Content>
        <View style={{paddingTop: 35, flexDirection: 'row'}}>
          {/* <Cards onPress={Pend} style={styles.pending} title="Pending" />

          <Cards
            onPress={Shubham}
            style={styles.accepted}
            title="Approved"
          />
          */}
        </View>
        {/* <Cards onPress={Reject} style={styles.rejected} title="Rejected" /> */}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  box: {},
  pending: {
    backgroundColor: 'orange',
  },
  accepted: {
    backgroundColor: 'green',
  },
  rejected: {
    backgroundColor: 'red',
    marginTop:30,
    
  }
});
export default CreateCustomer;
