import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bridge from "./Bridge.js";
import Header from "./Header";
import Shop from "./Shop";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/bridge" component={Bridge}></Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;





// import React, { Component } from "react";
// import Web3 from "web3";
// //Need to correct RenJS tutorial BTC/ETH imports with newest NPM file hyphen
// import RenJS from "@renproject/ren";
// import { Bitcoin } from "@renproject/chains-bitcoin";
// import { Ethereum } from "@renproject/chains-ethereum";
// import { ethers } from "ethers";
// import logo from "../logo.png";
// import "./App.css";
// import Marketplace from "../abis/Marketplace.json";
// // import ABI from "../abis/ABI.json";
// import Navbar from "./Navbar";
// import Main from "./Main";




// // class dapp extends React.Component {
// //   render() {
// //     return  (
// //       <div className="bridge">test
// //       <Renapp /></div>
// //     )
// //   }
// // }

// class Store extends Component {
//   async componentWillMount() {
//     await this.loadWeb3();
//     await this.loadBlockchainData();
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       window.alert(
//         "Non-Ethereum browser detected. You should consider trying MetaMask!"
//       );
//     }
//   }

//   async loadBlockchainData() {
//     const web3 = window.web3;
//     // Load account
//     const accounts = await web3.eth.getAccounts();
//     this.setState({ account: accounts[0] });
//     const networkId = await web3.eth.net.getId();
//     const networkData = Marketplace.networks[networkId];
//     if (networkData) {
//       const marketplace = web3.eth.Contract(
//         Marketplace.abi,
//         networkData.address
//       );
//       this.setState({ marketplace });
//       const productCount = await marketplace.methods.productCount().call();
//       this.setState({ productCount });
//       // Load products
//       for (var i = 1; i <= productCount; i++) {
//         const product = await marketplace.methods.products(i).call();
//         this.setState({
//           products: [...this.state.products, product],
//         });
//       }
//       this.setState({ loading: false });
//     } else {
//       window.alert("Marketplace contract not deployed to detected network.");
//     }
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       account: "",
//       productCount: 0,
//       products: [],
//       loading: true,
//     };

//     this.createProduct = this.createProduct.bind(this);
//     this.purchaseProduct = this.purchaseProduct.bind(this);
//   }

//   createProduct(name, price) {
//     this.setState({ loading: true });
//     this.state.marketplace.methods
//       .createProduct(name, price)
//       .send({ from: this.state.account })
//       .once("receipt", (receipt) => {
//         this.setState({ loading: false });
//       });
//   }

//   purchaseProduct(id, price) {
//     this.setState({ loading: true });
//     this.state.marketplace.methods
//       .purchaseProduct(id)
//       .send({ from: this.state.account, value: price })
//       .once("receipt", (receipt) => {
//         this.setState({ loading: false });
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar account={this.state.account} />
//         <div className="container mt-5"> 
//           <div className="row">
//             <main role="main" className="col-lg-12 d-flex">
//               {this.state.loading ? (
//                 <div id="loader" className="text-center">
//                   <p className="text-center">Loading...</p>
//                 </div>
//               ) : (
//                 <Main
//                   products={this.state.products}
//                   createProduct={this.createProduct}
//                   purchaseProduct={this.purchaseProduct}
//                 />
//               )}
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//     }
//   }

// export { Store }