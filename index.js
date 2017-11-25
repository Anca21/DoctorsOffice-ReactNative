//import { AppRegistry } from 'react-native';
//import App from './App';
//
//AppRegistry.registerComponent('DoctorsOffice', () => App);
import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
    TextInput,
    Linking
} from 'react-native';
import {StackNavigator} from 'react-navigation'


var patients=[
    {
        key:'1',
        firstName: 'Anca',
        lastName: 'Rusu',
        CNP: '123456789',
        address: 'Cluj-Napoca',
        phone: '12345678',
        diagnosis: 'none',
        lastMedicalCheck: '07-07-2017',
        nextMedicalCheck: '12-12-2017'},
    {
        key:'2',
        firstName: 'Maia',
        lastName: 'Pop',
        CNP: '123456789',
        address: 'Cluj-Napoca',
        phone: '12345678',
        diagnosis: 'none',
        lastMedicalCheck: '07-07-2017',
        nextMedicalCheck: '12-12-2017'},
    {
        key:'3',
        firstName: 'Dan',
        lastName: 'Popescu',
        CNP: '123456789',
        address: 'Cluj-Napoca',
        phone: '12345678',
        diagnosis: 'none',
        lastMedicalCheck: '07-07-2017',
        nextMedicalCheck: '12-12-2017'}
]




class PatientsList extends Component {
    static navigationOptions = {
        //title: 'Home',
        header:null,
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>- Patients -</Text>
                </View>

                 <FlatList
                    data = { patients }
                    renderItem={
                        ({item}) =>
                            <ScrollView style = {styles.scrollContainer} >
                                <View style={styles.linearView} >
                                    <Image style= {{ height:70, width: 50, resizeMode: 'contain' }}
                                     />
                                    <Text style={styles.item} onPress={
                                        () => navigate('Details',{ patient : item })
                                    } >{item.firstName} {item.lastName}</Text>
                                </View>
                            </ScrollView>
                        }
                 />
                <View style = {styles.footer}>
                    <TouchableOpacity style={styles.reserveButton} onPress={() =>
                            navigate('Page2')}>
                        <Text style={styles.reserveButtonText}> Consulation reminder </Text>
                    </TouchableOpacity>
                </View>

    </View>
    );
    }
}

class Page2 extends Component{
    render() {
        return (
            <View>
                <Text> First Name: </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray'}}
                    onChangeText={(firstName) => this.setState({firstName})}

                />
                <Text style={{ marginTop:28}}> Last Name: </Text>
                <TextInput
                style={{height: 40, borderColor: 'gray', marginBottom:8}}
                onChangeText={(lastName) => this.setState({lastName})}
                />
                <Text> Next Medical Check: </Text>
                <TextInput
                style={{height: 40, borderColor: 'gray'}}
                onChangeText={(nextMedicalCheck) => this.setState({nextMedicalCheck})}
                />
                <TouchableOpacity style={styles.reserveButton}>
                    <Text style={styles.reserveButtonText}
                          onPress={() => {
                              receiver = "ancarusu0121@gmail.com";
                              subject = "Consultation reminder";
                              body = "First Name: " + this.state.firstName + "\n" +
                                  "  Last Name: " + this.state.lastName + "\n" +
                                  "  Next medical check: " + this.state.nextMedicalCheck;
                              all = "mailto:" + receiver + "?subject=" + subject + "&body=" + body ;
                              Linking.openURL(all)}}> Confirm </Text>
                </TouchableOpacity>

            </View>
        );
    }
}


class Details extends Component{
    static navigationOptions = {
        //title: 'Home',
        header:null,
    };
    render() {
        const {state} = this.props.navigation;
        var patient = state.params ? state.params.patient : "<undefined>";
        return (
            <ScrollView>
            <View style={{
                justifyContent: 'center',
//                alignItems: 'center',
                marginLeft: 30,
                marginTop: 15,
            }}>
                <Text style = {styles.patientFirstName}>- {patient.firstName} {patient.lastName} -</Text>
                <Text>CNP:</Text>
                <Text style = {{width:350}}>{patient.CNP} </Text>
                <Text>Address:</Text>
                <TextInput style = {{width:350}}>{patient.address} </TextInput>
                <Text>Phone</Text>
                <TextInput style = {{width:350}}>{patient.phone} </TextInput>
                <Text>Last Medical Check:</Text>
                <Text style = {{width:350}}>{patient.lastMedicalCheck} </Text>

                <Text>Next Medical Check:</Text>
                <TextInput style = {{width:350}}> {patient.nextMedicalCheck} </TextInput>
                 <Text>Diagnosis:</Text>
                 <TextInput style={{width: 350 }} multiline={true}> {patient.diagnosis} </TextInput>
            </View>
            </ScrollView>
        );
    }
}

const NavigationApp = StackNavigator({
    Home: {screen: PatientsList},
    Page2: {screen: Page2},
    Details: {screen: Details}
});




const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 22
    },
    header:{
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        //marginTop:-40,

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    reserveButton: {
        backgroundColor: '#E91E63',
        //borderRadius: 30,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:45
    },
    reserveButtonText: {
        color:'#fff',
        fontSize:24,
    },
    linearView: {
        flexDirection:'row',
        padding:8,
    },
    patientFirstName:{
        color:'#E91E63',
        fontSize:25,
        textAlign:'center',
    },
    detailedImage: {
        height:220,
        width: 200,
        resizeMode: 'contain',
        marginBottom:28,
        marginTop:28
    }


});

export default class App extends Component{
    render(){
        return <NavigationApp/>;
    }
}



// skip this line if using Create React Native App
AppRegistry.registerComponent('DoctorsOffice', () => App);