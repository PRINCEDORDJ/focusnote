import {Twitter, Youtube, Facebook} from 'lucide-react'
const Footer = () => {
  return (
    <div className="py-5 px-35 text-white">
      <h1 className="text-3xl font-bold pb-3">FocusNote</h1>
      <div className='flex justify-between max-md:flex-col max-md:gap-5'>
        <div className="flex gap-3">
          <Twitter
            color="white"
            size={30}
            className="bg-blue-600 rounded"
          ></Twitter>
          <Youtube color="red" size={30} className="bg-red-300"></Youtube>
          <Facebook color="white" size={30} className="bg-blue-700"></Facebook>
              </div>
              
              <div>
                  <h2>Tel:</h2>
                  <p>(+233)593545726</p>
                  <h2>Email:</h2>
                  <p>princedordj@gmail.com</p>
              </div>
      </div>
    </div>
  );
}

export default Footer