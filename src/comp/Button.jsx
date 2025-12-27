
const Button = ({ children, onClick }) => {

    const InnerButton = () => (
        <div className="bg-gray-300 text-green-600 font-bold text-lg py-2 px-2 rounded-full cursor-pointer active:scale-95 hover:scale-101 transition delay-75">
            {children}
        </div>
    )

  return (
      <div>
          <button onClick={onClick}>
             <InnerButton />
          </button>


    </div>
  )
}

export default Button