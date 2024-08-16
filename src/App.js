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

import FilterClothingProducts from "./WOHOC/FilterClothingProducts";
import FilterElectronicProducts from "./WOHOC/FilterElectronicProducts";
import clothing from "./WOHOC/clothing";
import products from "./WOHOC/products";
import ClothingCategory from "./WHOC/ClothingCategory";
import ProductsCategory from "./WHOC/ProductsCategory";
import StylingComponent from "./Components/StylingComponent";
import PlainComponent from "./Styling-WHOC/PlainComponent";
import SimpleAPICall from "./APICalls/SimpleAPICall";
import LCMAPICall from "./APICalls/LCMAPICall";
import ImageSearchAPI from "./APICalls/ImageSearchAPI";
import ContactManager from "./ContactManager/ContactManager";
import BlogSearch from "./Axios-AlgoliaWithoutHOC/BlogSearch";
import BlogSearchUIcomponent from "./Axios-AlgoliaWithHOC/BlogSearchUIcomponent";

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
      <ContactManager></ContactManager>
      {/* <BlogSearch></BlogSearch> */}
      {/* <BlogSearchUIcomponent></BlogSearchUIcomponent> */}
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
