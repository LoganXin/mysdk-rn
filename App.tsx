/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, StyleSheet, useColorScheme, View, TouchableOpacity, Alert} from 'react-native';
import NativeInitModule from './js/src/specs/NativeInitModule';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const handleInit = async () => {
    console.log('JS点击了初始化按钮');
    try {
      if (!NativeInitModule) {
        Alert.alert('错误', 'NativeInitModule 未加载');
        return;
      }
      const result = await NativeInitModule.initialize();
      Alert.alert('初始化结果', result); // 弹出“初始化成功”
    } catch (e) {
      // Alert.alert('错误', e?.message || '初始化失败');
    }
  };




  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleInit}>
        <Text style={styles.buttonText}>初始化 SDK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // 垂直居中
    alignItems: 'center',      // 水平居中
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,  // 安卓阴影
    shadowColor: '#000',  // iOS 阴影
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
