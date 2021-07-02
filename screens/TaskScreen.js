import React, {useState} from 'react'
import { TouchableOpacity, Text, View, Modal, ScrollView , TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-date-picker'
export default class TaskScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            checked: false,
            isModalVisible: "false",
            title: ""
        }
    }
    showModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible = {this.state.isModalVisible}
            >
                <ScrollView>
                    <View style = {styles.signupView}>
                       <Text style={{textAlign: 'center',fontStyle: 'italic',fontSize:'25'}}>Add a Task</Text> 
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text) => {
                                this.setState({
                                    title: text
                                });
                            }}
                            placeholder = "Enter Your Task Here"
                        />
                    const [date, setDate] = useState(new Date())    
                        return(
                        <DatePicker
                            date={date}
                            onDateChange = {setDate}
                        />
                        )
                        <TouchableOpacity style = {{ali}}>
                            <Text>Add Task!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
            </Modal>
            )
        
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={{borderRadius: 30,width: 100, height: 100, alignSelf: 'center',backgroundColor: 'blue'}}>
                    <Text>➕</Text>
                </TouchableOpacity>
                <CheckBox
                  title= {this.state.title}
                   textStyle = {this.state.checked ? 
                        [{textDecorationLine: 'line-through'}]:
                        [{textDecorationLine: 'none'}]
                        }
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6fc0b8"
  },
})