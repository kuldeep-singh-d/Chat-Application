import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function Dashboard() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{paddingBottom: 3}}>
        <Text style={{marginHorizontal: 17}}>
          Thank you for staying with us!
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderBottomColor: '#E8E6E5',
          borderTopColor: '#E8E6E5',
          paddingHorizontal: 17,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Payments
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ff7900'}}>
            Pay the invoice
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 16,
          }}>
          <View
            style={{
              width: 170,
              height: 90,
              backgroundColor: '#ff7900',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 20,
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              To pay:
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {'150'}
            </Text>
          </View>
          <View
            style={{
              width: 170,
              height: 90,
              backgroundColor: '#E8E6E5',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 20,
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Deadline:
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {'19.06'}
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginHorizontal: 17}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Use
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ff7900'}}>
            Customize
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E8E6E5',
            paddingBottom: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                backgroundColor: '#E8E6E5',
                justifyContent: 'space-between',
                marginVertical: 7,
              }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  marginBottom: 40,
                  marginTop: 15,
                  color: '#000',
                  fontSize: 18,
                }}>
                Internet LTE
              </Text>
              <Text
                style={{
                  marginHorizontal: 10,
                  marginBottom: 40,
                  marginTop: 15,
                  color: '#000',
                  fontSize: 18,
                }}>
                47 / 75GB
              </Text>
            </View>
            {/* <View style={{flexDirection: 'row',backgroundColor:'#fff'}}>
                <View style={{height: 5, backgroundColor: 'red'}} ></View>
                <View style={{height: 5, backgroundColor: 'orange'}} ></View>
            </View> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderRadius: 10,
              backgroundColor: '#E8E6E5',
              justifyContent: 'space-between',
              marginVertical: 7,
            }}>
            <Text
              style={{
                marginHorizontal: 10,
                marginBottom: 40,
                marginTop: 15,
                color: '#000',
                fontSize: 18,
              }}>
              Internet Roaming -UE
            </Text>
            <Text
              style={{
                marginHorizontal: 10,
                marginBottom: 40,
                marginTop: 15,
                color: '#000',
                fontSize: 18,
              }}>
              2 / 10GB
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginHorizontal: 17}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 10,
            }}>
            Dont waste opportunity
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.Offer}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
              10GB internet
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>free</Text>
            <Text style={{color: '#000'}}>offer valid 22.05.2020</Text>
          </View>
          <View style={styles.Offer}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
              20% discount
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              with a new plan
            </Text>
            <Text style={{color: '#000'}}>offer valid 31.06.2020</Text>
          </View>
          <View style={styles.Offer}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
              10GB internet
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>free</Text>
            <Text style={{color: '#000'}}>offer valid 22.05.2020</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{marginHorizontal: 17, flexDirection:'row',justifyContent:'space-between',paddingHorizontal:34}}>
        <TouchableOpacity>
          <View style={styles.iconview}>
            <IoniconsIcon name="home" style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.iconview}>
            <IoniconsIcon name="wallet" style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.iconview}>
            <IoniconsIcon name="notifications" style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.iconview}>
            <IoniconsIcon name="person" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Offer: {
    width: 170,
    height: 80,
    backgroundColor: '#E8E6E5',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  iconview:{
    justifyContent:'center',
    alignItems:'center',
    padding:5
  },
  icon:{
    fontSize:30,
    color:'#c2c2c2'
  },
  
});
