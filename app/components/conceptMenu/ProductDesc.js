import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  } from 'react-native'

import styles from '../../styles'
import colors from '../../colors'

import { connect } from 'react-redux';

import { push, pop } from '../../actions/navigation';
import { push_home, pop_home } from '../../actions/navigation';

class ProductDesc extends Component {

  _viewProduct = () => {
      this.props.push_home({key: 'ProductModal', type:'modal'});
  }

  render() {
    return (

          <View style={[styles.container, {flexDirection:'row', minHeight:90}]}>

            <TouchableOpacity onPress={this._viewProduct} style={{backgroundColor: colors.submitButtonColor, flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text style={[styles.normalText, {}]}>
                {this.props.productQty}
              </Text>
            </TouchableOpacity>

            <View style={{flex:10}}>

              <View style={{flexDirection:'row', paddingTop:8, paddingLeft:8, paddingRight:8, paddingBottom :4}}>

                <Text style={styles.normalText}>
                  {this.props.productName}
                </Text>

                <View style={{flex:1, flexDirection:'row-reverse'}}>
                  <Text style={[styles.tabText, { color: '#FFFFFF', padding:2, borderWidth:1, borderColor:'#FFFFFF'}]}>
                    {this.props.productCost}
                  </Text>
                </View>

              </View>

              <View style={{ paddingBottom:8, paddingLeft:8, paddingRight:15}}>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={3}
                  style={[styles.tabText]}
                  >
                  {this.props.productDesc}
                </Text>
              </View>

            </View>

          </View>
    );
  }
}

const mapStateToProps = (state) => ({
  homeNavState: state.homeNavState,
})

export default connect(
  mapStateToProps,
  {
    push_home: (route) => push_home(route),
    pop_home: () => pop_home(),
    push: (route) => push(route),
    pop: () => pop(),
  }
) (ProductDesc);
