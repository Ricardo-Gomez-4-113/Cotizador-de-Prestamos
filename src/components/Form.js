import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, TextInput, View} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';
export default function Form(props){
    const {setCapital, setInterest, setMonths} = props;
    console.log(setCapital);

    return(
        <View style={styles.viewform}>
            <View style={styles.viewInputs}>
              <TextInput placeholder="Cantidad a pedir" keyboardType="numeric" style={styles.input} onChange={e=>setCapital(e.nativeEvent.text)}></TextInput>
              <TextInput placeholder="Interes %" keyboardType="numeric" style={[styles.input, styles.inputPorcentaje]} onChange={e=>setInterest(e.nativeEvent.text)}></TextInput>
            </View>
            <RNPickerSelect style={pickerSelectStyle}
            placeholder={{
                label: "selecciona el plazo",
                value: null,
                color: "black",

            }}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMonths(value)}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12},
                { label: '24 meses', value: 24},
            ]}
        />
        </View>
        
    );
}

const styles = StyleSheet.create({
    viewform:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"


    },
    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRYMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20,


    },
    inputPorcentaje:{
        width: "40%",
        marginLeft: 5,
    }

});
const pickerSelectStyle = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    },
    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }
});
