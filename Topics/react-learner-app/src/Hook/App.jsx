import UpdateObject from './UseStateHook/UpdateStateOfObject'
import Mycomponent from './UseStateHook/myComponent' 
import UpdateArrays from './UseStateHook/UpdateArrays'
import ArrayOfObject from './UseStateHook/UpdateArrayOfObject'
function App() {
    return (
      <>
      <div className="Wrapper">
    <Mycomponent></Mycomponent>
    <UpdateObject></UpdateObject>
    <UpdateArrays></UpdateArrays>
    <ArrayOfObject></ArrayOfObject>
    </div>  </>
    )
  }
  
  export default App
  