import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import CourseInfo from "../course-info";
import ChannelInfo from "../channel-info";

const ListItem = (props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://64.media.tumblr.com/30779ac02fc1f7e9ae34464f3cacdb8f/tumblr_p9uzu5SIT51wti86no1_250.png'}} style={styles.image}/>
            <View style={{flex: 4}}>
                {props.type==='courses' && <CourseInfo item={props.item}/>}
                {props.type==='channels' && <ChannelInfo item={props.item}/>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'flex-start',
        height: 140,
        //backgroundColor: '#A9CCE3',

        margin: 5,

        borderWidth: 2,
        borderColor: '#A9CCE3',
    },
    image:{
        flex: 1,
        resizeMode: 'contain',

        width: 180,
        height: 100,
    }
})

export default ListItem;