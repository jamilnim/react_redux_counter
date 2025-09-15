import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrimentA, decrimentB, incrementA, incrementB } from './redux/counterSlice';

function App() {
  const counterA = useSelector((state) => state.counters.counterA);
  const counterB = useSelector((state) => state.counters.counterB);
  const total = counterA + counterB;
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        
        {/* Counter A Card */}
        <div className="bg-white shadow-lg rounded-3x2 p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Counter A</h2>
          <p className="text-2xl font-bold text-blue-600 mb-4">{counterA}</p>
          <div className="flex justify-center gap-3">
            <button 
              onClick={() => dispatch(incrementA())}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Increment A
            </button>
            <button 
              onClick={() => dispatch(decrimentA())}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement A
            </button>
          </div>
        </div>

        {/* Counter B Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Counter B</h2>
          <p className="text-2xl font-bold text-green-600 mb-4">{counterB}</p>
          <div className="flex justify-center gap-3">
            <button 
              onClick={() => dispatch(incrementB())}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Increment B
            </button>
            <button 
              onClick={() => dispatch(decrimentB())}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement B
            </button>
          </div>
        </div>

        {/* Total Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Counter</h2>
          <p className="text-2xl font-bold text-purple-600 mb-4">{total}</p>
        </div>
      </div>
    </div>
  )
}

export default App
