module.exports={
    dependencies: {
        'react-native-vector-icons': {
          platforms: {
            ios: null,
          },
        },
    },
    project:{
        ios:{},//cấu hình cho ios
        android:{},// cấu hình cho android
    },
    assets:['./assets/fonts/'],//thêm font vào, và sử dụng lệnh "npx react-native-asset"
};
