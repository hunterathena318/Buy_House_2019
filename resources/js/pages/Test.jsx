// import React from "react";
// import ReactDOM from "react-dom";
// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";

// // Setup Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyBPVQCcgAeujk2Q3TEpu5iSjikunRwcNag",
//     authDomain: "realestate-ee283.firebaseapp.com",
//     databaseURL: "https://realestate-ee283.firebaseio.com",
//     projectId: "realestate-ee283",
//     storageBucket: "realestate-ee283.appspot.com",
//     messagingSenderId: "332315770750",
//     appId: "1:332315770750:web:af53c00c0fd7ea7f0d3d2f",
//     measurementId: "G-QB3BJN8WXR"
// });
// const style = {
//     marginTop: '50px'
// }
// class Test extends React.Component {
//   state = {
//     filenames: [],
//     downloadURLs: [],
//     isUploading: false,
//     uploadProgress: 0
//   };

//   handleUploadStart = () =>
//     this.setState({
//       isUploading: true,
//       uploadProgress: 0
//     });

//   handleProgress = progress =>
//     this.setState({
//       uploadProgress: progress
//     });

//   handleUploadError = error => {
//     this.setState({
//       isUploading: false
//       // Todo: handle error
//     });
//     console.error(error);
//   };

//   handleUploadSuccess = async filename => {
//     const downloadURL = await firebase
//       .storage()
//       .ref("images")
//       .child(filename)
//       .getDownloadURL();

//     this.setState(oldState => ({
//       filenames: [...oldState.filenames, filename],
//       downloadURLs: [...oldState.downloadURLs, downloadURL],
//       uploadProgress: 100,
//       isUploading: false
//     }));
//   };


//   render() {
//     return (
//       <div style={style}>
//         <FileUploader
//           accept="image/*"
//           name="image-uploader-multiple"
//           randomizeFilename
//           storageRef={firebase.storage().ref("images")}
//           onUploadStart={this.handleUploadStart}
//           onUploadError={this.handleUploadError}
//           onUploadSuccess={this.handleUploadSuccess}
//           onProgress={this.handleProgress}
//           multiple
//         />

//         <p>Progress: {this.state.uploadProgress}</p>

//         <p>Filenames: {this.state.filenames.join(", ")}</p>

//         <div>
//           {this.state.downloadURLs.map((downloadURL, i) => {
//             return <img key={i} src={downloadURL} />;
//             console.log(downloadURL);
//   })}
//         </div>
//       </div>
//     );
//   }
// }

// // const rootElement = document.getElementById("root");
// export default Test;