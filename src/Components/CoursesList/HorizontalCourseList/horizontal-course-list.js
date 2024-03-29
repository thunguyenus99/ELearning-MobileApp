import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {ScreenName} from "../../../Globals/constants";
import {ThemeContext} from "../../../Core/Provider/theme-provider";
import HorizontalCourseItem from "./horizontal-course-item";
import NoDataView from "../../Common/no-data-view";
import i18n from 'i18n-js';
import {strings} from "../../../Globals/Localization/string";

const HorizontalCourseList = (props) => {
    const {theme} = useContext(ThemeContext)

    // Control
    const handleOnClick = (item) => {
        props.navigation.push(ScreenName.CourseDetail, {
            itemId: item.id
        })
    }

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={{
                height: 250, width: 250,
                marginRight: 5,
                padding: 5,
                borderWidth: 1.5, borderColor: theme.primary, borderRadius: 3}}>
                <HorizontalCourseItem handleOnClick={handleOnClick}
                                      key={item.id}
                                      item={item}/>
            </View>
        );
    };

    if(props.items.length === 0) {
        return (
            <NoDataView message={i18n.t(strings.no_data_view_no_course)}/>
        )
    } else return (
        <FlatList horizontal={true}
                  data={props.items}
                  renderItem={renderItem}
                  style={{padding: 5}}/>
    )
}

export default HorizontalCourseList;
