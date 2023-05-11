
export const Cart = (props: any) => {
  const { cart, kosh } = props;
  return <div>
    <div className='p-2 w-96 bg-white shadow-lg'>
      <h1 className='text-3xl p-2 mb-12 font-extrabold'>
        ShivOm Cart
      </h1>


      <div className='p-2 font-bold mt-4'>Items:</div>
      <div className='p-1 flex flex-col gap-2'>
        {cart.map((item: any, index: number) => {
          return <div key={index} className='bg-gray-100 p-2 text-xs flex  flex-row justify-between'>
            <div>
              {index + 1}.
            </div>
            <div>
              {item.item_name}
            </div>
            <div>
              {item.price}
            </div>
            <div>
              {item.quantity}
            </div>
            <div>
              {item.quantity * item.price}
            </div>

          </div>;
        })}
      </div>
      <div className="mt-4 mb-4 ">
        {kosh.map((det: any, index: number) => {
          return <div key={index} className='p-4 flex flex-col gap-2 text-right text-xs font-bold rounded-lg text-sky-700 '>
            <div>TOTAL: {det.total}</div>
            <div>Taxes: {det.last_use}</div>
            <div>Grand Total: {det.last_deposite}</div>
          </div>;
        })}
      </div>
    </div>


  </div>;
};
