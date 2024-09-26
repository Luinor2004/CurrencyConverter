import React from 'react'
import ConverterForm from './components/ConverterForm';

const App = () => {
  return (
    <div className=" bg-[#030728] bg-[url('/bg.png')] bg-no-repeat bg-center h-screen flex flex-col items-center justify-center text-white">
      <div id="currency-converter" className=" bg-transparent min-w-[300px] min-h-[340px] py-3 px-5 rounded-md border-solid border-[1px] border-gray-500 backdrop-blur-md">
        <p className=" text-[1.4rem] font-semibold py-3 flex justify-center items-center">
            Currency Converter
        </p>
        <ConverterForm/>
      </div>
    </div>
  )
}

export default App