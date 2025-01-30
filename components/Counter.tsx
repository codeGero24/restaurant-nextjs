import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, reset, selectCount } from '@/store/reducers/counter.slice';
// - import { useAppSelector, useAppDispatch } from '@/hooks/redux';

export default function Counter() {
  // - const counter = useAppSelector(selectCount);
  // - const dispatch = useAppDispatch();
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className='mb-8'>
        <h2 className='mb-4 text-center text-xl font-semibold uppercase'>
          Counter - Redux Toolkit
        </h2>
        <div className='mb-8 grid grid-cols-3 gap-5'>
          <button className='button' onClick={() => dispatch(increment())}>
            ➕ Increment
          </button>
          <p className='text-center text-xl'>{counter}</p>
          <button className='button' onClick={() => dispatch(decrement())}>
            ➖ Decrement
          </button>
        </div>

        <div className='flex justify-center'>
          <button className='button' onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
