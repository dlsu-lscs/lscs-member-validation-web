import lscsLogo from '../../assets/lscs.png'

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center p-8 bg-black text-white">
        <div className="flex flex-col items-center space-y-1.5">
          <img src={lscsLogo} alt="lscsLogo" className="w-36" />
          <h1 className="text-3xl font-bold">LSCS Member Validation</h1>
          <p className="opacity-50">Verify Student LSCS Membership Status</p>
          {/* <div className="py-3">
            <p>
              <span className="font-bold">User:</span> Max Benedict Chavez
            </p>
            <p>
              <span className="font-bold">Position:</span> Associate Vice
              President
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NavBar
