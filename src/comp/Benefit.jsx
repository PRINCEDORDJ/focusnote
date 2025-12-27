import { Element } from 'react-scroll'
import {ListTodo, Notebook, Timer, BrainCircuit, Hourglass} from 'lucide-react'

const Benefit = () => {
    const Benefits = ({children}) => (
        <div className='flex items-center gap-2 flex-col flex-wrap w-90 bg-linear-to-b from-green-700 to-gray-900 rounded-lg py-2 px-4 hover:scale-105 hover:shadow-md hover:shadow-green-400 delay-300 transition'>
            {children}
        </div>
    )

  return (
    <Element name="Benefit">
      <section className="flex text-white gap-10 flex-col items-center justify-center py-20 bg-green-950  w-full">
        <h2 className="text-4xl font-bold">Why FocusNote?</h2>
        <div className="flex flex-wrap items-center justify-center max-lg:flex-col gap-10">
          <div>
            <Benefits>
              <ListTodo size={50} className="bg-gray-400 rounded-lg" />
              <h1 className="text-xl font-bold ">
                Structured Planning and Learning
              </h1>
              <p>Break down your coursework into clear, time‐boxed sessions.</p>
            </Benefits>
          </div>
          <div>
            <Benefits>
              <Notebook size={50} className="bg-gray-400 rounded-lg" />
              <h1 className="text-xl font-bold">Integrated Note-Taking</h1>
              <p>
                Jot down ideas, annotate readings, and embed highlights all in
                one workspace.
              </p>
            </Benefits>
          </div>
          <div>
            <Benefits>
              <BrainCircuit size={50} className="bg-gray-400 rounded-lg" />
              <h1 className="font-bold text-xl">Enhanced Focus & Flow</h1>
              <p>
                Eliminate context-switching by keeping your plan and notes side
                by side.
              </p>
            </Benefits>
          </div>
          <div>
            <Benefits>
              <Hourglass size={50} className="bg-gray-400 rounded-lg" />
              <h1 className="text-xl font-bold">Real-Time Progress Tracking</h1>
              <p>
                Gain instant insight into how much you’ve learned—and what’s
                left to master.
              </p>
            </Benefits>
          </div>
          <div>
            <Benefits>
              <Timer size={50} className="bg-gray-400 rounded-lg" />
              <h1 className='text-xl font-bold'>Improved Retention & Rview</h1>
              <p>
                Transform passive note-taking into active learning for better
                recall and exam readiness.
              </p>
            </Benefits>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Benefit