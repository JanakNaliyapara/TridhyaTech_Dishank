import React, {Component} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../assets/styles';
import {_onFilter, _onSearch} from '../Functions';
import {Jsondata} from '../Functions/Json';

export default class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      userData: props.route.params.data,
      data: Jsondata,
      check: '',
    };
  }

  componentDidMount() {}

  ListEmpty = () => {
    return (
      <View style={(styles.container, styles.center)}>
        <Text style={[styles.TTmed_text, {color: '#B06AB3'}]}>
          No Data Found
        </Text>
      </View>
    );
  };

  render() {
    const {userData, check, data} = this.state;
    return (
      <View style={[styles.container]}>
        <LinearGradient
          start={{x: 1.7, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#4568DC', '#B06AB3']}
          style={[styles.center, {width: '100%', height: 50, elevation: 10}]}>
          <Text style={styles.TTmed_text}>
            User : {userData.user.displayName}
          </Text>
        </LinearGradient>

        <LinearGradient
          start={{x: 1.7, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#4568DC', '#B06AB3']}
          style={[styles.center, styles.filter_back]}>
          <View style={styles.TTfilter}>
            <View style={styles.filter_view}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  const data = _onFilter('delayed');
                  this.setState({check: 'delayed', data: data});
                }}
                style={check == 'delayed' ? styles.check : styles.uncheck}
              />
              <Text style={styles.TTmed_text}>Delayed</Text>
            </View>

            <View style={styles.filter_view}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  const data = _onFilter('processing');
                  this.setState({check: 'processing', data: data});
                }}
                style={check == 'processing' ? styles.check : styles.uncheck}
              />
              <Text style={styles.TTmed_text}>Processing</Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          start={{x: 1.7, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#4568DC', '#B06AB3']}
          style={styles.filter_back}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#FFFFFF"
            onChangeText={value => {
              const data = _onSearch(value);
              this.setState({data: data});
            }}
            style={[
              {
                width: '90%',
                height: '75%',
                fontSize: 15,
                backgroundColor: '#FFFFFF70',
                borderRadius: 20,
                paddingLeft: 10,
                alignSelf: 'center',
                color: '#FFFFFF',
                fontFamily: 'Quicksand-Regular',
              },
            ]}
          />
        </LinearGradient>

        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.list_view}>
                <Text style={styles.TTmed_text}>
                  Buyer Name : {item.buyer_name}
                </Text>
                <Text style={styles.TTmed_text}>
                  Procce Name : {item.process.toLowerCase()}
                </Text>
                <Text style={styles.TTmed_text}>status : {item.status}</Text>
                <Text style={styles.TTmed_text}>
                  Order Date : {item.order_date}
                </Text>
              </View>
            )}
            ListEmptyComponent={this.ListEmpty}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
