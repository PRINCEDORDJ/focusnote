import { Children } from 'react'
import {Element} from 'react-scroll'
const HowItWorks = () => {
    const Work = ({ children }) => (
        <div className='bg-green-800 shadow shadow-green-400 text-center flex flex-col h-60 gap-3 px-30 py-10 rounded-xl w-90'>
            {children}
        </div>
    )

  return (
    <Element name="How it Works">
      <section className="text-white flex gap-5 flex-col items-center justify-center bg-green-700 py-10">
        <h1 className="font-bold text-4xl">How it Works</h1>
        <div className="flex gap-10 max-lg:flex-col w-mdax justify-center inset-x-0 mx-3">
          <div>
            <Work>
              <h1 className="text-black bg-white rounded-lg text-center py-3">
                01
              </h1>
              <p>Add Note</p>
            </Work>
          </div>
          
          <div>
            <Work>
              <h1 className="text-black bg-white rounded-lg text-center py-3 px-2">
                02
              </h1>
              <p>Plan Study sessions</p>
            </Work>
          </div>
          <div>
            <Work>
              <h1 className="text-black bg-white rounded-lg text-center py-3 px-2">
                03
              </h1>
              <p>Set reminders for each study session</p>
            </Work>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default HowItWorks