const MoneyReceipt = () => {
    return (
      <div className="bg-gray-50 w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-8 px-6 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b pb-4">
          {/* First Column */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gray-800">Marketing</p>
            <p className="text-sm text-gray-600">Tagline goes here</p>
          </div>
  
          {/* Second Column (Money Receipt) */}
          <div className="flex justify-center">
            <p className="text-center text-lg font-semibold bg-blue-100 text-blue-700 py-2 px-4 rounded-full">
              Money Receipts
            </p>
          </div>
  
          {/* Third Column */}
          <div className="text-center md:text-right">
            <p className="text-xl font-bold text-gray-800">Your Business Name</p>
            <p className="text-sm text-gray-600 leading-tight">
              Lorem ipsum is simply dummy <br /> text of the printing industry
            </p>
          </div>
        </div>
  
        {/* Memo and Date Section */}
        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">Memo No:</p>
            <p className="text-gray-900 underline">this is demo</p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <p className="font-medium text-gray-700">Date:</p>
            <p className="text-gray-900 underline">1-14-2025</p>
          </div>
        </div>
  
        {/* Received From Section */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">Received with thanks from:</p>
            <p className="text-gray-900 flex-1 border-b border-black">this is demo</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="font-medium text-gray-700">Amount:</p>
            <p className="text-gray-900 border-b border-black flex-1">this is demo</p>
          </div>
        </div>
  
        {/* Payment Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">By cash/cheque:</p>
            <p className="text-gray-900 border-b border-black flex-1">this is demo</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">Bank:</p>
            <p className="text-gray-900 border-b border-black flex-1">this is demo</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">Date:</p>
            <p className="text-gray-900 border-b border-black flex-1">this is demo</p>
          </div>
        </div>
  
        {/* Purpose and Contact Section */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-700">For the purpose of:</p>
            <p className="text-gray-900 border-b border-black flex-1">this is demo</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="font-medium text-gray-700">Contact No:</p>
            <p className="text-gray-900 border-b border-black flex-1">8754678888</p>
          </div>
        </div>
  
        {/* Amount, Received, and Authorized Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {/* Amount */}
          <div className="flex items-center space-x-2">
            <p className="font-medium text-gray-700">Amount:</p>
            <p className="flex-1 px-4 py-2 border border-gray-300 rounded-md">783948</p>
          </div>
  
          {/* Received */}
          <div className="text-center">
            <p className="font-semibold text-gray-800">John</p>
            <p className="text-sm text-gray-600 border-t mt-1 pt-1">Received By</p>
          </div>
  
          {/* Authorized */}
          <div className="text-center">
            <p className="font-semibold text-gray-800">John</p>
            <p className="text-sm text-gray-600 border-t mt-1 pt-1">Authorized Signature</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MoneyReceipt;
  