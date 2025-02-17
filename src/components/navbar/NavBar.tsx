import lscsLogo from '../../assets/lscs.png'

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center p-8 bg-black text-white">
        <div className="flex flex-col items-center">
          <img src={lscsLogo} alt="lscsLogo" className="w-36" />
          <h1 className="text-3xl font-bold">LSCS Member Validation</h1>
          <p className="opacity-75 py-1">
            Verify Student LSCS Membership Status
          </p>
        </div>
      </div>
    </>
  )
}

export default NavBar
