import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import HorizontalCourseList from "../CoursesList/HorizontalCourseList/horizontal-course-list";
import SectionHeader from "../Common/section-header";
import {ScreenName} from "../../Globals/constants";
import {ThemeContext} from "../../Core/Provider/theme-provider";
import {AuthenticationContext} from "../../Core/Provider/authentication-provider";
import UnauthenticationView from "../Common/unauthentication-view";
import ImageButton from "../Common/image-button";
import i18n from 'i18n-js';
import {strings} from "../../Globals/Localization/string";
import {ContinueCoursesContext} from "../../Core/Provider/continue-courses-provider";
import {DownloadedCoursesContext} from "../../Core/Provider/downloaded-courses-provider";
import {FavouriteCoursesContext} from "../../Core/Provider/favourite-courses-provider";

const MyCourses = (props) => {
    const {theme} = useContext(ThemeContext)
    const authenticationContext = useContext(AuthenticationContext)
    const {continueCourses, setContinueCourses} = useContext(ContinueCoursesContext)
    const {downloadedCourses, setDownloadedCourses} = useContext(DownloadedCoursesContext)
    const {favouriteCourses, setFavouriteCourses} = useContext(FavouriteCoursesContext)

    const handleRecommendButton = () => {
        props.navigation.navigate(ScreenName.CourseList, {
            header: i18n.t(strings.recommend_for_you),
            items: []
        })
    }

    const handleContinueLearningButton = () => {
        props.navigation.navigate(ScreenName.CourseList, {
            items: continueCourses,
            header: i18n.t(strings.continue_learning),
        })
    }

    // const handleRegisteredButton = () => {
    //     props.navigation.navigate(ScreenName.CourseList, {
    //         items: registeredCourses,
    //         header: language.registered,
    //     })
    // }

    // const handleDownloadedButton = () => {
    //     props.navigation.navigate(ScreenName.CourseList, {
    //         items: downloadedCourses,
    //         header: language.downloaded,
    //     })
    // }

    const handleFavouriteButton = () => {
        props.navigation.navigate(ScreenName.CourseList, {
            items: favouriteCourses,
            header: i18n.t(strings.favourite),
        })
    }

    if (!authenticationContext.state.isAuthenticated) {
        return (
            <UnauthenticationView navigation={props.navigation}/>
        )
    } else {
        return (
            <ScrollView style={styles(theme).container}>
                <View style={styles(theme).buttonContainer}>
                    <ImageButton handleOnClick={handleRecommendButton}
                                 title={i18n.t(strings.recommend_for_you)}
                                 image={require('../../../assets/background_3.jpg')}/>
                </View>
                <View style={styles(theme).sectionContainer}>
                    <SectionHeader title={i18n.t(strings.continue_learning)}
                                   handleOnClick={handleContinueLearningButton}/>
                    <HorizontalCourseList navigation={props.navigation}
                                          items={continueCourses}/>
                </View>
                {/*<View style={styles(theme).sectionContainer}>*/}
                {/*    <View style={styles(theme).header}>*/}
                {/*        <SectionHeader title={language.registered}*/}
                {/*                       handleOnClick={handleRegisteredButton}/>*/}
                {/*    </View>*/}
                {/*    <View>*/}
                {/*        <HorizontalCourseList*/}
                {/*            navigation={props.navigation}*/}
                {/*            items={registeredCourses}/>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {/*<View style={styles(theme).sectionContainer}>*/}
                {/*    <SectionHeader title={language.downloaded}*/}
                {/*                   handleOnClick={handleDownloadedButton}/>*/}
                {/*    <HorizontalCourseList*/}
                {/*        navigation={props.navigation}*/}
                {/*        items={downloadedCourses}/>*/}
                {/*</View>*/}
                <View style={styles(theme).sectionContainer}>
                    <SectionHeader title={i18n.t(strings.favourite)}
                                   handleOnClick={handleFavouriteButton}/>
                    <HorizontalCourseList navigation={props.navigation}
                                          items={favouriteCourses}/>
                </View>
            </ScrollView>
        )
    }
};
const styles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme.background,
    },
    sectionContainer: {
        paddingTop: 5,
        paddingBottom: 10,
    },
    header: {
        paddingTop: 5,
        paddingBottom: 15
    },
    buttonContainer: {
        height: 180,
        padding: 5
    },
})
export default MyCourses;
