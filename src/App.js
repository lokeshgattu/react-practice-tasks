// import ToDoComponent from './ToDoApp/TodoComponent.js'
// import data from './ToDoApp/Datafile.js'
// function App(){
//     return(
//         <>
//         <ToDoComponent data={data}></ToDoComponent>
//         </>
//     )
// }

// export default App

// import PureComponent from './Components/PureComponentEg.js'
// function App(){
//     return(
//         <>
//         <PureComponent></PureComponent>
//         </>
//     )
// }

// export default App

// import FilterClothingProducts from "./WOHOC/FilterClothingProducts";
// import FilterElectronicProducts from "./WOHOC/FilterElectronicProducts";
// import clothing from "./WOHOC/clothing";
// import products from "./WOHOC/products";
// import ClothingCategory from "./WHOC/ClothingCategory";
// import ProductsCategory from "./WHOC/ProductsCategory";
// import StylingComponent from "./Components/StylingComponent";
// import PlainComponent from "./Styling-WHOC/PlainComponent";
// import SimpleAPICall from "./APICalls/SimpleAPICall";
// import LCMAPICall from "./APICalls/LCMAPICall";
// import ImageSearchAPI from "./APICalls/ImageSearchAPI";
// import ContactManager from "./ContactManager/ContactManager";
// import BlogSearch from "./Axios-AlgoliaWithoutHOC/BlogSearch";
// import BlogSearchUIcomponent from "./Axios-AlgoliaWithHOC/BlogSearchUIcomponent";
// import FormElements from "./FormExamples/FormElements";
// import RegistrationForm from "./Form-Tasks/RegistrationForm";
// import LoginForm from "./Form-Tasks/LoginForm";
// import FeedBackForm from "./Form-Tasks/FeedBackForm";
// import ParentComponent from "./UseState/parentComponent";
// import UseEffectWithParent from "./UseEffect/UseEffectWithParent";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPageFun from "./TicketRaisingApplication/MainPageFun";
import UserLoginFun from "./TicketRaisingApplication/User/UserLoginFun";
import UserSignUpFun from "./TicketRaisingApplication/User/UserSignUpFun";
import UserDashBoardClass from "./TicketRaisingApplication/User/UserDashBoardClass";
import AdminLoginFunctional from "./TicketRaisingApplication/AdminLoginFunctional";
// import AdminDashBoardClass from "./TicketRaisingApplication/AdminDashBoardClass";
import AdminDashBoardFunctional from "./TicketRaisingApplication/AdminDashBoardFunctional";
import AdminSignUpPage from "./TicketRaisingApplication/AdminSignUpPage";
import TicketsRaisedFunctional from "./TicketRaisingApplication/TicketsRaisedFunctional";
import TicketsClosedFunctional from "./TicketRaisingApplication/TicketsClosedFunctional";

function App() {
  return (
    <>
      {/* <ClothingCategory data={clothing}></ClothingCategory>
        <ProductsCategory data={products}></ProductsCategory> */}
      {/* <StylingComponent></StylingComponent> */}
      {/* <PlainComponent fname="peter" tech={["nodejs","react"]}></PlainComponent> */}
      {/* <SimpleAPICall></SimpleAPICall> */}
      {/* <LCMAPICall></LCMAPICall> */}
      {/* <ImageSearchAPI></ImageSearchAPI> */}
      {/* <ContactManager></ContactManager> */}
      {/* <FormElements></FormElements> */}
      {/* <BlogSearch></BlogSearch> */}
      {/* <BlogSearchUIcomponent></BlogSearchUIcomponent> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <LoginForm></LoginForm> */}
      {/* <FeedBackForm></FeedBackForm> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UseEffectWithParent></UseEffectWithParent> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageFun></MainPageFun>}></Route>
          <Route
            path="/usersignup"
            element={<UserSignUpFun></UserSignUpFun>}
          ></Route>
          <Route
            path="/userlogin"
            element={<UserLoginFun></UserLoginFun>}
          ></Route>
          <Route
            path="/userdashboard"
            element={<UserDashBoardClass></UserDashBoardClass>}
          ></Route>
          <Route
            path="/adminlogin"
            element={<AdminLoginFunctional></AdminLoginFunctional>}
          ></Route>
          <Route
            path="/adminsignup"
            element={<AdminSignUpPage></AdminSignUpPage>}
          ></Route>
          <Route
            path="/admindashboard/:username"
            element={<AdminDashBoardFunctional></AdminDashBoardFunctional>}
          ></Route>
          <Route
            path="/openTickets/:ticketsraised"
            element={<TicketsRaisedFunctional></TicketsRaisedFunctional>}
          ></Route>
          <Route
            path="/closedTickets/:ticketsclosed"
            element={<TicketsClosedFunctional></TicketsClosedFunctional>}
          ></Route>

          <Route
            path="/login"
            element={<AdminLoginFunctional></AdminLoginFunctional>}
          ></Route>
        </Routes>

        {/* <Route path="/error" element={<PageNotFound></PageNotFound>}></Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;

// import FormComponents from './Components/FormComponents.js'
// function App(){
//     return(
//         <>
//         <FormComponents></FormComponents>
//         </>
//     )
// }

// export default App

// import "./App.css"
// import ComponentB from "./CountDownTimer/ComponentB"
// function App(){
//     return(
//         <>
//         <ComponentB></ComponentB>
//         </>
//     )
// }

// export default App

// import ArrayOfObjectsInsideStateObject from "./Components/ArrayOfObjectsInsideStateObject";

// function App(){
//     return(
//         <>
//         <ArrayOfObjectsInsideStateObject></ArrayOfObjectsInsideStateObject>
//         </>
//     )
// }
// export default App;

// import LifeCycleMethods from "./Components/LifeCycleMethods";

// function App(){
//     return(
//         <>
//         <LifeCycleMethods msg='inside a parent component'></LifeCycleMethods>
//         </>
//     )
// }
// export default App;
